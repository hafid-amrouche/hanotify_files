"use strict";(self.webpackChunkhanotify_store=self.webpackChunkhanotify_store||[]).push([[2828],{8381:(e,t,i)=>{i.d(t,{A:()=>u});var s=i(5043),r=i(8130),o=i(4793),n=i(6367),c=i(3216);const a=()=>{const e=(0,c.Zp)();return()=>{const t=window.location.pathname.split("/").slice(0,-1).join("/");e(t)}};var l=i(4975),d=i(5013),m=(i(4014),i(579));const h=(0,s.forwardRef)(((e,t)=>{let{fullscreen:i}=e;const{currentImage:n,setCurrentImage:h,productData:u}=(0,r.useProductContext)(),{screenWidth:p}=(0,o.o)(),{galleryImages:x}=u,g=x.map(((e,t)=>({url:e,id:t}))),f=a(),v=(0,c.Zp)(),j=()=>{i?f():v("gallery")};(0,s.useEffect)((()=>{i?(document.getElementById("image-slider__container").classList.remove("p-sticky-md"),document.documentElement.style.overflow="hidden"):(document.getElementById("image-slider__container").classList.add("p-sticky-md"),document.documentElement.style.removeProperty("overflow"))}),[i]);const{language:y}=(0,o.o)(),w="ar"===y;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{style:{height:"100%",width:"100%",position:"absolute",top:0,left:0},children:(0,m.jsx)(l.RC,{className:"mySwiper",onClick:()=>!i&&j(),onSlideChange:e=>{h(g.find((t=>t.id===e.activeIndex)))},ref:t,initialSlide:n.id,modules:[d.GP,d.Vx],style:{height:"100%",width:"100%",maxWidth:"100%",maxHeight:"100%",position:"absolute",top:0,left:0,"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},zoom:!0,grabCursor:!0,children:g.map(((e,t)=>(0,m.jsx)(l.qr,{className:"".concat(i?"full-screen-image":""," flex-shrink-0"),children:(0,m.jsx)("div",{className:"swiper-zoom-container",children:(0,m.jsx)("img",{className:" ".concat(p>=768&&!i&&"border"),style:{display:"block",height:"100%",width:"100%",objectFit:i?"contain":"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",flexShrink:0,position:"absolute",top:0,left:0},src:e.url})})},t)))})}),(0,m.jsx)("button",{style:{top:"calc( 50% - 15px )"},className:w?" next":"prev",onClick:()=>{const e=g.findIndex((e=>e.id===n.id)),i=e>=1?e-1:0;h(g[i]),t.current.swiper.slideTo(i)},children:"\u276e"}),(0,m.jsx)("button",{style:{top:"calc( 50% - 15px )"},className:w?" prev":"next",onClick:()=>{const e=g.findIndex((e=>e.id===n.id)),i=e<=g.length-2?e+1:e;h(g[i]),t.current.swiper.slideTo(i)},children:"\u276f"}),(0,m.jsx)("i",{className:(i?"fa-solid fa-compress":"fa-solid fa-expand")+" fullscreen-btn",onClick:j})]})})),u=(0,s.memo)((e=>{let{fullscreen:t=!1}=e;const{currentImage:i,setCurrentImage:c,productData:a}=(0,r.useProductContext)(),{screenWidth:l}=(0,o.o)(),d=(0,s.useRef)(),[u,p]=(0,s.useState)({width:0,height:0}),x=t?window.innerWidth/(window.innerHeight-52):1;(0,s.useEffect)((()=>{(()=>{const e=d.current,i=e.offsetWidth,s=e.offsetHeight-52-(window.innerWidth>=768&&!t?4:0);p(i/s>x?{width:s*x,height:s}:{width:i,height:i/x})})()}),[l]);const{galleryImages:g}=a,f=g.map(((e,t)=>({url:e,id:t}))),v=(0,s.useRef)(null);(0,s.useEffect)((()=>{const e=v.current,t=document.getElementById("small-image-".concat(i.id));if(t&&e){const i=e.offsetWidth,s=t.offsetWidth,r=t.offsetLeft-i/2+s/2;e.scroll({left:r,behavior:"smooth"})}}),[i]);const j=(0,s.useRef)(),y=t?window.innerHeight:l<768?Math.min(document.documentElement.clientWidth+52,window.innerHeight-51):window.innerHeight-51;return(0,m.jsx)("div",{style:{height:"100%",width:"100%",position:t?"absolute":void 0,top:0,left:0,zIndex:t&&2},children:(0,m.jsxs)("div",{ref:d,style:{position:"relative",background:t?"#000000":void 0,display:"flex",alignItems:"center",justifyContent:"center",height:y,width:"100%"},children:[(0,m.jsx)("div",{style:{...u,aspectRatio:x,position:"absolute",top:window.innerWidth>=768&&!t?4:0},children:(0,m.jsx)(h,{fullscreen:t,ref:j})}),(0,m.jsx)("div",{className:"dots d-flex flex-nowrap overflow-x-auto",ref:v,style:{top:u.height+(window.innerWidth>=768?4:0)},children:f.map((e=>(0,m.jsx)("div",{className:"".concat(e.id===i.id?"active":""),style:{borderRadius:"var(--border-radius-1)"},id:"small-image-".concat(e.id),children:(0,m.jsx)(n.A,{children:(0,m.jsx)("span",{className:"dot",onClick:()=>{return t=e.id,c(f.find((e=>e.id===t))),void j.current.swiper.slideTo(t);var t},style:{backgroundImage:"url(".concat(e.url,")")}})})},e.id)))})]})})}))},419:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(5043),r=i(8381),o=i(7922),n=i(2298),c=i(8130),a=i(149),l=i(579);const d=(0,s.memo)((()=>{const{productData:e}=(0,c.useProductContext)();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{style:{lineHeight:1.4},children:[e.title,e.discount&&(0,l.jsx)("span",{style:{backgroundColor:"var(--primaryColor)",color:"var(--backgroundColor)",padding:"0 6px",margin:"0 8px",fontSize:14,whiteSpace:"nowrap",borderRadius:"var(--border-radius-2)"},children:e.discount})]}),e.miniDescription&&(0,l.jsx)("p",{style:{lineHeight:1.4,marginTop:8},children:e.miniDescription}),(0,l.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[e.price?(0,l.jsxs)("h2",{className:"number",style:{color:"var(--primaryColor)"},children:[e.price," ",(0,a.cv)("DA")]}):"",e.originalPrice?(0,l.jsxs)("h3",{className:"old-price",children:[e.originalPrice," ",(0,a.cv)("DA")]}):"",!e.price&&!e.originalPrice&&(0,l.jsx)("h3",{style:{color:"red"},children:(0,a.cv)("No price available !")})]})]})}));var m=i(1494),h=i(6367),u=i(760),p=i(3216),x=i(4555),g=i(4793);const f=()=>{const{productData:e,setProductData:t}=(0,c.useProductContext)();return(0,l.jsx)(o.A,{productData:e,setProductData:t})},v=()=>{const{productData:e}=(0,c.useProductContext)();(0,u.A)();const{id:t}=(0,p.g)();(0,x.A)(t);const{device:i}=(0,g.o)(),s="mobile"===i;return(0,l.jsxs)("div",{className:"d-md-flex px-md-4 gap-md-3 flex-wrap",style:{minHeight:"100Vh",maxWidth:1340,margin:"auto"},children:[(0,l.jsxs)("div",{className:"col-12 col-md-6 px-md-4",children:[(0,l.jsx)(l.Fragment,{children:e.galleryImages.length>0&&(0,l.jsxs)("div",{style:{overflow:"hidden",height:"100%"},className:"p-sticky-md d-flex flex-column",id:"image-slider__container",children:[(0,l.jsx)(r.A,{}),s&&(0,l.jsx)("hr",{className:"border-color-primary-fiding"})]})}),(0,l.jsx)(l.Fragment,{children:0===e.galleryImages.length&&(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{aspectRatio:1,maxWidth:"100%",margin:"auto"},children:(0,l.jsx)("h3",{style:{color:"grey"},children:(0,a.cv)("No image was provider")})})})]}),(0,l.jsxs)("div",{className:"col-12 col-md-6 px-2 px-lg-4 d-flex flex-column gap-1 p-1 mt-1 px-md-4",children:[(0,l.jsx)(d,{}),e.pricesAndImagesList.length>0&&(0,l.jsx)(f,{}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(n.A,{productData:e})}),e.richText&&(0,l.jsx)(h.A,{className:"p-1 my-4 sun-editor-editable",dangerouslySetInnerHTML:{__html:e.richText}})]}),(0,l.jsxs)(h.A,{className:"flex-1",children:[(0,l.jsx)("hr",{className:"my-3 border"}),(0,l.jsx)(m.A,{})]})]})}},1494:(e,t,i)=>{i.d(t,{A:()=>u});var s=i(5043),r=i(8130),o=i(4793),n=i(149),c=i(5475),a=i(3550),l=i(579);const d=e=>{let{product:t}=e;const{storeData:i}=(0,o.o)();return(0,l.jsxs)(c.N_,{style:{border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",borderRadius:"var(--border-radius-2)",width:152},to:"/products/".concat(t.slug,"/").concat(t.product_id),children:[(0,l.jsx)(a.A,{src:t.image||i.logo,style:{width:150,height:151,borderBottom:"1px solid var(--border-color)",objectFit:"cover"}}),(0,l.jsxs)("div",{className:"px-2",children:[(0,l.jsx)("h4",{className:"cut-text",children:t.title}),(0,l.jsxs)("div",{className:"d-flex gap-2",children:[(0,l.jsxs)("h5",{className:"color-primary",children:[t.price||0," ",(0,n.cv)("DA")]}),t.originalPrice&&(0,l.jsxs)("h5",{className:"old-price",children:[t.originalPrice," ",(0,n.cv)("DA")]})]})]})]})};var m=i(1634),h=i(4113);const u=()=>{const[e,t]=(0,s.useState)(null),{productData:i}=(0,r.useProductContext)(),[o,n]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch(m.y+"/product/get-related-products?product_id="+i.productId,{});if(!e.ok)return console.log("Error: ".concat(e.status," ").concat(e.statusText)),void n(!1);t(await e.json()),n(!1)}catch(e){console.log(e),n(!1)}})()}),[]),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2 p-2 justify-content-center col-12",children:[!o&&e&&e.map((e=>(0,l.jsx)(d,{product:e},e.index))),o&&(0,l.jsx)(h.A,{diam:160,color:"var(--primaryColor)"})]})}}}]);
//# sourceMappingURL=2828.8e7ad119.chunk.js.map