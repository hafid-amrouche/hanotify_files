"use strict";(self.webpackChunkhanotify_store=self.webpackChunkhanotify_store||[]).push([[4741],{6769:(e,s,r)=>{r.d(s,{A:()=>u});var t=r(5043),a=r(8130),c=r(5243),i=r(6367),n=r(3216);const l=()=>{const e=(0,n.Zp)();return()=>{const s=window.location.pathname.split("/").slice(0,-1).join("/");e(s)}};var o=r(4328),d=(r(4014),r(579));const m=(0,t.memo)((e=>{let{fullscreen:s=!1}=e;const{currentImage:r,setCurrentImage:m,productData:u}=(0,a.useProductContext)(),{galleryImages:x}=u,p=x.map(((e,s)=>({url:e,id:s}))),h=l(),g=(0,n.Zp)();(0,t.useEffect)((()=>{s?(document.getElementById("image-slider__container").classList.remove("p-sticky-md"),document.documentElement.style.overflow="hidden"):(document.getElementById("image-slider__container").classList.add("p-sticky-md"),document.documentElement.style.removeProperty("overflow"))}),[s]);const{language:f}=(0,c.o)(),v="ar"===f,j=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=j.current,s=document.getElementById("small-image-".concat(r.id));if(s&&e){const r=e.offsetWidth,t=s.offsetWidth,a=s.offsetLeft-r/2+t/2;e.scroll({left:a,behavior:"smooth"})}}),[r]);const y=(0,t.useRef)();return(0,d.jsxs)("div",{id:"image-slider",className:"image-slider ".concat(s?"fullscreen":""),children:[(0,d.jsxs)("div",{className:"slides",children:[(0,d.jsx)(o.RC,{className:"mySwiper",onClick:()=>!s&&g("gallery"),onSlideChange:e=>{m(p.find((s=>s.id===e.activeIndex)))},ref:y,initialSlide:r.id,grabCursor:!0,style:{height:"100%",width:"100%"},children:p.map(((e,r)=>(0,d.jsx)(o.qr,{className:"".concat(s?"full-screen-image":""," flex-shrink-0"),style:{backgroundImage:"url(".concat(e.url,")"),height:"100%",width:"100%",backgroundSize:s?void 0:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",flexShrink:0}},r)))}),(0,d.jsx)("button",{className:v?" next":"prev",onClick:()=>{const e=p.findIndex((e=>e.id===r.id)),s=e>=1?e-1:0;m(p[s]),y.current.swiper.slideTo(s)},children:"\u276e"}),(0,d.jsx)("button",{className:v?" prev":"next",onClick:()=>{const e=p.findIndex((e=>e.id===r.id)),s=e<=p.length-2?e+1:e;m(p[s]),y.current.swiper.slideTo(s)},children:"\u276f"}),(0,d.jsx)("i",{className:(s?"fa-solid fa-compress":"fa-solid fa-expand")+" fullscreen-btn",onClick:()=>{s?h():g("gallery")}})]}),(0,d.jsx)("hr",{style:{width:"100%",borderTop:0},className:"border-color-primary-fiding"}),(0,d.jsx)("div",{className:"dots d-flex flex-nowrap overflow-x-auto",ref:j,children:p.map((e=>(0,d.jsx)("div",{className:"".concat(e.id===r.id?"active":""),style:{borderRadius:"var(--border-radius-1)"},id:"small-image-".concat(e.id),children:(0,d.jsx)(i.A,{children:(0,d.jsx)("span",{className:"dot",onClick:()=>{return s=e.id,m(p.find((e=>e.id===s))),void y.current.swiper.slideTo(s);var s},style:{backgroundImage:"url(".concat(e.url,")")}})})},e.id)))})]})})),u=m},419:(e,s,r)=>{r.r(s),r.d(s,{default:()=>f});var t=r(5043),a=r(6769),c=r(7922),i=r(2298),n=r(8130),l=r(149),o=r(579);const d=(0,t.memo)((()=>{const{productData:e}=(0,n.useProductContext)();return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{style:{lineHeight:1.4},children:[e.title,e.discount&&(0,o.jsx)("span",{style:{backgroundColor:"var(--primary-color)",color:"var(--background-color)",padding:"0 6px",margin:"0 8px",fontSize:14,whiteSpace:"nowrap",borderRadius:"var(--border-radius-2)"},children:e.discount})]}),e.miniDescription&&(0,o.jsx)("p",{style:{lineHeight:1.4,marginTop:8},children:e.miniDescription}),(0,o.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[e.price?(0,o.jsxs)("h2",{className:"number",style:{color:"var(--primary-color)"},children:[e.price," ",(0,l.cv)("DA")]}):"",e.originalPrice?(0,o.jsxs)("h3",{className:"old-price",children:[e.originalPrice," ",(0,l.cv)("DA")]}):"",!e.price&&!e.originalPrice&&(0,o.jsx)("h3",{style:{color:"red"},children:(0,l.cv)("No price available !")})]})]})}));var m=r(9141),u=r(6367),x=r(760),p=r(3216),h=r(4555);const g=()=>{const{productData:e,setProductData:s}=(0,n.useProductContext)();return(0,o.jsx)(c.A,{productData:e,setProductData:s})},f=()=>{const{productData:e}=(0,n.useProductContext)();(0,x.A)();const{id:s}=(0,p.g)();return(0,h.A)(s),(0,o.jsxs)("div",{className:"d-flex px-md-4 gap-md-3",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6 px-md-4",children:[(0,o.jsx)(o.Fragment,{children:e.galleryImages.length>0&&(0,o.jsx)("div",{style:{borderRadius:"var(--border-radius-2)",overflow:"hidden"},className:"p-sticky-md",id:"image-slider__container",children:(0,o.jsx)(a.A,{})})}),(0,o.jsx)(o.Fragment,{children:0===e.galleryImages.length&&(0,o.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{aspectRatio:1,maxWidth:"100%",maxHeight:"calc(100vh - 80px)",margin:"auto"},children:(0,o.jsx)("h3",{style:{color:"grey"},children:(0,l.cv)("No image was provider")})})})]}),(0,o.jsxs)("div",{className:"col-12 col-md-6 px-2 px-lg-4 d-flex flex-column gap-1 p-1 mt-1 px-md-4",children:[(0,o.jsx)(d,{}),e.pricesAndImagesList.length>0&&(0,o.jsx)(g,{}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)(i.A,{productData:e})}),e.richText&&(0,o.jsx)(u.A,{className:"p-1 my-4 sun-editor-editable",dangerouslySetInnerHTML:{__html:e.richText}})]}),(0,o.jsxs)(u.A,{className:"flex-1",children:[(0,o.jsx)("hr",{className:"my-3 border"}),(0,o.jsx)(m.A,{})]})]})}},9141:(e,s,r)=>{r.d(s,{A:()=>o});var t=r(5043),a=r(8130),c=r(6596),i=r(1634),n=r(4113),l=r(579);const o=()=>{const[e,s]=(0,t.useState)(null),{productData:r}=(0,a.useProductContext)(),[o,d]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch(i.y+"/product/get-related-products?product_id="+r.productId,{});if(!e.ok)return console.log("Error: ".concat(e.status," ").concat(e.statusText)),void d(!1);s(await e.json()),d(!1)}catch(e){console.log(e),d(!1)}})()}),[]),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2 p-2 justify-content-center col-12",children:[!o&&e&&e.map((e=>(0,l.jsx)(c.A,{product:e},e.index))),o&&(0,l.jsx)(n.A,{diam:160,color:"var(--primary-color)"})]})}}}]);
//# sourceMappingURL=4741.0c2d9f00.chunk.js.map