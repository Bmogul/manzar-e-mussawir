(()=>{const n=document.getElementById("navbar");let s=window.scrollY,t=0;window.addEventListener("scroll",(()=>{console.log(window.scrollY);let e=window.scrollY;e>s?t=0:t+=s-e,e<=80||t>100?(n.style.animation="fadeIn 0.5s",n.classList.remove("transparent")):(n.style.animation="fadeOut 0.5s",n.classList.add("transparent")),s=e}))})();