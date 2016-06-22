/*
 AngularJS v1.4.0-rc.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,V,t){'use strict';function G(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0-rc.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Qa(b){if(null==b||Ra(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:M(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(L(b)||Qa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Nd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Od(){return++jb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Kb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||E(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],r=g[m];c&&D(r)?(D(b[m])||(b[m]=L(r)?[]:{}),Kb(b[m],[r],!0)):b[m]=r}}lc(b,d);return b}function O(b){return Kb(b,pa.call(arguments,1),!1)}function Pd(b){return Kb(b,pa.call(arguments,1),!0)}function aa(b){return parseInt(b,
10)}function Lb(b,a){return O(Object.create(b),a)}function x(){}function Sa(b){return b}function oa(b){return function(){return b}}function v(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function D(b){return null!==b&&"object"===typeof b}function M(b){return"string"===typeof b}function T(b){return"number"===typeof b}function ea(b){return"[object Date]"===qa.call(b)}function E(b){return"function"===typeof b}function Ta(b){return"[object RegExp]"===qa.call(b)}function Ra(b){return b&&
b.window===b}function Ua(b){return b&&b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Qd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ra(b){return F(b.nodeName||b[0]&&b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function sa(b,a,c,d){if(Ra(b)||Ua(b))throw Ca("cpws");if(nc.test(qa.call(a)))throw Ca("cpta");if(a){if(b===a)throw Ca("cpi");
c=c||[];d=d||[];if(D(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:n(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)L(b)?a=sa(b,[],c,d):nc.test(qa.call(b))?a=new b.constructor(b):ea(b)?a=new Date(b.getTime()):Ta(b)?(a=new RegExp(b.source,
b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):D(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=sa(b,e,c,d));return a}function fa(b,a){if(L(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ja(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<
c;d++)if(!ja(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?ja(b.getTime(),a.getTime()):!1;if(Ta(b))return Ta(a)?b.toString()==a.toString():!1;if(Ua(b)||Ua(a)||Ra(b)||Ra(a)||L(a)||ea(a)||Ta(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ja(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!E(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(pa.call(a,c))}function oc(b,a){var c=2<arguments.length?pa.call(arguments,
2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ra(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function Ya(b,a){if("undefined"===typeof b)return t;T(a)||(a=a?2:null);return JSON.stringify(b,Rd,a)}function pc(b){return M(b)?JSON.parse(b):b}function qc(b,
a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Mb(b,a,c){c=c?-1:1;var d=qc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ta(b){b=C(b).clone();try{b.empty()}catch(a){}var c=C("<div>").append(b).html();try{return b[0].nodeType===Za?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(d){return F(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),z(d)&&(b=z(c[1])?rc(c[1]):!0,tc.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];n(b,function(b,d){L(b)?n(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function kb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Sd(b,a){var c,d,e=Ka.length;for(d=0;d<e;++d)if(c=Ka[d]+a,M(c=b.getAttribute(c)))return c;return null}function Td(b,a){var c,d,e={};n(Ka,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Ka,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Sd(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){D(c)||(c={});c=O({strictDi:!1},c);var d=function(){b=C(b);if(b.injector()){var d=b[0]===V?"document":ta(b);throw Ca("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=$a(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ba.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};E(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Ud(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Vd(b){b=ba.element(b).injector();if(!b)throw Ca("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Wd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Xd(){var b;if(!wc){var a=lb();ka=Q.jQuery;z(a)&&(ka=null===a?t:Q[a]);ka&&ka.fn.on?(C=ka,O(ka.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ka.cleanData,ka.cleanData=function(a){var d;if(Ob)Ob=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=ka._data(f,"events"))&&d.$destroy&&ka(f).triggerHandler("$destroy");b(a)}):C=P;ba.element=
C;wc=!0}}function Pb(b,a,c){if(!b)throw Ca("areq",a||"?",c||"required");return b}function Ma(b,a,c){c&&L(b)&&(b=b[b.length-1]);Pb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Na(b,a){if("hasOwnProperty"===b)throw Ca("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?oc(e,b):b}function mb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return C(c)}function la(){return Object.create(null)}function Yd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=G("$injector"),d=G("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||G;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return y}}if(!g)throw c("nomod",
f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),y={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:a("$provide","decorator"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),
config:s,run:function(a){e.push(a);return this}};h&&s(h);return y})}})}function Zd(b){O(b,{bootstrap:uc,copy:sa,extend:O,merge:Pd,equals:ja,element:C,forEach:n,injector:$a,noop:x,bind:oc,toJson:Ya,fromJson:pc,identity:Sa,isUndefined:v,isDefined:z,isString:M,isFunction:E,isObject:D,isNumber:T,isElement:mc,isArray:L,version:$d,isDate:ea,lowercase:F,uppercase:nb,callbacks:{counter:0},getTestability:Vd,$$minErr:G,$$csp:ab,reloadWithDebugInfo:Ud});bb=Yd(Q);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",
ae)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:be});a.provider("$compile",yc).directive({a:ce,input:zc,textarea:zc,form:de,script:ee,select:fe,style:ge,option:he,ngBind:ie,ngBindHtml:je,ngBindTemplate:ke,ngClass:le,ngClassEven:me,ngClassOdd:ne,ngCloak:oe,ngController:pe,ngForm:qe,ngHide:re,ngIf:se,ngInclude:te,ngInit:ue,ngNonBindable:ve,ngPluralize:we,ngRepeat:xe,ngShow:ye,ngStyle:ze,ngSwitch:Ae,ngSwitchWhen:Be,ngSwitchDefault:Ce,ngOptions:De,ngTransclude:Ee,ngModel:Fe,
ngList:Ge,ngChange:He,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,ngValue:Ie,ngModelOptions:Je}).directive({ngInclude:Ke}).directive(ob).directive(Ec);a.provider({$anchorScroll:Le,$animate:Me,$$animateQueue:Ne,$$AnimateRunner:Oe,$browser:Pe,$cacheFactory:Qe,$controller:Re,$document:Se,$exceptionHandler:Te,$filter:Fc,$interpolate:Ue,$interval:Ve,$http:We,$httpParamSerializer:Xe,$httpParamSerializerJQLike:Ye,$httpBackend:Ze,$location:$e,
$log:af,$parse:bf,$rootScope:cf,$q:df,$$q:ef,$sce:ff,$sceDelegate:gf,$sniffer:hf,$templateCache:jf,$templateRequest:kf,$$testability:lf,$timeout:mf,$window:nf,$$rAF:of,$$asyncCallback:pf,$$jqLite:qf,$$HashMap:rf,$$cookieReader:sf})}])}function cb(b){return b.replace(tf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(uf,"Moz$1")}function Gc(b){b=b.nodeType;return b===na||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Qb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(vf.exec(b)||["",""])[1].toLowerCase();d=ga[d]||ga._default;c.innerHTML=d[1]+b.replace(wf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function P(b){if(b instanceof P)return b;var a;M(b)&&(b=S(b),a=!0);if(!(this instanceof P)){if(a&&"<"!=b.charAt(0))throw Rb("nosel");return new P(b)}if(a){a=V;var c;b=(c=xf.exec(b))?[a.createElement(c[1])]:
(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Sb(b){return b.cloneNode(!0)}function pb(b,a){a||qb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)qb(c[d])}function Jc(b,a,c,d){if(z(d))throw Rb("offargs");var e=(d=rb(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(z(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function qb(b,
a){var c=b.ng339,d=c&&sb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete sb[c],b.ng339=t))}function rb(b,a){var c=b.ng339,c=c&&sb[c];a&&!c&&(b.ng339=c=++yf,c=sb[c]={events:{},data:{},handle:t});return c}function Tb(b,a,c){if(Gc(b)){var d=z(c),e=!d&&a&&!D(a),f=!a;b=(b=rb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];O(b,a)}}}function tb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function ub(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",S((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," ")))})}function vb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=S(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",S(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return wb(b,"$"+(a||"ngController")+"Controller")}function wb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=C.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Lc(b){for(pb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ub(b,a){a||pb(b);var c=b.parentNode;c&&c.removeChild(b)}function zf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);
else C(a).on("load",b)}function Mc(b,a){var c=xb[a.toLowerCase()];return c&&Nc[ra(b)]&&c}function Af(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function Bf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function qf(){this.$get=function(){return O(P,{hasClass:function(b,a){b.attr&&(b=b[0]);return tb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return ub(b,a)}})}}function Da(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Od)():c+":"+b}function Oa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Cf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function $a(b,a){function c(a){return function(b,c){if(D(b))n(b,kc(a));else return a(b,c)}}function d(a,b){Na(a,"service");if(E(b)||L(b))b=s.instantiate(b);if(!b.$get)throw Ea("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=
H.invoke(b,this);if(v(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{M(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(s.invoke(a)):L(a)?b.push(s.invoke(a)):Ma(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==
e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ea("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=$a.$$annotate(b,a,g),l,s,m;s=0;for(l=k.length;s<l;s++){m=k[s];if("string"!==typeof m)throw Ea("itkn",m);h.push(f&&
f.hasOwnProperty(m)?f[m]:d(m,g))}L(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((L(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||E(a)?a:d},get:d,annotate:$a.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Oa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,
b){return f(a,oa(b),!1)}),constant:c(function(a,b){Na(a,"constant");r[a]=b;y[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=H.invoke(d,c);return H.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ba.isString(b)&&k.push(b);throw Ea("unpr",k.join(" <- "));}),y={},H=y.$injector=h(y,function(a,b){var c=s.get(a+"Provider",b);return H.invoke(c.$get,c,t,a)});n(g(b),function(a){H.invoke(a||x)});return H}function Le(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ra(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=M(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||zf(function(){d.$evalAsync(g)})});return g}]}function db(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;L(b)&&(b=b.join(" "));L(a)&&(a=a.join(" "));return b+" "+a}function Df(b){M(b)&&(b=b.split(" "));var a={};n(b,function(b){b.length&&(a[b]=!0)});return a}function pf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function Ef(b,a,c,d){function e(a){try{a.apply(null,pa.call(arguments,1))}finally{if(H--,0===H)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=m.state;break a}catch(a){}u=void 0}u=v(u)?null:u;ja(u,A)&&(u=A);A=u}function h(){if(w!==l.url()||p!==u)w=l.url(),p=u,n(B,function(a){a(l.url(),u)})}var l=this,k=b.location,m=b.history,r=b.setTimeout,s=b.clearTimeout,y={};l.isMock=!1;var H=0,J=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){H++};l.notifyWhenNoOutstandingRequests=function(a){0===H?a():J.push(a)};var u,p,w=k.href,q=a.find("basicComponents"),K=null;g();p=u;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(w===a&&(!d.history||f))return l;var h=w&&Fa(w)===Fa(a);w=a;p=e;!d.history||h&&f?(h||(K=a),c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a):(m[c?"replaceState":"pushState"](e,"",a),g(),p=u);return l}return K||k.href.replace(/%27/g,
"'")};l.state=function(){return u};var B=[],N=!1,A=null;l.onUrlChange=function(a){if(!N){if(d.history)C(b).on("popstate",f);C(b).on("hashchange",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){C(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;H++;c=r(function(){delete y[c];e(a)},b||0);y[c]=!0;return c};l.defer.cancel=function(a){return y[a]?(delete y[a],
s(a),e(x),!0):!1}}function Pe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ef(b,d,a,c)}]}function Qe(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var g=0,h=O({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,s=null;return a[b]={put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]=
{key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};r=s=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return O({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function jf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Qd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Na(a,"directive");M(a)?(d(a),Pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:oa(h)}:!h.compile&&h.link&&(h.compile=oa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var l=h,k=h,s=h.name,m={isolateScope:null,bindToController:null};D(k.scope)&&(!0===k.bindToController?(m.bindToController=c(k.scope,s,!0),m.isolateScope={}):m.isolateScope=c(k.scope,s,!1));D(k.bindToController)&&(m.bindToController=c(k.bindToController,s,!0));if(D(m.bindToController)){var H=k.controller,Z=k.controllerAs;if(!H)throw ha("noctrl",s);var da;a:if(Z&&M(Z))da=Z;else{if(M(H)){var n=Rc.exec(H);if(n){da=n[3];break a}}da=void 0}if(!da)throw ha("noident",
s);}var q=l.$$bindings=m;D(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):n(a,kc(s));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return z(a)?(m=a,this):m};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,w,q,K,B,N){function A(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e){a instanceof C||(a=C(a));n(a,function(b,c){b.nodeType==Za&&b.nodeValue.match(/\S+/)&&(a[c]=C(b).wrap("<span></span>").parent()[0])});var f=Y(a,b,a,c,d,e);R.$$addScopeClass(a);var g=null;return function(b,c,d){Pb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;
d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ra(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?C(Vb(g,C("<div>").append(a).html())):c?La.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);R.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function Y(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,s,B,y;if(p)for(y=Array(c.length),m=0;m<h.length;m+=3)f=h[m],y[f]=c[f];else y=c;m=0;for(s=h.length;m<
s;)if(k=y[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(l=a.$new(),R.$$addScopeInfo(C(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",B)}else l=a;B=c.transcludeOnThisElement?Z(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?Z(a,b):null;c(f,l,k,d,B,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,m,s,p,B=0;B<a.length;B++){k=new ca;l=da(a[B],[],k,0===B?d:t,e);(f=l.length?I(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&R.$$addScopeClass(k.$$element);
k=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:Y(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),s=!0,p=p||f;f=null}return s?g:null}function Z(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function da(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case na:v(b,wa(ra(a)),"E",d,e);for(var l,m,s,p=a.attributes,B=0,y=p&&p.length;B<
y;B++){var H=!1,Z=!1;l=p[B];k=l.name;m=S(l.value);l=wa(k);if(s=ia.test(l))k=k.replace(Tc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var J=l.replace(/(Start|End)$/,"");G(J)&&l===J+"Start"&&(H=k,Z=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(s||!c.hasOwnProperty(l))c[l]=m,Mc(a,l)&&(c[l]=!0);U(a,b,m,l,s);v(b,l,"A",d,e,H,Z)}a=a.className;D(a)&&(a=a.animVal);if(M(a)&&""!==a)for(;k=g.exec(a);)l=wa(k[2]),v(b,l,"C",d,e)&&(c[l]=S(k[3])),a=
a.substr(k.index+k[0].length);break;case Za:ya(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),v(b,l,"M",d,e)&&(c[l]=S(k[2]))}catch(N){}}b.sort(Ga);return b}function va(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return C(d)}function Sc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function I(a,
b,d,e,f,g,h,k,m){function s(a,b,c,d){if(a){c&&(a=Sc(a,c,d));a.require=I.require;a.directiveName=x;if(A===I||I.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Sc(b,c,d));b.require=I.require;b.directiveName=x;if(A===I||I.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}function B(a,b,c,d){var e;if(M(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&
!f)throw ha("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function y(a,b,c,d,e,f){var g=la(),h;for(h in d){var k=d[h],l={$scope:k===A||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=p(m,l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function Z(a,c,e,f,g,l){function m(a,b,c){var d;Ua(a)||(c=b,b=a,a=t);q&&(d=n);c||(c=q?w.parent():w);return g(a,b,d,c,W)}var s,p,H,J,
n,eb,w;b===e?(f=d,w=d.$$element):(w=C(e),f=new ca(w,d));A&&(J=c.$new(!0));g&&(eb=m,eb.$$boundTransclude=g);Y&&(n=y(w,f,eb,Y,J,c));A&&(R.$$addScopeInfo(w,J,!0,!(u&&(u===A||u===A.$$originalDirective))),R.$$addScopeClass(w,!0),J.$$isolateBindings=A.$$isolateBindings,ba(c,f,J,J.$$isolateBindings,A,J));if(n){var da=A||N,K;da&&n[da.name]&&(p=da.$$bindings.bindToController,(H=n[da.name])&&H.identifier&&p&&(K=H,l.$$destroyBindings=ba(c,f,H.instance,p,da)));for(s in n){H=n[s];var va=H();va!==H.instance&&(H.instance=
va,w.data("$"+I.name+"Controller",va),H===K&&(l.$$destroyBindings(),l.$$destroyBindings=ba(c,f,va,p,da)))}}s=0;for(l=h.length;s<l;s++)p=h[s],aa(p,p.isolateScope?J:c,w,f,p.require&&B(p.directiveName,p.require,w,n),eb);var W=c;A&&(A.template||null===A.templateUrl)&&(W=J);a&&a(W,e.childNodes,t,g);for(s=k.length-1;0<=s;s--)p=k[s],aa(p,p.isolateScope?J:c,w,f,p.require&&B(p.directiveName,p.require,w,n),eb)}m=m||{};for(var J=-Number.MAX_VALUE,N,Y=m.controllerDirectives,A=m.newIsolateScopeDirective,u=m.templateDirective,
n=m.nonTlbTranscludeDirective,w=!1,K=!1,q=m.hasElementTranscludeDirective,W=d.$$element=C(b),I,x,v,Ga=e,ya,G=0,F=a.length;G<F;G++){I=a[G];var O=I.$$start,Wb=I.$$end;O&&(W=va(b,O,Wb));v=t;if(J>I.priority)break;if(v=I.scope)I.templateUrl||(D(v)?(P("new/isolated scope",A||N,I,W),A=I):P("new/isolated scope",A,I,W)),N=N||I;x=I.name;!I.templateUrl&&I.controller&&(v=I.controller,Y=Y||la(),P("'"+x+"' controller",Y[x],I,W),Y[x]=I);if(v=I.transclude)w=!0,I.$$tlb||(P("transclusion",n,I,W),n=I),"element"==v?
(q=!0,J=I.priority,v=W,W=d.$$element=C(V.createComment(" "+x+": "+d[x]+" ")),b=W[0],X(f,pa.call(v,0),b),Ga=R(v,e,J,g&&g.name,{nonTlbTranscludeDirective:n})):(v=C(Sb(b)).contents(),W.empty(),Ga=R(v,e));if(I.template)if(K=!0,P("template",u,I,W),u=I,v=E(I.template)?I.template(W,d):I.template,v=ga(v),I.replace){g=I;v=Qb.test(v)?Uc(Vb(I.templateNamespace,S(v))):[];b=v[0];if(1!=v.length||b.nodeType!==na)throw ha("tplrt",x,"");X(f,W,b);F={$attr:{}};v=da(b,[],F);var T=a.splice(G+1,a.length-(G+1));A&&z(v);
a=a.concat(v).concat(T);Q(d,F);F=a.length}else W.html(v);if(I.templateUrl)K=!0,P("template",u,I,W),u=I,I.replace&&(g=I),Z=Ff(a.splice(G,a.length-G),W,d,f,w&&Ga,h,k,{controllerDirectives:Y,newIsolateScopeDirective:A,templateDirective:u,nonTlbTranscludeDirective:n}),F=a.length;else if(I.compile)try{ya=I.compile(W,d,Ga),E(ya)?s(null,ya,O,Wb):ya&&s(ya.pre,ya.post,O,Wb)}catch(U){c(U,ta(W))}I.terminal&&(Z.terminal=!0,J=Math.max(J,I.priority))}Z.scope=N&&!0===N.scope;Z.transcludeOnThisElement=w;Z.elementTranscludeOnThisElement=
q;Z.templateOnThisElement=K;Z.transclude=Ga;m.hasElementTranscludeDirective=q;return Z}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Lb(a[b],{$$isolateScope:!0})}function v(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===t||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Lb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(y){c(y)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),
d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Q(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(A(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Ff(a,b,c,e,f,g,h,k){var l=[],m,s,p=b[0],
B=a.shift(),y=Lb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),H=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,N=B.templateNamespace;b.empty();d(K.getTrustedResourceUrl(H)).then(function(d){var J,u;d=ga(d);if(B.replace){d=Qb.test(d)?Uc(Vb(N,S(d))):[];J=d[0];if(1!=d.length||J.nodeType!==na)throw ha("tplrt",B.name,H);d={$attr:{}};X(e,b,J);var w=da(J,[],d);D(B.scope)&&z(w);a=w.concat(a);Q(c,d)}else J=p,b.html(d);a.unshift(y);m=I(a,J,c,f,b,B,g,h,k);n(e,function(a,c){a==
J&&(e[c]=b[0])});for(s=Y(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var K=l.shift(),R=l.shift(),w=b[0];if(!d.$$destroyed){if(u!==p){var va=u.className;k.hasElementTranscludeDirective&&B.replace||(w=Sb(J));X(K,C(u),w);A(C(w),va)}u=m.transcludeOnThisElement?Z(d,m.transclude,R):R;m(s,d,w,e,u,m)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=Z(b,m.transclude,e)),m(s,b,c,d,a,m)))}}function Ga(a,b){var c=b.priority-a.priority;return 0!==
c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function P(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,ta(d));}function ya(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&R.$$addBindingClass(a);return function(a,c){var e=c.parent();b||R.$$addBindingClass(e);R.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Vb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");c.innerHTML=
"<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function T(a,b){if("srcdoc"==b)return K.HTML;var c=ra(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function U(a,c,d,e,f){var g=T(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ra(a))throw ha("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ha("nodomevents");
var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function X(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);
C(c).data(C(d).data());ka?(Ob=!0,ka.cleanData([d])):delete C.cache[d[C.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],C(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,b){return O(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}function ba(a,c,d,e,f,g){var h;n(e,function(e,g){var k=e.attrName,l=e.optional,m,s,p,B;switch(e.mode){case "@":c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));
break;case "=":if(l&&!c[k])break;s=u(c[k]);B=s.literal?ja:function(a,b){return a===b||a!==a&&b!==b};p=s.assign||function(){m=d[g]=s(a);throw ha("nonassign",c[k],f.name);};m=d[g]=s(a);l=function(b){B(b,d[g])||(B(b,m)?p(a,b=d[g]):d[g]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,s.literal);h=h||[];h.push(l);break;case "&":if(!c.hasOwnProperty(k)&&l)break;s=u(c[k]);if(s===x&&l)break;d[g]=function(b){return s(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<
b;++a)h[a]()}:x;return g&&e!==x?(g.$on("$destroy",e),x):e}var ca=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ca.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&B.removeClass(this.$$element,c)},
$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),h=Af(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=ra(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=N(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var m=2*l,g=g+N(S(h[m]),!0),g=g+(" "+S(h[m+1]));
h=S(h[2*l]).split(/\s/);g+=N(S(h[0]),!0);2===h.length&&(g+=" "+S(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=la()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Wa(e,b)}}};var ea=b.startSymbol(),fa=b.endSymbol(),ga="{{"==ea||"}}"==fa?Sa:function(a){return a.replace(/\{\{/g,
ea).replace(/}}/g,fa)},ia=/^ngAttr[A-Z]/;R.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;R.$$addBindingClass=m?function(a){A(a,"ng-binding")}:x;R.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;R.$$addScopeClass=m?function(a,b){A(a,b?"ng-isolate-scope":"ng-scope")}:x;return R}]}function wa(b){return cb(b.replace(Tc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=C(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Gf.call(b,a,1);return b}function Re(){var b={},a=!1;this.register=function(a,d){Na(a,"controller");D(a)?O(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw G("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
g,h,l){var k,m,r;h=!0===h;l&&M(l)&&(r=l);if(M(f)){l=f.match(Rc);if(!l)throw Hf("ctrlfmt",f);m=l[1];r=r||l[3];f=b.hasOwnProperty(m)?b[m]:xc(g.$scope,m,!0)||(a?xc(d,m,!0):t);Ma(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,m||f.name),O(function(){var a=c.invoke(f,k,g,m);a!==k&&(D(a)||E(a))&&(k=a,r&&e(g,r,k,m||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,m);r&&e(g,r,k,m||f.name);return k}}]}function Se(){this.$get=["$window",function(b){return C(b.document)}]}
function Te(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Wc(b){function a(a){return D(a)?ea(a)?a.toISOString():Ya(a):a}return function(c){if(!c)return"";var d=[];Nd(c,function(c,f){null===c||v(c)||(L(c)||D(c)&&b?n(c,function(g,h){var l=b?"["+(L(c)?"":h)+"]":"";d.push(ua(f+l)+"="+ua(a(g)))}):d.push(ua(f)+"="+ua(a(c))))});return 0<d.length?d.join("&"):""}}function Xe(){this.$get=function(){return Wc(!1)}}function Ye(){this.$get=function(){return Wc(!0)}}
function Xb(b,a){if(M(b)){var c=b.replace(If,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Xc))||(d=(d=c.match(Jf))&&Kf[d[0]].test(c));d&&(b=pc(c))}}return b}function Yc(b){var a=la(),c;M(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=F(S(b.substr(0,c)));b=S(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&n(b,function(b,c){var f=F(c),g=S(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function Zc(b){var a;return function(c){a||(a=Yc(b));return c?(c=a[F(c)],void 0===c&&(c=null),
c):a}}function $c(b,a,c,d){if(E(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function We(){var b=this.defaults={transformResponse:[Xb],transformRequest:[function(a){return D(a)&&"[object File]"!==qa.call(a)&&"[object Blob]"!==qa.call(a)&&"[object FormData]"!==qa.call(a)?Ya(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(Yb),put:fa(Yb),patch:fa(Yb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=
function(b){return z(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=O({},a);b.data=a.data?$c(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};n(a,function(a,d){E(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ba.isObject(a))throw G("$http")("badreq",a);var e=O({method:"get",
transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=O({},a.headers),f,g,h,c=O({},c.common,c[F(a.method)]);a:for(f in c){g=F(f);for(h in e)if(F(h)===g)continue a;e[f]=c[f]}return d(e,fa(a))}(a);e.method=nb(e.method);e.paramSerializer=M(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=$c(a.data,Zc(d),t,a.transformRequest);v(e)&&n(d,function(a,b){"content-type"===
F(b)&&delete d[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(n(y,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Ma(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Ma(a,"fn");g.then(null,function(b){a(b.data,
b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}N&&(200<=b&&300>b?N.put(Y,[b,c,Yc(d),e]):N.remove(Y));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?K.resolve:K.reject)({data:a,status:b,headers:Zc(d),config:c,statusText:e})}function y(a){m(a.data,a.status,fa(a.headers()),a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var K=h.defer(),B=K.promise,
N,A,R=c.headers,Y=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);B.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=D(c.cache)?c.cache:D(b.cache)?b.cache:s);N&&(A=N.get(Y),z(A)?A&&E(A.then)?A.then(y,y):L(A)?m(A[1],A[0],fa(A[2]),A[3]):m(A,200,{},"OK"):N.put(Y,B));v(A)&&((A=ad(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(R[c.xsrfHeaderName||b.xsrfHeaderName]=A),d(c.method,Y,f,l,R,c.timeout,c.withCredentials,c.responseType));return B}function r(a,
b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=f("$http");b.paramSerializer=M(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var y=[];n(c,function(a){y.unshift(M(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(O(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(O(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=
b;return k}]}function Lf(){return new Q.XMLHttpRequest}function Ze(){this.$get=["$browser","$window","$document",function(b,a,c){return Mf(b,Lf,b.defer,a.angular.callbacks,c[0])}]}function Mf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,y="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),y=a.type,
g="error"===a.type?404:200);c&&c(g,y)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,r,s,y){function H(){p&&p();w&&w.abort()}function J(a,d,e,f,g){K!==t&&c.cancel(K);p=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(x)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==F(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,
function(a,b){J(k,a,d[u].data,"",b);d[u]=x})}else{var w=a();w.open(e,h,!0);n(m,function(a,b){z(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==za(h).protocol?404:0);J(k,c,b,w.getAllResponseHeaders(),a)};e=function(){J(k,-1,null,null,"")};w.onerror=e;w.onabort=e;s&&(w.withCredentials=!0);if(y)try{w.responseType=y}catch(q){if("json"!==y)throw q;}w.send(l)}if(0<r)var K=c(H,r);else r&&
E(r.then)&&r.then(H)}}function Ue(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(r,a)}function h(f,h,m,r){function u(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(r&&!z(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=
Ya(a)}c=a}return c}catch(g){d(Ha.interr(f,g))}}r=!!r;for(var p,n,q=0,K=[],B=[],N=f.length,A=[],R=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(n=f.indexOf(a,p+l)))q!==p&&A.push(g(f.substring(q,p))),q=f.substring(p+l,n),K.push(q),B.push(c(q,u)),q=n+k,R.push(A.length),A.push("");else{q!==N&&A.push(g(f.substring(q)));break}m&&1<A.length&&Ha.throwNoconcat(f);if(!h||K.length){var Y=function(a){for(var b=0,c=K.length;b<c;b++){if(r&&v(a[b]))return;A[R[b]]=a[b]}return A.join("")};return O(function(a){var b=0,c=
K.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return Y(e)}catch(g){d(Ha.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=Y(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function Ve(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,
h,l,k){var m=4<arguments.length,r=m?pa.call(arguments,4):[],s=a.setInterval,y=a.clearInterval,H=0,J=z(k)&&!k,u=(J?d:c).defer(),p=u.promise;l=z(l)?l:0;p.then(null,null,m?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(H++);0<l&&H>=l&&(u.resolve(H),y(p.$$intervalId),delete f[p.$$intervalId]);J||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],
!0):!1};return e}]}function ae(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);
return b.join("/")}function bd(b,a){var c=za(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||Nf[c.protocol]||null}function cd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=za(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function xa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function yb(b){return b.replace(/(#.+)|#$/,"$1")}function $b(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);bd(b,this);this.$$parse=function(a){var b=xa(c,a);if(!M(b))throw zb("ipthprfx",a,c);cd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=xa(b,d))!==t?(g=f,g=(f=xa(a,f))!==t?c+(xa("/",f)||f):b+g):(f=xa(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);bd(b,this);this.$$parse=function(d){d=xa(b,d)||xa(c,d);var e;"#"===d.charAt(0)?(e=xa(a,d),v(e)&&(e=d)):e=this.$$html5?d:"";cd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function dd(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=xa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ab(b){return function(){return this[b]}}function ed(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function $e(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):D(b)?(Va(b.enabled)&&(a.enabled=
b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),s;if(a.enabled){if(!m&&a.requireBase)throw zb("nobase");
s=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?ac:dd}else s=Fa(r),m=bc;k=new m(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var y=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=C(b.target);"a"!==ra(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=za(h.animVal).href);
y.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});yb(k.absUrl())!=yb(r)&&d.url(k.absUrl(),!0);var H=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(H=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=yb(d.url()),b=yb(k.absUrl()),f=d.state(),g=k.$$replace,m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(H||m)H=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function af(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function Aa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function ia(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function fd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Of||b===Pf||b===Qf)throw ca("isecff",
a);}}function Rf(b,a){return"undefined"!==typeof b?b:a}function gd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case q.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&
b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);
b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=
c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function hd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function id(b){return b.type===q.Identifier||b.type===q.MemberExpression}function jd(b){if(1===
b.body.length&&id(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function kd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function ld(b,a){this.astBuilder=b;this.$filter=a}function md(b,a){this.astBuilder=b;this.$filter=a}function Bb(b,a,c,d){ia(b,d);a=a.split(".");for(var e,f=0;1<
a.length;f++){e=Aa(a.shift(),d);var g=ia(b[e],d);g||(g={},b[e]=g);b=g}e=Aa(a.shift(),d);ia(b[e],d);return b[e]=c}function Cb(b){return"constructor"==b}function cc(b){return E(b.valueOf)?b.valueOf():Sf.call(b)}function bf(){var b=la(),a=la();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=cc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=
g(a);e(b,l)||(h=d(a,t,t,[b]),l=b&&cc(b));return h},b,c,f)}for(var k=[],m=[],r=0,A=g.length;r<A;r++)k[r]=e,m[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&cc(l)}b&&(h=d(a,t,t,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;n(a,function(a){z(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return z(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,H){var n,u,p;switch(typeof d){case "string":p=d=d.trim();var q=H?a:b;n=q[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),H=H?r:m,n=new dc(H),n=(new ec(n,c,H)).parse(d),n.constant?n.$$watchDelegate=l:u?n.$$watchDelegate=n.literal?h:g:n.inputs&&(n.$$watchDelegate=f),q[p]=n);return k(n,
e);case "function":return k(d,e);default:return x}}}]}function df(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return nd(function(a){b.$evalAsync(a)},a)}]}function ef(){this.$get=["$browser","$exceptionHandler",function(b,a){return nd(function(a){b.defer(a)},a)}]}function nd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(D(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function y(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof y))return new y(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new g,c=0,d=L(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function of(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||
b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function cf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++jb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=G("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&
(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++jb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=
b;while(a=a.$parent)}function y(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function t(){for(;K.length;)try{K.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=l.defer(function(){p.$apply(t)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,l=g.$$watchers,k={fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;E(b)||(k.fn=x);l||(l=g.$$watchers=[]);l.unshift(k);s(this,1);return function(){0<=Wa(l,k)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;
if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(D(e))if(Qa(e))for(f!==r&&(f=r,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],
g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==s&&(f=s={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,m=h(a,c),r=[],s={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(D(e))if(Qa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g=
{},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,s,n=a,y,K=[],u,v;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),t());d=null;do{s=!1;for(y=this;w.length;){try{v=w.shift(),v.scope.$eval(v.expression,v.locals)}catch(x){g(x)}d=null}a:do{if(k=y.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(y))!==(h=b.last)&&!(b.eq?ja(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?sa(f,null):f,b.fn(f,h===q?f:h,y),5>
n&&(u=4-n,K[u]||(K[u]=[]),K[u].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(C){g(C)}if(!(k=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(k=y.$$nextSibling);)y=y.$parent}while(y=k);if((s||w.length)&&!n--)throw p.$$phase=null,c("infdig",a,K);}while(s||w.length);for(p.$$phase=null;z.length;)try{z.shift()()}catch(D){g(D)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)y(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=
this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||w.length||l.defer(function(){w.length&&p.$digest()});w.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&K.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,y(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},
k=Xa([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Xa([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,w=p.$$asyncQueue=[],z=p.$$postDigestQueue=[],K=p.$$applyAsyncQueue=[];return p}]}function be(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Tf(b){if("self"===b)return b;if(M(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=od(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ta(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function pd(b){var a=[];z(b)&&n(b,function(b){a.push(Tf(b))});
return a}function gf(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=pd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=pd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?ad(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=za(e.toString()),r,s,y=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){y=!0;break}if(y)for(r=0,s=a.length;r<s;r++)if(d(a[r],g)){y=!1;break}if(y)return e;throw Ba("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function ff(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>fb)throw Ba("iequirks");var d=fa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Sa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;n(ma,function(a,b){var c=F(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function hf(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(F((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
l);!d||k&&m||(k=M(l.webkitTransition),m=M(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=fb)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function kf(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;L(g)?g=g.filter(function(a){return a!==
Xb}):g===Xb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ha("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function lf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=ba.element(a).data("$binding");d&&
n(d,function(d){c?(new RegExp("(^|\\s)"+od(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function mf(){this.$get=["$rootScope","$browser",
"$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){E(f)||(k=l,l=f,f=x);var m=pa.call(arguments,3),r=z(k)&&!k,s=(r?d:c).defer(),n=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,m))}catch(a){s.reject(a),e(a)}finally{delete g[n.$$timeoutId]}r||b.$apply()},l);n.$$timeoutId=q;g[q]=s;return n}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b){fb&&
(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function ad(b){b=M(b)?za(b):b;return b.protocol===qd.protocol&&b.host===qd.host}function nf(){this.$get=oa(Q)}function rd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function sf(){this.$get=rd}function Fc(b){function a(c,d){if(D(c)){var e={};n(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",sd);a("date",
td);a("filter",Uf);a("json",Vf);a("limitTo",Wf);a("lowercase",Xf);a("number",ud);a("orderBy",vd);a("uppercase",Yf)}function Uf(){return function(b,a,c){if(!L(b)){if(null==b)return b;throw G("filter")("notarray",b);}var d;switch(fc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Zf(a,c,d);break;default:return b}return b.filter(a)}}function Zf(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ja:E(a)||(a=function(a,b){if(v(a))return!1;if(null===a||null===b)return a===
b;var c;!(c=D(b))&&(c=D(a))&&(c=a,c=!(E(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=fc(b),g=fc(a);if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(L(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===
g){for(h in a)if(e=a[h],!E(e)&&!v(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function fc(b){return null===b?"null":typeof b}function sd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:wd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ud(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:wd(b,a.PATTERNS[0],a.GROUP_SEP,
a.DECIMAL_SEP,d)}}function wd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(xd)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(xd),h=g[0],g=
g[1]||"",r=0,s=a.lgSize,n=a.gSize;if(h.length>=s+n)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%n&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Db(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+
b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Db(e,a,d)}}function Eb(b,a){return function(c,d){var e=c["get"+b](),f=nb(a?"SHORT"+b:b);return d[f][e]}}function yd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function zd(b){return function(a){var c=yd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Db(a,b)}}function gc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function td(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||
e;M(c)&&(c=$f.test(c)?aa(c):a(c));T(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;e;)(k=ag.exec(e))?(h=Xa(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=qc(f,c.getTimezoneOffset()),c=Mb(c,f,!0));n(h,function(a){l=bg[a];g+=l?l(c,b.DATETIME_FORMATS,m):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Vf(){return function(b,a){v(a)&&(a=2);return Ya(b,a)}}function Wf(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):aa(a);
if(isNaN(a))return b;T(b)&&(b=b.toString());if(!L(b)&&!M(b))return b;c=!c||isNaN(c)?0:aa(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function vd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===
typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Qa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Sa;if(M(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,
b){return h(d(a),d(b))},c)});return pa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return oa(b)}function Ad(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Fb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Na(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,
a)});Wa(g,a)};Bd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Pa);d.addClass(b,Gb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Pa,Gb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=F(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=S(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Hb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(M(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
c.length-1));if(cg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
function s(a){return z(a)?ea(a)?a:c(a):t}Cd(e,f,g,h);gb(e,f,g,h,l,k);var n=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),n&&(b=Mb(b,n)),b):t});h.$formatters.push(function(a){if(a&&!ea(a))throw Ib("datefmt",a);if(r(a))return(q=a)&&n&&(q=Mb(q,n,!0)),m("date")(a,d,n);q=null;return""});if(z(g.min)||g.ngMin){var J;h.$validators.min=function(a){return!r(a)||v(J)||c(a)>=J};g.$observe("min",function(a){J=s(a);h.$validate()})}if(z(g.max)||
g.ngMax){var u;h.$validators.max=function(a){return!r(a)||v(u)||c(a)<=u};g.$observe("max",function(a){u=s(a);h.$validate()})}}}function Cd(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Dd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw G("ngModel")("constexpr",c,d);return b(a)}return e}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(n(a,function(a){b=b.concat(e(a))}),b):M(a)?a.split(" "):D(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,
1);h.$addClass(n)}else if(!ja(b,m)){var q=e(m),n=d(k,q),k=d(q,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=fa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Bd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,
c){b=b?"-"+vc(b,"-"):"";a(ib+b,!0===c);a(Ed+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Ed]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Fd(d.$pending)&&(d.$pending=t));Va(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Gd,!0),d.$valid=d.$invalid=t,c("",null)):(a(Gd,!1),d.$valid=
Fd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Fd(b){if(b)for(var a in b)return!1;return!0}var dg=/^\/(.+)\/([a-z]*)$/,F=function(b){return M(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,nb=function(b){return M(b)?b.toUpperCase():b},fb,C,ka,pa=[].slice,Gf=[].splice,eg=[].push,qa=Object.prototype.toString,Ca=G("ng"),ba=Q.angular||(Q.angular={}),bb,jb=0;fb=V.documentMode;x.$inject=
[];Sa.$inject=[];var L=Array.isArray,nc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,S=function(b){return M(b)?b.trim():b},od=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(z(ab.isActive_))return ab.isActive_;var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},lb=function(){if(z(lb.name_))return lb.name_;
var b,a,c=Ka.length,d,e;for(a=0;a<c;++a)if(d=Ka[a],b=V.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return lb.name_=e},Ka=["ng-","data-ng-","ng:","x-ng-"],Wd=/[A-Z]/g,wc=!1,Ob,na=1,Za=3,$d={full:"1.4.0-rc.1",major:1,minor:4,dot:0,codeName:"sartorial-chronography"};P.expando="ng339";var sb=P.cache={},yf=1;P._data=function(b){return this.cache[b[this.expando]]||{}};var tf=/([\:\-\_]+(.))/g,uf=/^moz([A-Z])/,fg={mouseleave:"mouseout",mouseenter:"mouseover"},Rb=G("jqLite"),
xf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Qb=/<|&#?\w+;/,vf=/<([\w:]+)/,wf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var La=P.prototype={ready:function(b){function a(){c||
(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),P(Q).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?C(this[b]):C(this[this.length+b])},length:0,push:eg,sort:[].sort,splice:[].splice},xb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){xb[F(b)]=b});var Nc={};n("input select option textarea button form details".split(" "),function(b){Nc[b]=
!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Tb,removeData:qb},function(b,a){P[a]=b});n({data:Tb,inheritedData:wb,scope:function(b){return C.data(b,"$scope")||wb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return C.data(b,"$isolateScope")||C.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return wb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:tb,css:function(b,
a,c){a=cb(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Za&&2!==d&&8!==d)if(d=F(a),xb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||x).specified?d:t;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===na||d===
Za?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(v(a)){if(b.multiple&&"select"===ra(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;pb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){P.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==tb&&b!==Kc?a:d)===t){if(D(a)){for(e=0;e<g;e++)if(b===Tb)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:qb,on:function a(c,d,e,f){if(z(f))throw Rb("onargs");if(Gc(c)){var g=rb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Bf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,fg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||
h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=C(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;pb(a);n(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===
na||11===d){c=new P(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;n(new P(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=C(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ub,detach:function(a){Ub(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new P(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:vb,removeClass:ub,toggleClass:function(a,
c,d){c&&n(c.split(" "),function(c){var f=d;v(f)&&(f=!tb(a,c));(f?vb:ub)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Sb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=rb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:g,target:a},c.type&&(e=O(e,c)),c=fa(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){P.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)v(g)?(g=a(this[h],c,e,f),z(g)&&(g=C(g))):Ic(g,a(this[h],c,e,f));return z(g)?g:this};P.prototype.bind=P.prototype.on;P.prototype.unbind=P.prototype.off});Oa.prototype={put:function(a,
c){this[Da(a,this.nextUid)]=c},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var c=this[a=Da(a,this.nextUid)];delete this[a];return c}};var rf=[function(){this.$get=[function(){return Oa}]}],Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gg=/,/,hg=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=G("$injector");$a.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw M(d)&&d||(d=a.name||Cf(a)),Ea("strictdi",d);c=a.toString().replace(Pc,
"");c=c.match(Qc);n(c[1].split(gg),function(a){a.replace(hg,function(a,c,d){e.push(d)})})}a.$inject=e}}else L(a)?(c=a.length-1,Ma(a[c],"fn"),e=a.slice(0,c)):Ma(a,"fn",!0);return e};var ig=G("$animate"),Oe=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Ne=function(){var a=new Oa,c=[];this.$get=["$$AnimateRunner","$rootScope",
function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=Df(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&vb(a,f);g&&ub(a,g)});a.remove(c)}});c.length=0})}return{enabled:x,on:x,off:x,pin:x,push:function(a,c,e,k){k&&k();e=e||{};e.from&&
a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Me=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw ig("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$animateQueue",
function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g||h.parent();c(f,g,h);return a.push(f,"enter",l)},move:function(f,g,h,l){g=g||h.parent();c(f,g,h);return a.push(f,"move",l)},leave:function(c,e){return a.push(c,"leave",e,function(){c.remove()})},
addClass:function(c,e,h){h=h||{};h.addClass=db(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=h||{};h.removeClass=db(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=l||{};l.addClass=db(l.addClass,e);l.removeClass=db(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=k||{};k.from=k.from?O(k.from,e):e;k.to=k.to?O(k.to,h):h;k.tempClasses=db(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ha=
G("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Tc=/^((?:x|data)[\:\-_])/i,Hf=G("$controller"),Rc=/^(\S+)(\s+as\s+(\w+))?$/,Xc="application/json",Yb={"Content-Type":Xc+";charset=utf-8"},Jf=/^\[|^\{(?!\{)/,Kf={"[":/]$/,"{":/}$/},If=/^\)\]\}',?\n/,Ha=ba.$interpolateMinErr=G("$interpolate");Ha.throwNoconcat=function(a){throw Ha("noconcat",a);};Ha.interr=function(a,c){return Ha("interr",a,c.toString())};var jg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Nf={http:80,https:443,ftp:21},zb=G("$location"),
kg={$$html5:!1,$$replace:!1,absUrl:Ab("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=jg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ab("$$protocol"),host:Ab("$$host"),port:Ab("$$port"),path:ed("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(M(a)||T(a))a=a.toString(),this.$$search=
sc(a);else if(D(a))a=sa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw zb("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ed("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([dd,bc,ac],function(a){a.prototype=Object.create(kg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw zb("nostate");this.$$state=
v(c)?null:c;return this}});var ca=G("$parse"),Of=Function.prototype.call,Pf=Function.prototype.apply,Qf=Function.prototype.bind,Jb=la();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Jb[a]=!0});var lg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Jb[c],f=Jb[d];Jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=lg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=sa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,
value:null},undefined:{type:q.Literal,value:t},"this":{type:q.ThisExpression}}};ld.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=jd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=hd(e.body);d.stage="inputs";n(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Aa,ia,fd,Rf,gd,a);this.state=
this.stage=t;f.literal=kd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,r;e=e||x;if(!g&&z(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:n(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Aa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Cb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Aa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Cb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,
r);d&&(d.computed=!1,d.name=a.property.name)}e(c)})},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),r=l+"("+m.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){m.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||
k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):r=l+"("+m.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r);e(c)})}));break;case q.AssignmentExpression:l=this.nextId();h={};if(!id(a.left))throw ca("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:m=
[];n(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){m.push(a)})});r="["+m.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){m.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+m.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=
a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},
if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(M(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
md.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=jd(e))g=this.recurse(f);f=hd(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=kd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Aa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Cb(a.name),c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Aa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=[],q=0;q<h.length;++q)n.push(h[q](a,d,e,g));a=f.apply(t,n,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var n=f(a,d,e,r),q;if(null!=n.value){ia(n.context,g.expression);fd(n.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(ia(h[t](a,d,e,r),
g.expression));q=ia(n.value.apply(n.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var n=e(a,d,h,r);a=f(a,d,h,r);ia(n.value,g.expression);n.context[n.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],n(a.properties,
function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=z(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=z(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=gd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(z(l)?l:0)-(z(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&ia(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),n,s;null!=m&&(n=c(g,h,l,k),Aa(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),s=m[n],ia(s,f));return d?{context:m,name:n,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Cb(c))&&ia(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var ec=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new md(this.ast,c):new ld(this.ast,c)};ec.prototype={constructor:ec,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};la();la();var Sf=Object.prototype.valueOf,Ba=G("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),X=V.createElement("a"),qd=za(Q.location.href);rd.$inject=["$document"];Fc.$inject=["$provide"];sd.$inject=["$locale"];ud.$inject=["$locale"];
var xd=".",bg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Eb("Month"),MMM:Eb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Eb("Day"),EEE:Eb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Db(Math[0<a?"floor":
"ceil"](a/60),2)+Db(Math.abs(a%60),2))},ww:zd(2),w:zd(1),G:gc,GG:gc,GGG:gc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},ag=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,$f=/^\-?\d+$/;td.$inject=["$locale"];var Xf=oa(F),Yf=oa(nb);vd.$inject=["$parse"];var ce=oa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===qa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),ob={};n(xb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});ob[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Oc,function(a,c){ob[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(dg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=wa("ng-"+a);ob[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===qa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),fb&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Fb={$addControl:x,$$renameControl:function(a,c){a.$name=c},$removeControl:x,$setValidity:x,
$setDirty:x,$setPristine:x,$setSubmitted:x};Ad.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Hd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Ad,compile:function(d,e){d.addClass(Pa).addClass(ib);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",
function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Bb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Bb(a,k.$name,t,k.$name),n.$$renameControl(k,c),Bb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Bb(a,e[f],t,k.$name);O(k,Fb)})}}}}}]},de=Hd(),qe=Hd(!0),cg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,mg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
ng=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,og=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Id=/^(\d{4})-(\d{2})-(\d{2})$/,Jd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Kd=/^(\d{4})-(\d\d)$/,Ld=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",Id,Hb(Id,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",Jd,Hb(Jd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ld,Hb(Ld,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(ea(a))return a;if(M(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=yd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:hb("month",Kd,Hb(Kd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Cd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:og.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!T(a))throw Ib("numfmt",a);a=a.toString()}return a});if(z(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||v(h)||a>=h};d.$observe("min",function(a){z(a)&&!T(a)&&(a=parseFloat(a,10));h=T(a)&&!isNaN(a)?a:t;e.$validate()})}if(z(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){z(a)&&
!T(a)&&(a=parseFloat(a,10));l=T(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||mg.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ng.test(d)}},radio:function(a,c,d,e){v(d.name)&&c.attr("name",++jb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Dd(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Dd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ja(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:x,button:x,submit:x,reset:x,file:x},zc=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Md[F(h.type)]||Md.text)(f,g,h,l[0],c,a,d,e)}}}}],pg=/^(true|false|\d+)$/,Ie=function(){return{restrict:"A",priority:100,compile:function(a,c){return pg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ie=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ke=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],je=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],He=oa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),le=ic("",!0),ne=ic("Odd",0),me=ic("Even",1),oe=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),pe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Ec={},qg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};qg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var se=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=mb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],te=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ba.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,q,t){var v=0,u,p,w,x=function(){p&&(p.remove(),p=null);u&&(u.$destroy(),u=null);w&&(d.leave(w).then(function(){p=null}),p=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!z(k)||k&&!f.$eval(k)||c()},n=++v;e?(a(e,!0).then(function(a){if(n===v){var c=f.$new();q.template=a;a=t(c,function(a){x();d.enter(a,null,g).then(h)});u=c;w=a;u.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){n===v&&(x(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(x(),q.template=null)})}}}}],Ke=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ue=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Ge=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?S(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?S(a):a)});return c}});e.$formatters.push(function(a){return L(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},ib="ng-valid",Ed="ng-invalid",Pa="ng-pristine",Gb="ng-dirty",Gd="ng-pending",Ib=new G("ngModel"),rg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,H=s,
J=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);E(d)&&(d=c(a));return d};H=function(a,c){E(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Ib("nonassign",d.ngModel,ta(e));};this.$render=x;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var w=e.inheritedData("$formController")||Fb,C=0;Bd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:w,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Gb);g.addClass(e,Pa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Pa);g.addClass(e,Gb);w.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(J);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!T(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Ib("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},x):h(!0)}function g(a,c){l===C&&p.$setValidity(a,c)}function h(a){l===C&&d(a)}C++;var l=C;(function(){var a=p.$$parserName||"parse";if(u===t)g(a,null);else return u||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(J);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=v(c)?t:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),v(c)){u=!1;break}T(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){H(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&z(e.debounce)&&(e=e.debounce,T(e)?d=e:T(e[c])?d=e[c]:T(e["default"])&&(d=e["default"]));h.cancel(J);d?J=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,x))}return c})}],Fe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:rg,priority:1,compile:function(c){c.addClass(Pa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Fb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],sg=/(\s+|^)default(\s+|$)/,Je=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=sa(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=S(this.$options.updateOn.replace(sg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},ve=Ja({terminal:!0,priority:1E3}),tg=G("ngOptions"),ug=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,De=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
var m=a.match(ug);if(!m)throw tg("iexp",a,ta(d));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:n);var v=a&&c(a)||d,x=t&&c(t),u=t?function(a,c){return x(e,c)}:function(a){return Da(a)},p=c(m[2]||m[1]),w=c(m[3]||""),z=c(m[4]||""),C=c(m[8]),B={},N=q?function(a,c){B[q]=c;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:t,getWatchables:c(C,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=N(a[d],d);d=u(a[d],f);c.push(d);m[2]&&(d=p(e,f),c.push(d));
m[4]&&(f=z(e,f),c.push(f))});return c}),getOptions:function(){var a=[],c={},d=C(e)||[];Object.keys(d).forEach(function(g){if("$"!==g.charAt(0)){var h=N(d[g],g),m=v(e,h);g=u(m,h);var n=p(e,h),r=w(e,h),h=z(e,h),m=new f(g,m,n,r,h);a.push(m);c[g]=m}});return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[u(a,N(a))]},getViewValueFromOption:function(a){return t?ba.copy(a.viewValue):a.viewValue}}}}}var e=V.createElement("option"),f=V.createElement("optgroup");return{restrict:"A",terminal:!0,
require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&F(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function q(a){for(var c;a;)c=a.nextSibling,Ub(a),a=c}function t(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function v(){var a=A&&u.readValue();
A=D.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=t(d);A.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){q(c[a].currentOptionElement)});q(d);x.$render();if(!x.$isEmpty(a)){var g=
u.readValue();if(D.trackBy&&!ja(a,g)||a!==g)x.$setViewValue(g),x.$render()}}var x=k[1];if(x){var u=k[0];k=l.multiple;for(var p,w=0,z=h.children(),K=z.length;w<K;w++)if(""===z[w].value){p=z.eq(w);break}var B=!!p,N=C(e.cloneNode(!1));N.val("?");var A,D=d(l.ngOptions,h,c);u.writeValue=function(a){var c=A.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||
B?(N.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(N),h.val("?"),N.prop("selected",!0),N.attr("selected",!0))};u.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(B||p.remove(),N.remove(),A.getViewValueFromOption(a)):null};k&&(x.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){A.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=A.getOptionFromViewValue(a))&&!a.disabled&&
(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){a=A.selectValueMap[a];a.disabled||c.push(A.getViewValueFromOption(a))});return c});B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=C(e.cloneNode(!1));v();c.$watchCollection(D.getWatchables,v);D.trackBy&&c.$watch(l.ngModel,function(){x.$render()},!0)}}}}],we=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,
r=l.$attr.when&&h.attr(l.$attr.when),q=l.offset||0,t=g.$eval(r)||{},z={},C=c.startSymbol(),u=c.endSymbol(),p=C+m+"-"+q+u,w=ba.noop,D;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+F(d[2]),t[d]=h.attr(l.$attr[c]))});n(t,function(a,d){z[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in t||(e=a.pluralCat(e-q));e===D||f&&T(D)&&isNaN(D)||(w(),f=z[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),w=x,k()):w=g.$watch(f,k),D=e)})}}}],xe=
["$parse","$animate",function(a,c){var d=G("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=V.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);
var m=k[1],r=k[2],q=k[3],v=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var x=k[3]||k[1],z=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var u,p,w,D,E={$id:Da};v?u=a(v):(w=function(a,c){return Da(c)},D=function(a){return a});return function(a,f,g,k,m){u&&(p=function(c,d,e){z&&(E[z]=c);E[x]=d;E.$index=e;return u(a,E)});
var v=la();a.$watchCollection(r,function(g){var k,r,u=f[0],y,A=la(),E,K,M,G,L,F,O;q&&(a[q]=g);if(Qa(g))L=g,r=p||w;else for(O in r=p||D,L=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&L.push(O);E=L.length;O=Array(E);for(k=0;k<E;k++)if(K=g===L?k:L[k],M=g[K],G=r(K,M,k),v[G])F=v[G],delete v[G],A[G]=F,O[k]=F;else{if(A[G])throw n(O,function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",h,G,M);O[k]={id:G,scope:t,clone:t};A[G]=!0}for(y in v){F=v[y];G=mb(F.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<
r;k++)G[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<E;k++)if(K=g===L?k:L[k],M=g[K],F=O[k],F.scope){y=u;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);F.clone[0]!=y&&c.move(mb(F.clone),null,C(u));u=F.clone[F.clone.length-1];e(F.scope,k,x,M,z,K,E)}else m(function(a,d){F.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,C(u));u=f;F.clone=a;A[F.id]=F;e(F.scope,k,x,M,z,K,E)});v=A})}}}}],ye=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],re=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ze=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ae=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,
d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=mb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],
Be=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ce=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ee=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw G("ngTransclude")("orphan",ta(c));f(function(a){c.empty();
c.append(a)})}}),ee=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-templates"==d.type&&a.put(d.id,c[0].text)}}}],vg={$setViewValue:x,$render:x},wg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Oa;e.ngModelCtrl=vg;e.unknownOption=C(V.createElement("option"));e.renderUnknownOption=function(c){c="? "+Da(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=x});e.removeUnknownOption=
function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):v(c)&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Na(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===
a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],fe=function(){return{restrict:"E",require:["select","?ngModel"],controller:wg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=
new Oa(a);n(c.find("option"),function(a){a.selected=z(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ja(h,f.$viewValue)||(h=fa(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},he=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=
k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],ge=oa({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,
c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){M(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",g,a,ta(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||v(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Xd(),Zd(ba),
C(V).ready(function(){Td(V,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-animate-anchor{position:absolute;}</style>');;
/**
 * @license AngularJS v1.4.0-rc.1
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

    /**
     * @ngdoc module
     * @name ngCookies
     * @description
     *
     * # ngCookies
     *
     * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.
     *
     *
     * <div doc-module-components="ngCookies"></div>
     *
     * See {@link ngCookies.$cookies `$cookies`} and
     * {@link ngCookies.$cookieStore `$cookieStore`} for usage.
     */


    angular.module('ngCookies', ['ng']).
    /**
     * @ngdoc provider
     * @name $cookiesProvider
     * @description
     * Use `$cookiesProvider` to change the default behavior of the {@link ngCookies.$cookies $cookies} service.
     * */
        provider('$cookies', [function $CookiesProvider() {
            /**
             * @ngdoc property
             * @name $cookiesProvider#defaults
             * @description
             *
             * Object containing default options to pass when setting cookies.
             *
             * The object may have following properties:
             *
             * - **path** - `{string}` - The cookie will be available only for this path and its
             *   sub-paths. By default, this would be the URL that appears in your basicComponents tag.
             * - **domain** - `{string}` - The cookie will be available only for this domain and
             *   its sub-domains. For obvious security reasons the user agent will not accept the
             *   cookie if the current domain is not a sub domain or equals to the requested domain.
             * - **expires** - `{string|Date}` - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
             *   or a Date object indicating the exact date/time this cookie will expire.
             * - **secure** - `{boolean}` - The cookie will be available only in secured connection.
             *
             * Note: by default the address that appears in your <basicComponents> tag will be used as path.
             * This is import so that cookies will be visible for all routes in case html5mode is enabled
             *
             **/
            var defaults = this.defaults = {};

            function calcOptions(options) {
                return options ? angular.extend({}, defaults, options) : defaults;
            }

            /**
             * @ngdoc service
             * @name $cookies
             *
             * @description
             * Provides read/write access to browser's cookies.
             *
             * BREAKING CHANGE: `$cookies` no longer exposes properties that represent the
             * current browser cookie values. Now you must use the get/put/remove/etc. methods
             * as described below.
             *
             * Requires the {@link ngCookies `ngCookies`} module to be installed.
             *
             * @example
             *
             * ```js
             * angular.module('cookiesExample', ['ngCookies'])
             *   .controller('ExampleController', ['$cookies', function($cookies) {
     *     // Retrieving a cookie
     *     var favoriteCookie = $cookies.get('myFavorite');
     *     // Setting a cookie
     *     $cookies.put('myFavorite', 'oatmeal');
     *   }]);
             * ```
             */
            this.$get = ['$$cookieReader', '$$cookieWriter', function($$cookieReader, $$cookieWriter) {
                return {
                    /**
                     * @ngdoc method
                     * @name $cookies#get
                     *
                     * @description
                     * Returns the value of given cookie key
                     *
                     * @param {string} key Id to use for lookup.
                     * @returns {string} Raw cookie value.
                     */
                    get: function(key) {
                        return $$cookieReader()[key];
                    },

                    /**
                     * @ngdoc method
                     * @name $cookies#getObject
                     *
                     * @description
                     * Returns the deserialized value of given cookie key
                     *
                     * @param {string} key Id to use for lookup.
                     * @returns {Object} Deserialized cookie value.
                     */
                    getObject: function(key) {
                        var value = this.get(key);
                        return value ? angular.fromJson(value) : value;
                    },

                    /**
                     * @ngdoc method
                     * @name $cookies#getAll
                     *
                     * @description
                     * Returns a key value object with all the cookies
                     *
                     * @returns {Object} All cookies
                     */
                    getAll: function() {
                        return $$cookieReader();
                    },

                    /**
                     * @ngdoc method
                     * @name $cookies#put
                     *
                     * @description
                     * Sets a value for given cookie key
                     *
                     * @param {string} key Id for the `value`.
                     * @param {string} value Raw value to be stored.
                     * @param {Object=} options Options object.
                     *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
                     */
                    put: function(key, value, options) {
                        $$cookieWriter(key, value, calcOptions(options));
                    },

                    /**
                     * @ngdoc method
                     * @name $cookies#putObject
                     *
                     * @description
                     * Serializes and sets a value for given cookie key
                     *
                     * @param {string} key Id for the `value`.
                     * @param {Object} value Value to be stored.
                     * @param {Object=} options Options object.
                     *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
                     */
                    putObject: function(key, value, options) {
                        this.put(key, angular.toJson(value), options);
                    },

                    /**
                     * @ngdoc method
                     * @name $cookies#remove
                     *
                     * @description
                     * Remove given cookie
                     *
                     * @param {string} key Id of the key-value pair to delete.
                     * @param {Object=} options Options object.
                     *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
                     */
                    remove: function(key, options) {
                        $$cookieWriter(key, undefined, calcOptions(options));
                    }
                };
            }];
        }]);

    angular.module('ngCookies').
    /**
     * @ngdoc service
     * @name $cookieStore
     * @deprecated
     * @requires $cookies
     *
     * @description
     * Provides a key-value (string-object) storage, that is backed by session cookies.
     * Objects put or retrieved from this storage are automatically serialized or
     * deserialized by angular's toJson/fromJson.
     *
     * Requires the {@link ngCookies `ngCookies`} module to be installed.
     *
     * <div class="alert alert-danger">
     * **Note:** The $cookieStore service is deprecated.
     * Please use the {@link ngCookies.$cookies `$cookies`} service instead.
     * </div>
     *
     * @example
     *
     * ```js
     * angular.module('cookieStoreExample', ['ngCookies'])
     *   .controller('ExampleController', ['$cookieStore', function($cookieStore) {
 *     // Put cookie
 *     $cookieStore.put('myFavorite','oatmeal');
 *     // Get cookie
 *     var favoriteCookie = $cookieStore.get('myFavorite');
 *     // Removing a cookie
 *     $cookieStore.remove('myFavorite');
 *   }]);
     * ```
     */
        factory('$cookieStore', ['$cookies', function($cookies) {

            return {
                /**
                 * @ngdoc method
                 * @name $cookieStore#get
                 *
                 * @description
                 * Returns the value of given cookie key
                 *
                 * @param {string} key Id to use for lookup.
                 * @returns {Object} Deserialized cookie value, undefined if the cookie does not exist.
                 */
                get: function(key) {
                    return $cookies.getObject(key);
                },

                /**
                 * @ngdoc method
                 * @name $cookieStore#put
                 *
                 * @description
                 * Sets a value for given cookie key
                 *
                 * @param {string} key Id for the `value`.
                 * @param {Object} value Value to be stored.
                 */
                put: function(key, value) {
                    $cookies.putObject(key, value);
                },

                /**
                 * @ngdoc method
                 * @name $cookieStore#remove
                 *
                 * @description
                 * Remove given cookie
                 *
                 * @param {string} key Id of the key-value pair to delete.
                 */
                remove: function(key) {
                    $cookies.remove(key);
                }
            };

        }]);

    /**
     * @name $$cookieWriter
     * @requires $document
     *
     * @description
     * This is a private service for writing cookies
     *
     * @param {string} name Cookie name
     * @param {string=} value Cookie value (if undefined, cookie will be deleted)
     * @param {Object=} options Object with options that need to be stored for the cookie.
     */
    function $$CookieWriter($document, $log, $browser) {
        var cookiePath = $browser.baseHref();
        var rawDocument = $document[0];

        function buildCookieString(name, value, options) {
            var path, expires;
            options = options || {};
            expires = options.expires;
            path = angular.isDefined(options.path) ? options.path : cookiePath;
            if (value === undefined) {
                expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
                value = '';
            }
            if (angular.isString(expires)) {
                expires = new Date(expires);
            }

            var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            str += path ? ';path=' + path : '';
            str += options.domain ? ';domain=' + options.domain : '';
            str += expires ? ';expires=' + expires.toUTCString() : '';
            str += options.secure ? ';secure' : '';

            // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
            // - 300 cookies
            // - 20 cookies per unique domain
            // - 4096 bytes per cookie
            var cookieLength = str.length + 1;
            if (cookieLength > 4096) {
                $log.warn("Cookie '" + name +
                "' possibly not set or overflowed because it was too large (" +
                cookieLength + " > 4096 bytes)!");
            }

            return str;
        }

        return function(name, value, options) {
            rawDocument.cookie = buildCookieString(name, value, options);
        };
    }

    $$CookieWriter.$inject = ['$document', '$log', '$browser'];

    angular.module('ngCookies').provider('$$cookieWriter', function $$CookieWriterProvider() {
        this.$get = $$CookieWriter;
    });


})(window, window.angular);;
/**
 * Angular Carousel - Mobile friendly touch carousel for AngularJS
 * @version v0.3.13 - 2015-06-15
 * @link http://revolunet.github.com/angular-carousel
 * @author Julien Bouquillon <julien@revolunet.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
/*global angular */

