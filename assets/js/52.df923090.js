(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{582:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"查看远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程分支"}},[s._v("#")]),s._v(" 查看远程分支")]),s._v(" "),t("p",[t("code",[s._v("git branch -a")])]),s._v(" "),t("h3",{attrs:{id:"删除远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),t("p",[t("code",[s._v("git push origin --delete <branchName>")])]),s._v(" "),t("h3",{attrs:{id:"暂存代码切分支或者拉取代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存代码切分支或者拉取代码"}},[s._v("#")]),s._v(" 暂存代码切分支或者拉取代码")]),s._v(" "),t("p",[t("code",[s._v("git stash")])]),s._v(" "),t("h3",{attrs:{id:"无merge记录拉取远程代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无merge记录拉取远程代码"}},[s._v("#")]),s._v(" 无merge记录拉取远程代码")]),s._v(" "),t("h5",{attrs:{id:"方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),t("p",[t("code",[s._v("git pull --rebase")])]),s._v(" "),t("h5",{attrs:{id:"方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),t("p",[t("code",[s._v("git stash && git pull && git stash pop")])]),s._v(" "),t("h3",{attrs:{id:"更换仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换仓库地址"}},[s._v("#")]),s._v(" 更换仓库地址")]),s._v(" "),t("h5",{attrs:{id:"方法一-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-2"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git remote -v  #查看远端地址\ngit remote #查看远端仓库名\ngit remote set-url origin https://gitee.com/xx/xx.git (新地址)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h5",{attrs:{id:"方法二-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-2"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git remote rm origin #删除远程的仓库\ngit remote add origin  https://gitee.com/xx/xx.git(新地址) #重新添加远程仓库\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"合并指定commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并指定commit"}},[s._v("#")]),s._v(" 合并指定commit")]),s._v(" "),t("h5",{attrs:{id:"合并单个commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并单个commit"}},[s._v("#")]),s._v(" 合并单个commit")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git cherry-pick XXX(commit) #单独合并某个commit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"合并多个commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并多个commit"}},[s._v("#")]),s._v(" 合并多个commit")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git cherry-pick AAA..BBB #合并 (AAA,BBB] 区间的commit记录,不包括AAA\n\ngit cherry-pick --continue #合并过程出现冲突会中断,解完冲突后需要使用--continue继续合并\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"取消rebase过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消rebase过程"}},[s._v("#")]),s._v(" 取消rebase过程")]),s._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("git rebase --abort\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"误删分支或记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#误删分支或记录"}},[s._v("#")]),s._v(" 误删分支或记录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git reflog #查看删除记录\ngit reset --hard XXX #切到当时的分支\ngit cherry-pick XXX #找回删除的提交记录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"其他tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他tips"}},[s._v("#")]),s._v(" 其他Tips")]),s._v(" "),t("h4",{attrs:{id:"npm-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-ci"}},[s._v("#")]),s._v(" npm ci")]),s._v(" "),t("ol",[t("li",[s._v("使用 npm ci 代替 npm install，这将强制执行 lockfile，避免它与 package.json 文件之间的不一致会导致错误")])]),s._v(" "),t("h4",{attrs:{id:"yarn-pnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-pnpm"}},[s._v("#")]),s._v(" yarn pnpm")]),s._v(" "),t("ol",[t("li",[s._v("使用pnpm(yarn) import 自动从现有的npm安装node_modules文件夹生成pnpm(yarn).lock,尽可能最大限度地减少lockfile与现有依赖关系树之间的差异")])]),s._v(" "),t("h4",{attrs:{id:"git-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-alias"}},[s._v("#")]),s._v(" git alias")]),s._v(" "),t("ol",[t("li",[s._v("window: git的安装目录下的etc/profile.d，在aliases.sh文件最后面加入以下即可(可根据自己需要自行更改)。")]),s._v(" "),t("li",[s._v("效果: 输入 gp 相当于 git pull")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("g")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull --rebase'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gb")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gba")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -a'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gco")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcom")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit -m'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git checkout'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git log'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git checkout dev'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcm")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git checkout master'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git diff'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gsh")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git stash'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gshp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git stash pop'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gst")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git status'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gm")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git merge'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gmd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git merge dev'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcld")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git clone --depth 1'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"gitconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitconfig"}},[s._v("#")]),s._v(" gitconfig")]),s._v(" "),t("ol",[t("li",[s._v("gitconfig文件位置: C:\\Users\\用户名.gitconfig。加入下列配置")]),s._v(" "),t("li",[s._v("效果: 可以美化git log输出")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pull\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pull --rebase\n  lg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" log --color --graph --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'")]),s._v(" --abbrev-commit")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);