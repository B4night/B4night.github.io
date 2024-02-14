import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as s,c as l,b as e,d as t,e as i,a as r}from"./app-Xw3WLV8o.js";const c={},d=e("h1",{id:"git-rebase-and-git-amend",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-rebase-and-git-amend"},[e("span",null,"git rebase and git amend")])],-1),m=e("p",null,"The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.",-1),h=e("ol",null,[e("li",null,"Set typora options")],-1),p=e("img",{alt:"",class:"bg km ms c",width:"700",height:"257",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),g=e("p",null,"2. download upgit",-1),u={href:"https://github.com/pluveto/upgit/releases",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"3. edit upgit config",-1),b=e("p",null,[t("Edit "),e("code",null,"~/.upgit.config.toml")],-1),_={href:"https://github.com/pluveto/upgit/blob/main/config.sample.toml",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"My config is below:",-1),w=e("pre",null,[e("code",null,`# UPGIT Config
default_uploader = "qcloudcos"
rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"
# Qcloudcos Uploader
[uploaders.qcloudcos]
host = "xxx.cos.ap-nanjing.myqcloud.com"
secret_id = "xxx"
secret_key = "xxx"
`)],-1),y=e("p",null,"4. Enter upgit path in typora and test",-1),v=e("img",{alt:"",class:"bg km ms c",width:"700",height:"257",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*auyE21JS0Thz3TNhKSjPQQ.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),k=e("img",{alt:"",class:"bg km ms c",width:"700",height:"613",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*W9Z01VIXQDRfKarMNElKyQ.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),T=e("p",null,"The image we insert to typora can be uploaded to tcyun(or other server) via upgit. All we need to do is several operations.",-1),I=e("ol",null,[e("li",null,"Set typora options")],-1),z=e("img",{alt:"",class:"bg km ms c",width:"700",height:"257",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*UuIaQuAngJHnLWTNmOWZFw.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),E=e("p",null,"2. download upgit",-1),q={href:"https://github.com/pluveto/upgit/releases",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"3. edit upgit config",-1),N=e("p",null,[t("Edit "),e("code",null,"~/.upgit.config.toml")],-1),Q={href:"https://github.com/pluveto/upgit/blob/main/config.sample.toml",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"My config is below:",-1),C=e("pre",null,[e("code",null,`# UPGIT Config
default_uploader = "qcloudcos"
rename = "{year}/{month}/upgit_{year}{month}{day}_{unix_ts}{ext}"
# Qcloudcos Uploader
[uploaders.qcloudcos]
host = "xxx.cos.ap-nanjing.myqcloud.com"
secret_id = "xxx"
secret_key = "xxx"
`)],-1),D=e("p",null,"4. Enter upgit path in typora and test",-1),H=e("img",{alt:"",class:"bg km ms c",width:"700",height:"257",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*auyE21JS0Thz3TNhKSjPQQ.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),W=e("img",{alt:"",class:"bg km ms c",width:"700",height:"613",loading:"lazy",role:"presentation",src:"https://miro.medium.com/v2/resize:fit:984/1*W9Z01VIXQDRfKarMNElKyQ.png",style:{"box-sizing":"inherit","vertical-align":"middle","background-color":"#ffffff",width:"680px","max-width":"100%",height:"auto"}},null,-1),L=r(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><p>Today I ran into a problem:</p><ol><li>At the code review, I have to edit file file_a</li><li>I have 2 commits, commit_a and commit_b. commit_b was committed later than commit_a</li><li>Each commit contains edits on one file</li><li>file_a is stores in the commit_a.</li></ol><p>Now I have a easier but complex solution:</p><pre><code>git reset HEAD~2
​
# then I edit the file_a and commit 2 times.
</code></pre><p>But now I am gonna introduce another solutoin.</p><h1 id="git-rebase-git-amend" tabindex="-1"><a class="header-anchor" href="#git-rebase-git-amend"><span>git rebase, git amend</span></a></h1><p><code>git checkout</code> to the target branch and then use follow commands</p><h1 id="git-rebase-i-head-2" tabindex="-1"><a class="header-anchor" href="#git-rebase-i-head-2"><span>git rebase -i HEAD~2</span></a></h1><p>After executing this command, the output would be:</p><pre><code>pick fafa10141f commit_a
pick de904ffd3f commit_b
​
# Rebase f5559105a2..de904ffd3f onto f5559105a2 (2 commands)
# 
​
&quot;&quot;&quot; explain
f5559105a2..72b0844c76:
​
This range identifies the commits involved in the rebase operation.
The first part, f5559105a2, represents the commit just before the first commit you are rebasing. In other words, it is not included in the rebase itself but serves as a reference point.
The second part, 72b0844c76, is the last commit you are rebasing.
So, f5559105a2..72b0844c76 includes all commits from right after f5559105a2 up to and including 72b0844c76.
onto f5559105a2:
​
The onto part indicates the base commit onto which the selected commits will be applied.
In this context, f5559105a2 is the base commit. All commits in the range f5559105a2..72b0844c76 are to be reapplied starting from this base commit.
&quot;&quot;&quot;
​
# Commands:
# p, pick &lt;commit&gt; = use commit
# r, reword &lt;commit&gt; = use commit, but edit the commit message
# e, edit &lt;commit&gt; = use commit, but stop for amending
# s, squash &lt;commit&gt; = use commit, but meld into previous commit
# f, fixup [-C | -c] &lt;commit&gt; = like &quot;squash&quot; but keep only the previous
#                    commit&#39;s log message, unless -C is used, in which case
#                    keep only this commit&#39;s message; -c is same as -C but
#                    opens the editor
# x, exec &lt;command&gt; = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)
# d, drop &lt;commit&gt; = remove commit
# l, label &lt;label&gt; = label current HEAD with a name
# t, reset &lt;label&gt; = reset HEAD to a label
# m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]
#         create a merge commit using the original merge commit&#39;s
#         message (or the oneline, if no original merge commit was
#         specified); use -c &lt;commit&gt; to reword the commit message
# u, update-ref &lt;ref&gt; = track a placeholder for the &lt;ref&gt; to be updated
#                       to this position in the new commits. The &lt;ref&gt; is
#                       updated at the end of the rebase
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
</code></pre><p>WE have to edit the first 2 lines into:</p><pre><code>e fafa10141f commit_a
pick de904ffd3f commit_b
​
# e means edit
</code></pre><p>Then we store this file and now we are at a temporary branch.</p><h1 id="edit-the-file" tabindex="-1"><a class="header-anchor" href="#edit-the-file"><span>Edit the file</span></a></h1><h1 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add"><span><code>git add .</code></span></a></h1><h1 id="git-commit-amend" tabindex="-1"><a class="header-anchor" href="#git-commit-amend"><span><code>git commit --amend</code></span></a></h1><p>This is used to modify the most recent commit.</p><p>Now that I have commits stored in the git repository, I have to apply more edits on it. So that after editing, I have to use <code>git add .</code> to add edited files. Then I have to use <code>git commit --amend</code> to add my changes to the stored commit.</p><h1 id="git-rebase-continue" tabindex="-1"><a class="header-anchor" href="#git-rebase-continue"><span><code>git rebase --continue</code></span></a></h1><p>This command means the <code>rebase</code> procedure is done and we are switched from a temporary branch to the branch which we want to change.</p><h1 id="git-push-force" tabindex="-1"><a class="header-anchor" href="#git-push-force"><span><code>git push --force</code></span></a></h1><p>This will push commits to remote and then overwrite the original commits because of <code>--force</code>.</p>`,23);function K(M,U){const o=a("ExternalLinkIcon");return s(),l("div",null,[d,m,h,p,g,e("p",null,[t("Download link: "),e("ins",null,[e("a",u,[t("https://github.com/pluveto/upgit/releases"),i(o)])])]),f,b,e("p",null,[t("config template: "),e("ins",null,[e("a",_,[t("https://github.com/pluveto/upgit/blob/main/config.sample.toml"),i(o)])])]),x,w,y,v,k,T,I,z,E,e("p",null,[t("Download link: "),e("ins",null,[e("a",q,[t("https://github.com/pluveto/upgit/releases"),i(o)])])]),A,N,e("p",null,[t("config template: "),e("ins",null,[e("a",Q,[t("https://github.com/pluveto/upgit/blob/main/config.sample.toml"),i(o)])])]),S,C,D,H,W,L])}const B=n(c,[["render",K],["__file","git_rebase_and_git_amend.html.vue"]]);export{B as default};
