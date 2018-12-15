import PNotify from"./PNotify.js";function data(){return Object.assign({_notice:null,_options:{}},PNotify.modules.Mobile.defaults)}var methods={initModule(i){this.set(i);const{_notice:t}=this.get();let e=null,o=null,n=null,s=null,r="left",l="X",a="Width";t.on("touchstart",i=>{if(!this.get().swipeDismiss)return;const{stack:o}=t.get();if(!1!==o)switch(o.dir1){case"up":case"down":r="left",l="X",a="Width";break;case"left":case"right":r="top",l="Y",a="Height"}e=i.touches[0]["screen"+l],n=t.refs.elem["scroll"+a],s=window.getComputedStyle(t.refs.elem).opacity,t.refs.container.style[r]=0}),t.on("touchmove",i=>{if(!e||!this.get().swipeDismiss)return;const a=i.touches[0]["screen"+l];o=a-e;const p=(1-Math.abs(o)/n)*s;t.refs.elem.style.opacity=p,t.refs.container.style[r]=o+"px"}),t.on("touchend",()=>{if(e&&this.get().swipeDismiss){if(t.refs.container.classList.add("ui-pnotify-mobile-animate-left"),Math.abs(o)>40){const i=o<0?-2*n:2*n;t.refs.elem.style.opacity=0,t.refs.container.style[r]=i+"px",t.close()}else t.refs.elem.style.removeProperty("opacity"),t.refs.container.style.removeProperty(r);e=null,o=null,n=null,s=null}}),t.on("touchcancel",()=>{e&&this.get().swipeDismiss&&(t.refs.elem.style.removeProperty("opacity"),t.refs.container.style.removeProperty(r),e=null,o=null,n=null,s=null)}),this.doMobileStyling()},update(){this.doMobileStyling()},beforeOpen(){window.addEventListener("resize",this.get()._doMobileStylingBound)},afterClose(){if(window.removeEventListener("resize",this.get()._doMobileStylingBound),!this.get().swipeDismiss)return;const{_notice:i}=this.get();i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty("left"),i.refs.container.style.removeProperty("top")},doMobileStyling(){const{_notice:i}=this.get(),{stack:t}=i.get();if(this.get().styling){if(!1!==t)switch(window.innerWidth<=480?(t.mobileOrigSpacing1||(t.mobileOrigSpacing1=t.spacing1),t.spacing1=0,t.mobileOrigFirstpos1||(t.mobileOrigFirstpos1=t.firstpos1),t.firstpos1=0,t.mobileOrigSpacing2||(t.mobileOrigSpacing2=t.spacing2),t.spacing2=0,t.mobileOrigFirstpos2||(t.mobileOrigFirstpos2=t.firstpos2),t.firstpos2=0):(t.mobileOrigSpacing1&&(t.spacing1=t.mobileOrigSpacing1,delete t.mobileOrigSpacing1),t.mobileOrigFirstpos1&&(t.firstpos1=t.mobileOrigFirstpos1,delete t.mobileOrigFirstpos1),t.mobileOrigSpacing2&&(t.spacing2=t.mobileOrigSpacing2,delete t.mobileOrigSpacing2),t.mobileOrigFirstpos2&&(t.firstpos2=t.mobileOrigFirstpos2,delete t.mobileOrigFirstpos2)),t.dir1){case"down":i.addModuleClass("ui-pnotify-mobile-top");break;case"up":i.addModuleClass("ui-pnotify-mobile-bottom");break;case"left":i.addModuleClass("ui-pnotify-mobile-right");break;case"right":i.addModuleClass("ui-pnotify-mobile-left")}i.addModuleClass("ui-pnotify-mobile-able")}else i.removeModuleClass("ui-pnotify-mobile-able","ui-pnotify-mobile-top","ui-pnotify-mobile-bottom","ui-pnotify-mobile-right","ui-pnotify-mobile-left"),!1!==t&&(t.mobileOrigSpacing1&&(t.spacing1=t.mobileOrigSpacing1,delete t.mobileOrigSpacing1),t.mobileOrigFirstpos1&&(t.firstpos1=t.mobileOrigFirstpos1,delete t.mobileOrigFirstpos1),t.mobileOrigSpacing2&&(t.spacing2=t.mobileOrigSpacing2,delete t.mobileOrigSpacing2),t.mobileOrigFirstpos2&&(t.firstpos2=t.mobileOrigFirstpos2,delete t.mobileOrigFirstpos2))}};function oncreate(){this.set({_doMobileStylingBound:this.doMobileStyling.bind(this)})}function setup(i){i.key="Mobile",i.defaults={swipeDismiss:!0,styling:!0},i.init=(t=>new i({target:document.body})),PNotify.modules.Mobile=i}function add_css(){var i=createElement("style");i.id="svelte-49u8sj-style",i.textContent="[ui-pnotify] .ui-pnotify-container{position:relative}[ui-pnotify] .ui-pnotify-mobile-animate-left{transition:left .1s ease}[ui-pnotify] .ui-pnotify-mobile-animate-top{transition:top .1s ease}@media(max-width: 480px){[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able{font-size:1.2em;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;font-smoothing:antialiased}body > [ui-pnotify].ui-pnotify.ui-pnotify-mobile-able{position:fixed}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-top,[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-bottom{width:100% !important}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-left,[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-right{height:100% !important}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able .ui-pnotify-shadow{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-top .ui-pnotify-shadow{border-bottom-width:5px}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-bottom .ui-pnotify-shadow{border-top-width:5px}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-left .ui-pnotify-shadow{border-right-width:5px}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-right .ui-pnotify-shadow{border-left-width:5px}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able .ui-pnotify-container{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-top .ui-pnotify-container,[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-bottom .ui-pnotify-container{width:auto !important}[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-left .ui-pnotify-container,[ui-pnotify].ui-pnotify.ui-pnotify-mobile-able.ui-pnotify-mobile-right .ui-pnotify-container{height:100% !important}}",appendNode(i,document.head)}function create_main_fragment(i,t){return{c:noop,m:noop,p:noop,d:noop}}function PNotifyMobile(i){init(this,i),this._state=assign(data(),i.data),this._intro=!0,document.getElementById("svelte-49u8sj-style")||add_css(),i.root||(this._oncreate=[]),this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),i.target&&(this._fragment.c(),this._mount(i.target,i.anchor),callAll(this._oncreate))}function createElement(i){return document.createElement(i)}function appendNode(i,t){t.appendChild(i)}function noop(){}function init(i,t){i._handlers=blankObject(),i._bind=t._bind,i.options=t,i.root=t.root||i,i.store=i.root.store||t.store}function assign(i,t){for(var e in t)i[e]=t[e];return i}function assignTrue(i,t){for(var e in t)i[e]=1;return i}function callAll(i){for(;i&&i.length;)i.shift()()}function destroy(i){this.destroy=noop,this.fire("destroy"),this.set=noop,this._fragment.d(!1!==i),this._fragment=null,this._state={}}function get(){return this._state}function fire(i,t){var e=i in this._handlers&&this._handlers[i].slice();if(e)for(var o=0;o<e.length;o+=1){var n=e[o];n.__calling||(n.__calling=!0,n.call(this,t),n.__calling=!1)}}function on(i,t){var e=this._handlers[i]||(this._handlers[i]=[]);return e.push(t),{cancel:function(){var i=e.indexOf(t);~i&&e.splice(i,1)}}}function set(i){this._set(assign({},i)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(i){var t=this._state,e={},o=!1;for(var n in i)this._differs(i[n],t[n])&&(e[n]=o=!0);o&&(this._state=assign(assign({},t),i),this._recompute(e,this._state),this._bind&&this._bind(e,this._state),this._fragment&&(this.fire("state",{changed:e,current:this._state,previous:t}),this._fragment.p(e,this._state),this.fire("update",{changed:e,current:this._state,previous:t})))}function _mount(i,t){this._fragment[this._fragment.i?"i":"m"](i,t||null)}function _differs(i,t){return i!=i?t==t:i!==t||i&&"object"==typeof i||"function"==typeof i}function blankObject(){return Object.create(null)}assign(PNotifyMobile.prototype,{destroy:destroy,get:get,fire:fire,on:on,set:set,_set:_set,_mount:_mount,_differs:_differs}),assign(PNotifyMobile.prototype,methods),PNotifyMobile.prototype._recompute=noop,setup(PNotifyMobile);export default PNotifyMobile;
//# sourceMappingURL=PNotifyMobile.js.map