/*
 Angular touch carousel with CSS GPU accel and slide buffering
 http://github.com/revolunet/angular-carousel
 */

angular.module('angular-carousel', [
    'ngTouch',
    'angular-carousel.shifty'
]);

angular.module('angular-carousel')

    .directive('rnCarouselAutoSlide', ['$interval', function($interval) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var stopAutoPlay = function() {
                    if (scope.autoSlider) {
                        $interval.cancel(scope.autoSlider);
                        scope.autoSlider = null;
                    }
                };
                var restartTimer = function() {
                    scope.autoSlide();
                };

                scope.$watch('carouselIndex', restartTimer);

                if (attrs.hasOwnProperty('rnCarouselPauseOnHover') && attrs.rnCarouselPauseOnHover !== 'false'){
                    element.on('mouseenter', stopAutoPlay);
                    element.on('mouseleave', restartTimer);
                }

                scope.$on('$destroy', function(){
                    stopAutoPlay();
                    element.off('mouseenter', stopAutoPlay);
                    element.off('mouseleave', restartTimer);
                });
            }
        };
    }]);

angular.module('angular-carousel')

    .directive('rnCarouselIndicators', ['$parse', function($parse) {
        return {
            restrict: 'A',
            scope: {
                slides: '=',
                index: '=rnCarouselIndex'
            },
            templateUrl: 'carousel-indicators.html',
            link: function(scope, iElement, iAttributes) {
                var indexModel = $parse(iAttributes.rnCarouselIndex);
                scope.goToSlide = function(index) {
                    indexModel.assign(scope.$parent.$parent, index);
                };
            }
        };
    }]);

