(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(t,e,o){"use strict";o.r(e);var l={props:["items","active"],data:function(){return{backgroundColor:"bg-blue",secondaryColor:"bg-white",borderColor:"bg-white",textColor:"text-white",tooltip:null,showMobileMenu:!1}},created:function(){this.backgroundColor=this.active%2==0?"bg-blue":"bg-white",this.secondaryColor=this.active%2==0?"bg-white":"bg-blue",this.borderColor=this.active%2==0?"border-white":"border-blue",this.textColor=this.active%2==0?"text-white":"text-blue"},mounted:function(){console.log("ÍM ALLIVEEEEEE")}},n=o(54),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"fixed z-30 flex flex-col items-center w-8 py-4 transition-all duration-200 rounded-full -right-8 md:right-1 top-1/3",class:t.backgroundColor},t._l(t.items,(function(e,i){return o("button",{key:i,staticClass:"relative flex items-center justify-center w-full h-10 group",attrs:{"aria-label":"Navigeren naar: "+e.name},on:{click:function(e){return t.$emit("scroll-to",i+1)},mouseover:function(o){t.tooltip=e},mouseleave:function(e){t.tooltip=null}}},[o("div",{staticClass:"w-4 h-4 my-3 border-2 rounded-full group-hover:bg-blue-light",class:[parseInt(t.active,10)===i?t.backgroundColor:t.secondaryColor,t.borderColor],staticStyle:{padding:"2px"}}),t._v(" "),e===t.tooltip?o("div",{staticClass:"absolute flex items-center justify-center w-40 h-12 border-2 border-white right-9 rounded-xl flex-nowrap",class:t.backgroundColor},[o("h3",{staticClass:"inline mx-4 text-xl font-semibold",class:t.textColor},[t._v("\n          "+t._s(e.name)+"\n        ")])]):t._e()])})),0),t._v(" "),o("div",{staticClass:"fixed flex items-center justify-center w-16 h-16 p-2 transition-all duration-300 rounded-full bg-midnight right-4 md:-right-16",staticStyle:{bottom:"5%","z-index":"100"},on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[o("svg",{staticClass:"w-full h-full text-white stroke-current",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),o("div",{staticClass:"absolute flex flex-col items-start w-48 py-2 transition-all rounded-lg bg-midnight bottom-20",class:t.showMobileMenu?"opacity-100 right-2":"opacity-0 -right-56",on:{click:function(t){t.stopPropagation()}}},t._l(t.items,(function(e,i){return o("button",{key:i,staticClass:"w-full py-2 text-xl font-bold",class:parseInt(t.active,10)===i?"text-orange":"text-white",on:{click:function(e){t.$emit("scroll-to",i+1),t.showMobileMenu=!1}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);