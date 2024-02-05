import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as a,c as s,b as o,d as t,e as n}from"./app-dTsIfBC7.js";const c={},p=o("p",null,"The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.",-1),r=o("ol",null,[o("li",null,"Set typora options")],-1),u=o("figure",null,[o("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110655.png",alt:"image-20240205132414965",tabindex:"0",loading:"lazy"}),o("figcaption",null,"image-20240205132414965")],-1),_=o("ol",{start:"2"},[o("li",null,"download upgit")],-1),g={href:"https://github.com/pluveto/upgit/releases",target:"_blank",rel:"noopener noreferrer"},d=o("ol",{start:"3"},[o("li",null,"edit upgit config")],-1),m=o("p",null,[t("Edit "),o("code",null,"~/.upgit.config.toml")],-1),h={href:"https://github.com/pluveto/upgit/blob/main/config.sample.toml",target:"_blank",rel:"noopener noreferrer"},f=o("p",null,"My config is below:",-1),b=o("pre",null,[o("code",null,`# UPGIT Config

default_uploader = "qcloudcos"

rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"

# Qcloudcos Uploader
[uploaders.qcloudcos]
host = "xxx.cos.ap-nanjing.myqcloud.com"
secret_id = "xxx"
secret_key = "xxx"
`)],-1),x=o("p",null,"4. Enter upgit path in typora and test",-1),y=o("figure",null,[o("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110679.png",alt:"image-20240205132439704",tabindex:"0",loading:"lazy"}),o("figcaption",null,"image-20240205132439704")],-1),v=o("figure",null,[o("img",{src:"https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240205_1707110689.png",alt:"image-20240205132449714",tabindex:"0",loading:"lazy"}),o("figcaption",null,"image-20240205132449714")],-1);function k(j,q){const e=i("ExternalLinkIcon");return a(),s("div",null,[p,r,u,_,o("p",null,[t("Download link: "),o("a",g,[t("https://github.com/pluveto/upgit/releases"),n(e)])]),d,m,o("p",null,[t("config template: "),o("a",h,[t("https://github.com/pluveto/upgit/blob/main/config.sample.toml"),n(e)])]),f,b,x,y,v])}const T=l(c,[["render",k],["__file"," Typora_upgit_tcyun_ upload img to imgbed.html.vue"]]);export{T as default};
