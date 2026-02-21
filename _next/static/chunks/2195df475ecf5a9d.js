(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42033,e=>{"use strict";let t,i,a;var r=e.i(71645),n=Object.create,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=function(e,t){return function(){return e&&(t=e(e=0)),t}},h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},m=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=l(t),d=0,c=n.length;d<c;d++)r=n[d],u.call(e,r)||r===i||s(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=o(t,r))||a.enumerable});return e},p=function(e,t,i){return i=null!=e?n(d(e)):{},m(!t&&e&&e.__esModule?i:s(i,"default",{value:e,enumerable:!0}),e)},b=h(function(t,i){i.exports="undefined"!=typeof window?window:e.g});function g(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):g(e,t)}var f=c(function(){f()});function E(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var y=c(function(){}),_=h(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),T=h(function(e,t){function i(e,t){if(!g(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),A=h(function(e,t){function i(e,t){if(!g(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),k=h(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),w=h(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),I=h(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),S=h(function(e,t){y(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=E(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),C=h(function(e,t){f();var i=_(),a=k(),r=w(),n=I(),s=S(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!g(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),R=h(function(e,t){f();var i=C();function a(e){if(!g(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),D=h(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),L=h(function(e,t){f();var i=_(),a=T(),r=A(),n=C(),s=R(),o=D(),l=k(),d=w(),u=I();function c(){if(!g(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),M=h(function(e,t){t.exports=new(L())}),x=h(function(t,i){var a,r=e.g,n=M();"undefined"!=typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),i.exports=a});function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function O(e,t){if(e){if("string"==typeof e)return N(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return N(e,t)}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||O(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var U=p(b()),H=p(b()),B=p(b()),W=function(){var e=B.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},$=function(){if("function"==typeof(null==(e=H.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),H.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=W(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},V=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=V()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},F=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function K(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,K(o)),d=(i=console.info).bind.apply(i,K(o)),u=(a=console.debug).bind.apply(a,K(o)),c=(r=console.warn).bind.apply(r,K(o)),h=(n=console.error).bind.apply(n,K(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,K(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,K(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,K(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,K(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,K(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]"),Y=p(b());function j(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function Q(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){if(!g(e,t))throw TypeError("Cannot call a class as a function")}function z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function X(e,t,i){return t&&z(e.prototype,t),i&&z(e,i),e}function J(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function et(e,t,i){return(et="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function ei(e,t){return(ei=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}f(),y();var ea=function(e){return er(e)[0]},er=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},en=p(b()),es=function(){var e=en.default.performance;return void 0!==(e&&e.timing)},eo=function(){var e=en.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},el=function(){var e=en.default.performance,t=e&&e.timing;return t&&t.navigationStart};function ed(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function eu(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){J(e,t,i[t])})}return e}function ec(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eh=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],em=["x-cdn","content-type"].concat(eh);function ep(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(em.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ev(e){if(e){var t=eh.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eb=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eg=function(e){if(!e)return{};var t=el(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ep(e.getAllResponseHeaders())},eE=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!es())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eg(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,b=c.responseEnd;o("requestcompleted",ec(eu({},eb(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:b,request_type:"manifest",request_hostname:ea(r),request_response_headers:ef(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eg(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:ef(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eg(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:ef(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eg(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?ea(r.responseURL):void 0,request_id:h?ev(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:ea(c),request_id:h?ev(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:ea(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},e_=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=ea(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ep(u[u.length-1]._responseHeaders||""));var c=i?ev(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eT=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eA=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ek=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},ew=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ek(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ea(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=e_(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,b=c.requestResponseHeaders,g=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:b,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:g,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=e_(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,b=u.requestResponseHeaders,g=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,y=u.requestId,_=eT(d,i),T=_.currentLevel,A=_.renditionWidth,k=_.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:b,request_hostname:f,request_id:y,request_url:E,request_media_start_time:l,request_media_duration:g,request_current_level:T,request_labeled_bitrate:_.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eA(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=ec(eu({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:ea(t.url)})};i.on("fragmentLoadingAbandoned",p);var b=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:ea(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",b),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eI=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eS=0,eC=function(){function e(){Z(this,e),J(this,"_listeners",void 0)}return X(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eS,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eS;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eR=p(b()),eD=function(){function e(t){var i=this;Z(this,e),J(this,"_playbackHeartbeatInterval",void 0),J(this,"_playheadShouldBeProgressing",void 0),J(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eR.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return X(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eR.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eR.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eL=function e(t){var i=this;Z(this,e),J(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eM=function(){function e(t){Z(this,e),J(this,"_watchTimeTrackerLastCheckedTime",void 0),J(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return X(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),ed(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;Z(this,e),J(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),J(this,"_lastTime",void 0),J(this,"_isAdPlaying",void 0),J(this,"_callbackUpdatePlaybackTime",void 0),J(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=W(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=W(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return X(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=W(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&ed(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eN=function(){function e(t){Z(this,e),J(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return X(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eO=function e(t){if(Z(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;ed(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(ed(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eP=function(){function e(t){var i=this;Z(this,e),J(this,"_lastCheckedTime",void 0),J(this,"_lastPlayheadTime",void 0),J(this,"_lastPlayheadTimeUpdatedTime",void 0),J(this,"_rebuffering",void 0),J(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:W()})}))}return X(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eU=function(){function e(t){var i=this;Z(this,e),J(this,"NAVIGATION_START",void 0),J(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||W(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||W(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return X(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eH=function e(t){var i=this;Z(this,e),J(this,"_lastPlayerHeight",void 0),J(this,"_lastPlayerWidth",void 0),J(this,"_lastPlayheadPosition",void 0),J(this,"_lastSourceHeight",void 0),J(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),ed(t.data,"view_total_content_playback_time",e),ed(t.data,"view_total_upscaling",r*e),ed(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eB=function e(t){var i=this;Z(this,e),J(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=W(),r=(t.data.viewer_time||e)-(a||e);ed(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,ed(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eW=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},e$=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eV=function(){function e(t){var i=this;Z(this,e),J(this,"_adHasPlayed",void 0),J(this,"_adRequests",void 0),J(this,"_adResponses",void 0),J(this,"_currentAdRequestNumber",void 0),J(this,"_currentAdResponseNumber",void 0),J(this,"_prerollPlayTime",void 0),J(this,"_wouldBeNewAdPlay",void 0),J(this,"isAdBreak",void 0),J(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),e$.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eW(i._adRequests,a),ed(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ed(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eW(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&ed(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ed(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||ed(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||ed(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return X(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=P(er(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=P(er(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eq=p(b()),eF=function e(t){Z(this,e);var i,a,r=function(){t.disableRebufferTracking||(ed(t.data,"view_waiting_rebuffer_count",1),i=W(),a=eq.default.setInterval(function(){if(i){var e=W();ed(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(ed(t.data,"view_waiting_rebuffer_duration",W()-i),i=!1,eq.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eK=function e(t){var i=this;Z(this,e),J(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=W(),t.on("before*",r)},r=function(e){var a=W(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eG=p(b()),eY=(tt=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=tt({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",tt(t,{expires:-1}))},i.withConverter=e,i}(function(){})),ej="muxData",eQ=function(){var e;try{e=(eY.get(ej)||"").split("&").reduce(function(e,t){var i=P(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eZ=function(e){try{eY.set(ej,Object.entries(e).map(function(e){var t=P(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},ez=function(){var e=eQ();return e.mux_viewer_id=e.mux_viewer_id||$(),e.msn=e.msn||Math.random(),eZ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eX=function(){var e=eQ(),t=W();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=$(),e.sst=t),e.sex=t+15e5,eZ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eJ=p(b()),e0=function(){var e;switch(e1()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e1=function(){var e=eJ.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e0.getConnectionFromAPI=e1;var e2=e4({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e3=e4({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e4(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e5(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e2[s];o||(G.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e3[e]?o+=e3[e]:Number.isInteger(Number(e))?o+=e:(G.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e9=p(b()),e8=p(x()),e6={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e7=["hb","requestcompleted","requestfailed","requestcanceled"],te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e6,t)};te.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},te.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},te.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e9.default.clearTimeout(this._sendTimeout)},te.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e5({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tr(this._beaconUrl,i,!0,function(){})},te.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=W();tr(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,G.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=W()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},te.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},te.prototype._startBeaconSending=function(){var e=this;e9.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e9.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},te.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(W())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(G.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e7.indexOf(e.e)}),s()),o()||(G.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var tt,ti,ta="function"==typeof e8.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tr=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(e9.default.fetch)return void e9.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ta(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(e9.default.XMLHttpRequest){var r=new e9.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tn=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],ts=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],to=["ad_id","ad_creative_id","ad_universal_id"],tl=["viewstart","error","ended","viewend"],td=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Z(this,e),J(this,"mux",void 0),J(this,"envKey",void 0),J(this,"options",void 0),J(this,"eventQueue",void 0),J(this,"sampleRate",void 0),J(this,"disableCookies",void 0),J(this,"respectDoNotTrack",void 0),J(this,"previousBeaconData",void 0),J(this,"lastEventTime",void 0),J(this,"rateLimited",void 0),J(this,"pageLevelData",void 0),J(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new te((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(y=this.options.sampleRate)?y:1,this.disableCookies=null!=(_=this.options.disableCookies)&&_,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(b=this.options.platform)||null==(p=b.os)?void 0:p.architecture,viewer_os_version:null==(f=this.options.platform)||null==(g=f.os)?void 0:g.version,viewer_connection_type:e0(),page_url:null===eG.default||void 0===eG.default||null==(E=eG.default.location)?void 0:E.href},this.viewerData=this.disableCookies?{}:ez()}return X(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&j())return G.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return G.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eX(),a=ec(eu({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=e5(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return G.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||G.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(G.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tl.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e5(a),this.eventQueue.queueEvent(a.event,s),G.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eu({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=P(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tn.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||to.includes(t)&&ts.includes(e))}}]),e}(),tu=function e(t){Z(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tc=function e(t){var i=this;Z(this,e),J(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=W(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,J({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},th=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tm=new Set(["requestcompleted","requestfailed","requestcanceled"]),tp=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&ei(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ee(a);return e=t?Reflect.construct(i,arguments,ee(this).constructor):i.apply(this,arguments),e&&("object"===E(e)||"function"==typeof e)?e:Q(this)});function a(e,t,r){Z(this,a),J(Q(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),J(Q(n),"NAVIGATION_START",void 0),J(Q(n),"_destroyed",void 0),J(Q(n),"_heartBeatTimeout",void 0),J(Q(n),"adTracker",void 0),J(Q(n),"dashjs",void 0),J(Q(n),"data",void 0),J(Q(n),"disablePlayheadRebufferTracking",void 0),J(Q(n),"disableRebufferTracking",void 0),J(Q(n),"errorTracker",void 0),J(Q(n),"errorTranslator",void 0),J(Q(n),"emitTranslator",void 0),J(Q(n),"getAdData",void 0),J(Q(n),"getPlayheadTime",void 0),J(Q(n),"getStateData",void 0),J(Q(n),"stateDataTranslator",void 0),J(Q(n),"hlsjs",void 0),J(Q(n),"id",void 0),J(Q(n),"longResumeTracker",void 0),J(Q(n),"minimumRebufferDuration",void 0),J(Q(n),"mux",void 0),J(Q(n),"playbackEventDispatcher",void 0),J(Q(n),"playbackHeartbeat",void 0),J(Q(n),"playbackHeartbeatTime",void 0),J(Q(n),"playheadTime",void 0),J(Q(n),"seekingTracker",void 0),J(Q(n),"sustainedRebufferThreshold",void 0),J(Q(n),"watchTimeTracker",void 0),J(Q(n),"currentFragmentPDT",void 0),J(Q(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=eo(),n.NAVIGATION_START=el(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),G.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new td(e,r.data.env_key,r),n.data={player_instance_id:$(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(Q(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),th.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tc(Q(n)),n.errorTracker=new eL(Q(n)),new eK(Q(n)),n.seekingTracker=new eB(Q(n)),n.playheadTime=new eN(Q(n)),n.playbackHeartbeat=new eD(Q(n)),new eH(Q(n)),n.watchTimeTracker=new eM(Q(n)),new ex(Q(n)),n.adTracker=new eV(Q(n)),new eP(Q(n)),new eO(Q(n)),new eU(Q(n)),new eF(Q(n)),new tu(Q(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return X(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=et(ee(a.prototype),"emit",this)).call.apply(i,[this].concat(K(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=P(er(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tm.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=$(),i=function(){t===e.data.view_id&&ed(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eE(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,ew(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eI(this.dashjs),this.dashjs=void 0)}}]),a}(eC),tv=p(x()),tb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tf=p(b());tf.default&&tf.default.WeakMap&&(ti=new WeakMap);var tE=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tE.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tE.prototype.processLine=function(e){var t=e.indexOf(":"),i=tI(e,t),a=i[0],r=2===i.length?tT(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":ty(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":ty(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":ty(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=eb(tS(i[1]));Object.assign(this.manifest.sessionData,s)}},tE.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var ty=function(e,t){var i,a=t_(t[0].replace("#EXT-X-",""));tw(t[1])?(i={},i=Object.assign(tk(t[1]),i)):i=tT(t[1]),e[a]=i},t_=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tT=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tA=function(e){var t={},i=e.split("=");return i.length>1&&(t[t_(i[0])]=tT(i[1])),t},tk=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tA(t[a]),i);return i},tw=function(e){return e.indexOf("=")>-1},tI=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tS=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tC={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){G.info("safeCall error",e)}return r},safeIncrement:ed,getComputedStyle:function(e,t){var i;return e&&t&&tf.default&&"function"==typeof tf.default.getComputedStyle?(ti&&ti.has(e)&&(i=ti.get(e)),i||(i=tf.default.getComputedStyle(e,null),ti&&ti.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ep,cdnHeadersToRequestId:ev,extractHostnameAndDomain:er,extractHostname:ea,manifestParser:tE,generateShortID:V,generateUUID:$,now:W,findMediaElement:F},tR={},tD=function(e){var t=arguments;"string"==typeof e?tD.hasOwnProperty(e)?U.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tD[e].apply(null,t)},0):G.warn("`"+e+"` is an unknown task"):"function"==typeof e?U.default.setTimeout(function(){e(tD)},0):G.warn("`"+e+"` is invalid.")},tL={loaded:W(),NAME:"mux-embed",VERSION:"5.9.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=P(F(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tv.default&&!!(tv.default.fullscreenElement||tv.default.webkitFullscreenElement||tv.default.mozFullScreenElement||tv.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=P(F(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tb.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tg[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tD,e,t)},destroyMonitor:function(e){var t=P(F(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():G.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tR[i]?tR[i].addHLSJS(t):G.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tR[i]?tR[i].addDashJS(t):G.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tR[t]?tR[t].removeHLSJS():G.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tR[t]?tR[t].removeDashJS():G.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){j()&&t&&t.respectDoNotTrack&&G.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tR[i]=new tp(tD,i,t)},emit:function(e,t,i){var a=q(e);tR[a]?(tR[a].emit(t,i),"destroy"===t&&delete tR[a]):G.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tR[i]?tR[i].emit("hb",t):G.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tR[i]?tR[i].emitTranslator=t:G.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tR[i]?tR[i].stateDataTranslator=t:G.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tR[i]?tR[i].getPlayheadTime=t:G.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:j,log:G,utils:tC,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tD,tL),void 0!==U.default&&"function"==typeof U.default.addEventListener&&U.default.addEventListener("pagehide",function(e){e.persisted||(tD.WINDOW_UNLOADING=!0)},!1);var tM=e.i(50471).default,tx="video",tN=e=>e===tx?"playback":e,tO=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tO.MEDIA_ERR_ABORTED=1,tO.MEDIA_ERR_NETWORK=2,tO.MEDIA_ERR_DECODE=3,tO.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tO.MEDIA_ERR_ENCRYPTED=5,tO.MEDIA_ERR_CUSTOM=100,tO.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tP=(e,t)=>null!=t&&e in t,tU={ANY:"any",MUTED:"muted"},tH="on-demand",tB="live",tW="unknown",t$="native",tV={HEADER:"header",QUERY:"query",NONE:"none"},tq=Object.values(tV),tF={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tK={HLS:tF.M3U8},tG=(Object.keys(tK),[...Object.values(tF)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tY={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tj={DESCENDING:"desc"},tQ={code:"en"},tZ=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tz=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tX=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tP(e,tK)?tK[e]:t}return t1(e)},tJ=e=>"VOD"===e?tH:tB,t0=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t1=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return t3(e)?tF.M3U8:"";let r=i.slice(a+1).toUpperCase();return tP(r,tF)?tF[r]:""},t2="mux.com",t3=({src:e,customDomain:t=t2})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t4=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function t5(e,t=!0){var i;return new t9(t&&null!=(i=null==tQ?void 0:tQ[e])?i:e,t?tQ.code:"en")}var t9=class{constructor(e,t=(e=>null!=(e=tQ)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},t8=Object.values(tU),t6=e=>"boolean"==typeof e||"string"==typeof e&&t8.includes(e),t7=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tU.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tU.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},ie=e=>"time"in e?e.time:e.startTime;function it(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function ii(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function ia(e,t,i,a){let r=ii(e,i,a);return r||((r=it(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>ie(t)-ie(e)).forEach(t=>{var i,n;let s=t.value,o=ie(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ir="cuepoints",is=Object.freeze({label:ir});async function io(e,t,i=is){return ia(e,t,i.label,"metadata")}var il=e=>({time:e.startTime,value:JSON.parse(e.text)});function id(e,t={label:ir}){var i,a;let r=ii(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return il(r.activeCues[0]);let{currentTime:n}=e;return il(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iu(e,t=is){return new Promise(i=>{tZ(e,"loadstart",async()=>{let a=await io(e,[],t);tZ(e,"cuechange",()=>{let t=id(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ic="chapters",ih=Object.freeze({label:ic}),im=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ip(e,t,i=ih){return ia(e,t,i.label,"chapters")}function iv(e,t={label:ic}){var i,a;let r=ii(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return im(r.activeCues[0]);let{currentTime:n}=e;return im(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ib(e,t=ih){return new Promise(i=>{tZ(e,"loadstart",async()=>{let a=await ip(e,[],t);tZ(e,"cuechange",()=>{let t=iv(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ig=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,c;if(n){let i=t5("Your device appears to be offline",r),a=tO.MEDIA_ERR_NETWORK,n=new tO(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=tO.MEDIA_ERR_NETWORK;if(200===h)return;let b=tN(t),g=(u=tN(t),c=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:tP(c,i)?i[c]:void 0),f=t===tx?"v":"drm"===t?"d":void 0,[E]=tz(null!=(s=i.playbackId)?s:"");if(!h||!E)return;let y=t4(g);if(g&&!y){let i=new tO(t5("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:b}),p,!0,t5("Compact JWT string: {token}",r).format({token:g}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(h>=500){let e=new tO("",p,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===h)if(y){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(y,m)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tO(t5("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:b}),p,!0,t5("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=y.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(m)}));return a.errorCategory=t,a.muxCode=2403210,a.data=e,a}if((({sub:e},t)=>e!==t)(y,E)){let i=new tO(t5("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:b}),p,!0,t5("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:b,playbackId:E,tokenPlaybackId:y.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e},t)=>!e)(y,0)){let i=new tO(t5("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:b}),p,!0,t5("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:b,expectedAud:f}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(y,f)){let i=new tO(t5("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:b}),p,!0,t5("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:b,expectedAud:f,aud:y.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new tO(t5("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:b,category:t}),p,null==a||a,t5("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===h){let n=new tO(t5("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,t5("Specified playback ID: {playbackId}",r).format({playbackId:E}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===tB?"live":i.streamType===tH?"on-demand":"unknown",n.data=e,n}if(404===h){let i=new tO(t5("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,t5("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===h){let i=new tO(t5("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,t5("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let _=new tO("",p,null==a||a);return _.errorCategory=t,_.muxCode=2e6,_.data=e,_},iE=tM.DefaultConfig.capLevelController,iy=class e extends iE{constructor(e){super(e)}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevel(t){let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iE.getMaxLevelByMediaSize(a,16/9*n,n)}};iy.minMaxResolution=720;var i_,iT,iA,ik,iw,iI,iS="fairplay",iC=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iR=async(e,t)=>{if(t===tF.MP4)return{streamType:tH,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tF.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await fetch(i.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text());return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iC)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=tJ(n),o=t0(n),l;if(s===tB){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iD=async(e,t,i=tX({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iR(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iL(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=iO.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=iO.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=iO.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iL=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=iO.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},iM=null!=(iT=null==(i_=null==globalThis?void 0:globalThis.navigator)?void 0:i_.userAgent)?iT:"",ix=null!=(iw=null==(ik=null==(iA=null==globalThis?void 0:globalThis.navigator)?void 0:iA.userAgentData)?void 0:ik.platform)?iw:"",iN=iM.toLowerCase().includes("android")||["x11","android"].some(e=>ix.toLowerCase().includes(e)),iO=new WeakMap,iP="mux.com",iU=null==(iI=tM.isSupported)?void 0:iI.call(tM),iH=()=>tD.utils.now(),iB=tD.utils.generateUUID,iW=({playbackId:e,customDomain:t=iP,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tz(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i$=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iV=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},iq=e=>{var t;return null==(t=iO.get(e))?void 0:t.error},iF=e=>{var t,i;return null!=(i=null==(t=iO.get(e))?void 0:t.streamType)?i:tW},iK=e=>{var t,i;return null!=(i=null==(t=iO.get(e))?void 0:t.seekable)?i:e.seekable},iG=.034,iY=(e,t,i=iG)=>e>t||((e,t,i=iG)=>Math.abs(e-t)<=i)(e,t,i),ij=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iQ=(e,t)=>e.ended||e.loop?e.ended:!!(t&&ij(e,t))||((e,t=iG)=>e.paused&&iY(e.currentTime,e.duration,t))(e),iZ=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",i9),e.removeEventListener("error",i6),e.removeEventListener("durationchange",i5),iO.delete(e),e.dispatchEvent(new Event("teardown")))};function iz(e,t){var i;let a=tX(e);if(a!==tF.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e;return r&&(n===t$||!(iU&&("mse"===n||iN)))}var iX=e=>e===tB?{backBufferLength:8}:{},iJ=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i$(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:i2(e,"fairplay"),serverCertificateUrl:i3(e,"fairplay")},"com.widevine.alpha":{licenseUrl:i2(e,"widevine")},"com.microsoft.playready":{licenseUrl:i2(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?iS:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},i0=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},i1=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},i2=({playbackId:e,tokens:{drm:t}={},customDomain:i=iP},a)=>{let r=i$(e);return`https://license.${i.toLocaleLowerCase().endsWith(iP)?i:iP}/license/${a}/${r}?token=${t}`},i3=({playbackId:e,tokens:{drm:t}={},customDomain:i=iP},a)=>{let r=i$(e);return`https://license.${i.toLocaleLowerCase().endsWith(iP)?i:iP}/appcert/${a}/${r}?token=${t}`},i4=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iP)||!!i&&a.includes(i.toLocaleLowerCase())};function i5(e){var t;let i=e.target,a=null==(t=iO.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function i9(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tO(i,a);if(t.src&&a===tO.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=iq(t))?e:t.error;(null==i?void 0:i.code)===tO.MEDIA_ERR_SRC_NOT_SUPPORTED&&i8(t,r)},500);if(t.src&&(a!==tO.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}i8(t,r)}function i8(e,t){var i;t.fatal&&((null!=(i=iO.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function i6(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tO))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iO.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var i7,ae,at,ai,aa,ar,an,as,ao,al,ad,au,ac=(e,t)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",e);let n={[tM.ErrorTypes.NETWORK_ERROR]:tO.MEDIA_ERR_NETWORK,[tM.ErrorTypes.MEDIA_ERROR]:tO.MEDIA_ERR_DECODE,[tM.ErrorTypes.KEY_SYSTEM_ERROR]:tO.MEDIA_ERR_ENCRYPTED},s,o=[tM.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tM.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tO.MEDIA_ERR_NETWORK:n[e.type];if(o===tO.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tM.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===tM.ErrorTypes.NETWORK_ERROR?tx:void 0)?i:tx;s=null!=(a=ig(e.response,r,t,e.fatal))?a:new tO("",o,e.fatal)}else o===tO.MEDIA_ERR_ENCRYPTED?e.details===tM.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tO(t5("Attempting to play DRM-protected content without providing a DRM token."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===tM.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tO(t5("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===tM.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tO(t5("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tO.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===tM.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tO(t5("Failed to update DRM license. This may be an issue with the player or your protected content."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===tM.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tO(t5("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===tM.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tO(t5("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===tM.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tO(t5("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tO.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new tO(e.error.message,tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new tO("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},ah=e.i(2709),am=e=>{throw TypeError(e)},ap=(e,t,i)=>t.has(e)||am("Cannot "+i),av=(e,t,i)=>(ap(e,t,"read from private field"),i?i.call(e):t.get(e)),ab=(e,t,i)=>t.has(e)?am("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ag=(e,t,i,a)=>(ap(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),af=(e,t,i)=>(ap(e,t,"access private method"),i),aE=(()=>{try{return"0.27.0"}catch{}return"UNKNOWN"})(),ay=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,a_={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},aT=Object.values(a_),aA="mux-video",ak=class extends ah.CustomVideoElement{constructor(){super(),ab(this,ad),ab(this,i7),ab(this,ae),ab(this,at),ab(this,ai,{}),ab(this,aa,{}),ab(this,ar),ab(this,an),ab(this,as),ab(this,ao),ab(this,al,""),ag(this,at,iH()),this.nativeEl.addEventListener("muxmetadata",e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=iO.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(ag(this,al,"default"),this.updateLogo())})}static get NAME(){return aA}static get VERSION(){return aE}static get observedAttributes(){var e;return[...aT,...null!=(e=ah.CustomVideoElement.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?ay:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${ah.CustomVideoElement.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[a_.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(a_.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tq.includes(e)?this.setAttribute(a_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tq.join()}`):this.removeAttribute(a_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(a_.PLAYER_INIT_TIME)?+this.getAttribute(a_.PLAYER_INIT_TIME):av(this,at)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(a_.PLAYER_INIT_TIME):this.setAttribute(a_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=av(this,as))?e:aA}set playerSoftwareName(e){ag(this,as,e)}get playerSoftwareVersion(){var e;return null!=(e=av(this,an))?e:aE}set playerSoftwareVersion(e){ag(this,an,e)}get _hls(){var e;return null==(e=av(this,i7))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iq(this.nativeEl))?e:null}get errorTranslator(){return av(this,ao)}set errorTranslator(e){ag(this,ao,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(a_.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(a_.TYPE,e):this.removeAttribute(a_.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(a_.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(a_.DEBUG,""):this.removeAttribute(a_.DEBUG))}get disableTracking(){return this.hasAttribute(a_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(a_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(a_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(a_.DISABLE_COOKIES,""):this.removeAttribute(a_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(a_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(a_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(a_.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(a_.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(a_.START_TIME):this.setAttribute(a_.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(a_.PLAYBACK_ID)?this.getAttribute(a_.PLAYBACK_ID):null!=(e=iV(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(a_.PLAYBACK_ID,e):this.removeAttribute(a_.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(a_.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(a_.MAX_RESOLUTION,e):this.removeAttribute(a_.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(a_.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(a_.MIN_RESOLUTION,e):this.removeAttribute(a_.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(a_.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(a_.RENDITION_ORDER,e):this.removeAttribute(a_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(a_.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(a_.PROGRAM_START_TIME):this.setAttribute(a_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(a_.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(a_.PROGRAM_END_TIME):this.setAttribute(a_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(a_.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(a_.ASSET_START_TIME):this.setAttribute(a_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(a_.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(a_.ASSET_END_TIME):this.setAttribute(a_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(a_.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(a_.CUSTOM_DOMAIN,e):this.removeAttribute(a_.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(a_.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(a_.DRM_TOKEN,e):this.removeAttribute(a_.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(a_.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(a_.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(a_.PLAYBACK_ID)){let[,e]=tz(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(a_.PLAYBACK_TOKEN,e):this.removeAttribute(a_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(a_.PLAYBACK_TOKEN),t=this.getAttribute(a_.DRM_TOKEN);return{...av(this,aa),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){ag(this,aa,null!=e?e:{})}get ended(){return iQ(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(a_.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(a_.ENV_KEY,e):this.removeAttribute(a_.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(a_.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(a_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(a_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(a_.STREAM_TYPE))?e:iF(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(a_.STREAM_TYPE,e):this.removeAttribute(a_.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(a_.TARGET_LIVE_WINDOW)?+this.getAttribute(a_.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=iO.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(a_.TARGET_LIVE_WINDOW):this.setAttribute(a_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(a_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=iO.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=iK(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(a_.LIVE_EDGE_OFFSET))return+this.getAttribute(a_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(a_.LIVE_EDGE_OFFSET):this.setAttribute(a_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iK(this.nativeEl)}async addCuePoints(e){return io(this.nativeEl,e)}get activeCuePoint(){return id(this.nativeEl)}get cuePoints(){return function(e,t={label:ir}){let i=ii(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>il(e)):[]}(this.nativeEl)}async addChapters(e){return ip(this.nativeEl,e)}get activeChapter(){return iv(this.nativeEl)}get chapters(){return function(e,t={label:ic}){var i;let a=ii(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>im(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(a_.PREFER_PLAYBACK);if("mse"===e||e===t$)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===t$?this.setAttribute(a_.PREFER_PLAYBACK,e):this.removeAttribute(a_.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![a_.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...av(this,ai)}}set metadata(e){ag(this,ai,null!=e?e:{}),this.mux&&this.mux.emit("hb",av(this,ai))}get _hlsConfig(){return av(this,ar)}set _hlsConfig(e){ag(this,ar,e)}get logo(){var e;return null!=(e=this.getAttribute(a_.LOGO))?e:av(this,al)}set logo(e){e?this.setAttribute(a_.LOGO,e):this.removeAttribute(a_.LOGO)}load(){ag(this,i7,((e,t,i)=>{var a,r,n;iZ(t,i,e);let{metadata:s={}}=e,{view_session_id:o=iB()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:i4(e)&&null!=(n=null!=(r=i$(e.playbackId))?r:iV(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},iO.set(t,{retryCount:0});let d=((e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tX(e)===tF.M3U8,d=iz(e,t);if(l&&!d&&iU){let l=iX(a),d=iJ(e),u=new tM({debug:i,startPosition:r,cmcd:[tV.QUERY,tV.HEADER].includes(s)?{useHeaders:s===tV.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tV.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},capLevelController:iy,...{backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},...l,...d,...o});return u.on(tM.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iL(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),u}})(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tZ(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?tM:void 0}):((e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tD,muxDataSDKOptions:o={}}=e,l=i4(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tM:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}})(e,t,d),((e,t,i)=>{var a,r;let n=iz(e,t),{src:s,customDomain:o=iP}=e,l=()=>{t.ended||e.disablePseudoEnded||!iQ(t,i)||(ij(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=iK(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tZ(t,"durationchange",c),t&&n){let i=tX(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=iV(s);iL(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(iF(t)!==tB||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tZ(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iD(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=ig(i,tx,e);if(a)return void i8(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tZ(t,"play",e,{once:!0}),tZ(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?tZ(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);if(!t.mediaKeys){let i=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iS),t}).catch(()=>{let e=t5("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory="drm",i.muxCode=5000001,i8(t,i)});if(!i)return;let r=await i.createMediaKeys();try{let t=await i0(i3(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=ig(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=t5("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(e){i8(t,e);return}await t.setMediaKeys(r)}let r=i.initData;if(null==r)return void console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(e=>{let i;if("internal-error"===e){let e=t5("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005}else if("output-restricted"===e||"output-downscaled"===e){let e=t5("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006}i&&i8(t,i)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let e=t5("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory="drm",i.muxCode=5000002,i8(t,i)}),new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})})]).then(([,e])=>e),o=await i1(s,i2(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=ig(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)});await n.update(o).catch(()=>{let e=t5("Failed to update DRM license. This may be an issue with the player or your protected content."),t=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000003,Promise.reject(t)})}catch(e){i8(t,e);return}}):tZ(t,"encrypted",()=>{let e=new tO(t5("Attempting to play DRM-protected content without providing a DRM token."),tO.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,i8(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iO.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",i5,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",i9),t.addEventListener("error",i6),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tZ(t,"pause",l),tZ(t,"seeked",l),tZ(t,"play",()=>{t.ended||iY(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let a,r;i&&s?(i.once(tM.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,b,g,{streamType:f,targetLiveWindow:E,liveEdgeStartOffset:y,lowLatency:_}=(m=tJ(h=e.type),p=t0(h),g=!!(null!=(c=e.partList)&&c.length),m===tB&&(b=g?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:b,lowLatency:g});if(f===tB){_?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iO.get(t))?o:{}).seekable=e}(null!=(l=iO.get(t))?l:{}).liveEdgeStartOffset=y,(null!=(d=iO.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iO.get(t))?u:{}).streamType=f,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),c(),iF(t)!==tB||Number.isFinite(t.duration)||(i.on(tM.Events.LEVEL_UPDATED,c),tZ(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tM.Events.LEVELS_UPDATED,c)}))}),i.on(tM.Events.ERROR,(a,r)=>{var n,s;let o=ac(r,e);if(2412e3===o.muxCode){let e=null!=(n=iO.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tO(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),i8(t,s),setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);return}{e.retryCount=0;let i=new tO('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),i8(t,i);return}}i8(t,o)}),i.on(tM.Events.MANIFEST_LOADED,()=>{let e=iO.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",i6),tZ(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tM.Events.MANIFEST_PARSED,function(t,i){n();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tM.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(r(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tM.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)}),null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)});let r=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},n=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),r()};t.once(tM.Events.DESTROYING,n)}(e,i),i.on(tM.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;it(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(tM.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(tM.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(tM.Events.MANIFEST_LOADED,r),i.once(tM.Events.MEDIA_ATTACHED,r),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}})(e,t,d),iu(t),ib(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=t6(a)?a:!!a,o=()=>{r||tZ(t,"playing",()=>{r=!0},{once:!0})};if(o(),tZ(t,"loadstart",()=>{r=!1,o(),t7(t,s)},{once:!0}),tZ(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tW?e.streamType===tB:!Number.isFinite(t.duration)),t7(t,s)},{once:!0}),i&&i.once(tM.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tW?e.streamType===tB:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tZ(t,"play",()=>{"metadata"===t.preload?i.once(tM.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||t7(t,s=t6(e)?e:!!e)}})(e,t,d);return{engine:d,setAutoplay:c,setPreload:u}})(this,this.nativeEl,av(this,i7)))}unload(){iZ(this.nativeEl,av(this,i7),this),ag(this,i7,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(ah.CustomVideoElement.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case a_.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case a_.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?af(this,ad,au).call(this):e&&!a?this.unload():e&&a&&(this.unload(),af(this,ad,au).call(this));break}case"autoplay":if(i===t)break;null==(a=av(this,i7))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=av(this,i7))||r.setPreload(i);break;case a_.PLAYBACK_ID:this.src=iW(this);break;case a_.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case a_.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case a_.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case a_.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case a_.LOGO:(null==i||i!==t)&&this.updateLogo()}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(av(this,al)||this.logo))}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!av(this,i7)&&af(this,ad,au).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};i7=new WeakMap,ae=new WeakMap,at=new WeakMap,ai=new WeakMap,aa=new WeakMap,ar=new WeakMap,an=new WeakMap,as=new WeakMap,ao=new WeakMap,al=new WeakMap,ad=new WeakSet,au=async function(){av(this,ae)||(await ag(this,ae,Promise.resolve()),ag(this,ae,null),this.load())};let aw=new WeakMap;class aI extends Error{}class aS extends Error{}let aC=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function aR(){return globalThis.cast?.framework?.CastContext.getInstance()}function aD(){return aR()?.getCurrentSession()}function aL(){return aD()?.getSessionObj().media[0]}function aM(e){return aR().setOptions({...ax(),...e})}function ax(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function aN(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return aC.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function aO(e){try{let i=await (await fetch(e)).text(),a=i,r=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(i);if(r.length>0){let t=new URL(r[0],e).toString();a=await (await fetch(t)).text()}var t=a.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let aP=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),aU=new WeakSet;aj=()=>{globalThis.chrome?.cast?.isAvailable?t||(t=cast.framework,aR().addEventListener(t.CastContextEventType.CAST_STATE_CHANGED,e=>{aP.forEach(t=>aw.get(t).onCastStateChanged?.(e))}),aR().addEventListener(t.CastContextEventType.SESSION_STATE_CHANGED,e=>{aP.forEach(t=>aw.get(t).onSessionStateChanged?.(e))}),aP.forEach(e=>aw.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?aj():customElements.whenDefined("google-cast-button").then(aj):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(aj)};let aH=0;class aB extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;constructor(e){super(),this.#e=e,aP.add(this),aw.set(this,{init:()=>this.#l(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#u(),getCastPlayer:()=>this.#c}),this.#l()}get #c(){if(aU.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new aI("disableRemotePlayback attribute is present.");return this.#o.set(e,++aH),this.#s.add(e),queueMicrotask(()=>e(this.#h())),aH}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new aI("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new aI("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new aS("The RemotePlayback API is disabled on this platform.");let e=aU.has(this.#e);aU.add(this.#e),aM(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await aR().requestSession()}catch(t){if(e||aU.delete(this.#e),"cancel"===t)return;throw Error(t)}aw.get(this.#e)?.loadOnPrompt?.()}#m(){aU.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),aU.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#h(){let e=aR()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#d(){let e=aR().getCastState();if(aU.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #u(){let{SESSION_RESUMED:e}=t.SessionState;if(aR().getSessionState()===e&&this.#e.castSrc===aL()?.media.contentId){aU.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var i;await (i=new chrome.cast.media.GetStatusRequest,new Promise((e,t)=>{aL().getStatus(i,e,t)}))}catch(e){console.error(e)}this.#a[t.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#l(){t&&!this.#t&&(this.#t=!0,aM(this.#e.castOptions),this.#e.textTracks.addEventListener("change",()=>this.#p()),this.#d(),this.#i=new t.RemotePlayer,new t.RemotePlayerController(this.#i),this.#a={[t.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[t.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[t.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[t.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#c?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[t.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[t.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[t.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#c?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#c?.playerState]))},[t.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#c?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#p()}async #p(){let e;if(!this.#c)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=aD()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{aL().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let aW=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#b={paused:!1};#g=ax();#f;#E;get remote(){return this.#E?this.#E:globalThis.chrome?(this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),aw.set(this,{loadOnPrompt:()=>this.#y()}),this.#E=new aB(this)):super.remote}get #c(){return aw.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#g.receiverApplicationId=i;return}if(this.#c)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #y(){this.#b.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#c)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],aN(this.castSrc)){let t=await aO(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#b.paused,r.activeTrackIds=i,await aD()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#c){this.#c.isPaused&&this.#c.controller?.playOrPause();return}return super.play()}pause(){if(this.#c){this.#c.isPaused||this.#c.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#g}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#f}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#f=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#c)switch(this.#c.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#c?this.#c.isPaused:super.paused}get muted(){return this.#c?this.#c?.isMuted:super.muted}set muted(e){if(this.#c){(e&&!this.#c.isMuted||!e&&this.#c.isMuted)&&this.#c.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#c?this.#c?.volumeLevel??1:super.volume}set volume(e){if(this.#c){this.#c.volumeLevel=+e,this.#c.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.duration??NaN:super.duration}get currentTime(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.currentTime??0:super.currentTime}set currentTime(e){if(this.#c){this.#c.currentTime=e,this.#c.controller?.seek();return}super.currentTime=e}};e.i(91205);var a$=e.i(7180),aV=e=>{throw TypeError(e)},aq=(e,t,i)=>t.has(e)||aV("Cannot "+i),aF=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),aK=(e,t,i)=>t.has(e)?aV("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),aG=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aY=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends aY{});var aj,aQ,aZ=class extends aY{},az=class{constructor(e,t={}){aK(this,aQ),aG(this,aQ,null==t?void 0:t.detail)}get detail(){return aF(this,aQ)}initCustomEvent(){}};aQ=new WeakMap;var aX={document:{createElement:function(e,t){return new aZ}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(aZ)},CustomEvent:az,EventTarget:aY,HTMLElement:aZ,HTMLVideoElement:class extends aY{}},aJ="undefined"==typeof window||void 0===globalThis.customElements,a0=aJ?aX:globalThis;aJ&&aX.document;var a1,a2=class extends aW((0,a$.MediaTracksMixin)(ak)){constructor(){super(...arguments),aK(this,a1)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=aF(this,a1))?e:this.muxCastCustomData}set castCustomData(e){aG(this,a1,e)}};a1=new WeakMap,a0.customElements.get("mux-video")||(a0.customElements.define("mux-video",a2),a0.MuxVideoElement=a2);let a3={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},a4={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},a5={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},a9=Object.entries(a5),a8=a9.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),a6=a9.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),a7=Object.entries(a6).reduce((e,[t,i])=>{let a=a8[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),re=Object.entries(a8).reduce((e,[t,i])=>{let a=a6[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),rt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ri={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},ra={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},rr={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},rn={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rs={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ro={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},rl={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function rd(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ru(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function rc(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function rh(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function rm(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function rp(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",()=>re,"AvailabilityStates",()=>rn,"MediaStateChangeEvents",()=>a6,"MediaStateReceiverAttributes",()=>a4,"MediaUIAttributes",()=>a8,"MediaUIEvents",()=>a3,"MediaUIProps",()=>a5,"PointerTypes",()=>rr,"ReadyStates",()=>ra,"StateChangeEventToAttributeMap",()=>a7,"StreamTypes",()=>rs,"TextTrackKinds",()=>rt,"TextTrackModes",()=>ri,"VolumeLevels",()=>ro,"WebkitPresentationModes",()=>rl],92617),e.i(92617);let rv=e=>new Promise(t=>setTimeout(t,e)),rb=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],rg=e=>{if(!rm(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?rb[t].singular:rb[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function rf(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}let rE=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function ry(e=rE){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}e.s(["emptyTimeRanges",()=>rE,"formatAsTimePhrase",()=>rg,"formatTime",()=>rf,"serializeTimeRanges",()=>ry],38333),e.i(38333);let r_={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},rT=(null==(d9=globalThis.navigator)?void 0:d9.language)||"en",rA=(e,t={})=>(e=>{var t,i,a;let[r]=rT.split("-");return(null==(t=r_[rT])?void 0:t[e])||(null==(i=r_[r])?void 0:i[e])||(null==(a=r_.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class rk{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class rw extends rk{}class rI extends rw{constructor(){super(...arguments),this.role=null}}let rS={createElement:function(){return new rC.HTMLElement},createElementNS:function(){return new rC.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},rC={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:rS,Node:rw,Element:rI,HTMLElement:class extends rI{constructor(){super(...arguments),this.innerHTML=""}get content(){return new rC.DocumentFragment}},DocumentFragment:class extends rk{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},rR="undefined"==typeof window||void 0===window.customElements,rD=Object.keys(rC).every(e=>e in globalThis),rL=rR&&!rD?rC:globalThis,rM=rR&&!rD?rS:globalThis.document,rx=new WeakMap,rN=e=>{let t=rx.get(e);return t||rx.set(e,t=new Set),t},rO=new rL.ResizeObserver(e=>{for(let t of e)for(let e of rN(t.target))e(t)});function rP(e,t){rN(e).add(t),rO.observe(e)}function rU(e,t){let i=rN(e);i.delete(t),i.size||rO.unobserve(e)}function rH(e){let t={};for(let i of e)t[i.name]=i.value;return t}function rB(e){var t;return null!=(t=rW(e))?t:rF(e,"media-controller")}function rW(e){var t;let{MEDIA_CONTROLLER:i}=a4,a=e.getAttribute(i);if(a)return null==(t=rG(e))?void 0:t.getElementById(a)}let r$=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},rV=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},rq=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||rq(e,t.getRootNode().host)),rF=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||rF(e.getRootNode().host,t)};function rK(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=rK(i.shadowRoot))?t:i:null}function rG(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function rY(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function rj(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||rQ(e,t)}function rQ(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function rZ(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function rz(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}rZ(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function rX(e,t){return e.hasAttribute(t)}function rJ(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}rX(e,t)!=i&&e.toggleAttribute(t,i)}function r0(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function r1(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;r0(e,t,void 0)!==a&&e.setAttribute(t,a)}var r2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r3=(e,t,i)=>(r2(e,t,"read from private field"),i?i.call(e):t.get(e)),r4=(e,t,i,a)=>(r2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r5 extends rL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,d8,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a4.MEDIA_CONTROLLER,a8.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=r3(this,d8))?void 0:a.unassociateElement)||r.call(a,this),r4(this,d8,null)),i&&this.isConnected&&(r4(this,d8,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=r3(this,d8))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a,r,n;let s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),r4(this,d8,(r=this,(s=r.getAttribute(a4.MEDIA_CONTROLLER))?null==(n=r.getRootNode())?void 0:n.getElementById(s):rF(r,"media-controller"))),this.getAttribute(a4.MEDIA_CONTROLLER)&&(null==(t=null==(e=r3(this,d8))?void 0:e.associateElement)||t.call(e,this)),null==(i=r3(this,d8))||i.addEventListener("pointerdown",this),null==(a=r3(this,d8))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(a4.MEDIA_CONTROLLER)&&(null==(t=null==(e=r3(this,d8))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=r3(this,d8))||i.removeEventListener("pointerdown",this),null==(a=r3(this,d8))||a.removeEventListener("click",this),r4(this,d8,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===rr.TOUCH)return void this.handleTap(e);if(d===rr.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return rX(this,a8.MEDIA_PAUSED)}set mediaPaused(e){rJ(this,a8.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?a3.MEDIA_PLAY_REQUEST:a3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new rL.CustomEvent(t,{composed:!0,bubbles:!0}))}}d8=new WeakMap,r5.shadowRootOptions={mode:"open"},r5.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},rL.customElements.get("media-gesture-receiver")||rL.customElements.define("media-gesture-receiver",r5);var r9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r8=(e,t,i)=>(r9(e,t,"read from private field"),i?i.call(e):t.get(e)),r6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r7=(e,t,i,a)=>(r9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ne=(e,t,i)=>(r9(e,t,"access private method"),i);let nt="audio",ni="autohide",na="breakpoints",nr="gesturesdisabled",nn="keyboardcontrol",ns="noautohide",no="userinactive",nl="autohideovercontrols",nd=Object.values(a8);function nu(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(na))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(a6.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(a6.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class nc extends rL.HTMLElement{constructor(){if(super(),r6(this,ua),r6(this,uo),r6(this,ud),r6(this,uc),r6(this,um),r6(this,uv),r6(this,d6,0),r6(this,d7,null),r6(this,ue,null),r6(this,ut,void 0),this.breakpointsComputed=!1,r6(this,ui,new MutationObserver(ne(this,ua,ur).bind(this))),r6(this,un,!1),r6(this,us,e=>{r8(this,un)||(setTimeout(()=>{nu(e.target,e.contentRect.width),r7(this,un,!1)},0),r7(this,un,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){r8(this,d7)&&this.mediaUnsetCallback(r8(this,d7));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ni,nr].concat(nd).filter(e=>![a8.MEDIA_RENDITION_LIST,a8.MEDIA_AUDIO_TRACK_LIST,a8.MEDIA_CHAPTERS_CUES,a8.MEDIA_WIDTH,a8.MEDIA_HEIGHT,a8.MEDIA_ERROR,a8.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==ni&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(r7(this,d7,e),e.localName.includes("-")&&await rL.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;r8(this,ui).observe(this,{childList:!0,subtree:!0}),rP(this,r8(this,us));let t=null!=this.getAttribute(nt)?rA("audio player"):rA("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(no,""),nu(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=rL.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;r8(this,ui).disconnect(),rU(this,r8(this,us)),this.media&&this.mediaUnsetCallback(this.media),null==(e=rL.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){r7(this,d7,null)}handleEvent(e){switch(e.type){case"pointerdown":r7(this,d6,e.timeStamp);break;case"pointermove":ne(this,uo,ul).call(this,e);break;case"pointerup":ne(this,ud,uu).call(this,e);break;case"mouseleave":ne(this,uc,uh).call(this);break;case"mouseup":this.removeAttribute(nn);break;case"keyup":ne(this,uv,ub).call(this),this.setAttribute(nn,"")}}set autohide(e){let t=Number(e);r7(this,ut,isNaN(t)?0:t)}get autohide(){return(void 0===r8(this,ut)?2:r8(this,ut)).toString()}get breakpoints(){return r0(this,na)}set breakpoints(e){r1(this,na,e)}get audio(){return rX(this,nt)}set audio(e){rJ(this,nt,e)}get gesturesDisabled(){return rX(this,nr)}set gesturesDisabled(e){rJ(this,nr,e)}get keyboardControl(){return rX(this,nn)}set keyboardControl(e){rJ(this,nn,e)}get noAutohide(){return rX(this,ns)}set noAutohide(e){rJ(this,ns,e)}get autohideOverControls(){return rX(this,nl)}set autohideOverControls(e){rJ(this,nl,e)}get userInteractive(){return rX(this,no)}set userInteractive(e){rJ(this,no,e)}}d6=new WeakMap,d7=new WeakMap,ue=new WeakMap,ut=new WeakMap,ui=new WeakMap,ua=new WeakSet,ur=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},un=new WeakMap,us=new WeakMap,uo=new WeakSet,ul=function(e){if("mouse"!==e.pointerType&&e.timeStamp-r8(this,d6)<250)return;ne(this,um,up).call(this),clearTimeout(r8(this,ue));let t=this.hasAttribute(nl);([this,this.media].includes(e.target)||t)&&ne(this,uv,ub).call(this)},ud=new WeakSet,uu=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(no);[this,this.media].includes(e.target)&&t?ne(this,uc,uh).call(this):ne(this,uv,ub).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ne(this,uv,ub).call(this)},uc=new WeakSet,uh=function(){if(0>r8(this,ut)||this.hasAttribute(no))return;this.setAttribute(no,"");let e=new rL.CustomEvent(a6.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},um=new WeakSet,up=function(){if(!this.hasAttribute(no))return;this.removeAttribute(no);let e=new rL.CustomEvent(a6.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},uv=new WeakSet,ub=function(){ne(this,um,up).call(this),clearTimeout(r8(this,ue));let e=parseInt(this.autohide);e<0||r7(this,ue,setTimeout(()=>{ne(this,uc,uh).call(this)},1e3*e))},nc.shadowRootOptions={mode:"open"},nc.getTemplateHTML=function(e){return`
    <style>
      
      :host([${a8.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${nt}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${nt}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${nt}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${nt}])[${nr}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${nt}])[${nr}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${nt}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${nt}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${nt}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${nt}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${ns}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${no}]:not([${a8.MEDIA_PAUSED}]):not([${a8.MEDIA_IS_AIRPLAYING}]):not([${a8.MEDIA_IS_CASTING}]):not([${nt}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ns}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${no}]:not([${ns}]):not([${a8.MEDIA_PAUSED}]):not([${a8.MEDIA_IS_CASTING}]):not([${nt}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${no}][${nl}]:not([${ns}]):not([${a8.MEDIA_PAUSED}]):not([${a8.MEDIA_IS_CASTING}]):not([${nt}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${nt}])[${a8.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${r5.shadowRootOptions.mode}">
          ${r5.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},rL.customElements.get("media-container")||rL.customElements.define("media-container",nc);var nh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nm=(e,t,i)=>(nh(e,t,"read from private field"),i?i.call(e):t.get(e)),np=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nv=(e,t,i,a)=>(nh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nb{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){np(this,u_),np(this,ug,void 0),np(this,uf,void 0),np(this,uE,void 0),np(this,uy,new Set),nv(this,ug,e),nv(this,uf,t),nv(this,uE,new Set(i))}[Symbol.iterator](){return nm(this,u_,uT).values()}get length(){return nm(this,u_,uT).size}get value(){var e;return null!=(e=[...nm(this,u_,uT)].join(" "))?e:""}set value(e){var t;e!==this.value&&(nv(this,uy,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...nm(this,u_,uT)][e]}values(){return nm(this,u_,uT).values()}forEach(e,t){nm(this,u_,uT).forEach(e,t)}add(...e){var t,i;e.forEach(e=>nm(this,uy).add(e)),(""!==this.value||(null==(t=nm(this,ug))?void 0:t.hasAttribute(`${nm(this,uf)}`)))&&(null==(i=nm(this,ug))||i.setAttribute(`${nm(this,uf)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>nm(this,uy).delete(e)),null==(t=nm(this,ug))||t.setAttribute(`${nm(this,uf)}`,`${this.value}`)}contains(e){return nm(this,u_,uT).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}ug=new WeakMap,uf=new WeakMap,uE=new WeakMap,uy=new WeakMap,u_=new WeakSet,uT=function(){return nm(this,uy).size?nm(this,uy):nm(this,uE)};let ng=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?rt.CAPTIONS:rt.SUBTITLES,language:i,label:r}},nf=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=ng(e);return{...t,...i}}),nE=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?ng(e):e):"string"==typeof e?nf(e):[e]:[],ny=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,n_=(e=[])=>Array.prototype.map.call(e,ny).join(" "),nT=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},nA=(e,t=[],i=[])=>{let a=nE(i).map(nT);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},nk=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:nT(t);return Array.from(e.textTracks).filter(i)},nw=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(a8.MEDIA_SUBTITLES_SHOWING)},nI="exitFullscreen"in rM?"exitFullscreen":"webkitExitFullscreen"in rM?"webkitExitFullscreen":"webkitCancelFullScreen"in rM?"webkitCancelFullScreen":void 0,nS="fullscreenElement"in rM?"fullscreenElement":"webkitFullscreenElement"in rM?"webkitFullscreenElement":void 0,nC="fullscreenEnabled"in rM?"fullscreenEnabled":"webkitFullscreenEnabled"in rM?"webkitFullscreenEnabled":void 0,nR=()=>{var e;return i||(i=null==(e=null==rM?void 0:rM.createElement)?void 0:e.call(rM,"video"))},nD=async(e=nR())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([nL(e,i.signal),nM(e,t)]);return i.abort(),a},nL=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),nM=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await rv(10)}return e.volume!==t},nx=/.*Version\/.*Safari\/.*/.test(rL.navigator.userAgent),nN=(e=nR())=>(!rL.matchMedia("(display-mode: standalone)").matches||!nx)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),nO=(e=nR())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[nC])||i&&"webkitSupportsFullscreen"in i})({documentElement:rM,media:e}),nP=nO(),nU=nN(),nH=!!rL.WebKitPlaybackTargetAvailabilityEvent,nB=!!rL.chrome,nW=e=>nk(e.media,e=>[rt.SUBTITLES,rt.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),n$=e=>nk(e.media,e=>e.mode===ri.SHOWING&&[rt.SUBTITLES,rt.CAPTIONS].includes(e.kind)),nV=(e,t)=>{let i=nW(e),a=n$(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)nA(ri.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;nA(ri.DISABLED,i,a),nA(ri.SHOWING,i,[{language:n,label:s,kind:o}])}}},nq=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?nF(e,t):Object.entries(e).every(([e,i])=>e in t&&nq(i,t[e])))),nF=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>nq(e,t[i])))},nK=Object.values(rs),nG=nD().then(e=>a=e),nY=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof rL.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=rL.customElements.get(t);i&&e instanceof i||(await rL.customElements.whenDefined(t),rL.customElements.upgrade(e))}))},nj=new rL.DOMParser,nQ={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){if(!i.hasAttribute("muted")&&!a)try{rL.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===rL.localStorage.getItem("media-chrome-pref-muted");nQ.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?rL.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||rL.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=rL.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;nQ.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&rm(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[rs.LIVE,rs.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(nK.includes(r))return r===rs.UNKNOWN?a:r;let n=t.duration;return n===1/0?rs.LIVE:Number.isFinite(n)?rs.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=nQ.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===rs.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(nQ.mediaStreamType.get(e)!==rs.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>nW(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>n$(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![rt.CAPTIONS,rt.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||nV(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=nk(i,{kind:rt.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&nj.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&rq(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!rM.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else rM.pictureInPictureElement&&rM.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[nS];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===rl.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(nS in e))return rq(n,r);for(;null==e?void 0:e[nS];){if(e[nS]===r)return!0;e=null==(t=e[nS])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(nI){let e=null==(t=null==i?void 0:i[nI])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&rL.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!nP||!nO(t))return rn.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return nU&&nN(t)?(null==t?void 0:t.disablePictureInPicture)?rn.UNAVAILABLE:void 0:rn.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===a||(null==t?void 0:t.volume)==void 0)return rn.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==a&&nG.then(t=>e(t?void 0:rn.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return nB&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?rn.UNAVAILABLE:void 0:rn.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>nH?(null==t?void 0:t.availability)==="not-available"?rn.UNAVAILABLE:void 0:rn.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:rn.UNAVAILABLE:rn.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?rn.UNAVAILABLE:void 0:rn.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},nZ={[a3.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=nk(l,{kind:rt.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[a3.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[a3.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===rs.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[a3.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[a3.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[a3.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[a3.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[a3.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[a3.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[a3.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=nW(t),s=nE(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&rL.localStorage.setItem("media-chrome-pref-subtitles-lang",o),nA(ri.SHOWING,n,s)},[a3.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=nW(t);nA(ri.DISABLED,a,null!=i?i:[])},[a3.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){nV(t,i)},[a3.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[a3.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[a3.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[a3.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[a3.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[a3.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[a3.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[a3.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[a3.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var nz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nX=(e,t,i)=>(nz(e,t,"read from private field"),i?i.call(e):t.get(e)),nJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n0=(e,t,i,a)=>(nz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n1=(e,t,i)=>(nz(e,t,"access private method"),i);let n2=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],n3="defaultsubtitles",n4="defaultstreamtype",n5="defaultduration",n9="fullscreenelement",n8="hotkeys",n6="keysused",n7="liveedgeoffset",se="seektoliveoffset",st="noautoseektolive",si="nohotkeys",sa="novolumepref",sr="nomutedpref",sn="nosubtitleslangpref",ss="nodefaultstore",so="keyboardforwardseekoffset",sl="keyboardbackwardseekoffset",sd="lang";class su extends nc{constructor(){super(),nJ(this,uR),nJ(this,uL),nJ(this,ux),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,nJ(this,uA,new nb(this,n8)),nJ(this,uk,void 0),nJ(this,uw,void 0),nJ(this,uI,void 0),nJ(this,uS,void 0),nJ(this,uC,e=>{var t;null==(t=nX(this,uw))||t.dispatch(e)}),this.associateElement(this);let e={};n0(this,uI,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new rL.CustomEvent(re[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(si)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(si,n8,n4,n3,n5,sd)}get mediaStore(){return nX(this,uw)}set mediaStore(e){var t,i;(nX(this,uw)&&(null==(t=nX(this,uS))||t.call(this),n0(this,uS,void 0)),n0(this,uw,e),nX(this,uw)||this.hasAttribute(ss))?n0(this,uS,null==(i=nX(this,uw))?void 0:i.subscribe(nX(this,uI))):n1(this,uR,uD).call(this)}get fullscreenElement(){var e;return null!=(e=nX(this,uk))?e:this}set fullscreenElement(e){var t;this.hasAttribute(n9)&&this.removeAttribute(n9),n0(this,uk,e),null==(t=nX(this,uw))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return rX(this,n3)}set defaultSubtitles(e){rJ(this,n3,e)}get defaultStreamType(){return r0(this,n4)}set defaultStreamType(e){r1(this,n4,e)}get defaultDuration(){return rZ(this,n5)}set defaultDuration(e){rz(this,n5,e)}get noHotkeys(){return rX(this,si)}set noHotkeys(e){rJ(this,si,e)}get keysUsed(){return r0(this,n6)}set keysUsed(e){r1(this,n6,e)}get liveEdgeOffset(){return rZ(this,n7)}set liveEdgeOffset(e){rz(this,n7,e)}get noAutoSeekToLive(){return rX(this,st)}set noAutoSeekToLive(e){rJ(this,st,e)}get noVolumePref(){return rX(this,sa)}set noVolumePref(e){rJ(this,sa,e)}get noMutedPref(){return rX(this,sr)}set noMutedPref(e){rJ(this,sr,e)}get noSubtitlesLangPref(){return rX(this,sn)}set noSubtitlesLangPref(e){rJ(this,sn,e)}get noDefaultStore(){return rX(this,ss)}set noDefaultStore(e){rJ(this,ss,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c;if(super.attributeChangedCallback(e,t,i),e===si)i!==t&&""===i?(this.hasAttribute(n8)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===n8)nX(this,uA).value=i;else if(e===n3&&i!==t)null==(a=nX(this,uw))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(n3)}});else if(e===n4)null==(n=nX(this,uw))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(n4))?r:void 0}});else if(e===n7)null==(s=nX(this,uw))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(n7)?+this.getAttribute(n7):void 0,seekToLiveOffset:this.hasAttribute(se)?void 0:+this.getAttribute(n7)}});else if(e===se)null==(o=nX(this,uw))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(se)?+this.getAttribute(se):void 0}});else if(e===st)null==(l=nX(this,uw))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(st)}});else if(e===n9){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;n0(this,uk,e),null==(u=nX(this,uw))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sd&&i!==t&&(rT=i,null==(c=nX(this,uw))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}}))}connectedCallback(){var e,t;nX(this,uw)||this.hasAttribute(ss)||n1(this,uR,uD).call(this),null==(e=nX(this,uw))||e.dispatch({type:"documentelementchangerequest",detail:rM}),super.connectedCallback(),nX(this,uw)&&!nX(this,uS)&&n0(this,uS,null==(t=nX(this,uw))?void 0:t.subscribe(nX(this,uI))),this.hasAttribute(si)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),nX(this,uw)&&(null==(t=nX(this,uw))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=nX(this,uw))||i.dispatch({type:a3.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),nX(this,uS)&&(null==(a=nX(this,uS))||a.call(this),n0(this,uS,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=nX(this,uw))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=nX(this,uw))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){sE(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=sy(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(a3).forEach(t=>{e.addEventListener(t,nX(this,uC))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(a3).forEach(t=>{e.removeEventListener(t,nX(this,uC))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),nX(this,uw)&&Object.entries(nX(this,uw).getState()).forEach(([t,i])=>{sE([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",n1(this,ux,uN))}disableHotkeys(){this.removeEventListener("keydown",n1(this,ux,uN)),this.removeEventListener("keyup",n1(this,uL,uM))}get hotkeys(){return r0(this,n8)}set hotkeys(e){r1(this,n8,e)}keyboardShortcutHandler(e){var t,i,a,r,n;let s,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(n6))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||nX(this,uA).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&nX(this,uA).contains("nospace")))switch(e.key){case" ":case"k":s=nX(this,uw).getState().mediaPaused?a3.MEDIA_PLAY_REQUEST:a3.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new rL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s="off"===this.mediaStore.getState().mediaVolumeLevel?a3.MEDIA_UNMUTE_REQUEST:a3.MEDIA_MUTE_REQUEST,this.dispatchEvent(new rL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.mediaStore.getState().mediaIsFullscreen?a3.MEDIA_EXIT_FULLSCREEN_REQUEST:a3.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new rL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new rL.CustomEvent(a3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(sl)?+this.getAttribute(sl):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new rL.CustomEvent(a3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(so)?+this.getAttribute(so):10;o=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),l=new rL.CustomEvent(a3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}uA=new WeakMap,uk=new WeakMap,uw=new WeakMap,uI=new WeakMap,uS=new WeakMap,uC=new WeakMap,uR=new WeakSet,uD=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=nQ,requestMap:r=nZ,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||nq(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,b,g,f,E,y,_,T,A,k,w,I;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await nY(...Object.values(e));let C=l.length>0&&0===t&&s,R=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(b=o.media)?void 0:b.audioTracks),x=(null==(g=d.media)?void 0:g.remote)!==(null==(f=o.media)?void 0:f.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(R||C),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(D||C),U=!!(null==(y=d.media)?void 0:y.videoRenditions)&&(L||C),H=!!(null==(_=d.media)?void 0:_.audioTracks)&&(M||C),B=!!(null==(T=d.media)?void 0:T.remote)&&(x||C),W=!!d.documentElement&&(N||C),$=O||P||U||H||B||W,V=0===l.length&&1===t&&s,q=!!o.media&&(R||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||V),K=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||V),G=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||V),Y=!!(null==(I=o.media)?void 0:I.remote)&&(x||V),j=!!o.documentElement&&(N||V),Q=q||F||K||G||Y||j;if(!($||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),G&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),Y&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let b=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{b&&$&&b(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(n3),defaultDuration:this.hasAttribute(n5)?+this.getAttribute(n5):void 0,defaultStreamType:null!=(e=this.getAttribute(n4))?e:void 0,liveEdgeOffset:this.hasAttribute(n7)?+this.getAttribute(n7):void 0,seekToLiveOffset:this.hasAttribute(se)?+this.getAttribute(se):this.hasAttribute(n7)?+this.getAttribute(n7):void 0,noAutoSeekToLive:this.hasAttribute(st),noVolumePref:this.hasAttribute(sa),noMutedPref:this.hasAttribute(sr),noSubtitlesLangPref:this.hasAttribute(sn)}})},uL=new WeakSet,uM=function(e){let{key:t}=e;n2.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",n1(this,uL,uM))},ux=new WeakSet,uN=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!n2.includes(a)?this.removeEventListener("keyup",n1(this,uL,uM)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(nX(this,uA).contains(`no${a.toLowerCase()}`)||" "===a&&nX(this,uA).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",n1(this,uL,uM),{once:!0}))};let sc=Object.values(a8),sh=Object.values(a5),sm=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(rL.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,a4.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>sc.includes(e)):[]},sp=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&rL.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof rL.customElements.get(e.nodeName.toLowerCase()))&&rL.customElements.upgrade(e),sh.some(t=>t in e)||!!sm(e).length},sv=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},sb={[a8.MEDIA_SUBTITLES_LIST]:n_,[a8.MEDIA_SUBTITLES_SHOWING]:n_,[a8.MEDIA_SEEKABLE]:sv,[a8.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(sv).join(" "),[a8.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[a8.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(rd).join(" ")},[a8.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(rc).join(" ")}},sg=async(e,t,i)=>{var a,r;if(e.isConnected||await rv(0),"boolean"==typeof i||null==i)return rJ(e,t,i);if("number"==typeof i)return rz(e,t,i);if("string"==typeof i)return r1(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=sb[t])?void 0:a.call(sb,i))?r:i;return e.setAttribute(t,n)},sf=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;sp(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>sf(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!sp(e)?rL.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},sE=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=sm(e),r=t.toLowerCase();a.includes(r)&&sg(e,r,i)})},sy=(e,t,i)=>{sf(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(a3.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(a3.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>sf(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>sf(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>sf(e,t)),Array.prototype.forEach.call(r,e=>sf(e,i))):"attributes"===n&&o===a4.MEDIA_CHROME_ATTRIBUTES&&(sp(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{sf(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(a3.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(a3.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};rL.customElements.get("media-controller")||rL.customElements.define("media-controller",su);let s_="placement",sT="bounds";class sA extends rL.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!rY(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=rF(this,"#"+this.bounds))?e:rB(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[s_,sT]}get placement(){return r0(this,s_)}set placement(e){r1(this,s_,e)}get bounds(){return r0(this,sT)}set bounds(e){r1(this,sT,e)}}sA.shadowRootOptions={mode:"open"},sA.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},rL.customElements.get("media-tooltip")||rL.customElements.define("media-tooltip",sA);var sk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sw=(e,t,i)=>(sk(e,t,"read from private field"),i?i.call(e):t.get(e)),sI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sS=(e,t,i,a)=>(sk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sC="tooltipplacement",sR="disabled",sD="notooltip";class sL extends rL.HTMLElement{constructor(){if(super(),sI(this,uW),sI(this,uO,void 0),this.preventClick=!1,this.tooltipEl=null,sI(this,uP,e=>{this.preventClick||this.handleClick(e),setTimeout(sw(this,uU),0)}),sI(this,uU,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),sI(this,uH,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",sw(this,uH))}),sI(this,uB,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",sw(this,uH)):this.addEventListener("keyup",sw(this,uH),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",sC,a4.MEDIA_CONTROLLER,a8.MEDIA_LANG]}enable(){this.addEventListener("click",sw(this,uP)),this.addEventListener("keydown",sw(this,uB)),this.tabIndex=0}disable(){this.removeEventListener("click",sw(this,uP)),this.removeEventListener("keydown",sw(this,uB)),this.removeEventListener("keyup",sw(this,uH)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sw(this,uO))?void 0:a.unassociateElement)||r.call(a,this),sS(this,uO,null)),i&&this.isConnected&&(sS(this,uO,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sw(this,uO))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===sC&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===a8.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),sw(this,uU).call(this)}connectedCallback(){var e,t,i;let{style:a}=rj(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(a4.MEDIA_CONTROLLER);r&&(sS(this,uO,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sw(this,uO))?void 0:t.associateElement)||i.call(t,this)),rL.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=uW,t=u$,sk(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=sw(this,uO))?void 0:e.unassociateElement)||t.call(e,this),sS(this,uO,null),this.removeEventListener("mouseenter",sw(this,uU)),this.removeEventListener("focus",sw(this,uU)),this.removeEventListener("click",sw(this,uP))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return r0(this,sC)}set tooltipPlacement(e){r1(this,sC,e)}get mediaController(){return r0(this,a4.MEDIA_CONTROLLER)}set mediaController(e){r1(this,a4.MEDIA_CONTROLLER,e)}get disabled(){return rX(this,sR)}set disabled(e){rJ(this,sR,e)}get noTooltip(){return rX(this,sD)}set noTooltip(e){rJ(this,sD,e)}handleClick(e){}}uO=new WeakMap,uP=new WeakMap,uU=new WeakMap,uH=new WeakMap,uB=new WeakMap,uW=new WeakSet,u$=function(){this.addEventListener("mouseenter",sw(this,uU)),this.addEventListener("focus",sw(this,uU)),this.addEventListener("click",sw(this,uP));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},sL.shadowRootOptions={mode:"open"},sL.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${sA.shadowRootOptions.mode}">
          ${sA.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},sL.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},sL.getTooltipContentHTML=function(){return""},rL.customElements.get("media-chrome-button")||rL.customElements.define("media-chrome-button",sL);let sM=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,sx=e=>{let t=e.mediaIsAirplaying?rA("stop airplay"):rA("start airplay");e.setAttribute("aria-label",t)};class sN extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_IS_AIRPLAYING,a8.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_IS_AIRPLAYING&&sx(this)}get mediaIsAirplaying(){return rX(this,a8.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){rJ(this,a8.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return r0(this,a8.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){r1(this,a8.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new rL.CustomEvent(a3.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}sN.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a8.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a8.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a8.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${a8.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sM}</slot>
      <slot name="exit">${sM}</slot>
    </slot>
  `},sN.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rA("start airplay")}</slot>
    <slot name="tooltip-exit">${rA("stop airplay")}</slot>
  `},rL.customElements.get("media-airplay-button")||rL.customElements.define("media-airplay-button",sN);let sO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,sP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sU=e=>{e.setAttribute("aria-checked",nw(e).toString())};class sH extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_SUBTITLES_LIST,a8.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",rA("closed captions")),sU(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_SUBTITLES_SHOWING&&sU(this)}get mediaSubtitlesList(){return sB(this,a8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sW(this,a8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sB(this,a8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sW(this,a8.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new rL.CustomEvent(a3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}sH.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${sO}</slot>
      <slot name="off">${sP}</slot>
    </slot>
  `},sH.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${rA("Enable captions")}</slot>
    <slot name="tooltip-disable">${rA("Disable captions")}</slot>
  `};let sB=(e,t)=>{let i=e.getAttribute(t);return i?nf(i):[]},sW=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=n_(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rL.customElements.get("media-captions-button")||rL.customElements.define("media-captions-button",sH);let s$=e=>{let t=e.mediaIsCasting?rA("stop casting"):rA("start casting");e.setAttribute("aria-label",t)};class sV extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_IS_CASTING,a8.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),s$(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_IS_CASTING&&s$(this)}get mediaIsCasting(){return rX(this,a8.MEDIA_IS_CASTING)}set mediaIsCasting(e){rJ(this,a8.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return r0(this,a8.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){r1(this,a8.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?a3.MEDIA_EXIT_CAST_REQUEST:a3.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new rL.CustomEvent(e,{composed:!0,bubbles:!0}))}}sV.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a8.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a8.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a8.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${a8.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},sV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rA("Start casting")}</slot>
    <slot name="tooltip-exit">${rA("Stop casting")}</slot>
  `},rL.customElements.get("media-cast-button")||rL.customElements.define("media-cast-button",sV);var sq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sF=(e,t,i)=>(sq(e,t,"read from private field"),i?i.call(e):t.get(e)),sK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sG=(e,t,i,a)=>(sq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sY=(e,t,i)=>(sq(e,t,"access private method"),i);let sj="open";class sQ extends rL.HTMLElement{constructor(){super(),sK(this,uK),sK(this,uY),sK(this,uQ),sK(this,uz),sK(this,uJ),sK(this,u1),sK(this,uV,!1),sK(this,uq,null),sK(this,uF,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[sj,"anchor"]}get open(){return rX(this,sj)}set open(e){rJ(this,sj,e)}handleEvent(e){switch(e.type){case"invoke":sY(this,uz,uX).call(this,e);break;case"focusout":sY(this,uJ,u0).call(this,e);break;case"keydown":sY(this,u1,u2).call(this,e)}}connectedCallback(){sY(this,uK,uG).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){sY(this,uK,uG).call(this),e===sj&&i!==t&&(this.open?sY(this,uY,uj).call(this):sY(this,uQ,uZ).call(this))}focus(){sG(this,uq,rK());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}uV=new WeakMap,uq=new WeakMap,uF=new WeakMap,uK=new WeakSet,uG=function(){if(!sF(this,uV)&&(sG(this,uV,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=rj(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},uY=new WeakSet,uj=function(){var e;null==(e=sF(this,uF))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},uQ=new WeakSet,uZ=function(){var e;null==(e=sF(this,uF))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},uz=new WeakSet,uX=function(e){sG(this,uF,e.relatedTarget),rq(this,e.relatedTarget)||(this.open=!this.open)},uJ=new WeakSet,u0=function(e){var t;!rq(this,e.relatedTarget)&&(null==(t=sF(this,uq))||t.focus(),sF(this,uF)&&sF(this,uF)!==e.relatedTarget&&this.open&&(this.open=!1))},u1=new WeakSet,u2=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=sF(this,uq))||n.focus(),this.open=!1))},sQ.shadowRootOptions={mode:"open"},sQ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},sQ.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},rL.customElements.get("media-chrome-dialog")||rL.customElements.define("media-chrome-dialog",sQ);var sZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sz=(e,t,i)=>(sZ(e,t,"read from private field"),i?i.call(e):t.get(e)),sX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sJ=(e,t,i,a)=>(sZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s0=(e,t,i)=>(sZ(e,t,"access private method"),i);class s1 extends rL.HTMLElement{constructor(){if(super(),sX(this,ci),sX(this,cr),sX(this,cs),sX(this,cl),sX(this,cu),sX(this,ch),sX(this,cp),sX(this,cb),sX(this,u3,void 0),sX(this,u4,void 0),sX(this,u5,void 0),sX(this,u9,void 0),sX(this,u8,{}),sX(this,u6,[]),sX(this,u7,()=>{if(this.range.matches(":focus-visible")){let{style:e}=rj(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),sX(this,ce,()=>{let{style:e}=rj(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),sX(this,ct,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),sJ(this,u5,this.shadowRoot.querySelector("#startpoint")),sJ(this,u9,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",a4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sz(this,u3))?void 0:a.unassociateElement)||r.call(a,this),sJ(this,u3,null)),i&&this.isConnected&&(sJ(this,u3,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sz(this,u3))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),s0(this,cr,cn).call(this)):(this.range.setAttribute(e,i),s0(this,cs,co).call(this)))}connectedCallback(){var e,t,i;let{style:a}=rj(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sz(this,u8).pointer=rj(this.shadowRoot,"#pointer"),sz(this,u8).progress=rj(this.shadowRoot,"#progress"),sz(this,u8).thumb=rj(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),sz(this,u8).activeSegment=rj(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(a4.MEDIA_CONTROLLER);r&&(sJ(this,u3,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sz(this,u3))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sz(this,u7)),this.shadowRoot.addEventListener("focusout",sz(this,ce)),s0(this,cr,cn).call(this),rP(this.container,sz(this,ct))}disconnectedCallback(){var e,t;s0(this,cs,co).call(this),null==(t=null==(e=sz(this,u3))?void 0:e.unassociateElement)||t.call(e,this),sJ(this,u3,null),this.shadowRoot.removeEventListener("focusin",sz(this,u7)),this.shadowRoot.removeEventListener("focusout",sz(this,ce)),rU(this.container,sz(this,ct))}updatePointerBar(e){var t;null==(t=sz(this,u8).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sz(this,u8).progress)||e.style.setProperty("width",`${i}%`),null==(t=sz(this,u8).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sJ(this,u6,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=rM.createElementNS("http://www.w3.org/2000/svg","rect"),c=rj(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=sz(this,u5).getBoundingClientRect(),n=(r=sz(this,u9).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":s0(this,cb,cg).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":s0(this,cu,cc).call(this,e);break;case"pointerdown":s0(this,cl,cd).call(this,e);break;case"pointerup":s0(this,ch,cm).call(this);break;case"pointerleave":s0(this,cp,cv).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}u3=new WeakMap,u4=new WeakMap,u5=new WeakMap,u9=new WeakMap,u8=new WeakMap,u6=new WeakMap,u7=new WeakMap,ce=new WeakMap,ct=new WeakMap,ci=new WeakSet,ca=function(e){let t=sz(this,u8).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sz(this,u6).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},cr=new WeakSet,cn=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},cs=new WeakSet,co=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=rL.window)||e.removeEventListener("pointerup",this),null==(t=rL.window)||t.removeEventListener("pointermove",this)},cl=new WeakSet,cd=function(e){var t;sJ(this,u4,e.composedPath().includes(this.range)),null==(t=rL.window)||t.addEventListener("pointerup",this)},cu=new WeakSet,cc=function(e){var t;"mouse"!==e.pointerType&&s0(this,cl,cd).call(this,e),this.addEventListener("pointerleave",this),null==(t=rL.window)||t.addEventListener("pointermove",this)},ch=new WeakSet,cm=function(){var e;null==(e=rL.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},cp=new WeakSet,cv=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=rL.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sz(this,u8).activeSegment)||t.style.removeProperty("transform")},cb=new WeakSet,cg=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),s0(this,ci,ca).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sz(this,u4))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},s1.shadowRootOptions={mode:"open"},s1.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},rL.customElements.get("media-chrome-range")||rL.customElements.define("media-chrome-range",s1);var s2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s3=(e,t,i)=>(s2(e,t,"read from private field"),i?i.call(e):t.get(e)),s4=(e,t,i,a)=>(s2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class s5 extends rL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cf,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s3(this,cf))?void 0:a.unassociateElement)||r.call(a,this),s4(this,cf,null)),i&&this.isConnected&&(s4(this,cf,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s3(this,cf))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(a4.MEDIA_CONTROLLER);a&&(s4(this,cf,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=s3(this,cf))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s3(this,cf))?void 0:e.unassociateElement)||t.call(e,this),s4(this,cf,null)}}cf=new WeakMap,s5.shadowRootOptions={mode:"open"},s5.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},rL.customElements.get("media-control-bar")||rL.customElements.define("media-control-bar",s5);var s9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s8=(e,t,i)=>(s9(e,t,"read from private field"),i?i.call(e):t.get(e)),s6=(e,t,i,a)=>(s9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class s7 extends rL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cE,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s8(this,cE))?void 0:a.unassociateElement)||r.call(a,this),s6(this,cE,null)),i&&this.isConnected&&(s6(this,cE,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s8(this,cE))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=rj(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(a4.MEDIA_CONTROLLER);r&&(s6(this,cE,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=s8(this,cE))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s8(this,cE))?void 0:e.unassociateElement)||t.call(e,this),s6(this,cE,null)}}cE=new WeakMap,s7.shadowRootOptions={mode:"open"},s7.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},s7.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rL.customElements.get("media-text-display")||rL.customElements.define("media-text-display",s7);var oe=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ot=(e,t,i)=>(oe(e,t,"read from private field"),i?i.call(e):t.get(e));class oi extends s7{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cy,void 0),((e,t,i,a)=>(oe(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cy,this.shadowRoot.querySelector("slot")),ot(this,cy).textContent=rf(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===a8.MEDIA_DURATION&&(ot(this,cy).textContent=rf(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return rZ(this,a8.MEDIA_DURATION)}set mediaDuration(e){rz(this,a8.MEDIA_DURATION,e)}}cy=new WeakMap,oi.getSlotTemplateHTML=function(e,t){return`
    <slot>${rf(t.mediaDuration)}</slot>
  `},rL.customElements.get("media-duration-display")||rL.customElements.define("media-duration-display",oi);let oa={2:rA("Network Error"),3:rA("Decode Error"),4:rA("Source Not Supported"),5:rA("Encryption Error")},or={2:rA("A network error caused the media download to fail."),3:rA("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:rA("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:rA("The media is encrypted and there are no keys to decrypt it.")},on=e=>{var t,i;return 1===e.code?null:{title:null!=(t=oa[e.code])?t:`Error ${e.code}`,message:null!=(i=or[e.code])?i:e.message}};var os=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function oo(e){var t;let{title:i,message:a}=null!=(t=on(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let ol=[a8.MEDIA_ERROR_CODE,a8.MEDIA_ERROR_MESSAGE];class od extends sQ{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,c_,null)}static get observedAttributes(){return[...super.observedAttributes,...ol]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ol.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==on(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return os(this,e=c_,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;os(this,t=c_,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return rZ(this,"mediaerrorcode")}set mediaErrorCode(e){rz(this,"mediaerrorcode",e)}get mediaErrorMessage(){return r0(this,"mediaerrormessage")}set mediaErrorMessage(e){r1(this,"mediaerrormessage",e)}}c_=new WeakMap,od.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${oo({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},od.formatErrorMessage=oo,rL.customElements.get("media-error-dialog")||rL.customElements.define("media-error-dialog",od);let ou=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,oc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,oh=e=>{let t=e.mediaIsFullscreen?rA("exit fullscreen mode"):rA("enter fullscreen mode");e.setAttribute("aria-label",t)};class om extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_IS_FULLSCREEN,a8.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_IS_FULLSCREEN&&oh(this)}get mediaFullscreenUnavailable(){return r0(this,a8.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){r1(this,a8.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return rX(this,a8.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){rJ(this,a8.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?a3.MEDIA_EXIT_FULLSCREEN_REQUEST:a3.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new rL.CustomEvent(e,{composed:!0,bubbles:!0}))}}om.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a8.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a8.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a8.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${a8.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ou}</slot>
      <slot name="exit">${oc}</slot>
    </slot>
  `},om.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rA("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${rA("Exit fullscreen mode")}</slot>
  `},rL.customElements.get("media-fullscreen-button")||rL.customElements.define("media-fullscreen-button",om);let{MEDIA_TIME_IS_LIVE:op,MEDIA_PAUSED:ov}=a8,{MEDIA_SEEK_TO_LIVE_REQUEST:ob,MEDIA_PLAY_REQUEST:og}=a3,of=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?rA("seek to live"):rA("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=rA("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class oE extends sL{static get observedAttributes(){return[...super.observedAttributes,op,ov]}connectedCallback(){super.connectedCallback(),of(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),of(this)}get mediaPaused(){return rX(this,a8.MEDIA_PAUSED)}set mediaPaused(e){rJ(this,a8.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return rX(this,a8.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){rJ(this,a8.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new rL.CustomEvent(ob,{composed:!0,bubbles:!0})),this.hasAttribute(ov)&&this.dispatchEvent(new rL.CustomEvent(og,{composed:!0,bubbles:!0})))}}oE.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${op}]:not([${ov}])) slot[name=indicator] > *,
      :host([${op}]:not([${ov}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${op}]:not([${ov}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${rA("live")}</slot>
  `},rL.customElements.get("media-live-button")||rL.customElements.define("media-live-button",oE);var oy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o_=(e,t,i)=>(oy(e,t,"read from private field"),i?i.call(e):t.get(e)),oT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oA=(e,t,i,a)=>(oy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ok="loadingdelay",ow="noautohide",oI=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class oS extends rL.HTMLElement{constructor(){if(super(),oT(this,cT,void 0),oT(this,cA,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a4.MEDIA_CONTROLLER,a8.MEDIA_PAUSED,a8.MEDIA_LOADING,ok]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===ok&&t!==i?this.loadingDelay=Number(i):e===a4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o_(this,cT))?void 0:a.unassociateElement)||r.call(a,this),oA(this,cT,null)),i&&this.isConnected&&(oA(this,cT,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o_(this,cT))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(a4.MEDIA_CONTROLLER);a&&(oA(this,cT,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=o_(this,cT))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o_(this,cT))?void 0:e.unassociateElement)||t.call(e,this),oA(this,cT,null)}get loadingDelay(){return o_(this,cA)}set loadingDelay(e){oA(this,cA,e);let{style:t}=rj(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return rX(this,a8.MEDIA_PAUSED)}set mediaPaused(e){rJ(this,a8.MEDIA_PAUSED,e)}get mediaLoading(){return rX(this,a8.MEDIA_LOADING)}set mediaLoading(e){rJ(this,a8.MEDIA_LOADING,e)}get mediaController(){return r0(this,a4.MEDIA_CONTROLLER)}set mediaController(e){r1(this,a4.MEDIA_CONTROLLER,e)}get noAutohide(){return rX(this,ow)}set noAutohide(e){rJ(this,ow,e)}}cT=new WeakMap,cA=new WeakMap,oS.shadowRootOptions={mode:"open"},oS.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${a8.MEDIA_LOADING}]:not([${a8.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${a8.MEDIA_LOADING}]:not([${a8.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${a8.MEDIA_LOADING}]:not([${a8.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${oI}</slot>
    <div id="status" role="status" aria-live="polite">${rA("media loading")}</div>
  `},rL.customElements.get("media-loading-indicator")||rL.customElements.define("media-loading-indicator",oS);let oC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,oR=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,oD=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,oL=e=>{let t="off"===e.mediaVolumeLevel?rA("unmute"):rA("mute");e.setAttribute("aria-label",t)};class oM extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),oL(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_VOLUME_LEVEL&&oL(this)}get mediaVolumeLevel(){return r0(this,a8.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){r1(this,a8.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?a3.MEDIA_UNMUTE_REQUEST:a3.MEDIA_MUTE_REQUEST;this.dispatchEvent(new rL.CustomEvent(e,{composed:!0,bubbles:!0}))}}oM.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${a8.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${a8.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${a8.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${a8.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${a8.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${a8.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${a8.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${oC}</slot>
      <slot name="low">${oR}</slot>
      <slot name="medium">${oR}</slot>
      <slot name="high">${oD}</slot>
    </slot>
  `},oM.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${rA("Mute")}</slot>
    <slot name="tooltip-unmute">${rA("Unmute")}</slot>
  `},rL.customElements.get("media-mute-button")||rL.customElements.define("media-mute-button",oM);let ox=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,oN=e=>{let t=e.mediaIsPip?rA("exit picture in picture mode"):rA("enter picture in picture mode");e.setAttribute("aria-label",t)};class oO extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_IS_PIP,a8.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_IS_PIP&&oN(this)}get mediaPipUnavailable(){return r0(this,a8.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){r1(this,a8.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return rX(this,a8.MEDIA_IS_PIP)}set mediaIsPip(e){rJ(this,a8.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?a3.MEDIA_EXIT_PIP_REQUEST:a3.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new rL.CustomEvent(e,{composed:!0,bubbles:!0}))}}oO.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a8.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${a8.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a8.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${a8.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ox}</slot>
      <slot name="exit">${ox}</slot>
    </slot>
  `},oO.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rA("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${rA("Exit picture in picture mode")}</slot>
  `},rL.customElements.get("media-pip-button")||rL.customElements.define("media-pip-button",oO);var oP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let oU="rates",oH=[1,1.2,1.5,1.7,2];class oB extends sL{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ck,new nb(this,oU,{defaultValue:oH})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PLAYBACK_RATE,oU]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oU&&(oP(this,ck).value=i),e===a8.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rA("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return oP(this,ck)}set rates(e){e?Array.isArray(e)?oP(this,ck).value=e.join(" "):"string"==typeof e&&(oP(this,ck).value=e):oP(this,ck).value=""}get mediaPlaybackRate(){return rZ(this,a8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rz(this,a8.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(oP(this,ck).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new rL.CustomEvent(a3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ck=new WeakMap,oB.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},oB.getTooltipContentHTML=function(){return rA("Playback rate")},rL.customElements.get("media-playback-rate-button")||rL.customElements.define("media-playback-rate-button",oB);let oW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,o$=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oV=e=>{let t=e.mediaPaused?rA("play"):rA("pause");e.setAttribute("aria-label",t)};class oq extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PAUSED,a8.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),oV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===a8.MEDIA_PAUSED||e===a8.MEDIA_LANG)&&oV(this)}get mediaPaused(){return rX(this,a8.MEDIA_PAUSED)}set mediaPaused(e){rJ(this,a8.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?a3.MEDIA_PLAY_REQUEST:a3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new rL.CustomEvent(e,{composed:!0,bubbles:!0}))}}oq.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a8.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${a8.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${a8.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${a8.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${oW}</slot>
      <slot name="pause">${o$}</slot>
    </slot>
  `},oq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${rA("Play")}</slot>
    <slot name="tooltip-pause">${rA("Pause")}</slot>
  `},rL.customElements.get("media-play-button")||rL.customElements.define("media-play-button",oq);let oF="placeholdersrc";class oK extends rL.HTMLElement{static get observedAttributes(){return[oF,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===oF)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return r0(this,oF)}set placeholderSrc(e){r1(this,"src",e)}get src(){return r0(this,"src")}set src(e){r1(this,"src",e)}}oK.shadowRootOptions={mode:"open"},oK.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},rL.customElements.get("media-poster-image")||rL.customElements.define("media-poster-image",oK);var oG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};cw=new WeakMap,rL.customElements.get("media-preview-chapter-display")||rL.customElements.define("media-preview-chapter-display",class extends s7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cw,void 0),((e,t,i,a)=>(oG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cw,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PREVIEW_CHAPTER,a8.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===a8.MEDIA_PREVIEW_CHAPTER||e===a8.MEDIA_LANG)&&i!==t&&null!=i){var a;if((oG(this,cw,"read from private field"),a?a.call(this):cw.get(this)).textContent=i,""!==i){let e=rA("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return r0(this,a8.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){r1(this,a8.MEDIA_PREVIEW_CHAPTER,e)}});var oY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oY(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i,a)=>(oY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oZ extends rL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cI,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a4.MEDIA_CONTROLLER,a8.MEDIA_PREVIEW_IMAGE,a8.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(a4.MEDIA_CONTROLLER);a&&(oQ(this,cI,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oj(this,cI))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oj(this,cI))?void 0:e.unassociateElement)||t.call(e,this),oQ(this,cI,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[a8.MEDIA_PREVIEW_IMAGE,a8.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===a4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oj(this,cI))?void 0:a.unassociateElement)||r.call(a,this),oQ(this,cI,null)),i&&this.isConnected&&(oQ(this,cI,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oj(this,cI))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return r0(this,a8.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){r1(this,a8.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a8.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(a8.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(a8.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:b}=rj(this.shadowRoot,":host"),g=rj(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),E=m?"min":"max";b.setProperty(`${E}-width`,"initial","important"),b.setProperty(`${E}-height`,"initial","important"),b.width=`${r*p}px`,b.height=`${n*p}px`;let y=()=>{g.width=`${this.imgWidth*p}px`,g.height=`${this.imgHeight*p}px`,g.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,y()},f.src=s,y()),y(),g.transform=`translate(-${i*p}px, -${a*p}px)`}}cI=new WeakMap,oZ.shadowRootOptions={mode:"open"},oZ.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},rL.customElements.get("media-preview-thumbnail")||rL.customElements.define("media-preview-thumbnail",oZ);var oz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oX=(e,t,i)=>(oz(e,t,"read from private field"),i?i.call(e):t.get(e));cS=new WeakMap,rL.customElements.get("media-preview-time-display")||rL.customElements.define("media-preview-time-display",class extends s7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cS,void 0),((e,t,i,a)=>(oz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cS,this.shadowRoot.querySelector("slot")),oX(this,cS).textContent=rf(0)}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_PREVIEW_TIME&&null!=i&&(oX(this,cS).textContent=rf(parseFloat(i)))}get mediaPreviewTime(){return rZ(this,a8.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){rz(this,a8.MEDIA_PREVIEW_TIME,e)}});let oJ="seekoffset";class o0 extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_CURRENT_TIME,oJ]}connectedCallback(){super.connectedCallback(),this.seekOffset=rZ(this,oJ,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===oJ&&(this.seekOffset=rZ(this,oJ,30))}get seekOffset(){return rZ(this,oJ,30)}set seekOffset(e){rz(this,oJ,e),this.setAttribute("aria-label",rA("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),r$(rV(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return rZ(this,a8.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){rz(this,a8.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new rL.CustomEvent(a3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}o0.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},o0.getTooltipContentHTML=function(){return rA("Seek backward")},rL.customElements.get("media-seek-backward-button")||rL.customElements.define("media-seek-backward-button",o0);let o1="seekoffset";class o2 extends sL{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_CURRENT_TIME,o1]}connectedCallback(){super.connectedCallback(),this.seekOffset=rZ(this,o1,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===o1&&(this.seekOffset=rZ(this,o1,30))}get seekOffset(){return rZ(this,o1,30)}set seekOffset(e){rz(this,o1,e),this.setAttribute("aria-label",rA("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),r$(rV(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return rZ(this,a8.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){rz(this,a8.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new rL.CustomEvent(a3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}o2.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},o2.getTooltipContentHTML=function(){return rA("Seek forward")},rL.customElements.get("media-seek-forward-button")||rL.customElements.define("media-seek-forward-button",o2);var o3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o4=(e,t,i)=>(o3(e,t,"read from private field"),i?i.call(e):t.get(e));let o5={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},o9=[...Object.values(o5),a8.MEDIA_CURRENT_TIME,a8.MEDIA_DURATION,a8.MEDIA_SEEKABLE],o8=["Enter"," "],o6="&nbsp;/&nbsp;",o7=(e,{timesSep:t=o6}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?rf(0-(s-r)):rf(r);return e.showDuration?`${o}${t}${rf(s)}`:o};class le extends s7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cC,void 0),((e,t,i,a)=>(o3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cC,this.shadowRoot.querySelector("slot")),o4(this,cC).innerHTML=`${o7(this)}`}static get observedAttributes(){return[...super.observedAttributes,...o9,"disabled"]}connectedCallback(){let{style:e}=rj(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",rA("playback time"));let t=e=>{let{key:i}=e;o8.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;i||a||!o8.includes(r)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){o9.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return rX(this,o5.REMAINING)}set remaining(e){rJ(this,o5.REMAINING,e)}get showDuration(){return rX(this,o5.SHOW_DURATION)}set showDuration(e){rJ(this,o5.SHOW_DURATION,e)}get noToggle(){return rX(this,o5.NO_TOGGLE)}set noToggle(e){rJ(this,o5.NO_TOGGLE,e)}get mediaDuration(){return rZ(this,a8.MEDIA_DURATION)}set mediaDuration(e){rz(this,a8.MEDIA_DURATION,e)}get mediaCurrentTime(){return rZ(this,a8.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){rz(this,a8.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a8.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(a8.MEDIA_SEEKABLE):this.setAttribute(a8.MEDIA_SEEKABLE,e.join(":"))}update(){let e=o7(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.remaining?rg(0-(r-i)):rg(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=rg(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)})(this),e!==o4(this,cC).innerHTML&&(o4(this,cC).innerHTML=e)}}cC=new WeakMap,le.getSlotTemplateHTML=function(e,t){return`
    <slot>${o7(t)}</slot>
  `},rL.customElements.get("media-time-display")||rL.customElements.define("media-time-display",le);var lt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},li=(e,t,i)=>(lt(e,t,"read from private field"),i?i.call(e):t.get(e)),la=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lr=(e,t,i,a)=>(lt(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ln{constructor(e,t,i){la(this,cR,void 0),la(this,cD,void 0),la(this,cL,void 0),la(this,cM,void 0),la(this,cx,void 0),la(this,cN,void 0),la(this,cO,void 0),la(this,cP,void 0),la(this,cU,0),la(this,cH,(e=performance.now())=>{lr(this,cU,requestAnimationFrame(li(this,cH))),lr(this,cM,performance.now()-li(this,cL));let t=1e3/this.fps;if(li(this,cM)>t){let i,a,r,n;lr(this,cL,e-li(this,cM)%t);let s=1e3/((e-li(this,cD))/++(i=this,a=cx,{set _(value){lr(i,a,value,r)},get _(){return li(i,a,n)}})._),o=(e-li(this,cN))/1e3/this.duration,l=li(this,cO)+o*this.playbackRate;l-li(this,cR).valueAsNumber>0?lr(this,cP,this.playbackRate/this.duration/s):(lr(this,cP,.995*li(this,cP)),l=li(this,cR).valueAsNumber+li(this,cP)),this.callback(l)}}),lr(this,cR,e),this.callback=t,this.fps=i}start(){0===li(this,cU)&&(lr(this,cL,performance.now()),lr(this,cD,li(this,cL)),lr(this,cx,0),li(this,cH).call(this))}stop(){0!==li(this,cU)&&(cancelAnimationFrame(li(this,cU)),lr(this,cU,0))}update({start:e,duration:t,playbackRate:i}){let a=e-li(this,cR).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lr(this,cO,e),lr(this,cN,performance.now()),this.duration=t,this.playbackRate=i}}cR=new WeakMap,cD=new WeakMap,cL=new WeakMap,cM=new WeakMap,cx=new WeakMap,cN=new WeakMap,cO=new WeakMap,cP=new WeakMap,cU=new WeakMap,cH=new WeakMap;var ls=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lo=(e,t,i)=>(ls(e,t,"read from private field"),i?i.call(e):t.get(e)),ll=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ld=(e,t,i,a)=>(ls(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lu=(e,t,i)=>(ls(e,t,"access private method"),i);let lc=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},lh=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class lm extends s1{constructor(){super(),ll(this,cQ),ll(this,cz),ll(this,c0),ll(this,c2),ll(this,c4),ll(this,c9),ll(this,c6),ll(this,he),ll(this,cB,void 0),ll(this,cW,void 0),ll(this,c$,void 0),ll(this,cV,void 0),ll(this,cq,void 0),ll(this,cF,void 0),ll(this,cK,void 0),ll(this,cG,void 0),ll(this,cY,void 0),ll(this,cj,void 0),ll(this,cJ,e=>{!this.dragging&&(rm(e)&&(this.range.valueAsNumber=e),lo(this,cj)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ld(this,c$,this.shadowRoot.querySelectorAll('[part~="box"]')),ld(this,cq,this.shadowRoot.querySelector('[part~="preview-box"]')),ld(this,cF,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);ld(this,cK,parseInt(e.getPropertyValue("--media-box-padding-left"))),ld(this,cG,parseInt(e.getPropertyValue("--media-box-padding-right"))),ld(this,cW,new ln(this.range,lo(this,cJ),60))}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PAUSED,a8.MEDIA_DURATION,a8.MEDIA_SEEKABLE,a8.MEDIA_CURRENT_TIME,a8.MEDIA_PREVIEW_IMAGE,a8.MEDIA_PREVIEW_TIME,a8.MEDIA_PREVIEW_CHAPTER,a8.MEDIA_BUFFERED,a8.MEDIA_PLAYBACK_RATE,a8.MEDIA_LOADING,a8.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",rA("seek")),lu(this,cQ,cZ).call(this),ld(this,cB,this.getRootNode()),null==(e=lo(this,cB))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),lu(this,cQ,cZ).call(this),null==(e=lo(this,cB))||e.removeEventListener("transitionstart",this),ld(this,cB,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===a8.MEDIA_CURRENT_TIME||e===a8.MEDIA_PAUSED||e===a8.MEDIA_ENDED||e===a8.MEDIA_LOADING||e===a8.MEDIA_DURATION||e===a8.MEDIA_SEEKABLE){let e,t,i,a;lo(this,cW).update({start:lc(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),lu(this,cQ,cZ).call(this),e=this.range,t=rg(+lh(this)),i=rg(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===a8.MEDIA_BUFFERED&&this.updateBufferedBar();(e===a8.MEDIA_DURATION||e===a8.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lo(this,cY),this.updateBar())}}get mediaChaptersCues(){return lo(this,cY)}set mediaChaptersCues(e){var t;ld(this,cY,e),this.updateSegments(null==(t=lo(this,cY))?void 0:t.map(e=>({start:lc(this,e.startTime),end:lc(this,e.endTime)})))}get mediaPaused(){return rX(this,a8.MEDIA_PAUSED)}set mediaPaused(e){rJ(this,a8.MEDIA_PAUSED,e)}get mediaLoading(){return rX(this,a8.MEDIA_LOADING)}set mediaLoading(e){rJ(this,a8.MEDIA_LOADING,e)}get mediaDuration(){return rZ(this,a8.MEDIA_DURATION)}set mediaDuration(e){rz(this,a8.MEDIA_DURATION,e)}get mediaCurrentTime(){return rZ(this,a8.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){rz(this,a8.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return rZ(this,a8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rz(this,a8.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a8.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(a8.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(a8.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(a8.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(a8.MEDIA_SEEKABLE):this.setAttribute(a8.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return r0(this,a8.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){r1(this,a8.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return rZ(this,a8.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){rz(this,a8.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return rX(this,a8.MEDIA_ENDED)}set mediaEnded(e){rJ(this,a8.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=lc(this,r)}let{style:a}=rj(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=rj(this.shadowRoot,"#current-rail"),t=rj(this.shadowRoot,'[part~="current-box"]'),i=lu(this,c0,c1).call(this,lo(this,cF)),a=lu(this,c2,c3).call(this,i,this.range.valueAsNumber),r=lu(this,c4,c5).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":lu(this,he,ht).call(this);break;case"pointermove":lu(this,c9,c8).call(this,e);break;case"pointerup":lo(this,cj)&&ld(this,cj,!1);break;case"pointerdown":ld(this,cj,!0);break;case"pointerleave":lu(this,c6,c7).call(this,null);break;case"transitionstart":rq(e.target,this)&&setTimeout(()=>lu(this,cQ,cZ).call(this),0)}}}cB=new WeakMap,cW=new WeakMap,c$=new WeakMap,cV=new WeakMap,cq=new WeakMap,cF=new WeakMap,cK=new WeakMap,cG=new WeakMap,cY=new WeakMap,cj=new WeakMap,cQ=new WeakSet,cZ=function(){lu(this,cz,cX).call(this)?lo(this,cW).start():lo(this,cW).stop()},cz=new WeakSet,cX=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&rY(this)},cJ=new WeakMap,c0=new WeakSet,c1=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?rF(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},c2=new WeakSet,c3=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},c4=new WeakSet,c5=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+lo(this,cK)){let t=e.range.left-e.bounds.left-lo(this,cK);return`${n-i/2+t}px`}if(n>r-lo(this,cG)){let t=e.bounds.right-e.range.right-lo(this,cG);return`${n+i/2-t-e.range.width}px`}return 0},c9=new WeakSet,c8=function(e){let t=[...lo(this,c$)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void lu(this,c6,c7).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=rj(this.shadowRoot,"#preview-rail"),r=rj(this.shadowRoot,'[part~="preview-box"]'),n=lu(this,c0,c1).call(this,lo(this,cq)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=lu(this,c2,c3).call(this,n,s),l=lu(this,c4,c5).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(lo(this,cV))-Math.round(s*i))&&s>.01&&s<.99||(ld(this,cV,s*i),lu(this,c6,c7).call(this,lo(this,cV)))},c6=new WeakSet,c7=function(e){this.dispatchEvent(new rL.CustomEvent(a3.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},he=new WeakSet,ht=function(){lo(this,cW).stop();let e=lh(this);this.dispatchEvent(new rL.CustomEvent(a3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},lm.shadowRootOptions={mode:"open"},lm.getTemplateHTML=function(e){return`
    ${s1.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${a8.MEDIA_PREVIEW_IMAGE}], [${a8.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${a8.MEDIA_PREVIEW_IMAGE}], [${a8.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${a8.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${a8.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${a8.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${a8.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${a8.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${a8.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${a8.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${a8.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${a8.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${a8.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${a8.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${a8.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${oZ.shadowRootOptions.mode}">
            ${oZ.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},rL.customElements.get("media-time-range")||rL.customElements.define("media-time-range",lm),rL.customElements.get("media-volume-range")||rL.customElements.define("media-volume-range",class extends s1{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_VOLUME,a8.MEDIA_MUTED,a8.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new rL.CustomEvent(a3.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",rA("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a8.MEDIA_VOLUME||e===a8.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return rZ(this,a8.MEDIA_VOLUME,1)}set mediaVolume(e){rz(this,a8.MEDIA_VOLUME,e)}get mediaMuted(){return rX(this,a8.MEDIA_MUTED)}set mediaMuted(e){rJ(this,a8.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return r0(this,a8.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){r1(this,a8.MEDIA_VOLUME_UNAVAILABLE,e)}});var lp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lv=(e,t,i)=>(lp(e,t,"read from private field"),i?i.call(e):t.get(e)),lb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lg=(e,t,i,a)=>(lp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lf={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof lI&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof lI?a.element[a.attributeName]=t:a.value=t}}}};class lE extends rL.DocumentFragment{constructor(e,t,i=lf){var a;super(),lb(this,hi,void 0),lb(this,ha,void 0),this.append(e.content.cloneNode(!0)),lg(this,hi,ly(this)),lg(this,ha,i),null==(a=i.createCallback)||a.call(i,this,lv(this,hi),t),i.processCallback(this,lv(this,hi),t)}update(e){lv(this,ha).processCallback(this,lv(this,hi),e)}}hi=new WeakMap,ha=new WeakMap;let ly=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new lw;for([i,a]of lT(r.value))if(i){let i=new lI(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of lT(n))if(i){let i=new lS(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lC(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else ly(r,t);return t},l_={},lT=e=>{let t="",i=0,a=l_[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),l_[e]=a};class lA{get value(){return""}set value(e){}toString(){return this.value}}let lk=new WeakMap;class lw{constructor(){lb(this,hr,[])}[Symbol.iterator](){return lv(this,hr).values()}get length(){return lv(this,hr).length}item(e){return lv(this,hr)[e]}append(...e){for(let t of e)t instanceof lI&&lk.set(t,this),lv(this,hr).push(t)}toString(){return lv(this,hr).join("")}}hr=new WeakMap;class lI extends lA{constructor(e,t,i){super(),lb(this,hd),lb(this,hn,""),lb(this,hs,void 0),lb(this,ho,void 0),lb(this,hl,void 0),lg(this,hs,e),lg(this,ho,t),lg(this,hl,i)}get attributeName(){return lv(this,ho)}get attributeNamespace(){return lv(this,hl)}get element(){return lv(this,hs)}get value(){return lv(this,hn)}set value(e){lv(this,hn)!==e&&(lg(this,hn,e),lv(this,hd,hu)&&1!==lv(this,hd,hu).length?lv(this,hs).setAttributeNS(lv(this,hl),lv(this,ho),lv(this,hd,hu).toString()):null==e?lv(this,hs).removeAttributeNS(lv(this,hl),lv(this,ho)):lv(this,hs).setAttributeNS(lv(this,hl),lv(this,ho),e))}get booleanValue(){return lv(this,hs).hasAttributeNS(lv(this,hl),lv(this,ho))}set booleanValue(e){if(lv(this,hd,hu)&&1!==lv(this,hd,hu).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}hn=new WeakMap,hs=new WeakMap,ho=new WeakMap,hl=new WeakMap,hd=new WeakSet,hu=function(){return lk.get(this)};class lS extends lA{constructor(e,t){super(),lb(this,hc,void 0),lb(this,hh,void 0),lg(this,hc,e),lg(this,hh,t?[...t]:[new Text])}get replacementNodes(){return lv(this,hh)}get parentNode(){return lv(this,hc)}get nextSibling(){return lv(this,hh)[lv(this,hh).length-1].nextSibling}get previousSibling(){return lv(this,hh)[0].previousSibling}get value(){return lv(this,hh).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),lg(this,hh,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(lv(this,hh)[0].parentNode,lv(this,hh),t,this.nextSibling))}}hc=new WeakMap,hh=new WeakMap;class lC extends lS{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let lR={string:e=>String(e)};class lD{constructor(e){this.template=e,this.state=void 0}}let lL=new WeakMap,lM=new WeakMap,lx={partial:(e,t)=>{t[e.expression]=new lD(e.template)},if:(e,t)=>{var i;if(lU(e.expression,t))if(lL.get(e)!==e.template){lL.set(e,e.template);let i=new lE(e.template,t,lO);e.replace(i),lM.set(e,i)}else null==(i=lM.get(e))||i.update(t);else e.replace(""),lL.delete(e),lM.delete(e)}},lN=Object.keys(lx),lO={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof lC){if(!n.directive){let e=lN.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=lx[n.directive])||a.call(lx,n,i);continue}let t=lU(e,i);if(t instanceof lD){lL.get(n)!==t.template?(lL.set(n,t.template),n.value=t=new lE(t.template,t.state,lO),lM.set(n,t)):null==(r=lM.get(n))||r.update(t.state);continue}t?(n instanceof lI&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof lI?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,lL.delete(n),lM.delete(n))):n instanceof lI?n.value=void 0:(n.value=void 0,lL.delete(n),lM.delete(n))}}},lP={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=lR[t])?void 0:i.call(lR,e)}};function lU(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lH(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lH(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=lW(d,t))}return i}if(1===d.length)return lB(d[0])?lW(d[0].token,t):lH(e);if(2===d.length){let i=lP[null==(o=d[0])?void 0:o.token];return i&&lB(d[1])?i(lW(d[1].token,t)):lH(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=lP[i];if(!a||!lB(d[0])||!lB(d[2]))return lH(e);let r=lW(d[0].token,t);return a(r,"|"===i?d[2].token:lW(d[2].token,t))}}function lH(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lB({type:e}){return["number","boolean","string","param"].includes(e)}function lW(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):rp(e)?parseFloat(e):t[e]}var l$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lV=(e,t,i)=>(l$(e,t,"read from private field"),i?i.call(e):t.get(e)),lq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lF=(e,t,i,a)=>(l$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lK=(e,t,i)=>(l$(e,t,"access private method"),i);let lG={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lY=rM.createElement("template");lY.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lj extends rL.HTMLElement{constructor(){super(),lq(this,hb),lq(this,hf),lq(this,hm,void 0),lq(this,hp,void 0),lq(this,hv,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lG[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(a6.BREAKPOINTS_COMPUTED,this.render),lK(this,hb,hg).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lV(this,hm))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(lF(this,hm,e),lF(this,hv,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lG[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lG[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(rp(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&lK(this,hf,hE).call(this)}connectedCallback(){lK(this,hf,hE).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==lV(this,hp)&&(lF(this,hp,this.template),this.renderer=new lE(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lY.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lQ(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function lZ(e){return e.split("-")[0]}hm=new WeakMap,hp=new WeakMap,hv=new WeakMap,hb=new WeakSet,hg=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},hf=new WeakSet,hE=function(){var e;let t=this.getAttribute("template");if(!t||t===lV(this,hv))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lF(this,hv,t),lF(this,hm,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lF(this,hv,t),lQ(t).then(e=>{let t=rM.createElement("template");t.innerHTML=e,lF(this,hm,t),this.createRenderer()}).catch(console.error))},lj.observedAttributes=["template"],lj.processor=lO,rL.customElements.get("media-theme")||rL.customElements.define("media-theme",lj);class lz extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class lX extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var lJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l0=(e,t,i)=>(lJ(e,t,"read from private field"),i?i.call(e):t.get(e)),l1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l2=(e,t,i,a)=>(lJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l3=(e,t,i)=>(lJ(e,t,"access private method"),i);function l4({type:e,text:t,value:i,checked:a}){let r=rM.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=rM.createElement("span");return n.textContent=t,r.append(n),r}function l5(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let l9="style",l8="hidden",l6="disabled";class l7 extends rL.HTMLElement{constructor(){if(super(),l1(this,hS),l1(this,hR),l1(this,hM),l1(this,hN),l1(this,hP),l1(this,hH),l1(this,hV),l1(this,hF),l1(this,hG),l1(this,hj),l1(this,hZ),l1(this,hX),l1(this,h0),l1(this,h2),l1(this,h4),l1(this,h9),l1(this,h6),l1(this,me),l1(this,hy,null),l1(this,h_,null),l1(this,hT,null),l1(this,hA,new Set),l1(this,hk,void 0),l1(this,hw,!1),l1(this,hI,null),l1(this,hL,()=>{let e=l0(this,hA),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));l2(this,hA,t)}),l1(this,hW,()=>{l3(this,hV,hq).call(this),l3(this,hF,hK).call(this,!1)}),l1(this,h$,()=>{l3(this,hV,hq).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),l2(this,hk,new MutationObserver(l0(this,hL))),l0(this,hk).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[l6,l8,l9,"anchor",a4.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":l3(this,hS,hC).call(this,e);break;case"invoke":l3(this,hN,hO).call(this,e);break;case"click":l3(this,hG,hY).call(this,e);break;case"toggle":l3(this,hZ,hz).call(this,e);break;case"focusout":l3(this,h0,h1).call(this,e);break;case"keydown":l3(this,h2,h3).call(this,e)}}connectedCallback(){var e,t;l2(this,hI,rQ(this.shadowRoot,":host")),l3(this,hM,hx).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),l2(this,hy,rW(this)),null==(t=null==(e=l0(this,hy))?void 0:e.associateElement)||t.call(e,this),this.hidden||(rP(dt(this),l0(this,hW)),rP(this,l0(this,h$))),l3(this,hR,hD).call(this)}disconnectedCallback(){var e,t;rU(dt(this),l0(this,hW)),rU(this,l0(this,h$)),this.disable(),null==(t=null==(e=l0(this,hy))?void 0:e.unassociateElement)||t.call(e,this),l2(this,hy,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===l8&&i!==t?(l0(this,hw)||l2(this,hw,!0),this.hidden?l3(this,hH,hB).call(this):l3(this,hP,hU).call(this),this.dispatchEvent(new lX({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===a4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=l0(this,hy))?void 0:a.unassociateElement)||r.call(a,this),l2(this,hy,null)),i&&this.isConnected&&(l2(this,hy,rW(this)),null==(s=null==(n=l0(this,hy))?void 0:n.associateElement)||s.call(n,this))):e===l6&&i!==t?null==i?this.enable():this.disable():e===l9&&i!==t&&l3(this,hM,hx).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=rG(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(de)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&l3(this,me,mt).call(this,t)}focus(){if(l2(this,h_,rK()),this.items.length){l3(this,h6,h7).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=l3(this,h4,h5).call(this,e);i&&(l3(this,me,mt).call(this,i,"checkbox"===i.type),l0(this,hT)&&!this.hidden&&(null==(t=l0(this,h_))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=l3(this,h4,h5).call(this,e))?t:l3(this,h9,h8).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),l3(this,h6,h7).call(this,r[s]),r[s].focus()}}function de(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function dt(e){var t;return null!=(t=e.getAttribute("bounds")?rF(e,`#${e.getAttribute("bounds")}`):rB(e)||e.parentElement)?t:e}hy=new WeakMap,h_=new WeakMap,hT=new WeakMap,hA=new WeakMap,hk=new WeakMap,hw=new WeakMap,hI=new WeakMap,hS=new WeakSet,hC=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&l3(this,hR,hD).call(this),t.name||l0(this,hL).call(this)},hR=new WeakSet,hD=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},hL=new WeakMap,hM=new WeakSet,hx=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},hN=new WeakSet,hO=function(e){l2(this,hT,e.relatedTarget),rq(this,e.relatedTarget)||(this.hidden=!this.hidden)},hP=new WeakSet,hU=function(){var e;null==(e=l0(this,hT))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),rP(dt(this),l0(this,hW)),rP(this,l0(this,h$))},hH=new WeakSet,hB=function(){var e;null==(e=l0(this,hT))||e.setAttribute("aria-expanded","false"),rU(dt(this),l0(this,hW)),rU(this,l0(this,h$))},hW=new WeakMap,h$=new WeakMap,hV=new WeakSet,hq=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(lZ(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=lZ(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=dt(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=l0(this,hI);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},hF=new WeakSet,hK=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=l0(this,hI);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),l3(this,hV,hq).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),l3(this,hV,hq).call(this);a.removeProperty("--media-menu-transition-in")},hG=new WeakSet,hY=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(l0(this,hj,hQ))){null==(t=l0(this,h_))||t.focus(),this.hidden=!0;return}let i=l3(this,h4,h5).call(this,e);!i||i.hasAttribute("disabled")||(l3(this,h6,h7).call(this,i),this.handleSelect(e))},hj=new WeakSet,hQ=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},hZ=new WeakSet,hz=function(e){if(e.target===this)return;l3(this,hX,hJ).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new lz({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);l3(this,hF,hK).call(this,!0)},hX=new WeakSet,hJ=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},h0=new WeakSet,h1=function(e){var t;rq(this,e.relatedTarget)||(l0(this,hw)&&(null==(t=l0(this,h_))||t.focus()),l0(this,hT)&&l0(this,hT)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},h2=new WeakSet,h3=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(l0(this,hw)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=l0(this,h_))||n.focus(),l0(this,hw)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},h4=new WeakSet,h5=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},h9=new WeakSet,h8=function(){return this.items.find(e=>0===e.tabIndex)},h6=new WeakSet,h7=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},me=new WeakSet,mt=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},l7.shadowRootOptions={mode:"open"},l7.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},rL.customElements.get("media-chrome-menu")||rL.customElements.define("media-chrome-menu",l7);var di=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},da=(e,t,i)=>(di(e,t,"read from private field"),i?i.call(e):t.get(e)),dr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dn=(e,t,i,a)=>(di(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ds=(e,t,i)=>(di(e,t,"access private method"),i);let dl="type",dd="value",du="checked",dc="disabled";class dh extends rL.HTMLElement{constructor(){if(super(),dr(this,mr),dr(this,ms),dr(this,ml),dr(this,mc),dr(this,mm),dr(this,mv),dr(this,mi,!1),dr(this,ma,void 0),dr(this,mu,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=rM.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rH(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[dl,dc,du,dd]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),dm(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":ds(this,mr,mn).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":ds(this,mm,mp).call(this,e);break;case"keyup":ds(this,mc,mh).call(this,e)}}attributeChangedCallback(e,t,i){e===du&&dm(this)&&!da(this,mi)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===dl&&i!==t?this.role="menuitem"+i:e===dc&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(dc)||this.enable(),this.role="menuitem"+this.type,dn(this,ma,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),ds(this,mv,mb).call(this),this.submenuElement&&ds(this,ms,mo).call(this)}disconnectedCallback(){this.disable(),ds(this,mv,mb).call(this),dn(this,ma,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=rG(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(dl))?e:""}set type(e){this.setAttribute(dl,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(dd))?e:this.text}set value(e){this.setAttribute(dd,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(dm(this))return"true"===this.getAttribute("aria-checked")}set checked(e){dm(this)&&(dn(this,mi,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!dm(this)&&this.invokeTargetElement&&rq(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lz({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function dm(e){return"radio"===e.type||"checkbox"===e.type}mi=new WeakMap,ma=new WeakMap,mr=new WeakSet,mn=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?ds(this,ms,mo).call(this):ds(this,ml,md).call(this))},ms=new WeakSet,mo=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",da(this,mu)),this.submenuElement.addEventListener("addmenuitem",da(this,mu)),this.submenuElement.addEventListener("removemenuitem",da(this,mu)),da(this,mu).call(this)},ml=new WeakSet,md=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",da(this,mu)),this.submenuElement.removeEventListener("addmenuitem",da(this,mu)),this.submenuElement.removeEventListener("removemenuitem",da(this,mu)),da(this,mu).call(this)},mu=new WeakMap,mc=new WeakSet,mh=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",ds(this,mc,mh))},mm=new WeakSet,mp=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",ds(this,mc,mh)):this.addEventListener("keyup",ds(this,mc,mh),{once:!0})},mv=new WeakSet,mb=function(){var e;let t=null==(e=da(this,ma))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},dh.shadowRootOptions={mode:"open"},dh.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},dh.getSuffixSlotInnerHTML=function(e){return""},rL.customElements.get("media-chrome-menu-item")||rL.customElements.define("media-chrome-menu-item",dh);class dp extends l7{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rB(this).querySelector("media-settings-menu-button")}}dp.getTemplateHTML=function(e){return`
    ${l7.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},rL.customElements.get("media-settings-menu")||rL.customElements.define("media-settings-menu",dp);class dv extends dh{}dv.shadowRootOptions={mode:"open"},dv.getTemplateHTML=function(e){return`
    ${dh.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},dv.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},rL.customElements.get("media-settings-menu-item")||rL.customElements.define("media-settings-menu-item",dv);class db extends sL{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=rG(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new lz({relatedTarget:this}))}}rL.customElements.get("media-chrome-menu-button")||rL.customElements.define("media-chrome-menu-button",db);class dg extends db{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rA("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rB(this).querySelector("media-settings-menu")}}dg.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},dg.getTooltipContentHTML=function(){return rA("Settings")},rL.customElements.get("media-settings-menu-button")||rL.customElements.define("media-settings-menu-button",dg);var df=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dE=(e,t,i)=>(df(e,t,"read from private field"),i?i.call(e):t.get(e)),dy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d_=(e,t,i,a)=>(df(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dT=(e,t,i)=>(df(e,t,"access private method"),i);mg=new WeakMap,mf=new WeakMap,mE=new WeakSet,my=function(){if(dE(this,mf)===JSON.stringify(this.mediaAudioTrackList))return;d_(this,mf,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=l4({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(e)}},m_=new WeakSet,mT=function(){if(null==this.value)return;let e=new rL.CustomEvent(a3.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rL.customElements.get("media-audio-track-menu")||rL.customElements.define("media-audio-track-menu",class extends l7{constructor(){super(...arguments),dy(this,mE),dy(this,m_),dy(this,mg,[]),dy(this,mf,void 0)}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_AUDIO_TRACK_LIST,a8.MEDIA_AUDIO_TRACK_ENABLED,a8.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a8.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===a8.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;d_(this,mg,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(rh)),dT(this,mE,my).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dT(this,m_,mT))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dT(this,m_,mT))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=rB(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return dE(this,mg)}set mediaAudioTrackList(e){d_(this,mg,e),dT(this,mE,my).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=r0(this,a8.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){r1(this,a8.MEDIA_AUDIO_TRACK_ENABLED,e)}});let dA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dk=e=>{let t=rA("Audio");e.setAttribute("aria-label",t)};class dw extends db{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_AUDIO_TRACK_ENABLED,a8.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dk(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_LANG&&dk(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=rB(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=r0(this,a8.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){r1(this,a8.MEDIA_AUDIO_TRACK_ENABLED,e)}}dw.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${dA}</slot>
  `},dw.getTooltipContentHTML=function(){return rA("Audio")},rL.customElements.get("media-audio-track-menu-button")||rL.customElements.define("media-audio-track-menu-button",dw);var dI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dC=(e,t,i)=>(dI(e,t,"access private method"),i);let dR=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class dD extends l7{constructor(){super(...arguments),dS(this,mk),dS(this,mI),dS(this,mA,void 0)}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_SUBTITLES_LIST,a8.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_SUBTITLES_LIST&&t!==i?dC(this,mk,mw).call(this):e===a8.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dC(this,mI,mS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dC(this,mI,mS))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rB(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dL(this,a8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dM(this,a8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dL(this,a8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dM(this,a8.MEDIA_SUBTITLES_SHOWING,e)}}mA=new WeakMap,mk=new WeakSet,mw=function(){var e,t,i,a,r,n;if(dI(this,t=mA,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=mA,r=JSON.stringify(this.mediaSubtitlesList),dI(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let s=!this.value,o=l4({type:"radio",text:this.formatMenuItemText(rA("Off")),value:"off",checked:s});for(let t of(o.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=l4({type:"radio",text:this.formatMenuItemText(t.label,t),value:ny(t),checked:this.value==ny(t)});i.prepend(l5(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(l5(this,"captions-indicator")),this.defaultSlot.append(i)}},mI=new WeakSet,mS=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(a8.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new rL.CustomEvent(a3.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new rL.CustomEvent(a3.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dD.getTemplateHTML=function(e){return`
    ${l7.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${dR}</slot>
  `};let dL=(e,t)=>{let i=e.getAttribute(t);return i?nf(i):[]},dM=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=n_(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rL.customElements.get("media-captions-menu")||rL.customElements.define("media-captions-menu",dD);let dx=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dN=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dO=e=>{e.setAttribute("data-captions-enabled",nw(e).toString())},dP=e=>{e.setAttribute("aria-label",rA("closed captions"))};class dU extends db{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_SUBTITLES_LIST,a8.MEDIA_SUBTITLES_SHOWING,a8.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),dP(this),dO(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_SUBTITLES_SHOWING?dO(this):e===a8.MEDIA_LANG&&dP(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=rB(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dH(this,a8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dB(this,a8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dH(this,a8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dB(this,a8.MEDIA_SUBTITLES_SHOWING,e)}}dU.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${dx}</slot>
      <slot name="off">${dN}</slot>
    </slot>
  `},dU.getTooltipContentHTML=function(){return rA("Captions")};let dH=(e,t)=>{let i=e.getAttribute(t);return i?nf(i):[]},dB=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=n_(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rL.customElements.get("media-captions-menu-button")||rL.customElements.define("media-captions-menu-button",dU);var dW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d$=(e,t,i)=>(dW(e,t,"read from private field"),i?i.call(e):t.get(e)),dV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dq=(e,t,i)=>(dW(e,t,"access private method"),i);let dF="rates";mC=new WeakMap,mR=new WeakSet,mD=function(){for(let e of(this.defaultSlot.textContent="",d$(this,mC))){let t=l4({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(t)}},mL=new WeakSet,mM=function(){if(!this.value)return;let e=new rL.CustomEvent(a3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rL.customElements.get("media-playback-rate-menu")||rL.customElements.define("media-playback-rate-menu",class extends l7{constructor(){super(),dV(this,mR),dV(this,mL),dV(this,mC,new nb(this,dF,{defaultValue:oH})),dq(this,mR,mD).call(this)}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PLAYBACK_RATE,dF]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a8.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dF&&t!=i&&(d$(this,mC).value=i,dq(this,mR,mD).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dq(this,mL,mM))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dq(this,mL,mM))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rB(this).querySelector("media-playback-rate-menu-button")}get rates(){return d$(this,mC)}set rates(e){e?Array.isArray(e)?d$(this,mC).value=e.join(" "):"string"==typeof e&&(d$(this,mC).value=e):d$(this,mC).value="",dq(this,mR,mD).call(this)}get mediaPlaybackRate(){return rZ(this,a8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rz(this,a8.MEDIA_PLAYBACK_RATE,e)}});class dK extends db{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a8.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rA("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rB(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return rZ(this,a8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rz(this,a8.MEDIA_PLAYBACK_RATE,e)}}dK.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},dK.getTooltipContentHTML=function(){return rA("Playback rate")},rL.customElements.get("media-playback-rate-menu-button")||rL.customElements.define("media-playback-rate-menu-button",dK);var dG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dY=(e,t,i)=>(dG(e,t,"read from private field"),i?i.call(e):t.get(e)),dj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dQ=(e,t,i,a)=>(dG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dZ=(e,t,i)=>(dG(e,t,"access private method"),i);mx=new WeakMap,mN=new WeakMap,mO=new WeakSet,mP=function(){if(dY(this,mN).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&dY(this,mN).mediaHeight===this.mediaHeight)return;dY(this,mN).mediaRenditionList=JSON.stringify(this.mediaRenditionList),dY(this,mN).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=l4({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${rA("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${rA("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(rA("Auto")),n=l4({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(n)},mU=new WeakSet,mH=function(){if(null==this.value)return;let e=new rL.CustomEvent(a3.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rL.customElements.get("media-rendition-menu")||rL.customElements.define("media-rendition-menu",class extends l7{constructor(){super(...arguments),dj(this,mO),dj(this,mU),dj(this,mx,[]),dj(this,mN,{})}static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_RENDITION_LIST,a8.MEDIA_RENDITION_SELECTED,a8.MEDIA_RENDITION_UNAVAILABLE,a8.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a8.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",dZ(this,mO,mP).call(this);else if(e===a8.MEDIA_RENDITION_LIST&&t!==i)dQ(this,mx,null==i?void 0:i.split(/\s+/).map(ru)),dZ(this,mO,mP).call(this);else e===a8.MEDIA_HEIGHT&&t!==i&&dZ(this,mO,mP).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dZ(this,mU,mH))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dZ(this,mU,mH))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rB(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return dY(this,mx)}set mediaRenditionList(e){dQ(this,mx,e),dZ(this,mO,mP).call(this)}get mediaRenditionSelected(){return r0(this,a8.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){r1(this,a8.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return rZ(this,a8.MEDIA_HEIGHT)}set mediaHeight(e){rz(this,a8.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}});let dz=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class dX extends db{static get observedAttributes(){return[...super.observedAttributes,a8.MEDIA_RENDITION_SELECTED,a8.MEDIA_RENDITION_UNAVAILABLE,a8.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rA("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rB(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return r0(this,a8.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){r1(this,a8.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return rZ(this,a8.MEDIA_HEIGHT)}set mediaHeight(e){rz(this,a8.MEDIA_HEIGHT,e)}}dX.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${dz}</slot>
  `},dX.getTooltipContentHTML=function(){return rA("Quality")},rL.customElements.get("media-rendition-menu-button")||rL.customElements.define("media-rendition-menu-button",dX);var dJ=e=>{throw TypeError(e)},d0=(e,t,i)=>t.has(e)||dJ("Cannot "+i),d1=(e,t,i)=>(d0(e,t,"read from private field"),i?i.call(e):t.get(e)),d2=(e,t,i)=>t.has(e)?dJ("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),d3=(e,t,i,a)=>(d0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d4=(e,t,i)=>(d0(e,t,"access private method"),i),d5=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends d5{});var d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,ug,uf,uE,uy,u_,uT,uA,uk,uw,uI,uS,uC,uR,uD,uL,uM,ux,uN,uO,uP,uU,uH,uB,uW,u$,uV,uq,uF,uK,uG,uY,uj,uQ,uZ,uz,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cg,cf,cE,cy,c_,cT,cA,ck,cw,cI,cS,cC,cR,cD,cL,cM,cx,cN,cO,cP,cU,cH,cB,cW,c$,cV,cq,cF,cK,cG,cY,cj,cQ,cZ,cz,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hf,hE,hy,h_,hT,hA,hk,hw,hI,hS,hC,hR,hD,hL,hM,hx,hN,hO,hP,hU,hH,hB,hW,h$,hV,hq,hF,hK,hG,hY,hj,hQ,hZ,hz,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mg,mf,mE,my,m_,mT,mA,mk,mw,mI,mS,mC,mR,mD,mL,mM,mx,mN,mO,mP,mU,mH,mB,mW=class extends d5{},m$=class{constructor(e,t={}){d2(this,mB),d3(this,mB,null==t?void 0:t.detail)}get detail(){return d1(this,mB)}initCustomEvent(){}};mB=new WeakMap;var mV={document:{createElement:function(e,t){return new mW}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(mW)},CustomEvent:m$,EventTarget:d5,HTMLElement:mW,HTMLVideoElement:class extends d5{}},mq="undefined"==typeof window||void 0===globalThis.customElements,mF=mq?mV:globalThis,mK=mq?mV.document:globalThis.document;function mG(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function mY(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function mj(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function mQ(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var mZ,mz,mX,mJ=(e,t)=>!!e&&!!t&&(!!e.contains(t)||mJ(e,t.getRootNode().host)),m0="mux.com",m1=(()=>{try{return"3.6.1"}catch{}return"UNKNOWN"})(),m2=e=>{if(e){if([tB,tH].includes(e))return e;if(null!=e&&e.includes("live"))return tB}},m3={crossorigin:"crossOrigin",playsinline:"playsInline"},m4=class{constructor(e,t){d2(this,mZ),d2(this,mz),d2(this,mX,[]),d3(this,mZ,e),d3(this,mz,t)}[Symbol.iterator](){return d1(this,mX).values()}get length(){return d1(this,mX).length}get value(){var e;return null!=(e=d1(this,mX).join(" "))?e:""}set value(e){var t;e!==this.value&&(d3(this,mX,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return d1(this,mX)[e]}values(){return d1(this,mX).values()}keys(){return d1(this,mX).keys()}forEach(e){d1(this,mX).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||d1(this,mX).push(e)}),(""!==this.value||null!=(t=d1(this,mZ))&&t.hasAttribute(`${d1(this,mz)}`))&&null!=(i=d1(this,mZ))&&i.setAttribute(`${d1(this,mz)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{d1(this,mX).splice(d1(this,mX).indexOf(e),1)}),null==(t=d1(this,mZ))||t.setAttribute(`${d1(this,mz)}`,`${this.value}`)}contains(e){return d1(this,mX).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};mZ=new WeakMap,mz=new WeakMap,mX=new WeakMap;var m5=`[mux-player ${m1}]`;function m9(...e){console.warn(m5,...e)}function m8(...e){console.error(m5,...e)}function m6(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${t5("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),m9(i)}var m7={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},pe={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},pt=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),pi=[...Object.values(m7).filter(e=>m7.PLAYSINLINE!==e),...Object.values(pe)];function pa(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var pr=class extends mF.HTMLElement{static get observedAttributes(){return pi}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case pe.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case pe.VOLUME:{let e=null!=(a=mj(i))?a:1;this.media&&(this.media.volume=e);return}case pe.PLAYBACKRATE:{let e=null!=(r=mj(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:pt}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:pt}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=mj(this.getAttribute(pe.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(pe.PLAYBACKRATE,`${e}`):this.removeAttribute(pe.PLAYBACKRATE)}get crossOrigin(){return pa(this,m7.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(m7.CROSSORIGIN,`${e}`)}get autoplay(){return null!=pa(this,m7.AUTOPLAY)}set autoplay(e){e?this.setAttribute(m7.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(m7.AUTOPLAY)}get loop(){return null!=pa(this,m7.LOOP)}set loop(e){e?this.setAttribute(m7.LOOP,""):this.removeAttribute(m7.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=pa(this,m7.MUTED)}set defaultMuted(e){e?this.setAttribute(m7.MUTED,""):this.removeAttribute(m7.MUTED)}get playsInline(){return null!=pa(this,m7.PLAYSINLINE)}set playsInline(e){m8("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(m7.PRELOAD,e):this.removeAttribute(m7.PRELOAD)}},pn=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,ps=new WeakMap,po=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=ps.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=ps.get(this.element);e&&e.delete(this.type)}}static for(t){ps.has(t.element)||ps.set(t.element,new Map);let i=t.attributeName.slice(2),a=ps.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},pl=new Map,pd=new WeakMap,pu=new WeakMap,pc=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(pl.has(this.stringsKey))return pl.get(this.stringsKey);{let e=mK.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),pl.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(pd.get(e)!==i){pd.set(e,i);let t=new lE(i,this.values,this.processor);pu.set(e,t),e instanceof lS?e.replace(...t.children):e.appendChild(t);return}let a=pu.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},ph={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof lI&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof lI){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof lI&&e.attributeName.startsWith("on")&&(po.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof lS&&(e.replace(""),1)||t instanceof pc&&e instanceof lS&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof lS&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof lI){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function pm(e,...t){return new pc(e,t,ph)}var pp=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),pv=e=>e.charAt(0).toUpperCase()+e.slice(1),pb=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===tO.MEDIA_ERR_NETWORK)return"";if(e.code===tO.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tO.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},pg=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,pf=mK.createElement("template");"innerHTML"in pf&&(pf.innerHTML=pg);var pE,py,p_=class extends lj{};p_.template=null==(py=null==(pE=pf.content)?void 0:pE.children)?void 0:py[0],mF.customElements.get("media-theme-gerwig")||mF.customElements.define("media-theme-gerwig",p_);var pT={SRC:"src",POSTER:"poster"},pA={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},pk=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"],pw=od.formatErrorMessage;function pI(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}od.formatErrorMessage=e=>{var t,i;if(e instanceof tO){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=pv(null!=(i=e.errorCategory)?i:"video"),n=tN(null!=(a=e.errorCategory)?a:tx);if(2000002===e.muxCode)return t5("Your device appears to be offline",t);if(2403210===e.muxCode)return t5("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return t5("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return t5("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return t5("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return t5("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tO.MEDIA_ERR_NETWORK)return t5("Network Error",t);if(e.code===tO.MEDIA_ERR_DECODE)return t5("Media Error",t);if(e.code===tO.MEDIA_ERR_SRC_NOT_SUPPORTED)return t5("Source Not Supported",t)}return t5("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=pv(null!=(i=e.errorCategory)?i:"video"),n=tN(null!=(a=e.errorCategory)?a:tx);return 2000002===e.muxCode?t5("Check your internet connection and try reloading this video.",t):2403210===e.muxCode?t5("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?t5("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?t5("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?t5("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?t5("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===tO.MEDIA_ERR_NETWORK||e.code===tO.MEDIA_ERR_DECODE||e.code===tO.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${t5("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return pw(e)};var pS,pC,pR,pD,pL,pM,px,pN,pO,pP,pU,pH,pB,pW,p$,pV=Object.values(a_),pq=Object.values(pT),pF=Object.values(pA),pK="mux-player",pG={isDialogOpen:!1},pY={redundant_streams:!0},pj=class extends pr{constructor(){super(),d2(this,px),d2(this,pS),d2(this,pC,!1),d2(this,pR,{}),d2(this,pD,!0),d2(this,pL,new m4(this,"hotkeys")),d2(this,pM,{...pG,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&d4(this,px,pP).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(mJ(this,mK.activeElement)||e.preventDefault())}}),d3(this,pS,iH()),this.attachShadow({mode:"open"}),d4(this,px,pO).call(this),this.isConnected&&d4(this,px,pN).call(this)}static get NAME(){return pK}static get VERSION(){return m1}static get observedAttributes(){var e;return[...null!=(e=pr.observedAttributes)?e:[],...pq,...pV,...pF]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=pI(this))}attributeChangedCallback(e,t,i){var a;switch(d4(this,px,pN).call(this),super.attributeChangedCallback(e,t,i),e){case pA.HOTKEYS:d1(this,pL).value=i;break;case pA.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&m9(t5("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case pA.THUMBNAIL_TOKEN:if(i){let e=t4(i);if(e){let{aud:t}=e;"t"!==t&&m9(t5("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case pA.STORYBOARD_TOKEN:if(i){let e=t4(i);if(e){let{aud:t}=e;"s"!==t&&m9(t5("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case pA.DRM_TOKEN:if(i){let e=t4(i);if(e){let{aud:t}=e;"d"!==t&&m9(t5("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case a_.PLAYBACK_ID:null!=i&&i.includes("?token")&&m8(t5("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case a_.STREAM_TYPE:i&&![tB,tH,tW].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:m6({file:"invalid-stream-type.md",message:t5("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tB?null==this.getAttribute(pA.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN}[a_.PLAYBACK_ID,pT.SRC,pA.PLAYBACK_TOKEN].includes(e)&&t!==i&&d3(this,pM,{...d1(this,pM),...pG}),d4(this,px,pU).call(this,{[null!=(a=m3[e])?a:mY(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(a8.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new mF.CustomEvent(a3.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(a6.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(a8.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new mF.CustomEvent(a3.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(a6.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(a_.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tq.includes(e)?this.setAttribute(a_.PREFER_CMCD,e):m9(`Invalid value for preferCmcd. Must be one of ${tq.join()}`):this.removeAttribute(a_.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a8.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(a8.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(pA.THEME))?e:"gerwig"}set theme(e){this.setAttribute(pA.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(pk.includes(i))continue;let a=e.getAttribute(i);t[mY(i)]=""===a||a}return t}set themeProps(e){var t,i;d4(this,px,pN).call(this);let a={...this.themeProps,...e};for(let r in a){if(pk.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(mG(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(mG(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(a_.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(a_.PLAYBACK_ID,e):this.removeAttribute(a_.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=pQ(this,pT.SRC))?e:void 0:null!=(t=this.getAttribute(pT.SRC))?t:void 0}set src(e){e?this.setAttribute(pT.SRC,e):this.removeAttribute(pT.SRC)}get poster(){var e;let t=this.getAttribute(pT.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void m9("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=m0,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=t4(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${mQ({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(pT.POSTER,e):this.removeAttribute(pT.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(pA.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(pA.STORYBOARD_SRC,e):this.removeAttribute(pA.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tB,tW].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=m0,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=t4(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${mQ({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(pA.AUDIO)}set audio(e){e?this.setAttribute(pA.AUDIO,""):this.removeAttribute(pA.AUDIO)}get hotkeys(){return d1(this,pL)}get nohotkeys(){return this.hasAttribute(pA.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(pA.NOHOTKEYS,""):this.removeAttribute(pA.NOHOTKEYS)}get thumbnailTime(){return mj(this.getAttribute(pA.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(pA.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(pA.VIDEO_TITLE))?e:this.getAttribute(pA.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(pA.VIDEO_TITLE,e):this.removeAttribute(pA.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=pQ(this,pA.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(pA.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(pA.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mF.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(pA.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(pA.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mF.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(pA.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(pA.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mF.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(pA.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(pA.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(pA.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(pA.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(pA.PLAYBACK_RATES))return this.getAttribute(pA.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(pA.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(pA.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=mj(this.getAttribute(pA.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(pA.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=mj(this.getAttribute(pA.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(pA.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(pA.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(pA.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(pA.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return mj(this.getAttribute(pA.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(pA.DEFAULT_DURATION):this.setAttribute(pA.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(a_.PLAYER_INIT_TIME)?mj(this.getAttribute(a_.PLAYER_INIT_TIME)):d1(this,pS)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(a_.PLAYER_INIT_TIME):this.setAttribute(a_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(a_.PLAYER_SOFTWARE_NAME))?e:pK}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(a_.PLAYER_SOFTWARE_VERSION))?e:m1}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(a_.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(a_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(a_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(a_.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(a_.MAX_RESOLUTION,e):this.removeAttribute(a_.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(a_.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(a_.MIN_RESOLUTION,e):this.removeAttribute(a_.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(a_.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(a_.RENDITION_ORDER,e):this.removeAttribute(a_.RENDITION_ORDER))}get programStartTime(){return mj(this.getAttribute(a_.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(a_.PROGRAM_START_TIME):this.setAttribute(a_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return mj(this.getAttribute(a_.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(a_.PROGRAM_END_TIME):this.setAttribute(a_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return mj(this.getAttribute(a_.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(a_.ASSET_START_TIME):this.setAttribute(a_.ASSET_START_TIME,`${e}`)}get assetEndTime(){return mj(this.getAttribute(a_.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(a_.ASSET_END_TIME):this.setAttribute(a_.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(pA.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(pA.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):pY}set extraSourceParams(e){null==e?this.removeAttribute(pA.EXTRA_SOURCE_PARAMS):this.setAttribute(pA.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(a_.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(a_.CUSTOM_DOMAIN,e):this.removeAttribute(a_.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=pQ(this,a_.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(a_.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(pA.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(pA.NO_VOLUME_PREF,""):this.removeAttribute(pA.NO_VOLUME_PREF)}get debug(){return null!=pQ(this,a_.DEBUG)}set debug(e){e?this.setAttribute(a_.DEBUG,""):this.removeAttribute(a_.DEBUG)}get disableTracking(){return null!=pQ(this,a_.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(a_.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=pQ(this,a_.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(a_.DISABLE_COOKIES,""):this.removeAttribute(a_.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(a_.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tW}set streamType(e){this.setAttribute(a_.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(pA.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(pA.DEFAULT_STREAM_TYPE))?i:tH}set defaultStreamType(e){e?this.setAttribute(pA.DEFAULT_STREAM_TYPE,e):this.removeAttribute(pA.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(pA.TARGET_LIVE_WINDOW)?+this.getAttribute(pA.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(pA.TARGET_LIVE_WINDOW):this.setAttribute(pA.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return mj(pQ(this,a_.START_TIME))}set startTime(e){this.setAttribute(a_.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(a_.PREFER_PLAYBACK);if("mse"===e||e===t$)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===t$?this.setAttribute(a_.PREFER_PLAYBACK,e):this.removeAttribute(a_.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(d4(this,px,pN).call(this),this.media)?this.media.metadata={...pI(this),...e}:m8("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(d4(this,px,pN).call(this),this.media)?this.media._hlsConfig=e:m8("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(d4(this,px,pN).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void m8("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(d4(this,px,pN).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void m8("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(pA.PLAYBACK_TOKEN),t=this.getAttribute(pA.DRM_TOKEN),i=this.getAttribute(pA.THUMBNAIL_TOKEN),a=this.getAttribute(pA.STORYBOARD_TOKEN);return{...d1(this,pR),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){d3(this,pR,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(pA.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(pA.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(pA.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(pA.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(pA.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(pA.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(pA.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(pA.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return it(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(pA.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(pA.CAST_RECEIVER,e):this.removeAttribute(pA.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:m8("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(pA.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(pA.NO_TOOLTIPS,""):this.removeAttribute(pA.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(pA.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(pA.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(pA.PROUDLY_DISPLAY_MUX_BADGE)}};function pQ(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}pS=new WeakMap,pC=new WeakMap,pR=new WeakMap,pD=new WeakMap,pL=new WeakMap,pM=new WeakMap,px=new WeakSet,pN=function(){var e,t,i,a;if(!d1(this,pC)){d3(this,pC,!0),d4(this,px,pU).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof mF.HTMLElement))throw""}catch{m8("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{m8("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof su))throw""}catch{m8("<media-controller> failed to upgrade!")}d4(this,px,pH).call(this),d4(this,px,pB).call(this),d4(this,px,pW).call(this),d3(this,pD,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(no))||t),d4(this,px,p$).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>d4(this,px,pU).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>d4(this,px,pU).call(this))}},pO=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},pP=function(e){Object.assign(d1(this,pM),e),d4(this,px,pU).call(this)},pU=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,b,g,f,E,y,_,T,A,k,w,I,S,C,R,D,L,M,x,N,O,P,U,H,B,W,$,V,q,F,K,G;let Y,j,Q,Z;t={...d1(this,pM),...e},Y={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(pA.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=mF.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(pA.NOHOTKEYS),hotKeys:this.getAttribute(pA.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(a_.TARGET_LIVE_WINDOW),streamType:m2(this.getAttribute(a_.STREAM_TYPE)),primaryColor:this.getAttribute(pA.PRIMARY_COLOR),secondaryColor:this.getAttribute(pA.SECONDARY_COLOR),accentColor:this.getAttribute(pA.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(j=null==(r=this.mediaController)?void 0:r.querySelector("media-time-display"))&&"none"===getComputedStyle(j).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(pA.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(a_.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(pA.TITLE),videoTitle:null!=(a=this.getAttribute(pA.VIDEO_TITLE))?a:this.getAttribute(pA.TITLE),novolumepref:this.hasAttribute(pA.NO_VOLUME_PREF),proudlyDisplayMuxBadge:this.hasAttribute(pA.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(pA.DISABLE_PSEUDO_ENDED),...t,extraSourceParams:this.extraSourceParams},n=pm`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(Y)}
    ${pn}
  </style>
  ${o=Y,pm`
  <media-theme
    template="${o.themeTemplate||!1}"
    defaultstreamtype="${null!=(l=o.defaultStreamType)&&l}"
    hotkeys="${Q=o.hotKeys?`${o.hotKeys}`:"","live"===m2(o.streamType)&&(Q+=" noarrowleft noarrowright"),Q||!1}"
    nohotkeys="${o.noHotKeys||!o.hasSrc||!1}"
    noautoseektolive="${!!(null!=(d=o.streamType)&&d.includes(tB))&&0!==o.targetLiveWindow}"
    novolumepref="${o.novolumepref||!1}"
    disabled="${!o.hasSrc||o.isDialogOpen}"
    audio="${null!=(u=o.audio)&&u}"
    style="${null!=(G={"--media-primary-color":o.primaryColor,"--media-secondary-color":o.secondaryColor,"--media-accent-color":o.accentColor},Z="",Object.entries(G).forEach(([e,t])=>{null!=t&&(Z+=`${mG(e)}: ${t}; `)}),c=Z?Z.trim():void 0)&&c}"
    defaultsubtitles="${!o.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(h=o.forwardSeekOffset)&&h}"
    backwardseekoffset="${null!=(m=o.backwardSeekOffset)&&m}"
    playbackrates="${null!=(p=o.playbackRates)&&p}"
    defaultshowremainingtime="${null!=(b=o.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=o.defaultDuration)&&g}"
    hideduration="${null!=(f=o.hideDuration)&&f}"
    title="${null!=(E=o.title)&&E}"
    videotitle="${null!=(y=o.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(_=o.proudlyDisplayMuxBadge)&&_}"
    exportparts="${pp}"
    onclose="${o.onCloseErrorDialog}"
    onfocusin="${o.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=o.noHotKeys)&&T}"
      target-live-window="${null!=(A=o.targetLiveWindow)&&A}"
      stream-type="${null!=(k=m2(o.streamType))&&k}"
      crossorigin="${null!=(w=o.crossOrigin)?w:""}"
      playsinline
      autoplay="${null!=(I=o.autoplay)&&I}"
      muted="${null!=(S=o.muted)&&S}"
      loop="${null!=(C=o.loop)&&C}"
      preload="${null!=(R=o.preload)&&R}"
      debug="${null!=(D=o.debug)&&D}"
      prefer-cmcd="${null!=(L=o.preferCmcd)&&L}"
      disable-tracking="${null!=(M=o.disableTracking)&&M}"
      disable-cookies="${null!=(x=o.disableCookies)&&x}"
      prefer-playback="${null!=(N=o.preferPlayback)&&N}"
      start-time="${null!=o.startTime&&o.startTime}"
      beacon-collection-domain="${null!=(O=o.beaconCollectionDomain)&&O}"
      player-init-time="${null!=(P=o.playerInitTime)&&P}"
      player-software-name="${null!=(U=o.playerSoftwareName)&&U}"
      player-software-version="${null!=(H=o.playerSoftwareVersion)&&H}"
      env-key="${null!=(B=o.envKey)&&B}"
      custom-domain="${null!=(W=o.customDomain)&&W}"
      src="${o.src?o.src:!!o.playbackId&&iW(o)}"
      cast-src="${o.src?o.src:!!o.playbackId&&iW(o)}"
      cast-receiver="${null!=($=o.castReceiver)&&$}"
      drm-token="${null!=(q=null==(V=o.tokens)?void 0:V.drm)&&q}"
      exportparts="video"
      disable-pseudo-ended="${null!=(F=o.disablePseudoEnded)&&F}"
    >
      ${o.storyboard?pm`<track label="thumbnails" default kind="metadata" src="${o.storyboard}" />`:pm``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!o.poster&&o.poster}"
        placeholdersrc="${null!=(K=o.placeholder)&&K}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,s=this.shadowRoot,n.renderInto(s)},pH=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(pk.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},pB=function(){let e=e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tO)){let{message:e,code:t}=null!=i?i:{};i=new tO(e,t)}if(!(null!=i&&i.fatal)){m9(i),i.data&&m9(`${i.name} data:`,i.data);return}let a=pb(i,!1);a.message&&m6(a),m8(i),i.data&&m8(`${i.name} data:`,i.data),d4(this,px,pP).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tO))return e;let r=pb(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},pW=function(){var e,t,i,a;let r=()=>d4(this,px,pU).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},p$=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tB&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tB&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(no))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,d1(this,pD))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(no))||t;d1(this,pD)!==a&&(d3(this,pD,a),n(i,d1(this,pD)))})},e.s(["default",()=>pj,"getVideoAttribute",()=>pQ,"playerSoftwareName",()=>pK,"playerSoftwareVersion",()=>m1],6552);var pZ=e=>{throw TypeError(e)},pz=(e,t,i)=>t.has(e)||pZ("Cannot "+i),pX=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends pX{});var pJ,p0=class extends pX{},p1=class{constructor(e,t={}){((e,t,i)=>t.has(e)?pZ("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,pJ),((e,t,i,a)=>(pz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,pJ,null==t?void 0:t.detail)}get detail(){let e,t;return pz(this,e=pJ,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};pJ=new WeakMap;var p2={document:{createElement:function(e,t){return new p0}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(p0)},CustomEvent:p1,EventTarget:pX,HTMLElement:p0,HTMLVideoElement:class extends pX{}},p3="undefined"==typeof window||void 0===globalThis.customElements,p4=p3?p2:globalThis;p3&&p2.document,p4.customElements.get("mux-player")||(p4.customElements.define("mux-player",pj),p4.MuxPlayerElement=pj),e.i(6552);var p5=parseInt(r.default.version)>=19,p9={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function p8(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var p6=Object.prototype.hasOwnProperty,p7=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!p6.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),ve=(e,t,i)=>{e[i]=t},vt=(e,t,i,a=ve,n=p7)=>(0,r.useEffect)(()=>{let r=null==i?void 0:i.current;r&&n(r,t,e)&&a(r,t,e)},[null==i?void 0:i.current,t]),vi=(()=>{try{return"3.6.1"}catch{}return"UNKNOWN"})(),va=(e,t,i)=>(0,r.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),vr=r.default.forwardRef(({children:e,...t},i)=>r.default.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!p5&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=p9)&&i in a)return p9[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=p5||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),vn="mux-player-react",vs=r.default.forwardRef((e,t)=>{var i;let a=(0,r.useRef)(null),n=function(...e){return r.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=p8(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():p8(e[t],null)}}}}(...e),e)}(a,t),[s]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:b,onPlaying:g,onTimeUpdate:f,onPause:E,onSeeking:y,onSeeked:_,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:I,onChapterChange:S,metadata:C,tokens:R,paused:D,playbackId:L,playbackRates:M,currentTime:x,themeProps:N,extraSourceParams:O,castCustomData:P,_hlsConfig:U,...H}=t;return vt("tokens",R,e),vt("playbackId",L,e),vt("playbackRates",M,e),vt("metadata",C,e),vt("extraSourceParams",O,e),vt("_hlsConfig",U,e),vt("themeProps",N,e),vt("castCustomData",P,e),vt("paused",D,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&p7(e,t,i)),vt("currentTime",x,e,(e,t)=>{null!=t&&(e.currentTime=t)}),va("abort",e,i),va("canplay",e,a),va("canplaythrough",e,r),va("emptied",e,n),va("loadstart",e,s),va("loadeddata",e,o),va("loadedmetadata",e,l),va("progress",e,d),va("durationchange",e,u),va("volumechange",e,c),va("ratechange",e,h),va("resize",e,m),va("waiting",e,p),va("play",e,b),va("playing",e,g),va("timeupdate",e,f),va("pause",e,E),va("seeking",e,y),va("seeked",e,_),va("stalled",e,T),va("suspend",e,A),va("ended",e,k),va("error",e,w),va("cuepointchange",e,I),va("chapterchange",e,S),[H]})(a,e),[o]=(0,r.useState)(null!=(i=e.playerInitTime)?i:iH());return r.default.createElement(vr,{ref:n,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:vn,playerSoftwareVersion:vi,playerInitTime:o,...s})});e.s(["default",()=>vs,"playerSoftwareName",()=>vn,"playerSoftwareVersion",()=>vi],68399),e.i(68399),e.s(["MaxResolution",()=>tG,"MediaError",()=>tO,"MinResolution",()=>tY,"RenditionOrder",()=>tj,"default",()=>vs,"generatePlayerInitTime",()=>iH,"playerSoftwareName",()=>vn,"playerSoftwareVersion",()=>vi],42033)}]);