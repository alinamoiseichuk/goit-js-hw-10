import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let s,n;o.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],n=s-new Date,n<1?h.error({color:"red",position:"topRight",message:"Please choose a date in the future"}):o.disabled=!1}};m("#datetime-picker",g);function r(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));o.addEventListener("click",t=>{const a=setInterval(()=>{if(n=s-new Date,c.disabled=!0,o.disabled=!0,n<0){o.disabled=!0,c.disabled=!1,clearInterval(a);return}const e=r(n);S.textContent=e.days.toString().padStart(2,"0"),y.textContent=e.hours.toString().padStart(2,"0"),f.textContent=e.minutes.toString().padStart(2,"0"),p.textContent=e.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
