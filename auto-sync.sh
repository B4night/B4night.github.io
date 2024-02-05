#!/bin/bash
mkdir hexo

token=$(cat .env.local | grep "JOPLIN_TOKEN" | awk -F '=' '{print $2}')
sed -i "s/token:/token: ${token}/" mark-magic.config.yaml

npx mark-magic

hexo_dir="./hexo/source/_posts"
pushd $hexo_dir
for md_file in *.md; do
    file_name=$(cat $md_file | grep "title: " | cut -d ":" -f 2- | sed 's/"//g')
    timestamp_ms=$(cat $md_file | grep "date: " | awk -F ": " '{print $2}')
    timestamp_sec=$(($timestamp_ms / 1000))
    file_date=$(date -d "@$timestamp_sec" '+%Y-%m-%d')
    sed -i '/updated:/d; /date:/d; /abbrlink:/d; /layout:/d' $md_file
    sed -i "2i date: $file_date" $md_file
    sed -i "2i author: B4night" $md_file
    mv "$md_file" "${file_name}.md"
    # mv $md_file ../../../src/posts/"${file_name}".md
    # pwd
done

popd
sed -i "s/$token//" mark-magic.config.yaml
rm -rf hexo

npm run docs:build
git add .
today=$(date '+%Y-%m-%d')
git commit -s -m "update ${today}"
git push
