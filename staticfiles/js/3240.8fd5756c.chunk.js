(self.webpackChunkhanotify_store=self.webpackChunkhanotify_store||[]).push([[3240],{4346:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(5043);const a="BuyButton_button__Litak",s="BuyButton_outline__bdUdp",o="BuyButton_disabled__okQ++";var c=n(579);const i=e=>{let{children:t,className:n,onClick:i,disabled:r,outline:d,...l}=e;return(0,c.jsx)("div",{className:"".concat(d?s:""," ").concat(a," ").concat(n," ").concat(r?o:""),...l,onClick:r?void 0:i,children:t})}},3550:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var a=n(5043),s=n(579);const o=e=>{let{src:t,alt:n,placeholder:o,className:c,...i}=e;const[r,d]=(0,a.useState)(!1),[l,m]=(0,a.useState)(!1),u=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(d(!0),e.disconnect())}))}),{root:null,rootMargin:"0px",threshold:.1});return u.current&&e.observe(u.current),r&&e.unobserve(u.current),()=>{e&&u.current&&e.unobserve(u.current)}}),[]),(0,s.jsx)("img",{src:r?t:o,alt:n,onLoad:()=>m(!0),className:"".concat(c," ").concat(l?"loaded":"loading"),...i,ref:u})}},4113:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(5043);const a="Loader_loading-state__fDnOd",s="Loader_loading__VMcUu";var o=n(579);const c=e=>{let{diam:t=18,color:n}=e;return(0,o.jsx)("div",{className:a,style:{width:t,height:t},children:(0,o.jsx)("div",{className:s,style:{borderWidth:t/16,borderTopColor:n}})})}},5429:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(5043);const s="Select_select-container__B6OII",o="Select_options-box__wuLIJ",c="Select_option-box__container__NDFe7",i="Select_option__0Ys+h";var r=n(579);const d=e=>{let{children:t,onClickOutside:n,listeningCondintion:s=!0,...o}=e;const c=(0,a.useRef)(null),i=e=>{c.current&&!c.current.contains(e.target)&&n()};return(0,a.useEffect)((()=>(s&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)})),[s]),(0,r.jsx)("div",{ref:c,...o,children:t})};var l=n(149);const m=e=>{let{options:t,setSelectedOption:n,selectedOption:m,keyExtractor:u,containerClassName:p,...h}=e;const[x,j]=(0,a.useState)(!1),_=e=>{j(!1),n(e)},v=(0,a.useRef)();return(0,a.useEffect)((()=>{x&&(0,l.Id)(v.current)}),[x]),(0,r.jsx)(d,{className:p,onClickOutside:()=>j(!1),listeningCondintion:x,...h,children:(0,r.jsxs)("div",{className:"p-relative cursor-pointer ",children:[(0,r.jsxs)("div",{className:s,onClick:()=>j((e=>!e)),children:[(0,r.jsx)("h4",{className:"flex-1 color-primary cut-text",children:m.label}),(0,r.jsx)("i",{className:"fa-solid fa-chevron-".concat(x?"up":"down"," color-primary")})]}),x&&(0,r.jsx)("div",{className:o,ref:v,style:{zIndex:2},children:(0,r.jsx)("div",{className:c,children:t.map((e=>(0,r.jsx)("div",{className:i+" cut-text",onClick:_.bind(void 0,e),children:e.label},u(e))))})})]})})}},2298:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(5043),s=n(149),o=n(4346);const c="BuySection_container__D2LDg",i="BuySection_container-info__TQoUH";var r=n(1634),d=n(5429);const l="TextInput_password__yW1CV",m="TextInput_eye__WKGPC",u="TextInput_label__BZIin",p="TextInput_label-on-top__-5+Nq",h="TextInput_placeholder-exist__qcFCz";var x=n(579);const j=(0,a.forwardRef)(((e,t)=>{let{className:n="",containerClassName:s="",label:o,type:c,defaultValue:i="",onFocus:r=()=>{},onBlur:d=()=>{},onChange:j=()=>{},value:_=null,placeholder:v,placeholderLabel:f,style:g,error:y,...N}=e;const[b,C]=(0,a.useState)(c),[S,O]=(0,a.useState)(!1),[k,T]=(0,a.useState)(i),I=e=>{T(e),j(e)},A=(0,a.useRef)();(0,a.useImperativeHandle)(t,(()=>({setValue:e=>I(e),classList:A.current.classList})));const w=null==_?k:_,B=S||""!==w;return(0,x.jsxs)("div",{className:s,style:{borderRadius:"var(--border-radius-2)"},children:[(0,x.jsxs)("div",{className:"d-flex p-relative align-center ",style:{borderRadius:"var(--border-radius-2)"},children:[(0,x.jsxs)("div",{className:"d-flex p-relative align-items-center flex-1",style:{borderRadius:"var(--border-radius-2)"},children:[(0,x.jsx)("input",{value:w,style:{padding:"12px 8px 4px 8px",...g},onChange:e=>I(e.target.value),placeholder:v,onFocus:e=>{O(!0),r(e)},onBlur:e=>{O(!1);const t=e.target.value.trim();d(t),T(t)},type:b,className:"input ".concat("password"===c?l:""," ").concat(y?"error":""," ").concat(v?h:""," ").concat(n||""),ref:A,...N}),!v&&(0,x.jsx)("label",{disabled:B,style:{width:"calc(100% - 16px)"},onClick:e=>{B||A.current.focus()},className:"".concat(u," ").concat(y?"error ":""," ").concat(B?p:""," cut-text  ").concat("password"===c?l:""),children:B||!f?o:f})]}),"password"==c&&(0,x.jsx)("i",{onClick:()=>{C((e=>"password"===e?"text":"password"))},className:"fa-solid fa-eye"+("password"===b?" ":"-slash ")+m})]}),y&&(0,x.jsx)("h4",{className:"error mt-2",children:y})]})}));var _=n(4113),v=n(5243);const f="Accordiant_checked__YDHKT",g="Accordiant_icon__ZjSTJ",y=e=>{let{checked:t,setChecked:n,size:a=18,...s}=e;return(0,x.jsx)("i",{style:{padding:"8px",cursor:"pointer"},className:"fa-solid fa-chevron-up "+g+" "+(t?f:""),size:a,onClick:()=>n(!t),...s})};var N=n(3216);const b=e=>{let{setClientNote:t,showCN:n,setShowCN:o}=e;return(0,a.useEffect)((()=>{n||t("")}),[n]),(0,x.jsxs)("div",{className:"d-flex mt-2",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",onClick:()=>o(!n),style:{cursor:"pointer"},children:[(0,x.jsx)(y,{size:22,checked:n,setChecked:()=>{}}),(0,x.jsx)("h4",{children:(0,s.cv)("Add note")})]}),n&&(0,x.jsx)("textarea",{onBlur:e=>t(e.target.value),className:"input m-2"})]})},C=(0,a.memo)((e=>{var t,l;let{productData:m}=e;const{storeData:u}=(0,v.o)(),[p,h]=(0,a.useState)(m.shippingCostByState[0]),[f,g]=(0,a.useState)(1),y=e=>{g((t=>t+e))},[C,S]=(0,a.useState)([]),[O,k]=(0,a.useState)({}),{language:T}=(0,v.o)(),I="ar"===T?"_ar":"";(0,a.useEffect)((()=>{(async()=>{let e=await n(8693)("./".concat(p.id,".json"));e=e.default,e=e.map((e=>({...e,label:e["name"+I].split("-")[1]}))),S(e),k(e[0])})()}),[p]);const[A,w]=(0,a.useState)(""),[B,D]=(0,a.useState)(""),[E,P]=(0,a.useState)(""),{combinationIndex:H}=m,[L,R]=(0,a.useState)(!1),[z,F]=(0,a.useState)(!1),{ordersData:q,setOrdersData:Z}=(0,v.o)(),M=null===(t=q[m.productId])||void 0===t?void 0:t.orderId,J=null===(l=q[m.productId])||void 0===l?void 0:l.orderToken,{visitor:W}=(0,v.o)(),U=(0,a.useRef)(!0),V=(0,N.Zp)(),G=!B.trim()||!(E.length>=9),K=null!==p.costToHome,Y=null!==p.cost,[Q,X]=(0,a.useState)(K?"costToHome":"cost");(0,a.useEffect)((()=>{X(K?"costToHome":"cost")}),[p]);const $=m.price*f+p[Q],ee=(0,a.useRef)(!1);(0,a.useEffect)((()=>{ee.current?(F(!1),E.length>=9&&(async()=>{try{if(!W.isBlocked){if(!U.current)return;U.current=!1,setTimeout((()=>{U.current=!0}),1e3),fetch(r.y+(M?"/orders/update-order":"/orders/create-order"),{method:"POST",headers:{"Content-type":"application.json"},body:JSON.stringify({phone_number:E,shippig_address:A,product_id:m.productId,shippingToHome:"costToHome"===Q,state_id:p.id,city_id:O.id,full_name:B,combination_index:H,order_id:M,order_token:J,tracker:W.tracker,quantity:M?void 0:f,combination_index:H})}).then((e=>e.json().then((e=>{q.orderId!==e.orderId&&Z((t=>({...t,[m.productId]:e})))}))))}}catch(e){console.log(e)}})()):ee.current=!0}),[O,B,E,Q,H]);const[te,ne]=(0,a.useState)(""),[ae,se]=(0,a.useState)(!1);return(0,x.jsxs)("div",{className:c+" border p-1",style:{backgroundColor:"var(--primary-transparent-color)",borderRadius:"var(--border-radius-3)"},children:[(0,x.jsxs)("div",{className:i,children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("div",{className:"col-6 p-1",children:(0,x.jsx)(j,{label:(0,s.cv)("Full name"),value:B,onChange:e=>D(e)})}),(0,x.jsx)("div",{className:"col-6 p-1",children:(0,x.jsx)(j,{label:(0,s.cv)("Phone number"),type:"tel",value:E,maxLength:10,onChange:e=>{(""===e||e.startsWith("0")&&(0,s.T6)(e[e.length-1]))&&P(e)}})}),(0,x.jsx)("div",{className:"col-6 p-1",children:(0,x.jsx)(d.A,{options:m.shippingCostByState,setSelectedOption:h,selectedOption:p,keyExtractor:e=>e.id})}),(0,x.jsx)("div",{className:"col-6 p-1",children:"cost"===Q?(0,x.jsx)(x.Fragment,{}):(0,x.jsx)(d.A,{options:C,setSelectedOption:k,selectedOption:O,keyExtractor:e=>e.id})}),u.askForAddress&&(0,x.jsx)("div",{className:"col-12 p-1",children:(0,x.jsx)(j,{label:"Address",value:A,onChange:e=>w(e)})})]}),u.askForClientNote&&(0,x.jsx)(b,{showCN:ae,setShowCN:se,setClientNote:ne})]}),(0,x.jsxs)("div",{className:"my-2",children:[(K||Y)&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{className:"p-1",children:(0,s.cv)("Shipping to")}),(0,x.jsxs)("div",{className:"col-12 p-1 d-flex gap-2",children:[null!==p.costToHome&&(0,x.jsxs)(o.A,{style:{maxWidth:"50%"},className:"flex-1 gap-1 justify-content-between",outline:"cost"===Q,onClick:()=>X("costToHome"),children:["".concat((0,s.cv)("Home")),":",(0,x.jsx)("h4",{children:" ".concat(0==p.costToHome?(0,s.cv)("Free"):"".concat(p.costToHome).concat((0,s.cv)("DA"))," ")})]}),null!==p.cost&&(0,x.jsxs)(o.A,{style:{maxWidth:"50%"},className:"flex-1 gap-1 justify-content-between",outline:"costToHome"===Q,onClick:()=>X("cost"),children:["".concat((0,s.cv)("Office")),":",(0,x.jsx)("h4",{children:" ".concat(0==p.cost?(0,s.cv)("Free"):"".concat(p.cost).concat((0,s.cv)("DA"))," ")})]})]})]}),(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)("h4",{className:"col-6 p-1",children:(0,s.cv)("Total price")}),(0,x.jsx)("h4",{className:"number color-primary col-6  p-1 text-center",children:0==$?(0,s.cv)("Free"):"".concat($," ").concat((0,s.cv)("DA"))})]})]}),(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)("div",{className:"input-container d-flex gap-3 col-6 p-1",children:(0,x.jsxs)("div",{className:"d-flex align-items-stretch flex-1 flex-stretch",children:[(0,x.jsx)(o.A,{style:{padding:"8px 14px"},disabled:f<=1,onClick:()=>y(-1),children:(0,x.jsx)("i",{className:"fa-solid fa-minus"})}),(0,x.jsx)("div",{className:"flex-1 d-flex justify-content-center align-items-center",children:(0,x.jsx)("h4",{className:"color-primary",style:{verticalAlign:"center"},children:f})}),(0,x.jsx)(o.A,{style:{padding:"8px 14px"},onClick:()=>y(1),children:(0,x.jsx)("i",{className:"fa-solid fa-plus"})})]})}),(0,x.jsx)("div",{className:"col-6 p-1",children:(0,x.jsxs)(o.A,{disabled:G||L,onClick:()=>(async()=>{R(!0),F(!1);const e={state_id:p.id,order_id:M,order_token:J,city_id:O.id,full_name:B,combination_index:H,quantity:f,tracker:W.tracker,shipping_address:A,client_note:te},t="thank-you?order=".concat(JSON.stringify({index:H,productPrice:m.price,totalPrice:$,quantity:f,shippingCost:p[Q]}));try{W.isBlocked?setTimeout((()=>{D(""),P(""),R(!1),ne(""),V(t)}),800):(U.current=!1,setTimeout((()=>{U.current=!0}),1e3),await fetch(r.y+"/orders/confirm-order",{method:"POST",headers:{"Content-type":"application.json"},body:JSON.stringify(e)}),D(""),P(""),w(""),se(!1),Z((e=>{const t={...e};return delete t[m.productId],t})),V(t))}catch(n){console.log(n),F(!0),R(!1)}})(),children:[(0,s.cv)("Confirm order"),L&&(0,x.jsx)(_.A,{diam:28})]})})]}),z&&(0,x.jsx)("div",{style:{color:"red"},className:"p-2 d-flex justify-content-center col-12",children:(0,x.jsx)("h4",{children:(0,s.cv)("Your order was not submitted, please try again")})})]})}))},5543:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(5043);const s="ImageOptions_container__PTVV-",o="ImageOptions_image__8x3vU",c="ImageOptions_image-container__BuDEn",i="ImageOptions_selected__L-kY1";var r=n(8130),d=n(3550),l=n(579);const m=e=>{let{options:t,setSelectedImageOption:n,selectedImageOption:a}=e;const{setCurrentImage:m}=(0,r.useProductContext)(),u=e=>{n(e),m((t=>({id:t,url:e.image})));document.documentElement};return(0,l.jsx)("div",{className:s,children:t.map((e=>(0,l.jsx)("div",{className:"".concat(c," ").concat(a.id===e.id?i:void 0),children:(0,l.jsx)(d.A,{src:e.image,className:o,onClick:u.bind(void 0,e)})},e.id)))})},u="TextOptions_text__IuLOK",p="TextOptions_selected__cijci",h="TextOptions_container__Zz2zB",x=e=>{let{options:t,selectedTextOption:n,setSelectedTextOption:a}=e;return(0,l.jsx)("div",{className:h,children:t.map((e=>(0,l.jsx)("p",{className:"".concat(u," ").concat(n.id===e.id?p:""),onClick:()=>a(e),children:e.label},e.id)))})},j="CircleOptions_container__dfTae",_="CircleOptions_circle__PAi5B",v="CircleOptions_selected__tbdXZ",f=e=>{let{options:t,selectedCCOption:n,setSelectedCCOption:a}=e;return(0,l.jsx)("div",{className:j,children:t.map((e=>(0,l.jsx)("div",{className:n.id===e.id?v:void 0,children:(0,l.jsx)("div",{className:"".concat(_),style:{backgroundColor:e.color},onClick:()=>a(e)})},e.id)))})};var g=n(5429);const y="RadioInputs_radio__kT0L-",N=e=>{let{className:t,name:n,options:a,selectedRadioOption:s,setSelectedRadioOption:o,...c}=e;console.log(s);return(0,l.jsx)("div",{className:"d-flex flex-column gap-2",children:a.map((e=>(0,l.jsxs)("div",{className:"d-flex gap-2 flex-nowrap align-items-top",children:[(0,l.jsx)("input",{className:"".concat(t||""," ").concat(y),...c,type:"radio",name:n,id:n+e.id,checked:s.id===e.id,onChange:()=>(e=>{o(e)})(e),style:{flexShrink:0}}),(0,l.jsx)("label",{className:"lh-14",htmlFor:n+e.id,children:e.label})]},e.id)))})};var b=n(149);const C=(0,a.memo)((e=>{let{productData:t,setProductData:n}=e;const s=Object.values(t.variants),o=[],c=[];s.forEach((e=>{const t=e.options[1];o.push({...t,id:0}),c.push(Object.keys(e.options).length)}));const[i,r]=(0,a.useState)(o),d=(e,t)=>{r((n=>{const a=[...n];return a[e]=t,a}))};return(0,a.useEffect)((()=>{const e=function(e,t){let n=0,a=1;for(let s=e.length-1;s>=0;s--)n+=e[s].id*a,a*=t[s];return n}(i,c);n((t=>({...t,price:t.pricesAndImagesList[e].price,originalPrice:t.pricesAndImagesList[e].originalPrice,combinationIndex:e})))}),[i]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"d-flex flex-column gap-1",children:s.map(((e,t)=>{if("dropdown"===e.type)return(0,l.jsxs)("div",{className:"input-container",children:[(0,l.jsx)("h4",{children:(0,b.Zr)(e.name)}),(0,l.jsx)("div",{className:"col-6 px-1 my-2",children:(0,l.jsx)(g.A,{keyExtractor:e=>e.id,options:Object.values(e.options).map(((e,t)=>({...e,id:t}))),setSelectedOption:e=>d(t,e),selectedOption:i[t]})})]},t);if("radio-button"===e.type){const n=i[t];return(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{children:(0,b.Zr)(e.name)}),(0,l.jsx)("div",{className:"m-2 px-1",children:(0,l.jsx)(N,{name:(0,b.Zr)(e.name),options:Object.values(e.options).map(((e,t)=>({...e,id:t}))),selectedRadioOption:n,setSelectedRadioOption:e=>d(t,e)})})]},t)}if("text-button"===e.type){const n=i[t];return(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{children:(0,b.Zr)(e.name)}),(0,l.jsx)("div",{className:"my-2 px-1",children:(0,l.jsx)(x,{options:Object.values(e.options).map(((e,t)=>({...e,id:t}))),setSelectedTextOption:e=>d(t,e),selectedTextOption:n})})]},t)}if("colored-square"===e.type){const n=i[t];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h4",{children:[(0,b.Zr)(e.name),": ",(0,l.jsx)("span",{className:"color-primary",children:n.label})]}),(0,l.jsx)("div",{className:"my-2 px-1",children:(0,l.jsx)(f,{options:Object.values(e.options).map(((e,t)=>({...e,id:t}))),setSelectedCCOption:e=>d(t,e),selectedCCOption:n})})]},t)}if("image-with-text"===e.type){const n=i[t];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h4",{children:[(0,b.Zr)(e.name),": ",(0,l.jsx)("span",{className:"color-primary",children:n.label})]}),(0,l.jsx)("div",{className:"my-2 px-1",children:(0,l.jsx)(m,{options:Object.values(e.options).map(((e,t)=>({...e,id:t}))),setSelectedImageOption:e=>d(t,e),selectedImageOption:n})})]},t)}}))})})}))},8130:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p,useProductContext:()=>h});var a=n(5043),s=n(1634),o=n(3216),c=n(4286),i=n(149),r=n(4346),d=n(5243),l=n(579);const m={productId:null,title:"",slug:"",miniDescription:"",galleryImages:[],selectedCategories:[],price:0,originalPrice:0,discount:"",shippingCostByState:[],variants:{},pricesAndImagesList:[],combinationIndex:0,richText:"",relatedProducts:[],allProductsRelated:!1},u=(0,a.createContext)({productData:m,setProductData:()=>{},currentImage:null,setCurrentImage:()=>{}}),p=()=>{const[e,t]=(0,a.useState)(m),[p,h]=(0,a.useState)(!1),[x,j]=(0,a.useState)(null),{id:_}=(0,o.g)(),{language:v}=(0,d.o)(),f="ar"===v?"_ar":"";(0,a.useEffect)((()=>{(async()=>{h(!1);try{var e;let n;if(window.productData)n=window.productData;else{const e=await fetch(s.$+"/get-product?product_id=".concat(_),{method:"get"});if(!e.ok)return console.log("Error: ".concat(e.status," ").concat(e.statusText)),void h(!0);n=await e.json()}let a=n.shippingCostByState;a=a.length>0?a.map((e=>{const t=c.find((t=>t.id===e.id));return{...e,cost:e.cost,costToHome:e.costToHome,label:"".concat(t.code," - ").concat(t["name"+f])}})):c.map((e=>({cost:0,costToHome:0,label:"".concat(e.code," - ").concat(e["name"+f]),id:e.id}))),t((e=>({...e,...n,shippingCostByState:a}))),(null===(e=n.galleryImages)||void 0===e?void 0:e.length)>0&&j({id:0,url:n.galleryImages[0]}),document.title=n.title||"Hanotify",document.querySelector("#meta-title").setAttribute("content",n.title||"Hanotify"),document.querySelector("#meta-image").setAttribute("content",document.querySelector("#meta-image").getAttribute("content")||(n.galleryImages?n.galleryImages[0]:"")),document.querySelector("#description").setAttribute("content",n.miniDescription||document.querySelector("#description").getAttribute("content")),document.querySelector("#meta-descrition").setAttribute("content",n.miniDescription||document.querySelector("#meta-descrition").getAttribute("content"))}catch(p){console.log(p)}})()}),[]),(0,a.useEffect)((()=>{(async()=>{null!==e&&void 0!==e&&e.richText&&await n.e(1568).then(n.bind(n,1568))})()}),[e]);(0,a.useEffect)((()=>{fetch(s.y+"/product/increment-product-views",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({product_id:_})})}),[]);const g=(0,o.Zp)(),y={productData:e,setProductData:t,currentImage:x,setCurrentImage:t=>{let n;n=""===typeof t?t(e.galleryImages.length):t,j(t)}};return(0,l.jsxs)(u.Provider,{value:y,children:[e.productId&&(0,l.jsx)(o.sv,{}),p&&(0,l.jsxs)("div",{className:"flex-1 d-flex flex-column gap-2 align-items-center justify-content-center",style:{minHeight:500,width:"100%"},children:[(0,l.jsx)("h2",{className:"color-red",children:(0,i.cv)("Wrong link")}),(0,l.jsxs)(r.A,{outline:!0,className:"d-flex gap-3",onClick:()=>g("/"),children:[(0,l.jsx)("i",{className:"fa-solid fa-chevron-left"}),(0,i.cv)("Go back to store")]})]})]})},h=()=>(0,a.useContext)(u)},8693:(e,t,n)=>{var a={"./1.json":[4851,4851],"./10.json":[2725,2725],"./11.json":[3018,3018],"./12.json":[859,859],"./13.json":[6920,6920],"./14.json":[465,465],"./15.json":[6470,6470],"./16.json":[2839,2839],"./17.json":[4116,4116],"./18.json":[9517,9517],"./19.json":[9810,9810],"./2.json":[8690,8690],"./20.json":[8062,8062],"./21.json":[6169,6169],"./22.json":[6492,6492],"./23.json":[1855,1855],"./24.json":[5090,5090],"./25.json":[1773,1773],"./26.json":[6256,6256],"./27.json":[3779,3779],"./28.json":[9414,9414],"./29.json":[2993,2993],"./3.json":[5421,5421],"./30.json":[6563,6563],"./31.json":[5232,5232],"./32.json":[6989,6989],"./33.json":[5538,5538],"./34.json":[7647,7647],"./35.json":[8684,8684],"./36.json":[3113,3113],"./37.json":[3278,3278],"./38.json":[2091,2091],"./39.json":[8200,8200],"./4.json":[7564,7564],"./40.json":[572,572],"./41.json":[3183,3183],"./42.json":[8814,8814],"./43.json":[5001,5001],"./44.json":[7120,7120],"./45.json":[8451,8451],"./46.json":[7426,7426],"./47.json":[8877,8877],"./48.json":[2148,2148],"./49.json":[183,183],"./5.json":[4703,4703],"./50.json":[793,793],"./51.json":[2958,2958],"./52.json":[287,287],"./53.json":[3148,3148],"./54.json":[4029,4029],"./55.json":[4594,4594],"./56.json":[8851,8851],"./57.json":[8512,8512],"./58.json":[9649,9649],"./6.json":[7886,7886],"./7.json":[2073,2073],"./8.json":[4088,4088],"./9.json":[5499,5499]};function s(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,19)))}s.keys=()=>Object.keys(a),s.id=8693,e.exports=s},4286:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"code":"01","name":"Adrar","name_ar":"\u0623\u062f\u0631\u0627\u0631"},{"id":2,"code":"02","name":"Chlef","name_ar":"\u0627\u0644\u0634\u0644\u0641"},{"id":3,"code":"03","name":"Laghouat","name_ar":"\u0627\u0644\u0623\u063a\u0648\u0627\u0637"},{"id":4,"code":"04","name":"Oum El Bouaghi","name_ar":"\u0623\u0645 \u0627\u0644\u0628\u0648\u0627\u0642\u064a"},{"id":5,"code":"05","name":"Batna","name_ar":"\u0628\u0627\u062a\u0646\u0629"},{"id":6,"code":"06","name":"B\xe9ja\xefa","name_ar":"\u0628\u062c\u0627\u064a\u0629"},{"id":7,"code":"07","name":"Biskra","name_ar":"\u0628\u0633\u0643\u0631\u0629"},{"id":8,"code":"08","name":"Bechar","name_ar":"\u0628\u0634\u0627\u0631"},{"id":9,"code":"09","name":"Blida","name_ar":"\u0627\u0644\u0628\u0644\u064a\u062f\u0629"},{"id":10,"code":"10","name":"Bouira","name_ar":"\u0627\u0644\u0628\u0648\u064a\u0631\u0629"},{"id":11,"code":"11","name":"Tamanrasset","name_ar":"\u062a\u0645\u0646\u0631\u0627\u0633\u062a"},{"id":12,"code":"12","name":"Tbessa","name_ar":"\u062a\u0628\u0633\u0629"},{"id":13,"code":"13","name":"Tlemcen","name_ar":"\u062a\u0644\u0645\u0633\u0627\u0646"},{"id":14,"code":"14","name":"Tiaret","name_ar":"\u062a\u064a\u0627\u0631\u062a"},{"id":15,"code":"15","name":"Tizi Ouzou","name_ar":"\u062a\u064a\u0632\u064a \u0648\u0632\u0648"},{"id":16,"code":"16","name":"Alger","name_ar":"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{"id":17,"code":"17","name":"Djelfa","name_ar":"\u0627\u0644\u062c\u0644\u0641\u0629"},{"id":18,"code":"18","name":"Jijel","name_ar":"\u062c\u064a\u062c\u0644"},{"id":19,"code":"19","name":"Se9tif","name_ar":"\u0633\u0637\u064a\u0641"},{"id":20,"code":"20","name":"Saefda","name_ar":"\u0633\u0639\u064a\u062f\u0629"},{"id":21,"code":"21","name":"Skikda","name_ar":"\u0633\u0643\u064a\u0643\u062f\u0629"},{"id":22,"code":"22","name":"Sidi Bel Abbes","name_ar":"\u0633\u064a\u062f\u064a \u0628\u0644\u0639\u0628\u0627\u0633"},{"id":23,"code":"23","name":"Annaba","name_ar":"\u0639\u0646\u0627\u0628\u0629"},{"id":24,"code":"24","name":"Guelma","name_ar":"\u0642\u0627\u0644\u0645\u0629"},{"id":25,"code":"25","name":"Constantine","name_ar":"\u0642\u0633\u0646\u0637\u064a\u0646\u0629"},{"id":26,"code":"26","name":"Medea","name_ar":"\u0627\u0644\u0645\u062f\u064a\u0629"},{"id":27,"code":"27","name":"Mostaganem","name_ar":"\u0645\u0633\u062a\u063a\u0627\u0646\u0645"},{"id":28,"code":"28","name":"M\'Sila","name_ar":"\u0627\u0644\u0645\u0633\u064a\u0644\u0629"},{"id":29,"code":"29","name":"Mascara","name_ar":"\u0645\u0639\u0633\u0643\u0631"},{"id":30,"code":"30","name":"Ouargla","name_ar":"\u0648\u0631\u0642\u0644\u0629"},{"id":31,"code":"31","name":"Oran","name_ar":"\u0648\u0647\u0631\u0627\u0646"},{"id":32,"code":"32","name":"El Bayadh","name_ar":"\u0627\u0644\u0628\u064a\u0636"},{"id":33,"code":"33","name":"Illizi","name_ar":"\u0625\u0644\u064a\u0632\u064a"},{"id":34,"code":"34","name":"Bordj Bou Arreridj","name_ar":"\u0628\u0631\u062c \u0628\u0648\u0639\u0631\u064a\u0631\u064a\u062c"},{"id":35,"code":"35","name":"Boumerdes","name_ar":"\u0628\u0648\u0645\u0631\u062f\u0627\u0633"},{"id":36,"code":"36","name":"El Tarf","name_ar":"\u0627\u0644\u0637\u0627\u0631\u0641"},{"id":37,"code":"37","name":"Tindouf","name_ar":"\u062a\u0646\u062f\u0648\u0641"},{"id":38,"code":"38","name":"Tissemsilt","name_ar":"\u062a\u064a\u0633\u0645\u0633\u064a\u0644\u062a"},{"id":39,"code":"39","name":"El Oued","name_ar":"\u0627\u0644\u0648\u0627\u062f\u064a"},{"id":40,"code":"40","name":"Khenchela","name_ar":"\u062e\u0646\u0634\u0644\u0629"},{"id":41,"code":"41","name":"Souk Ahras","name_ar":"\u0633\u0648\u0642 \u0623\u0647\u0631\u0627\u0633"},{"id":42,"code":"42","name":"Tipaza","name_ar":"\u062a\u064a\u0628\u0627\u0632\u0629"},{"id":43,"code":"43","name":"Mila","name_ar":"\u0645\u064a\u0644\u0629"},{"id":44,"code":"44","name":"Ain Defla","name_ar":"\u0639\u064a\u0646 \u0627\u0644\u062f\u0641\u0644\u0649"},{"id":45,"code":"45","name":"Naama","name_ar":"\u0627\u0644\u0646\u0639\u0627\u0645\u0629"},{"id":46,"code":"46","name":"Ain Temouchent","name_ar":"\u0639\u064a\u0646 \u062a\u0645\u0648\u0634\u0646\u062a"},{"id":47,"code":"47","name":"Ghardaefa","name_ar":"\u063a\u0631\u062f\u0627\u064a\u0629"},{"id":48,"code":"48","name":"Relizane","name_ar":"\u063a\u0644\u064a\u0632\u0627\u0646"},{"id":49,"code":"49","name":"El M\'ghair","name_ar":"\u0627\u0644\u0645\u063a\u064a\u0631"},{"id":50,"code":"50","name":"El Menia","name_ar":"\u0627\u0644\u0645\u0646\u064a\u0639\u0629"},{"id":51,"code":"51","name":"Ouled Djellal","name_ar":"\u0623\u0648\u0644\u0627\u062f \u062c\u0644\u0627\u0644"},{"id":52,"code":"52","name":"Bordj Baji Mokhtar","name_ar":"\u0628\u0631\u062c \u0628\u0627\u062c\u064a \u0645\u062e\u062a\u0627\u0631"},{"id":53,"code":"53","name":"B\xe9ni Abb\xe8s","name_ar":"\u0628\u0646\u064a \u0639\u0628\u0627\u0633"},{"id":54,"code":"54","name":"Timimoun","name_ar":"\u062a\u064a\u0645\u064a\u0645\u0648\u0646"},{"id":55,"code":"55","name":"Touggourt","name_ar":"\u062a\u0642\u0631\u062a"},{"id":56,"code":"56","name":"Djanet","name_ar":"\u062c\u0627\u0646\u062a"},{"id":57,"code":"57","name":"In Salah","name_ar":"\u0639\u064a\u0646 \u0635\u0627\u0644\u062d"},{"id":58,"code":"58","name":"In Guezzam","name_ar":"\u0639\u064a\u0646 \u0642\u0632\u0627\u0645"}]')}}]);
//# sourceMappingURL=3240.8fd5756c.chunk.js.map