"use strict";(self.webpackChunkhanotify_store=self.webpackChunkhanotify_store||[]).push([[264],{3123:(e,r,s)=>{s.r(r),s.d(r,{default:()=>N});var t=s(5043),c=s(8130),i=s(5243),a=s(579);const o=e=>{let{children:r,...s}=e;const[c,i]=(0,t.useState)(!1),o=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const e=()=>{if(o.current){o.current.getBoundingClientRect().bottom<window.innerHeight+20&&i(!0)}};return window.addEventListener("scroll",e),window.addEventListener("resize",e),e(),c&&(window.removeEventListener("scroll",e),window.removeEventListener("resize",e)),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[c]),(0,a.jsx)("div",{ref:o,...s,children:c?r:null})},l=(0,t.memo)((()=>{const{currentImage:e,setCurrentImage:r,productData:s}=(0,c.G)(),{galleryImages:l}=s,n=l.map(((e,r)=>({url:e,id:r}))),[d,m]=(0,t.useState)(!1);(0,t.useEffect)((()=>{d?(document.getElementById("image-slider__container").classList.remove("p-sticky-md"),document.documentElement.style.overflow="hidden"):(document.getElementById("image-slider__container").classList.add("p-sticky-md"),document.documentElement.style.removeProperty("overflow"))}),[d]);const{language:u}=(0,i.o)(),x="ar"===u;return(0,a.jsxs)("div",{id:"image-slider",className:"image-slider ".concat(d?"fullscreen":""),children:[(0,a.jsxs)("div",{className:"slides",children:[(0,a.jsx)(o,{className:"slide cursor-pointer ".concat(d?"full-screen-image":""),style:{backgroundImage:"url(".concat(e.url,")")},onClick:()=>m(!0),id:"gallery-image-container"}),(0,a.jsx)("button",{className:x?" next":"prev",onClick:()=>{let s=(n.findIndex((r=>r.id===e.id))+n.length-1)%n.length;r(n[s])},children:"\u276e"}),(0,a.jsx)("button",{className:x?" prev":"next",onClick:()=>{const s=(n.findIndex((r=>r.id===e.id))+1)%n.length;r(n[s])},children:"\u276f"}),(0,a.jsx)("i",{className:(d?"fa-solid fa-expand":"fa-solid fa-compress")+" fullscreen-btn",onClick:()=>{m((e=>!e))}})]},e.url),(0,a.jsx)("div",{className:"dots d-flex flex-nowrap overflow-x-auto",children:n.map((s=>(0,a.jsx)("div",{className:"".concat(s.id===e.id?"active":""),style:{borderRadius:"var(--border-radius-1)"},children:(0,a.jsx)(o,{children:(0,a.jsx)("span",{className:"dot",onClick:()=>{return e=s.id,void r(n.find((r=>r.id===e)));var e},style:{backgroundImage:"url(".concat(s.url,")")}})})},s.id)))})]})}));var n=s(5543),d=s(6214),m=s(149);const u=(0,t.memo)((()=>{const{productData:e}=(0,c.G)();return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{style:{lineHeight:1.4},children:[(0,m.Zr)(e.title),e.discount&&(0,a.jsx)("span",{style:{backgroundColor:"var(--primary-color)",color:"var(--background-color)",padding:"0 6px",margin:"0 8px",fontSize:14,whiteSpace:"nowrap",borderRadius:"var(--border-radius-2)"},children:e.discount})]}),e.miniDescription&&(0,a.jsx)("p",{style:{lineHeight:1.4,marginTop:8},children:e.miniDescription}),(0,a.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[e.price?(0,a.jsxs)("h2",{className:"number",style:{color:"var(--primary-color)"},children:[e.price," ",(0,m.cv)("DA")]}):"",e.originalPrice?(0,a.jsxs)("h3",{className:"old-price",children:[e.originalPrice," ",(0,m.cv)("DA")]}):"",!e.price&&!e.originalPrice&&(0,a.jsx)("h3",{style:{color:"red"},children:(0,m.cv)("No price available !")})]})]})}));var x=s(5475),p=s(3550);const h=e=>{let{product:r}=e;const{storeData:s}=(0,i.o)();return(0,a.jsxs)(x.N_,{style:{border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",borderRadius:"var(--border-radius-2)"},className:"hover-scale",to:"/redirect?redirect=/products/".concat(r.slug,"/").concat(r.id),children:[(0,a.jsx)(p.A,{src:r.image||s.logo,style:{width:150,height:151,borderBottom:"1px solid var(--border-color)",objectFit:"cover"}}),(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsx)("h4",{className:"cut-text",children:r.title}),(0,a.jsxs)("div",{className:"d-flex gap-2",children:[(0,a.jsxs)("h5",{className:"color-primary",children:[r.price||0," ",(0,m.cv)("DA")]}),r.originalPrice&&(0,a.jsxs)("h5",{className:"old-price",children:[r.originalPrice," ",(0,m.cv)("DA")]})]})]})]})};var g=s(4014),v=s(4113);const j=()=>{const[e,r]=(0,t.useState)(null),{productData:s}=(0,c.G)(),[i,o]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch(g.y+"/product/get-related-products?product_id="+s.productId,{});if(!e.ok)return console.log("Error: ".concat(e.status," ").concat(e.statusText)),void o(!1);r(await e.json()),o(!1)}catch(e){console.log(e),o(!1)}})()}),[]),(0,a.jsxs)("div",{className:"d-flex flex-wrap gap-2 p-2 justify-content-center col-12",children:[!i&&e&&e.map((e=>(0,a.jsx)(h,{product:e},e.index))),i&&(0,a.jsx)(v.A,{diam:160,color:"var(--primary-color)"})]})};var f=s(3216);const y=()=>{const{productData:e,setProductData:r}=(0,c.G)();return(0,a.jsx)(n.A,{productData:e,setProductData:r})},b=()=>{const{productData:e}=(0,c.G)();return(0,a.jsxs)("div",{className:"d-flex ",children:[(0,a.jsxs)("div",{className:"col-12 col-md-6 p-1",children:[(0,a.jsx)(a.Fragment,{children:e.galleryImages.length>0&&(0,a.jsx)("div",{style:{top:64,borderRadius:"var(--border-radius-3)",overflow:"hidden"},className:"p-sticky-md border",id:"image-slider__container",children:(0,a.jsx)(l,{})})}),(0,a.jsx)(a.Fragment,{children:0===e.galleryImages.length&&(0,a.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{border:"1px solid var(--border-color)",aspectRatio:1,maxWidth:"100%",maxHeight:"calc(100vh - 80px)",margin:"auto",borderRadius:"var(--border-radius-2)"},children:(0,a.jsx)("h3",{style:{color:"grey"},children:(0,m.cv)("No image was provider")})})})]}),(0,a.jsxs)("div",{className:"col-12 col-md-6 px-2 px-lg-4 d-flex flex-column gap-1 p-1 mt-3",children:[" ",(0,a.jsx)(u,{}),e.pricesAndImagesList.length>0&&(0,a.jsx)(y,{}),(0,a.jsx)("div",{className:"mt-3",children:(0,a.jsx)(d.A,{productData:e})}),e.richText&&(0,a.jsx)(o,{className:"p-1 my-4 sun-editor-editable",dangerouslySetInnerHTML:{__html:e.richText}})]}),(0,a.jsxs)(o,{className:"flex-1",children:[(0,a.jsx)("hr",{className:"my-3 border"}),(0,a.jsx)(j,{})]})]})},N=()=>{const{id:e}=(0,f.g)();return(0,t.useEffect)((()=>{fetch(g.y+"/product/increment-product-views",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({product_id:e})})}),[]),(0,a.jsx)(c.A,{children:(0,a.jsx)(b,{})})}}}]);
//# sourceMappingURL=264.b7065958.chunk.js.map