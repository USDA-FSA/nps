import{_ as B,a}from"./index.c32868a3.js";import{g as n,h as M,i as s,n as y,w as C,j as P,r as c,o as S,f as T,k as r,l as e,B as g}from"./vendor.7f0fe7bb.js";import{b as D,a as O,u as R,v as N}from"./BaseFooter.c2620cac.js";import{u as U}from"./useModalControls.d52f29b8.js";const k=n(()=>a(()=>import("./field.908c5048.js"),["assets/field.908c5048.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.d469eb65.js","assets/index.c32868a3.js","assets/index.0cdbbf9b.css"])),j=n(()=>a(()=>import("./field-group.98e8c08a.js"),["assets/field-group.98e8c08a.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.d469eb65.js","assets/index.c32868a3.js","assets/index.0cdbbf9b.css"])),x=n(()=>a(()=>import("./selection.d561387d.js"),["assets/selection.d561387d.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.d469eb65.js","assets/index.c32868a3.js","assets/index.0cdbbf9b.css"])),V=n(()=>a(()=>import("./App-Data.ee7dc02e.js"),["assets/App-Data.ee7dc02e.js","assets/index.c32868a3.js","assets/index.0cdbbf9b.css","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css"])),F=n(()=>a(()=>import("./stepped-control.b7aa581a.js"),["assets/stepped-control.b7aa581a.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/BaseFooter.c2620cac.js","assets/index.c32868a3.js","assets/index.0cdbbf9b.css"])),H=n(()=>a(()=>import("./Page-Level-Help-Modal.af5bacc8.js"),["assets/Page-Level-Help-Modal.af5bacc8.js","assets/useModalControls.d52f29b8.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/index.c32868a3.js","assets/index.0cdbbf9b.css"])),z={components:{baseHeader:D,baseFooter:O,field:k,fieldGroup:j,selection:x,appData:V,steppedControl:F,pageLevelHelpModal:H},setup(L){const l=M();R();const{setModalId:b,getModalId:_,showModal:w,hideModal:E}=U(),u=s(N());b(u.value);const f=s(null);s(null),s(null),s(null);const d=y(()=>l.getters["users/getUsers"]);let t=s([]),i=s(!0);const p=()=>{l.dispatch("users/getUsersFromApi")},I=m=>{let o=m.currentTarget.id;i.value=!i.value,i.value?(t.value=d.value.sort((h,v)=>h.id-v.id),document.getElementById(o).classList.remove("fsa-table__sort--descending"),document.getElementById(o).classList.add("fsa-table__sort--ascending"),document.getElementById(o).ariaSort="ascending"):(t.value=d.value.sort((h,v)=>v.id-h.id),document.getElementById(o).classList.remove("fsa-table__sort--ascending"),document.getElementById(o).classList.add("fsa-table__sort--descending"),document.getElementById(o).ariaSort="descending")},A=()=>{console.log("searchPayments"),p()};return C(d,m=>{t.value=m}),P(()=>{console.log("Payments onMounted")}),{nameField:f,users:t,getUsersData:p,toggleSort:I,searchPayments:A,showModal:w,hideModal:E,helpModalId:u}}},G={id:"main-content",tabindex:"-1"},W={class:"fsa-section"},K={class:"fsa-section__bd"},X={class:"fsa-m-t--l"},Y={class:"fsa-level@m fsa-level--justify-between"},$=e("h1",{class:"fsa-m--none"},"Payment Certification Approval",-1),Q={class:"fsa-level fsa-level--justify-between fsa-level--grow-auto"},q=e("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),J=g(" Help "),Z=[q,J],ee={class:"fsa-section"},se={class:"fsa-section__bd"},te={class:"fsa-section"},oe={class:"fsa-section__bd"},ae=e("div",{class:"fsa-whiteout",tabindex:"-1",id:"fsa-whiteout","aria-hidden":"true"},null,-1),ne=e("div",{class:"fsa-growl-container fsa-growl-container--centered"},[e("div",{class:"fsa-growl fsa-growl--error fsa-growl--centered",id:"UNIQUE-ID-9469E21387FAF609","aria-hidden":"true",tabindex:"0",role:"alertdialog"},[e("div",{class:"fsa-growl__hd"},[e("button",{class:"fsa-growl__close","data-behavior":"growl-dismiss whiteout-dismiss",type:"button"},[e("svg",{class:"fsa-icon fsa-icon--size-3","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})])]),e("h2",{class:"fsa-growl__title"},"Cancel Process")]),e("div",{class:"fsa-growl__bd"},[e("p",null,[g("Message goes here if you like or something, "),e("a",{href:"link.html"},"with a link"),g(" if necessary.")]),e("p",null,"And another line here for kicks."),e("p",null,[e("button",{"data-behavior":"growl-dismiss whiteout-dismiss",class:"fsa-btn fsa-btn--small fsa-btn--secondary",type:"button"},"Button"),e("a",{class:"fsa-btn fsa-btn--small fsa-btn--secondary",href:"link.html"},"Button link")])])])],-1);function le(L,l,b,_,w,E){const u=c("baseHeader"),f=c("app-data"),d=c("stepped-control"),t=c("page-level-help-modal"),i=c("baseFooter");return S(),T("div",null,[r(u,{NAV_TYPE:"page-level-help"}),e("main",G,[e("div",W,[e("div",K,[e("div",X,[e("div",Y,[$,e("div",Q,[e("span",null,[e("button",{onClick:l[0]||(l[0]=p=>_.showModal(_.helpModalId)),class:"fsa-btn fsa-btn--block fsa-btn--flat",type:"button"},Z)])])])])])]),e("div",ee,[e("div",se,[r(f)])]),e("div",te,[e("div",oe,[r(d,{EXTRA_CLASSES:"fsa-stepped-control--sticky",DISPLAY_MESSAGE:"true",CURRENT_STEP:"1",TOTAL_STEPS:"5",BACK_LABEL:"Back",BACK_URL:"/",USE_GROWL_ON_CANCEL:"true",GROWL_ID:"stepped-control-growl-id",URL_PREFIX:"fsa",USE_GROWL_ON_SUBMIT:"true",ON_SUBMIT_GROWL_ID:"stepped-control-submit-growl-id",CONTINUE_LABEL:"Continue",CONTINUE_URL:"/demo/modal-growl/"})])]),r(t,{MODAL_ID:_.helpModalId},null,8,["MODAL_ID"]),ae,ne]),r(i)])}var _e=B(z,[["render",le]]);export{_e as default};
