function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const s=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');document.querySelector('button[type="submit"]');function d(e,t){return new Promise(((o,n)=>{setInterval((()=>{Math.random()>.3?o({position:e,delay:t,result:"Success! Value passed to resolve function"}):n({position:e,delay:t,result:"Error! Error passed to reject function"})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=parseInt(s.value),n=parseInt(u.value),r=parseInt(a.value);for(i=0;i<r;i++){const t=o+n*i;d(i,t).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`),console.log(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`),console.log(`❌ Rejected promise ${t} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.741c32f5.js.map
