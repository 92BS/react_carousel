(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),c=n(2),s=n(4),r=n(7),m=n(8),l=n(11),o=n(9),d=n(1),u=n.n(d),h=(n(16),n(10)),j=(n(17),n(5)),b=n.n(j),p=n(0),x=function(e){var t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,c=e.animationDuration,s=e.infinite,r=a*i+20*(i-1),m=n*(a+20),l=-(a+20)*(t.length-i),o=Object(d.useState)(0),u=Object(h.a)(o,2),j=u[0],x=u[1];return Object(p.jsx)("div",{className:"Carousel",children:Object(p.jsxs)("div",{className:"Carousel__container",children:[Object(p.jsx)("button",{className:b()("button-prev",{"button-prev__disabled":!s&&0===j}),type:"button",onClick:function(){x((function(e){return e+m>=0?0:e+m})),s&&0===j&&x(l)},children:Object(p.jsx)("div",{className:"button-prev__text",children:"<"})}),Object(p.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(r,"px"),gap:"".concat(20,"px")},children:t.map((function(e,t){return Object(p.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(j,"px)"),transition:"transform ".concat(c,"ms ease")},children:Object(p.jsx)("img",{src:e,alt:"".concat(t+1),width:a})},e)}))}),Object(p.jsx)("button",{className:b()("button-next",{"button-next__disabled":!s&&j===l}),type:"button","data-cy":"next",onClick:function(){x((function(e){return e-m<=l?l:e-m})),s&&j===l&&x(0)},children:Object(p.jsx)("div",{className:"button-next__text",children:">"})})]})})},g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),m=0;m<i;m++)a[m]=arguments[m];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleChange=function(t){var n=t.target,i=n.name,a=n.value,r=n.checked,m=n.type;e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},i,"checkbox"===m?r:a))}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,i=e.frameSize,a=e.itemWidth,c=e.animationDuration,s=e.infinite;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(p.jsx)(x,{images:t,step:n,frameSize:i,itemWidth:a,animationDuration:c,infinite:s}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsxs)("div",{className:"input-container__item",children:[Object(p.jsx)("label",{htmlFor:"itemId",children:"item - width "}),Object(p.jsx)("input",{name:"itemWidth",id:"itemId",type:"number",min:"100",max:"220",onChange:this.handleChange,value:a})]}),Object(p.jsxs)("div",{className:"input-container__item",children:[Object(p.jsx)("label",{htmlFor:"frameId",children:"frame-size"}),Object(p.jsx)("input",{name:"frameSize",id:"frameId",type:"number",min:"1",max:"10",onChange:this.handleChange,value:i})]}),Object(p.jsxs)("div",{className:"input-container__item",children:[Object(p.jsx)("label",{htmlFor:"stepId",children:"step"}),Object(p.jsx)("input",{name:"step",id:"stepId",type:"number",min:"1",max:"5",onChange:this.handleChange,value:n})]}),Object(p.jsxs)("div",{className:"input-container__item",children:[Object(p.jsx)("label",{htmlFor:"animationDurationId",children:"animation-duration"}),Object(p.jsx)("input",{name:"animationDuration",id:"animationDurationId",type:"number",min:"100",max:"5000",step:"100",onChange:this.handleChange,value:c})]}),Object(p.jsxs)("div",{className:"input-container__item",children:[Object(p.jsx)("label",{htmlFor:"infiniteId",children:"Infinite"}),Object(p.jsx)("input",{name:"infinite",id:"infiniteId",type:"checkbox",onChange:this.handleChange})]})]})]})}}]),n}(u.a.Component),O=g;a.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.02eef37b.chunk.js.map