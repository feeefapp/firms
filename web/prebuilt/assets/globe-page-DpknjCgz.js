const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-XjFltekU.js","assets/index-DEc6Dtag.js","assets/index-_YkfpRCR.css"])))=>i.map(i=>d[i]);
import{c as li,I as fc,r as Oe,J as pc,K as ll,j as I,O as cl,Q as hl,R as mc,U as gc,V as Or,W as _c,X as la,Y as vc,_ as ui,Z as Zr,t as ie,$ as Zn,h as St,a0 as xc,N as er,m as Us,E as ul,e as Is,L as dl,q as ca,s as di,v as Cn,u as Mc,a1 as Sc,a2 as ha,a3 as yc,a4 as Vi,a5 as fi,a6 as Ec,S as bc,B as hr,a7 as Tc,a8 as ua,g as da,a9 as Ac,aa as fl,ab as pl,M as wc,ac as Rc,ad as fa,ae as Cc,af as Pc,ag as pa}from"./index-DEc6Dtag.js";import{C as Lc,N as Dc,a as Uc}from"./temporal-dialog-BtNQt5zN.js";import{P as ma,T as Ic}from"./text-field-frfmA_NX.js";import{F as Nc}from"./filter-bar-6lOXUuFb.js";import{p as Fc}from"./bbox-D104tjyD.js";import{u as Oc}from"./use-remote-Do4L-EuS.js";import{I as Ns}from"./info-B8nsecNC.js";import{D as zc}from"./download-DXHQF-Z8.js";import"./modal-CSwBrJop.js";const ml={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ml.node;const Bc=li(ml);const gl={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};gl.node;const Gc=li(gl);const _l={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};_l.node;const Hc=li(_l);const vl={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};vl.node;const kc=li(vl);const xl={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};xl.node;const Vc=li(xl);const Ml={name:"square-dashed",size:24,node:[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aliases:["box-select"]};Ml.node;const ga=li(Ml);const Sl={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};Sl.node;const _a=li(Sl),yl=.55;function Wc(n,e,t){const i=t.row*yl;if(n>i&&t.fullLeading&&t.leading)return{offset:t.row,commit:"leading"};if(n<-i&&t.fullTrailing&&t.trailing)return{offset:-t.row,commit:"trailing"};const r=fc(n,e,.99);return r>t.leading/2&&t.leading&&n>0?{offset:t.leading,commit:null}:r<-t.trailing/2&&t.trailing&&n<0?{offset:-t.trailing,commit:null}:{offset:0,commit:null}}function Xc(n,e){const t=e.row*yl;return n>t&&e.fullLeading&&e.leading>0||n<-t&&e.fullTrailing&&e.trailing>0}function jc(n,e,t){const i=[];let r=0;for(const a of n)i.push(r),r+=a;const s=i[e]+n[e]/2+t;let o=e;for(let a=e+1;a<n.length;a++)s>i[a]+n[a]/2&&(o=a);for(let a=e-1;a>=0;a--)s<i[a]+n[a]/2&&(o=a);return o}function qc(n,e,t){return n.map((i,r)=>r===e?0:e<t&&r>e&&r<=t?-n[e]:t<e&&r>=t&&r<e?n[e]:0)}function Yc(n,e,t){let i=0;if(t>e)for(let r=e+1;r<=t;r++)i+=n[r];else for(let r=t;r<e;r++)i-=n[r];return i}const El=Oe.createContext({enabled:!1});function pn({header:n,footer:e,children:t,className:i,label:r,onReorder:s}){const o=Oe.useId(),a=Oe.useRef(null),l=Oe.useRef(null),[c,h]=Oe.useState(""),d=Oe.useRef(s);d.current=s,Oe.useLayoutEffect(()=>{if(!l.current)return;const _=l.current;l.current=null,pc(_,{spring:Or.snappy})});const f=()=>a.current?Array.from(a.current.children):[],m=(_,p)=>{l.current=_c(f()),d.current?.(_,p),h(`Moved to position ${p+1} of ${f().length}.`)};Oe.useEffect(()=>{const _=a.current;if(!_||!s)return;let p=null,u=null;const y=(M,E,b)=>{M.style.transform=b?`translate3d(0, ${E}px, 0) scale(1.02)`:`translate3d(0, ${E}px, 0)`},v=()=>{const M=p;if(!M)return;const E=(M.scroller?.scrollTop??0)-M.scrollStart,b=vc(M.dy+E,M.bounds[0],M.bounds[1],200);M.offsets[M.from].set(b);const U=jc(M.heights,M.from,b);U!==M.to&&(M.to=U,qc(M.heights,M.from,U).forEach((S,w)=>{w!==M.from&&M.offsets[w].animateTo(S,{spring:Or.snappy})}))},T=()=>{const M=p;if(!M||(M.frame=requestAnimationFrame(T),!M.scroller))return;const E=M.scroller.getBoundingClientRect(),b=64,U=M.pointerY<E.top+b?-((E.top+b-M.pointerY)/b)*14:M.pointerY>E.bottom-b?(M.pointerY-(E.bottom-b))/b*14:0;U&&(M.scroller.scrollTop+=U,v())};return ll(_,()=>({axis:"y",threshold:2,canBegin:({target:M})=>(u=M?.closest("[data-lab-reorder-handle]")??null,!!u),onStart:({originY:M})=>{const E=f(),b=E.findIndex(O=>!!u&&O.contains(u));if(b<0)return;const U=E.map(O=>O.getBoundingClientRect().height);let S=_.parentElement;for(;S&&!/(auto|scroll)/.test(getComputedStyle(S).overflowY);)S=S.parentElement;const w=U.slice(0,b).reduce((O,W)=>O+W,0),z=U.slice(b+1).reduce((O,W)=>O+W,0);p={from:b,to:b,heights:U,nodes:E,offsets:E.map((O,W)=>{const P=new hl(0,.25);return P.subscribe(F=>y(O,F,W===b)),P}),scroller:S,scrollStart:S?.scrollTop??0,dy:0,bounds:[-w,z],frame:0,pointerY:M},E[b].dataset.lifted="",_.dataset.reordering="",y(E[b],0,!0),p.frame=requestAnimationFrame(T)},onMove:({dy:M,originY:E})=>{p&&(p.dy=M,p.pointerY=E+M,v())},onEnd:()=>{const M=p;if(p=null,!M)return;cancelAnimationFrame(M.frame);const E=()=>{delete M.nodes[M.from].dataset.lifted,delete _.dataset.reordering,M.offsets.forEach(U=>U.stop()),M.to!==M.from&&m(M.from,M.to),M.nodes.forEach(U=>{M.to===M.from&&(U.style.transform="")})},b=Yc(M.heights,M.from,M.to);M.offsets[M.from].animateTo(b,{spring:Or.release}).then(U=>U&&E())}}))},[!!s]);const g=_=>{const p=_.target.closest("[data-lab-reorder-handle]");if(!p||!s||_.key!=="ArrowUp"&&_.key!=="ArrowDown")return;const u=f(),y=u.findIndex(T=>T.contains(p)),v=y+(_.key==="ArrowUp"?-1:1);y<0||v<0||v>=u.length||(_.preventDefault(),m(y,v))};return I.jsxs("section",{className:cl("lab-list-section",i),"aria-labelledby":n?o:void 0,"aria-label":n?void 0:r,children:[n&&I.jsx("h3",{id:o,className:"lab-list-header",children:n}),I.jsx(El.Provider,{value:{enabled:!!s},children:I.jsx("div",{ref:a,className:"lab-list-card",role:"list",onKeyDown:s?g:void 0,children:t})}),e&&I.jsx("p",{className:"lab-list-footer",children:e}),s&&I.jsx("span",{className:"lab-sr-only",role:"status",children:c})]})}const Jr=76;let Wi=null;const At=Oe.forwardRef(function({title:e,subtitle:t,leading:i,trailing:r,chevron:s,selected:o,asChild:a,static:l,leadingActions:c,trailingActions:h,fullSwipe:d=!0,reorderLabel:f,className:m,children:g,..._},p){const u=Oe.useContext(El),y=Oe.useRef(null),v=!!(c?.length||h?.length),[T,M]=Oe.useState(null),[E,b]=Oe.useState(null),U=Oe.useRef(null);U.current||(U.current=new hl(0,.25));const S=Oe.useRef({leadingActions:c,trailingActions:h,fullSwipe:d});S.current={leadingActions:c,trailingActions:h,fullSwipe:d};const w=()=>!!y.current&&getComputedStyle(y.current).direction==="rtl",z=()=>({leading:(S.current.leadingActions?.length??0)*Jr,trailing:(S.current.trailingActions?.length??0)*Jr,row:y.current?.clientWidth??360,fullLeading:S.current.fullSwipe,fullTrailing:S.current.fullSwipe});Oe.useLayoutEffect(()=>{if(v)return U.current.subscribe(Y=>{const J=y.current;if(!J)return;J.style.setProperty("--lab-row-swipe",`${Math.abs(Y)}px`);const ee=J.querySelector(":scope > .lab-list-row");ee&&(ee.style.transform=Y?`translate3d(${w()?-Y:Y}px, 0, 0)`:""),J.dataset.swiping=Y>.5?"leading":Y<-.5?"trailing":"";const H=Xc(Y,z());b(H?Y>0?"leading":"trailing":null)})},[v]);const O=(Y,J)=>U.current.animateTo(Y,{spring:Or.release,velocity:J}),W=Oe.useCallback(()=>{M(null),O(0)},[]),P=Y=>{W(),Y.onAction()};Oe.useEffect(()=>{const Y=y.current;if(!Y||!v)return;let J=0;return ll(Y,()=>({axis:"x",threshold:8,canBegin:({target:ee})=>!ee?.closest(".lab-list-actions, [data-lab-reorder-handle]"),onStart:()=>{Wi&&Wi!==W&&Wi(),U.current.stop(),J=U.current.get()},onMove:({dx:ee,time:H})=>{const ne=z(),Q=J+(w()?-ee:ee),ce=ne.leading?ne.row:0,ge=ne.trailing?-ne.row:0;U.current.track(Q>ce?ce+la(Q-ce,120):Q<ge?ge+la(Q-ge,120):Q,H)},onEnd:({time:ee,cancelled:H})=>{const ne=U.current.getVelocity(ee),Q=H?{offset:0,commit:null}:Wc(U.current.get(),ne,z()),ce=S.current;if(Q.commit){const ge=(Q.commit==="leading"?ce.leadingActions:ce.trailingActions)[0];O(Q.offset,ne).then(()=>{ge.onAction(),y.current?.isConnected&&O(0)}),M(null);return}M(Q.offset>0?"leading":Q.offset<0?"trailing":null),Wi=Q.offset?W:null,O(Q.offset,ne)}}))},[v,W]);const F=Y=>{if(_.onKeyDown?.(Y),!v||Y.defaultPrevented)return;const J=Y.key===(w()?"ArrowLeft":"ArrowRight"),H=Y.key===(w()?"ArrowRight":"ArrowLeft")&&h?.length?"trailing":J&&c?.length?"leading":null;if(!H)return;Y.preventDefault();const ne=(H==="leading"?c.length:h.length)*Jr;M(H),Wi=W,y.current&&(y.current.dataset.swiping=H),O(H==="leading"?ne:-ne),requestAnimationFrame(()=>y.current?.querySelector(`.lab-list-actions[data-side="${H}"] button`)?.focus())},G=I.jsxs(I.Fragment,{children:[i&&I.jsx(mc,{className:"lab-list-row-leading",children:i}),I.jsxs("span",{className:"lab-list-row-text",children:[I.jsx("span",{className:"lab-list-row-title",children:e}),t&&I.jsx("span",{className:"lab-list-row-subtitle",children:t})]}),r&&I.jsx("span",{className:"lab-list-row-trailing",children:r}),s&&I.jsx(Lc,{className:"lab-list-row-chevron lab-dir-flip","aria-hidden":"true"})]}),Z={className:cl("lab-list-row",m),"data-selected":o||void 0},X=(Y,J)=>J?.length?I.jsx("div",{className:"lab-list-actions","data-side":Y,"data-full":E===Y||void 0,"aria-hidden":T!==Y||void 0,children:J.map(ee=>I.jsxs("button",{type:"button",className:"lab-list-action","data-tone":ee.tone??"neutral",tabIndex:T===Y?0:-1,onClick:()=>P(ee),onKeyDown:H=>{H.key==="Escape"&&(W(),y.current?.querySelector(":scope > .lab-list-row")?.focus())},children:[ee.icon,I.jsx("span",{children:ee.label})]},ee.label))}):null,K=typeof e=="string"?e:void 0;return I.jsxs("div",{ref:y,role:"listitem",className:"lab-list-item","data-leading":i?"":void 0,"data-swipe":v||void 0,"data-reorder":u.enabled||void 0,children:[X("leading",c),X("trailing",h),l?I.jsx("div",{...Z,"data-static":"",children:G}):a?I.jsx(gc,{...Z,..._,"aria-current":o?"true":void 0,onKeyDown:F,children:Oe.isValidElement(g)?Oe.cloneElement(g,{},G):g}):I.jsx("button",{ref:p,type:"button",...Z,..._,"aria-current":o?"true":void 0,onKeyDown:F,onClickCapture:Y=>{T&&(Y.preventDefault(),Y.stopPropagation(),W())},children:G}),u.enabled&&I.jsx("button",{type:"button",className:"lab-list-grip","data-lab-reorder-handle":"","aria-label":f??(K?`Reorder ${K}`:"Reorder"),"aria-description":"Drag, or use the up and down arrow keys.",children:I.jsx(Hc,{"aria-hidden":"true"})})]})});const Zs="160",pi={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kc=0,va=1,$c=2,bl=1,Zc=2,bn=3,Hn=0,Ft=1,Yt=2,zn=0,Ii=1,xa=2,Ma=3,Sa=4,Jc=5,Kn=100,Qc=101,eh=102,ya=103,Ea=104,th=200,nh=201,ih=202,rh=203,Fs=204,Os=205,sh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,ph=0,mh=1,gh=2,Gr=3,_h=4,vh=5,xh=6,Mh=7,Tl=0,Sh=1,yh=2,Bn=0,Eh=1,bh=2,Th=3,Ah=4,wh=5,Rh=6,Al=300,Fi=301,Oi=302,zs=303,Bs=304,jr=306,Gs=1e3,ln=1001,Hs=1002,It=1003,ba=1004,Qr=1005,Qt=1006,Ch=1007,tr=1008,Gn=1009,Ph=1010,Lh=1011,Js=1012,wl=1013,Fn=1014,On=1015,nr=1016,Rl=1017,Cl=1018,ni=1020,Dh=1021,cn=1023,Uh=1024,Ih=1025,ii=1026,zi=1027,Nh=1028,Pl=1029,Fh=1030,Ll=1031,Dl=1033,es=33776,ts=33777,ns=33778,is=33779,Ta=35840,Aa=35841,wa=35842,Ra=35843,Ul=36196,Ca=37492,Pa=37496,La=37808,Da=37809,Ua=37810,Ia=37811,Na=37812,Fa=37813,Oa=37814,za=37815,Ba=37816,Ga=37817,Ha=37818,ka=37819,Va=37820,Wa=37821,rs=36492,Xa=36494,ja=36495,Oh=36283,qa=36284,Ya=36285,Ka=36286,Il=3e3,ri=3001,zh=3200,Bh=3201,Gh=0,Hh=1,tn="",Tt="srgb",mn="srgb-linear",Qs="display-p3",qr="display-p3-linear",Hr="linear",ct="srgb",kr="rec709",Vr="p3",gi=7680,$a=519,kh=512,Vh=513,Wh=514,Nl=515,Xh=516,jh=517,qh=518,Yh=519,Za=35044,Ja="300 es",ks=1035,Tn=2e3,Wr=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,Vs=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Kh(n,e){return(n%e+e)%e}function ss(n,e,t){return(1-t)*n+t*e}function Qa(n){return(n&n-1)===0&&n!==0}function Ws(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $h={DEG2RAD:zr};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],y=r[1],v=r[4],T=r[7],M=r[2],E=r[5],b=r[8];return s[0]=o*_+a*y+l*M,s[3]=o*p+a*v+l*E,s[6]=o*u+a*T+l*b,s[1]=c*_+h*y+d*M,s[4]=c*p+h*v+d*E,s[7]=c*u+h*T+d*b,s[2]=f*_+m*y+g*M,s[5]=f*p+m*v+g*E,s[8]=f*u+m*T+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Ze;function Fl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zh(){const n=ir("canvas");return n.style.display="block",n}const eo={};function Zi(n){n in eo||(eo[n]=!0,console.warn(n))}const to=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),no=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[mn]:{transfer:Hr,primaries:kr,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:ct,primaries:kr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qr]:{transfer:Hr,primaries:Vr,toReference:n=>n.applyMatrix3(no),fromReference:n=>n.applyMatrix3(to)},[Qs]:{transfer:ct,primaries:Vr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(no),fromReference:n=>n.applyMatrix3(to).convertLinearToSRGB()}},Jh=new Set([mn,qr]),nt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ur[e].toReference,r=ur[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ur[n].primaries},getTransfer:function(n){return n===tn?Hr:ur[n].transfer}};function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Ol{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=ir("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ls(r[o].image)):s.push(ls(r[o]))}else s=ls(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class kt extends ci{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=ln,r=ln,s=Qt,o=tr,a=cn,l=Gn,c=kt.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=sr(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ri?Tt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?ri:Il}set encoding(e){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?Tt:tn}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Al;kt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,M=(u+1)/2,E=(h+f)/4,b=(d+_)/4,U=(g+p)/4;return v>T&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=b/i):T>M?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=U/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=U/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ri?Tt:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bl extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nu extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,u*y);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const T=a*y;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,d=d*p+_*T,p===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cs.copy(this).projectOnVector(e),this.sub(cs)}reflect(e){return this.sub(cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new N,io=new ai;class ar{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),fr.subVectors(this.max,ji),vi.subVectors(e.a,ji),xi.subVectors(e.b,ji),Mi.subVectors(e.c,ji),Pn.subVectors(xi,vi),Ln.subVectors(Mi,xi),Wn.subVectors(vi,Mi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!hs(t,vi,xi,Mi,fr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,vi,xi,Mi,fr))?!1:(pr.crossVectors(Pn,Ln),t=[pr.x,pr.y,pr.z],hs(t,vi,xi,Mi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new N,new N,new N,new N,new N,new N,new N,new N],rn=new N,dr=new ar,vi=new N,xi=new N,Mi=new N,Pn=new N,Ln=new N,Wn=new N,ji=new N,fr=new N,pr=new N,Xn=new N;function hs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xn.fromArray(n,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=i.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const iu=new ar,qi=new N,us=new N;class or{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(us)),this.expandByPoint(qi.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,ds=new N,mr=new N,Dn=new N,fs=new N,gr=new N,ps=new N;class lr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ds.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ds);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=Dn.dot(this.direction),l=-Dn.dot(mr),c=Dn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ds).addScaledVector(mr,f),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){fs.subVectors(t,e),gr.subVectors(i,e),ps.crossVectors(fs,gr);let o=this.direction.dot(ps),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(gr.crossVectors(Dn,gr));if(l<0)return null;const c=a*this.direction.dot(fs.cross(Dn));if(c<0||l+c>o)return null;const h=-a*Dn.dot(ps);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,su)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Un.crossVectors(i,Xt),Un.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Un.crossVectors(i,Xt)),Un.normalize(),_r.crossVectors(Xt,Un),r[0]=Un.x,r[4]=_r.x,r[8]=Xt.x,r[1]=Un.y,r[5]=_r.y,r[9]=Xt.y,r[2]=Un.z,r[6]=_r.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],y=i[3],v=i[7],T=i[11],M=i[15],E=r[0],b=r[4],U=r[8],S=r[12],w=r[1],z=r[5],O=r[9],W=r[13],P=r[2],F=r[6],G=r[10],Z=r[14],X=r[3],K=r[7],Y=r[11],J=r[15];return s[0]=o*E+a*w+l*P+c*X,s[4]=o*b+a*z+l*F+c*K,s[8]=o*U+a*O+l*G+c*Y,s[12]=o*S+a*W+l*Z+c*J,s[1]=h*E+d*w+f*P+m*X,s[5]=h*b+d*z+f*F+m*K,s[9]=h*U+d*O+f*G+m*Y,s[13]=h*S+d*W+f*Z+m*J,s[2]=g*E+_*w+p*P+u*X,s[6]=g*b+_*z+p*F+u*K,s[10]=g*U+_*O+p*G+u*Y,s[14]=g*S+_*W+p*Z+u*J,s[3]=y*E+v*w+T*P+M*X,s[7]=y*b+v*z+T*F+M*K,s[11]=y*U+v*O+T*G+M*Y,s[15]=y*S+v*W+T*Z+M*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],y=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,T=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,M=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,E=t*y+i*v+r*T+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*u-i*f*u)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*b,e[4]=v*b,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*u-t*l*u)*b,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*b,e[8]=T*b,e[9]=(g*d*s-h*_*s-g*i*m+t*_*m+h*i*u-t*d*u)*b,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*u+t*a*u)*b,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*b,e[12]=M*b,e[13]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*b,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*b,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,g=s*d,_=o*h,p=o*d,u=a*d,y=l*c,v=l*h,T=l*d,M=i.x,E=i.y,b=i.z;return r[0]=(1-(_+u))*M,r[1]=(m+T)*M,r[2]=(g-v)*M,r[3]=0,r[4]=(m-T)*E,r[5]=(1-(f+u))*E,r[6]=(p+y)*E,r[7]=0,r[8]=(g+v)*b,r[9]=(p-y)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,h=1/o,d=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(a===Tn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*h;let g,_;if(a===Tn)g=(o+s)*d,_=-2*d;else if(a===Wr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new N,sn=new gt,ru=new N(0,0,0),su=new N(1,1,1),Un=new N,_r=new N,Xt=new N,ro=new gt,so=new ai;class Yr{constructor(e=0,t=0,i=0,r=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return so.setFromEuler(this),this.setFromQuaternion(so,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const ao=new N,yi=new ai,Sn=new gt,vr=new N,Yi=new N,ou=new N,lu=new ai,oo=new N(1,0,0),lo=new N(0,1,0),co=new N(0,0,1),cu={type:"added"},hu={type:"removed"};class Ot extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new N,t=new Yr,i=new ai,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(oo,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(co,e)}translateOnAxis(e,t){return ao.copy(e).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oo,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Yi,vr,this.up):Sn.lookAt(vr,Yi,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Sn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new N(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,yn=new N,ms=new N,En=new N,Ei=new N,bi=new N,ho=new N,gs=new N,_s=new N,vs=new N;let xr=!1;class on{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),yn.subVectors(i,t),ms.subVectors(e,t);const o=an.dot(an),a=an.dot(yn),l=an.dot(ms),c=yn.dot(yn),h=yn.dot(ms),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,i,r,s,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),yn.subVectors(e,t),an.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,i),bi.subVectors(s,i),gs.subVectors(e,i);const l=Ei.dot(gs),c=bi.dot(gs);if(l<=0&&c<=0)return t.copy(i);_s.subVectors(e,r);const h=Ei.dot(_s),d=bi.dot(_s);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ei,o);vs.subVectors(e,s);const m=Ei.dot(vs),g=bi.dot(vs);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ho.subVectors(s,r),a=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(ho,a);const u=1/(p+_+f);return o=_*u,a=f*u,t.copy(i).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Kh(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xs(o,s,e+1/3),this.g=xs(o,s,e),this.b=xs(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Gl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return nt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Nt(Lt.r*255,0,255))*65536+Math.round(Nt(Lt.g*255,0,255))*256+Math.round(Nt(Lt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Tt){nt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Mr);const i=ss(In.h,Mr.h,t),r=ss(In.s,Mr.s,t),s=ss(In.l,Mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new tt;tt.NAMES=Gl;let uu=0;class Gi extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fs,this.blendDst=Os,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fs&&(i.blendSrc=this.blendSrc),this.blendDst!==Os&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,Sr=new Ke;class Rt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Hl extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kl extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let du=0;const Zt=new gt,Ms=new Ot,Ti=new N,jt=new ar,Ki=new ar,Mt=new N;class _t extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?kl:Hl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,Ki.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,Ki.max),jt.expandByPoint(Mt)):(jt.expandByPoint(Ki.min),jt.expandByPoint(Ki.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),Mt.add(Ti)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new N,h[w]=new N;const d=new N,f=new N,m=new N,g=new Ke,_=new Ke,p=new Ke,u=new N,y=new N;function v(w,z,O){d.fromArray(r,w*3),f.fromArray(r,z*3),m.fromArray(r,O*3),g.fromArray(o,w*2),_.fromArray(o,z*2),p.fromArray(o,O*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const W=1/(_.x*p.y-p.x*_.y);isFinite(W)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(W),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(W),c[w].add(u),c[z].add(u),c[O].add(u),h[w].add(y),h[z].add(y),h[O].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,z=T.length;w<z;++w){const O=T[w],W=O.start,P=O.count;for(let F=W,G=W+P;F<G;F+=3)v(i[F+0],i[F+1],i[F+2])}const M=new N,E=new N,b=new N,U=new N;function S(w){b.fromArray(s,w*3),U.copy(b);const z=c[w];M.copy(z),M.sub(b.multiplyScalar(b.dot(z))).normalize(),E.crossVectors(U,z);const W=E.dot(h[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=W}for(let w=0,z=T.length;w<z;++w){const O=T[w],W=O.start,P=O.count;for(let F=W,G=W+P;F<G;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Rt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new gt,jn=new lr,yr=new or,fo=new N,Ai=new N,wi=new N,Ri=new N,Ss=new N,Er=new N,br=new Ke,Tr=new Ke,Ar=new Ke,po=new N,mo=new N,go=new N,wr=new N,Rr=new N;class Dt extends Ot{constructor(e=new _t,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Ss.fromBufferAttribute(d,e),o?Er.addScaledVector(Ss,h):Er.addScaledVector(Ss.sub(t),h))}t.add(Er)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),jn.copy(e.ray).recast(e.near),!(yr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(yr,fo)===null||jn.origin.distanceToSquared(fo)>(e.far-e.near)**2))&&(uo.copy(s).invert(),jn.copy(e.ray).applyMatrix4(uo),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,M=v;T<M;T+=3){const E=a.getX(T),b=a.getX(T+1),U=a.getX(T+2);r=Cr(this,u,e,i,c,h,d,E,b,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);r=Cr(this,o,e,i,c,h,d,y,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,M=v;T<M;T+=3){const E=T,b=T+1,U=T+2;r=Cr(this,u,e,i,c,h,d,E,b,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=p,v=p+1,T=p+2;r=Cr(this,o,e,i,c,h,d,y,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function fu(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:n}}function Cr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,wi),n.getVertexPosition(c,Ri);const h=fu(n,e,t,i,Ai,wi,Ri,wr);if(h){r&&(br.fromBufferAttribute(r,a),Tr.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,c),h.uv=on.getInterpolation(wr,Ai,wi,Ri,br,Tr,Ar,new Ke)),s&&(br.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),Ar.fromBufferAttribute(s,c),h.uv1=on.getInterpolation(wr,Ai,wi,Ri,br,Tr,Ar,new Ke),h.uv2=h.uv1),o&&(po.fromBufferAttribute(o,a),mo.fromBufferAttribute(o,l),go.fromBufferAttribute(o,c),h.normal=on.getInterpolation(wr,Ai,wi,Ri,po,mo,go,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};on.getNormal(Ai,wi,Ri,d.normal),h.face=d}return h}class oi extends _t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(_,p,u,y,v,T,M,E,b,U,S){const w=T/b,z=M/U,O=T/2,W=M/2,P=E/2,F=b+1,G=U+1;let Z=0,X=0;const K=new N;for(let Y=0;Y<G;Y++){const J=Y*z-W;for(let ee=0;ee<F;ee++){const H=ee*w-O;K[_]=H*y,K[p]=J*v,K[u]=P,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[u]=E>0?1:-1,h.push(K.x,K.y,K.z),d.push(ee/b),d.push(1-Y/U),Z+=1}}for(let Y=0;Y<U;Y++)for(let J=0;J<b;J++){const ee=f+J+F*Y,H=f+J+F*(Y+1),ne=f+(J+1)+F*(Y+1),Q=f+(J+1)+F*Y;l.push(ee,H,Q),l.push(H,ne,Q),X+=6}a.addGroup(m,X,S),m+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function pu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vl(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const mu={clone:Bi,merge:Ut};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Wl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class vu extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new en(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const o=new en(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const a=new en(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const l=new en(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new en(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xl extends kt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?Tt:tn),this.texture=new Xl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oi(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:zn});s.uniforms.tEquirect.value=t;const o=new Dt(r,s),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=Qt),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ys=new N,Mu=new N,Su=new Ze;class Nn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ys.subVectors(i,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Su.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new or,Pr=new N;class jl{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],y=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-s,f-c,p-m,T-u).normalize(),i[1].setComponents(l+s,f+c,p+m,T+u).normalize(),i[2].setComponents(l+o,f+h,p+g,T+y).normalize(),i[3].setComponents(l-o,f-h,p-g,T-y).normalize(),i[4].setComponents(l-a,f-d,p-_,T-v).normalize(),t===Tn)i[5].setComponents(l+a,f+d,p+_,T+v).normalize();else if(t===Wr)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ql(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class ta extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let v=0;v<c;v++){const T=v*d-s;g.push(T,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const v=y+c*u,T=y+c*(u+1),M=y+1+c*(u+1),E=y+1+c*u;m.push(v,T,E),m.push(T,M,E)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lf=`float getShadowMask() {
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
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vf=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Df=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,kf=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,Xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,ep=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
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
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Eu,alphahash_pars_fragment:bu,alphamap_fragment:Tu,alphamap_pars_fragment:Au,alphatest_fragment:wu,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Du,begin_vertex:Uu,beginnormal_vertex:Iu,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Hu,color_fragment:ku,color_pars_fragment:Vu,color_pars_vertex:Wu,color_vertex:Xu,common:ju,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:Ku,displacementmap_vertex:$u,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:ed,envmap_fragment:td,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:rd,envmap_physical_pars_fragment:gd,envmap_vertex:sd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:ld,fog_pars_fragment:cd,gradientmap_pars_fragment:hd,lightmap_fragment:ud,lightmap_pars_fragment:dd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:yd,lights_fragment_begin:Ed,lights_fragment_maps:bd,lights_fragment_end:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Cd,map_fragment:Pd,map_pars_fragment:Ld,map_particle_fragment:Dd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:Gd,normal_fragment_maps:Hd,normal_pars_fragment:kd,normal_pars_vertex:Vd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:Kd,opaque_fragment:$d,packing:Zd,premultiplied_alpha_fragment:Jd,project_vertex:Qd,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:df,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:vf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:yf,background_vert:Ef,background_frag:bf,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:wf,cube_frag:Rf,depth_vert:Cf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:Uf,equirect_frag:If,linedashed_vert:Nf,linedashed_frag:Ff,meshbasic_vert:Of,meshbasic_frag:zf,meshlambert_vert:Bf,meshlambert_frag:Gf,meshmatcap_vert:Hf,meshmatcap_frag:kf,meshnormal_vert:Vf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:jf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:Kf,meshtoon_frag:$f,points_vert:Zf,points_frag:Jf,shadow_vert:Qf,shadow_frag:ep,sprite_vert:tp,sprite_frag:np},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ut([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ut([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ut([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ut([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ut([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ut([Ae.points,Ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ut([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ut([Ae.common,Ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ut([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ut([Ae.sprite,Ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ut([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ut([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Lr={r:0,b:0,g:0};function ip(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jr)?(h===void 0&&(h=new Dt(new oi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dt(new ta(2,2),new nn({name:"BackgroundMaterial",uniforms:Bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(Lr,Vl(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function rp(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(P,F,G,Z,X){let K=!1;if(o){const Y=_(Z,G,F);c!==Y&&(c=Y,m(c.object)),K=u(P,Z,G,X),K&&y(P,Z,G,X)}else{const Y=F.wireframe===!0;(c.geometry!==Z.id||c.program!==G.id||c.wireframe!==Y)&&(c.geometry=Z.id,c.program=G.id,c.wireframe=Y,K=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,U(P,F,G,Z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,F,G){const Z=G.wireframe===!0;let X=a[P.id];X===void 0&&(X={},a[P.id]=X);let K=X[F.id];K===void 0&&(K={},X[F.id]=K);let Y=K[Z];return Y===void 0&&(Y=p(f()),K[Z]=Y),Y}function p(P){const F=[],G=[],Z=[];for(let X=0;X<r;X++)F[X]=0,G[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:Z,object:P,attributes:{},index:null}}function u(P,F,G,Z){const X=c.attributes,K=F.attributes;let Y=0;const J=G.getAttributes();for(const ee in J)if(J[ee].location>=0){const ne=X[ee];let Q=K[ee];if(Q===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),ne===void 0||ne.attribute!==Q||Q&&ne.data!==Q.data)return!0;Y++}return c.attributesNum!==Y||c.index!==Z}function y(P,F,G,Z){const X={},K=F.attributes;let Y=0;const J=G.getAttributes();for(const ee in J)if(J[ee].location>=0){let ne=K[ee];ne===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const Q={};Q.attribute=ne,ne&&ne.data&&(Q.data=ne.data),X[ee]=Q,Y++}c.attributes=X,c.attributesNum=Y,c.index=Z}function v(){const P=c.newAttributes;for(let F=0,G=P.length;F<G;F++)P[F]=0}function T(P){M(P,0)}function M(P,F){const G=c.newAttributes,Z=c.enabledAttributes,X=c.attributeDivisors;G[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),X[P]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),X[P]=F)}function E(){const P=c.newAttributes,F=c.enabledAttributes;for(let G=0,Z=F.length;G<Z;G++)F[G]!==P[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function b(P,F,G,Z,X,K,Y){Y===!0?n.vertexAttribIPointer(P,F,G,X,K):n.vertexAttribPointer(P,F,G,Z,X,K)}function U(P,F,G,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=Z.attributes,K=G.getAttributes(),Y=F.defaultAttributeValues;for(const J in K){const ee=K[J];if(ee.location>=0){let H=X[J];if(H===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const ne=H.normalized,Q=H.itemSize,ce=t.get(H);if(ce===void 0)continue;const ge=ce.buffer,ye=ce.type,we=ce.bytesPerElement,be=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||H.gpuType===wl);if(H.isInterleavedBufferAttribute){const ze=H.data,k=ze.stride,je=H.offset;if(ze.isInstancedInterleavedBuffer){for(let ve=0;ve<ee.locationSize;ve++)M(ee.location+ve,ze.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ve=0;ve<ee.locationSize;ve++)T(ee.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ve=0;ve<ee.locationSize;ve++)b(ee.location+ve,Q/ee.locationSize,ye,ne,k*we,(je+Q/ee.locationSize*ve)*we,be)}else{if(H.isInstancedBufferAttribute){for(let ze=0;ze<ee.locationSize;ze++)M(ee.location+ze,H.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ze=0;ze<ee.locationSize;ze++)T(ee.location+ze);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ze=0;ze<ee.locationSize;ze++)b(ee.location+ze,Q/ee.locationSize,ye,ne,Q*we,Q/ee.locationSize*ze*we,be)}}else if(Y!==void 0){const ne=Y[J];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(ee.location,ne);break;case 3:n.vertexAttrib3fv(ee.location,ne);break;case 4:n.vertexAttrib4fv(ee.location,ne);break;default:n.vertexAttrib1fv(ee.location,ne)}}}}E()}function S(){O();for(const P in a){const F=a[P];for(const G in F){const Z=F[G];for(const X in Z)g(Z[X].object),delete Z[X];delete F[G]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const G in F){const Z=F[G];for(const X in Z)g(Z[X].object),delete Z[X];delete F[G]}delete a[P.id]}function z(P){for(const F in a){const G=a[F];if(G[P.id]===void 0)continue;const Z=G[P.id];for(const X in Z)g(Z[X].object),delete Z[X];delete G[P.id]}}function O(){W(),h=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:T,disableUnusedAttributes:E}}function sp(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ap(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||e.has("OES_texture_float"),M=v&&T,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:M,maxSamples:E}}function op(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:i,v=y*4;let T=u.clippingState||null;l.value=T,T=h(g,f,v,m);for(let M=0;M!==v;++M)T[M]=t[M];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,T=m;v!==_;++v,T+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function lp(n){let e=new WeakMap;function t(o,a){return a===zs?o.mapping=Fi:a===Bs&&(o.mapping=Oi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zs||a===Bs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cp extends Wl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,_o=[.125,.215,.35,.446,.526,.582],$n=20,Es=new cp,vo=new tt;let bs=null,Ts=0,As=0;const Yn=(1+Math.sqrt(5))/2,Li=1/Yn,xo=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Yn,Li),new N(0,Yn,-Li),new N(Li,0,Yn),new N(-Li,0,Yn),new N(Yn,Li,0),new N(-Yn,Li,0)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,Ts,As),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:nr,format:cn,colorSpace:mn,depthBuffer:!1},r=So(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(s)),this._blurMaterial=up(s,e,t)}return r}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(vo),h.toneMapping=Bn,h.autoClear=!1;const m=new Ji({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Dt(new oi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(vo),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Dr(r,y*v,u>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xo[(r-1)%xo.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):$n;p>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const u=[];let y=0;for(let b=0;b<$n;++b){const U=b/_,S=Math.exp(-U*U/2);u.push(S),b===0?y+=S:b<p&&(y+=2*S)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const T=this._sizeLods[r],M=3*T*(r>v-Di?r-v+Di:0),E=4*(this._cubeSize-T);Dr(t,M,E,3*T,2*T),l.setRenderTarget(t),l.render(d,Es)}}function hp(n){const e=[],t=[],i=[];let r=n;const s=n-Di+1+_o.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Di?l=_o[o-n+Di-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let E=0;E<m;E++){const b=E%3*2/3-1,U=E>2?0:-1,S=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];y.set(S,_*g*E),v.set(f,p*g*E);const w=[E,E,E,E,E,E];T.set(w,u*g*E)}const M=new _t;M.setAttribute("position",new Rt(y,_)),M.setAttribute("uv",new Rt(v,p)),M.setAttribute("faceIndex",new Rt(T,u)),e.push(M),r>Di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function So(n,e,t){const i=new si(n,e,t);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function up(n,e,t){const i=new Float32Array($n),r=new N(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:na(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function yo(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Eo(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function dp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zs||l===Bs,h=l===Fi||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Mo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Mo(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pp(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,T=y.length;v<T;v+=3){const M=y[v+0],E=y[v+1],b=y[v+2];f.push(M,E,E,b,b,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,T=y.length/3-1;v<T;v+=3){const M=v+0,E=v+1,b=v+2;f.push(M,E,E,b,b,M)}}else return;const p=new(Fl(f)?kl:Hl)(f,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function mp(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function gp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _p(n,e){return n[0]-e[0]}function vp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xp(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let P=function(){O.dispose(),s.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let U=0;y===!0&&(U=1),v===!0&&(U=2),T===!0&&(U=3);let S=h.attributes.position.count*U,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const z=new Float32Array(S*w*4*g),O=new Bl(z,S,w,g);O.type=On,O.needsUpdate=!0;const W=U*4;for(let F=0;F<g;F++){const G=M[F],Z=E[F],X=b[F],K=S*w*4*F;for(let Y=0;Y<G.count;Y++){const J=Y*W;y===!0&&(o.fromBufferAttribute(G,Y),z[K+J+0]=o.x,z[K+J+1]=o.y,z[K+J+2]=o.z,z[K+J+3]=0),v===!0&&(o.fromBufferAttribute(Z,Y),z[K+J+4]=o.x,z[K+J+5]=o.y,z[K+J+6]=o.z,z[K+J+7]=0),T===!0&&(o.fromBufferAttribute(X,Y),z[K+J+8]=o.x,z[K+J+9]=o.y,z[K+J+10]=o.z,z[K+J+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new Ke(S,w)},s.set(h,_),h.addEventListener("dispose",P)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){const T=g[v];T[0]=v,T[1]=f[v]}g.sort(vp);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(_p);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const T=a[v],M=T[0],E=T[1];M!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+v)!==_[M]&&h.setAttribute("morphTarget"+v,_[M]),p&&h.getAttribute("morphNormal"+v)!==p[M]&&h.setAttribute("morphNormal"+v,p[M]),r[v]=E,u+=E):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Mp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Yl extends kt{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:ii,h!==ii&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ii&&(i=Fn),i===void 0&&h===zi&&(i=ni),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kl=new kt,$l=new Yl(1,1);$l.compareFunction=Nl;const Zl=new Bl,Jl=new nu,Ql=new Xl,bo=[],To=[],Ao=new Float32Array(16),wo=new Float32Array(9),Ro=new Float32Array(4);function Hi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bo[r];if(s===void 0&&(s=new Float32Array(r),bo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kr(n,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ro.set(i),n.uniformMatrix2fv(this.addr,!1,Ro),xt(t,i)}}function Ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;wo.set(i),n.uniformMatrix3fv(this.addr,!1,wo),xt(t,i)}}function wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ao.set(i),n.uniformMatrix4fv(this.addr,!1,Ao),xt(t,i)}}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Dp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?$l:Kl;t.setTexture2D(e||s,r)}function Op(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jl,r)}function zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ql,r)}function Bp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zl,r)}function Gp(n){switch(n){case 5126:return Sp;case 35664:return yp;case 35665:return Ep;case 35666:return bp;case 35674:return Tp;case 35675:return Ap;case 35676:return wp;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Up;case 36295:return Ip;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Bp}}function Hp(n,e){n.uniform1fv(this.addr,e)}function kp(n,e){const t=Hi(e,this.size,2);n.uniform2fv(this.addr,t)}function Vp(n,e){const t=Hi(e,this.size,3);n.uniform3fv(this.addr,t)}function Wp(n,e){const t=Hi(e,this.size,4);n.uniform4fv(this.addr,t)}function Xp(n,e){const t=Hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jp(n,e){const t=Hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qp(n,e){const t=Hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yp(n,e){n.uniform1iv(this.addr,e)}function Kp(n,e){n.uniform2iv(this.addr,e)}function $p(n,e){n.uniform3iv(this.addr,e)}function Zp(n,e){n.uniform4iv(this.addr,e)}function Jp(n,e){n.uniform1uiv(this.addr,e)}function Qp(n,e){n.uniform2uiv(this.addr,e)}function em(n,e){n.uniform3uiv(this.addr,e)}function tm(n,e){n.uniform4uiv(this.addr,e)}function nm(n,e,t){const i=this.cache,r=e.length,s=Kr(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Kl,s[o])}function im(n,e,t){const i=this.cache,r=e.length,s=Kr(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jl,s[o])}function rm(n,e,t){const i=this.cache,r=e.length,s=Kr(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ql,s[o])}function sm(n,e,t){const i=this.cache,r=e.length,s=Kr(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zl,s[o])}function am(n){switch(n){case 5126:return Hp;case 35664:return kp;case 35665:return Vp;case 35666:return Wp;case 35674:return Xp;case 35675:return jp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Kp;case 35668:case 35672:return $p;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}}class lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=am(t.type)}}class cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ws=/(\w+)(\])?(\[|\.)?/g;function Co(n,e){n.seq.push(e),n.map[e.id]=e}function hm(n,e,t){const i=n.name,r=i.length;for(ws.lastIndex=0;;){const s=ws.exec(i),o=ws.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Co(t,c===void 0?new om(a,n,e):new lm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new cm(a),Co(t,d)),t=d}}}class Br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Po(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const um=37297;let dm=0;function fm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pm(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Vr&&t===kr?i="LinearDisplayP3ToLinearSRGB":e===kr&&t===Vr&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case qr:return[i,"LinearTransferOETF"];case Tt:case Qs:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fm(n.getShaderSource(e),o)}else return r}function mm(n,e){const t=pm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gm(n,e){let t;switch(e){case Eh:t="Linear";break;case bh:t="Reinhard";break;case Th:t="OptimizedCineon";break;case Ah:t="ACESFilmic";break;case Rh:t="AgX";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _m(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function xm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ui(n){return n!==""}function Do(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(n){return n.replace(Sm,Em)}const ym=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Em(n,e){let t=$e[e];if(t===void 0){const i=ym.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xs(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(n){return n.replace(bm,Tm)}function Tm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Am(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Oi&&(e="ENVMAP_MODE_REFRACTION"),e}function Cm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case yh:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Am(t),c=wm(t),h=Rm(t),d=Cm(t),f=Pm(t),m=t.isWebGL2?"":_m(t),g=vm(t),_=xm(s),p=r.createProgram();let u,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ui).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ui).join(`
`),y.length>0&&(y+=`
`)):(u=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),y=[m,No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Bn?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=Xs(o),o=Do(o,t),o=Uo(o,t),a=Xs(a),a=Do(a,t),a=Uo(a,t),o=Io(o),a=Io(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=v+u+o,M=v+y+a,E=Po(r,r.VERTEX_SHADER,T),b=Po(r,r.FRAGMENT_SHADER,M);r.attachShader(p,E),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(O){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(E).trim(),F=r.getShaderInfoLog(b).trim();let G=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,E,b);else{const X=Lo(r,E,"vertex"),K=Lo(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+X+`
`+K)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||F==="")&&(Z=!1);Z&&(O.diagnostics={runnable:G,programLog:W,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:y}})}r.deleteShader(E),r.deleteShader(b),S=new Br(r,p),w=Mm(r,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,um)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let Dm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Im(e),t.set(e,i)),i}}class Im{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Nm(n,e,t,i,r,s,o){const a=new ea,l=new Um,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,z,O,W){const P=O.fog,F=W.geometry,G=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),X=Z&&Z.mapping===jr?Z.image.height:null,K=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=Y!==void 0?Y.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let H,ne,Q,ce;if(K){const st=fn[K];H=st.vertexShader,ne=st.fragmentShader}else H=S.vertexShader,ne=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const ge=n.getRenderTarget(),ye=W.isInstancedMesh===!0,we=W.isBatchedMesh===!0,be=!!S.map,ze=!!S.matcap,k=!!Z,je=!!S.aoMap,ve=!!S.lightMap,Te=!!S.bumpMap,Se=!!S.normalMap,Ue=!!S.displacementMap,Ee=!!S.emissiveMap,A=!!S.metalnessMap,x=!!S.roughnessMap,B=S.anisotropy>0,oe=S.clearcoat>0,ae=S.iridescence>0,re=S.sheen>0,xe=S.transmission>0,pe=B&&!!S.anisotropyMap,Me=oe&&!!S.clearcoatMap,Re=oe&&!!S.clearcoatNormalMap,Ie=oe&&!!S.clearcoatRoughnessMap,le=ae&&!!S.iridescenceMap,Be=ae&&!!S.iridescenceThicknessMap,C=re&&!!S.sheenColorMap,se=re&&!!S.sheenRoughnessMap,de=!!S.specularMap,D=!!S.specularColorMap,te=!!S.specularIntensityMap,he=xe&&!!S.transmissionMap,Pe=xe&&!!S.thicknessMap,Le=!!S.gradientMap,ue=!!S.alphaMap,L=S.alphaTest>0,me=!!S.alphaHash,_e=!!S.extensions,Ne=!!F.attributes.uv1,De=!!F.attributes.uv2,We=!!F.attributes.uv3;let He=Bn;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(He=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:ne,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:we,instancing:ye,instancingColor:ye&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mn,map:be,matcap:ze,envMap:k,envMapMode:k&&Z.mapping,envMapCubeUVHeight:X,aoMap:je,lightMap:ve,bumpMap:Te,normalMap:Se,displacementMap:f&&Ue,emissiveMap:Ee,normalMapObjectSpace:Se&&S.normalMapType===Hh,normalMapTangentSpace:Se&&S.normalMapType===Gh,metalnessMap:A,roughnessMap:x,anisotropy:B,anisotropyMap:pe,clearcoat:oe,clearcoatMap:Me,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,iridescence:ae,iridescenceMap:le,iridescenceThicknessMap:Be,sheen:re,sheenColorMap:C,sheenRoughnessMap:se,specularMap:de,specularColorMap:D,specularIntensityMap:te,transmission:xe,transmissionMap:he,thicknessMap:Pe,gradientMap:Le,opaque:S.transparent===!1&&S.blending===Ii,alphaMap:ue,alphaTest:L,alphaHash:me,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:je&&_(S.aoMap.channel),lightMapUv:ve&&_(S.lightMap.channel),bumpMapUv:Te&&_(S.bumpMap.channel),normalMapUv:Se&&_(S.normalMap.channel),displacementMapUv:Ue&&_(S.displacementMap.channel),emissiveMapUv:Ee&&_(S.emissiveMap.channel),metalnessMapUv:A&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:pe&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(S.sheenRoughnessMap.channel),specularMapUv:de&&_(S.specularMap.channel),specularColorMapUv:D&&_(S.specularColorMap.channel),specularIntensityMapUv:te&&_(S.specularIntensityMap.channel),transmissionMapUv:he&&_(S.transmissionMap.channel),thicknessMapUv:Pe&&_(S.thicknessMap.channel),alphaMapUv:ue&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:De,vertexUv3s:We,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(be||ue),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:_e&&S.extensions.derivatives===!0,extensionFragDepth:_e&&S.extensions.fragDepth===!0,extensionDrawBuffers:_e&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(y(w,S),v(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function T(S){const w=g[S.type];let z;if(w){const O=fn[w];z=mu.clone(O.uniforms)}else z=S.uniforms;return z}function M(S,w){let z;for(let O=0,W=c.length;O<W;O++){const P=c[O];if(P.cacheKey===w){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Lm(n,w,S,s),c.push(z)),z}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:U}}function Fm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Om),i.length>1&&i.sort(f||Fo),r.length>1&&r.sort(f||Fo)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function zm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Oo,n.set(i,[o])):r>=s.length?(o=new Oo,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new tt};break;case"SpotLight":t={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Gm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hm=0;function km(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vm(n,e){const t=new Bm,i=Gm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);const s=new N,o=new gt,a=new gt;function l(h,d){let f=0,m=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,p=0,u=0,y=0,v=0,T=0,M=0,E=0,b=0,U=0,S=0;h.sort(km);const w=d===!0?Math.PI:1;for(let O=0,W=h.length;O<W;O++){const P=h[O],F=P.color,G=P.intensity,Z=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*G*w,m+=F.g*G*w,g+=F.b*G*w;else if(P.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(P.sh.coefficients[K],G);S++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const Y=P.shadow,J=i.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=P.shadow.matrix,T++}r.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar(G*w),K.distance=Z,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,r.spot[u]=K;const Y=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[u]=Y.matrix,P.castShadow){const J=i.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=X,E++}u++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(F).multiplyScalar(G),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=K,y++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*w),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Y=P.shadow,J=i.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=P.shadow.matrix,M++}r.point[p]=K,p++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(G*w),K.groundColor.copy(P.groundColor).multiplyScalar(G*w),r.hemi[v]=K,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const z=r.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==T||z.numPointShadows!==M||z.numSpotShadows!==E||z.numSpotMaps!==b||z.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=S,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=T,z.numPointShadows=M,z.numSpotShadows=E,z.numSpotMaps=b,z.numLightProbes=S,r.version=Hm++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const T=h[y];if(T.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),f++}else if(T.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),g++}else if(T.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function zo(n,e){const t=new Vm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wm(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zo(n,e),t.set(s,[l])):o>=a.length?(l=new zo(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xm extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jm extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function Km(n,e,t){let i=new jl;const r=new Ke,s=new Ke,o=new wt,a=new Xm({depthPacking:Bh}),l=new jm,c={},h=t.maxTextureSize,d={[Hn]:Ft,[Ft]:Hn,[Yt]:Yt},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let u=this.type;this.render=function(E,b,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=u!==bn&&this.type===bn,P=u===bn&&this.type!==bn;for(let F=0,G=E.length;F<G;F++){const Z=E[F],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const K=X.getFrameExtents();if(r.multiply(K),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,X.mapSize.y=s.y)),X.map===null||W===!0||P===!0){const J=this.type!==bn?{minFilter:It,magFilter:It}:{};X.map!==null&&X.map.dispose(),X.map=new si(r.x,r.y,J),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Y=X.getViewportCount();for(let J=0;J<Y;J++){const ee=X.getViewport(J);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),O.viewport(o),X.updateMatrices(Z,J),i=X.getFrustum(),T(b,U,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===bn&&y(X,U),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,w,z)};function y(E,b){const U=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,U,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,U,m,_,null)}function v(E,b,U,S){let w=null;const z=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)w=z;else if(w=U.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=w.uuid,W=b.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let F=P[W];F===void 0&&(F=w.clone(),P[W]=F,b.addEventListener("dispose",M)),w=F}if(w.visible=b.visible,w.wireframe=b.wireframe,S===bn?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:d[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=n.properties.get(w);O.light=U}return w}function T(E,b,U,S,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===bn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const W=e.update(E),P=E.material;if(Array.isArray(P)){const F=W.groups;for(let G=0,Z=F.length;G<Z;G++){const X=F[G],K=P[X.materialIndex];if(K&&K.visible){const Y=v(E,K,S,w);E.onBeforeShadow(n,E,b,U,W,Y,X),n.renderBufferDirect(U,null,W,Y,E,X),E.onAfterShadow(n,E,b,U,W,Y,X)}}}else if(P.visible){const F=v(E,P,S,w);E.onBeforeShadow(n,E,b,U,W,F,null),n.renderBufferDirect(U,null,W,F,E,null),E.onAfterShadow(n,E,b,U,W,F,null)}}const O=E.children;for(let W=0,P=O.length;W<P;W++)T(O[W],b,U,S,w)}function M(E){E.target.removeEventListener("dispose",M);for(const U in c){const S=c[U],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function $m(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const me=new wt;let _e=null;const Ne=new wt(0,0,0,0);return{setMask:function(De){_e!==De&&!L&&(n.colorMask(De,De,De,De),_e=De)},setLocked:function(De){L=De},setClear:function(De,We,He,Qe,st){st===!0&&(De*=Qe,We*=Qe,He*=Qe),me.set(De,We,He,Qe),Ne.equals(me)===!1&&(n.clearColor(De,We,He,Qe),Ne.copy(me))},reset:function(){L=!1,_e=null,Ne.set(-1,0,0,0)}}}function s(){let L=!1,me=null,_e=null,Ne=null;return{setTest:function(De){De?we(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(De){me!==De&&!L&&(n.depthMask(De),me=De)},setFunc:function(De){if(_e!==De){switch(De){case ph:n.depthFunc(n.NEVER);break;case mh:n.depthFunc(n.ALWAYS);break;case gh:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case _h:n.depthFunc(n.EQUAL);break;case vh:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case Mh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=De}},setLocked:function(De){L=De},setClear:function(De){Ne!==De&&(n.clearDepth(De),Ne=De)},reset:function(){L=!1,me=null,_e=null,Ne=null}}}function o(){let L=!1,me=null,_e=null,Ne=null,De=null,We=null,He=null,Qe=null,st=null;return{setTest:function(fe){L||(fe?we(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(fe){me!==fe&&!L&&(n.stencilMask(fe),me=fe)},setFunc:function(fe,Je,it){(_e!==fe||Ne!==Je||De!==it)&&(n.stencilFunc(fe,Je,it),_e=fe,Ne=Je,De=it)},setOp:function(fe,Je,it){(We!==fe||He!==Je||Qe!==it)&&(n.stencilOp(fe,Je,it),We=fe,He=Je,Qe=it)},setLocked:function(fe){L=fe},setClear:function(fe){st!==fe&&(n.clearStencil(fe),st=fe)},reset:function(){L=!1,me=null,_e=null,Ne=null,De=null,We=null,He=null,Qe=null,st=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,T=null,M=null,E=null,b=null,U=null,S=new tt(0,0,0),w=0,z=!1,O=null,W=null,P=null,F=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=K>=2);let J=null,ee={};const H=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Q=new wt().fromArray(H),ce=new wt().fromArray(ne);function ge(L,me,_e,Ne){const De=new Uint8Array(4),We=n.createTexture();n.bindTexture(L,We),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<_e;He++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(me+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return We}const ye={};ye[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(n.DEPTH_TEST),l.setFunc(Gr),Ee(!1),A(va),we(n.CULL_FACE),Se(zn);function we(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function be(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function ze(L,me){return m[L]!==me?(n.bindFramebuffer(L,me),m[L]=me,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function k(L,me){let _e=_,Ne=!1;if(L)if(_e=g.get(me),_e===void 0&&(_e=[],g.set(me,_e)),L.isWebGLMultipleRenderTargets){const De=L.texture;if(_e.length!==De.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let We=0,He=De.length;We<He;We++)_e[We]=n.COLOR_ATTACHMENT0+We;_e.length=De.length,Ne=!0}}else _e[0]!==n.COLOR_ATTACHMENT0&&(_e[0]=n.COLOR_ATTACHMENT0,Ne=!0);else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ne=!0);Ne&&(t.isWebGL2?n.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function je(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const ve={[Kn]:n.FUNC_ADD,[Qc]:n.FUNC_SUBTRACT,[eh]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[ya]=n.MIN,ve[Ea]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[ya]=L.MIN_EXT,ve[Ea]=L.MAX_EXT)}const Te={[th]:n.ZERO,[nh]:n.ONE,[ih]:n.SRC_COLOR,[Fs]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[sh]:n.DST_ALPHA,[rh]:n.ONE_MINUS_SRC_COLOR,[Os]:n.ONE_MINUS_SRC_ALPHA,[lh]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[hh]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[fh]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(L,me,_e,Ne,De,We,He,Qe,st,fe){if(L===zn){u===!0&&(be(n.BLEND),u=!1);return}if(u===!1&&(we(n.BLEND),u=!0),L!==Jc){if(L!==y||fe!==z){if((v!==Kn||E!==Kn)&&(n.blendEquation(n.FUNC_ADD),v=Kn,E=Kn),fe)switch(L){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFunc(n.ONE,n.ONE);break;case Ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,M=null,b=null,U=null,S.set(0,0,0),w=0,y=L,z=fe}return}De=De||me,We=We||_e,He=He||Ne,(me!==v||De!==E)&&(n.blendEquationSeparate(ve[me],ve[De]),v=me,E=De),(_e!==T||Ne!==M||We!==b||He!==U)&&(n.blendFuncSeparate(Te[_e],Te[Ne],Te[We],Te[He]),T=_e,M=Ne,b=We,U=He),(Qe.equals(S)===!1||st!==w)&&(n.blendColor(Qe.r,Qe.g,Qe.b,st),S.copy(Qe),w=st),y=L,z=!1}function Ue(L,me){L.side===Yt?be(n.CULL_FACE):we(n.CULL_FACE);let _e=L.side===Ft;me&&(_e=!_e),Ee(_e),L.blending===Ii&&L.transparent===!1?Se(zn):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ne=L.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function A(L){L!==Kc?(we(n.CULL_FACE),L!==W&&(L===va?n.cullFace(n.BACK):L===$c?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),W=L}function x(L){L!==P&&(X&&n.lineWidth(L),P=L)}function B(L,me,_e){L?(we(n.POLYGON_OFFSET_FILL),(F!==me||G!==_e)&&(n.polygonOffset(me,_e),F=me,G=_e)):be(n.POLYGON_OFFSET_FILL)}function oe(L){L?we(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function ae(L){L===void 0&&(L=n.TEXTURE0+Z-1),J!==L&&(n.activeTexture(L),J=L)}function re(L,me,_e){_e===void 0&&(J===null?_e=n.TEXTURE0+Z-1:_e=J);let Ne=ee[_e];Ne===void 0&&(Ne={type:void 0,texture:void 0},ee[_e]=Ne),(Ne.type!==L||Ne.texture!==me)&&(J!==_e&&(n.activeTexture(_e),J=_e),n.bindTexture(L,me||ye[L]),Ne.type=L,Ne.texture=me)}function xe(){const L=ee[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(L){Q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function he(L){ce.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function Pe(L,me){let _e=d.get(me);_e===void 0&&(_e=new WeakMap,d.set(me,_e));let Ne=_e.get(L);Ne===void 0&&(Ne=n.getUniformBlockIndex(me,L.name),_e.set(L,Ne))}function Le(L,me){const Ne=d.get(me).get(L);h.get(me)!==Ne&&(n.uniformBlockBinding(me,Ne,L.__bindingPointIndex),h.set(me,Ne))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,ee={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,T=null,M=null,E=null,b=null,U=null,S=new tt(0,0,0),w=0,z=!1,O=null,W=null,P=null,F=null,G=null,Q.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:be,bindFramebuffer:ze,drawBuffers:k,useProgram:je,setBlending:Se,setMaterial:Ue,setFlipSided:Ee,setCullFace:A,setLineWidth:x,setPolygonOffset:B,setScissorTest:oe,activeTexture:ae,bindTexture:re,unbindTexture:xe,compressedTexImage2D:pe,compressedTexImage3D:Me,texImage2D:de,texImage3D:D,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:C,texStorage3D:se,texSubImage2D:Re,texSubImage3D:Ie,compressedTexSubImage2D:le,compressedTexSubImage3D:Be,scissor:te,viewport:he,reset:ue}}function Zm(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):ir("canvas")}function _(A,x,B,oe){let ae=1;if((A.width>oe||A.height>oe)&&(ae=oe/Math.max(A.width,A.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=x?Ws:Math.floor,xe=re(ae*A.width),pe=re(ae*A.height);d===void 0&&(d=g(xe,pe));const Me=B?g(xe,pe):d;return Me.width=xe,Me.height=pe,Me.getContext("2d").drawImage(A,0,0,xe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+pe+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Qa(A.width)&&Qa(A.height)}function u(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==It&&A.minFilter!==Qt}function y(A,x){return A.generateMipmaps&&x&&A.minFilter!==It&&A.minFilter!==Qt}function v(A){n.generateMipmap(A)}function T(A,x,B,oe,ae=!1){if(a===!1)return x;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=x;if(x===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),x===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),x===n.RGBA){const xe=ae?Hr:nt.getTransfer(oe);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=xe===ct?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(A,x,B){return y(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){return A===It||A===ba||A===Qr?n.NEAREST:n.LINEAR}function b(A){const x=A.target;x.removeEventListener("dispose",b),S(x),x.isVideoTexture&&h.delete(x)}function U(A){const x=A.target;x.removeEventListener("dispose",U),z(x)}function S(A){const x=i.get(A);if(x.__webglInit===void 0)return;const B=A.source,oe=f.get(B);if(oe){const ae=oe[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(A),Object.keys(oe).length===0&&f.delete(B)}i.remove(A)}function w(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const B=A.source,oe=f.get(B);delete oe[x.__cacheKey],o.memory.textures--}function z(A){const x=A.texture,B=i.get(A),oe=i.get(x);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(B.__webglFramebuffer[ae]))for(let re=0;re<B.__webglFramebuffer[ae].length;re++)n.deleteFramebuffer(B.__webglFramebuffer[ae][re]);else n.deleteFramebuffer(B.__webglFramebuffer[ae]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ae])}else{if(Array.isArray(B.__webglFramebuffer))for(let ae=0;ae<B.__webglFramebuffer.length;ae++)n.deleteFramebuffer(B.__webglFramebuffer[ae]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ae=0;ae<B.__webglColorRenderbuffer.length;ae++)B.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ae]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,re=x.length;ae<re;ae++){const xe=i.get(x[ae]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(x[ae])}i.remove(x),i.remove(A)}let O=0;function W(){O=0}function P(){const A=O;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function F(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function G(A,x){const B=i.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const oe=A.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,x);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function Z(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function X(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function K(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ce(B,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const Y={[Gs]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Hs]:n.MIRRORED_REPEAT},J={[It]:n.NEAREST,[ba]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Ch]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},ee={[kh]:n.NEVER,[Yh]:n.ALWAYS,[Vh]:n.LESS,[Nl]:n.LEQUAL,[Wh]:n.EQUAL,[qh]:n.GEQUAL,[Xh]:n.GREATER,[jh]:n.NOTEQUAL};function H(A,x,B){if(B?(n.texParameteri(A,n.TEXTURE_WRAP_S,Y[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Y[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Y[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,J[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,J[x.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==ln||x.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,E(x.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,E(x.minFilter)),x.minFilter!==It&&x.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===It||x.minFilter!==Qr&&x.minFilter!==tr||x.type===On&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(A,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ne(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",b));const oe=x.source;let ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));const re=F(x);if(re!==A.__cacheKey){ae[re]===void 0&&(ae[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ae[re].usedTimes++;const xe=ae[A.__cacheKey];xe!==void 0&&(ae[A.__cacheKey].usedTimes--,xe.usedTimes===0&&w(x)),A.__cacheKey=re,A.__webglTexture=ae[re].texture}return B}function Q(A,x,B){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);const ae=ne(A,x),re=x.source;t.bindTexture(oe,A.__webglTexture,n.TEXTURE0+B);const xe=i.get(re);if(re.version!==xe.__version||ae===!0){t.activeTexture(n.TEXTURE0+B);const pe=nt.getPrimaries(nt.workingColorSpace),Me=x.colorSpace===tn?null:nt.getPrimaries(x.colorSpace),Re=x.colorSpace===tn||pe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=u(x)&&p(x.image)===!1;let le=_(x.image,Ie,!1,r.maxTextureSize);le=Ee(x,le);const Be=p(le)||a,C=s.convert(x.format,x.colorSpace);let se=s.convert(x.type),de=T(x.internalFormat,C,se,x.colorSpace,x.isVideoTexture);H(oe,x,Be);let D;const te=x.mipmaps,he=a&&x.isVideoTexture!==!0&&de!==Ul,Pe=xe.__version===void 0||ae===!0,Le=M(x,le,Be);if(x.isDepthTexture)de=n.DEPTH_COMPONENT,a?x.type===On?de=n.DEPTH_COMPONENT32F:x.type===Fn?de=n.DEPTH_COMPONENT24:x.type===ni?de=n.DEPTH24_STENCIL8:de=n.DEPTH_COMPONENT16:x.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ii&&de===n.DEPTH_COMPONENT&&x.type!==Js&&x.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Fn,se=s.convert(x.type)),x.format===zi&&de===n.DEPTH_COMPONENT&&(de=n.DEPTH_STENCIL,x.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ni,se=s.convert(x.type))),Pe&&(he?t.texStorage2D(n.TEXTURE_2D,1,de,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,de,le.width,le.height,0,C,se,null));else if(x.isDataTexture)if(te.length>0&&Be){he&&Pe&&t.texStorage2D(n.TEXTURE_2D,Le,de,te[0].width,te[0].height);for(let ue=0,L=te.length;ue<L;ue++)D=te[ue],he?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,D.width,D.height,C,se,D.data):t.texImage2D(n.TEXTURE_2D,ue,de,D.width,D.height,0,C,se,D.data);x.generateMipmaps=!1}else he?(Pe&&t.texStorage2D(n.TEXTURE_2D,Le,de,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,C,se,le.data)):t.texImage2D(n.TEXTURE_2D,0,de,le.width,le.height,0,C,se,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){he&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,de,te[0].width,te[0].height,le.depth);for(let ue=0,L=te.length;ue<L;ue++)D=te[ue],x.format!==cn?C!==null?he?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,D.width,D.height,le.depth,C,D.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,de,D.width,D.height,le.depth,0,D.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,D.width,D.height,le.depth,C,se,D.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,de,D.width,D.height,le.depth,0,C,se,D.data)}else{he&&Pe&&t.texStorage2D(n.TEXTURE_2D,Le,de,te[0].width,te[0].height);for(let ue=0,L=te.length;ue<L;ue++)D=te[ue],x.format!==cn?C!==null?he?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,D.width,D.height,C,D.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,de,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,D.width,D.height,C,se,D.data):t.texImage2D(n.TEXTURE_2D,ue,de,D.width,D.height,0,C,se,D.data)}else if(x.isDataArrayTexture)he?(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,de,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,C,se,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,le.width,le.height,le.depth,0,C,se,le.data);else if(x.isData3DTexture)he?(Pe&&t.texStorage3D(n.TEXTURE_3D,Le,de,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,C,se,le.data)):t.texImage3D(n.TEXTURE_3D,0,de,le.width,le.height,le.depth,0,C,se,le.data);else if(x.isFramebufferTexture){if(Pe)if(he)t.texStorage2D(n.TEXTURE_2D,Le,de,le.width,le.height);else{let ue=le.width,L=le.height;for(let me=0;me<Le;me++)t.texImage2D(n.TEXTURE_2D,me,de,ue,L,0,C,se,null),ue>>=1,L>>=1}}else if(te.length>0&&Be){he&&Pe&&t.texStorage2D(n.TEXTURE_2D,Le,de,te[0].width,te[0].height);for(let ue=0,L=te.length;ue<L;ue++)D=te[ue],he?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,C,se,D):t.texImage2D(n.TEXTURE_2D,ue,de,C,se,D);x.generateMipmaps=!1}else he?(Pe&&t.texStorage2D(n.TEXTURE_2D,Le,de,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,C,se,le)):t.texImage2D(n.TEXTURE_2D,0,de,C,se,le);y(x,Be)&&v(oe),xe.__version=re.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ce(A,x,B){if(x.image.length!==6)return;const oe=ne(A,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const re=i.get(ae);if(ae.version!==re.__version||oe===!0){t.activeTexture(n.TEXTURE0+B);const xe=nt.getPrimaries(nt.workingColorSpace),pe=x.colorSpace===tn?null:nt.getPrimaries(x.colorSpace),Me=x.colorSpace===tn||xe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,le=[];for(let ue=0;ue<6;ue++)!Re&&!Ie?le[ue]=_(x.image[ue],!1,!0,r.maxCubemapSize):le[ue]=Ie?x.image[ue].image:x.image[ue],le[ue]=Ee(x,le[ue]);const Be=le[0],C=p(Be)||a,se=s.convert(x.format,x.colorSpace),de=s.convert(x.type),D=T(x.internalFormat,se,de,x.colorSpace),te=a&&x.isVideoTexture!==!0,he=re.__version===void 0||oe===!0;let Pe=M(x,Be,C);H(n.TEXTURE_CUBE_MAP,x,C);let Le;if(Re){te&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,D,Be.width,Be.height);for(let ue=0;ue<6;ue++){Le=le[ue].mipmaps;for(let L=0;L<Le.length;L++){const me=Le[L];x.format!==cn?se!==null?te?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,me.width,me.height,se,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,D,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,me.width,me.height,se,de,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,D,me.width,me.height,0,se,de,me.data)}}}else{Le=x.mipmaps,te&&he&&(Le.length>0&&Pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,D,le[0].width,le[0].height));for(let ue=0;ue<6;ue++)if(Ie){te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,le[ue].width,le[ue].height,se,de,le[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,D,le[ue].width,le[ue].height,0,se,de,le[ue].data);for(let L=0;L<Le.length;L++){const _e=Le[L].image[ue].image;te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,_e.width,_e.height,se,de,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,D,_e.width,_e.height,0,se,de,_e.data)}}else{te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,se,de,le[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,D,se,de,le[ue]);for(let L=0;L<Le.length;L++){const me=Le[L];te?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,se,de,me.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,D,se,de,me.image[ue])}}}y(x,C)&&v(n.TEXTURE_CUBE_MAP),re.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ge(A,x,B,oe,ae,re){const xe=s.convert(B.format,B.colorSpace),pe=s.convert(B.type),Me=T(B.internalFormat,xe,pe,B.colorSpace);if(!i.get(x).__hasExternalTextures){const Ie=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,re,Me,Ie,le,x.depth,0,xe,pe,null):t.texImage2D(ae,re,Me,Ie,le,0,xe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Se(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ae,i.get(B).__webglTexture,0,Te(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ae,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(A,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let oe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Se(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===On?oe=n.DEPTH_COMPONENT32F:ae.type===Fn&&(oe=n.DEPTH_COMPONENT24));const re=Te(x);Se(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,oe,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,oe,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const oe=Te(x);B&&Se(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,x.width,x.height):Se(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const oe=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<oe.length;ae++){const re=oe[ae],xe=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),Me=T(re.internalFormat,xe,pe,re.colorSpace),Re=Te(x);B&&Se(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Me,x.width,x.height):Se(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Me,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const oe=i.get(x.depthTexture).__webglTexture,ae=Te(x);if(x.depthTexture.format===ii)Se(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(x.depthTexture.format===zi)Se(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function be(A){const x=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]=n.createRenderbuffer(),ye(x.__webglDepthbuffer[oe],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ye(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,x,B){const oe=i.get(A);x!==void 0&&ge(oe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&be(A)}function k(A){const x=A.texture,B=i.get(A),oe=i.get(x);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,xe=p(A)||a;if(ae){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Me=0;Me<x.mipmaps.length;Me++)B.__webglFramebuffer[pe][Me]=n.createFramebuffer()}else B.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)B.__webglFramebuffer[pe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const pe=A.texture;for(let Me=0,Re=pe.length;Me<Re;Me++){const Ie=i.get(pe[Me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Se(A)===!1){const pe=re?x:[x];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];B.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Me]);const Ie=s.convert(Re.format,Re.colorSpace),le=s.convert(Re.type),Be=T(Re.internalFormat,Ie,le,Re.colorSpace,A.isXRRenderTarget===!0),C=Te(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,C,Be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,B.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),H(n.TEXTURE_CUBE_MAP,x,xe);for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)ge(B.__webglFramebuffer[pe][Me],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else ge(B.__webglFramebuffer[pe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(x,xe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=A.texture;for(let Me=0,Re=pe.length;Me<Re;Me++){const Ie=pe[Me],le=i.get(Ie);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),H(n.TEXTURE_2D,Ie,xe),ge(B.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),y(Ie,xe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,oe.__webglTexture),H(pe,x,xe),a&&x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)ge(B.__webglFramebuffer[Me],A,x,n.COLOR_ATTACHMENT0,pe,Me);else ge(B.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,pe,0);y(x,xe)&&v(pe),t.unbindTexture()}A.depthBuffer&&be(A)}function je(A){const x=p(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0,ae=B.length;oe<ae;oe++){const re=B[oe];if(y(re,x)){const xe=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(re).__webglTexture;t.bindTexture(xe,pe),v(xe),t.unbindTexture()}}}function ve(A){if(a&&A.samples>0&&Se(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,oe=A.height;let ae=n.COLOR_BUFFER_BIT;const re=[],xe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(A),Me=A.isWebGLMultipleRenderTargets===!0;if(Me)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){re.push(n.COLOR_ATTACHMENT0+Re),A.depthBuffer&&re.push(xe);const Ie=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ie===!1&&(A.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),Me){const le=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,B,oe,0,0,B,oe,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Ie=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Te(A){return Math.min(r.maxSamples,A.samples)}function Se(A){const x=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ee(A,x){const B=A.colorSpace,oe=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ks||B!==mn&&B!==tn&&(nt.getTransfer(B)===ct?a===!1?e.has("EXT_sRGB")===!0&&oe===cn?(A.format=ks,A.minFilter=Qt,A.generateMipmaps=!1):x=Ol.sRGBToLinear(x):(oe!==cn||ae!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=k,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Se}function Jm(n,e,t){const i=t.isWebGL2;function r(s,o=tn){let a;const l=nt.getTransfer(o);if(s===Gn)return n.UNSIGNED_BYTE;if(s===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ph)return n.BYTE;if(s===Lh)return n.SHORT;if(s===Js)return n.UNSIGNED_SHORT;if(s===wl)return n.INT;if(s===Fn)return n.UNSIGNED_INT;if(s===On)return n.FLOAT;if(s===nr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dh)return n.ALPHA;if(s===cn)return n.RGBA;if(s===Uh)return n.LUMINANCE;if(s===Ih)return n.LUMINANCE_ALPHA;if(s===ii)return n.DEPTH_COMPONENT;if(s===zi)return n.DEPTH_STENCIL;if(s===ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nh)return n.RED;if(s===Pl)return n.RED_INTEGER;if(s===Fh)return n.RG;if(s===Ll)return n.RG_INTEGER;if(s===Dl)return n.RGBA_INTEGER;if(s===es||s===ts||s===ns||s===is)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ta||s===Aa||s===wa||s===Ra)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ul)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ca||s===Pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ca)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===La||s===Da||s===Ua||s===Ia||s===Na||s===Fa||s===Oa||s===za||s===Ba||s===Ga||s===Ha||s===ka||s===Va||s===Wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===La)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Da)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ua)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ia)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Na)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===za)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ba)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ga)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ha)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ka)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Va)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rs||s===Xa||s===ja)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rs)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Oh||s===qa||s===Ya||s===Ka)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ka)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Qm extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tg extends ci{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const y=[],v=[],T=new Ke;let M=null;const E=new en;E.layers.enable(1),E.viewport=new wt;const b=new en;b.layers.enable(2),b.viewport=new wt;const U=[E,b],S=new Qm;S.layers.enable(1),S.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ne=y[H];return ne===void 0&&(ne=new Rs,y[H]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(H){let ne=y[H];return ne===void 0&&(ne=new Rs,y[H]=ne),ne.getGripSpace()},this.getHand=function(H){let ne=y[H];return ne===void 0&&(ne=new Rs,y[H]=ne),ne.getHandSpace()};function O(H){const ne=v.indexOf(H.inputSource);if(ne===-1)return;const Q=y[ne];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||o),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",P);for(let H=0;H<y.length;H++){const ne=v[H];ne!==null&&(v[H]=null,y[H].disconnect(ne))}w=null,z=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new si(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,Q=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?zi:ii,Q=_.stencil?ni:Fn);const ge={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new si(f.textureWidth,f.textureHeight,{format:cn,type:Gn,depthTexture:new Yl(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(u);ye.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(H){for(let ne=0;ne<H.removed.length;ne++){const Q=H.removed[ne],ce=v.indexOf(Q);ce>=0&&(v[ce]=null,y[ce].disconnect(Q))}for(let ne=0;ne<H.added.length;ne++){const Q=H.added[ne];let ce=v.indexOf(Q);if(ce===-1){for(let ye=0;ye<y.length;ye++)if(ye>=v.length){v.push(Q),ce=ye;break}else if(v[ye]===null){v[ye]=Q,ce=ye;break}if(ce===-1)break}const ge=y[ce];ge&&ge.connect(Q)}}const F=new N,G=new N;function Z(H,ne,Q){F.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const ce=F.distanceTo(G),ge=ne.projectionMatrix.elements,ye=Q.projectionMatrix.elements,we=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),ze=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],ve=(ye[8]+1)/ye[0],Te=we*je,Se=we*ve,Ue=ce/(-je+ve),Ee=Ue*-je;ne.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ee),H.translateZ(Ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const A=we+Ue,x=be+Ue,B=Te-Ee,oe=Se+(ce-Ee),ae=ze*be/x*A,re=k*be/x*A;H.projectionMatrix.makePerspective(B,oe,ae,re,A,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,ne){ne===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ne.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.near=b.near=E.near=H.near,S.far=b.far=E.far=H.far,(w!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far);const ne=H.parent,Q=S.cameras;X(S,ne);for(let ce=0;ce<Q.length;ce++)X(Q[ce],ne);Q.length===2?Z(S,E,b):S.projectionMatrix.copy(E.projectionMatrix),K(H,S,ne)};function K(H,ne,Q){Q===null?H.matrix.copy(ne.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(ne.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ne.projectionMatrix),H.projectionMatrixInverse.copy(ne.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Y=null;function J(H,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const Q=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ce=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let ge=0;ge<Q.length;ge++){const ye=Q[ge];let we=null;if(m!==null)we=m.getViewport(ye);else{const ze=d.getViewSubImage(f,ye);we=ze.viewport,ge===0&&(e.setRenderTargetTextures(u,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(u))}let be=U[ge];be===void 0&&(be=new en,be.layers.enable(ge),be.viewport=new wt,U[ge]=be),be.matrix.fromArray(ye.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ye.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(be)}}for(let Q=0;Q<y.length;Q++){const ce=v[Q],ge=y[Q];ce!==null&&ge!==void 0&&ge.update(ce,ne,c||o)}Y&&Y(H,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ee=new ql;ee.setAnimationLoop(J),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function ng(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Vl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,y,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ft&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ft&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ig(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const T=v.program;i.uniformBlockBinding(y,T)}function c(y,v){let T=r[y.id];T===void 0&&(g(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(y,M);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function h(y){const v=d();y.__bindingPointIndex=v;const T=n.createBuffer(),M=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],T=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,b=T.length;E<b;E++){const U=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,w=U.length;S<w;S++){const z=U[S];if(m(z,E,S,M)===!0){const O=z.__offset,W=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let F=0;F<W.length;F++){const G=W[F],Z=_(G);typeof G=="number"||typeof G=="boolean"?(z.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+P,z.__data)):G.isMatrix3?(z.__data[0]=G.elements[0],z.__data[1]=G.elements[1],z.__data[2]=G.elements[2],z.__data[3]=0,z.__data[4]=G.elements[3],z.__data[5]=G.elements[4],z.__data[6]=G.elements[5],z.__data[7]=0,z.__data[8]=G.elements[6],z.__data[9]=G.elements[7],z.__data[10]=G.elements[8],z.__data[11]=0):(G.toArray(z.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,T,M){const E=y.value,b=v+"_"+T;if(M[b]===void 0)return typeof E=="number"||typeof E=="boolean"?M[b]=E:M[b]=E.clone(),!0;{const U=M[b];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return M[b]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(y){const v=y.uniforms;let T=0;const M=16;for(let b=0,U=v.length;b<U;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,z=S.length;w<z;w++){const O=S[w],W=Array.isArray(O.value)?O.value:[O.value];for(let P=0,F=W.length;P<F;P++){const G=W[P],Z=_(G),X=T%M;X!==0&&M-X<Z.boundary&&(T+=M-X),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=Z.storage}}}const E=T%M;return E>0&&(T+=M-E),y.__size=T,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ec{constructor(e={}){const{canvas:t=Zh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let T=!1,M=0,E=0,b=null,U=-1,S=null;const w=new wt,z=new wt;let O=null;const W=new tt(0);let P=0,F=t.width,G=t.height,Z=1,X=null,K=null;const Y=new wt(0,0,F,G),J=new wt(0,0,F,G);let ee=!1;const H=new jl;let ne=!1,Q=!1,ce=null;const ge=new gt,ye=new Ke,we=new N,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return b===null?Z:1}let k=i;function je(R,V){for(let q=0;q<R.length;q++){const $=R[q],j=t.getContext($,V);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zs}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",me,!1),k===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),k=je(V,R),k===null)throw je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,Te,Se,Ue,Ee,A,x,B,oe,ae,re,xe,pe,Me,Re,Ie,le,Be,C,se,de,D,te,he;function Pe(){ve=new fp(k),Te=new ap(k,ve,e),ve.init(Te),D=new Jm(k,ve,Te),Se=new $m(k,ve,Te),Ue=new gp(k),Ee=new Fm,A=new Zm(k,ve,Se,Ee,Te,D,Ue),x=new lp(v),B=new dp(v),oe=new yu(k,Te),te=new rp(k,ve,oe,Te),ae=new pp(k,oe,Ue,te),re=new Mp(k,ae,oe,Ue),C=new xp(k,Te,A),Ie=new op(Ee),xe=new Nm(v,x,B,ve,Te,te,Ie),pe=new ng(v,Ee),Me=new zm,Re=new Wm(ve,Te),Be=new ip(v,x,B,Se,re,f,l),le=new Km(v,re,Te),he=new ig(k,Ue,Te,Se),se=new sp(k,ve,Ue,Te),de=new mp(k,ve,Ue,Te),Ue.programs=xe.programs,v.capabilities=Te,v.extensions=ve,v.properties=Ee,v.renderLists=Me,v.shadowMap=le,v.state=Se,v.info=Ue}Pe();const Le=new tg(v,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(F,G,!1))},this.getSize=function(R){return R.set(F,G)},this.setSize=function(R,V,q=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,G=V,t.width=Math.floor(R*Z),t.height=Math.floor(V*Z),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(F*Z,G*Z).floor()},this.setDrawingBufferSize=function(R,V,q){F=R,G=V,Z=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,V,q,$){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,V,q,$),Se.viewport(w.copy(Y).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,V,q,$){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,V,q,$),Se.scissor(z.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){Se.setScissorTest(ee=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(R=!0,V=!0,q=!0){let $=0;if(R){let j=!1;if(b!==null){const Ce=b.texture.format;j=Ce===Dl||Ce===Ll||Ce===Pl}if(j){const Ce=b.texture.type,Fe=Ce===Gn||Ce===Fn||Ce===Js||Ce===ni||Ce===Rl||Ce===Cl,Ge=Be.getClearColor(),ke=Be.getClearAlpha(),qe=Ge.r,Ve=Ge.g,Xe=Ge.b;Fe?(m[0]=qe,m[1]=Ve,m[2]=Xe,m[3]=ke,k.clearBufferuiv(k.COLOR,0,m)):(g[0]=qe,g[1]=Ve,g[2]=Xe,g[3]=ke,k.clearBufferiv(k.COLOR,0,g))}else $|=k.COLOR_BUFFER_BIT}V&&($|=k.DEPTH_BUFFER_BIT),q&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Me.dispose(),Re.dispose(),Ee.dispose(),x.dispose(),B.dispose(),re.dispose(),te.dispose(),he.dispose(),xe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",st),Le.removeEventListener("sessionend",fe),ce&&(ce.dispose(),ce=null),Je.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ue.autoReset,V=le.enabled,q=le.autoUpdate,$=le.needsUpdate,j=le.type;Pe(),Ue.autoReset=R,le.enabled=V,le.autoUpdate=q,le.needsUpdate=$,le.type=j}function me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const V=R.target;V.removeEventListener("dispose",_e),Ne(V)}function Ne(R){De(R),Ee.remove(R)}function De(R){const V=Ee.get(R).programs;V!==void 0&&(V.forEach(function(q){xe.releaseProgram(q)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,$,j,Ce){V===null&&(V=be);const Fe=j.isMesh&&j.matrixWorld.determinant()<0,Ge=Vt(R,V,q,$,j);Se.setMaterial($,Fe);let ke=q.index,qe=1;if($.wireframe===!0){if(ke=ae.getWireframeAttribute(q),ke===void 0)return;qe=2}const Ve=q.drawRange,Xe=q.attributes.position;let lt=Ve.start*qe,Et=(Ve.start+Ve.count)*qe;Ce!==null&&(lt=Math.max(lt,Ce.start*qe),Et=Math.min(Et,(Ce.start+Ce.count)*qe)),ke!==null?(lt=Math.max(lt,0),Et=Math.min(Et,ke.count)):Xe!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,Xe.count));const at=Et-lt;if(at<0||at===1/0)return;te.setup(j,$,Ge,q,ke);let bt,rt=se;if(ke!==null&&(bt=oe.get(ke),rt=de,rt.setIndex(bt)),j.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*ze()),rt.setMode(k.LINES)):rt.setMode(k.TRIANGLES);else if(j.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),Se.setLineWidth(Ye*ze()),j.isLineSegments?rt.setMode(k.LINES):j.isLineLoop?rt.setMode(k.LINE_LOOP):rt.setMode(k.LINE_STRIP)}else j.isPoints?rt.setMode(k.POINTS):j.isSprite&&rt.setMode(k.TRIANGLES);if(j.isBatchedMesh)rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)rt.renderInstances(lt,at,j.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,kn=Math.min(q.instanceCount,Ye);rt.renderInstances(lt,at,kn)}else rt.render(lt,at)};function We(R,V,q){R.transparent===!0&&R.side===Yt&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,dn(R,V,q),R.side=Hn,R.needsUpdate=!0,dn(R,V,q),R.side=Yt):dn(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),p=Re.get(q),p.init(),y.push(p),q.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),R!==q&&R.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(v._useLegacyLights);const $=new Set;return R.traverse(function(j){const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){const Ge=Ce[Fe];We(Ge,q,j),$.add(Ge)}else We(Ce,q,j),$.add(Ce)}),y.pop(),p=null,$},this.compileAsync=function(R,V,q=null){const $=this.compile(R,V,q);return new Promise(j=>{function Ce(){if($.forEach(function(Fe){Ee.get(Fe).currentProgram.isReady()&&$.delete(Fe)}),$.size===0){j(R);return}setTimeout(Ce,10)}ve.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let He=null;function Qe(R){He&&He(R)}function st(){Je.stop()}function fe(){Je.start()}const Je=new ql;Je.setAnimationLoop(Qe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){He=R,Le.setAnimationLoop(R),R===null?Je.stop():Je.start()},Le.addEventListener("sessionstart",st),Le.addEventListener("sessionend",fe),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(V),V=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,b),p=Re.get(R,y.length),p.init(),y.push(p),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,ne=Ie.init(this.clippingPlanes,Q),_=Me.get(R,u.length),_.init(),u.push(_),it(R,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,K),this.info.render.frame++,ne===!0&&Ie.beginShadows();const q=p.state.shadowsArray;if(le.render(q,R,V),ne===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(_,R),p.setupLights(v._useLegacyLights),V.isArrayCamera){const $=V.cameras;for(let j=0,Ce=$.length;j<Ce;j++){const Fe=$[j];Kt(_,R,Fe,Fe.viewport)}}else Kt(_,R,V);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,V),te.resetDefaultState(),U=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function it(R,V,q,$){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){$&&we.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Fe=re.update(R),Ge=R.material;Ge.visible&&_.push(R,Fe,Ge,q,we.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const Fe=re.update(R),Ge=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),we.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),we.copy(Fe.boundingSphere.center)),we.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Ge)){const ke=Fe.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const Xe=ke[qe],lt=Ge[Xe.materialIndex];lt&&lt.visible&&_.push(R,Fe,lt,q,we.z,Xe)}}else Ge.visible&&_.push(R,Fe,Ge,q,we.z,null)}}const Ce=R.children;for(let Fe=0,Ge=Ce.length;Fe<Ge;Fe++)it(Ce[Fe],V,q,$)}function Kt(R,V,q,$){const j=R.opaque,Ce=R.transmissive,Fe=R.transparent;p.setupLightsView(q),ne===!0&&Ie.setGlobalState(v.clippingPlanes,q),Ce.length>0&&et(j,Ce,V,q),$&&Se.viewport(w.copy($)),j.length>0&&un(j,V,q),Ce.length>0&&un(Ce,V,q),Fe.length>0&&un(Fe,V,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function et(R,V,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Ce=Te.isWebGL2;ce===null&&(ce=new si(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?nr:Gn,minFilter:tr,samples:Ce?4:0})),v.getDrawingBufferSize(ye),Ce?ce.setSize(ye.x,ye.y):ce.setSize(Ws(ye.x),Ws(ye.y));const Fe=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(W),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=Bn,un(R,q,$),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce);let ke=!1;for(let qe=0,Ve=V.length;qe<Ve;qe++){const Xe=V[qe],lt=Xe.object,Et=Xe.geometry,at=Xe.material,bt=Xe.group;if(at.side===Yt&&lt.layers.test($.layers)){const rt=at.side;at.side=Ft,at.needsUpdate=!0,gn(lt,q,$,Et,at,bt),at.side=rt,at.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce)),v.setRenderTarget(Fe),v.setClearColor(W,P),v.toneMapping=Ge}function un(R,V,q){const $=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Ce=R.length;j<Ce;j++){const Fe=R[j],Ge=Fe.object,ke=Fe.geometry,qe=$===null?Fe.material:$,Ve=Fe.group;Ge.layers.test(q.layers)&&gn(Ge,V,q,ke,qe,Ve)}}function gn(R,V,q,$,j,Ce){R.onBeforeRender(v,V,q,$,j,Ce),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,V,q,$,R,Ce),j.transparent===!0&&j.side===Yt&&j.forceSinglePass===!1?(j.side=Ft,j.needsUpdate=!0,v.renderBufferDirect(q,V,$,j,R,Ce),j.side=Hn,j.needsUpdate=!0,v.renderBufferDirect(q,V,$,j,R,Ce),j.side=Yt):v.renderBufferDirect(q,V,$,j,R,Ce),R.onAfterRender(v,V,q,$,j,Ce)}function dn(R,V,q){V.isScene!==!0&&(V=be);const $=Ee.get(R),j=p.state.lights,Ce=p.state.shadowsArray,Fe=j.state.version,Ge=xe.getParameters(R,j.state,Ce,V,q),ke=xe.getProgramCacheKey(Ge);let qe=$.programs;$.environment=R.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(R.isMeshStandardMaterial?B:x).get(R.envMap||$.environment),qe===void 0&&(R.addEventListener("dispose",_e),qe=new Map,$.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Fe)return $t(R,Ge),Ve}else Ge.uniforms=xe.getUniforms(R),R.onBuild(q,Ge,v),R.onBeforeCompile(Ge,v),Ve=xe.acquireProgram(Ge,ke),qe.set(ke,Ve),$.uniforms=Ge.uniforms;const Xe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ie.uniform),$t(R,Ge),$.needsLights=zt(R),$.lightsStateVersion=Fe,$.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Rn(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Br.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function $t(R,V){const q=Ee.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Vt(R,V,q,$,j){V.isScene!==!0&&(V=be),A.resetTextureUnits();const Ce=V.fog,Fe=$.isMeshStandardMaterial?V.environment:null,Ge=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,ke=($.isMeshStandardMaterial?B:x).get($.envMap||Fe),qe=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Et=!!q.morphAttributes.color;let at=Bn;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=v.toneMapping);const bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=bt!==void 0?bt.length:0,Ye=Ee.get($),kn=p.state.lights;if(ne===!0&&(Q===!0||R!==S)){const Ct=R===S&&$.id===U;Ie.setState($,R,Ct)}let ot=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==kn.state.version||Ye.outputColorSpace!==Ge||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||Ye.envMap!==ke||$.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ie.numPlanes||Ye.numIntersection!==Ie.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==Xe||Ye.morphNormals!==lt||Ye.morphColors!==Et||Ye.toneMapping!==at||Te.isWebGL2===!0&&Ye.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ye.__version=$.version);let Bt=Ye.currentProgram;ot===!0&&(Bt=dn($,V,j));let hi=!1,_n=!1,vn=!1;const pt=Bt.getUniforms(),Wt=Ye.uniforms;if(Se.useProgram(Bt.program)&&(hi=!0,_n=!0,vn=!0),$.id!==U&&(U=$.id,_n=!0),hi||S!==R){pt.setValue(k,"projectionMatrix",R.projectionMatrix),pt.setValue(k,"viewMatrix",R.matrixWorldInverse);const Ct=pt.map.cameraPosition;Ct!==void 0&&Ct.setValue(k,we.setFromMatrixPosition(R.matrixWorld)),Te.logarithmicDepthBuffer&&pt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,_n=!0,vn=!0)}if(j.isSkinnedMesh){pt.setOptional(k,j,"bindMatrix"),pt.setOptional(k,j,"bindMatrixInverse");const Ct=j.skeleton;Ct&&(Te.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(k,"boneTexture",Ct.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(pt.setOptional(k,j,"batchingTexture"),pt.setValue(k,"batchingTexture",j._matricesTexture,A));const Vn=q.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0&&Te.isWebGL2===!0)&&C.update(j,q,Bt),(_n||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,pt.setValue(k,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Wt.envMap.value=ke,Wt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),_n&&(pt.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&ft(Wt,vn),Ce&&$.fog===!0&&pe.refreshFogUniforms(Wt,Ce),pe.refreshMaterialUniforms(Wt,$,Z,G,ce),Br.upload(k,Rn(Ye),Wt,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Br.upload(k,Rn(Ye),Wt,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(k,"center",j.center),pt.setValue(k,"modelViewMatrix",j.modelViewMatrix),pt.setValue(k,"normalMatrix",j.normalMatrix),pt.setValue(k,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ct=$.uniformsGroups;for(let ki=0,$r=Ct.length;ki<$r;ki++)if(Te.isWebGL2){const cr=Ct[ki];he.update(cr,Bt),he.bind(cr,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function ft(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function zt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,q){Ee.get(R.texture).__webglTexture=V,Ee.get(R.depthTexture).__webglTexture=q;const $=Ee.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const q=Ee.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){b=R,M=V,E=q;let $=!0,j=null,Ce=!1,Fe=!1;if(R){const ke=Ee.get(R);ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(k.FRAMEBUFFER,null),$=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(R):ke.__hasExternalTextures&&A.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);const Ve=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?j=Ve[V][q]:j=Ve[V],Ce=!0):Te.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?j=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[q]:j=Ve,w.copy(R.viewport),z.copy(R.scissor),O=R.scissorTest}else w.copy(Y).multiplyScalar(Z).floor(),z.copy(J).multiplyScalar(Z).floor(),O=ee;if(Se.bindFramebuffer(k.FRAMEBUFFER,j)&&Te.drawBuffers&&$&&Se.drawBuffers(R,j),Se.viewport(w),Se.scissor(z),Se.setScissorTest(O),Ce){const ke=Ee.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,q)}else if(Fe){const ke=Ee.get(R.texture),qe=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,qe)}U=-1},this.readRenderTargetPixels=function(R,V,q,$,j,Ce,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){Se.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const ke=R.texture,qe=ke.format,Ve=ke.type;if(qe!==cn&&D.convert(qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===nr&&(ve.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ve!==Gn&&D.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===On&&(Te.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-$&&q>=0&&q<=R.height-j&&k.readPixels(V,q,$,j,D.convert(qe),D.convert(Ve),Ce)}finally{const ke=b!==null?Ee.get(b).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,V,q=0){const $=Math.pow(2,-q),j=Math.floor(V.image.width*$),Ce=Math.floor(V.image.height*$);A.setTexture2D(V,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,R.x,R.y,j,Ce),Se.unbindTexture()},this.copyTextureToTexture=function(R,V,q,$=0){const j=V.image.width,Ce=V.image.height,Fe=D.convert(q.format),Ge=D.convert(q.type);A.setTexture2D(q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,$,R.x,R.y,j,Ce,Fe,Ge,V.image.data):V.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,$,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,$,R.x,R.y,Fe,Ge,V.image),$===0&&q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q,$,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=R.max.x-R.min.x+1,Fe=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,ke=D.convert($.format),qe=D.convert($.type);let Ve;if($.isData3DTexture)A.setTexture3D($,0),Ve=k.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)A.setTexture2DArray($,0),Ve=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const Xe=k.getParameter(k.UNPACK_ROW_LENGTH),lt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Et=k.getParameter(k.UNPACK_SKIP_PIXELS),at=k.getParameter(k.UNPACK_SKIP_ROWS),bt=k.getParameter(k.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[j]:q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Ve,j,V.x,V.y,V.z,Ce,Fe,Ge,ke,qe,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ve,j,V.x,V.y,V.z,Ce,Fe,Ge,ke,rt.data)):k.texSubImage3D(Ve,j,V.x,V.y,V.z,Ce,Fe,Ge,ke,qe,rt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Et),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,bt),j===0&&$.generateMipmaps&&k.generateMipmap(Ve),Se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){M=0,E=0,b=null,Se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qs?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?ri:Il}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?Tt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rg extends ec{}rg.prototype.isWebGL1Renderer=!0;class sg extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ag extends Rt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Qi extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new N,Go=new N,Ho=new gt,Cs=new lr,Ur=new or;class ia extends Ot{constructor(e=new _t,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bo.fromBufferAttribute(t,r-1),Go.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bo.distanceTo(Go);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Ho.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Ho);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,d=new N,f=new N,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=u,T=y-1;v<T;v+=m){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,M),h.fromBufferAttribute(p,E),Cs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=u,T=y-1;v<T;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Cs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ko=new N,Vo=new N;class Wo extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ko.fromBufferAttribute(t,r),Vo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ko.distanceTo(Vo);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class og extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tc extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xo=new gt,js=new lr,Ir=new or,Nr=new N;class lg extends Ot{constructor(e=new _t,t=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Xo.copy(r).invert(),js.copy(e.ray).applyMatrix4(Xo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Nr.fromBufferAttribute(d,p),jo(Nr,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Nr.fromBufferAttribute(d,g),jo(Nr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jo(n,e,t,i,r,s,o){const a=js.distanceSqToPoint(n);if(a<t){const l=new N;js.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ra extends _t{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let d=e;const f=(t-e)/r,m=new N,g=new Ke;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<r;_++){const p=_*(i+1);for(let u=0;u<i;u++){const y=u+p,v=y,T=y+i+1,M=y+i+2,E=y+1;a.push(v,T,E),a.push(T,M,E)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends _t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,f=new N,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const y=[],v=u/i;let T=0;u===0&&o===0?T=.5/t:u===i&&l===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){const E=M/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(E+T,1-v),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const v=h[u][y+1],T=h[u][y],M=h[u+1][y],E=h[u+1][y+1];(u!==0||o>0)&&m.push(v,T,E),(u!==i-1||l<Math.PI)&&m.push(T,M,E)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cg extends Qi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const qo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hg{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const ug=new hg;class sa{constructor(e){this.manager=e!==void 0?e:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sa.DEFAULT_MATERIAL_NAME="__DEFAULT";class dg extends sa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ir("img");function l(){h(),qo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nc extends sa{constructor(e){super(e)}load(e,t,i,r){const s=new kt,o=new dg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fg extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pg{constructor(e,t,i=0,r=1/0){this.ray=new lr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return qs(e,this,i,t),i.sort(Yo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qs(e[r],this,i,t);return i.sort(Yo),i}}function Yo(n,e){return n.distance-e.distance}function qs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)qs(r[s],e,t,!0)}}class Ko{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zs);const $o={type:"change"},Ps={type:"start"},Zo={type:"end"},Fr=new lr,Jo=new Nn,mg=Math.cos(70*$h.DEG2RAD);class gg extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",re),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($o),i.update(),s=r.NONE},this.update=(function(){const C=new N,se=new ai().setFromUnitVectors(e.up,new N(0,1,0)),de=se.clone().invert(),D=new N,te=new ai,he=new N,Pe=2*Math.PI;return function(ue=null){const L=i.object.position;C.copy(L).sub(i.target),C.applyQuaternion(se),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&z(S(ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=i.minAzimuthAngle,_e=i.maxAzimuthAngle;isFinite(me)&&isFinite(_e)&&(me<-Math.PI?me+=Pe:me>Math.PI&&(me-=Pe),_e<-Math.PI?_e+=Pe:_e>Math.PI&&(_e-=Pe),me<=_e?a.theta=Math.max(me,Math.min(_e,a.theta)):a.theta=a.theta>(me+_e)/2?Math.max(me,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&E||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(de),L.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ne=!1;if(i.zoomToCursor&&E){let De=null;if(i.object.isPerspectiveCamera){const We=C.length();De=K(We*c);const He=We-De;i.object.position.addScaledVector(T,He),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const We=new N(M.x,M.y,0);We.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ne=!0;const He=new N(M.x,M.y,0);He.unproject(i.object),i.object.position.sub(He).add(We),i.object.updateMatrixWorld(),De=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;De!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(De).add(i.object.position):(Fr.origin.copy(i.object.position),Fr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fr.direction))<mg?e.lookAt(i.target):(Jo.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fr.intersectPlane(Jo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ne=!0);return c=1,E=!1,Ne||D.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||he.distanceToSquared(i.target)>0?(i.dispatchEvent($o),D.copy(i.object.position),te.copy(i.object.quaternion),he.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",x),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",re),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ko,l=new Ko;let c=1;const h=new N,d=new Ke,f=new Ke,m=new Ke,g=new Ke,_=new Ke,p=new Ke,u=new Ke,y=new Ke,v=new Ke,T=new N,M=new Ke;let E=!1;const b=[],U={};function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(C){const se=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*se)}function z(C){l.theta-=C}function O(C){l.phi-=C}const W=(function(){const C=new N;return function(de,D){C.setFromMatrixColumn(D,0),C.multiplyScalar(-de),h.add(C)}})(),P=(function(){const C=new N;return function(de,D){i.screenSpacePanning===!0?C.setFromMatrixColumn(D,1):(C.setFromMatrixColumn(D,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(de),h.add(C)}})(),F=(function(){const C=new N;return function(de,D){const te=i.domElement;if(i.object.isPerspectiveCamera){const he=i.object.position;C.copy(he).sub(i.target);let Pe=C.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),W(2*de*Pe/te.clientHeight,i.object.matrix),P(2*D*Pe/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(de*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),P(D*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function G(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(C,se){if(!i.zoomToCursor)return;E=!0;const de=i.domElement.getBoundingClientRect(),D=C-de.left,te=se-de.top,he=de.width,Pe=de.height;M.x=D/he*2-1,M.y=-(te/Pe)*2+1,T.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function Y(C){d.set(C.clientX,C.clientY)}function J(C){X(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function ee(C){g.set(C.clientX,C.clientY)}function H(C){f.set(C.clientX,C.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;z(2*Math.PI*m.x/se.clientHeight),O(2*Math.PI*m.y/se.clientHeight),d.copy(f),i.update()}function ne(C){y.set(C.clientX,C.clientY),v.subVectors(y,u),v.y>0?G(w(v.y)):v.y<0&&Z(w(v.y)),u.copy(y),i.update()}function Q(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),F(p.x,p.y),g.copy(_),i.update()}function ce(C){X(C.clientX,C.clientY),C.deltaY<0?Z(w(C.deltaY)):C.deltaY>0&&G(w(C.deltaY)),i.update()}function ge(C){let se=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),se=!0;break}se&&(C.preventDefault(),i.update())}function ye(C){if(b.length===1)d.set(C.pageX,C.pageY);else{const se=Be(C),de=.5*(C.pageX+se.x),D=.5*(C.pageY+se.y);d.set(de,D)}}function we(C){if(b.length===1)g.set(C.pageX,C.pageY);else{const se=Be(C),de=.5*(C.pageX+se.x),D=.5*(C.pageY+se.y);g.set(de,D)}}function be(C){const se=Be(C),de=C.pageX-se.x,D=C.pageY-se.y,te=Math.sqrt(de*de+D*D);u.set(0,te)}function ze(C){i.enableZoom&&be(C),i.enablePan&&we(C)}function k(C){i.enableZoom&&be(C),i.enableRotate&&ye(C)}function je(C){if(b.length==1)f.set(C.pageX,C.pageY);else{const de=Be(C),D=.5*(C.pageX+de.x),te=.5*(C.pageY+de.y);f.set(D,te)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;z(2*Math.PI*m.x/se.clientHeight),O(2*Math.PI*m.y/se.clientHeight),d.copy(f)}function ve(C){if(b.length===1)_.set(C.pageX,C.pageY);else{const se=Be(C),de=.5*(C.pageX+se.x),D=.5*(C.pageY+se.y);_.set(de,D)}p.subVectors(_,g).multiplyScalar(i.panSpeed),F(p.x,p.y),g.copy(_)}function Te(C){const se=Be(C),de=C.pageX-se.x,D=C.pageY-se.y,te=Math.sqrt(de*de+D*D);y.set(0,te),v.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),G(v.y),u.copy(y);const he=(C.pageX+se.x)*.5,Pe=(C.pageY+se.y)*.5;X(he,Pe)}function Se(C){i.enableZoom&&Te(C),i.enablePan&&ve(C)}function Ue(C){i.enableZoom&&Te(C),i.enableRotate&&je(C)}function Ee(C){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",x)),Re(C),C.pointerType==="touch"?xe(C):B(C))}function A(C){i.enabled!==!1&&(C.pointerType==="touch"?pe(C):oe(C))}function x(C){Ie(C),b.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",x)),i.dispatchEvent(Zo),s=r.NONE}function B(C){let se;switch(C.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case pi.DOLLY:if(i.enableZoom===!1)return;J(C),s=r.DOLLY;break;case pi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;ee(C),s=r.PAN}else{if(i.enableRotate===!1)return;Y(C),s=r.ROTATE}break;case pi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Y(C),s=r.ROTATE}else{if(i.enablePan===!1)return;ee(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ps)}function oe(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;H(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(C);break;case r.PAN:if(i.enablePan===!1)return;Q(C);break}}function ae(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ps),ce(C),i.dispatchEvent(Zo))}function re(C){i.enabled===!1||i.enablePan===!1||ge(C)}function xe(C){switch(le(C),b.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;ye(C),s=r.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;we(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(C),s=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ps)}function pe(C){switch(le(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;je(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(C),i.update();break;default:s=r.NONE}}function Me(C){i.enabled!==!1&&C.preventDefault()}function Re(C){b.push(C.pointerId)}function Ie(C){delete U[C.pointerId];for(let se=0;se<b.length;se++)if(b[se]==C.pointerId){b.splice(se,1);return}}function le(C){let se=U[C.pointerId];se===void 0&&(se=new Ke,U[C.pointerId]=se),se.set(C.pageX,C.pageY)}function Be(C){const se=C.pointerId===b[0]?b[1]:b[0];return U[se]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}var hn=Math.PI,ut=hn*2,$i=hn/180,_g=1440,vg=398600.8,qt=6378.135,An=60/Math.sqrt(qt*qt*qt/vg),Ls=qt*An/60,xg=1/An,Qn=.001082616,Mg=-253881e-11,Sg=-165597e-11,ei=Mg/Qn,rr=2/3;function yg(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:d}}function Qo(n,e,t,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function aa(n,e,t,i,r,s,o){if(n instanceof Date){var a=n;return Qo(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Qo(n,e,t,i,r,s,o)}function ic(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,o=n.pho,a=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,g=n.sh2,_=n.sh3,p=n.si2,u=n.si3,y=n.sl2,v=n.sl3,T=n.sl4,M=n.t,E=n.xgh2,b=n.xgh3,U=n.xgh4,S=n.xh2,w=n.xh3,z=n.xi2,O=n.xi3,W=n.xl2,P=n.xl3,F=n.xl4,G=n.zmol,Z=n.zmos,X=e.init,K=e.opsmode,Y=e.ep,J=e.inclp,ee=e.nodep,H=e.argpp,ne=e.mp,Q,ce,ge,ye,we,be,ze,k,je,ve,Te,Se,Ue,Ee,A,x,B,oe,ae,re,xe,pe=119459e-10,Me=.01675,Re=.00015835218,Ie=.0549;xe=Z+pe*M,X==="y"&&(xe=Z),re=xe+2*Me*Math.sin(xe),B=Math.sin(re),ve=.5*B*B-.25,Te=-.5*B*Math.cos(re);var le=c*ve+h*Te,Be=p*ve+u*Te,C=y*ve+v*Te+T*B,se=d*ve+f*Te+m*B,de=g*ve+_*Te;xe=G+Re*M,X==="y"&&(xe=G),re=xe+2*Ie*Math.sin(xe),B=Math.sin(re),ve=.5*B*B-.25,Te=-.5*B*Math.cos(re);var D=i*ve+t*Te,te=z*ve+O*Te,he=W*ve+P*Te+F*B,Pe=E*ve+b*Te+U*B,Le=S*ve+w*Te;return Se=le+D,A=Be+te,x=C+he,Ue=se+Pe,Ee=de+Le,X==="n"&&(Se-=r,A-=a,x-=l,Ue-=s,Ee-=o,J+=A,Y+=Se,ye=Math.sin(J),ge=Math.cos(J),J>=.2?(Ee/=ye,Ue-=ge*Ee,H+=Ue,ee+=Ee,ne+=x):(be=Math.sin(ee),we=Math.cos(ee),Q=ye*be,ce=ye*we,ze=Ee*we+A*ge*be,k=-Ee*be+A*ge*we,Q+=ze,ce+=k,ee%=ut,ee<0&&K==="a"&&(ee+=ut),oe=ne+H+ge*ee,je=x+Ue-A*ee*ye,oe+=je,ae=ee,ee=Math.atan2(Q,ce),ee<0&&K==="a"&&(ee+=ut),Math.abs(ae-ee)>hn&&(ee<ae?ee+=ut:ee-=ut),ne+=x,H=oe-ne-ge*ee)),{ep:Y,inclp:J,nodep:ee,argpp:H,mp:ne}}function Eg(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,o=n.nodep,a=n.np,l,c,h,d,f,m,g,_,p,u,y,v,T,M,E,b,U,S,w,z,O,W,P,F,G,Z,X,K,Y,J,ee,H,ne,Q,ce,ge,ye,we,be,ze,k,je,ve,Te,Se,Ue,Ee,A,x,B,oe,ae,re,xe,pe,Me,Re,Ie,le,Be,C,se,de,D=.01675,te=.0549,he=29864797e-13,Pe=47968065e-14,Le=.39785416,ue=.91744867,L=.1945905,me=-.98088458,_e=a,Ne=t,De=Math.sin(o),We=Math.cos(o),He=Math.sin(i),Qe=Math.cos(i),st=Math.sin(s),fe=Math.cos(s),Je=Ne*Ne,it=1-Je,Kt=Math.sqrt(it),et=0,un=0,gn=0,dn=0,Rn=0,$t=e+18261.5+r/1440,Vt=(4.523602-.00092422029*$t)%ut,ft=Math.sin(Vt),zt=Math.cos(Vt),R=.91375164-.03568096*zt,V=Math.sqrt(1-R*R),q=.089683511*ft/V,$=Math.sqrt(1-q*q),j=5.8351514+.001944368*$t,Ce=.39785416*ft/V,Fe=$*zt+.91744867*q*ft;Ce=Math.atan2(Ce,Fe),Ce+=j-Vt;var Ge=Math.cos(Ce),ke=Math.sin(Ce);z=L,O=me,F=ue,G=Le,W=We,P=De,y=he;for(var qe=1/_e,Ve=0;Ve<2;)Ve+=1,l=z*W+O*F*P,h=-O*W+z*F*P,g=-z*P+O*F*W,_=O*G,p=O*P+z*F*W,u=z*G,c=fe*g+st*_,d=fe*p+st*u,f=-st*g+fe*_,m=-st*p+fe*u,v=l*Qe+c*He,T=h*Qe+d*He,M=-l*He+c*Qe,E=-h*He+d*Qe,b=f*He,U=m*He,S=f*Qe,w=m*Qe,C=12*v*v-3*M*M,se=24*v*T-6*M*E,de=12*T*T-3*E*E,ae=3*(l*l+c*c)+C*Je,re=6*(l*h+c*d)+se*Je,xe=3*(h*h+d*d)+de*Je,pe=-6*l*f+Je*(-24*v*S-6*M*b),Me=-6*(l*m+h*f)+Je*(-24*(T*S+v*w)+-6*(M*U+E*b)),Re=-6*h*m+Je*(-24*T*w-6*E*U),Ie=6*c*f+Je*(24*v*b-6*M*S),le=6*(d*f+c*m)+Je*(24*(T*b+v*U)-6*(E*S+M*w)),Be=6*d*m+Je*(24*T*U-6*E*w),ae=ae+ae+it*C,re=re+re+it*se,xe=xe+xe+it*de,Ee=y*qe,Ue=-.5*Ee/Kt,A=Ee*Kt,Se=-15*Ne*A,x=v*M+T*E,B=T*M+v*E,oe=T*E-v*M,Ve===1&&(Z=Se,X=Ue,K=Ee,Y=A,J=x,ee=B,H=oe,ne=ae,Q=re,ce=xe,ge=pe,ye=Me,we=Re,be=Ie,ze=le,k=Be,je=C,ve=se,Te=de,z=Ge,O=ke,F=R,G=V,W=$*We+q*De,P=De*$-We*q,y=Pe);var Xe=(4.7199672+(.2299715*$t-j))%ut,lt=(6.2565837+.017201977*$t)%ut,Et=2*Z*ee,at=2*Z*H,bt=2*X*ye,rt=2*X*(we-ge),Ye=-2*K*Q,kn=-2*K*(ce-ne),ot=-2*K*(-21-9*Je)*D,Bt=2*Y*ve,hi=2*Y*(Te-je),_n=-18*Y*D,vn=-2*X*ze,pt=-2*X*(k-be),Wt=2*Se*B,Vn=2*Se*oe,Ct=2*Ue*Me,ki=2*Ue*(Re-pe),$r=-2*Ee*re,cr=-2*Ee*(xe-ae),oc=-2*Ee*(-21-9*Je)*te,lc=2*A*se,cc=2*A*(de-C),hc=-18*A*te,uc=-2*Ue*le,dc=-2*Ue*(Be-Ie);return{snodm:De,cnodm:We,sinim:st,cosim:fe,sinomm:He,cosomm:Qe,day:$t,e3:Vn,ee2:Wt,em:Ne,emsq:Je,gam:j,peo:et,pgho:dn,pho:Rn,pinco:un,plo:gn,rtemsq:Kt,se2:Et,se3:at,sgh2:Bt,sgh3:hi,sgh4:_n,sh2:vn,sh3:pt,si2:bt,si3:rt,sl2:Ye,sl3:kn,sl4:ot,s1:Se,s2:Ue,s3:Ee,s4:A,s5:x,s6:B,s7:oe,ss1:Z,ss2:X,ss3:K,ss4:Y,ss5:J,ss6:ee,ss7:H,sz1:ne,sz2:Q,sz3:ce,sz11:ge,sz12:ye,sz13:we,sz21:be,sz22:ze,sz23:k,sz31:je,sz32:ve,sz33:Te,xgh2:lc,xgh3:cc,xgh4:hc,xh2:uc,xh3:dc,xi2:Ct,xi3:ki,xl2:$r,xl3:cr,xl4:oc,nm:_e,z1:ae,z2:re,z3:xe,z11:pe,z12:Me,z13:Re,z21:Ie,z22:le,z23:Be,z31:C,z32:se,z33:de,zmol:Xe,zmos:lt}}function bg(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,o=n.s4,a=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,g=n.sz1,_=n.sz3,p=n.sz11,u=n.sz13,y=n.sz21,v=n.sz23,T=n.sz31,M=n.sz33,E=n.t,b=n.tc,U=n.gsto,S=n.mo,w=n.mdot,z=n.no,O=n.nodeo,W=n.nodedot,P=n.xpidot,F=n.z1,G=n.z3,Z=n.z11,X=n.z13,K=n.z21,Y=n.z23,J=n.z31,ee=n.z33,H=n.ecco,ne=n.eccsq,Q=n.emsq,ce=n.em,ge=n.argpm,ye=n.inclm,we=n.mm,be=n.nm,ze=n.nodem,k=n.irez,je=n.atime,ve=n.d2201,Te=n.d2211,Se=n.d3210,Ue=n.d3222,Ee=n.d4410,A=n.d4422,x=n.d5220,B=n.d5232,oe=n.d5421,ae=n.d5433,re=n.dedt,xe=n.didt,pe=n.dmdt,Me=n.dnodt,Re=n.domdt,Ie=n.del1,le=n.del2,Be=n.del3,C=n.xfact,se=n.xlamo,de=n.xli,D=n.xni,te,he,Pe,Le,ue,L,me,_e,Ne,De,We,He,Qe,st,fe,Je,it,Kt,et,un,gn,dn,Rn,$t,Vt,ft,zt,R,V,q,$,j,Ce=17891679e-13,Fe=21460748e-13,Ge=22123015e-14,ke=17891679e-13,qe=73636953e-16,Ve=21765803e-16,Xe=.0043752690880113,lt=37393792e-14,Et=11428639e-14,at=.00015835218,bt=119459e-10;k=0,be<.0052359877&&be>.0034906585&&(k=1),be>=.00826&&be<=.00924&&ce>=.5&&(k=2);var rt=c*bt*m,Ye=h*bt*(p+u),kn=-bt*d*(g+_-14-6*Q),ot=f*bt*(T+M-6),Bt=-bt*h*(y+v);(ye<.052359877||ye>hn-.052359877)&&(Bt=0),l!==0&&(Bt/=l);var hi=ot-e*Bt;re=rt+i*at*a,xe=Ye+r*at*(Z+X),pe=kn-at*s*(F+G-14-6*Q);var _n=o*at*(J+ee-6),vn=-at*r*(K+Y);(ye<.052359877||ye>hn-.052359877)&&(vn=0),Re=hi+_n,Me=Bt,l!==0&&(Re-=e/l*vn,Me+=vn/l);var pt=0,Wt=(U+b*Xe)%ut;if(ce+=re*E,ye+=xe*E,ge+=Re*E,ze+=Me*E,we+=pe*E,k!==0){if(q=Math.pow(be/An,rr),k===2){$=e*e;var Vn=ce;ce=H;var Ct=Q;Q=ne,j=ce*Q,st=-.306-(ce-.64)*.44,ce<=.65?(fe=3.616-13.247*ce+16.29*Q,it=-19.302+117.39*ce-228.419*Q+156.591*j,Kt=-18.9068+109.7927*ce-214.6334*Q+146.5816*j,et=-41.122+242.694*ce-471.094*Q+313.953*j,un=-146.407+841.88*ce-1629.014*Q+1083.435*j,gn=-532.114+3017.977*ce-5740.032*Q+3708.276*j):(fe=-72.099+331.819*ce-508.738*Q+266.724*j,it=-346.844+1582.851*ce-2415.925*Q+1246.113*j,Kt=-342.585+1554.908*ce-2366.899*Q+1215.972*j,et=-1052.797+4758.686*ce-7193.992*Q+3651.957*j,un=-3581.69+16178.11*ce-24462.77*Q+12422.52*j,ce>.715?gn=-5149.66+29936.92*ce-54087.36*Q+31324.56*j:gn=1464.74-4664.75*ce+3763.64*Q),ce<.7?($t=-919.2277+4988.61*ce-9064.77*Q+5542.21*j,dn=-822.71072+4568.6173*ce-8491.4146*Q+5337.524*j,Rn=-853.666+4690.25*ce-8624.77*Q+5341.4*j):($t=-37995.78+161616.52*ce-229838.2*Q+109377.94*j,dn=-51752.104+218913.95*ce-309468.16*Q+146349.42*j,Rn=-40023.88+170470.89*ce-242699.48*Q+115605.82*j),Vt=l*l,te=.75*(1+2*e+$),he=1.5*Vt,Le=1.875*l*(1-2*e-3*$),ue=-1.875*l*(1+2*e-3*$),me=35*Vt*te,_e=39.375*Vt*Vt,Ne=9.84375*l*(Vt*(1-2*e-5*$)+.33333333*(-2+4*e+6*$)),De=l*(4.92187512*Vt*(-2-4*e+10*$)+6.56250012*(1+2*e-3*$)),We=29.53125*l*(2-8*e+$*(-12+8*e+10*$)),He=29.53125*l*(-2-8*e+$*(12+8*e-10*$)),R=be*be,V=q*q,zt=3*R*V,ft=zt*ke,ve=ft*te*st,Te=ft*he*fe,zt*=q,ft=zt*lt,Se=ft*Le*it,Ue=ft*ue*Kt,zt*=q,ft=2*zt*qe,Ee=ft*me*et,A=ft*_e*un,zt*=q,ft=zt*Et,x=ft*Ne*gn,B=ft*De*Rn,ft=2*zt*Ve,oe=ft*We*dn,ae=ft*He*$t,se=(S+O+O-(Wt+Wt))%ut,C=w+pe+2*(W+Me-Xe)-z,ce=Vn,Q=Ct}k===1&&(Qe=1+Q*(-2.5+.8125*Q),it=1+2*Q,Je=1+Q*(-6+6.60937*Q),te=.75*(1+e)*(1+e),Pe=.9375*l*l*(1+3*e)-.75*(1+e),L=1+e,L*=1.875*L*L,Ie=3*be*be*q*q,le=2*Ie*te*Qe*Ce,Be=3*Ie*L*Je*Ge*q,Ie=Ie*Pe*it*Fe*q,se=(S+O+t-Wt)%ut,C=w+P+pe+Re+Me-(z+Xe)),de=se,D=z,je=0,be=z+pt}return{em:ce,argpm:ge,inclm:ye,mm:we,nm:be,nodem:ze,irez:k,atime:je,d2201:ve,d2211:Te,d3210:Se,d3222:Ue,d4410:Ee,d4422:A,d5220:x,d5232:B,d5421:oe,d5433:ae,dedt:re,didt:xe,dmdt:pe,dndt:pt,dnodt:Me,domdt:Re,del1:Ie,del2:le,del3:Be,xfact:C,xlamo:se,xli:de,xni:D}}function el(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*$i/240%ut,t<0&&(t+=ut),t}function Ys(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?el(aa.apply(void 0,arguments)):el.apply(void 0,arguments)}function Tg(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(i),h=c*c,d=Math.pow(An/s,rr),f=.75*Qn*(3*h-1)/(l*a),m=f/(d*d),g=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(g*g),s/=1+m;var _=Math.pow(An/s,rr),p=Math.sin(i),u=_*a,y=1-5*h,v=-y-h-h,T=1/_,M=u*u,E=_*(1-e),b="n",U;if(r==="a"){var S=t-7305,w=Math.floor(S+1e-8),z=S-w,O=.017202791694070362,W=1.7321343856509375,P=5075514194322695e-30,F=O+ut;U=(W+O*w+F*z+S*S*P)%ut,U<0&&(U+=ut)}else U=Ys(t+24332815e-1);return{no:s,method:b,ainv:T,ao:_,con41:v,con42:y,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:M,rp:E,rteosq:l,sinio:p,gsto:U}}function Ag(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,o=n.d4410,a=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,g=n.del2,_=n.del3,p=n.didt,u=n.dmdt,y=n.dnodt,v=n.domdt,T=n.argpo,M=n.argpdot,E=n.t,b=n.tc,U=n.gsto,S=n.xfact,w=n.xlamo,z=n.no,O=n.atime,W=n.em,P=n.argpm,F=n.inclm,G=n.xli,Z=n.mm,X=n.xni,K=n.nodem,Y=n.nm,J=.13130908,ee=2.8843198,H=.37448087,ne=5.7686396,Q=.95240898,ce=1.8014998,ge=1.050833,ye=4.4108898,we=.0043752690880113,be=720,ze=-720,k=259200,je,ve,Te,Se,Ue,Ee,A,x,B=0,oe=0,ae=(U+b*we)%ut;if(W+=f*E,F+=p*E,P+=v*E,K+=y*E,Z+=u*E,e!==0){(O===0||E*O<=0||Math.abs(E)<Math.abs(O))&&(O=0,X=z,G=w),E>0?je=be:je=ze;for(var re=381;re===381;)e!==2?(A=m*Math.sin(G-J)+g*Math.sin(2*(G-ee))+_*Math.sin(3*(G-H)),Ue=X+S,Ee=m*Math.cos(G-J)+2*g*Math.cos(2*(G-ee))+3*_*Math.cos(3*(G-H)),Ee*=Ue):(x=T+M*O,Te=x+x,ve=G+G,A=t*Math.sin(Te+G-ne)+i*Math.sin(G-ne)+r*Math.sin(x+G-Q)+s*Math.sin(-x+G-Q)+o*Math.sin(Te+ve-ce)+a*Math.sin(ve-ce)+l*Math.sin(x+G-ge)+c*Math.sin(-x+G-ge)+h*Math.sin(x+ve-ye)+d*Math.sin(-x+ve-ye),Ue=X+S,Ee=t*Math.cos(Te+G-ne)+i*Math.cos(G-ne)+r*Math.cos(x+G-Q)+s*Math.cos(-x+G-Q)+l*Math.cos(x+G-ge)+c*Math.cos(-x+G-ge)+2*(o*Math.cos(Te+ve-ce)+a*Math.cos(ve-ce)+h*Math.cos(x+ve-ye)+d*Math.cos(-x+ve-ye)),Ee*=Ue),Math.abs(E-O)>=be?re=381:(oe=E-O,re=0),re===381&&(G+=Ue*je+A*k,X+=A*je+Ee*k,O+=je);Y=X+A*oe+Ee*oe*oe*.5,Se=G+Ue*oe+A*oe*oe*.5,e!==1?(Z=Se-2*K+2*ae,B=Y-z):(Z=Se-K-P+ae,B=Y-z),Y=z+B}return{atime:O,em:W,argpm:P,inclm:F,xli:G,mm:Z,xni:X,nodem:K,dndt:B,nm:Y}}function rc(n,e){var t,i,r,s,o,a,l,c,h,d,f,m,g,_,p,u,y,v,T,M,E,b,U,S,w,z,O,W=15e-13;n.t=e,n.error=0;var P=n.mo+n.mdot*n.t,F=n.argpo+n.argpdot*n.t,G=n.nodeo+n.nodedot*n.t;h=F,E=P;var Z=n.t*n.t;if(U=G+n.nodecf*Z,y=1-n.cc1*n.t,v=n.bstar*n.cc4*n.t,T=n.t2cof*Z,n.isimp!==1){l=n.omgcof*n.t;var X=1+n.eta*Math.cos(P);a=n.xmcof*(X*X*X-n.delmo),u=l+a,E=P+u,h=F-u,m=Z*n.t,g=m*n.t,y=y-n.d2*Z-n.d3*m-n.d4*g,v+=n.bstar*n.cc5*(Math.sin(E)-n.sinmao),T=T+n.t3cof*m+g*(n.t4cof+n.t*n.t5cof)}b=n.no;var K=n.ecco;if(M=n.inclo,n.method==="d"){_=n.t;var Y={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:_,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:K,argpm:h,inclm:M,xli:n.xli,mm:E,xni:n.xni,nodem:U,nm:b},J=Ag(Y);K=J.em,h=J.argpm,M=J.inclm,E=J.mm,U=J.nodem,b=J.nm}if(b<=0)return n.error=2,[!1,!1];var ee=Math.pow(An/b,rr)*y*y;if(b=An/Math.pow(ee,1.5),K-=v,K>=1||K<-.001)return n.error=1,[!1,!1];K<1e-6&&(K=1e-6),E+=n.no*T,w=E+h+U,U%=ut,h%=ut,w%=ut,E=(w-h-U)%ut;var H=Math.sin(M),ne=Math.cos(M),Q=K;if(S=M,d=h,O=U,z=E,s=H,r=ne,n.method==="d"){var ce={inclo:n.inclo,init:"n",ep:Q,inclp:S,nodep:O,argpp:d,mp:z,opsmode:n.operationmode},ge=ic(n,ce);if(Q=ge.ep,O=ge.nodep,d=ge.argpp,z=ge.mp,S=ge.inclp,S<0&&(S=-S,O+=hn,d-=hn),Q<0||Q>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(S),r=Math.cos(S),n.aycof=-.5*ei*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*ei*s*(3+5*r)/(1+r):n.xlcof=-.25*ei*s*(3+5*r)/W);var ye=Q*Math.cos(d);u=1/(ee*(1-Q*Q));var we=Q*Math.sin(d)+u*n.aycof,be=z+d+O+u*n.xlcof*ye,ze=(be-O)%ut;c=ze,p=9999.9;for(var k=1;Math.abs(p)>=1e-12&&k<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*ye-i*we,p=(ze-we*t+ye*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,k+=1;var je=ye*t+we*i,ve=ye*i-we*t,Te=ye*ye+we*we,Se=ee*(1-Te);if(Se<0)return n.error=4,[!1,!1];var Ue=ee*(1-je),Ee=Math.sqrt(ee)*ve/Ue,A=Math.sqrt(Se)/Ue,x=Math.sqrt(1-Te);u=ve/(1+x);var B=ee/Ue*(i-we-ye*u),oe=ee/Ue*(t-ye+we*u);f=Math.atan2(B,oe);var ae=(oe+oe)*B,re=1-2*B*B;u=1/Se;var xe=.5*Qn*u,pe=xe*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var Me=Ue*(1-1.5*pe*x*n.con41)+.5*xe*n.x1mth2*re;if(Me<1)return n.error=6,{position:!1,velocity:!1};f-=.25*pe*n.x7thm1*ae;var Re=O+1.5*pe*r*ae,Ie=S+1.5*pe*r*s*re,le=Ee-b*xe*n.x1mth2*ae/An,Be=A+b*xe*(n.x1mth2*re+1.5*n.con41)/An,C=Math.sin(f),se=Math.cos(f),de=Math.sin(Re),D=Math.cos(Re),te=Math.sin(Ie),he=Math.cos(Ie),Pe=-de*he,Le=D*he,ue=Pe*C+D*se,L=Le*C+de*se,me=te*C,_e=Pe*se-D*C,Ne=Le*se-de*C,De=te*se,We={x:Me*ue*qt,y:Me*L*qt,z:Me*me*qt},He={x:(le*ue+Be*_e)*Ls,y:(le*L+Be*Ne)*Ls,z:(le*me+Be*De)*Ls};return{position:We,velocity:He}}function wg(n,e){var t=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,c=e.xno,h=e.xnodeo,d,f,m,g,_,p,u,y,v,T,M,E,b,U,S,w,z,O,W,P,F,G,Z,X,K,Y,J,ee,H,ne,Q,ce,ge,ye,we,be,ze,k,je,ve,Te,Se,Ue,Ee,A,x,B,oe,ae,re,xe,pe,Me,Re,Ie,le,Be=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=r,n.ecco=s,n.argpo=o,n.inclo=a,n.mo=l,n.no=c,n.nodeo=h,n.operationmode=t;var C=78/qt+1,se=42/qt,de=se*se*se*se;n.init="y",n.t=0;var D={ecco:n.ecco,epoch:i,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},te=Tg(D),he=te.ao,Pe=te.con42,Le=te.cosio,ue=te.cosio2,L=te.eccsq,me=te.omeosq,_e=te.posq,Ne=te.rp,De=te.rteosq,We=te.sinio;if(n.no=te.no,n.con41=te.con41,n.gsto=te.gsto,n.a=Math.pow(n.no*xg,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,me>=0||n.no>=0){if(n.isimp=0,Ne<220/qt+1&&(n.isimp=1),J=C,F=de,O=(Ne-1)*qt,O<156){J=O-78,O<98&&(J=20);var He=(120-J)/qt;F=He*He*He*He,J=J/qt+1}W=1/_e,x=1/(he-J),n.eta=he*n.ecco*x,E=n.eta*n.eta,M=n.ecco*n.eta,P=Math.abs(1-E),p=F*Math.pow(x,4),u=p/Math.pow(P,3.5),g=u*n.no*(he*(1+1.5*E+M*(4+E))+.375*Qn*x/P*n.con41*(8+3*E*(8+E))),n.cc1=n.bstar*g,_=0,n.ecco>1e-4&&(_=-2*p*x*ei*n.no*We/n.ecco),n.x1mth2=1-ue,n.cc4=2*n.no*u*he*me*(n.eta*(2+.5*E)+n.ecco*(.5+2*E)-Qn*x/(he*P)*(-3*n.con41*(1-2*M+E*(1.5-.5*M))+.75*n.x1mth2*(2*E-M*(1+E))*Math.cos(2*n.argpo))),n.cc5=2*u*he*me*(1+2.75*(E+M)+M*E),y=ue*ue,Ue=1.5*Qn*W*n.no,Ee=.5*Ue*Qn*W,A=-.46875*Sg*W*W*n.no,n.mdot=n.no+.5*Ue*De*n.con41+.0625*Ee*De*(13-78*ue+137*y),n.argpdot=-.5*Ue*Pe+.0625*Ee*(7-114*ue+395*y)+A*(3-36*ue+49*y),oe=-Ue*Le,n.nodedot=oe+(.5*Ee*(4-19*ue)+2*A*(3-7*ue))*Le,B=n.argpdot+n.nodedot,n.omgcof=n.bstar*_*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-rr*p*n.bstar/M),n.nodecf=3.5*me*oe*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Le+1)>15e-13?n.xlcof=-.25*ei*We*(3+5*Le)/(1+Le):n.xlcof=-.25*ei*We*(3+5*Le)/Be,n.aycof=-.5*ei*We;var Qe=1+n.eta*Math.cos(n.mo);if(n.delmo=Qe*Qe*Qe,n.sinmao=Math.sin(n.mo),n.x7thm1=7*ue-1,2*hn/n.no>=225){n.method="d",n.isimp=1,Te=0,S=n.inclo;var st={epoch:i,ep:n.ecco,argpp:n.argpo,tc:Te,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},fe=Eg(st);n.e3=fe.e3,n.ee2=fe.ee2,n.peo=fe.peo,n.pgho=fe.pgho,n.pho=fe.pho,n.pinco=fe.pinco,n.plo=fe.plo,n.se2=fe.se2,n.se3=fe.se3,n.sgh2=fe.sgh2,n.sgh3=fe.sgh3,n.sgh4=fe.sgh4,n.sh2=fe.sh2,n.sh3=fe.sh3,n.si2=fe.si2,n.si3=fe.si3,n.sl2=fe.sl2,n.sl3=fe.sl3,n.sl4=fe.sl4,f=fe.sinim,d=fe.cosim,v=fe.em,T=fe.emsq,G=fe.s1,Z=fe.s2,X=fe.s3,K=fe.s4,Y=fe.s5,ee=fe.ss1,H=fe.ss2,ne=fe.ss3,Q=fe.ss4,ce=fe.ss5,ge=fe.sz1,ye=fe.sz3,we=fe.sz11,be=fe.sz13,ze=fe.sz21,k=fe.sz23,je=fe.sz31,ve=fe.sz33,n.xgh2=fe.xgh2,n.xgh3=fe.xgh3,n.xgh4=fe.xgh4,n.xh2=fe.xh2,n.xh3=fe.xh3,n.xi2=fe.xi2,n.xi3=fe.xi3,n.xl2=fe.xl2,n.xl3=fe.xl3,n.xl4=fe.xl4,n.zmol=fe.zmol,n.zmos=fe.zmos,z=fe.nm,ae=fe.z1,re=fe.z3,xe=fe.z11,pe=fe.z13,Me=fe.z21,Re=fe.z23,Ie=fe.z31,le=fe.z33;var Je={inclo:S,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},it=ic(n,Je);n.ecco=it.ep,n.inclo=it.inclp,n.nodeo=it.nodep,n.argpo=it.argpp,n.mo=it.mp,b=0,U=0,w=0;var Kt={cosim:d,emsq:T,argpo:n.argpo,s1:G,s2:Z,s3:X,s4:K,s5:Y,sinim:f,ss1:ee,ss2:H,ss3:ne,ss4:Q,ss5:ce,sz1:ge,sz3:ye,sz11:we,sz13:be,sz21:ze,sz23:k,sz31:je,sz33:ve,t:n.t,tc:Te,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:B,z1:ae,z3:re,z11:xe,z13:pe,z21:Me,z23:Re,z31:Ie,z33:le,ecco:n.ecco,eccsq:L,em:v,argpm:b,inclm:S,mm:w,nm:z,nodem:U,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},et=bg(Kt);n.irez=et.irez,n.atime=et.atime,n.d2201=et.d2201,n.d2211=et.d2211,n.d3210=et.d3210,n.d3222=et.d3222,n.d4410=et.d4410,n.d4422=et.d4422,n.d5220=et.d5220,n.d5232=et.d5232,n.d5421=et.d5421,n.d5433=et.d5433,n.dedt=et.dedt,n.didt=et.didt,n.dmdt=et.dmdt,n.dnodt=et.dnodt,n.domdt=et.domdt,n.del1=et.del1,n.del2=et.del2,n.del3=et.del3,n.xfact=et.xfact,n.xlamo=et.xlamo,n.xli=et.xli,n.xni=et.xni}n.isimp!==1&&(m=n.cc1*n.cc1,n.d2=4*he*x*m,Se=n.d2*x*n.cc1/3,n.d3=(17*he+J)*Se,n.d4=.5*Se*he*x*(221*he+31*J)*n.cc1,n.t3cof=n.d2+2*m,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*m)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*m*(2*n.d2+m)))}rc(n,0),n.init="n"}function Rg(n,e){var t="i",i=1440/(2*hn),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=$i,s.nodeo*=$i,s.argpo*=$i,s.mo*=$i,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=yg(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return s.jdsatepoch=aa(r,a,l,c,h,d),wg(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function Cg(n){return Pg(n)||Lg(n)||Dg(n)||Ug()}function Pg(n){if(Array.isArray(n))return Ks(n)}function Lg(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Dg(n,e){if(n){if(typeof n=="string")return Ks(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ks(n,e)}}function Ks(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Ug(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ig(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=aa.apply(void 0,Cg(r)),o=(s-i.jdsatepoch)*_g;return rc(i,o)}function Ng(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,o=2*s-s*s,a=Math.atan2(n.y,n.x)-e;a<-hn;)a+=ut;for(;a>hn;)a-=ut;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:a,latitude:h,height:f}}const wn=["#e8a33d","#4fb3d9","#8fd16a","#b58cf0"],dt=6371,ht=Math.PI/180,Ht=10,Fg=1.00005;function Jt(n,e,t=1,i=new N){const r=(e+180)*ht,s=n*ht;return i.set(-Math.cos(r)*Math.cos(s)*t,Math.sin(s)*t,Math.sin(r)*Math.cos(s)*t)}function tl(n){const e=n.clone().normalize(),t=Math.asin(e.y)/ht,i=(Math.atan2(e.z,-e.x)/ht-180+540)%360-180;return[t,i]}class Og{tMin;span;bins;binSize;isRange;count;validPct;D;renderer;scene=new sg;camera;controls;view;labels;cb;T0;NS;orbit;FU;TOBS;NADIR;CROSS;ALONG;fireU;earth;earthU;satObjs;boxLine;selGroup=new Jn;ring;footprints;raf=0;last=performance.now();lastTick=0;simT=0;playing=!0;speed=600;flyTo=null;drawing=0;p1=null;downXY=null;dragBox=!1;zoomTarget=null;zoomAnchor=null;pinch=new Map;pinchDist=0;order=new Int32Array(0);inMask=null;outline;disposed=!1;resizeObserver;tiles;satOn;constructor(e,t,i){this.D=t,this.cb=i,this.view=e;const r=t.cols,s=r.lat.length;this.count=s;const o=t.sats;let a=1/0,l=-1/0;for(let M=0;M<s;M++){const E=r.t[M];E<a&&(a=E),E>l&&(l=E)}Number.isFinite(a)||(a=Date.parse(`${t.window[0]}T00:00:00Z`)/1e3,l=a+86400),this.tMin=a,this.T0=a-1800;const c=l+1800;this.NS=Math.ceil((c-this.T0)/Ht)+1,this.span=l-a+900,this.isRange=!!t.range;const h=[...new Set(o.filter(M=>M.tle).map(M=>M.norad))],d=o.map(M=>M.tle?h.indexOf(M.norad):-1),f=new N;this.orbit=h.map(M=>{const E=o.find(w=>w.norad===M),b=Rg(E.tle[0],E.tle[1]),U=new Float32Array(this.NS*3),S=new Float32Array(this.NS);for(let w=0;w<this.NS;w++){const z=new Date((this.T0+w*Ht)*1e3),O=Ig(b,z);if(typeof O.position=="boolean")continue;const W=Ng(O.position,Ys(z));Jt(W.latitude/ht,W.longitude/ht,1,f),U[w*3]=f.x,U[w*3+1]=f.y,U[w*3+2]=f.z,S[w]=W.height}return{u:U,alt:S,sats:o.map((w,z)=>w.norad===M?z:-1).filter(w=>w>=0)}}),this.oiOf=d,this.FU=new Float32Array(s*3),this.TOBS=new Float32Array(s),this.NADIR=new Float32Array(s),this.CROSS=new Float32Array(s*3),this.ALONG=new Float32Array(s*3);const m=Float32Array.from(r.scan),g=Float32Array.from(r.track);this.scan=m,this.track=g;{const M=new N,E=new N,b=new N,U=new N,S=new N,w=new N;let z=0,O=0;for(let W=0;W<s;W++){Jt(r.lat[W],r.lon[W],1,M),this.FU[W*3]=M.x,this.FU[W*3+1]=M.y,this.FU[W*3+2]=M.z;const P=r.sat[W],F=o[P],G=d[P];if(G<0)this.TOBS[W]=r.t[W]-a,this.NADIR[W]=NaN,E.set(0,1,0).addScaledVector(M,-M.y),E.lengthSq()<1e-10&&E.set(1,0,0).addScaledVector(M,-M.x),E.normalize(),b.crossVectors(E,M).normalize(),F.system===2&&(m[W]=F.pixel_km,g[W]=F.pixel_km);else if(F.system===3){this.TOBS[W]=r.t[W]-a,this.satPos(G,r.t[W],w),this.subpoint(G,r.t[W],U),this.NADIR[W]=Math.acos(Math.min(1,U.dot(M)))*dt,E.copy(U).addScaledVector(M,-U.dot(M)),E.lengthSq()<1e-12&&E.set(0,1,0).addScaledVector(M,-M.y),E.normalize(),b.crossVectors(M,E).normalize(),S.subVectors(w,M);const Z=S.length()*dt;S.normalize();const X=Math.max(.12,S.dot(M)),K=F.pixel_km*Z/35786;m[W]=K,g[W]=K/X}else{const Z=this.orbit[G].u,X=Math.max(0,Math.floor((r.t[W]-180-this.T0)/Ht)),K=Math.min(this.NS-1,Math.ceil((r.t[W]+F.granule_s+420-this.T0)/Ht));let Y=-2,J=X;for(let H=X;H<=K;H++){const ne=Z[H*3]*M.x+Z[H*3+1]*M.y+Z[H*3+2]*M.z;ne>Y&&(Y=ne,J=H)}const ee=this.T0+J*Ht;this.TOBS[W]=ee-a,this.NADIR[W]=Math.acos(Math.min(1,Y))*dt,O++,this.NADIR[W]<=this.swathHalf(P,this.altAt(G,ee))*dt+100&&z++,this.subpoint(G,ee+Ht,U),this.subpoint(G,ee-Ht,S),E.subVectors(U,S),E.addScaledVector(M,-E.dot(M)).normalize(),b.crossVectors(M,E).normalize(),F.system===2&&(m[W]=F.pixel_km,g[W]=F.pixel_km)}this.ALONG[W*3]=E.x,this.ALONG[W*3+1]=E.y,this.ALONG[W*3+2]=E.z,this.CROSS[W*3]=b.x,this.CROSS[W*3+1]=b.y,this.CROSS[W*3+2]=b.z}this.validPct=O?100*z/O:100}this.binSize=this.span<=2*86400?900:Math.ceil(this.span/240/3600)*3600;const _=Math.ceil(this.span/this.binSize)+1;this.bins=[0,1,2,3].map(()=>new Float32Array(_));for(let M=0;M<s;M++){const E=Math.floor(this.TOBS[M]/this.binSize);E>=0&&E<_&&this.bins[o[r.sat[M]].system][E]++}nt.enabled=!1,this.renderer=new ec({antialias:!0}),this.renderer.outputColorSpace=mn,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.domElement.className="fm-globe-canvas",e.appendChild(this.renderer.domElement),this.labels=document.createElement("div"),this.labels.className="fm-globe-labels",e.appendChild(this.labels),this.camera=new en(40,1,.001,300),this.camera.position.copy(Jt(20,30,3.6)),this.controls=new gg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=1.0004,this.controls.maxDistance=25,this.controls.rotateSpeed=.5,this.controls.enableZoom=!1,this.controls.enablePan=!1;{const M=new _t,E=[];for(let b=0;b<3e3;b++){const U=new N().randomDirection().multiplyScalar(120+Math.random()*60);E.push(U.x,U.y,U.z)}M.setAttribute("position",new yt(E,3)),this.scene.add(new lg(M,new tc({color:7829367,size:.25})))}this.earthU={dayTex:{value:null},nightTex:{value:null},hasTex:{value:0},sunDir:{value:new N(1,0,0)}},this.earth=new Dt(new Xr(1,192,96),new nn({uniforms:this.earthU,vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D dayTex, nightTex; uniform float hasTex; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){
            float d = dot(normalize(vN), sunDir), k = smoothstep(-0.10, 0.10, d);
            vec3 day = hasTex > 0.5 ? texture2D(dayTex, vUv).rgb : vec3(0.12,0.2,0.3);
            vec3 night = hasTex > 0.5 ? texture2D(nightTex, vUv).rgb * 0.9 + day * 0.07 : vec3(0.02);
            gl_FragColor = vec4(mix(night, day * (0.75 + 0.25 * max(d, 0.)), k), 1.);
          }`})),this.scene.add(this.earth);const p=new nc;Promise.all(["earth-blue-marble.jpg","earth-night.jpg"].map(M=>new Promise((E,b)=>p.load(`https://unpkg.com/three-globe@2.31.0/example/img/${M}`,E,void 0,b)))).then(([M,E])=>{this.disposed||(this.earthU.dayTex.value=M,this.earthU.nightTex.value=E,this.earthU.hasTex.value=1)}).catch(()=>{}),this.scene.add(new Dt(new Xr(1.015,64,32),new nn({transparent:!0,depthWrite:!1,side:Ft,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-abs(dot(vN,vV)),3.); gl_FragColor=vec4(0.55,0.65,0.8,f*0.5); }"}))),this.tiles=new zg(this.scene,this.renderer,this.earthU.sunDir),this.satOn=o.map(()=>!0),this.fireU={uTime:{value:0},uWindow:{value:1e9},uGeoWin:{value:900},uMinConf:{value:0},uMinFrp:{value:0},uDn:{value:0},uUseIn:{value:0},uPx:{value:800},uMinPx:{value:2.5*this.renderer.getPixelRatio()},uDpr:{value:this.renderer.getPixelRatio()},uMask:{value:new Array(16).fill(1)},uSysCol:{value:wn.map(M=>new tt(M))}},this.buildFires();const u=150,y=13,v=128;this.satObjs=this.orbit.map((M,E)=>{const b=o[M.sats[0]],U=new tt(wn[b.system]??"#ffffff"),S=b.system===3,w=new Jn,z=new Ji({color:14211288});w.add(new Dt(new oi(.6,.6,1),z)),w.add(new Dt(new oi(2.6,.05,.7),new Ji({color:U}))),this.scene.add(w);const O={oi:E,geo:S,sats:M.sats,grp:w,on:!0,label:document.createElement("div")};if(S){const W=new _t;W.setAttribute("position",new Rt(new Float32Array(v*3),3)),O.disk=new og(W,new cg({color:U,dashSize:.03,gapSize:.02,transparent:!0,opacity:.8})),O.disk.frustumCulled=!1,this.scene.add(O.disk)}else{const W=new _t;W.setAttribute("position",new Rt(new Float32Array(u*y*3),3)),W.setAttribute("aA",new Rt(new Float32Array(u*y),1));const P=[];for(let F=0;F<u-1;F++)for(let G=0;G<y-1;G++){const Z=F*y+G,X=Z+y;P.push(Z,Z+1,X,Z+1,X+1,X)}W.setIndex(P),O.swath=new Dt(W,new nn({uniforms:{c:{value:U}},transparent:!0,depthWrite:!1,side:Yt,vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying float vA; void main(){ gl_FragColor=vec4(c, vA); }"})),O.swath.renderOrder=1,O.swath.frustumCulled=!1,this.scene.add(O.swath)}return O.label.className="fm-globe-label",O.label.style.color=wn[b.system]??"#fff",O.label.textContent=`${M.sats.map(W=>o[W].symbol).join(" ")} ${b.name.replace(" FRP","")}`,this.labels.appendChild(O.label),O}),this.SW_N=u,this.SW_W=y,this.GEO_N=v,this.boxLine=new ia(new _t,new Qi({color:16777215,transparent:!0,opacity:.95})),this.boxLine.renderOrder=8,this.boxLine.frustumCulled=!1,this.scene.add(this.boxLine),this.ring=new Dt(new ra(.8,1,40),new Ji({color:16777215,side:Yt,transparent:!0,opacity:.9,depthTest:!1})),this.ring.renderOrder=6,this.footprints=new Wo(new _t,new Qi({color:16777215,transparent:!0,opacity:.8})),this.footprints.renderOrder=5,this.footprints.frustumCulled=!1,this.selGroup.add(this.ring,this.footprints),this.selGroup.visible=!1,this.scene.add(this.selGroup),this.outline=new Wo(new _t,new Qi({color:16765562,transparent:!0,opacity:.9})),this.outline.renderOrder=7,this.outline.frustumCulled=!1,this.outline.visible=!1,this.scene.add(this.outline);const T=this.renderer.domElement;T.style.touchAction="none",T.addEventListener("pointerdown",this.onDown),T.addEventListener("pointermove",this.onMove),T.addEventListener("pointerup",this.onUp),T.addEventListener("pointercancel",this.onCancel),T.addEventListener("wheel",this.onWheel,{passive:!1}),this.isRange&&(this.simT=this.span,this.playing=!1),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.raf=requestAnimationFrame(this.frame)}oiOf;fireGeo;scan;track;SW_N;SW_W;GEO_N;subpoint(e,t,i=new N){const r=this.orbit[e];let s=(t-this.T0)/Ht;s=Math.max(0,Math.min(this.NS-1.001,s));const o=Math.floor(s),a=s-o,l=o*3;return i.set(r.u[l]+(r.u[l+3]-r.u[l])*a,r.u[l+1]+(r.u[l+4]-r.u[l+1])*a,r.u[l+2]+(r.u[l+5]-r.u[l+2])*a).normalize()}altAt(e,t){return this.orbit[e].alt[Math.max(0,Math.min(this.NS-1,Math.round((t-this.T0)/Ht)))]}satPos(e,t,i=new N){return this.subpoint(e,t,i).multiplyScalar(1+this.altAt(e,t)/dt)}swathHalf(e,t){const i=this.D.sats[e].scan_deg*ht,r=(dt+t)/dt*Math.sin(i);return r>=1?Math.acos(dt/(dt+t)):Math.asin(r)-i}buildFires(){const e=this.D.cols,t=this.D.sats,i=this.count,r=new fg;r.setAttribute("position",new Rt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=i;const s=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),h=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i).fill(1),p=[1,2,3,0],u=Array.from({length:i},(T,M)=>M).sort((T,M)=>p[t[e.sat[T]].system]-p[t[e.sat[M]].system]||T-M);this.order=Int32Array.from(u);for(let T=0;T<i;T++){const M=u[T],E=t[e.sat[M]],b=this.scan[M]/2/dt,U=this.track[M]/2/dt;for(let S=0;S<3;S++)s[T*3+S]=this.FU[M*3+S]*Fg,o[T*3+S]=this.CROSS[M*3+S]*b,a[T*3+S]=this.ALONG[M*3+S]*U;l[T]=this.TOBS[M],c[T]=e.sat[M],h[T]=E.system,d[T]=E.pattern,f[T]=e.conf[M],m[T]=e.dn[M]?2:1,g[T]=e.frp[M]??0}const y=(T,M)=>new ag(T,M);r.setAttribute("iC",y(s,3)),r.setAttribute("iX",y(o,3)),r.setAttribute("iY",y(a,3)),r.setAttribute("aT",y(l,1)),r.setAttribute("aSat",y(c,1)),r.setAttribute("aSys",y(h,1)),r.setAttribute("aPat",y(d,1)),r.setAttribute("aConf",y(f,1)),r.setAttribute("aDn",y(m,1)),r.setAttribute("aFrp",y(g,1)),r.setAttribute("aIn",y(_,1)),this.fireGeo=r;const v=new Dt(r,new nn({uniforms:this.fireU,transparent:!0,depthWrite:!1,side:Yt,vertexShader:`
          attribute vec3 iC, iX, iY;
          attribute float aT, aSat, aSys, aPat, aConf, aDn, aFrp, aIn;
          uniform float uTime, uWindow, uGeoWin, uMinConf, uMinFrp, uDn, uUseIn, uPx, uMinPx; uniform float uMask[16]; uniform vec3 uSysCol[4];
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            float age = uTime - aT;
            float win = aSys > 2.5 ? min(uWindow, uGeoWin) : uWindow;
            if (age < 0.0 || age > win || uMask[int(aSat + 0.5)] < 0.5 || aConf < uMinConf - 0.5 || aFrp < uMinFrp
                || (uDn > 0.5 && abs(aDn - uDn) > 0.5) || (uUseIn > 0.5 && aIn < 0.5)) { gl_Position = vec4(2.,2.,2.,1.); return; }
            vec3 c = uSysCol[int(aSys + 0.5)];
            vec4 mvC = modelViewMatrix * vec4(iC, 1.);
            float px = 2. * max(length(iX), length(iY)) * uPx / max(-mvC.z, 1e-6);
            float k = max(1., uMinPx / px);
            vFlash = exp(-age / 120.);
            if (px * k < 40.) k *= 1. + 4. * vFlash;
            vec3 p = iC + (iX * position.x + iY * position.y) * k;
            vUv = position.xy; vPx = px * k; vCol = mix(c, vec3(1.), (px * k >= 40. ? 0.6 : 0.) * vFlash); vSys = aSys; vPat = aPat;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
          }`,fragmentShader:`
          uniform float uDpr;
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            if (vFlash > 0.08 && vPx < 200.) { float a = smoothstep(1., 0., length(vUv)); gl_FragColor = vec4(mix(vCol, vec3(1.), vFlash * 0.7), a); return; }
            if (vPx < 12.) { gl_FragColor = vec4(vCol, 0.92); return; }
            float u = uDpr;
            vec2 q = vUv * vPx * 0.5 + 4096.;
            float m = max(abs(vUv.x), abs(vUv.y));
            if (m > 1. - 2. * 2.2 * u / vPx) {
              float s = abs(vUv.x) > abs(vUv.y) ? q.y : q.x;
              bool on = true;
              if (vSys > 0.5 && vSys < 1.5) on = mod(s, 9. * u) < 5.5 * u;
              else if (vSys > 1.5 && vSys < 2.5) on = mod(s, 5. * u) < 2.2 * u;
              else if (vSys > 2.5) { float k = mod(s, 13. * u); on = k < 6.5 * u || (k > 8.6 * u && k < 10.6 * u); }
              gl_FragColor = vec4(vCol, on ? 1. : 0.1); return;
            }
            float P = 7. * u, a;
            if (vPat < 0.5) a = 0.42;
            else if (vPat < 1.5) a = mod(q.x + q.y, P) < 2.2 * u ? 0.95 : 0.1;
            else if (vPat < 2.5) a = length(mod(q, P) - 0.5 * P) < 1.5 * u ? 0.95 : 0.1;
            else if (vPat < 3.5) a = (mod(q.x + q.y, P) < 1.6 * u || mod(q.x - q.y, P) < 1.6 * u) ? 0.9 : 0.1;
            else a = mod(q.y, P) < 2. * u ? 0.95 : 0.1;
            gl_FragColor = vec4(vCol, a);
          }`}));v.frustumCulled=!1,v.renderOrder=2,this.scene.add(v)}setPlaying(e){e&&this.simT>=this.span&&(this.simT=-600),this.playing=e}setSpeed(e){this.speed=e}setTime(e){this.simT=Math.max(-600,Math.min(this.span,e))}setWindow(e){this.fireU.uWindow.value=e}setFilters(e){const t=this.fireU.uMask.value;this.D.sats.forEach((i,r)=>{const s=e.sats[r]!==!1;t[r]=s?1:0,this.satOn[r]=s});for(const i of this.satObjs)i.on=i.sats.some(r=>this.satOn[r]);this.fireU.uMinConf.value=e.minConf,this.fireU.uMinFrp.value=e.minFrp,this.fireU.uDn.value=e.dayNight}setAreaMask(e){if(this.inMask=e,this.fireU.uUseIn.value=e?1:0,!e)return;const t=this.fireGeo.getAttribute("aIn"),i=t.array;for(let r=0;r<this.order.length;r++)i[r]=e[this.order[r]];t.needsUpdate=!0}setOutline(e){if(!e?.length){this.outline.visible=!1;return}const t=[],i=new N,r=new N;for(const s of e)for(let o=0;o<s.length-1;o++)Jt(s[o][1],s[o][0],1.0005,i),Jt(s[o+1][1],s[o+1][0],1.0005,r),t.push(i.x,i.y,i.z,r.x,r.y,r.z);this.outline.geometry.setAttribute("position",new yt(t,3)),this.outline.geometry.computeBoundingSphere(),this.outline.visible=!0}setDrawing(e){this.drawing=e?1:0,this.p1=null,this.dragBox=!1,this.controls.enabled=!e,this.renderer.domElement.style.cursor=e?"crosshair":""}setBox(e){if(!e){this.boxLine.visible=!1;return}const[t,i,r,s]=e,o=[],a=60;for(let l=0;l<=a;l++)o.push(Jt(i,t+(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(i+(s-i)*l/a,r,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s,r-(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s-(s-i)*l/a,t,1.0004));this.boxLine.geometry.setFromPoints(o),this.boxLine.visible=!0}flyToBox(e){const[t,i,r,s]=e,o=(i+s)/2,l=Math.max((r-t)*Math.cos(o*ht),s-i)*ht/.7/2/Math.tan(this.camera.fov*ht/2)*dt*Math.max(1,1/this.camera.aspect);this.flyToView({lat:o,lon:(t+r)/2,altKm:l})}flyToView(e){const t=Math.min(24,Math.max(4e-4,e.altKm/dt));this.zoomTarget=null,this.flyTo=Jt(e.lat,e.lon,1+t)}flyHome(){this.zoomTarget=null,this.flyTo=this.camera.position.clone().normalize().multiplyScalar(3.6)}zoomToSelection(){this.selGroup.visible&&(this.zoomTarget=null,this.flyTo=this.ring.position.clone().normalize().multiplyScalar(1.003))}clearSelection(){this.selGroup.visible=!1}cameraView(){const[e,t]=tl(this.camera.position);return{lat:Math.round(e*1e3)/1e3,lon:Math.round(t*1e3)/1e3,altKm:Math.round((this.camera.position.length()-1)*dt)}}hotspots(e=8,t=.25){const i=this.D.cols,r=new Map,s=Math.ceil(360/t);for(let o=0;o<this.count;o++){if(!this.isVisible(o))continue;const a=Math.floor((i.lat[o]+90)/t)*s+Math.floor((i.lon[o]+180)/t);let l=r.get(a);l||r.set(a,l={la:0,lo:0,count:0,frp:0,last:0}),l.la+=i.lat[o],l.lo+=i.lon[o],l.count++,l.frp+=i.frp[o]??0,l.last=Math.max(l.last,i.t[o])}return[...r.values()].sort((o,a)=>a.frp-o.frp||a.count-o.count).slice(0,e).map(o=>({lat:o.la/o.count,lon:o.lo/o.count,count:o.count,frp:o.frp,last:o.last}))}csv(e){const t=this.D.cols,i=["satellite,latitude,longitude,time_utc,frp_mw,confidence,day_night,scan_km,track_km"];for(let r=0;r<this.count;r++)t.lon[r]<e[0]||t.lon[r]>e[2]||t.lat[r]<e[1]||t.lat[r]>e[3]||!this.isVisible(r)||i.push([this.D.sats[t.sat[r]].code,t.lat[r],t.lon[r],new Date(t.t[r]*1e3).toISOString(),t.frp[r]??"",["low","nominal","high"][t.conf[r]]??"",t.dn[r]?"N":"D",this.scan[r].toFixed(2),this.track[r].toFixed(2)].join(","));return i.join(`
`)+`
`}stats(e){const t=this.D.cols,i={total:0,bySystem:[0,0,0,0],bySat:this.D.sats.map(()=>0),frp:0};for(let r=0;r<this.count;r++)e&&(t.lon[r]<e[0]||t.lon[r]>e[2]||t.lat[r]<e[1]||t.lat[r]>e[3])||this.isVisible(r)&&(i.total++,i.bySat[t.sat[r]]++,i.bySystem[this.D.sats[t.sat[r]].system]++,i.frp+=t.frp[r]??0);return i}hitLL(e){const t=this.hit(e);return t?tl(t):null}hit(e){const t=this.renderer.domElement.getBoundingClientRect(),i=new Ke((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new pg;return r.setFromCamera(i,this.camera),r.intersectObject(this.earth)[0]?.point??null}boxFrom(e,t){return[Math.min(e[1],t[1]),Math.min(e[0],t[0]),Math.max(e[1],t[1]),Math.max(e[0],t[0])].map(i=>Math.round(i*100)/100)}onDown=e=>{if(this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2){const[t,i]=[...this.pinch.values()];this.pinchDist=Math.hypot(t[0]-i[0],t[1]-i[1]),this.downXY=null;return}if(this.downXY=[e.clientX,e.clientY],this.flyTo=null,this.drawing===1){const t=this.hitLL(e);if(!t)return;this.p1=[t[0],t[1]],this.dragBox=!0,this.renderer.domElement.setPointerCapture(e.pointerId)}};onMove=e=>{if(this.pinch.has(e.pointerId)&&this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2&&this.pinchDist>0){const[t,i]=[...this.pinch.values()],r=Math.hypot(t[0]-i[0],t[1]-i[1]);r>0&&this.zoomBy(this.pinchDist/r,{clientX:(t[0]+i[0])/2,clientY:(t[1]+i[1])/2},!0),this.pinchDist=r;return}if(this.drawing===1&&this.dragBox&&this.p1||this.drawing===2&&this.p1){const t=this.hitLL(e);t&&this.setBox(this.boxFrom(this.p1,t))}};onCancel=e=>{this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0)};onUp=e=>{if(this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0),this.drawing){const i=this.hitLL(e),r=this.downXY?Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1]):0;if(this.drawing===1&&this.dragBox&&this.p1&&i&&r>8){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}else if(this.drawing===1&&this.p1)this.drawing=2,this.dragBox=!1,this.cb.onBoxPoint(1,null);else if(this.drawing===2&&this.p1&&i){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}this.downXY=null;return}if(!this.downXY||Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1])>5)return;this.downXY=null;const t=this.hit(e);if(!t){this.select(-1);return}this.select(this.nearest(t.clone().normalize()))};onWheel=e=>{e.preventDefault();const t=e.deltaMode===1?e.deltaY*16:e.deltaY;this.zoomBy(Math.exp(Math.max(-1,Math.min(1,t/400))),e,!1)};zoomBy(e,t,i){const r=this.zoomTarget??this.camera.position.length()-1,s=Math.min(24,Math.max(4e-4,r*e));this.flyTo=null,this.zoomTarget=s,this.zoomAnchor=e<1?this.hit(t)?.normalize()??null:null,i&&this.applyZoom(1)}applyZoom(e){if(this.zoomTarget==null)return;const t=this.camera.position.length(),i=t-1,r=i+(this.zoomTarget-i)*e,s=this.camera.position.clone().divideScalar(t);if(this.zoomAnchor&&r<i){const o=Math.min(1,(1-r/i)*.9);s.lerp(this.zoomAnchor,o).normalize()}this.camera.position.copy(s.multiplyScalar(1+r)),Math.abs(this.zoomTarget-r)<this.zoomTarget*.002&&(this.zoomTarget=null,this.zoomAnchor=null)}isVisible(e){const t=this.D.cols,i=this.simT-this.TOBS[e],s=this.D.sats[t.sat[e]].system===3?Math.min(this.fireU.uWindow.value,this.fireU.uGeoWin.value):this.fireU.uWindow.value;if(i<0||i>s||!this.satOn[t.sat[e]]||t.conf[e]<this.fireU.uMinConf.value||(t.frp[e]??0)<this.fireU.uMinFrp.value)return!1;const o=this.fireU.uDn.value;return o&&(t.dn[e]?2:1)!==o?!1:!this.inMask||this.inMask[e]===1}nearest(e){const t=this.fireU.uPx.value/this.camera.position.distanceTo(e),i=Math.cos(Math.max(8/dt,14*this.renderer.getPixelRatio()/t));let r=-1,s=1/0;const o=this.FU;for(let a=0;a<this.count;a++){const l=o[a*3]*e.x+o[a*3+1]*e.y+o[a*3+2]*e.z;if(l<i||!this.isVisible(a))continue;const c=this.scan[a]/2/dt,h=this.track[a]/2/dt,d=Math.max(1,this.fireU.uMinPx.value/(2*Math.max(c,h)*t)),f=e.x-o[a*3],m=e.y-o[a*3+1],g=e.z-o[a*3+2],_=(f*this.CROSS[a*3]+m*this.CROSS[a*3+1]+g*this.CROSS[a*3+2])/(c*d),p=(f*this.ALONG[a*3]+m*this.ALONG[a*3+1]+g*this.ALONG[a*3+2])/(h*d),u=Math.max(Math.abs(_),Math.abs(p)),y=u<=1?u:10+Math.acos(Math.min(1,l))*t;y<s&&(s=y,r=a)}return r}footprintSegs(e,t){const i=new N(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]),r=new N(this.CROSS[e*3],this.CROSS[e*3+1],this.CROSS[e*3+2]),s=new N(this.ALONG[e*3],this.ALONG[e*3+1],this.ALONG[e*3+2]),o=this.scan[e]/2/dt*1.08,a=this.track[e]/2/dt*1.08,l=(h,d)=>i.clone().addScaledVector(r,h*o).addScaledVector(s,d*a).normalize().multiplyScalar(1.00006),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];for(let h=0;h<4;h++){const d=c[h],f=c[(h+1)%4];t.push(d.x,d.y,d.z,f.x,f.y,f.z)}}select(e){if(e<0){this.selGroup.visible=!1,this.cb.onPick(null);return}const t=this.D.cols,i=this.D.sats,r=t.sat[e],s=i[r],o=this.oiOf[r],a=this.TOBS[e]+this.tMin,l=s.system===3,c=new N(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]);this.ring.position.copy(c).multiplyScalar(1.00007),this.ring.lookAt(c.clone().multiplyScalar(2)),this.selGroup.visible=!0;const h=o<0?null:Math.acos(this.satPos(o,a).clone().sub(c).normalize().dot(c))/ht,d=[],f=[],m=new Map,g=Math.max(1.5,this.scan[e],this.track[e]),_=Math.cos(25/dt),p=Math.cos(g/dt);for(let u=0;u<this.count;u++){const y=this.FU[u*3]*c.x+this.FU[u*3+1]*c.y+this.FU[u*3+2]*c.z;if(y<_)continue;t.sat[u]===r&&Math.abs(this.TOBS[u]-this.TOBS[e])<(l?1:900)?(d.push(u),this.footprintSegs(u,f)):y>=p&&m.set(t.sat[u],(m.get(t.sat[u])??0)+1)}this.footprints.geometry.setAttribute("position",new yt(f,3)),this.footprints.geometry.computeBoundingSphere(),this.cb.onPick({index:e,sat:s,lat:t.lat[e],lon:t.lon[e],time:t.t[e],frp:t.frp[e],conf:t.conf[e],confRaw:t.craw[e],dayNight:t.dn[e]?"N":"D",scanKm:this.scan[e],trackKm:this.track[e],growth:Math.sqrt(this.scan[e]*this.track[e])/s.pixel_km,b4:t.b4?.[e]??null,b5:t.b5?.[e]??null,version:t.ver&&this.D.versions?this.D.versions[t.ver[e]]??null:null,altitudeKm:o<0?null:this.altAt(o,a),nadirKm:Number.isFinite(this.NADIR[e])?this.NADIR[e]:null,viewZenith:h,samePass:d.length,samePassFrp:d.reduce((u,y)=>u+(t.frp[y]??0),0),others:[...m].sort((u,y)=>y[1]-u[1]).map(([u,y])=>({sat:i[u],count:y}))})}resize(){const e=this.view.clientWidth,t=this.view.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fireU.uPx.value=t*this.renderer.getPixelRatio()/(2*Math.tan(this.camera.fov*ht/2)))}updateSats(e){const t=new N,i=new N,r=new N,s=new N,o=new N,a=new N,l=new gt;for(const c of this.satObjs){const h=c.sats[0],d=c.oi;this.satPos(d,e,t),c.grp.visible=c.on,c.grp.position.copy(t),i.copy(t).normalize();const f=this.subpoint(d,e+Ht,r).sub(this.subpoint(d,e-Ht,s));f.addScaledVector(i,-f.dot(i)),f.lengthSq()<1e-14&&f.set(0,1,0).addScaledVector(i,-i.y),f.normalize(),l.makeBasis(o.crossVectors(i,f),i,f),c.grp.quaternion.setFromRotationMatrix(l),c.grp.scale.setScalar(Math.max(.004,this.camera.position.distanceTo(t)*.011));const m=this.altAt(d,e);if(c.swath){if(c.swath.visible=c.on,c.on){const g=c.swath.geometry.attributes.position.array,_=c.swath.geometry.attributes.aA.array,p=this.swathHalf(h,m),u=new N;for(let y=0;y<this.SW_N;y++){const v=e-y*Ht;this.subpoint(d,v,u),this.subpoint(d,v+Ht,r),this.subpoint(d,v-Ht,s),s.subVectors(r,s).normalize(),o.crossVectors(u,s).normalize();const T=.32*Math.pow(1-y/this.SW_N,1.4);for(let M=0;M<this.SW_W;M++){const E=p*(2*M/(this.SW_W-1)-1);a.copy(u).multiplyScalar(Math.cos(E)).addScaledVector(o,Math.sin(E)).normalize().multiplyScalar(1.002);const b=y*this.SW_W+M;g[b*3]=a.x,g[b*3+1]=a.y,g[b*3+2]=a.z,_[b]=M===0||M===this.SW_W-1?Math.min(1,T*1.8):T}}c.swath.geometry.attributes.position.needsUpdate=!0,c.swath.geometry.attributes.aA.needsUpdate=!0}}else if(c.disk){const g=this.subpoint(d,e,new N),_=this.swathHalf(h,m),p=new N(0,1,0).addScaledVector(g,-g.y).normalize(),u=new N().crossVectors(g,p);c.disk.visible=c.on;const y=c.disk.geometry.attributes.position.array;for(let v=0;v<this.GEO_N;v++){const T=v/this.GEO_N*Math.PI*2;a.copy(g).multiplyScalar(Math.cos(_)).addScaledVector(p,Math.sin(_)*Math.cos(T)).addScaledVector(u,Math.sin(_)*Math.sin(T)).multiplyScalar(1.002),y[v*3]=a.x,y[v*3+1]=a.y,y[v*3+2]=a.z}c.disk.geometry.attributes.position.needsUpdate=!0,c.disk.computeLineDistances()}}}sunDir(e,t){const i=new Date(e*1e3),r=e/86400-10957.5,s=(357.529+.98560028*r)*ht,a=(280.459+.98564736*r+1.915*Math.sin(s)+.02*Math.sin(2*s))*ht,l=(23.439-36e-8*r)*ht,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),h=Math.asin(Math.sin(l)*Math.sin(a));let d=(c-Ys(i))/ht;return d=(d+540)%360-180,Jt(h/ht,d,1,t)}frame=e=>{if(this.disposed)return;const t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.playing&&(this.setTime(this.simT+t*this.speed),this.simT>=this.span&&(this.playing=!1));const i=this.tMin+this.simT;this.fireU.uTime.value=this.simT,this.sunDir(i,this.earthU.sunDir.value),this.updateSats(i);const r=1-Math.exp(-t*5);if(this.flyTo){const m=this.camera.position.length(),g=this.camera.position.clone().divideScalar(m),_=this.flyTo.clone().normalize(),p=g.lerp(_,r);p.lengthSq()<1e-6&&p.set(0,1,0);const u=Math.log(m-1),y=Math.log(this.flyTo.length()-1);this.camera.position.copy(p.normalize().multiplyScalar(1+Math.exp(u+(y-u)*r))),p.angleTo(_)<1e-4&&Math.abs(u-y)<.01&&(this.flyTo=null)}this.applyZoom(Math.min(1,r*1.6));const s=this.camera.position.length()-1;this.controls.rotateSpeed=Math.min(.5,Math.max(6e-4,s*.19)),this.controls.update();const o=this.camera.position.length()-1,a=Math.max(3e-5,o*.3);Math.abs(a-this.camera.near)/this.camera.near>.05&&(this.camera.near=a,this.camera.updateProjectionMatrix()),this.selGroup.visible&&this.ring.scale.setScalar(Math.max(o*.012,4e-5)),this.tiles.update(this.camera,this.view.clientWidth,this.view.clientHeight);const l=this.view.clientWidth,c=this.view.clientHeight,h=this.camera.position,d=new N,f=new N;for(const m of this.satObjs){if(!m.on){m.label.style.display="none";continue}const g=m.grp.position;d.subVectors(g,h);const _=d.length();d.divideScalar(_);const p=h.dot(d),u=p*p-(h.lengthSq()-1),y=-p-Math.sqrt(Math.max(u,0));f.copy(g).project(this.camera);const v=u>0&&y>0&&y<_||f.z>1;m.label.style.display=v?"none":"",v||(m.label.style.transform=`translate(${(f.x+1)/2*l+10}px, ${(1-f.y)/2*c-8}px)`)}this.renderer.render(this.scene,this.camera),e-this.lastTick>120&&(this.lastTick=e,this.cb.onTick(this.simT,this.playing)),this.raf=requestAnimationFrame(this.frame)};dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),this.renderer.domElement.removeEventListener("pointerdown",this.onDown),this.renderer.domElement.removeEventListener("pointerup",this.onUp),this.renderer.domElement.removeEventListener("pointermove",this.onMove),this.renderer.domElement.removeEventListener("pointercancel",this.onCancel),this.renderer.domElement.removeEventListener("wheel",this.onWheel),this.controls.dispose(),this.tiles.dispose(),this.scene.traverse(e=>{const t=e;t.geometry?.dispose?.();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i?.dispose?.()}),this.renderer.dispose(),this.renderer.domElement.remove(),this.labels.remove()}}class zg{constructor(e,t,i){this.sunDir=i,e.add(this.group),this.loader.setCrossOrigin("anonymous"),this.aniso=t.capabilities.getMaxAnisotropy()}sunDir;group=new Jn;cache=new Map;queue=[];frame=0;loading=0;loader=new nc;aniso;dead=!1;url(e,t,i){return`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${e}/${i}/${t}`}mesh(e,t){const i=(d,f)=>Math.atan(Math.sinh(Math.PI*(1-2*f/2**d)))/ht,r=2**e.z,s=Math.max(6,Math.min(64,Math.ceil(360/r/.15))),o=new Float32Array((s+1)*(s+1)*3),a=new Float32Array((s+1)*(s+1)*2),l=[],c=new N;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){const m=d*(s+1)+f;Jt(i(e.z,e.y+d/s),(e.x+f/s)/r*360-180,e.r,c),o[m*3]=c.x,o[m*3+1]=c.y,o[m*3+2]=c.z,a[m*2]=f/s,a[m*2+1]=1-d/s,f<s&&d<s&&l.push(m,m+s+1,m+1,m+1,m+s+1,m+s+2)}const h=new _t;return h.setAttribute("position",new Rt(o,3)),h.setAttribute("uv",new Rt(a,2)),h.setIndex(l),h.computeBoundingSphere(),new Dt(h,new nn({uniforms:{map:{value:t},sunDir:this.sunDir},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){ vec3 c = texture2D(map, vUv).rgb; float k = smoothstep(-0.10, 0.10, dot(vN, sunDir)); gl_FragColor = vec4(c * mix(0.3, 1., k), 1.); }`,side:Yt}))}need(e,t,i,r){const s=`${e}/${t}/${i}`;let o=this.cache.get(s);o||(o={key:s,z:e,x:t,y:i,r,state:"queued",mesh:null,used:this.frame},this.cache.set(s,o),this.queue.push(o)),o.used=this.frame}pump(){for(;this.loading<8&&this.queue.length;){const e=this.queue.pop();if(this.frame-e.used>20){this.cache.delete(e.key);continue}this.loading++,e.state="loading",this.loader.load(this.url(e.z,e.x,e.y),t=>{if(this.loading--,t.anisotropy=this.aniso,this.dead||!this.cache.has(e.key)){t.dispose();return}e.mesh=this.mesh(e,t),e.state="ready",this.group.add(e.mesh)},void 0,()=>{this.loading--,e.state="error"})}}update(e,t,i){this.frame++;const r=e.position.length()-1,s=e.position.clone().normalize(),o=Math.asin(s.y)/ht,a=Math.atan2(s.z,-s.x)/ht-180,l=2*r*dt*Math.tan(e.fov*ht/2)/Math.max(1,i),c=Math.max(.05,Math.cos(o*ht)),h=Math.min(18,Math.round(Math.log2(40075*c/(256*l))+.4));if(h>=5){const d=(f,m,g)=>{const _=2**f,p=(a+180)/360*_,u=(1-Math.log(Math.tan(o*ht)+1/Math.cos(o*ht))/Math.PI)/2*_;for(let y=-m;y<=m;y++)for(let v=-m;v<=m;v++){const T=Math.floor(u)+y;T>=0&&T<_&&this.need(f,((Math.floor(p)+v)%_+_)%_,T,g)}};h-3>=5&&d(h-3,1,1.000012),d(h,Math.min(5,Math.ceil(Math.max(t,i)*l/(40075*c/2**h)/2)+1),1.00002)}for(const d of this.cache.values())d.mesh&&(d.mesh.visible=d.used===this.frame);if(this.pump(),this.cache.size>350){const d=[...this.cache.values()].filter(f=>f.used!==this.frame&&f.state!=="loading").sort((f,m)=>f.used-m.used);for(const f of d.slice(0,this.cache.size-300)){if(f.mesh){this.group.remove(f.mesh),f.mesh.geometry.dispose();const g=f.mesh.material;g.uniforms.map.value.dispose(),g.dispose()}this.cache.delete(f.key);const m=this.queue.indexOf(f);m>=0&&this.queue.splice(m,1)}}}dispose(){this.dead=!0;for(const e of this.cache.values()){if(!e.mesh)continue;e.mesh.geometry.dispose();const t=e.mesh.material;t.uniforms.map.value.dispose(),t.dispose()}this.cache.clear()}}let nl=null;function Bg(){return nl??=(async()=>{const[{feature:n},e,t,i,r,s]=await Promise.all([ui(()=>import("./src-BnENo9bV.js"),[]),ui(()=>import("./countries-50m-DgYPl3oJ.js"),[]).then(h=>h.default),ui(()=>import("./index-XjFltekU.js").then(h=>h.i),__vite__mapDeps([0,1,2])).then(h=>h.default),ui(()=>import("./en-iHZ2wx5c.js"),[]),ui(()=>import("./ar-IVeb1Sj8.js"),[]),ui(()=>import("./fr-CwZlK-VA.js"),[])]);for(const h of[i,r,s])t.registerLocale(h.default??h);const o=Zr.startsWith("ar")?"ar":Zr.startsWith("fr")?"fr":"en",a=n(e,e.objects.countries),l=[];for(const h of a.features){const d=String(h.id??"").padStart(3,"0"),f=t.numericToAlpha2(d);if(!f||!h.geometry)continue;const m=h.geometry,g=m.type==="Polygon"?[m.coordinates]:m.type==="MultiPolygon"?m.coordinates:[];if(!g.length)continue;let _=g[0],p=-1;for(const y of g){const v=$s(y[0]),T=(v[2]-v[0])*(v[3]-v[1]);T>p&&(p=T,_=y)}const u=t.getName(f,"en")??h.properties?.name??f;l.push({code:f.toLowerCase(),en:u,name:t.getName(f,o)??u,polygons:g,bbox:$s(_[0])})}const c=new Intl.Collator(Zr);return l.sort((h,d)=>c.compare(h.name,d.name))})(),nl}function $s(n){let e=180,t=90,i=-180,r=-90;for(const[s,o]of n)s<e&&(e=s),s>i&&(i=s),o<t&&(t=o),o>r&&(r=o);return[e,t,i,r]}function il(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[o,a]=t[r],[l,c]=t[s];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function Gg(n,e,t){const i=n.polygons.map(s=>$s(s[0])),r=new Uint8Array(e.length);for(let s=0;s<e.length;s++){const o=t[s],a=e[s];for(let l=0;l<n.polygons.length;l++){const c=i[l];if(o<c[0]||o>c[2]||a<c[1]||a>c[3])continue;const h=n.polygons[l];if(il(o,a,h[0])&&!h.slice(1).some(d=>il(o,a,d))){r[s]=1;break}}}return r}const Hg=n=>n.polygons.flat(),oa=["modis","viirs","landsat","geo"],Ds=/^\d{4}-\d{2}-\d{2}$/;function kg(n){const e=n.get("date"),t=n.get("range")?.split(".."),i=t&&t.length===2&&Ds.test(t[0])&&Ds.test(t[1])&&t[0]<=t[1]?[t[0],t[1]]:null,r=d=>n.get(d)?.split(",").map(f=>f.trim()).filter(Boolean)??null,s=r("sensor")?.map(d=>d.toLowerCase()).filter(d=>oa.includes(d))??null,o=Number(n.get("conf")),a=Number(n.get("frp")),l=n.get("dn"),c=n.get("cam")?.split(",").map(Number),h=n.get("tab");return{date:e&&Ds.test(e)?e:null,range:i,country:n.get("country")?.trim()||null,bbox:Fc(n.get("bbox")),sats:r("sats"),sensors:s?.length?s:null,conf:o===1||o===2?o:0,frp:Number.isFinite(a)&&a>0?a:0,dn:l==="day"?1:l==="night"?2:0,cam:c&&c.length===3&&c.every(Number.isFinite)?{lat:c[0],lon:c[1],altKm:c[2]}:null,tab:h==="area"||h==="record"?h:null}}function Vg(n,e){const t=new URLSearchParams(n),i=(r,s)=>s==null||s===""?t.delete(r):t.set(r,s);return"date"in e&&i("date",e.date??null),"range"in e&&i("range",e.range?e.range.join(".."):null),"country"in e&&i("country",e.country??null),"bbox"in e&&i("bbox",e.bbox?e.bbox.join(","):null),"sats"in e&&i("sats",e.sats?.length?e.sats.join(","):null),"sensors"in e&&i("sensor",e.sensors?.length&&e.sensors.length<oa.length?e.sensors.join(","):null),"conf"in e&&i("conf",e.conf?String(e.conf):null),"frp"in e&&i("frp",e.frp?String(e.frp):null),"dn"in e&&i("dn",e.dn===1?"day":e.dn===2?"night":null),"cam"in e&&i("cam",e.cam?[e.cam.lat,e.cam.lon,Math.round(e.cam.altKm)].join(","):null),"tab"in e&&i("tab",e.tab??null),t}function Wg(n){return Math.round((Date.parse(`${n[1]}T00:00:00Z`)-Date.parse(`${n[0]}T00:00:00Z`))/864e5)+1}const Xg=n=>new Date(n*1e3).toISOString().slice(11,16),rl=n=>n==null?"–":`${n.toFixed(1)} K ≈ ${(n-273.15).toFixed(0)}°C`;function jg({record:n}){const e=[ie("m.conf.low"),ie("m.conf.nominalOne"),ie("m.conf.highOne")],t=n.sat.conf==="pct"&&n.confRaw>=0?`${n.confRaw}% → ${e[n.conf]}`:e[n.conf]??"–",i=(r,s,o=!0)=>I.jsx(At,{static:!0,title:r,trailing:I.jsx("span",{dir:o?"ltr":void 0,children:s})});return I.jsxs("div",{className:"fm-stack",children:[I.jsxs("p",{className:"fm-note",children:[I.jsxs("span",{style:{color:wn[n.sat.system]},"aria-hidden":!0,children:["■"," "]}),n.sat.symbol," ",n.sat.name," · ",n.sat.instrument," · ",Zn(new Date(n.time*1e3).toISOString().slice(0,10))," · ",ie("m.globe.observedAt",{time:Xg(n.time)})]}),I.jsxs(pn,{header:ie("m.globe.measured"),children:[i(ie("m.globe.f.position"),`${n.lat.toFixed(4)}, ${n.lon.toFixed(4)}`),i("FRP",n.frp==null?"–":`${St(n.frp,1)} MW`),i(ie("m.globe.f.conf"),t,!1),i(ie("m.globe.f.dn"),n.dayNight==="N"?ie("m.search.night"):ie("m.search.day"),!1),i(ie("m.globe.f.bright"),rl(n.b4)),i(ie("m.globe.f.brightBg"),rl(n.b5)),i(ie("m.globe.f.size"),`${n.scanKm.toFixed(2)} × ${n.trackKm.toFixed(2)} km (×${n.growth.toFixed(1)})`),n.version?i(ie("m.globe.f.version"),n.version):null]}),I.jsxs(pn,{header:ie("m.globe.geometry"),children:[n.altitudeKm==null?null:i(ie("m.globe.f.altitude"),`${St(n.altitudeKm)} km`),n.nadirKm==null?null:i(ie("m.globe.f.nadir"),`${St(n.nadirKm)} km`),n.viewZenith==null?I.jsx(At,{static:!0,title:ie("m.globe.noOrbit")}):i(ie("m.globe.f.vza"),`${n.viewZenith.toFixed(0)}°`)]}),I.jsxs(pn,{header:ie("m.globe.nearby"),footer:ie("m.globe.nearbyHint"),children:[I.jsx(At,{static:!0,title:ie("m.globe.samePass",{count:n.samePass}),trailing:I.jsxs("span",{dir:"ltr",children:[St(n.samePassFrp,1)," MW"]})}),n.others.length?n.others.map(r=>I.jsx(At,{static:!0,title:`${r.sat.symbol} ${r.sat.name}`,trailing:`${r.count}×`},r.sat.code)):I.jsx(At,{static:!0,title:ie("m.globe.noOthers")})]})]})}function qg({bbox:n,date:e,regions:t,stats:i,sats:r}){return I.jsxs("div",{className:"fm-stack",children:[I.jsx("p",{className:"fm-note",children:I.jsx("span",{dir:"ltr",children:xc(n)})}),i?I.jsxs(pn,{header:ie("m.globe.inBox"),footer:ie("m.globe.inBoxHint"),children:[I.jsx(At,{static:!0,title:ie("m.globe.visible"),trailing:St(i.total)}),I.jsx(At,{static:!0,title:ie("m.globe.frpSum"),trailing:I.jsxs("span",{dir:"ltr",children:[St(i.frp,0)," MW"]})}),i.bySat.map((s,o)=>s?I.jsx(At,{static:!0,leading:I.jsx("i",{className:"fm-swatch",style:{background:wn[r[o].system]},"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${r[o].symbol} ${r[o].name}`}),trailing:St(s)},r[o].code):null)]}):null,e?I.jsx(Yg,{bbox:n,date:e,regions:t}):I.jsx(er,{tone:"info",icon:I.jsx(Ns,{size:16}),children:ie("m.globe.rangeConversion")})]})}function Yg({bbox:n,date:e,regions:t}){const i=`${n.join(",")}|${e}`,r=Oc(i,l=>Us.live({bbox:n.join(","),date:e},l)),s=r.data,o=n?t.find(l=>n[0]>=l.bbox[0]-.01&&n[1]>=l.bbox[1]-.01&&n[2]<=l.bbox[2]+.01&&n[3]<=l.bbox[3]+.01):null,a=[["ensemble",ie("m.alg.ensemble")],["frp_season",ie("m.alg.frp_season_adaptive")],["ratio_month",ie("m.alg.ratio_month_adaptive")],["ratio",ie("m.alg.ratio")]];return I.jsx(I.Fragment,{children:r.error&&!s?I.jsx(ul,{title:ie("m.live.failed"),message:Is(r.error),onRetry:r.reload}):s?I.jsxs("div",{className:"fm-stack","aria-busy":r.loading||void 0,children:[I.jsx("p",{className:"fm-note",children:Zn(s.date||e)}),o?I.jsx(er,{tone:"info",icon:I.jsx(Ns,{size:16}),children:ie("m.live.inside",{region:o.title})}):null,I.jsxs("section",{className:"fm-stack","aria-label":ie("m.live.perSat"),children:[I.jsx("h3",{className:"fm-subhead",children:ie("m.live.perSat")}),s.satellites.length?I.jsxs(ca,{label:ie("m.live.perSat"),children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx(di,{children:ie("m.live.satellite")}),I.jsx(di,{numeric:!0,children:ie("m.live.rows")}),I.jsx(di,{numeric:!0,children:ie("m.live.cells")})]})}),I.jsx("tbody",{children:s.satellites.map(l=>I.jsxs("tr",{children:[I.jsx(Cn,{children:I.jsx("span",{dir:"ltr",children:l.name})}),I.jsx(Cn,{numeric:!0,children:St(l.rows)}),I.jsx(Cn,{numeric:!0,children:l.fire_day_cells==null?"–":St(l.fire_day_cells)})]},l.code))})]}):I.jsx("p",{className:"fm-note",children:ie("m.live.none")})]}),I.jsxs("section",{className:"fm-stack","aria-label":ie("m.live.converted"),children:[I.jsx("h3",{className:"fm-subhead",children:ie("m.live.converted")}),I.jsx("p",{className:"fm-note",children:s.calibration.kind==="region"?ie("m.live.calRegion",{region:s.calibration.title??s.calibration.region??""}):ie("m.live.calGlobal")}),s.conversions.length?I.jsxs(ca,{label:ie("m.live.converted"),children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx(di,{children:ie("m.live.from")}),I.jsx(di,{numeric:!0,children:ie("m.live.cells")}),a.map(([l,c])=>I.jsx(di,{numeric:!0,children:c},l))]})}),I.jsxs("tbody",{children:[s.conversions.map(l=>I.jsxs("tr",{children:[I.jsx(Cn,{children:I.jsx("span",{dir:"ltr",children:l.name})}),I.jsx(Cn,{numeric:!0,children:St(l.cells)}),a.map(([c])=>I.jsx(Cn,{numeric:!0,"data-best":c==="ensemble"||void 0,children:St(l[c],1)},c))]},l.code)),I.jsxs("tr",{children:[I.jsx(Cn,{children:I.jsx("strong",{children:ie("m.live.aquaActual")})}),I.jsx(Cn,{numeric:!0,colSpan:a.length+1,children:I.jsx("strong",{children:St(s.aqua.fire_day_cells)})})]})]})]}):I.jsx("p",{className:"fm-note",children:ie("m.live.noViirs")}),I.jsx(er,{tone:"warning",icon:I.jsx(Ns,{size:16}),children:ie("m.live.aquaNote",{time:s.aqua.overpass_local??"15:15"})})]})]}):I.jsx(dl,{label:ie("m.live.loading")})})}const sl=["60","600","3600"],al=["3600","21600","86400"],Kg=()=>new Date().toISOString().slice(0,10),sc=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10),$g=["modis","viirs","landsat","geo"];async function ac(n,e){const t=await fetch(n,{credentials:"same-origin",signal:e}),i=await t.json().catch(()=>({}));if(!t.ok&&t.status!==202){const r=typeof i?.error=="string"?i.error:i?.error?.message??`HTTP ${t.status}`;throw new pl(t.status,r)}return i}async function Zg(n,e,t){for(let i=0;i<200;i++){const r=await ac(Us.dayUrl(n??void 0),e);if(r.cols&&r.sats)return r;const s=typeof r.job=="string"?{id:r.job,status:"queued"}:r.job??{id:"",status:"queued"};if(t(s),s.status==="failed")throw new Error(s.log_tail||ie("m.globe.buildFailed"));if(await new Promise(o=>setTimeout(o,2500)),s.id)try{const o=await Us.job(s.id);if(t(o),o.status==="failed")throw new Error(o.log_tail||ie("m.globe.buildFailed"))}catch(o){if(o instanceof pl&&o.status===404)continue;throw o}}throw new Error(ie("m.globe.buildFailed"))}function Jg(n,e){const t=new URLSearchParams({from:n[0],to:n[1],bbox:e.bbox.map(i=>Math.round(i*1e3)/1e3).join(",")});return e.country&&t.set("country",e.country),`/api/range?${t}`}const ti=n=>n.toLowerCase().normalize("NFKD").replace(/[̀-ًͯ-ٟ]/g,"").replace(/[أإآ]/g,"ا").trim();function Qg(n,e){if(!e)return null;const t=ti(e);return n.find(i=>i.code===t)??n.find(i=>ti(i.en)===t||ti(i.name)===t)??null}const e0=()=>sc(1);function ol({value:n,onChange:e,choices:t,legend:i}){const r=typeof n=="string"&&n?n.split(","):[];return I.jsxs("fieldset",{className:"fm-chips fm-sources",children:[I.jsx("legend",{className:"fm-note",children:i}),t.map(s=>I.jsx(Uc,{label:I.jsxs("span",{className:"fm-chip-label",children:[s.color?I.jsx("i",{className:"fm-swatch",style:{background:s.color},"aria-hidden":!0}):null,s.label]}),checked:r.includes(s.value),onCheckedChange:o=>{const a=o?[...r,s.value]:r.filter(l=>l!==s.value);e(a.length?t.map(l=>l.value).filter(l=>a.includes(l)).join(","):null)}},s.value))]})}function m0(){const{regions:n}=Mc(),[e,t]=Sc(),i=Oe.useMemo(()=>kg(e),[e]),r=Oe.useCallback((D,te=!1)=>t(he=>Vg(he,D),{replace:!te}),[t]),[s,o]=Oe.useState(null),[a,l]=Oe.useState(""),[c,h]=Oe.useState(null);Oe.useEffect(()=>{let D=!0;return Bg().then(te=>D&&h(te)).catch(()=>D&&h([])),()=>{D=!1}},[]);const d=Oe.useMemo(()=>c?Qg(c,i.country):null,[c,i.country]),f=d?{country:d.en,bbox:d.bbox}:i.bbox?{country:null,bbox:i.bbox}:null,m=i.range&&f?Jg(i.range,f):null,g=!!(i.range&&i.country&&!c),_=m??(g?null:`day|${i.date??""}`),[p,u]=Oe.useState({state:"loading"}),[y,v]=Oe.useState(0);Oe.useEffect(()=>{if(!_)return;const D=new AbortController;return u(he=>({state:"loading",data:he.data})),(m?ac(m,D.signal):Zg(i.date,D.signal,he=>u(Pe=>({...Pe,state:"building",job:he})))).then(he=>u({state:"ready",data:he})).catch(he=>{D.signal.aborted||u({state:"error",error:Is(he)})}),()=>D.abort()},[_,y]);const T=p.state==="ready"?p.data:void 0,M=!!T?.range,E=Oe.useRef(null),b=Oe.useRef(null),[U,S]=Oe.useState(!1),[w,z]=Oe.useState(0),[O,W]=Oe.useState(!1),[P,F]=Oe.useState("600"),[G,Z]=Oe.useState(0),[X,K]=Oe.useState(null),Y=Oe.useRef(r);Y.current=r;const J=Oe.useRef(null);Oe.useLayoutEffect(()=>{if(!T||!E.current)return;let D=!1;const te=window.setTimeout(()=>{if(!(D||!E.current))try{const he=new Og(E.current,T,{onPick:Le=>{K(Le),Le&&Y.current({tab:"record"})},onBoxPoint:(Le,ue)=>{Z(Le===2?0:2),ue&&Y.current({bbox:ue,tab:"area"},!0)},onTick:(Le,ue)=>{z(Le),W(ue)}});b.current=he;const Pe=T.range?al[2]:sl[1];F(Pe),he.setSpeed(Number(Pe)),S(!0)}catch(he){u({state:"error",error:Is(he)})}},30);return()=>{D=!0,window.clearTimeout(te);const he=b.current?.cameraView();b.current?.dispose(),b.current=null,S(!1),K(null),he&&(J.current=he)}},[T]),Oe.useEffect(()=>{U&&J.current&&(b.current?.flyToView(J.current),J.current=null)},[U]);const ee=Oe.useMemo(()=>T?.sats??[],[T]),H=Oe.useMemo(()=>{const D=new Set(T?.cols.sat??[]);return ee.map((te,he)=>D.has(he))},[T,ee]),ne=Oe.useMemo(()=>ee.map(D=>(!i.sats||i.sats.includes(D.code))&&(!i.sensors||i.sensors.includes($g[D.system]))),[ee,i.sats,i.sensors]),Q=`${ne.join()}|${i.conf}|${i.frp}|${i.dn}`;Oe.useEffect(()=>{U&&b.current?.setFilters({sats:ne,minConf:i.conf,minFrp:i.frp,dayNight:i.dn})},[U,Q]);const ce=Oe.useRef(null);Oe.useEffect(()=>{const D=b.current;if(!(!U||!D||!T)){if(!d){D.setAreaMask(null),D.setOutline(null),ce.current=null;return}D.setAreaMask(Gg(d,T.cols.lat,T.cols.lon)),D.setOutline(Hg(d)),ce.current!==d.code&&!i.cam&&!i.bbox&&D.flyToBox(d.bbox),ce.current=d.code}},[U,T,d]);const ge=i.bbox?.join(",")??"";Oe.useEffect(()=>{!U||!b.current||(b.current.setBox(i.bbox),i.bbox&&!i.cam&&b.current.flyToBox(i.bbox))},[U,ge]);const ye=i.cam?`${i.cam.lat},${i.cam.lon},${i.cam.altKm}`:"";Oe.useEffect(()=>{U&&i.cam&&b.current?.flyToView(i.cam)},[U,ye]);const[we,be]=Oe.useState(null),[ze,k]=Oe.useState(null),[je,ve]=Oe.useState([]),Te=Math.floor(w/(M?3600:300));Oe.useEffect(()=>{const D=b.current;!U||!D||(be(D.stats()),k(i.bbox?D.stats(i.bbox):null),ve(D.hotspots(8,M?.25:.1)))},[U,Q,d,ge,Te]),Oe.useEffect(()=>(ha(()=>({mode:T?.range?"range":"day",shown:T?.range?{from:T.range[0],to:T.range[1],source:T.source}:{day:T?.window[0]},country:d?{code:d.code,name:d.en}:null,camera:b.current?.cameraView()??null,visible_records:we?.total??null,visible_frp_mw:we?Math.round(we.frp):null,per_satellite:we?Object.fromEntries(ee.map((D,te)=>[D.code,we.bySat[te]]).filter(([,D])=>D)):null,top_hotspots:je.slice(0,5).map(D=>({lat:+D.lat.toFixed(3),lon:+D.lon.toFixed(3),pixels:D.count,frp_mw:Math.round(D.frp)})),selected_record:X?{satellite:X.sat.code,lat:X.lat,lon:X.lon,time:new Date(X.time*1e3).toISOString(),frp:X.frp}:null})),()=>ha(null)),[T,d,we,ee,X,je]);const[Se,Ue]=Oe.useState(["day","range","country","sensors","frp"]),Ee=T&&!T.range?T.window[0]:i.date??null,A=Oe.useMemo(()=>{const D=ee.filter((te,he)=>H[he]).map(te=>({value:te.code,label:I.jsx("span",{dir:"ltr",children:`${te.symbol} ${te.name}`}),color:wn[te.system]}));return[{id:"day",label:ie("m.globe.oneDay"),description:ie("m.globe.dayFoot"),type:"date",min:sc(60),max:e0()},{id:"range",label:ie("m.globe.range"),description:ie("m.globe.pickRangeHint"),type:"dateRange",min:"2000-11-01",max:Kg()},{id:"country",label:ie("m.globe.country"),description:ie("m.globe.searchAbove"),type:"enum",choices:(c??[]).map(te=>({value:te.code,label:te.name}))},{id:"sensors",label:ie("m.globe.sensors"),type:"custom",renderEditor:(te,he)=>I.jsx(ol,{value:te,onChange:he,legend:ie("m.globe.sensorsHint"),choices:oa.map((Pe,Le)=>({value:Pe,label:ie(`m.globe.sensor.${Pe}`),color:wn[Le]}))}),formatValue:te=>typeof te=="string"?te.split(",").map(he=>ie(`m.globe.sensor.${he}`)).join(", "):""},{id:"sats",label:ie("m.globe.satellites"),type:"custom",renderEditor:(te,he)=>I.jsx(ol,{value:te,onChange:he,legend:ie("m.globe.satellitesHint"),choices:D}),formatValue:te=>typeof te=="string"?te.split(",").map(he=>ee.find(Pe=>Pe.code===he)?.name??he).join(", "):""},{id:"conf",label:ie("m.globe.confidence"),type:"enum",choices:[{value:"1",label:ie("m.conf.nominal")},{value:"2",label:ie("m.conf.high")}]},{id:"frp",label:ie("m.globe.minFrp"),description:ie("m.search.minFrpHint"),type:"custom",renderEditor:(te,he)=>I.jsx(Dc,{label:ie("m.globe.minFrp"),unit:"MW",min:0,max:5e3,step:1,value:typeof te=="string"&&Number(te)||0,onValueChange:Pe=>he(Pe>0?String(Pe):null)}),formatValue:te=>typeof te=="string"?`≥ ${te} MW`:""},{id:"dn",label:ie("m.globe.dayNight"),type:"enum",choices:[{value:"day",label:ie("m.search.day")},{value:"night",label:ie("m.search.night")}]}]},[c,ee,H]),x={day:i.range?null:Ee,range:i.range?{from:i.range[0],to:i.range[1]}:null,country:d?.code??null,sensors:i.sensors?.join(",")??null,sats:i.sats?.join(",")??null,conf:i.conf?String(i.conf):null,frp:i.frp?String(i.frp):null,dn:i.dn===1?"day":i.dn===2?"night":null},B=D=>{const te=ue=>typeof ue=="string"&&ue?ue:null,he={},Pe=D.range&&typeof D.range=="object"&&D.range.from&&D.range.to?D.range:null,Le=Pe?[Pe.from<=Pe.to?Pe.from:Pe.to,Pe.from<=Pe.to?Pe.to:Pe.from]:null;JSON.stringify(Le)!==JSON.stringify(i.range)&&(he.range=Le),te(D.day)!==x.day&&(he.date=te(D.day),te(D.day)&&(he.range=null)),te(D.country)!==x.country&&(he.country=te(D.country),he.cam=null),te(D.sensors)!==x.sensors&&(he.sensors=te(D.sensors)?.split(",")??null),te(D.sats)!==x.sats&&(he.sats=te(D.sats)?.split(",")??null),te(D.conf)!==x.conf&&(he.conf=Number(te(D.conf))||0),te(D.frp)!==x.frp&&(he.frp=Number(te(D.frp))||0),te(D.dn)!==x.dn&&(he.dn=te(D.dn)==="day"?1:te(D.dn)==="night"?2:0),Object.keys(he).length&&r(he,"range"in he||"date"in he||"country"in he)},oe=!!(i.sats||i.sensors||i.conf||i.frp||i.dn||i.country),ae=!!(i.bbox||X),re=i.tab==="record"&&X?"record":i.bbox?"area":"record",xe=()=>{K(null),b.current?.clearSelection(),r({bbox:null,tab:null})},pe=()=>{b.current?.setDrawing(!0),Z(1)},Me=()=>{const D=b.current;if(!D||!i.bbox)return;const te=URL.createObjectURL(new Blob([D.csv(i.bbox)],{type:"text/csv"})),he=document.createElement("a");he.href=te,he.download=`firms_${i.range?i.range.join("_"):Ee??"day"}_${i.bbox.join("_")}.csv`,he.click(),setTimeout(()=>URL.revokeObjectURL(te),1e3)},Re=b.current,Ie=Re?.span??86400,le=Re?.tMin??0,Be=D=>new Date((le+D)*1e3).toISOString(),C=Re?M?`${Zn(Be(w).slice(0,10))} ${Be(w).slice(11,16)}`:`${Be(w).slice(11,16)} UTC`:"--:--",se=p.state==="loading"||p.state==="building"||!!T&&!U,de=i.range?`${Zn(i.range[0])} → ${Zn(i.range[1])} · ${ie("m.globe.days",{count:Wg(i.range)})}`:Ee?Zn(Ee):ie("m.globe.today");return I.jsxs("div",{className:"fm-globe",children:[I.jsx("div",{ref:E,className:"fm-globe-host"}),I.jsx(yc,{children:I.jsx(Nc,{label:ie("m.globe.filters"),options:A,value:[],onChange:()=>{},values:x,onValuesChange:B,pinned:Se,onPinnedChange:Ue,onBack:oe?()=>r({sats:null,sensors:null,conf:0,frp:0,dn:0,country:null}):void 0,trailing:I.jsx(Vi,{label:ie("m.globe.view"),children:I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ie("m.globe.home"),onClick:()=>b.current?.flyHome(),disabled:!U,children:I.jsx(Ec,{})})})})}),I.jsxs(bc,{children:[I.jsxs(Vi,{label:ie("m.globe.timeline"),children:[I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":O?ie("m.globe.pause"):ie("m.globe.play"),disabled:!U,onClick:()=>{b.current?.setPlaying(!O),W(!O)},children:O?I.jsx(kc,{}):I.jsx(Vc,{})}),I.jsx("span",{className:"fm-dock-clock",dir:"ltr",children:C})]}),G?I.jsxs(hr,{variant:"tonal",onClick:()=>{b.current?.setDrawing(!1),b.current?.setBox(i.bbox),Z(0)},children:[I.jsx(Tc,{"aria-hidden":!0}),I.jsx("span",{className:"lab-control-label",children:ie("m.globe.cancelBox")})]}):I.jsxs(hr,{variant:ae?"tonal":"filled",disabled:!U,onClick:pe,children:[I.jsx(ga,{"aria-hidden":!0}),I.jsx("span",{className:"lab-control-label",children:ie("m.globe.drawBox")})]})]}),!T||p.state==="error"?I.jsx("div",{className:"fm-globe-overlay",children:I.jsx("div",{className:"fm-globe-card",children:p.state==="error"?I.jsx(ul,{title:ie("m.globe.failed"),message:p.error??"",onRetry:()=>v(D=>D+1)}):I.jsxs(I.Fragment,{children:[I.jsx(dl,{label:p.state==="building"?ie("m.globe.building"):m?ie("m.globe.loadingRange"):ie("m.globe.loading")}),p.job?.log_tail?I.jsx("pre",{className:"fm-log",dir:"ltr",children:p.job.log_tail}):null]})})}):se?I.jsx("div",{className:"fm-globe-busy",role:"status",children:p.state==="ready"?ie("m.globe.preparing"):m?ie("m.globe.loadingRange"):ie("m.globe.loading")}):null,G?I.jsx("div",{className:"fm-globe-hint",role:"status",children:G===1?ie("m.globe.dragBox"):ie("m.globe.secondCorner")}):null,I.jsx("div",{ref:o,className:"fm-globe-stage"}),s?I.jsxs(I.Fragment,{children:[I.jsx(ua,{open:!0,onOpenChange:()=>{},label:ie("m.globe.explore"),container:s,detents:["peek","medium","large"],defaultDetent:"medium",dismissible:!1,backgroundInteraction:"medium",regular:"card",modal:!1,header:I.jsx(t0,{value:a,onChange:l,placeholder:d?d.name:ie("m.globe.searchPlace")}),children:a.trim()?I.jsx(n0,{query:a,countries:c,regions:n.map(D=>({name:D.name,title:da(D),bbox:D.bbox})),current:d?.code??null,onCountry:D=>{r({country:D.code,bbox:null,cam:null},!0),l("")},onRegion:D=>{r({bbox:D,tab:"area",cam:null},!0),l("")}}):I.jsx(i0,{periodLabel:de,data:T,stats:we,sats:ee,present:H,solo:i.sats?.length===1?i.sats[0]:null,onSolo:D=>r({sats:i.sats?.length===1&&i.sats[0]===D?null:[D]}),spots:je,isRange:M,onSpot:D=>b.current?.flyToView({lat:D.lat,lon:D.lon,altKm:M?120:60}),rangeNeedsArea:!!(i.range&&!f),timeline:U&&Re?I.jsx(r0,{engine:Re,simT:w,speed:P,speeds:M?al:sl,isRange:M,onSpeed:D=>{F(D),Re.setSpeed(Number(D))},onSeek:D=>{Re.setPlaying(!1),Re.setTime(D),z(D)},span:Ie,at:Be}):null})}),I.jsx(ua,{open:ae,onOpenChange:D=>D?void 0:xe(),label:ie("m.globe.inspector"),container:s,regular:"pane",paneWidth:400,modal:!1,title:i.bbox&&X?void 0:re==="area"?ie("m.globe.tabArea"):ie("m.globe.record"),leading:i.bbox&&X?I.jsx(Vi,{label:ie("m.globe.inspector"),children:I.jsx(fl,{label:ie("m.globe.inspector"),value:re,onChange:D=>r({tab:D}),options:[{value:"area",label:ie("m.globe.tabArea")},{value:"record",label:ie("m.globe.tabRecord")}]})}):void 0,trailing:re==="area"&&i.bbox?I.jsxs(Vi,{label:ie("m.globe.areaActions"),children:[I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ie("m.globe.zoomTo"),onClick:()=>i.bbox&&b.current?.flyToBox(i.bbox),children:I.jsx(_a,{})}),I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ie("m.globe.redraw"),onClick:pe,children:I.jsx(ga,{})}),I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ie("m.globe.clearBox"),onClick:()=>r({bbox:null,tab:X?"record":null}),children:I.jsx(Ac,{})})]}):X?I.jsx(Vi,{label:ie("m.globe.pixelActions"),children:I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ie("m.globe.goToTime"),onClick:()=>b.current?.setTime(X.time-le-60),children:I.jsx(Bc,{})})}):void 0,dock:re==="area"&&i.bbox?I.jsx(ma,{label:ie("m.globe.areaActions"),children:I.jsxs(hr,{variant:"filled",disabled:!ze?.total,onClick:Me,children:[I.jsx(zc,{"aria-hidden":!0}),ie("m.globe.downloadCsv",{count:St(ze?.total??0)})]})}):X?I.jsx(ma,{label:ie("m.globe.pixelActions"),children:I.jsxs(hr,{variant:"filled",onClick:()=>b.current?.zoomToSelection(),children:[I.jsx(_a,{"aria-hidden":!0}),ie("m.globe.zoomIn")]})}):void 0,children:re==="record"&&X?I.jsx(jg,{record:X}):i.bbox?I.jsx(qg,{bbox:i.bbox,date:T&&!T.range?T.window[0]:null,regions:n.map(D=>({name:D.name,title:da(D),bbox:D.bbox})),stats:ze,sats:ee}):null})]}):null]})}function t0({value:n,onChange:e,placeholder:t}){return I.jsx("div",{className:"fm-sheet-search","data-lab-sheet-handle":"",children:I.jsx(Ic,{variant:"tonal",placeholder:t,"aria-label":ie("m.globe.searchPlace"),leadingIcon:I.jsx(Pc,{size:18}),value:n,onValueChange:e,autoComplete:"off"})})}function n0({query:n,countries:e,regions:t,current:i,onCountry:r,onRegion:s}){const o=ti(n),a=(e??[]).filter(c=>ti(c.name).includes(o)||ti(c.en).includes(o)||c.code===o).slice(0,30),l=t.filter(c=>ti(c.title).includes(o)||c.name.includes(o));return I.jsxs(I.Fragment,{children:[l.length?I.jsx(pn,{header:ie("m.globe.regions"),children:l.map(c=>I.jsx(At,{leading:I.jsx(wc,{size:18,"aria-hidden":!0}),title:c.title,subtitle:ie("m.globe.regionHint"),onClick:()=>s(c.bbox)},c.name))}):null,I.jsx(pn,{header:ie("m.globe.countries"),children:e?a.length?a.map(c=>I.jsx(At,{leading:I.jsx(Gc,{size:18,"aria-hidden":!0}),title:c.name,subtitle:c.name!==c.en?c.en:void 0,selected:i===c.code,onClick:()=>r(c)},c.code)):I.jsx(At,{static:!0,title:ie("m.globe.noCountry")}):I.jsx(At,{static:!0,title:ie("m.common.loading")})})]})}function i0({periodLabel:n,data:e,stats:t,sats:i,present:r,solo:s,onSolo:o,spots:a,isRange:l,onSpot:c,rangeNeedsArea:h,timeline:d}){if(Rc()?.detent==="peek")return null;const m=g=>{const _=new Date(g*1e3).toISOString();return l?`${Zn(_.slice(0,10))} ${_.slice(11,16)}`:`${_.slice(11,16)} UTC`};return I.jsxs(I.Fragment,{children:[h?I.jsx(er,{tone:"warning",children:ie("m.globe.rangeNeedsArea")}):null,e?.note?I.jsx(er,{tone:"info",children:e.note}):null,I.jsxs(pn,{header:n,footer:e?.truncated?ie("m.globe.truncated"):void 0,children:[I.jsx(At,{static:!0,leading:I.jsx(fa,{size:18,"aria-hidden":!0}),title:ie("m.globe.visible"),trailing:t?St(t.total):"…"}),I.jsx(At,{static:!0,title:ie("m.globe.frpSum"),trailing:t?I.jsxs("span",{dir:"ltr",children:[St(t.frp,0)," MW"]}):"…"})]}),d,I.jsx(pn,{header:ie("m.globe.hotspots"),footer:ie("m.globe.hotspotsHint"),children:a.length?a.map(g=>I.jsx(At,{leading:I.jsx(fa,{size:18,"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${g.lat.toFixed(2)}, ${g.lon.toFixed(2)}`}),subtitle:ie("m.globe.spot",{count:St(g.count),when:m(g.last)}),trailing:I.jsxs("span",{dir:"ltr",children:[St(g.frp,0)," MW"]}),chevron:!0,onClick:()=>c(g)},`${g.lat.toFixed(3)},${g.lon.toFixed(3)}`)):I.jsx(At,{static:!0,title:ie("m.globe.noSpots")})}),I.jsx(pn,{header:ie("m.globe.satellites"),footer:ie("m.globe.soloHint"),children:i.map((g,_)=>r[_]?I.jsx(At,{leading:I.jsx("i",{className:"fm-swatch",style:{background:wn[g.system]},"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${g.symbol} ${g.name}`}),subtitle:g.instrument,trailing:t?St(t.bySat[_]):void 0,selected:s===g.code,onClick:()=>o(g.code)},g.code):null)})]})}function r0({engine:n,simT:e,speed:t,speeds:i,isRange:r,onSpeed:s,onSeek:o,span:a,at:l}){return I.jsx(pn,{header:ie("m.globe.timeline"),children:I.jsxs("div",{className:"fm-tl",children:[I.jsx(s0,{engine:n,simT:e,onSeek:o}),I.jsx(Cc,{label:ie("m.globe.time"),trackStyle:"thin",controlSize:"small",min:-600,max:Math.round(a),step:r?600:10,value:e,onValueChange:o,getValueText:c=>r?`${l(c).slice(0,10)} ${l(c).slice(11,16)} UTC`:`${l(c).slice(11,16)} UTC`}),I.jsx(fl,{label:ie("m.globe.speed"),value:t,onChange:s,options:i.map(c=>({value:c,label:r?ie(`m.globe.speedRange.${c}`):`${c}×`}))})]})})}function s0({engine:n,simT:e,onSeek:t}){const i=Oe.useRef(null);return Oe.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight;if(!s)return;const a=devicePixelRatio;r.width=s*a,r.height=o*a;const l=r.getContext("2d");l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,s,o);const c=n.span+600,h=pa==="rtl",d=_=>{const p=(_+600)/c*s;return h?s-p:p},f=n.bins[0].length;let m=1;for(let _=0;_<f;_++)m=Math.max(m,n.bins.reduce((p,u)=>p+u[_],0));const g=Math.max(1,Math.abs(d(n.binSize)-d(0))-1);for(let _=0;_<f;_++){let p=o;n.bins.forEach((u,y)=>{const v=u[_]/m*(o-4);l.fillStyle=wn[y];const T=d(h?(_+1)*n.binSize:_*n.binSize);l.fillRect(T,p-v,g,v),p-=v})}l.fillStyle=getComputedStyle(r).color,l.fillRect(d(e)-1,0,2,o)},[n,e]),I.jsx("canvas",{ref:i,className:"fm-tl-hist","aria-hidden":!0,onClick:r=>{const s=r.currentTarget.getBoundingClientRect(),o=(r.clientX-s.left)/s.width;t((pa==="rtl"?1-o:o)*(n.span+600)-600)}})}export{m0 as default};
