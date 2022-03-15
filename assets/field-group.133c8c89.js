import{u as O}from"./useErrorState.005c7d22.js";import{u as v}from"./usePopoverControls.d469eb65.js";import{_ as u}from"./index.3da44a80.js";import{m as g,l as f,g as m,o as i,f as o,i as s,A as P,t as _,x as r,s as c,C as A,F as b,q as D}from"./vendor.d4f86f77.js";const C={props:{GROUP_ID:String,GROUP_TYPE:String,LABEL:String,DATA:Array,REQUIRED:String,BEHAVIOR:String,EXTRA_CLASSES:String,FIELD_ERROR_CLASS:String,ARIA_REQUIRED:String,HELP_MESSAGE:String,ERROR_MESSAGE:String,DISPLAY:String,HAS_ERROR:String,USE_POPOVER:String,POPOVER_TYPE:String,POPOVER_CLASSES:String,POPOVER_ID:String,POPOVER_HEADER:String},setup(l){const n=l.DATA?l.DATA:g(null),e=l.FIELD_ERROR_CLASS?l.FIELD_ERROR_CLASS:f("fsa-field--error"),t=l.DISPLAY?l.DISPLAY:"vertical",E=f(""),d=f(""),{hasError:a,setHasError:h,errorMessage:p,setErrorMessage:$}=O(),{showPopover:R,hidePopover:S}=v();return m(()=>{t=="vertical"&&(d.value="fsa-form-list"),t=="horizontal"&&(d.value="fsa-level",E.value="fsa-field--block"),l.HAS_ERROR=="true"&&h(!0)}),{hasError:a,setHasError:h,fieldErrorClass:e,groupData:n,extraFieldClasses:E,ulClass:d,showPopover:R,hidePopover:S}}},I=["for","id"],w={key:0,class:"fsa-field__label-desc"},y={key:1,class:"fsa-field__label-desc fsa-m-l--xxs"},L=["data-target"],V={key:0,class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},k=s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"},null,-1),x=[k],G={key:1,class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},U=s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1),z=[U],T=["id"],H={class:"fsa-popover__content"},M={class:"fsa-popover__hd"},B={class:"fsa-level@m fsa-level--justify-between"},Y={class:"fsa-popover__title"},F=s("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"false",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1),j=[F],N={class:"fsa-popover__bd"},Q=P("Help text body content"),q=["aria-describedby","aria-labelledby"],X=["type","id","name","checked"],J=["for"],K=["id"],W=["id"];function Z(l,n,e,t,E,d){return i(),o("div",{class:c("fsa-field "+(t.hasError?t.fieldErrorClass:"")+" "+t.extraFieldClasses)},[s("label",{class:"fsa-field__label",for:e.GROUP_ID,id:e.GROUP_ID+"_label"},[P(_(e.LABEL)+" ",1),e.REQUIRED=="true"?(i(),o("span",w,"Required")):r("",!0),e.USE_POPOVER=="true"?(i(),o("span",y,[s("button",{onClick:n[0]||(n[0]=a=>t.showPopover(e.POPOVER_ID)),class:"fsa-btn fsa-btn--flat","data-behavior":"toggle-popover","data-target":e.POPOVER_ID},[e.POPOVER_TYPE=="help"?(i(),o("svg",V,x)):r("",!0),e.POPOVER_TYPE=="info"?(i(),o("svg",G,z)):r("",!0)],8,L)])):r("",!0)],8,I),e.USE_POPOVER?(i(),o("div",{key:0,class:c("fsa-popover "+e.POPOVER_CLASSES),id:e.POPOVER_ID,"aria-hidden":"true"},[s("div",H,[s("div",M,[s("div",B,[s("span",Y,_(e.POPOVER_HEADER),1),s("button",{onClick:n[1]||(n[1]=a=>t.hidePopover(e.POPOVER_ID)),class:"",type:"button"},j)])]),s("div",N,[A(l.$slots,"default",{},()=>[Q])])])],10,T)):r("",!0),s("ul",{class:c(t.ulClass),"aria-describedby":e.GROUP_ID+"__help","aria-labelledby":e.GROUP_ID},[(i(!0),o(b,null,D(t.groupData,a=>(i(),o("li",{key:a.id},[s("span",null,[s("input",{class:c("fsa-"+e.GROUP_TYPE),type:e.GROUP_TYPE,id:a.id,name:a.name,checked:a.isChecked},null,10,X),s("label",{for:a.id},_(a.label),9,J)])]))),128))],10,q),e.HELP_MESSAGE?(i(),o("span",{key:1,id:e.GROUP_ID+"__help",class:"fsa-field__help"},_(e.HELP_MESSAGE),9,K)):r("",!0),t.hasError?(i(),o("span",{key:2,id:e.GROUP_ID+"__error-message",class:"fsa-field__message",role:"alert"},_(e.ERROR_MESSAGE),9,W)):r("",!0)],2)}var ie=u(C,[["render",Z]]);export{ie as default};