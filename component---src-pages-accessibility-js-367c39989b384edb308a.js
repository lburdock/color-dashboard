(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/ClV":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("phMG"),l=a("MUpH"),c=a("YwZP"),i=a("ufqH"),s=a("vOnD"),m=a("rEKk"),d=a("D8uh"),u=a("LBZK"),p=a("NYPj"),g=a("im1I"),f=a("rmAv"),h=a("eX/o"),b=a("e58J"),y=a("zLVn"),E=s.c.span.withConfig({displayName:"styles__TextColorProvider",componentId:"vufoeh-0"})(["color:",";"],(function(e){return e.color})),v=s.c.span.withConfig({displayName:"styles__LargeTextBig",componentId:"vufoeh-1"})(["font-size:18pt;"]),x=s.c.span.withConfig({displayName:"styles__LargeTextBold",componentId:"vufoeh-2"})(["font-size:14pt;font-weight:bold;"]),w=s.c.span.withConfig({displayName:"styles__NormalTextBig",componentId:"vufoeh-3"})(["font-size:17pt;"]),A=s.c.span.withConfig({displayName:"styles__NormalTextBold",componentId:"vufoeh-4"})(["font-size:13pt;font-weight:bold;"]),N=s.c.div.withConfig({displayName:"styles__Tag",componentId:"vufoeh-5"})(["border-radius:",";color:white;font-weight:bold;min-width:4rem;padding:0.3rem 0.5rem;"],(function(e){return e.theme.borderRadius})),C=Object(s.c)(N).withConfig({displayName:"styles__DangerTag",componentId:"vufoeh-6"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),k=Object(s.c)(N).withConfig({displayName:"styles__SuccessTag",componentId:"vufoeh-7"})(["background-color:",";"],(function(e){return e.theme.colors.success})),_=s.c.span.withConfig({displayName:"styles__NotApplicable",componentId:"vufoeh-8"})(["color:",";font-style:italic;"],(function(e){return e.theme.colors.minTextGray})),I=s.c.div.withConfig({displayName:"styles__ThreeColumnGrid",componentId:"vufoeh-9"})(["align-items:center;column-gap:1rem;display:grid;grid-template-columns:repeat(3,max-content);row-gap:0.5rem;"]),j=s.c.div.withConfig({displayName:"styles__Grid",componentId:"vufoeh-10"})(["align-items:center;column-gap:1rem;display:grid;grid-template-columns:repeat(4,max-content);row-gap:0.5rem;@media (max-width:660px){grid-template-columns:repeat(3,max-content);>:nth-child(4n){display:none;}}"]),O=s.c.div.withConfig({displayName:"styles__GridHeaderItem",componentId:"vufoeh-11"})(["font-size:0.8rem;font-weight:bold;text-transform:uppercase;",";"],(function(e){var t=e.textAlign;return t&&"text-align: "+t})),T=s.c.div.withConfig({displayName:"styles__GridItem",componentId:"vufoeh-12"})(["",";"],(function(e){var t=e.textAlign;return t&&"text-align: "+t})),S=Object(s.c)(T).withConfig({displayName:"styles__Example",componentId:"vufoeh-13"})(["align-items:center;background:",";border-radius:",";display:inline-flex;padding:0.5rem;"],(function(e){return e.background}),(function(e){return e.theme.borderRadius})),L=s.c.span.withConfig({displayName:"styles__Spacer",componentId:"vufoeh-14"})(['margin:0 0.5rem;&:after{content:"\\2022";}']),M=s.c.input.withConfig({displayName:"styles__StyledInput",componentId:"vufoeh-15"})(["border:1px solid ",";border-radius:",";box-shadow:none;box-sizing:border-box;padding:0.25rem;"],(function(e){return e.borderColor}),(function(e){return e.theme.borderRadius})),z=Object(s.c)(f.b).withConfig({displayName:"styles__StyledIconWrapper",componentId:"vufoeh-16"})(["color:",";"],(function(e){return e.color})),G=function(e){return e.pass?r.a.createElement(k,{key:"success"},"Pass"):r.a.createElement(C,{key:"danger"},"Fail")},F=[{text:"Type",align:"left"},{text:"AA",align:"center"},{text:"AAA",align:"center"},{text:"Example",align:"left"}],B=function(e){var t,a,n,o,l,c,i,s=e.backgroundColorString,m=e.contrastScores,d=e.foregroundColorString,u=Object(y.a)(e,["backgroundColorString","contrastScores","foregroundColorString"]),p=(t=d,n=(a=m).AA,o=a.AAA,l=a.AALarge,c=a.AAALarge,i=r.a.createElement(G,{pass:l}),[{id:"normal",type:"Normal text",example:r.a.createElement(E,{color:t,key:t},r.a.createElement(w,null,"17pt text"),r.a.createElement(L,null),r.a.createElement(A,null,"13pt bold text")),aa:r.a.createElement(G,{pass:n}),aaa:r.a.createElement(G,{pass:o})},{id:"large",type:"Large text",example:r.a.createElement(E,{color:t,key:t},r.a.createElement(v,null,"18pt text"),r.a.createElement(L,null),r.a.createElement(x,null,"14pt bold text")),aa:i,aaa:r.a.createElement(G,{pass:c})},{id:"ui",type:"UI Component",example:r.a.createElement(M,{borderColor:t,key:t}),aa:i,aaa:r.a.createElement(_,null,"N/A")},{id:"icon",type:"Graphical Object",example:r.a.createElement(z,{color:t,key:t,size:"small"},r.a.createElement(f.a,{"aria-hidden":"true",icon:"fas fa-heart"})),aa:i,aaa:r.a.createElement(_,null,"N/A")}]);return r.a.createElement(j,u,F.map((function(e){return r.a.createElement(O,{key:e.text,textAlign:e.align},e.text)})),p.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(T,null,e.type),r.a.createElement(T,{textAlign:"center"},e.aa),r.a.createElement(T,{textAlign:"center"},e.aaa),r.a.createElement(T,null,r.a.createElement(S,{background:s},e.example)))})))},q=[{text:"Type",align:"left"},{text:"Level AA",align:"center"},{text:"Level AAA",align:"center"}],U=[{id:"normal",type:"Normal text",aa:r.a.createElement("code",null,"4.5:1"),aaa:r.a.createElement("code",null,"7:1")},{id:"large",type:"Large text",aa:r.a.createElement("code",null,"3:1"),aaa:r.a.createElement("code",null,"4.5:1")},{id:"ui",type:"UI Component",aa:r.a.createElement("code",null,"3:1"),aaa:r.a.createElement(_,null,"N/A")},{id:"icon",type:"Graphical Object",aa:r.a.createElement("code",null,"3:1"),aaa:r.a.createElement(_,null,"N/A")}],W=function(e){return r.a.createElement(I,e,q.map((function(e){return r.a.createElement(O,{key:e.text,textAlign:e.align},e.text)})),U.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(T,null,e.type),r.a.createElement(T,{textAlign:"center"},e.aa),r.a.createElement(T,{textAlign:"center"},e.aaa))})))},R=a("Fdtq"),K=a("GZAY"),P=function(e){var t=e.children,a=e.closeModal,n=Object(y.a)(e,["children","closeModal"]);return r.a.createElement(K.a,Object.assign({closeModal:a},n),r.a.createElement(D,{className:"modal-content box"},t),r.a.createElement("button",{"aria-label":"Close",className:"modal-close is-large",onClick:a}))},D=s.c.div.withConfig({displayName:"basic__ModalContent",componentId:"sc-1p1p07t-0"})(["margin-bottom:0 !important;"]),H=function(e){var t=e.children,a=e.addSpace;return r.a.createElement("h1",{className:Object(b.a)("is-5 has-text-weight-bold mb-3",a&&"mt-3")},t)},J=function(){var e=Object(h.a)(),t=e.closeModal,a=e.openModal,n=e.showModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{as:g.a,"aria-label":"About",onClick:a},r.a.createElement(f.a,{"aria-hidden":"true",icon:"fas fa-info-circle"})),r.a.createElement(P,{closeModal:t,showModal:n},r.a.createElement(H,null,"About this page"),r.a.createElement("p",null,"This page calculates the contrast between your color selections to determine if they are accessible for your users. If they aren't, it suggests similar colors that are."),r.a.createElement(H,{addSpace:!0},"What is contrast?"),r.a.createElement("p",null,"The contrast between two colors is determined by the difference in luminance between them. Contrast is expressed as a ratio. This ratio can range from ",r.a.createElement("code",null,"1:1")," (e.g., white text on a white background) to ",r.a.createElement("code",null,"21:1")," (e.g., black text on a white background)."),r.a.createElement(H,{addSpace:!0},"About contrast and accessibility"),r.a.createElement("p",null,"The color contrast between elements on a webpage must meet the minimum contrast values (called ",r.a.createElement("strong",null,"Level AA"),") to be considered accessible. This minimum contrast value is not the same for all elements. For example, large text has a lower contrast requirement since the size of the text makes it easier to see. These requirement are outlined in the"," ",r.a.createElement(R.a,{href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 guidelines"),". The guidelines also provide contrast values for an optional enhanced accessibility level, called ",r.a.createElement("strong",null,"Level AAA"),". The chart below shows the minimum contrast needed for different components."),r.a.createElement(H,{addSpace:!0},"Contrast value requirements"),r.a.createElement(W,null)))},Y=a("SEOR"),Z=a("vK0v"),V=a("KQm4"),Q=function(e){var t=e.children,a=e.colors,n=e.hasTopMargin;return r.a.createElement(ee,{hasTopMargin:n},r.a.createElement("div",null,r.a.createElement($,null,"Colors"),r.a.createElement("div",{className:"is-align-items-center is-flex is-flex-wrap-nowrap"},t)),r.a.createElement("div",null,r.a.createElement($,null,"Contrast"),r.a.createElement(X,{className:"box"},r.a.createElement("div",{className:"is-size-3 has-text-weight-semibold"},i.a.apply(void 0,Object(V.a)(a)),":1")),r.a.createElement($,null,"Accessibility scores"),r.a.createElement(X,{className:"box"},r.a.createElement(B,{backgroundColorString:a[0],foregroundColorString:a[1],contrastScores:i.c.apply(void 0,Object(V.a)(a))}))))},X=s.c.div.withConfig({displayName:"accessibility-section__AutoWidthBox",componentId:"wk5u3d-0"})(["display:table;"]),$=s.c.div.withConfig({displayName:"accessibility-section__Label",componentId:"wk5u3d-1"})(["border-top:1px solid #b3b3b3;color:#4a4a4a;font-size:0.8rem;padding:0.25rem 0;text-transform:uppercase;"]),ee=s.c.div.withConfig({displayName:"accessibility-section__Level",componentId:"wk5u3d-2"})(["display:flex;justify-content:space-between;",";& > *:not(:last-child){margin-right:1rem;}@media (max-width:1215px){flex-direction:column;& > *:not(:last-child){margin-right:0;}}"],(function(e){return e.hasTopMargin?"margin-top: 5rem;":""})),te=function(e){for(var t,a=e.color,n=e.targetLuminance,r=e.start,o=e.stop,l=r<o,c=r;l?c<=o:c>=o;l?c++:c--){var s=Object(i.f)(c/100,a),m=Object(i.b)(s);if(l?m>=n:m<=n)break;t=s}return t},ae=function(e,t){if(0===t)return"#000";if(1===t)return"#fff";var a=Object(i.d)(e),n=Math.round(100*a.lightness);return Object(i.b)(e)>t?te({color:e,targetLuminance:t,start:0,stop:n}):te({color:e,targetLuminance:t,stop:n,start:100})},ne=function(e,t){var a=(t+.05)/e-.05;return a<0?void 0:a},re=function(e,t){var a=e*t+.05*e-.05;return a>1?void 0:a},oe=function(e){var t=e.colors,a=e.contrast,n=[],r=t[0],o=t[1],l=t.map((function(e){return Object(i.b)(e)})),c=l[0],s=l[1],m=c>s,d=re(a,m?s:c);if(d){var u=ae(m?r:o,d);u&&n.push(m?[u,o]:[r,u])}var p=ne(a,m?c:s);if(p){var g=ae(m?o:r,p);g&&n.push(m?[r,g]:[g,o])}return n},le=function(e,t){var a=t.AA,n=t.AALarge,r=t.AAA;return[{id:3,label:"Level AA: Non-text components",description:"These color combinations meet the minimum contrast guidelines for UI components and graphical objects.",options:n?[]:oe({contrast:3,colors:e})},{id:4.5,label:"Level AA: All components",description:"These color combinations meet the minimum contrast guidelines for all components.",options:a?[]:oe({contrast:4.5,colors:e})},{id:7,label:"Level AAA",description:"These color combinations provide meet the enhanced contrast guidelines for all components.",options:r?[]:oe({contrast:7,colors:e})}].filter((function(e){return e.options.length}))};function ce(){var e=Object(l.a)(["\n  html {\n    background: ",";\n  }\n"]);return ce=function(){return e},e}var ie=["#fff","#000"],se=function(){var e=Object(c.useNavigate)(),t=Object(d.b)(),a=Object(m.a)(),o=Object(n.useState)(a.length>=2?a.slice(0,2):ie),l=o[0],s=o[1],h=Object(i.c)(l[0],l[1]),b=le(l,h),y=function(t){e(Object(p.a)(t),{replace:!0}),s(t)},E=function(e){return function(a){var n=Object(u.b)(l,e,a);y(n),t(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null),r.a.createElement("section",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"is-flex is-align-items-baseline"},r.a.createElement("h1",{className:"title mr-3"},"Color accessibility checker"),r.a.createElement(J,null)),r.a.createElement(Q,{key:l[0]+"-"+l[1],colors:l},r.a.createElement(Z.a,{className:"mr-3 mb-5",key:l[0],initColor:l[0],name:"Background",onUpdate:E(0)}),r.a.createElement(de,{as:g.a,"aria-label":"Swap colors",size:"small",onClick:function(){y([l[1],l[0]])}},r.a.createElement(f.a,{"aria-hidden":"true",icon:"fas fa-sync"})),r.a.createElement(Z.a,{className:"ml-3 mb-5",key:l[1],initColor:l[1],name:"Foreground",onUpdate:E(1)}))))),b.map((function(e){return r.a.createElement("section",{className:"hero is-white",key:e.id},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-3"},e.label),r.a.createElement("div",{className:"subtitle"},e.description),r.a.createElement("div",null,e.options.map((function(e,t){return r.a.createElement(Q,{colors:e,hasTopMargin:0!==t,key:t},r.a.createElement(Y.a,{name:"Background",className:"mr-3 mb-5",colorString:e[0]}),r.a.createElement(Y.a,{name:"Foreground",className:"mr-3 mb-5",colorString:e[1]}))}))))))})))},me=Object(s.b)(ce(),(function(e){return e.theme.colors.lightBackground})),de=Object(s.c)(f.b).withConfig({displayName:"accessibility__StyledIconWrapper",componentId:"sc-10fv08e-0"})(["@media (max-width:","){display:none;}"],(function(e){return e.theme.breakpoints.mobile}));t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"Accessibility Checker",description:"Check your foreground and background colors for accessibility. Accessible color combinations will be computed for you if your colors fail."}),r.a.createElement(se,null))}}}]);
//# sourceMappingURL=component---src-pages-accessibility-js-367c39989b384edb308a.js.map