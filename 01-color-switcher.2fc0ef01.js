!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",""),n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.2fc0ef01.js.map