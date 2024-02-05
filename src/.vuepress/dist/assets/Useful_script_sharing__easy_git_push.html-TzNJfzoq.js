import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,b as s,d as e}from"./app-iuo8cYug.js";const a={},o=s("h1",{id:"useful-script-sharing-easy-git-push",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#useful-script-sharing-easy-git-push"},[s("span",null,"Useful script sharing: easy git push")])],-1),c=s("p",null,[e("When dealing with github repositories, it’s often the case that we should use "),s("code",null,'git add .; git commit -s -m ""; git push'),e(" to push our changes.")],-1),r=s("p",null,"So that I am gonna share a simple shell script that could do some simple git operations.",-1),h=s("pre",null,[s("code",null,`acp() {
    if [ ! $# -eq 1 ]; then
        echo "Invalid number of arguments. Usage: acp \\"commit message\\""
        return 1
    fi
    git add .
    git commit -s -m "$1"
    git push
}
`)],-1),l=s("p",null,[e("Just add it to "),s("code",null,"~/.bashrc"),e(" and source it.")],-1),u=[o,c,r,h,l];function _(d,p){return n(),i("div",null,u)}const f=t(a,[["render",_],["__file","Useful_script_sharing__easy_git_push.html.vue"]]);export{f as default};
