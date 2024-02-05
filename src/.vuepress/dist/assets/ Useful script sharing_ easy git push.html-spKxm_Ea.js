import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as n,b as e,d as t}from"./app-dTsIfBC7.js";const i={},a=e("p",null,[t("When dealing with github repositories, it’s often the case that we should use "),e("code",null,'git add .; git commit -s -m ""; git push'),t(" to push our changes.")],-1),c=e("p",null,"So that I am gonna share a simple shell script that could do some simple git operations.",-1),l=e("pre",null,[e("code",null,`acp() {
    if [ ! $# -eq 1 ]; then
        echo "Invalid number of arguments. Usage: acp \\"commit message\\""
        return 1
    fi
    git add .
    git commit -s -m "$1"
    git push
}
`)],-1),r=e("p",null,[t("Just add it to "),e("code",null,"~/.bashrc"),t(" and source it.")],-1),_=[a,c,l,r];function h(u,d){return o(),n("div",null,_)}const g=s(i,[["render",h],["__file"," Useful script sharing_ easy git push.html.vue"]]);export{g as default};
