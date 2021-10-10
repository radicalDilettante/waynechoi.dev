(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{1592:function(x,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return p},default:function(){return v}});var t=n(7294),c=n(1163),i=n(7971),r=n.n(i),a=n(7084),l=n.n(a),o=["blog","about.txt"],s=[{cmd:"help",desc:"get help for commands",usage:"$ help"},{cmd:"ls",desc:"print a list of files and subdirectories",usage:"$ ls"},{cmd:"cd",desc:"change directory",usage:"$ cd blog\n    $ cd .."},{cmd:"cat",desc:"display contents of file",usage:"$ cat about(.txt)"},{cmd:"shutdown",desc:"shutdown cli mode",usage:"$ shutdown"}],u=function(x,e){var n,t=document.createElement("div");t.innerHTML=l()(e),null===(n=x.current)||void 0===n||n.appendChild(t)},d=function(x,e,n){_(x,"$ ".concat(n,": Cannot find path '").concat(e.split(n)[1].replaceAll(" ",""),"' because it does not exist."))},f=function(x,e,n,t){var c;switch(e){case"":!function(x,e){e.forEach((function(e){var n,t=document.createElement("span");t.innerText=e,null===(n=x.current)||void 0===n||n.appendChild(t)}))}(x,o);break;case"/blog":var i=document.createElement("table"),r=i.createTHead().insertRow(0);r.insertCell(0).innerText="file",r.insertCell(1).innerText="date",r.insertCell(2).innerText="subject",t.forEach((function(x,e){var n=i.insertRow(e+1);n.insertCell(0).innerText="".concat(e,".md"),n.insertCell(1).innerText="".concat(x.date),n.insertCell(2).innerText="".concat(x.title)})),null===(c=x.current)||void 0===c||c.appendChild(i);break;default:m(x,n)}},_=function(x,e,n){var t,c=document.createElement("p");c.innerText=e,n&&(c.style.marginTop="".concat(n,"px")),null===(t=x.current)||void 0===t||t.appendChild(c)},m=function(x,e){var n="$ ".concat(e,": command not found. See 'help'.");_(x,n)},h=n(5893),p=!0;function v(x){var e=x.posts,n=(0,c.useRouter)(),i=(0,t.useState)(""),a=i[0],l=i[1],o=(0,t.useState)(""),p=o[0],v=o[1],b=(0,t.useRef)(null),g=(0,t.useRef)(null),w=(0,t.useRef)(null),C=function(){var x;null===(x=b.current)||void 0===x||x.scrollTo(0,b.current.scrollHeight)},T=function(x){if(_(w,"guest: ~".concat(p,"$ ").concat(a),10),"clear"===x)!function(x){for(;null!==(e=x.current)&&void 0!==e&&e.firstChild;){var e,n;null===(n=x.current)||void 0===n||n.firstChild.remove()}}(w);else if("help"===x)!function(x){var e;_(x,"These are commands used in WayneChoi.dev:");var n=document.createElement("table"),t=n.createTHead().insertRow(0);t.insertCell(0).innerText="command",t.insertCell(1).innerText="description",t.insertCell(2).innerText="usage",s.forEach((function(x,e){var t=n.insertRow(e+1);t.insertCell(0).innerText="".concat(x.cmd),t.insertCell(1).innerText="".concat(x.desc),t.insertCell(2).innerText="".concat(x.usage)})),null===(e=x.current)||void 0===e||e.appendChild(n)}(w),C();else if("ls"===x)f(w,p,a,e),C();else if("shutdown"===x)n.push("/");else if("c"===x[0]&&"d"===x[1])!function(x,e,n,t){switch(e){case"":"cd blog"===t?n("/blog"):d(x,t,"cd");break;case"/blog":"cd.."===t||"cd .."===t?n(""):d(x,t,"cd")}}(w,p,v,x),C();else if("cat"===x.split(" ")[0]){var t,c=null===(t=b.current)||void 0===t?void 0:t.scrollHeight;!function(x,e,n,t){var c=t.split(" ")[1];switch(e){case"":"about"===c||"about.txt"===c?u(x,"Hi I am Wayne.\n\nI prefer readable code, and maintainable system. I value background more than tools. Love JS. Like TS.\n\nI make web services in the morning and at night, and build boats as a full-time boat builder. Born and raised in South Korea. Living in New Zealand."):d(x,t,"cat");break;case"/blog":var i=c.replaceAll(".md",""),r=parseInt(i);if(Number.isInteger(parseFloat(i)))if(r>=0||r<n.length){var a,l=document.createElement("h1");l.innerText=n[r].title,null===(a=x.current)||void 0===a||a.appendChild(l),_(x,""),u(x,n[r].content)}else d(x,t,"cat");else d(x,t,"cat")}}(w,p,e,x),c&&c>window.innerHeight&&(b.current.scrollBy(0,window.innerHeight-30),console.log("A"))}else m(w,a),C();l("")};return(0,t.useEffect)((function(){var x;null===(x=g.current)||void 0===x||x.focus()}),[]),(0,h.jsxs)("div",{className:r().container,ref:b,children:[(0,h.jsxs)("div",{className:r().contents,ref:w,children:[(0,h.jsxs)("pre",{className:r().boat,children:[(0,h.jsx)("code",{children:'\n                                       xxx\n                                      xxxxx\n                                     x xxx x\n                                    x  xxx  x\n                                   x   xxx   x\n                                  x    xxx    x\n                                 x     xxx     x\n                                x      xxx      x\n                               x       xxx       x\n                              x        xxx        x\n                             x         xxx         x\n                            x          xxx          x\n                           x           xxx           x\n                          x            xxx            x\n                         x             xxx             x\n                        x              xxx              x\n                       x               xxx               x\n                      x                xxx                x\n                     x                 xxx                 x                                 xxxxx\n                    x                  xxx                  x                                xxxxxxxxxxxx\n                   x                   xxx                   x                              xxxxxxxxx\n                  x                    xxx                    x                           xxxxxxxxxx\n                 x                     xxx                     x                         xxxxxxxxxx\n                x                      xxx                      x                        xxxxxxxxx\n               x                       xxx                       x                      xxxxxxxxx\n              x                        xxx                        x                     xxxxxxxxx\n             x                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                      xxxxxxx\n            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                              xxxxxxxxx\n                                      xxxx                                              xxxxxxxxx\n  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~\n~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._\n~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~-,._.,-~"^"~\n'}),(0,h.jsx)("code",{children:"\n\u250c-------------------------------------------------------------------------------------------------------\u2510\n\u2502 xx     xx  xxxxx  xx    xx xxx    xx xxxxxxx  xxxxxx xx   xx  xxxxxx  xx     xxxxxx  xxxxxxx xx    xx \u2502\n\u2502 xx     xx xx   xx  xx  xx  xxxx   xx xx      xx      xx   xx xx    xx xx     xx   xx xx      xx    xx \u2502\n\u2502 xx  x  xx xxxxxxx   xxxx   xx xx  xx xxxxx   xx      xxxxxxx xx    xx xx     xx   xx xxxxx   xx    xx \u2502\n\u2502 xx xxx xx xx   xx    xx    xx  xx xx xx      xx      xx   xx xx    xx xx     xx   xx xx       xx  xx  \u2502\n\u2502  xxx xxx  xx   xx    xx    xx   xxxx xxxxxxx  xxxxxx xx   xx  xxxxxx  xx  x  xxxxxx  xxxxxxx   xxxx   \u2502\n\u2514-------------------------------------------------------------------------------------------------------\u2518\n"})]}),(0,h.jsx)("p",{children:"Type 'help' and press 'enter' to get commands list."})]}),(0,h.jsxs)("form",{className:r().cmd,onSubmit:function(x){x.preventDefault(),T(a)},children:[(0,h.jsxs)("p",{className:r().user,children:["guest: ~",p,"$"]}),(0,h.jsx)("input",{type:"text",className:r().input,ref:g,autoFocus:!0,value:a,onChange:function(x){l(x.target.value.toLowerCase())}})]})]})}},7379:function(x,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return n(1592)}])},7971:function(x){x.exports={container:"cli_container__C_S6G",boat:"cli_boat__3tpMv",markdown:"cli_markdown__3Mzwi",contents:"cli_contents__1vUs8",cmd:"cli_cmd__EY-gU",user:"cli_user__dehP8",input:"cli_input__2EsqK"}}},function(x){x.O(0,[84,774,888,179],(function(){return e=7379,x(x.s=e);var e}));var e=x.O();_N_E=e}]);