angular.module('angular-carousel').run(['$templateCache', function($templateCache) {
    $templateCache.put('carousel-indicators.html',
        '<div class="rn-carousel-indicator">\n' +
        '<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">●</span>' +
        '</div>'
    );
}]);

(function() {
    "use strict";

    angular.module('angular-carousel')

        .service('DeviceCapabilities', function() {

            // TODO: merge in a single function

            // detect supported CSS property
            function detectTransformProperty() {
                var transformProperty = 'transform',
                    safariPropertyHack = 'webkitTransform';
                if (typeof document.body.style[transformProperty] !== 'undefined') {

                    ['webkit', 'moz', 'o', 'ms'].every(function (prefix) {
                        var e = '-' + prefix + '-transform';
                        if (typeof document.body.style[e] !== 'undefined') {
                            transformProperty = e;
                            return false;
                        }
                        return true;
                    });
                } else if (typeof document.body.style[safariPropertyHack] !== 'undefined') {
                    transformProperty = '-webkit-transform';
                } else {
                    transformProperty = undefined;
                }
                return transformProperty;
            }

            //Detect support of translate3d
            function detect3dSupport() {
                var el = document.createElement('p'),
                    has3d,
                    transforms = {
                        'webkitTransform': '-webkit-transform',
                        'msTransform': '-ms-transform',
                        'transform': 'transform'
                    };
                // Add it to the body to get the computed style
                document.body.insertBefore(el, null);
                for (var t in transforms) {
                    if (el.style[t] !== undefined) {
                        el.style[t] = 'translate3d(1px,1px,1px)';
                        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                    }
                }
                document.body.removeChild(el);
                return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
            }

            return {
                has3d: detect3dSupport(),
                transformProperty: detectTransformProperty()
            };

        })

        .service('computeCarouselSlideStyle', ["DeviceCapabilities", function(DeviceCapabilities) {
            // compute transition transform properties for a given slide and global offset
            return function(slideIndex, offset, transitionType) {
                var style = {
                        display: 'inline-block'
                    },
                    opacity,
                    absoluteLeft = (slideIndex * 100) + offset,
                    slideTransformValue = DeviceCapabilities.has3d ? 'translate3d(' + absoluteLeft + '%, 0, 0)' : 'translate3d(' + absoluteLeft + '%, 0)',
                    distance = ((100 - Math.abs(absoluteLeft)) / 100);

                if (!DeviceCapabilities.transformProperty) {
                    // fallback to default slide if transformProperty is not available
                    style['margin-left'] = absoluteLeft + '%';
                } else {
                    if (transitionType == 'fadeAndSlide') {
                        style[DeviceCapabilities.transformProperty] = slideTransformValue;
                        opacity = 0;
                        if (Math.abs(absoluteLeft) < 100) {
                            opacity = 0.3 + distance * 0.7;
                        }
                        style.opacity = opacity;
                    } else if (transitionType == 'hexagon') {
                        var transformFrom = 100,
                            degrees = 0,
                            maxDegrees = 60 * (distance - 1);

                        transformFrom = offset < (slideIndex * -100) ? 100 : 0;
                        degrees = offset < (slideIndex * -100) ? maxDegrees : -maxDegrees;
                        style[DeviceCapabilities.transformProperty] = slideTransformValue + ' ' + 'rotateY(' + degrees + 'deg)';
                        style[DeviceCapabilities.transformProperty + '-origin'] = transformFrom + '% 50%';
                    } else if (transitionType == 'zoom') {
                        style[DeviceCapabilities.transformProperty] = slideTransformValue;
                        var scale = 1;
                        if (Math.abs(absoluteLeft) < 100) {
                            scale = 1 + ((1 - distance) * 2);
                        }
                        style[DeviceCapabilities.transformProperty] += ' scale(' + scale + ')';
                        style[DeviceCapabilities.transformProperty + '-origin'] = '50% 50%';
                        opacity = 0;
                        if (Math.abs(absoluteLeft) < 100) {
                            opacity = 0.3 + distance * 0.7;
                        }
                        style.opacity = opacity;
                    } else {
                        style[DeviceCapabilities.transformProperty] = slideTransformValue;
                    }
                }
                return style;
            };
        }])

        .service('createStyleString', function() {
            return function(object) {
                var styles = [];
                angular.forEach(object, function(value, key) {
                    styles.push(key + ':' + value);
                });
                return styles.join(';');
            };
        })

        .directive('rnCarousel', ['$swipe', '$window', '$document', '$parse', '$compile', '$timeout', '$interval', 'computeCarouselSlideStyle', 'createStyleString', 'Tweenable',
            function($swipe, $window, $document, $parse, $compile, $timeout, $interval, computeCarouselSlideStyle, createStyleString, Tweenable) {
                // internal ids to allow multiple instances
                var carouselId = 0,
                // in absolute pixels, at which distance the slide stick to the edge on release
                    rubberTreshold = 3;

                var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;

                function getItemIndex(collection, target, defaultIndex) {
                    var result = defaultIndex;
                    collection.every(function(item, index) {
                        if (angular.equals(item, target)) {
                            result = index;
                            return false;
                        }
                        return true;
                    });
                    return result;
                }

                return {
                    restrict: 'A',
                    scope: true,
                    compile: function(tElement, tAttributes) {
                        // use the compile phase to customize the DOM
                        var firstChild = tElement[0].querySelector('li'),
                            firstChildAttributes = (firstChild) ? firstChild.attributes : [],
                            isRepeatBased = false,
                            isBuffered = false,
                            repeatItem,
                            repeatCollection;

                        // try to find an ngRepeat expression
                        // at this point, the attributes are not yet normalized so we need to try various syntax
                        ['ng-repeat', 'data-ng-repeat', 'ng:repeat', 'x-ng-repeat'].every(function(attr) {
                            var repeatAttribute = firstChildAttributes[attr];
                            if (angular.isDefined(repeatAttribute)) {
                                // ngRepeat regexp extracted from angular 1.2.7 src
                                var exprMatch = repeatAttribute.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                                    trackProperty = exprMatch[3];

                                repeatItem = exprMatch[1];
                                repeatCollection = exprMatch[2];

                                if (repeatItem) {
                                    if (angular.isDefined(tAttributes['rnCarouselBuffered'])) {
                                        // update the current ngRepeat expression and add a slice operator if buffered
                                        isBuffered = true;
                                        repeatAttribute.value = repeatItem + ' in ' + repeatCollection + '|carouselSlice:carouselBufferIndex:carouselBufferSize';
                                        if (trackProperty) {
                                            repeatAttribute.value += ' track by ' + trackProperty;
                                        }
                                    }
                                    isRepeatBased = true;
                                    return false;
                                }
                            }
                            return true;
                        });

                        return function(scope, iElement, iAttributes, containerCtrl) {

                            carouselId++;

                            var defaultOptions = {
                                transitionType: iAttributes.rnCarouselTransition || 'slide',
                                transitionEasing: iAttributes.rnCarouselEasing || 'easeTo',
                                transitionDuration: parseInt(iAttributes.rnCarouselDuration, 10) || 300,
                                isSequential: true,
                                autoSlideDuration: 3,
                                bufferSize: 5,
                                /* in container % how much we need to drag to trigger the slide change */
                                moveTreshold: 0.1,
                                defaultIndex: 0
                            };

                            // TODO
                            var options = angular.extend({}, defaultOptions);

                            var pressed,
                                startX,
                                isIndexBound = false,
                                offset = 0,
                                destination,
                                swipeMoved = false,
                            //animOnIndexChange = true,
                                currentSlides = [],
                                elWidth = null,
                                elX = null,
                                animateTransitions = true,
                                intialState = true,
                                animating = false,
                                mouseUpBound = false,
                                locked = false;

                            //rn-swipe-disabled =true will only disable swipe events
                            if(iAttributes.rnSwipeDisabled !== "true") {
                                $swipe.bind(iElement, {
                                    start: swipeStart,
                                    move: swipeMove,
                                    end: swipeEnd,
                                    cancel: function(event) {
                                        swipeEnd({}, event);
                                    }
                                });
                            }

                            function getSlidesDOM() {
                                return iElement[0].querySelectorAll('ul[rn-carousel] > li');
                            }

                            function documentMouseUpEvent(event) {
                                // in case we click outside the carousel, trigger a fake swipeEnd
                                swipeMoved = true;
                                swipeEnd({
                                    x: event.clientX,
                                    y: event.clientY
                                }, event);
                            }

                            function updateSlidesPosition(offset) {
                                // manually apply transformation to carousel childrens
                                // todo : optim : apply only to visible items
                                var x = scope.carouselBufferIndex * 100 + offset;
                                angular.forEach(getSlidesDOM(), function(child, index) {
                                    child.style.cssText = createStyleString(computeCarouselSlideStyle(index, x, options.transitionType));
                                });
                            }

                            scope.nextSlide = function(slideOptions) {
                                var index = scope.carouselIndex + 1;
                                if (index > currentSlides.length - 1) {
                                    index = 0;
                                }
                                if (!locked) {
                                    goToSlide(index, slideOptions);
                                }
                            };

                            scope.prevSlide = function(slideOptions) {
                                var index = scope.carouselIndex - 1;
                                if (index < 0) {
                                    index = currentSlides.length - 1;
                                }
                                goToSlide(index, slideOptions);
                            };

                            function goToSlide(index, slideOptions) {
                                //console.log('goToSlide', arguments);
                                // move a to the given slide index
                                if (index === undefined) {
                                    index = scope.carouselIndex;
                                }

                                slideOptions = slideOptions || {};
                                if (slideOptions.animate === false || options.transitionType === 'none') {
                                    locked = false;
                                    offset = index * -100;
                                    scope.carouselIndex = index;
                                    updateBufferIndex();
                                    return;
                                }

                                locked = true;
                                var tweenable = new Tweenable();
                                tweenable.tween({
                                    from: {
                                        'x': offset
                                    },
                                    to: {
                                        'x': index * -100
                                    },
                                    duration: options.transitionDuration,
                                    easing: options.transitionEasing,
                                    step: function(state) {
                                        updateSlidesPosition(state.x);
                                    },
                                    finish: function() {
                                        scope.$apply(function() {
                                            scope.carouselIndex = index;
                                            offset = index * -100;
                                            updateBufferIndex();
                                            $timeout(function () {
                                                locked = false;
                                            }, 0, false);
                                        });
                                    }
                                });
                            }

                            function getContainerWidth() {
                                var rect = iElement[0].getBoundingClientRect();
                                return rect.width ? rect.width : rect.right - rect.left;
                            }

                            function updateContainerWidth() {
                                elWidth = getContainerWidth();
                            }

                            function bindMouseUpEvent() {
                                if (!mouseUpBound) {
                                    mouseUpBound = true;
                                    $document.bind('mouseup', documentMouseUpEvent);
                                }
                            }

                            function unbindMouseUpEvent() {
                                if (mouseUpBound) {
                                    mouseUpBound = false;
                                    $document.unbind('mouseup', documentMouseUpEvent);
                                }
                            }

                            function swipeStart(coords, event) {
                                // console.log('swipeStart', coords, event);
                                if (locked || currentSlides.length <= 1) {
                                    return;
                                }
                                updateContainerWidth();
                                elX = iElement[0].querySelector('li').getBoundingClientRect().left;
                                pressed = true;
                                startX = coords.x;
                                return false;
                            }

                            function swipeMove(coords, event) {
                                //console.log('swipeMove', coords, event);
                                var x, delta;
                                bindMouseUpEvent();
                                if (pressed) {
                                    x = coords.x;
                                    delta = startX - x;
                                    if (delta > 2 || delta < -2) {
                                        swipeMoved = true;
                                        var moveOffset = offset + (-delta * 100 / elWidth);
                                        updateSlidesPosition(moveOffset);
                                    }
                                }
                                return false;
                            }

                            var init = true;
                            scope.carouselIndex = 0;

                            if (!isRepeatBased) {
                                // fake array when no ng-repeat
                                currentSlides = [];
                                angular.forEach(getSlidesDOM(), function(node, index) {
                                    currentSlides.push({id: index});
                                });
                            }

                            if (iAttributes.rnCarouselControls!==undefined) {
                                // dont use a directive for this
                                var canloop = ((isRepeatBased ? scope[repeatCollection.replace('::', '')].length : currentSlides.length) > 1) ? angular.isDefined(tAttributes['rnCarouselControlsAllowLoop']) : false;
                                var nextSlideIndexCompareValue = isRepeatBased ? repeatCollection.replace('::', '') + '.length - 1' : currentSlides.length - 1;
                                var tpl = '<div class="rn-carousel-controls">\n' +
                                    '  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0 || ' + canloop + '"></span>\n' +
                                    '  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < ' + nextSlideIndexCompareValue + ' || ' + canloop + '"></span>\n' +
                                    '</div>';
                                iElement.parent().append($compile(angular.element(tpl))(scope));
                            }

                            if (iAttributes.rnCarouselAutoSlide!==undefined) {
                                var duration = parseInt(iAttributes.rnCarouselAutoSlide, 10) || options.autoSlideDuration;
                                scope.autoSlide = function() {
                                    if (scope.autoSlider) {
                                        $interval.cancel(scope.autoSlider);
                                        scope.autoSlider = null;
                                    }
                                    scope.autoSlider = $interval(function() {
                                        if (!locked && !pressed) {
                                            scope.nextSlide();
                                        }
                                    }, duration * 1000);
                                };
                            }

                            if (iAttributes.rnCarouselDefaultIndex) {
                                var defaultIndexModel = $parse(iAttributes.rnCarouselDefaultIndex);
                                options.defaultIndex = defaultIndexModel(scope.$parent) || 0;
                            }

                            if (iAttributes.rnCarouselIndex) {
                                var updateParentIndex = function(value) {
                                    indexModel.assign(scope.$parent, value);
                                };
                                var indexModel = $parse(iAttributes.rnCarouselIndex);
                                if (angular.isFunction(indexModel.assign)) {
                                    /* check if this property is assignable then watch it */
                                    scope.$watch('carouselIndex', function(newValue) {
                                        updateParentIndex(newValue);
                                    });
                                    scope.$parent.$watch(indexModel, function(newValue, oldValue) {

                                        if (newValue !== undefined && newValue !== null) {
                                            if (currentSlides && currentSlides.length > 0 && newValue >= currentSlides.length) {
                                                newValue = currentSlides.length - 1;
                                                updateParentIndex(newValue);
                                            } else if (currentSlides && newValue < 0) {
                                                newValue = 0;
                                                updateParentIndex(newValue);
                                            }
                                            if (!locked) {
                                                goToSlide(newValue, {
                                                    animate: !init
                                                });
                                            }
                                            init = false;
                                        }
                                    });
                                    isIndexBound = true;

                                    if (options.defaultIndex) {
                                        goToSlide(options.defaultIndex, {
                                            animate: !init
                                        });
                                    }
                                } else if (!isNaN(iAttributes.rnCarouselIndex)) {
                                    /* if user just set an initial number, set it */
                                    goToSlide(parseInt(iAttributes.rnCarouselIndex, 10), {
                                        animate: false
                                    });
                                }
                            } else {
                                goToSlide(options.defaultIndex, {
                                    animate: !init
                                });
                                init = false;
                            }

                            if (iAttributes.rnCarouselLocked) {
                                scope.$watch(iAttributes.rnCarouselLocked, function(newValue, oldValue) {
                                    // only bind swipe when it's not switched off
                                    if(newValue === true) {
                                        locked = true;
                                    } else {
                                        locked = false;
                                    }
                                });
                            }

                            if (isRepeatBased) {
                                // use rn-carousel-deep-watch to fight the Angular $watchCollection weakness : https://github.com/angular/angular.js/issues/2621
                                // optional because it have some performance impacts (deep watch)
                                var deepWatch = (iAttributes.rnCarouselDeepWatch!==undefined);

                                scope[deepWatch?'$watch':'$watchCollection'](repeatCollection, function(newValue, oldValue) {
                                    //console.log('repeatCollection', currentSlides);
                                    currentSlides = newValue;
                                    // if deepWatch ON ,manually compare objects to guess the new position
                                    if (deepWatch && angular.isArray(newValue)) {
                                        var activeElement = oldValue[scope.carouselIndex];
                                        var newIndex = getItemIndex(newValue, activeElement, scope.carouselIndex);
                                        goToSlide(newIndex, {animate: false});
                                    } else {
                                        goToSlide(scope.carouselIndex, {animate: false});
                                    }
                                }, true);
                            }

                            function swipeEnd(coords, event, forceAnimation) {
                                //  console.log('swipeEnd', 'scope.carouselIndex', scope.carouselIndex);
                                // Prevent clicks on buttons inside slider to trigger "swipeEnd" event on touchend/mouseup
                                // console.log(iAttributes.rnCarouselOnInfiniteScroll);
                                if (event && !swipeMoved) {
                                    return;
                                }
                                unbindMouseUpEvent();
                                pressed = false;
                                swipeMoved = false;
                                destination = startX - coords.x;
                                if (destination===0) {
                                    return;
                                }
                                if (locked) {
                                    return;
                                }
                                offset += (-destination * 100 / elWidth);
                                if (options.isSequential) {
                                    var minMove = options.moveTreshold * elWidth,
                                        absMove = -destination,
                                        slidesMove = -Math[absMove >= 0 ? 'ceil' : 'floor'](absMove / elWidth),
                                        shouldMove = Math.abs(absMove) > minMove;

                                    if (currentSlides && (slidesMove + scope.carouselIndex) >= currentSlides.length) {
                                        slidesMove = currentSlides.length - 1 - scope.carouselIndex;
                                    }
                                    if ((slidesMove + scope.carouselIndex) < 0) {
                                        slidesMove = -scope.carouselIndex;
                                    }
                                    var moveOffset = shouldMove ? slidesMove : 0;

                                    destination = (scope.carouselIndex + moveOffset);

                                    goToSlide(destination);
                                    if(iAttributes.rnCarouselOnInfiniteScrollRight!==undefined && slidesMove === 0 && scope.carouselIndex !== 0) {
                                        $parse(iAttributes.rnCarouselOnInfiniteScrollRight)(scope)
                                        goToSlide(0);
                                    }
                                    if(iAttributes.rnCarouselOnInfiniteScrollLeft!==undefined && slidesMove === 0 && scope.carouselIndex === 0 && moveOffset === 0) {
                                        $parse(iAttributes.rnCarouselOnInfiniteScrollLeft)(scope)
                                        goToSlide(currentSlides.length);
                                    }

                                } else {
                                    scope.$apply(function() {
                                        scope.carouselIndex = parseInt(-offset / 100, 10);
                                        updateBufferIndex();
                                    });

                                }

                            }

                            scope.$on('$destroy', function() {
                                unbindMouseUpEvent();
                            });

                            scope.carouselBufferIndex = 0;
                            scope.carouselBufferSize = options.bufferSize;

                            function updateBufferIndex() {
                                // update and cap te buffer index
                                var bufferIndex = 0;
                                var bufferEdgeSize = (scope.carouselBufferSize - 1) / 2;
                                if (isBuffered) {
                                    if (scope.carouselIndex <= bufferEdgeSize) {
                                        // first buffer part
                                        bufferIndex = 0;
                                    } else if (currentSlides && currentSlides.length < scope.carouselBufferSize) {
                                        // smaller than buffer
                                        bufferIndex = 0;
                                    } else if (currentSlides && scope.carouselIndex > currentSlides.length - scope.carouselBufferSize) {
                                        // last buffer part
                                        bufferIndex = currentSlides.length - scope.carouselBufferSize;
                                    } else {
                                        // compute buffer start
                                        bufferIndex = scope.carouselIndex - bufferEdgeSize;
                                    }

                                    scope.carouselBufferIndex = bufferIndex;
                                    $timeout(function() {
                                        updateSlidesPosition(offset);
                                    }, 0, false);
                                } else {
                                    $timeout(function() {
                                        updateSlidesPosition(offset);
                                    }, 0, false);
                                }
                            }

                            function onOrientationChange() {
                                updateContainerWidth();
                                goToSlide();
                            }

                            // handle orientation change
                            var winEl = angular.element($window);
                            winEl.bind('orientationchange', onOrientationChange);
                            winEl.bind('resize', onOrientationChange);

                            scope.$on('$destroy', function() {
                                unbindMouseUpEvent();
                                winEl.unbind('orientationchange', onOrientationChange);
                                winEl.unbind('resize', onOrientationChange);
                            });
                        };
                    }
                };
            }
        ]);
})();



