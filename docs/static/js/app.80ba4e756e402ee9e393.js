webpackJsonp([1],{NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container py-6 px-4",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=o("VU/8")({name:"App"},i,!1,function(e){o("P0LN")},null,null).exports,a=o("/ocq"),l={name:"HelloWorld",data:function(){return{destinationTypes:[{name:"Email",value:"email"},{name:"Space Id",value:"spaceId"},{name:"SIP",value:"sip"}],destination:null,destinationType:null,token:null,label:null,backgroundImage:null,userType:!1,meetButtonColor:"0000ff",headerToggle:!0,listenOnlyOption:!1,selfView:!0,shareOnlyOption:!1,showSMS:!1}},methods:{copyToClipBoard:function(e){navigator.clipboard.writeText(e),this.$buefy.snackbar.open({duration:1e3,message:"Copied contents to clipboard!",pauseOnHover:!0,type:"is-success",position:"is-top-right"})}},computed:{tab:{get:function(){var e=this.$route.query.tab?this.$route.query.tab.toLowerCase():"";return["widget","sdk"].includes(e)?e:"widget"},set:function(e){this.$router.push({query:{tab:e}})}},isWidgetUrlValid:function(){return this.destination&&this.destinationType&&this.token},widgetUrl:function(){var e="https://wxsd-sales.github.io/wxpdemo/public/widget.html?destination="+encodeURIComponent(this.destination)+"&destinationType="+encodeURIComponent(this.destinationType)+"&token="+encodeURIComponent(this.token);return this.label&&(e=e+"&label="+encodeURIComponent(this.label)),this.backgroundImage&&(e=e+"&backgroundImage="+encodeURIComponent(this.backgroundImage)),e},isSdkUrlValid:function(){return this.destination&&this.token},sdkUrl:function(){var e="https://wxsd-sales.github.io/wxpdemo/public/guest.html?destination="+encodeURIComponent(this.destination)+"&token="+encodeURIComponent(this.token);return this.userType&&(e+="&userType=guest"),this.backgroundImage&&(e=e+"&backgroundImage="+encodeURIComponent(this.backgroundImage)),this.meetButtonColor&&(e=e+"&meetButtonColor="+encodeURIComponent(this.meetButtonColor)),e=(e=(e=(e=(e=e+"&headerToggle="+encodeURIComponent(this.headerToggle))+"&listenOnlyOption="+encodeURIComponent(this.listenOnlyOption))+"&selfView="+encodeURIComponent(this.selfView))+"&shareOnlyOption="+encodeURIComponent(this.shareOnlyOption))+"&showSMS="+encodeURIComponent(this.showSMS)}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("b-tabs",{attrs:{type:"is-toggle",size:"is-medium"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("b-tab-item",{attrs:{label:"Widget",value:"widget",icon:"widgets"}}),e._v(" "),o("b-tab-item",{attrs:{label:"SDK",value:"sdk",icon:"code-braces"}})],1)],1),e._v(" "),"widget"===e.tab?o("form",{staticClass:"box mx-6 mt-6"},[o("b-field",{attrs:{label:"Destination","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The email address, roomId, or SIP URI.",size:"is-large",required:"",expanded:""},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}})],1),e._v(" "),o("b-field",{attrs:{label:"Destination Type","label-position":"on-border","custom-class":"is-large"}},[o("b-select",{attrs:{placeholder:"Select the type of destination",size:"is-large",required:"",expanded:""},model:{value:e.destinationType,callback:function(t){e.destinationType=t},expression:"destinationType"}},e._l(e.destinationTypes,function(t){return o("option",{key:t.value,domProps:{value:t.value}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)],1),e._v(" "),o("b-field",{attrs:{label:"Token","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The Webex Bearer token of the local user (i.e. your token from the developer portal)",size:"is-large",required:"",expanded:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1),e._v(" "),o("b-field",{attrs:{label:"Label","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The email address, roomId, or SIP URI",size:"is-large",expanded:""},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),e._v(" "),o("b-field",{attrs:{label:"Background Image (URL)","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The publicly accessible URL of a custom background image to use",size:"is-large",expanded:""},model:{value:e.backgroundImage,callback:function(t){e.backgroundImage=t},expression:"backgroundImage"}})],1),e._v(" "),o("b-field",{attrs:{label:"Widget URL","label-position":"on-border","custom-class":"is-large",type:e.isWidgetUrlValid?"":"is-danger",message:e.isWidgetUrlValid?"":"Please complete the required fields above."}},[o("b-input",{attrs:{type:"textarea",disabled:"",value:e.widgetUrl,size:"is-medium",expanded:""}})],1),e._v(" "),o("div",{staticClass:"buttons is-right"},[o("b-button",{attrs:{type:"is-link","icon-left":"content-copy",disabled:!e.isWidgetUrlValid,size:"is-large"},on:{click:function(t){return e.copyToClipBoard(e.widgetUrl)}}},[e._v("\n        Copy URL to Clipboard\n      ")])],1)],1):e._e(),e._v(" "),"sdk"===e.tab?o("form",{staticClass:"box mx-6 mt-6"},[o("b-field",{attrs:{label:"Destination","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The text to show",size:"is-large",required:"",expanded:""},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}})],1),e._v(" "),o("b-field",{attrs:{label:"Token","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The Webex Bearer token of the local user (i.e. your token from the developer portal)",size:"is-large",required:"",expanded:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1),e._v(" "),o("b-field",{attrs:{label:"User Type","label-position":"on-border","custom-class":"is-large"}},[o("b-select",{attrs:{placeholder:"Select the type of destination",size:"is-large",required:"",expanded:""},model:{value:e.userType,callback:function(t){e.userType=t},expression:"userType"}},[o("option",{domProps:{value:!0}},[e._v("Guest")]),e._v(" "),o("option",{domProps:{value:!1}},[e._v("Other")])])],1),e._v(" "),o("b-field",{attrs:{label:"Background Image (URL)","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"The publicly accessible URL of a custom background image to use",size:"is-large",expanded:""},model:{value:e.backgroundImage,callback:function(t){e.backgroundImage=t},expression:"backgroundImage"}})],1),e._v(" "),o("b-field",{attrs:{label:"Meet Button Color","label-position":"on-border","custom-class":"is-large"}},[o("b-input",{attrs:{placeholder:"A HEX color string for the meet button(s) e.g. 0000ff for blue",size:"is-large",expanded:""},model:{value:e.meetButtonColor,callback:function(t){e.meetButtonColor=t},expression:"meetButtonColor"}})],1),e._v(" "),o("b-field",{attrs:{"custom-class":"is-large"}},[o("b-switch",{attrs:{size:"is-medium"},model:{value:e.headerToggle,callback:function(t){e.headerToggle=t},expression:"headerToggle"}},[e._v("\n        Header Toggle (display the header at the top of the page?)\n      ")])],1),e._v(" "),o("b-field",{attrs:{"custom-class":"is-large"}},[o("b-switch",{attrs:{size:"is-medium"},model:{value:e.listenOnlyOption,callback:function(t){e.listenOnlyOption=t},expression:"listenOnlyOption"}},[e._v("\n        Listen Only Option (display the listen Only meet button?)\n      ")])],1),e._v(" "),o("b-field",{attrs:{"custom-class":"is-large"}},[o("b-switch",{attrs:{size:"is-medium"},model:{value:e.selfView,callback:function(t){e.selfView=t},expression:"selfView"}},[e._v("\n        Self View (display the self view video element?)\n      ")])],1),e._v(" "),o("b-field",{attrs:{"custom-class":"is-large"}},[o("b-switch",{attrs:{size:"is-medium"},model:{value:e.shareOnlyOption,callback:function(t){e.shareOnlyOption=t},expression:"shareOnlyOption"}},[e._v("\n        Share Only (only receive and send shared screen?)\n      ")])],1),e._v(" "),o("b-field",{attrs:{"custom-class":"is-large"}},[o("b-switch",{attrs:{size:"is-medium"},model:{value:e.showSMS,callback:function(t){e.showSMS=t},expression:"showSMS"}},[e._v("\n        Show SMS (display the send guest link via SMS?)\n      ")])],1),e._v(" "),o("b-field",{attrs:{label:"SDK URL","label-position":"on-border","custom-class":"is-large",type:e.isSdkUrlValid?"":"is-danger",message:e.isSdkUrlValid?"":"Please complete the required fields above."}},[o("b-input",{attrs:{type:"textarea",disabled:"",value:e.sdkUrl,size:"is-medium",expanded:""}})],1),e._v(" "),o("div",{staticClass:"buttons is-right"},[o("b-button",{attrs:{type:"is-link","icon-left":"content-copy",disabled:!e.isSdkUrlValid,size:"is-large"},on:{click:function(t){return e.copyToClipBoard(e.sdkUrl)}}},[e._v("\n        Copy URL to Clipboard\n      ")])],1)],1):e._e()])},staticRenderFns:[]};var d=o("VU/8")(l,r,!1,function(e){o("w6vx")},"data-v-203199f6",null).exports;s.a.use(a.a);var c=new a.a({routes:[{path:"/",name:"HelloWorld",component:d}]}),u=o("k5jX");o("VF8J"),o("ya+Q");s.a.use(u.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:c,components:{App:n},template:"<App/>"})},P0LN:function(e,t){},VF8J:function(e,t){},w6vx:function(e,t){},"ya+Q":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.80ba4e756e402ee9e393.js.map