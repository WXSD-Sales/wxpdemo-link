(function(){"use strict";var e={119:function(e,t,i){var o=i(144),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container mx-auto py-6",attrs:{id:"app"}},[i("router-view")],1)},n=[],a=i(1),l={},r=(0,a.Z)(l,s,n,!1,null,null,null),d=r.exports,u=i(345),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"mx-1"},[i("b-tabs",{attrs:{type:"is-toggle-rounded",size:"is-medium"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("b-tab-item",{attrs:{label:"Widget",value:"widget",icon:"widgets"}}),i("b-tab-item",{attrs:{label:"SDK",value:"sdk",icon:"code-braces"}})],1)],1),"widget"===e.tab?i("form",{staticClass:"box mx-1 mt-6"},[i("b-field",{attrs:{label:"Destination *","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The email address, roomId, or SIP URI.",size:"is-medium",required:"",expanded:""},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}})],1),i("b-field",{attrs:{label:"Destination Type *","label-position":"on-border","custom-class":"is-medium"}},[i("b-select",{attrs:{placeholder:"Select the type of destination",size:"is-medium",required:"",expanded:""},model:{value:e.destinationType,callback:function(t){e.destinationType=t},expression:"destinationType"}},e._l(e.destinationTypes,(function(t){return i("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),i("b-field",{attrs:{label:"Token *","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The Webex Bearer token of the local user (i.e. your token from the developer portal)",size:"is-medium",required:"",expanded:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1),i("b-field",{attrs:{label:"Label","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The email address, roomId, or SIP URI",size:"is-medium",expanded:""},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),i("b-field",{attrs:{label:"Background Image (URL)","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The publicly accessible URL of a custom background image to use",size:"is-medium",expanded:""},model:{value:e.backgroundImage,callback:function(t){e.backgroundImage=t},expression:"backgroundImage"}})],1),i("b-field",{attrs:{label:"Widget URL","label-position":"on-border","custom-class":"is-medium",type:e.isWidgetUrlValid?"":"is-danger",message:e.isWidgetUrlValid?"":"Please complete the required fields above."}},[i("b-input",{attrs:{type:"textarea",disabled:"",value:e.widgetUrl,size:"is-medium",expanded:""}})],1),i("div",{staticClass:"buttons is-right"},[i("b-button",{staticClass:"is-rounded",attrs:{type:"is-info","icon-left":"content-copy",disabled:!e.isWidgetUrlValid,size:"is-medium"},on:{click:function(t){return e.copyToClipBoard(e.widgetUrl)}}},[e._v(" Copy URL to Clipboard ")])],1)],1):e._e(),"sdk"===e.tab?i("form",{staticClass:"box mx-1 mt-6"},[i("b-field",{attrs:{label:"Destination *","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The email address, roomId, or SIP URI.",size:"is-medium",required:"",expanded:""},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}})],1),i("b-field",{attrs:{label:"Token *","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The Webex Bearer token of the local user (i.e. your token from the developer portal)",size:"is-medium",required:"",expanded:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1),i("b-field",{attrs:{label:"User Type *","label-position":"on-border","custom-class":"is-medium"}},[i("b-select",{attrs:{placeholder:"Select the type of destination",size:"is-medium",required:"",expanded:""},model:{value:e.userType,callback:function(t){e.userType=t},expression:"userType"}},[i("option",{domProps:{value:!0}},[e._v(" Guest ")]),i("option",{domProps:{value:!1}},[e._v(" Other ")])])],1),i("b-field",{attrs:{label:"Background Image (URL)","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"The publicly accessible URL of a custom background image to use",size:"is-medium",expanded:""},model:{value:e.backgroundImage,callback:function(t){e.backgroundImage=t},expression:"backgroundImage"}})],1),i("b-field",{attrs:{label:"Meet Button Color","label-position":"on-border","custom-class":"is-medium"}},[i("b-input",{attrs:{placeholder:"A HEX color string for the meet button(s) e.g. 0000ff for blue",size:"is-medium",expanded:""},model:{value:e.meetButtonColor,callback:function(t){e.meetButtonColor=t},expression:"meetButtonColor"}})],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.headerToggle,callback:function(t){e.headerToggle=t},expression:"headerToggle"}},[e._v(" Header Toggle (display the header at the top of the page?) ")])],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.listenOnlyOption,callback:function(t){e.listenOnlyOption=t},expression:"listenOnlyOption"}},[e._v(" Listen Only Option (display the listen Only meet button?) ")])],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.selfView,callback:function(t){e.selfView=t},expression:"selfView"}},[e._v(" Self View (display the self view video element?) ")])],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.shareOnlyOption,callback:function(t){e.shareOnlyOption=t},expression:"shareOnlyOption"}},[e._v(" Share Only (only receive and send shared screen?) ")])],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.showSMS,callback:function(t){e.showSMS=t},expression:"showSMS"}},[e._v(" Show SMS (display the send guest link via SMS button?) ")])],1),i("b-field",{attrs:{"custom-class":"is-medium"}},[i("b-switch",{attrs:{size:"is-medium"},model:{value:e.showEmail,callback:function(t){e.showEmail=t},expression:"showEmail"}},[e._v(" Show Email (display the send guest link via Email button?) ")])],1),i("b-field",{attrs:{label:"SDK URL","label-position":"on-border","custom-class":"is-medium",type:e.isSdkUrlValid?"":"is-danger",message:e.isSdkUrlValid?"":"Please complete the required fields above."}},[i("b-input",{attrs:{type:"textarea",disabled:"",value:e.sdkUrl,size:"is-medium",expanded:""}})],1),i("div",{staticClass:"buttons is-right"},[i("b-button",{staticClass:"is-rounded",attrs:{type:"is-info","icon-left":"content-copy",disabled:!e.isSdkUrlValid,size:"is-medium"},on:{click:function(t){return e.copyToClipBoard(e.sdkUrl)}}},[e._v(" Copy URL to Clipboard ")])],1)],1):e._e()])},m=[],p={name:"HelloWorld",data(){return{destinationTypes:[{name:"Email",value:"email"},{name:"Space Id",value:"spaceId"},{name:"SIP",value:"sip"}],destination:null,destinationType:null,token:null,label:null,backgroundImage:null,userType:!1,meetButtonColor:"0000ff",headerToggle:!0,listenOnlyOption:!1,selfView:!0,shareOnlyOption:!1,showSMS:!1,showEmail:!1}},computed:{tab:{get:function(){const e=["widget","sdk"],t=this.$route.query.tab?this.$route.query.tab.toLowerCase():"";return e.includes(t)?t:"widget"},set:function(e){this.$router.push({query:{tab:e}})}},isWidgetUrlValid(){return this.destination&&this.destinationType&&this.token},widgetUrl(){let e=`https://wxsd-sales.github.io/wxsd-guest-demo/public/widget.html?destination=${encodeURIComponent(this.destination)}&destinationType=${encodeURIComponent(this.destinationType)}&token=${encodeURIComponent(this.token)}`;return this.label&&(e=e+"&label="+encodeURIComponent(this.label)),this.backgroundImage&&(e=e+"&backgroundImage="+encodeURIComponent(this.backgroundImage)),e},isSdkUrlValid(){return this.destination&&this.token},sdkUrl(){let e=`https://wxsd-sales.github.io/wxsd-guest-demo/public/guest.html?destination=${encodeURIComponent(this.destination)}&token=${encodeURIComponent(this.token)}`;return this.userType&&(e+="&userType=guest"),this.backgroundImage&&(e=e+"&backgroundImage="+encodeURIComponent(this.backgroundImage)),this.meetButtonColor&&(e=e+"&meetButtonColor="+encodeURIComponent(this.meetButtonColor)),e=e+"&headerToggle="+encodeURIComponent(this.headerToggle),e=e+"&listenOnlyOption="+encodeURIComponent(this.listenOnlyOption),e=e+"&selfView="+encodeURIComponent(this.selfView),e=e+"&shareOnlyOption="+encodeURIComponent(this.shareOnlyOption),e=e+"&showSMS="+encodeURIComponent(this.showSMS),e=e+"&showEmail="+encodeURIComponent(this.showEmail),e}},methods:{copyToClipBoard(e){navigator.clipboard.writeText(e),this.$buefy.snackbar.open({duration:1e3,message:"Copied contents to clipboard!",pauseOnHover:!0,type:"is-success",position:"is-top-right"})}}},b=p,h=(0,a.Z)(b,c,m,!1,null,"93eb97ce",null),f=h.exports;o.Z.use(u.Z);var g=new u.Z({routes:[{path:"/",name:"HelloWorld",component:f}]}),v=i(589);o.Z.use(v.ZP),o.Z.config.productionTip=!1,new o.Z({router:g,render:function(e){return e(d)}}).$mount("#app")}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,o,s,n){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var l=!0,r=0;r<o.length;r++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](o[r])}))?o.splice(r--,1):(l=!1,n<a&&(a=n));if(l){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,a=o[0],l=o[1],r=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(r)var u=r(i)}for(t&&t(o);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},o=self["webpackChunkwxpdemo_link"]=self["webpackChunkwxpdemo_link"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(119)}));o=i.O(o)})();
//# sourceMappingURL=app-legacy.2f33a094.js.map