angular.module('angular-carousel.shifty', [])

    .factory('Tweenable', function() {

        /*! shifty - v1.3.4 - 2014-10-29 - http://jeremyckahn.github.io/shifty */
        ;(function (root) {

            /*!
             * Shifty Core
             * By Jeremy Kahn - jeremyckahn@gmail.com
             */

            var Tweenable = (function () {

                'use strict';

                // Aliases that get defined later in this function
                var formula;

                // CONSTANTS
                var DEFAULT_SCHEDULE_FUNCTION;
                var DEFAULT_EASING = 'linear';
                var DEFAULT_DURATION = 500;
                var UPDATE_TIME = 1000 / 60;

                var _now = Date.now
                    ? Date.now
                    : function () {return +new Date();};

                var now = typeof SHIFTY_DEBUG_NOW !== 'undefined' ? SHIFTY_DEBUG_NOW : _now;

                if (typeof window !== 'undefined') {
                    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
                    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
                    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
                        || window.webkitRequestAnimationFrame
                        || window.oRequestAnimationFrame
                        || window.msRequestAnimationFrame
                        || (window.mozCancelRequestAnimationFrame
                        && window.mozRequestAnimationFrame)
                        || setTimeout;
                } else {
                    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
                }

                function noop () {
                    // NOOP!
                }

                /*!
                 * Handy shortcut for doing a for-in loop. This is not a "normal" each
                 * function, it is optimized for Shifty.  The iterator function only receives
                 * the property name, not the value.
                 * @param {Object} obj
                 * @param {Function(string)} fn
                 */
                function each (obj, fn) {
                    var key;
                    for (key in obj) {
                        if (Object.hasOwnProperty.call(obj, key)) {
                            fn(key);
                        }
                    }
                }

                /*!
                 * Perform a shallow copy of Object properties.
                 * @param {Object} targetObject The object to copy into
                 * @param {Object} srcObject The object to copy from
                 * @return {Object} A reference to the augmented `targetObj` Object
                 */
                function shallowCopy (targetObj, srcObj) {
                    each(srcObj, function (prop) {
                        targetObj[prop] = srcObj[prop];
                    });

                    return targetObj;
                }

                /*!
                 * Copies each property from src onto target, but only if the property to
                 * copy to target is undefined.
                 * @param {Object} target Missing properties in this Object are filled in
                 * @param {Object} src
                 */
                function defaults (target, src) {
                    each(src, function (prop) {
                        if (typeof target[prop] === 'undefined') {
                            target[prop] = src[prop];
                        }
                    });
                }

                /*!
                 * Calculates the interpolated tween values of an Object for a given
                 * timestamp.
                 * @param {Number} forPosition The position to compute the state for.
                 * @param {Object} currentState Current state properties.
                 * @param {Object} originalState: The original state properties the Object is
                 * tweening from.
                 * @param {Object} targetState: The destination state properties the Object
                 * is tweening to.
                 * @param {number} duration: The length of the tween in milliseconds.
                 * @param {number} timestamp: The UNIX epoch time at which the tween began.
                 * @param {Object} easing: This Object's keys must correspond to the keys in
                 * targetState.
                 */
                function tweenProps (forPosition, currentState, originalState, targetState,
                                     duration, timestamp, easing) {
                    var normalizedPosition = (forPosition - timestamp) / duration;

                    var prop;
                    for (prop in currentState) {
                        if (currentState.hasOwnProperty(prop)) {
                            currentState[prop] = tweenProp(originalState[prop],
                                targetState[prop], formula[easing[prop]], normalizedPosition);
                        }
                    }

                    return currentState;
                }

                /*!
                 * Tweens a single property.
                 * @param {number} start The value that the tween started from.
                 * @param {number} end The value that the tween should end at.
                 * @param {Function} easingFunc The easing curve to apply to the tween.
                 * @param {number} position The normalized position (between 0.0 and 1.0) to
                 * calculate the midpoint of 'start' and 'end' against.
                 * @return {number} The tweened value.
                 */
                function tweenProp (start, end, easingFunc, position) {
                    return start + (end - start) * easingFunc(position);
                }

                /*!
                 * Applies a filter to Tweenable instance.
                 * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
                 * upon.
                 * @param {String} filterName The name of the filter to apply.
                 */
                function applyFilter (tweenable, filterName) {
                    var filters = Tweenable.prototype.filter;
                    var args = tweenable._filterArgs;

                    each(filters, function (name) {
                        if (typeof filters[name][filterName] !== 'undefined') {
                            filters[name][filterName].apply(tweenable, args);
                        }
                    });
                }

                var timeoutHandler_endTime;
                var timeoutHandler_currentTime;
                var timeoutHandler_isEnded;
                var timeoutHandler_offset;
                /*!
                 * Handles the update logic for one step of a tween.
                 * @param {Tweenable} tweenable
                 * @param {number} timestamp
                 * @param {number} duration
                 * @param {Object} currentState
                 * @param {Object} originalState
                 * @param {Object} targetState
                 * @param {Object} easing
                 * @param {Function(Object, *, number)} step
                 * @param {Function(Function,number)}} schedule
                 */
                function timeoutHandler (tweenable, timestamp, duration, currentState,
                                         originalState, targetState, easing, step, schedule) {
                    timeoutHandler_endTime = timestamp + duration;
                    timeoutHandler_currentTime = Math.min(now(), timeoutHandler_endTime);
                    timeoutHandler_isEnded =
                        timeoutHandler_currentTime >= timeoutHandler_endTime;

                    timeoutHandler_offset = duration - (
                        timeoutHandler_endTime - timeoutHandler_currentTime);

                    if (tweenable.isPlaying() && !timeoutHandler_isEnded) {
                        tweenable._scheduleId = schedule(tweenable._timeoutHandler, UPDATE_TIME);

                        applyFilter(tweenable, 'beforeTween');
                        tweenProps(timeoutHandler_currentTime, currentState, originalState,
                            targetState, duration, timestamp, easing);
                        applyFilter(tweenable, 'afterTween');

                        step(currentState, tweenable._attachment, timeoutHandler_offset);
                    } else if (timeoutHandler_isEnded) {
                        step(targetState, tweenable._attachment, timeoutHandler_offset);
                        tweenable.stop(true);
                    }
                }


                /*!
                 * Creates a usable easing Object from either a string or another easing
                 * Object.  If `easing` is an Object, then this function clones it and fills
                 * in the missing properties with "linear".
                 * @param {Object} fromTweenParams
                 * @param {Object|string} easing
                 */
                function composeEasingObject (fromTweenParams, easing) {
                    var composedEasing = {};

                    if (typeof easing === 'string') {
                        each(fromTweenParams, function (prop) {
                            composedEasing[prop] = easing;
                        });
                    } else {
                        each(fromTweenParams, function (prop) {
                            if (!composedEasing[prop]) {
                                composedEasing[prop] = easing[prop] || DEFAULT_EASING;
                            }
                        });
                    }

                    return composedEasing;
                }

                /**
                 * Tweenable constructor.
                 * @param {Object=} opt_initialState The values that the initial tween should start at if a "from" object is not provided to Tweenable#tween.
                 * @param {Object=} opt_config See Tweenable.prototype.setConfig()
                 * @constructor
                 */
                function Tweenable (opt_initialState, opt_config) {
                    this._currentState = opt_initialState || {};
                    this._configured = false;
                    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

                    // To prevent unnecessary calls to setConfig do not set default configuration here.
                    // Only set default configuration immediately before tweening if none has been set.
                    if (typeof opt_config !== 'undefined') {
                        this.setConfig(opt_config);
                    }
                }

                /**
                 * Configure and start a tween.
                 * @param {Object=} opt_config See Tweenable.prototype.setConfig()
                 * @return {Tweenable}
                 */
                Tweenable.prototype.tween = function (opt_config) {
                    if (this._isTweening) {
                        return this;
                    }

                    // Only set default config if no configuration has been set previously and none is provided now.
                    if (opt_config !== undefined || !this._configured) {
                        this.setConfig(opt_config);
                    }

                    this._timestamp = now();
                    this._start(this.get(), this._attachment);
                    return this.resume();
                };

                /**
                 * Sets the tween configuration. `config` may have the following options:
                 *
                 * - __from__ (_Object=_): Starting position.  If omitted, the current state is used.
                 * - __to__ (_Object=_): Ending position.
                 * - __duration__ (_number=_): How many milliseconds to animate for.
                 * - __start__ (_Function(Object)_): Function to execute when the tween begins.  Receives the state of the tween as the first parameter. Attachment is the second parameter.
                 * - __step__ (_Function(Object, *, number)_): Function to execute on every tick.  Receives the state of the tween as the first parameter. Attachment is the second parameter, and the time elapsed since the start of the tween is the third parameter. This function is not called on the final step of the animation, but `finish` is.
                 * - __finish__ (_Function(Object, *)_): Function to execute upon tween completion.  Receives the state of the tween as the first parameter. Attachment is the second parameter.
                 * - __easing__ (_Object|string=_): Easing curve name(s) to use for the tween.
                 * - __attachment__ (_Object|string|any=_): Value that is attached to this instance and passed on to the step/start/finish methods.
                 * @param {Object} config
                 * @return {Tweenable}
                 */
                Tweenable.prototype.setConfig = function (config) {
                    config = config || {};
                    this._configured = true;

                    // Attach something to this Tweenable instance (e.g.: a DOM element, an object, a string, etc.);
                    this._attachment = config.attachment;

                    // Init the internal state
                    this._pausedAtTime = null;
                    this._scheduleId = null;
                    this._start = config.start || noop;
                    this._step = config.step || noop;
                    this._finish = config.finish || noop;
                    this._duration = config.duration || DEFAULT_DURATION;
                    this._currentState = config.from || this.get();
                    this._originalState = this.get();
                    this._targetState = config.to || this.get();

                    // Aliases used below
                    var currentState = this._currentState;
                    var targetState = this._targetState;

                    // Ensure that there is always something to tween to.
                    defaults(targetState, currentState);

                    this._easing = composeEasingObject(
                        currentState, config.easing || DEFAULT_EASING);

                    this._filterArgs =
                        [currentState, this._originalState, targetState, this._easing];

                    applyFilter(this, 'tweenCreated');
                    return this;
                };

                /**
                 * Gets the current state.
                 * @return {Object}
                 */
                Tweenable.prototype.get = function () {
                    return shallowCopy({}, this._currentState);
                };

                /**
                 * Sets the current state.
                 * @param {Object} state
                 */
                Tweenable.prototype.set = function (state) {
                    this._currentState = state;
                };

                /**
                 * Pauses a tween.  Paused tweens can be resumed from the point at which they were paused.  This is different than [`stop()`](#stop), as that method causes a tween to start over when it is resumed.
                 * @return {Tweenable}
                 */
                Tweenable.prototype.pause = function () {
                    this._pausedAtTime = now();
                    this._isPaused = true;
                    return this;
                };

                /**
                 * Resumes a paused tween.
                 * @return {Tweenable}
                 */
                Tweenable.prototype.resume = function () {
                    if (this._isPaused) {
                        this._timestamp += now() - this._pausedAtTime;
                    }

                    this._isPaused = false;
                    this._isTweening = true;

                    var self = this;
                    this._timeoutHandler = function () {
                        timeoutHandler(self, self._timestamp, self._duration, self._currentState,
                            self._originalState, self._targetState, self._easing, self._step,
                            self._scheduleFunction);
                    };

                    this._timeoutHandler();

                    return this;
                };

                /**
                 * Move the state of the animation to a specific point in the tween's timeline.
                 * If the animation is not running, this will cause the `step` handlers to be
                 * called.
                 * @param {millisecond} millisecond The millisecond of the animation to seek to.
                 * @return {Tweenable}
                 */
                Tweenable.prototype.seek = function (millisecond) {
                    this._timestamp = now() - millisecond;

                    if (!this.isPlaying()) {
                        this._isTweening = true;
                        this._isPaused = false;

                        // If the animation is not running, call timeoutHandler to make sure that
                        // any step handlers are run.
                        timeoutHandler(this, this._timestamp, this._duration, this._currentState,
                            this._originalState, this._targetState, this._easing, this._step,
                            this._scheduleFunction);

                        this._timeoutHandler();
                        this.pause();
                    }

                    return this;
                };

                /**
                 * Stops and cancels a tween.
                 * @param {boolean=} gotoEnd If false or omitted, the tween just stops at its current state, and the "finish" handler is not invoked.  If true, the tweened object's values are instantly set to the target values, and "finish" is invoked.
                 * @return {Tweenable}
                 */
                Tweenable.prototype.stop = function (gotoEnd) {
                    this._isTweening = false;
                    this._isPaused = false;
                    this._timeoutHandler = noop;

                    (root.cancelAnimationFrame            ||
                    root.webkitCancelAnimationFrame     ||
                    root.oCancelAnimationFrame          ||
                    root.msCancelAnimationFrame         ||
                    root.mozCancelRequestAnimationFrame ||
                    root.clearTimeout)(this._scheduleId);

                    if (gotoEnd) {
                        shallowCopy(this._currentState, this._targetState);
                        applyFilter(this, 'afterTweenEnd');
                        this._finish.call(this, this._currentState, this._attachment);
                    }

                    return this;
                };

                /**
                 * Returns whether or not a tween is running.
                 * @return {boolean}
                 */
                Tweenable.prototype.isPlaying = function () {
                    return this._isTweening && !this._isPaused;
                };

                /**
                 * Sets a custom schedule function.
                 *
                 * If a custom function is not set the default one is used [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame) if available, otherwise [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)).
                 *
                 * @param {Function(Function,number)} scheduleFunction The function to be called to schedule the next frame to be rendered
                 */
                Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
                    this._scheduleFunction = scheduleFunction;
                };

                /**
                 * `delete`s all "own" properties.  Call this when the `Tweenable` instance is no longer needed to free memory.
                 */
                Tweenable.prototype.dispose = function () {
                    var prop;
                    for (prop in this) {
                        if (this.hasOwnProperty(prop)) {
                            delete this[prop];
                        }
                    }
                };

                /*!
                 * Filters are used for transforming the properties of a tween at various
                 * points in a Tweenable's life cycle.  See the README for more info on this.
                 */
                Tweenable.prototype.filter = {};

                /*!
                 * This object contains all of the tweens available to Shifty.  It is extendible - simply attach properties to the Tweenable.prototype.formula Object following the same format at linear.
                 *
                 * `pos` should be a normalized `number` (between 0 and 1).
                 */
                Tweenable.prototype.formula = {
                    linear: function (pos) {
                        return pos;
                    }
                };

                formula = Tweenable.prototype.formula;

                shallowCopy(Tweenable, {
                    'now': now
                    ,'each': each
                    ,'tweenProps': tweenProps
                    ,'tweenProp': tweenProp
                    ,'applyFilter': applyFilter
                    ,'shallowCopy': shallowCopy
                    ,'defaults': defaults
                    ,'composeEasingObject': composeEasingObject
                });

                root.Tweenable = Tweenable;
                return Tweenable;

            } ());

            /*!
             * All equations are adapted from Thomas Fuchs' [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
             *
             * Based on Easing Equations (c) 2003 [Robert Penner](http://www.robertpenner.com/), all rights reserved. This work is [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
             */

            /*!
             *  TERMS OF USE - EASING EQUATIONS
             *  Open source under the BSD License.
             *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
             */

            ;(function () {

                Tweenable.shallowCopy(Tweenable.prototype.formula, {
                    easeInQuad: function (pos) {
                        return Math.pow(pos, 2);
                    },

                    easeOutQuad: function (pos) {
                        return -(Math.pow((pos - 1), 2) - 1);
                    },

                    easeInOutQuad: function (pos) {
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
                        return -0.5 * ((pos -= 2) * pos - 2);
                    },

                    easeInCubic: function (pos) {
                        return Math.pow(pos, 3);
                    },

                    easeOutCubic: function (pos) {
                        return (Math.pow((pos - 1), 3) + 1);
                    },

                    easeInOutCubic: function (pos) {
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
                        return 0.5 * (Math.pow((pos - 2),3) + 2);
                    },

                    easeInQuart: function (pos) {
                        return Math.pow(pos, 4);
                    },

                    easeOutQuart: function (pos) {
                        return -(Math.pow((pos - 1), 4) - 1);
                    },

                    easeInOutQuart: function (pos) {
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
                        return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
                    },

                    easeInQuint: function (pos) {
                        return Math.pow(pos, 5);
                    },

                    easeOutQuint: function (pos) {
                        return (Math.pow((pos - 1), 5) + 1);
                    },

                    easeInOutQuint: function (pos) {
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
                        return 0.5 * (Math.pow((pos - 2),5) + 2);
                    },

                    easeInSine: function (pos) {
                        return -Math.cos(pos * (Math.PI / 2)) + 1;
                    },

                    easeOutSine: function (pos) {
                        return Math.sin(pos * (Math.PI / 2));
                    },

                    easeInOutSine: function (pos) {
                        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                    },

                    easeInExpo: function (pos) {
                        return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
                    },

                    easeOutExpo: function (pos) {
                        return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
                    },

                    easeInOutExpo: function (pos) {
                        if (pos === 0) {return 0;}
                        if (pos === 1) {return 1;}
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
                        return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
                    },

                    easeInCirc: function (pos) {
                        return -(Math.sqrt(1 - (pos * pos)) - 1);
                    },

                    easeOutCirc: function (pos) {
                        return Math.sqrt(1 - Math.pow((pos - 1), 2));
                    },

                    easeInOutCirc: function (pos) {
                        if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
                        return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
                    },

                    easeOutBounce: function (pos) {
                        if ((pos) < (1 / 2.75)) {
                            return (7.5625 * pos * pos);
                        } else if (pos < (2 / 2.75)) {
                            return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
                        } else if (pos < (2.5 / 2.75)) {
                            return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
                        } else {
                            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
                        }
                    },

                    easeInBack: function (pos) {
                        var s = 1.70158;
                        return (pos) * pos * ((s + 1) * pos - s);
                    },

                    easeOutBack: function (pos) {
                        var s = 1.70158;
                        return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
                    },

                    easeInOutBack: function (pos) {
                        var s = 1.70158;
                        if ((pos /= 0.5) < 1) {return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));}
                        return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
                    },

                    elastic: function (pos) {
                        return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
                    },

                    swingFromTo: function (pos) {
                        var s = 1.70158;
                        return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
                        0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
                    },

                    swingFrom: function (pos) {
                        var s = 1.70158;
                        return pos * pos * ((s + 1) * pos - s);
                    },

                    swingTo: function (pos) {
                        var s = 1.70158;
                        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
                    },

                    bounce: function (pos) {
                        if (pos < (1 / 2.75)) {
                            return (7.5625 * pos * pos);
                        } else if (pos < (2 / 2.75)) {
                            return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
                        } else if (pos < (2.5 / 2.75)) {
                            return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
                        } else {
                            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
                        }
                    },

                    bouncePast: function (pos) {
                        if (pos < (1 / 2.75)) {
                            return (7.5625 * pos * pos);
                        } else if (pos < (2 / 2.75)) {
                            return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
                        } else if (pos < (2.5 / 2.75)) {
                            return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
                        } else {
                            return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
                        }
                    },

                    easeFromTo: function (pos) {
                        if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
                        return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
                    },

                    easeFrom: function (pos) {
                        return Math.pow(pos,4);
                    },

                    easeTo: function (pos) {
                        return Math.pow(pos,0.25);
                    }
                });

            }());

            /*!
             * The Bezier magic in this file is adapted/copied almost wholesale from
             * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
             * which was adapted from Apple code (which probably came from
             * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
             * Special thanks to Apple and Thomas Fuchs for much of this code.
             */

            /*!
             *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
             *
             *  Redistribution and use in source and binary forms, with or without
             *  modification, are permitted provided that the following conditions are met:
             *
             *  1. Redistributions of source code must retain the above copyright notice,
             *  this list of conditions and the following disclaimer.
             *
             *  2. Redistributions in binary form must reproduce the above copyright notice,
             *  this list of conditions and the following disclaimer in the documentation
             *  and/or other materials provided with the distribution.
             *
             *  3. Neither the name of the copyright holder(s) nor the names of any
             *  contributors may be used to endorse or promote products derived from
             *  this software without specific prior written permission.
             *
             *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
             *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
             *  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
             *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
             *  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
             *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
             *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
             *  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
             *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
             *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
             */
            ;(function () {
                // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
                function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
                    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
                    function sampleCurveX(t) {return ((ax * t + bx) * t + cx) * t;}
                    function sampleCurveY(t) {return ((ay * t + by) * t + cy) * t;}
                    function sampleCurveDerivativeX(t) {return (3.0 * ax * t + 2.0 * bx) * t + cx;}
                    function solveEpsilon(duration) {return 1.0 / (200.0 * duration);}
                    function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
                    function fabs(n) {if (n >= 0) {return n;}else {return 0 - n;}}
                    function solveCurveX(x,epsilon) {
                        var t0,t1,t2,x2,d2,i;
                        for (t2 = x, i = 0; i < 8; i++) {x2 = sampleCurveX(t2) - x; if (fabs(x2) < epsilon) {return t2;} d2 = sampleCurveDerivativeX(t2); if (fabs(d2) < 1e-6) {break;} t2 = t2 - x2 / d2;}
                        t0 = 0.0; t1 = 1.0; t2 = x; if (t2 < t0) {return t0;} if (t2 > t1) {return t1;}
                        while (t0 < t1) {x2 = sampleCurveX(t2); if (fabs(x2 - x) < epsilon) {return t2;} if (x > x2) {t0 = t2;}else {t1 = t2;} t2 = (t1 - t0) * 0.5 + t0;}
                        return t2; // Failure.
                    }
                    cx = 3.0 * p1x; bx = 3.0 * (p2x - p1x) - cx; ax = 1.0 - cx - bx; cy = 3.0 * p1y; by = 3.0 * (p2y - p1y) - cy; ay = 1.0 - cy - by;
                    return solve(t, solveEpsilon(duration));
                }
                /*!
                 *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
                 *
                 *  Generates a transition easing function that is compatible
                 *  with WebKit's CSS transitions `-webkit-transition-timing-function`
                 *  CSS property.
                 *
                 *  The W3C has more information about
                 *  <a href="http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag">
                 *  CSS3 transition timing functions</a>.
                 *
                 *  @param {number} x1
                 *  @param {number} y1
                 *  @param {number} x2
                 *  @param {number} y2
                 *  @return {function}
                 */
                function getCubicBezierTransition (x1, y1, x2, y2) {
                    return function (pos) {
                        return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
                    };
                }
                // End ported code

                /**
                 * Creates a Bezier easing function and attaches it to `Tweenable.prototype.formula`.  This function gives you total control over the easing curve.  Matthew Lein's [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing the curves you can make with this function.
                 *
                 * @param {string} name The name of the easing curve.  Overwrites the old easing function on Tweenable.prototype.formula if it exists.
                 * @param {number} x1
                 * @param {number} y1
                 * @param {number} x2
                 * @param {number} y2
                 * @return {function} The easing function that was attached to Tweenable.prototype.formula.
                 */
                Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
                    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
                    cubicBezierTransition.x1 = x1;
                    cubicBezierTransition.y1 = y1;
                    cubicBezierTransition.x2 = x2;
                    cubicBezierTransition.y2 = y2;

                    return Tweenable.prototype.formula[name] = cubicBezierTransition;
                };


                /**
                 * `delete`s an easing function from `Tweenable.prototype.formula`.  Be careful with this method, as it `delete`s whatever easing formula matches `name` (which means you can delete default Shifty easing functions).
                 *
                 * @param {string} name The name of the easing function to delete.
                 * @return {function}
                 */
                Tweenable.unsetBezierFunction = function (name) {
                    delete Tweenable.prototype.formula[name];
                };

            })();

            ;(function () {

                function getInterpolatedValues (
                    from, current, targetState, position, easing) {
                    return Tweenable.tweenProps(
                        position, current, from, targetState, 1, 0, easing);
                }

                // Fake a Tweenable and patch some internals.  This approach allows us to
                // skip uneccessary processing and object recreation, cutting down on garbage
                // collection pauses.
                var mockTweenable = new Tweenable();
                mockTweenable._filterArgs = [];

                /**
                 * Compute the midpoint of two Objects.  This method effectively calculates a specific frame of animation that [Tweenable#tween](shifty.core.js.html#tween) does many times over the course of a tween.
                 *
                 * Example:
                 *
                 *     var interpolatedValues = Tweenable.interpolate({
     *       width: '100px',
     *       opacity: 0,
     *       color: '#fff'
     *     }, {
     *       width: '200px',
     *       opacity: 1,
     *       color: '#000'
     *     }, 0.5);
                 *
                 *     console.log(interpolatedValues);
                 *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
                 *
                 * @param {Object} from The starting values to tween from.
                 * @param {Object} targetState The ending values to tween to.
                 * @param {number} position The normalized position value (between 0.0 and 1.0) to interpolate the values between `from` and `to` for.  `from` represents 0 and `to` represents `1`.
                 * @param {string|Object} easing The easing curve(s) to calculate the midpoint against.  You can reference any easing function attached to `Tweenable.prototype.formula`.  If omitted, this defaults to "linear".
                 * @return {Object}
                 */
                Tweenable.interpolate = function (from, targetState, position, easing) {
                    var current = Tweenable.shallowCopy({}, from);
                    var easingObject = Tweenable.composeEasingObject(
                        from, easing || 'linear');

                    mockTweenable.set({});

                    // Alias and reuse the _filterArgs array instead of recreating it.
                    var filterArgs = mockTweenable._filterArgs;
                    filterArgs.length = 0;
                    filterArgs[0] = current;
                    filterArgs[1] = from;
                    filterArgs[2] = targetState;
                    filterArgs[3] = easingObject;

                    // Any defined value transformation must be applied
                    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
                    Tweenable.applyFilter(mockTweenable, 'beforeTween');

                    var interpolatedValues = getInterpolatedValues(
                        from, current, targetState, position, easingObject);

                    // Transform values back into their original format
                    Tweenable.applyFilter(mockTweenable, 'afterTween');

                    return interpolatedValues;
                };

            }());

            /**
             * Adds string interpolation support to Shifty.
             *
             * The Token extension allows Shifty to tween numbers inside of strings.  Among
             * other things, this allows you to animate CSS properties.  For example, you
             * can do this:
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { transform: 'translateX(45px)'},
   *       to: { transform: 'translateX(90xp)'}
   *     });
             *
             * ` `
             * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { transform: 'translateX(45px)'},
   *       to: { transform: 'translateX(90px)'},
   *       step: function (state) {
   *         console.log(state.transform);
   *       }
   *     });
             *
             * ` `
             * The above snippet will log something like this in the console:
             *
             *     translateX(60.3px)
             *     ...
             *     translateX(76.05px)
             *     ...
             *     translateX(90px)
             *
             * ` `
             * Another use for this is animating colors:
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { color: 'rgb(0,255,0)'},
   *       to: { color: 'rgb(255,0,255)'},
   *       step: function (state) {
   *         console.log(state.color);
   *       }
   *     });
             *
             * ` `
             * The above snippet will log something like this:
             *
             *     rgb(84,170,84)
             *     ...
             *     rgb(170,84,170)
             *     ...
             *     rgb(255,0,255)
             *
             * ` `
             * This extension also supports hexadecimal colors, in both long (`#ff00ff`)
             * and short (`#f0f`) forms.  Be aware that hexadecimal input values will be
             * converted into the equivalent RGB output values.  This is done to optimize
             * for performance.
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { color: '#0f0'},
   *       to: { color: '#f0f'},
   *       step: function (state) {
   *         console.log(state.color);
   *       }
   *     });
             *
             * ` `
             * This snippet will generate the same output as the one before it because
             * equivalent values were supplied (just in hexadecimal form rather than RGB):
             *
             *     rgb(84,170,84)
             *     ...
             *     rgb(170,84,170)
             *     ...
             *     rgb(255,0,255)
             *
             * ` `
             * ` `
             * ## Easing support
             *
             * Easing works somewhat differently in the Token extension.  This is because
             * some CSS properties have multiple values in them, and you might need to
             * tween each value along its own easing curve.  A basic example:
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { transform: 'translateX(0px) translateY(0px)'},
   *       to: { transform:   'translateX(100px) translateY(100px)'},
   *       easing: { transform: 'easeInQuad' },
   *       step: function (state) {
   *         console.log(state.transform);
   *       }
   *     });
             *
             * ` `
             * The above snippet create values like this:
             *
             *     translateX(11.560000000000002px) translateY(11.560000000000002px)
             *     ...
             *     translateX(46.24000000000001px) translateY(46.24000000000001px)
             *     ...
             *     translateX(100px) translateY(100px)
             *
             * ` `
             * In this case, the values for `translateX` and `translateY` are always the
             * same for each step of the tween, because they have the same start and end
             * points and both use the same easing curve.  We can also tween `translateX`
             * and `translateY` along independent curves:
             *
             *     var tweenable = new Tweenable();
             *     tweenable.tween({
   *       from: { transform: 'translateX(0px) translateY(0px)'},
   *       to: { transform:   'translateX(100px) translateY(100px)'},
   *       easing: { transform: 'easeInQuad bounce' },
   *       step: function (state) {
   *         console.log(state.transform);
   *       }
   *     });
             *
             * ` `
             * The above snippet create values like this:
             *
             *     translateX(10.89px) translateY(82.355625px)
             *     ...
             *     translateX(44.89000000000001px) translateY(86.73062500000002px)
             *     ...
             *     translateX(100px) translateY(100px)
             *
             * ` `
             * `translateX` and `translateY` are not in sync anymore, because `easeInQuad`
             * was specified for `translateX` and `bounce` for `translateY`.  Mixing and
             * matching easing curves can make for some interesting motion in your
             * animations.
             *
             * The order of the space-separated easing curves correspond the token values
             * they apply to.  If there are more token values than easing curves listed,
             * the last easing curve listed is used.
             */
            function token () {
                // Functionality for this extension runs implicitly if it is loaded.
            } /*!*/

            // token function is defined above only so that dox-foundation sees it as
            // documentation and renders it.  It is never used, and is optimized away at
            // build time.

            ;(function (Tweenable) {

                /*!
                 * @typedef {{
                 *   formatString: string
                 *   chunkNames: Array.<string>
                 * }}
                 */
                var formatManifest;

                // CONSTANTS

                var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
                var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
                var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
                var R_RGB = new RegExp(
                    'rgb\\(' + R_UNFORMATTED_VALUES.source +
                    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
                    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
                var R_RGB_PREFIX = /^.*\(/;
                var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
                var VALUE_PLACEHOLDER = 'VAL';

                // HELPERS

                var getFormatChunksFrom_accumulator = [];
                /*!
                 * @param {Array.number} rawValues
                 * @param {string} prefix
                 *
                 * @return {Array.<string>}
                 */
                function getFormatChunksFrom (rawValues, prefix) {
                    getFormatChunksFrom_accumulator.length = 0;

                    var rawValuesLength = rawValues.length;
                    var i;

                    for (i = 0; i < rawValuesLength; i++) {
                        getFormatChunksFrom_accumulator.push('_' + prefix + '_' + i);
                    }

                    return getFormatChunksFrom_accumulator;
                }

                /*!
                 * @param {string} formattedString
                 *
                 * @return {string}
                 */
                function getFormatStringFrom (formattedString) {
                    var chunks = formattedString.match(R_FORMAT_CHUNKS);

                    if (!chunks) {
                        // chunks will be null if there were no tokens to parse in
                        // formattedString (for example, if formattedString is '2').  Coerce
                        // chunks to be useful here.
                        chunks = ['', ''];

                        // If there is only one chunk, assume that the string is a number
                        // followed by a token...
                        // NOTE: This may be an unwise assumption.
                    } else if (chunks.length === 1 ||
                            // ...or if the string starts with a number component (".", "-", or a
                            // digit)...
                        formattedString[0].match(R_NUMBER_COMPONENT)) {
                        // ...prepend an empty string here to make sure that the formatted number
                        // is properly replaced by VALUE_PLACEHOLDER
                        chunks.unshift('');
                    }

                    return chunks.join(VALUE_PLACEHOLDER);
                }

                /*!
                 * Convert all hex color values within a string to an rgb string.
                 *
                 * @param {Object} stateObject
                 *
                 * @return {Object} The modified obj
                 */
                function sanitizeObjectForHexProps (stateObject) {
                    Tweenable.each(stateObject, function (prop) {
                        var currentProp = stateObject[prop];

                        if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
                            stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
                        }
                    });
                }

                /*!
                 * @param {string} str
                 *
                 * @return {string}
                 */
                function  sanitizeHexChunksToRGB (str) {
                    return filterStringChunks(R_HEX, str, convertHexToRGB);
                }

                /*!
                 * @param {string} hexString
                 *
                 * @return {string}
                 */
                function convertHexToRGB (hexString) {
                    var rgbArr = hexToRGBArray(hexString);
                    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
                }

                var hexToRGBArray_returnArray = [];
                /*!
                 * Convert a hexadecimal string to an array with three items, one each for
                 * the red, blue, and green decimal values.
                 *
                 * @param {string} hex A hexadecimal string.
                 *
                 * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
                 * valid string, or an Array of three 0's.
                 */
                function hexToRGBArray (hex) {

                    hex = hex.replace(/#/, '');

                    // If the string is a shorthand three digit hex notation, normalize it to
                    // the standard six digit notation
                    if (hex.length === 3) {
                        hex = hex.split('');
                        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                    }

                    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
                    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
                    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

                    return hexToRGBArray_returnArray;
                }

                /*!
                 * Convert a base-16 number to base-10.
                 *
                 * @param {Number|String} hex The value to convert
                 *
                 * @returns {Number} The base-10 equivalent of `hex`.
                 */
                function hexToDec (hex) {
                    return parseInt(hex, 16);
                }

                /*!
                 * Runs a filter operation on all chunks of a string that match a RegExp
                 *
                 * @param {RegExp} pattern
                 * @param {string} unfilteredString
                 * @param {function(string)} filter
                 *
                 * @return {string}
                 */
                function filterStringChunks (pattern, unfilteredString, filter) {
                    var pattenMatches = unfilteredString.match(pattern);
                    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

                    if (pattenMatches) {
                        var pattenMatchesLength = pattenMatches.length;
                        var currentChunk;

                        for (var i = 0; i < pattenMatchesLength; i++) {
                            currentChunk = pattenMatches.shift();
                            filteredString = filteredString.replace(
                                VALUE_PLACEHOLDER, filter(currentChunk));
                        }
                    }

                    return filteredString;
                }

                /*!
                 * Check for floating point values within rgb strings and rounds them.
                 *
                 * @param {string} formattedString
                 *
                 * @return {string}
                 */
                function sanitizeRGBChunks (formattedString) {
                    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
                }

                /*!
                 * @param {string} rgbChunk
                 *
                 * @return {string}
                 */
                function sanitizeRGBChunk (rgbChunk) {
                    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
                    var numbersLength = numbers.length;
                    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

                    for (var i = 0; i < numbersLength; i++) {
                        sanitizedString += parseInt(numbers[i], 10) + ',';
                    }

                    sanitizedString = sanitizedString.slice(0, -1) + ')';

                    return sanitizedString;
                }

                /*!
                 * @param {Object} stateObject
                 *
                 * @return {Object} An Object of formatManifests that correspond to
                 * the string properties of stateObject
                 */
                function getFormatManifests (stateObject) {
                    var manifestAccumulator = {};

                    Tweenable.each(stateObject, function (prop) {
                        var currentProp = stateObject[prop];

                        if (typeof currentProp === 'string') {
                            var rawValues = getValuesFrom(currentProp);

                            manifestAccumulator[prop] = {
                                'formatString': getFormatStringFrom(currentProp)
                                ,'chunkNames': getFormatChunksFrom(rawValues, prop)
                            };
                        }
                    });

                    return manifestAccumulator;
                }

                /*!
                 * @param {Object} stateObject
                 * @param {Object} formatManifests
                 */
                function expandFormattedProperties (stateObject, formatManifests) {
                    Tweenable.each(formatManifests, function (prop) {
                        var currentProp = stateObject[prop];
                        var rawValues = getValuesFrom(currentProp);
                        var rawValuesLength = rawValues.length;

                        for (var i = 0; i < rawValuesLength; i++) {
                            stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
                        }

                        delete stateObject[prop];
                    });
                }

                /*!
                 * @param {Object} stateObject
                 * @param {Object} formatManifests
                 */
                function collapseFormattedProperties (stateObject, formatManifests) {
                    Tweenable.each(formatManifests, function (prop) {
                        var currentProp = stateObject[prop];
                        var formatChunks = extractPropertyChunks(
                            stateObject, formatManifests[prop].chunkNames);
                        var valuesList = getValuesList(
                            formatChunks, formatManifests[prop].chunkNames);
                        currentProp = getFormattedValues(
                            formatManifests[prop].formatString, valuesList);
                        stateObject[prop] = sanitizeRGBChunks(currentProp);
                    });
                }

                /*!
                 * @param {Object} stateObject
                 * @param {Array.<string>} chunkNames
                 *
                 * @return {Object} The extracted value chunks.
                 */
                function extractPropertyChunks (stateObject, chunkNames) {
                    var extractedValues = {};
                    var currentChunkName, chunkNamesLength = chunkNames.length;

                    for (var i = 0; i < chunkNamesLength; i++) {
                        currentChunkName = chunkNames[i];
                        extractedValues[currentChunkName] = stateObject[currentChunkName];
                        delete stateObject[currentChunkName];
                    }

                    return extractedValues;
                }

                var getValuesList_accumulator = [];
                /*!
                 * @param {Object} stateObject
                 * @param {Array.<string>} chunkNames
                 *
                 * @return {Array.<number>}
                 */
                function getValuesList (stateObject, chunkNames) {
                    getValuesList_accumulator.length = 0;
                    var chunkNamesLength = chunkNames.length;

                    for (var i = 0; i < chunkNamesLength; i++) {
                        getValuesList_accumulator.push(stateObject[chunkNames[i]]);
                    }

                    return getValuesList_accumulator;
                }

                /*!
                 * @param {string} formatString
                 * @param {Array.<number>} rawValues
                 *
                 * @return {string}
                 */
                function getFormattedValues (formatString, rawValues) {
                    var formattedValueString = formatString;
                    var rawValuesLength = rawValues.length;

                    for (var i = 0; i < rawValuesLength; i++) {
                        formattedValueString = formattedValueString.replace(
                            VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
                    }

                    return formattedValueString;
                }

                /*!
                 * Note: It's the duty of the caller to convert the Array elements of the
                 * return value into numbers.  This is a performance optimization.
                 *
                 * @param {string} formattedString
                 *
                 * @return {Array.<string>|null}
                 */
                function getValuesFrom (formattedString) {
                    return formattedString.match(R_UNFORMATTED_VALUES);
                }

                /*!
                 * @param {Object} easingObject
                 * @param {Object} tokenData
                 */
                function expandEasingObject (easingObject, tokenData) {
                    Tweenable.each(tokenData, function (prop) {
                        var currentProp = tokenData[prop];
                        var chunkNames = currentProp.chunkNames;
                        var chunkLength = chunkNames.length;
                        var easingChunks = easingObject[prop].split(' ');
                        var lastEasingChunk = easingChunks[easingChunks.length - 1];

                        for (var i = 0; i < chunkLength; i++) {
                            easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
                        }

                        delete easingObject[prop];
                    });
                }

                /*!
                 * @param {Object} easingObject
                 * @param {Object} tokenData
                 */
                function collapseEasingObject (easingObject, tokenData) {
                    Tweenable.each(tokenData, function (prop) {
                        var currentProp = tokenData[prop];
                        var chunkNames = currentProp.chunkNames;
                        var chunkLength = chunkNames.length;
                        var composedEasingString = '';

                        for (var i = 0; i < chunkLength; i++) {
                            composedEasingString += ' ' + easingObject[chunkNames[i]];
                            delete easingObject[chunkNames[i]];
                        }

                        easingObject[prop] = composedEasingString.substr(1);
                    });
                }

                Tweenable.prototype.filter.token = {
                    'tweenCreated': function (currentState, fromState, toState, easingObject) {
                        sanitizeObjectForHexProps(currentState);
                        sanitizeObjectForHexProps(fromState);
                        sanitizeObjectForHexProps(toState);
                        this._tokenData = getFormatManifests(currentState);
                    },

                    'beforeTween': function (currentState, fromState, toState, easingObject) {
                        expandEasingObject(easingObject, this._tokenData);
                        expandFormattedProperties(currentState, this._tokenData);
                        expandFormattedProperties(fromState, this._tokenData);
                        expandFormattedProperties(toState, this._tokenData);
                    },

                    'afterTween': function (currentState, fromState, toState, easingObject) {
                        collapseFormattedProperties(currentState, this._tokenData);
                        collapseFormattedProperties(fromState, this._tokenData);
                        collapseFormattedProperties(toState, this._tokenData);
                        collapseEasingObject(easingObject, this._tokenData);
                    }
                };

            } (Tweenable));

        }(window));

        return window.Tweenable;
    });

