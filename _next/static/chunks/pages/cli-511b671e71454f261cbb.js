(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{8402:function(x,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f},default:function(){return p}});var t=n(7294),r=n(1163),i=n(9293),s=n.n(i),c=n(8216),a=n(5997),o=n(2809),l=n(7084),u=n.n(l),d=function(){function x(e,n,t){(0,c.Z)(this,x),(0,o.Z)(this,"contentsContainer",void 0),(0,o.Z)(this,"curDir",void 0),(0,o.Z)(this,"posts",void 0),(0,o.Z)(this,"RootFileList",void 0),(0,o.Z)(this,"commandList",void 0),(0,o.Z)(this,"about",void 0),this.contentsContainer=e,this.curDir=t,this.posts=n,this.RootFileList=["blog","about.txt"],this.commandList=[{cmd:"help",desc:"get help for commands",usage:"$ help"},{cmd:"ls",desc:"print a list of files and subdirectories",usage:"$ ls"},{cmd:"cd",desc:"change directory",usage:"$ cd blog\n        $ cd .."},{cmd:"cat",desc:"display contents of file",usage:"$ cat about(.txt)"},{cmd:"clear",desc:"clear the terminal screen",usage:"$ clear"},{cmd:"shutdown",desc:"shutdown cli mode",usage:"$ shutdown"}],this.about="Hi I am Wayne.\n\nI prefer readable code, and maintainable system. I value background more than tools. Love JavaScript. Like TypeScript.\n\nI make web services in the morning and at night, and build boats as a full-time boat builder. Born and raised in South Korea. Living in New Zealand."}return(0,a.Z)(x,[{key:"clear",value:function(){for(;this.contentsContainer.firstChild;)this.contentsContainer.firstChild.remove()}},{key:"help",value:function(){this.render("These are commands used in WayneChoi.dev:");var x=document.createElement("table"),e=x.createTHead().insertRow(0);e.insertCell(0).innerText="command",e.insertCell(1).innerText="description",e.insertCell(2).innerText="usage",this.commandList.forEach((function(e,n){var t=x.insertRow(n+1);t.insertCell(0).innerText="".concat(e.cmd),t.insertCell(1).innerText="".concat(e.desc),t.insertCell(2).innerText="".concat(e.usage)})),this.contentsContainer.appendChild(x)}},{key:"ls",value:function(){switch(this.curDir){case"":this.renderList(this.RootFileList);break;case"/blog":var x=document.createElement("table"),e=x.createTHead().insertRow(0);e.insertCell(0).innerText="file",e.insertCell(1).innerText="date",e.insertCell(2).innerText="subject",this.posts.forEach((function(e,n){var t=x.insertRow(n+1);t.insertCell(0).innerText="".concat(n,".md"),t.insertCell(1).innerText="".concat(e.date),t.insertCell(2).innerText="".concat(e.title)})),this.contentsContainer.appendChild(x)}}},{key:"cd",value:function(x){switch(this.curDir){case"":"cd blog"===x?this.curDir="/blog":this.pathError(x,"cd");break;case"/blog":"cd.."===x||"cd .."===x?this.curDir="":this.pathError(x,"cd")}}},{key:"cat",value:function(x){var e=x.split(" ")[1];switch(this.curDir){case"":"about"===e||"about.txt"===e?this.renderMarkdown(this.about):this.pathError(x,"cat");break;case"/blog":var n=e.replaceAll(".md",""),t=parseInt(n);if(Number.isInteger(parseFloat(n)))if(t>=0&&t<this.posts.length){var r=document.createElement("h1");r.innerText=this.posts[t].title,this.contentsContainer.appendChild(r),this.render(""),this.renderMarkdown(this.posts[t].content)}else this.pathError(x,"cat");else this.pathError(x,"cat")}}},{key:"render",value:function(x,e){var n=document.createElement("p");n.innerText=x,e&&(n.style.marginTop="".concat(e,"px")),this.contentsContainer.appendChild(n)}},{key:"renderErrorMsg",value:function(x){var e="$ ".concat(x,": command not found. See 'help'.");this.render(e)}},{key:"renderList",value:function(x){var e=this;x.forEach((function(x){var n=document.createElement("span");n.innerText=x,e.contentsContainer.appendChild(n)}))}},{key:"renderMarkdown",value:function(x){var e=document.createElement("div");e.innerHTML=u()(x),this.contentsContainer.appendChild(e)}},{key:"pathError",value:function(x,e){this.render("$ ".concat(e,": Cannot find path '").concat(x.split(e)[1].replaceAll(" ",""),"' because it does not exist."))}}]),x}(),h=n(5893),f=!0;function p(x){var e=x.posts,n=(0,r.useRouter)(),i=(0,t.useState)(""),c=i[0],a=i[1],o=(0,t.useState)(""),l=o[0],u=o[1],f=(0,t.useRef)(null),p=(0,t.useRef)(null),m=(0,t.useRef)(null),_=m.current,v=function(){var x;null===(x=f.current)||void 0===x||x.scrollTo(0,f.current.scrollHeight)},b=new d(_,e,l);return(0,t.useEffect)((function(){var x;null===(x=p.current)||void 0===x||x.focus()}),[]),(0,h.jsxs)("div",{className:s().container,ref:f,children:[(0,h.jsxs)("div",{className:s().contents,ref:m,children:[(0,h.jsxs)("pre",{className:s().boat,children:[(0,h.jsx)("code",{children:'\n                                          xxx\n                                         xxxxx\n                                        x xxx x\n                                       x  xxx  x\n                                      x   xxx   x\n                                     x    xxx    x\n                                    x     xxx     x\n                                   x      xxx      x\n                                  x       xxx       x\n                                 x        xxx        x\n                                x         xxx         x\n                               x          xxx          x\n                              x           xxx           x\n                             x            xxx            x\n                            x             xxx             x\n                           x              xxx              x\n                          x               xxx               x\n                         x                xxx                x\n                        x                 xxx                 x                               xxxxxx\n                       x                  xxx                  x                              x     xxxxxx\n                      x                   xxx                   x                            x      x\n                     x                    xxx                    x                         x       x\n                    x                     xxx                     x                       x       x\n                   x                      xxx                      x                      x      x\n                  x                       xxx                       x                    x      x\n                 x                        xxx                        x                   x       x\n                x                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    x    x\n               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                             x    x\n                                          xxx                                            x    x\n     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n      x                                                                                       x\n       x                                                                                     x\n        x                                                                                   x\n~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-\n~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"\n~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-\n'}),(0,h.jsx)("code",{children:"\n\u250c-------------------------------------------------------------------------------------------------------\u2510\n\u2502 xx     xx  xxxxx  xx    xx xxx    xx xxxxxxx  xxxxxx xx   xx  xxxxxx  xx     xxxxxx  xxxxxxx xx    xx \u2502\n\u2502 xx     xx xx   xx  xx  xx  xxxx   xx xx      xx      xx   xx xx    xx xx     xx   xx xx      xx    xx \u2502\n\u2502 xx  x  xx xxxxxxx   xxxx   xx xx  xx xxxxx   xx      xxxxxxx xx    xx xx     xx   xx xxxxx   xx    xx \u2502\n\u2502 xx xxx xx xx   xx    xx    xx  xx xx xx      xx      xx   xx xx    xx xx     xx   xx xx       xx  xx  \u2502\n\u2502  xxx xxx  xx   xx    xx    xx   xxxx xxxxxxx  xxxxxx xx   xx  xxxxxx  xx  x  xxxxxx  xxxxxxx   xxxx   \u2502\n\u2514-------------------------------------------------------------------------------------------------------\u2518\n"})]}),(0,h.jsx)("p",{children:"Type 'help' and press 'enter' to get commands list."})]}),(0,h.jsxs)("form",{className:s().cmd,onSubmit:function(x){x.preventDefault(),function(x){if(b.render("guest: ~".concat(b.curDir,"$ ").concat(c),10),"clear"===x)b.clear();else if("help"===x)b.help(),v();else if("ls"===x)b.ls(),v();else if("shutdown"===x)n.push("/");else if("c"===x[0]&&"d"===x[1])b.cd(x),u(b.curDir),v();else if("cat"===x.split(" ")[0]){var e,t=null===(e=f.current)||void 0===e?void 0:e.scrollHeight;b.cat(x),t&&t>window.innerHeight&&f.current.scrollBy(0,window.innerHeight-50)}else b.renderErrorMsg(c),v();a("")}(c)},children:[(0,h.jsxs)("p",{className:s().user,children:["guest: ~",l,"$"]}),(0,h.jsx)("input",{type:"text",className:s().input,ref:p,autoFocus:!0,value:c,onChange:function(x){a(x.target.value.toLowerCase())}})]})]})}},7379:function(x,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return n(8402)}])},9293:function(x){x.exports={container:"cli_container__1OnSr",boat:"cli_boat__WHCcj",markdown:"cli_markdown__4JWrH",contents:"cli_contents__1MYUU",cmd:"cli_cmd__v-2IF",user:"cli_user__30Fjc",input:"cli_input__1lXGt"}},8216:function(x,e,n){"use strict";function t(x,e){if(!(x instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return t}})},5997:function(x,e,n){"use strict";function t(x,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(x,t.key,t)}}function r(x,e,n){return e&&t(x.prototype,e),n&&t(x,n),x}n.d(e,{Z:function(){return r}})}},function(x){x.O(0,[84,774,888,179],(function(){return e=7379,x(x.s=e);var e}));var e=x.O();_N_E=e}]);