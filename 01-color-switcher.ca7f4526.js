const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body");let o=null;e.addEventListener("click",(()=>{e.disabled=!0,o=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;l.style.backgroundColor=`${e}`,console.log(e)}),1e3)})),t.addEventListener("click",(()=>{clearInterval(o),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ca7f4526.js.map