(function() {
    "use strict";

    angular.module('angular-carousel')

        .filter('carouselSlice', function() {
            return function(collection, start, size) {
                if (angular.isArray(collection)) {
                    return collection.slice(start, start + size);
                } else if (angular.isObject(collection)) {
                    // dont try to slice collections :)
                    return collection;
                }
            };
        });

})();;
'use strict';

angular.module('angularDateBinder', [])

.directive('bindDate', ['$parse', function($parse) {
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {
      var validateDate = function(date, abort) {
        var retVal = (date == null) || (typeof date === 'undefined') || date.constructor === Date;
        if (abort && !retVal) {
          throw new Error('Expected `' + attrs.bindDate + '` to be a date');
        }
        return retVal;
      };

      var equalDate = function(d1, d2) {
        return !!d1 && !!d2 && validateDate(d1) && validateDate(d2) && d1.getTime() === d2.getTime();
      };

      var current = null;
      var getter = $parse(attrs.bindDate);
      var setter = $parse(attrs.bindDate).assign;

      var storeDateObject = function() {
        var date = getter(scope.$parent);
        validateDate(date, true);
        return date;
      };

      var applyDateObject = function(date) {
        setter(scope.$parent, date);
        setter(scope, date);
      };

      var refresh = function(updates) {
        if (current != null) {
          if ((updates == null) && !updates) {
            current = new Date(current.getTime());
          }
          scope.$year = current.getFullYear();
          scope.$month = current.getMonth() + 1;
          scope.$date = current.getDate();
          scope.$hour = current.getHours();
          scope.$minute = current.getMinutes();
          scope.$second = current.getSeconds();
          scope.$lastDate = (new Date(current.getFullYear(), current.getMonth() + 1, 0)).getDate();
          applyDateObject(current);
        } else {
          scope.$year = scope.$month = scope.$date = scope.$hour = scope.$minute = scope.$second = scope.$lastDate = null;
        }
      };

      var watchDate = function(newDateObject, oldDateObject) {
        if ((newDateObject == null) || validateDate(newDateObject, true) && !equalDate(newDateObject, oldDateObject)) {
          current = newDateObject;
          refresh();
        }
      };

      scope.$parent.$watch(attrs.bindDate, watchDate);
      scope.$watch(attrs.bindDate, watchDate);

      var watchList = [
        {
          key: '$year',
          setFunc: Date.prototype.setFullYear
        },{
          key: '$month',
          setFunc: function(month){
             this.setMonth(month - 1);
          }
        },{
          key: '$date',
          setFunc: Date.prototype.setDate
        },{
          key: '$hour',
          setFunc: Date.prototype.setHours
        },{
          key: '$minute',
          setFunc: Date.prototype.setMinutes
        },{
          key: '$second',
          setFunc: Date.prototype.setSeconds
        },{
          key: '$year',
          setFunc: Date.prototype.setFullYear
        }
      ];

      for(var i in watchList){
        (function(){
          var key = watchList[i].key
          var setFunc = watchList[i].setFunc
          scope.$watch(key, function(_new, _old) {
            if (_new && _new !== _old) {
              setFunc.call(current, _new);
              refresh();
            }
          });
        })();
      };
      current = storeDateObject(false);
      refresh();

      scope.range = function(start, stop){
        var list = new Array()
        for (var i = parseInt(start); i <= parseInt(stop); i = i + 1) {
          list.push(i)
        }
        return list
      };
    }
  };
}]);
;
/*
 * angular-lazy-load
 *
 * Copyright(c) 2014 Paweł Wszoła <wszola.p@gmail.com>
 * MIT Licensed
 *
 */

/**
 * @author Paweł Wszoła (wszola.p@gmail.com)
 *
 */

angular.module('angularLazyImg', []);

angular.module('angularLazyImg').factory('LazyImgMagic', [
  '$window', '$rootScope', 'lazyImgConfig', 'lazyImgHelpers',
  function($window, $rootScope, lazyImgConfig, lazyImgHelpers){
    'use strict';

    var winDimensions, $win, images, isListening, options;
    var checkImagesT, saveWinOffsetT, containers;
    var u = navigator.userAgent;

    images = [];
    isListening = false;
    options = lazyImgConfig.getOptions();
    $win = angular.element($window);
    winDimensions = lazyImgHelpers.getWinDimensions();
    saveWinOffsetT = lazyImgHelpers.throttle(function(){
      winDimensions = lazyImgHelpers.getWinDimensions();
    }, 60);
    containers = [options.container || $win];

    function checkImages(){
      for(var i = images.length - 1; i >= 0; i--){
        var image = images[i];
        if(!image.$elem.hasClass(options.startClass) && (u.indexOf('iPhone') > -1 || !u.match(/AppleWebKit.*Mobile.*/))){
          image.$elem.addClass(options.startClass);
        }
        if(image && lazyImgHelpers.isElementInView(image.$elem[0], options.offset, winDimensions)){
          loadImage(image);
          images.splice(i, 1);
        }
      }
      if(images.length === 0){ stopListening(); }
    }

    checkImagesT = lazyImgHelpers.throttle(checkImages, 30);

    function listen(param){
      (options.container || $win)[param]('scroll', checkImagesT);
      (options.container || $win)[param]('touchend', checkImagesT);
      //(options.container || $win)[param]('click', checkImagesT);
      $win[param]('resize', checkImagesT);
      $win[param]('resize', saveWinOffsetT);
    }

    function startListening(){
      isListening = true;
      setTimeout(function(){
        checkImages();
        listen('on');
      }, 1);
    }

    function stopListening(){
      isListening = false;
      listen('off');
    }

    function removeImage(image){
      var index = images.indexOf(image);
      if(index !== -1) {
        images.splice(index, 1);
      }
    }

    function loadImage(photo){
      var img = new Image();
      img.onerror = function(){
        if(options.errorClass){
          photo.$elem.addClass(options.errorClass);
        }
        $rootScope.$emit('lazyImg:error', photo);
        options.onError(photo);
      };
      img.onload = function(){
        setPhotoSrc(photo.$elem, photo.src);
        if(options.successClass){
          photo.$elem.addClass(options.successClass);
        }
        $rootScope.$emit('lazyImg:success', photo);
        options.onSuccess(photo);
      };
      img.src = photo.src;
    }

    function setPhotoSrc($elem, src){
      if ($elem[0].nodeName.toLowerCase() === 'img') {
        $elem[0].src = src;
      } else {
        $elem.css('background-image', 'url("' + src + '")');
      }
    }

    // PHOTO
    function Photo($elem){
      this.$elem = $elem;
    }

    Photo.prototype.setSource = function(source){
      this.src = source;
      images.unshift(this);
      if (!isListening){
        startListening();
      }else{
        checkImages();
      }
    };

    Photo.prototype.removeImage = function(){
      removeImage(this);
      if(images.length === 0){ stopListening(); }
      //if(images.length > 0){
      //  images = [];
      //}
    };

    Photo.prototype.checkImages = function(){
      checkImages();
    };

    Photo.addContainer = function (container) {
      stopListening();
      containers.push(container);
      startListening();
    };

    Photo.removeContainer = function (container) {
      stopListening();
      containers.splice(containers.indexOf(container), 1);
      startListening();
    };

    return Photo;

  }
]);

