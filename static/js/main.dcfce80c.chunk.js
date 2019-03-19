(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1207:function(e,t,a){},1208:function(e,t,a){},1212:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(485),i=a.n(o),l=(a(494),a(12)),s=a(13),c=a(18),u=a(17),d=a(19),h=a(58),p=a(94),m=(a(495),function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text sub-text text-center"},this.props.text)))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item mx-3 active"},r.a.createElement(h.b,{class:"nav-link",to:"/home"},r.a.createElement(m,{src:"home.png",text:"Home"}))),r.a.createElement("li",{class:"nav-item mx-3 active"},r.a.createElement(h.b,{class:"nav-link",to:"/gallery"},r.a.createElement(m,{src:"gallery.png",text:"Gallery"}))),r.a.createElement("li",{class:"nav-item mx-3 active"},r.a.createElement(h.b,{class:"nav-link",to:"/contact"},r.a.createElement(m,{src:"card.png",text:"Contact"}))))))}}]),t}(n.Component),v=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"parseColor",value:function(){var e="#";return e+=this.props.backgroundColor.r.toString(16),e+=this.props.backgroundColor.g.toString(16),e+=this.props.backgroundColor.b.toString(16),e+=this.props.backgroundColor.a.toString(16)}},{key:"render",value:function(){var e={backgroundColor:this.parseColor()};return r.a.createElement("button",{className:"btn sub-text w-100",style:e},r.a.createElement("div",{className:"btn-text-sm"}," ",this.props.text," "))}}]),t}(n.Component);v.defaultProps={text:"Default text",backgroundColor:{r:100,g:100,b:100,a:100}};var b=v,f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container fadein py-5"},r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"main-text"},"Dellon Collins")),r.a.createElement("div",{className:"row w-75 px-4 px-md-0 my-2 mb-5 fadein"},r.a.createElement("div",{className:"sub-text"},"I am a software associate from Columbus, OH and am currently living in Indianapolis. My area of work is Digital Experience/UI. If you are interested in my work please do not hesitate to contact me.")),r.a.createElement("div",{className:"row w-50 mt-5"},r.a.createElement("div",{className:"col-lg my-3 my-lg-0"},r.a.createElement(b,{text:"See my work",backgroundColor:{r:55,g:55,b:55,a:150}})),r.a.createElement("div",{className:"col-lg my-3 my-lg-0"},r.a.createElement(b,{text:"Get in touch",backgroundColor:{r:55,g:55,b:55,a:150}}))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).renderCarouselItems=function(){var t=[],a="carousel-item active";return e.state.items.forEach(function(e){t.push(r.a.createElement(h.b,{key:e.link,className:a,to:"/".concat(e.link)},r.a.createElement("img",{src:e.src,className:"d-block w-100 img-filter"}),r.a.createElement("div",{className:"carousel-caption d-none "},r.a.createElement("h5",null,e.label),r.a.createElement("p",null,e.description)))),a="carousel-item"}),console.log(t),t},e.state={items:[{src:"gallery/plot_2.png",label:"2D Curve Generation",description:"Place control points to generate curves using various algorithms",link:"plot"},{src:"backgroundred.png",label:"Curve Generations",description:"Place control points to generate curves using various algorithms"}]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row fadein py-4 mx-lg-5"},r.a.createElement("div",{className:"carousel slide col-md-8","data-interval":!1,onChange:function(e){console.log(e)},id:"carouselExampleCaptions","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},this.renderCarouselItems())),r.a.createElement("div",{className:"col-md-4 d-block"},r.a.createElement("h5",null,this.state.items[0].label),r.a.createElement("p",null,this.state.items[0].description))))}}]),t}(r.a.Component),x=a(9),E=a(131),O=a.n(E),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={x:"",y:""},a.isEnabled=a.isEnabled.bind(Object(x.a)(Object(x.a)(a))),a.renderButton=a.renderButton.bind(Object(x.a)(Object(x.a)(a))),a.onInputChange=a.onInputChange.bind(Object(x.a)(Object(x.a)(a))),a.onAddPointClick=a.onAddPointClick.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onInputChange",value:function(e){switch(e.target.id){case"xInput":this.setState({x:e.target.value});break;case"yInput":this.setState({y:e.target.value})}}},{key:"onAddPointClick",value:function(){var e=this.refs.xInput.value,t=this.refs.yInput.value;console.log("adding point",e,t),this.props._addPoint({x:e,y:t})}},{key:"isEnabled",value:function(){try{var e=this.refs.xInput.value,t=this.refs.yInput.value}catch(a){return!1}return e=parseFloat(e),t=parseFloat(t),!isNaN(e)&&!isNaN(t)}},{key:"renderButton",value:function(){return this.isEnabled()?r.a.createElement("button",{className:"btn btn-success",onClick:this.onAddPointClick},"Add Point"):r.a.createElement("button",{className:"btn btn-success",onClick:this.onAddPointClick,disabled:!0},"Add Point")}},{key:"renderBody",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-start flex-wrap"},r.a.createElement("div",{className:"input-group mx-0"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"xInput"},"X")),r.a.createElement("input",{id:"xInput",type:"text",ref:"xInput",onChange:this.onInputChange,className:"form-control"})),r.a.createElement("div",{className:"input-group my-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"yInput"},"Y")),r.a.createElement("input",{id:"yInput",type:"text",ref:"yInput",onChange:this.onInputChange,className:"form-control"})),r.a.createElement("div",{className:"mt-2"},this.renderButton()))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card w-100 bg-transparent"},r.a.createElement("div",{className:"card-header btn btn-success bg-success font-weight-bold",id:"header","data-toggle":"collapse","data-target":"#body","aria-expanded":"false","aria-controls":"body"},"Add Point (x,y)"),r.a.createElement("div",{className:"card-body collapse","aria-labelledby":"instructionHeader",id:"body"},this.renderBody()))}}]),t}(r.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text bg-success text-white"},"Curve Algorithm Selector")),r.a.createElement("select",{onChange:function(t){return e.props._onChange(t.target.value)},className:"form-control"},r.a.createElement("option",{value:"bezier"},"B\xe9zier Curve"),r.a.createElement("option",{value:"catmullrom"},"Catmull Rom Spline"),r.a.createElement("option",{value:"quadraticBspline"},"Quadratic B-Spline"),r.a.createElement("option",{value:"cubicBspline"},"Cubic B-Spline")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon2","data-toggle":"popover",title:"The same set of control points will yield different result with different algorithms"},"?")))}}]),t}(r.a.Component),k=a(175),N=a(273),w=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"bezierMatrix",value:function(e){for(var t=N.zeros(e,e),a=N.zeros(1,e),n=0;n<e;n++)a[n]=N.nCr(e-1,n);for(var r=0;r<e;r++)for(var o=0;o<e-r;o++)t[r][o]=N.nCr(e-1-r,o)*a[r];for(var i=0;i<e;i++)for(var l=1,s=e-1-i;s>-1;s--)t[i][s]=t[i][s]*l,l=-l;return t}},{key:"generateBezier",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=[],n=e.length,r=N.linspace(0,1,t),o=0;o<r[0].length;o++){for(var i=r[0][o],l=[],s=n-1;s>-1;s--)l.push(Math.pow(i,s));a.push(l)}var c=this.bezierMatrix(n),u=N.multiply(a,c);return u=N.multiply(u,e)}}]),e}();w.dim=N.dim;var P=a(273),_=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"calculateKnot",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=t[0],o=t[1],i=a[0],l=a[1];return Math.pow(Math.pow(Math.pow(i-r,2)+Math.pow(l-o,2),.5),n)+e}},{key:"generateCRSpline",value:function(e){var t,a,n,r,o,i,l,s,c,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;c=[2*e[0][0]-e[1][0],2*e[0][1]-e[1][1]],u=[2*e[e.length-1][0]-e[e.length-2][0],2*e[e.length-1][1]-e[e.length-2][1]],e.unshift(c),e.push(u);for(var h=[],p=0;p<e.length-3;p++){t=e[p],a=e[p+1],n=e[p+2],r=e[p+3],0,o=this.calculateKnot(0,t,a),i=this.calculateKnot(o,a,n),l=this.calculateKnot(i,n,r),s=P.linspace(o,i,d);for(var m=0;m<s[0].length;m++){var g=s[0][m],v=P.add(P.scalarMultiply((o-g)/(o-0),t),P.scalarMultiply((g-0)/(o-0),a)),b=P.add(P.scalarMultiply((i-g)/(i-o),a),P.scalarMultiply((g-o)/(i-o),n)),f=P.add(P.scalarMultiply((l-g)/(l-i),n),P.scalarMultiply((g-i)/(l-i),r)),y=P.add(P.scalarMultiply((i-g)/(i-0),v),P.scalarMultiply((g-0)/(i-0),b)),x=P.add(P.scalarMultiply((l-g)/(l-o),b),P.scalarMultiply((g-o)/(l-o),f)),E=P.add(P.scalarMultiply((i-g)/(i-o),y),P.scalarMultiply((g-o)/(i-o),x));h.push(E[0])}}return h}}]),e}(),I=a(273),S=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"generateQuadraticBspline",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=[[1,1,0],[-2,2,0],[1,-2,1]];a=I.scalarMultiply(.5,a);for(var n=I.linspace(0,1,t),r=[],o=0;o<n[0].length;o++){for(var i=n[0][o],l=[],s=0;s<3;s++)l.push(Math.pow(i,s));r.push(l)}var c=[];e.unshift(e[0]),e.push(e[e.length-1]);for(var u=0;u<e.length-2;u++){var d=[e[u],e[u+1],e[u+2]],h=I.multiply(r,a);(h=I.multiply(h,d)).forEach(function(e){c.push(e)})}return c}},{key:"generateCubicBspline",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=[[-1,3,-3,1],[3,-6,3,0],[-3,0,3,0],[1,4,1,0]];a=I.scalarMultiply(1/6,a);for(var n=I.linspace(0,1,t),r=[],o=0;o<n[0].length;o++){for(var i=n[0][o],l=[],s=[],c=3;c>-1;c--)l.push(Math.pow(i,c)),s.push("u ^ ".concat(c));r.push(l)}var u=[];e.unshift(e[0]),e.unshift(e[0]),e.push(e[e.length-1]),e.push(e[e.length-1]);for(var d=0;d<e.length-3;d++){var h=[e[d],e[d+1],e[d+2],e[d+3]],p=I.multiply(r,a);(p=I.multiply(p,h)).forEach(function(e){u.push(e)})}return u}}]),e}(),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={x:0,y:0,index:0},a.onChange=a.onChange.bind(Object(x.a)(Object(x.a)(a))),a.setCoordinates=a.setCoordinates.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props._getPoint(0);this.setState({x:e.x,y:e.y})}},{key:"isEnabled",value:function(){try{var e=this.state.x,t=this.state.y}catch(a){return!1}return e=parseFloat(e),t=parseFloat(t),!isNaN(e)&&!isNaN(t)}},{key:"setCoordinates",value:function(){console.log("Setting point ".concat(this.state.index," to (").concat(this.state.x,", ").concat(this.state.y,")")),this.props._setCoord({index:parseInt(this.state.index),x:parseFloat(this.state.x),y:parseFloat(this.state.y)})}},{key:"onChange",value:function(e){if("indexSelect"===e.target.id){this.props._onchange(e.target.value);var t=this.props._getPoint(parseInt(e.target.value));this.setState({x:t.x,y:t.y,index:e.target.value})}else"xInput"===e.target.id?this.setState({x:e.target.value}):"yInput"===e.target.id&&this.setState({y:e.target.value})}},{key:"renderOptions",value:function(){for(var e=[],t=0;t<this.props.numPoints;t++)e.push(r.a.createElement("option",{value:t,key:t},t));return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"card w-100 bg-transparent"},r.a.createElement("div",{className:"card-header btn btn-success bg-success font-weight-bold",id:"header","data-toggle":"collapse","data-target":"#setcoordbody","aria-expanded":"false","aria-controls":"setcoordbody"},"Set Point (x,y)"),r.a.createElement("div",{className:"card-body collapse","aria-labelledby":"header",id:"setcoordbody"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"xInput"},"Point Index")),r.a.createElement("select",{onChange:this.onChange,type:"text",id:"indexSelect",className:"form-control"},this.renderOptions())))),r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-lg"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"xInput"},"X")),r.a.createElement("input",{value:this.state.x,onChange:this.onChange,type:"text",id:"xInput",className:"form-control"}))),r.a.createElement("div",{className:"col-lg"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"xInput"},"Y")),r.a.createElement("input",{value:this.state.y,onChange:this.onChange,type:"text",id:"yInput",className:"form-control"})))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{disabled:!this.isEnabled(),className:"col-8 btn btn-success",onClick:this.setCoordinates},"Set Coordinates"))))}}]),t}(r.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card w-100 bg-transparent"},r.a.createElement("div",{className:"card-header btn btn-success bg-success font-weight-bold",id:"instructionHeader","data-toggle":"collapse","data-target":"#instructionBody","aria-expanded":"false","aria-controls":"instructionBody"},"Instructions"),r.a.createElement("div",{id:"instructionBody",className:"collapse","aria-labelledby":"instructionHeader"},r.a.createElement("div",{className:"card-body text-white bg-dark-faded"},r.a.createElement("p",null,"This plot generates curves using an ordered list of control points. Rearrange the points to manipulate the curve. Keep in mind that the order of points matters in rendering the curve. To see the index of a point, hover over it (indexing begins at 0)."),r.a.createElement("p",null,"Left click on a control point to pick it up. Once selected you can drag and control its position. Left click again to set the point at that position. Be careful not to double click or a new point will appear on your cursor. Alternatively you can select the index of the point below the graph and directly enter a number to change a point's coordinates."),r.a.createElement("p",null,'There are two ways to add a point. You may double click on the graph as mentioned above or you can enter the (x,y) coordinates in the "Add Points" panel and click the button below the input boxes. New points are added the end of the points list.'),r.a.createElement("p",null,"Right-click on a control point to delete it."))))}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChangeHandler=function(e){a.setState({numPoints:e.target.value}),a.props._changeNumPoints(e.target.value)},a.state={numPoints:a.props.initialNum},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group align-items-center "},r.a.createElement("div",{className:"input-group-prepend "},r.a.createElement("label",{htmlFor:"range",className:"input-group-text bg-success text-white"},"Points per Segment")),r.a.createElement("input",{className:"form-control h-100 no-border custom-range px-0 px-lg-3",id:"range",value:this.state.numPoints,type:"range",min:"2",max:"30",onChange:this.onChangeHandler}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon2","data-toggle":"popover",title:"The same set of control points will yield different result with different algorithms"},this.state.numPoints)))}}]),t}(r.a.Component),F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).locked=null,e.gd=null,e.d3=null,e._fullLayout=null,e.state={_x:[0,1,2],_y:[2,1,2],currentPoint:[],selectedIndex:0,numPoints:3,curve:"bezier",curvePoints:10},e.attach=e.attach.bind(Object(x.a)(Object(x.a)(e))),e.graphEventListener=e.graphEventListener.bind(Object(x.a)(Object(x.a)(e))),e.onClickHandler=e.onClickHandler.bind(Object(x.a)(Object(x.a)(e))),e.getCoordChange=e.getCoordChange.bind(Object(x.a)(Object(x.a)(e))),e.draw=e.draw.bind(Object(x.a)(Object(x.a)(e))),e.preprocessPoints=e.preprocessPoints.bind(Object(x.a)(Object(x.a)(e))),e.addPoint=e.addPoint.bind(Object(x.a)(Object(x.a)(e))),e.deletePoint=e.deletePoint.bind(Object(x.a)(Object(x.a)(e))),e.setCoord=e.setCoord.bind(Object(x.a)(Object(x.a)(e))),e.onDoubleClickHandler=e.onDoubleClickHandler.bind(Object(x.a)(Object(x.a)(e))),e.getOffset=e.getOffset.bind(Object(x.a)(Object(x.a)(e))),e.onIndexSelectorChange=e.onIndexSelectorChange.bind(Object(x.a)(Object(x.a)(e))),e.changeCurve=e.changeCurve.bind(Object(x.a)(Object(x.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"setCoord",value:function(){this.setState({_x:this.state._x,_y:this.state._y})}},{key:"getOffset",value:function(){var e=this.gd.getBoundingClientRect();return{top:e.top,left:e.left}}},{key:"componentDidMount",value:function(){this.d3=O.a.d3,this.gd=document.getElementById("graph"),this.draw(!0)}},{key:"draw",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.curve,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.curvePoints;if(console.log(t,a,n),"bezier"===a){var r=w.generateBezier(this.preprocessPoints(),n);e=this.postprocessPoints(r)}else"catmullrom"===a?e=this.postprocessPoints(_.generateCRSpline(this.preprocessPoints(),n)):"quadraticBspline"===a?e=this.postprocessPoints(S.generateQuadraticBspline(this.preprocessPoints(),n)):"cubicBspline"===a&&(e=this.postprocessPoints(S.generateCubicBspline(this.preprocessPoints(),n)));var o=[{x:this.state._x,y:this.state._y,mode:"markers",name:"control points",text:this.pointLabels(this.state._x.length),textposition:"bottom center"},{x:e.x,y:e.y,name:"curve",mode:"lines"}],i={paper_bgcolor:"#3333"};t?O.a.newPlot("graph",o,null,{responsive:!0,doubleClick:!1}).then(this.attach()):(i={xaxis:{range:this._fullLayout.xaxis.range},yaxis:{range:this._fullLayout.xaxis.range}},O.a.react("graph",o,i))}},{key:"preprocessPoints",value:function(){for(var e=[],t=0;t<this.state._x.length;t++)e.push([this.state._x[t],this.state._y[t]]);return e}},{key:"postprocessPoints",value:function(e){var t=[],a=[];try{for(var n=0;n<e.length;n++)t.push(e[n][0]),a.push(e[n][1]);return{x:t,y:a}}catch(r){return{x:this.state._x,y:this.state._y}}}},{key:"pointLabels",value:function(e){for(var t=[],a=0;a<e;a++)t.push("Point ".concat(a));return t}},{key:"attach",value:function(){this._fullLayout=this.gd._fullLayout,this.gd.oncontextmenu=function(){return!1},this.gd.addEventListener("mousemove",this.graphEventListener),this.gd.on("plotly_click",this.onClickHandler),this.gd.on("plotly_doubleclick",this.onDoubleClickHandler)}},{key:"graphEventListener",value:function(e){var t=this.getOffset();this._fullLayout=this.gd._fullLayout;var a=this._fullLayout.xaxis.p2c(e.x-this._fullLayout.margin.l-t.left),n=this._fullLayout.yaxis.p2c(e.y-this._fullLayout.margin.t-t.top);this.setState({currentPoint:[a,n]}),Object(k.isNull)(this.locked)||(this.state._x[this.locked]=a,this.state._y[this.locked]=n,this.setCoord(),this.draw()),O.a.relayout(this.gd,"title",["x: "+a.toFixed(3),"y : "+n.toFixed(3)].join("<br>"))}},{key:"onClickHandler",value:function(e){if(Object(k.isNull)(this.locked)){if(1===e.event.which){for(var t=0;t<e.points.length;t++)if(0===e.points[t].curveNumber)var a=e.points[t].pointIndex;this.locked=a}else if(3===e.event.which)for(t=0;t<e.points.length;t++)0===e.points[t].curveNumber&&this.deletePoint(e.points[t].pointIndex)}else this.locked=null}},{key:"onDoubleClickHandler",value:function(e){var t={x:this.state.currentPoint[0],y:this.state.currentPoint[1]};console.log(t),this.addPoint(t)}},{key:"onIndexSelectorChange",value:function(e){this.setState({selectedIndex:e})}},{key:"changeCurve",value:function(e){this.setState({curve:e}),this.draw(void 0,e)}},{key:"getCoordChange",value:function(e){console.log(e),this.state._x[e.index]=e.x,this.state._y[e.index]=e.y,this.setCoord(),this.draw()}},{key:"addPoint",value:function(e){this.state._x.push(e.x),this.state._y.push(e.y),this.setState({numPoints:this.state.numPoints+1}),this.setCoord(),this.draw()}},{key:"deletePoint",value:function(e){for(var t=[],a=[],n=0;n<this.state._x.length;n++)n!==e&&(t.push(this.state._x[n]),a.push(this.state._y[n]));this.state._x=t,this.state._y=a,this.setState({numPoints:this.state.numPoints-1}),this.setCoord(),this.draw()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-3"},r.a.createElement("div",{className:"col-lg-8 mx-3 mx-lg-0"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement(j,{_onChange:this.changeCurve})),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(L,{initialNum:this.state.curvePoints,_changeNumPoints:function(t){e.setState({curvePoints:t}),e.draw(void 0,void 0,t)}})),r.a.createElement("div",{id:"graph"})),r.a.createElement("div",{className:"col-lg mx-3 mx-lg-0 ml-0 ml-lg-3 mt-3 mt-lg-0 px-3"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement(B,null)),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(M,{numPoints:this.state.numPoints,_setCoord:this.getCoordChange,_onchange:this.onIndexSelectorChange,_getPoint:function(t){return{x:e.state._x[t],y:e.state._y[t]}}})),r.a.createElement("div",{className:"row"},r.a.createElement(C,{_addPoint:this.addPoint})))))}}]),t}(r.a.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{basename:"/gallery"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/plot",component:F}),r.a.createElement(p.a,{path:"",component:y}))))}}]),t}(r.a.Component),z=(a(1207),a(1208),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("/portfolio")}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(g,null),r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/home",component:f}),r.a.createElement(p.a,{path:"/gallery",component:H}),r.a.createElement(p.a,{path:"/plot",component:F})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(1209);i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},273:function(e,t,a){"use strict";function n(e){return e>0?e*this.factorial(e-1):1}function r(e,t){return this.factorial(e)/this.factorial(t)/this.factorial(e-t)}function o(e){var t=[];return t.push(e),console.log(t),t}function i(e,t){var a=t.length,n=t[0].length;n||(a=(t=[t]).length,n=t[0].length);for(var r=u(a,n),o=0;o<a;o++)for(var i=0;i<n;i++)r[o][i]=e*t[o][i];return r}function l(e,t,a){for(var n=this.zeros(1,a),r=(t-e)/(a-1),o=0;o<a;o++)n[0][o]=e+r*o;return n}function s(){return u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)}function c(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],n=0,r=0;r<e;r++){for(var o=[],i=0;i<t;i++)o.push(n),n++;a.push(o)}return a}function u(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=[],r=0;r<e;r++){for(var o=[],i=0;i<t;i++)o.push(a);n.push(o)}return n}function d(e,t){var a=e.length,n=t[0].length;if(e.length===t.length&&e[0].length===t[0].length){for(var r=s(a,n),o=0;o<a;o++)for(var i=0;i<n;i++)r[o][i]=e[o][i]+t[o][i];return r}console.log("error size mismatch")}function h(e,t){var a=e.length,n=t[0].length;if(e[0].length===t.length){for(var r=this.zeros(a,n),o=0;o<a;o++)for(var i=0;i<n;i++){for(var l=[],s=0;s<t.length;s++)l.push(t[s][i]);r[o][i]=this.dot(e[o],l)}return r}}function p(e,t){if(e.length===t.length){for(var a=0,n=0;n<e.length;n++)a+=e[n]*t[n];return a}}function m(e){return"dim: (".concat(e.length,",").concat(e[0].length,")")}function g(e){for(var t="",a=0;a<e.length;a++){var n=e[a];t+="[";for(var r=0;r<n.length;r++)t+=" ".concat(n[r],",");t+=" ]\n"}return t}a.r(t),a.d(t,"factorial",function(){return n}),a.d(t,"nCr",function(){return r}),a.d(t,"arrayToMatrix",function(){return o}),a.d(t,"scalarMultiply",function(){return i}),a.d(t,"linspace",function(){return l}),a.d(t,"zeros",function(){return s}),a.d(t,"createIndexMatrix",function(){return c}),a.d(t,"createMatrix",function(){return u}),a.d(t,"add",function(){return d}),a.d(t,"multiply",function(){return h}),a.d(t,"dot",function(){return p}),a.d(t,"dim",function(){return m}),a.d(t,"printMatrix",function(){return g})},489:function(e,t,a){e.exports=a(1212)},494:function(e,t,a){},495:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},507:function(e,t){},738:function(e,t){}},[[489,1,2]]]);
//# sourceMappingURL=main.dcfce80c.chunk.js.map