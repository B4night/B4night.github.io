#!/bin/zsh
mkdir hexo

token=$(cat .env.local | grep "JOPLIN_TOKEN" | awk -F '=' '{print $2}')
echo $token

if [[ "$OSTYPE" =~ "darwin" ]]; then
    SED="gsed"
else
    SED="sed"
fi

$SED -i "s/token:/token: ${token}/" mark-magic.config.yaml

npx mark-magic

hexo_dir="./hexo/source/_posts"
pushd $hexo_dir
for md_file in *.md; do
    file_name=$(cat $md_file | grep "title: " | cut -d ":" -f 2- | $SED 's/"//g; s/^ //')
    timestamp_ms=$(cat $md_file | grep "date: " | awk -F ": " '{print $2}')
    timestamp_sec=$(($timestamp_ms / 1000))
    if [[ "$OSTYPE" =~ "darwin" ]]; then
        file_date=$(date -r "$timestamp_sec" '+%Y-%m-%d')
    else    
        file_date=$(date -d "@$timestamp_sec" '+%Y-%m-%d')
    fi

    category_to_remove=$(echo $file_name | $SED 's/:/!/g; s/.//g; s/?//g')
    # echo "$category_to_remove"
    $SED -i "/$category_to_remove\.md/d" $md_file
    $SED -i '/updated:/d; /date:/d; /abbrlink:/d; /layout:/d' $md_file
    $SED -i "2i date: $file_date" $md_file
    $SED -i "2i author: B4night" $md_file

    file_name=$(echo $file_name | $SED 's/ /_/g')
    # mv "$md_file" "${file_name}.md"
    mv $md_file ../../../src/posts/"${file_name}".md
    # pwd
done

popd
$SED -i "s/$token//" mark-magic.config.yaml
rm -rf hexo

npm run docs:build
git add .
today=$(date '+%Y-%m-%d')
git commit -s -m "update ${today}"
git push