angular.module('angularLazyImg').provider('lazyImgConfig', function() {
  'use strict';

  this.options = {
    offset       : 300,
    errorClass   : null,
    startClass : null,
    successClass : null,
    container    : '',
    onError      : function(){},
    onSuccess    : function(){}
  };

  this.$get = function() {
    var options = this.options;
    return {
      getOptions: function() {
        return options;
      }
    };
  };

  this.setOptions = function(options) {
    angular.extend(this.options, options);
  };
});
angular.module('angularLazyImg').factory('lazyImgHelpers', [
  '$window', function($window){
    'use strict';

    function getWinDimensions(){
      return {
        height: $window.innerHeight,
        width: $window.innerWidth
      };
    }

    function isElementInView(elem, offset, winDimensions) {
      var rect = elem.getBoundingClientRect();
      var bottomline = winDimensions.height + offset;
      //return (
      //  rect.left >= 0 && rect.right <= winDimensions.width + offset && (
      //  rect.top >= 0 && rect.top <= bottomline ||
      //  rect.bottom <= bottomline && rect.bottom >= 0 - offset
      //  )
      //);
      return (
        rect.top >= 0 && rect.top <= bottomline ||
        rect.bottom <= bottomline && rect.bottom >= 0 - offset
      );
    }

    // http://remysharp.com/2010/07/21/throttling-function-calls/
    function throttle(fn, threshhold, scope) {
      var last, deferTimer;
      return function () {
        var context = scope || this;
        var now = +new Date(),
            args = arguments;
        if (last && now < last + threshhold) {
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }

    return {
      isElementInView: isElementInView,
      getWinDimensions: getWinDimensions,
      throttle: throttle
    };

  }
]);
angular.module('angularLazyImg')
    .directive('lazyImg', [
      '$rootScope','$timeout', 'LazyImgMagic', function ($rootScope,$timeout, LazyImgMagic) {
        'use strict';

        function link(scope, element, attributes) {
          var lazyImage = new LazyImgMagic(element);
          attributes.$observe('lazyImg', function (newSource) {
              if (newSource) {
                $timeout(function() {    //图片等待解析好高度，加载
                  // in angular 1.3 it might be nice to remove observer here
                  lazyImage.setSource(newSource);
                },10)
              }
          });
          scope.$on('$destroy', function () {
            lazyImage.removeImage();
          });
          $rootScope.$on('lazyImg.runCheck', function () {
            lazyImage.checkImages();
          });
          $rootScope.$on('lazyImg:refresh', function () {
            lazyImage.checkImages();
          });
        }

        return {
          link: link,
          restrict: 'A'
        };
      }
    ])
    .directive('lazyImgContainer', [
      'LazyImgMagic', function (LazyImgMagic) {
        'use strict';

        function link(scope, element) {
          LazyImgMagic.addContainer(element);
          scope.$on('$destroy', function () {
            LazyImgMagic.removeContainer(element);
          });
        }

        return {
          link: link,
          restrict: 'A'
        };
      }
    ]);
;
/**
 * @license AngularJS v1.4.0-rc.1
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sanitizeMinErr = angular.$$minErr('$sanitize');

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/*
 * HTML Parser By Misko Hevery (misko@hevery.com)
 * based on:  HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 */


/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string, however, since our parser is more strict than a typical browser
 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js">
   <file name="login.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getInnerHtml()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */
function $SanitizeProvider() {
  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, angular.noop);
  writer.chars(chars);
  return buf.join('');
}


// Regular Expressions for parsing tags and attributes
var START_TAG_REGEXP =
       /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
  END_TAG_REGEXP = /^<\/\s*([\w:-]+)[^>]*>/,
  ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
  BEGIN_TAG_REGEXP = /^</,
  BEGING_END_TAGE_REGEXP = /^<\//,
  COMMENT_REGEXP = /<!--(.*?)-->/g,
  DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
  CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
  SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  // Match everything outside of normal chars and " (quote character)
  NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;


// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements

// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var voidElements = makeMap("area,br,col,hr,img,wbr");

// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    optionalEndTagInlineElements = makeMap("rp,rt"),
    optionalEndTagElements = angular.extend({},
                                            optionalEndTagInlineElements,
                                            optionalEndTagBlockElements);

// Safe Block Elements - HTML5
var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));

// Inline Elements - HTML5
var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

// SVG Elements
// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
// They can potentially allow for arbitrary javascript to be executed. See #11290
var svgElements = makeMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
        "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
        "radialGradient,rect,stop,svg,switch,text,title,tspan,use");

// Special Elements (can contain anything)
var specialElements = makeMap("script,style");

var validElements = angular.extend({},
                                   voidElements,
                                   blockElements,
                                   inlineElements,
                                   optionalEndTagElements,
                                   svgElements);

//Attributes that have href and hence need to be sanitized
var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap,xlink:href");

var htmlAttrs = makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,span,start,summary,target,title,type,' +
    'valign,value,vspace,width');

// SVG attributes (without "id" and "name" attributes)
// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
var svgAttrs = makeMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
    'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
    'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
    'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
    'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
    'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
    'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
    'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
    'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
    'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
    'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
    'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
    'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
    'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
    'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

var validAttrs = angular.extend({},
                                uriAttrs,
                                svgAttrs,
                                htmlAttrs);

function makeMap(str, lowercaseKeys) {
  var obj = {}, items = str.split(','), i;
  for (i = 0; i < items.length; i++) {
    obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
  }
  return obj;
}


/**
 * @example
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * @param {string} html string
 * @param {object} handler
 */
function htmlParser(html, handler) {
  if (typeof html !== 'string') {
    if (html === null || typeof html === 'undefined') {
      html = '';
    } else {
      html = '' + html;
    }
  }
  var index, chars, match, stack = [], last = html, text;
  stack.last = function() { return stack[stack.length - 1]; };

  while (html) {
    text = '';
    chars = true;

    // Make sure we're not in a script or style element
    if (!stack.last() || !specialElements[stack.last()]) {

      // Comment
      if (html.indexOf("<!--") === 0) {
        // comments containing -- are not allowed unless they terminate the comment
        index = html.indexOf("--", 4);

        if (index >= 0 && html.lastIndexOf("-->", index) === index) {
          if (handler.comment) handler.comment(html.substring(4, index));
          html = html.substring(index + 3);
          chars = false;
        }
      // DOCTYPE
      } else if (DOCTYPE_REGEXP.test(html)) {
        match = html.match(DOCTYPE_REGEXP);

        if (match) {
          html = html.replace(match[0], '');
          chars = false;
        }
      // end tag
      } else if (BEGING_END_TAGE_REGEXP.test(html)) {
        match = html.match(END_TAG_REGEXP);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(END_TAG_REGEXP, parseEndTag);
          chars = false;
        }

      // start tag
      } else if (BEGIN_TAG_REGEXP.test(html)) {
        match = html.match(START_TAG_REGEXP);

        if (match) {
          // We only have a valid start-tag if there is a '>'.
          if (match[4]) {
            html = html.substring(match[0].length);
            match[0].replace(START_TAG_REGEXP, parseStartTag);
          }
          chars = false;
        } else {
          // no ending tag found --- this piece should be encoded as an entity.
          text += '<';
          html = html.substring(1);
        }
      }

      if (chars) {
        index = html.indexOf("<");

        text += index < 0 ? html : html.substring(0, index);
        html = index < 0 ? "" : html.substring(index);

        if (handler.chars) handler.chars(decodeEntities(text));
      }

    } else {
      // IE versions 9 and 10 do not understand the regex '[^]', so using a workaround with [\W\w].
      html = html.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
        function(all, text) {
          text = text.replace(COMMENT_REGEXP, "$1").replace(CDATA_REGEXP, "$1");

          if (handler.chars) handler.chars(decodeEntities(text));

          return "";
      });

      parseEndTag("", stack.last());
    }

    if (html == last) {
      throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
                                        "of html: {0}", html);
    }
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = angular.lowercase(tagName);
    if (blockElements[tagName]) {
      while (stack.last() && inlineElements[stack.last()]) {
        parseEndTag("", stack.last());
      }
    }

    if (optionalEndTagElements[tagName] && stack.last() == tagName) {
      parseEndTag("", tagName);
    }

    unary = voidElements[tagName] || !!unary;

    if (!unary) {
      stack.push(tagName);
    }

    var attrs = {};

    rest.replace(ATTR_REGEXP,
      function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
        var value = doubleQuotedValue
          || singleQuotedValue
          || unquotedValue
          || '';

        attrs[name] = decodeEntities(value);
    });
    if (handler.start) handler.start(tagName, attrs, unary);
  }

  function parseEndTag(tag, tagName) {
    var pos = 0, i;
    tagName = angular.lowercase(tagName);
    if (tagName) {
      // Find the closest opened tag of the same type
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos] == tagName) break;
      }
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (i = stack.length - 1; i >= pos; i--)
        if (handler.end) handler.end(stack[i]);

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }
}

var hiddenPre=document.createElement("pre");
/**
 * decodes all entities into regular string
 * @param value
 * @returns {string} A string with decoded entities.
 */
function decodeEntities(value) {
  if (!value) { return ''; }

  hiddenPre.innerHTML = value.replace(/</g,"&lt;");
  // innerText depends on styling as it doesn't display hidden elements.
  // Therefore, it's better to use textContent not to cause unnecessary reflows.
  return hiddenPre.textContent;
}

/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function encodeEntities(value) {
  return value.
    replace(/&/g, '&amp;').
    replace(SURROGATE_PAIR_REGEXP, function(value) {
      var hi = value.charCodeAt(0);
      var low = value.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).
    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
      return '&#' + value.charCodeAt(0) + ';';
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
}

/**
 * create an HTML/XML writer which writes to buffer
 * @param {Array} buf use buf.jain('') to get out sanitized html string
 * @returns {object} in the form of {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * }
 */
function htmlSanitizeWriter(buf, uriValidator) {
  var ignore = false;
  var out = angular.bind(buf, buf.push);
  return {
    start: function(tag, attrs, unary) {
      tag = angular.lowercase(tag);
      if (!ignore && specialElements[tag]) {
        ignore = tag;
      }
      if (!ignore && validElements[tag] === true) {
        out('<');
        out(tag);
        angular.forEach(attrs, function(value, key) {
          var lkey=angular.lowercase(key);
          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
          if (validAttrs[lkey] === true &&
            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
            out(' ');
            out(key);
            out('="');
            out(encodeEntities(value));
            out('"');
          }
        });
        out(unary ? '/>' : '>');
      }
    },
    end: function(tag) {
        tag = angular.lowercase(tag);
        if (!ignore && validElements[tag] === true) {
          out('</');
          out(tag);
          out('>');
        }
        if (tag == ignore) {
          ignore = false;
        }
      },
    chars: function(chars) {
        if (!ignore) {
          out(encodeEntities(chars));
        }
      }
  };
}


// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

/* global sanitizeText: false */

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @returns {string} Html-linkified text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js">
     <file name="login.html">
       <script>
         angular.module('linkyExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.snippet =
               'Pretty text with some links:\n'+
               'http://angularjs.org/,\n'+
               'mailto:us@somewhere.org,\n'+
               'another@somewhere.org,\n'+
               'and one more: ftp://127.0.0.1/.';
             $scope.snippetWithTarget = 'http://angularjs.org/';
           }]);
       </script>
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Filter</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
      MAILTO_REGEXP = /^mailto:/;

  return function(text, target) {
    if (!text) return text;
    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/www/mailto then assume mailto
      if (!match[2] && !match[4]) {
        url = (match[3] ? 'http://' : 'mailto:') + url;
      }
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      html.push('<a ');
      if (angular.isDefined(target)) {
        html.push('target="',
                  target,
                  '" ');
      }
      html.push('href="',
                url.replace(/"/g, '&quot;'),
                '">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);
;
/**
 * @license AngularJS v1.4.0-rc.1
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

  /**
   * @ngdoc module
   * @name ngTouch
   * @description
   *
   * # ngTouch
   *
   * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
   * The implementation is based on jQuery Mobile touch event handling
   * ([jquerymobile.com](http://jquerymobile.com/)).
   *
   *
   * See {@link ngTouch.$swipe `$swipe`} for usage.
   *
   * <div doc-module-components="ngTouch"></div>
   *
   */

// define ngTouch module
  /* global -ngTouch */
  var ngTouch = angular.module('ngTouch', []);

  /* global ngTouch: false */

  /**
   * @ngdoc service
   * @name $swipe
   *
   * @description
   * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
   * behavior, to make implementing swipe-related directives more convenient.
   *
   * Requires the {@link ngTouch `ngTouch`} module to be installed.
   *
   * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
   * `ngCarousel` in a separate component.
   *
   * # Usage
   * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
   * which is to be watched for swipes, and an object with four handler functions. See the
   * documentation for `bind` below.
   */

  ngTouch.factory('$swipe', [function() {
    // The total distance in any direction before we make the call on swipe vs. scroll.
    var MOVE_BUFFER_RADIUS = 10;

    var POINTER_EVENTS = {
      'mouse': {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      },
      'touch': {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend',
        cancel: 'touchcancel'
      }
    };

    function getCoordinates(event) {
      var originalEvent = event.originalEvent || event;
      var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
      var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

      return {
        x: e.clientX,
        y: e.clientY
      };
    }

    function getEvents(pointerTypes, eventType) {
      var res = [];
      angular.forEach(pointerTypes, function(pointerType) {
        var eventName = POINTER_EVENTS[pointerType][eventType];
        if (eventName) {
          res.push(eventName);
        }
      });
      return res.join(' ');
    }

    return {
      /**
       * @ngdoc method
       * @name $swipe#bind
       *
       * @description
       * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
       * object containing event handlers.
       * The pointer types that should be used can be specified via the optional
       * third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
       * `$swipe` will listen for `mouse` and `touch` events.
       *
       * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
       * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.
       *
       * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
       * watching for `touchmove` or `mousemove` events. These events are ignored until the total
       * distance moved in either dimension exceeds a small threshold.
       *
       * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
       * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
       * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
       *   A `cancel` event is sent.
       *
       * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
       * a swipe is in progress.
       *
       * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
       *
       * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
       * as described above.
       *
       */
      bind: function(element, eventHandlers, pointerTypes) {
        // Absolute total movement, used to control swipe vs. scroll.
        var totalX, totalY;
        // Coordinates of the start position.
        var startCoords;
        // Last event's position.
        var lastPos;
        // Whether a swipe is active.
        var active = false;

        pointerTypes = pointerTypes || ['mouse', 'touch'];
        element.on(getEvents(pointerTypes, 'start'), function(event) {
          startCoords = getCoordinates(event);
          active = true;
          totalX = 0;
          totalY = 0;
          lastPos = startCoords;
          eventHandlers['start'] && eventHandlers['start'](startCoords, event);
        });
        var events = getEvents(pointerTypes, 'cancel');
        if (events) {
          element.on(events, function(event) {
            active = false;
            eventHandlers['cancel'] && eventHandlers['cancel'](event);
          });
        }

        element.on(getEvents(pointerTypes, 'move'), function(event) {
          if (!active) return;

          // Android will send a touchcancel if it thinks we're starting to scroll.
          // So when the total distance (+ or - or both) exceeds 10px in either direction,
          // we either:
          // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
          // - On totalY > totalX, we let the browser handle it as a scroll.

          if (!startCoords) return;
          var coords = getCoordinates(event);

          totalX += Math.abs(coords.x - lastPos.x);
          totalY += Math.abs(coords.y - lastPos.y);

          lastPos = coords;

          if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
            return;
          }

          // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
          if (totalY > totalX) {
            // Allow native scrolling to take over.
            active = false;
            eventHandlers['cancel'] && eventHandlers['cancel'](event);
            return;
          } else {
            // Prevent the browser from scrolling.
            event.preventDefault();
            eventHandlers['move'] && eventHandlers['move'](coords, event);
          }
        });

        element.on(getEvents(pointerTypes, 'end'), function(event) {
          if (!active) return;
          active = false;
          eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
        });
      }
    };
  }]);

  /* global ngTouch: false */

  /**
   * @ngdoc directive
   * @name ngClick
   *
   * @description
   * A more powerful replacement for the default ngClick designed to be used on touchscreen
   * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
   * the click event. This version handles them immediately, and then prevents the
   * following click event from propagating.
   *
   * Requires the {@link ngTouch `ngTouch`} module to be installed.
   *
   * This directive can fall back to using an ordinary click event, and so works on desktop
   * browsers as well as mobile.
   *
   * This directive also sets the CSS class `ng-click-active` while the element is being held
   * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
   *
   * @element ANY
   * @param {expression} ngClick {@link guide/expression Expression} to evaluate
   * upon tap. (Event object is available as `$event`)
   *
   * @example
   <example module="ngClickExample" deps="angular-touch.js">
   <file name="login.html">
   <button ng-click="count = count + 1" ng-init="count=0">
   Increment
   </button>
   count: {{ count }}
   </file>
   <file name="script.js">
   angular.module('ngClickExample', ['ngTouch']);
   </file>
   </example>
   */

  ngTouch.config(['$provide', function($provide) {
    $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
      // drop the default ngClick directive
      $delegate.shift();
      return $delegate;
    }]);
  }]);

  ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
      var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
      var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
      var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
      var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

      var ACTIVE_CLASS_NAME = 'ng-click-active';
      var lastPreventedTime;
      var touchCoordinates;
      var lastLabelClickCoordinates;


      // TAP EVENTS AND GHOST CLICKS
      //
      // Why tap events?
      // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
      // double-tapping, and then fire a click event.
      //
      // This delay sucks and makes mobile apps feel unresponsive.
      // So we detect touchstart, touchmove, touchcancel and touchend ourselves and determine when
      // the user has tapped on something.
      //
      // What happens when the browser then generates a click event?
      // The browser, of course, also detects the tap and fires a click after a delay. This results in
      // tapping/clicking twice. We do "clickbusting" to prevent it.
      //
      // How does it work?
      // We attach global touchstart and click handlers, that run during the capture (early) phase.
      // So the sequence for a tap is:
      // - global touchstart: Sets an "allowable region" at the point touched.
      // - element's touchstart: Starts a touch
      // (- touchmove or touchcancel ends the touch, no click follows)
      // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
      //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
      // - preventGhostClick() removes the allowable region the global touchstart created.
      // - The browser generates a click event.
      // - The global click handler catches the click, and checks whether it was in an allowable region.
      //     - If preventGhostClick was called, the region will have been removed, the click is busted.
      //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
      //       other elements without ngTap on them work normally.
      //
      // This is an ugly, terrible hack!
      // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
      // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
      // encapsulates this ugly logic away from the user.
      //
      // Why not just put click handlers on the element?
      // We do that too, just to be sure. If the tap event caused the DOM to change,
      // it is possible another element is now in that position. To take account for these possibly
      // distinct elements, the handlers are global and care only about coordinates.

      // Checks if the coordinates are close enough to be within the region.
      function hit(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
      }

      // Checks a list of allowable regions against a click location.
      // Returns true if the click should be allowed.
      // Splices out the allowable region from the list after it has been used.
      function checkAllowableRegions(touchCoordinates, x, y) {
        for (var i = 0; i < touchCoordinates.length; i += 2) {
          if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) {
            touchCoordinates.splice(i, i + 2);
            return true; // allowable region
          }
        }
        return false; // No allowable region; bust it.
      }

      // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
      // was called recently.
      function onClick(event) {
        if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
          return; // Too old.
        }

        var touches = event.touches && event.touches.length ? event.touches : [event];
        var x = touches[0].clientX;
        var y = touches[0].clientY;
        // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
        // and on the input element). Depending on the exact browser, this second click we don't want
        // to bust has either (0,0), negative coordinates, or coordinates equal to triggering label
        // click event
        if (x < 1 && y < 1) {
          return; // offscreen
        }
        if (lastLabelClickCoordinates &&
            lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y) {
          return; // input click triggered by label click
        }
        // reset label click coordinates on first subsequent click
        if (lastLabelClickCoordinates) {
          lastLabelClickCoordinates = null;
        }
        // remember label click coordinates to prevent click busting of trigger click event on input
        if (event.target.tagName.toLowerCase() === 'label') {
          lastLabelClickCoordinates = [x, y];
        }

        // Look for an allowable region containing this click.
        // If we find one, that means it was created by touchstart and not removed by
        // preventGhostClick, so we don't bust it.
        if (checkAllowableRegions(touchCoordinates, x, y)) {
          return;
        }

        // If we didn't find an allowable region, bust the click.
        event.stopPropagation();
        event.preventDefault();

        // Blur focused form elements
        event.target && event.target.blur();
      }


      // Global touchstart handler that creates an allowable region for a click event.
      // This allowable region can be removed by preventGhostClick if we want to bust it.
      function onTouchStart(event) {
        var touches = event.touches && event.touches.length ? event.touches : [event];
        var x = touches[0].clientX;
        var y = touches[0].clientY;
        touchCoordinates.push(x, y);

        $timeout(function() {
          // Remove the allowable region.
          for (var i = 0; i < touchCoordinates.length; i += 2) {
            if (touchCoordinates[i] == x && touchCoordinates[i + 1] == y) {
              touchCoordinates.splice(i, i + 2);
              return;
            }
          }
        }, PREVENT_DURATION, false);
      }

      // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
      // zone around the touchstart where clicks will get busted.
      function preventGhostClick(x, y) {
        if (!touchCoordinates) {
          $rootElement[0].addEventListener('click', onClick, true);
          $rootElement[0].addEventListener('touchstart', onTouchStart, true);
          touchCoordinates = [];
        }

        lastPreventedTime = Date.now();

        checkAllowableRegions(touchCoordinates, x, y);
      }

      // Actual linking function.
      return function(scope, element, attr) {
        var clickHandler = $parse(attr.ngClick),
            tapping = false,
            tapElement,  // Used to blur the element after a tap.
            startTime,   // Used to check if the tap was held too long.
            touchStartX,
            touchStartY;

        function resetState() {
          tapping = false;
          element.removeClass(ACTIVE_CLASS_NAME);
        }

        element.on('touchstart', function(event) {
          tapping = true;
          tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
          // Hack for Safari, which can target text nodes instead of containers.
          if (tapElement.nodeType == 3) {
            tapElement = tapElement.parentNode;
          }

          element.addClass(ACTIVE_CLASS_NAME);

          startTime = Date.now();

          // Use jQuery originalEvent
          var originalEvent = event.originalEvent || event;
          var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
          var e = touches[0];
          touchStartX = e.clientX;
          touchStartY = e.clientY;
        });

        element.on('touchmove', function(event) {
          resetState();
        });

        element.on('touchcancel', function(event) {
          resetState();
        });

        element.on('touchend', function(event) {
          var diff = Date.now() - startTime;

          // Use jQuery originalEvent
          var originalEvent = event.originalEvent || event;
          var touches = (originalEvent.changedTouches && originalEvent.changedTouches.length) ?
              originalEvent.changedTouches :
              ((originalEvent.touches && originalEvent.touches.length) ? originalEvent.touches : [originalEvent]);
          var e = touches[0];
          var x = e.clientX;
          var y = e.clientY;
          var dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));

          if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
            // Call preventGhostClick so the clickbuster will catch the corresponding click.
            preventGhostClick(x, y);

            // Blur the focused element (the button, probably) before firing the callback.
            // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
            // I couldn't get anything to work reliably on Android Chrome.
            if (tapElement) {
              tapElement.blur();
            }

            if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
              element.triggerHandler('click', [event]);
            }
          }

          resetState();
        });

        // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
        // something else nearby.
        element.onclick = function(event) { };

        // Actual click handler.
        // There are three different kinds of clicks, only two of which reach this point.
        // - On desktop browsers without touch events, their clicks will always come here.
        // - On mobile browsers, the simulated "fast" click will call this.
        // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
        // Therefore it's safe to use this directive on both mobile and desktop.
        element.on('click', function(event, touchend) {
          scope.$apply(function() {
            clickHandler(scope, {$event: (touchend || event)});
          });
        });

        element.on('mousedown', function(event) {
          element.addClass(ACTIVE_CLASS_NAME);
        });

        element.on('mousemove mouseup', function(event) {
          element.removeClass(ACTIVE_CLASS_NAME);
        });

      };
    }]);

  /* global ngTouch: false */

  /**
   * @ngdoc directive
   * @name ngSwipeLeft
   *
   * @description
   * Specify custom behavior when an element is swiped to the left on a touchscreen device.
   * A leftward swipe is a quick, right-to-left slide of the finger.
   * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
   * too.
   *
   * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
   * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
   *
   * Requires the {@link ngTouch `ngTouch`} module to be installed.
   *
   * @element ANY
   * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
   * upon left swipe. (Event object is available as `$event`)
   *
   * @example
   <example module="ngSwipeLeftExample" deps="angular-touch.js">
   <file name="login.html">
   <div ng-show="!showActions" ng-swipe-left="showActions = true">
   Some list content, like an email in the inbox
   </div>
   <div ng-show="showActions" ng-swipe-right="showActions = false">
   <button ng-click="reply()">Reply</button>
   <button ng-click="delete()">Delete</button>
   </div>
   </file>
   <file name="script.js">
   angular.module('ngSwipeLeftExample', ['ngTouch']);
   </file>
   </example>
   */

  /**
   * @ngdoc directive
   * @name ngSwipeRight
   *
   * @description
   * Specify custom behavior when an element is swiped to the right on a touchscreen device.
   * A rightward swipe is a quick, left-to-right slide of the finger.
   * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
   * too.
   *
   * Requires the {@link ngTouch `ngTouch`} module to be installed.
   *
   * @element ANY
   * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
   * upon right swipe. (Event object is available as `$event`)
   *
   * @example
   <example module="ngSwipeRightExample" deps="angular-touch.js">
   <file name="login.html">
   <div ng-show="!showActions" ng-swipe-left="showActions = true">
   Some list content, like an email in the inbox
   </div>
   <div ng-show="showActions" ng-swipe-right="showActions = false">
   <button ng-click="reply()">Reply</button>
   <button ng-click="delete()">Delete</button>
   </div>
   </file>
   <file name="script.js">
   angular.module('ngSwipeRightExample', ['ngTouch']);
   </file>
   </example>
   */

  function makeSwipeDirective(directiveName, direction, eventName) {
    ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
      // The maximum vertical delta for a swipe should be less than 75px.
      var MAX_VERTICAL_DISTANCE = 75;
      // Vertical distance should not be more than a fraction of the horizontal distance.
      var MAX_VERTICAL_RATIO = 0.3;
      // At least a 30px lateral motion is necessary for a swipe.
      var MIN_HORIZONTAL_DISTANCE = 30;

      return function(scope, element, attr) {
        var swipeHandler = $parse(attr[directiveName]);

        var startCoords, valid;

        function validSwipe(coords) {
          // Check that it's within the coordinates.
          // Absolute vertical distance must be within tolerances.
          // Horizontal distance, we take the current X - the starting X.
          // This is negative for leftward swipes and positive for rightward swipes.
          // After multiplying by the direction (-1 for left, +1 for right), legal swipes
          // (ie. same direction as the directive wants) will have a positive delta and
          // illegal ones a negative delta.
          // Therefore this delta must be positive, and larger than the minimum.
          if (!startCoords) return false;
          var deltaY = Math.abs(coords.y - startCoords.y);
          var deltaX = (coords.x - startCoords.x) * direction;
          return valid && // Short circuit for already-invalidated swipes.
              deltaY < MAX_VERTICAL_DISTANCE &&
              deltaX > 0 &&
              deltaX > MIN_HORIZONTAL_DISTANCE &&
              deltaY / deltaX < MAX_VERTICAL_RATIO;
        }

        var pointerTypes = ['touch'];
        if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
          pointerTypes.push('mouse');
        }
        $swipe.bind(element, {
          'start': function(coords, event) {
            startCoords = coords;
            valid = true;
          },
          'cancel': function(event) {
            valid = false;
          },
          'end': function(coords, event) {
            if (validSwipe(coords)) {
              scope.$apply(function() {
                element.triggerHandler(eventName);
                swipeHandler(scope, {$event: event});
              });
            }
          }
        }, pointerTypes);
      };
    }]);
  }

