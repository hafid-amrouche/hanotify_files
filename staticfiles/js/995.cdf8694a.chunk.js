"use strict";(self.webpackChunkhanotify_store=self.webpackChunkhanotify_store||[]).push([[995,2363],{6905:(t,e,o)=>{o.r(e),o.d(e,{default:()=>h});var i=o(5043),c=o(3216),s=o(1634),n=o(4286),a=o(2298),r=o(4346),d=o(149),l=(o(2363),o(7922)),u=o(760),m=o(4555),g=o(579);const p={productId:null,title:"",slug:"",miniDescription:"",galleryImages:[],selectedCategories:[],price:0,originalPrice:0,discount:"",shippingCostByState:[],variants:{},pricesAndImagesList:[],combinationIndex:0,richText:"",relatedProducts:[],allProductsRelated:!1},h=()=>{const[t,e]=(0,i.useState)(p),[o,h]=(0,i.useState)(!1),{id:y}=(0,c.g)();(0,i.useEffect)((()=>{(async()=>{h(!1);try{let t;if(window.productData)t=window.productData;else{const e=await fetch(s.$+"/get-product?product_id=".concat(y),{method:"get"});if(!e.ok)return console.log("Error: ".concat(e.status," ").concat(e.statusText)),void h(!0);t=await e.json()}let o=t.shippingCostByState;o=o.length>0?o.map((t=>{const e=n.find((e=>e.id===t.id));return{...t,cost:t.cost,costToHome:t.costToHome,label:"".concat(e.code," - ").concat(e.name_ar)}})):n.map((t=>({cost:0,costToHome:0,label:"".concat(t.code," - ").concat(t.name_ar),id:t.id}))),e((e=>({...e,...t,shippingCostByState:o}))),document.title=t.title||"Hanotify",document.querySelector("#meta-title").setAttribute("content",t.title||"Hanotify"),document.querySelector("#meta-image").setAttribute("content",document.querySelector("#meta-image").getAttribute("content")||(t.galleryImages?t.galleryImages[0]:"")),document.querySelector("#description").setAttribute("content",t.miniDescription||document.querySelector("#description").getAttribute("content")),document.querySelector("#meta-descrition").setAttribute("content",t.miniDescription||document.querySelector("#meta-descrition").getAttribute("content"))}catch(o){console.log(o)}})()}),[]),(0,m.A)(y),(0,u.A)();const[x,b]=(0,i.useState)(null);return(0,g.jsx)("div",{style:{position:"relative"},children:t.productId&&(0,g.jsxs)(g.Fragment,{children:[t.richText&&(0,g.jsx)("div",{className:"sun-editor-editable",style:{margin:"0 auto",minHeight:"100vh",maxWidth:"40rem"},dangerouslySetInnerHTML:{__html:t.richText}}),(0,g.jsx)("div",{className:"p-2",id:"buy-section",style:{position:"absolute",zIndex:2,backgroundColor:"var(--background-color)",width:"100%",paddingBottom:"calc(40vh - 186px)"},children:(0,g.jsxs)("div",{style:{maxWidth:600,margin:"auto"},className:"p-2"+(t.pricesAndImagesList.length>0?" border":""),children:[t.pricesAndImagesList.length>0&&(0,g.jsx)("div",{className:"mb-2",children:(0,g.jsx)(l.A,{productData:t,setProductData:e})}),(0,g.jsx)(a.A,{productData:t,setOrder:b})]})}),(0,g.jsx)("div",{className:"d-flex justify-content-center",style:{position:"fixed",bottom:0,width:"100%",left:0,marginBottom:"2vw"},children:(0,g.jsxs)(r.A,{onClick:()=>(0,d.Id)(document.querySelector("#buy-section")),className:"gap-2 jiggle",style:{width:"90%",maxWidth:400},children:[(0,g.jsx)("i",{className:"fa-solid fa-cart-shopping"}),(0,d.cv)("Order now")]})})]})})}},2363:(t,e,o)=>{o.r(e),o.d(e,{default:()=>i});const i={}}}]);
//# sourceMappingURL=995.cdf8694a.chunk.js.map