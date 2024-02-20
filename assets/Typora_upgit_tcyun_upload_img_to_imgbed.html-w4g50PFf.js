import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as a,c as s,b as t,d as o,e as n}from"./app-pGZzqME6.js";const p={},c=t("h1",{id:"typora-upgit-tcyun-upload-img-to-imgbed",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#typora-upgit-tcyun-upload-img-to-imgbed"},[t("span",null,"Typora+upgit+tcyun: upload img to imgbed")])],-1),u=t("p",null,"The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.",-1),r=t("ol",null,[t("li",null,"Set typora options")],-1),g=t("figure",null,[t("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png",alt:"image-20240205132414965",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image-20240205132414965")],-1),d=t("ol",{start:"2"},[t("li",null,"download upgit")],-1),_={href:"https://github.com/pluveto/upgit/releases",target:"_blank",rel:"noopener noreferrer"},m=t("ol",{start:"3"},[t("li",null,"edit upgit config")],-1),h=t("p",null,[o("Edit "),t("code",null,"~/.upgit.config.toml")],-1),f={href:"https://github.com/pluveto/upgit/blob/main/config.sample.toml",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"My config is below:",-1),b=t("pre",null,[t("code",null,`# UPGIT Config

default_uploader = "qcloudcos"

rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"

# Qcloudcos Uploader
[uploaders.qcloudcos]
host = "xxx.cos.ap-nanjing.myqcloud.com"
secret_id = "xxx"
secret_key = "xxx"
`)],-1),x=t("p",null,"4. Enter upgit path in typora and test",-1),v=t("figure",null,[t("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110679.png",alt:"image-20240205132439704",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image-20240205132439704")],-1),k=t("figure",null,[t("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110689.png",alt:"image-20240205132449714",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image-20240205132449714")],-1);function j(q,T){const e=l("ExternalLinkIcon");return a(),s("div",null,[c,u,r,g,d,t("p",null,[o("Download link: "),t("a",_,[o("https://github.com/pluveto/upgit/releases"),n(e)])]),m,h,t("p",null,[o("config template: "),t("a",f,[o("https://github.com/pluveto/upgit/blob/main/config.sample.toml"),n(e)])]),y,b,x,v,k])}const z=i(p,[["render",j],["__file","Typora_upgit_tcyun_upload_img_to_imgbed.html.vue"]]);export{z as default};
