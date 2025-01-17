import{g as xl,a as xa,n as vl,w as fi,u as hi,b as Ml,e as yl,r as Lt,_ as va,o as Gt,f as Zt,h as We,i as Ci,d as xi,j as Ma,t as ya,k as lr,l as ba,m as hr,p as bl,q as zi,s as si,v as Sl,c as wl,x as El,y as Tl,z as Al,F as Cl}from"./index-fdcf54f6.js";var Ns;const Sa=typeof window<"u",Ll=i=>typeof i=="string",us=()=>{};Sa&&((Ns=window==null?void 0:window.navigator)!=null&&Ns.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ws(i){return typeof i=="function"?i():hi(i)}function Pl(i,e){function t(...n){return new Promise((r,s)=>{Promise.resolve(i(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(r).catch(s)})}return t}const Rl=i=>i();function Dl(i,e=!0,t=!0,n=!1){let r=0,s,a=!0,o=us,c;const l=()=>{s&&(clearTimeout(s),s=void 0,o(),o=us)};return h=>{const f=ws(i),m=Date.now()-r,x=()=>c=h();return l(),f<=0?(r=Date.now(),x()):(m>f&&(t||!a)?(r=Date.now(),x()):e&&(c=new Promise((d,p)=>{o=n?p:d,s=setTimeout(()=>{r=Date.now(),a=!0,d(x()),l()},Math.max(0,f-m))})),!t&&!s&&(s=setTimeout(()=>a=!0,f)),a=!1,c)}}function Il(i){return i}function Nl(i){return Ml()?(yl(i),!0):!1}function Fl(i,e=!0){xl()?xa(i):e?i():vl(i)}var Fs=Object.getOwnPropertySymbols,Ol=Object.prototype.hasOwnProperty,Ul=Object.prototype.propertyIsEnumerable,zl=(i,e)=>{var t={};for(var n in i)Ol.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&Fs)for(var n of Fs(i))e.indexOf(n)<0&&Ul.call(i,n)&&(t[n]=i[n]);return t};function Bl(i,e,t={}){const n=t,{eventFilter:r=Rl}=n,s=zl(n,["eventFilter"]);return fi(i,Pl(r,e),s)}var kl=Object.defineProperty,Gl=Object.defineProperties,Vl=Object.getOwnPropertyDescriptors,dr=Object.getOwnPropertySymbols,wa=Object.prototype.hasOwnProperty,Ea=Object.prototype.propertyIsEnumerable,Os=(i,e,t)=>e in i?kl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Hl=(i,e)=>{for(var t in e||(e={}))wa.call(e,t)&&Os(i,t,e[t]);if(dr)for(var t of dr(e))Ea.call(e,t)&&Os(i,t,e[t]);return i},Wl=(i,e)=>Gl(i,Vl(e)),ql=(i,e)=>{var t={};for(var n in i)wa.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&dr)for(var n of dr(i))e.indexOf(n)<0&&Ea.call(i,n)&&(t[n]=i[n]);return t};function Xl(i,e,t={}){const n=t,{throttle:r=0,trailing:s=!0,leading:a=!0}=n,o=ql(n,["throttle","trailing","leading"]);return Bl(i,e,Wl(Hl({},o),{eventFilter:Dl(r,s,a)}))}function jl(i){var e;const t=ws(i);return(e=t==null?void 0:t.$el)!=null?e:t}const Ta=Sa?window:void 0;function Us(...i){let e,t,n,r;if(Ll(i[0])||Array.isArray(i[0])?([t,n,r]=i,e=Ta):[e,t,n,r]=i,!e)return us;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},o=(u,h,f,m)=>(u.addEventListener(h,f,m),()=>u.removeEventListener(h,f,m)),c=fi(()=>[jl(e),ws(r)],([u,h])=>{a(),u&&s.push(...t.flatMap(f=>n.map(m=>o(u,f,m,h))))},{immediate:!0,flush:"post"}),l=()=>{c(),a()};return Nl(l),l}const zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bs="__vueuse_ssr_handlers__";zs[Bs]=zs[Bs]||{};var ks;(function(i){i.UP="UP",i.RIGHT="RIGHT",i.DOWN="DOWN",i.LEFT="LEFT",i.NONE="NONE"})(ks||(ks={}));var Yl=Object.defineProperty,Gs=Object.getOwnPropertySymbols,$l=Object.prototype.hasOwnProperty,Zl=Object.prototype.propertyIsEnumerable,Vs=(i,e,t)=>e in i?Yl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Kl=(i,e)=>{for(var t in e||(e={}))$l.call(e,t)&&Vs(i,t,e[t]);if(Gs)for(var t of Gs(e))Zl.call(e,t)&&Vs(i,t,e[t]);return i};const Jl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Kl({linear:Il},Jl);function Ql(i={}){const{window:e=Ta,initialWidth:t=1/0,initialHeight:n=1/0,listenOrientation:r=!0,includeScrollbar:s=!0}=i,a=Lt(t),o=Lt(n),c=()=>{e&&(s?(a.value=e.innerWidth,o.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,o.value=e.document.documentElement.clientHeight))};return c(),Fl(c),Us("resize",c,{passive:!0}),r&&Us("orientationchange",c,{passive:!0}),{width:a,height:o}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Es="150",mn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,Hs=1,tc=2,Aa=1,nc=2,Li=3,Sn=0,Pt=1,xn=2,bn=0,li=1,Ws=2,qs=3,Xs=4,ic=5,ri=100,rc=101,sc=102,js=103,Ys=104,oc=200,ac=201,lc=202,cc=203,Ca=204,La=205,uc=206,fc=207,hc=208,dc=209,pc=210,mc=0,gc=1,_c=2,fs=3,xc=4,vc=5,Mc=6,yc=7,Pa=0,bc=1,Sc=2,cn=0,wc=1,Ec=2,Tc=3,Ac=4,Cc=5,Ra=300,di=301,pi=302,hs=303,ds=304,xr=306,ps=1e3,Bt=1001,ms=1002,xt=1003,$s=1004,Pr=1005,Nt=1006,Lc=1007,Ri=1008,zn=1009,Pc=1010,Rc=1011,Da=1012,Dc=1013,Fn=1014,On=1015,Di=1016,Ic=1017,Nc=1018,ci=1020,Fc=1021,kt=1023,Oc=1024,Uc=1025,Un=1026,mi=1027,zc=1028,Bc=1029,kc=1030,Gc=1031,Vc=1033,Rr=33776,Dr=33777,Ir=33778,Nr=33779,Zs=35840,Ks=35841,Js=35842,Qs=35843,Hc=36196,eo=37492,to=37496,no=37808,io=37809,ro=37810,so=37811,oo=37812,ao=37813,lo=37814,co=37815,uo=37816,fo=37817,ho=37818,po=37819,mo=37820,go=37821,Fr=36492,Wc=36283,_o=36284,xo=36285,vo=36286,Bn=3e3,He=3001,qc=3200,Xc=3201,jc=0,Yc=1,jt="srgb",Ii="srgb-linear",Ia="display-p3",Or=7680,$c=519,Mo=35044,yo="300 es",gs=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,bo=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function So(i){return(i&i-1)===0&&i!==0}function Kc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],x=n[8],d=r[0],p=r[3],v=r[6],w=r[1],_=r[4],b=r[7],E=r[2],P=r[5],T=r[8];return s[0]=a*d+o*w+c*E,s[3]=a*p+o*_+c*P,s[6]=a*v+o*b+c*T,s[1]=l*d+u*w+h*E,s[4]=l*p+u*_+h*P,s[7]=l*v+u*b+h*T,s[2]=f*d+m*w+x*E,s[5]=f*p+m*_+x*P,s[8]=f*v+m*b+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,m=l*s-a*c,x=t*h+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/x;return e[0]=h*d,e[1]=(r*l-u*n)*d,e[2]=(o*n-r*a)*d,e[3]=f*d,e[4]=(u*t-r*c)*d,e[5]=(r*s-o*t)*d,e[6]=m*d,e[7]=(n*c-l*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new vt;function Na(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],d=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=d;return}if(h!==d||c!==f||l!==m||u!==x){let p=1-o;const v=c*f+l*m+u*x+h*d,w=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const E=Math.sqrt(_),P=Math.atan2(E,v*w);p=Math.sin(p*P)/E,o=Math.sin(o*P)/E}const b=o*w;if(c=c*p+f*b,l=l*p+m*b,u=u*p+x*b,h=h*p+d*b,p===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+c*m-l*f,e[t+1]=c*x+u*f+l*h-o*m,e[t+2]=l*x+u*m+o*f-c*h,e[t+3]=u*x-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h+f*m*x;break;case"YZX":this._x=f*u*h+l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h-f*m*x;break;case"XZY":this._x=f*u*h-l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*n,u=c*n+o*t-s*r,h=c*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=l*c+f*-s+u*-o-h*-a,this.y=u*c+f*-a+h*-s-l*-o,this.z=h*c+f*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new F,wo=new kn;function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jc=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Qc=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),vn=new F;function eu(i){return i.convertSRGBToLinear(),vn.set(i.r,i.g,i.b).applyMatrix3(Qc),i.setRGB(vn.x,vn.y,vn.z)}function tu(i){return vn.set(i.r,i.g,i.b).applyMatrix3(Jc),i.setRGB(vn.x,vn.y,vn.z).convertLinearToSRGB()}const nu={[Ii]:i=>i,[jt]:i=>i.convertSRGBToLinear(),[Ia]:eu},iu={[Ii]:i=>i,[jt]:i=>i.convertLinearToSRGB(),[Ia]:tu},gt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ii},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=nu[e],r=iu[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let qn;class Fa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=pr("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Oa{constructor(e=null){this.isSource=!0,this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gr(r[a].image)):s.push(Gr(r[a]))}else s=Gr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class Rt extends Hn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Bt,r=Bt,s=Nt,a=Ri,o=kt,c=zn,l=Rt.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Fi(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Ra;Rt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],x=c[9],d=c[2],p=c[6],v=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(m+1)/2,E=(v+1)/2,P=(u+f)/4,T=(h+d)/4,g=(x+p)/4;return _>b&&_>E?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=P/n,s=T/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=g/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=T/s,r=g/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-x)*(p-x)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(h-d)/w,this.z=(f-u)/w,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gn extends Hn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ua extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class su extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Ln.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ln)}else n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),ki.subVectors(this.max,yi),Xn.subVectors(e.a,yi),jn.subVectors(e.b,yi),Yn.subVectors(e.c,yi),fn.subVectors(jn,Xn),hn.subVectors(Yn,jn),Pn.subVectors(Xn,Yn);let t=[0,-fn.z,fn.y,0,-hn.z,hn.y,0,-Pn.z,Pn.y,fn.z,0,-fn.x,hn.z,0,-hn.x,Pn.z,0,-Pn.x,-fn.y,fn.x,0,-hn.y,hn.x,0,-Pn.y,Pn.x,0];return!Hr(t,Xn,jn,Yn,ki)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,Xn,jn,Yn,ki))?!1:(Gi.crossVectors(fn,hn),t=[Gi.x,Gi.y,Gi.z],Hr(t,Xn,jn,Yn,ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,Vr=new Wn,Xn=new F,jn=new F,Yn=new F,fn=new F,hn=new F,Pn=new F,yi=new F,ki=new F,Gi=new F,Rn=new F;function Hr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=e.dot(Rn),l=t.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ou=new Wn,bi=new F,Wr=new F;class vr{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ou.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Wr)),this.expandByPoint(bi.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new F,qr=new F,Vi=new F,dn=new F,Xr=new F,Hi=new F,jr=new F;class za{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=dn.dot(this.direction),c=-dn.dot(Vi),l=dn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,x;if(u>0)if(h=a*c-o,f=a*o-c,x=s*u,h>=0)if(f>=-x)if(f<=x){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qr).addScaledVector(Vi,f),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,s){Xr.subVectors(t,e),Hi.subVectors(n,e),jr.crossVectors(Xr,Hi);let a=this.direction.dot(jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,e);const c=o*this.direction.dot(Hi.crossVectors(dn,Hi));if(c<0)return null;const l=o*this.direction.dot(Xr.cross(dn));if(l<0||c+l>a)return null;const u=-o*dn.dot(jr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,c,l,u,h,f,m,x,d,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=l,v[6]=u,v[10]=h,v[14]=f,v[3]=m,v[7]=x,v[11]=d,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,x=o*u,d=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+x*l,t[5]=f-d*l,t[9]=-o*c,t[2]=d-f*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,x=l*u,d=l*h;t[0]=f+d*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=d+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,x=l*u,d=l*h;t[0]=f-d*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,x=o*u,d=o*h;t[0]=c*u,t[4]=x*l-m,t[8]=f*l+d,t[1]=c*h,t[5]=d*l+f,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,x=o*c,d=o*l;t[0]=c*u,t[4]=d-f*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+x,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*c,m=a*l,x=o*c,d=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(au,e,lu)}lookAt(e,t,n){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),pn.crossVectors(n,At),pn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),pn.crossVectors(n,At)),pn.normalize(),Wi.crossVectors(At,pn),r[0]=pn.x,r[4]=Wi.x,r[8]=At.x,r[1]=pn.y,r[5]=Wi.y,r[9]=At.y,r[2]=pn.z,r[6]=Wi.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],x=n[2],d=n[6],p=n[10],v=n[14],w=n[3],_=n[7],b=n[11],E=n[15],P=r[0],T=r[4],g=r[8],M=r[12],L=r[1],I=r[5],H=r[9],D=r[13],N=r[2],k=r[6],V=r[10],K=r[14],q=r[3],Z=r[7],ee=r[11],me=r[15];return s[0]=a*P+o*L+c*N+l*q,s[4]=a*T+o*I+c*k+l*Z,s[8]=a*g+o*H+c*V+l*ee,s[12]=a*M+o*D+c*K+l*me,s[1]=u*P+h*L+f*N+m*q,s[5]=u*T+h*I+f*k+m*Z,s[9]=u*g+h*H+f*V+m*ee,s[13]=u*M+h*D+f*K+m*me,s[2]=x*P+d*L+p*N+v*q,s[6]=x*T+d*I+p*k+v*Z,s[10]=x*g+d*H+p*V+v*ee,s[14]=x*M+d*D+p*K+v*me,s[3]=w*P+_*L+b*N+E*q,s[7]=w*T+_*I+b*k+E*Z,s[11]=w*g+_*H+b*V+E*ee,s[15]=w*M+_*D+b*K+E*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],d=e[7],p=e[11],v=e[15];return x*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*m-n*c*m)+d*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+v*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],d=e[13],p=e[14],v=e[15],w=h*p*l-d*f*l+d*c*m-o*p*m-h*c*v+o*f*v,_=x*f*l-u*p*l-x*c*m+a*p*m+u*c*v-a*f*v,b=u*d*l-x*h*l+x*o*m-a*d*m-u*o*v+a*h*v,E=x*h*c-u*d*c-x*o*f+a*d*f+u*o*p-a*h*p,P=t*w+n*_+r*b+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return e[0]=w*T,e[1]=(d*f*s-h*p*s-d*r*m+n*p*m+h*r*v-n*f*v)*T,e[2]=(o*p*s-d*c*s+d*r*l-n*p*l-o*r*v+n*c*v)*T,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*m-n*c*m)*T,e[4]=_*T,e[5]=(u*p*s-x*f*s+x*r*m-t*p*m-u*r*v+t*f*v)*T,e[6]=(x*c*s-a*p*s-x*r*l+t*p*l+a*r*v-t*c*v)*T,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*T,e[8]=b*T,e[9]=(x*h*s-u*d*s-x*n*m+t*d*m+u*n*v-t*h*v)*T,e[10]=(a*d*s-x*o*s+x*n*l-t*d*l-a*n*v+t*o*v)*T,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*T,e[12]=E*T,e[13]=(u*d*r-x*h*r+x*n*f-t*d*f-u*n*p+t*h*p)*T,e[14]=(x*o*r-a*d*r-x*n*c+t*d*c+a*n*p-t*o*p)*T,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,m=s*u,x=s*h,d=a*u,p=a*h,v=o*h,w=c*l,_=c*u,b=c*h,E=n.x,P=n.y,T=n.z;return r[0]=(1-(d+v))*E,r[1]=(m+b)*E,r[2]=(x-_)*E,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(f+v))*P,r[6]=(p+w)*P,r[7]=0,r[8]=(x+_)*T,r[9]=(p-w)*T,r[10]=(1-(f+d))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const a=$n.set(r[4],r[5],r[6]).length(),o=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const l=1/s,u=1/a,h=1/o;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,t.setFromRotationMatrix(Ot),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-s),h=(t+e)*c,f=(n+r)*l,m=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new F,Ot=new ot,au=new F(0,0,0),lu=new F(1,1,1),pn=new F,Wi=new F,At=new F,Eo=new ot,To=new kn;class Mr{constructor(e=0,t=0,n=0,r=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cu=0;const Ao=new F,Zn=new kn,rn=new ot,qi=new F,Si=new F,uu=new F,fu=new kn,Co=new F(1,0,0),Lo=new F(0,1,0),Po=new F(0,0,1),hu={type:"added"},Ro={type:"removed"};class yt extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new Mr,n=new kn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new vt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Si,qi,this.up):rn.lookAt(qi,Si,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(rn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ro)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ro)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new F,sn=new F,Yr=new F,on=new F,Kn=new F,Jn=new F,Do=new F,$r=new F,Zr=new F,Kr=new F;class $t{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ut.subVectors(r,t),sn.subVectors(n,t),Yr.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot(sn),c=Ut.dot(Yr),l=sn.dot(sn),u=sn.dot(Yr),h=a*l-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*c-o*u)*f,x=(a*u-o*c)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,on),c.set(0,0),c.addScaledVector(s,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),sn.subVectors(e,t),Ut.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ut.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return $t.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Kn.subVectors(r,n),Jn.subVectors(s,n),$r.subVectors(e,n);const c=Kn.dot($r),l=Jn.dot($r);if(c<=0&&l<=0)return t.copy(n);Zr.subVectors(e,r);const u=Kn.dot(Zr),h=Jn.dot(Zr);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Kn,a);Kr.subVectors(e,s);const m=Kn.dot(Kr),x=Jn.dot(Kr);if(x>=0&&m<=x)return t.copy(s);const d=m*l-c*x;if(d<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Jn,o);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return Do.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(Do,o);const v=1/(p+d+f);return a=d*v,o=f*v,t.copy(n).addScaledVector(Kn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let du=0;class Oi extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=li,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ca,this.blendDst=La,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Zc(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Jr(a,s,e+1/3),this.g=Jr(a,s,e),this.b=Jr(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,gt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,gt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,gt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,gt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return gt.fromWorkingColorSpace(ut.copy(this),e),Mt(ut.r*255,0,255)<<16^Mt(ut.g*255,0,255)<<8^Mt(ut.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(ut.copy(this),t);const n=ut.r,r=ut.g,s=ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=jt){gt.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,n=ut.g,r=ut.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Xi);const n=Ur(zt.h,Xi.h,t),r=Ur(zt.s,Xi.s,t),s=Ur(zt.l,Xi.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new oe;oe.NAMES=ka;class Ts extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new F,ji=new De;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ga extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Va extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pu=0;const It=new ot,Qr=new yt,Qn=new F,Ct=new Wn,wi=new Wn,st=new F;class un extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Na(e)?Va:Ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(Ct.min,wi.min),Ct.expandByPoint(st),st.addVectors(Ct.max,wi.max),Ct.expandByPoint(st)):(Ct.expandByPoint(wi.min),Ct.expandByPoint(wi.max))}Ct.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)st.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(st));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)st.fromBufferAttribute(o,l),c&&(Qn.fromBufferAttribute(e,l),st.add(Qn)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<o;L++)l[L]=new F,u[L]=new F;const h=new F,f=new F,m=new F,x=new De,d=new De,p=new De,v=new F,w=new F;function _(L,I,H){h.fromArray(r,L*3),f.fromArray(r,I*3),m.fromArray(r,H*3),x.fromArray(a,L*2),d.fromArray(a,I*2),p.fromArray(a,H*2),f.sub(h),m.sub(h),d.sub(x),p.sub(x);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(D),w.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(D),l[L].add(v),l[I].add(v),l[H].add(v),u[L].add(w),u[I].add(w),u[H].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,I=b.length;L<I;++L){const H=b[L],D=H.start,N=H.count;for(let k=D,V=D+N;k<V;k+=3)_(n[k+0],n[k+1],n[k+2])}const E=new F,P=new F,T=new F,g=new F;function M(L){T.fromArray(s,L*3),g.copy(T);const I=l[L];E.copy(I),E.sub(T.multiplyScalar(T.dot(I))).normalize(),P.crossVectors(g,I);const D=P.dot(u[L])<0?-1:1;c[L*4]=E.x,c[L*4+1]=E.y,c[L*4+2]=E.z,c[L*4+3]=D}for(let L=0,I=b.length;L<I;++L){const H=b[L],D=H.start,N=H.count;for(let k=D,V=D+N;k<V;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,x=0;for(let d=0,p=c.length;d<p;d++){o.isInterleavedBufferAttribute?m=c[d]*o.data.stride+o.offset:m=c[d]*u;for(let v=0;v<u;v++)f[x++]=l[m++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new ot,Xt=new za,Yi=new vr,No=new F,Ei=new F,Ti=new F,Ai=new F,es=new F,$i=new F,Zi=new De,Ki=new De,Ji=new De,ts=new F,Qi=new F;class an extends yt{constructor(e=new un,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){$i.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(es.fromBufferAttribute(h,e),a?$i.addScaledVector(es,u):$i.addScaledVector(es.sub(t),u))}t.add($i)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Xt.copy(e.ray).recast(e.near),Yi.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(Yi,No)===null||Xt.origin.distanceToSquared(No)>(e.far-e.near)**2))||(Io.copy(s).invert(),Xt.copy(e.ray).applyMatrix4(Io),n.boundingBox!==null&&Xt.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=h.length;m<x;m++){const d=h[m],p=r[d.materialIndex],v=Math.max(d.start,f.start),w=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){const E=o.getX(_),P=o.getX(_+1),T=o.getX(_+2);a=er(this,p,e,Xt,l,u,E,P,T),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let d=m,p=x;d<p;d+=3){const v=o.getX(d),w=o.getX(d+1),_=o.getX(d+2);a=er(this,r,e,Xt,l,u,v,w,_),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=h.length;m<x;m++){const d=h[m],p=r[d.materialIndex],v=Math.max(d.start,f.start),w=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){const E=_,P=_+1,T=_+2;a=er(this,p,e,Xt,l,u,E,P,T),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let d=m,p=x;d<p;d+=3){const v=d,w=d+1,_=d+2;a=er(this,r,e,Xt,l,u,v,w,_),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function mu(i,e,t,n,r,s,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Sn,o),c===null)return null;Qi.copy(o),Qi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qi);return l<t.near||l>t.far?null:{distance:l,point:Qi.clone(),object:i}}function er(i,e,t,n,r,s,a,o,c){i.getVertexPosition(a,Ei),i.getVertexPosition(o,Ti),i.getVertexPosition(c,Ai);const l=mu(i,e,t,n,Ei,Ti,Ai,ts);if(l){r&&(Zi.fromBufferAttribute(r,a),Ki.fromBufferAttribute(r,o),Ji.fromBufferAttribute(r,c),l.uv=$t.getUV(ts,Ei,Ti,Ai,Zi,Ki,Ji,new De)),s&&(Zi.fromBufferAttribute(s,a),Ki.fromBufferAttribute(s,o),Ji.fromBufferAttribute(s,c),l.uv2=$t.getUV(ts,Ei,Ti,Ai,Zi,Ki,Ji,new De));const u={a,b:o,c,normal:new F,materialIndex:0};$t.getNormal(Ei,Ti,Ai,u.normal),l.face=u}return l}class Ui extends un{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function x(d,p,v,w,_,b,E,P,T,g,M){const L=b/T,I=E/g,H=b/2,D=E/2,N=P/2,k=T+1,V=g+1;let K=0,q=0;const Z=new F;for(let ee=0;ee<V;ee++){const me=ee*I-D;for(let G=0;G<k;G++){const J=G*L-H;Z[d]=J*w,Z[p]=me*_,Z[v]=N,l.push(Z.x,Z.y,Z.z),Z[d]=0,Z[p]=0,Z[v]=P>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(G/T),h.push(1-ee/g),K+=1}}for(let ee=0;ee<g;ee++)for(let me=0;me<T;me++){const G=f+me+k*ee,J=f+me+k*(ee+1),re=f+(me+1)+k*(ee+1),z=f+(me+1)+k*ee;c.push(G,J,z),c.push(J,re,z),q+=6}o.addGroup(m,q,M),m+=q,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=gi(i[t]);for(const r in n)e[r]=n[r]}return e}function gu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ha(i){return i.getRenderTarget()===null&&i.outputEncoding===He?jt:Ii}const _u={clone:gi,merge:_t};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wa extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Mu extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ft(ei,ti,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ft(ei,ti,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ft(ei,ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ft(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Ft(ei,ti,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ft(ei,ti,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=cn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class qa extends Rt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:bn});s.uniforms.tEquirect.value=t;const a=new an(r,s),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Nt),new Mu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ns=new F,bu=new F,Su=new vt;class Dn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ns.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ns),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Su.getNormalMatrix(e),r=this.coplanarPoint(ns).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new vr,tr=new F;class Xa{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],x=n[10],d=n[11],p=n[12],v=n[13],w=n[14],_=n[15];return t[0].setComponents(o-r,h-c,d-f,_-p).normalize(),t[1].setComponents(o+r,h+c,d+f,_+p).normalize(),t[2].setComponents(o+s,h+l,d+m,_+v).normalize(),t[3].setComponents(o-s,h-l,d-m,_-v).normalize(),t[4].setComponents(o-a,h-u,d-x,_-w).normalize(),t[5].setComponents(o+a,h+u,d+x,_+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(tr.x=r.normal.x>0?e.max.x:e.min.x,tr.y=r.normal.y>0?e.max.y:e.min.y,tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ja(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,f=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,l),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class yr extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,m=[],x=[],d=[],p=[];for(let v=0;v<u;v++){const w=v*f-a;for(let _=0;_<l;_++){const b=_*h-s;x.push(b,-w,0),d.push(0,0,1),p.push(_/o),p.push(1-v/c)}}for(let v=0;v<c;v++)for(let w=0;w<o;w++){const _=w+l*v,b=w+l*(v+1),E=w+1+l*(v+1),P=w+1+l*v;m.push(_,b,P),m.push(b,E,P)}this.setIndex(m),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru="vec3 transformed = vec3( position );",Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_h=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ph=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$h=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ed=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:Eu,alphamap_pars_fragment:Tu,alphatest_fragment:Au,alphatest_pars_fragment:Cu,aomap_fragment:Lu,aomap_pars_fragment:Pu,begin_vertex:Ru,beginnormal_vertex:Du,bsdfs:Iu,iridescence_fragment:Nu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:Gu,color_pars_vertex:Vu,color_vertex:Hu,common:Wu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:ju,displacementmap_vertex:Yu,emissivemap_fragment:$u,emissivemap_pars_fragment:Zu,encodings_fragment:Ku,encodings_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:ef,envmap_pars_fragment:tf,envmap_pars_vertex:nf,envmap_physical_pars_fragment:mf,envmap_vertex:rf,fog_vertex:sf,fog_pars_vertex:of,fog_fragment:af,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_fragment:uf,lightmap_pars_fragment:ff,lights_lambert_fragment:hf,lights_lambert_pars_fragment:df,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:_f,lights_phong_fragment:xf,lights_phong_pars_fragment:vf,lights_physical_fragment:Mf,lights_physical_pars_fragment:yf,lights_fragment_begin:bf,lights_fragment_maps:Sf,lights_fragment_end:wf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Cf,map_fragment:Lf,map_pars_fragment:Pf,map_particle_fragment:Rf,map_particle_pars_fragment:Df,metalnessmap_fragment:If,metalnessmap_pars_fragment:Nf,morphcolor_vertex:Ff,morphnormal_vertex:Of,morphtarget_pars_vertex:Uf,morphtarget_vertex:zf,normal_fragment_begin:Bf,normal_fragment_maps:kf,normal_pars_fragment:Gf,normal_pars_vertex:Vf,normal_vertex:Hf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Yf,output_fragment:$f,packing:Zf,premultiplied_alpha_fragment:Kf,project_vertex:Jf,dithering_fragment:Qf,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:sh,shadowmask_pars_fragment:oh,skinbase_vertex:ah,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:fh,specularmap_pars_fragment:hh,tonemapping_fragment:dh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:xh,uv_vertex:vh,uv2_pars_fragment:Mh,uv2_pars_vertex:yh,uv2_vertex:bh,worldpos_vertex:Sh,background_vert:wh,background_frag:Eh,backgroundCube_vert:Th,backgroundCube_frag:Ah,cube_vert:Ch,cube_frag:Lh,depth_vert:Ph,depth_frag:Rh,distanceRGBA_vert:Dh,distanceRGBA_frag:Ih,equirect_vert:Nh,equirect_frag:Fh,linedashed_vert:Oh,linedashed_frag:Uh,meshbasic_vert:zh,meshbasic_frag:Bh,meshlambert_vert:kh,meshlambert_frag:Gh,meshmatcap_vert:Vh,meshmatcap_frag:Hh,meshnormal_vert:Wh,meshnormal_frag:qh,meshphong_vert:Xh,meshphong_frag:jh,meshphysical_vert:Yh,meshphysical_frag:$h,meshtoon_vert:Zh,meshtoon_frag:Kh,points_vert:Jh,points_frag:Qh,shadow_vert:ed,shadow_frag:td,sprite_vert:nd,sprite_frag:id},ie={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vt},uv2Transform:{value:new vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}}},Yt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Yt.physical={uniforms:_t([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const nr={r:0,b:0,g:0};function rd(i,e,t,n,r,s,a){const o=new oe(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function x(p,v){let w=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const b=i.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?d(o,c):_&&_.isColor&&(d(_,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===xr)?(u===void 0&&(u=new an(new Ui(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:gi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==He,(h!==_||f!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new an(new yr(2,2),new Vn({name:"BackgroundMaterial",uniforms:gi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=_.encoding!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,v){p.getRGB(nr,Ha(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(o,c)},render:x}}function sd(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function h(N,k,V,K,q){let Z=!1;if(a){const ee=d(K,V,k);l!==ee&&(l=ee,m(l.object)),Z=v(N,K,V,q),Z&&w(N,K,V,q)}else{const ee=k.wireframe===!0;(l.geometry!==K.id||l.program!==V.id||l.wireframe!==ee)&&(l.geometry=K.id,l.program=V.id,l.wireframe=ee,Z=!0)}q!==null&&t.update(q,34963),(Z||u)&&(u=!1,g(N,k,V,K),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,k,V){const K=V.wireframe===!0;let q=o[N.id];q===void 0&&(q={},o[N.id]=q);let Z=q[k.id];Z===void 0&&(Z={},q[k.id]=Z);let ee=Z[K];return ee===void 0&&(ee=p(f()),Z[K]=ee),ee}function p(N){const k=[],V=[],K=[];for(let q=0;q<r;q++)k[q]=0,V[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:K,object:N,attributes:{},index:null}}function v(N,k,V,K){const q=l.attributes,Z=k.attributes;let ee=0;const me=V.getAttributes();for(const G in me)if(me[G].location>=0){const re=q[G];let z=Z[G];if(z===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),re===void 0||re.attribute!==z||z&&re.data!==z.data)return!0;ee++}return l.attributesNum!==ee||l.index!==K}function w(N,k,V,K){const q={},Z=k.attributes;let ee=0;const me=V.getAttributes();for(const G in me)if(me[G].location>=0){let re=Z[G];re===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const z={};z.attribute=re,re&&re.data&&(z.data=re.data),q[G]=z,ee++}l.attributes=q,l.attributesNum=ee,l.index=K}function _(){const N=l.newAttributes;for(let k=0,V=N.length;k<V;k++)N[k]=0}function b(N){E(N,0)}function E(N,k){const V=l.newAttributes,K=l.enabledAttributes,q=l.attributeDivisors;V[N]=1,K[N]===0&&(i.enableVertexAttribArray(N),K[N]=1),q[N]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),q[N]=k)}function P(){const N=l.newAttributes,k=l.enabledAttributes;for(let V=0,K=k.length;V<K;V++)k[V]!==N[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function T(N,k,V,K,q,Z){n.isWebGL2===!0&&(V===5124||V===5125)?i.vertexAttribIPointer(N,k,V,q,Z):i.vertexAttribPointer(N,k,V,K,q,Z)}function g(N,k,V,K){if(n.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=K.attributes,Z=V.getAttributes(),ee=k.defaultAttributeValues;for(const me in Z){const G=Z[me];if(G.location>=0){let J=q[me];if(J===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const re=J.normalized,z=J.itemSize,ue=t.get(J);if(ue===void 0)continue;const fe=ue.buffer,de=ue.type,he=ue.bytesPerElement;if(J.isInterleavedBufferAttribute){const Se=J.data,Te=Se.stride,Ce=J.offset;if(Se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)E(G.location+Oe,Se.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)b(G.location+Oe);i.bindBuffer(34962,fe);for(let Oe=0;Oe<G.locationSize;Oe++)T(G.location+Oe,z/G.locationSize,de,re,Te*he,(Ce+z/G.locationSize*Oe)*he)}else{if(J.isInstancedBufferAttribute){for(let Se=0;Se<G.locationSize;Se++)E(G.location+Se,J.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<G.locationSize;Se++)b(G.location+Se);i.bindBuffer(34962,fe);for(let Se=0;Se<G.locationSize;Se++)T(G.location+Se,z/G.locationSize,de,re,z*he,z/G.locationSize*Se*he)}}else if(ee!==void 0){const re=ee[me];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(G.location,re);break;case 3:i.vertexAttrib3fv(G.location,re);break;case 4:i.vertexAttrib4fv(G.location,re);break;default:i.vertexAttrib1fv(G.location,re)}}}}P()}function M(){H();for(const N in o){const k=o[N];for(const V in k){const K=k[V];for(const q in K)x(K[q].object),delete K[q];delete k[V]}delete o[N]}}function L(N){if(o[N.id]===void 0)return;const k=o[N.id];for(const V in k){const K=k[V];for(const q in K)x(K[q].object),delete K[q];delete k[V]}delete o[N.id]}function I(N){for(const k in o){const V=o[k];if(V[N.id]===void 0)continue;const K=V[N.id];for(const q in K)x(K[q].object),delete K[q];delete V[N.id]}}function H(){D(),u=!0,l!==c&&(l=c,m(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:b,disableUnusedAttributes:P}}function od(i,e,t,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function ad(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),x=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),w=i.getParameter(36349),_=f>0,b=a||e.has("OES_texture_float"),E=_&&b,P=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:P}}function ld(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Dn,o=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):l();else{const w=s?0:n,_=w*4;let b=v.clippingState||null;c.value=b,b=u(x,f,_,m);for(let E=0;E!==_;++E)b[E]=t[E];v.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,x){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,x!==!0||p===null){const v=m+d*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,b=m;_!==d;++_,b+=4)a.copy(h[_]).applyMatrix4(w,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function cd(i){let e=new WeakMap;function t(a,o){return o===hs?a.mapping=di:o===ds&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===hs||o===ds)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yu(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ud extends Wa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,Fo=[.125,.215,.35,.446,.526,.582],Nn=20,is=new ud,Oo=new oe;let rs=null;const In=(1+Math.sqrt(5))/2,ii=1/In,Uo=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,In,ii),new F(0,In,-ii),new F(ii,0,In),new F(-ii,0,In),new F(In,ii,0),new F(-In,ii,0)];class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){rs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rs),e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Di,format:kt,encoding:Bn,depthBuffer:!1},r=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fd(s)),this._blurMaterial=hd(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,n,r){const o=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Oo),u.toneMapping=cn,u.autoClear=!1;const m=new Ts({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),x=new an(new Ui,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Oo),d=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(o.up.set(0,c[v],0),o.lookAt(l[v],0,0)):w===1?(o.up.set(0,0,c[v]),o.lookAt(0,l[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,l[v]));const _=this._cubeSize;ir(r,w*_,v>2?_:0,_,_),u.setRenderTarget(r),d&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uo[(r-1)%Uo.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),d=s/x,p=isFinite(s)?1+Math.floor(u*d):Nn;p>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);const v=[];let w=0;for(let T=0;T<Nn;++T){const g=T/d,M=Math.exp(-g*g/2);v.push(M),T===0?w+=M:T<p&&(w+=2*M)}for(let T=0;T<v.length;T++)v[T]=v[T]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const b=this._sizeLods[r],E=3*b*(r>_-oi?r-_+oi:0),P=4*(this._cubeSize-b);ir(t,E,P,3*b,2*b),c.setRenderTarget(t),c.render(h,is)}}function fd(i){const e=[],t=[],n=[];let r=i;const s=i-oi+1+Fo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-oi?c=Fo[a-i+oi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,d=3,p=2,v=1,w=new Float32Array(d*x*m),_=new Float32Array(p*x*m),b=new Float32Array(v*x*m);for(let P=0;P<m;P++){const T=P%3*2/3-1,g=P>2?0:-1,M=[T,g,0,T+2/3,g,0,T+2/3,g+1,0,T,g,0,T+2/3,g+1,0,T,g+1,0];w.set(M,d*x*P),_.set(f,p*x*P);const L=[P,P,P,P,P,P];b.set(L,v*x*P)}const E=new un;E.setAttribute("position",new Kt(w,d)),E.setAttribute("uv",new Kt(_,p)),E.setAttribute("faceIndex",new Kt(b,v)),e.push(E),r>oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bo(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hd(i,e,t){const n=new Float32Array(Nn),r=new F(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ko(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Go(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:As(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function As(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===hs||c===ds,u=c===di||c===pi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new zo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new zo(i));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function md(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const x in f)e.update(f[x],34962);const m=h.morphAttributes;for(const x in m){const d=m[x];for(let p=0,v=d.length;p<v;p++)e.update(d[p],34962)}}function l(h){const f=[],m=h.index,x=h.attributes.position;let d=0;if(m!==null){const w=m.array;d=m.version;for(let _=0,b=w.length;_<b;_+=3){const E=w[_+0],P=w[_+1],T=w[_+2];f.push(E,P,P,T,T,E)}}else{const w=x.array;d=x.version;for(let _=0,b=w.length/3-1;_<b;_+=3){const E=_+0,P=_+1,T=_+2;f.push(E,P,P,T,T,E)}}const p=new(Na(f)?Va:Ga)(f,1);p.version=d;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function gd(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,m){i.drawElements(s,m,o,f*c),t.update(m,s,1)}function h(f,m,x){if(x===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,f*c,x),t.update(m,s,x)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function _d(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xd(i,e){return i[0]-e[0]}function vd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Md(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let d=s.get(u);if(d===void 0||d.count!==x){let N=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const w=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let g=0;w===!0&&(g=1),_===!0&&(g=2),b===!0&&(g=3);let M=u.attributes.position.count*g,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*L*4*x),H=new Ua(I,M,L,x);H.type=On,H.needsUpdate=!0;const D=g*4;for(let k=0;k<x;k++){const V=E[k],K=P[k],q=T[k],Z=M*L*4*k;for(let ee=0;ee<V.count;ee++){const me=ee*D;w===!0&&(a.fromBufferAttribute(V,ee),I[Z+me+0]=a.x,I[Z+me+1]=a.y,I[Z+me+2]=a.z,I[Z+me+3]=0),_===!0&&(a.fromBufferAttribute(K,ee),I[Z+me+4]=a.x,I[Z+me+5]=a.y,I[Z+me+6]=a.z,I[Z+me+7]=0),b===!0&&(a.fromBufferAttribute(q,ee),I[Z+me+8]=a.x,I[Z+me+9]=a.y,I[Z+me+10]=a.z,I[Z+me+11]=q.itemSize===4?a.w:1)}}d={count:x,texture:H,size:new De(M,L)},s.set(u,d),u.addEventListener("dispose",N)}let p=0;for(let w=0;w<f.length;w++)p+=f[w];const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let x=n[u.id];if(x===void 0||x.length!==m){x=[];for(let _=0;_<m;_++)x[_]=[_,0];n[u.id]=x}for(let _=0;_<m;_++){const b=x[_];b[0]=_,b[1]=f[_]}x.sort(vd);for(let _=0;_<8;_++)_<m&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(xd);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const b=o[_],E=b[0],P=b[1];E!==Number.MAX_SAFE_INTEGER&&P?(d&&u.getAttribute("morphTarget"+_)!==d[E]&&u.setAttribute("morphTarget"+_,d[E]),p&&u.getAttribute("morphNormal"+_)!==p[E]&&u.setAttribute("morphNormal"+_,p[E]),r[_]=P,v+=P):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function yd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Ya=new Rt,$a=new Ua,Za=new su,Ka=new qa,Vo=[],Ho=[],Wo=new Float32Array(16),qo=new Float32Array(9),Xo=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vo[r];if(s===void 0&&(s=new Float32Array(r),Vo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Je(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qe(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;i.uniform2fv(this.addr,e),Qe(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;i.uniform3fv(this.addr,e),Qe(t,e)}}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;i.uniform4fv(this.addr,e),Qe(t,e)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Xo.set(n),i.uniformMatrix2fv(this.addr,!1,Xo),Qe(t,n)}}function Ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),Qe(t,n)}}function Cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Wo.set(n),i.uniformMatrix4fv(this.addr,!1,Wo),Qe(t,n)}}function Ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;i.uniform2iv(this.addr,e),Qe(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;i.uniform3iv(this.addr,e),Qe(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;i.uniform4iv(this.addr,e),Qe(t,e)}}function Id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;i.uniform2uiv(this.addr,e),Qe(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;i.uniform3uiv(this.addr,e),Qe(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;i.uniform4uiv(this.addr,e),Qe(t,e)}}function Ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ya,r)}function zd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Za,r)}function Bd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ka,r)}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$a,r)}function Gd(i){switch(i){case 5126:return bd;case 35664:return Sd;case 35665:return wd;case 35666:return Ed;case 35674:return Td;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Ld;case 35667:case 35671:return Pd;case 35668:case 35672:return Rd;case 35669:case 35673:return Dd;case 5125:return Id;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return kd}}function Vd(i,e){i.uniform1fv(this.addr,e)}function Hd(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Wd(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function qd(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function Xd(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jd(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yd(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $d(i,e){i.uniform1iv(this.addr,e)}function Zd(i,e){i.uniform2iv(this.addr,e)}function Kd(i,e){i.uniform3iv(this.addr,e)}function Jd(i,e){i.uniform4iv(this.addr,e)}function Qd(i,e){i.uniform1uiv(this.addr,e)}function ep(i,e){i.uniform2uiv(this.addr,e)}function tp(i,e){i.uniform3uiv(this.addr,e)}function np(i,e){i.uniform4uiv(this.addr,e)}function ip(i,e,t){const n=this.cache,r=e.length,s=br(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ya,s[a])}function rp(i,e,t){const n=this.cache,r=e.length,s=br(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Za,s[a])}function sp(i,e,t){const n=this.cache,r=e.length,s=br(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ka,s[a])}function op(i,e,t){const n=this.cache,r=e.length,s=br(t,r);Je(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$a,s[a])}function ap(i){switch(i){case 5126:return Vd;case 35664:return Hd;case 35665:return Wd;case 35666:return qd;case 35674:return Xd;case 35675:return jd;case 35676:return Yd;case 5124:case 35670:return $d;case 35667:case 35671:return Zd;case 35668:case 35672:return Kd;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return op}}class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gd(t.type)}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ap(t.type)}}class up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function jo(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,r=n.length;for(ss.lastIndex=0;;){const s=ss.exec(n),a=ss.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jo(t,l===void 0?new lp(o,i,e):new cp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new up(o),jo(t,h)),t=h}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let hp=0;function dp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function pp(i){switch(i){case Bn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function $o(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dp(i.getShaderSource(e),a)}else return r}function mp(i,e){const t=pp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gp(i,e){let t;switch(e){case wc:t="Linear";break;case Ec:t="Reinhard";break;case Tc:t="OptimizedCineon";break;case Ac:t="ACESFilmic";break;case Cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _p(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function xp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pi(i){return i!==""}function Zo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _s(i){return i.replace(Mp,yp)}function yp(i,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _s(t)}const bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(bp,Sp)}function Sp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Ep(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case pi:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ap(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pa:e="ENVMAP_BLENDING_MULTIPLY";break;case bc:e="ENVMAP_BLENDING_MIX";break;case Sc:e="ENVMAP_BLENDING_ADD";break}return e}function Cp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wp(t),l=Ep(t),u=Tp(t),h=Ap(t),f=Cp(t),m=t.isWebGL2?"":_p(t),x=xp(s),d=r.createProgram();let p,v,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Pi).join(`
`),p.length>0&&(p+=`
`),v=[m,x].filter(Pi).join(`
`),v.length>0&&(v+=`
`)):(p=[Qo(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),v=[m,Qo(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==cn?gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,mp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=_s(a),a=Zo(a,t),a=Ko(a,t),o=_s(o),o=Zo(o,t),o=Ko(o,t),a=Jo(a),o=Jo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=w+p+a,b=w+v+o,E=Yo(r,35633,_),P=Yo(r,35632,b);if(r.attachShader(d,E),r.attachShader(d,P),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(P).trim();let H=!0,D=!0;if(r.getProgramParameter(d,35714)===!1){H=!1;const N=$o(r,E,"vertex"),k=$o(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+N+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:H,programLog:M,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:v}})}r.deleteShader(E),r.deleteShader(P);let T;this.getUniforms=function(){return T===void 0&&(T=new ur(r,d)),T};let g;return this.getAttributes=function(){return g===void 0&&(g=vp(r,d)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=hp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=P,this}let Pp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}}class Dp{constructor(e){this.id=Pp++,this.code=e,this.usedTimes=0}}function Ip(i,e,t,n,r,s,a){const o=new Ba,c=new Rp,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g,M,L,I,H){const D=I.fog,N=H.geometry,k=g.isMeshStandardMaterial?I.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||k),K=V&&V.mapping===xr?V.image.height:null,q=x[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=Z!==void 0?Z.length:0;let me=0;N.morphAttributes.position!==void 0&&(me=1),N.morphAttributes.normal!==void 0&&(me=2),N.morphAttributes.color!==void 0&&(me=3);let G,J,re,z;if(q){const Te=Yt[q];G=Te.vertexShader,J=Te.fragmentShader}else G=g.vertexShader,J=g.fragmentShader,c.update(g),re=c.getVertexShaderID(g),z=c.getFragmentShaderID(g);const ue=i.getRenderTarget(),fe=g.alphaTest>0,de=g.clearcoat>0,he=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:G,fragmentShader:J,defines:g.defines,customVertexShaderID:re,customFragmentShaderID:z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ue===null?i.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:Bn,map:!!g.map,matcap:!!g.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:K,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Yc,tangentSpaceNormalMap:g.normalMapType===jc,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===He,clearcoat:de,clearcoatMap:de&&!!g.clearcoatMap,clearcoatRoughnessMap:de&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!g.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!g.iridescenceMap,iridescenceThicknessMap:he&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===li,alphaMap:!!g.alphaMap,alphaTest:fe,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!N.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!D,useFog:g.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:g.toneMapped?i.toneMapping:cn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===Pt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function p(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)M.push(L),M.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(v(M,g),w(M,g),M.push(i.outputEncoding)),M.push(g.customProgramCacheKey),M.join()}function v(g,M){g.push(M.precision),g.push(M.outputEncoding),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.combine),g.push(M.vertexUvs),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function w(g,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.map&&o.enable(4),M.matcap&&o.enable(5),M.envMap&&o.enable(6),M.lightMap&&o.enable(7),M.aoMap&&o.enable(8),M.emissiveMap&&o.enable(9),M.bumpMap&&o.enable(10),M.normalMap&&o.enable(11),M.objectSpaceNormalMap&&o.enable(12),M.tangentSpaceNormalMap&&o.enable(13),M.clearcoat&&o.enable(14),M.clearcoatMap&&o.enable(15),M.clearcoatRoughnessMap&&o.enable(16),M.clearcoatNormalMap&&o.enable(17),M.iridescence&&o.enable(18),M.iridescenceMap&&o.enable(19),M.iridescenceThicknessMap&&o.enable(20),M.displacementMap&&o.enable(21),M.specularMap&&o.enable(22),M.roughnessMap&&o.enable(23),M.metalnessMap&&o.enable(24),M.gradientMap&&o.enable(25),M.alphaMap&&o.enable(26),M.alphaTest&&o.enable(27),M.vertexColors&&o.enable(28),M.vertexAlphas&&o.enable(29),M.vertexUvs&&o.enable(30),M.vertexTangents&&o.enable(31),M.uvsVertexOnly&&o.enable(32),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.specularIntensityMap&&o.enable(15),M.specularColorMap&&o.enable(16),M.transmission&&o.enable(17),M.transmissionMap&&o.enable(18),M.thicknessMap&&o.enable(19),M.sheen&&o.enable(20),M.sheenColorMap&&o.enable(21),M.sheenRoughnessMap&&o.enable(22),M.decodeVideoTexture&&o.enable(23),M.opaque&&o.enable(24),g.push(o.mask)}function _(g){const M=x[g.type];let L;if(M){const I=Yt[M];L=_u.clone(I.uniforms)}else L=g.uniforms;return L}function b(g,M){let L;for(let I=0,H=l.length;I<H;I++){const D=l[I];if(D.cacheKey===M){L=D,++L.usedTimes;break}}return L===void 0&&(L=new Lp(i,M,g,s),l.push(L)),L}function E(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),g.destroy()}}function P(g){c.remove(g)}function T(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:P,programs:l,dispose:T}}function Np(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ea(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ta(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,x,d,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:d,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=d,v.group=p),e++,v}function o(h,f,m,x,d,p){const v=a(h,f,m,x,d,p);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function c(h,f,m,x,d,p){const v=a(h,f,m,x,d,p);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function l(h,f){t.length>1&&t.sort(h||Fp),n.length>1&&n.sort(f||ea),r.length>1&&r.sort(f||ea)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Op(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ta,i.set(n,[a])):r>=s.length?(a=new ta,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new oe};break;case"SpotLight":t={position:new F,direction:new F,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function zp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bp=0;function kp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gp(i,e){const t=new Up,n=zp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new ot,o=new ot;function c(u,h){let f=0,m=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let d=0,p=0,v=0,w=0,_=0,b=0,E=0,P=0,T=0,g=0;u.sort(kp);const M=h===!0?Math.PI:1;for(let I=0,H=u.length;I<H;I++){const D=u[I],N=D.color,k=D.intensity,V=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=N.r*k*M,m+=N.g*k*M,x+=N.b*k*M;else if(D.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(D.sh.coefficients[q],k);else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const Z=D.shadow,ee=n.get(D);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.directionalShadow[d]=ee,r.directionalShadowMap[d]=K,r.directionalShadowMatrix[d]=D.shadow.matrix,b++}r.directional[d]=q,d++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(k*M),q.distance=V,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,r.spot[v]=q;const Z=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,Z.updateMatrices(D),D.castShadow&&g++),r.spotLightMatrix[v]=Z.matrix,D.castShadow){const ee=n.get(D);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.spotShadow[v]=ee,r.spotShadowMap[v]=K,P++}v++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=q,w++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*M),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Z=D.shadow,ee=n.get(D);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=D.shadow.matrix,E++}r.point[p]=q,p++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(k*M),q.groundColor.copy(D.groundColor).multiplyScalar(k*M),r.hemi[_]=q,_++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==_||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==P||L.numSpotMaps!==T)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=w,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=P+T-g,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=g,L.directionalLength=d,L.pointLength=p,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=_,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=P,L.numSpotMaps=T,r.version=Bp++)}function l(u,h){let f=0,m=0,x=0,d=0,p=0;const v=h.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const b=u[w];if(b.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),f++}else if(b.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),x++}else if(b.isRectAreaLight){const E=r.rectArea[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),o.identity(),a.copy(b.matrixWorld),a.premultiply(v),o.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),d++}else if(b.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),m++}else if(b.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(v),p++}}}return{setup:c,setupView:l,state:r}}function na(i,e){const t=new Gp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vp(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new na(i,e),t.set(s,[c])):a>=o.length?(c=new na(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hp extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wp extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jp(i,e,t){let n=new Xa;const r=new De,s=new De,a=new at,o=new Hp({depthPacking:Xc}),c=new Wp,l={},u=t.maxTextureSize,h={[Sn]:Pt,[Pt]:Sn,[xn]:xn},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:qp,fragmentShader:Xp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new un;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new an(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa,this.render=function(b,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(bn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let I=0,H=b.length;I<H;I++){const D=b[I],N=D.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const k=N.getFrameExtents();if(r.multiply(k),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,N.mapSize.y=s.y)),N.map===null){const K=this.type!==Li?{minFilter:xt,magFilter:xt}:{};N.map=new Gn(r.x,r.y,K),N.map.texture.name=D.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const V=N.getViewportCount();for(let K=0;K<V;K++){const q=N.getViewport(K);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),L.viewport(a),N.updateMatrices(D,K),n=N.getFrustum(),_(E,P,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===Li&&v(N,P),N.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(T,g,M)};function v(b,E){const P=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,P,m,d,null)}function w(b,E,P,T,g,M){let L=null;const I=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)L=I;else if(L=P.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=L.uuid,D=E.uuid;let N=l[H];N===void 0&&(N={},l[H]=N);let k=N[D];k===void 0&&(k=L.clone(),N[D]=k),L=k}return L.visible=E.visible,L.wireframe=E.wireframe,M===Li?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:h[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,P.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(P.matrixWorld),L.nearDistance=T,L.farDistance=g),L}function _(b,E,P,T,g){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&g===Li)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const I=e.update(b),H=b.material;if(Array.isArray(H)){const D=I.groups;for(let N=0,k=D.length;N<k;N++){const V=D[N],K=H[V.materialIndex];if(K&&K.visible){const q=w(b,K,T,P.near,P.far,g);i.renderBufferDirect(P,null,I,q,b,V)}}}else if(H.visible){const D=w(b,H,T,P.near,P.far,g);i.renderBufferDirect(P,null,I,D,b,null)}}const L=b.children;for(let I=0,H=L.length;I<H;I++)_(L[I],E,P,T,g)}}function Yp(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const j=new at;let Q=null;const ce=new at(0,0,0,0);return{setMask:function(pe){Q!==pe&&!R&&(i.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){R=pe},setClear:function(pe,Ve,it,pt,Wt){Wt===!0&&(pe*=pt,Ve*=pt,it*=pt),j.set(pe,Ve,it,pt),ce.equals(j)===!1&&(i.clearColor(pe,Ve,it,pt),ce.copy(j))},reset:function(){R=!1,Q=null,ce.set(-1,0,0,0)}}}function s(){let R=!1,j=null,Q=null,ce=null;return{setTest:function(pe){pe?fe(2929):de(2929)},setMask:function(pe){j!==pe&&!R&&(i.depthMask(pe),j=pe)},setFunc:function(pe){if(Q!==pe){switch(pe){case mc:i.depthFunc(512);break;case gc:i.depthFunc(519);break;case _c:i.depthFunc(513);break;case fs:i.depthFunc(515);break;case xc:i.depthFunc(514);break;case vc:i.depthFunc(518);break;case Mc:i.depthFunc(516);break;case yc:i.depthFunc(517);break;default:i.depthFunc(515)}Q=pe}},setLocked:function(pe){R=pe},setClear:function(pe){ce!==pe&&(i.clearDepth(pe),ce=pe)},reset:function(){R=!1,j=null,Q=null,ce=null}}}function a(){let R=!1,j=null,Q=null,ce=null,pe=null,Ve=null,it=null,pt=null,Wt=null;return{setTest:function(Xe){R||(Xe?fe(2960):de(2960))},setMask:function(Xe){j!==Xe&&!R&&(i.stencilMask(Xe),j=Xe)},setFunc:function(Xe,Dt,qt){(Q!==Xe||ce!==Dt||pe!==qt)&&(i.stencilFunc(Xe,Dt,qt),Q=Xe,ce=Dt,pe=qt)},setOp:function(Xe,Dt,qt){(Ve!==Xe||it!==Dt||pt!==qt)&&(i.stencilOp(Xe,Dt,qt),Ve=Xe,it=Dt,pt=qt)},setLocked:function(Xe){R=Xe},setClear:function(Xe){Wt!==Xe&&(i.clearStencil(Xe),Wt=Xe)},reset:function(){R=!1,j=null,Q=null,ce=null,pe=null,Ve=null,it=null,pt=null,Wt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,d=[],p=null,v=!1,w=null,_=null,b=null,E=null,P=null,T=null,g=null,M=!1,L=null,I=null,H=null,D=null,N=null;const k=i.getParameter(35661);let V=!1,K=0;const q=i.getParameter(7938);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=K>=2);let Z=null,ee={};const me=i.getParameter(3088),G=i.getParameter(2978),J=new at().fromArray(me),re=new at().fromArray(G);function z(R,j,Q){const ce=new Uint8Array(4),pe=i.createTexture();i.bindTexture(R,pe),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let Ve=0;Ve<Q;Ve++)i.texImage2D(j+Ve,0,6408,1,1,0,6408,5121,ce);return pe}const ue={};ue[3553]=z(3553,3553,1),ue[34067]=z(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(2929),c.setFunc(fs),tt(!1),nt(Hs),fe(2884),et(bn);function fe(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function de(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function he(R,j){return m[R]!==j?(i.bindFramebuffer(R,j),m[R]=j,n&&(R===36009&&(m[36160]=j),R===36160&&(m[36009]=j)),!0):!1}function Se(R,j){let Q=d,ce=!1;if(R)if(Q=x.get(j),Q===void 0&&(Q=[],x.set(j,Q)),R.isWebGLMultipleRenderTargets){const pe=R.texture;if(Q.length!==pe.length||Q[0]!==36064){for(let Ve=0,it=pe.length;Ve<it;Ve++)Q[Ve]=36064+Ve;Q.length=pe.length,ce=!0}}else Q[0]!==36064&&(Q[0]=36064,ce=!0);else Q[0]!==1029&&(Q[0]=1029,ce=!0);ce&&(t.isWebGL2?i.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Te(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const Ce={[ri]:32774,[rc]:32778,[sc]:32779};if(n)Ce[js]=32775,Ce[Ys]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ce[js]=R.MIN_EXT,Ce[Ys]=R.MAX_EXT)}const Oe={[oc]:0,[ac]:1,[lc]:768,[Ca]:770,[pc]:776,[hc]:774,[uc]:772,[cc]:769,[La]:771,[dc]:775,[fc]:773};function et(R,j,Q,ce,pe,Ve,it,pt){if(R===bn){v===!0&&(de(3042),v=!1);return}if(v===!1&&(fe(3042),v=!0),R!==ic){if(R!==w||pt!==M){if((_!==ri||P!==ri)&&(i.blendEquation(32774),_=ri,P=ri),pt)switch(R){case li:i.blendFuncSeparate(1,771,1,771);break;case Ws:i.blendFunc(1,1);break;case qs:i.blendFuncSeparate(0,769,0,1);break;case Xs:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case li:i.blendFuncSeparate(770,771,1,771);break;case Ws:i.blendFunc(770,1);break;case qs:i.blendFuncSeparate(0,769,0,1);break;case Xs:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,E=null,T=null,g=null,w=R,M=pt}return}pe=pe||j,Ve=Ve||Q,it=it||ce,(j!==_||pe!==P)&&(i.blendEquationSeparate(Ce[j],Ce[pe]),_=j,P=pe),(Q!==b||ce!==E||Ve!==T||it!==g)&&(i.blendFuncSeparate(Oe[Q],Oe[ce],Oe[Ve],Oe[it]),b=Q,E=ce,T=Ve,g=it),w=R,M=!1}function ht(R,j){R.side===xn?de(2884):fe(2884);let Q=R.side===Pt;j&&(Q=!Q),tt(Q),R.blending===li&&R.transparent===!1?et(bn):et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);const ce=R.stencilWrite;l.setTest(ce),ce&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ge(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?fe(32926):de(32926)}function tt(R){L!==R&&(R?i.frontFace(2304):i.frontFace(2305),L=R)}function nt(R){R!==ec?(fe(2884),R!==I&&(R===Hs?i.cullFace(1029):R===tc?i.cullFace(1028):i.cullFace(1032))):de(2884),I=R}function qe(R){R!==H&&(V&&i.lineWidth(R),H=R)}function Ge(R,j,Q){R?(fe(32823),(D!==j||N!==Q)&&(i.polygonOffset(j,Q),D=j,N=Q)):de(32823)}function St(R){R?fe(3089):de(3089)}function dt(R){R===void 0&&(R=33984+k-1),Z!==R&&(i.activeTexture(R),Z=R)}function A(R,j,Q){Q===void 0&&(Z===null?Q=33984+k-1:Q=Z);let ce=ee[Q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Q]=ce),(ce.type!==R||ce.texture!==j)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(R,j||ue[R]),ce.type=R,ce.texture=j)}function y(){const R=ee[Z];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function _e(R){re.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function Re(R,j){let Q=h.get(j);Q===void 0&&(Q=new WeakMap,h.set(j,Q));let ce=Q.get(R);ce===void 0&&(ce=i.getUniformBlockIndex(j,R.name),Q.set(R,ce))}function Ue(R,j){const ce=h.get(j).get(R);u.get(j)!==ce&&(i.uniformBlockBinding(j,ce,R.__bindingPointIndex),u.set(j,ce))}function Be(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Z=null,ee={},m={},x=new WeakMap,d=[],p=null,v=!1,w=null,_=null,b=null,E=null,P=null,T=null,g=null,M=!1,L=null,I=null,H=null,D=null,N=null,J.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:fe,disable:de,bindFramebuffer:he,drawBuffers:Se,useProgram:Te,setBlending:et,setMaterial:ht,setFlipSided:tt,setCullFace:nt,setLineWidth:qe,setPolygonOffset:Ge,setScissorTest:St,activeTexture:dt,bindTexture:A,unbindTexture:y,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:se,texImage3D:ge,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:O,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:C,scissor:xe,viewport:_e,reset:Be}}function $p(i,e,t,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,y){return v?new OffscreenCanvas(A,y):pr("canvas")}function _(A,y,X,te){let ne=1;if((A.width>te||A.height>te)&&(ne=te/Math.max(A.width,A.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=y?Kc:Math.floor,Me=ae(ne*A.width),C=ae(ne*A.height);d===void 0&&(d=w(Me,C));const O=X?w(Me,C):d;return O.width=Me,O.height=C,O.getContext("2d").drawImage(A,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+C+")."),O}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return So(A.width)&&So(A.height)}function E(A){return o?!1:A.wrapS!==Bt||A.wrapT!==Bt||A.minFilter!==xt&&A.minFilter!==Nt}function P(A,y){return A.generateMipmaps&&y&&A.minFilter!==xt&&A.minFilter!==Nt}function T(A){i.generateMipmap(A)}function g(A,y,X,te,ne=!1){if(o===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=y;return y===6403&&(X===5126&&(ae=33326),X===5131&&(ae=33325),X===5121&&(ae=33321)),y===33319&&(X===5126&&(ae=33328),X===5131&&(ae=33327),X===5121&&(ae=33323)),y===6408&&(X===5126&&(ae=34836),X===5131&&(ae=34842),X===5121&&(ae=te===He&&ne===!1?35907:32856),X===32819&&(ae=32854),X===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function M(A,y,X){return P(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==xt&&A.minFilter!==Nt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){return A===xt||A===$s||A===Pr?9728:9729}function I(A){const y=A.target;y.removeEventListener("dispose",I),D(y),y.isVideoTexture&&x.delete(y)}function H(A){const y=A.target;y.removeEventListener("dispose",H),k(y)}function D(A){const y=n.get(A);if(y.__webglInit===void 0)return;const X=A.source,te=p.get(X);if(te){const ne=te[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(A),Object.keys(te).length===0&&p.delete(X)}n.remove(A)}function N(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const X=A.source,te=p.get(X);delete te[y.__cacheKey],a.memory.textures--}function k(A){const y=A.texture,X=n.get(A),te=n.get(y);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ae=y.length;ne<ae;ne++){const Me=n.get(y[ne]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(y[ne])}n.remove(y),n.remove(A)}let V=0;function K(){V=0}function q(){const A=V;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),V+=1,A}function Z(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.encoding),y.join()}function ee(A,y){const X=n.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(X,A,y);return}}t.bindTexture(3553,X.__webglTexture,33984+y)}function me(A,y){const X=n.get(A);if(A.version>0&&X.__version!==A.version){de(X,A,y);return}t.bindTexture(35866,X.__webglTexture,33984+y)}function G(A,y){const X=n.get(A);if(A.version>0&&X.__version!==A.version){de(X,A,y);return}t.bindTexture(32879,X.__webglTexture,33984+y)}function J(A,y){const X=n.get(A);if(A.version>0&&X.__version!==A.version){he(X,A,y);return}t.bindTexture(34067,X.__webglTexture,33984+y)}const re={[ps]:10497,[Bt]:33071,[ms]:33648},z={[xt]:9728,[$s]:9984,[Pr]:9986,[Nt]:9729,[Lc]:9985,[Ri]:9987};function ue(A,y,X){if(X?(i.texParameteri(A,10242,re[y.wrapS]),i.texParameteri(A,10243,re[y.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,re[y.wrapR]),i.texParameteri(A,10240,z[y.magFilter]),i.texParameteri(A,10241,z[y.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(y.wrapS!==Bt||y.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,L(y.magFilter)),i.texParameteri(A,10241,L(y.minFilter)),y.minFilter!==xt&&y.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===xt||y.minFilter!==Pr&&y.minFilter!==Ri||y.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function fe(A,y){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",I));const te=y.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const ae=Z(y);if(ae!==A.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ae].usedTimes++;const Me=ne[A.__cacheKey];Me!==void 0&&(ne[A.__cacheKey].usedTimes--,Me.usedTimes===0&&N(y)),A.__cacheKey=ae,A.__webglTexture=ne[ae].texture}return X}function de(A,y,X){let te=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=35866),y.isData3DTexture&&(te=32879);const ne=fe(A,y),ae=y.source;t.bindTexture(te,A.__webglTexture,33984+X);const Me=n.get(ae);if(ae.version!==Me.__version||ne===!0){t.activeTexture(33984+X),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const C=E(y)&&b(y.image)===!1;let O=_(y.image,C,!1,u);O=dt(y,O);const le=b(O)||o,se=s.convert(y.format,y.encoding);let ge=s.convert(y.type),xe=g(y.internalFormat,se,ge,y.encoding,y.isVideoTexture);ue(te,y,le);let _e;const Re=y.mipmaps,Ue=o&&y.isVideoTexture!==!0,Be=Me.__version===void 0||ne===!0,R=M(y,O,le);if(y.isDepthTexture)xe=6402,o?y.type===On?xe=36012:y.type===Fn?xe=33190:y.type===ci?xe=35056:xe=33189:y.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Un&&xe===6402&&y.type!==Da&&y.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Fn,ge=s.convert(y.type)),y.format===mi&&xe===6402&&(xe=34041,y.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ci,ge=s.convert(y.type))),Be&&(Ue?t.texStorage2D(3553,1,xe,O.width,O.height):t.texImage2D(3553,0,xe,O.width,O.height,0,se,ge,null));else if(y.isDataTexture)if(Re.length>0&&le){Ue&&Be&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let j=0,Q=Re.length;j<Q;j++)_e=Re[j],Ue?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,se,ge,_e.data):t.texImage2D(3553,j,xe,_e.width,_e.height,0,se,ge,_e.data);y.generateMipmaps=!1}else Ue?(Be&&t.texStorage2D(3553,R,xe,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,se,ge,O.data)):t.texImage2D(3553,0,xe,O.width,O.height,0,se,ge,O.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&Be&&t.texStorage3D(35866,R,xe,Re[0].width,Re[0].height,O.depth);for(let j=0,Q=Re.length;j<Q;j++)_e=Re[j],y.format!==kt?se!==null?Ue?t.compressedTexSubImage3D(35866,j,0,0,0,_e.width,_e.height,O.depth,se,_e.data,0,0):t.compressedTexImage3D(35866,j,xe,_e.width,_e.height,O.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,j,0,0,0,_e.width,_e.height,O.depth,se,ge,_e.data):t.texImage3D(35866,j,xe,_e.width,_e.height,O.depth,0,se,ge,_e.data)}else{Ue&&Be&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let j=0,Q=Re.length;j<Q;j++)_e=Re[j],y.format!==kt?se!==null?Ue?t.compressedTexSubImage2D(3553,j,0,0,_e.width,_e.height,se,_e.data):t.compressedTexImage2D(3553,j,xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,se,ge,_e.data):t.texImage2D(3553,j,xe,_e.width,_e.height,0,se,ge,_e.data)}else if(y.isDataArrayTexture)Ue?(Be&&t.texStorage3D(35866,R,xe,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,se,ge,O.data)):t.texImage3D(35866,0,xe,O.width,O.height,O.depth,0,se,ge,O.data);else if(y.isData3DTexture)Ue?(Be&&t.texStorage3D(32879,R,xe,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,se,ge,O.data)):t.texImage3D(32879,0,xe,O.width,O.height,O.depth,0,se,ge,O.data);else if(y.isFramebufferTexture){if(Be)if(Ue)t.texStorage2D(3553,R,xe,O.width,O.height);else{let j=O.width,Q=O.height;for(let ce=0;ce<R;ce++)t.texImage2D(3553,ce,xe,j,Q,0,se,ge,null),j>>=1,Q>>=1}}else if(Re.length>0&&le){Ue&&Be&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let j=0,Q=Re.length;j<Q;j++)_e=Re[j],Ue?t.texSubImage2D(3553,j,0,0,se,ge,_e):t.texImage2D(3553,j,xe,se,ge,_e);y.generateMipmaps=!1}else Ue?(Be&&t.texStorage2D(3553,R,xe,O.width,O.height),t.texSubImage2D(3553,0,0,0,se,ge,O)):t.texImage2D(3553,0,xe,se,ge,O);P(y,le)&&T(te),Me.__version=ae.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function he(A,y,X){if(y.image.length!==6)return;const te=fe(A,y),ne=y.source;t.bindTexture(34067,A.__webglTexture,33984+X);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+X),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,O=[];for(let j=0;j<6;j++)!Me&&!C?O[j]=_(y.image[j],!1,!0,l):O[j]=C?y.image[j].image:y.image[j],O[j]=dt(y,O[j]);const le=O[0],se=b(le)||o,ge=s.convert(y.format,y.encoding),xe=s.convert(y.type),_e=g(y.internalFormat,ge,xe,y.encoding),Re=o&&y.isVideoTexture!==!0,Ue=ae.__version===void 0||te===!0;let Be=M(y,le,se);ue(34067,y,se);let R;if(Me){Re&&Ue&&t.texStorage2D(34067,Be,_e,le.width,le.height);for(let j=0;j<6;j++){R=O[j].mipmaps;for(let Q=0;Q<R.length;Q++){const ce=R[Q];y.format!==kt?ge!==null?Re?t.compressedTexSubImage2D(34069+j,Q,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(34069+j,Q,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+j,Q,0,0,ce.width,ce.height,ge,xe,ce.data):t.texImage2D(34069+j,Q,_e,ce.width,ce.height,0,ge,xe,ce.data)}}}else{R=y.mipmaps,Re&&Ue&&(R.length>0&&Be++,t.texStorage2D(34067,Be,_e,O[0].width,O[0].height));for(let j=0;j<6;j++)if(C){Re?t.texSubImage2D(34069+j,0,0,0,O[j].width,O[j].height,ge,xe,O[j].data):t.texImage2D(34069+j,0,_e,O[j].width,O[j].height,0,ge,xe,O[j].data);for(let Q=0;Q<R.length;Q++){const pe=R[Q].image[j].image;Re?t.texSubImage2D(34069+j,Q+1,0,0,pe.width,pe.height,ge,xe,pe.data):t.texImage2D(34069+j,Q+1,_e,pe.width,pe.height,0,ge,xe,pe.data)}}else{Re?t.texSubImage2D(34069+j,0,0,0,ge,xe,O[j]):t.texImage2D(34069+j,0,_e,ge,xe,O[j]);for(let Q=0;Q<R.length;Q++){const ce=R[Q];Re?t.texSubImage2D(34069+j,Q+1,0,0,ge,xe,ce.image[j]):t.texImage2D(34069+j,Q+1,_e,ge,xe,ce.image[j])}}}P(y,se)&&T(34067),ae.__version=ne.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Se(A,y,X,te,ne){const ae=s.convert(X.format,X.encoding),Me=s.convert(X.type),C=g(X.internalFormat,ae,Me,X.encoding);n.get(y).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,C,y.width,y.height,y.depth,0,ae,Me,null):t.texImage2D(ne,0,C,y.width,y.height,0,ae,Me,null)),t.bindFramebuffer(36160,A),Ge(y)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(X).__webglTexture,0,qe(y)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,te,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(A,y,X){if(i.bindRenderbuffer(36161,A),y.depthBuffer&&!y.stencilBuffer){let te=33189;if(X||Ge(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===On?te=36012:ne.type===Fn&&(te=33190));const ae=qe(y);Ge(y)?f.renderbufferStorageMultisampleEXT(36161,ae,te,y.width,y.height):i.renderbufferStorageMultisample(36161,ae,te,y.width,y.height)}else i.renderbufferStorage(36161,te,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(y.depthBuffer&&y.stencilBuffer){const te=qe(y);X&&Ge(y)===!1?i.renderbufferStorageMultisample(36161,te,35056,y.width,y.height):Ge(y)?f.renderbufferStorageMultisampleEXT(36161,te,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],Me=s.convert(ae.format,ae.encoding),C=s.convert(ae.type),O=g(ae.internalFormat,Me,C,ae.encoding),le=qe(y);X&&Ge(y)===!1?i.renderbufferStorageMultisample(36161,le,O,y.width,y.height):Ge(y)?f.renderbufferStorageMultisampleEXT(36161,le,O,y.width,y.height):i.renderbufferStorage(36161,O,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function Ce(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,ne=qe(y);if(y.depthTexture.format===Un)Ge(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):i.framebufferTexture2D(36160,36096,3553,te,0);else if(y.depthTexture.format===mi)Ge(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):i.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const y=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,A)}else if(X){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=i.createRenderbuffer(),Te(y.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Te(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function et(A,y,X){const te=n.get(A);y!==void 0&&Se(te.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&Oe(A)}function ht(A){const y=A.texture,X=n.get(A),te=n.get(y);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=y.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Me=b(A)||o;if(ne){X.__webglFramebuffer=[];for(let C=0;C<6;C++)X.__webglFramebuffer[C]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const C=A.texture;for(let O=0,le=C.length;O<le;O++){const se=n.get(C[O]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ge(A)===!1){const C=ae?y:[y];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const le=C[O];X.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(36161,X.__webglColorRenderbuffer[O]);const se=s.convert(le.format,le.encoding),ge=s.convert(le.type),xe=g(le.internalFormat,se,ge,le.encoding,A.isXRRenderTarget===!0),_e=qe(A);i.renderbufferStorageMultisample(36161,_e,xe,A.width,A.height),i.framebufferRenderbuffer(36160,36064+O,36161,X.__webglColorRenderbuffer[O])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),ue(34067,y,Me);for(let C=0;C<6;C++)Se(X.__webglFramebuffer[C],A,y,36064,34069+C);P(y,Me)&&T(34067),t.unbindTexture()}else if(ae){const C=A.texture;for(let O=0,le=C.length;O<le;O++){const se=C[O],ge=n.get(se);t.bindTexture(3553,ge.__webglTexture),ue(3553,se,Me),Se(X.__webglFramebuffer,A,se,36064+O,3553),P(se,Me)&&T(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),ue(C,y,Me),Se(X.__webglFramebuffer,A,y,36064,C),P(y,Me)&&T(C),t.unbindTexture()}A.depthBuffer&&Oe(A)}function tt(A){const y=b(A)||o,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ne=X.length;te<ne;te++){const ae=X[te];if(P(ae,y)){const Me=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(Me,C),T(Me),t.unbindTexture()}}}function nt(A){if(o&&A.samples>0&&Ge(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,te=A.height;let ne=16384;const ae=[],Me=A.stencilBuffer?33306:36096,C=n.get(A),O=A.isWebGLMultipleRenderTargets===!0;if(O)for(let le=0;le<y.length;le++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let le=0;le<y.length;le++){ae.push(36064+le),A.depthBuffer&&ae.push(Me);const se=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(se===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),O&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[le]),se===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),O){const ge=n.get(y[le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ge,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,ne,9728),m&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let le=0;le<y.length;le++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,C.__webglColorRenderbuffer[le]);const se=n.get(y[le]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,se,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function qe(A){return Math.min(h,A.samples)}function Ge(A){const y=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(A){const y=a.render.frame;x.get(A)!==y&&(x.set(A,y),A.update())}function dt(A,y){const X=A.encoding,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===gs||X!==Bn&&(X===He?o===!1?e.has("EXT_sRGB")===!0&&te===kt?(A.format=gs,A.minFilter=Nt,A.generateMipmaps=!1):y=Fa.sRGBToLinear(y):(te!==kt||ne!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),y}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=me,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=et,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ge}function Zp(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===zn)return 5121;if(s===Ic)return 32819;if(s===Nc)return 32820;if(s===Pc)return 5120;if(s===Rc)return 5122;if(s===Da)return 5123;if(s===Dc)return 5124;if(s===Fn)return 5125;if(s===On)return 5126;if(s===Di)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fc)return 6406;if(s===kt)return 6408;if(s===Oc)return 6409;if(s===Uc)return 6410;if(s===Un)return 6402;if(s===mi)return 34041;if(s===gs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zc)return 6403;if(s===Bc)return 36244;if(s===kc)return 33319;if(s===Gc)return 33320;if(s===Vc)return 36249;if(s===Rr||s===Dr||s===Ir||s===Nr)if(a===He)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ir)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zs||s===Ks||s===Js||s===Qs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Zs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ks)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Js)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eo||s===to)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===eo)return a===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===to)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===no||s===io||s===ro||s===so||s===oo||s===ao||s===lo||s===co||s===uo||s===fo||s===ho||s===po||s===mo||s===go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===no)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===io)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ro)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oo)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ao)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lo)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uo)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fo)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ho)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===po)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mo)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===go)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fr)return a===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wc||s===_o||s===xo||s===vo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===_o)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ci?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Kp extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jp={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),v=this._getHandJoint(l,d);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qp extends Rt{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Un,u!==Un&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Un&&(n=Fn),n===void 0&&u===mi&&(n=ci),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1}}class em extends Hn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,x=null;const d=t.getContextAttributes();let p=null,v=null;const w=[],_=[],b=new Set,E=new Map,P=new Ft;P.layers.enable(1),P.viewport=new at;const T=new Ft;T.layers.enable(2),T.viewport=new at;const g=[P,T],M=new Kp;M.layers.enable(1),M.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=w[G];return J===void 0&&(J=new os,w[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=w[G];return J===void 0&&(J=new os,w[G]=J),J.getGripSpace()},this.getHand=function(G){let J=w[G];return J===void 0&&(J=new os,w[G]=J),J.getHandSpace()};function H(G){const J=_.indexOf(G.inputSource);if(J===-1)return;const re=w[J];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function D(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let G=0;G<w.length;G++){const J=_[G];J!==null&&(_[G]=null,w[G].disconnect(J))}L=null,I=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,v=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),v=new Gn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:zn,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let J=null,re=null,z=null;d.depth&&(z=d.stencil?35056:33190,J=d.stencil?mi:Un,re=d.stencil?ci:Fn);const ue={colorFormat:32856,depthFormat:z,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),v=new Gn(f.textureWidth,f.textureHeight,{format:kt,type:zn,depthTexture:new Qp(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const fe=e.properties.get(v);fe.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(G){for(let J=0;J<G.removed.length;J++){const re=G.removed[J],z=_.indexOf(re);z>=0&&(_[z]=null,w[z].disconnect(re))}for(let J=0;J<G.added.length;J++){const re=G.added[J];let z=_.indexOf(re);if(z===-1){for(let fe=0;fe<w.length;fe++)if(fe>=_.length){_.push(re),z=fe;break}else if(_[fe]===null){_[fe]=re,z=fe;break}if(z===-1)break}const ue=w[z];ue&&ue.connect(re)}}const k=new F,V=new F;function K(G,J,re){k.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(re.matrixWorld);const z=k.distanceTo(V),ue=J.projectionMatrix.elements,fe=re.projectionMatrix.elements,de=ue[14]/(ue[10]-1),he=ue[14]/(ue[10]+1),Se=(ue[9]+1)/ue[5],Te=(ue[9]-1)/ue[5],Ce=(ue[8]-1)/ue[0],Oe=(fe[8]+1)/fe[0],et=de*Ce,ht=de*Oe,tt=z/(-Ce+Oe),nt=tt*-Ce;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(nt),G.translateZ(tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const qe=de+tt,Ge=he+tt,St=et-nt,dt=ht+(z-nt),A=Se*he/Ge*qe,y=Te*he/Ge*qe;G.projectionMatrix.makePerspective(St,dt,A,y,qe,Ge)}function q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=T.near=P.near=G.near,M.far=T.far=P.far=G.far,(L!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,I=M.far);const J=G.parent,re=M.cameras;q(M,J);for(let ue=0;ue<re.length;ue++)q(re[ue],J);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),G.matrix.copy(M.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const z=G.children;for(let ue=0,fe=z.length;ue<fe;ue++)z[ue].updateMatrixWorld(!0);re.length===2?K(M,P,T):M.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return b};let Z=null;function ee(G,J){if(u=J.getViewerPose(l||a),x=J,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let z=!1;re.length!==M.cameras.length&&(M.cameras.length=0,z=!0);for(let ue=0;ue<re.length;ue++){const fe=re[ue];let de=null;if(m!==null)de=m.getViewport(fe);else{const Se=h.getViewSubImage(f,fe);de=Se.viewport,ue===0&&(e.setRenderTargetTextures(v,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let he=g[ue];he===void 0&&(he=new Ft,he.layers.enable(ue),he.viewport=new at,g[ue]=he),he.matrix.fromArray(fe.transform.matrix),he.projectionMatrix.fromArray(fe.projectionMatrix),he.viewport.set(de.x,de.y,de.width,de.height),ue===0&&M.matrix.copy(he.matrix),z===!0&&M.cameras.push(he)}}for(let re=0;re<w.length;re++){const z=_[re],ue=w[re];z!==null&&ue!==void 0&&ue.update(z,J,l||a)}if(Z&&Z(G,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let re=null;for(const z of b)J.detectedPlanes.has(z)||(re===null&&(re=[]),re.push(z));if(re!==null)for(const z of re)b.delete(z),E.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of J.detectedPlanes)if(!b.has(z))b.add(z),E.set(z,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const ue=E.get(z);z.lastChangedTime>ue&&(E.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}x=null}const me=new ja;me.setAnimationLoop(ee),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function tm(i,e){function t(d,p){p.color.getRGB(d.fogColor.value,Ha(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,v,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),l(d,p)):p.isMeshStandardMaterial?(r(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,_)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,v,w):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Pt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Pt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,v,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=w*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,v){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Pt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function nm(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function c(w,_){const b=_.program;n.uniformBlockBinding(w,b)}function l(w,_){let b=r[w.id];b===void 0&&(x(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",p));const E=_.program;n.updateUBOMapping(w,E);const P=e.render.frame;s[w.id]!==P&&(f(w),s[w.id]=P)}function u(w){const _=h();w.__bindingPointIndex=_;const b=i.createBuffer(),E=w.__size,P=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,E,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,b),b}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=r[w.id],b=w.uniforms,E=w.__cache;i.bindBuffer(35345,_);for(let P=0,T=b.length;P<T;P++){const g=b[P];if(m(g,P,E)===!0){const M=g.__offset,L=Array.isArray(g.value)?g.value:[g.value];let I=0;for(let H=0;H<L.length;H++){const D=L[H],N=d(D);typeof D=="number"?(g.__data[0]=D,i.bufferSubData(35345,M+I,g.__data)):D.isMatrix3?(g.__data[0]=D.elements[0],g.__data[1]=D.elements[1],g.__data[2]=D.elements[2],g.__data[3]=D.elements[0],g.__data[4]=D.elements[3],g.__data[5]=D.elements[4],g.__data[6]=D.elements[5],g.__data[7]=D.elements[0],g.__data[8]=D.elements[6],g.__data[9]=D.elements[7],g.__data[10]=D.elements[8],g.__data[11]=D.elements[0]):(D.toArray(g.__data,I),I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,M,g.__data)}}i.bindBuffer(35345,null)}function m(w,_,b){const E=w.value;if(b[_]===void 0){if(typeof E=="number")b[_]=E;else{const P=Array.isArray(E)?E:[E],T=[];for(let g=0;g<P.length;g++)T.push(P[g].clone());b[_]=T}return!0}else if(typeof E=="number"){if(b[_]!==E)return b[_]=E,!0}else{const P=Array.isArray(b[_])?b[_]:[b[_]],T=Array.isArray(E)?E:[E];for(let g=0;g<P.length;g++){const M=P[g];if(M.equals(T[g])===!1)return M.copy(T[g]),!0}}return!1}function x(w){const _=w.uniforms;let b=0;const E=16;let P=0;for(let T=0,g=_.length;T<g;T++){const M=_[T],L={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let H=0,D=I.length;H<D;H++){const N=I[H],k=d(N);L.boundary+=k.boundary,L.storage+=k.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,T>0){P=b%E;const H=E-P;P!==0&&H-L.boundary<0&&(b+=E-P,M.__offset=b)}b+=L.storage}return P=b%E,P>0&&(b+=E-P),w.__size=b,w.__cache={},this}function d(w){const _={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function v(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:v}}function im(){const i=pr("canvas");return i.style.display="block",i}function Cs(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:im(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.useLegacyLights=!0,this.toneMapping=cn,this.toneMappingExposure=1;const d=this;let p=!1,v=0,w=0,_=null,b=-1,E=null;const P=new at,T=new at;let g=null,M=e.width,L=e.height,I=1,H=null,D=null;const N=new at(0,0,M,L),k=new at(0,0,M,L);let V=!1;const K=new Xa;let q=!1,Z=!1,ee=null;const me=new ot,G=new F,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return _===null?I:1}let z=t;function ue(S,B){for(let W=0;W<S.length;W++){const U=S[W],Y=e.getContext(U,B);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Es}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",_e,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),z=ue(B,S),z===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let fe,de,he,Se,Te,Ce,Oe,et,ht,tt,nt,qe,Ge,St,dt,A,y,X,te,ne,ae,Me,C,O;function le(){fe=new pd(z),de=new ad(z,fe,i),fe.init(de),Me=new Zp(z,fe,de),he=new Yp(z,fe,de),Se=new _d,Te=new Np,Ce=new $p(z,fe,he,Te,de,Me,Se),Oe=new cd(d),et=new dd(d),ht=new wu(z,de),C=new sd(z,fe,ht,de),tt=new md(z,ht,Se,C),nt=new yd(z,tt,ht,Se),te=new Md(z,de,Ce),A=new ld(Te),qe=new Ip(d,Oe,et,fe,de,C,A),Ge=new tm(d,Te),St=new Op,dt=new Vp(fe,de),X=new rd(d,Oe,et,he,nt,u,a),y=new jp(d,nt,de),O=new nm(z,Se,de,he),ne=new od(z,fe,Se,de),ae=new gd(z,fe,Se,de),Se.programs=qe.programs,d.capabilities=de,d.extensions=fe,d.properties=Te,d.renderLists=St,d.shadowMap=y,d.state=he,d.info=Se}le();const se=new em(d,z);this.xr=se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(M,L,!1))},this.getSize=function(S){return S.set(M,L)},this.setSize=function(S,B,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=S,L=B,e.width=Math.floor(S*I),e.height=Math.floor(B*I),W===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(M*I,L*I).floor()},this.setDrawingBufferSize=function(S,B,W){M=S,L=B,I=W,e.width=Math.floor(S*W),e.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,B,W,U){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,W,U),he.viewport(P.copy(N).multiplyScalar(I).floor())},this.getScissor=function(S){return S.copy(k)},this.setScissor=function(S,B,W,U){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,B,W,U),he.scissor(T.copy(k).multiplyScalar(I).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){he.setScissorTest(V=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(S=!0,B=!0,W=!0){let U=0;S&&(U|=16384),B&&(U|=256),W&&(U|=1024),z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),St.dispose(),dt.dispose(),Te.dispose(),Oe.dispose(),et.dispose(),nt.dispose(),C.dispose(),O.dispose(),qe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Q),se.removeEventListener("sessionend",ce),ee&&(ee.dispose(),ee=null),pe.stop()};function ge(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Se.autoReset,B=y.enabled,W=y.autoUpdate,U=y.needsUpdate,Y=y.type;le(),Se.autoReset=S,y.enabled=B,y.autoUpdate=W,y.needsUpdate=U,y.type=Y}function _e(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Re(S){const B=S.target;B.removeEventListener("dispose",Re),Ue(B)}function Ue(S){Be(S),Te.remove(S)}function Be(S){const B=Te.get(S).programs;B!==void 0&&(B.forEach(function(W){qe.releaseProgram(W)}),S.isShaderMaterial&&qe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,U,Y,ye){B===null&&(B=J);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=pl(S,B,W,U,Y);he.setMaterial(U,Ee);let Pe=W.index,ze=1;U.wireframe===!0&&(Pe=tt.getWireframeAttribute(W),ze=2);const Ie=W.drawRange,Ne=W.attributes.position;let je=Ie.start*ze,wt=(Ie.start+Ie.count)*ze;ye!==null&&(je=Math.max(je,ye.start*ze),wt=Math.min(wt,(ye.start+ye.count)*ze)),Pe!==null?(je=Math.max(je,0),wt=Math.min(wt,Pe.count)):Ne!=null&&(je=Math.max(je,0),wt=Math.min(wt,Ne.count));const en=wt-je;if(en<0||en===1/0)return;C.setup(Y,U,Le,W,Pe);let Tn,Ye=ne;if(Pe!==null&&(Tn=ht.get(Pe),Ye=ae,Ye.setIndex(Tn)),Y.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*re()),Ye.setMode(1)):Ye.setMode(4);else if(Y.isLine){let Fe=U.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*re()),Y.isLineSegments?Ye.setMode(1):Y.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else Y.isPoints?Ye.setMode(0):Y.isSprite&&Ye.setMode(4);if(Y.isInstancedMesh)Ye.renderInstances(je,en,Y.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tr=Math.min(W.instanceCount,Fe);Ye.renderInstances(je,en,Tr)}else Ye.render(je,en)},this.compile=function(S,B){function W(U,Y,ye){U.transparent===!0&&U.side===xn&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,Dt(U,Y,ye),U.side=Sn,U.needsUpdate=!0,Dt(U,Y,ye),U.side=xn):Dt(U,Y,ye)}f=dt.get(S),f.init(),x.push(f),S.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(d.useLegacyLights),S.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let ye=0;ye<Y.length;ye++){const Ee=Y[ye];W(Ee,S,U)}else W(Y,S,U)}),x.pop(),f=null};let R=null;function j(S){R&&R(S)}function Q(){pe.stop()}function ce(){pe.start()}const pe=new ja;pe.setAnimationLoop(j),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){R=S,se.setAnimationLoop(S),S===null?pe.stop():pe.start()},se.addEventListener("sessionstart",Q),se.addEventListener("sessionend",ce),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,B,_),f=dt.get(S,x.length),f.init(),x.push(f),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(me),Z=this.localClippingEnabled,q=A.init(this.clippingPlanes,Z),h=St.get(S,m.length),h.init(),m.push(h),Ve(S,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(H,D),q===!0&&A.beginShadows();const W=f.state.shadowsArray;if(y.render(W,S,B),q===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,S),f.setupLights(d.useLegacyLights),B.isArrayCamera){const U=B.cameras;for(let Y=0,ye=U.length;Y<ye;Y++){const Ee=U[Y];it(h,S,Ee,Ee.viewport)}}else it(h,S,B);_!==null&&(Ce.updateMultisampleRenderTarget(_),Ce.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(d,S,B),C.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ve(S,B,W,U){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){U&&G.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const Ee=nt.update(S),Le=S.material;Le.visible&&h.push(S,Ee,Le,W,G.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Se.render.frame&&(S.skeleton.update(),S.skeleton.frame=Se.render.frame),!S.frustumCulled||K.intersectsObject(S))){U&&G.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const Ee=nt.update(S),Le=S.material;if(Array.isArray(Le)){const Pe=Ee.groups;for(let ze=0,Ie=Pe.length;ze<Ie;ze++){const Ne=Pe[ze],je=Le[Ne.materialIndex];je&&je.visible&&h.push(S,Ee,je,W,G.z,Ne)}}else Le.visible&&h.push(S,Ee,Le,W,G.z,null)}}const ye=S.children;for(let Ee=0,Le=ye.length;Ee<Le;Ee++)Ve(ye[Ee],B,W,U)}function it(S,B,W,U){const Y=S.opaque,ye=S.transmissive,Ee=S.transparent;f.setupLightsView(W),q===!0&&A.setGlobalState(d.clippingPlanes,W),ye.length>0&&pt(Y,B,W),U&&he.viewport(P.copy(U)),Y.length>0&&Wt(Y,B,W),ye.length>0&&Wt(ye,B,W),Ee.length>0&&Wt(Ee,B,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function pt(S,B,W){const U=de.isWebGL2;ee===null&&(ee=new Gn(1024,1024,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Di:zn,minFilter:Ri,samples:U&&s===!0?4:0}));const Y=d.getRenderTarget();d.setRenderTarget(ee),d.clear();const ye=d.toneMapping;d.toneMapping=cn,Wt(S,B,W),d.toneMapping=ye,Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee),d.setRenderTarget(Y)}function Wt(S,B,W){const U=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,ye=S.length;Y<ye;Y++){const Ee=S[Y],Le=Ee.object,Pe=Ee.geometry,ze=U===null?Ee.material:U,Ie=Ee.group;Le.layers.test(W.layers)&&Xe(Le,B,W,Pe,ze,Ie)}}function Xe(S,B,W,U,Y,ye){S.onBeforeRender(d,B,W,U,Y,ye),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(d,B,W,U,S,ye),Y.transparent===!0&&Y.side===xn&&Y.forceSinglePass===!1?(Y.side=Pt,Y.needsUpdate=!0,d.renderBufferDirect(W,B,U,Y,S,ye),Y.side=Sn,Y.needsUpdate=!0,d.renderBufferDirect(W,B,U,Y,S,ye),Y.side=xn):d.renderBufferDirect(W,B,U,Y,S,ye),S.onAfterRender(d,B,W,U,Y,ye)}function Dt(S,B,W){B.isScene!==!0&&(B=J);const U=Te.get(S),Y=f.state.lights,ye=f.state.shadowsArray,Ee=Y.state.version,Le=qe.getParameters(S,Y.state,ye,B,W),Pe=qe.getProgramCacheKey(Le);let ze=U.programs;U.environment=S.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(S.isMeshStandardMaterial?et:Oe).get(S.envMap||U.environment),ze===void 0&&(S.addEventListener("dispose",Re),ze=new Map,U.programs=ze);let Ie=ze.get(Pe);if(Ie!==void 0){if(U.currentProgram===Ie&&U.lightsStateVersion===Ee)return qt(S,Le),Ie}else Le.uniforms=qe.getUniforms(S),S.onBuild(W,Le,d),S.onBeforeCompile(Le,d),Ie=qe.acquireProgram(Le,Pe),ze.set(Pe,Ie),U.uniforms=Le.uniforms;const Ne=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=A.uniform),qt(S,Le),U.needsLights=gl(S),U.lightsStateVersion=Ee,U.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.directionalShadowMap.value=Y.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotShadowMap.value=Y.state.spotShadowMap,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMap.value=Y.state.pointShadowMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix);const je=Ie.getUniforms(),wt=ur.seqWithValue(je.seq,Ne);return U.currentProgram=Ie,U.uniformsList=wt,Ie}function qt(S,B){const W=Te.get(S);W.outputEncoding=B.outputEncoding,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function pl(S,B,W,U,Y){B.isScene!==!0&&(B=J),Ce.resetTextureUnits();const ye=B.fog,Ee=U.isMeshStandardMaterial?B.environment:null,Le=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Bn,Pe=(U.isMeshStandardMaterial?et:Oe).get(U.envMap||Ee),ze=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!U.normalMap&&!!W.attributes.tangent,Ne=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color,en=U.toneMapped?d.toneMapping:cn,Tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=Tn!==void 0?Tn.length:0,Fe=Te.get(U),Tr=f.state.lights;if(q===!0&&(Z===!0||S!==E)){const Et=S===E&&U.id===b;A.setState(U,S,Et)}let rt=!1;U.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Tr.state.version||Fe.outputEncoding!==Le||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Pe||U.fog===!0&&Fe.fog!==ye||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==A.numPlanes||Fe.numIntersection!==A.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Ie||Fe.morphTargets!==Ne||Fe.morphNormals!==je||Fe.morphColors!==wt||Fe.toneMapping!==en||de.isWebGL2===!0&&Fe.morphTargetsCount!==Ye)&&(rt=!0):(rt=!0,Fe.__version=U.version);let An=Fe.currentProgram;rt===!0&&(An=Dt(U,B,Y));let Ds=!1,Mi=!1,Ar=!1;const mt=An.getUniforms(),Cn=Fe.uniforms;if(he.useProgram(An.program)&&(Ds=!0,Mi=!0,Ar=!0),U.id!==b&&(b=U.id,Mi=!0),Ds||E!==S){if(mt.setValue(z,"projectionMatrix",S.projectionMatrix),de.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),E!==S&&(E=S,Mi=!0,Ar=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Et=mt.map.cameraPosition;Et!==void 0&&Et.setValue(z,G.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&mt.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&mt.setValue(z,"viewMatrix",S.matrixWorldInverse)}if(Y.isSkinnedMesh){mt.setOptional(z,Y,"bindMatrix"),mt.setOptional(z,Y,"bindMatrixInverse");const Et=Y.skeleton;Et&&(de.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),mt.setValue(z,"boneTexture",Et.boneTexture,Ce),mt.setValue(z,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cr=W.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0&&de.isWebGL2===!0)&&te.update(Y,W,An),(Mi||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,mt.setValue(z,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Cn.envMap.value=Pe,Cn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Mi&&(mt.setValue(z,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&ml(Cn,Ar),ye&&U.fog===!0&&Ge.refreshFogUniforms(Cn,ye),Ge.refreshMaterialUniforms(Cn,U,I,L,ee),ur.upload(z,Fe.uniformsList,Cn,Ce)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ur.upload(z,Fe.uniformsList,Cn,Ce),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&mt.setValue(z,"center",Y.center),mt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),mt.setValue(z,"normalMatrix",Y.normalMatrix),mt.setValue(z,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Et=U.uniformsGroups;for(let Lr=0,_l=Et.length;Lr<_l;Lr++)if(de.isWebGL2){const Is=Et[Lr];O.update(Is,An),O.bind(Is,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function ml(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function gl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,B,W){Te.get(S.texture).__webglTexture=B,Te.get(S.depthTexture).__webglTexture=W;const U=Te.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const W=Te.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){_=S,v=B,w=W;let U=!0,Y=null,ye=!1,Ee=!1;if(S){const Pe=Te.get(S);Pe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),U=!1):Pe.__webglFramebuffer===void 0?Ce.setupRenderTarget(S):Pe.__hasExternalTextures&&Ce.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ie=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Y=Ie[B],ye=!0):de.isWebGL2&&S.samples>0&&Ce.useMultisampledRTT(S)===!1?Y=Te.get(S).__webglMultisampledFramebuffer:Y=Ie,P.copy(S.viewport),T.copy(S.scissor),g=S.scissorTest}else P.copy(N).multiplyScalar(I).floor(),T.copy(k).multiplyScalar(I).floor(),g=V;if(he.bindFramebuffer(36160,Y)&&de.drawBuffers&&U&&he.drawBuffers(S,Y),he.viewport(P),he.scissor(T),he.setScissorTest(g),ye){const Pe=Te.get(S.texture);z.framebufferTexture2D(36160,36064,34069+B,Pe.__webglTexture,W)}else if(Ee){const Pe=Te.get(S.texture),ze=B||0;z.framebufferTextureLayer(36160,36064,Pe.__webglTexture,W||0,ze)}b=-1},this.readRenderTargetPixels=function(S,B,W,U,Y,ye,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){he.bindFramebuffer(36160,Le);try{const Pe=S.texture,ze=Pe.format,Ie=Pe.type;if(ze!==kt&&Me.convert(ze)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Di&&(fe.has("EXT_color_buffer_half_float")||de.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ie!==zn&&Me.convert(Ie)!==z.getParameter(35738)&&!(Ie===On&&(de.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-U&&W>=0&&W<=S.height-Y&&z.readPixels(B,W,U,Y,Me.convert(ze),Me.convert(Ie),ye)}finally{const Pe=_!==null?Te.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(S,B,W=0){const U=Math.pow(2,-W),Y=Math.floor(B.image.width*U),ye=Math.floor(B.image.height*U);Ce.setTexture2D(B,0),z.copyTexSubImage2D(3553,W,0,0,S.x,S.y,Y,ye),he.unbindTexture()},this.copyTextureToTexture=function(S,B,W,U=0){const Y=B.image.width,ye=B.image.height,Ee=Me.convert(W.format),Le=Me.convert(W.type);Ce.setTexture2D(W,0),z.pixelStorei(37440,W.flipY),z.pixelStorei(37441,W.premultiplyAlpha),z.pixelStorei(3317,W.unpackAlignment),B.isDataTexture?z.texSubImage2D(3553,U,S.x,S.y,Y,ye,Ee,Le,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(3553,U,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):z.texSubImage2D(3553,U,S.x,S.y,Ee,Le,B.image),U===0&&W.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W,U,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Pe=Me.convert(U.format),ze=Me.convert(U.type);let Ie;if(U.isData3DTexture)Ce.setTexture3D(U,0),Ie=32879;else if(U.isDataArrayTexture)Ce.setTexture2DArray(U,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,U.flipY),z.pixelStorei(37441,U.premultiplyAlpha),z.pixelStorei(3317,U.unpackAlignment);const Ne=z.getParameter(3314),je=z.getParameter(32878),wt=z.getParameter(3316),en=z.getParameter(3315),Tn=z.getParameter(32877),Ye=W.isCompressedTexture?W.mipmaps[0]:W.image;z.pixelStorei(3314,Ye.width),z.pixelStorei(32878,Ye.height),z.pixelStorei(3316,S.min.x),z.pixelStorei(3315,S.min.y),z.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Ie,Y,B.x,B.y,B.z,ye,Ee,Le,Pe,ze,Ye.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,Y,B.x,B.y,B.z,ye,Ee,Le,Pe,Ye.data)):z.texSubImage3D(Ie,Y,B.x,B.y,B.z,ye,Ee,Le,Pe,ze,Ye),z.pixelStorei(3314,Ne),z.pixelStorei(32878,je),z.pixelStorei(3316,wt),z.pixelStorei(3315,en),z.pixelStorei(32877,Tn),Y===0&&U.generateMipmaps&&z.generateMipmap(Ie),he.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ce.setTextureCube(S,0):S.isData3DTexture?Ce.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ce.setTexture2DArray(S,0):Ce.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){v=0,w=0,_=null,he.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Cs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class rm extends Cs{}rm.prototype.isWebGL1Renderer=!0;class sm extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ja extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new F,ra=new F,sa=new ot,as=new za,rr=new vr;class om extends yt{constructor(e=new un,t=new Ja){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ia.fromBufferAttribute(t,r-1),ra.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ia.distanceTo(ra);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),rr.radius+=s,e.ray.intersectsSphere(rr)===!1)return;sa.copy(r).invert(),as.copy(e.ray).applyMatrix4(sa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new F,u=new F,h=new F,f=new F,m=this.isLineSegments?2:1,x=n.index,p=n.attributes.position;if(x!==null){const v=Math.max(0,a.start),w=Math.min(x.count,a.start+a.count);for(let _=v,b=w-1;_<b;_+=m){const E=x.getX(_),P=x.getX(_+1);if(l.fromBufferAttribute(p,E),u.fromBufferAttribute(p,P),as.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(f);g<e.near||g>e.far||t.push({distance:g,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),w=Math.min(p.count,a.start+a.count);for(let _=v,b=w-1;_<b;_+=m){if(l.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),as.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const oa=new F,aa=new F;class am extends om{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)oa.fromBufferAttribute(t,r),aa.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+oa.distanceTo(aa);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const sr=new F,or=new F,ls=new F,ar=new $t;class lm extends un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(cr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);const{a:d,b:p,c:v}=ar;if(d.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),v.fromBufferAttribute(o,l[2]),ar.getNormal(ls),h[0]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const _=(w+1)%3,b=h[w],E=h[_],P=ar[u[w]],T=ar[u[_]],g=`${b}_${E}`,M=`${E}_${b}`;M in f&&f[M]?(ls.dot(f[M].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(T.x,T.y,T.z)),f[M]=null):g in f||(f[g]={index0:l[w],index1:l[_],normal:ls.clone()})}}for(const x in f)if(f[x]){const{index0:d,index1:p}=f[x];sr.fromBufferAttribute(o,d),or.fromBufferAttribute(o,p),m.push(sr.x,sr.y,sr.z),m.push(or.x,or.y,or.z)}this.setAttribute("position",new Jt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class la{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Es}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Es);const cm="/lycee-riquet-TFJM-2023/icon.ico",um={},fm={class:"flex flex-wrap sm:flex-nowrap xl:flex-wrap justify-between items-center absolute lg:w-4/6 xl:w-5/6 2xl:w-5/12 max-w-4xl bottom-0 lg:bottom-auto lg:top-0 left-0 lg:left-auto 2xl:left-0 right-0 bg-[#f0f0f0] m-4 2xl:mx-auto px-4 py-3 rounded-xl shadow-2xl shadow-zinc-200 border-[#bdbdbd] border"};function hm(i,e){return Gt(),Zt("div",fm,e[0]||(e[0]=[We("div",{class:"flex space-x-2 items-center"},[We("img",{class:"w-10 h-10",src:cm}),We("h1",{class:"text-black text-base sm:text-xl font-medium"},[Ci(" Problème 4 • Musique "),We("i",null,"Déformée")])],-1),We("div",{class:"flex space-x-2 pl-12 sm:pl-0 justify-start w-full sm:w-auto text-sm sm:text-xl text-neutral-400 font-normal"},[We("h2",null,"TFJM² 2023")],-1)]))}const dm=va(um,[["render",hm]]),pm="/lycee-riquet-TFJM-2023/svg/arrow-left.svg",mm={class:"relative"},gm=["id","value"],_m=xi({__name:"Input",props:{id:{},modelValue:{},validator:{type:Function}},emits:["update:modelValue","submit","keyup-tab"],setup(i,{emit:e}){const t=e,n=r=>{t("update:modelValue",r.target.value)};return(r,s)=>(Gt(),Zt("div",mm,[We("input",{id:r.id,value:r.modelValue,onInput:n,onKeypress:s[0]||(s[0]=(...a)=>r.validator&&r.validator(...a)),onKeyup:s[1]||(s[1]=Ma(a=>t("submit"),["enter"])),type:"text",class:"block w-full p-4 text-base text-neutral-600 border border-[#bdbdbd] rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none",placeholder:"Résolutions",required:""},null,40,gm),We("button",{onClick:s[2]||(s[2]=a=>t("submit")),type:"submit",class:"text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"}," Valider ")]))}}),xm={class:"flex flex-col gap-1"},vm=["for"],Mm=["id","max","min","value"],ca=xi({__name:"Range",props:{id:{},label:{},modelValue:{},min:{},max:{}},emits:["update:modelValue"],setup(i,{emit:e}){const t=i,n=e,r=s=>{n("update:modelValue",s.target.value)};return(s,a)=>(Gt(),Zt("div",xm,[t.label?(Gt(),Zt("label",{key:0,for:t.id,class:"block mb-2 text-lg font-medium text-neutral-700"},ya(t.label),9,vm)):lr("",!0),We("input",{id:t.id,max:t.max,min:t.min,value:s.modelValue,onInput:r,type:"range",class:"w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"},null,40,Mm)]))}}),ym={class:"cursor-pointer border border-[#bdbdbd] text-sm font-medium text-center sm:divide-x sm:divide-[#bdbdbd] rounded-xl sm:flex"},bm={class:"w-full"},Sm={class:"w-full"},wm=xi({__name:"Tabs",props:{playground:{}},setup(i){const e=ba(),t=i;return(n,r)=>(Gt(),Zt("ul",ym,[We("li",bm,[We("a",{onClick:r[0]||(r[0]=s=>hi(e).push({name:"SoundtracksPlayground"})),class:hr(["rounded-t-xl sm:rounded-none sm:rounded-l-xl",[t.playground==="soundtracks"?"tab-active":"tab-inactive"]])}," Bandes son ",2)]),We("li",Sm,[We("a",{onClick:r[1]||(r[1]=s=>hi(e).push({name:"ImagesPlayground"})),class:hr(["rounded-b-xl sm:rounded-none sm:rounded-r-xl",[t.playground==="images"?"tab-active":"tab-inactive"]])}," Images ",2)])]))}});const Em=va(wm,[["__scopeId","data-v-59dc581b"]]);/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var ai=9e15,En=1e9,xs="0123456789abcdef",mr="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",gr="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",vs={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-ai,maxE:ai,crypto:!1},Qa,ln,we=!0,Sr="[DecimalError] ",wn=Sr+"Invalid argument: ",el=Sr+"Precision limit exceeded",tl=Sr+"crypto unavailable",nl="[object Decimal]",ft=Math.floor,Ze=Math.pow,Tm=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Am=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Cm=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,il=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Ht=1e7,be=7,Lm=9007199254740991,Pm=mr.length-1,Ms=gr.length-1,$={toStringTag:nl};$.absoluteValue=$.abs=function(){var i=new this.constructor(this);return i.s<0&&(i.s=1),ve(i)};$.ceil=function(){return ve(new this.constructor(this),this.e+1,2)};$.clampedTo=$.clamp=function(i,e){var t,n=this,r=n.constructor;if(i=new r(i),e=new r(e),!i.s||!e.s)return new r(NaN);if(i.gt(e))throw Error(wn+e);return t=n.cmp(i),t<0?i:n.cmp(e)>0?e:new r(n)};$.comparedTo=$.cmp=function(i){var e,t,n,r,s=this,a=s.d,o=(i=new s.constructor(i)).d,c=s.s,l=i.s;if(!a||!o)return!c||!l?NaN:c!==l?c:a===o?0:!a^c<0?1:-1;if(!a[0]||!o[0])return a[0]?c:o[0]?-l:0;if(c!==l)return c;if(s.e!==i.e)return s.e>i.e^c<0?1:-1;for(n=a.length,r=o.length,e=0,t=n<r?n:r;e<t;++e)if(a[e]!==o[e])return a[e]>o[e]^c<0?1:-1;return n===r?0:n>r^c<0?1:-1};$.cosine=$.cos=function(){var i,e,t=this,n=t.constructor;return t.d?t.d[0]?(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+be,n.rounding=1,t=Rm(n,ll(n,t)),n.precision=i,n.rounding=e,ve(ln==2||ln==3?t.neg():t,i,e,!0)):new n(1):new n(NaN)};$.cubeRoot=$.cbrt=function(){var i,e,t,n,r,s,a,o,c,l,u=this,h=u.constructor;if(!u.isFinite()||u.isZero())return new h(u);for(we=!1,s=u.s*Ze(u.s*u,1/3),!s||Math.abs(s)==1/0?(t=lt(u.d),i=u.e,(s=(i-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=Ze(t,1/3),i=ft((i+1)/3)-(i%3==(i<0?-1:2)),s==1/0?t="5e"+i:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+i),n=new h(t),n.s=u.s):n=new h(s.toString()),a=(i=h.precision)+3;;)if(o=n,c=o.times(o).times(o),l=c.plus(u),n=ke(l.plus(u).times(o),l.plus(c),a+2,1),lt(o.d).slice(0,a)===(t=lt(n.d)).slice(0,a))if(t=t.slice(a-3,a+1),t=="9999"||!r&&t=="4999"){if(!r&&(ve(o,i+1,0),o.times(o).times(o).eq(u))){n=o;break}a+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(ve(n,i+1,1),e=!n.times(n).times(n).eq(u));break}return we=!0,ve(n,i,h.rounding,e)};$.decimalPlaces=$.dp=function(){var i,e=this.d,t=NaN;if(e){if(i=e.length-1,t=(i-ft(this.e/be))*be,i=e[i],i)for(;i%10==0;i/=10)t--;t<0&&(t=0)}return t};$.dividedBy=$.div=function(i){return ke(this,new this.constructor(i))};$.dividedToIntegerBy=$.divToInt=function(i){var e=this,t=e.constructor;return ve(ke(e,new t(i),0,1,1),t.precision,t.rounding)};$.equals=$.eq=function(i){return this.cmp(i)===0};$.floor=function(){return ve(new this.constructor(this),this.e+1,3)};$.greaterThan=$.gt=function(i){return this.cmp(i)>0};$.greaterThanOrEqualTo=$.gte=function(i){var e=this.cmp(i);return e==1||e===0};$.hyperbolicCosine=$.cosh=function(){var i,e,t,n,r,s=this,a=s.constructor,o=new a(1);if(!s.isFinite())return new a(s.s?1/0:NaN);if(s.isZero())return o;t=a.precision,n=a.rounding,a.precision=t+Math.max(s.e,s.sd())+4,a.rounding=1,r=s.d.length,r<32?(i=Math.ceil(r/3),e=(1/Er(4,i)).toString()):(i=16,e="2.3283064365386962890625e-10"),s=_i(a,1,s.times(e),new a(1),!0);for(var c,l=i,u=new a(8);l--;)c=s.times(s),s=o.minus(c.times(u.minus(c.times(u))));return ve(s,a.precision=t,a.rounding=n,!0)};$.hyperbolicSine=$.sinh=function(){var i,e,t,n,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,n=r.d.length,n<3)r=_i(s,2,r,r,!0);else{i=1.4*Math.sqrt(n),i=i>16?16:i|0,r=r.times(1/Er(5,i)),r=_i(s,2,r,r,!0);for(var a,o=new s(5),c=new s(16),l=new s(20);i--;)a=r.times(r),r=r.times(o.plus(a.times(c.times(a).plus(l))))}return s.precision=e,s.rounding=t,ve(r,e,t,!0)};$.hyperbolicTangent=$.tanh=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+7,n.rounding=1,ke(t.sinh(),t.cosh(),n.precision=i,n.rounding=e)):new n(t.s)};$.inverseCosine=$.acos=function(){var i,e=this,t=e.constructor,n=e.abs().cmp(1),r=t.precision,s=t.rounding;return n!==-1?n===0?e.isNeg()?Vt(t,r,s):new t(0):new t(NaN):e.isZero()?Vt(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,e=e.asin(),i=Vt(t,r+4,s).times(.5),t.precision=r,t.rounding=s,i.minus(e))};$.inverseHyperbolicCosine=$.acosh=function(){var i,e,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(i=n.precision,e=n.rounding,n.precision=i+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,we=!1,t=t.times(t).minus(1).sqrt().plus(t),we=!0,n.precision=i,n.rounding=e,t.ln()):new n(t)};$.inverseHyperbolicSine=$.asinh=function(){var i,e,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,we=!1,t=t.times(t).plus(1).sqrt().plus(t),we=!0,n.precision=i,n.rounding=e,t.ln())};$.inverseHyperbolicTangent=$.atanh=function(){var i,e,t,n,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(i=s.precision,e=s.rounding,n=r.sd(),Math.max(n,i)<2*-r.e-1?ve(new s(r),i,e,!0):(s.precision=t=n-r.e,r=ke(r.plus(1),new s(1).minus(r),t+i,1),s.precision=i+4,s.rounding=1,r=r.ln(),s.precision=i,s.rounding=e,r.times(.5))):new s(NaN)};$.inverseSine=$.asin=function(){var i,e,t,n,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,n=s.rounding,e!==-1?e===0?(i=Vt(s,t+4,n).times(.5),i.s=r.s,i):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=n,r.times(2)))};$.inverseTangent=$.atan=function(){var i,e,t,n,r,s,a,o,c,l=this,u=l.constructor,h=u.precision,f=u.rounding;if(l.isFinite()){if(l.isZero())return new u(l);if(l.abs().eq(1)&&h+4<=Ms)return a=Vt(u,h+4,f).times(.25),a.s=l.s,a}else{if(!l.s)return new u(NaN);if(h+4<=Ms)return a=Vt(u,h+4,f).times(.5),a.s=l.s,a}for(u.precision=o=h+10,u.rounding=1,t=Math.min(28,o/be+2|0),i=t;i;--i)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(we=!1,e=Math.ceil(o/be),n=1,c=l.times(l),a=new u(l),r=l;i!==-1;)if(r=r.times(c),s=a.minus(r.div(n+=2)),r=r.times(c),a=s.plus(r.div(n+=2)),a.d[e]!==void 0)for(i=e;a.d[i]===s.d[i]&&i--;);return t&&(a=a.times(2<<t-1)),we=!0,ve(a,u.precision=h,u.rounding=f,!0)};$.isFinite=function(){return!!this.d};$.isInteger=$.isInt=function(){return!!this.d&&ft(this.e/be)>this.d.length-2};$.isNaN=function(){return!this.s};$.isNegative=$.isNeg=function(){return this.s<0};$.isPositive=$.isPos=function(){return this.s>0};$.isZero=function(){return!!this.d&&this.d[0]===0};$.lessThan=$.lt=function(i){return this.cmp(i)<0};$.lessThanOrEqualTo=$.lte=function(i){return this.cmp(i)<1};$.logarithm=$.log=function(i){var e,t,n,r,s,a,o,c,l=this,u=l.constructor,h=u.precision,f=u.rounding,m=5;if(i==null)i=new u(10),e=!0;else{if(i=new u(i),t=i.d,i.s<0||!t||!t[0]||i.eq(1))return new u(NaN);e=i.eq(10)}if(t=l.d,l.s<0||!t||!t[0]||l.eq(1))return new u(t&&!t[0]?-1/0:l.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10===0;)r/=10;s=r!==1}if(we=!1,o=h+m,a=yn(l,o),n=e?_r(u,o+10):yn(i,o),c=ke(a,n,o,1),Ni(c.d,r=h,f))do if(o+=10,a=yn(l,o),n=e?_r(u,o+10):yn(i,o),c=ke(a,n,o,1),!s){+lt(c.d).slice(r+1,r+15)+1==1e14&&(c=ve(c,h+1,0));break}while(Ni(c.d,r+=10,f));return we=!0,ve(c,h,f)};$.minus=$.sub=function(i){var e,t,n,r,s,a,o,c,l,u,h,f,m=this,x=m.constructor;if(i=new x(i),!m.d||!i.d)return!m.s||!i.s?i=new x(NaN):m.d?i.s=-i.s:i=new x(i.d||m.s!==i.s?m:NaN),i;if(m.s!=i.s)return i.s=-i.s,m.plus(i);if(l=m.d,f=i.d,o=x.precision,c=x.rounding,!l[0]||!f[0]){if(f[0])i.s=-i.s;else if(l[0])i=new x(m);else return new x(c===3?-0:0);return we?ve(i,o,c):i}if(t=ft(i.e/be),u=ft(m.e/be),l=l.slice(),s=u-t,s){for(h=s<0,h?(e=l,s=-s,a=f.length):(e=f,t=u,a=l.length),n=Math.max(Math.ceil(o/be),a)+2,s>n&&(s=n,e.length=1),e.reverse(),n=s;n--;)e.push(0);e.reverse()}else{for(n=l.length,a=f.length,h=n<a,h&&(a=n),n=0;n<a;n++)if(l[n]!=f[n]){h=l[n]<f[n];break}s=0}for(h&&(e=l,l=f,f=e,i.s=-i.s),a=l.length,n=f.length-a;n>0;--n)l[a++]=0;for(n=f.length;n>s;){if(l[--n]<f[n]){for(r=n;r&&l[--r]===0;)l[r]=Ht-1;--l[r],l[n]+=Ht}l[n]-=f[n]}for(;l[--a]===0;)l.pop();for(;l[0]===0;l.shift())--t;return l[0]?(i.d=l,i.e=wr(l,t),we?ve(i,o,c):i):new x(c===3?-0:0)};$.modulo=$.mod=function(i){var e,t=this,n=t.constructor;return i=new n(i),!t.d||!i.s||i.d&&!i.d[0]?new n(NaN):!i.d||t.d&&!t.d[0]?ve(new n(t),n.precision,n.rounding):(we=!1,n.modulo==9?(e=ke(t,i.abs(),0,3,1),e.s*=i.s):e=ke(t,i,0,n.modulo,1),e=e.times(i),we=!0,t.minus(e))};$.naturalExponential=$.exp=function(){return ys(this)};$.naturalLogarithm=$.ln=function(){return yn(this)};$.negated=$.neg=function(){var i=new this.constructor(this);return i.s=-i.s,ve(i)};$.plus=$.add=function(i){var e,t,n,r,s,a,o,c,l,u,h=this,f=h.constructor;if(i=new f(i),!h.d||!i.d)return!h.s||!i.s?i=new f(NaN):h.d||(i=new f(i.d||h.s===i.s?h:NaN)),i;if(h.s!=i.s)return i.s=-i.s,h.minus(i);if(l=h.d,u=i.d,o=f.precision,c=f.rounding,!l[0]||!u[0])return u[0]||(i=new f(h)),we?ve(i,o,c):i;if(s=ft(h.e/be),n=ft(i.e/be),l=l.slice(),r=s-n,r){for(r<0?(t=l,r=-r,a=u.length):(t=u,n=s,a=l.length),s=Math.ceil(o/be),a=s>a?s+1:a+1,r>a&&(r=a,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(a=l.length,r=u.length,a-r<0&&(r=a,t=u,u=l,l=t),e=0;r;)e=(l[--r]=l[r]+u[r]+e)/Ht|0,l[r]%=Ht;for(e&&(l.unshift(e),++n),a=l.length;l[--a]==0;)l.pop();return i.d=l,i.e=wr(l,n),we?ve(i,o,c):i};$.precision=$.sd=function(i){var e,t=this;if(i!==void 0&&i!==!!i&&i!==1&&i!==0)throw Error(wn+i);return t.d?(e=rl(t.d),i&&t.e+1>e&&(e=t.e+1)):e=NaN,e};$.round=function(){var i=this,e=i.constructor;return ve(new e(i),i.e+1,e.rounding)};$.sine=$.sin=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+be,n.rounding=1,t=Im(n,ll(n,t)),n.precision=i,n.rounding=e,ve(ln>2?t.neg():t,i,e,!0)):new n(NaN)};$.squareRoot=$.sqrt=function(){var i,e,t,n,r,s,a=this,o=a.d,c=a.e,l=a.s,u=a.constructor;if(l!==1||!o||!o[0])return new u(!l||l<0&&(!o||o[0])?NaN:o?a:1/0);for(we=!1,l=Math.sqrt(+a),l==0||l==1/0?(e=lt(o),(e.length+c)%2==0&&(e+="0"),l=Math.sqrt(e),c=ft((c+1)/2)-(c<0||c%2),l==1/0?e="5e"+c:(e=l.toExponential(),e=e.slice(0,e.indexOf("e")+1)+c),n=new u(e)):n=new u(l.toString()),t=(c=u.precision)+3;;)if(s=n,n=s.plus(ke(a,s,t+2,1)).times(.5),lt(s.d).slice(0,t)===(e=lt(n.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!r&&e=="4999"){if(!r&&(ve(s,c+1,0),s.times(s).eq(a))){n=s;break}t+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(ve(n,c+1,1),i=!n.times(n).eq(a));break}return we=!0,ve(n,c,u.rounding,i)};$.tangent=$.tan=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+10,n.rounding=1,t=t.sin(),t.s=1,t=ke(t,new n(1).minus(t.times(t)).sqrt(),i+10,0),n.precision=i,n.rounding=e,ve(ln==2||ln==4?t.neg():t,i,e,!0)):new n(NaN)};$.times=$.mul=function(i){var e,t,n,r,s,a,o,c,l,u=this,h=u.constructor,f=u.d,m=(i=new h(i)).d;if(i.s*=u.s,!f||!f[0]||!m||!m[0])return new h(!i.s||f&&!f[0]&&!m||m&&!m[0]&&!f?NaN:!f||!m?i.s/0:i.s*0);for(t=ft(u.e/be)+ft(i.e/be),c=f.length,l=m.length,c<l&&(s=f,f=m,m=s,a=c,c=l,l=a),s=[],a=c+l,n=a;n--;)s.push(0);for(n=l;--n>=0;){for(e=0,r=c+n;r>n;)o=s[r]+m[n]*f[r-n-1]+e,s[r--]=o%Ht|0,e=o/Ht|0;s[r]=(s[r]+e)%Ht|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),i.d=s,i.e=wr(s,t),we?ve(i,h.precision,h.rounding):i};$.toBinary=function(i,e){return Ls(this,2,i,e)};$.toDecimalPlaces=$.toDP=function(i,e){var t=this,n=t.constructor;return t=new n(t),i===void 0?t:(bt(i,0,En),e===void 0?e=n.rounding:bt(e,0,8),ve(t,i+t.e+1,e))};$.toExponential=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=Qt(n,!0):(bt(i,0,En),e===void 0?e=r.rounding:bt(e,0,8),n=ve(new r(n),i+1,e),t=Qt(n,!0,i+1)),n.isNeg()&&!n.isZero()?"-"+t:t};$.toFixed=function(i,e){var t,n,r=this,s=r.constructor;return i===void 0?t=Qt(r):(bt(i,0,En),e===void 0?e=s.rounding:bt(e,0,8),n=ve(new s(r),i+r.e+1,e),t=Qt(n,!1,i+n.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};$.toFraction=function(i){var e,t,n,r,s,a,o,c,l,u,h,f,m=this,x=m.d,d=m.constructor;if(!x)return new d(m);if(l=t=new d(1),n=c=new d(0),e=new d(n),s=e.e=rl(x)-m.e-1,a=s%be,e.d[0]=Ze(10,a<0?be+a:a),i==null)i=s>0?e:l;else{if(o=new d(i),!o.isInt()||o.lt(l))throw Error(wn+o);i=o.gt(e)?s>0?e:l:o}for(we=!1,o=new d(lt(x)),u=d.precision,d.precision=s=x.length*be*2;h=ke(o,e,0,1,1),r=t.plus(h.times(n)),r.cmp(i)!=1;)t=n,n=r,r=l,l=c.plus(h.times(r)),c=r,r=e,e=o.minus(h.times(r)),o=r;return r=ke(i.minus(t),n,0,1,1),c=c.plus(r.times(l)),t=t.plus(r.times(n)),c.s=l.s=m.s,f=ke(l,n,s,1).minus(m).abs().cmp(ke(c,t,s,1).minus(m).abs())<1?[l,n]:[c,t],d.precision=u,we=!0,f};$.toHexadecimal=$.toHex=function(i,e){return Ls(this,16,i,e)};$.toNearest=function(i,e){var t=this,n=t.constructor;if(t=new n(t),i==null){if(!t.d)return t;i=new n(1),e=n.rounding}else{if(i=new n(i),e===void 0?e=n.rounding:bt(e,0,8),!t.d)return i.s?t:i;if(!i.d)return i.s&&(i.s=t.s),i}return i.d[0]?(we=!1,t=ke(t,i,0,e,1).times(i),we=!0,ve(t)):(i.s=t.s,t=i),t};$.toNumber=function(){return+this};$.toOctal=function(i,e){return Ls(this,8,i,e)};$.toPower=$.pow=function(i){var e,t,n,r,s,a,o=this,c=o.constructor,l=+(i=new c(i));if(!o.d||!i.d||!o.d[0]||!i.d[0])return new c(Ze(+o,l));if(o=new c(o),o.eq(1))return o;if(n=c.precision,s=c.rounding,i.eq(1))return ve(o,n,s);if(e=ft(i.e/be),e>=i.d.length-1&&(t=l<0?-l:l)<=Lm)return r=sl(c,o,t,n),i.s<0?new c(1).div(r):ve(r,n,s);if(a=o.s,a<0){if(e<i.d.length-1)return new c(NaN);if(i.d[e]&1||(a=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=a,o}return t=Ze(+o,l),e=t==0||!isFinite(t)?ft(l*(Math.log("0."+lt(o.d))/Math.LN10+o.e+1)):new c(t+"").e,e>c.maxE+1||e<c.minE-1?new c(e>0?a/0:0):(we=!1,c.rounding=o.s=1,t=Math.min(12,(e+"").length),r=ys(i.times(yn(o,n+t)),n),r.d&&(r=ve(r,n+5,1),Ni(r.d,n,s)&&(e=n+10,r=ve(ys(i.times(yn(o,e+t)),e),e+5,1),+lt(r.d).slice(n+1,n+15)+1==1e14&&(r=ve(r,n+1,0)))),r.s=a,we=!0,c.rounding=s,ve(r,n,s))};$.toPrecision=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=Qt(n,n.e<=r.toExpNeg||n.e>=r.toExpPos):(bt(i,1,En),e===void 0?e=r.rounding:bt(e,0,8),n=ve(new r(n),i,e),t=Qt(n,i<=n.e||n.e<=r.toExpNeg,i)),n.isNeg()&&!n.isZero()?"-"+t:t};$.toSignificantDigits=$.toSD=function(i,e){var t=this,n=t.constructor;return i===void 0?(i=n.precision,e=n.rounding):(bt(i,1,En),e===void 0?e=n.rounding:bt(e,0,8)),ve(new n(t),i,e)};$.toString=function(){var i=this,e=i.constructor,t=Qt(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()&&!i.isZero()?"-"+t:t};$.truncated=$.trunc=function(){return ve(new this.constructor(this),this.e+1,1)};$.valueOf=$.toJSON=function(){var i=this,e=i.constructor,t=Qt(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()?"-"+t:t};function lt(i){var e,t,n,r=i.length-1,s="",a=i[0];if(r>0){for(s+=a,e=1;e<r;e++)n=i[e]+"",t=be-n.length,t&&(s+=_n(t)),s+=n;a=i[e],n=a+"",t=be-n.length,t&&(s+=_n(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}function bt(i,e,t){if(i!==~~i||i<e||i>t)throw Error(wn+i)}function Ni(i,e,t,n){var r,s,a,o;for(s=i[0];s>=10;s/=10)--e;return--e<0?(e+=be,r=0):(r=Math.ceil((e+1)/be),e%=be),s=Ze(10,be-e),o=i[r]%s|0,n==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),a=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):a=(t<4&&o+1==s||t>3&&o+1==s/2)&&(i[r+1]/s/100|0)==Ze(10,e-2)-1||(o==s/2||o==0)&&(i[r+1]/s/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),a=(n||t<4)&&o==9999||!n&&t>3&&o==4999):a=((n||t<4)&&o+1==s||!n&&t>3&&o+1==s/2)&&(i[r+1]/s/1e3|0)==Ze(10,e-3)-1,a}function fr(i,e,t){for(var n,r=[0],s,a=0,o=i.length;a<o;){for(s=r.length;s--;)r[s]*=e;for(r[0]+=xs.indexOf(i.charAt(a++)),n=0;n<r.length;n++)r[n]>t-1&&(r[n+1]===void 0&&(r[n+1]=0),r[n+1]+=r[n]/t|0,r[n]%=t)}return r.reverse()}function Rm(i,e){var t,n,r;if(e.isZero())return e;n=e.d.length,n<32?(t=Math.ceil(n/3),r=(1/Er(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),i.precision+=t,e=_i(i,1,e.times(r),new i(1));for(var s=t;s--;){var a=e.times(e);e=a.times(a).minus(a).times(8).plus(1)}return i.precision-=t,e}var ke=function(){function i(n,r,s){var a,o=0,c=n.length;for(n=n.slice();c--;)a=n[c]*r+o,n[c]=a%s|0,o=a/s|0;return o&&n.unshift(o),n}function e(n,r,s,a){var o,c;if(s!=a)c=s>a?1:-1;else for(o=c=0;o<s;o++)if(n[o]!=r[o]){c=n[o]>r[o]?1:-1;break}return c}function t(n,r,s,a){for(var o=0;s--;)n[s]-=o,o=n[s]<r[s]?1:0,n[s]=o*a+n[s]-r[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,r,s,a,o,c){var l,u,h,f,m,x,d,p,v,w,_,b,E,P,T,g,M,L,I,H,D=n.constructor,N=n.s==r.s?1:-1,k=n.d,V=r.d;if(!k||!k[0]||!V||!V[0])return new D(!n.s||!r.s||(k?V&&k[0]==V[0]:!V)?NaN:k&&k[0]==0||!V?N*0:N/0);for(c?(m=1,u=n.e-r.e):(c=Ht,m=be,u=ft(n.e/m)-ft(r.e/m)),I=V.length,M=k.length,v=new D(N),w=v.d=[],h=0;V[h]==(k[h]||0);h++);if(V[h]>(k[h]||0)&&u--,s==null?(P=s=D.precision,a=D.rounding):o?P=s+(n.e-r.e)+1:P=s,P<0)w.push(1),x=!0;else{if(P=P/m+2|0,h=0,I==1){for(f=0,V=V[0],P++;(h<M||f)&&P--;h++)T=f*c+(k[h]||0),w[h]=T/V|0,f=T%V|0;x=f||h<M}else{for(f=c/(V[0]+1)|0,f>1&&(V=i(V,f,c),k=i(k,f,c),I=V.length,M=k.length),g=I,_=k.slice(0,I),b=_.length;b<I;)_[b++]=0;H=V.slice(),H.unshift(0),L=V[0],V[1]>=c/2&&++L;do f=0,l=e(V,_,I,b),l<0?(E=_[0],I!=b&&(E=E*c+(_[1]||0)),f=E/L|0,f>1?(f>=c&&(f=c-1),d=i(V,f,c),p=d.length,b=_.length,l=e(d,_,p,b),l==1&&(f--,t(d,I<p?H:V,p,c))):(f==0&&(l=f=1),d=V.slice()),p=d.length,p<b&&d.unshift(0),t(_,d,b,c),l==-1&&(b=_.length,l=e(V,_,I,b),l<1&&(f++,t(_,I<b?H:V,b,c))),b=_.length):l===0&&(f++,_=[0]),w[h++]=f,l&&_[0]?_[b++]=k[g]||0:(_=[k[g]],b=1);while((g++<M||_[0]!==void 0)&&P--);x=_[0]!==void 0}w[0]||w.shift()}if(m==1)v.e=u,Qa=x;else{for(h=1,f=w[0];f>=10;f/=10)h++;v.e=h+u*m-1,ve(v,o?s+v.e+1:s,a,x)}return v}}();function ve(i,e,t,n){var r,s,a,o,c,l,u,h,f,m=i.constructor;e:if(e!=null){if(h=i.d,!h)return i;for(r=1,o=h[0];o>=10;o/=10)r++;if(s=e-r,s<0)s+=be,a=e,u=h[f=0],c=u/Ze(10,r-a-1)%10|0;else if(f=Math.ceil((s+1)/be),o=h.length,f>=o)if(n){for(;o++<=f;)h.push(0);u=c=0,r=1,s%=be,a=s-be+1}else break e;else{for(u=o=h[f],r=1;o>=10;o/=10)r++;s%=be,a=s-be+r,c=a<0?0:u/Ze(10,r-a-1)%10|0}if(n=n||e<0||h[f+1]!==void 0||(a<0?u:u%Ze(10,r-a-1)),l=t<4?(c||n)&&(t==0||t==(i.s<0?3:2)):c>5||c==5&&(t==4||n||t==6&&(s>0?a>0?u/Ze(10,r-a):0:h[f-1])%10&1||t==(i.s<0?8:7)),e<1||!h[0])return h.length=0,l?(e-=i.e+1,h[0]=Ze(10,(be-e%be)%be),i.e=-e||0):h[0]=i.e=0,i;if(s==0?(h.length=f,o=1,f--):(h.length=f+1,o=Ze(10,be-s),h[f]=a>0?(u/Ze(10,r-a)%Ze(10,a)|0)*o:0),l)for(;;)if(f==0){for(s=1,a=h[0];a>=10;a/=10)s++;for(a=h[0]+=o,o=1;a>=10;a/=10)o++;s!=o&&(i.e++,h[0]==Ht&&(h[0]=1));break}else{if(h[f]+=o,h[f]!=Ht)break;h[f--]=0,o=1}for(s=h.length;h[--s]===0;)h.pop()}return we&&(i.e>m.maxE?(i.d=null,i.e=NaN):i.e<m.minE&&(i.e=0,i.d=[0])),i}function Qt(i,e,t){if(!i.isFinite())return al(i);var n,r=i.e,s=lt(i.d),a=s.length;return e?(t&&(n=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+_n(n):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(i.e<0?"e":"e+")+i.e):r<0?(s="0."+_n(-r-1)+s,t&&(n=t-a)>0&&(s+=_n(n))):r>=a?(s+=_n(r+1-a),t&&(n=t-r-1)>0&&(s=s+"."+_n(n))):((n=r+1)<a&&(s=s.slice(0,n)+"."+s.slice(n)),t&&(n=t-a)>0&&(r+1===a&&(s+="."),s+=_n(n))),s}function wr(i,e){var t=i[0];for(e*=be;t>=10;t/=10)e++;return e}function _r(i,e,t){if(e>Pm)throw we=!0,t&&(i.precision=t),Error(el);return ve(new i(mr),e,1,!0)}function Vt(i,e,t){if(e>Ms)throw Error(el);return ve(new i(gr),e,t,!0)}function rl(i){var e=i.length-1,t=e*be+1;if(e=i[e],e){for(;e%10==0;e/=10)t--;for(e=i[0];e>=10;e/=10)t++}return t}function _n(i){for(var e="";i--;)e+="0";return e}function sl(i,e,t,n){var r,s=new i(1),a=Math.ceil(n/be+4);for(we=!1;;){if(t%2&&(s=s.times(e),fa(s.d,a)&&(r=!0)),t=ft(t/2),t===0){t=s.d.length-1,r&&s.d[t]===0&&++s.d[t];break}e=e.times(e),fa(e.d,a)}return we=!0,s}function ua(i){return i.d[i.d.length-1]&1}function ol(i,e,t){for(var n,r=new i(e[0]),s=0;++s<e.length;)if(n=new i(e[s]),n.s)r[t](n)&&(r=n);else{r=n;break}return r}function ys(i,e){var t,n,r,s,a,o,c,l=0,u=0,h=0,f=i.constructor,m=f.rounding,x=f.precision;if(!i.d||!i.d[0]||i.e>17)return new f(i.d?i.d[0]?i.s<0?0:1/0:1:i.s?i.s<0?0:i:0/0);for(e==null?(we=!1,c=x):c=e,o=new f(.03125);i.e>-2;)i=i.times(o),h+=5;for(n=Math.log(Ze(2,h))/Math.LN10*2+5|0,c+=n,t=s=a=new f(1),f.precision=c;;){if(s=ve(s.times(i),c,1),t=t.times(++u),o=a.plus(ke(s,t,c,1)),lt(o.d).slice(0,c)===lt(a.d).slice(0,c)){for(r=h;r--;)a=ve(a.times(a),c,1);if(e==null)if(l<3&&Ni(a.d,c-n,m,l))f.precision=c+=10,t=s=o=new f(1),u=0,l++;else return ve(a,f.precision=x,m,we=!0);else return f.precision=x,a}a=o}}function yn(i,e){var t,n,r,s,a,o,c,l,u,h,f,m=1,x=10,d=i,p=d.d,v=d.constructor,w=v.rounding,_=v.precision;if(d.s<0||!p||!p[0]||!d.e&&p[0]==1&&p.length==1)return new v(p&&!p[0]?-1/0:d.s!=1?NaN:p?0:d);if(e==null?(we=!1,u=_):u=e,v.precision=u+=x,t=lt(p),n=t.charAt(0),Math.abs(s=d.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)d=d.times(i),t=lt(d.d),n=t.charAt(0),m++;s=d.e,n>1?(d=new v("0."+t),s++):d=new v(n+"."+t.slice(1))}else return l=_r(v,u+2,_).times(s+""),d=yn(new v(n+"."+t.slice(1)),u-x).plus(l),v.precision=_,e==null?ve(d,_,w,we=!0):d;for(h=d,c=a=d=ke(d.minus(1),d.plus(1),u,1),f=ve(d.times(d),u,1),r=3;;){if(a=ve(a.times(f),u,1),l=c.plus(ke(a,new v(r),u,1)),lt(l.d).slice(0,u)===lt(c.d).slice(0,u))if(c=c.times(2),s!==0&&(c=c.plus(_r(v,u+2,_).times(s+""))),c=ke(c,new v(m),u,1),e==null)if(Ni(c.d,u-x,w,o))v.precision=u+=x,l=a=d=ke(h.minus(1),h.plus(1),u,1),f=ve(d.times(d),u,1),r=o=1;else return ve(c,v.precision=_,w,we=!0);else return v.precision=_,c;c=l,r+=2}}function al(i){return String(i.s*i.s/0)}function bs(i,e){var t,n,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;e.charCodeAt(n)===48;n++);for(r=e.length;e.charCodeAt(r-1)===48;--r);if(e=e.slice(n,r),e){if(r-=n,i.e=t=t-n-1,i.d=[],n=(t+1)%be,t<0&&(n+=be),n<r){for(n&&i.d.push(+e.slice(0,n)),r-=be;n<r;)i.d.push(+e.slice(n,n+=be));e=e.slice(n),n=be-e.length}else n-=r;for(;n--;)e+="0";i.d.push(+e),we&&(i.e>i.constructor.maxE?(i.d=null,i.e=NaN):i.e<i.constructor.minE&&(i.e=0,i.d=[0]))}else i.e=0,i.d=[0];return i}function Dm(i,e){var t,n,r,s,a,o,c,l,u;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),il.test(e))return bs(i,e)}else if(e==="Infinity"||e==="NaN")return+e||(i.s=NaN),i.e=NaN,i.d=null,i;if(Am.test(e))t=16,e=e.toLowerCase();else if(Tm.test(e))t=2;else if(Cm.test(e))t=8;else throw Error(wn+e);for(s=e.search(/p/i),s>0?(c=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),a=s>=0,n=i.constructor,a&&(e=e.replace(".",""),o=e.length,s=o-s,r=sl(n,new n(t),s,s*2)),l=fr(e,t,Ht),u=l.length-1,s=u;l[s]===0;--s)l.pop();return s<0?new n(i.s*0):(i.e=wr(l,u),i.d=l,we=!1,a&&(i=ke(i,r,o*4)),c&&(i=i.times(Math.abs(c)<54?Ze(2,c):Ke.pow(2,c))),we=!0,i)}function Im(i,e){var t,n=e.d.length;if(n<3)return e.isZero()?e:_i(i,2,e,e);t=1.4*Math.sqrt(n),t=t>16?16:t|0,e=e.times(1/Er(5,t)),e=_i(i,2,e,e);for(var r,s=new i(5),a=new i(16),o=new i(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(a.times(r).minus(o))));return e}function _i(i,e,t,n,r){var s,a,o,c,l=i.precision,u=Math.ceil(l/be);for(we=!1,c=t.times(t),o=new i(n);;){if(a=ke(o.times(c),new i(e++*e++),l,1),o=r?n.plus(a):n.minus(a),n=ke(a.times(c),new i(e++*e++),l,1),a=o.plus(n),a.d[u]!==void 0){for(s=u;a.d[s]===o.d[s]&&s--;);if(s==-1)break}s=o,o=n,n=a,a=s}return we=!0,a.d.length=u+1,a}function Er(i,e){for(var t=i;--e;)t*=i;return t}function ll(i,e){var t,n=e.s<0,r=Vt(i,i.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return ln=n?4:1,e;if(t=e.divToInt(r),t.isZero())ln=n?3:2;else{if(e=e.minus(t.times(r)),e.lte(s))return ln=ua(t)?n?2:3:n?4:1,e;ln=ua(t)?n?1:4:n?3:2}return e.minus(r).abs()}function Ls(i,e,t,n){var r,s,a,o,c,l,u,h,f,m=i.constructor,x=t!==void 0;if(x?(bt(t,1,En),n===void 0?n=m.rounding:bt(n,0,8)):(t=m.precision,n=m.rounding),!i.isFinite())u=al(i);else{for(u=Qt(i),a=u.indexOf("."),x?(r=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):r=e,a>=0&&(u=u.replace(".",""),f=new m(1),f.e=u.length-a,f.d=fr(Qt(f),10,r),f.e=f.d.length),h=fr(u,10,r),s=c=h.length;h[--c]==0;)h.pop();if(!h[0])u=x?"0p+0":"0";else{if(a<0?s--:(i=new m(i),i.d=h,i.e=s,i=ke(i,f,t,n,0,r),h=i.d,s=i.e,l=Qa),a=h[t],o=r/2,l=l||h[t+1]!==void 0,l=n<4?(a!==void 0||l)&&(n===0||n===(i.s<0?3:2)):a>o||a===o&&(n===4||l||n===6&&h[t-1]&1||n===(i.s<0?8:7)),h.length=t,l)for(;++h[--t]>r-1;)h[t]=0,t||(++s,h.unshift(1));for(c=h.length;!h[c-1];--c);for(a=0,u="";a<c;a++)u+=xs.charAt(h[a]);if(x){if(c>1)if(e==16||e==8){for(a=e==16?4:3,--c;c%a;c++)u+="0";for(h=fr(u,r,e),c=h.length;!h[c-1];--c);for(a=1,u="1.";a<c;a++)u+=xs.charAt(h[a])}else u=u.charAt(0)+"."+u.slice(1);u=u+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)u="0"+u;u="0."+u}else if(++s>c)for(s-=c;s--;)u+="0";else s<c&&(u=u.slice(0,s)+"."+u.slice(s))}u=(e==16?"0x":e==2?"0b":e==8?"0o":"")+u}return i.s<0?"-"+u:u}function fa(i,e){if(i.length>e)return i.length=e,!0}function Nm(i){return new this(i).abs()}function Fm(i){return new this(i).acos()}function Om(i){return new this(i).acosh()}function Um(i,e){return new this(i).plus(e)}function zm(i){return new this(i).asin()}function Bm(i){return new this(i).asinh()}function km(i){return new this(i).atan()}function Gm(i){return new this(i).atanh()}function Vm(i,e){i=new this(i),e=new this(e);var t,n=this.precision,r=this.rounding,s=n+4;return!i.s||!e.s?t=new this(NaN):!i.d&&!e.d?(t=Vt(this,s,1).times(e.s>0?.25:.75),t.s=i.s):!e.d||i.isZero()?(t=e.s<0?Vt(this,n,r):new this(0),t.s=i.s):!i.d||e.isZero()?(t=Vt(this,s,1).times(.5),t.s=i.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(ke(i,e,s,1)),e=Vt(this,s,1),this.precision=n,this.rounding=r,t=i.s<0?t.minus(e):t.plus(e)):t=this.atan(ke(i,e,s,1)),t}function Hm(i){return new this(i).cbrt()}function Wm(i){return ve(i=new this(i),i.e+1,2)}function qm(i,e,t){return new this(i).clamp(e,t)}function Xm(i){if(!i||typeof i!="object")throw Error(Sr+"Object expected");var e,t,n,r=i.defaults===!0,s=["precision",1,En,"rounding",0,8,"toExpNeg",-ai,0,"toExpPos",0,ai,"maxE",0,ai,"minE",-ai,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=vs[t]),(n=i[t])!==void 0)if(ft(n)===n&&n>=s[e+1]&&n<=s[e+2])this[t]=n;else throw Error(wn+t+": "+n);if(t="crypto",r&&(this[t]=vs[t]),(n=i[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(tl);else this[t]=!1;else throw Error(wn+t+": "+n);return this}function jm(i){return new this(i).cos()}function Ym(i){return new this(i).cosh()}function cl(i){var e,t,n;function r(s){var a,o,c,l=this;if(!(l instanceof r))return new r(s);if(l.constructor=r,ha(s)){l.s=s.s,we?!s.d||s.e>r.maxE?(l.e=NaN,l.d=null):s.e<r.minE?(l.e=0,l.d=[0]):(l.e=s.e,l.d=s.d.slice()):(l.e=s.e,l.d=s.d?s.d.slice():s.d);return}if(c=typeof s,c==="number"){if(s===0){l.s=1/s<0?-1:1,l.e=0,l.d=[0];return}if(s<0?(s=-s,l.s=-1):l.s=1,s===~~s&&s<1e7){for(a=0,o=s;o>=10;o/=10)a++;we?a>r.maxE?(l.e=NaN,l.d=null):a<r.minE?(l.e=0,l.d=[0]):(l.e=a,l.d=[s]):(l.e=a,l.d=[s]);return}else if(s*0!==0){s||(l.s=NaN),l.e=NaN,l.d=null;return}return bs(l,s.toString())}else if(c!=="string")throw Error(wn+s);return(o=s.charCodeAt(0))===45?(s=s.slice(1),l.s=-1):(o===43&&(s=s.slice(1)),l.s=1),il.test(s)?bs(l,s):Dm(l,s)}if(r.prototype=$,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=Xm,r.clone=cl,r.isDecimal=ha,r.abs=Nm,r.acos=Fm,r.acosh=Om,r.add=Um,r.asin=zm,r.asinh=Bm,r.atan=km,r.atanh=Gm,r.atan2=Vm,r.cbrt=Hm,r.ceil=Wm,r.clamp=qm,r.cos=jm,r.cosh=Ym,r.div=$m,r.exp=Zm,r.floor=Km,r.hypot=Jm,r.ln=Qm,r.log=eg,r.log10=ng,r.log2=tg,r.max=ig,r.min=rg,r.mod=sg,r.mul=og,r.pow=ag,r.random=lg,r.round=cg,r.sign=ug,r.sin=fg,r.sinh=hg,r.sqrt=dg,r.sub=pg,r.sum=mg,r.tan=gg,r.tanh=_g,r.trunc=xg,i===void 0&&(i={}),i&&i.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<n.length;)i.hasOwnProperty(t=n[e++])||(i[t]=this[t]);return r.config(i),r}function $m(i,e){return new this(i).div(e)}function Zm(i){return new this(i).exp()}function Km(i){return ve(i=new this(i),i.e+1,3)}function Jm(){var i,e,t=new this(0);for(we=!1,i=0;i<arguments.length;)if(e=new this(arguments[i++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return we=!0,new this(1/0);t=e}return we=!0,t.sqrt()}function ha(i){return i instanceof Ke||i&&i.toStringTag===nl||!1}function Qm(i){return new this(i).ln()}function eg(i,e){return new this(i).log(e)}function tg(i){return new this(i).log(2)}function ng(i){return new this(i).log(10)}function ig(){return ol(this,arguments,"lt")}function rg(){return ol(this,arguments,"gt")}function sg(i,e){return new this(i).mod(e)}function og(i,e){return new this(i).mul(e)}function ag(i,e){return new this(i).pow(e)}function lg(i){var e,t,n,r,s=0,a=new this(1),o=[];if(i===void 0?i=this.precision:bt(i,1,En),n=Math.ceil(i/be),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(n));s<n;)r=e[s],r>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:o[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(n*=4);s<n;)r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(e,s):(o.push(r%1e7),s+=4);s=n/4}else throw Error(tl);else for(;s<n;)o[s++]=Math.random()*1e7|0;for(n=o[--s],i%=be,n&&i&&(r=Ze(10,be-i),o[s]=(n/r|0)*r);o[s]===0;s--)o.pop();if(s<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=be)o.shift();for(n=1,r=o[0];r>=10;r/=10)n++;n<be&&(t-=be-n)}return a.e=t,a.d=o,a}function cg(i){return ve(i=new this(i),i.e+1,this.rounding)}function ug(i){return i=new this(i),i.d?i.d[0]?i.s:0*i.s:i.s||NaN}function fg(i){return new this(i).sin()}function hg(i){return new this(i).sinh()}function dg(i){return new this(i).sqrt()}function pg(i,e){return new this(i).sub(e)}function mg(){var i=0,e=arguments,t=new this(e[i]);for(we=!1;t.s&&++i<e.length;)t=t.plus(e[i]);return we=!0,ve(t,this.precision,this.rounding)}function gg(i){return new this(i).tan()}function _g(i){return new this(i).tanh()}function xg(i){return ve(i=new this(i),i.e+1,1)}$[Symbol.for("nodejs.util.inspect.custom")]=$.toString;$[Symbol.toStringTag]="Decimal";var Ke=$.constructor=cl(vs);mr=new Ke(mr);gr=new Ke(gr);function ul(i,e,t,n=0,r=1){const s=new Wn().setFromObject(e),a=new F;s.getSize(a);const o=new F;s.getCenter(o);const c=i.fov*(Math.PI/180),l=2*Math.atan(Math.tan(c/2)*i.aspect),u=a.z/2+Math.abs(a.x/2/Math.tan(l/2)),h=a.z/2+Math.abs(a.y/2/Math.tan(c/2));let f=Math.max(u,h);n!==void 0&&n!==0&&(f*=n),i.position.set(o.x,o.y,f),t.target=o;const m=s.min.z,x=m<0?-m+f:f-m;i.far=x*3*r,i.updateProjectionMatrix()}const fl="font-size: 24px; font-weight: bold; padding: 24px 0",da=function(i,e,t){return Math.min(Math.max(i,e),t)};function Ps(i){return new Wn().setFromObject(i).getCenter(i.position).multiplyScalar(-1)}const hl=i=>i.remove.apply(i,i.children);async function Rs(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function vg(i,e){const t=new lm(i),n=new Ja({color:e});return new am(t,n)}function dl(i,e=new oe(Math.random()*16777215),t=1,n=1,r=!1){const s=new an(new yr(t,n,1,1),new Ts({color:e})),a=vg(s.geometry,r?e:new oe(0));return s.position.copy(i),a.position.copy(i),{mesh:s,outline:a}}function Mg({notesNumber:i,colors:e,noteWidth:t=new Ke(1),noteHeight:n=new Ke(1),previousNoteWidth:r=new Ke(1)}){const s=[],a=i>=500,o=new Mn,c=new Array;for(let l=0;l<i;l++){const u=t.times(l),h=new F(u.toNumber(),0,0),f=t.dividedBy(2),m=u.add(f),x=m.mod(r),d=x.toNumber()===0||x.toNumber()===r.toNumber(),p=m.dividedToIntegerBy(r).toNumber(),v=d?new oe(16777215):e[p];s.push({noteX:u.toNumber(),noteCenterX:m.toNumber(),halfNoteWidth:f.toNumber(),previousNoteWidth:r.toNumber(),modulo:m.modulo(r).toNumber(),colorIndex:p,noteColor:v.getHexString()});const{mesh:w,outline:_}=dl(h,v,t.toNumber(),n.toNumber(),a);o.add(w,_),c.push(v)}return console.table(s),console.log("%c⇒ %i blank note(s).",fl,c.filter(l=>l.equals(new oe(16777215))).length),{notesRow:o,newColors:c}}function yg(i,e){let t=new Ke(1),n;const r=[];for(let s=0;s<i.length;s++){console.info("─".repeat(65)),console.info(`%cSoundtrack number ${s+1}:`,fl);const a=i[s],o=new Ke(n?n.dividedBy(i[s]):1),{notesRow:c,newColors:l}=Mg({notesNumber:a,noteWidth:new Ke(o),previousNoteWidth:t,colors:e});Ps(c),c.position.add(new F(0,-s*1.5)),r.push(c),e=l,n=o.times(a),t=new Ke(i[0]).dividedBy(a)}return r}function bg(i,e,t,n,r,s,a){hl(i),Ke.config({modulo:Ke.EUCLID,precision:s});const o=yg(t,n),c=new Mn().add(...o);c.scale.copy(new F(r,r,r)),Ps(c),ul(e,c,a,2.5,r),i.add(c)}async function Sg(i,e,t,n,r,s,a){hl(i),Ke.config({modulo:Ke.EUCLID,precision:a});let o=await Tg({xResolution:n[0][0],yResolution:n[0][1],image:r});if(!o)return;const c=wg(n,o);c.scale.copy(new F(s,s,s)),ul(e,c,t,2.5,s),i.add(c)}function wg(i,e){const t=new Mn;let n,r;const s=i[0][0]*100,a=i[0][1]*100;for(let o=0;o<i.length;o++){const c=i[o][0],l=i[o][1],u=new Ke(s).dividedBy(c),h=new Ke(a).dividedBy(l),{imagePixels:f,newColors:m}=Eg({xResolution:c,yResolution:l,colors:e,pixelWidth:new Ke(s).dividedBy(c),pixelHeight:new Ke(a).dividedBy(l),previousPixelWidth:n??u,previousPixelHeight:r??h});Ps(f),f.position.add(new F(o*1.25*s)),t.add(f),e=m,n=u,r=h}return t}function Eg({xResolution:i,yResolution:e,colors:t,pixelWidth:n,pixelHeight:r,previousPixelWidth:s,previousPixelHeight:a}){var h;const o=[],c=i>=100||e>=100,l=new Mn,u=new Array;for(let f=0;f<e;f++){const m=[];for(let x=0;x<i;x++){const d=n.times(x),p=r.times(f),v=new F(d.toNumber(),p.toNumber(),0),w=n.dividedBy(2),_=r.dividedBy(2),b=d.add(w),E=p.add(_),P=b.mod(s),T=E.mod(a),g=P.toNumber()===0||P.toNumber()===s.toNumber(),M=T.toNumber()===0||T.toNumber()===a.toNumber(),L=g||M,I=b.dividedToIntegerBy(s).toNumber(),H=E.dividedToIntegerBy(a).toNumber(),D=L?new oe(0):(h=t[H])==null?void 0:h[I],{mesh:N,outline:k}=dl(v,D,n.toNumber(),r.toNumber(),c);l.add(N,k),m.push(D),o.push({pixelX:d.toNumber(),pixelY:p.toNumber(),pixelCenterX:b.toNumber(),pixelCenterY:E.toNumber(),halfPixelWidth:w.toNumber(),halfPixelHeight:_.toNumber(),previousPixelWidth:s.toNumber(),previousPixelHeight:a.toNumber(),xAxisModulo:P.toNumber(),yAxisModulo:T.toNumber(),isModuloNull:L,xAxisColorIndex:I,yAxisColorIndex:H,noteColor:D.getHexString()})}u.push(m)}return{imagePixels:l,newColors:u}}async function Tg({xResolution:i,yResolution:e,image:t}){const n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!0});if(!r)return;const s=i,a=e,o=s/a;n.width=i*100,n.height=e*100*o;const c=n.width/s,l=n.height/a,u=await Rs(Ag({canvas:n,image:t,width:n.width,height:n.height,offsetX:0,offsetY:0}));return Lg(n,r,u,s,a),Cg(r,s,a,c,l)}function Ag({canvas:i,image:e,x:t=0,y:n=0,width:r=i.width,height:s=i.height,offsetX:a=.5,offsetY:o=.5}){a=da(a,0,1),o=da(o,0,1);var c=e.width,l=e.height,u=Math.min(r/c,s/l),h=c*u,f=l*u,m,x,d,p,v=1;h<r&&(v=r/h),Math.abs(v-1)<1e-14&&f<s&&(v=s/f),h*=v,f*=v,d=c/(h/r),p=l/(f/s),m=(c-d)*a,x=(l-p)*o,m<0&&(m=0),x<0&&(x=0),d>c&&(d=c),p>l&&(p=l);const w=document.createElement("canvas");w.width=r,w.height=s;const _=w.getContext("2d");return _==null||_.drawImage(e,m,x,d,p,t,n,r,s),w.toDataURL()}function Cg(i,e,t,n,r){const s=new Array;for(let a=1;a<=t;a++){const o=[];for(let c=0;c<e;c++){const{data:l}=i.getImageData(c*n,i.canvas.height-a*r,n,r),u=l[3]/255,h=new oe(`rgb(${l[0]}, ${l[1]}, ${l[2]})`);o.push(h.lerp(new oe(16777215),1-u))}s.push(o)}return s}function Lg(i,e,t,n,r){n>t.width&&(n=t.width),r>t.height&&(r=t.height);const s=n/i.width,a=r/i.height,o=i.width*s,c=i.height*a;e.drawImage(t,0,0,o,c),e.imageSmoothingEnabled=!1,e.drawImage(i,0,0,o,c,0,0,i.width,i.height)}const Pg={class:"flex items-center justify-center w-full"},Rg={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"},Dg=xi({__name:"FileUploadZone",emits:["onImageUpload"],setup(i,{emit:e}){const t=e,n=Lt();async function r(a){const o=a.target;if(o&&o.files){const c=await s(o.files[0]);t("onImageUpload",c)}}async function s(a){return await new Promise((o,c)=>{const l=new FileReader;l.onload=async u=>{var h;o(await Rs((h=u.target)==null?void 0:h.result))},l.onerror=c,l.readAsDataURL(a)})}return(a,o)=>(Gt(),Zt("div",Pg,[We("label",Rg,[o[1]||(o[1]=bl('<div class="flex flex-col items-center justify-center pt-5 pb-5"><svg aria-hidden="true" class="w-10 h-10 mb-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg><p class="flex text-sm text-neutral-500"><span class="font-semibold text-center my-auto"> Cliquez ici pour utiliser votre propre image. </span></p></div>',1)),We("input",{id:"dropzone-file",type:"file",ref_key:"file",ref:n,onChange:o[0]||(o[0]=c=>r(c)),accept:"image/*",capture:"",class:"hidden"},null,544)])]))}}),Ig={key:0,class:"flex flex-col gap-4 mb-4"},Ng={class:"flex flex-col space-y-2"},Fg={class:"flex flex-col gap-4"},Og={key:1,class:"text-neutral-500 font-normal text-base leading-5"},Ug=xi({__name:"Sidebar",props:{scaleFactorMax:{},defaultScaleFactor:{},decimalAccuracyMax:{},defaultDecimalAccuracy:{},defaultSoundtrackResolutions:{},defaultImageResolutions:{},playground:{}},emits:["soundtrackResolutionsChange","imageResolutionsChange","scaleFactorChange","decimalAccuracyChange","onImageUpload"],setup(i,{emit:e}){const t=i,n="15.4.0",r=t.playground==="soundtracks",s=e,a=Lt(t.defaultScaleFactor.toString()),o=zi(()=>"Échelle : "+a.value+"%");fi(a,()=>s("scaleFactorChange",parseInt(a.value)));const c=Lt(t.defaultDecimalAccuracy.toString()),l=zi(()=>"Précision : "+c.value+" décimales");fi(c,()=>s("decimalAccuracyChange",parseInt(c.value)));const u=zi(()=>{var _;return((_=m.value.match(/\((\d+;\s?\d+)\)/g))==null?void 0:_.map(b=>{var E;return(E=b.match(/\d+/g))==null?void 0:E.map(P=>parseInt(P)).filter(P=>!isNaN(P))}))??[[]]}),h=zi(()=>{var _;return((_=m.value.match(/\d+/g))==null?void 0:_.map(b=>parseInt(b)).filter(b=>!isNaN(b)))??[]}),f=r?t.defaultSoundtrackResolutions.join(", "):t.defaultImageResolutions.map(_=>"("+_.join("; ")+")").join(", "),m=Lt(f);function x(){r?s("soundtrackResolutionsChange",h.value):u.value&&s("imageResolutionsChange",u.value)}function d(_){const b=r?/(?:,|\s|\d+)/:/(?:,|\s|\d+|\(|\)|;)/,E=_.key;b.test(E)||_.preventDefault()}function p(){const _=m.value.trim();!_.endsWith(",")&&!_.endsWith(";")&&_.length>0?!r&&!["(",")",",",";"].includes(_.slice(-1))?m.value+="; ":_.endsWith("(")||(m.value+=", ",r||(m.value+="(")):_.endsWith("),")&&(m.value+="(")}const v=Lt(!1);function w(){v.value=!v.value}return(_,b)=>(Gt(),Zt("div",{class:hr([{"!w-fit !p-3":v.value},"flex gap-4 flex-col max-w-md sm:max-h-[90vh] overflow-y-auto lg:max-w-none absolute top-0 left-0 right-0 sm:right-auto w-11/12 sm:2/12 md:w-4/12 lg:w-3/12 xl:w-3/12 2xl:w-[22.5%] m-4 rounded-xl bg-[#f0f0f0] px-4 py-3 shadow-2xl shadow-zinc-200 border-[#bdbdbd] border"])},[We("img",{onClick:w,class:hr([{"pl-0":!v.value},"w-10 h-10 p-2"]),src:pm},null,2),v.value?lr("",!0):(Gt(),Zt("div",Ig,[si(Em,{playground:t.playground},null,8,["playground"]),We("div",Ng,[b[4]||(b[4]=We("p",{class:"text-neutral-700 text-lg font-medium"}," Résolution(s) : ",-1)),b[5]||(b[5]=We("p",{class:"text-neutral-500 text-sm"},[We("strong",null,"Astuce 🛈 :"),Ci(" Appuyer sur TAB pour créer une nouvelle résolution. ")],-1)),si(_m,{id:"resolutions-input",modelValue:m.value,"onUpdate:modelValue":b[0]||(b[0]=E=>m.value=E),validator:d,onKeydown:Ma(Sl(p,["prevent"]),["tab"]),onSubmit:x},null,8,["modelValue","onKeydown"])]),We("div",Fg,[si(ca,{label:l.value,min:100,max:_.decimalAccuracyMax,modelValue:c.value,"onUpdate:modelValue":b[1]||(b[1]=E=>c.value=E),id:"decimal-accuracy"},null,8,["label","max","modelValue"]),si(ca,{label:o.value,min:1,max:t.scaleFactorMax,modelValue:a.value,"onUpdate:modelValue":b[2]||(b[2]=E=>a.value=E),id:"scale-selector"},null,8,["label","max","modelValue"])]),b[6]||(b[6]=We("p",{class:"text-neutral-500 text-sm"},[We("strong",null,"Astuce 🛈 :"),Ci(" Des informations de débogage telles que le nombre de silences sont disponibles dans la console (touche F12). ")],-1)),r?lr("",!0):(Gt(),wl(Dg,{key:0,onOnImageUpload:b[3]||(b[3]=E=>s("onImageUpload",E))}))])),v.value?lr("",!0):(Gt(),Zt("h3",Og,[b[7]||(b[7]=Ci(" Créé par ")),b[8]||(b[8]=We("a",{class:"underline font-medium",href:"https://suivix.xyz",target:"_blank"},"Maxence ESPAGNET",-1)),Ci(", TG11, Lycée Pierre-Paul Riquet - v."+ya(hi(n)),1)]))],2))}}),pa={type:"change"},cs={type:"start"},ma={type:"end"};class zg extends Hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mn.ROTATE,MIDDLE:mn.DOLLY,RIGHT:mn.PAN},this.touches={ONE:gn.ROTATE,TWO:gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",dt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",dt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pa),n.update(),s=r.NONE},this.update=function(){const C=new F,O=new kn().setFromUnitVectors(e.up,new F(0,1,0)),le=O.clone().invert(),se=new F,ge=new kn,xe=2*Math.PI;return function(){const Re=n.object.position;C.copy(Re).sub(n.target),C.applyQuaternion(O),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&M(T()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ue=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(Be)&&(Ue<-Math.PI?Ue+=xe:Ue>Math.PI&&(Ue-=xe),Be<-Math.PI?Be+=xe:Be>Math.PI&&(Be-=xe),Ue<=Be?o.theta=Math.max(Ue,Math.min(Be,o.theta)):o.theta=o.theta>(Ue+Be)/2?Math.max(Ue,o.theta):Math.min(Be,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(o),C.applyQuaternion(le),Re.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||se.distanceToSquared(n.object.position)>a||8*(1-ge.dot(n.object.quaternion))>a?(n.dispatchEvent(pa),se.copy(n.object.position),ge.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",nt),n.domElement.removeEventListener("wheel",St),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",dt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new la,c=new la;let l=1;const u=new F;let h=!1;const f=new De,m=new De,x=new De,d=new De,p=new De,v=new De,w=new De,_=new De,b=new De,E=[],P={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function M(C){c.theta-=C}function L(C){c.phi-=C}const I=function(){const C=new F;return function(le,se){C.setFromMatrixColumn(se,0),C.multiplyScalar(-le),u.add(C)}}(),H=function(){const C=new F;return function(le,se){n.screenSpacePanning===!0?C.setFromMatrixColumn(se,1):(C.setFromMatrixColumn(se,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),u.add(C)}}(),D=function(){const C=new F;return function(le,se){const ge=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;C.copy(xe).sub(n.target);let _e=C.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),I(2*le*_e/ge.clientHeight,n.object.matrix),H(2*se*_e/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(le*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),H(se*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(C){n.object.isPerspectiveCamera?l/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){n.object.isPerspectiveCamera?l*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(C){f.set(C.clientX,C.clientY)}function K(C){w.set(C.clientX,C.clientY)}function q(C){d.set(C.clientX,C.clientY)}function Z(C){m.set(C.clientX,C.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;M(2*Math.PI*x.x/O.clientHeight),L(2*Math.PI*x.y/O.clientHeight),f.copy(m),n.update()}function ee(C){_.set(C.clientX,C.clientY),b.subVectors(_,w),b.y>0?N(g()):b.y<0&&k(g()),w.copy(_),n.update()}function me(C){p.set(C.clientX,C.clientY),v.subVectors(p,d).multiplyScalar(n.panSpeed),D(v.x,v.y),d.copy(p),n.update()}function G(C){C.deltaY<0?k(g()):C.deltaY>0&&N(g()),n.update()}function J(C){let O=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function re(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);f.set(C,O)}}function z(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);d.set(C,O)}}function ue(){const C=E[0].pageX-E[1].pageX,O=E[0].pageY-E[1].pageY,le=Math.sqrt(C*C+O*O);w.set(0,le)}function fe(){n.enableZoom&&ue(),n.enablePan&&z()}function de(){n.enableZoom&&ue(),n.enableRotate&&re()}function he(C){if(E.length==1)m.set(C.pageX,C.pageY);else{const le=Me(C),se=.5*(C.pageX+le.x),ge=.5*(C.pageY+le.y);m.set(se,ge)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;M(2*Math.PI*x.x/O.clientHeight),L(2*Math.PI*x.y/O.clientHeight),f.copy(m)}function Se(C){if(E.length===1)p.set(C.pageX,C.pageY);else{const O=Me(C),le=.5*(C.pageX+O.x),se=.5*(C.pageY+O.y);p.set(le,se)}v.subVectors(p,d).multiplyScalar(n.panSpeed),D(v.x,v.y),d.copy(p)}function Te(C){const O=Me(C),le=C.pageX-O.x,se=C.pageY-O.y,ge=Math.sqrt(le*le+se*se);_.set(0,ge),b.set(0,Math.pow(_.y/w.y,n.zoomSpeed)),N(b.y),w.copy(_)}function Ce(C){n.enableZoom&&Te(C),n.enablePan&&Se(C)}function Oe(C){n.enableZoom&&Te(C),n.enableRotate&&he(C)}function et(C){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",tt)),te(C),C.pointerType==="touch"?A(C):qe(C))}function ht(C){n.enabled!==!1&&(C.pointerType==="touch"?y(C):Ge(C))}function tt(C){ne(C),E.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(ma),s=r.NONE}function nt(C){ne(C)}function qe(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case mn.DOLLY:if(n.enableZoom===!1)return;K(C),s=r.DOLLY;break;case mn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;q(C),s=r.PAN}else{if(n.enableRotate===!1)return;V(C),s=r.ROTATE}break;case mn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;V(C),s=r.ROTATE}else{if(n.enablePan===!1)return;q(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cs)}function Ge(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Z(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ee(C);break;case r.PAN:if(n.enablePan===!1)return;me(C);break}}function St(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(cs),G(C),n.dispatchEvent(ma))}function dt(C){n.enabled===!1||n.enablePan===!1||J(C)}function A(C){switch(ae(C),E.length){case 1:switch(n.touches.ONE){case gn.ROTATE:if(n.enableRotate===!1)return;re(),s=r.TOUCH_ROTATE;break;case gn.PAN:if(n.enablePan===!1)return;z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),s=r.TOUCH_DOLLY_PAN;break;case gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cs)}function y(C){switch(ae(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Se(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(C),n.update();break;default:s=r.NONE}}function X(C){n.enabled!==!1&&C.preventDefault()}function te(C){E.push(C)}function ne(C){delete P[C.pointerId];for(let O=0;O<E.length;O++)if(E[O].pointerId==C.pointerId){E.splice(O,1);return}}function ae(C){let O=P[C.pointerId];O===void 0&&(O=new De,P[C.pointerId]=O),O.set(C.pageX,C.pageY)}function Me(C){const O=C.pointerId===E[0].pointerId?E[1]:E[0];return P[O.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",nt),n.domElement.addEventListener("wheel",St,{passive:!1}),this.update()}}function Bg(i,e){const t=new zg(i,e.domElement);return t.target.set(0,0,0),t.enableRotate=!1,t.enableZoom=!0,t.touches.ONE=gn.PAN,t.touches.TWO=gn.DOLLY_ROTATE,t.mouseButtons.LEFT=mn.RIGHT,t.mouseButtons.RIGHT=mn.LEFT,t}var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ss={exports:{}};(function(i,e){(function(t,n){{var r=n();i&&i.exports&&(e=i.exports=r),e.randomColor=r}})(kg,function(){var t=null,n={};v();var r=[],s=function(T){if(T=T||{},T.seed!==void 0&&T.seed!==null&&T.seed===parseInt(T.seed,10))t=T.seed;else if(typeof T.seed=="string")t=E(T.seed);else{if(T.seed!==void 0&&T.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var g,M,L;if(T.count!==null&&T.count!==void 0){for(var I=T.count,H=[],D=0;D<T.count;D++)r.push(!1);for(T.count=null;I>H.length;){var N=s(T);t!==null&&(T.seed=t),H.push(N)}return T.count=I,H}return g=a(T),M=o(g,T),L=c(g,M,T),l([g,M,L],T)};function a(T){if(r.length>0){var g=P(T.hue),M=x(g),L=(g[1]-g[0])/r.length,I=parseInt((M-g[0])/L);r[I]===!0?I=(I+2)%r.length:r[I]=!0;var H=(g[0]+I*L)%359,D=(g[0]+(I+1)*L)%359;return g=[H,D],M=x(g),M<0&&(M=360+M),M}else{var g=h(T.hue);return M=x(g),M<0&&(M=360+M),M}}function o(T,g){if(g.hue==="monochrome")return 0;if(g.luminosity==="random")return x([0,100]);var M=f(T),L=M[0],I=M[1];switch(g.luminosity){case"bright":L=55;break;case"dark":L=I-10;break;case"light":I=55;break}return x([L,I])}function c(T,g,M){var L=u(T,g),I=100;switch(M.luminosity){case"dark":I=L+20;break;case"light":L=(I+L)/2;break;case"random":L=0,I=100;break}return x([L,I])}function l(T,g){switch(g.format){case"hsvArray":return T;case"hslArray":return b(T);case"hsl":var M=b(T);return"hsl("+M[0]+", "+M[1]+"%, "+M[2]+"%)";case"hsla":var L=b(T),D=g.alpha||Math.random();return"hsla("+L[0]+", "+L[1]+"%, "+L[2]+"%, "+D+")";case"rgbArray":return w(T);case"rgb":var I=w(T);return"rgb("+I.join(", ")+")";case"rgba":var H=w(T),D=g.alpha||Math.random();return"rgba("+H.join(", ")+", "+D+")";default:return d(T)}}function u(T,g){for(var M=m(T).lowerBounds,L=0;L<M.length-1;L++){var I=M[L][0],H=M[L][1],D=M[L+1][0],N=M[L+1][1];if(g>=I&&g<=D){var k=(N-H)/(D-I),V=H-k*I;return k*g+V}}return 0}function h(T){if(typeof parseInt(T)=="number"){var g=parseInt(T);if(g<360&&g>0)return[g,g]}if(typeof T=="string"){if(n[T]){var M=n[T];if(M.hueRange)return M.hueRange}else if(T.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var L=_(T)[0];return[L,L]}}return[0,360]}function f(T){return m(T).saturationRange}function m(T){T>=334&&T<=360&&(T-=360);for(var g in n){var M=n[g];if(M.hueRange&&T>=M.hueRange[0]&&T<=M.hueRange[1])return n[g]}return"Color not found"}function x(T){if(t===null){var g=.618033988749895,M=Math.random();return M+=g,M%=1,Math.floor(T[0]+M*(T[1]+1-T[0]))}else{var L=T[1]||1,I=T[0]||0;t=(t*9301+49297)%233280;var H=t/233280;return Math.floor(I+H*(L-I))}}function d(T){var g=w(T);function M(I){var H=I.toString(16);return H.length==1?"0"+H:H}var L="#"+M(g[0])+M(g[1])+M(g[2]);return L}function p(T,g,M){var L=M[0][0],I=M[M.length-1][0],H=M[M.length-1][1],D=M[0][1];n[T]={hueRange:g,lowerBounds:M,saturationRange:[L,I],brightnessRange:[H,D]}}function v(){p("monochrome",null,[[0,0],[100,0]]),p("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),p("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),p("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),p("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),p("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),p("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),p("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function w(T){var g=T[0];g===0&&(g=1),g===360&&(g=359),g=g/360;var M=T[1]/100,L=T[2]/100,I=Math.floor(g*6),H=g*6-I,D=L*(1-M),N=L*(1-H*M),k=L*(1-(1-H)*M),V=256,K=256,q=256;switch(I){case 0:V=L,K=k,q=D;break;case 1:V=N,K=L,q=D;break;case 2:V=D,K=L,q=k;break;case 3:V=D,K=N,q=L;break;case 4:V=k,K=D,q=L;break;case 5:V=L,K=D,q=N;break}var Z=[Math.floor(V*255),Math.floor(K*255),Math.floor(q*255)];return Z}function _(T){T=T.replace(/^#/,""),T=T.length===3?T.replace(/(.)/g,"$1$1"):T;var g=parseInt(T.substr(0,2),16)/255,M=parseInt(T.substr(2,2),16)/255,L=parseInt(T.substr(4,2),16)/255,I=Math.max(g,M,L),H=I-Math.min(g,M,L),D=I?H/I:0;switch(I){case g:return[60*((M-L)/H%6)||0,D,I];case M:return[60*((L-g)/H+2)||0,D,I];case L:return[60*((g-M)/H+4)||0,D,I]}}function b(T){var g=T[0],M=T[1]/100,L=T[2]/100,I=(2-M)*L;return[g,Math.round(M*L/(I<1?I:2-I)*1e4)/100,I/2*100]}function E(T){for(var g=0,M=0;M!==T.length&&!(g>=Number.MAX_SAFE_INTEGER);M++)g+=T.charCodeAt(M);return g}function P(T){if(isNaN(T)){if(typeof T=="string"){if(n[T]){var M=n[T];if(M.hueRange)return M.hueRange}else if(T.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var L=_(T)[0];return m(L).hueRange}}}else{var g=parseInt(T);if(g<360&&g>0)return m(T).hueRange}return[0,360]}return s})})(Ss,Ss.exports);var Vg=Ss.exports;const Hg=Gg(Vg);function ga(i,e=!0){const t=[new oe(40931),new oe(15359488),new oe(13839185),new oe(12009603),new oe(8673951),new oe(4149629),new oe(3697026),new oe(232631),new oe(41124),new oe(42360),new oe(2923795),new oe(12885258),new oe(16760331),new oe(16471559),new oe(16711790),new oe(8599788),new oe(3835647),new oe(2792847),new oe(15320170),new oe(16032353),new oe(15167313),new oe(6414996),new oe(8113594),new oe(9935306),new oe(11827946),new oe(4020864),new oe(15625293),new oe(4931442),new oe(16762967),new oe(1154468),new oe(1664126),new oe(8165509),new oe(11908738),new oe(16702615)],n=[];if(e){const r=Hg({seed:i,format:"hsl",luminosity:"dark",count:Math.ceil((i-t.length)/2)}).map(a=>new oe(a).convertLinearToSRGB()),s=t.concat(r);for(const a of s)n.push(a),n.push(new oe().copy(a).lerp(new oe(16777215),.505))}else for(let r=t.length;r<i;r++){const s=t[r%t.length],a=new oe().copy(s).lerp(new oe(16777215),.505);n.push(s,a)}return n}const Wg=i=>{var e;return((e=i.query.soundtrackResolutions)==null?void 0:e.split(",").map(Number))??[4,7]};function qg(i,e,t,n,r,s){let a=ga(Math.max(...n.value));const o=n.value;fi([n,r,s],function(){n.value.length<1&&(n.value=o),a=ga(Math.max(...n.value)),bg(i,e,n.value,a,r.value,s.value,t)},{immediate:!0})}const Xg=i=>{var t;const e=(t=i.query.imageResolutions)==null?void 0:t.toString();if(e){let n=e.split(",").map(Number);n.length%2===1&&n.pop();const r=[];for(;n.length>=2;)r.unshift(n.splice(-2,2));return r.unshift(n),r.filter(s=>s.length!==0)}return[[28,28]]};async function jg(i,e,t,n,r,s,a){fi([n,r,s,a],async function(){const o=a.value??await Rs("./images/mona_lisa.jpg");let c=new Array;El(n.value)&&(c=Tl(n.value)),await Sg(i,e,t,c,o,r.value,s.value)},{immediate:!0,deep:!0})}const _a=1e6,Yg=1e5,Zg=xi({__name:"Playground",props:{type:{}},setup(i){const e=i,t=ba(),n=Al();let r;const{width:s,height:a}=Ql(),[o,c]=[new sm,Lt(null)],l=new Ft(50,s.value/a.value);l.position.set(0,0,8),o.add(l);const u=e.type==="soundtracks",h=Lt(Wg(n)),f=Lt(Xg(n)),m=parseInt(n.query["scale-factor"]??_a),x=Lt(m),d=parseInt(n.query["decimal-accuracy"]??1e3),p=Lt(d),v=Lt(null);Xl([s,a],()=>{l.aspect=s.value/a.value,l.updateProjectionMatrix(),r.setSize(s.value,a.value)},{throttle:250});const w=g=>{h.value=g,T()},_=g=>{f.value=g,T()},b=g=>{x.value=g,T()},E=g=>{p.value=g,T()},P=g=>{v.value=g};function T(){const g={"scale-factor":x.value,"decimal-accuracy":p.value};u?g.soundtrackResolutions=h.value.join(","):g.imageResolutions=f.value.join(","),t.replace({query:g})}return xa(()=>{r=new Cs({canvas:c.value??void 0,alpha:!0,antialias:!1}),r.setPixelRatio(window.devicePixelRatio),r.setSize(s.value,a.value);const g=Bg(l,r);u?qg(o,l,g,h,x,p):jg(o,l,g,f,x,p,v),r.setAnimationLoop(()=>{r.render(o,l)})}),(g,M)=>(Gt(),Zt(Cl,null,[si(dm),si(Ug,{onSoundtrackResolutionsChange:w,onImageResolutionsChange:_,onScaleFactorChange:b,onDecimalAccuracyChange:E,onOnImageUpload:P,scaleFactorMax:_a,defaultScaleFactor:hi(m),decimalAccuracyMax:Yg,defaultDecimalAccuracy:hi(d),defaultSoundtrackResolutions:h.value,defaultImageResolutions:f.value,playground:e.type},null,8,["defaultScaleFactor","defaultDecimalAccuracy","defaultSoundtrackResolutions","defaultImageResolutions","playground"]),We("canvas",{ref_key:"canvas",ref:c},null,512)],64))}});export{Zg as _};
