import{_ as P,a as u}from"./index.75fe6121.js";import{g as p,h as G,i as l,n as B,w as H,j as O,r as _,o as d,f as c,k as o,l as s,F as y,v as w,z as j,A as z,B as E,t as n,x as U}from"./vendor.7f0fe7bb.js";import{b as N,a as V,u as Q,v as Y}from"./BaseFooter.2d2a3637.js";import{u as X}from"./useModalControls.d52f29b8.js";import{u as q}from"./usePopoverControls.0b5ad0c4.js";const W=p(()=>u(()=>import("./field.9a280ce0.js"),["assets/field.9a280ce0.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.0b5ad0c4.js","assets/index.75fe6121.js","assets/index.0cdbbf9b.css"]));p(()=>u(()=>import("./field-group.79dfe9ca.js"),["assets/field-group.79dfe9ca.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.0b5ad0c4.js","assets/index.75fe6121.js","assets/index.0cdbbf9b.css"]));const Z=p(()=>u(()=>import("./selection.0f93825f.js"),["assets/selection.0f93825f.js","assets/useErrorState.0c859598.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/usePopoverControls.0b5ad0c4.js","assets/index.75fe6121.js","assets/index.0cdbbf9b.css"])),J=p(()=>u(()=>import("./Page-Level-Help-Modal.cd466cb0.js"),["assets/Page-Level-Help-Modal.cd466cb0.js","assets/useModalControls.d52f29b8.js","assets/vendor.7f0fe7bb.js","assets/vendor.a651588f.css","assets/index.75fe6121.js","assets/index.0cdbbf9b.css"])),K={components:{baseHeader:N,baseFooter:V,field:W,selection:Z,pageLevelHelpModal:J},setup(A){const a=G();Q();const{setModalId:S,getModalId:t,showModal:g,hideModal:R}=X(),{showPopover:h,hidePopover:i}=q(),f=l(Y());S(f.value);const b=l(null),m=l(null),e=l(null),v=l(null),r=l(null),I=[{id:"state1",label:"Alabama",name:"stateGroup"},{id:"state2",label:"Alaska",name:"stateGroup"},{id:"state3",label:"Arizona",name:"stateGroup"},{id:"state4",label:"Arkansas",name:"stateGroup"}],L=[{id:"county1",label:"Adair",name:"countyGroup"},{id:"county2",label:"Abner",name:"countyGroup"},{id:"county3",label:"Abner",name:"countyGroup"},{id:"county4",label:"Abner",name:"countyGroup"}],x=[{id:"addFilter1",label:"Tax Id",name:"addFilterGroup"},{id:"addFilter2",label:"Name",name:"addFilterGroup"},{id:"addFilter3",label:"All",name:"addFilterGroup"}],C=[{id:"addFilter1",label:"SSN(S)",name:"addFilterGroup"},{id:"addFilter2",label:"XYZ",name:"addFilterGroup"},{id:"addFilter3",label:"ABC",name:"addFilterGroup"}],F=B(()=>a.getters["search/getSearchResults"]);let D=l([]);l(!0);const T=()=>{a.dispatch("search/setSearch",{type:"payments"})},k=()=>{console.log("searchPayments"),T()};return H(F,M=>{D.value=M}),O(()=>{console.log("Payments onMounted")}),{stateField:b,countyField:m,addFiltersField:e,taxIdField:v,taxIdTypeField:r,stateData:I,countyData:L,addFiltersData:x,taxIdTypeData:C,showModal:g,hideModal:R,helpModalId:f,searchData:D,searchPayments:k,showPopover:h,hidePopover:i}}},$={id:"main-content",tabindex:"-1"},ss={class:"fsa-section"},es={class:"fsa-section__bd"},ts={class:"fsa-m-t--l"},as={class:"fsa-level@m fsa-level--justify-between"},ls=s("h1",{class:"fsa-m--none"},"Payments Dashboard",-1),os={class:"fsa-level fsa-level--justify-between fsa-level--grow-auto"},ns=s("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),is=E(" Help "),ds=[ns,is],cs={class:"fsa-section"},rs={class:"fsa-section__bd"},_s=z('<div class="fsa-content-tabs fsa-content-tabs--justified-equal"><ul class="fsa-content-tabs__list"><li class="fsa-content-tabs__item"><a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link"><span class="fsa-content-tabs__label-text">Manual Handling</span></a></li><li class="fsa-content-tabs__item"><a class="fsa-content-tabs__label" href="#link"><span class="fsa-content-tabs__label-text">Certification</span></a></li><li class="fsa-content-tabs__item"><a class="fsa-content-tabs__label" href="#link"><span class="fsa-content-tabs__label-text">Signing</span></a></li><li class="fsa-content-tabs__item"><a class="fsa-content-tabs__label" href="#link"><span class="fsa-content-tabs__label-text">Reset Held Payment</span></a></li></ul></div>',1),fs={class:"fsa-m-t--m"},us={class:"fsa-level fsa-level--grow-even"},ps={class:"fsa-level fsa-level--grow-even"},hs={class:"fsa-field"},bs={class:"fsa-popover fsa-popover--tr fsa-popover--size-large",id:"table-help-popover-123","aria-hidden":"true"},ms={class:"fsa-popover__content"},vs={class:"fsa-popover__hd"},Es={class:"fsa-level@m fsa-level--justify-between"},As=s("h2",{class:"fsa-popover__title"},"Table Help",-1),Ss=s("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"false",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1),gs=[Ss],Rs=s("div",{class:"fsa-popover__bd"},[s("div",{id:"help-popup-body"},[s("p",null,"Aut illum nostrum, perspiciatis asperiores esse eveniet earum rem cumque autsit tenetur adipisci. Eos facilis illum qui fugit perspiciatis asperiores esse eveniet earum rem cumque autsit.")])],-1),Ds={class:"fsa-table"},ys={class:"fsa-level@m fsa-level--justify-between"},ws=s("h3",null,"Search Results",-1),Is={class:"fsa-m-l--xs"},Ls=s("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),xs=[Ls],Cs={scope:"col","aria-sort":"ascending",class:"fsa-text-align--left"},Fs=s("th",{scope:"col"},"Tax ID",-1),Ts=s("th",{scope:"col"},"Payment ID",-1),ks=s("th",{scope:"col"},"Amount ($)",-1),Ms=s("th",{scope:"col"},"Issue Date",-1),Ps=s("th",{scope:"col"},"Recieved Date",-1),Gs=s("th",{scope:"col",class:"fsa-text-align--right"},"Actions",-1),Bs={key:0},Hs={class:"fsa-text-allcaps"},Os={class:"fsa-text-allcaps"},js={class:"fsa-text-allcaps"},zs={class:"fsa-text-allcaps"},Us={class:"fsa-text-allcaps"},Ns={class:"fsa-text-allcaps"},Vs={class:"fsa-level fsa-level--justify-right fsa-level--gutter-xs"},Qs=s("div",{class:"fsa-whiteout",tabindex:"-1",id:"fsa-whiteout","aria-hidden":"true"},null,-1),Ys=s("div",{class:"fsa-growl-container fsa-growl-container--centered"},[s("div",{class:"fsa-growl fsa-growl--error fsa-growl--centered",id:"UNIQUE-ID-9469E21387FAF609","aria-hidden":"true",tabindex:"0",role:"alertdialog"},[s("div",{class:"fsa-growl__hd"},[s("button",{class:"fsa-growl__close","data-behavior":"growl-dismiss whiteout-dismiss",type:"button"},[s("svg",{class:"fsa-icon fsa-icon--size-3","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})])]),s("h2",{class:"fsa-growl__title"},"Cancel Process")]),s("div",{class:"fsa-growl__bd"},[s("p",null,[E("Message goes here if you like or something, "),s("a",{href:"link.html"},"with a link"),E(" if necessary.")]),s("p",null,"And another line here for kicks."),s("p",null,[s("button",{"data-behavior":"growl-dismiss whiteout-dismiss",class:"fsa-btn fsa-btn--small fsa-btn--secondary",type:"button"},"Button"),s("a",{class:"fsa-btn fsa-btn--small fsa-btn--secondary",href:"link.html"},"Button link")])])])],-1);function Xs(A,a,S,t,g,R){const h=_("baseHeader"),i=_("selection"),f=_("field"),b=_("page-level-help-modal"),m=_("baseFooter");return d(),c("div",null,[o(h,{NAV_TYPE:"page-level-help"}),s("main",$,[s("div",ss,[s("div",es,[s("div",ts,[s("div",as,[ls,s("div",os,[s("span",null,[s("button",{onClick:a[0]||(a[0]=e=>t.showModal(t.helpModalId)),class:"fsa-btn fsa-btn--block fsa-btn--flat",type:"button"},ds)])])])])])]),s("div",cs,[s("div",rs,[_s,s("div",fs,[s("div",us,[o(i,{ID:"state-123",LABEL:"State",DATA:t.stateData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"stateField"},null,8,["DATA"]),o(i,{ID:"county-932",LABEL:"County",DATA:t.countyData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"countyField"},null,8,["DATA"])]),s("div",ps,[o(i,{ID:"additional-filter-932",LABEL:"Additional Filter",DATA:t.addFiltersData,REQUIRED:"false",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"addFiltersField"},null,8,["DATA"]),o(f,{ID:"tax-id-2323",EXTRA_CLASSES:"",LABEL:"Tax ID",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"false",BEHAVIOR:"",ARIA_DESCRIBEDBY:"tax-id-2323__help",HELP_MESSAGE:"",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",ref:"taxIdField"},null,512),o(i,{ID:"tax-id-type-2343",LABEL:"Tax ID Type",DATA:t.taxIdTypeData,REQUIRED:"false",SELECT_CLASSES:"",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"",ERROR_MESSAGE:"You must like walking!",ref:"taxIdTypeField"},null,8,["DATA"])]),s("div",hs,[s("button",{onClick:a[1]||(a[1]=(...e)=>t.searchPayments&&t.searchPayments(...e)),type:"submit",class:"fsa-btn fsa-btn--primary"},"Search")])]),s("div",bs,[s("div",ms,[s("div",vs,[s("div",Es,[As,s("button",{onClick:a[2]||(a[2]=e=>t.hidePopover("table-help-popover-123")),class:"",type:"button"},gs)])]),Rs])]),s("table",Ds,[s("caption",null,[s("div",ys,[ws,s("span",Is,[s("button",{onClick:a[3]||(a[3]=e=>t.showPopover("table-help-popover-123")),class:"fsa-btn fsa-btn--flat","data-behavior":"toggle-popover","data-target":"table-help-popover-123"},xs)])])]),s("thead",null,[s("tr",null,[s("th",Cs,[s("button",{id:"tableSort-1",onClick:a[4]||(a[4]=e=>A.toggleSort(e)),class:"fsa-table__sort fsa-table__sort--ascending",type:"button"},"Name")]),Fs,Ts,ks,Ms,Ps,Gs])]),t.searchData?(d(),c("tbody",Bs,[(d(!0),c(y,null,w(t.searchData,(e,v)=>(d(),c("tr",{key:v},[s("td",null,[s("span",Hs,n(e.name),1)]),s("td",null,[s("span",Os,n(e.taxId),1)]),s("td",null,[s("span",js,n(e.paymentId),1)]),s("td",null,[s("span",zs,n(e.amount),1)]),s("td",null,[s("span",Us,n(e.issueDate),1)]),s("td",null,[s("span",Ns,n(e.dateReceived),1)]),s("td",null,[s("div",Vs,[(d(!0),c(y,null,w(e.actions,r=>(d(),c("button",{key:r.id,class:U("fsa-btn fsa-btn--small "+r.btnClass)},n(r.label),3))),128))])])]))),128))])):j("",!0)])])]),o(b,{MODAL_ID:t.helpModalId},null,8,["MODAL_ID"]),Qs,Ys]),o(m)])}var $s=P(K,[["render",Xs]]);export{$s as default};
