const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-jfTCx_Xy.js","assets/index-WBY-NQya.js","assets/index-_YkfpRCR.css"])))=>i.map(i=>d[i]);
import{c as ci,I as mc,r as Fe,J as gc,K as al,j as D,O as ol,Q as ll,R as _c,U as vc,V as zr,W as xc,X as da,Y as Mc,_ as di,Z as Jr,t as ne,$ as mn,h as Lt,B as gn,a0 as Sc,a1 as yc,N as nr,m as Is,E as cl,e as Fs,L as hl,q as fa,s as fi,v as Pn,u as Ec,a2 as bc,a3 as pa,a4 as Tc,a5 as Ac,a6 as ul,a7 as ea,a8 as wc,S as Rc,a9 as dl,aa as fl,g as Cc,ab as Ui,ac as Os,ad as pl,ae as Pc,af as Lc,ag as Dc}from"./index-WBY-NQya.js";import{C as Uc,T as Nc,a as ma}from"./temporal-dialog-C8KcwROz.js";import{T as Ic}from"./text-field-0rdbsmzo.js";import{p as Fc}from"./bbox-D104tjyD.js";import{u as Oc}from"./use-remote-CVAtB3wT.js";import{I as zs}from"./info-CRY3Uxuh.js";import{C as ml}from"./calendar-range-BddDxYea.js";import"./modal-BGAEdpVm.js";const gl={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};gl.node;const zc=ci(gl);const _l={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};_l.node;const ga=ci(_l);const vl={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};vl.node;const Bc=ci(vl);const xl={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};xl.node;const Gc=ci(xl);const Ml={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Ml.node;const Hc=ci(Ml);const Sl={name:"square-dashed",size:24,node:[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aliases:["box-select"]};Sl.node;const ta=ci(Sl);const yl={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};yl.node;const El=ci(yl),bl=.55;function kc(n,e,t){const i=t.row*bl;if(n>i&&t.fullLeading&&t.leading)return{offset:t.row,commit:"leading"};if(n<-i&&t.fullTrailing&&t.trailing)return{offset:-t.row,commit:"trailing"};const r=mc(n,e,.99);return r>t.leading/2&&t.leading&&n>0?{offset:t.leading,commit:null}:r<-t.trailing/2&&t.trailing&&n<0?{offset:-t.trailing,commit:null}:{offset:0,commit:null}}function Vc(n,e){const t=e.row*bl;return n>t&&e.fullLeading&&e.leading>0||n<-t&&e.fullTrailing&&e.trailing>0}function Wc(n,e,t){const i=[];let r=0;for(const a of n)i.push(r),r+=a;const s=i[e]+n[e]/2+t;let o=e;for(let a=e+1;a<n.length;a++)s>i[a]+n[a]/2&&(o=a);for(let a=e-1;a>=0;a--)s<i[a]+n[a]/2&&(o=a);return o}function Xc(n,e,t){return n.map((i,r)=>r===e?0:e<t&&r>e&&r<=t?-n[e]:t<e&&r>=t&&r<e?n[e]:0)}function jc(n,e,t){let i=0;if(t>e)for(let r=e+1;r<=t;r++)i+=n[r];else for(let r=t;r<e;r++)i-=n[r];return i}const Tl=Fe.createContext({enabled:!1});function Qt({header:n,footer:e,children:t,className:i,label:r,onReorder:s}){const o=Fe.useId(),a=Fe.useRef(null),l=Fe.useRef(null),[c,u]=Fe.useState(""),d=Fe.useRef(s);d.current=s,Fe.useLayoutEffect(()=>{if(!l.current)return;const _=l.current;l.current=null,gc(_,{spring:zr.snappy})});const f=()=>a.current?Array.from(a.current.children):[],m=(_,p)=>{l.current=xc(f()),d.current?.(_,p),u(`Moved to position ${p+1} of ${f().length}.`)};Fe.useEffect(()=>{const _=a.current;if(!_||!s)return;let p=null,h=null;const E=(S,x,w)=>{S.style.transform=w?`translate3d(0, ${x}px, 0) scale(1.02)`:`translate3d(0, ${x}px, 0)`},v=()=>{const S=p;if(!S)return;const x=(S.scroller?.scrollTop??0)-S.scrollStart,w=Mc(S.dy+x,S.bounds[0],S.bounds[1],200);S.offsets[S.from].set(w);const N=Wc(S.heights,S.from,w);N!==S.to&&(S.to=N,Xc(S.heights,S.from,N).forEach((y,A)=>{A!==S.from&&S.offsets[A].animateTo(y,{spring:zr.snappy})}))},T=()=>{const S=p;if(!S||(S.frame=requestAnimationFrame(T),!S.scroller))return;const x=S.scroller.getBoundingClientRect(),w=64,N=S.pointerY<x.top+w?-((x.top+w-S.pointerY)/w)*14:S.pointerY>x.bottom-w?(S.pointerY-(x.bottom-w))/w*14:0;N&&(S.scroller.scrollTop+=N,v())};return al(_,()=>({axis:"y",threshold:2,canBegin:({target:S})=>(h=S?.closest("[data-lab-reorder-handle]")??null,!!h),onStart:({originY:S})=>{const x=f(),w=x.findIndex(O=>!!h&&O.contains(h));if(w<0)return;const N=x.map(O=>O.getBoundingClientRect().height);let y=_.parentElement;for(;y&&!/(auto|scroll)/.test(getComputedStyle(y).overflowY);)y=y.parentElement;const A=N.slice(0,w).reduce((O,W)=>O+W,0),F=N.slice(w+1).reduce((O,W)=>O+W,0);p={from:w,to:w,heights:N,nodes:x,offsets:x.map((O,W)=>{const P=new ll(0,.25);return P.subscribe(U=>E(O,U,W===w)),P}),scroller:y,scrollStart:y?.scrollTop??0,dy:0,bounds:[-A,F],frame:0,pointerY:S},x[w].dataset.lifted="",_.dataset.reordering="",E(x[w],0,!0),p.frame=requestAnimationFrame(T)},onMove:({dy:S,originY:x})=>{p&&(p.dy=S,p.pointerY=x+S,v())},onEnd:()=>{const S=p;if(p=null,!S)return;cancelAnimationFrame(S.frame);const x=()=>{delete S.nodes[S.from].dataset.lifted,delete _.dataset.reordering,S.offsets.forEach(N=>N.stop()),S.to!==S.from&&m(S.from,S.to),S.nodes.forEach(N=>{S.to===S.from&&(N.style.transform="")})},w=jc(S.heights,S.from,S.to);S.offsets[S.from].animateTo(w,{spring:zr.release}).then(N=>N&&x())}}))},[!!s]);const g=_=>{const p=_.target.closest("[data-lab-reorder-handle]");if(!p||!s||_.key!=="ArrowUp"&&_.key!=="ArrowDown")return;const h=f(),E=h.findIndex(T=>T.contains(p)),v=E+(_.key==="ArrowUp"?-1:1);E<0||v<0||v>=h.length||(_.preventDefault(),m(E,v))};return D.jsxs("section",{className:ol("lab-list-section",i),"aria-labelledby":n?o:void 0,"aria-label":n?void 0:r,children:[n&&D.jsx("h3",{id:o,className:"lab-list-header",children:n}),D.jsx(Tl.Provider,{value:{enabled:!!s},children:D.jsx("div",{ref:a,className:"lab-list-card",role:"list",onKeyDown:s?g:void 0,children:t})}),e&&D.jsx("p",{className:"lab-list-footer",children:e}),s&&D.jsx("span",{className:"lab-sr-only",role:"status",children:c})]})}const Qr=76;let ji=null;const Ut=Fe.forwardRef(function({title:e,subtitle:t,leading:i,trailing:r,chevron:s,selected:o,asChild:a,static:l,leadingActions:c,trailingActions:u,fullSwipe:d=!0,reorderLabel:f,className:m,children:g,..._},p){const h=Fe.useContext(Tl),E=Fe.useRef(null),v=!!(c?.length||u?.length),[T,S]=Fe.useState(null),[x,w]=Fe.useState(null),N=Fe.useRef(null);N.current||(N.current=new ll(0,.25));const y=Fe.useRef({leadingActions:c,trailingActions:u,fullSwipe:d});y.current={leadingActions:c,trailingActions:u,fullSwipe:d};const A=()=>!!E.current&&getComputedStyle(E.current).direction==="rtl",F=()=>({leading:(y.current.leadingActions?.length??0)*Qr,trailing:(y.current.trailingActions?.length??0)*Qr,row:E.current?.clientWidth??360,fullLeading:y.current.fullSwipe,fullTrailing:y.current.fullSwipe});Fe.useLayoutEffect(()=>{if(v)return N.current.subscribe(K=>{const J=E.current;if(!J)return;J.style.setProperty("--lab-row-swipe",`${Math.abs(K)}px`);const te=J.querySelector(":scope > .lab-list-row");te&&(te.style.transform=K?`translate3d(${A()?-K:K}px, 0, 0)`:""),J.dataset.swiping=K>.5?"leading":K<-.5?"trailing":"";const k=Vc(K,F());w(k?K>0?"leading":"trailing":null)})},[v]);const O=(K,J)=>N.current.animateTo(K,{spring:zr.release,velocity:J}),W=Fe.useCallback(()=>{S(null),O(0)},[]),P=K=>{W(),K.onAction()};Fe.useEffect(()=>{const K=E.current;if(!K||!v)return;let J=0;return al(K,()=>({axis:"x",threshold:8,canBegin:({target:te})=>!te?.closest(".lab-list-actions, [data-lab-reorder-handle]"),onStart:()=>{ji&&ji!==W&&ji(),N.current.stop(),J=N.current.get()},onMove:({dx:te,time:k})=>{const ee=F(),Q=J+(A()?-te:te),ae=ee.leading?ee.row:0,ge=ee.trailing?-ee.row:0;N.current.track(Q>ae?ae+da(Q-ae,120):Q<ge?ge+da(Q-ge,120):Q,k)},onEnd:({time:te,cancelled:k})=>{const ee=N.current.getVelocity(te),Q=k?{offset:0,commit:null}:kc(N.current.get(),ee,F()),ae=y.current;if(Q.commit){const ge=(Q.commit==="leading"?ae.leadingActions:ae.trailingActions)[0];O(Q.offset,ee).then(()=>{ge.onAction(),E.current?.isConnected&&O(0)}),S(null);return}S(Q.offset>0?"leading":Q.offset<0?"trailing":null),ji=Q.offset?W:null,O(Q.offset,ee)}}))},[v,W]);const U=K=>{if(_.onKeyDown?.(K),!v||K.defaultPrevented)return;const J=K.key===(A()?"ArrowLeft":"ArrowRight"),k=K.key===(A()?"ArrowRight":"ArrowLeft")&&u?.length?"trailing":J&&c?.length?"leading":null;if(!k)return;K.preventDefault();const ee=(k==="leading"?c.length:u.length)*Qr;S(k),ji=W,E.current&&(E.current.dataset.swiping=k),O(k==="leading"?ee:-ee),requestAnimationFrame(()=>E.current?.querySelector(`.lab-list-actions[data-side="${k}"] button`)?.focus())},G=D.jsxs(D.Fragment,{children:[i&&D.jsx(_c,{className:"lab-list-row-leading",children:i}),D.jsxs("span",{className:"lab-list-row-text",children:[D.jsx("span",{className:"lab-list-row-title",children:e}),t&&D.jsx("span",{className:"lab-list-row-subtitle",children:t})]}),r&&D.jsx("span",{className:"lab-list-row-trailing",children:r}),s&&D.jsx(Uc,{className:"lab-list-row-chevron lab-dir-flip","aria-hidden":"true"})]}),Z={className:ol("lab-list-row",m),"data-selected":o||void 0},Y=(K,J)=>J?.length?D.jsx("div",{className:"lab-list-actions","data-side":K,"data-full":x===K||void 0,"aria-hidden":T!==K||void 0,children:J.map(te=>D.jsxs("button",{type:"button",className:"lab-list-action","data-tone":te.tone??"neutral",tabIndex:T===K?0:-1,onClick:()=>P(te),onKeyDown:k=>{k.key==="Escape"&&(W(),E.current?.querySelector(":scope > .lab-list-row")?.focus())},children:[te.icon,D.jsx("span",{children:te.label})]},te.label))}):null,j=typeof e=="string"?e:void 0;return D.jsxs("div",{ref:E,role:"listitem",className:"lab-list-item","data-leading":i?"":void 0,"data-swipe":v||void 0,"data-reorder":h.enabled||void 0,children:[Y("leading",c),Y("trailing",u),l?D.jsx("div",{...Z,"data-static":"",children:G}):a?D.jsx(vc,{...Z,..._,"aria-current":o?"true":void 0,onKeyDown:U,children:Fe.isValidElement(g)?Fe.cloneElement(g,{},G):g}):D.jsx("button",{ref:p,type:"button",...Z,..._,"aria-current":o?"true":void 0,onKeyDown:U,onClickCapture:K=>{T&&(K.preventDefault(),K.stopPropagation(),W())},children:G}),h.enabled&&D.jsx("button",{type:"button",className:"lab-list-grip","data-lab-reorder-handle":"","aria-label":f??(j?`Reorder ${j}`:"Reorder"),"aria-description":"Drag, or use the up and down arrow keys.",children:D.jsx(Bc,{"aria-hidden":"true"})})]})});const na="160",pi={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qc=0,_a=1,Yc=2,Al=1,Kc=2,An=3,Vn=0,Ft=1,Yt=2,Bn=0,Fi=1,va=2,xa=3,Ma=4,$c=5,Zn=100,Zc=101,Jc=102,Sa=103,ya=104,Qc=200,eh=201,th=202,nh=203,Bs=204,Gs=205,ih=206,rh=207,sh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,dh=0,fh=1,ph=2,Hr=3,mh=4,gh=5,_h=6,vh=7,wl=0,xh=1,Mh=2,Gn=0,Sh=1,yh=2,Eh=3,bh=4,Th=5,Ah=6,Rl=300,Bi=301,Gi=302,Hs=303,ks=304,qr=306,Vs=1e3,cn=1001,Ws=1002,Nt=1003,Ea=1004,es=1005,en=1006,wh=1007,ir=1008,Hn=1009,Rh=1010,Ch=1011,ia=1012,Cl=1013,On=1014,zn=1015,rr=1016,Pl=1017,Ll=1018,ii=1020,Ph=1021,hn=1023,Lh=1024,Dh=1025,ri=1026,Hi=1027,Uh=1028,Dl=1029,Nh=1030,Ul=1031,Nl=1033,ts=33776,ns=33777,is=33778,rs=33779,ba=35840,Ta=35841,Aa=35842,wa=35843,Il=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Da=37810,Ua=37811,Na=37812,Ia=37813,Fa=37814,Oa=37815,za=37816,Ba=37817,Ga=37818,Ha=37819,ka=37820,Va=37821,ss=36492,Wa=36494,Xa=36495,Ih=36283,ja=36284,qa=36285,Ya=36286,Fl=3e3,si=3001,Fh=3200,Oh=3201,zh=0,Bh=1,nn="",bt="srgb",_n="srgb-linear",ra="display-p3",Yr="display-p3-linear",kr="linear",ct="srgb",Vr="rec709",Wr="p3",gi=7680,Ka=519,Gh=512,Hh=513,kh=514,Ol=515,Vh=516,Wh=517,Xh=518,jh=519,$a=35044,Za="300 es",Xs=1035,wn=2e3,Xr=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,js=180/Math.PI;function or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function qh(n,e){return(n%e+e)%e}function as(n,e,t){return(1-t)*n+t*e}function Ja(n){return(n&n-1)===0&&n!==0}function qs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yh={DEG2RAD:Br};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],E=r[1],v=r[4],T=r[7],S=r[2],x=r[5],w=r[8];return s[0]=o*_+a*E+l*S,s[3]=o*p+a*v+l*x,s[6]=o*h+a*T+l*w,s[1]=c*_+u*E+d*S,s[4]=c*p+u*v+d*x,s[7]=c*h+u*T+d*w,s[2]=f*_+m*E+g*S,s[5]=f*p+m*v+g*x,s[8]=f*h+m*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new Ze;function zl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kh(){const n=sr("canvas");return n.style.display="block",n}const Qa={};function Qi(n){n in Qa||(Qa[n]=!0,console.warn(n))}const eo=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),to=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[_n]:{transfer:kr,primaries:Vr,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:ct,primaries:Vr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Yr]:{transfer:kr,primaries:Wr,toReference:n=>n.applyMatrix3(to),fromReference:n=>n.applyMatrix3(eo)},[ra]:{transfer:ct,primaries:Wr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(to),fromReference:n=>n.applyMatrix3(eo).convertLinearToSRGB()}},$h=new Set([_n,Yr]),nt={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$h.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=dr[e].toReference,r=dr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dr[n].primaries},getTransfer:function(n){return n===nn?kr:dr[n].transfer}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Bl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=sr("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cs(r[o].image)):s.push(cs(r[o]))}else s=cs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class kt extends hi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=cn,r=cn,s=en,o=ir,a=hn,l=Hn,c=kt.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=or(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?bt:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?si:Fl}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?bt:nn}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Rl;kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,S=(h+1)/2,x=(u+f)/4,w=(d+_)/4,N=(g+p)/4;return v>T&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=x/i,s=w/i):T>S?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=x/r,s=N/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=w/s,r=N/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===si?bt:nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Qh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hl extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eu extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*_,E=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const S=Math.sqrt(v),x=Math.atan2(S,h*E);p=Math.sin(p*x)/S,a=Math.sin(a*x)/S}const T=a*E;if(l=l*p+f*T,c=c*p+m*T,u=u*p+g*T,d=d*p+_*T,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new I,no=new oi;class lr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),pr.subVectors(this.max,Yi),vi.subVectors(e.a,Yi),xi.subVectors(e.b,Yi),Mi.subVectors(e.c,Yi),Ln.subVectors(xi,vi),Dn.subVectors(Mi,xi),jn.subVectors(vi,Mi);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-jn.z,jn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,jn.z,0,-jn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-jn.y,jn.x,0];return!us(t,vi,xi,Mi,pr)||(t=[1,0,0,0,1,0,0,0,1],!us(t,vi,xi,Mi,pr))?!1:(mr.crossVectors(Ln,Dn),t=[mr.x,mr.y,mr.z],us(t,vi,xi,Mi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,fr=new lr,vi=new I,xi=new I,Mi=new I,Ln=new I,Dn=new I,jn=new I,Yi=new I,pr=new I,mr=new I,qn=new I;function us(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qn.fromArray(n,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=i.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tu=new lr,Ki=new I,ds=new I;class cr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ki,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(ds)),this.expandByPoint(Ki.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,fs=new I,gr=new I,Un=new I,ps=new I,_r=new I,ms=new I;class hr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gr),a=Un.dot(this.direction),l=-Un.dot(gr),c=Un.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fs).addScaledVector(gr,f),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){ps.subVectors(t,e),_r.subVectors(i,e),ms.crossVectors(ps,_r);let o=this.direction.dot(ms),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(_r.crossVectors(Un,_r));if(l<0)return null;const c=a*this.direction.dot(ps.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(ms);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,m,g,_,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Nn.crossVectors(i,Xt),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Nn.crossVectors(i,Xt)),Nn.normalize(),vr.crossVectors(Xt,Nn),r[0]=Nn.x,r[4]=vr.x,r[8]=Xt.x,r[1]=Nn.y,r[5]=vr.y,r[9]=Xt.y,r[2]=Nn.z,r[6]=vr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],E=i[3],v=i[7],T=i[11],S=i[15],x=r[0],w=r[4],N=r[8],y=r[12],A=r[1],F=r[5],O=r[9],W=r[13],P=r[2],U=r[6],G=r[10],Z=r[14],Y=r[3],j=r[7],K=r[11],J=r[15];return s[0]=o*x+a*A+l*P+c*Y,s[4]=o*w+a*F+l*U+c*j,s[8]=o*N+a*O+l*G+c*K,s[12]=o*y+a*W+l*Z+c*J,s[1]=u*x+d*A+f*P+m*Y,s[5]=u*w+d*F+f*U+m*j,s[9]=u*N+d*O+f*G+m*K,s[13]=u*y+d*W+f*Z+m*J,s[2]=g*x+_*A+p*P+h*Y,s[6]=g*w+_*F+p*U+h*j,s[10]=g*N+_*O+p*G+h*K,s[14]=g*y+_*W+p*Z+h*J,s[3]=E*x+v*A+T*P+S*Y,s[7]=E*w+v*F+T*U+S*j,s[11]=E*N+v*O+T*G+S*K,s[15]=E*y+v*W+T*Z+S*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],E=d*p*c-_*f*c+_*l*m-a*p*m-d*l*h+a*f*h,v=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,T=u*_*c-g*d*c+g*a*m-o*_*m-u*a*h+o*d*h,S=g*d*l-u*_*l-g*a*f+o*_*f+u*a*p-o*d*p,x=t*E+i*v+r*T+s*S;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=E*w,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*h-i*f*h)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*h+i*l*h)*w,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*w,e[4]=v*w,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*h-t*l*h)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=T*w,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*h-t*d*h)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*h+t*a*h)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*w,e[12]=S*w,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*p+t*d*p)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,g=s*d,_=o*u,p=o*d,h=a*d,E=l*c,v=l*u,T=l*d,S=i.x,x=i.y,w=i.z;return r[0]=(1-(_+h))*S,r[1]=(m+T)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(m-T)*x,r[5]=(1-(f+h))*x,r[6]=(p+E)*x,r[7]=0,r[8]=(g+v)*w,r[9]=(p-E)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(a===wn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*u;let g,_;if(a===wn)g=(o+s)*d,_=-2*d;else if(a===Xr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new I,an=new gt,nu=new I(0,0,0),iu=new I(1,1,1),Nn=new I,vr=new I,Xt=new I,io=new gt,ro=new oi;class Kr{constructor(e=0,t=0,i=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ru=0;const so=new I,yi=new oi,En=new gt,xr=new I,$i=new I,su=new I,au=new oi,ao=new I(1,0,0),oo=new I(0,1,0),lo=new I(0,0,1),ou={type:"added"},lu={type:"removed"};class Ot extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new I,t=new Kr,i=new oi,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return so.copy(e).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt($i,xr,this.up):En.lookAt(xr,$i,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(En),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ou)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new I,bn=new I,gs=new I,Tn=new I,Ei=new I,bi=new I,co=new I,_s=new I,vs=new I,xs=new I;let Mr=!1;class ln{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),bn.subVectors(i,t),gs.subVectors(e,t);const o=on.dot(on),a=on.dot(bn),l=on.dot(gs),c=bn.dot(bn),u=bn.dot(gs),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),bn.subVectors(e,t),on.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,i),bi.subVectors(s,i),_s.subVectors(e,i);const l=Ei.dot(_s),c=bi.dot(_s);if(l<=0&&c<=0)return t.copy(i);vs.subVectors(e,r);const u=Ei.dot(vs),d=bi.dot(vs);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ei,o);xs.subVectors(e,s);const m=Ei.dot(xs),g=bi.dot(xs);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bi,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return co.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(co,a);const h=1/(p+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ms(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=qh(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ms(o,s,e+1/3),this.g=Ms(o,s,e),this.b=Ms(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const i=kl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return nt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(It(Ct.r*255,0,255))*65536+Math.round(It(Ct.g*255,0,255))*256+Math.round(It(Ct.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=bt){nt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Sr);const i=as(In.h,Sr.h,t),r=as(In.s,Sr.s,t),s=as(In.l,Sr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new tt;tt.NAMES=kl;let cu=0;class Vi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Fi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=Gs,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class er extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new I,yr=new Ke;class At{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),e}}class Vl extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wl extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hu=0;const Zt=new gt,Ss=new Ot,Ti=new I,jt=new lr,Zi=new lr,Mt=new I;class _t extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?Wl:Vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,Zi.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,Zi.max),jt.expandByPoint(Mt)):(jt.expandByPoint(Zi.min),jt.expandByPoint(Zi.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),Mt.add(Ti)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const d=new I,f=new I,m=new I,g=new Ke,_=new Ke,p=new Ke,h=new I,E=new I;function v(A,F,O){d.fromArray(r,A*3),f.fromArray(r,F*3),m.fromArray(r,O*3),g.fromArray(o,A*2),_.fromArray(o,F*2),p.fromArray(o,O*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const W=1/(_.x*p.y-p.x*_.y);isFinite(W)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(W),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(W),c[A].add(h),c[F].add(h),c[O].add(h),u[A].add(E),u[F].add(E),u[O].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,F=T.length;A<F;++A){const O=T[A],W=O.start,P=O.count;for(let U=W,G=W+P;U<G;U+=3)v(i[U+0],i[U+1],i[U+2])}const S=new I,x=new I,w=new I,N=new I;function y(A){w.fromArray(s,A*3),N.copy(w);const F=c[A];S.copy(F),S.sub(w.multiplyScalar(w.dot(F))).normalize(),x.crossVectors(N,F);const W=x.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=W}for(let A=0,F=T.length;A<F;++A){const O=T[A],W=O.start,P=O.count;for(let U=W,G=W+P;U<G;U+=3)y(i[U+0]),y(i[U+1]),y(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new At(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new gt,Yn=new hr,Er=new cr,uo=new I,Ai=new I,wi=new I,Ri=new I,ys=new I,br=new I,Tr=new Ke,Ar=new Ke,wr=new Ke,fo=new I,po=new I,mo=new I,Rr=new I,Cr=new I;class Pt extends Ot{constructor(e=new _t,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ys.fromBufferAttribute(d,e),o?br.addScaledVector(ys,u):br.addScaledVector(ys.sub(t),u))}t.add(br)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Er.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Er,uo)===null||Yn.origin.distanceToSquared(uo)>(e.far-e.near)**2))&&(ho.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(ho),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,S=v;T<S;T+=3){const x=a.getX(T),w=a.getX(T+1),N=a.getX(T+2);r=Pr(this,h,e,i,c,u,d,x,w,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);r=Pr(this,o,e,i,c,u,d,E,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,S=v;T<S;T+=3){const x=T,w=T+1,N=T+2;r=Pr(this,h,e,i,c,u,d,x,w,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const E=p,v=p+1,T=p+2;r=Pr(this,o,e,i,c,u,d,E,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function uu(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:n}}function Pr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,wi),n.getVertexPosition(c,Ri);const u=uu(n,e,t,i,Ai,wi,Ri,Rr);if(u){r&&(Tr.fromBufferAttribute(r,a),Ar.fromBufferAttribute(r,l),wr.fromBufferAttribute(r,c),u.uv=ln.getInterpolation(Rr,Ai,wi,Ri,Tr,Ar,wr,new Ke)),s&&(Tr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,l),wr.fromBufferAttribute(s,c),u.uv1=ln.getInterpolation(Rr,Ai,wi,Ri,Tr,Ar,wr,new Ke),u.uv2=u.uv1),o&&(fo.fromBufferAttribute(o,a),po.fromBufferAttribute(o,l),mo.fromBufferAttribute(o,c),u.normal=ln.getInterpolation(Rr,Ai,wi,Ri,fo,po,mo,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};ln.getNormal(Ai,wi,Ri,d.normal),u.face=d}return u}class li extends _t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function g(_,p,h,E,v,T,S,x,w,N,y){const A=T/w,F=S/N,O=T/2,W=S/2,P=x/2,U=w+1,G=N+1;let Z=0,Y=0;const j=new I;for(let K=0;K<G;K++){const J=K*F-W;for(let te=0;te<U;te++){const k=te*A-O;j[_]=k*E,j[p]=J*v,j[h]=P,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[h]=x>0?1:-1,u.push(j.x,j.y,j.z),d.push(te/w),d.push(1-K/N),Z+=1}}for(let K=0;K<N;K++)for(let J=0;J<w;J++){const te=f+J+U*K,k=f+J+U*(K+1),ee=f+(J+1)+U*(K+1),Q=f+(J+1)+U*K;l.push(te,k,Q),l.push(k,ee,Q),Y+=6}a.addGroup(m,Y,y),m+=Y,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=ki(n[t]);for(const r in i)e[r]=i[r]}return e}function du(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xl(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const fu={clone:ki,merge:Dt};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends jl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class gu extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new tn(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const o=new tn(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const a=new tn(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const l=new tn(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ql extends kt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?bt:nn),this.texture=new ql(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new li(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Bn});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=en),new gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Es=new I,vu=new I,xu=new Ze;class Fn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Es.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Es),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xu.getNormalMatrix(e),r=this.coplanarPoint(Es).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new cr,Lr=new I;class Yl{constructor(e=new Fn,t=new Fn,i=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],h=r[12],E=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-s,f-c,p-m,T-h).normalize(),i[1].setComponents(l+s,f+c,p+m,T+h).normalize(),i[2].setComponents(l+o,f+u,p+g,T+E).normalize(),i[3].setComponents(l-o,f-u,p-g,T-E).normalize(),i[4].setComponents(l-a,f-d,p-_,T-v).normalize(),t===wn)i[5].setComponents(l+a,f+d,p+_,T+v).normalize();else if(t===Xr)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const h=g[_];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class aa extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const E=h*f-o;for(let v=0;v<c;v++){const T=v*d-s;g.push(T,-E,0),_.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const v=E+c*h,T=E+c*(h+1),S=E+1+c*(h+1),x=E+1+c*h;m.push(v,T,x),m.push(T,S,x)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
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
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
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
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
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
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
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
#endif`,Iu=`#ifdef USE_BUMPMAP
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`
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
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
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
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
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
#endif`,Md=`struct PhysicalMaterial {
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
}`,Sd=`
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
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
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,zf=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Hf=`#define NORMAL
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
}`,kf=`#define NORMAL
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
}`,Vf=`#define PHONG
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Yf=`#define TOON
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
}`,Kf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Su,alphahash_pars_fragment:yu,alphamap_fragment:Eu,alphamap_pars_fragment:bu,alphatest_fragment:Tu,alphatest_pars_fragment:Au,aomap_fragment:wu,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Du,bsdfs:Uu,iridescence_fragment:Nu,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:ku,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:ju,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:Ku,emissivemap_pars_fragment:$u,colorspace_fragment:Zu,colorspace_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:ed,envmap_pars_fragment:td,envmap_pars_vertex:nd,envmap_physical_pars_fragment:pd,envmap_vertex:id,fog_vertex:rd,fog_pars_vertex:sd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:ld,lightmap_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:yd,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:wd,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Id,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Bd,normal_pars_fragment:Gd,normal_pars_vertex:Hd,normal_vertex:kd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:Kd,premultiplied_alpha_fragment:$d,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:vf,uv_vertex:xf,worldpos_vertex:Mf,background_vert:Sf,background_frag:yf,backgroundCube_vert:Ef,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:Af,depth_vert:wf,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:Df,linedashed_vert:Uf,linedashed_frag:Nf,meshbasic_vert:If,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:zf,meshmatcap_vert:Bf,meshmatcap_frag:Gf,meshnormal_vert:Hf,meshnormal_frag:kf,meshphong_vert:Vf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:jf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:Kf,points_frag:$f,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:ep},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},pn={basic:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Dt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Dt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Dt([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Dt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Dt([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Dt([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Dt([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Dt([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pn.physical={uniforms:Dt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Dr={r:0,b:0,g:0};function tp(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let E=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qr)?(u===void 0&&(u=new Pt(new li(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ki(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pt(new aa(2,2),new rn({name:"BackgroundMaterial",uniforms:ki(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Dr,Xl(n)),i.buffers.color.setClear(Dr.r,Dr.g,Dr.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function np(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(P,U,G,Z,Y){let j=!1;if(o){const K=_(Z,G,U);c!==K&&(c=K,m(c.object)),j=h(P,Z,G,Y),j&&E(P,Z,G,Y)}else{const K=U.wireframe===!0;(c.geometry!==Z.id||c.program!==G.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=G.id,c.wireframe=K,j=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,N(P,U,G,Z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,U,G){const Z=G.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let j=Y[U.id];j===void 0&&(j={},Y[U.id]=j);let K=j[Z];return K===void 0&&(K=p(f()),j[Z]=K),K}function p(P){const U=[],G=[],Z=[];for(let Y=0;Y<r;Y++)U[Y]=0,G[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Z,object:P,attributes:{},index:null}}function h(P,U,G,Z){const Y=c.attributes,j=U.attributes;let K=0;const J=G.getAttributes();for(const te in J)if(J[te].location>=0){const ee=Y[te];let Q=j[te];if(Q===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),ee===void 0||ee.attribute!==Q||Q&&ee.data!==Q.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function E(P,U,G,Z){const Y={},j=U.attributes;let K=0;const J=G.getAttributes();for(const te in J)if(J[te].location>=0){let ee=j[te];ee===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const Q={};Q.attribute=ee,ee&&ee.data&&(Q.data=ee.data),Y[te]=Q,K++}c.attributes=Y,c.attributesNum=K,c.index=Z}function v(){const P=c.newAttributes;for(let U=0,G=P.length;U<G;U++)P[U]=0}function T(P){S(P,0)}function S(P,U){const G=c.newAttributes,Z=c.enabledAttributes,Y=c.attributeDivisors;G[P]=1,Z[P]===0&&(n.enableVertexAttribArray(P),Z[P]=1),Y[P]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),Y[P]=U)}function x(){const P=c.newAttributes,U=c.enabledAttributes;for(let G=0,Z=U.length;G<Z;G++)U[G]!==P[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function w(P,U,G,Z,Y,j,K){K===!0?n.vertexAttribIPointer(P,U,G,Y,j):n.vertexAttribPointer(P,U,G,Z,Y,j)}function N(P,U,G,Z){if(i.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=Z.attributes,j=G.getAttributes(),K=U.defaultAttributeValues;for(const J in j){const te=j[J];if(te.location>=0){let k=Y[J];if(k===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const ee=k.normalized,Q=k.itemSize,ae=t.get(k);if(ae===void 0)continue;const ge=ae.buffer,Se=ae.type,Re=ae.bytesPerElement,Ee=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||k.gpuType===Cl);if(k.isInterleavedBufferAttribute){const Ue=k.data,H=Ue.stride,ze=k.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<te.locationSize;_e++)S(te.location+_e,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<te.locationSize;_e++)T(te.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let _e=0;_e<te.locationSize;_e++)w(te.location+_e,Q/te.locationSize,Se,ee,H*Re,(ze+Q/te.locationSize*_e)*Re,Ee)}else{if(k.isInstancedBufferAttribute){for(let Ue=0;Ue<te.locationSize;Ue++)S(te.location+Ue,k.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ue=0;Ue<te.locationSize;Ue++)T(te.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ue=0;Ue<te.locationSize;Ue++)w(te.location+Ue,Q/te.locationSize,Se,ee,Q*Re,Q/te.locationSize*Ue*Re,Ee)}}else if(K!==void 0){const ee=K[J];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(te.location,ee);break;case 3:n.vertexAttrib3fv(te.location,ee);break;case 4:n.vertexAttrib4fv(te.location,ee);break;default:n.vertexAttrib1fv(te.location,ee)}}}}x()}function y(){O();for(const P in a){const U=a[P];for(const G in U){const Z=U[G];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete U[G]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const G in U){const Z=U[G];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete U[G]}delete a[P.id]}function F(P){for(const U in a){const G=a[U];if(G[P.id]===void 0)continue;const Z=G[P.id];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete G[P.id]}}function O(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:W,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:T,disableUnusedAttributes:x}}function ip(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function rp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||e.has("OES_texture_float"),S=v&&T,x=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:x}}function sp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Fn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,v=E*4;let T=h.clippingState||null;l.value=T,T=u(g,f,v,m);for(let S=0;S!==v;++S)T[S]=t[S];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,T=m;v!==_;++v,T+=4)o.copy(d[v]).applyMatrix4(E,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ap(n){let e=new WeakMap;function t(o,a){return a===Hs?o.mapping=Bi:a===ks&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hs||a===ks)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _u(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class op extends jl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,go=[.125,.215,.35,.446,.526,.582],Jn=20,bs=new op,_o=new tt;let Ts=null,As=0,ws=0;const $n=(1+Math.sqrt(5))/2,Li=1/$n,vo=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,$n,Li),new I(0,$n,-Li),new I(Li,0,$n),new I(-Li,0,$n),new I($n,Li,0),new I(-$n,Li,0)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts,As,ws),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:rr,format:hn,colorSpace:_n,depthBuffer:!1},r=Mo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return r}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,i,r){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_o),u.toneMapping=Gn,u.autoClear=!1;const m=new er({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Pt(new li,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(_o),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Ur(r,E*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vo[(r-1)%vo.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const h=[];let E=0;for(let w=0;w<Jn;++w){const N=w/_,y=Math.exp(-N*N/2);h.push(y),w===0?E+=y:w<p&&(E+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const T=this._sizeLods[r],S=3*T*(r>v-Ni?r-v+Ni:0),x=4*(this._cubeSize-T);Ur(t,S,x,3*T,2*T),l.setRenderTarget(t),l.render(d,bs)}}function lp(n){const e=[],t=[],i=[];let r=n;const s=n-Ni+1+go.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ni?l=go[o-n+Ni-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,E=new Float32Array(_*g*m),v=new Float32Array(p*g*m),T=new Float32Array(h*g*m);for(let x=0;x<m;x++){const w=x%3*2/3-1,N=x>2?0:-1,y=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];E.set(y,_*g*x),v.set(f,p*g*x);const A=[x,x,x,x,x,x];T.set(A,h*g*x)}const S=new _t;S.setAttribute("position",new At(E,_)),S.setAttribute("uv",new At(v,p)),S.setAttribute("faceIndex",new At(T,h)),e.push(S),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mo(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cp(n,e,t){const i=new Float32Array(Jn),r=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function So(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function yo(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}function hp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hs||l===ks,u=l===Bi||l===Gi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new xo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new xo(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function up(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dp(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let v=0,T=E.length;v<T;v+=3){const S=E[v+0],x=E[v+1],w=E[v+2];f.push(S,x,x,w,w,S)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,T=E.length/3-1;v<T;v+=3){const S=v+0,x=v+1,w=v+2;f.push(S,x,x,w,w,S)}}else return;const p=new(zl(f)?Wl:Vl)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function fp(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let h=0;for(let E=0;E<_;E++)h+=g[E];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function pp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mp(n,e){return n[0]-e[0]}function gp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _p(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let N=0;E===!0&&(N=1),v===!0&&(N=2),T===!0&&(N=3);let y=u.attributes.position.count*N,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*A*4*g),O=new Hl(F,y,A,g);O.type=zn,O.needsUpdate=!0;const W=N*4;for(let U=0;U<g;U++){const G=S[U],Z=x[U],Y=w[U],j=y*A*4*U;for(let K=0;K<G.count;K++){const J=K*W;E===!0&&(o.fromBufferAttribute(G,K),F[j+J+0]=o.x,F[j+J+1]=o.y,F[j+J+2]=o.z,F[j+J+3]=0),v===!0&&(o.fromBufferAttribute(Z,K),F[j+J+4]=o.x,F[j+J+5]=o.y,F[j+J+6]=o.z,F[j+J+7]=0),T===!0&&(o.fromBufferAttribute(Y,K),F[j+J+8]=o.x,F[j+J+9]=o.y,F[j+J+10]=o.z,F[j+J+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new Ke(y,A)},s.set(u,_),u.addEventListener("dispose",P)}let p=0;for(let E=0;E<f.length;E++)p+=f[E];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){const T=g[v];T[0]=v,T[1]=f[v]}g.sort(gp);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mp);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let v=0;v<8;v++){const T=a[v],S=T[0],x=T[1];S!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[S]&&u.setAttribute("morphTarget"+v,_[S]),p&&u.getAttribute("morphNormal"+v)!==p[S]&&u.setAttribute("morphNormal"+v,p[S]),r[v]=x,h+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const E=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function vp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class $l extends kt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=On),i===void 0&&u===Hi&&(i=ii),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zl=new kt,Jl=new $l(1,1);Jl.compareFunction=Ol;const Ql=new Hl,ec=new eu,tc=new ql,Eo=[],bo=[],To=new Float32Array(16),Ao=new Float32Array(9),wo=new Float32Array(4);function Wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eo[r];if(s===void 0&&(s=new Float32Array(r),Eo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;wo.set(i),n.uniformMatrix2fv(this.addr,!1,wo),xt(t,i)}}function bp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ao.set(i),n.uniformMatrix3fv(this.addr,!1,Ao),xt(t,i)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;To.set(i),n.uniformMatrix4fv(this.addr,!1,To),xt(t,i)}}function Ap(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Np(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Jl:Zl;t.setTexture2D(e||s,r)}function Ip(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ec,r)}function Fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tc,r)}function Op(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ql,r)}function zp(n){switch(n){case 5126:return xp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return Ep;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function Bp(n,e){n.uniform1fv(this.addr,e)}function Gp(n,e){const t=Wi(e,this.size,2);n.uniform2fv(this.addr,t)}function Hp(n,e){const t=Wi(e,this.size,3);n.uniform3fv(this.addr,t)}function kp(n,e){const t=Wi(e,this.size,4);n.uniform4fv(this.addr,t)}function Vp(n,e){const t=Wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wp(n,e){const t=Wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xp(n,e){const t=Wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jp(n,e){n.uniform1iv(this.addr,e)}function qp(n,e){n.uniform2iv(this.addr,e)}function Yp(n,e){n.uniform3iv(this.addr,e)}function Kp(n,e){n.uniform4iv(this.addr,e)}function $p(n,e){n.uniform1uiv(this.addr,e)}function Zp(n,e){n.uniform2uiv(this.addr,e)}function Jp(n,e){n.uniform3uiv(this.addr,e)}function Qp(n,e){n.uniform4uiv(this.addr,e)}function em(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zl,s[o])}function tm(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ec,s[o])}function nm(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tc,s[o])}function im(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ql,s[o])}function rm(n){switch(n){case 5126:return Bp;case 35664:return Gp;case 35665:return Hp;case 35666:return kp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Kp;case 5125:return $p;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zp(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function Ro(n,e){n.seq.push(e),n.map[e.id]=e}function lm(n,e,t){const i=n.name,r=i.length;for(Rs.lastIndex=0;;){const s=Rs.exec(i),o=Rs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ro(t,c===void 0?new sm(a,n,e):new am(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new om(a),Ro(t,d)),t=d}}}class Gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Co(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cm=37297;let hm=0;function um(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dm(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Wr&&t===Vr?i="LinearDisplayP3ToLinearSRGB":e===Vr&&t===Wr&&(i="LinearSRGBToLinearDisplayP3"),n){case _n:case Yr:return[i,"LinearTransferOETF"];case bt:case ra:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Po(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+um(n.getShaderSource(e),o)}else return r}function fm(n,e){const t=dm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(n,e){let t;switch(e){case Sh:t="Linear";break;case yh:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case bh:t="ACESFilmic";break;case Ah:t="AgX";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function _m(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ii(n){return n!==""}function Lo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Do(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(n){return n.replace(xm,Sm)}const Mm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(n,e){let t=$e[e];if(t===void 0){const i=Mm.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ys(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(n){return n.replace(ym,Em)}function Em(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case Gi:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Gi&&(e="ENVMAP_MODE_REFRACTION"),e}function wm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case xh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bm(t),c=Tm(t),u=Am(t),d=wm(t),f=Rm(t),m=t.isWebGL2?"":mm(t),g=gm(t),_=_m(s),p=r.createProgram();let h,E,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),h.length>0&&(h+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),E.length>0&&(E+=`
`)):(h=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),E=[m,No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Gn?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Ys(o),o=Lo(o,t),o=Do(o,t),a=Ys(a),a=Lo(a,t),a=Do(a,t),o=Uo(o),a=Uo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=v+h+o,S=v+E+a,x=Co(r,r.VERTEX_SHADER,T),w=Co(r,r.FRAGMENT_SHADER,S);r.attachShader(p,x),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(O){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(x).trim(),U=r.getShaderInfoLog(w).trim();let G=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,x,w);else{const Y=Po(r,x,"vertex"),j=Po(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Y+`
`+j)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||U==="")&&(Z=!1);Z&&(O.diagnostics={runnable:G,programLog:W,vertexShader:{log:P,prefix:h},fragmentShader:{log:U,prefix:E}})}r.deleteShader(x),r.deleteShader(w),y=new Gr(r,p),A=vm(r,p)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(p,cm)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=w,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dm(e),t.set(e,i)),i}}class Dm{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Um(n,e,t,i,r,s,o){const a=new sa,l=new Lm,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,A,F,O,W){const P=O.fog,U=W.geometry,G=y.isMeshStandardMaterial?O.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),Y=Z&&Z.mapping===qr?Z.image.height:null,j=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=K!==void 0?K.length:0;let te=0;U.morphAttributes.position!==void 0&&(te=1),U.morphAttributes.normal!==void 0&&(te=2),U.morphAttributes.color!==void 0&&(te=3);let k,ee,Q,ae;if(j){const st=pn[j];k=st.vertexShader,ee=st.fragmentShader}else k=y.vertexShader,ee=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const ge=n.getRenderTarget(),Se=W.isInstancedMesh===!0,Re=W.isBatchedMesh===!0,Ee=!!y.map,Ue=!!y.matcap,H=!!Z,ze=!!y.aoMap,_e=!!y.lightMap,ye=!!y.bumpMap,xe=!!y.normalMap,Le=!!y.displacementMap,Te=!!y.emissiveMap,b=!!y.metalnessMap,M=!!y.roughnessMap,z=y.anisotropy>0,re=y.clearcoat>0,se=y.iridescence>0,B=y.sheen>0,he=y.transmission>0,le=z&&!!y.anisotropyMap,ve=re&&!!y.clearcoatMap,Ae=re&&!!y.clearcoatNormalMap,Pe=re&&!!y.clearcoatRoughnessMap,oe=se&&!!y.iridescenceMap,Ge=se&&!!y.iridescenceThicknessMap,C=B&&!!y.sheenColorMap,ie=B&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Me=!!y.specularIntensityMap,Ne=he&&!!y.transmissionMap,We=he&&!!y.thicknessMap,Oe=!!y.gradientMap,ue=!!y.alphaMap,L=y.alphaTest>0,pe=!!y.alphaHash,me=!!y.extensions,De=!!U.attributes.uv1,Ce=!!U.attributes.uv2,Xe=!!U.attributes.uv3;let He=Gn;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(He=n.toneMapping),{isWebGL2:u,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:ee,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Re,instancing:Se,instancingColor:Se&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:_n,map:Ee,matcap:Ue,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:_e,bumpMap:ye,normalMap:xe,displacementMap:f&&Le,emissiveMap:Te,normalMapObjectSpace:xe&&y.normalMapType===Bh,normalMapTangentSpace:xe&&y.normalMapType===zh,metalnessMap:b,roughnessMap:M,anisotropy:z,anisotropyMap:le,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Pe,iridescence:se,iridescenceMap:oe,iridescenceThicknessMap:Ge,sheen:B,sheenColorMap:C,sheenRoughnessMap:ie,specularMap:fe,specularColorMap:ce,specularIntensityMap:Me,transmission:he,transmissionMap:Ne,thicknessMap:We,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===Fi,alphaMap:ue,alphaTest:L,alphaHash:pe,combine:y.combine,mapUv:Ee&&_(y.map.channel),aoMapUv:ze&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:ye&&_(y.bumpMap.channel),normalMapUv:xe&&_(y.normalMap.channel),displacementMapUv:Le&&_(y.displacementMap.channel),emissiveMapUv:Te&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:C&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Me&&_(y.specularIntensityMap.channel),transmissionMapUv:Ne&&_(y.transmissionMap.channel),thicknessMapUv:We&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xe||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ce,vertexUv3s:Xe,pointsUvs:W.isPoints===!0&&!!U.attributes.uv&&(Ee||ue),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yt,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:me&&y.extensions.derivatives===!0,extensionFragDepth:me&&y.extensions.fragDepth===!0,extensionDrawBuffers:me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)A.push(F),A.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(E(A,y),v(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function E(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){const A=g[y.type];let F;if(A){const O=pn[A];F=fu.clone(O.uniforms)}else F=y.uniforms;return F}function S(y,A){let F;for(let O=0,W=c.length;O<W;O++){const P=c[O];if(P.cacheKey===A){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Cm(n,A,y,s),c.push(F)),F}function x(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:S,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:N}}function Nm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Io(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,g,_,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function a(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Im),i.length>1&&i.sort(f||Io),r.length>1&&r.sort(f||Io)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Fm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Fo,n.set(i,[o])):r>=s.length?(o=new Fo,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Om(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new tt};break;case"SpotLight":t={position:new I,direction:new I,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function zm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bm=0;function Gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hm(n,e){const t=new Om,i=zm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new gt,a=new gt;function l(u,d){let f=0,m=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,p=0,h=0,E=0,v=0,T=0,S=0,x=0,w=0,N=0,y=0;u.sort(Gm);const A=d===!0?Math.PI:1;for(let O=0,W=u.length;O<W;O++){const P=u[O],U=P.color,G=P.intensity,Z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*G*A,m+=U.g*G*A,g+=U.b*G*A;else if(P.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(P.sh.coefficients[j],G);y++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const K=P.shadow,J=i.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=P.shadow.matrix,T++}r.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(U).multiplyScalar(G*A),j.distance=Z,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,r.spot[h]=j;const K=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[h]=K.matrix,P.castShadow){const J=i.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.spotShadow[h]=J,r.spotShadowMap[h]=Y,x++}h++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(U).multiplyScalar(G),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),r.rectArea[E]=j,E++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,J=i.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=P.shadow.matrix,S++}r.point[p]=j,p++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(G*A),j.groundColor.copy(P.groundColor).multiplyScalar(G*A),r.hemi[v]=j,v++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const F=r.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==h||F.rectAreaLength!==E||F.hemiLength!==v||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==x||F.numSpotMaps!==w||F.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=E,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=x+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=y,F.directionalLength=_,F.pointLength=p,F.spotLength=h,F.rectAreaLength=E,F.hemiLength=v,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=x,F.numSpotMaps=w,F.numLightProbes=y,r.version=Bm++)}function c(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const T=u[E];if(T.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),f++}else if(T.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),g++}else if(T.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),a.identity(),o.copy(T.matrixWorld),o.premultiply(h),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Oo(n,e){const t=new Hm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function km(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Oo(n,e),t.set(s,[l])):o>=a.length?(l=new Oo(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vm extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function qm(n,e,t){let i=new Yl;const r=new Ke,s=new Ke,o=new Tt,a=new Vm({depthPacking:Oh}),l=new Wm,c={},u=t.maxTextureSize,d={[Vn]:Ft,[Ft]:Vn,[Yt]:Yt},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Xm,fragmentShader:jm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let h=this.type;this.render=function(x,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const y=n.getRenderTarget(),A=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=h!==An&&this.type===An,P=h===An&&this.type!==An;for(let U=0,G=x.length;U<G;U++){const Z=x[U],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const j=Y.getFrameExtents();if(r.multiply(j),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||W===!0||P===!0){const J=this.type!==An?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ai(r.x,r.y,J),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const K=Y.getViewportCount();for(let J=0;J<K;J++){const te=Y.getViewport(J);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),O.viewport(o),Y.updateMatrices(Z,J),i=Y.getFrustum(),T(w,N,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===An&&E(Y,N),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,A,F)};function E(x,w){const N=e.update(_);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,N,f,_,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,N,m,_,null)}function v(x,w,N,y){let A=null;const F=N.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)A=F;else if(A=N.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=A.uuid,W=w.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let U=P[W];U===void 0&&(U=A.clone(),P[W]=U,w.addEventListener("dispose",S)),A=U}if(A.visible=w.visible,A.wireframe=w.wireframe,y===An?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const O=n.properties.get(A);O.light=N}return A}function T(x,w,N,y,A){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===An)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);const W=e.update(x),P=x.material;if(Array.isArray(P)){const U=W.groups;for(let G=0,Z=U.length;G<Z;G++){const Y=U[G],j=P[Y.materialIndex];if(j&&j.visible){const K=v(x,j,y,A);x.onBeforeShadow(n,x,w,N,W,K,Y),n.renderBufferDirect(N,null,W,K,x,Y),x.onAfterShadow(n,x,w,N,W,K,Y)}}}else if(P.visible){const U=v(x,P,y,A);x.onBeforeShadow(n,x,w,N,W,U,null),n.renderBufferDirect(N,null,W,U,x,null),x.onAfterShadow(n,x,w,N,W,U,null)}}const O=x.children;for(let W=0,P=O.length;W<P;W++)T(O[W],w,N,y,A)}function S(x){x.target.removeEventListener("dispose",S);for(const N in c){const y=c[N],A=x.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function Ym(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const pe=new Tt;let me=null;const De=new Tt(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!L&&(n.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,Xe,He,Qe,st){st===!0&&(Ce*=Qe,Xe*=Qe,He*=Qe),pe.set(Ce,Xe,He,Qe),De.equals(pe)===!1&&(n.clearColor(Ce,Xe,He,Qe),De.copy(pe))},reset:function(){L=!1,me=null,De.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,De=null;return{setTest:function(Ce){Ce?Re(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Ce){pe!==Ce&&!L&&(n.depthMask(Ce),pe=Ce)},setFunc:function(Ce){if(me!==Ce){switch(Ce){case dh:n.depthFunc(n.NEVER);break;case fh:n.depthFunc(n.ALWAYS);break;case ph:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case mh:n.depthFunc(n.EQUAL);break;case gh:n.depthFunc(n.GEQUAL);break;case _h:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){De!==Ce&&(n.clearDepth(Ce),De=Ce)},reset:function(){L=!1,pe=null,me=null,De=null}}}function o(){let L=!1,pe=null,me=null,De=null,Ce=null,Xe=null,He=null,Qe=null,st=null;return{setTest:function(de){L||(de?Re(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(de){pe!==de&&!L&&(n.stencilMask(de),pe=de)},setFunc:function(de,Je,it){(me!==de||De!==Je||Ce!==it)&&(n.stencilFunc(de,Je,it),me=de,De=Je,Ce=it)},setOp:function(de,Je,it){(Xe!==de||He!==Je||Qe!==it)&&(n.stencilOp(de,Je,it),Xe=de,He=Je,Qe=it)},setLocked:function(de){L=de},setClear:function(de){st!==de&&(n.clearStencil(de),st=de)},reset:function(){L=!1,pe=null,me=null,De=null,Ce=null,Xe=null,He=null,Qe=null,st=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,v=null,T=null,S=null,x=null,w=null,N=null,y=new tt(0,0,0),A=0,F=!1,O=null,W=null,P=null,U=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=j>=2);let J=null,te={};const k=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Q=new Tt().fromArray(k),ae=new Tt().fromArray(ee);function ge(L,pe,me,De){const Ce=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(L,Xe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<me;He++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(pe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Xe}const Se={};Se[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc(Hr),Te(!1),b(_a),Re(n.CULL_FACE),xe(Bn);function Re(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Ee(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function Ue(L,pe){return m[L]!==pe?(n.bindFramebuffer(L,pe),m[L]=pe,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=pe),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function H(L,pe){let me=_,De=!1;if(L)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(me.length!==Ce.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,He=Ce.length;Xe<He;Xe++)me[Xe]=n.COLOR_ATTACHMENT0+Xe;me.length=Ce.length,De=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,De=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ze(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const _e={[Zn]:n.FUNC_ADD,[Zc]:n.FUNC_SUBTRACT,[Jc]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Sa]=n.MIN,_e[ya]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Sa]=L.MIN_EXT,_e[ya]=L.MAX_EXT)}const ye={[Qc]:n.ZERO,[eh]:n.ONE,[th]:n.SRC_COLOR,[Bs]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[rh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[ch]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(L,pe,me,De,Ce,Xe,He,Qe,st,de){if(L===Bn){h===!0&&(Ee(n.BLEND),h=!1);return}if(h===!1&&(Re(n.BLEND),h=!0),L!==$c){if(L!==E||de!==F){if((v!==Zn||x!==Zn)&&(n.blendEquation(n.FUNC_ADD),v=Zn,x=Zn),de)switch(L){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.ONE,n.ONE);break;case xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ma:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ma:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,S=null,w=null,N=null,y.set(0,0,0),A=0,E=L,F=de}return}Ce=Ce||pe,Xe=Xe||me,He=He||De,(pe!==v||Ce!==x)&&(n.blendEquationSeparate(_e[pe],_e[Ce]),v=pe,x=Ce),(me!==T||De!==S||Xe!==w||He!==N)&&(n.blendFuncSeparate(ye[me],ye[De],ye[Xe],ye[He]),T=me,S=De,w=Xe,N=He),(Qe.equals(y)===!1||st!==A)&&(n.blendColor(Qe.r,Qe.g,Qe.b,st),y.copy(Qe),A=st),E=L,F=!1}function Le(L,pe){L.side===Yt?Ee(n.CULL_FACE):Re(n.CULL_FACE);let me=L.side===Ft;pe&&(me=!me),Te(me),L.blending===Fi&&L.transparent===!1?xe(Bn):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const De=L.stencilWrite;c.setTest(De),De&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function b(L){L!==qc?(Re(n.CULL_FACE),L!==W&&(L===_a?n.cullFace(n.BACK):L===Yc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),W=L}function M(L){L!==P&&(Y&&n.lineWidth(L),P=L)}function z(L,pe,me){L?(Re(n.POLYGON_OFFSET_FILL),(U!==pe||G!==me)&&(n.polygonOffset(pe,me),U=pe,G=me)):Ee(n.POLYGON_OFFSET_FILL)}function re(L){L?Re(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function se(L){L===void 0&&(L=n.TEXTURE0+Z-1),J!==L&&(n.activeTexture(L),J=L)}function B(L,pe,me){me===void 0&&(J===null?me=n.TEXTURE0+Z-1:me=J);let De=te[me];De===void 0&&(De={type:void 0,texture:void 0},te[me]=De),(De.type!==L||De.texture!==pe)&&(J!==me&&(n.activeTexture(me),J=me),n.bindTexture(L,pe||Se[L]),De.type=L,De.texture=pe)}function he(){const L=te[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(L){Q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function Ne(L){ae.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function We(L,pe){let me=d.get(pe);me===void 0&&(me=new WeakMap,d.set(pe,me));let De=me.get(L);De===void 0&&(De=n.getUniformBlockIndex(pe,L.name),me.set(L,De))}function Oe(L,pe){const De=d.get(pe).get(L);u.get(pe)!==De&&(n.uniformBlockBinding(pe,De,L.__bindingPointIndex),u.set(pe,De))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,te={},m={},g=new WeakMap,_=[],p=null,h=!1,E=null,v=null,T=null,S=null,x=null,w=null,N=null,y=new tt(0,0,0),A=0,F=!1,O=null,W=null,P=null,U=null,G=null,Q.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Ee,bindFramebuffer:Ue,drawBuffers:H,useProgram:ze,setBlending:xe,setMaterial:Le,setFlipSided:Te,setCullFace:b,setLineWidth:M,setPolygonOffset:z,setScissorTest:re,activeTexture:se,bindTexture:B,unbindTexture:he,compressedTexImage2D:le,compressedTexImage3D:ve,texImage2D:fe,texImage3D:ce,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:C,texStorage3D:ie,texSubImage2D:Ae,texSubImage3D:Pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ge,scissor:Me,viewport:Ne,reset:ue}}function Km(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):sr("canvas")}function _(b,M,z,re){let se=1;if((b.width>re||b.height>re)&&(se=re/Math.max(b.width,b.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const B=M?qs:Math.floor,he=B(se*b.width),le=B(se*b.height);d===void 0&&(d=g(he,le));const ve=z?g(he,le):d;return ve.width=he,ve.height=le,ve.getContext("2d").drawImage(b,0,0,he,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+he+"x"+le+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Ja(b.width)&&Ja(b.height)}function h(b){return a?!1:b.wrapS!==cn||b.wrapT!==cn||b.minFilter!==Nt&&b.minFilter!==en}function E(b,M){return b.generateMipmaps&&M&&b.minFilter!==Nt&&b.minFilter!==en}function v(b){n.generateMipmap(b)}function T(b,M,z,re,se=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let B=M;if(M===n.RED&&(z===n.FLOAT&&(B=n.R32F),z===n.HALF_FLOAT&&(B=n.R16F),z===n.UNSIGNED_BYTE&&(B=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(B=n.R8UI),z===n.UNSIGNED_SHORT&&(B=n.R16UI),z===n.UNSIGNED_INT&&(B=n.R32UI),z===n.BYTE&&(B=n.R8I),z===n.SHORT&&(B=n.R16I),z===n.INT&&(B=n.R32I)),M===n.RG&&(z===n.FLOAT&&(B=n.RG32F),z===n.HALF_FLOAT&&(B=n.RG16F),z===n.UNSIGNED_BYTE&&(B=n.RG8)),M===n.RGBA){const he=se?kr:nt.getTransfer(re);z===n.FLOAT&&(B=n.RGBA32F),z===n.HALF_FLOAT&&(B=n.RGBA16F),z===n.UNSIGNED_BYTE&&(B=he===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function S(b,M,z){return E(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function x(b){return b===Nt||b===Ea||b===es?n.NEAREST:n.LINEAR}function w(b){const M=b.target;M.removeEventListener("dispose",w),y(M),M.isVideoTexture&&u.delete(M)}function N(b){const M=b.target;M.removeEventListener("dispose",N),F(M)}function y(b){const M=i.get(b);if(M.__webglInit===void 0)return;const z=b.source,re=f.get(z);if(re){const se=re[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(b),Object.keys(re).length===0&&f.delete(z)}i.remove(b)}function A(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const z=b.source,re=f.get(z);delete re[M.__cacheKey],o.memory.textures--}function F(b){const M=b.texture,z=i.get(b),re=i.get(M);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(z.__webglFramebuffer[se]))for(let B=0;B<z.__webglFramebuffer[se].length;B++)n.deleteFramebuffer(z.__webglFramebuffer[se][B]);else n.deleteFramebuffer(z.__webglFramebuffer[se]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[se])}else{if(Array.isArray(z.__webglFramebuffer))for(let se=0;se<z.__webglFramebuffer.length;se++)n.deleteFramebuffer(z.__webglFramebuffer[se]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,B=M.length;se<B;se++){const he=i.get(M[se]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(b)}let O=0;function W(){O=0}function P(){const b=O;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),O+=1,b}function U(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function G(b,M){const z=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,b,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Z(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){Q(z,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function Y(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){Q(z,b,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function j(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ae(z,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const K={[Vs]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Ws]:n.MIRRORED_REPEAT},J={[Nt]:n.NEAREST,[Ea]:n.NEAREST_MIPMAP_NEAREST,[es]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},te={[Gh]:n.NEVER,[jh]:n.ALWAYS,[Hh]:n.LESS,[Ol]:n.LEQUAL,[kh]:n.EQUAL,[Xh]:n.GEQUAL,[Vh]:n.GREATER,[Wh]:n.NOTEQUAL};function k(b,M,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[M.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==cn||M.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,x(M.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,x(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==es&&M.minFilter!==ir||M.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===rr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ee(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const re=M.source;let se=f.get(re);se===void 0&&(se={},f.set(re,se));const B=U(M);if(B!==b.__cacheKey){se[B]===void 0&&(se[B]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[B].usedTimes++;const he=se[b.__cacheKey];he!==void 0&&(se[b.__cacheKey].usedTimes--,he.usedTimes===0&&A(M)),b.__cacheKey=B,b.__webglTexture=se[B].texture}return z}function Q(b,M,z){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);const se=ee(b,M),B=M.source;t.bindTexture(re,b.__webglTexture,n.TEXTURE0+z);const he=i.get(B);if(B.version!==he.__version||se===!0){t.activeTexture(n.TEXTURE0+z);const le=nt.getPrimaries(nt.workingColorSpace),ve=M.colorSpace===nn?null:nt.getPrimaries(M.colorSpace),Ae=M.colorSpace===nn||le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=h(M)&&p(M.image)===!1;let oe=_(M.image,Pe,!1,r.maxTextureSize);oe=Te(M,oe);const Ge=p(oe)||a,C=s.convert(M.format,M.colorSpace);let ie=s.convert(M.type),fe=T(M.internalFormat,C,ie,M.colorSpace,M.isVideoTexture);k(re,M,Ge);let ce;const Me=M.mipmaps,Ne=a&&M.isVideoTexture!==!0&&fe!==Il,We=he.__version===void 0||se===!0,Oe=S(M,oe,Ge);if(M.isDepthTexture)fe=n.DEPTH_COMPONENT,a?M.type===zn?fe=n.DEPTH_COMPONENT32F:M.type===On?fe=n.DEPTH_COMPONENT24:M.type===ii?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:M.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ri&&fe===n.DEPTH_COMPONENT&&M.type!==ia&&M.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=On,ie=s.convert(M.type)),M.format===Hi&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,M.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ii,ie=s.convert(M.type))),We&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,fe,oe.width,oe.height,0,C,ie,null));else if(M.isDataTexture)if(Me.length>0&&Ge){Ne&&We&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Me[0].width,Me[0].height);for(let ue=0,L=Me.length;ue<L;ue++)ce=Me[ue],Ne?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,ie,ce.data):t.texImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,C,ie,ce.data);M.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,C,ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,fe,oe.width,oe.height,0,C,ie,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,fe,Me[0].width,Me[0].height,oe.depth);for(let ue=0,L=Me.length;ue<L;ue++)ce=Me[ue],M.format!==hn?C!==null?Ne?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,oe.depth,C,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,fe,ce.width,ce.height,oe.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,oe.depth,C,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,fe,ce.width,ce.height,oe.depth,0,C,ie,ce.data)}else{Ne&&We&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Me[0].width,Me[0].height);for(let ue=0,L=Me.length;ue<L;ue++)ce=Me[ue],M.format!==hn?C!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,ie,ce.data):t.texImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,C,ie,ce.data)}else if(M.isDataArrayTexture)Ne?(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,fe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,C,ie,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,oe.width,oe.height,oe.depth,0,C,ie,oe.data);else if(M.isData3DTexture)Ne?(We&&t.texStorage3D(n.TEXTURE_3D,Oe,fe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,C,ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,fe,oe.width,oe.height,oe.depth,0,C,ie,oe.data);else if(M.isFramebufferTexture){if(We)if(Ne)t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height);else{let ue=oe.width,L=oe.height;for(let pe=0;pe<Oe;pe++)t.texImage2D(n.TEXTURE_2D,pe,fe,ue,L,0,C,ie,null),ue>>=1,L>>=1}}else if(Me.length>0&&Ge){Ne&&We&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Me[0].width,Me[0].height);for(let ue=0,L=Me.length;ue<L;ue++)ce=Me[ue],Ne?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,C,ie,ce):t.texImage2D(n.TEXTURE_2D,ue,fe,C,ie,ce);M.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,C,ie,oe)):t.texImage2D(n.TEXTURE_2D,0,fe,C,ie,oe);E(M,Ge)&&v(re),he.__version=B.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ae(b,M,z){if(M.image.length!==6)return;const re=ee(b,M),se=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const B=i.get(se);if(se.version!==B.__version||re===!0){t.activeTexture(n.TEXTURE0+z);const he=nt.getPrimaries(nt.workingColorSpace),le=M.colorSpace===nn?null:nt.getPrimaries(M.colorSpace),ve=M.colorSpace===nn||he===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ue=0;ue<6;ue++)!Ae&&!Pe?oe[ue]=_(M.image[ue],!1,!0,r.maxCubemapSize):oe[ue]=Pe?M.image[ue].image:M.image[ue],oe[ue]=Te(M,oe[ue]);const Ge=oe[0],C=p(Ge)||a,ie=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),ce=T(M.internalFormat,ie,fe,M.colorSpace),Me=a&&M.isVideoTexture!==!0,Ne=B.__version===void 0||re===!0;let We=S(M,Ge,C);k(n.TEXTURE_CUBE_MAP,M,C);let Oe;if(Ae){Me&&Ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,We,ce,Ge.width,Ge.height);for(let ue=0;ue<6;ue++){Oe=oe[ue].mipmaps;for(let L=0;L<Oe.length;L++){const pe=Oe[L];M.format!==hn?ie!==null?Me?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,pe.width,pe.height,ie,fe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,ce,pe.width,pe.height,0,ie,fe,pe.data)}}}else{Oe=M.mipmaps,Me&&Ne&&(Oe.length>0&&We++,t.texStorage2D(n.TEXTURE_CUBE_MAP,We,ce,oe[0].width,oe[0].height));for(let ue=0;ue<6;ue++)if(Pe){Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,oe[ue].width,oe[ue].height,ie,fe,oe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ce,oe[ue].width,oe[ue].height,0,ie,fe,oe[ue].data);for(let L=0;L<Oe.length;L++){const me=Oe[L].image[ue].image;Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,me.width,me.height,ie,fe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ce,me.width,me.height,0,ie,fe,me.data)}}else{Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ie,fe,oe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ce,ie,fe,oe[ue]);for(let L=0;L<Oe.length;L++){const pe=Oe[L];Me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,ie,fe,pe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,ce,ie,fe,pe.image[ue])}}}E(M,C)&&v(n.TEXTURE_CUBE_MAP),B.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ge(b,M,z,re,se,B){const he=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ve=T(z.internalFormat,he,le,z.colorSpace);if(!i.get(M).__hasExternalTextures){const Pe=Math.max(1,M.width>>B),oe=Math.max(1,M.height>>B);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,B,ve,Pe,oe,M.depth,0,he,le,null):t.texImage2D(se,B,ve,Pe,oe,0,he,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,i.get(z).__webglTexture,0,ye(M)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,se,i.get(z).__webglTexture,B),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(b,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||xe(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===zn?re=n.DEPTH_COMPONENT32F:se.type===On&&(re=n.DEPTH_COMPONENT24));const B=ye(M);xe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,re,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,B,re,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const re=ye(M);z&&xe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<re.length;se++){const B=re[se],he=s.convert(B.format,B.colorSpace),le=s.convert(B.type),ve=T(B.internalFormat,he,le,B.colorSpace),Ae=ye(M);z&&xe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,se=ye(M);if(M.depthTexture.format===ri)xe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===Hi)xe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(b){const M=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=n.createRenderbuffer(),Se(M.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Se(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(b,M,z){const re=i.get(b);M!==void 0&&ge(re.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ee(b)}function H(b){const M=b.texture,z=i.get(b),re=i.get(M);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,o.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,B=b.isWebGLMultipleRenderTargets===!0,he=p(b)||a;if(se){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[le][ve]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(B)if(r.drawBuffers){const le=b.texture;for(let ve=0,Ae=le.length;ve<Ae;ve++){const Pe=i.get(le[ve]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const le=B?M:[M];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ae=le[ve];z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Pe=s.convert(Ae.format,Ae.colorSpace),oe=s.convert(Ae.type),Ge=T(Ae.internalFormat,Pe,oe,Ae.colorSpace,b.isXRRenderTarget===!0),C=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,C,Ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),k(n.TEXTURE_CUBE_MAP,M,he);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(z.__webglFramebuffer[le][ve],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else ge(z.__webglFramebuffer[le],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);E(M,he)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){const le=b.texture;for(let ve=0,Ae=le.length;ve<Ae;ve++){const Pe=le[ve],oe=i.get(Pe);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),k(n.TEXTURE_2D,Pe,he),ge(z.__webglFramebuffer,b,Pe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),E(Pe,he)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,re.__webglTexture),k(le,M,he),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(z.__webglFramebuffer[ve],b,M,n.COLOR_ATTACHMENT0,le,ve);else ge(z.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,le,0);E(M,he)&&v(le),t.unbindTexture()}b.depthBuffer&&Ee(b)}function ze(b){const M=p(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,se=z.length;re<se;re++){const B=z[re];if(E(B,M)){const he=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(B).__webglTexture;t.bindTexture(he,le),v(he),t.unbindTexture()}}}function _e(b){if(a&&b.samples>0&&xe(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,re=b.height;let se=n.COLOR_BUFFER_BIT;const B=[],he=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),ve=b.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){B.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&B.push(he);const Pe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Pe===!1&&(b.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ve){const oe=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,z,re,0,0,z,re,se,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const Pe=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Te(b,M){const z=b.colorSpace,re=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Xs||z!==_n&&z!==nn&&(nt.getTransfer(z)===ct?a===!1?e.has("EXT_sRGB")===!0&&re===hn?(b.format=Xs,b.minFilter=en,b.generateMipmaps=!1):M=Bl.sRGBToLinear(M):(re!==hn||se!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function $m(n,e,t){const i=t.isWebGL2;function r(s,o=nn){let a;const l=nt.getTransfer(o);if(s===Hn)return n.UNSIGNED_BYTE;if(s===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Rh)return n.BYTE;if(s===Ch)return n.SHORT;if(s===ia)return n.UNSIGNED_SHORT;if(s===Cl)return n.INT;if(s===On)return n.UNSIGNED_INT;if(s===zn)return n.FLOAT;if(s===rr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ph)return n.ALPHA;if(s===hn)return n.RGBA;if(s===Lh)return n.LUMINANCE;if(s===Dh)return n.LUMINANCE_ALPHA;if(s===ri)return n.DEPTH_COMPONENT;if(s===Hi)return n.DEPTH_STENCIL;if(s===Xs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uh)return n.RED;if(s===Dl)return n.RED_INTEGER;if(s===Nh)return n.RG;if(s===Ul)return n.RG_INTEGER;if(s===Nl)return n.RGBA_INTEGER;if(s===ts||s===ns||s===is||s===rs)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ts)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ts)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ba||s===Ta||s===Aa||s===wa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ba)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Il)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ra||s===Ca)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ra)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ca)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pa||s===La||s===Da||s===Ua||s===Na||s===Ia||s===Fa||s===Oa||s===za||s===Ba||s===Ga||s===Ha||s===ka||s===Va)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===La)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Da)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ua)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Na)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ia)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===za)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ba)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ga)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ha)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ka)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Va)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ss||s===Wa||s===Xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ss)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ih||s===ja||s===qa||s===Ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ss)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ja)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ii?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Zm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qm extends hi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const E=[],v=[],T=new Ke;let S=null;const x=new tn;x.layers.enable(1),x.viewport=new Tt;const w=new tn;w.layers.enable(2),w.viewport=new Tt;const N=[x,w],y=new Zm;y.layers.enable(1),y.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=E[k];return ee===void 0&&(ee=new Cs,E[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=E[k];return ee===void 0&&(ee=new Cs,E[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=E[k];return ee===void 0&&(ee=new Cs,E[k]=ee),ee.getHandSpace()};function O(k){const ee=v.indexOf(k.inputSource);if(ee===-1)return;const Q=E[ee];Q!==void 0&&(Q.update(k.inputSource,k.frame,c||o),Q.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",P);for(let k=0;k<E.length;k++){const ee=v[k];ee!==null&&(v[k]=null,E[k].disconnect(ee))}A=null,F=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new ai(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,Q=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Hi:ri,Q=_.stencil?ii:On);const ge={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new ai(f.textureWidth,f.textureHeight,{format:hn,type:Hn,depthTexture:new $l(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(h);Se.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(k){for(let ee=0;ee<k.removed.length;ee++){const Q=k.removed[ee],ae=v.indexOf(Q);ae>=0&&(v[ae]=null,E[ae].disconnect(Q))}for(let ee=0;ee<k.added.length;ee++){const Q=k.added[ee];let ae=v.indexOf(Q);if(ae===-1){for(let Se=0;Se<E.length;Se++)if(Se>=v.length){v.push(Q),ae=Se;break}else if(v[Se]===null){v[Se]=Q,ae=Se;break}if(ae===-1)break}const ge=E[ae];ge&&ge.connect(Q)}}const U=new I,G=new I;function Z(k,ee,Q){U.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const ae=U.distanceTo(G),ge=ee.projectionMatrix.elements,Se=Q.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),Ue=(ge[9]+1)/ge[5],H=(ge[9]-1)/ge[5],ze=(ge[8]-1)/ge[0],_e=(Se[8]+1)/Se[0],ye=Re*ze,xe=Re*_e,Le=ae/(-ze+_e),Te=Le*-ze;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Te),k.translateZ(Le),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const b=Re+Le,M=Ee+Le,z=ye-Te,re=xe+(ae-Te),se=Ue*Ee/M*b,B=H*Ee/M*b;k.projectionMatrix.makePerspective(z,re,se,B,b,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.near=w.near=x.near=k.near,y.far=w.far=x.far=k.far,(A!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,F=y.far);const ee=k.parent,Q=y.cameras;Y(y,ee);for(let ae=0;ae<Q.length;ae++)Y(Q[ae],ee);Q.length===2?Z(y,x,w):y.projectionMatrix.copy(x.projectionMatrix),j(k,y,ee)};function j(k,ee,Q){Q===null?k.matrix.copy(ee.matrixWorld):(k.matrix.copy(Q.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=js*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let K=null;function J(k,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ae=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let ge=0;ge<Q.length;ge++){const Se=Q[ge];let Re=null;if(m!==null)Re=m.getViewport(Se);else{const Ue=d.getViewSubImage(f,Se);Re=Ue.viewport,ge===0&&(e.setRenderTargetTextures(h,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(h))}let Ee=N[ge];Ee===void 0&&(Ee=new tn,Ee.layers.enable(ge),Ee.viewport=new Tt,N[ge]=Ee),Ee.matrix.fromArray(Se.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Se.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(y.matrix.copy(Ee.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Ee)}}for(let Q=0;Q<E.length;Q++){const ae=v[Q],ge=E[Q];ae!==null&&ge!==void 0&&ge.update(ae,ee,c||o)}K&&K(k,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const te=new Kl;te.setAnimationLoop(J),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function eg(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Xl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,v,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,E,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ft&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ft&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=v*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tg(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const T=v.program;i.uniformBlockBinding(E,T)}function c(E,v){let T=r[E.id];T===void 0&&(g(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(E,S);const x=e.render.frame;s[E.id]!==x&&(f(E),s[E.id]=x)}function u(E){const v=d();E.__bindingPointIndex=v;const T=n.createBuffer(),S=E.__size,x=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,S,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const v=r[E.id],T=E.uniforms,S=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let x=0,w=T.length;x<w;x++){const N=Array.isArray(T[x])?T[x]:[T[x]];for(let y=0,A=N.length;y<A;y++){const F=N[y];if(m(F,x,y,S)===!0){const O=F.__offset,W=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let U=0;U<W.length;U++){const G=W[U],Z=_(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+P,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,v,T,S){const x=E.value,w=v+"_"+T;if(S[w]===void 0)return typeof x=="number"||typeof x=="boolean"?S[w]=x:S[w]=x.clone(),!0;{const N=S[w];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return S[w]=x,!0}else if(N.equals(x)===!1)return N.copy(x),!0}return!1}function g(E){const v=E.uniforms;let T=0;const S=16;for(let w=0,N=v.length;w<N;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let A=0,F=y.length;A<F;A++){const O=y[A],W=Array.isArray(O.value)?O.value:[O.value];for(let P=0,U=W.length;P<U;P++){const G=W[P],Z=_(G),Y=T%S;Y!==0&&S-Y<Z.boundary&&(T+=S-Y),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=Z.storage}}}const x=T%S;return x>0&&(T+=S-x),E.__size=T,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class nc{constructor(e={}){const{canvas:t=Kh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let T=!1,S=0,x=0,w=null,N=-1,y=null;const A=new Tt,F=new Tt;let O=null;const W=new tt(0);let P=0,U=t.width,G=t.height,Z=1,Y=null,j=null;const K=new Tt(0,0,U,G),J=new Tt(0,0,U,G);let te=!1;const k=new Yl;let ee=!1,Q=!1,ae=null;const ge=new gt,Se=new Ke,Re=new I,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?Z:1}let H=i;function ze(R,V){for(let q=0;q<R.length;q++){const $=R[q],X=t.getContext($,V);if(X!==null)return X}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),H=ze(V,R),H===null)throw ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _e,ye,xe,Le,Te,b,M,z,re,se,B,he,le,ve,Ae,Pe,oe,Ge,C,ie,fe,ce,Me,Ne;function We(){_e=new up(H),ye=new rp(H,_e,e),_e.init(ye),ce=new $m(H,_e,ye),xe=new Ym(H,_e,ye),Le=new pp(H),Te=new Nm,b=new Km(H,_e,xe,Te,ye,ce,Le),M=new ap(v),z=new hp(v),re=new Mu(H,ye),Me=new np(H,_e,re,ye),se=new dp(H,re,Le,Me),B=new vp(H,se,re,Le),C=new _p(H,ye,b),Pe=new sp(Te),he=new Um(v,M,z,_e,ye,Me,Pe),le=new eg(v,Te),ve=new Fm,Ae=new km(_e,ye),Ge=new tp(v,M,z,xe,B,f,l),oe=new qm(v,B,ye),Ne=new tg(H,Le,ye,xe),ie=new ip(H,_e,Le,ye),fe=new fp(H,_e,Le,ye),Le.programs=he.programs,v.capabilities=ye,v.extensions=_e,v.properties=Te,v.renderLists=ve,v.shadowMap=oe,v.state=xe,v.info=Le}We();const Oe=new Qm(v,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(U,G,!1))},this.getSize=function(R){return R.set(U,G)},this.setSize=function(R,V,q=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,G=V,t.width=Math.floor(R*Z),t.height=Math.floor(V*Z),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(U*Z,G*Z).floor()},this.setDrawingBufferSize=function(R,V,q){U=R,G=V,Z=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,V,q,$){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,V,q,$),xe.viewport(A.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,V,q,$){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,V,q,$),xe.scissor(F.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(R){xe.setScissorTest(te=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(R=!0,V=!0,q=!0){let $=0;if(R){let X=!1;if(w!==null){const we=w.texture.format;X=we===Nl||we===Ul||we===Dl}if(X){const we=w.texture.type,Ie=we===Hn||we===On||we===ia||we===ii||we===Pl||we===Ll,Be=Ge.getClearColor(),ke=Ge.getClearAlpha(),qe=Be.r,Ve=Be.g,je=Be.b;Ie?(m[0]=qe,m[1]=Ve,m[2]=je,m[3]=ke,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=qe,g[1]=Ve,g[2]=je,g[3]=ke,H.clearBufferiv(H.COLOR,0,g))}else $|=H.COLOR_BUFFER_BIT}V&&($|=H.DEPTH_BUFFER_BIT),q&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Ae.dispose(),Te.dispose(),M.dispose(),z.dispose(),B.dispose(),Me.dispose(),Ne.dispose(),he.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",st),Oe.removeEventListener("sessionend",de),ae&&(ae.dispose(),ae=null),Je.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Le.autoReset,V=oe.enabled,q=oe.autoUpdate,$=oe.needsUpdate,X=oe.type;We(),Le.autoReset=R,oe.enabled=V,oe.autoUpdate=q,oe.needsUpdate=$,oe.type=X}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const V=R.target;V.removeEventListener("dispose",me),De(V)}function De(R){Ce(R),Te.remove(R)}function Ce(R){const V=Te.get(R).programs;V!==void 0&&(V.forEach(function(q){he.releaseProgram(q)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,$,X,we){V===null&&(V=Ee);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Be=Vt(R,V,q,$,X);xe.setMaterial($,Ie);let ke=q.index,qe=1;if($.wireframe===!0){if(ke=se.getWireframeAttribute(q),ke===void 0)return;qe=2}const Ve=q.drawRange,je=q.attributes.position;let lt=Ve.start*qe,yt=(Ve.start+Ve.count)*qe;we!==null&&(lt=Math.max(lt,we.start*qe),yt=Math.min(yt,(we.start+we.count)*qe)),ke!==null?(lt=Math.max(lt,0),yt=Math.min(yt,ke.count)):je!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,je.count));const at=yt-lt;if(at<0||at===1/0)return;Me.setup(X,$,Be,q,ke);let Et,rt=ie;if(ke!==null&&(Et=re.get(ke),rt=fe,rt.setIndex(Et)),X.isMesh)$.wireframe===!0?(xe.setLineWidth($.wireframeLinewidth*Ue()),rt.setMode(H.LINES)):rt.setMode(H.TRIANGLES);else if(X.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),xe.setLineWidth(Ye*Ue()),X.isLineSegments?rt.setMode(H.LINES):X.isLineLoop?rt.setMode(H.LINE_LOOP):rt.setMode(H.LINE_STRIP)}else X.isPoints?rt.setMode(H.POINTS):X.isSprite&&rt.setMode(H.TRIANGLES);if(X.isBatchedMesh)rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)rt.renderInstances(lt,at,X.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Wn=Math.min(q.instanceCount,Ye);rt.renderInstances(lt,at,Wn)}else rt.render(lt,at)};function Xe(R,V,q){R.transparent===!0&&R.side===Yt&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,fn(R,V,q),R.side=Vn,R.needsUpdate=!0,fn(R,V,q),R.side=Yt):fn(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),p=Ae.get(q),p.init(),E.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==q&&R.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const $=new Set;return R.traverse(function(X){const we=X.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Be=we[Ie];Xe(Be,q,X),$.add(Be)}else Xe(we,q,X),$.add(we)}),E.pop(),p=null,$},this.compileAsync=function(R,V,q=null){const $=this.compile(R,V,q);return new Promise(X=>{function we(){if($.forEach(function(Ie){Te.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){X(R);return}setTimeout(we,10)}_e.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let He=null;function Qe(R){He&&He(R)}function st(){Je.stop()}function de(){Je.start()}const Je=new Kl;Je.setAnimationLoop(Qe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){He=R,Oe.setAnimationLoop(R),R===null?Je.stop():Je.start()},Oe.addEventListener("sessionstart",st),Oe.addEventListener("sessionend",de),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(V),V=Oe.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,w),p=Ae.get(R,E.length),p.init(),E.push(p),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),k.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,ee=Pe.init(this.clippingPlanes,Q),_=ve.get(R,h.length),_.init(),h.push(_),it(R,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,ee===!0&&Pe.beginShadows();const q=p.state.shadowsArray;if(oe.render(q,R,V),ee===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(_,R),p.setupLights(v._useLegacyLights),V.isArrayCamera){const $=V.cameras;for(let X=0,we=$.length;X<we;X++){const Ie=$[X];Kt(_,R,Ie,Ie.viewport)}}else Kt(_,R,V);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,V),Me.resetDefaultState(),N=-1,y=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function it(R,V,q,$){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||k.intersectsSprite(R)){$&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Ie=B.update(R),Be=R.material;Be.visible&&_.push(R,Ie,Be,q,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||k.intersectsObject(R))){const Ie=B.update(R),Be=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Re.copy(Ie.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Be)){const ke=Ie.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const je=ke[qe],lt=Be[je.materialIndex];lt&&lt.visible&&_.push(R,Ie,lt,q,Re.z,je)}}else Be.visible&&_.push(R,Ie,Be,q,Re.z,null)}}const we=R.children;for(let Ie=0,Be=we.length;Ie<Be;Ie++)it(we[Ie],V,q,$)}function Kt(R,V,q,$){const X=R.opaque,we=R.transmissive,Ie=R.transparent;p.setupLightsView(q),ee===!0&&Pe.setGlobalState(v.clippingPlanes,q),we.length>0&&et(X,we,V,q),$&&xe.viewport(A.copy($)),X.length>0&&dn(X,V,q),we.length>0&&dn(we,V,q),Ie.length>0&&dn(Ie,V,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function et(R,V,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const we=ye.isWebGL2;ae===null&&(ae=new ai(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?rr:Hn,minFilter:ir,samples:we?4:0})),v.getDrawingBufferSize(Se),we?ae.setSize(Se.x,Se.y):ae.setSize(qs(Se.x),qs(Se.y));const Ie=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(W),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Gn,dn(R,q,$),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae);let ke=!1;for(let qe=0,Ve=V.length;qe<Ve;qe++){const je=V[qe],lt=je.object,yt=je.geometry,at=je.material,Et=je.group;if(at.side===Yt&&lt.layers.test($.layers)){const rt=at.side;at.side=Ft,at.needsUpdate=!0,vn(lt,q,$,yt,at,Et),at.side=rt,at.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae)),v.setRenderTarget(Ie),v.setClearColor(W,P),v.toneMapping=Be}function dn(R,V,q){const $=V.isScene===!0?V.overrideMaterial:null;for(let X=0,we=R.length;X<we;X++){const Ie=R[X],Be=Ie.object,ke=Ie.geometry,qe=$===null?Ie.material:$,Ve=Ie.group;Be.layers.test(q.layers)&&vn(Be,V,q,ke,qe,Ve)}}function vn(R,V,q,$,X,we){R.onBeforeRender(v,V,q,$,X,we),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,V,q,$,R,we),X.transparent===!0&&X.side===Yt&&X.forceSinglePass===!1?(X.side=Ft,X.needsUpdate=!0,v.renderBufferDirect(q,V,$,X,R,we),X.side=Vn,X.needsUpdate=!0,v.renderBufferDirect(q,V,$,X,R,we),X.side=Yt):v.renderBufferDirect(q,V,$,X,R,we),R.onAfterRender(v,V,q,$,X,we)}function fn(R,V,q){V.isScene!==!0&&(V=Ee);const $=Te.get(R),X=p.state.lights,we=p.state.shadowsArray,Ie=X.state.version,Be=he.getParameters(R,X.state,we,V,q),ke=he.getProgramCacheKey(Be);let qe=$.programs;$.environment=R.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(R.isMeshStandardMaterial?z:M).get(R.envMap||$.environment),qe===void 0&&(R.addEventListener("dispose",me),qe=new Map,$.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ie)return $t(R,Be),Ve}else Be.uniforms=he.getUniforms(R),R.onBuild(q,Be,v),R.onBeforeCompile(Be,v),Ve=he.acquireProgram(Be,ke),qe.set(ke,Ve),$.uniforms=Be.uniforms;const je=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Pe.uniform),$t(R,Be),$.needsLights=zt(R),$.lightsStateVersion=Ie,$.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Cn(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Gr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function $t(R,V){const q=Te.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Vt(R,V,q,$,X){V.isScene!==!0&&(V=Ee),b.resetTextureUnits();const we=V.fog,Ie=$.isMeshStandardMaterial?V.environment:null,Be=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_n,ke=($.isMeshStandardMaterial?z:M).get($.envMap||Ie),qe=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),je=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color;let at=Gn;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=v.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=Et!==void 0?Et.length:0,Ye=Te.get($),Wn=p.state.lights;if(ee===!0&&(Q===!0||R!==y)){const wt=R===y&&$.id===N;Pe.setState($,R,wt)}let ot=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Wn.state.version||Ye.outputColorSpace!==Be||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||Ye.envMap!==ke||$.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Pe.numPlanes||Ye.numIntersection!==Pe.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==je||Ye.morphNormals!==lt||Ye.morphColors!==yt||Ye.toneMapping!==at||ye.isWebGL2===!0&&Ye.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ye.__version=$.version);let Bt=Ye.currentProgram;ot===!0&&(Bt=fn($,V,X));let ui=!1,xn=!1,Mn=!1;const pt=Bt.getUniforms(),Wt=Ye.uniforms;if(xe.useProgram(Bt.program)&&(ui=!0,xn=!0,Mn=!0),$.id!==N&&(N=$.id,xn=!0),ui||y!==R){pt.setValue(H,"projectionMatrix",R.projectionMatrix),pt.setValue(H,"viewMatrix",R.matrixWorldInverse);const wt=pt.map.cameraPosition;wt!==void 0&&wt.setValue(H,Re.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,xn=!0,Mn=!0)}if(X.isSkinnedMesh){pt.setOptional(H,X,"bindMatrix"),pt.setOptional(H,X,"bindMatrixInverse");const wt=X.skeleton;wt&&(ye.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),pt.setValue(H,"boneTexture",wt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(pt.setOptional(H,X,"batchingTexture"),pt.setValue(H,"batchingTexture",X._matricesTexture,b));const Xn=q.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0&&ye.isWebGL2===!0)&&C.update(X,q,Bt),(xn||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,pt.setValue(H,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Wt.envMap.value=ke,Wt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),xn&&(pt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&ft(Wt,Mn),we&&$.fog===!0&&le.refreshFogUniforms(Wt,we),le.refreshMaterialUniforms(Wt,$,Z,G,ae),Gr.upload(H,Cn(Ye),Wt,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Gr.upload(H,Cn(Ye),Wt,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(H,"center",X.center),pt.setValue(H,"modelViewMatrix",X.modelViewMatrix),pt.setValue(H,"normalMatrix",X.normalMatrix),pt.setValue(H,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wt=$.uniformsGroups;for(let Xi=0,Zr=wt.length;Xi<Zr;Xi++)if(ye.isWebGL2){const ur=wt[Xi];Ne.update(ur,Bt),Ne.bind(ur,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function ft(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function zt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,V,q){Te.get(R.texture).__webglTexture=V,Te.get(R.depthTexture).__webglTexture=q;const $=Te.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const q=Te.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){w=R,S=V,x=q;let $=!0,X=null,we=!1,Ie=!1;if(R){const ke=Te.get(R);ke.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(H.FRAMEBUFFER,null),$=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(R):ke.__hasExternalTextures&&b.rebindTextures(R,Te.get(R.texture).__webglTexture,Te.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const Ve=Te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?X=Ve[V][q]:X=Ve[V],we=!0):ye.isWebGL2&&R.samples>0&&b.useMultisampledRTT(R)===!1?X=Te.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[q]:X=Ve,A.copy(R.viewport),F.copy(R.scissor),O=R.scissorTest}else A.copy(K).multiplyScalar(Z).floor(),F.copy(J).multiplyScalar(Z).floor(),O=te;if(xe.bindFramebuffer(H.FRAMEBUFFER,X)&&ye.drawBuffers&&$&&xe.drawBuffers(R,X),xe.viewport(A),xe.scissor(F),xe.setScissorTest(O),we){const ke=Te.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,q)}else if(Ie){const ke=Te.get(R.texture),qe=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,qe)}N=-1},this.readRenderTargetPixels=function(R,V,q,$,X,we,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const ke=R.texture,qe=ke.format,Ve=ke.type;if(qe!==hn&&ce.convert(qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ve===rr&&(_e.has("EXT_color_buffer_half_float")||ye.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ve!==Hn&&ce.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===zn&&(ye.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-$&&q>=0&&q<=R.height-X&&H.readPixels(V,q,$,X,ce.convert(qe),ce.convert(Ve),we)}finally{const ke=w!==null?Te.get(w).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,V,q=0){const $=Math.pow(2,-q),X=Math.floor(V.image.width*$),we=Math.floor(V.image.height*$);b.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,R.x,R.y,X,we),xe.unbindTexture()},this.copyTextureToTexture=function(R,V,q,$=0){const X=V.image.width,we=V.image.height,Ie=ce.convert(q.format),Be=ce.convert(q.type);b.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,R.x,R.y,X,we,Ie,Be,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ie,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,$,R.x,R.y,Ie,Be,V.image),$===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q,$,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=R.max.x-R.min.x+1,Ie=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,ke=ce.convert($.format),qe=ce.convert($.type);let Ve;if($.isData3DTexture)b.setTexture3D($,0),Ve=H.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)b.setTexture2DArray($,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const je=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yt=H.getParameter(H.UNPACK_SKIP_PIXELS),at=H.getParameter(H.UNPACK_SKIP_ROWS),Et=H.getParameter(H.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[X]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,rt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Ve,X,V.x,V.y,V.z,we,Ie,Be,ke,qe,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,X,V.x,V.y,V.z,we,Ie,Be,ke,rt.data)):H.texSubImage3D(Ve,X,V.x,V.y,V.z,we,Ie,Be,ke,qe,rt),H.pixelStorei(H.UNPACK_ROW_LENGTH,je),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yt),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Et),X===0&&$.generateMipmaps&&H.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){S=0,x=0,w=null,xe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ra?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?si:Fl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?bt:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ng extends nc{}ng.prototype.isWebGL1Renderer=!0;class ig extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class rg extends At{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class tr extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new I,Bo=new I,Go=new gt,Ps=new hr,Nr=new cr;class la extends Ot{constructor(e=new _t,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zo.fromBufferAttribute(t,r-1),Bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zo.distanceTo(Bo);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=s,e.ray.intersectsSphere(Nr)===!1)return;Go.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(Go);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,d=new I,f=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=h,T=E-1;v<T;v+=m){const S=g.getX(v),x=g.getX(v+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,x),Ps.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let v=h,T=E-1;v<T;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Ps.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ho=new I,ko=new I;class Vo extends la{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ho.fromBufferAttribute(t,r),ko.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ho.distanceTo(ko);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sg extends la{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ic extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wo=new gt,Ks=new hr,Ir=new cr,Fr=new I;class ag extends Ot{constructor(e=new _t,t=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Wo.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Wo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Fr.fromBufferAttribute(d,p),Xo(Fr,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Fr.fromBufferAttribute(d,g),Xo(Fr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xo(n,e,t,i,r,s,o){const a=Ks.distanceSqToPoint(n);if(a<t){const l=new I;Ks.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ca extends _t{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,m=new I,g=new Ke;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const h=s+p/i*o;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<r;_++){const p=_*(i+1);for(let h=0;h<i;h++){const E=h+p,v=E,T=E+i+1,S=E+i+2,x=E+1;a.push(v,T,x),a.push(T,S,x)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jr extends _t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let h=0;h<=i;h++){const E=[],v=h/i;let T=0;h===0&&o===0?T=.5/t:h===i&&l===Math.PI&&(T=-.5/t);for(let S=0;S<=t;S++){const x=S/t;d.x=-e*Math.cos(r+x*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+x*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(x+T,1-v),E.push(c++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const v=u[h][E+1],T=u[h][E],S=u[h+1][E],x=u[h+1][E+1];(h!==0||o>0)&&m.push(v,T,x),(h!==i-1||l<Math.PI)&&m.push(T,S,x)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class og extends tr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const jo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lg{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const cg=new lg;class ha{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";class hg extends ha{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=jo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=sr("img");function l(){u(),jo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rc extends ha{constructor(e){super(e)}load(e,t,i,r){const s=new kt,o=new hg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ug extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dg{constructor(e,t,i=0,r=1/0){this.ray=new hr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return $s(e,this,i,t),i.sort(qo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)$s(e[r],this,i,t);return i.sort(qo),i}}function qo(n,e){return n.distance-e.distance}function $s(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)$s(r[s],e,t,!0)}}class Yo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);const Ko={type:"change"},Ls={type:"start"},$o={type:"end"},Or=new hr,Zo=new Fn,fg=Math.cos(70*Yh.DEG2RAD);class pg extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",B),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",B),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ko),i.update(),s=r.NONE},this.update=(function(){const C=new I,ie=new oi().setFromUnitVectors(e.up,new I(0,1,0)),fe=ie.clone().invert(),ce=new I,Me=new oi,Ne=new I,We=2*Math.PI;return function(ue=null){const L=i.object.position;C.copy(L).sub(i.target),C.applyQuaternion(ie),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&F(y(ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=i.minAzimuthAngle,me=i.maxAzimuthAngle;isFinite(pe)&&isFinite(me)&&(pe<-Math.PI?pe+=We:pe>Math.PI&&(pe-=We),me<-Math.PI?me+=We:me>Math.PI&&(me-=We),pe<=me?a.theta=Math.max(pe,Math.min(me,a.theta)):a.theta=a.theta>(pe+me)/2?Math.max(pe,a.theta):Math.min(me,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(fe),L.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let De=!1;if(i.zoomToCursor&&x){let Ce=null;if(i.object.isPerspectiveCamera){const Xe=C.length();Ce=j(Xe*c);const He=Xe-Ce;i.object.position.addScaledVector(T,He),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xe=new I(S.x,S.y,0);Xe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),De=!0;const He=new I(S.x,S.y,0);He.unproject(i.object),i.object.position.sub(He).add(Xe),i.object.updateMatrixWorld(),Ce=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ce).add(i.object.position):(Or.origin.copy(i.object.position),Or.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Or.direction))<fg?e.lookAt(i.target):(Zo.setFromNormalAndCoplanarPoint(i.object.up,i.target),Or.intersectPlane(Zo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),De=!0);return c=1,x=!1,De||ce.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o||Ne.distanceToSquared(i.target)>0?(i.dispatchEvent(Ko),ce.copy(i.object.position),Me.copy(i.object.quaternion),Ne.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Te),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",B),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yo,l=new Yo;let c=1;const u=new I,d=new Ke,f=new Ke,m=new Ke,g=new Ke,_=new Ke,p=new Ke,h=new Ke,E=new Ke,v=new Ke,T=new I,S=new Ke;let x=!1;const w=[],N={};function y(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function A(C){const ie=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ie)}function F(C){l.theta-=C}function O(C){l.phi-=C}const W=(function(){const C=new I;return function(fe,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-fe),u.add(C)}})(),P=(function(){const C=new I;return function(fe,ce){i.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(fe),u.add(C)}})(),U=(function(){const C=new I;return function(fe,ce){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;C.copy(Ne).sub(i.target);let We=C.length();We*=Math.tan(i.object.fov/2*Math.PI/180),W(2*fe*We/Me.clientHeight,i.object.matrix),P(2*ce*We/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(fe*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),P(ce*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function G(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C,ie){if(!i.zoomToCursor)return;x=!0;const fe=i.domElement.getBoundingClientRect(),ce=C-fe.left,Me=ie-fe.top,Ne=fe.width,We=fe.height;S.x=ce/Ne*2-1,S.y=-(Me/We)*2+1,T.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function K(C){d.set(C.clientX,C.clientY)}function J(C){Y(C.clientX,C.clientX),h.set(C.clientX,C.clientY)}function te(C){g.set(C.clientX,C.clientY)}function k(C){f.set(C.clientX,C.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;F(2*Math.PI*m.x/ie.clientHeight),O(2*Math.PI*m.y/ie.clientHeight),d.copy(f),i.update()}function ee(C){E.set(C.clientX,C.clientY),v.subVectors(E,h),v.y>0?G(A(v.y)):v.y<0&&Z(A(v.y)),h.copy(E),i.update()}function Q(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(_),i.update()}function ae(C){Y(C.clientX,C.clientY),C.deltaY<0?Z(A(C.deltaY)):C.deltaY>0&&G(A(C.deltaY)),i.update()}function ge(C){let ie=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),i.update())}function Se(C){if(w.length===1)d.set(C.pageX,C.pageY);else{const ie=Ge(C),fe=.5*(C.pageX+ie.x),ce=.5*(C.pageY+ie.y);d.set(fe,ce)}}function Re(C){if(w.length===1)g.set(C.pageX,C.pageY);else{const ie=Ge(C),fe=.5*(C.pageX+ie.x),ce=.5*(C.pageY+ie.y);g.set(fe,ce)}}function Ee(C){const ie=Ge(C),fe=C.pageX-ie.x,ce=C.pageY-ie.y,Me=Math.sqrt(fe*fe+ce*ce);h.set(0,Me)}function Ue(C){i.enableZoom&&Ee(C),i.enablePan&&Re(C)}function H(C){i.enableZoom&&Ee(C),i.enableRotate&&Se(C)}function ze(C){if(w.length==1)f.set(C.pageX,C.pageY);else{const fe=Ge(C),ce=.5*(C.pageX+fe.x),Me=.5*(C.pageY+fe.y);f.set(ce,Me)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;F(2*Math.PI*m.x/ie.clientHeight),O(2*Math.PI*m.y/ie.clientHeight),d.copy(f)}function _e(C){if(w.length===1)_.set(C.pageX,C.pageY);else{const ie=Ge(C),fe=.5*(C.pageX+ie.x),ce=.5*(C.pageY+ie.y);_.set(fe,ce)}p.subVectors(_,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(_)}function ye(C){const ie=Ge(C),fe=C.pageX-ie.x,ce=C.pageY-ie.y,Me=Math.sqrt(fe*fe+ce*ce);E.set(0,Me),v.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),G(v.y),h.copy(E);const Ne=(C.pageX+ie.x)*.5,We=(C.pageY+ie.y)*.5;Y(Ne,We)}function xe(C){i.enableZoom&&ye(C),i.enablePan&&_e(C)}function Le(C){i.enableZoom&&ye(C),i.enableRotate&&ze(C)}function Te(C){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",M)),Ae(C),C.pointerType==="touch"?he(C):z(C))}function b(C){i.enabled!==!1&&(C.pointerType==="touch"?le(C):re(C))}function M(C){Pe(C),w.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent($o),s=r.NONE}function z(C){let ie;switch(C.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case pi.DOLLY:if(i.enableZoom===!1)return;J(C),s=r.DOLLY;break;case pi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;te(C),s=r.PAN}else{if(i.enableRotate===!1)return;K(C),s=r.ROTATE}break;case pi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(i.enablePan===!1)return;te(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ls)}function re(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;k(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(C);break;case r.PAN:if(i.enablePan===!1)return;Q(C);break}}function se(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ls),ae(C),i.dispatchEvent($o))}function B(C){i.enabled===!1||i.enablePan===!1||ge(C)}function he(C){switch(oe(C),w.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;Se(C),s=r.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;Re(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(C),s=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ls)}function le(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ze(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(C),i.update();break;default:s=r.NONE}}function ve(C){i.enabled!==!1&&C.preventDefault()}function Ae(C){w.push(C.pointerId)}function Pe(C){delete N[C.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie]==C.pointerId){w.splice(ie,1);return}}function oe(C){let ie=N[C.pointerId];ie===void 0&&(ie=new Ke,N[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function Ge(C){const ie=C.pointerId===w[0]?w[1]:w[0];return N[ie]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Te),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}var un=Math.PI,ut=un*2,Ji=un/180,mg=1440,gg=398600.8,qt=6378.135,Rn=60/Math.sqrt(qt*qt*qt/gg),Ds=qt*Rn/60,_g=1/Rn,ti=.001082616,vg=-253881e-11,xg=-165597e-11,ni=vg/ti,ar=2/3;function Mg(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var u=Math.floor(l),d=(l-u)*60;return{mon:o,day:a,hr:c,minute:u,sec:d}}function Jo(n,e,t,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function ua(n,e,t,i,r,s,o){if(n instanceof Date){var a=n;return Jo(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Jo(n,e,t,i,r,s,o)}function sc(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,o=n.pho,a=n.pinco,l=n.plo,c=n.se2,u=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,g=n.sh2,_=n.sh3,p=n.si2,h=n.si3,E=n.sl2,v=n.sl3,T=n.sl4,S=n.t,x=n.xgh2,w=n.xgh3,N=n.xgh4,y=n.xh2,A=n.xh3,F=n.xi2,O=n.xi3,W=n.xl2,P=n.xl3,U=n.xl4,G=n.zmol,Z=n.zmos,Y=e.init,j=e.opsmode,K=e.ep,J=e.inclp,te=e.nodep,k=e.argpp,ee=e.mp,Q,ae,ge,Se,Re,Ee,Ue,H,ze,_e,ye,xe,Le,Te,b,M,z,re,se,B,he,le=119459e-10,ve=.01675,Ae=.00015835218,Pe=.0549;he=Z+le*S,Y==="y"&&(he=Z),B=he+2*ve*Math.sin(he),z=Math.sin(B),_e=.5*z*z-.25,ye=-.5*z*Math.cos(B);var oe=c*_e+u*ye,Ge=p*_e+h*ye,C=E*_e+v*ye+T*z,ie=d*_e+f*ye+m*z,fe=g*_e+_*ye;he=G+Ae*S,Y==="y"&&(he=G),B=he+2*Pe*Math.sin(he),z=Math.sin(B),_e=.5*z*z-.25,ye=-.5*z*Math.cos(B);var ce=i*_e+t*ye,Me=F*_e+O*ye,Ne=W*_e+P*ye+U*z,We=x*_e+w*ye+N*z,Oe=y*_e+A*ye;return xe=oe+ce,b=Ge+Me,M=C+Ne,Le=ie+We,Te=fe+Oe,Y==="n"&&(xe-=r,b-=a,M-=l,Le-=s,Te-=o,J+=b,K+=xe,Se=Math.sin(J),ge=Math.cos(J),J>=.2?(Te/=Se,Le-=ge*Te,k+=Le,te+=Te,ee+=M):(Ee=Math.sin(te),Re=Math.cos(te),Q=Se*Ee,ae=Se*Re,Ue=Te*Re+b*ge*Ee,H=-Te*Ee+b*ge*Re,Q+=Ue,ae+=H,te%=ut,te<0&&j==="a"&&(te+=ut),re=ee+k+ge*te,ze=M+Le-b*te*Se,re+=ze,se=te,te=Math.atan2(Q,ae),te<0&&j==="a"&&(te+=ut),Math.abs(se-te)>un&&(te<se?te+=ut:te-=ut),ee+=M,k=re-ee-ge*te)),{ep:K,inclp:J,nodep:te,argpp:k,mp:ee}}function Sg(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,o=n.nodep,a=n.np,l,c,u,d,f,m,g,_,p,h,E,v,T,S,x,w,N,y,A,F,O,W,P,U,G,Z,Y,j,K,J,te,k,ee,Q,ae,ge,Se,Re,Ee,Ue,H,ze,_e,ye,xe,Le,Te,b,M,z,re,se,B,he,le,ve,Ae,Pe,oe,Ge,C,ie,fe,ce=.01675,Me=.0549,Ne=29864797e-13,We=47968065e-14,Oe=.39785416,ue=.91744867,L=.1945905,pe=-.98088458,me=a,De=t,Ce=Math.sin(o),Xe=Math.cos(o),He=Math.sin(i),Qe=Math.cos(i),st=Math.sin(s),de=Math.cos(s),Je=De*De,it=1-Je,Kt=Math.sqrt(it),et=0,dn=0,vn=0,fn=0,Cn=0,$t=e+18261.5+r/1440,Vt=(4.523602-.00092422029*$t)%ut,ft=Math.sin(Vt),zt=Math.cos(Vt),R=.91375164-.03568096*zt,V=Math.sqrt(1-R*R),q=.089683511*ft/V,$=Math.sqrt(1-q*q),X=5.8351514+.001944368*$t,we=.39785416*ft/V,Ie=$*zt+.91744867*q*ft;we=Math.atan2(we,Ie),we+=X-Vt;var Be=Math.cos(we),ke=Math.sin(we);F=L,O=pe,U=ue,G=Oe,W=Xe,P=Ce,E=Ne;for(var qe=1/me,Ve=0;Ve<2;)Ve+=1,l=F*W+O*U*P,u=-O*W+F*U*P,g=-F*P+O*U*W,_=O*G,p=O*P+F*U*W,h=F*G,c=de*g+st*_,d=de*p+st*h,f=-st*g+de*_,m=-st*p+de*h,v=l*Qe+c*He,T=u*Qe+d*He,S=-l*He+c*Qe,x=-u*He+d*Qe,w=f*He,N=m*He,y=f*Qe,A=m*Qe,C=12*v*v-3*S*S,ie=24*v*T-6*S*x,fe=12*T*T-3*x*x,se=3*(l*l+c*c)+C*Je,B=6*(l*u+c*d)+ie*Je,he=3*(u*u+d*d)+fe*Je,le=-6*l*f+Je*(-24*v*y-6*S*w),ve=-6*(l*m+u*f)+Je*(-24*(T*y+v*A)+-6*(S*N+x*w)),Ae=-6*u*m+Je*(-24*T*A-6*x*N),Pe=6*c*f+Je*(24*v*w-6*S*y),oe=6*(d*f+c*m)+Je*(24*(T*w+v*N)-6*(x*y+S*A)),Ge=6*d*m+Je*(24*T*N-6*x*A),se=se+se+it*C,B=B+B+it*ie,he=he+he+it*fe,Te=E*qe,Le=-.5*Te/Kt,b=Te*Kt,xe=-15*De*b,M=v*S+T*x,z=T*S+v*x,re=T*x-v*S,Ve===1&&(Z=xe,Y=Le,j=Te,K=b,J=M,te=z,k=re,ee=se,Q=B,ae=he,ge=le,Se=ve,Re=Ae,Ee=Pe,Ue=oe,H=Ge,ze=C,_e=ie,ye=fe,F=Be,O=ke,U=R,G=V,W=$*Xe+q*Ce,P=Ce*$-Xe*q,E=We);var je=(4.7199672+(.2299715*$t-X))%ut,lt=(6.2565837+.017201977*$t)%ut,yt=2*Z*te,at=2*Z*k,Et=2*Y*Se,rt=2*Y*(Re-ge),Ye=-2*j*Q,Wn=-2*j*(ae-ee),ot=-2*j*(-21-9*Je)*ce,Bt=2*K*_e,ui=2*K*(ye-ze),xn=-18*K*ce,Mn=-2*Y*Ue,pt=-2*Y*(H-Ee),Wt=2*xe*z,Xn=2*xe*re,wt=2*Le*ve,Xi=2*Le*(Ae-le),Zr=-2*Te*B,ur=-2*Te*(he-se),cc=-2*Te*(-21-9*Je)*Me,hc=2*b*ie,uc=2*b*(fe-C),dc=-18*b*Me,fc=-2*Le*oe,pc=-2*Le*(Ge-Pe);return{snodm:Ce,cnodm:Xe,sinim:st,cosim:de,sinomm:He,cosomm:Qe,day:$t,e3:Xn,ee2:Wt,em:De,emsq:Je,gam:X,peo:et,pgho:fn,pho:Cn,pinco:dn,plo:vn,rtemsq:Kt,se2:yt,se3:at,sgh2:Bt,sgh3:ui,sgh4:xn,sh2:Mn,sh3:pt,si2:Et,si3:rt,sl2:Ye,sl3:Wn,sl4:ot,s1:xe,s2:Le,s3:Te,s4:b,s5:M,s6:z,s7:re,ss1:Z,ss2:Y,ss3:j,ss4:K,ss5:J,ss6:te,ss7:k,sz1:ee,sz2:Q,sz3:ae,sz11:ge,sz12:Se,sz13:Re,sz21:Ee,sz22:Ue,sz23:H,sz31:ze,sz32:_e,sz33:ye,xgh2:hc,xgh3:uc,xgh4:dc,xh2:fc,xh3:pc,xi2:wt,xi3:Xi,xl2:Zr,xl3:ur,xl4:cc,nm:me,z1:se,z2:B,z3:he,z11:le,z12:ve,z13:Ae,z21:Pe,z22:oe,z23:Ge,z31:C,z32:ie,z33:fe,zmol:je,zmos:lt}}function yg(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,o=n.s4,a=n.s5,l=n.sinim,c=n.ss1,u=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,g=n.sz1,_=n.sz3,p=n.sz11,h=n.sz13,E=n.sz21,v=n.sz23,T=n.sz31,S=n.sz33,x=n.t,w=n.tc,N=n.gsto,y=n.mo,A=n.mdot,F=n.no,O=n.nodeo,W=n.nodedot,P=n.xpidot,U=n.z1,G=n.z3,Z=n.z11,Y=n.z13,j=n.z21,K=n.z23,J=n.z31,te=n.z33,k=n.ecco,ee=n.eccsq,Q=n.emsq,ae=n.em,ge=n.argpm,Se=n.inclm,Re=n.mm,Ee=n.nm,Ue=n.nodem,H=n.irez,ze=n.atime,_e=n.d2201,ye=n.d2211,xe=n.d3210,Le=n.d3222,Te=n.d4410,b=n.d4422,M=n.d5220,z=n.d5232,re=n.d5421,se=n.d5433,B=n.dedt,he=n.didt,le=n.dmdt,ve=n.dnodt,Ae=n.domdt,Pe=n.del1,oe=n.del2,Ge=n.del3,C=n.xfact,ie=n.xlamo,fe=n.xli,ce=n.xni,Me,Ne,We,Oe,ue,L,pe,me,De,Ce,Xe,He,Qe,st,de,Je,it,Kt,et,dn,vn,fn,Cn,$t,Vt,ft,zt,R,V,q,$,X,we=17891679e-13,Ie=21460748e-13,Be=22123015e-14,ke=17891679e-13,qe=73636953e-16,Ve=21765803e-16,je=.0043752690880113,lt=37393792e-14,yt=11428639e-14,at=.00015835218,Et=119459e-10;H=0,Ee<.0052359877&&Ee>.0034906585&&(H=1),Ee>=.00826&&Ee<=.00924&&ae>=.5&&(H=2);var rt=c*Et*m,Ye=u*Et*(p+h),Wn=-Et*d*(g+_-14-6*Q),ot=f*Et*(T+S-6),Bt=-Et*u*(E+v);(Se<.052359877||Se>un-.052359877)&&(Bt=0),l!==0&&(Bt/=l);var ui=ot-e*Bt;B=rt+i*at*a,he=Ye+r*at*(Z+Y),le=Wn-at*s*(U+G-14-6*Q);var xn=o*at*(J+te-6),Mn=-at*r*(j+K);(Se<.052359877||Se>un-.052359877)&&(Mn=0),Ae=ui+xn,ve=Bt,l!==0&&(Ae-=e/l*Mn,ve+=Mn/l);var pt=0,Wt=(N+w*je)%ut;if(ae+=B*x,Se+=he*x,ge+=Ae*x,Ue+=ve*x,Re+=le*x,H!==0){if(q=Math.pow(Ee/Rn,ar),H===2){$=e*e;var Xn=ae;ae=k;var wt=Q;Q=ee,X=ae*Q,st=-.306-(ae-.64)*.44,ae<=.65?(de=3.616-13.247*ae+16.29*Q,it=-19.302+117.39*ae-228.419*Q+156.591*X,Kt=-18.9068+109.7927*ae-214.6334*Q+146.5816*X,et=-41.122+242.694*ae-471.094*Q+313.953*X,dn=-146.407+841.88*ae-1629.014*Q+1083.435*X,vn=-532.114+3017.977*ae-5740.032*Q+3708.276*X):(de=-72.099+331.819*ae-508.738*Q+266.724*X,it=-346.844+1582.851*ae-2415.925*Q+1246.113*X,Kt=-342.585+1554.908*ae-2366.899*Q+1215.972*X,et=-1052.797+4758.686*ae-7193.992*Q+3651.957*X,dn=-3581.69+16178.11*ae-24462.77*Q+12422.52*X,ae>.715?vn=-5149.66+29936.92*ae-54087.36*Q+31324.56*X:vn=1464.74-4664.75*ae+3763.64*Q),ae<.7?($t=-919.2277+4988.61*ae-9064.77*Q+5542.21*X,fn=-822.71072+4568.6173*ae-8491.4146*Q+5337.524*X,Cn=-853.666+4690.25*ae-8624.77*Q+5341.4*X):($t=-37995.78+161616.52*ae-229838.2*Q+109377.94*X,fn=-51752.104+218913.95*ae-309468.16*Q+146349.42*X,Cn=-40023.88+170470.89*ae-242699.48*Q+115605.82*X),Vt=l*l,Me=.75*(1+2*e+$),Ne=1.5*Vt,Oe=1.875*l*(1-2*e-3*$),ue=-1.875*l*(1+2*e-3*$),pe=35*Vt*Me,me=39.375*Vt*Vt,De=9.84375*l*(Vt*(1-2*e-5*$)+.33333333*(-2+4*e+6*$)),Ce=l*(4.92187512*Vt*(-2-4*e+10*$)+6.56250012*(1+2*e-3*$)),Xe=29.53125*l*(2-8*e+$*(-12+8*e+10*$)),He=29.53125*l*(-2-8*e+$*(12+8*e-10*$)),R=Ee*Ee,V=q*q,zt=3*R*V,ft=zt*ke,_e=ft*Me*st,ye=ft*Ne*de,zt*=q,ft=zt*lt,xe=ft*Oe*it,Le=ft*ue*Kt,zt*=q,ft=2*zt*qe,Te=ft*pe*et,b=ft*me*dn,zt*=q,ft=zt*yt,M=ft*De*vn,z=ft*Ce*Cn,ft=2*zt*Ve,re=ft*Xe*fn,se=ft*He*$t,ie=(y+O+O-(Wt+Wt))%ut,C=A+le+2*(W+ve-je)-F,ae=Xn,Q=wt}H===1&&(Qe=1+Q*(-2.5+.8125*Q),it=1+2*Q,Je=1+Q*(-6+6.60937*Q),Me=.75*(1+e)*(1+e),We=.9375*l*l*(1+3*e)-.75*(1+e),L=1+e,L*=1.875*L*L,Pe=3*Ee*Ee*q*q,oe=2*Pe*Me*Qe*we,Ge=3*Pe*L*Je*Be*q,Pe=Pe*We*it*Ie*q,ie=(y+O+t-Wt)%ut,C=A+P+le+Ae+ve-(F+je)),fe=ie,ce=F,ze=0,Ee=F+pt}return{em:ae,argpm:ge,inclm:Se,mm:Re,nm:Ee,nodem:Ue,irez:H,atime:ze,d2201:_e,d2211:ye,d3210:xe,d3222:Le,d4410:Te,d4422:b,d5220:M,d5232:z,d5421:re,d5433:se,dedt:B,didt:he,dmdt:le,dndt:pt,dnodt:ve,domdt:Ae,del1:Pe,del2:oe,del3:Ge,xfact:C,xlamo:ie,xli:fe,xni:ce}}function Qo(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Ji/240%ut,t<0&&(t+=ut),t}function Zs(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Qo(ua.apply(void 0,arguments)):Qo.apply(void 0,arguments)}function Eg(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(i),u=c*c,d=Math.pow(Rn/s,ar),f=.75*ti*(3*u-1)/(l*a),m=f/(d*d),g=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(g*g),s/=1+m;var _=Math.pow(Rn/s,ar),p=Math.sin(i),h=_*a,E=1-5*u,v=-E-u-u,T=1/_,S=h*h,x=_*(1-e),w="n",N;if(r==="a"){var y=t-7305,A=Math.floor(y+1e-8),F=y-A,O=.017202791694070362,W=1.7321343856509375,P=5075514194322695e-30,U=O+ut;N=(W+O*A+U*F+y*y*P)%ut,N<0&&(N+=ut)}else N=Zs(t+24332815e-1);return{no:s,method:w,ainv:T,ao:_,con41:v,con42:E,cosio:c,cosio2:u,eccsq:o,omeosq:a,posq:S,rp:x,rteosq:l,sinio:p,gsto:N}}function bg(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,o=n.d4410,a=n.d4422,l=n.d5220,c=n.d5232,u=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,g=n.del2,_=n.del3,p=n.didt,h=n.dmdt,E=n.dnodt,v=n.domdt,T=n.argpo,S=n.argpdot,x=n.t,w=n.tc,N=n.gsto,y=n.xfact,A=n.xlamo,F=n.no,O=n.atime,W=n.em,P=n.argpm,U=n.inclm,G=n.xli,Z=n.mm,Y=n.xni,j=n.nodem,K=n.nm,J=.13130908,te=2.8843198,k=.37448087,ee=5.7686396,Q=.95240898,ae=1.8014998,ge=1.050833,Se=4.4108898,Re=.0043752690880113,Ee=720,Ue=-720,H=259200,ze,_e,ye,xe,Le,Te,b,M,z=0,re=0,se=(N+w*Re)%ut;if(W+=f*x,U+=p*x,P+=v*x,j+=E*x,Z+=h*x,e!==0){(O===0||x*O<=0||Math.abs(x)<Math.abs(O))&&(O=0,Y=F,G=A),x>0?ze=Ee:ze=Ue;for(var B=381;B===381;)e!==2?(b=m*Math.sin(G-J)+g*Math.sin(2*(G-te))+_*Math.sin(3*(G-k)),Le=Y+y,Te=m*Math.cos(G-J)+2*g*Math.cos(2*(G-te))+3*_*Math.cos(3*(G-k)),Te*=Le):(M=T+S*O,ye=M+M,_e=G+G,b=t*Math.sin(ye+G-ee)+i*Math.sin(G-ee)+r*Math.sin(M+G-Q)+s*Math.sin(-M+G-Q)+o*Math.sin(ye+_e-ae)+a*Math.sin(_e-ae)+l*Math.sin(M+G-ge)+c*Math.sin(-M+G-ge)+u*Math.sin(M+_e-Se)+d*Math.sin(-M+_e-Se),Le=Y+y,Te=t*Math.cos(ye+G-ee)+i*Math.cos(G-ee)+r*Math.cos(M+G-Q)+s*Math.cos(-M+G-Q)+l*Math.cos(M+G-ge)+c*Math.cos(-M+G-ge)+2*(o*Math.cos(ye+_e-ae)+a*Math.cos(_e-ae)+u*Math.cos(M+_e-Se)+d*Math.cos(-M+_e-Se)),Te*=Le),Math.abs(x-O)>=Ee?B=381:(re=x-O,B=0),B===381&&(G+=Le*ze+b*H,Y+=b*ze+Te*H,O+=ze);K=Y+b*re+Te*re*re*.5,xe=G+Le*re+b*re*re*.5,e!==1?(Z=xe-2*j+2*se,z=K-F):(Z=xe-j-P+se,z=K-F),K=F+z}return{atime:O,em:W,argpm:P,inclm:U,xli:G,mm:Z,xni:Y,nodem:j,dndt:z,nm:K}}function ac(n,e){var t,i,r,s,o,a,l,c,u,d,f,m,g,_,p,h,E,v,T,S,x,w,N,y,A,F,O,W=15e-13;n.t=e,n.error=0;var P=n.mo+n.mdot*n.t,U=n.argpo+n.argpdot*n.t,G=n.nodeo+n.nodedot*n.t;u=U,x=P;var Z=n.t*n.t;if(N=G+n.nodecf*Z,E=1-n.cc1*n.t,v=n.bstar*n.cc4*n.t,T=n.t2cof*Z,n.isimp!==1){l=n.omgcof*n.t;var Y=1+n.eta*Math.cos(P);a=n.xmcof*(Y*Y*Y-n.delmo),h=l+a,x=P+h,u=U-h,m=Z*n.t,g=m*n.t,E=E-n.d2*Z-n.d3*m-n.d4*g,v+=n.bstar*n.cc5*(Math.sin(x)-n.sinmao),T=T+n.t3cof*m+g*(n.t4cof+n.t*n.t5cof)}w=n.no;var j=n.ecco;if(S=n.inclo,n.method==="d"){_=n.t;var K={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:_,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:j,argpm:u,inclm:S,xli:n.xli,mm:x,xni:n.xni,nodem:N,nm:w},J=bg(K);j=J.em,u=J.argpm,S=J.inclm,x=J.mm,N=J.nodem,w=J.nm}if(w<=0)return n.error=2,[!1,!1];var te=Math.pow(Rn/w,ar)*E*E;if(w=Rn/Math.pow(te,1.5),j-=v,j>=1||j<-.001)return n.error=1,[!1,!1];j<1e-6&&(j=1e-6),x+=n.no*T,A=x+u+N,N%=ut,u%=ut,A%=ut,x=(A-u-N)%ut;var k=Math.sin(S),ee=Math.cos(S),Q=j;if(y=S,d=u,O=N,F=x,s=k,r=ee,n.method==="d"){var ae={inclo:n.inclo,init:"n",ep:Q,inclp:y,nodep:O,argpp:d,mp:F,opsmode:n.operationmode},ge=sc(n,ae);if(Q=ge.ep,O=ge.nodep,d=ge.argpp,F=ge.mp,y=ge.inclp,y<0&&(y=-y,O+=un,d-=un),Q<0||Q>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(y),r=Math.cos(y),n.aycof=-.5*ni*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*ni*s*(3+5*r)/(1+r):n.xlcof=-.25*ni*s*(3+5*r)/W);var Se=Q*Math.cos(d);h=1/(te*(1-Q*Q));var Re=Q*Math.sin(d)+h*n.aycof,Ee=F+d+O+h*n.xlcof*Se,Ue=(Ee-O)%ut;c=Ue,p=9999.9;for(var H=1;Math.abs(p)>=1e-12&&H<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*Se-i*Re,p=(Ue-Re*t+Se*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,H+=1;var ze=Se*t+Re*i,_e=Se*i-Re*t,ye=Se*Se+Re*Re,xe=te*(1-ye);if(xe<0)return n.error=4,[!1,!1];var Le=te*(1-ze),Te=Math.sqrt(te)*_e/Le,b=Math.sqrt(xe)/Le,M=Math.sqrt(1-ye);h=_e/(1+M);var z=te/Le*(i-Re-Se*h),re=te/Le*(t-Se+Re*h);f=Math.atan2(z,re);var se=(re+re)*z,B=1-2*z*z;h=1/xe;var he=.5*ti*h,le=he*h;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var ve=Le*(1-1.5*le*M*n.con41)+.5*he*n.x1mth2*B;if(ve<1)return n.error=6,{position:!1,velocity:!1};f-=.25*le*n.x7thm1*se;var Ae=O+1.5*le*r*se,Pe=y+1.5*le*r*s*B,oe=Te-w*he*n.x1mth2*se/Rn,Ge=b+w*he*(n.x1mth2*B+1.5*n.con41)/Rn,C=Math.sin(f),ie=Math.cos(f),fe=Math.sin(Ae),ce=Math.cos(Ae),Me=Math.sin(Pe),Ne=Math.cos(Pe),We=-fe*Ne,Oe=ce*Ne,ue=We*C+ce*ie,L=Oe*C+fe*ie,pe=Me*C,me=We*ie-ce*C,De=Oe*ie-fe*C,Ce=Me*ie,Xe={x:ve*ue*qt,y:ve*L*qt,z:ve*pe*qt},He={x:(oe*ue+Ge*me)*Ds,y:(oe*L+Ge*De)*Ds,z:(oe*pe+Ge*Ce)*Ds};return{position:Xe,velocity:He}}function Tg(n,e){var t=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,c=e.xno,u=e.xnodeo,d,f,m,g,_,p,h,E,v,T,S,x,w,N,y,A,F,O,W,P,U,G,Z,Y,j,K,J,te,k,ee,Q,ae,ge,Se,Re,Ee,Ue,H,ze,_e,ye,xe,Le,Te,b,M,z,re,se,B,he,le,ve,Ae,Pe,oe,Ge=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=r,n.ecco=s,n.argpo=o,n.inclo=a,n.mo=l,n.no=c,n.nodeo=u,n.operationmode=t;var C=78/qt+1,ie=42/qt,fe=ie*ie*ie*ie;n.init="y",n.t=0;var ce={ecco:n.ecco,epoch:i,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},Me=Eg(ce),Ne=Me.ao,We=Me.con42,Oe=Me.cosio,ue=Me.cosio2,L=Me.eccsq,pe=Me.omeosq,me=Me.posq,De=Me.rp,Ce=Me.rteosq,Xe=Me.sinio;if(n.no=Me.no,n.con41=Me.con41,n.gsto=Me.gsto,n.a=Math.pow(n.no*_g,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,pe>=0||n.no>=0){if(n.isimp=0,De<220/qt+1&&(n.isimp=1),J=C,U=fe,O=(De-1)*qt,O<156){J=O-78,O<98&&(J=20);var He=(120-J)/qt;U=He*He*He*He,J=J/qt+1}W=1/me,M=1/(Ne-J),n.eta=Ne*n.ecco*M,x=n.eta*n.eta,S=n.ecco*n.eta,P=Math.abs(1-x),p=U*Math.pow(M,4),h=p/Math.pow(P,3.5),g=h*n.no*(Ne*(1+1.5*x+S*(4+x))+.375*ti*M/P*n.con41*(8+3*x*(8+x))),n.cc1=n.bstar*g,_=0,n.ecco>1e-4&&(_=-2*p*M*ni*n.no*Xe/n.ecco),n.x1mth2=1-ue,n.cc4=2*n.no*h*Ne*pe*(n.eta*(2+.5*x)+n.ecco*(.5+2*x)-ti*M/(Ne*P)*(-3*n.con41*(1-2*S+x*(1.5-.5*S))+.75*n.x1mth2*(2*x-S*(1+x))*Math.cos(2*n.argpo))),n.cc5=2*h*Ne*pe*(1+2.75*(x+S)+S*x),E=ue*ue,Le=1.5*ti*W*n.no,Te=.5*Le*ti*W,b=-.46875*xg*W*W*n.no,n.mdot=n.no+.5*Le*Ce*n.con41+.0625*Te*Ce*(13-78*ue+137*E),n.argpdot=-.5*Le*We+.0625*Te*(7-114*ue+395*E)+b*(3-36*ue+49*E),re=-Le*Oe,n.nodedot=re+(.5*Te*(4-19*ue)+2*b*(3-7*ue))*Oe,z=n.argpdot+n.nodedot,n.omgcof=n.bstar*_*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-ar*p*n.bstar/S),n.nodecf=3.5*pe*re*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Oe+1)>15e-13?n.xlcof=-.25*ni*Xe*(3+5*Oe)/(1+Oe):n.xlcof=-.25*ni*Xe*(3+5*Oe)/Ge,n.aycof=-.5*ni*Xe;var Qe=1+n.eta*Math.cos(n.mo);if(n.delmo=Qe*Qe*Qe,n.sinmao=Math.sin(n.mo),n.x7thm1=7*ue-1,2*un/n.no>=225){n.method="d",n.isimp=1,ye=0,y=n.inclo;var st={epoch:i,ep:n.ecco,argpp:n.argpo,tc:ye,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},de=Sg(st);n.e3=de.e3,n.ee2=de.ee2,n.peo=de.peo,n.pgho=de.pgho,n.pho=de.pho,n.pinco=de.pinco,n.plo=de.plo,n.se2=de.se2,n.se3=de.se3,n.sgh2=de.sgh2,n.sgh3=de.sgh3,n.sgh4=de.sgh4,n.sh2=de.sh2,n.sh3=de.sh3,n.si2=de.si2,n.si3=de.si3,n.sl2=de.sl2,n.sl3=de.sl3,n.sl4=de.sl4,f=de.sinim,d=de.cosim,v=de.em,T=de.emsq,G=de.s1,Z=de.s2,Y=de.s3,j=de.s4,K=de.s5,te=de.ss1,k=de.ss2,ee=de.ss3,Q=de.ss4,ae=de.ss5,ge=de.sz1,Se=de.sz3,Re=de.sz11,Ee=de.sz13,Ue=de.sz21,H=de.sz23,ze=de.sz31,_e=de.sz33,n.xgh2=de.xgh2,n.xgh3=de.xgh3,n.xgh4=de.xgh4,n.xh2=de.xh2,n.xh3=de.xh3,n.xi2=de.xi2,n.xi3=de.xi3,n.xl2=de.xl2,n.xl3=de.xl3,n.xl4=de.xl4,n.zmol=de.zmol,n.zmos=de.zmos,F=de.nm,se=de.z1,B=de.z3,he=de.z11,le=de.z13,ve=de.z21,Ae=de.z23,Pe=de.z31,oe=de.z33;var Je={inclo:y,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},it=sc(n,Je);n.ecco=it.ep,n.inclo=it.inclp,n.nodeo=it.nodep,n.argpo=it.argpp,n.mo=it.mp,w=0,N=0,A=0;var Kt={cosim:d,emsq:T,argpo:n.argpo,s1:G,s2:Z,s3:Y,s4:j,s5:K,sinim:f,ss1:te,ss2:k,ss3:ee,ss4:Q,ss5:ae,sz1:ge,sz3:Se,sz11:Re,sz13:Ee,sz21:Ue,sz23:H,sz31:ze,sz33:_e,t:n.t,tc:ye,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:z,z1:se,z3:B,z11:he,z13:le,z21:ve,z23:Ae,z31:Pe,z33:oe,ecco:n.ecco,eccsq:L,em:v,argpm:w,inclm:y,mm:A,nm:F,nodem:N,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},et=yg(Kt);n.irez=et.irez,n.atime=et.atime,n.d2201=et.d2201,n.d2211=et.d2211,n.d3210=et.d3210,n.d3222=et.d3222,n.d4410=et.d4410,n.d4422=et.d4422,n.d5220=et.d5220,n.d5232=et.d5232,n.d5421=et.d5421,n.d5433=et.d5433,n.dedt=et.dedt,n.didt=et.didt,n.dmdt=et.dmdt,n.dnodt=et.dnodt,n.domdt=et.domdt,n.del1=et.del1,n.del2=et.del2,n.del3=et.del3,n.xfact=et.xfact,n.xlamo=et.xlamo,n.xli=et.xli,n.xni=et.xni}n.isimp!==1&&(m=n.cc1*n.cc1,n.d2=4*Ne*M*m,xe=n.d2*M*n.cc1/3,n.d3=(17*Ne+J)*xe,n.d4=.5*xe*Ne*M*(221*Ne+31*J)*n.cc1,n.t3cof=n.d2+2*m,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*m)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*m*(2*n.d2+m)))}ac(n,0),n.init="n"}function Ag(n,e){var t="i",i=1440/(2*un),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=Ji,s.nodeo*=Ji,s.argpo*=Ji,s.mo*=Ji,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=Mg(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,u=o.minute,d=o.sec;return s.jdsatepoch=ua(r,a,l,c,u,d),Tg(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function wg(n){return Rg(n)||Cg(n)||Pg(n)||Lg()}function Rg(n){if(Array.isArray(n))return Js(n)}function Cg(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pg(n,e){if(n){if(typeof n=="string")return Js(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Js(n,e)}}function Js(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Lg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dg(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=ua.apply(void 0,wg(r)),o=(s-i.jdsatepoch)*mg;return ac(i,o)}function Ug(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,o=2*s-s*s,a=Math.atan2(n.y,n.x)-e;a<-un;)a+=ut;for(;a>un;)a-=ut;for(var l=20,c=0,u=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(u)*Math.sin(u))),u=Math.atan2(n.z+t*d*o*Math.sin(u),r),c+=1;var f=r/Math.cos(u)-t*d;return{longitude:a,latitude:u,height:f}}const kn=["#e8a33d","#4fb3d9","#8fd16a","#b58cf0"],dt=6371,ht=Math.PI/180,Ht=10,Ng=1.00005;function Jt(n,e,t=1,i=new I){const r=(e+180)*ht,s=n*ht;return i.set(-Math.cos(r)*Math.cos(s)*t,Math.sin(s)*t,Math.sin(r)*Math.cos(s)*t)}function el(n){const e=n.clone().normalize(),t=Math.asin(e.y)/ht,i=(Math.atan2(e.z,-e.x)/ht-180+540)%360-180;return[t,i]}class Ig{tMin;span;bins;binSize;isRange;count;validPct;D;renderer;scene=new ig;camera;controls;view;labels;cb;T0;NS;orbit;FU;TOBS;NADIR;CROSS;ALONG;fireU;earth;earthU;satObjs;boxLine;selGroup=new ei;ring;footprints;raf=0;last=performance.now();lastTick=0;simT=0;playing=!0;speed=600;flyTo=null;drawing=0;p1=null;downXY=null;dragBox=!1;zoomTarget=null;zoomAnchor=null;pinch=new Map;pinchDist=0;order=new Int32Array(0);inMask=null;outline;disposed=!1;resizeObserver;tiles;satOn;constructor(e,t,i){this.D=t,this.cb=i,this.view=e;const r=t.cols,s=r.lat.length;this.count=s;const o=t.sats;let a=1/0,l=-1/0;for(let S=0;S<s;S++){const x=r.t[S];x<a&&(a=x),x>l&&(l=x)}Number.isFinite(a)||(a=Date.parse(`${t.window[0]}T00:00:00Z`)/1e3,l=a+86400),this.tMin=a,this.T0=a-1800;const c=l+1800;this.NS=Math.ceil((c-this.T0)/Ht)+1,this.span=l-a+900,this.isRange=!!t.range;const u=[...new Set(o.filter(S=>S.tle).map(S=>S.norad))],d=o.map(S=>S.tle?u.indexOf(S.norad):-1),f=new I;this.orbit=u.map(S=>{const x=o.find(A=>A.norad===S),w=Ag(x.tle[0],x.tle[1]),N=new Float32Array(this.NS*3),y=new Float32Array(this.NS);for(let A=0;A<this.NS;A++){const F=new Date((this.T0+A*Ht)*1e3),O=Dg(w,F);if(typeof O.position=="boolean")continue;const W=Ug(O.position,Zs(F));Jt(W.latitude/ht,W.longitude/ht,1,f),N[A*3]=f.x,N[A*3+1]=f.y,N[A*3+2]=f.z,y[A]=W.height}return{u:N,alt:y,sats:o.map((A,F)=>A.norad===S?F:-1).filter(A=>A>=0)}}),this.oiOf=d,this.FU=new Float32Array(s*3),this.TOBS=new Float32Array(s),this.NADIR=new Float32Array(s),this.CROSS=new Float32Array(s*3),this.ALONG=new Float32Array(s*3);const m=Float32Array.from(r.scan),g=Float32Array.from(r.track);this.scan=m,this.track=g;{const S=new I,x=new I,w=new I,N=new I,y=new I,A=new I;let F=0,O=0;for(let W=0;W<s;W++){Jt(r.lat[W],r.lon[W],1,S),this.FU[W*3]=S.x,this.FU[W*3+1]=S.y,this.FU[W*3+2]=S.z;const P=r.sat[W],U=o[P],G=d[P];if(G<0)this.TOBS[W]=r.t[W]-a,this.NADIR[W]=NaN,x.set(0,1,0).addScaledVector(S,-S.y),x.lengthSq()<1e-10&&x.set(1,0,0).addScaledVector(S,-S.x),x.normalize(),w.crossVectors(x,S).normalize(),U.system===2&&(m[W]=U.pixel_km,g[W]=U.pixel_km);else if(U.system===3){this.TOBS[W]=r.t[W]-a,this.satPos(G,r.t[W],A),this.subpoint(G,r.t[W],N),this.NADIR[W]=Math.acos(Math.min(1,N.dot(S)))*dt,x.copy(N).addScaledVector(S,-N.dot(S)),x.lengthSq()<1e-12&&x.set(0,1,0).addScaledVector(S,-S.y),x.normalize(),w.crossVectors(S,x).normalize(),y.subVectors(A,S);const Z=y.length()*dt;y.normalize();const Y=Math.max(.12,y.dot(S)),j=U.pixel_km*Z/35786;m[W]=j,g[W]=j/Y}else{const Z=this.orbit[G].u,Y=Math.max(0,Math.floor((r.t[W]-180-this.T0)/Ht)),j=Math.min(this.NS-1,Math.ceil((r.t[W]+U.granule_s+420-this.T0)/Ht));let K=-2,J=Y;for(let k=Y;k<=j;k++){const ee=Z[k*3]*S.x+Z[k*3+1]*S.y+Z[k*3+2]*S.z;ee>K&&(K=ee,J=k)}const te=this.T0+J*Ht;this.TOBS[W]=te-a,this.NADIR[W]=Math.acos(Math.min(1,K))*dt,O++,this.NADIR[W]<=this.swathHalf(P,this.altAt(G,te))*dt+100&&F++,this.subpoint(G,te+Ht,N),this.subpoint(G,te-Ht,y),x.subVectors(N,y),x.addScaledVector(S,-x.dot(S)).normalize(),w.crossVectors(S,x).normalize(),U.system===2&&(m[W]=U.pixel_km,g[W]=U.pixel_km)}this.ALONG[W*3]=x.x,this.ALONG[W*3+1]=x.y,this.ALONG[W*3+2]=x.z,this.CROSS[W*3]=w.x,this.CROSS[W*3+1]=w.y,this.CROSS[W*3+2]=w.z}this.validPct=O?100*F/O:100}this.binSize=this.span<=2*86400?900:Math.ceil(this.span/240/3600)*3600;const _=Math.ceil(this.span/this.binSize)+1;this.bins=[0,1,2,3].map(()=>new Float32Array(_));for(let S=0;S<s;S++){const x=Math.floor(this.TOBS[S]/this.binSize);x>=0&&x<_&&this.bins[o[r.sat[S]].system][x]++}nt.enabled=!1,this.renderer=new nc({antialias:!0}),this.renderer.outputColorSpace=_n,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.domElement.className="fm-globe-canvas",e.appendChild(this.renderer.domElement),this.labels=document.createElement("div"),this.labels.className="fm-globe-labels",e.appendChild(this.labels),this.camera=new tn(40,1,.001,300),this.camera.position.copy(Jt(20,30,3.6)),this.controls=new pg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=1.0004,this.controls.maxDistance=25,this.controls.rotateSpeed=.5,this.controls.enableZoom=!1,this.controls.enablePan=!1;{const S=new _t,x=[];for(let w=0;w<3e3;w++){const N=new I().randomDirection().multiplyScalar(120+Math.random()*60);x.push(N.x,N.y,N.z)}S.setAttribute("position",new St(x,3)),this.scene.add(new ag(S,new ic({color:7829367,size:.25})))}this.earthU={dayTex:{value:null},nightTex:{value:null},hasTex:{value:0},sunDir:{value:new I(1,0,0)}},this.earth=new Pt(new jr(1,192,96),new rn({uniforms:this.earthU,vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D dayTex, nightTex; uniform float hasTex; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){
            float d = dot(normalize(vN), sunDir), k = smoothstep(-0.10, 0.10, d);
            vec3 day = hasTex > 0.5 ? texture2D(dayTex, vUv).rgb : vec3(0.12,0.2,0.3);
            vec3 night = hasTex > 0.5 ? texture2D(nightTex, vUv).rgb * 0.9 + day * 0.07 : vec3(0.02);
            gl_FragColor = vec4(mix(night, day * (0.75 + 0.25 * max(d, 0.)), k), 1.);
          }`})),this.scene.add(this.earth);const p=new rc;Promise.all(["earth-blue-marble.jpg","earth-night.jpg"].map(S=>new Promise((x,w)=>p.load(`https://unpkg.com/three-globe@2.31.0/example/img/${S}`,x,void 0,w)))).then(([S,x])=>{this.disposed||(this.earthU.dayTex.value=S,this.earthU.nightTex.value=x,this.earthU.hasTex.value=1)}).catch(()=>{}),this.scene.add(new Pt(new jr(1.015,64,32),new rn({transparent:!0,depthWrite:!1,side:Ft,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-abs(dot(vN,vV)),3.); gl_FragColor=vec4(0.55,0.65,0.8,f*0.5); }"}))),this.tiles=new Fg(this.scene,this.renderer,this.earthU.sunDir),this.satOn=o.map(()=>!0),this.fireU={uTime:{value:0},uWindow:{value:1e9},uGeoWin:{value:900},uMinConf:{value:0},uMinFrp:{value:0},uDn:{value:0},uUseIn:{value:0},uPx:{value:800},uMinPx:{value:2.5*this.renderer.getPixelRatio()},uDpr:{value:this.renderer.getPixelRatio()},uMask:{value:new Array(16).fill(1)},uSysCol:{value:kn.map(S=>new tt(S))}},this.buildFires();const h=150,E=13,v=128;this.satObjs=this.orbit.map((S,x)=>{const w=o[S.sats[0]],N=new tt(kn[w.system]??"#ffffff"),y=w.system===3,A=new ei,F=new er({color:14211288});A.add(new Pt(new li(.6,.6,1),F)),A.add(new Pt(new li(2.6,.05,.7),new er({color:N}))),this.scene.add(A);const O={oi:x,geo:y,sats:S.sats,grp:A,on:!0,label:document.createElement("div")};if(y){const W=new _t;W.setAttribute("position",new At(new Float32Array(v*3),3)),O.disk=new sg(W,new og({color:N,dashSize:.03,gapSize:.02,transparent:!0,opacity:.8})),O.disk.frustumCulled=!1,this.scene.add(O.disk)}else{const W=new _t;W.setAttribute("position",new At(new Float32Array(h*E*3),3)),W.setAttribute("aA",new At(new Float32Array(h*E),1));const P=[];for(let U=0;U<h-1;U++)for(let G=0;G<E-1;G++){const Z=U*E+G,Y=Z+E;P.push(Z,Z+1,Y,Z+1,Y+1,Y)}W.setIndex(P),O.swath=new Pt(W,new rn({uniforms:{c:{value:N}},transparent:!0,depthWrite:!1,side:Yt,vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying float vA; void main(){ gl_FragColor=vec4(c, vA); }"})),O.swath.renderOrder=1,O.swath.frustumCulled=!1,this.scene.add(O.swath)}return O.label.className="fm-globe-label",O.label.style.color=kn[w.system]??"#fff",O.label.textContent=`${S.sats.map(W=>o[W].symbol).join(" ")} ${w.name.replace(" FRP","")}`,this.labels.appendChild(O.label),O}),this.SW_N=h,this.SW_W=E,this.GEO_N=v,this.boxLine=new la(new _t,new tr({color:16777215,transparent:!0,opacity:.95})),this.boxLine.renderOrder=8,this.boxLine.frustumCulled=!1,this.scene.add(this.boxLine),this.ring=new Pt(new ca(.8,1,40),new er({color:16777215,side:Yt,transparent:!0,opacity:.9,depthTest:!1})),this.ring.renderOrder=6,this.footprints=new Vo(new _t,new tr({color:16777215,transparent:!0,opacity:.8})),this.footprints.renderOrder=5,this.footprints.frustumCulled=!1,this.selGroup.add(this.ring,this.footprints),this.selGroup.visible=!1,this.scene.add(this.selGroup),this.outline=new Vo(new _t,new tr({color:16765562,transparent:!0,opacity:.9})),this.outline.renderOrder=7,this.outline.frustumCulled=!1,this.outline.visible=!1,this.scene.add(this.outline);const T=this.renderer.domElement;T.style.touchAction="none",T.addEventListener("pointerdown",this.onDown),T.addEventListener("pointermove",this.onMove),T.addEventListener("pointerup",this.onUp),T.addEventListener("pointercancel",this.onCancel),T.addEventListener("wheel",this.onWheel,{passive:!1}),this.isRange&&(this.simT=this.span,this.playing=!1),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.raf=requestAnimationFrame(this.frame)}oiOf;fireGeo;scan;track;SW_N;SW_W;GEO_N;subpoint(e,t,i=new I){const r=this.orbit[e];let s=(t-this.T0)/Ht;s=Math.max(0,Math.min(this.NS-1.001,s));const o=Math.floor(s),a=s-o,l=o*3;return i.set(r.u[l]+(r.u[l+3]-r.u[l])*a,r.u[l+1]+(r.u[l+4]-r.u[l+1])*a,r.u[l+2]+(r.u[l+5]-r.u[l+2])*a).normalize()}altAt(e,t){return this.orbit[e].alt[Math.max(0,Math.min(this.NS-1,Math.round((t-this.T0)/Ht)))]}satPos(e,t,i=new I){return this.subpoint(e,t,i).multiplyScalar(1+this.altAt(e,t)/dt)}swathHalf(e,t){const i=this.D.sats[e].scan_deg*ht,r=(dt+t)/dt*Math.sin(i);return r>=1?Math.acos(dt/(dt+t)):Math.asin(r)-i}buildFires(){const e=this.D.cols,t=this.D.sats,i=this.count,r=new ug;r.setAttribute("position",new At(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=i;const s=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i).fill(1),p=[1,2,3,0],h=Array.from({length:i},(T,S)=>S).sort((T,S)=>p[t[e.sat[T]].system]-p[t[e.sat[S]].system]||T-S);this.order=Int32Array.from(h);for(let T=0;T<i;T++){const S=h[T],x=t[e.sat[S]],w=this.scan[S]/2/dt,N=this.track[S]/2/dt;for(let y=0;y<3;y++)s[T*3+y]=this.FU[S*3+y]*Ng,o[T*3+y]=this.CROSS[S*3+y]*w,a[T*3+y]=this.ALONG[S*3+y]*N;l[T]=this.TOBS[S],c[T]=e.sat[S],u[T]=x.system,d[T]=x.pattern,f[T]=e.conf[S],m[T]=e.dn[S]?2:1,g[T]=e.frp[S]??0}const E=(T,S)=>new rg(T,S);r.setAttribute("iC",E(s,3)),r.setAttribute("iX",E(o,3)),r.setAttribute("iY",E(a,3)),r.setAttribute("aT",E(l,1)),r.setAttribute("aSat",E(c,1)),r.setAttribute("aSys",E(u,1)),r.setAttribute("aPat",E(d,1)),r.setAttribute("aConf",E(f,1)),r.setAttribute("aDn",E(m,1)),r.setAttribute("aFrp",E(g,1)),r.setAttribute("aIn",E(_,1)),this.fireGeo=r;const v=new Pt(r,new rn({uniforms:this.fireU,transparent:!0,depthWrite:!1,side:Yt,vertexShader:`
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
          }`}));v.frustumCulled=!1,v.renderOrder=2,this.scene.add(v)}setPlaying(e){e&&this.simT>=this.span&&(this.simT=-600),this.playing=e}setSpeed(e){this.speed=e}setTime(e){this.simT=Math.max(-600,Math.min(this.span,e))}setWindow(e){this.fireU.uWindow.value=e}setFilters(e){const t=this.fireU.uMask.value;this.D.sats.forEach((i,r)=>{const s=e.sats[r]!==!1;t[r]=s?1:0,this.satOn[r]=s});for(const i of this.satObjs)i.on=i.sats.some(r=>this.satOn[r]);this.fireU.uMinConf.value=e.minConf,this.fireU.uMinFrp.value=e.minFrp,this.fireU.uDn.value=e.dayNight}setAreaMask(e){if(this.inMask=e,this.fireU.uUseIn.value=e?1:0,!e)return;const t=this.fireGeo.getAttribute("aIn"),i=t.array;for(let r=0;r<this.order.length;r++)i[r]=e[this.order[r]];t.needsUpdate=!0}setOutline(e){if(!e?.length){this.outline.visible=!1;return}const t=[],i=new I,r=new I;for(const s of e)for(let o=0;o<s.length-1;o++)Jt(s[o][1],s[o][0],1.0005,i),Jt(s[o+1][1],s[o+1][0],1.0005,r),t.push(i.x,i.y,i.z,r.x,r.y,r.z);this.outline.geometry.setAttribute("position",new St(t,3)),this.outline.geometry.computeBoundingSphere(),this.outline.visible=!0}setDrawing(e){this.drawing=e?1:0,this.p1=null,this.dragBox=!1,this.controls.enabled=!e,this.renderer.domElement.style.cursor=e?"crosshair":""}setBox(e){if(!e){this.boxLine.visible=!1;return}const[t,i,r,s]=e,o=[],a=60;for(let l=0;l<=a;l++)o.push(Jt(i,t+(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(i+(s-i)*l/a,r,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s,r-(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s-(s-i)*l/a,t,1.0004));this.boxLine.geometry.setFromPoints(o),this.boxLine.visible=!0}flyToBox(e){const[t,i,r,s]=e,o=(i+s)/2,l=Math.max((r-t)*Math.cos(o*ht),s-i)*ht/.7/2/Math.tan(this.camera.fov*ht/2)*dt*Math.max(1,1/this.camera.aspect);this.flyToView({lat:o,lon:(t+r)/2,altKm:l})}flyToView(e){const t=Math.min(24,Math.max(4e-4,e.altKm/dt));this.zoomTarget=null,this.flyTo=Jt(e.lat,e.lon,1+t)}flyHome(){this.zoomTarget=null,this.flyTo=this.camera.position.clone().normalize().multiplyScalar(3.6)}zoomToSelection(){this.selGroup.visible&&(this.zoomTarget=null,this.flyTo=this.ring.position.clone().normalize().multiplyScalar(1.003))}clearSelection(){this.selGroup.visible=!1}cameraView(){const[e,t]=el(this.camera.position);return{lat:Math.round(e*1e3)/1e3,lon:Math.round(t*1e3)/1e3,altKm:Math.round((this.camera.position.length()-1)*dt)}}stats(e){const t=this.D.cols,i={total:0,bySystem:[0,0,0,0],bySat:this.D.sats.map(()=>0),frp:0};for(let r=0;r<this.count;r++)e&&(t.lon[r]<e[0]||t.lon[r]>e[2]||t.lat[r]<e[1]||t.lat[r]>e[3])||this.isVisible(r)&&(i.total++,i.bySat[t.sat[r]]++,i.bySystem[this.D.sats[t.sat[r]].system]++,i.frp+=t.frp[r]??0);return i}hitLL(e){const t=this.hit(e);return t?el(t):null}hit(e){const t=this.renderer.domElement.getBoundingClientRect(),i=new Ke((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new dg;return r.setFromCamera(i,this.camera),r.intersectObject(this.earth)[0]?.point??null}boxFrom(e,t){return[Math.min(e[1],t[1]),Math.min(e[0],t[0]),Math.max(e[1],t[1]),Math.max(e[0],t[0])].map(i=>Math.round(i*100)/100)}onDown=e=>{if(this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2){const[t,i]=[...this.pinch.values()];this.pinchDist=Math.hypot(t[0]-i[0],t[1]-i[1]),this.downXY=null;return}if(this.downXY=[e.clientX,e.clientY],this.flyTo=null,this.drawing===1){const t=this.hitLL(e);if(!t)return;this.p1=[t[0],t[1]],this.dragBox=!0,this.renderer.domElement.setPointerCapture(e.pointerId)}};onMove=e=>{if(this.pinch.has(e.pointerId)&&this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2&&this.pinchDist>0){const[t,i]=[...this.pinch.values()],r=Math.hypot(t[0]-i[0],t[1]-i[1]);r>0&&this.zoomBy(this.pinchDist/r,{clientX:(t[0]+i[0])/2,clientY:(t[1]+i[1])/2},!0),this.pinchDist=r;return}if(this.drawing===1&&this.dragBox&&this.p1||this.drawing===2&&this.p1){const t=this.hitLL(e);t&&this.setBox(this.boxFrom(this.p1,t))}};onCancel=e=>{this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0)};onUp=e=>{if(this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0),this.drawing){const i=this.hitLL(e),r=this.downXY?Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1]):0;if(this.drawing===1&&this.dragBox&&this.p1&&i&&r>8){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}else if(this.drawing===1&&this.p1)this.drawing=2,this.dragBox=!1,this.cb.onBoxPoint(1,null);else if(this.drawing===2&&this.p1&&i){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}this.downXY=null;return}if(!this.downXY||Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1])>5)return;this.downXY=null;const t=this.hit(e);if(!t){this.select(-1);return}this.select(this.nearest(t.clone().normalize()))};onWheel=e=>{e.preventDefault();const t=e.deltaMode===1?e.deltaY*16:e.deltaY;this.zoomBy(Math.exp(Math.max(-1,Math.min(1,t/400))),e,!1)};zoomBy(e,t,i){const r=this.zoomTarget??this.camera.position.length()-1,s=Math.min(24,Math.max(4e-4,r*e));this.flyTo=null,this.zoomTarget=s,this.zoomAnchor=e<1?this.hit(t)?.normalize()??null:null,i&&this.applyZoom(1)}applyZoom(e){if(this.zoomTarget==null)return;const t=this.camera.position.length(),i=t-1,r=i+(this.zoomTarget-i)*e,s=this.camera.position.clone().divideScalar(t);if(this.zoomAnchor&&r<i){const o=Math.min(1,(1-r/i)*.9);s.lerp(this.zoomAnchor,o).normalize()}this.camera.position.copy(s.multiplyScalar(1+r)),Math.abs(this.zoomTarget-r)<this.zoomTarget*.002&&(this.zoomTarget=null,this.zoomAnchor=null)}isVisible(e){const t=this.D.cols,i=this.simT-this.TOBS[e],s=this.D.sats[t.sat[e]].system===3?Math.min(this.fireU.uWindow.value,this.fireU.uGeoWin.value):this.fireU.uWindow.value;if(i<0||i>s||!this.satOn[t.sat[e]]||t.conf[e]<this.fireU.uMinConf.value||(t.frp[e]??0)<this.fireU.uMinFrp.value)return!1;const o=this.fireU.uDn.value;return o&&(t.dn[e]?2:1)!==o?!1:!this.inMask||this.inMask[e]===1}nearest(e){const t=this.fireU.uPx.value/this.camera.position.distanceTo(e),i=Math.cos(Math.max(8/dt,14*this.renderer.getPixelRatio()/t));let r=-1,s=1/0;const o=this.FU;for(let a=0;a<this.count;a++){const l=o[a*3]*e.x+o[a*3+1]*e.y+o[a*3+2]*e.z;if(l<i||!this.isVisible(a))continue;const c=this.scan[a]/2/dt,u=this.track[a]/2/dt,d=Math.max(1,this.fireU.uMinPx.value/(2*Math.max(c,u)*t)),f=e.x-o[a*3],m=e.y-o[a*3+1],g=e.z-o[a*3+2],_=(f*this.CROSS[a*3]+m*this.CROSS[a*3+1]+g*this.CROSS[a*3+2])/(c*d),p=(f*this.ALONG[a*3]+m*this.ALONG[a*3+1]+g*this.ALONG[a*3+2])/(u*d),h=Math.max(Math.abs(_),Math.abs(p)),E=h<=1?h:10+Math.acos(Math.min(1,l))*t;E<s&&(s=E,r=a)}return r}footprintSegs(e,t){const i=new I(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]),r=new I(this.CROSS[e*3],this.CROSS[e*3+1],this.CROSS[e*3+2]),s=new I(this.ALONG[e*3],this.ALONG[e*3+1],this.ALONG[e*3+2]),o=this.scan[e]/2/dt*1.08,a=this.track[e]/2/dt*1.08,l=(u,d)=>i.clone().addScaledVector(r,u*o).addScaledVector(s,d*a).normalize().multiplyScalar(1.00006),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];for(let u=0;u<4;u++){const d=c[u],f=c[(u+1)%4];t.push(d.x,d.y,d.z,f.x,f.y,f.z)}}select(e){if(e<0){this.selGroup.visible=!1,this.cb.onPick(null);return}const t=this.D.cols,i=this.D.sats,r=t.sat[e],s=i[r],o=this.oiOf[r],a=this.TOBS[e]+this.tMin,l=s.system===3,c=new I(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]);this.ring.position.copy(c).multiplyScalar(1.00007),this.ring.lookAt(c.clone().multiplyScalar(2)),this.selGroup.visible=!0;const u=o<0?null:Math.acos(this.satPos(o,a).clone().sub(c).normalize().dot(c))/ht,d=[],f=[],m=new Map,g=Math.max(1.5,this.scan[e],this.track[e]),_=Math.cos(25/dt),p=Math.cos(g/dt);for(let h=0;h<this.count;h++){const E=this.FU[h*3]*c.x+this.FU[h*3+1]*c.y+this.FU[h*3+2]*c.z;if(E<_)continue;t.sat[h]===r&&Math.abs(this.TOBS[h]-this.TOBS[e])<(l?1:900)?(d.push(h),this.footprintSegs(h,f)):E>=p&&m.set(t.sat[h],(m.get(t.sat[h])??0)+1)}this.footprints.geometry.setAttribute("position",new St(f,3)),this.footprints.geometry.computeBoundingSphere(),this.cb.onPick({index:e,sat:s,lat:t.lat[e],lon:t.lon[e],time:t.t[e],frp:t.frp[e],conf:t.conf[e],confRaw:t.craw[e],dayNight:t.dn[e]?"N":"D",scanKm:this.scan[e],trackKm:this.track[e],growth:Math.sqrt(this.scan[e]*this.track[e])/s.pixel_km,b4:t.b4?.[e]??null,b5:t.b5?.[e]??null,version:t.ver&&this.D.versions?this.D.versions[t.ver[e]]??null:null,altitudeKm:o<0?null:this.altAt(o,a),nadirKm:Number.isFinite(this.NADIR[e])?this.NADIR[e]:null,viewZenith:u,samePass:d.length,samePassFrp:d.reduce((h,E)=>h+(t.frp[E]??0),0),others:[...m].sort((h,E)=>E[1]-h[1]).map(([h,E])=>({sat:i[h],count:E}))})}resize(){const e=this.view.clientWidth,t=this.view.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fireU.uPx.value=t*this.renderer.getPixelRatio()/(2*Math.tan(this.camera.fov*ht/2)))}updateSats(e){const t=new I,i=new I,r=new I,s=new I,o=new I,a=new I,l=new gt;for(const c of this.satObjs){const u=c.sats[0],d=c.oi;this.satPos(d,e,t),c.grp.visible=c.on,c.grp.position.copy(t),i.copy(t).normalize();const f=this.subpoint(d,e+Ht,r).sub(this.subpoint(d,e-Ht,s));f.addScaledVector(i,-f.dot(i)),f.lengthSq()<1e-14&&f.set(0,1,0).addScaledVector(i,-i.y),f.normalize(),l.makeBasis(o.crossVectors(i,f),i,f),c.grp.quaternion.setFromRotationMatrix(l),c.grp.scale.setScalar(Math.max(.004,this.camera.position.distanceTo(t)*.011));const m=this.altAt(d,e);if(c.swath){if(c.swath.visible=c.on,c.on){const g=c.swath.geometry.attributes.position.array,_=c.swath.geometry.attributes.aA.array,p=this.swathHalf(u,m),h=new I;for(let E=0;E<this.SW_N;E++){const v=e-E*Ht;this.subpoint(d,v,h),this.subpoint(d,v+Ht,r),this.subpoint(d,v-Ht,s),s.subVectors(r,s).normalize(),o.crossVectors(h,s).normalize();const T=.32*Math.pow(1-E/this.SW_N,1.4);for(let S=0;S<this.SW_W;S++){const x=p*(2*S/(this.SW_W-1)-1);a.copy(h).multiplyScalar(Math.cos(x)).addScaledVector(o,Math.sin(x)).normalize().multiplyScalar(1.002);const w=E*this.SW_W+S;g[w*3]=a.x,g[w*3+1]=a.y,g[w*3+2]=a.z,_[w]=S===0||S===this.SW_W-1?Math.min(1,T*1.8):T}}c.swath.geometry.attributes.position.needsUpdate=!0,c.swath.geometry.attributes.aA.needsUpdate=!0}}else if(c.disk){const g=this.subpoint(d,e,new I),_=this.swathHalf(u,m),p=new I(0,1,0).addScaledVector(g,-g.y).normalize(),h=new I().crossVectors(g,p);c.disk.visible=c.on;const E=c.disk.geometry.attributes.position.array;for(let v=0;v<this.GEO_N;v++){const T=v/this.GEO_N*Math.PI*2;a.copy(g).multiplyScalar(Math.cos(_)).addScaledVector(p,Math.sin(_)*Math.cos(T)).addScaledVector(h,Math.sin(_)*Math.sin(T)).multiplyScalar(1.002),E[v*3]=a.x,E[v*3+1]=a.y,E[v*3+2]=a.z}c.disk.geometry.attributes.position.needsUpdate=!0,c.disk.computeLineDistances()}}}sunDir(e,t){const i=new Date(e*1e3),r=e/86400-10957.5,s=(357.529+.98560028*r)*ht,a=(280.459+.98564736*r+1.915*Math.sin(s)+.02*Math.sin(2*s))*ht,l=(23.439-36e-8*r)*ht,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),u=Math.asin(Math.sin(l)*Math.sin(a));let d=(c-Zs(i))/ht;return d=(d+540)%360-180,Jt(u/ht,d,1,t)}frame=e=>{if(this.disposed)return;const t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.playing&&(this.setTime(this.simT+t*this.speed),this.simT>=this.span&&(this.playing=!1));const i=this.tMin+this.simT;this.fireU.uTime.value=this.simT,this.sunDir(i,this.earthU.sunDir.value),this.updateSats(i);const r=1-Math.exp(-t*5);if(this.flyTo){const m=this.camera.position.length(),g=this.camera.position.clone().divideScalar(m),_=this.flyTo.clone().normalize(),p=g.lerp(_,r);p.lengthSq()<1e-6&&p.set(0,1,0);const h=Math.log(m-1),E=Math.log(this.flyTo.length()-1);this.camera.position.copy(p.normalize().multiplyScalar(1+Math.exp(h+(E-h)*r))),p.angleTo(_)<1e-4&&Math.abs(h-E)<.01&&(this.flyTo=null)}this.applyZoom(Math.min(1,r*1.6));const s=this.camera.position.length()-1;this.controls.rotateSpeed=Math.min(.5,Math.max(6e-4,s*.19)),this.controls.update();const o=this.camera.position.length()-1,a=Math.max(3e-5,o*.3);Math.abs(a-this.camera.near)/this.camera.near>.05&&(this.camera.near=a,this.camera.updateProjectionMatrix()),this.selGroup.visible&&this.ring.scale.setScalar(Math.max(o*.012,4e-5)),this.tiles.update(this.camera,this.view.clientWidth,this.view.clientHeight);const l=this.view.clientWidth,c=this.view.clientHeight,u=this.camera.position,d=new I,f=new I;for(const m of this.satObjs){if(!m.on){m.label.style.display="none";continue}const g=m.grp.position;d.subVectors(g,u);const _=d.length();d.divideScalar(_);const p=u.dot(d),h=p*p-(u.lengthSq()-1),E=-p-Math.sqrt(Math.max(h,0));f.copy(g).project(this.camera);const v=h>0&&E>0&&E<_||f.z>1;m.label.style.display=v?"none":"",v||(m.label.style.transform=`translate(${(f.x+1)/2*l+10}px, ${(1-f.y)/2*c-8}px)`)}this.renderer.render(this.scene,this.camera),e-this.lastTick>120&&(this.lastTick=e,this.cb.onTick(this.simT,this.playing)),this.raf=requestAnimationFrame(this.frame)};dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),this.renderer.domElement.removeEventListener("pointerdown",this.onDown),this.renderer.domElement.removeEventListener("pointerup",this.onUp),this.renderer.domElement.removeEventListener("pointermove",this.onMove),this.renderer.domElement.removeEventListener("pointercancel",this.onCancel),this.renderer.domElement.removeEventListener("wheel",this.onWheel),this.controls.dispose(),this.tiles.dispose(),this.scene.traverse(e=>{const t=e;t.geometry?.dispose?.();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i?.dispose?.()}),this.renderer.dispose(),this.renderer.domElement.remove(),this.labels.remove()}}class Fg{constructor(e,t,i){this.sunDir=i,e.add(this.group),this.loader.setCrossOrigin("anonymous"),this.aniso=t.capabilities.getMaxAnisotropy()}sunDir;group=new ei;cache=new Map;queue=[];frame=0;loading=0;loader=new rc;aniso;dead=!1;url(e,t,i){return`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${e}/${i}/${t}`}mesh(e,t){const i=(d,f)=>Math.atan(Math.sinh(Math.PI*(1-2*f/2**d)))/ht,r=2**e.z,s=Math.max(6,Math.min(64,Math.ceil(360/r/.15))),o=new Float32Array((s+1)*(s+1)*3),a=new Float32Array((s+1)*(s+1)*2),l=[],c=new I;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){const m=d*(s+1)+f;Jt(i(e.z,e.y+d/s),(e.x+f/s)/r*360-180,e.r,c),o[m*3]=c.x,o[m*3+1]=c.y,o[m*3+2]=c.z,a[m*2]=f/s,a[m*2+1]=1-d/s,f<s&&d<s&&l.push(m,m+s+1,m+1,m+1,m+s+1,m+s+2)}const u=new _t;return u.setAttribute("position",new At(o,3)),u.setAttribute("uv",new At(a,2)),u.setIndex(l),u.computeBoundingSphere(),new Pt(u,new rn({uniforms:{map:{value:t},sunDir:this.sunDir},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){ vec3 c = texture2D(map, vUv).rgb; float k = smoothstep(-0.10, 0.10, dot(vN, sunDir)); gl_FragColor = vec4(c * mix(0.3, 1., k), 1.); }`,side:Yt}))}need(e,t,i,r){const s=`${e}/${t}/${i}`;let o=this.cache.get(s);o||(o={key:s,z:e,x:t,y:i,r,state:"queued",mesh:null,used:this.frame},this.cache.set(s,o),this.queue.push(o)),o.used=this.frame}pump(){for(;this.loading<8&&this.queue.length;){const e=this.queue.pop();if(this.frame-e.used>20){this.cache.delete(e.key);continue}this.loading++,e.state="loading",this.loader.load(this.url(e.z,e.x,e.y),t=>{if(this.loading--,t.anisotropy=this.aniso,this.dead||!this.cache.has(e.key)){t.dispose();return}e.mesh=this.mesh(e,t),e.state="ready",this.group.add(e.mesh)},void 0,()=>{this.loading--,e.state="error"})}}update(e,t,i){this.frame++;const r=e.position.length()-1,s=e.position.clone().normalize(),o=Math.asin(s.y)/ht,a=Math.atan2(s.z,-s.x)/ht-180,l=2*r*dt*Math.tan(e.fov*ht/2)/Math.max(1,i),c=Math.max(.05,Math.cos(o*ht)),u=Math.min(18,Math.round(Math.log2(40075*c/(256*l))+.4));if(u>=5){const d=(f,m,g)=>{const _=2**f,p=(a+180)/360*_,h=(1-Math.log(Math.tan(o*ht)+1/Math.cos(o*ht))/Math.PI)/2*_;for(let E=-m;E<=m;E++)for(let v=-m;v<=m;v++){const T=Math.floor(h)+E;T>=0&&T<_&&this.need(f,((Math.floor(p)+v)%_+_)%_,T,g)}};u-3>=5&&d(u-3,1,1.000012),d(u,Math.min(5,Math.ceil(Math.max(t,i)*l/(40075*c/2**u)/2)+1),1.00002)}for(const d of this.cache.values())d.mesh&&(d.mesh.visible=d.used===this.frame);if(this.pump(),this.cache.size>350){const d=[...this.cache.values()].filter(f=>f.used!==this.frame&&f.state!=="loading").sort((f,m)=>f.used-m.used);for(const f of d.slice(0,this.cache.size-300)){if(f.mesh){this.group.remove(f.mesh),f.mesh.geometry.dispose();const g=f.mesh.material;g.uniforms.map.value.dispose(),g.dispose()}this.cache.delete(f.key);const m=this.queue.indexOf(f);m>=0&&this.queue.splice(m,1)}}}dispose(){this.dead=!0;for(const e of this.cache.values()){if(!e.mesh)continue;e.mesh.geometry.dispose();const t=e.mesh.material;t.uniforms.map.value.dispose(),t.dispose()}this.cache.clear()}}let tl=null;function Og(){return tl??=(async()=>{const[{feature:n},e,t,i,r,s]=await Promise.all([di(()=>import("./src-BnENo9bV.js"),[]),di(()=>import("./countries-50m-DgYPl3oJ.js"),[]).then(u=>u.default),di(()=>import("./index-jfTCx_Xy.js").then(u=>u.i),__vite__mapDeps([0,1,2])).then(u=>u.default),di(()=>import("./en-iHZ2wx5c.js"),[]),di(()=>import("./ar-IVeb1Sj8.js"),[]),di(()=>import("./fr-CwZlK-VA.js"),[])]);for(const u of[i,r,s])t.registerLocale(u.default??u);const o=Jr.startsWith("ar")?"ar":Jr.startsWith("fr")?"fr":"en",a=n(e,e.objects.countries),l=[];for(const u of a.features){const d=String(u.id??"").padStart(3,"0"),f=t.numericToAlpha2(d);if(!f||!u.geometry)continue;const m=u.geometry,g=m.type==="Polygon"?[m.coordinates]:m.type==="MultiPolygon"?m.coordinates:[];if(!g.length)continue;let _=g[0],p=-1;for(const E of g){const v=Qs(E[0]),T=(v[2]-v[0])*(v[3]-v[1]);T>p&&(p=T,_=E)}const h=t.getName(f,"en")??u.properties?.name??f;l.push({code:f.toLowerCase(),en:h,name:t.getName(f,o)??h,polygons:g,bbox:Qs(_[0])})}const c=new Intl.Collator(Jr);return l.sort((u,d)=>c.compare(u.name,d.name))})(),tl}function Qs(n){let e=180,t=90,i=-180,r=-90;for(const[s,o]of n)s<e&&(e=s),s>i&&(i=s),o<t&&(t=o),o>r&&(r=o);return[e,t,i,r]}function nl(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[o,a]=t[r],[l,c]=t[s];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function zg(n,e,t){const i=n.polygons.map(s=>Qs(s[0])),r=new Uint8Array(e.length);for(let s=0;s<e.length;s++){const o=t[s],a=e[s];for(let l=0;l<n.polygons.length;l++){const c=i[l];if(o<c[0]||o>c[2]||a<c[1]||a>c[3])continue;const u=n.polygons[l];if(nl(o,a,u[0])&&!u.slice(1).some(d=>nl(o,a,d))){r[s]=1;break}}}return r}const Bg=n=>n.polygons.flat(),Qn=["modis","viirs","landsat","geo"],Us=/^\d{4}-\d{2}-\d{2}$/;function Gg(n){const e=n.get("date"),t=n.get("range")?.split(".."),i=t&&t.length===2&&Us.test(t[0])&&Us.test(t[1])&&t[0]<=t[1]?[t[0],t[1]]:null,r=d=>n.get(d)?.split(",").map(f=>f.trim()).filter(Boolean)??null,s=r("sensor")?.map(d=>d.toLowerCase()).filter(d=>Qn.includes(d))??null,o=Number(n.get("conf")),a=Number(n.get("frp")),l=n.get("dn"),c=n.get("cam")?.split(",").map(Number),u=n.get("tab");return{date:e&&Us.test(e)?e:null,range:i,country:n.get("country")?.trim()||null,bbox:Fc(n.get("bbox")),sats:r("sats"),sensors:s?.length?s:null,conf:o===1||o===2?o:0,frp:Number.isFinite(a)&&a>0?a:0,dn:l==="day"?1:l==="night"?2:0,cam:c&&c.length===3&&c.every(Number.isFinite)?{lat:c[0],lon:c[1],altKm:c[2]}:null,tab:u==="area"||u==="record"?u:null}}function Hg(n,e){const t=new URLSearchParams(n),i=(r,s)=>s==null||s===""?t.delete(r):t.set(r,s);return"date"in e&&i("date",e.date??null),"range"in e&&i("range",e.range?e.range.join(".."):null),"country"in e&&i("country",e.country??null),"bbox"in e&&i("bbox",e.bbox?e.bbox.join(","):null),"sats"in e&&i("sats",e.sats?.length?e.sats.join(","):null),"sensors"in e&&i("sensor",e.sensors?.length&&e.sensors.length<Qn.length?e.sensors.join(","):null),"conf"in e&&i("conf",e.conf?String(e.conf):null),"frp"in e&&i("frp",e.frp?String(e.frp):null),"dn"in e&&i("dn",e.dn===1?"day":e.dn===2?"night":null),"cam"in e&&i("cam",e.cam?[e.cam.lat,e.cam.lon,Math.round(e.cam.altKm)].join(","):null),"tab"in e&&i("tab",e.tab??null),t}function kg(n){return Math.round((Date.parse(`${n[1]}T00:00:00Z`)-Date.parse(`${n[0]}T00:00:00Z`))/864e5)+1}const Vg=n=>new Date(n*1e3).toISOString().slice(11,16),il=n=>n==null?"–":`${n.toFixed(1)} K ≈ ${(n-273.15).toFixed(0)}°C`;function Wg({record:n,onZoom:e,onGoTo:t}){const i=[ne("m.conf.low"),ne("m.conf.nominalOne"),ne("m.conf.highOne")],r=n.sat.conf==="pct"&&n.confRaw>=0?`${n.confRaw}% → ${i[n.conf]}`:i[n.conf]??"–",s=(o,a,l=!0)=>D.jsx(Ut,{static:!0,title:o,trailing:D.jsx("span",{dir:l?"ltr":void 0,children:a})});return D.jsxs("div",{className:"fm-stack",children:[D.jsxs("p",{className:"fm-note",children:[D.jsxs("span",{style:{color:kn[n.sat.system]},"aria-hidden":!0,children:["■"," "]}),n.sat.symbol," ",n.sat.name," · ",n.sat.instrument," · ",mn(new Date(n.time*1e3).toISOString().slice(0,10))," · ",ne("m.globe.observedAt",{time:Vg(n.time)})]}),D.jsxs(Qt,{header:ne("m.globe.measured"),children:[s(ne("m.globe.f.position"),`${n.lat.toFixed(4)}, ${n.lon.toFixed(4)}`),s("FRP",n.frp==null?"–":`${Lt(n.frp,1)} MW`),s(ne("m.globe.f.conf"),r,!1),s(ne("m.globe.f.dn"),n.dayNight==="N"?ne("m.search.night"):ne("m.search.day"),!1),s(ne("m.globe.f.bright"),il(n.b4)),s(ne("m.globe.f.brightBg"),il(n.b5)),s(ne("m.globe.f.size"),`${n.scanKm.toFixed(2)} × ${n.trackKm.toFixed(2)} km (×${n.growth.toFixed(1)})`),n.version?s(ne("m.globe.f.version"),n.version):null]}),D.jsxs(Qt,{header:ne("m.globe.geometry"),children:[n.altitudeKm==null?null:s(ne("m.globe.f.altitude"),`${Lt(n.altitudeKm)} km`),n.nadirKm==null?null:s(ne("m.globe.f.nadir"),`${Lt(n.nadirKm)} km`),n.viewZenith==null?D.jsx(Ut,{static:!0,title:ne("m.globe.noOrbit")}):s(ne("m.globe.f.vza"),`${n.viewZenith.toFixed(0)}°`)]}),D.jsxs(Qt,{header:ne("m.globe.nearby"),footer:ne("m.globe.nearbyHint"),children:[D.jsx(Ut,{static:!0,title:ne("m.globe.samePass",{count:n.samePass}),trailing:D.jsxs("span",{dir:"ltr",children:[Lt(n.samePassFrp,1)," MW"]})}),n.others.length?n.others.map(o=>D.jsx(Ut,{static:!0,title:`${o.sat.symbol} ${o.sat.name}`,trailing:`${o.count}×`},o.sat.code)):D.jsx(Ut,{static:!0,title:ne("m.globe.noOthers")})]}),D.jsxs("div",{className:"fm-actions",children:[D.jsxs(gn,{variant:"tonal",onClick:e,children:[D.jsx(El,{"aria-hidden":!0}),ne("m.globe.zoomIn")]}),D.jsxs(gn,{variant:"text",onClick:t,children:[D.jsx(zc,{"aria-hidden":!0}),ne("m.globe.goToTime")]})]})]})}function Xg({bbox:n,date:e,regions:t,stats:i,sats:r,onZoom:s,onRedraw:o,onClear:a}){return D.jsxs("div",{className:"fm-stack",children:[D.jsx("p",{className:"fm-note",children:D.jsx("span",{dir:"ltr",children:Sc(n)})}),D.jsxs("div",{className:"fm-actions",children:[D.jsxs(gn,{variant:"tonal",onClick:s,children:[D.jsx(El,{"aria-hidden":!0}),ne("m.globe.zoomTo")]}),D.jsxs(gn,{variant:"text",onClick:o,children:[D.jsx(ta,{"aria-hidden":!0}),ne("m.globe.redraw")]}),D.jsxs(gn,{variant:"text",onClick:a,children:[D.jsx(yc,{"aria-hidden":!0}),ne("m.globe.clearBox")]})]}),i?D.jsxs(Qt,{header:ne("m.globe.inBox"),footer:ne("m.globe.inBoxHint"),children:[D.jsx(Ut,{static:!0,title:ne("m.globe.visible"),trailing:Lt(i.total)}),D.jsx(Ut,{static:!0,title:ne("m.globe.frpSum"),trailing:D.jsxs("span",{dir:"ltr",children:[Lt(i.frp,0)," MW"]})}),i.bySat.map((l,c)=>l?D.jsx(Ut,{static:!0,leading:D.jsx("i",{className:"fm-swatch",style:{background:kn[r[c].system]},"aria-hidden":!0}),title:D.jsx("span",{dir:"ltr",children:`${r[c].symbol} ${r[c].name}`}),trailing:Lt(l)},r[c].code):null)]}):null,e?D.jsx(jg,{bbox:n,date:e,regions:t}):D.jsx(nr,{tone:"info",icon:D.jsx(zs,{size:16}),children:ne("m.globe.rangeConversion")})]})}function jg({bbox:n,date:e,regions:t}){const i=`${n.join(",")}|${e}`,r=Oc(i,l=>Is.live({bbox:n.join(","),date:e},l)),s=r.data,o=n?t.find(l=>n[0]>=l.bbox[0]-.01&&n[1]>=l.bbox[1]-.01&&n[2]<=l.bbox[2]+.01&&n[3]<=l.bbox[3]+.01):null,a=[["ensemble",ne("m.alg.ensemble")],["frp_season",ne("m.alg.frp_season_adaptive")],["ratio_month",ne("m.alg.ratio_month_adaptive")],["ratio",ne("m.alg.ratio")]];return D.jsx(D.Fragment,{children:r.error&&!s?D.jsx(cl,{title:ne("m.live.failed"),message:Fs(r.error),onRetry:r.reload}):s?D.jsxs("div",{className:"fm-stack","aria-busy":r.loading||void 0,children:[D.jsx("p",{className:"fm-note",children:mn(s.date||e)}),o?D.jsx(nr,{tone:"info",icon:D.jsx(zs,{size:16}),children:ne("m.live.inside",{region:o.title})}):null,D.jsxs("section",{className:"fm-stack","aria-label":ne("m.live.perSat"),children:[D.jsx("h3",{className:"fm-subhead",children:ne("m.live.perSat")}),s.satellites.length?D.jsxs(fa,{label:ne("m.live.perSat"),children:[D.jsx("thead",{children:D.jsxs("tr",{children:[D.jsx(fi,{children:ne("m.live.satellite")}),D.jsx(fi,{numeric:!0,children:ne("m.live.rows")}),D.jsx(fi,{numeric:!0,children:ne("m.live.cells")})]})}),D.jsx("tbody",{children:s.satellites.map(l=>D.jsxs("tr",{children:[D.jsx(Pn,{children:D.jsx("span",{dir:"ltr",children:l.name})}),D.jsx(Pn,{numeric:!0,children:Lt(l.rows)}),D.jsx(Pn,{numeric:!0,children:l.fire_day_cells==null?"–":Lt(l.fire_day_cells)})]},l.code))})]}):D.jsx("p",{className:"fm-note",children:ne("m.live.none")})]}),D.jsxs("section",{className:"fm-stack","aria-label":ne("m.live.converted"),children:[D.jsx("h3",{className:"fm-subhead",children:ne("m.live.converted")}),D.jsx("p",{className:"fm-note",children:s.calibration.kind==="region"?ne("m.live.calRegion",{region:s.calibration.title??s.calibration.region??""}):ne("m.live.calGlobal")}),s.conversions.length?D.jsxs(fa,{label:ne("m.live.converted"),children:[D.jsx("thead",{children:D.jsxs("tr",{children:[D.jsx(fi,{children:ne("m.live.from")}),D.jsx(fi,{numeric:!0,children:ne("m.live.cells")}),a.map(([l,c])=>D.jsx(fi,{numeric:!0,children:c},l))]})}),D.jsxs("tbody",{children:[s.conversions.map(l=>D.jsxs("tr",{children:[D.jsx(Pn,{children:D.jsx("span",{dir:"ltr",children:l.name})}),D.jsx(Pn,{numeric:!0,children:Lt(l.cells)}),a.map(([c])=>D.jsx(Pn,{numeric:!0,"data-best":c==="ensemble"||void 0,children:Lt(l[c],1)},c))]},l.code)),D.jsxs("tr",{children:[D.jsx(Pn,{children:D.jsx("strong",{children:ne("m.live.aquaActual")})}),D.jsx(Pn,{numeric:!0,colSpan:a.length+1,children:D.jsx("strong",{children:Lt(s.aqua.fire_day_cells)})})]})]})]}):D.jsx("p",{className:"fm-note",children:ne("m.live.noViirs")}),D.jsx(nr,{tone:"warning",icon:D.jsx(zs,{size:16}),children:ne("m.live.aquaNote",{time:s.aqua.overpass_local??"15:15"})})]})]}):D.jsx(hl,{label:ne("m.live.loading")})})}const rl=["60","600","3600"],sl=["3600","21600","86400"],Ns=[0,5,20,100],qg=()=>new Date().toISOString().slice(0,10),Di=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10),oc=["modis","viirs","landsat","geo"];async function lc(n,e){const t=await fetch(n,{credentials:"same-origin",signal:e}),i=await t.json().catch(()=>({}));if(!t.ok&&t.status!==202){const r=typeof i?.error=="string"?i.error:i?.error?.message??`HTTP ${t.status}`;throw new pl(t.status,r)}return i}async function Yg(n,e,t){for(let i=0;i<200;i++){const r=await lc(Is.dayUrl(n??void 0),e);if(r.cols&&r.sats)return r;const s=typeof r.job=="string"?{id:r.job,status:"queued"}:r.job??{id:"",status:"queued"};if(t(s),s.status==="failed")throw new Error(s.log_tail||ne("m.globe.buildFailed"));if(await new Promise(o=>setTimeout(o,2500)),s.id)try{const o=await Is.job(s.id);if(t(o),o.status==="failed")throw new Error(o.log_tail||ne("m.globe.buildFailed"))}catch(o){if(o instanceof pl&&o.status===404)continue;throw o}}throw new Error(ne("m.globe.buildFailed"))}function Kg(n,e){const t=new URLSearchParams({from:n[0],to:n[1],bbox:e.bbox.map(i=>Math.round(i*1e3)/1e3).join(",")});return e.country&&t.set("country",e.country),`/api/range?${t}`}const zi=n=>n.toLowerCase().normalize("NFKD").replace(/[̀-ًͯ-ٟ]/g,"").replace(/[أإآ]/g,"ا").trim();function $g(n,e){if(!e)return null;const t=zi(e);return n.find(i=>i.code===t)??n.find(i=>zi(i.en)===t||zi(i.name)===t)??null}function l0(){const{regions:n}=Ec(),[e,t]=bc(),i=Fe.useMemo(()=>Gg(e),[e]),r=Fe.useCallback((B,he=!1)=>t(le=>Hg(le,B),{replace:!he}),[t]),[s,o]=Fe.useState(null);Fe.useEffect(()=>{let B=!0;return Og().then(he=>B&&o(he)).catch(()=>B&&o([])),()=>{B=!1}},[]);const a=Fe.useMemo(()=>s?$g(s,i.country):null,[s,i.country]),l=a?{country:a.en,bbox:a.bbox}:i.bbox?{country:null,bbox:i.bbox}:null,c=!!i.range,u=i.range&&l?Kg(i.range,l):null,d=c&&i.country&&!s,f=u??(d?null:`day|${i.date??""}`),[m,g]=Fe.useState({state:"loading"}),[_,p]=Fe.useState(0);Fe.useEffect(()=>{if(!f)return;const B=new AbortController;return g(le=>({state:"loading",data:le.data})),(u?lc(u,B.signal):Yg(i.date,B.signal,le=>g(ve=>({...ve,state:"building",job:le})))).then(le=>g({state:"ready",data:le})).catch(le=>{B.signal.aborted||g({state:"error",error:Fs(le)})}),()=>B.abort()},[f,_]);const h=m.state==="ready"?m.data:void 0,E=!!h?.range,v=Fe.useRef(null),T=Fe.useRef(null),[S,x]=Fe.useState(!1),[w,N]=Fe.useState(0),[y,A]=Fe.useState(!1),[F,O]=Fe.useState("600"),[W,P]=Fe.useState(0),[U,G]=Fe.useState(null),Z=Fe.useRef(r);Z.current=r,Fe.useLayoutEffect(()=>{if(!h||!v.current)return;let B=!1;const he=window.setTimeout(()=>{if(!(B||!v.current))try{const le=new Ig(v.current,h,{onPick:Ae=>{G(Ae),Ae&&Z.current({tab:"record"})},onBoxPoint:(Ae,Pe)=>{P(Ae===2?0:2),Pe&&Z.current({bbox:Pe,tab:"area"},!0)},onTick:(Ae,Pe)=>{N(Ae),A(Pe)}});T.current=le;const ve=h.range?sl[2]:rl[1];O(ve),le.setSpeed(Number(ve)),x(!0)}catch(le){g({state:"error",error:Fs(le)})}},30);return()=>{B=!0,window.clearTimeout(he);const le=T.current?.cameraView();T.current?.dispose(),T.current=null,x(!1),G(null),le&&(Y.current=le)}},[h]);const Y=Fe.useRef(null);Fe.useEffect(()=>{S&&Y.current&&(T.current?.flyToView(Y.current),Y.current=null)},[S]);const j=h?.sats??[],K=Fe.useMemo(()=>j.map((B,he)=>!!h?.cols.sat.includes(he)),[h,j]),J=Fe.useMemo(()=>j.map(B=>(!i.sats||i.sats.includes(B.code))&&(!i.sensors||i.sensors.includes(oc[B.system]))),[j,i.sats,i.sensors]),te=`${J.join()}|${i.conf}|${i.frp}|${i.dn}`;Fe.useEffect(()=>{S&&T.current?.setFilters({sats:J,minConf:i.conf,minFrp:i.frp,dayNight:i.dn})},[S,te]);const k=Fe.useRef(null);Fe.useEffect(()=>{const B=T.current;if(!(!S||!B||!h)){if(!a){B.setAreaMask(null),B.setOutline(null),k.current=null;return}B.setAreaMask(zg(a,h.cols.lat,h.cols.lon)),B.setOutline(Bg(a)),k.current!==a.code&&!i.cam&&!i.bbox&&B.flyToBox(a.bbox),k.current=a.code}},[S,h,a]);const ee=i.bbox?.join(",")??"";Fe.useEffect(()=>{!S||!T.current||(T.current.setBox(i.bbox),i.bbox&&!i.cam&&T.current.flyToBox(i.bbox))},[S,ee]);const Q=i.cam?`${i.cam.lat},${i.cam.lon},${i.cam.altKm}`:"";Fe.useEffect(()=>{S&&i.cam&&T.current?.flyToView(i.cam)},[S,Q]);const[ae,ge]=Fe.useState(null),[Se,Re]=Fe.useState(null),Ee=Math.floor(w/(E?3600:300));Fe.useEffect(()=>{const B=T.current;!S||!B||(ge(B.stats()),Re(i.bbox?B.stats(i.bbox):null))},[S,te,a,ee,Ee]),Fe.useEffect(()=>(pa(()=>({mode:h?.range?"range":"day",shown:h?.range?{from:h.range[0],to:h.range[1],source:h.source}:{day:h?.window[0]},country:a?{code:a.code,name:a.en}:null,camera:T.current?.cameraView()??null,visible_records:ae?.total??null,visible_frp_mw:ae?Math.round(ae.frp):null,per_satellite:ae?Object.fromEntries(j.map((B,he)=>[B.code,ae.bySat[he]]).filter(([,B])=>B)):null,selected_record:U?{satellite:U.sat.code,lat:U.lat,lon:U.lon,time:new Date(U.time*1e3).toISOString(),frp:U.frp}:null})),()=>pa(null)),[h,a,ae,j,U]);const[Ue,H]=Fe.useState(null),[ze,_e]=Fe.useState(null),ye=B=>{_e(B==="day"?h&&!h.range?h.window[0]:i.date??Di(1):i.range?{from:i.range[0],to:i.range[1]}:{from:Di(30),to:Di(1)}),H(B)},xe=!!(i.bbox||U),Le=i.tab==="record"&&U?"record":i.bbox?"area":"record",Te=()=>{G(null),T.current?.clearSelection(),r({bbox:null,tab:null})},b=T.current,M=b?.span??86400,z=b?.tMin??0,re=i.range?`${mn(i.range[0])} → ${mn(i.range[1])}`:h&&!h.range?mn(h.window[0]):i.date?mn(i.date):ne("m.globe.today"),se=m.state==="loading"||m.state==="building"||!!h&&!S;return D.jsxs("div",{className:"fm-globe",children:[D.jsx("div",{ref:v,className:"fm-globe-host"}),D.jsx(Tc,{children:D.jsxs(Ac,{label:ne("m.globe.period"),children:[D.jsxs(gn,{variant:"ghost",appearance:"toolbar",onClick:()=>ye(i.range?"range":"day"),"aria-label":ne("m.globe.pickPeriod",{period:re}),children:[i.range?D.jsx(ml,{"aria-hidden":!0}):D.jsx(ul,{"aria-hidden":!0}),D.jsx("span",{className:"lab-control-label",children:re})]}),D.jsx(ea,{variant:"ghost",appearance:"toolbar","aria-label":ne("m.globe.home"),onClick:()=>T.current?.flyHome(),disabled:!S,children:D.jsx(wc,{})})]})}),D.jsx(Rc,{children:W?D.jsxs(gn,{variant:"tonal",onClick:()=>{T.current?.setDrawing(!1),T.current?.setBox(i.bbox),P(0)},children:[D.jsx(dl,{"aria-hidden":!0}),D.jsx("span",{className:"lab-control-label",children:ne("m.globe.cancelBox")})]}):D.jsxs(gn,{variant:"filled",disabled:!S,onClick:()=>{T.current?.setDrawing(!0),P(1)},children:[D.jsx(ta,{"aria-hidden":!0}),D.jsx("span",{className:"lab-control-label",children:ne("m.globe.drawBox")})]})}),!h||m.state==="error"?D.jsx("div",{className:"fm-globe-overlay",children:D.jsx("div",{className:"fm-globe-card",children:m.state==="error"?D.jsx(cl,{title:ne("m.globe.failed"),message:m.error??"",onRetry:()=>p(B=>B+1)}):D.jsxs(D.Fragment,{children:[D.jsx(hl,{label:m.state==="building"?ne("m.globe.building"):u?ne("m.globe.loadingRange"):ne("m.globe.loading")}),m.job?.log_tail?D.jsx("pre",{className:"fm-log",dir:"ltr",children:m.job.log_tail}):null]})})}):se?D.jsx("div",{className:"fm-globe-busy",role:"status",children:m.state==="ready"?ne("m.globe.preparing"):u?ne("m.globe.loadingRange"):ne("m.globe.loading")}):null,W?D.jsx("div",{className:"fm-globe-hint",role:"status",children:W===1?ne("m.globe.dragBox"):ne("m.globe.secondCorner")}):null,D.jsx(Zg,{g:i,patch:r,countries:s,country:a,data:h,present:K,satMask:J,stats:ae,wantsRangeArea:c&&!l,onPeriod:ye,onDraw:()=>{T.current?.setDrawing(!0),P(1)},timeline:S&&b?D.jsx(Jg,{engine:b,simT:w,playing:y,speed:F,speeds:E?sl:rl,isRange:E,onPlay:()=>{b.setPlaying(!y),A(!y)},onSpeed:B=>{O(B),b.setSpeed(Number(B))},onSeek:B=>{b.setPlaying(!1),b.setTime(B),N(B)},span:M,tMin:z}):D.jsx("p",{className:"fm-note fm-tl-wait",children:ne("m.globe.preparing")})}),D.jsx(fl,{open:xe,onOpenChange:B=>B?void 0:Te(),label:ne("m.globe.inspector"),regular:"pane",paneWidth:400,modal:!1,header:D.jsx("div",{className:"fm-inspector-head",children:i.bbox&&U?D.jsx(Ui,{label:ne("m.globe.inspector"),value:Le,onChange:B=>r({tab:B}),options:[{value:"area",label:ne("m.globe.tabArea")},{value:"record",label:ne("m.globe.tabRecord")}]}):D.jsx("strong",{className:"fm-inspector-title",children:Le==="area"?ne("m.globe.tabArea"):ne("m.globe.record")})}),children:Le==="record"&&U?D.jsx(Wg,{record:U,onZoom:()=>T.current?.zoomToSelection(),onGoTo:()=>T.current?.setTime(U.time-z-60)}):i.bbox?D.jsx(Xg,{bbox:i.bbox,date:h&&!h.range?h.window[0]:null,regions:n.map(B=>({name:B.name,title:Cc(B),bbox:B.bbox})),stats:Se,sats:j,onZoom:()=>i.bbox&&T.current?.flyToBox(i.bbox),onRedraw:()=>{T.current?.setDrawing(!0),P(1)},onClear:()=>r({bbox:null,tab:U?"record":null})}):null}),D.jsx(Nc,{open:Ue!==null,label:Ue==="range"?ne("m.globe.pickRangeTitle"):ne("m.globe.pickDayTitle"),close:()=>H(null),formId:"firms-globe-period",dir:Os,config:Ue==="range"?{type:"dateRange",min:"2000-11-01",max:qg()}:{type:"date",max:Di(1),min:Di(60)},intro:Ue==="range"?ne("m.globe.pickRangeHint"):ne("m.globe.pickDayHint"),value:ze,onChange:_e,resetKey:Ue,onSubmit:B=>{if(B.preventDefault(),Ue==="day"&&typeof ze=="string"&&ze)r({date:ze,range:null},!0),H(null);else if(Ue==="range"&&ze&&typeof ze=="object"&&ze.from&&ze.to){const he=ze.from<=ze.to?[ze.from,ze.to]:[ze.to,ze.from];r({range:he},!0),H(null)}}})]})}function Zg({g:n,patch:e,countries:t,country:i,data:r,present:s,satMask:o,stats:a,wantsRangeArea:l,onPeriod:c,onDraw:u,timeline:d}){const[f,m]=Fe.useState(""),g=Fe.useMemo(()=>{if(!f.trim()||!t)return[];const x=zi(f);return t.filter(w=>zi(w.name).includes(x)||zi(w.en).includes(x)||w.code===x).slice(0,40)},[f,t]),_=r?.sats??[],p=x=>!n.sensors||n.sensors.includes(x),h=Qn.filter((x,w)=>_.some((N,y)=>s[y]&&N.system===w)),E=(x,w)=>{const N=n.sensors??[...Qn],y=w?[...new Set([...N,x])]:N.filter(A=>A!==x);e({sensors:y.length===Qn.length?null:y})},v=(x,w)=>{const N=_.filter((F,O)=>s[O]).map(F=>F.code),y=n.sats??N,A=w?[...new Set([...y,x])]:y.filter(F=>F!==x);e({sats:A.length>=N.length?null:A})},T=!!(n.sats||n.sensors||n.conf||n.frp||n.dn||n.country),S=n.range?kg(n.range):0;return D.jsx(fl,{open:!0,onOpenChange:()=>{},label:ne("m.globe.filters"),detents:["peek","medium","large"],defaultDetent:"peek",dismissible:!1,backgroundInteraction:"medium",regular:"card",cardWidth:380,modal:!1,header:D.jsxs("div",{className:"fm-filters-head","data-lab-sheet-handle":"",children:[D.jsx(Ic,{variant:"tonal",placeholder:i?i.name:ne("m.globe.searchCountry"),"aria-label":ne("m.globe.searchCountry"),leadingIcon:D.jsx(Lc,{size:18}),value:f,onValueChange:m,autoComplete:"off"}),d]}),children:f.trim()?D.jsx(Qt,{header:ne("m.globe.countries"),children:t?g.length?g.map(x=>D.jsx(Ut,{leading:D.jsx(ga,{size:18,"aria-hidden":!0}),title:x.name,subtitle:x.name!==x.en?x.en:void 0,selected:i?.code===x.code,onClick:()=>{e({country:x.code,bbox:null,cam:null},!0),m("")}},x.code)):D.jsx(Ut,{static:!0,title:ne("m.globe.noCountry")}):D.jsx(Ut,{static:!0,title:ne("m.common.loading")})}):D.jsxs("div",{className:"fm-stack fm-filters",children:[a?D.jsxs("p",{className:"fm-note fm-filters-count",children:[ne("m.globe.showing",{count:Lt(a.total),frp:Lt(a.frp,0)}),r?.truncated?` · ${ne("m.globe.truncated")}`:""]}):null,r?.note?D.jsx(nr,{tone:"info",children:r.note}):null,D.jsxs(Qt,{header:ne("m.globe.period"),footer:n.range?ne("m.globe.rangeFoot",{days:S}):ne("m.globe.dayFoot"),children:[D.jsxs("div",{className:"fm-filter-row",children:[D.jsx(Ui,{label:ne("m.globe.period"),value:n.range?"range":"day",onChange:x=>x==="day"?e({range:null},!0):c("range"),options:[{value:"day",label:ne("m.globe.oneDay")},{value:"range",label:ne("m.globe.range")}]}),D.jsxs(gn,{variant:"text",onClick:()=>c(n.range?"range":"day"),children:[n.range?D.jsx(ml,{"aria-hidden":!0}):D.jsx(ul,{"aria-hidden":!0}),n.range?`${mn(n.range[0])} → ${mn(n.range[1])}`:mn(r&&!r.range?r.window[0]:n.date??Di(1))]})]}),l?D.jsx(nr,{tone:"warning",children:ne("m.globe.rangeNeedsArea")}):null]}),D.jsxs(Qt,{header:ne("m.globe.area"),children:[i?D.jsx(Ut,{leading:D.jsx(ga,{size:18,"aria-hidden":!0}),title:i.name,trailing:D.jsx(ea,{variant:"ghost","aria-label":ne("m.globe.clearCountry"),onClick:()=>e({country:null}),children:D.jsx(dl,{})}),static:!0}):D.jsx(Ut,{static:!0,title:ne("m.globe.everywhere"),subtitle:ne("m.globe.searchAbove")}),D.jsx(Ut,{leading:D.jsx(ta,{size:18,"aria-hidden":!0}),title:n.bbox?ne("m.globe.redraw"):ne("m.globe.drawBox"),onClick:u})]}),h.length>1?D.jsx(Qt,{header:ne("m.globe.sensors"),children:D.jsx("div",{className:"fm-chips",children:h.map(x=>D.jsx(ma,{controlSize:"small",label:D.jsxs("span",{className:"fm-chip-label",children:[D.jsx("i",{className:"fm-swatch",style:{background:kn[Qn.indexOf(x)]},"aria-hidden":!0}),ne(`m.globe.sensor.${x}`),a?D.jsxs("small",{children:[" ",Lt(a.bySystem[Qn.indexOf(x)])]}):null]}),checked:p(x),onCheckedChange:w=>E(x,w)},x))})}):null,D.jsx(Qt,{header:ne("m.globe.satellites"),children:_.map((x,w)=>s[w]?D.jsx(Ut,{leading:D.jsx("i",{className:"fm-swatch",style:{background:kn[x.system]},"aria-hidden":!0}),title:D.jsx("span",{dir:"ltr",children:`${x.symbol} ${x.name}`}),subtitle:x.instrument,trailing:D.jsxs("span",{className:"fm-sat-trail",children:[a?D.jsx("small",{children:Lt(a.bySat[w])}):null,D.jsx(ma,{controlSize:"small","aria-label":x.name,checked:o[w],disabled:!p(oc[x.system]),onCheckedChange:N=>v(x.code,N)})]}),static:!0},x.code):null)}),D.jsx(Qt,{header:ne("m.globe.confidence"),children:D.jsx("div",{className:"fm-filter-row",children:D.jsx(Ui,{label:ne("m.globe.confidence"),value:String(n.conf),onChange:x=>e({conf:Number(x)}),options:[{value:"0",label:ne("m.conf.all")},{value:"1",label:ne("m.conf.nominal")},{value:"2",label:ne("m.conf.high")}]})})}),D.jsx(Qt,{header:ne("m.globe.minFrp"),footer:n.frp&&!Ns.includes(n.frp)?ne("m.globe.frpCustom",{frp:n.frp}):void 0,children:D.jsx("div",{className:"fm-filter-row",children:D.jsx(Ui,{label:ne("m.globe.minFrp"),value:String(Ns.includes(n.frp)?n.frp:0),onChange:x=>e({frp:Number(x)}),options:Ns.map(x=>({value:String(x),label:x?`≥ ${x} MW`:ne("m.conf.all")}))})})}),D.jsx(Qt,{header:ne("m.globe.dayNight"),children:D.jsx("div",{className:"fm-filter-row",children:D.jsx(Ui,{label:ne("m.globe.dayNight"),value:String(n.dn),onChange:x=>e({dn:Number(x)}),options:[{value:"0",label:ne("m.conf.all")},{value:"1",label:ne("m.search.day")},{value:"2",label:ne("m.search.night")}]})})}),T?D.jsxs(gn,{variant:"text",onClick:()=>e({sats:null,sensors:null,conf:0,frp:0,dn:0,country:null}),children:[D.jsx(Pc,{"aria-hidden":!0}),ne("m.globe.resetFilters")]}):null]})})}function Jg({engine:n,simT:e,playing:t,speed:i,speeds:r,isRange:s,onPlay:o,onSpeed:a,onSeek:l,span:c,tMin:u}){const d=g=>new Date((u+g)*1e3).toISOString(),f=s?`${mn(d(e).slice(0,10))} ${d(e).slice(11,16)}`:`${d(e).slice(11,16)} UTC`,m=g=>s?ne(`m.globe.speedRange.${g}`):`${g}×`;return D.jsxs("section",{className:"fm-tl","aria-label":ne("m.globe.timeline"),children:[D.jsxs("div",{className:"fm-tl-row",children:[D.jsx(ea,{variant:"tonal",controlSize:"small","aria-label":t?ne("m.globe.pause"):ne("m.globe.play"),onClick:o,children:t?D.jsx(Gc,{}):D.jsx(Hc,{})}),D.jsx("span",{className:"fm-tl-clock",dir:"ltr",children:f}),D.jsx(Ui,{label:ne("m.globe.speed"),className:"fm-segmented-box",value:i,onChange:a,options:r.map(g=>({value:g,label:m(g)}))})]}),D.jsx(Qg,{engine:n,simT:e,onSeek:l}),D.jsx(Dc,{label:ne("m.globe.time"),trackStyle:"thin",controlSize:"small",min:-600,max:Math.round(c),step:s?600:10,value:e,onValueChange:l,getValueText:g=>s?`${d(g).slice(0,10)} ${d(g).slice(11,16)} UTC`:`${d(g).slice(11,16)} UTC`})]})}function Qg({engine:n,simT:e,onSeek:t}){const i=Fe.useRef(null);return Fe.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight;if(!s)return;const a=devicePixelRatio;r.width=s*a,r.height=o*a;const l=r.getContext("2d");l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,s,o);const c=n.span+600,u=Os==="rtl",d=_=>{const p=(_+600)/c*s;return u?s-p:p},f=n.bins[0].length;let m=1;for(let _=0;_<f;_++)m=Math.max(m,n.bins.reduce((p,h)=>p+h[_],0));const g=Math.max(1,Math.abs(d(n.binSize)-d(0))-1);for(let _=0;_<f;_++){let p=o;n.bins.forEach((h,E)=>{const v=h[_]/m*(o-4);l.fillStyle=kn[E];const T=d(u?(_+1)*n.binSize:_*n.binSize);l.fillRect(T,p-v,g,v),p-=v})}l.fillStyle=getComputedStyle(r).color,l.fillRect(d(e)-1,0,2,o)},[n,e]),D.jsx("canvas",{ref:i,className:"fm-tl-hist","aria-hidden":!0,onClick:r=>{const s=r.currentTarget.getBoundingClientRect(),o=(r.clientX-s.left)/s.width;t((Os==="rtl"?1-o:o)*(n.span+600)-600)}})}export{l0 as default};
