(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("推荐安装 "),s("a",{attrs:{href:"https://sourceforge.net/projects/vcxsrv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VcXsrv Windows X Server"),s("OutboundLink")],1),t._v("，并以这样的配置打开：")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("如果出现了这样的小眼睛盯着你的鼠标看，那么说明我们的 XServer 安装成功了。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"gui-图形化窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-图形化窗口","aria-hidden":"true"}},[this._v("#")]),this._v(" GUI 图形化窗口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("虽然上面的方案有时候能够解决问题，但是最为深度整合的方案是：在 WSL 侧的 Linux 环境下安装 VSCode 并从 Linux 侧打开，这样就一定能保证 VSCode 使用的工具链全部是 WSL 侧工具链了。")]),this._v(" "),e("p",[this._v("方案：安装一个 XServer 来让 Linux 侧 GUI 程序有窗口显示。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-xserver-for-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-xserver-for-windows","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 XServer for windows")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/10/01/5bb1c9d292ce0.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在 WSL 中安装必要组件：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo apt install libgtk2.0-0 libxss1 libasound2\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置 WSL 参数：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("echo 'export DISPLAY=:0.0' >> .profile\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("安装一个小眼睛，看看图形窗口安装成功没有：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo apt install x11-apps -y && xeyes\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/10/01/5bb1cc9565f02.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在-wsl-侧安装-visual-studio-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-wsl-侧安装-visual-studio-code","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 WSL 侧安装 Visual Studio Code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("添加 Visual Studio Code 库：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg\nsudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg\nsudo sh -c 'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main\" > /etc/apt/sources.list.d/vscode.list'\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("安装 Visual Studio Code：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo apt update && sudo apt upgrade\nsudo apt install code\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("打开 XServer 窗口，在 WSL 终端执行 "),e("code",[this._v("code")]),this._v("，应该就可以看到 WSL 中的 VSCode 窗口启动了。")])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);