// Left is negative X-coordinate, right is positive.
  makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
  makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);;
/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function objectKeys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  angular.forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function indexOf(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params) continue;
    parentParams = objectKeys(parents[i].params);
    if (!parentParams.length) continue;

    for (var j in parentParams) {
      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
function indexBy(array, propName) {
  var result = {};
  forEach(array, function(item) {
    result[item[propName]] = item;
  });
  return result;
}

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
function pick(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  forEach(keys, function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
function omit(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  for (var key in obj) {
    if (indexOf(keys, key) == -1) copy[key] = obj[key];
  }
  return copy;
}

function pluck(collection, key) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = isFunction(key) ? key(val) : val[key];
  });
  return result;
}

function filter(collection, callback) {
  var array = isArray(collection);
  var result = array ? [] : {};
  forEach(collection, function(val, i) {
    if (callback(val, i)) {
      result[array ? result.length : i] = val;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = callback(val, i);
  });
  return result;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    var invocableKeys = objectKeys(invocables || {});
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, indexOf(cycle, key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = result.$$promises || true; // keep for isResolve()
          delete result.$$inheritedValues;
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      if (parent.$$inheritedValues) {
        merge(values, omit(parent.$$inheritedValues, invocableKeys));
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      extend(promises, parent.$$promises);
      if (parent.$$values) {
        merged = merge(values, omit(parent.$$values, invocableKeys));
        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
        done();
      } else {
        if (parent.$$inheritedValues) {
          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
        }        
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromProvider
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

var $$UMFP; // reference to $UrlMatcherFactoryProvider

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 * 
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon 
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 * 
 * Examples:
 * 
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 * @param {string} pattern  The pattern to compile into a matcher.
 * @param {Object} config  A configuration object hash:
 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
 *   an existing UrlMatcher
 *
 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the constructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when 
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New `UrlMatcher` object
 */
function UrlMatcher(pattern, config, parentMatcher) {
  config = extend({ params: {} }, isObject(config) ? config : {});

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                       - anything other than curly braces or backslash
  //    \\.                            - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      compiled = '^', last = 0, m,
      segments = this.segments = [],
      parentParams = parentMatcher ? parentMatcher.params : {},
      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
      paramNames = [];

  function addParameter(id, type, config, location) {
    paramNames.push(id);
    if (parentParams[id]) return parentParams[id];
    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    params[id] = new $$UMFP.Param(id, type, config, location);
    return params[id];
  }

  function quoteRegExp(string, pattern, squash) {
    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
    if (!pattern) return result;
    switch(squash) {
      case false: surroundPattern = ['(', ')'];   break;
      case true:  surroundPattern = ['?(', ')?']; break;
      default:    surroundPattern = ['(' + squash + "|", ')?'];  break;
    }
    return result + surroundPattern[0] + pattern + surroundPattern[1];
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  function matchDetails(m, isSearch) {
    var id, regexp, segment, type, cfg, arrayMode;
    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    cfg         = config.params[id];
    segment     = pattern.substring(last, m.index);
    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp) });
    return {
      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
    };
  }

  var p, param, segment;
  while ((m = placeholder.exec(pattern))) {
    p = matchDetails(m, false);
    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

    param = addParameter(p.id, p.type, p.cfg, "path");
    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash);
    segments.push(p.segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');

  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last + i);

    if (search.length > 0) {
      last = 0;
      while ((m = searchPlaceholder.exec(search))) {
        p = matchDetails(m, true);
        param = addParameter(p.id, p.type, p.cfg, "search");
        last = placeholder.lastIndex;
        // check if ?&
      }
    }
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
  segments.push(segment);

  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
  this.prefix = segments[0];
  this.$$paramNames = paramNames;
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * <pre>
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * </pre>
 *
 * @param {string} pattern  The pattern to append.
 * @param {Object} config  An object hash of the configuration for the matcher.
 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern, config) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  var defaultConfig = {
    caseInsensitive: $$UMFP.caseInsensitive(),
    strict: $$UMFP.strictMode(),
    squash: $$UMFP.defaultSquashPolicy()
  };
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
 *   x: '1', q: 'hello'
 * });
 * // returns { id: 'bob', q: 'hello', r: null }
 * </pre>
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;
  searchParams = searchParams || {};

  var paramNames = this.parameters(), nTotal = paramNames.length,
    nPath = this.segments.length - 1,
    values = {}, i, j, cfg, paramName;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  function decodePathArray(string) {
    function reverseString(str) { return str.split("").reverse().join(""); }
    function unquoteDashes(str) { return str.replace(/\\-/, "-"); }

    var split = reverseString(string).split(/-(?!\\)/);
    var allReversed = map(split, reverseString);
    return map(allReversed, unquoteDashes).reverse();
  }

  for (i = 0; i < nPath; i++) {
    paramName = paramNames[i];
    var param = this.params[paramName];
    var paramVal = m[i+1];
    // if the param value matches a pre-replace pair, replace the value before decoding.
    for (j = 0; j < param.replace; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
    values[paramName] = param.value(paramVal);
  }
  for (/**/; i < nTotal; i++) {
    paramName = paramNames[i];
    values[paramName] = this.params[paramName].value(searchParams[paramName]);
  }

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 * 
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function (param) {
  if (!isDefined(param)) return this.$$paramNames;
  return this.params[param] || null;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#validate
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Checks an object hash of parameters to validate their correctness according to the parameter
 * types of this `UrlMatcher`.
 *
 * @param {Object} params The object hash of parameters to validate.
 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
 */
UrlMatcher.prototype.validates = function (params) {
  return this.params.$$validates(params);
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * </pre>
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  values = values || {};
  var segments = this.segments, params = this.parameters(), paramset = this.params;
  if (!this.validates(values)) return null;

  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

  function encodeDashes(str) { // Replace dashes with encoded "\-"
    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
  }

  for (i = 0; i < nTotal; i++) {
    var isPathParam = i < nPath;
    var name = params[i], param = paramset[name], value = param.value(values[name]);
    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
    var squash = isDefaultValue ? param.squash : false;
    var encoded = param.type.encode(value);

    if (isPathParam) {
      var nextSegment = segments[i + 1];
      if (squash === false) {
        if (encoded != null) {
          if (isArray(encoded)) {
            result += map(encoded, encodeDashes).join("-");
          } else {
            result += encodeURIComponent(encoded);
          }
        }
        result += nextSegment;
      } else if (squash === true) {
        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
        result += nextSegment.match(capture)[1];
      } else if (isString(squash)) {
        result += squash + nextSegment;
      }
    } else {
      if (encoded == null || (isDefaultValue && squash !== false)) continue;
      if (!isArray(encoded)) encoded = [ encoded ];
      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
      result += (search ? '&' : '?') + (name + '=' + encoded);
      search = true;
    }
  }

  return result;
};

/**
 * @ngdoc object
 * @name ui.router.util.type:Type
 *
 * @description
 * Implements an interface to define custom parameter types that can be decoded from and encoded to
 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
 * objects when matching or formatting URLs, or comparing or validating parameter values.
 *
 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
 * information on registering custom types.
 *
 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
 *        properties will override the default methods and/or pattern in `Type`'s public interface.
 * @example
 * <pre>
 * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 * </pre>
 *
 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
 *           coming from a substring of a URL.
 *
 * @returns {Object}  Returns a new `Type` object.
 */
function Type(config) {
  extend(this, config);
}

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#is
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Detects whether a value is of a particular type. Accepts a native (decoded) value
 * and determines whether it matches the current `Type` object.
 *
 * @param {*} val  The value to check.
 * @param {string} key  Optional. If the type check is happening in the context of a specific
 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
 */
Type.prototype.is = function(val, key) {
  return true;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#encode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
 * only needs to be a representation of `val` that has been coerced to a string.
 *
 * @param {*} val  The value to encode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
 */
Type.prototype.encode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#decode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 *
 * @param {string} val  The URL parameter value to decode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {*}  Returns a custom representation of the URL parameter value.
 */
Type.prototype.decode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#equals
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Determines whether two decoded values are equivalent.
 *
 * @param {*} a  A value to compare against.
 * @param {*} b  A value to compare against.
 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
 */
Type.prototype.equals = function(a, b) {
  return a == b;
};

Type.prototype.$subPattern = function() {
  var sub = this.pattern.toString();
  return sub.substr(1, sub.length - 2);
};

Type.prototype.pattern = /.*/;

Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

/*
 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
 * e.g.:
 * - urlmatcher pattern "/path?{queryParam[]:int}"
 * - url: "/path?queryParam=1&queryParam=2
 * - $stateParams.queryParam will be [1, 2]
 * if `mode` is "auto", then
 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
 */
Type.prototype.$asArray = function(mode, isSearch) {
  if (!mode) return this;
  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");
  return new ArrayType(this, mode);

  function ArrayType(type, mode) {
    function bindTo(type, callbackName) {
      return function() {
        return type[callbackName].apply(type, arguments);
      };
    }

    // Wrap non-array value as array
    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
      switch(val.length) {
        case 0: return undefined;
        case 1: return mode === "auto" ? val[0] : val;
        default: return val;
      }
    }
    function falsey(val) { return !val; }

    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
      return function handleArray(val) {
        val = arrayWrap(val);
        var result = map(val, callback);
        if (allTruthyMode === true)
          return filter(result, falsey).length === 0;
        return arrayUnwrap(result);
      };
    }

    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
      return function handleArray(val1, val2) {
        var left = arrayWrap(val1), right = arrayWrap(val2);
        if (left.length !== right.length) return false;
        for (var i = 0; i < left.length; i++) {
          if (!callback(left[i], right[i])) return false;
        }
        return true;
      };
    }

    this.encode = arrayHandler(bindTo(type, 'encode'));
    this.decode = arrayHandler(bindTo(type, 'decode'));
    this.is     = arrayHandler(bindTo(type, 'is'), true);
    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
    this.pattern = type.pattern;
    this.$arrayMode = mode;
  }
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
 * is also available to providers under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {
  $$UMFP = this;

  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }
//  TODO: in 1.0, make string .is() return false if value is undefined by default.
//  function regexpMatches(val) { /*jshint validthis:true */ return isDefined(val) && this.pattern.test(val); }
  function regexpMatches(val) { /*jshint validthis:true */ return this.pattern.test(val); }

  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
    string: {
      encode: valToString,
      decode: valFromString,
      is: regexpMatches,
      pattern: /[^/]*/
    },
    int: {
      encode: valToString,
      decode: function(val) { return parseInt(val, 10); },
      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
      pattern: /\d+/
    },
    bool: {
      encode: function(val) { return val ? 1 : 0; },
      decode: function(val) { return parseInt(val, 10) !== 0; },
      is: function(val) { return val === true || val === false; },
      pattern: /0|1/
    },
    date: {
      encode: function (val) {
        if (!this.is(val))
          return undefined;
        return [ val.getFullYear(),
          ('0' + (val.getMonth() + 1)).slice(-2),
          ('0' + val.getDate()).slice(-2)
        ].join("-");
      },
      decode: function (val) {
        if (this.is(val)) return val;
        var match = this.capture.exec(val);
        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
      },
      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    },
    json: {
      encode: angular.toJson,
      decode: angular.fromJson,
      is: angular.isObject,
      equals: angular.equals,
      pattern: /[^/]*/
    },
    any: { // does not encode/decode
      encode: angular.identity,
      decode: angular.identity,
      is: angular.identity,
      equals: angular.equals,
      pattern: /.*/
    }
  };

  function getDefaultConfig() {
    return {
      strict: isStrictMode,
      caseInsensitive: isCaseInsensitive
    };
  }

  function isInjectable(value) {
    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
  }

  /**
   * [Internal] Get the default value of a parameter, which may be an injectable function.
   */
  $UrlMatcherFactory.$$getDefaultValue = function(config) {
    if (!isInjectable(config.value)) return config.value;
    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
    return injector.invoke(config.value);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URL matching should be case sensitive (the default behavior), or not.
   *
   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
   * @returns {boolean} the current value of caseInsensitive
   */
  this.caseInsensitive = function(value) {
    if (isDefined(value))
      isCaseInsensitive = value;
    return isCaseInsensitive;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#strictMode
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URLs should match trailing slashes, or not (the default behavior).
   *
   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
   * @returns {boolean} the current value of strictMode
   */
  this.strictMode = function(value) {
    if (isDefined(value))
      isStrictMode = value;
    return isStrictMode;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Sets the default behavior when generating or matching URLs with default parameter values.
   *
   * @param {string} value A string that defines the default parameter URL squashing behavior.
   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
   *             the parameter value from the URL and replace it with this string.
   */
  this.defaultSquashPolicy = function(value) {
    if (!isDefined(value)) return defaultSquashPolicy;
    if (value !== true && value !== false && !isString(value))
      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
    defaultSquashPolicy = value;
    return value;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
   *
   * @param {string} pattern  The URL pattern.
   * @param {Object} config  The config object hash.
   * @returns {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern, config) {
    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
   *          implementing all the same methods.
   */
  this.isMatcher = function (o) {
    if (!isObject(o)) return false;
    var result = true;

    forEach(UrlMatcher.prototype, function(val, name) {
      if (isFunction(val)) {
        result = result && (isDefined(o[name]) && isFunction(o[name]));
      }
    });
    return result;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#type
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
   * generate URLs with typed parameters.
   *
   * @param {string} name  The type name.
   * @param {Object|Function} definition   The type definition. See
   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
   *        runtime starts.  The result of this function is merged into the existing `definition`.
   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   *
   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
   *
   * @example
   * This is a simple example of a custom type that encodes and decodes items from an
   * array, using the array index as the URL-encoded value:
   *
   * <pre>
   * var list = ['John', 'Paul', 'George', 'Ringo'];
   *
   * $urlMatcherFactoryProvider.type('listItem', {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) > -1;
   *   }
   * });
   *
   * $stateProvider.state('list', {
   *   url: "/list/{item:listItem}",
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
   *
   * // ...
   *
   * // Changes URL to '/list/3', logs "Ringo" to the console
   * $state.go('list', { item: "Ringo" });
   * </pre>
   *
   * This is a more complex example of a type that relies on dependency injection to
   * interact with services, and uses the parameter name from the URL to infer how to
   * handle encoding and decoding parameter values:
   *
   * <pre>
   * // Defines a custom type that gets a value from a service,
   * // where each service gets different types of values from
   * // a backend API:
   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) && object.id && services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
   *
   * // In a config() block, you can then attach URLs with
   * // type-annotated parameters:
   * $stateProvider.state('users', {
   *   url: "/users",
   *   // ...
   * }).state('users.item', {
   *   url: "/{user:dbObject}",
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
   * </pre>
   */
  this.type = function (name, definition, definitionFn) {
    if (!isDefined(definition)) return $types[name];
    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

    $types[name] = new Type(extend({ name: name }, definition));
    if (definitionFn) {
      typeQueue.push({ name: name, def: definitionFn });
      if (!enqueue) flushTypeQueue();
    }
    return this;
  };

  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
  function flushTypeQueue() {
    while(typeQueue.length) {
      var type = typeQueue.shift();
      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
      angular.extend($types[type.name], injector.invoke(type.def));
    }
  }

  // Register default types. Store them in the prototype of $types.
  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
  $types = inherit($types, {});

  /* No need to document $get, since it returns this */
  this.$get = ['$injector', function ($injector) {
    injector = $injector;
    enqueue = false;
    flushTypeQueue();

    forEach(defaultTypes, function(type, name) {
      if (!$types[name]) $types[name] = new Type(type);
    });
    return this;
  }];

  this.Param = function Param(id, type, config, location) {
    var self = this;
    config = unwrapShorthand(config);
    type = getType(config, type, location);
    var arrayMode = getArrayMode();
    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
    var isOptional = config.value !== undefined;
    var squash = getSquashPolicy(config, isOptional);
    var replace = getReplace(config, arrayMode, isOptional, squash);

    function unwrapShorthand(config) {
      var keys = isObject(config) ? objectKeys(config) : [];
      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
      if (isShorthand) config = { value: config };
      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
      return config;
    }

    function getType(config, urlType, location) {
      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
      if (urlType) return urlType;
      if (!config.type) return (location === "config" ? $types.any : $types.string);
      return config.type instanceof Type ? config.type : new Type(config.type);
    }

    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
    function getArrayMode() {
      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
      return extend(arrayDefaults, arrayParamNomenclature, config).array;
    }

    /**
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional) {
      var squash = config.squash;
      if (!isOptional || squash === false) return false;
      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
      if (squash === true || isString(squash)) return squash;
      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }

    function getReplace(config, arrayMode, isOptional, squash) {
      var replace, configuredKeys, defaultPolicy = [
        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") }
      ];
      replace = isArray(config.replace) ? config.replace : [];
      if (isString(squash))
        replace.push({ from: squash, to: undefined });
      configuredKeys = map(replace, function(item) { return item.from; } );
      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    function $$getDefaultValue() {
      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
      return injector.invoke(config.$$fn);
    }

    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    function $value(value) {
      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
      function $replace(value) {
        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
        return replacement.length ? replacement[0] : value;
      }
      value = $replace(value);
      return isDefined(value) ? self.type.decode(value) : $$getDefaultValue();
    }

    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

    extend(this, {
      id: id,
      type: type,
      location: location,
      array: arrayMode,
      squash: squash,
      replace: replace,
      isOptional: isOptional,
      value: $value,
      dynamic: undefined,
      config: config,
      toString: toString
    });
  };

  function ParamSet(params) {
    extend(this, params || {});
  }

  ParamSet.prototype = {
    $$new: function() {
      return inherit(this, extend(new ParamSet(), { $$parent: this}));
    },
    $$keys: function () {
      var keys = [], chain = [], parent = this,
        ignore = objectKeys(ParamSet.prototype);
      while (parent) { chain.push(parent); parent = parent.$$parent; }
      chain.reverse();
      forEach(chain, function(paramset) {
        forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
        });
      });
      return keys;
    },
    $$values: function(paramValues) {
      var values = {}, self = this;
      forEach(self.$$keys(), function(key) {
        values[key] = self[key].value(paramValues && paramValues[key]);
      });
      return values;
    },
    $$equals: function(paramValues1, paramValues2) {
      var equal = true, self = this;
      forEach(self.$$keys(), function(key) {
        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
        if (!self[key].type.equals(left, right)) equal = false;
      });
      return equal;
    },
    $$validates: function $$validate(paramValues) {
      var result = true, isOptional, val, param, self = this;

      forEach(this.$$keys(), function(key) {
        param = self[key];
        val = paramValues[key];
        isOptional = !val && param.isOptional;
        result = result && (isOptional || !!param.type.is(val));
      });
      return result;
    },
    $$parent: undefined
  };

  this.ParamSet = ParamSet;
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
  var rules = [], otherwise = null, interceptDeferred = false, listener;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider` to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.rule = function (rule) {
    if (!isFunction(rule)) throw new Error("'rule' must be a function");
    rules.push(rule);
    return this;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalid route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     return '/a/valid/url';
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services, and must return a url string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.otherwise = function (rule) {
    if (isString(rule)) {
      var redirect = rule;
      rule = function () { return redirect; };
    }
    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
    otherwise = rule;
    return this;
  };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syntax of match
   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when = function (what, handler) {
    var redirect, handlerIsString = isString(handler);
    if (isString(what)) what = $urlMatcherFactory.compile(what);

    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
      throw new Error("invalid 'handler' in when()");

    var strategies = {
      matcher: function (what, handler) {
        if (handlerIsString) {
          redirect = $urlMatcherFactory.compile(handler);
          handler = ['$match', function ($match) { return redirect.format($match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
        }, {
          prefix: isString(what.prefix) ? what.prefix : ''
        });
      },
      regex: function (what, handler) {
        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

        if (handlerIsString) {
          redirect = handler;
          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path()));
        }, {
          prefix: regExpPrefix(what)
        });
      }
    };

    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

    for (var n in check) {
      if (check[n]) return this.rule(strategies[n](what, handler));
    }

    throw new Error("invalid 'what' in when()");
  };

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#deferIntercept
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Disables (or enables) deferring location change interception.
   *
   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
   * defer a transition but maintain the current URL), call this method at configuration time.
   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
   * `$locationChangeSuccess` event handler.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *
   *   // Prevent $urlRouter from automatically intercepting URL changes;
   *   // this allows you to configure custom behavior in between
   *   // location changes and route synchronization:
   *   $urlRouterProvider.deferIntercept();
   *
   * }).run(function ($rootScope, $urlRouter, UserService) {
   *
   *   $rootScope.$on('$locationChangeSuccess', function(e) {
   *     // UserService is an example service for managing user state
   *     if (UserService.isLoggedIn()) return;
   *
   *     // Prevent $urlRouter's default handler from firing
   *     e.preventDefault();
   *
   *     UserService.handleLogin().then(function() {
   *       // Once the user has logged in, sync the current URL
   *       // to the router:
   *       $urlRouter.sync();
   *     });
   *   });
   *
   *   // Configures $urlRouter's listener *after* your custom listener
   *   $urlRouter.listen();
   * });
   * </pre>
   *
   * @param {boolean} defer Indicates whether to defer location change interception. Passing
            no parameter is equivalent to `true`.
   */
  this.deferIntercept = function (defer) {
    if (defer === undefined) defer = true;
    interceptDeferred = defer;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   * @requires $browser
   *
   * @description
   *
   */
  this.$get = $get;
  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
  function $get(   $location,   $rootScope,   $injector,   $browser) {

    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

    function appendBasePath(url, isHtml5, absolute) {
      if (baseHref === '/') return url;
      if (isHtml5) return baseHref.slice(0, -1) + url;
      if (absolute) return baseHref.slice(1) + url;
      return url;
    }

    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
    function update(evt) {
      if (evt && evt.defaultPrevented) return;
      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
      lastPushedUrl = undefined;
      if (ignoreUpdate) return true;

      function check(rule) {
        var handled = rule($injector, $location);

        if (!handled) return false;
        if (isString(handled)) $location.replace().url(handled);
        return true;
      }
      var n = rules.length, i;

      for (i = 0; i < n; i++) {
        if (check(rules[i])) return;
      }
      // always check otherwise last to allow dynamic updates to the set of rules
      if (otherwise) check(otherwise);
    }

    function listen() {
      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
      return listener;
    }

    if (!interceptDeferred) listen();

    return {
      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#sync
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
       * with the transition by calling `$urlRouter.sync()`.
       *
       * @example
       * <pre>
       * angular.module('app', ['ui.router'])
       *   .run(function($rootScope, $urlRouter) {
       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
       *       // Halt state change from even starting
       *       evt.preventDefault();
       *       // Perform custom logic
       *       var meetsRequirement = ...
       *       // Continue with the update and state transition if logic allows
       *       if (meetsRequirement) $urlRouter.sync();
       *     });
       * });
       * </pre>
       */
      sync: function() {
        update();
      },

      listen: function() {
        return listen();
      },

      update: function(read) {
        if (read) {
          location = $location.url();
          return;
        }
        if ($location.url() === location) return;

        $location.url(location);
        $location.replace();
      },

      push: function(urlMatcher, params, options) {
        $location.url(urlMatcher.format(params || {}));
        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
        if (options && options.replace) $location.replace();
      },

      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#href
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * A URL generation method that returns the compiled URL for a given
       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
       *
       * @example
       * <pre>
       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
       *   person: "bob"
       * });
       * // $bob == "/about/bob";
       * </pre>
       *
       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
       *
       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
       */
      href: function(urlMatcher, params, options) {
        if (!urlMatcher.validates(params)) return null;

        var isHtml5 = $locationProvider.html5Mode();
        if (angular.isObject(isHtml5)) {
          isHtml5 = isHtml5.enabled;
        }
        
        var url = urlMatcher.format(params);
        options = options || {};

        if (!isHtml5 && url !== null) {
          url = "#" + $locationProvider.hashPrefix() + url;
        }
        url = appendBasePath(url, isHtml5, options.absolute);

        if (!options.absolute || !url) {
          return url;
        }

        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
        port = (port === 80 || port === 443 ? '' : ':' + port);

        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
      }
    };
  }
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url, config = { params: state.params || {} };

      if (isString(url)) {
        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
        return (state.parent.navigable || root).url.concat(url, config);
      }

      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
    ownParams: function(state) {
      var params = state.url && state.url.params || new $$UMFP.ParamSet();
      forEach(state.params || {}, function(config, id) {
        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
      });
      return params;
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    if (!stateOrName) return undefined;

    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      base = findState(base);
      
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function flushQueuedChildren(parentName) {
    var queued = queue[parentName] || [];
    while(queued.length) {
      registerState(queued.shift());
    }
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { inherit: true, location: false });
        }
      }]);
    }

    // Register any queued children
    flushQueuedChildren(name);

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(indexOf(segments, globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
   *   or `null`.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a `$state.includes()` test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function (state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(views, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/topicsDetails.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} stateConfig State configuration object.
   * @param {string|function=} stateConfig.template
   * <a id='template'></a>
   *   html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <pre>template:
   *   "<h1>inline template definition</h1>" +
   *   "<div ui-view></div>"</pre>
   * <pre>template: function(params) {
   *       return "<h1>generated template</h1>"; }</pre>
   * </div>
   *
   * @param {string|function=} stateConfig.templateUrl
   * <a id='templateUrl'></a>
   *
   *   path or function that returns a path to an html
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <pre>templateUrl: "home.html"</pre>
   * <pre>templateUrl: function(params) {
   *     return myTemplates[params.pageId]; }</pre>
   *
   * @param {function=} stateConfig.templateProvider
   * <a id='templateProvider'></a>
   *    Provider function that returns HTML content string.
   * <pre> templateProvider:
   *       function(MyTemplateService, params) {
   *         return MyTemplateService.getTemplate(params.pageId);
   *       }</pre>
   *
   * @param {string|function=} stateConfig.controller
   * <a id='controller'></a>
   *
   *  Controller fn that should be associated with newly
   *   related scope or the name of a registered controller if passed as a string.
   *   Optionally, the ControllerAs may be declared here.
   * <pre>controller: "MyRegisteredController"</pre>
   * <pre>controller:
   *     "MyRegisteredController as fooCtrl"}</pre>
   * <pre>controller: function($scope, MyService) {
   *     $scope.data = MyService.getData(); }</pre>
   *
   * @param {function=} stateConfig.controllerProvider
   * <a id='controllerProvider'></a>
   *
   * Injectable provider function that returns the actual controller or string.
   * <pre>controllerProvider:
   *   function(MyResolveData) {
   *     if (MyResolveData.foo)
   *       return "FooCtrl"
   *     else if (MyResolveData.bar)
   *       return "BarCtrl";
   *     else return function($scope) {
   *       $scope.baz = "Qux";
   *     }
   *   }</pre>
   *
   * @param {string=} stateConfig.controllerAs
   * <a id='controllerAs'></a>
   * 
   * A controller alias name. If present the controller will be
   *   published to scope under the controllerAs name.
   * <pre>controllerAs: "myCtrl"</pre>
   *
   * @param {object=} stateConfig.resolve
   * <a id='resolve'></a>
   *
   * An optional map&lt;string, function&gt; of dependencies which
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved before the controller is instantiated.
   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
   *   and the values of the resolved promises are injected into any controllers that reference them.
   *   If any  of the promises are rejected the $stateChangeError event is fired.
   *
   *   The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <pre>resolve: {
   *     myResolve1:
   *       function($http, $stateParams) {
   *         return $http.get("/api/foos/"+stateParams.fooID);
   *       }
   *     }</pre>
   *
   * @param {string=} stateConfig.url
   * <a id='url'></a>
   *
   *   A url fragment with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   * examples:
   * <pre>url: "/home"
   * url: "/users/:userid"
   * url: "/books/{bookid:[a-zA-Z_-]}"
   * url: "/books/{categoryid:int}"
   * url: "/books/{publishername:string}/{categoryid:int}"
   * url: "/messages?before&after"
   * url: "/messages?{before:date}&{after:date}"</pre>
   * url: "/messages/:mailboxid?{before:date}&{after:date}"
   *
   * @param {object=} stateConfig.views
   * <a id='views'></a>
   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
   * manually/explicitly.
   *
   * Examples:
   *
   * Targets three named `ui-view`s in the parent state's template
   * <pre>views: {
   *     header: {
   *       controller: "headerCtrl",
   *       templateUrl: "header.html"
   *     }, body: {
   *       controller: "bodyCtrl",
   *       templateUrl: "body.html"
   *     }, footer: {
   *       controller: "footCtrl",
   *       templateUrl: "footer.html"
   *     }
   *   }</pre>
   *
   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
   * <pre>views: {
   *     'header@top': {
   *       controller: "msgHeaderCtrl",
   *       templateUrl: "msgHeader.html"
   *     }, 'body': {
   *       controller: "messagesCtrl",
   *       templateUrl: "messages.html"
   *     }
   *   }</pre>
   *
   * @param {boolean=} [stateConfig.abstract=false]
   * <a id='abstract'></a>
   * An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   * <pre>abstract: true</pre>
   *
   * @param {function=} stateConfig.onEnter
   * <a id='onEnter'></a>
   *
   * Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onEnter: function(MyService, $stateParams) {
   *     MyService.foo($stateParams.myParam);
   * }</pre>
   *
   * @param {function=} stateConfig.onExit
   * <a id='onExit'></a>
   *
   * Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onExit: function(MyService, $stateParams) {
   *     MyService.cleanup($stateParams.myParam);
   * }</pre>
   *
   * @param {boolean=} [stateConfig.reloadOnSearch=true]
   * <a id='reloadOnSearch'></a>
   *
   * If `false`, will not retrigger the same state
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   * <pre>reloadOnSearch: false</pre>
   *
   * @param {object=} stateConfig.data
   * <a id='data'></a>
   *
   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
   *   prototypally inherited.  In other words, adding a data property to a state adds it to
   *   the entire subtree via prototypal inheritance.
   *
   * <pre>data: {
   *     requiredRole: 'foo'
   * } </pre>
   *
   * @param {object=} stateConfig.params
   * <a id='params'></a>
   *
   * A map which optionally configures parameters declared in the `url`, or
   *   defines additional non-url parameters.  For each parameter being
   *   configured, add a configuration object keyed to the name of the parameter.
   *
   *   Each parameter configuration object may contain the following properties:
   *
   *   - ** value ** - {object|function=}: specifies the default value for this
   *     parameter.  This implicitly sets this parameter as optional.
   *
   *     When UI-Router routes to a state and no value is
   *     specified for this parameter in the URL or transition, the
   *     default value will be used instead.  If `value` is a function,
   *     it will be injected and invoked, and the return value used.
   *
   *     *Note*: `undefined` is treated as "no default value" while `null`
   *     is treated as "the default value is `null`".
   *
   *     *Shorthand*: If you only need to configure the default value of the
   *     parameter, you may use a shorthand syntax.   In the **`params`**
   *     map, instead mapping the param name to a full parameter configuration
   *     object, simply set map it to the default parameter value, e.g.:
   *
   * <pre>// define a parameter's default value
   * params: {
   *     param1: { value: "defaultValue" }
   * }
   * // shorthand default values
   * params: {
   *     param1: "defaultValue",
   *     param2: "param2Default"
   * }</pre>
   *
   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
   *     treated as an array of values.  If you specified a Type, the value will be
   *     treated as an array of the specified Type.  Note: query parameter values
   *     default to a special `"auto"` mode.
   *
   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
   *     value (e.g.: `{ foo: '1' }`).
   *
   * <pre>params: {
   *     param1: { array: true }
   * }</pre>
   *
   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
   *     configured default squash policy.
   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
   *
   *   There are three squash settings:
   *
   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
   *       This can allow for cleaner looking URLs.
   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
   *
   * <pre>params: {
   *     param1: {
   *       value: "defaultId",
   *       squash: true
   * } }
   * // squash "defaultValue" to "~"
   * params: {
   *     param1: {
   *       value: "defaultValue",
   *       squash: "~"
   * } }
   * </pre>
   *
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   * @requires ui.router.router.$urlRouter
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));

    // Handles the case where a state which is the target of a transition is not found, and the user
    // can optionally retry or defer the transition
    function handleRedirect(redirect, state, params, options) {
      /**
       * @ngdoc event
       * @name ui.router.state.$state#$stateNotFound
       * @eventOf ui.router.state.$state
       * @eventType broadcast on root scope
       * @description
       * Fired when a requested state **cannot be found** using the provided state name during transition.
       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
       *
       * @param {Object} event Event object.
       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
       * @param {State} fromState Current state object.
       * @param {Object} fromParams Current state params.
       *
       * @example
       *
       * <pre>
       * // somewhere, assume lazy.state has not been defined
       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
       *
       * // somewhere else
       * $scope.$on('$stateNotFound',
       * function(event, unfoundState, fromState, fromParams){
       *     console.log(unfoundState.to); // "lazy.state"
       *     console.log(unfoundState.toParams); // {a:1, b:2}
       *     console.log(unfoundState.options); // {inherit:false} + default options
       * })
       * </pre>
       */
      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

      if (evt.defaultPrevented) {
        $urlRouter.update();
        return TransitionAborted;
      }

      if (!evt.retry) {
        return null;
      }

      // Allow the handler to return a promise to defer state lookup retry
      if (options.$retry) {
        $urlRouter.update();
        return TransitionFailed;
      }
      var retryTransition = $state.transition = $q.when(evt.retry);

      retryTransition.then(function() {
        if (retryTransition !== $state.transition) return TransitionSuperseded;
        redirect.options.$retry = true;
        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
      }, function() {
        return TransitionAborted;
      });
      $urlRouter.update();

      return retryTransition;
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };

    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved, events are not re-fired, 
     * and controllers reinstantiated (bug with controllers reinstantiating right now, fixing soon).
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.reload = function reload() {
      return $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      if (!isDefined(toState)) {
        var redirect = { to: to, toParams: toParams, options: options };
        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

        if (redirectResult) {
          return redirectResult;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);

        if (!isDefined(toState)) {
          if (!options.relative) throw new Error("No such state '" + to + "'");
          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      if (!toState.params.$$validates(toParams)) return TransitionFailed;

      toParams = toState.params.$$values(toParams);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

      if (!options.reload) {
        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change
      // that we've initiated ourselves, because we might accidentally abort a legitimate
      // transition initiated from code?
      if (shouldTriggerReload(to, from, locals, options)) {
        if (to.self.reloadOnSearch !== false) $urlRouter.update();
        $state.transition = null;
        return $q.when($state.current);
      }

      // Filter parameters before we pass them to event handlers etc.
      toParams = filterByKeys(to.params.$$keys(), toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
          $urlRouter.update();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);

      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l = fromPath.length - 1; l >= keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l = keep; l < toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        if (options.location && to.navigable) {
          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        $urlRouter.update(true);

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

        if (!evt.defaultPrevented) {
            $urlRouter.update();
        }

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * </pre>
     *
     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
     * test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) { return undefined; }
      if ($state.$current !== state) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * Partial and relative names
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     *
     * // Using relative names (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
     * </pre>
     *
     * Basic globbing patterns
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name, relative name, or glob pattern
     * to be searched for within the current state name.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
     * that you'd like to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
     * .includes will test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    $state.includes = function includes(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (!doesStateMatchGlob(stateOrName)) {
          return false;
        }
        stateOrName = $state.$current.name;
      }

      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) { return undefined; }
      if (!isDefined($state.$current.includes[state.name])) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({
        lossy:    true,
        inherit:  true,
        absolute: false,
        relative: $state.$current
      }, options || {});

      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) return null;
      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
      
      var nav = (state && options.lossy) ? state.navigable : state;

      if (!nav || nav.url === undefined || nav.url === null) {
        return null;
      }
      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys(), params || {}), {
        absolute: options.absolute
      });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
     * @returns {Object|Array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
      var state = findState(stateOrName, context || $state.$current);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [dst.resolve.then(function (globals) {
        dst.globals = globals;
      })];
      if (inherited) promises.push(inherited);

      // Resolve template and dependencies for all views.
      forEach(state.views, function (view, name) {
        var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
        injectables.$template = [ function () {
          return $view.load(name, { view: view, locals: locals, params: $stateParams, notify: options.notify }) || '';
        }];

        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
          // References to the controller (only instantiated at link time)
          if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
            var injectLocals = angular.extend({}, injectables, locals);
            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
          } else {
            result.$$controller = view.controller;
          }
          // Provide access to the state itself for internal use
          result.$$state = state;
          result.$$controllerAs = view.controllerAs;
          dst[name] = result;
        }));
      });

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldTriggerReload(to, from, locals, options) {
    if (to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false))) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .value('$stateParams', {})
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result && options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * <pre>
         * $scope.$on('$viewContentLoading',
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property 'targetView'
         *     // viewConfig.targetView
         * });
         * </pre>
         */
          $rootScope.$broadcast('$viewContentLoading', options);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} name A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) {
          var promise = $animate.enter(element, null, target, cb);
          if (promise && promise.then) promise.then(cb);
        },
        leave: function(element, cb) {
          var promise = $animate.leave(element, cb);
          if (promise && promise.then) promise.then(cb);
        }
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });
        scope.$on('$viewContentLoading', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope,
              name            = getUiViewName(scope, attrs, $element, $interpolate),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
          newScope = scope.$new();
          latestLocals = $state.$current.locals[name];

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if(currentScope) {
                currentScope.$emit('$viewContentAnimationEnded');
              }

              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
          currentScope.$emit('$viewContentLoaded');
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var current = $state.$current,
            name = getUiViewName(scope, attrs, $element, $interpolate),
            locals  = current && current.locals[name];

        if (! locals) {
          return;
        }

        $element.data('$uiView', { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

/**
 * Shared ui-view code for both directives:
 * Given scope, element, and its attributes, return the view's name
 */
function getUiViewName(scope, attrs, element, $interpolate) {
  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
  var inherited = element.inheritedData('$uiView');
  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref, current) {
  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
  if (preparsed) ref = current + '(' + preparsed[1] + ')';
  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate & update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 * 
 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  var allowedOptions = ['location', 'inherit', 'reload'];

  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref, $state.current.name);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      var newHref = null, isAnchor = element.prop("tagName") === "A";
      var isForm = element[0].nodeName === "FORM";
      var attr = isForm ? "action" : "href", nav = true;

      var options = { relative: base, inherit: true };
      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

      angular.forEach(allowedOptions, function(option) {
        if (option in optionsOverride) {
          options[option] = optionsOverride[option];
        }
      });

      var update = function(newVal) {
        if (newVal) params = angular.copy(newVal);
        if (!nav) return;

        newHref = $state.href(ref.state, params, options);

        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
        if (activeDirective) {
          activeDirective.$$setStateInfo(ref.state, params);
        }
        if (newHref === null) {
          nav = false;
          return false;
        }
        attrs.$set(attr, newHref);
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = angular.copy(scope.$eval(ref.paramExpr));
      }
      update();

      if (isForm) return;

      element.bind("click", function(e) {
        var button = e.which || e.button;
        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          var transition = $timeout(function() {
            $state.go(ref.state, params, options);
          });
          e.preventDefault();

          // if the state has no URL, ignore one preventDefault from the <a> directive.
          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
          e.preventDefault = function() {
            if (ignorePreventDefaultCount-- <= 0)
              $timeout.cancel(transition);
          };
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
 * ui-sref-active found at the same level or above the ui-sref will be used.
 *
 * Will activate when the ui-sref's target state or any child state is active. If you
 * need to activate only when the ui-sref target state is active and *not* any of
 * it's children, then you will use
 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 *
 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * The class name is interpolated **once** during the directives link time (any further changes to the
 * interpolated value are ignored).
 *
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 */

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active-eq
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
 * when the exact target state used in the `ui-sref` is active; no child states.
 *
 */
$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateRefActiveDirective($state, $stateParams, $interpolate) {
  return  {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      var state, params, activeClass;

      // There probably isn't much point in $observing this
      // uiSrefActive and uiSrefActiveEq share the same directive object with some
      // slight difference in logic routing
      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

      // Allow uiSref to communicate with uiSrefActive[Equals]
      this.$$setStateInfo = function (newState, newParams) {
        state = $state.get(newState, stateContext($element));
        params = newParams;
        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      // Update route state
      function update() {
        if (isMatch()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function isMatch() {
        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
          return state && $state.is(state.name, params);
        } else {
          return state && $state.includes(state.name, params);
        }
      }
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateRefActiveDirective)
  .directive('uiSrefActiveEq', $StateRefActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  var isFilter = function (state) {
    return $state.is(state);
  };
  isFilter.$stateful = true;
  return isFilter;
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  var includesFilter = function (state) {
    return $state.includes(state);
  };
  includesFilter.$stateful = true;
  return  includesFilter;
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);;
(function () {
	"use strict";
	/**
	 * Bindonce - Zero watches binding for AngularJs
	 * @version v0.3.3
	 * @link https://github.com/Pasvaz/bindonce
	 * @author Pasquale Vazzana <pasqualevazzana@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	var bindonceModule = angular.module('pasvaz.bindonce', []);

	bindonceModule.directive('bindonce', function ()
	{
		var toBoolean = function (value)
		{
			if (value && value.length !== 0)
			{
				var v = angular.lowercase("" + value);
				value = !(v === 'f' || v === '0' || v === 'false' || v === 'no' || v === 'n' || v === '[]');
			}
			else
			{
				value = false;
			}
			return value;
		};

		var msie = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		if (isNaN(msie))
		{
			msie = parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		}

		var bindonceDirective =
		{
			restrict: "AM",
			controller: ['$scope', '$element', '$attrs', '$interpolate', function ($scope, $element, $attrs, $interpolate)
			{
				var showHideBinder = function (elm, attr, value)
				{
					var show = (attr === 'show') ? '' : 'none';
					var hide = (attr === 'hide') ? '' : 'none';
					elm.css('display', toBoolean(value) ? show : hide);
				};
				var classBinder = function (elm, value)
				{
					if (angular.isObject(value) && !angular.isArray(value))
					{
						var results = [];
						angular.forEach(value, function (value, index)
						{
							if (value) results.push(index);
						});
						value = results;
					}
					if (value)
					{
						elm.addClass(angular.isArray(value) ? value.join(' ') : value);
					}
				};
				var transclude = function (transcluder, scope)
				{
					transcluder.transclude(scope, function (clone)
					{
						var parent = transcluder.element.parent();
						var afterNode = transcluder.element && transcluder.element[transcluder.element.length - 1];
						var parentNode = parent && parent[0] || afterNode && afterNode.parentNode;
						var afterNextSibling = (afterNode && afterNode.nextSibling) || null;
						angular.forEach(clone, function (node)
						{
							parentNode.insertBefore(node, afterNextSibling);
						});
					});
				};

				var ctrl =
				{
					watcherRemover: undefined,
					binders: [],
					group: $attrs.boName,
					element: $element,
					ran: false,

					addBinder: function (binder)
					{
						this.binders.push(binder);

						// In case of late binding (when using the directive bo-name/bo-parent)
						// it happens only when you use nested bindonce, if the bo-children
						// are not dom children the linking can follow another order
						if (this.ran)
						{
							this.runBinders();
						}
					},

					setupWatcher: function (bindonceValue)
					{
						var that = this;
						this.watcherRemover = $scope.$watch(bindonceValue, function (newValue)
						{
							if (newValue === undefined) return;
							that.removeWatcher();
							that.checkBindonce(newValue);
						}, true);
					},

					checkBindonce: function (value)
					{
						var that = this, promise = (value.$promise) ? value.$promise.then : value.then;
						// since Angular 1.2 promises are no longer
						// undefined until they don't get resolved
						if (typeof promise === 'function')
						{
							promise(function ()
							{
								that.runBinders();
							});
						}
						else
						{
							that.runBinders();
						}
					},

					removeWatcher: function ()
					{
						if (this.watcherRemover !== undefined)
						{
							this.watcherRemover();
							this.watcherRemover = undefined;
						}
					},

					runBinders: function ()
					{
						while (this.binders.length > 0)
						{
							var binder = this.binders.shift();
							if (this.group && this.group != binder.group) continue;
							var value = binder.scope.$eval((binder.interpolate) ? $interpolate(binder.value) : binder.value);
							switch (binder.attr)
							{
								case 'boIf':
									if (toBoolean(value))
									{
										transclude(binder, binder.scope.$new());
									}
									break;
								case 'boSwitch':
									var selectedTranscludes, switchCtrl = binder.controller[0];
									if ((selectedTranscludes = switchCtrl.cases['!' + value] || switchCtrl.cases['?']))
									{
										binder.scope.$eval(binder.attrs.change);
										angular.forEach(selectedTranscludes, function (selectedTransclude)
										{
											transclude(selectedTransclude, binder.scope.$new());
										});
									}
									break;
								case 'boSwitchWhen':
									var ctrl = binder.controller[0];
									ctrl.cases['!' + binder.attrs.boSwitchWhen] = (ctrl.cases['!' + binder.attrs.boSwitchWhen] || []);
									ctrl.cases['!' + binder.attrs.boSwitchWhen].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'boSwitchDefault':
									var ctrl = binder.controller[0];
									ctrl.cases['?'] = (ctrl.cases['?'] || []);
									ctrl.cases['?'].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'hide':
								case 'show':
									showHideBinder(binder.element, binder.attr, value);
									break;
								case 'class':
									classBinder(binder.element, value);
									break;
								case 'text':
									binder.element.text(value);
									break;
								case 'html':
									binder.element.html(value);
									break;
								case 'style':
									binder.element.css(value);
									break;
								case 'disabled':
									binder.element.prop('disabled', value);
									break;
								case 'src':
									binder.element.attr(binder.attr, value);
									if (msie) binder.element.prop('src', value);
									break;
								case 'attr':
									angular.forEach(binder.attrs, function (attrValue, attrKey)
									{
										var newAttr, newValue;
										if (attrKey.match(/^boAttr./) && binder.attrs[attrKey])
										{
											newAttr = attrKey.replace(/^boAttr/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
											newValue = binder.scope.$eval(binder.attrs[attrKey]);
											binder.element.attr(newAttr, newValue);
										}
									});
									break;
								case 'href':
								case 'alt':
								case 'title':
								case 'id':
								case 'value':
									binder.element.attr(binder.attr, value);
									break;
							}
						}
						this.ran = true;
					}
				};

				angular.extend(this, ctrl);
			}],

			link: function (scope, elm, attrs, bindonceController)
			{
				var value = attrs.bindonce && scope.$eval(attrs.bindonce);
				if (value !== undefined)
				{
					bindonceController.checkBindonce(value);
				}
				else
				{
					bindonceController.setupWatcher(attrs.bindonce);
					elm.bind("$destroy", bindonceController.removeWatcher);
				}
			}
		};

		return bindonceDirective;
	});

	angular.forEach(
	[
		{ directiveName: 'boShow', attribute: 'show' },
		{ directiveName: 'boHide', attribute: 'hide' },
		{ directiveName: 'boClass', attribute: 'class' },
		{ directiveName: 'boText', attribute: 'text' },
		{ directiveName: 'boBind', attribute: 'text' },
		{ directiveName: 'boHtml', attribute: 'html' },
		{ directiveName: 'boSrcI', attribute: 'src', interpolate: true },
		{ directiveName: 'boSrc', attribute: 'src' },
		{ directiveName: 'boHrefI', attribute: 'href', interpolate: true },
		{ directiveName: 'boHref', attribute: 'href' },
		{ directiveName: 'boAlt', attribute: 'alt' },
		{ directiveName: 'boTitle', attribute: 'title' },
		{ directiveName: 'boId', attribute: 'id' },
		{ directiveName: 'boStyle', attribute: 'style' },
		{ directiveName: 'boDisabled', attribute: 'disabled' },
		{ directiveName: 'boValue', attribute: 'value' },
		{ directiveName: 'boAttr', attribute: 'attr' },

		{ directiveName: 'boIf', transclude: 'element', terminal: true, priority: 1000 },
		{ directiveName: 'boSwitch', require: 'boSwitch', controller: function () { this.cases = {}; } },
		{ directiveName: 'boSwitchWhen', transclude: 'element', priority: 800, require: '^boSwitch' },
		{ directiveName: 'boSwitchDefault', transclude: 'element', priority: 800, require: '^boSwitch' }
	],
	function (boDirective)
	{
		var childPriority = 200;
		return bindonceModule.directive(boDirective.directiveName, function ()
		{
			var bindonceDirective =
			{
				priority: boDirective.priority || childPriority,
				transclude: boDirective.transclude || false,
				terminal: boDirective.terminal || false,
				require: ['^bindonce'].concat(boDirective.require || []),
				controller: boDirective.controller,
				compile: function (tElement, tAttrs, transclude)
				{
					return function (scope, elm, attrs, controllers)
					{
						var bindonceController = controllers[0];
						var name = attrs.boParent;
						if (name && bindonceController.group !== name)
						{
							var element = bindonceController.element.parent();
							bindonceController = undefined;
							var parentValue;

							while (element[0].nodeType !== 9 && element.length)
							{
								if ((parentValue = element.data('$bindonceController'))
									&& parentValue.group === name)
								{
									bindonceController = parentValue;
									break;
								}
								element = element.parent();
							}
							if (!bindonceController)
							{
								throw new Error("No bindonce controller: " + name);
							}
						}

						bindonceController.addBinder(
						{
							element: elm,
							attr: boDirective.attribute || boDirective.directiveName,
							attrs: attrs,
							value: attrs[boDirective.directiveName],
							interpolate: boDirective.interpolate,
							group: name,
							transclude: transclude,
							controller: controllers.slice(1),
							scope: scope
						});
					};
				}
			};

			return bindonceDirective;
		});
	})
})();
;
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
;
(function(){

    var LSwiperMaker = function(o){

        var that = this;
        this.config = o;
        this.control = false;
        this.sPos = {};
        this.mPos = {};
        this.dire;

        // this.config.bind.addEventListener('touchstart', function(){ return that.start(); } ,false);
        // 这样不对的，event对象只在事件发生的过程中才有效;
        this.config.bind.addEventListener('touchstart', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('touchmove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('touchend', function(e){ return that.end(e); } ,false);

    }

    LSwiperMaker.prototype.start = function(e){

        var point = e.touches ? e.touches[0] : e;
        this.sPos.x = point.screenX;
        this.sPos.y = point.screenY;

    }
    LSwiperMaker.prototype.move = function(e){

        var point = e.touches ? e.touches[0] : e;
        this.control = true;
        this.mPos.x = point.screenX;
        this.mPos.y = point.screenY;

    }

    LSwiperMaker.prototype.end = function(e){

        this.config.dire_h  && (!this.control ? this.dire = null : this.mPos.x > this.sPos.x ? this.dire = 'R' : this.dire = 'L')
        this.config.dire_h  || (!this.control ? this.dire = null : this.mPos.y > this.sPos.y ? this.dire = 'D' : this.dire = 'U')

        this.control = false;
        this.config.backfn(this);

    }

    window.LSwiperMaker = LSwiperMaker;

}())