import os
import shutil
from datetime import datetime
import re
import subprocess

# Create hexo directory
os.makedirs("hexo", exist_ok=True)

# Extract token
token = ''
with open('.env.local', 'r', encoding='utf-8') as file:
    for line in file:
        if 'JOPLIN_TOKEN' in line:
            token = line.strip().split('=')[1]
            break

# Replace token in config file
config_file_path = "mark-magic.config.yaml"
with open(config_file_path, 'r', encoding='utf-8') as file:
    config_content = file.read()

config_content = re.sub(r"token:.*", f"token: {token}", config_content)

with open(config_file_path, 'w', encoding='utf-8') as file:
    file.write(config_content)

# Execute mark-magic
subprocess.run(["npx", "mark-magic"], check=True, shell=True)

# Process Markdown files
hexo_dir = "./hexo/source/_posts"
os.chdir(hexo_dir)

for md_file in os.listdir("."):
    if md_file.endswith(".md"):
        with open(md_file, "r", encoding='utf-8') as file:
            content = file.readlines()

        file_name = ""
        timestamp_sec = 0
        new_content = []
        for line in content:
            if "title:" in line:
                file_name = re.search(r"title: ?\"?([^\"\n]+)\"?", line).group(1).replace(' ', '_')
                illegal_chars = r'[\\/:*?"<>|]'
                file_name = re.sub(illegal_chars, '', file_name)
            if "date:" in line:
                timestamp_ms = re.search(r"date: (\d+)", line).group(1)
                timestamp_sec = int(timestamp_ms) // 1000
                file_date = datetime.fromtimestamp(timestamp_sec).strftime('%Y-%m-%d')
                new_content.append(f"date: {file_date}\n")
            elif not re.match(r"(updated:|abbrlink:|layout:)", line):
                new_content.append(line)
        
        # Add author at the second line
        new_content.insert(1, "author: B4night\n")

        with open(md_file, "w", encoding='utf-8') as file:
            file.writelines(new_content)

        # Move and rename the file
        if file_name:
            target_path = os.path.join("../../../src/posts", f"{file_name}.md")
            shutil.move(md_file, target_path)

os.chdir("../../../")
# Remove token from config
with open(config_file_path, 'r', encoding='utf-8') as file:
    config_content = file.read()

config_content = config_content.replace(f"token: {token}", "token:")

with open(config_file_path, 'w', encoding='utf-8') as file:
    file.write(config_content)

shutil.rmtree("hexo")

# Build documentation, commit, and push changes
subprocess.run(["npm", "run", "docs:build"], check=True, shell=True)
subprocess.run(["git", "add", "."], check=True, shell=True)
today = datetime.now().strftime('%Y-%m-%d')
subprocess.run(["git", "commit", "-s", "-m", f"update {today}"], check=True, shell=True)
subprocess.run(["git", "push"], check=True, shell=True)