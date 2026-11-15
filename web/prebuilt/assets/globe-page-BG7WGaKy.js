const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DXVKXpnD.js","assets/index-Cab-4T-w.js","assets/index-CQvqx5gp.css"])))=>i.map(i=>d[i]);
import{c as li,I as dc,r as Oe,J as fc,K as ol,j as I,O as ll,Q as cl,R as pc,U as mc,V as Or,W as gc,X as la,Y as _c,_ as ui,Z as Zr,t as ne,$ as Kn,h as St,a0 as vc,N as er,m as Us,E as hl,e as Is,L as ul,q as ca,s as di,v as Rn,u as xc,a1 as Mc,a2 as ha,a3 as Sc,a4 as Vi,a5 as fi,a6 as yc,S as Ec,B as hr,a7 as bc,a8 as ua,g as da,a9 as Tc,aa as dl,ab as fl,M as Ac,ac as wc,ad as fa,ae as Rc,af as Cc,ag as pa}from"./index-Cab-4T-w.js";import{C as Pc,N as Lc,F as Dc}from"./filter-bar-CCXPPSAP.js";import{P as ma,T as Uc}from"./text-field-CPUEcSLk.js";import{p as Ic}from"./bbox-D104tjyD.js";import{u as Nc}from"./use-remote-B5NjO7JE.js";import{I as Ns}from"./info-DAd_syQ-.js";import{D as Fc}from"./download-Sbvpnynu.js";import"./modal-D5i-7mVx.js";const pl={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};pl.node;const Oc=li(pl);const ml={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};ml.node;const zc=li(ml);const gl={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};gl.node;const Bc=li(gl);const _l={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};_l.node;const Gc=li(_l);const vl={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};vl.node;const Hc=li(vl);const xl={name:"square-dashed",size:24,node:[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aliases:["box-select"]};xl.node;const ga=li(xl);const Ml={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};Ml.node;const _a=li(Ml),Sl=.55;function kc(n,e,t){const i=t.row*Sl;if(n>i&&t.fullLeading&&t.leading)return{offset:t.row,commit:"leading"};if(n<-i&&t.fullTrailing&&t.trailing)return{offset:-t.row,commit:"trailing"};const r=dc(n,e,.99);return r>t.leading/2&&t.leading&&n>0?{offset:t.leading,commit:null}:r<-t.trailing/2&&t.trailing&&n<0?{offset:-t.trailing,commit:null}:{offset:0,commit:null}}function Vc(n,e){const t=e.row*Sl;return n>t&&e.fullLeading&&e.leading>0||n<-t&&e.fullTrailing&&e.trailing>0}function Wc(n,e,t){const i=[];let r=0;for(const a of n)i.push(r),r+=a;const s=i[e]+n[e]/2+t;let o=e;for(let a=e+1;a<n.length;a++)s>i[a]+n[a]/2&&(o=a);for(let a=e-1;a>=0;a--)s<i[a]+n[a]/2&&(o=a);return o}function Xc(n,e,t){return n.map((i,r)=>r===e?0:e<t&&r>e&&r<=t?-n[e]:t<e&&r>=t&&r<e?n[e]:0)}function jc(n,e,t){let i=0;if(t>e)for(let r=e+1;r<=t;r++)i+=n[r];else for(let r=t;r<e;r++)i-=n[r];return i}const yl=Oe.createContext({enabled:!1});function pn({header:n,footer:e,children:t,className:i,label:r,onReorder:s}){const o=Oe.useId(),a=Oe.useRef(null),l=Oe.useRef(null),[c,h]=Oe.useState(""),d=Oe.useRef(s);d.current=s,Oe.useLayoutEffect(()=>{if(!l.current)return;const _=l.current;l.current=null,fc(_,{spring:Or.snappy})});const f=()=>a.current?Array.from(a.current.children):[],m=(_,p)=>{l.current=gc(f()),d.current?.(_,p),h(`Moved to position ${p+1} of ${f().length}.`)};Oe.useEffect(()=>{const _=a.current;if(!_||!s)return;let p=null,u=null;const y=(M,E,b)=>{M.style.transform=b?`translate3d(0, ${E}px, 0) scale(1.02)`:`translate3d(0, ${E}px, 0)`},v=()=>{const M=p;if(!M)return;const E=(M.scroller?.scrollTop??0)-M.scrollStart,b=_c(M.dy+E,M.bounds[0],M.bounds[1],200);M.offsets[M.from].set(b);const D=Wc(M.heights,M.from,b);D!==M.to&&(M.to=D,Xc(M.heights,M.from,D).forEach((S,w)=>{w!==M.from&&M.offsets[w].animateTo(S,{spring:Or.snappy})}))},T=()=>{const M=p;if(!M||(M.frame=requestAnimationFrame(T),!M.scroller))return;const E=M.scroller.getBoundingClientRect(),b=64,D=M.pointerY<E.top+b?-((E.top+b-M.pointerY)/b)*14:M.pointerY>E.bottom-b?(M.pointerY-(E.bottom-b))/b*14:0;D&&(M.scroller.scrollTop+=D,v())};return ol(_,()=>({axis:"y",threshold:2,canBegin:({target:M})=>(u=M?.closest("[data-lab-reorder-handle]")??null,!!u),onStart:({originY:M})=>{const E=f(),b=E.findIndex(F=>!!u&&F.contains(u));if(b<0)return;const D=E.map(F=>F.getBoundingClientRect().height);let S=_.parentElement;for(;S&&!/(auto|scroll)/.test(getComputedStyle(S).overflowY);)S=S.parentElement;const w=D.slice(0,b).reduce((F,V)=>F+V,0),O=D.slice(b+1).reduce((F,V)=>F+V,0);p={from:b,to:b,heights:D,nodes:E,offsets:E.map((F,V)=>{const L=new cl(0,.25);return L.subscribe(N=>y(F,N,V===b)),L}),scroller:S,scrollStart:S?.scrollTop??0,dy:0,bounds:[-w,O],frame:0,pointerY:M},E[b].dataset.lifted="",_.dataset.reordering="",y(E[b],0,!0),p.frame=requestAnimationFrame(T)},onMove:({dy:M,originY:E})=>{p&&(p.dy=M,p.pointerY=E+M,v())},onEnd:()=>{const M=p;if(p=null,!M)return;cancelAnimationFrame(M.frame);const E=()=>{delete M.nodes[M.from].dataset.lifted,delete _.dataset.reordering,M.offsets.forEach(D=>D.stop()),M.to!==M.from&&m(M.from,M.to),M.nodes.forEach(D=>{M.to===M.from&&(D.style.transform="")})},b=jc(M.heights,M.from,M.to);M.offsets[M.from].animateTo(b,{spring:Or.release}).then(D=>D&&E())}}))},[!!s]);const g=_=>{const p=_.target.closest("[data-lab-reorder-handle]");if(!p||!s||_.key!=="ArrowUp"&&_.key!=="ArrowDown")return;const u=f(),y=u.findIndex(T=>T.contains(p)),v=y+(_.key==="ArrowUp"?-1:1);y<0||v<0||v>=u.length||(_.preventDefault(),m(y,v))};return I.jsxs("section",{className:ll("lab-list-section",i),"aria-labelledby":n?o:void 0,"aria-label":n?void 0:r,children:[n&&I.jsx("h3",{id:o,className:"lab-list-header",children:n}),I.jsx(yl.Provider,{value:{enabled:!!s},children:I.jsx("div",{ref:a,className:"lab-list-card",role:"list",onKeyDown:s?g:void 0,children:t})}),e&&I.jsx("p",{className:"lab-list-footer",children:e}),s&&I.jsx("span",{className:"lab-sr-only",role:"status",children:c})]})}const Jr=76;let Wi=null;const At=Oe.forwardRef(function({title:e,subtitle:t,leading:i,trailing:r,chevron:s,selected:o,asChild:a,static:l,leadingActions:c,trailingActions:h,fullSwipe:d=!0,reorderLabel:f,className:m,children:g,..._},p){const u=Oe.useContext(yl),y=Oe.useRef(null),v=!!(c?.length||h?.length),[T,M]=Oe.useState(null),[E,b]=Oe.useState(null),D=Oe.useRef(null);D.current||(D.current=new cl(0,.25));const S=Oe.useRef({leadingActions:c,trailingActions:h,fullSwipe:d});S.current={leadingActions:c,trailingActions:h,fullSwipe:d};const w=()=>!!y.current&&getComputedStyle(y.current).direction==="rtl",O=()=>({leading:(S.current.leadingActions?.length??0)*Jr,trailing:(S.current.trailingActions?.length??0)*Jr,row:y.current?.clientWidth??360,fullLeading:S.current.fullSwipe,fullTrailing:S.current.fullSwipe});Oe.useLayoutEffect(()=>{if(v)return D.current.subscribe(Y=>{const J=y.current;if(!J)return;J.style.setProperty("--lab-row-swipe",`${Math.abs(Y)}px`);const ee=J.querySelector(":scope > .lab-list-row");ee&&(ee.style.transform=Y?`translate3d(${w()?-Y:Y}px, 0, 0)`:""),J.dataset.swiping=Y>.5?"leading":Y<-.5?"trailing":"";const G=Vc(Y,O());b(G?Y>0?"leading":"trailing":null)})},[v]);const F=(Y,J)=>D.current.animateTo(Y,{spring:Or.release,velocity:J}),V=Oe.useCallback(()=>{M(null),F(0)},[]),L=Y=>{V(),Y.onAction()};Oe.useEffect(()=>{const Y=y.current;if(!Y||!v)return;let J=0;return ol(Y,()=>({axis:"x",threshold:8,canBegin:({target:ee})=>!ee?.closest(".lab-list-actions, [data-lab-reorder-handle]"),onStart:()=>{Wi&&Wi!==V&&Wi(),D.current.stop(),J=D.current.get()},onMove:({dx:ee,time:G})=>{const te=O(),Q=J+(w()?-ee:ee),ce=te.leading?te.row:0,_e=te.trailing?-te.row:0;D.current.track(Q>ce?ce+la(Q-ce,120):Q<_e?_e+la(Q-_e,120):Q,G)},onEnd:({time:ee,cancelled:G})=>{const te=D.current.getVelocity(ee),Q=G?{offset:0,commit:null}:kc(D.current.get(),te,O()),ce=S.current;if(Q.commit){const _e=(Q.commit==="leading"?ce.leadingActions:ce.trailingActions)[0];F(Q.offset,te).then(()=>{_e.onAction(),y.current?.isConnected&&F(0)}),M(null);return}M(Q.offset>0?"leading":Q.offset<0?"trailing":null),Wi=Q.offset?V:null,F(Q.offset,te)}}))},[v,V]);const N=Y=>{if(_.onKeyDown?.(Y),!v||Y.defaultPrevented)return;const J=Y.key===(w()?"ArrowLeft":"ArrowRight"),G=Y.key===(w()?"ArrowRight":"ArrowLeft")&&h?.length?"trailing":J&&c?.length?"leading":null;if(!G)return;Y.preventDefault();const te=(G==="leading"?c.length:h.length)*Jr;M(G),Wi=V,y.current&&(y.current.dataset.swiping=G),F(G==="leading"?te:-te),requestAnimationFrame(()=>y.current?.querySelector(`.lab-list-actions[data-side="${G}"] button`)?.focus())},B=I.jsxs(I.Fragment,{children:[i&&I.jsx(pc,{className:"lab-list-row-leading",children:i}),I.jsxs("span",{className:"lab-list-row-text",children:[I.jsx("span",{className:"lab-list-row-title",children:e}),t&&I.jsx("span",{className:"lab-list-row-subtitle",children:t})]}),r&&I.jsx("span",{className:"lab-list-row-trailing",children:r}),s&&I.jsx(Pc,{className:"lab-list-row-chevron lab-dir-flip","aria-hidden":"true"})]}),Z={className:ll("lab-list-row",m),"data-selected":o||void 0},W=(Y,J)=>J?.length?I.jsx("div",{className:"lab-list-actions","data-side":Y,"data-full":E===Y||void 0,"aria-hidden":T!==Y||void 0,children:J.map(ee=>I.jsxs("button",{type:"button",className:"lab-list-action","data-tone":ee.tone??"neutral",tabIndex:T===Y?0:-1,onClick:()=>L(ee),onKeyDown:G=>{G.key==="Escape"&&(V(),y.current?.querySelector(":scope > .lab-list-row")?.focus())},children:[ee.icon,I.jsx("span",{children:ee.label})]},ee.label))}):null,$=typeof e=="string"?e:void 0;return I.jsxs("div",{ref:y,role:"listitem",className:"lab-list-item","data-leading":i?"":void 0,"data-swipe":v||void 0,"data-reorder":u.enabled||void 0,children:[W("leading",c),W("trailing",h),l?I.jsx("div",{...Z,"data-static":"",children:B}):a?I.jsx(mc,{...Z,..._,"aria-current":o?"true":void 0,onKeyDown:N,children:Oe.isValidElement(g)?Oe.cloneElement(g,{},B):g}):I.jsx("button",{ref:p,type:"button",...Z,..._,"aria-current":o?"true":void 0,onKeyDown:N,onClickCapture:Y=>{T&&(Y.preventDefault(),Y.stopPropagation(),V())},children:B}),u.enabled&&I.jsx("button",{type:"button",className:"lab-list-grip","data-lab-reorder-handle":"","aria-label":f??($?`Reorder ${$}`:"Reorder"),"aria-description":"Drag, or use the up and down arrow keys.",children:I.jsx(Bc,{"aria-hidden":"true"})})]})});const Zs="160",pi={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qc=0,va=1,Yc=2,El=1,$c=2,bn=3,Gn=0,Ft=1,Yt=2,On=0,Ii=1,xa=2,Ma=3,Sa=4,Kc=5,Yn=100,Zc=101,Jc=102,ya=103,Ea=104,Qc=200,eh=201,th=202,nh=203,Fs=204,Os=205,ih=206,rh=207,sh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,dh=0,fh=1,ph=2,Gr=3,mh=4,gh=5,_h=6,vh=7,bl=0,xh=1,Mh=2,zn=0,Sh=1,yh=2,Eh=3,bh=4,Th=5,Ah=6,Tl=300,Fi=301,Oi=302,zs=303,Bs=304,jr=306,Gs=1e3,ln=1001,Hs=1002,It=1003,ba=1004,Qr=1005,Qt=1006,wh=1007,tr=1008,Bn=1009,Rh=1010,Ch=1011,Js=1012,Al=1013,Nn=1014,Fn=1015,nr=1016,wl=1017,Rl=1018,ti=1020,Ph=1021,cn=1023,Lh=1024,Dh=1025,ni=1026,zi=1027,Uh=1028,Cl=1029,Ih=1030,Pl=1031,Ll=1033,es=33776,ts=33777,ns=33778,is=33779,Ta=35840,Aa=35841,wa=35842,Ra=35843,Dl=36196,Ca=37492,Pa=37496,La=37808,Da=37809,Ua=37810,Ia=37811,Na=37812,Fa=37813,Oa=37814,za=37815,Ba=37816,Ga=37817,Ha=37818,ka=37819,Va=37820,Wa=37821,rs=36492,Xa=36494,ja=36495,Nh=36283,qa=36284,Ya=36285,$a=36286,Ul=3e3,ii=3001,Fh=3200,Oh=3201,zh=0,Bh=1,tn="",Tt="srgb",mn="srgb-linear",Qs="display-p3",qr="display-p3-linear",Hr="linear",ct="srgb",kr="rec709",Vr="p3",gi=7680,Ka=519,Gh=512,Hh=513,kh=514,Il=515,Vh=516,Wh=517,Xh=518,jh=519,Za=35044,Ja="300 es",ks=1035,Tn=2e3,Wr=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,Vs=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function qh(n,e){return(n%e+e)%e}function ss(n,e,t){return(1-t)*n+t*e}function Qa(n){return(n&n-1)===0&&n!==0}function Ws(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yh={DEG2RAD:zr};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],y=r[1],v=r[4],T=r[7],M=r[2],E=r[5],b=r[8];return s[0]=o*_+a*y+l*M,s[3]=o*p+a*v+l*E,s[6]=o*u+a*T+l*b,s[1]=c*_+h*y+d*M,s[4]=c*p+h*v+d*E,s[7]=c*u+h*T+d*b,s[2]=f*_+m*y+g*M,s[5]=f*p+m*v+g*E,s[8]=f*u+m*T+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Ze;function Nl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $h(){const n=ir("canvas");return n.style.display="block",n}const eo={};function Zi(n){n in eo||(eo[n]=!0,console.warn(n))}const to=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),no=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[mn]:{transfer:Hr,primaries:kr,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:ct,primaries:kr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qr]:{transfer:Hr,primaries:Vr,toReference:n=>n.applyMatrix3(no),fromReference:n=>n.applyMatrix3(to)},[Qs]:{transfer:ct,primaries:Vr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(no),fromReference:n=>n.applyMatrix3(to).convertLinearToSRGB()}},Kh=new Set([mn,qr]),nt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Kh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ur[e].toReference,r=ur[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ur[n].primaries},getTransfer:function(n){return n===tn?Hr:ur[n].transfer}};function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Fl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=ir("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ls(r[o].image)):s.push(ls(r[o]))}else s=ls(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class kt extends ci{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=ln,r=ln,s=Qt,o=tr,a=cn,l=Bn,c=kt.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=sr(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ii?Tt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?ii:Ul}set encoding(e){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?Tt:tn}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Tl;kt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,M=(u+1)/2,E=(h+f)/4,b=(d+_)/4,D=(g+p)/4;return v>T&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=b/i):T>M?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=E/r,s=D/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=D/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ii?Tt:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Qh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zl extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eu extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,u*y);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const T=a*y;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,d=d*p+_*T,p===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cs.copy(this).projectOnVector(e),this.sub(cs)}reflect(e){return this.sub(cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new U,io=new ai;class ar{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),fr.subVectors(this.max,ji),vi.subVectors(e.a,ji),xi.subVectors(e.b,ji),Mi.subVectors(e.c,ji),Cn.subVectors(xi,vi),Pn.subVectors(Mi,xi),Vn.subVectors(vi,Mi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Vn.y,Vn.x,0];return!hs(t,vi,xi,Mi,fr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,vi,xi,Mi,fr))?!1:(pr.crossVectors(Cn,Pn),t=[pr.x,pr.y,pr.z],hs(t,vi,xi,Mi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],rn=new U,dr=new ar,vi=new U,xi=new U,Mi=new U,Cn=new U,Pn=new U,Vn=new U,ji=new U,fr=new U,pr=new U,Wn=new U;function hs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wn.fromArray(n,s);const a=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),h=i.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const tu=new ar,qi=new U,us=new U;class or{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(us)),this.expandByPoint(qi.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new U,ds=new U,mr=new U,Ln=new U,fs=new U,gr=new U,ps=new U;class lr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ds.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(ds);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=Ln.dot(this.direction),l=-Ln.dot(mr),c=Ln.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ds).addScaledVector(mr,f),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){fs.subVectors(t,e),gr.subVectors(i,e),ps.crossVectors(fs,gr);let o=this.direction.dot(ps),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(gr.crossVectors(Ln,gr));if(l<0)return null;const c=a*this.direction.dot(fs.cross(Ln));if(c<0||l+c>o)return null;const h=-a*Ln.dot(ps);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Dn.crossVectors(i,Xt),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Dn.crossVectors(i,Xt)),Dn.normalize(),_r.crossVectors(Xt,Dn),r[0]=Dn.x,r[4]=_r.x,r[8]=Xt.x,r[1]=Dn.y,r[5]=_r.y,r[9]=Xt.y,r[2]=Dn.z,r[6]=_r.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],y=i[3],v=i[7],T=i[11],M=i[15],E=r[0],b=r[4],D=r[8],S=r[12],w=r[1],O=r[5],F=r[9],V=r[13],L=r[2],N=r[6],B=r[10],Z=r[14],W=r[3],$=r[7],Y=r[11],J=r[15];return s[0]=o*E+a*w+l*L+c*W,s[4]=o*b+a*O+l*N+c*$,s[8]=o*D+a*F+l*B+c*Y,s[12]=o*S+a*V+l*Z+c*J,s[1]=h*E+d*w+f*L+m*W,s[5]=h*b+d*O+f*N+m*$,s[9]=h*D+d*F+f*B+m*Y,s[13]=h*S+d*V+f*Z+m*J,s[2]=g*E+_*w+p*L+u*W,s[6]=g*b+_*O+p*N+u*$,s[10]=g*D+_*F+p*B+u*Y,s[14]=g*S+_*V+p*Z+u*J,s[3]=y*E+v*w+T*L+M*W,s[7]=y*b+v*O+T*N+M*$,s[11]=y*D+v*F+T*B+M*Y,s[15]=y*S+v*V+T*Z+M*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],y=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,T=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,M=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,E=t*y+i*v+r*T+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*u-i*f*u)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*b,e[4]=v*b,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*u-t*l*u)*b,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*b,e[8]=T*b,e[9]=(g*d*s-h*_*s-g*i*m+t*_*m+h*i*u-t*d*u)*b,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*u+t*a*u)*b,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*b,e[12]=M*b,e[13]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*b,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*b,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,g=s*d,_=o*h,p=o*d,u=a*d,y=l*c,v=l*h,T=l*d,M=i.x,E=i.y,b=i.z;return r[0]=(1-(_+u))*M,r[1]=(m+T)*M,r[2]=(g-v)*M,r[3]=0,r[4]=(m-T)*E,r[5]=(1-(f+u))*E,r[6]=(p+y)*E,r[7]=0,r[8]=(g+v)*b,r[9]=(p-y)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,h=1/o,d=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(a===Tn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*h;let g,_;if(a===Tn)g=(o+s)*d,_=-2*d;else if(a===Wr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Si=new U,sn=new gt,nu=new U(0,0,0),iu=new U(1,1,1),Dn=new U,_r=new U,Xt=new U,ro=new gt,so=new ai;class Yr{constructor(e=0,t=0,i=0,r=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return so.setFromEuler(this),this.setFromQuaternion(so,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ru=0;const ao=new U,yi=new ai,Sn=new gt,vr=new U,Yi=new U,su=new U,au=new ai,oo=new U(1,0,0),lo=new U(0,1,0),co=new U(0,0,1),ou={type:"added"},lu={type:"removed"};class Ot extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new U,t=new Yr,i=new ai,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(oo,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(co,e)}translateOnAxis(e,t){return ao.copy(e).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oo,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Yi,vr,this.up):Sn.lookAt(vr,Yi,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Sn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ou)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new U,yn=new U,ms=new U,En=new U,Ei=new U,bi=new U,ho=new U,gs=new U,_s=new U,vs=new U;let xr=!1;class on{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),yn.subVectors(i,t),ms.subVectors(e,t);const o=an.dot(an),a=an.dot(yn),l=an.dot(ms),c=yn.dot(yn),h=yn.dot(ms),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,i,r,s,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),yn.subVectors(e,t),an.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,i),bi.subVectors(s,i),gs.subVectors(e,i);const l=Ei.dot(gs),c=bi.dot(gs);if(l<=0&&c<=0)return t.copy(i);_s.subVectors(e,r);const h=Ei.dot(_s),d=bi.dot(_s);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ei,o);vs.subVectors(e,s);const m=Ei.dot(vs),g=bi.dot(vs);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ho.subVectors(s,r),a=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(ho,a);const u=1/(p+_+f);return o=_*u,a=f*u,t.copy(i).addScaledVector(Ei,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=qh(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xs(o,s,e+1/3),this.g=xs(o,s,e),this.b=xs(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Bl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return nt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Nt(Lt.r*255,0,255))*65536+Math.round(Nt(Lt.g*255,0,255))*256+Math.round(Nt(Lt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Tt){nt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Mr);const i=ss(Un.h,Mr.h,t),r=ss(Un.s,Mr.s,t),s=ss(Un.l,Mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new tt;tt.NAMES=Bl;let cu=0;class Gi extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ii,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fs,this.blendDst=Os,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fs&&(i.blendSrc=this.blendSrc),this.blendDst!==Os&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new U,Sr=new $e;class Rt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Gl extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hl extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hu=0;const Zt=new gt,Ms=new Ot,Ti=new U,jt=new ar,$i=new ar,Mt=new U;class _t extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nl(e)?Hl:Gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,$i.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,$i.max),jt.expandByPoint(Mt)):(jt.expandByPoint($i.min),jt.expandByPoint($i.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),Mt.add(Ti)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new U,h[w]=new U;const d=new U,f=new U,m=new U,g=new $e,_=new $e,p=new $e,u=new U,y=new U;function v(w,O,F){d.fromArray(r,w*3),f.fromArray(r,O*3),m.fromArray(r,F*3),g.fromArray(o,w*2),_.fromArray(o,O*2),p.fromArray(o,F*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(V),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(V),c[w].add(u),c[O].add(u),c[F].add(u),h[w].add(y),h[O].add(y),h[F].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,O=T.length;w<O;++w){const F=T[w],V=F.start,L=F.count;for(let N=V,B=V+L;N<B;N+=3)v(i[N+0],i[N+1],i[N+2])}const M=new U,E=new U,b=new U,D=new U;function S(w){b.fromArray(s,w*3),D.copy(b);const O=c[w];M.copy(O),M.sub(b.multiplyScalar(b.dot(O))).normalize(),E.crossVectors(D,O);const V=E.dot(h[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=V}for(let w=0,O=T.length;w<O;++w){const F=T[w],V=F.start,L=F.count;for(let N=V,B=V+L;N<B;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Rt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new gt,Xn=new lr,yr=new or,fo=new U,Ai=new U,wi=new U,Ri=new U,Ss=new U,Er=new U,br=new $e,Tr=new $e,Ar=new $e,po=new U,mo=new U,go=new U,wr=new U,Rr=new U;class Dt extends Ot{constructor(e=new _t,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Ss.fromBufferAttribute(d,e),o?Er.addScaledVector(Ss,h):Er.addScaledVector(Ss.sub(t),h))}t.add(Er)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(yr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(yr,fo)===null||Xn.origin.distanceToSquared(fo)>(e.far-e.near)**2))&&(uo.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(uo),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,M=v;T<M;T+=3){const E=a.getX(T),b=a.getX(T+1),D=a.getX(T+2);r=Cr(this,u,e,i,c,h,d,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);r=Cr(this,o,e,i,c,h,d,y,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,M=v;T<M;T+=3){const E=T,b=T+1,D=T+2;r=Cr(this,u,e,i,c,h,d,E,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=p,v=p+1,T=p+2;r=Cr(this,o,e,i,c,h,d,y,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function uu(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:n}}function Cr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,wi),n.getVertexPosition(c,Ri);const h=uu(n,e,t,i,Ai,wi,Ri,wr);if(h){r&&(br.fromBufferAttribute(r,a),Tr.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,c),h.uv=on.getInterpolation(wr,Ai,wi,Ri,br,Tr,Ar,new $e)),s&&(br.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),Ar.fromBufferAttribute(s,c),h.uv1=on.getInterpolation(wr,Ai,wi,Ri,br,Tr,Ar,new $e),h.uv2=h.uv1),o&&(po.fromBufferAttribute(o,a),mo.fromBufferAttribute(o,l),go.fromBufferAttribute(o,c),h.normal=on.getInterpolation(wr,Ai,wi,Ri,po,mo,go,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};on.getNormal(Ai,wi,Ri,d.normal),h.face=d}return h}class oi extends _t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(_,p,u,y,v,T,M,E,b,D,S){const w=T/b,O=M/D,F=T/2,V=M/2,L=E/2,N=b+1,B=D+1;let Z=0,W=0;const $=new U;for(let Y=0;Y<B;Y++){const J=Y*O-V;for(let ee=0;ee<N;ee++){const G=ee*w-F;$[_]=G*y,$[p]=J*v,$[u]=L,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[u]=E>0?1:-1,h.push($.x,$.y,$.z),d.push(ee/b),d.push(1-Y/D),Z+=1}}for(let Y=0;Y<D;Y++)for(let J=0;J<b;J++){const ee=f+J+N*Y,G=f+J+N*(Y+1),te=f+(J+1)+N*(Y+1),Q=f+(J+1)+N*Y;l.push(ee,G,Q),l.push(G,te,Q),W+=6}a.addGroup(m,W,S),m+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function du(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kl(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const fu={clone:Bi,merge:Ut};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Vl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Pi=1;class gu extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ci,Pi,e,t);r.layers=this.layers,this.add(r);const s=new en(Ci,Pi,e,t);s.layers=this.layers,this.add(s);const o=new en(Ci,Pi,e,t);o.layers=this.layers,this.add(o);const a=new en(Ci,Pi,e,t);a.layers=this.layers,this.add(a);const l=new en(Ci,Pi,e,t);l.layers=this.layers,this.add(l);const c=new en(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wl extends kt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?Tt:tn),this.texture=new Wl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oi(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:On});s.uniforms.tEquirect.value=t;const o=new Dt(r,s),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=Qt),new gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ys=new U,vu=new U,xu=new Ze;class In{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ys.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new or,Pr=new U;class Xl{constructor(e=new In,t=new In,i=new In,r=new In,s=new In,o=new In){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],y=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-s,f-c,p-m,T-u).normalize(),i[1].setComponents(l+s,f+c,p+m,T+u).normalize(),i[2].setComponents(l+o,f+h,p+g,T+y).normalize(),i[3].setComponents(l-o,f-h,p-g,T-y).normalize(),i[4].setComponents(l-a,f-d,p-_,T-v).normalize(),t===Tn)i[5].setComponents(l+a,f+d,p+_,T+v).normalize();else if(t===Wr)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class ta extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let v=0;v<c;v++){const T=v*d-s;g.push(T,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const v=y+c*u,T=y+c*(u+1),M=y+1+c*(u+1),E=y+1+c*u;m.push(v,T,E),m.push(T,M,E)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
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
} // validated`,Iu=`#ifdef USE_IRIDESCENCE
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
#endif`,Nu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
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
#endif`,Id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nd=`#ifdef USE_MORPHNORMALS
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
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
}`,If=`uniform vec3 diffuse;
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
}`,Nf=`#include <common>
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
}`,$f=`uniform float size;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Su,alphahash_pars_fragment:yu,alphamap_fragment:Eu,alphamap_pars_fragment:bu,alphatest_fragment:Tu,alphatest_pars_fragment:Au,aomap_fragment:wu,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Du,bsdfs:Uu,iridescence_fragment:Iu,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:ku,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:ju,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:$u,emissivemap_pars_fragment:Ku,colorspace_fragment:Zu,colorspace_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:ed,envmap_pars_fragment:td,envmap_pars_vertex:nd,envmap_physical_pars_fragment:pd,envmap_vertex:id,fog_vertex:rd,fog_pars_vertex:sd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:ld,lightmap_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:yd,lights_fragment_end:Ed,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:wd,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Ud,morphcolor_vertex:Id,morphnormal_vertex:Nd,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Bd,normal_pars_fragment:Gd,normal_pars_vertex:Hd,normal_vertex:kd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:Kd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:rf,shadowmap_vertex:sf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:vf,uv_vertex:xf,worldpos_vertex:Mf,background_vert:Sf,background_frag:yf,backgroundCube_vert:Ef,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:Af,depth_vert:wf,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:Df,linedashed_vert:Uf,linedashed_frag:If,meshbasic_vert:Nf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:zf,meshmatcap_vert:Bf,meshmatcap_frag:Gf,meshnormal_vert:Hf,meshnormal_frag:kf,meshphong_vert:Vf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:jf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:$f,points_frag:Kf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:ep},Re={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Ut([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Ut([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Ut([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Ut([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Ut([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Ut([Re.points,Re.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Ut([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Ut([Re.common,Re.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Ut([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Ut([Re.sprite,Re.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Ut([Re.common,Re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Ut([Re.lights,Re.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Lr={r:0,b:0,g:0};function tp(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jr)?(h===void 0&&(h=new Dt(new oi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Dt(new ta(2,2),new nn({name:"BackgroundMaterial",uniforms:Bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(Lr,kl(n)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function np(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(L,N,B,Z,W){let $=!1;if(o){const Y=_(Z,B,N);c!==Y&&(c=Y,m(c.object)),$=u(L,Z,B,W),$&&y(L,Z,B,W)}else{const Y=N.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==Y)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=Y,$=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,D(L,N,B,Z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,N,B){const Z=B.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let $=W[N.id];$===void 0&&($={},W[N.id]=$);let Y=$[Z];return Y===void 0&&(Y=p(f()),$[Z]=Y),Y}function p(L){const N=[],B=[],Z=[];for(let W=0;W<r;W++)N[W]=0,B[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:Z,object:L,attributes:{},index:null}}function u(L,N,B,Z){const W=c.attributes,$=N.attributes;let Y=0;const J=B.getAttributes();for(const ee in J)if(J[ee].location>=0){const te=W[ee];let Q=$[ee];if(Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),te===void 0||te.attribute!==Q||Q&&te.data!==Q.data)return!0;Y++}return c.attributesNum!==Y||c.index!==Z}function y(L,N,B,Z){const W={},$=N.attributes;let Y=0;const J=B.getAttributes();for(const ee in J)if(J[ee].location>=0){let te=$[ee];te===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Q={};Q.attribute=te,te&&te.data&&(Q.data=te.data),W[ee]=Q,Y++}c.attributes=W,c.attributesNum=Y,c.index=Z}function v(){const L=c.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function T(L){M(L,0)}function M(L,N){const B=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;B[L]=1,Z[L]===0&&(n.enableVertexAttribArray(L),Z[L]=1),W[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),W[L]=N)}function E(){const L=c.newAttributes,N=c.enabledAttributes;for(let B=0,Z=N.length;B<Z;B++)N[B]!==L[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function b(L,N,B,Z,W,$,Y){Y===!0?n.vertexAttribIPointer(L,N,B,W,$):n.vertexAttribPointer(L,N,B,Z,W,$)}function D(L,N,B,Z){if(i.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Z.attributes,$=B.getAttributes(),Y=N.defaultAttributeValues;for(const J in $){const ee=$[J];if(ee.location>=0){let G=W[J];if(G===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const te=G.normalized,Q=G.itemSize,ce=t.get(G);if(ce===void 0)continue;const _e=ce.buffer,be=ce.type,Ce=ce.bytesPerElement,Ae=i.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||G.gpuType===Al);if(G.isInterleavedBufferAttribute){const ze=G.data,H=ze.stride,je=G.offset;if(ze.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)M(ee.location+xe,ze.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let xe=0;xe<ee.locationSize;xe++)T(ee.location+xe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let xe=0;xe<ee.locationSize;xe++)b(ee.location+xe,Q/ee.locationSize,be,te,H*Ce,(je+Q/ee.locationSize*xe)*Ce,Ae)}else{if(G.isInstancedBufferAttribute){for(let ze=0;ze<ee.locationSize;ze++)M(ee.location+ze,G.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ze=0;ze<ee.locationSize;ze++)T(ee.location+ze);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ze=0;ze<ee.locationSize;ze++)b(ee.location+ze,Q/ee.locationSize,be,te,Q*Ce,Q/ee.locationSize*ze*Ce,Ae)}}else if(Y!==void 0){const te=Y[J];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(ee.location,te);break;case 3:n.vertexAttrib3fv(ee.location,te);break;case 4:n.vertexAttrib4fv(ee.location,te);break;default:n.vertexAttrib1fv(ee.location,te)}}}}E()}function S(){F();for(const L in a){const N=a[L];for(const B in N){const Z=N[B];for(const W in Z)g(Z[W].object),delete Z[W];delete N[B]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const B in N){const Z=N[B];for(const W in Z)g(Z[W].object),delete Z[W];delete N[B]}delete a[L.id]}function O(L){for(const N in a){const B=a[N];if(B[L.id]===void 0)continue;const Z=B[L.id];for(const W in Z)g(Z[W].object),delete Z[W];delete B[L.id]}}function F(){V(),h=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:T,disableUnusedAttributes:E}}function ip(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function rp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||e.has("OES_texture_float"),M=v&&T,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:M,maxSamples:E}}function sp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new In,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:i,v=y*4;let T=u.clippingState||null;l.value=T,T=h(g,f,v,m);for(let M=0;M!==v;++M)T[M]=t[M];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,T=m;v!==_;++v,T+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ap(n){let e=new WeakMap;function t(o,a){return a===zs?o.mapping=Fi:a===Bs&&(o.mapping=Oi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zs||a===Bs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _u(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class op extends Vl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,_o=[.125,.215,.35,.446,.526,.582],$n=20,Es=new op,vo=new tt;let bs=null,Ts=0,As=0;const qn=(1+Math.sqrt(5))/2,Li=1/qn,xo=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,qn,Li),new U(0,qn,-Li),new U(Li,0,qn),new U(-Li,0,qn),new U(qn,Li,0),new U(-qn,Li,0)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,Ts,As),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:nr,format:cn,colorSpace:mn,depthBuffer:!1},r=So(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return r}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(vo),h.toneMapping=zn,h.autoClear=!1;const m=new Ji({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Dt(new oi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(vo),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Dr(r,y*v,u>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xo[(r-1)%xo.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):$n;p>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const u=[];let y=0;for(let b=0;b<$n;++b){const D=b/_,S=Math.exp(-D*D/2);u.push(S),b===0?y+=S:b<p&&(y+=2*S)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const T=this._sizeLods[r],M=3*T*(r>v-Di?r-v+Di:0),E=4*(this._cubeSize-T);Dr(t,M,E,3*T,2*T),l.setRenderTarget(t),l.render(d,Es)}}function lp(n){const e=[],t=[],i=[];let r=n;const s=n-Di+1+_o.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Di?l=_o[o-n+Di-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let E=0;E<m;E++){const b=E%3*2/3-1,D=E>2?0:-1,S=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];y.set(S,_*g*E),v.set(f,p*g*E);const w=[E,E,E,E,E,E];T.set(w,u*g*E)}const M=new _t;M.setAttribute("position",new Rt(y,_)),M.setAttribute("uv",new Rt(v,p)),M.setAttribute("faceIndex",new Rt(T,u)),e.push(M),r>Di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function So(n,e,t){const i=new si(n,e,t);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cp(n,e,t){const i=new Float32Array($n),r=new U(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:na(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function yo(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Eo(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function hp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zs||l===Bs,h=l===Fi||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Mo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Mo(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function up(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dp(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,T=y.length;v<T;v+=3){const M=y[v+0],E=y[v+1],b=y[v+2];f.push(M,E,E,b,b,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,T=y.length/3-1;v<T;v+=3){const M=v+0,E=v+1,b=v+2;f.push(M,E,E,b,b,M)}}else return;const p=new(Nl(f)?Hl:Gl)(f,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function fp(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function pp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mp(n,e){return n[0]-e[0]}function gp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _p(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let L=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let D=0;y===!0&&(D=1),v===!0&&(D=2),T===!0&&(D=3);let S=h.attributes.position.count*D,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*w*4*g),F=new zl(O,S,w,g);F.type=Fn,F.needsUpdate=!0;const V=D*4;for(let N=0;N<g;N++){const B=M[N],Z=E[N],W=b[N],$=S*w*4*N;for(let Y=0;Y<B.count;Y++){const J=Y*V;y===!0&&(o.fromBufferAttribute(B,Y),O[$+J+0]=o.x,O[$+J+1]=o.y,O[$+J+2]=o.z,O[$+J+3]=0),v===!0&&(o.fromBufferAttribute(Z,Y),O[$+J+4]=o.x,O[$+J+5]=o.y,O[$+J+6]=o.z,O[$+J+7]=0),T===!0&&(o.fromBufferAttribute(W,Y),O[$+J+8]=o.x,O[$+J+9]=o.y,O[$+J+10]=o.z,O[$+J+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:F,size:new $e(S,w)},s.set(h,_),h.addEventListener("dispose",L)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){const T=g[v];T[0]=v,T[1]=f[v]}g.sort(gp);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mp);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const T=a[v],M=T[0],E=T[1];M!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+v)!==_[M]&&h.setAttribute("morphTarget"+v,_[M]),p&&h.getAttribute("morphNormal"+v)!==p[M]&&h.setAttribute("morphNormal"+v,p[M]),r[v]=E,u+=E):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function vp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ql extends kt{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ni&&(i=Nn),i===void 0&&h===zi&&(i=ti),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yl=new kt,$l=new ql(1,1);$l.compareFunction=Il;const Kl=new zl,Zl=new eu,Jl=new Wl,bo=[],To=[],Ao=new Float32Array(16),wo=new Float32Array(9),Ro=new Float32Array(4);function Hi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bo[r];if(s===void 0&&(s=new Float32Array(r),bo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ro.set(i),n.uniformMatrix2fv(this.addr,!1,Ro),xt(t,i)}}function bp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;wo.set(i),n.uniformMatrix3fv(this.addr,!1,wo),xt(t,i)}}function Tp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Ao.set(i),n.uniformMatrix4fv(this.addr,!1,Ao),xt(t,i)}}function Ap(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Ip(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?$l:Yl;t.setTexture2D(e||s,r)}function Np(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zl,r)}function Fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jl,r)}function Op(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kl,r)}function zp(n){switch(n){case 5126:return xp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return Ep;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function Bp(n,e){n.uniform1fv(this.addr,e)}function Gp(n,e){const t=Hi(e,this.size,2);n.uniform2fv(this.addr,t)}function Hp(n,e){const t=Hi(e,this.size,3);n.uniform3fv(this.addr,t)}function kp(n,e){const t=Hi(e,this.size,4);n.uniform4fv(this.addr,t)}function Vp(n,e){const t=Hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wp(n,e){const t=Hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xp(n,e){const t=Hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jp(n,e){n.uniform1iv(this.addr,e)}function qp(n,e){n.uniform2iv(this.addr,e)}function Yp(n,e){n.uniform3iv(this.addr,e)}function $p(n,e){n.uniform4iv(this.addr,e)}function Kp(n,e){n.uniform1uiv(this.addr,e)}function Zp(n,e){n.uniform2uiv(this.addr,e)}function Jp(n,e){n.uniform3uiv(this.addr,e)}function Qp(n,e){n.uniform4uiv(this.addr,e)}function em(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Yl,s[o])}function tm(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zl,s[o])}function nm(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jl,s[o])}function im(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kl,s[o])}function rm(n){switch(n){case 5126:return Bp;case 35664:return Gp;case 35665:return Hp;case 35666:return kp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zp(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ws=/(\w+)(\])?(\[|\.)?/g;function Co(n,e){n.seq.push(e),n.map[e.id]=e}function lm(n,e,t){const i=n.name,r=i.length;for(ws.lastIndex=0;;){const s=ws.exec(i),o=ws.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Co(t,c===void 0?new sm(a,n,e):new am(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new om(a),Co(t,d)),t=d}}}class Br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Po(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cm=37297;let hm=0;function um(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dm(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Vr&&t===kr?i="LinearDisplayP3ToLinearSRGB":e===kr&&t===Vr&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case qr:return[i,"LinearTransferOETF"];case Tt:case Qs:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+um(n.getShaderSource(e),o)}else return r}function fm(n,e){const t=dm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(n,e){let t;switch(e){case Sh:t="Linear";break;case yh:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case bh:t="ACESFilmic";break;case Ah:t="AgX";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function _m(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ui(n){return n!==""}function Do(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(n){return n.replace(xm,Sm)}const Mm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(n,e){let t=Ke[e];if(t===void 0){const i=Mm.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xs(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(n){return n.replace(ym,Em)}function Em(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Oi&&(e="ENVMAP_MODE_REFRACTION"),e}function wm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bl:e="ENVMAP_BLENDING_MULTIPLY";break;case xh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bm(t),c=Tm(t),h=Am(t),d=wm(t),f=Rm(t),m=t.isWebGL2?"":mm(t),g=gm(t),_=_m(s),p=r.createProgram();let u,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ui).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ui).join(`
`),y.length>0&&(y+=`
`)):(u=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),y=[m,No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==zn?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=Xs(o),o=Do(o,t),o=Uo(o,t),a=Xs(a),a=Do(a,t),a=Uo(a,t),o=Io(o),a=Io(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=v+u+o,M=v+y+a,E=Po(r,r.VERTEX_SHADER,T),b=Po(r,r.FRAGMENT_SHADER,M);r.attachShader(p,E),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(F){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(E).trim(),N=r.getShaderInfoLog(b).trim();let B=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,E,b);else{const W=Lo(r,E,"vertex"),$=Lo(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+W+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||N==="")&&(Z=!1);Z&&(F.diagnostics={runnable:B,programLog:V,vertexShader:{log:L,prefix:u},fragmentShader:{log:N,prefix:y}})}r.deleteShader(E),r.deleteShader(b),S=new Br(r,p),w=vm(r,p)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(p,cm)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let Pm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dm(e),t.set(e,i)),i}}class Dm{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Um(n,e,t,i,r,s,o){const a=new ea,l=new Lm,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,O,F,V){const L=F.fog,N=V.geometry,B=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),W=Z&&Z.mapping===jr?Z.image.height:null,$=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=Y!==void 0?Y.length:0;let ee=0;N.morphAttributes.position!==void 0&&(ee=1),N.morphAttributes.normal!==void 0&&(ee=2),N.morphAttributes.color!==void 0&&(ee=3);let G,te,Q,ce;if($){const st=fn[$];G=st.vertexShader,te=st.fragmentShader}else G=S.vertexShader,te=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const _e=n.getRenderTarget(),be=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,Ae=!!S.map,ze=!!S.matcap,H=!!Z,je=!!S.aoMap,xe=!!S.lightMap,we=!!S.bumpMap,Ee=!!S.normalMap,Ue=!!S.displacementMap,Te=!!S.emissiveMap,A=!!S.metalnessMap,x=!!S.roughnessMap,z=S.anisotropy>0,le=S.clearcoat>0,ae=S.iridescence>0,se=S.sheen>0,Me=S.transmission>0,fe=z&&!!S.anisotropyMap,Se=le&&!!S.clearcoatMap,Le=le&&!!S.clearcoatNormalMap,Ie=le&&!!S.clearcoatRoughnessMap,oe=ae&&!!S.iridescenceMap,Be=ae&&!!S.iridescenceThicknessMap,C=se&&!!S.sheenColorMap,ie=se&&!!S.sheenRoughnessMap,pe=!!S.specularMap,ue=!!S.specularColorMap,ye=!!S.specularIntensityMap,j=Me&&!!S.transmissionMap,ge=Me&&!!S.thicknessMap,de=!!S.gradientMap,re=!!S.alphaMap,P=S.alphaTest>0,he=!!S.alphaHash,ve=!!S.extensions,Ne=!!N.attributes.uv1,De=!!N.attributes.uv2,We=!!N.attributes.uv3;let He=zn;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(He=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:te,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ce,instancing:be,instancingColor:be&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:mn,map:Ae,matcap:ze,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:W,aoMap:je,lightMap:xe,bumpMap:we,normalMap:Ee,displacementMap:f&&Ue,emissiveMap:Te,normalMapObjectSpace:Ee&&S.normalMapType===Bh,normalMapTangentSpace:Ee&&S.normalMapType===zh,metalnessMap:A,roughnessMap:x,anisotropy:z,anisotropyMap:fe,clearcoat:le,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ie,iridescence:ae,iridescenceMap:oe,iridescenceThicknessMap:Be,sheen:se,sheenColorMap:C,sheenRoughnessMap:ie,specularMap:pe,specularColorMap:ue,specularIntensityMap:ye,transmission:Me,transmissionMap:j,thicknessMap:ge,gradientMap:de,opaque:S.transparent===!1&&S.blending===Ii,alphaMap:re,alphaTest:P,alphaHash:he,combine:S.combine,mapUv:Ae&&_(S.map.channel),aoMapUv:je&&_(S.aoMap.channel),lightMapUv:xe&&_(S.lightMap.channel),bumpMapUv:we&&_(S.bumpMap.channel),normalMapUv:Ee&&_(S.normalMap.channel),displacementMapUv:Ue&&_(S.displacementMap.channel),emissiveMapUv:Te&&_(S.emissiveMap.channel),metalnessMapUv:A&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(S.sheenRoughnessMap.channel),specularMapUv:pe&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:ye&&_(S.specularIntensityMap.channel),transmissionMapUv:j&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:De,vertexUv3s:We,pointsUvs:V.isPoints===!0&&!!N.attributes.uv&&(Ae||re),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(y(w,S),v(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function T(S){const w=g[S.type];let O;if(w){const F=fn[w];O=fu.clone(F.uniforms)}else O=S.uniforms;return O}function M(S,w){let O;for(let F=0,V=c.length;F<V;F++){const L=c[F];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new Cm(n,w,S,s),c.push(O)),O}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:D}}function Im(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Nm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,g,_,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Nm),i.length>1&&i.sort(f||Fo),r.length>1&&r.sort(f||Fo)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Fm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Oo,n.set(i,[o])):r>=s.length?(o=new Oo,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Om(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function zm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bm=0;function Gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hm(n,e){const t=new Om,i=zm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,o=new gt,a=new gt;function l(h,d){let f=0,m=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,p=0,u=0,y=0,v=0,T=0,M=0,E=0,b=0,D=0,S=0;h.sort(Gm);const w=d===!0?Math.PI:1;for(let F=0,V=h.length;F<V;F++){const L=h[F],N=L.color,B=L.intensity,Z=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*B*w,m+=N.g*B*w,g+=N.b*B*w;else if(L.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(L.sh.coefficients[$],B);S++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Y=L.shadow,J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=L.shadow.matrix,T++}r.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(B*w),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,r.spot[u]=$;const Y=L.shadow;if(L.map&&(r.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[u]=Y.matrix,L.castShadow){const J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=W,E++}u++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(N).multiplyScalar(B),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=$,y++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Y=L.shadow,J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=L.shadow.matrix,M++}r.point[p]=$,p++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(B*w),$.groundColor.copy(L.groundColor).multiplyScalar(B*w),r.hemi[v]=$,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==_||O.pointLength!==p||O.spotLength!==u||O.rectAreaLength!==y||O.hemiLength!==v||O.numDirectionalShadows!==T||O.numPointShadows!==M||O.numSpotShadows!==E||O.numSpotMaps!==b||O.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,O.directionalLength=_,O.pointLength=p,O.spotLength=u,O.rectAreaLength=y,O.hemiLength=v,O.numDirectionalShadows=T,O.numPointShadows=M,O.numSpotShadows=E,O.numSpotMaps=b,O.numLightProbes=S,r.version=Bm++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const T=h[y];if(T.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),f++}else if(T.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),g++}else if(T.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function zo(n,e){const t=new Hm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function km(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zo(n,e),t.set(s,[l])):o>=a.length?(l=new zo(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vm extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
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
}`;function qm(n,e,t){let i=new Xl;const r=new $e,s=new $e,o=new wt,a=new Vm({depthPacking:Oh}),l=new Wm,c={},h=t.maxTextureSize,d={[Gn]:Ft,[Ft]:Gn,[Yt]:Yt},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Xm,fragmentShader:jm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(E,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),F=n.state;F.setBlending(On),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=u!==bn&&this.type===bn,L=u===bn&&this.type!==bn;for(let N=0,B=E.length;N<B;N++){const Z=E[N],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const $=W.getFrameExtents();if(r.multiply($),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,W.mapSize.y=s.y)),W.map===null||V===!0||L===!0){const J=this.type!==bn?{minFilter:It,magFilter:It}:{};W.map!==null&&W.map.dispose(),W.map=new si(r.x,r.y,J),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Y=W.getViewportCount();for(let J=0;J<Y;J++){const ee=W.getViewport(J);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),F.viewport(o),W.updateMatrices(Z,J),i=W.getFrustum(),T(b,D,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===bn&&y(W,D),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,w,O)};function y(E,b){const D=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,D,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,D,m,_,null)}function v(E,b,D,S){let w=null;const O=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)w=O;else if(w=D.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=w.uuid,V=b.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let N=L[V];N===void 0&&(N=w.clone(),L[V]=N,b.addEventListener("dispose",M)),w=N}if(w.visible=b.visible,w.wireframe=b.wireframe,S===bn?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:d[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=n.properties.get(w);F.light=D}return w}function T(E,b,D,S,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===bn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const V=e.update(E),L=E.material;if(Array.isArray(L)){const N=V.groups;for(let B=0,Z=N.length;B<Z;B++){const W=N[B],$=L[W.materialIndex];if($&&$.visible){const Y=v(E,$,S,w);E.onBeforeShadow(n,E,b,D,V,Y,W),n.renderBufferDirect(D,null,V,Y,E,W),E.onAfterShadow(n,E,b,D,V,Y,W)}}}else if(L.visible){const N=v(E,L,S,w);E.onBeforeShadow(n,E,b,D,V,N,null),n.renderBufferDirect(D,null,V,N,E,null),E.onAfterShadow(n,E,b,D,V,N,null)}}const F=E.children;for(let V=0,L=F.length;V<L;V++)T(F[V],b,D,S,w)}function M(E){E.target.removeEventListener("dispose",M);for(const D in c){const S=c[D],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function Ym(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const he=new wt;let ve=null;const Ne=new wt(0,0,0,0);return{setMask:function(De){ve!==De&&!P&&(n.colorMask(De,De,De,De),ve=De)},setLocked:function(De){P=De},setClear:function(De,We,He,Qe,st){st===!0&&(De*=Qe,We*=Qe,He*=Qe),he.set(De,We,He,Qe),Ne.equals(he)===!1&&(n.clearColor(De,We,He,Qe),Ne.copy(he))},reset:function(){P=!1,ve=null,Ne.set(-1,0,0,0)}}}function s(){let P=!1,he=null,ve=null,Ne=null;return{setTest:function(De){De?Ce(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){he!==De&&!P&&(n.depthMask(De),he=De)},setFunc:function(De){if(ve!==De){switch(De){case dh:n.depthFunc(n.NEVER);break;case fh:n.depthFunc(n.ALWAYS);break;case ph:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case mh:n.depthFunc(n.EQUAL);break;case gh:n.depthFunc(n.GEQUAL);break;case _h:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=De}},setLocked:function(De){P=De},setClear:function(De){Ne!==De&&(n.clearDepth(De),Ne=De)},reset:function(){P=!1,he=null,ve=null,Ne=null}}}function o(){let P=!1,he=null,ve=null,Ne=null,De=null,We=null,He=null,Qe=null,st=null;return{setTest:function(me){P||(me?Ce(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(me){he!==me&&!P&&(n.stencilMask(me),he=me)},setFunc:function(me,Je,it){(ve!==me||Ne!==Je||De!==it)&&(n.stencilFunc(me,Je,it),ve=me,Ne=Je,De=it)},setOp:function(me,Je,it){(We!==me||He!==Je||Qe!==it)&&(n.stencilOp(me,Je,it),We=me,He=Je,Qe=it)},setLocked:function(me){P=me},setClear:function(me){st!==me&&(n.clearStencil(me),st=me)},reset:function(){P=!1,he=null,ve=null,Ne=null,De=null,We=null,He=null,Qe=null,st=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,T=null,M=null,E=null,b=null,D=null,S=new tt(0,0,0),w=0,O=!1,F=null,V=null,L=null,N=null,B=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=$>=2);let J=null,ee={};const G=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Q=new wt().fromArray(G),ce=new wt().fromArray(te);function _e(P,he,ve,Ne){const De=new Uint8Array(4),We=n.createTexture();n.bindTexture(P,We),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ve;He++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(he+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return We}const be={};be[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Gr),Te(!1),A(va),Ce(n.CULL_FACE),Ee(On);function Ce(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Ae(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function ze(P,he){return m[P]!==he?(n.bindFramebuffer(P,he),m[P]=he,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function H(P,he){let ve=_,Ne=!1;if(P)if(ve=g.get(he),ve===void 0&&(ve=[],g.set(he,ve)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(ve.length!==De.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let We=0,He=De.length;We<He;We++)ve[We]=n.COLOR_ATTACHMENT0+We;ve.length=De.length,Ne=!0}}else ve[0]!==n.COLOR_ATTACHMENT0&&(ve[0]=n.COLOR_ATTACHMENT0,Ne=!0);else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ne=!0);Ne&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function je(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const xe={[Yn]:n.FUNC_ADD,[Zc]:n.FUNC_SUBTRACT,[Jc]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[ya]=n.MIN,xe[Ea]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(xe[ya]=P.MIN_EXT,xe[Ea]=P.MAX_EXT)}const we={[Qc]:n.ZERO,[eh]:n.ONE,[th]:n.SRC_COLOR,[Fs]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[ih]:n.DST_ALPHA,[nh]:n.ONE_MINUS_SRC_COLOR,[Os]:n.ONE_MINUS_SRC_ALPHA,[ah]:n.ONE_MINUS_DST_COLOR,[rh]:n.ONE_MINUS_DST_ALPHA,[lh]:n.CONSTANT_COLOR,[ch]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,he,ve,Ne,De,We,He,Qe,st,me){if(P===On){u===!0&&(Ae(n.BLEND),u=!1);return}if(u===!1&&(Ce(n.BLEND),u=!0),P!==Kc){if(P!==y||me!==O){if((v!==Yn||E!==Yn)&&(n.blendEquation(n.FUNC_ADD),v=Yn,E=Yn),me)switch(P){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFunc(n.ONE,n.ONE);break;case Ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,M=null,b=null,D=null,S.set(0,0,0),w=0,y=P,O=me}return}De=De||he,We=We||ve,He=He||Ne,(he!==v||De!==E)&&(n.blendEquationSeparate(xe[he],xe[De]),v=he,E=De),(ve!==T||Ne!==M||We!==b||He!==D)&&(n.blendFuncSeparate(we[ve],we[Ne],we[We],we[He]),T=ve,M=Ne,b=We,D=He),(Qe.equals(S)===!1||st!==w)&&(n.blendColor(Qe.r,Qe.g,Qe.b,st),S.copy(Qe),w=st),y=P,O=!1}function Ue(P,he){P.side===Yt?Ae(n.CULL_FACE):Ce(n.CULL_FACE);let ve=P.side===Ft;he&&(ve=!ve),Te(ve),P.blending===Ii&&P.transparent===!1?Ee(On):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ne=P.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(P){F!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),F=P)}function A(P){P!==qc?(Ce(n.CULL_FACE),P!==V&&(P===va?n.cullFace(n.BACK):P===Yc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),V=P}function x(P){P!==L&&(W&&n.lineWidth(P),L=P)}function z(P,he,ve){P?(Ce(n.POLYGON_OFFSET_FILL),(N!==he||B!==ve)&&(n.polygonOffset(he,ve),N=he,B=ve)):Ae(n.POLYGON_OFFSET_FILL)}function le(P){P?Ce(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ae(P){P===void 0&&(P=n.TEXTURE0+Z-1),J!==P&&(n.activeTexture(P),J=P)}function se(P,he,ve){ve===void 0&&(J===null?ve=n.TEXTURE0+Z-1:ve=J);let Ne=ee[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},ee[ve]=Ne),(Ne.type!==P||Ne.texture!==he)&&(J!==ve&&(n.activeTexture(ve),J=ve),n.bindTexture(P,he||be[P]),Ne.type=P,Ne.texture=he)}function Me(){const P=ee[J];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){Q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function j(P){ce.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function ge(P,he){let ve=d.get(he);ve===void 0&&(ve=new WeakMap,d.set(he,ve));let Ne=ve.get(P);Ne===void 0&&(Ne=n.getUniformBlockIndex(he,P.name),ve.set(P,Ne))}function de(P,he){const Ne=d.get(he).get(P);h.get(he)!==Ne&&(n.uniformBlockBinding(he,Ne,P.__bindingPointIndex),h.set(he,Ne))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,ee={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,T=null,M=null,E=null,b=null,D=null,S=new tt(0,0,0),w=0,O=!1,F=null,V=null,L=null,N=null,B=null,Q.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Ae,bindFramebuffer:ze,drawBuffers:H,useProgram:je,setBlending:Ee,setMaterial:Ue,setFlipSided:Te,setCullFace:A,setLineWidth:x,setPolygonOffset:z,setScissorTest:le,activeTexture:ae,bindTexture:se,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:Se,texImage2D:pe,texImage3D:ue,updateUBOMapping:ge,uniformBlockBinding:de,texStorage2D:C,texStorage3D:ie,texSubImage2D:Le,texSubImage3D:Ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:Be,scissor:ye,viewport:j,reset:re}}function $m(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):ir("canvas")}function _(A,x,z,le){let ae=1;if((A.width>le||A.height>le)&&(ae=le/Math.max(A.width,A.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=x?Ws:Math.floor,Me=se(ae*A.width),fe=se(ae*A.height);d===void 0&&(d=g(Me,fe));const Se=z?g(Me,fe):d;return Se.width=Me,Se.height=fe,Se.getContext("2d").drawImage(A,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+fe+")."),Se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Qa(A.width)&&Qa(A.height)}function u(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==It&&A.minFilter!==Qt}function y(A,x){return A.generateMipmaps&&x&&A.minFilter!==It&&A.minFilter!==Qt}function v(A){n.generateMipmap(A)}function T(A,x,z,le,ae=!1){if(a===!1)return x;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=x;if(x===n.RED&&(z===n.FLOAT&&(se=n.R32F),z===n.HALF_FLOAT&&(se=n.R16F),z===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(se=n.R8UI),z===n.UNSIGNED_SHORT&&(se=n.R16UI),z===n.UNSIGNED_INT&&(se=n.R32UI),z===n.BYTE&&(se=n.R8I),z===n.SHORT&&(se=n.R16I),z===n.INT&&(se=n.R32I)),x===n.RG&&(z===n.FLOAT&&(se=n.RG32F),z===n.HALF_FLOAT&&(se=n.RG16F),z===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RGBA){const Me=ae?Hr:nt.getTransfer(le);z===n.FLOAT&&(se=n.RGBA32F),z===n.HALF_FLOAT&&(se=n.RGBA16F),z===n.UNSIGNED_BYTE&&(se=Me===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(A,x,z){return y(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){return A===It||A===ba||A===Qr?n.NEAREST:n.LINEAR}function b(A){const x=A.target;x.removeEventListener("dispose",b),S(x),x.isVideoTexture&&h.delete(x)}function D(A){const x=A.target;x.removeEventListener("dispose",D),O(x)}function S(A){const x=i.get(A);if(x.__webglInit===void 0)return;const z=A.source,le=f.get(z);if(le){const ae=le[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(A),Object.keys(le).length===0&&f.delete(z)}i.remove(A)}function w(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const z=A.source,le=f.get(z);delete le[x.__cacheKey],o.memory.textures--}function O(A){const x=A.texture,z=i.get(A),le=i.get(x);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(z.__webglFramebuffer[ae]))for(let se=0;se<z.__webglFramebuffer[ae].length;se++)n.deleteFramebuffer(z.__webglFramebuffer[ae][se]);else n.deleteFramebuffer(z.__webglFramebuffer[ae]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ae])}else{if(Array.isArray(z.__webglFramebuffer))for(let ae=0;ae<z.__webglFramebuffer.length;ae++)n.deleteFramebuffer(z.__webglFramebuffer[ae]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ae=0;ae<z.__webglColorRenderbuffer.length;ae++)z.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ae]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,se=x.length;ae<se;ae++){const Me=i.get(x[ae]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(x[ae])}i.remove(x),i.remove(A)}let F=0;function V(){F=0}function L(){const A=F;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function N(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function B(A,x){const z=i.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,A,x);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function Z(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Q(z,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function W(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Q(z,A,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function $(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ce(z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const Y={[Gs]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Hs]:n.MIRRORED_REPEAT},J={[It]:n.NEAREST,[ba]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},ee={[Gh]:n.NEVER,[jh]:n.ALWAYS,[Hh]:n.LESS,[Il]:n.LEQUAL,[kh]:n.EQUAL,[Xh]:n.GEQUAL,[Vh]:n.GREATER,[Wh]:n.NOTEQUAL};function G(A,x,z){if(z?(n.texParameteri(A,n.TEXTURE_WRAP_S,Y[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Y[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Y[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,J[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,J[x.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==ln||x.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,E(x.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,E(x.minFilter)),x.minFilter!==It&&x.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===It||x.minFilter!==Qr&&x.minFilter!==tr||x.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function te(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",b));const le=x.source;let ae=f.get(le);ae===void 0&&(ae={},f.set(le,ae));const se=N(x);if(se!==A.__cacheKey){ae[se]===void 0&&(ae[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ae[se].usedTimes++;const Me=ae[A.__cacheKey];Me!==void 0&&(ae[A.__cacheKey].usedTimes--,Me.usedTimes===0&&w(x)),A.__cacheKey=se,A.__webglTexture=ae[se].texture}return z}function Q(A,x,z){let le=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(le=n.TEXTURE_3D);const ae=te(A,x),se=x.source;t.bindTexture(le,A.__webglTexture,n.TEXTURE0+z);const Me=i.get(se);if(se.version!==Me.__version||ae===!0){t.activeTexture(n.TEXTURE0+z);const fe=nt.getPrimaries(nt.workingColorSpace),Se=x.colorSpace===tn?null:nt.getPrimaries(x.colorSpace),Le=x.colorSpace===tn||fe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ie=u(x)&&p(x.image)===!1;let oe=_(x.image,Ie,!1,r.maxTextureSize);oe=Te(x,oe);const Be=p(oe)||a,C=s.convert(x.format,x.colorSpace);let ie=s.convert(x.type),pe=T(x.internalFormat,C,ie,x.colorSpace,x.isVideoTexture);G(le,x,Be);let ue;const ye=x.mipmaps,j=a&&x.isVideoTexture!==!0&&pe!==Dl,ge=Me.__version===void 0||ae===!0,de=M(x,oe,Be);if(x.isDepthTexture)pe=n.DEPTH_COMPONENT,a?x.type===Fn?pe=n.DEPTH_COMPONENT32F:x.type===Nn?pe=n.DEPTH_COMPONENT24:x.type===ti?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:x.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ni&&pe===n.DEPTH_COMPONENT&&x.type!==Js&&x.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Nn,ie=s.convert(x.type)),x.format===zi&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,x.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ti,ie=s.convert(x.type))),ge&&(j?t.texStorage2D(n.TEXTURE_2D,1,pe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,pe,oe.width,oe.height,0,C,ie,null));else if(x.isDataTexture)if(ye.length>0&&Be){j&&ge&&t.texStorage2D(n.TEXTURE_2D,de,pe,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ue=ye[re],j?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ue.width,ue.height,C,ie,ue.data):t.texImage2D(n.TEXTURE_2D,re,pe,ue.width,ue.height,0,C,ie,ue.data);x.generateMipmaps=!1}else j?(ge&&t.texStorage2D(n.TEXTURE_2D,de,pe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,C,ie,oe.data)):t.texImage2D(n.TEXTURE_2D,0,pe,oe.width,oe.height,0,C,ie,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){j&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,pe,ye[0].width,ye[0].height,oe.depth);for(let re=0,P=ye.length;re<P;re++)ue=ye[re],x.format!==cn?C!==null?j?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,oe.depth,C,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,pe,ue.width,ue.height,oe.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,oe.depth,C,ie,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,pe,ue.width,ue.height,oe.depth,0,C,ie,ue.data)}else{j&&ge&&t.texStorage2D(n.TEXTURE_2D,de,pe,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ue=ye[re],x.format!==cn?C!==null?j?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ue.width,ue.height,C,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,re,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ue.width,ue.height,C,ie,ue.data):t.texImage2D(n.TEXTURE_2D,re,pe,ue.width,ue.height,0,C,ie,ue.data)}else if(x.isDataArrayTexture)j?(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,pe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,C,ie,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,oe.width,oe.height,oe.depth,0,C,ie,oe.data);else if(x.isData3DTexture)j?(ge&&t.texStorage3D(n.TEXTURE_3D,de,pe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,C,ie,oe.data)):t.texImage3D(n.TEXTURE_3D,0,pe,oe.width,oe.height,oe.depth,0,C,ie,oe.data);else if(x.isFramebufferTexture){if(ge)if(j)t.texStorage2D(n.TEXTURE_2D,de,pe,oe.width,oe.height);else{let re=oe.width,P=oe.height;for(let he=0;he<de;he++)t.texImage2D(n.TEXTURE_2D,he,pe,re,P,0,C,ie,null),re>>=1,P>>=1}}else if(ye.length>0&&Be){j&&ge&&t.texStorage2D(n.TEXTURE_2D,de,pe,ye[0].width,ye[0].height);for(let re=0,P=ye.length;re<P;re++)ue=ye[re],j?t.texSubImage2D(n.TEXTURE_2D,re,0,0,C,ie,ue):t.texImage2D(n.TEXTURE_2D,re,pe,C,ie,ue);x.generateMipmaps=!1}else j?(ge&&t.texStorage2D(n.TEXTURE_2D,de,pe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,C,ie,oe)):t.texImage2D(n.TEXTURE_2D,0,pe,C,ie,oe);y(x,Be)&&v(le),Me.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ce(A,x,z){if(x.image.length!==6)return;const le=te(A,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const se=i.get(ae);if(ae.version!==se.__version||le===!0){t.activeTexture(n.TEXTURE0+z);const Me=nt.getPrimaries(nt.workingColorSpace),fe=x.colorSpace===tn?null:nt.getPrimaries(x.colorSpace),Se=x.colorSpace===tn||Me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let re=0;re<6;re++)!Le&&!Ie?oe[re]=_(x.image[re],!1,!0,r.maxCubemapSize):oe[re]=Ie?x.image[re].image:x.image[re],oe[re]=Te(x,oe[re]);const Be=oe[0],C=p(Be)||a,ie=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),ue=T(x.internalFormat,ie,pe,x.colorSpace),ye=a&&x.isVideoTexture!==!0,j=se.__version===void 0||le===!0;let ge=M(x,Be,C);G(n.TEXTURE_CUBE_MAP,x,C);let de;if(Le){ye&&j&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ue,Be.width,Be.height);for(let re=0;re<6;re++){de=oe[re].mipmaps;for(let P=0;P<de.length;P++){const he=de[P];x.format!==cn?ie!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,he.width,he.height,ie,pe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ue,he.width,he.height,0,ie,pe,he.data)}}}else{de=x.mipmaps,ye&&j&&(de.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ue,oe[0].width,oe[0].height));for(let re=0;re<6;re++)if(Ie){ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,oe[re].width,oe[re].height,ie,pe,oe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ue,oe[re].width,oe[re].height,0,ie,pe,oe[re].data);for(let P=0;P<de.length;P++){const ve=de[P].image[re].image;ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ve.width,ve.height,ie,pe,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ue,ve.width,ve.height,0,ie,pe,ve.data)}}else{ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ie,pe,oe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ue,ie,pe,oe[re]);for(let P=0;P<de.length;P++){const he=de[P];ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ie,pe,he.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ue,ie,pe,he.image[re])}}}y(x,C)&&v(n.TEXTURE_CUBE_MAP),se.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function _e(A,x,z,le,ae,se){const Me=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),Se=T(z.internalFormat,Me,fe,z.colorSpace);if(!i.get(x).__hasExternalTextures){const Ie=Math.max(1,x.width>>se),oe=Math.max(1,x.height>>se);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,se,Se,Ie,oe,x.depth,0,Me,fe,null):t.texImage2D(ae,se,Se,Ie,oe,0,Me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ee(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ae,i.get(z).__webglTexture,0,we(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ae,i.get(z).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(A,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let le=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Ee(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Fn?le=n.DEPTH_COMPONENT32F:ae.type===Nn&&(le=n.DEPTH_COMPONENT24));const se=we(x);Ee(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,le,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,le,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const le=we(x);z&&Ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,x.width,x.height):Ee(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const le=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<le.length;ae++){const se=le[ae],Me=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),Se=T(se.internalFormat,Me,fe,se.colorSpace),Le=we(x);z&&Ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Se,x.width,x.height):Ee(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const le=i.get(x.depthTexture).__webglTexture,ae=we(x);if(x.depthTexture.format===ni)Ee(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===zi)Ee(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[le]),x.__webglDepthbuffer[le]=n.createRenderbuffer(),be(x.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),be(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,x,z){const le=i.get(A);x!==void 0&&_e(le.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ae(A)}function H(A){const x=A.texture,z=i.get(A),le=i.get(x);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=x.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,Me=p(A)||a;if(ae){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Se=0;Se<x.mipmaps.length;Se++)z.__webglFramebuffer[fe][Se]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const fe=A.texture;for(let Se=0,Le=fe.length;Se<Le;Se++){const Ie=i.get(fe[Se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ee(A)===!1){const fe=se?x:[x];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Se=0;Se<fe.length;Se++){const Le=fe[Se];z.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Se]);const Ie=s.convert(Le.format,Le.colorSpace),oe=s.convert(Le.type),Be=T(Le.internalFormat,Ie,oe,Le.colorSpace,A.isXRRenderTarget===!0),C=we(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,C,Be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,z.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),be(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),G(n.TEXTURE_CUBE_MAP,x,Me);for(let fe=0;fe<6;fe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)_e(z.__webglFramebuffer[fe][Se],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else _e(z.__webglFramebuffer[fe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(x,Me)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const fe=A.texture;for(let Se=0,Le=fe.length;Se<Le;Se++){const Ie=fe[Se],oe=i.get(Ie);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),G(n.TEXTURE_2D,Ie,Me),_e(z.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),y(Ie,Me)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,le.__webglTexture),G(fe,x,Me),a&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)_e(z.__webglFramebuffer[Se],A,x,n.COLOR_ATTACHMENT0,fe,Se);else _e(z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,fe,0);y(x,Me)&&v(fe),t.unbindTexture()}A.depthBuffer&&Ae(A)}function je(A){const x=p(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,ae=z.length;le<ae;le++){const se=z[le];if(y(se,x)){const Me=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(se).__webglTexture;t.bindTexture(Me,fe),v(Me),t.unbindTexture()}}}function xe(A){if(a&&A.samples>0&&Ee(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,le=A.height;let ae=n.COLOR_BUFFER_BIT;const se=[],Me=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),Se=A.isWebGLMultipleRenderTargets===!0;if(Se)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){se.push(n.COLOR_ATTACHMENT0+Le),A.depthBuffer&&se.push(Me);const Ie=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ie===!1&&(A.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),Se){const oe=i.get(x[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,z,le,0,0,z,le,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);const Ie=i.get(x[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function we(A){return Math.min(r.maxSamples,A.samples)}function Ee(A){const x=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Te(A,x){const z=A.colorSpace,le=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ks||z!==mn&&z!==tn&&(nt.getTransfer(z)===ct?a===!1?e.has("EXT_sRGB")===!0&&le===cn?(A.format=ks,A.minFilter=Qt,A.generateMipmaps=!1):x=Fl.sRGBToLinear(x):(le!==cn||ae!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ee}function Km(n,e,t){const i=t.isWebGL2;function r(s,o=tn){let a;const l=nt.getTransfer(o);if(s===Bn)return n.UNSIGNED_BYTE;if(s===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Rh)return n.BYTE;if(s===Ch)return n.SHORT;if(s===Js)return n.UNSIGNED_SHORT;if(s===Al)return n.INT;if(s===Nn)return n.UNSIGNED_INT;if(s===Fn)return n.FLOAT;if(s===nr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ph)return n.ALPHA;if(s===cn)return n.RGBA;if(s===Lh)return n.LUMINANCE;if(s===Dh)return n.LUMINANCE_ALPHA;if(s===ni)return n.DEPTH_COMPONENT;if(s===zi)return n.DEPTH_STENCIL;if(s===ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uh)return n.RED;if(s===Cl)return n.RED_INTEGER;if(s===Ih)return n.RG;if(s===Pl)return n.RG_INTEGER;if(s===Ll)return n.RGBA_INTEGER;if(s===es||s===ts||s===ns||s===is)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ta||s===Aa||s===wa||s===Ra)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ca||s===Pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ca)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===La||s===Da||s===Ua||s===Ia||s===Na||s===Fa||s===Oa||s===za||s===Ba||s===Ga||s===Ha||s===ka||s===Va||s===Wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===La)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Da)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ua)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ia)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Na)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===za)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ba)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ga)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ha)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ka)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Va)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rs||s===Xa||s===ja)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rs)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nh||s===qa||s===Ya||s===$a)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Zm extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qm extends ci{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const y=[],v=[],T=new $e;let M=null;const E=new en;E.layers.enable(1),E.viewport=new wt;const b=new en;b.layers.enable(2),b.viewport=new wt;const D=[E,b],S=new Zm;S.layers.enable(1),S.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=y[G];return te===void 0&&(te=new Rs,y[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=y[G];return te===void 0&&(te=new Rs,y[G]=te),te.getGripSpace()},this.getHand=function(G){let te=y[G];return te===void 0&&(te=new Rs,y[G]=te),te.getHandSpace()};function F(G){const te=v.indexOf(G.inputSource);if(te===-1)return;const Q=y[te];Q!==void 0&&(Q.update(G.inputSource,G.frame,c||o),Q.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",L);for(let G=0;G<y.length;G++){const te=v[G];te!==null&&(v[G]=null,y[G].disconnect(te))}w=null,O=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new si(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,Q=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?zi:ni,Q=_.stencil?ti:Nn);const _e={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new si(f.textureWidth,f.textureHeight,{format:cn,type:Bn,depthTexture:new ql(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(u);be.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(G){for(let te=0;te<G.removed.length;te++){const Q=G.removed[te],ce=v.indexOf(Q);ce>=0&&(v[ce]=null,y[ce].disconnect(Q))}for(let te=0;te<G.added.length;te++){const Q=G.added[te];let ce=v.indexOf(Q);if(ce===-1){for(let be=0;be<y.length;be++)if(be>=v.length){v.push(Q),ce=be;break}else if(v[be]===null){v[be]=Q,ce=be;break}if(ce===-1)break}const _e=y[ce];_e&&_e.connect(Q)}}const N=new U,B=new U;function Z(G,te,Q){N.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);const ce=N.distanceTo(B),_e=te.projectionMatrix.elements,be=Q.projectionMatrix.elements,Ce=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),ze=(_e[9]+1)/_e[5],H=(_e[9]-1)/_e[5],je=(_e[8]-1)/_e[0],xe=(be[8]+1)/be[0],we=Ce*je,Ee=Ce*xe,Ue=ce/(-je+xe),Te=Ue*-je;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Te),G.translateZ(Ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Ce+Ue,x=Ae+Ue,z=we-Te,le=Ee+(ce-Te),ae=ze*Ae/x*A,se=H*Ae/x*A;G.projectionMatrix.makePerspective(z,le,ae,se,A,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;S.near=b.near=E.near=G.near,S.far=b.far=E.far=G.far,(w!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,O=S.far);const te=G.parent,Q=S.cameras;W(S,te);for(let ce=0;ce<Q.length;ce++)W(Q[ce],te);Q.length===2?Z(S,E,b):S.projectionMatrix.copy(E.projectionMatrix),$(G,S,te)};function $(G,te,Q){Q===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(Q.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Y=null;function J(G,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const Q=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ce=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let _e=0;_e<Q.length;_e++){const be=Q[_e];let Ce=null;if(m!==null)Ce=m.getViewport(be);else{const ze=d.getViewSubImage(f,be);Ce=ze.viewport,_e===0&&(e.setRenderTargetTextures(u,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(u))}let Ae=D[_e];Ae===void 0&&(Ae=new en,Ae.layers.enable(_e),Ae.viewport=new wt,D[_e]=Ae),Ae.matrix.fromArray(be.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(be.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),_e===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(Ae)}}for(let Q=0;Q<y.length;Q++){const ce=v[Q],_e=y[Q];ce!==null&&_e!==void 0&&_e.update(ce,te,c||o)}Y&&Y(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const ee=new jl;ee.setAnimationLoop(J),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function eg(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,kl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,y,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ft&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ft&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tg(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const T=v.program;i.uniformBlockBinding(y,T)}function c(y,v){let T=r[y.id];T===void 0&&(g(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(y,M);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function h(y){const v=d();y.__bindingPointIndex=v;const T=n.createBuffer(),M=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],T=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,b=T.length;E<b;E++){const D=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,w=D.length;S<w;S++){const O=D[S];if(m(O,E,S,M)===!0){const F=O.__offset,V=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let N=0;N<V.length;N++){const B=V[N],Z=_(B);typeof B=="number"||typeof B=="boolean"?(O.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+L,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=0,O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=0,O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=0):(B.toArray(O.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,T,M){const E=y.value,b=v+"_"+T;if(M[b]===void 0)return typeof E=="number"||typeof E=="boolean"?M[b]=E:M[b]=E.clone(),!0;{const D=M[b];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return M[b]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(y){const v=y.uniforms;let T=0;const M=16;for(let b=0,D=v.length;b<D;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,O=S.length;w<O;w++){const F=S[w],V=Array.isArray(F.value)?F.value:[F.value];for(let L=0,N=V.length;L<N;L++){const B=V[L],Z=_(B),W=T%M;W!==0&&M-W<Z.boundary&&(T+=M-W),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=Z.storage}}}const E=T%M;return E>0&&(T+=M-E),y.__size=T,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ql{constructor(e={}){const{canvas:t=$h(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let T=!1,M=0,E=0,b=null,D=-1,S=null;const w=new wt,O=new wt;let F=null;const V=new tt(0);let L=0,N=t.width,B=t.height,Z=1,W=null,$=null;const Y=new wt(0,0,N,B),J=new wt(0,0,N,B);let ee=!1;const G=new Xl;let te=!1,Q=!1,ce=null;const _e=new gt,be=new $e,Ce=new U,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return b===null?Z:1}let H=i;function je(R,k){for(let q=0;q<R.length;q++){const K=R[q],X=t.getContext(K,k);if(X!==null)return X}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zs}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),H=je(k,R),H===null)throw je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,we,Ee,Ue,Te,A,x,z,le,ae,se,Me,fe,Se,Le,Ie,oe,Be,C,ie,pe,ue,ye,j;function ge(){xe=new up(H),we=new rp(H,xe,e),xe.init(we),ue=new Km(H,xe,we),Ee=new Ym(H,xe,we),Ue=new pp(H),Te=new Im,A=new $m(H,xe,Ee,Te,we,ue,Ue),x=new ap(v),z=new hp(v),le=new Mu(H,we),ye=new np(H,xe,le,we),ae=new dp(H,le,Ue,ye),se=new vp(H,ae,le,Ue),C=new _p(H,we,A),Ie=new sp(Te),Me=new Um(v,x,z,xe,we,ye,Ie),fe=new eg(v,Te),Se=new Fm,Le=new km(xe,we),Be=new tp(v,x,z,Ee,se,f,l),oe=new qm(v,se,we),j=new tg(H,Ue,we,Ee),ie=new ip(H,xe,Ue,we),pe=new fp(H,xe,Ue,we),Ue.programs=Me.programs,v.capabilities=we,v.extensions=xe,v.properties=Te,v.renderLists=Se,v.shadowMap=oe,v.state=Ee,v.info=Ue}ge();const de=new Qm(v,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(N,B,!1))},this.getSize=function(R){return R.set(N,B)},this.setSize=function(R,k,q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,B=k,t.width=Math.floor(R*Z),t.height=Math.floor(k*Z),q===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(N*Z,B*Z).floor()},this.setDrawingBufferSize=function(R,k,q){N=R,B=k,Z=q,t.width=Math.floor(R*q),t.height=Math.floor(k*q),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,k,q,K){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,k,q,K),Ee.viewport(w.copy(Y).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,k,q,K){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,k,q,K),Ee.scissor(O.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){Ee.setScissorTest(ee=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(R=!0,k=!0,q=!0){let K=0;if(R){let X=!1;if(b!==null){const Pe=b.texture.format;X=Pe===Ll||Pe===Pl||Pe===Cl}if(X){const Pe=b.texture.type,Fe=Pe===Bn||Pe===Nn||Pe===Js||Pe===ti||Pe===wl||Pe===Rl,Ge=Be.getClearColor(),ke=Be.getClearAlpha(),qe=Ge.r,Ve=Ge.g,Xe=Ge.b;Fe?(m[0]=qe,m[1]=Ve,m[2]=Xe,m[3]=ke,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=qe,g[1]=Ve,g[2]=Xe,g[3]=ke,H.clearBufferiv(H.COLOR,0,g))}else K|=H.COLOR_BUFFER_BIT}k&&(K|=H.DEPTH_BUFFER_BIT),q&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Se.dispose(),Le.dispose(),Te.dispose(),x.dispose(),z.dispose(),se.dispose(),ye.dispose(),j.dispose(),Me.dispose(),de.dispose(),de.removeEventListener("sessionstart",st),de.removeEventListener("sessionend",me),ce&&(ce.dispose(),ce=null),Je.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ue.autoReset,k=oe.enabled,q=oe.autoUpdate,K=oe.needsUpdate,X=oe.type;ge(),Ue.autoReset=R,oe.enabled=k,oe.autoUpdate=q,oe.needsUpdate=K,oe.type=X}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ve(R){const k=R.target;k.removeEventListener("dispose",ve),Ne(k)}function Ne(R){De(R),Te.remove(R)}function De(R){const k=Te.get(R).programs;k!==void 0&&(k.forEach(function(q){Me.releaseProgram(q)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,q,K,X,Pe){k===null&&(k=Ae);const Fe=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Vt(R,k,q,K,X);Ee.setMaterial(K,Fe);let ke=q.index,qe=1;if(K.wireframe===!0){if(ke=ae.getWireframeAttribute(q),ke===void 0)return;qe=2}const Ve=q.drawRange,Xe=q.attributes.position;let lt=Ve.start*qe,Et=(Ve.start+Ve.count)*qe;Pe!==null&&(lt=Math.max(lt,Pe.start*qe),Et=Math.min(Et,(Pe.start+Pe.count)*qe)),ke!==null?(lt=Math.max(lt,0),Et=Math.min(Et,ke.count)):Xe!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,Xe.count));const at=Et-lt;if(at<0||at===1/0)return;ye.setup(X,K,Ge,q,ke);let bt,rt=ie;if(ke!==null&&(bt=le.get(ke),rt=pe,rt.setIndex(bt)),X.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*ze()),rt.setMode(H.LINES)):rt.setMode(H.TRIANGLES);else if(X.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),Ee.setLineWidth(Ye*ze()),X.isLineSegments?rt.setMode(H.LINES):X.isLineLoop?rt.setMode(H.LINE_LOOP):rt.setMode(H.LINE_STRIP)}else X.isPoints?rt.setMode(H.POINTS):X.isSprite&&rt.setMode(H.TRIANGLES);if(X.isBatchedMesh)rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)rt.renderInstances(lt,at,X.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Hn=Math.min(q.instanceCount,Ye);rt.renderInstances(lt,at,Hn)}else rt.render(lt,at)};function We(R,k,q){R.transparent===!0&&R.side===Yt&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,dn(R,k,q),R.side=Gn,R.needsUpdate=!0,dn(R,k,q),R.side=Yt):dn(R,k,q)}this.compile=function(R,k,q=null){q===null&&(q=R),p=Le.get(q),p.init(),y.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==q&&R.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const K=new Set;return R.traverse(function(X){const Pe=X.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const Ge=Pe[Fe];We(Ge,q,X),K.add(Ge)}else We(Pe,q,X),K.add(Pe)}),y.pop(),p=null,K},this.compileAsync=function(R,k,q=null){const K=this.compile(R,k,q);return new Promise(X=>{function Pe(){if(K.forEach(function(Fe){Te.get(Fe).currentProgram.isReady()&&K.delete(Fe)}),K.size===0){X(R);return}setTimeout(Pe,10)}xe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let He=null;function Qe(R){He&&He(R)}function st(){Je.stop()}function me(){Je.start()}const Je=new jl;Je.setAnimationLoop(Qe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){He=R,de.setAnimationLoop(R),R===null?Je.stop():Je.start()},de.addEventListener("sessionstart",st),de.addEventListener("sessionend",me),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,k,b),p=Le.get(R,y.length),p.init(),y.push(p),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,te=Ie.init(this.clippingPlanes,Q),_=Se.get(R,u.length),_.init(),u.push(_),it(R,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,$),this.info.render.frame++,te===!0&&Ie.beginShadows();const q=p.state.shadowsArray;if(oe.render(q,R,k),te===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(_,R),p.setupLights(v._useLegacyLights),k.isArrayCamera){const K=k.cameras;for(let X=0,Pe=K.length;X<Pe;X++){const Fe=K[X];$t(_,R,Fe,Fe.viewport)}}else $t(_,R,k);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,k),ye.resetDefaultState(),D=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function it(R,k,q,K){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){K&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Fe=se.update(R),Ge=R.material;Ge.visible&&_.push(R,Fe,Ge,q,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const Fe=se.update(R),Ge=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(Ge)){const ke=Fe.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const Xe=ke[qe],lt=Ge[Xe.materialIndex];lt&&lt.visible&&_.push(R,Fe,lt,q,Ce.z,Xe)}}else Ge.visible&&_.push(R,Fe,Ge,q,Ce.z,null)}}const Pe=R.children;for(let Fe=0,Ge=Pe.length;Fe<Ge;Fe++)it(Pe[Fe],k,q,K)}function $t(R,k,q,K){const X=R.opaque,Pe=R.transmissive,Fe=R.transparent;p.setupLightsView(q),te===!0&&Ie.setGlobalState(v.clippingPlanes,q),Pe.length>0&&et(X,Pe,k,q),K&&Ee.viewport(w.copy(K)),X.length>0&&un(X,k,q),Pe.length>0&&un(Pe,k,q),Fe.length>0&&un(Fe,k,q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function et(R,k,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Pe=we.isWebGL2;ce===null&&(ce=new si(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?nr:Bn,minFilter:tr,samples:Pe?4:0})),v.getDrawingBufferSize(be),Pe?ce.setSize(be.x,be.y):ce.setSize(Ws(be.x),Ws(be.y));const Fe=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(V),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=zn,un(R,q,K),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce);let ke=!1;for(let qe=0,Ve=k.length;qe<Ve;qe++){const Xe=k[qe],lt=Xe.object,Et=Xe.geometry,at=Xe.material,bt=Xe.group;if(at.side===Yt&&lt.layers.test(K.layers)){const rt=at.side;at.side=Ft,at.needsUpdate=!0,gn(lt,q,K,Et,at,bt),at.side=rt,at.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce)),v.setRenderTarget(Fe),v.setClearColor(V,L),v.toneMapping=Ge}function un(R,k,q){const K=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Pe=R.length;X<Pe;X++){const Fe=R[X],Ge=Fe.object,ke=Fe.geometry,qe=K===null?Fe.material:K,Ve=Fe.group;Ge.layers.test(q.layers)&&gn(Ge,k,q,ke,qe,Ve)}}function gn(R,k,q,K,X,Pe){R.onBeforeRender(v,k,q,K,X,Pe),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,k,q,K,R,Pe),X.transparent===!0&&X.side===Yt&&X.forceSinglePass===!1?(X.side=Ft,X.needsUpdate=!0,v.renderBufferDirect(q,k,K,X,R,Pe),X.side=Gn,X.needsUpdate=!0,v.renderBufferDirect(q,k,K,X,R,Pe),X.side=Yt):v.renderBufferDirect(q,k,K,X,R,Pe),R.onAfterRender(v,k,q,K,X,Pe)}function dn(R,k,q){k.isScene!==!0&&(k=Ae);const K=Te.get(R),X=p.state.lights,Pe=p.state.shadowsArray,Fe=X.state.version,Ge=Me.getParameters(R,X.state,Pe,k,q),ke=Me.getProgramCacheKey(Ge);let qe=K.programs;K.environment=R.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(R.isMeshStandardMaterial?z:x).get(R.envMap||K.environment),qe===void 0&&(R.addEventListener("dispose",ve),qe=new Map,K.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Fe)return Kt(R,Ge),Ve}else Ge.uniforms=Me.getUniforms(R),R.onBuild(q,Ge,v),R.onBeforeCompile(Ge,v),Ve=Me.acquireProgram(Ge,ke),qe.set(ke,Ve),K.uniforms=Ge.uniforms;const Xe=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ie.uniform),Kt(R,Ge),K.needsLights=zt(R),K.lightsStateVersion=Fe,K.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function wn(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Br.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Kt(R,k){const q=Te.get(R);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Vt(R,k,q,K,X){k.isScene!==!0&&(k=Ae),A.resetTextureUnits();const Pe=k.fog,Fe=K.isMeshStandardMaterial?k.environment:null,Ge=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,ke=(K.isMeshStandardMaterial?z:x).get(K.envMap||Fe),qe=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Et=!!q.morphAttributes.color;let at=zn;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=v.toneMapping);const bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=bt!==void 0?bt.length:0,Ye=Te.get(K),Hn=p.state.lights;if(te===!0&&(Q===!0||R!==S)){const Ct=R===S&&K.id===D;Ie.setState(K,R,Ct)}let ot=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Hn.state.version||Ye.outputColorSpace!==Ge||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||Ye.envMap!==ke||K.fog===!0&&Ye.fog!==Pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ie.numPlanes||Ye.numIntersection!==Ie.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==Xe||Ye.morphNormals!==lt||Ye.morphColors!==Et||Ye.toneMapping!==at||we.isWebGL2===!0&&Ye.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ye.__version=K.version);let Bt=Ye.currentProgram;ot===!0&&(Bt=dn(K,k,X));let hi=!1,_n=!1,vn=!1;const pt=Bt.getUniforms(),Wt=Ye.uniforms;if(Ee.useProgram(Bt.program)&&(hi=!0,_n=!0,vn=!0),K.id!==D&&(D=K.id,_n=!0),hi||S!==R){pt.setValue(H,"projectionMatrix",R.projectionMatrix),pt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Ct=pt.map.cameraPosition;Ct!==void 0&&Ct.setValue(H,Ce.setFromMatrixPosition(R.matrixWorld)),we.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,_n=!0,vn=!0)}if(X.isSkinnedMesh){pt.setOptional(H,X,"bindMatrix"),pt.setOptional(H,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(we.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(H,"boneTexture",Ct.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(pt.setOptional(H,X,"batchingTexture"),pt.setValue(H,"batchingTexture",X._matricesTexture,A));const kn=q.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0&&we.isWebGL2===!0)&&C.update(X,q,Bt),(_n||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,pt.setValue(H,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Wt.envMap.value=ke,Wt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),_n&&(pt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&ft(Wt,vn),Pe&&K.fog===!0&&fe.refreshFogUniforms(Wt,Pe),fe.refreshMaterialUniforms(Wt,K,Z,B,ce),Br.upload(H,wn(Ye),Wt,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Br.upload(H,wn(Ye),Wt,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pt.setValue(H,"center",X.center),pt.setValue(H,"modelViewMatrix",X.modelViewMatrix),pt.setValue(H,"normalMatrix",X.normalMatrix),pt.setValue(H,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ct=K.uniformsGroups;for(let ki=0,Kr=Ct.length;ki<Kr;ki++)if(we.isWebGL2){const cr=Ct[ki];j.update(cr,Bt),j.bind(cr,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function ft(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function zt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,k,q){Te.get(R.texture).__webglTexture=k,Te.get(R.depthTexture).__webglTexture=q;const K=Te.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const q=Te.get(R);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,q=0){b=R,M=k,E=q;let K=!0,X=null,Pe=!1,Fe=!1;if(R){const ke=Te.get(R);ke.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(H.FRAMEBUFFER,null),K=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(R):ke.__hasExternalTextures&&A.rebindTextures(R,Te.get(R.texture).__webglTexture,Te.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);const Ve=Te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?X=Ve[k][q]:X=Ve[k],Pe=!0):we.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?X=Te.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[q]:X=Ve,w.copy(R.viewport),O.copy(R.scissor),F=R.scissorTest}else w.copy(Y).multiplyScalar(Z).floor(),O.copy(J).multiplyScalar(Z).floor(),F=ee;if(Ee.bindFramebuffer(H.FRAMEBUFFER,X)&&we.drawBuffers&&K&&Ee.drawBuffers(R,X),Ee.viewport(w),Ee.scissor(O),Ee.setScissorTest(F),Pe){const ke=Te.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,q)}else if(Fe){const ke=Te.get(R.texture),qe=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,qe)}D=-1},this.readRenderTargetPixels=function(R,k,q,K,X,Pe,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){Ee.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const ke=R.texture,qe=ke.format,Ve=ke.type;if(qe!==cn&&ue.convert(qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===nr&&(xe.has("EXT_color_buffer_half_float")||we.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ve!==Bn&&ue.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Fn&&(we.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-K&&q>=0&&q<=R.height-X&&H.readPixels(k,q,K,X,ue.convert(qe),ue.convert(Ve),Pe)}finally{const ke=b!==null?Te.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,k,q=0){const K=Math.pow(2,-q),X=Math.floor(k.image.width*K),Pe=Math.floor(k.image.height*K);A.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,R.x,R.y,X,Pe),Ee.unbindTexture()},this.copyTextureToTexture=function(R,k,q,K=0){const X=k.image.width,Pe=k.image.height,Fe=ue.convert(q.format),Ge=ue.convert(q.type);A.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,K,R.x,R.y,X,Pe,Fe,Ge,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,K,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Fe,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,K,R.x,R.y,Fe,Ge,k.image),K===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,k,q,K,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=R.max.x-R.min.x+1,Fe=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,ke=ue.convert(K.format),qe=ue.convert(K.type);let Ve;if(K.isData3DTexture)A.setTexture3D(K,0),Ve=H.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const Xe=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Et=H.getParameter(H.UNPACK_SKIP_PIXELS),at=H.getParameter(H.UNPACK_SKIP_ROWS),bt=H.getParameter(H.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[X]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,rt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Ve,X,k.x,k.y,k.z,Pe,Fe,Ge,ke,qe,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,X,k.x,k.y,k.z,Pe,Fe,Ge,ke,rt.data)):H.texSubImage3D(Ve,X,k.x,k.y,k.z,Pe,Fe,Ge,ke,qe,rt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Et),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,bt),X===0&&K.generateMipmaps&&H.generateMipmap(Ve),Ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){M=0,E=0,b=null,Ee.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qs?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?ii:Ul}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?Tt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ng extends Ql{}ng.prototype.isWebGL1Renderer=!0;class ig extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class rg extends Rt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Qi extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new U,Go=new U,Ho=new gt,Cs=new lr,Ur=new or;class ia extends Ot{constructor(e=new _t,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bo.fromBufferAttribute(t,r-1),Go.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bo.distanceTo(Go);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Ho.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Ho);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,d=new U,f=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=u,T=y-1;v<T;v+=m){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,M),h.fromBufferAttribute(p,E),Cs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=u,T=y-1;v<T;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Cs.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ko=new U,Vo=new U;class Wo extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ko.fromBufferAttribute(t,r),Vo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ko.distanceTo(Vo);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sg extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ec extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xo=new gt,js=new lr,Ir=new or,Nr=new U;class ag extends Ot{constructor(e=new _t,t=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Xo.copy(r).invert(),js.copy(e.ray).applyMatrix4(Xo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Nr.fromBufferAttribute(d,p),jo(Nr,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Nr.fromBufferAttribute(d,g),jo(Nr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jo(n,e,t,i,r,s,o){const a=js.distanceSqToPoint(n);if(a<t){const l=new U;js.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ra extends _t{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let d=e;const f=(t-e)/r,m=new U,g=new $e;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<r;_++){const p=_*(i+1);for(let u=0;u<i;u++){const y=u+p,v=y,T=y+i+1,M=y+i+2,E=y+1;a.push(v,T,E),a.push(T,M,E)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends _t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new U,f=new U,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const y=[],v=u/i;let T=0;u===0&&o===0?T=.5/t:u===i&&l===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){const E=M/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(E+T,1-v),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const v=h[u][y+1],T=h[u][y],M=h[u+1][y],E=h[u+1][y+1];(u!==0||o>0)&&m.push(v,T,E),(u!==i-1||l<Math.PI)&&m.push(T,M,E)}this.setIndex(m),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class og extends Qi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const qo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lg{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const cg=new lg;class sa{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sa.DEFAULT_MATERIAL_NAME="__DEFAULT";class hg extends sa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ir("img");function l(){h(),qo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tc extends sa{constructor(e){super(e)}load(e,t,i,r){const s=new kt,o=new hg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ug extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dg{constructor(e,t,i=0,r=1/0){this.ray=new lr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return qs(e,this,i,t),i.sort(Yo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qs(e[r],this,i,t);return i.sort(Yo),i}}function Yo(n,e){return n.distance-e.distance}function qs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)qs(r[s],e,t,!0)}}class $o{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zs);const Ko={type:"change"},Ps={type:"start"},Zo={type:"end"},Fr=new lr,Jo=new In,fg=Math.cos(70*Yh.DEG2RAD);class pg extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",se),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ko),i.update(),s=r.NONE},this.update=(function(){const C=new U,ie=new ai().setFromUnitVectors(e.up,new U(0,1,0)),pe=ie.clone().invert(),ue=new U,ye=new ai,j=new U,ge=2*Math.PI;return function(re=null){const P=i.object.position;C.copy(P).sub(i.target),C.applyQuaternion(ie),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&O(S(re)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let he=i.minAzimuthAngle,ve=i.maxAzimuthAngle;isFinite(he)&&isFinite(ve)&&(he<-Math.PI?he+=ge:he>Math.PI&&(he-=ge),ve<-Math.PI?ve+=ge:ve>Math.PI&&(ve-=ge),he<=ve?a.theta=Math.max(he,Math.min(ve,a.theta)):a.theta=a.theta>(he+ve)/2?Math.max(he,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&E||i.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(pe),P.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ne=!1;if(i.zoomToCursor&&E){let De=null;if(i.object.isPerspectiveCamera){const We=C.length();De=$(We*c);const He=We-De;i.object.position.addScaledVector(T,He),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const We=new U(M.x,M.y,0);We.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ne=!0;const He=new U(M.x,M.y,0);He.unproject(i.object),i.object.position.sub(He).add(We),i.object.updateMatrixWorld(),De=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;De!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(De).add(i.object.position):(Fr.origin.copy(i.object.position),Fr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fr.direction))<fg?e.lookAt(i.target):(Jo.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fr.intersectPlane(Jo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ne=!0);return c=1,E=!1,Ne||ue.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||j.distanceToSquared(i.target)>0?(i.dispatchEvent(Ko),ue.copy(i.object.position),ye.copy(i.object.quaternion),j.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Se),i.domElement.removeEventListener("pointerdown",Te),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",x),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",se),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $o,l=new $o;let c=1;const h=new U,d=new $e,f=new $e,m=new $e,g=new $e,_=new $e,p=new $e,u=new $e,y=new $e,v=new $e,T=new U,M=new $e;let E=!1;const b=[],D={};function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(C){const ie=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ie)}function O(C){l.theta-=C}function F(C){l.phi-=C}const V=(function(){const C=new U;return function(pe,ue){C.setFromMatrixColumn(ue,0),C.multiplyScalar(-pe),h.add(C)}})(),L=(function(){const C=new U;return function(pe,ue){i.screenSpacePanning===!0?C.setFromMatrixColumn(ue,1):(C.setFromMatrixColumn(ue,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(pe),h.add(C)}})(),N=(function(){const C=new U;return function(pe,ue){const ye=i.domElement;if(i.object.isPerspectiveCamera){const j=i.object.position;C.copy(j).sub(i.target);let ge=C.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),V(2*pe*ge/ye.clientHeight,i.object.matrix),L(2*ue*ge/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(pe*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),L(ue*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function B(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C,ie){if(!i.zoomToCursor)return;E=!0;const pe=i.domElement.getBoundingClientRect(),ue=C-pe.left,ye=ie-pe.top,j=pe.width,ge=pe.height;M.x=ue/j*2-1,M.y=-(ye/ge)*2+1,T.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function Y(C){d.set(C.clientX,C.clientY)}function J(C){W(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function ee(C){g.set(C.clientX,C.clientY)}function G(C){f.set(C.clientX,C.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;O(2*Math.PI*m.x/ie.clientHeight),F(2*Math.PI*m.y/ie.clientHeight),d.copy(f),i.update()}function te(C){y.set(C.clientX,C.clientY),v.subVectors(y,u),v.y>0?B(w(v.y)):v.y<0&&Z(w(v.y)),u.copy(y),i.update()}function Q(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),N(p.x,p.y),g.copy(_),i.update()}function ce(C){W(C.clientX,C.clientY),C.deltaY<0?Z(w(C.deltaY)):C.deltaY>0&&B(w(C.deltaY)),i.update()}function _e(C){let ie=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),i.update())}function be(C){if(b.length===1)d.set(C.pageX,C.pageY);else{const ie=Be(C),pe=.5*(C.pageX+ie.x),ue=.5*(C.pageY+ie.y);d.set(pe,ue)}}function Ce(C){if(b.length===1)g.set(C.pageX,C.pageY);else{const ie=Be(C),pe=.5*(C.pageX+ie.x),ue=.5*(C.pageY+ie.y);g.set(pe,ue)}}function Ae(C){const ie=Be(C),pe=C.pageX-ie.x,ue=C.pageY-ie.y,ye=Math.sqrt(pe*pe+ue*ue);u.set(0,ye)}function ze(C){i.enableZoom&&Ae(C),i.enablePan&&Ce(C)}function H(C){i.enableZoom&&Ae(C),i.enableRotate&&be(C)}function je(C){if(b.length==1)f.set(C.pageX,C.pageY);else{const pe=Be(C),ue=.5*(C.pageX+pe.x),ye=.5*(C.pageY+pe.y);f.set(ue,ye)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;O(2*Math.PI*m.x/ie.clientHeight),F(2*Math.PI*m.y/ie.clientHeight),d.copy(f)}function xe(C){if(b.length===1)_.set(C.pageX,C.pageY);else{const ie=Be(C),pe=.5*(C.pageX+ie.x),ue=.5*(C.pageY+ie.y);_.set(pe,ue)}p.subVectors(_,g).multiplyScalar(i.panSpeed),N(p.x,p.y),g.copy(_)}function we(C){const ie=Be(C),pe=C.pageX-ie.x,ue=C.pageY-ie.y,ye=Math.sqrt(pe*pe+ue*ue);y.set(0,ye),v.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),B(v.y),u.copy(y);const j=(C.pageX+ie.x)*.5,ge=(C.pageY+ie.y)*.5;W(j,ge)}function Ee(C){i.enableZoom&&we(C),i.enablePan&&xe(C)}function Ue(C){i.enableZoom&&we(C),i.enableRotate&&je(C)}function Te(C){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",x)),Le(C),C.pointerType==="touch"?Me(C):z(C))}function A(C){i.enabled!==!1&&(C.pointerType==="touch"?fe(C):le(C))}function x(C){Ie(C),b.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",x)),i.dispatchEvent(Zo),s=r.NONE}function z(C){let ie;switch(C.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case pi.DOLLY:if(i.enableZoom===!1)return;J(C),s=r.DOLLY;break;case pi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;ee(C),s=r.PAN}else{if(i.enableRotate===!1)return;Y(C),s=r.ROTATE}break;case pi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Y(C),s=r.ROTATE}else{if(i.enablePan===!1)return;ee(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ps)}function le(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(C);break;case r.DOLLY:if(i.enableZoom===!1)return;te(C);break;case r.PAN:if(i.enablePan===!1)return;Q(C);break}}function ae(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ps),ce(C),i.dispatchEvent(Zo))}function se(C){i.enabled===!1||i.enablePan===!1||_e(C)}function Me(C){switch(oe(C),b.length){case 1:switch(i.touches.ONE){case mi.ROTATE:if(i.enableRotate===!1)return;be(C),s=r.TOUCH_ROTATE;break;case mi.PAN:if(i.enablePan===!1)return;Ce(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(C),s=r.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ps)}function fe(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;je(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(C),i.update();break;default:s=r.NONE}}function Se(C){i.enabled!==!1&&C.preventDefault()}function Le(C){b.push(C.pointerId)}function Ie(C){delete D[C.pointerId];for(let ie=0;ie<b.length;ie++)if(b[ie]==C.pointerId){b.splice(ie,1);return}}function oe(C){let ie=D[C.pointerId];ie===void 0&&(ie=new $e,D[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function Be(C){const ie=C.pointerId===b[0]?b[1]:b[0];return D[ie]}i.domElement.addEventListener("contextmenu",Se),i.domElement.addEventListener("pointerdown",Te),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}var hn=Math.PI,ut=hn*2,Ki=hn/180,mg=1440,gg=398600.8,qt=6378.135,An=60/Math.sqrt(qt*qt*qt/gg),Ls=qt*An/60,_g=1/An,Jn=.001082616,vg=-253881e-11,xg=-165597e-11,Qn=vg/Jn,rr=2/3;function Mg(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:d}}function Qo(n,e,t,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function aa(n,e,t,i,r,s,o){if(n instanceof Date){var a=n;return Qo(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Qo(n,e,t,i,r,s,o)}function nc(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,o=n.pho,a=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,g=n.sh2,_=n.sh3,p=n.si2,u=n.si3,y=n.sl2,v=n.sl3,T=n.sl4,M=n.t,E=n.xgh2,b=n.xgh3,D=n.xgh4,S=n.xh2,w=n.xh3,O=n.xi2,F=n.xi3,V=n.xl2,L=n.xl3,N=n.xl4,B=n.zmol,Z=n.zmos,W=e.init,$=e.opsmode,Y=e.ep,J=e.inclp,ee=e.nodep,G=e.argpp,te=e.mp,Q,ce,_e,be,Ce,Ae,ze,H,je,xe,we,Ee,Ue,Te,A,x,z,le,ae,se,Me,fe=119459e-10,Se=.01675,Le=.00015835218,Ie=.0549;Me=Z+fe*M,W==="y"&&(Me=Z),se=Me+2*Se*Math.sin(Me),z=Math.sin(se),xe=.5*z*z-.25,we=-.5*z*Math.cos(se);var oe=c*xe+h*we,Be=p*xe+u*we,C=y*xe+v*we+T*z,ie=d*xe+f*we+m*z,pe=g*xe+_*we;Me=B+Le*M,W==="y"&&(Me=B),se=Me+2*Ie*Math.sin(Me),z=Math.sin(se),xe=.5*z*z-.25,we=-.5*z*Math.cos(se);var ue=i*xe+t*we,ye=O*xe+F*we,j=V*xe+L*we+N*z,ge=E*xe+b*we+D*z,de=S*xe+w*we;return Ee=oe+ue,A=Be+ye,x=C+j,Ue=ie+ge,Te=pe+de,W==="n"&&(Ee-=r,A-=a,x-=l,Ue-=s,Te-=o,J+=A,Y+=Ee,be=Math.sin(J),_e=Math.cos(J),J>=.2?(Te/=be,Ue-=_e*Te,G+=Ue,ee+=Te,te+=x):(Ae=Math.sin(ee),Ce=Math.cos(ee),Q=be*Ae,ce=be*Ce,ze=Te*Ce+A*_e*Ae,H=-Te*Ae+A*_e*Ce,Q+=ze,ce+=H,ee%=ut,ee<0&&$==="a"&&(ee+=ut),le=te+G+_e*ee,je=x+Ue-A*ee*be,le+=je,ae=ee,ee=Math.atan2(Q,ce),ee<0&&$==="a"&&(ee+=ut),Math.abs(ae-ee)>hn&&(ee<ae?ee+=ut:ee-=ut),te+=x,G=le-te-_e*ee)),{ep:Y,inclp:J,nodep:ee,argpp:G,mp:te}}function Sg(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,o=n.nodep,a=n.np,l,c,h,d,f,m,g,_,p,u,y,v,T,M,E,b,D,S,w,O,F,V,L,N,B,Z,W,$,Y,J,ee,G,te,Q,ce,_e,be,Ce,Ae,ze,H,je,xe,we,Ee,Ue,Te,A,x,z,le,ae,se,Me,fe,Se,Le,Ie,oe,Be,C,ie,pe,ue=.01675,ye=.0549,j=29864797e-13,ge=47968065e-14,de=.39785416,re=.91744867,P=.1945905,he=-.98088458,ve=a,Ne=t,De=Math.sin(o),We=Math.cos(o),He=Math.sin(i),Qe=Math.cos(i),st=Math.sin(s),me=Math.cos(s),Je=Ne*Ne,it=1-Je,$t=Math.sqrt(it),et=0,un=0,gn=0,dn=0,wn=0,Kt=e+18261.5+r/1440,Vt=(4.523602-.00092422029*Kt)%ut,ft=Math.sin(Vt),zt=Math.cos(Vt),R=.91375164-.03568096*zt,k=Math.sqrt(1-R*R),q=.089683511*ft/k,K=Math.sqrt(1-q*q),X=5.8351514+.001944368*Kt,Pe=.39785416*ft/k,Fe=K*zt+.91744867*q*ft;Pe=Math.atan2(Pe,Fe),Pe+=X-Vt;var Ge=Math.cos(Pe),ke=Math.sin(Pe);O=P,F=he,N=re,B=de,V=We,L=De,y=j;for(var qe=1/ve,Ve=0;Ve<2;)Ve+=1,l=O*V+F*N*L,h=-F*V+O*N*L,g=-O*L+F*N*V,_=F*B,p=F*L+O*N*V,u=O*B,c=me*g+st*_,d=me*p+st*u,f=-st*g+me*_,m=-st*p+me*u,v=l*Qe+c*He,T=h*Qe+d*He,M=-l*He+c*Qe,E=-h*He+d*Qe,b=f*He,D=m*He,S=f*Qe,w=m*Qe,C=12*v*v-3*M*M,ie=24*v*T-6*M*E,pe=12*T*T-3*E*E,ae=3*(l*l+c*c)+C*Je,se=6*(l*h+c*d)+ie*Je,Me=3*(h*h+d*d)+pe*Je,fe=-6*l*f+Je*(-24*v*S-6*M*b),Se=-6*(l*m+h*f)+Je*(-24*(T*S+v*w)+-6*(M*D+E*b)),Le=-6*h*m+Je*(-24*T*w-6*E*D),Ie=6*c*f+Je*(24*v*b-6*M*S),oe=6*(d*f+c*m)+Je*(24*(T*b+v*D)-6*(E*S+M*w)),Be=6*d*m+Je*(24*T*D-6*E*w),ae=ae+ae+it*C,se=se+se+it*ie,Me=Me+Me+it*pe,Te=y*qe,Ue=-.5*Te/$t,A=Te*$t,Ee=-15*Ne*A,x=v*M+T*E,z=T*M+v*E,le=T*E-v*M,Ve===1&&(Z=Ee,W=Ue,$=Te,Y=A,J=x,ee=z,G=le,te=ae,Q=se,ce=Me,_e=fe,be=Se,Ce=Le,Ae=Ie,ze=oe,H=Be,je=C,xe=ie,we=pe,O=Ge,F=ke,N=R,B=k,V=K*We+q*De,L=De*K-We*q,y=ge);var Xe=(4.7199672+(.2299715*Kt-X))%ut,lt=(6.2565837+.017201977*Kt)%ut,Et=2*Z*ee,at=2*Z*G,bt=2*W*be,rt=2*W*(Ce-_e),Ye=-2*$*Q,Hn=-2*$*(ce-te),ot=-2*$*(-21-9*Je)*ue,Bt=2*Y*xe,hi=2*Y*(we-je),_n=-18*Y*ue,vn=-2*W*ze,pt=-2*W*(H-Ae),Wt=2*Ee*z,kn=2*Ee*le,Ct=2*Ue*Se,ki=2*Ue*(Le-fe),Kr=-2*Te*se,cr=-2*Te*(Me-ae),ac=-2*Te*(-21-9*Je)*ye,oc=2*A*ie,lc=2*A*(pe-C),cc=-18*A*ye,hc=-2*Ue*oe,uc=-2*Ue*(Be-Ie);return{snodm:De,cnodm:We,sinim:st,cosim:me,sinomm:He,cosomm:Qe,day:Kt,e3:kn,ee2:Wt,em:Ne,emsq:Je,gam:X,peo:et,pgho:dn,pho:wn,pinco:un,plo:gn,rtemsq:$t,se2:Et,se3:at,sgh2:Bt,sgh3:hi,sgh4:_n,sh2:vn,sh3:pt,si2:bt,si3:rt,sl2:Ye,sl3:Hn,sl4:ot,s1:Ee,s2:Ue,s3:Te,s4:A,s5:x,s6:z,s7:le,ss1:Z,ss2:W,ss3:$,ss4:Y,ss5:J,ss6:ee,ss7:G,sz1:te,sz2:Q,sz3:ce,sz11:_e,sz12:be,sz13:Ce,sz21:Ae,sz22:ze,sz23:H,sz31:je,sz32:xe,sz33:we,xgh2:oc,xgh3:lc,xgh4:cc,xh2:hc,xh3:uc,xi2:Ct,xi3:ki,xl2:Kr,xl3:cr,xl4:ac,nm:ve,z1:ae,z2:se,z3:Me,z11:fe,z12:Se,z13:Le,z21:Ie,z22:oe,z23:Be,z31:C,z32:ie,z33:pe,zmol:Xe,zmos:lt}}function yg(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,o=n.s4,a=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,g=n.sz1,_=n.sz3,p=n.sz11,u=n.sz13,y=n.sz21,v=n.sz23,T=n.sz31,M=n.sz33,E=n.t,b=n.tc,D=n.gsto,S=n.mo,w=n.mdot,O=n.no,F=n.nodeo,V=n.nodedot,L=n.xpidot,N=n.z1,B=n.z3,Z=n.z11,W=n.z13,$=n.z21,Y=n.z23,J=n.z31,ee=n.z33,G=n.ecco,te=n.eccsq,Q=n.emsq,ce=n.em,_e=n.argpm,be=n.inclm,Ce=n.mm,Ae=n.nm,ze=n.nodem,H=n.irez,je=n.atime,xe=n.d2201,we=n.d2211,Ee=n.d3210,Ue=n.d3222,Te=n.d4410,A=n.d4422,x=n.d5220,z=n.d5232,le=n.d5421,ae=n.d5433,se=n.dedt,Me=n.didt,fe=n.dmdt,Se=n.dnodt,Le=n.domdt,Ie=n.del1,oe=n.del2,Be=n.del3,C=n.xfact,ie=n.xlamo,pe=n.xli,ue=n.xni,ye,j,ge,de,re,P,he,ve,Ne,De,We,He,Qe,st,me,Je,it,$t,et,un,gn,dn,wn,Kt,Vt,ft,zt,R,k,q,K,X,Pe=17891679e-13,Fe=21460748e-13,Ge=22123015e-14,ke=17891679e-13,qe=73636953e-16,Ve=21765803e-16,Xe=.0043752690880113,lt=37393792e-14,Et=11428639e-14,at=.00015835218,bt=119459e-10;H=0,Ae<.0052359877&&Ae>.0034906585&&(H=1),Ae>=.00826&&Ae<=.00924&&ce>=.5&&(H=2);var rt=c*bt*m,Ye=h*bt*(p+u),Hn=-bt*d*(g+_-14-6*Q),ot=f*bt*(T+M-6),Bt=-bt*h*(y+v);(be<.052359877||be>hn-.052359877)&&(Bt=0),l!==0&&(Bt/=l);var hi=ot-e*Bt;se=rt+i*at*a,Me=Ye+r*at*(Z+W),fe=Hn-at*s*(N+B-14-6*Q);var _n=o*at*(J+ee-6),vn=-at*r*($+Y);(be<.052359877||be>hn-.052359877)&&(vn=0),Le=hi+_n,Se=Bt,l!==0&&(Le-=e/l*vn,Se+=vn/l);var pt=0,Wt=(D+b*Xe)%ut;if(ce+=se*E,be+=Me*E,_e+=Le*E,ze+=Se*E,Ce+=fe*E,H!==0){if(q=Math.pow(Ae/An,rr),H===2){K=e*e;var kn=ce;ce=G;var Ct=Q;Q=te,X=ce*Q,st=-.306-(ce-.64)*.44,ce<=.65?(me=3.616-13.247*ce+16.29*Q,it=-19.302+117.39*ce-228.419*Q+156.591*X,$t=-18.9068+109.7927*ce-214.6334*Q+146.5816*X,et=-41.122+242.694*ce-471.094*Q+313.953*X,un=-146.407+841.88*ce-1629.014*Q+1083.435*X,gn=-532.114+3017.977*ce-5740.032*Q+3708.276*X):(me=-72.099+331.819*ce-508.738*Q+266.724*X,it=-346.844+1582.851*ce-2415.925*Q+1246.113*X,$t=-342.585+1554.908*ce-2366.899*Q+1215.972*X,et=-1052.797+4758.686*ce-7193.992*Q+3651.957*X,un=-3581.69+16178.11*ce-24462.77*Q+12422.52*X,ce>.715?gn=-5149.66+29936.92*ce-54087.36*Q+31324.56*X:gn=1464.74-4664.75*ce+3763.64*Q),ce<.7?(Kt=-919.2277+4988.61*ce-9064.77*Q+5542.21*X,dn=-822.71072+4568.6173*ce-8491.4146*Q+5337.524*X,wn=-853.666+4690.25*ce-8624.77*Q+5341.4*X):(Kt=-37995.78+161616.52*ce-229838.2*Q+109377.94*X,dn=-51752.104+218913.95*ce-309468.16*Q+146349.42*X,wn=-40023.88+170470.89*ce-242699.48*Q+115605.82*X),Vt=l*l,ye=.75*(1+2*e+K),j=1.5*Vt,de=1.875*l*(1-2*e-3*K),re=-1.875*l*(1+2*e-3*K),he=35*Vt*ye,ve=39.375*Vt*Vt,Ne=9.84375*l*(Vt*(1-2*e-5*K)+.33333333*(-2+4*e+6*K)),De=l*(4.92187512*Vt*(-2-4*e+10*K)+6.56250012*(1+2*e-3*K)),We=29.53125*l*(2-8*e+K*(-12+8*e+10*K)),He=29.53125*l*(-2-8*e+K*(12+8*e-10*K)),R=Ae*Ae,k=q*q,zt=3*R*k,ft=zt*ke,xe=ft*ye*st,we=ft*j*me,zt*=q,ft=zt*lt,Ee=ft*de*it,Ue=ft*re*$t,zt*=q,ft=2*zt*qe,Te=ft*he*et,A=ft*ve*un,zt*=q,ft=zt*Et,x=ft*Ne*gn,z=ft*De*wn,ft=2*zt*Ve,le=ft*We*dn,ae=ft*He*Kt,ie=(S+F+F-(Wt+Wt))%ut,C=w+fe+2*(V+Se-Xe)-O,ce=kn,Q=Ct}H===1&&(Qe=1+Q*(-2.5+.8125*Q),it=1+2*Q,Je=1+Q*(-6+6.60937*Q),ye=.75*(1+e)*(1+e),ge=.9375*l*l*(1+3*e)-.75*(1+e),P=1+e,P*=1.875*P*P,Ie=3*Ae*Ae*q*q,oe=2*Ie*ye*Qe*Pe,Be=3*Ie*P*Je*Ge*q,Ie=Ie*ge*it*Fe*q,ie=(S+F+t-Wt)%ut,C=w+L+fe+Le+Se-(O+Xe)),pe=ie,ue=O,je=0,Ae=O+pt}return{em:ce,argpm:_e,inclm:be,mm:Ce,nm:Ae,nodem:ze,irez:H,atime:je,d2201:xe,d2211:we,d3210:Ee,d3222:Ue,d4410:Te,d4422:A,d5220:x,d5232:z,d5421:le,d5433:ae,dedt:se,didt:Me,dmdt:fe,dndt:pt,dnodt:Se,domdt:Le,del1:Ie,del2:oe,del3:Be,xfact:C,xlamo:ie,xli:pe,xni:ue}}function el(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Ki/240%ut,t<0&&(t+=ut),t}function Ys(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?el(aa.apply(void 0,arguments)):el.apply(void 0,arguments)}function Eg(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(i),h=c*c,d=Math.pow(An/s,rr),f=.75*Jn*(3*h-1)/(l*a),m=f/(d*d),g=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(g*g),s/=1+m;var _=Math.pow(An/s,rr),p=Math.sin(i),u=_*a,y=1-5*h,v=-y-h-h,T=1/_,M=u*u,E=_*(1-e),b="n",D;if(r==="a"){var S=t-7305,w=Math.floor(S+1e-8),O=S-w,F=.017202791694070362,V=1.7321343856509375,L=5075514194322695e-30,N=F+ut;D=(V+F*w+N*O+S*S*L)%ut,D<0&&(D+=ut)}else D=Ys(t+24332815e-1);return{no:s,method:b,ainv:T,ao:_,con41:v,con42:y,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:M,rp:E,rteosq:l,sinio:p,gsto:D}}function bg(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,o=n.d4410,a=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,g=n.del2,_=n.del3,p=n.didt,u=n.dmdt,y=n.dnodt,v=n.domdt,T=n.argpo,M=n.argpdot,E=n.t,b=n.tc,D=n.gsto,S=n.xfact,w=n.xlamo,O=n.no,F=n.atime,V=n.em,L=n.argpm,N=n.inclm,B=n.xli,Z=n.mm,W=n.xni,$=n.nodem,Y=n.nm,J=.13130908,ee=2.8843198,G=.37448087,te=5.7686396,Q=.95240898,ce=1.8014998,_e=1.050833,be=4.4108898,Ce=.0043752690880113,Ae=720,ze=-720,H=259200,je,xe,we,Ee,Ue,Te,A,x,z=0,le=0,ae=(D+b*Ce)%ut;if(V+=f*E,N+=p*E,L+=v*E,$+=y*E,Z+=u*E,e!==0){(F===0||E*F<=0||Math.abs(E)<Math.abs(F))&&(F=0,W=O,B=w),E>0?je=Ae:je=ze;for(var se=381;se===381;)e!==2?(A=m*Math.sin(B-J)+g*Math.sin(2*(B-ee))+_*Math.sin(3*(B-G)),Ue=W+S,Te=m*Math.cos(B-J)+2*g*Math.cos(2*(B-ee))+3*_*Math.cos(3*(B-G)),Te*=Ue):(x=T+M*F,we=x+x,xe=B+B,A=t*Math.sin(we+B-te)+i*Math.sin(B-te)+r*Math.sin(x+B-Q)+s*Math.sin(-x+B-Q)+o*Math.sin(we+xe-ce)+a*Math.sin(xe-ce)+l*Math.sin(x+B-_e)+c*Math.sin(-x+B-_e)+h*Math.sin(x+xe-be)+d*Math.sin(-x+xe-be),Ue=W+S,Te=t*Math.cos(we+B-te)+i*Math.cos(B-te)+r*Math.cos(x+B-Q)+s*Math.cos(-x+B-Q)+l*Math.cos(x+B-_e)+c*Math.cos(-x+B-_e)+2*(o*Math.cos(we+xe-ce)+a*Math.cos(xe-ce)+h*Math.cos(x+xe-be)+d*Math.cos(-x+xe-be)),Te*=Ue),Math.abs(E-F)>=Ae?se=381:(le=E-F,se=0),se===381&&(B+=Ue*je+A*H,W+=A*je+Te*H,F+=je);Y=W+A*le+Te*le*le*.5,Ee=B+Ue*le+A*le*le*.5,e!==1?(Z=Ee-2*$+2*ae,z=Y-O):(Z=Ee-$-L+ae,z=Y-O),Y=O+z}return{atime:F,em:V,argpm:L,inclm:N,xli:B,mm:Z,xni:W,nodem:$,dndt:z,nm:Y}}function ic(n,e){var t,i,r,s,o,a,l,c,h,d,f,m,g,_,p,u,y,v,T,M,E,b,D,S,w,O,F,V=15e-13;n.t=e,n.error=0;var L=n.mo+n.mdot*n.t,N=n.argpo+n.argpdot*n.t,B=n.nodeo+n.nodedot*n.t;h=N,E=L;var Z=n.t*n.t;if(D=B+n.nodecf*Z,y=1-n.cc1*n.t,v=n.bstar*n.cc4*n.t,T=n.t2cof*Z,n.isimp!==1){l=n.omgcof*n.t;var W=1+n.eta*Math.cos(L);a=n.xmcof*(W*W*W-n.delmo),u=l+a,E=L+u,h=N-u,m=Z*n.t,g=m*n.t,y=y-n.d2*Z-n.d3*m-n.d4*g,v+=n.bstar*n.cc5*(Math.sin(E)-n.sinmao),T=T+n.t3cof*m+g*(n.t4cof+n.t*n.t5cof)}b=n.no;var $=n.ecco;if(M=n.inclo,n.method==="d"){_=n.t;var Y={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:_,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:$,argpm:h,inclm:M,xli:n.xli,mm:E,xni:n.xni,nodem:D,nm:b},J=bg(Y);$=J.em,h=J.argpm,M=J.inclm,E=J.mm,D=J.nodem,b=J.nm}if(b<=0)return n.error=2,[!1,!1];var ee=Math.pow(An/b,rr)*y*y;if(b=An/Math.pow(ee,1.5),$-=v,$>=1||$<-.001)return n.error=1,[!1,!1];$<1e-6&&($=1e-6),E+=n.no*T,w=E+h+D,D%=ut,h%=ut,w%=ut,E=(w-h-D)%ut;var G=Math.sin(M),te=Math.cos(M),Q=$;if(S=M,d=h,F=D,O=E,s=G,r=te,n.method==="d"){var ce={inclo:n.inclo,init:"n",ep:Q,inclp:S,nodep:F,argpp:d,mp:O,opsmode:n.operationmode},_e=nc(n,ce);if(Q=_e.ep,F=_e.nodep,d=_e.argpp,O=_e.mp,S=_e.inclp,S<0&&(S=-S,F+=hn,d-=hn),Q<0||Q>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(S),r=Math.cos(S),n.aycof=-.5*Qn*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*Qn*s*(3+5*r)/(1+r):n.xlcof=-.25*Qn*s*(3+5*r)/V);var be=Q*Math.cos(d);u=1/(ee*(1-Q*Q));var Ce=Q*Math.sin(d)+u*n.aycof,Ae=O+d+F+u*n.xlcof*be,ze=(Ae-F)%ut;c=ze,p=9999.9;for(var H=1;Math.abs(p)>=1e-12&&H<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*be-i*Ce,p=(ze-Ce*t+be*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,H+=1;var je=be*t+Ce*i,xe=be*i-Ce*t,we=be*be+Ce*Ce,Ee=ee*(1-we);if(Ee<0)return n.error=4,[!1,!1];var Ue=ee*(1-je),Te=Math.sqrt(ee)*xe/Ue,A=Math.sqrt(Ee)/Ue,x=Math.sqrt(1-we);u=xe/(1+x);var z=ee/Ue*(i-Ce-be*u),le=ee/Ue*(t-be+Ce*u);f=Math.atan2(z,le);var ae=(le+le)*z,se=1-2*z*z;u=1/Ee;var Me=.5*Jn*u,fe=Me*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var Se=Ue*(1-1.5*fe*x*n.con41)+.5*Me*n.x1mth2*se;if(Se<1)return n.error=6,{position:!1,velocity:!1};f-=.25*fe*n.x7thm1*ae;var Le=F+1.5*fe*r*ae,Ie=S+1.5*fe*r*s*se,oe=Te-b*Me*n.x1mth2*ae/An,Be=A+b*Me*(n.x1mth2*se+1.5*n.con41)/An,C=Math.sin(f),ie=Math.cos(f),pe=Math.sin(Le),ue=Math.cos(Le),ye=Math.sin(Ie),j=Math.cos(Ie),ge=-pe*j,de=ue*j,re=ge*C+ue*ie,P=de*C+pe*ie,he=ye*C,ve=ge*ie-ue*C,Ne=de*ie-pe*C,De=ye*ie,We={x:Se*re*qt,y:Se*P*qt,z:Se*he*qt},He={x:(oe*re+Be*ve)*Ls,y:(oe*P+Be*Ne)*Ls,z:(oe*he+Be*De)*Ls};return{position:We,velocity:He}}function Tg(n,e){var t=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,c=e.xno,h=e.xnodeo,d,f,m,g,_,p,u,y,v,T,M,E,b,D,S,w,O,F,V,L,N,B,Z,W,$,Y,J,ee,G,te,Q,ce,_e,be,Ce,Ae,ze,H,je,xe,we,Ee,Ue,Te,A,x,z,le,ae,se,Me,fe,Se,Le,Ie,oe,Be=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=r,n.ecco=s,n.argpo=o,n.inclo=a,n.mo=l,n.no=c,n.nodeo=h,n.operationmode=t;var C=78/qt+1,ie=42/qt,pe=ie*ie*ie*ie;n.init="y",n.t=0;var ue={ecco:n.ecco,epoch:i,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},ye=Eg(ue),j=ye.ao,ge=ye.con42,de=ye.cosio,re=ye.cosio2,P=ye.eccsq,he=ye.omeosq,ve=ye.posq,Ne=ye.rp,De=ye.rteosq,We=ye.sinio;if(n.no=ye.no,n.con41=ye.con41,n.gsto=ye.gsto,n.a=Math.pow(n.no*_g,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,he>=0||n.no>=0){if(n.isimp=0,Ne<220/qt+1&&(n.isimp=1),J=C,N=pe,F=(Ne-1)*qt,F<156){J=F-78,F<98&&(J=20);var He=(120-J)/qt;N=He*He*He*He,J=J/qt+1}V=1/ve,x=1/(j-J),n.eta=j*n.ecco*x,E=n.eta*n.eta,M=n.ecco*n.eta,L=Math.abs(1-E),p=N*Math.pow(x,4),u=p/Math.pow(L,3.5),g=u*n.no*(j*(1+1.5*E+M*(4+E))+.375*Jn*x/L*n.con41*(8+3*E*(8+E))),n.cc1=n.bstar*g,_=0,n.ecco>1e-4&&(_=-2*p*x*Qn*n.no*We/n.ecco),n.x1mth2=1-re,n.cc4=2*n.no*u*j*he*(n.eta*(2+.5*E)+n.ecco*(.5+2*E)-Jn*x/(j*L)*(-3*n.con41*(1-2*M+E*(1.5-.5*M))+.75*n.x1mth2*(2*E-M*(1+E))*Math.cos(2*n.argpo))),n.cc5=2*u*j*he*(1+2.75*(E+M)+M*E),y=re*re,Ue=1.5*Jn*V*n.no,Te=.5*Ue*Jn*V,A=-.46875*xg*V*V*n.no,n.mdot=n.no+.5*Ue*De*n.con41+.0625*Te*De*(13-78*re+137*y),n.argpdot=-.5*Ue*ge+.0625*Te*(7-114*re+395*y)+A*(3-36*re+49*y),le=-Ue*de,n.nodedot=le+(.5*Te*(4-19*re)+2*A*(3-7*re))*de,z=n.argpdot+n.nodedot,n.omgcof=n.bstar*_*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-rr*p*n.bstar/M),n.nodecf=3.5*he*le*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(de+1)>15e-13?n.xlcof=-.25*Qn*We*(3+5*de)/(1+de):n.xlcof=-.25*Qn*We*(3+5*de)/Be,n.aycof=-.5*Qn*We;var Qe=1+n.eta*Math.cos(n.mo);if(n.delmo=Qe*Qe*Qe,n.sinmao=Math.sin(n.mo),n.x7thm1=7*re-1,2*hn/n.no>=225){n.method="d",n.isimp=1,we=0,S=n.inclo;var st={epoch:i,ep:n.ecco,argpp:n.argpo,tc:we,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},me=Sg(st);n.e3=me.e3,n.ee2=me.ee2,n.peo=me.peo,n.pgho=me.pgho,n.pho=me.pho,n.pinco=me.pinco,n.plo=me.plo,n.se2=me.se2,n.se3=me.se3,n.sgh2=me.sgh2,n.sgh3=me.sgh3,n.sgh4=me.sgh4,n.sh2=me.sh2,n.sh3=me.sh3,n.si2=me.si2,n.si3=me.si3,n.sl2=me.sl2,n.sl3=me.sl3,n.sl4=me.sl4,f=me.sinim,d=me.cosim,v=me.em,T=me.emsq,B=me.s1,Z=me.s2,W=me.s3,$=me.s4,Y=me.s5,ee=me.ss1,G=me.ss2,te=me.ss3,Q=me.ss4,ce=me.ss5,_e=me.sz1,be=me.sz3,Ce=me.sz11,Ae=me.sz13,ze=me.sz21,H=me.sz23,je=me.sz31,xe=me.sz33,n.xgh2=me.xgh2,n.xgh3=me.xgh3,n.xgh4=me.xgh4,n.xh2=me.xh2,n.xh3=me.xh3,n.xi2=me.xi2,n.xi3=me.xi3,n.xl2=me.xl2,n.xl3=me.xl3,n.xl4=me.xl4,n.zmol=me.zmol,n.zmos=me.zmos,O=me.nm,ae=me.z1,se=me.z3,Me=me.z11,fe=me.z13,Se=me.z21,Le=me.z23,Ie=me.z31,oe=me.z33;var Je={inclo:S,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},it=nc(n,Je);n.ecco=it.ep,n.inclo=it.inclp,n.nodeo=it.nodep,n.argpo=it.argpp,n.mo=it.mp,b=0,D=0,w=0;var $t={cosim:d,emsq:T,argpo:n.argpo,s1:B,s2:Z,s3:W,s4:$,s5:Y,sinim:f,ss1:ee,ss2:G,ss3:te,ss4:Q,ss5:ce,sz1:_e,sz3:be,sz11:Ce,sz13:Ae,sz21:ze,sz23:H,sz31:je,sz33:xe,t:n.t,tc:we,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:z,z1:ae,z3:se,z11:Me,z13:fe,z21:Se,z23:Le,z31:Ie,z33:oe,ecco:n.ecco,eccsq:P,em:v,argpm:b,inclm:S,mm:w,nm:O,nodem:D,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},et=yg($t);n.irez=et.irez,n.atime=et.atime,n.d2201=et.d2201,n.d2211=et.d2211,n.d3210=et.d3210,n.d3222=et.d3222,n.d4410=et.d4410,n.d4422=et.d4422,n.d5220=et.d5220,n.d5232=et.d5232,n.d5421=et.d5421,n.d5433=et.d5433,n.dedt=et.dedt,n.didt=et.didt,n.dmdt=et.dmdt,n.dnodt=et.dnodt,n.domdt=et.domdt,n.del1=et.del1,n.del2=et.del2,n.del3=et.del3,n.xfact=et.xfact,n.xlamo=et.xlamo,n.xli=et.xli,n.xni=et.xni}n.isimp!==1&&(m=n.cc1*n.cc1,n.d2=4*j*x*m,Ee=n.d2*x*n.cc1/3,n.d3=(17*j+J)*Ee,n.d4=.5*Ee*j*x*(221*j+31*J)*n.cc1,n.t3cof=n.d2+2*m,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*m)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*m*(2*n.d2+m)))}ic(n,0),n.init="n"}function Ag(n,e){var t="i",i=1440/(2*hn),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=Ki,s.nodeo*=Ki,s.argpo*=Ki,s.mo*=Ki,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=Mg(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return s.jdsatepoch=aa(r,a,l,c,h,d),Tg(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function wg(n){return Rg(n)||Cg(n)||Pg(n)||Lg()}function Rg(n){if(Array.isArray(n))return $s(n)}function Cg(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pg(n,e){if(n){if(typeof n=="string")return $s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $s(n,e)}}function $s(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Lg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dg(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=aa.apply(void 0,wg(r)),o=(s-i.jdsatepoch)*mg;return ic(i,o)}function Ug(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,o=2*s-s*s,a=Math.atan2(n.y,n.x)-e;a<-hn;)a+=ut;for(;a>hn;)a-=ut;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:a,latitude:h,height:f}}const ri=["#e8a33d","#4fb3d9","#8fd16a","#b58cf0"],dt=6371,ht=Math.PI/180,Ht=10,Ig=1.00005;function Jt(n,e,t=1,i=new U){const r=(e+180)*ht,s=n*ht;return i.set(-Math.cos(r)*Math.cos(s)*t,Math.sin(s)*t,Math.sin(r)*Math.cos(s)*t)}function tl(n){const e=n.clone().normalize(),t=Math.asin(e.y)/ht,i=(Math.atan2(e.z,-e.x)/ht-180+540)%360-180;return[t,i]}class Ng{tMin;span;bins;binSize;isRange;count;validPct;D;renderer;scene=new ig;camera;controls;view;labels;cb;T0;NS;orbit;FU;TOBS;NADIR;CROSS;ALONG;fireU;earth;earthU;satObjs;boxLine;selGroup=new Zn;ring;footprints;raf=0;last=performance.now();lastTick=0;simT=0;playing=!0;speed=600;flyTo=null;drawing=0;p1=null;downXY=null;dragBox=!1;zoomTarget=null;zoomAnchor=null;pinch=new Map;pinchDist=0;order=new Int32Array(0);inMask=null;outline;disposed=!1;resizeObserver;tiles;satOn;constructor(e,t,i){this.D=t,this.cb=i,this.view=e;const r=t.cols,s=r.lat.length;this.count=s;const o=t.sats;let a=1/0,l=-1/0;for(let M=0;M<s;M++){const E=r.t[M];E<a&&(a=E),E>l&&(l=E)}Number.isFinite(a)||(a=Date.parse(`${t.window[0]}T00:00:00Z`)/1e3,l=a+86400),this.tMin=a,this.T0=a-1800;const c=l+1800;this.NS=Math.ceil((c-this.T0)/Ht)+1,this.span=l-a+900,this.isRange=!!t.range;const h=[...new Set(o.filter(M=>M.tle).map(M=>M.norad))],d=o.map(M=>M.tle?h.indexOf(M.norad):-1),f=new U;this.orbit=h.map(M=>{const E=o.find(w=>w.norad===M),b=Ag(E.tle[0],E.tle[1]),D=new Float32Array(this.NS*3),S=new Float32Array(this.NS);for(let w=0;w<this.NS;w++){const O=new Date((this.T0+w*Ht)*1e3),F=Dg(b,O);if(typeof F.position=="boolean")continue;const V=Ug(F.position,Ys(O));Jt(V.latitude/ht,V.longitude/ht,1,f),D[w*3]=f.x,D[w*3+1]=f.y,D[w*3+2]=f.z,S[w]=V.height}return{u:D,alt:S,sats:o.map((w,O)=>w.norad===M?O:-1).filter(w=>w>=0)}}),this.oiOf=d,this.FU=new Float32Array(s*3),this.TOBS=new Float32Array(s),this.NADIR=new Float32Array(s),this.CROSS=new Float32Array(s*3),this.ALONG=new Float32Array(s*3);const m=Float32Array.from(r.scan),g=Float32Array.from(r.track);this.scan=m,this.track=g;{const M=new U,E=new U,b=new U,D=new U,S=new U,w=new U;let O=0,F=0;for(let V=0;V<s;V++){Jt(r.lat[V],r.lon[V],1,M),this.FU[V*3]=M.x,this.FU[V*3+1]=M.y,this.FU[V*3+2]=M.z;const L=r.sat[V],N=o[L],B=d[L];if(B<0)this.TOBS[V]=r.t[V]-a,this.NADIR[V]=NaN,E.set(0,1,0).addScaledVector(M,-M.y),E.lengthSq()<1e-10&&E.set(1,0,0).addScaledVector(M,-M.x),E.normalize(),b.crossVectors(E,M).normalize(),N.system===2&&(m[V]=N.pixel_km,g[V]=N.pixel_km);else if(N.system===3){this.TOBS[V]=r.t[V]-a,this.satPos(B,r.t[V],w),this.subpoint(B,r.t[V],D),this.NADIR[V]=Math.acos(Math.min(1,D.dot(M)))*dt,E.copy(D).addScaledVector(M,-D.dot(M)),E.lengthSq()<1e-12&&E.set(0,1,0).addScaledVector(M,-M.y),E.normalize(),b.crossVectors(M,E).normalize(),S.subVectors(w,M);const Z=S.length()*dt;S.normalize();const W=Math.max(.12,S.dot(M)),$=N.pixel_km*Z/35786;m[V]=$,g[V]=$/W}else{const Z=this.orbit[B].u,W=Math.max(0,Math.floor((r.t[V]-180-this.T0)/Ht)),$=Math.min(this.NS-1,Math.ceil((r.t[V]+N.granule_s+420-this.T0)/Ht));let Y=-2,J=W;for(let G=W;G<=$;G++){const te=Z[G*3]*M.x+Z[G*3+1]*M.y+Z[G*3+2]*M.z;te>Y&&(Y=te,J=G)}const ee=this.T0+J*Ht;this.TOBS[V]=ee-a,this.NADIR[V]=Math.acos(Math.min(1,Y))*dt,F++,this.NADIR[V]<=this.swathHalf(L,this.altAt(B,ee))*dt+100&&O++,this.subpoint(B,ee+Ht,D),this.subpoint(B,ee-Ht,S),E.subVectors(D,S),E.addScaledVector(M,-E.dot(M)).normalize(),b.crossVectors(M,E).normalize(),N.system===2&&(m[V]=N.pixel_km,g[V]=N.pixel_km)}this.ALONG[V*3]=E.x,this.ALONG[V*3+1]=E.y,this.ALONG[V*3+2]=E.z,this.CROSS[V*3]=b.x,this.CROSS[V*3+1]=b.y,this.CROSS[V*3+2]=b.z}this.validPct=F?100*O/F:100}this.binSize=this.span<=2*86400?900:Math.ceil(this.span/240/3600)*3600;const _=Math.ceil(this.span/this.binSize)+1;this.bins=[0,1,2,3].map(()=>new Float32Array(_));for(let M=0;M<s;M++){const E=Math.floor(this.TOBS[M]/this.binSize);E>=0&&E<_&&this.bins[o[r.sat[M]].system][E]++}nt.enabled=!1,this.renderer=new Ql({antialias:!0}),this.renderer.outputColorSpace=mn,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.domElement.className="fm-globe-canvas",e.appendChild(this.renderer.domElement),this.labels=document.createElement("div"),this.labels.className="fm-globe-labels",e.appendChild(this.labels),this.camera=new en(40,1,.001,300),this.camera.position.copy(Jt(20,30,3.6)),this.controls=new pg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=1.0004,this.controls.maxDistance=25,this.controls.rotateSpeed=.5,this.controls.enableZoom=!1,this.controls.enablePan=!1;{const M=new _t,E=[];for(let b=0;b<3e3;b++){const D=new U().randomDirection().multiplyScalar(120+Math.random()*60);E.push(D.x,D.y,D.z)}M.setAttribute("position",new yt(E,3)),this.scene.add(new ag(M,new ec({color:7829367,size:.25})))}this.earthU={dayTex:{value:null},nightTex:{value:null},hasTex:{value:0},sunDir:{value:new U(1,0,0)}},this.earth=new Dt(new Xr(1,192,96),new nn({uniforms:this.earthU,vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D dayTex, nightTex; uniform float hasTex; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){
            float d = dot(normalize(vN), sunDir), k = smoothstep(-0.10, 0.10, d);
            vec3 day = hasTex > 0.5 ? texture2D(dayTex, vUv).rgb : vec3(0.12,0.2,0.3);
            vec3 night = hasTex > 0.5 ? texture2D(nightTex, vUv).rgb * 0.9 + day * 0.07 : vec3(0.02);
            gl_FragColor = vec4(mix(night, day * (0.75 + 0.25 * max(d, 0.)), k), 1.);
          }`})),this.scene.add(this.earth);const p=new tc;Promise.all(["earth-blue-marble.jpg","earth-night.jpg"].map(M=>new Promise((E,b)=>p.load(`https://unpkg.com/three-globe@2.31.0/example/img/${M}`,E,void 0,b)))).then(([M,E])=>{this.disposed||(this.earthU.dayTex.value=M,this.earthU.nightTex.value=E,this.earthU.hasTex.value=1)}).catch(()=>{}),this.scene.add(new Dt(new Xr(1.015,64,32),new nn({transparent:!0,depthWrite:!1,side:Ft,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-abs(dot(vN,vV)),3.); gl_FragColor=vec4(0.55,0.65,0.8,f*0.5); }"}))),this.tiles=new Fg(this.scene,this.renderer,this.earthU.sunDir),this.satOn=o.map(()=>!0),this.fireU={uTime:{value:0},uWindow:{value:1e9},uGeoWin:{value:900},uMinConf:{value:0},uMinFrp:{value:0},uDn:{value:0},uUseIn:{value:0},uPx:{value:800},uMinPx:{value:2.5*this.renderer.getPixelRatio()},uDpr:{value:this.renderer.getPixelRatio()},uMask:{value:new Array(16).fill(1)},uSysCol:{value:ri.map(M=>new tt(M))}},this.buildFires();const u=150,y=13,v=128;this.satObjs=this.orbit.map((M,E)=>{const b=o[M.sats[0]],D=new tt(ri[b.system]??"#ffffff"),S=b.system===3,w=new Zn,O=new Ji({color:14211288});w.add(new Dt(new oi(.6,.6,1),O)),w.add(new Dt(new oi(2.6,.05,.7),new Ji({color:D}))),this.scene.add(w);const F={oi:E,geo:S,sats:M.sats,grp:w,on:!0,label:document.createElement("div")};if(S){const V=new _t;V.setAttribute("position",new Rt(new Float32Array(v*3),3)),F.disk=new sg(V,new og({color:D,dashSize:.03,gapSize:.02,transparent:!0,opacity:.8})),F.disk.frustumCulled=!1,this.scene.add(F.disk)}else{const V=new _t;V.setAttribute("position",new Rt(new Float32Array(u*y*3),3)),V.setAttribute("aA",new Rt(new Float32Array(u*y),1));const L=[];for(let N=0;N<u-1;N++)for(let B=0;B<y-1;B++){const Z=N*y+B,W=Z+y;L.push(Z,Z+1,W,Z+1,W+1,W)}V.setIndex(L),F.swath=new Dt(V,new nn({uniforms:{c:{value:D}},transparent:!0,depthWrite:!1,side:Yt,vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying float vA; void main(){ gl_FragColor=vec4(c, vA); }"})),F.swath.renderOrder=1,F.swath.frustumCulled=!1,this.scene.add(F.swath)}return F.label.className="fm-globe-label",F.label.style.color=ri[b.system]??"#fff",F.label.textContent=`${M.sats.map(V=>o[V].symbol).join(" ")} ${b.name.replace(" FRP","")}`,this.labels.appendChild(F.label),F}),this.SW_N=u,this.SW_W=y,this.GEO_N=v,this.boxLine=new ia(new _t,new Qi({color:16777215,transparent:!0,opacity:.95})),this.boxLine.renderOrder=8,this.boxLine.frustumCulled=!1,this.scene.add(this.boxLine),this.ring=new Dt(new ra(.8,1,40),new Ji({color:16777215,side:Yt,transparent:!0,opacity:.9,depthTest:!1})),this.ring.renderOrder=6,this.footprints=new Wo(new _t,new Qi({color:16777215,transparent:!0,opacity:.8})),this.footprints.renderOrder=5,this.footprints.frustumCulled=!1,this.selGroup.add(this.ring,this.footprints),this.selGroup.visible=!1,this.scene.add(this.selGroup),this.outline=new Wo(new _t,new Qi({color:16765562,transparent:!0,opacity:.9})),this.outline.renderOrder=7,this.outline.frustumCulled=!1,this.outline.visible=!1,this.scene.add(this.outline);const T=this.renderer.domElement;T.style.touchAction="none",T.addEventListener("pointerdown",this.onDown),T.addEventListener("pointermove",this.onMove),T.addEventListener("pointerup",this.onUp),T.addEventListener("pointercancel",this.onCancel),T.addEventListener("wheel",this.onWheel,{passive:!1}),this.isRange&&(this.simT=this.span,this.playing=!1),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.raf=requestAnimationFrame(this.frame)}oiOf;fireGeo;scan;track;SW_N;SW_W;GEO_N;subpoint(e,t,i=new U){const r=this.orbit[e];let s=(t-this.T0)/Ht;s=Math.max(0,Math.min(this.NS-1.001,s));const o=Math.floor(s),a=s-o,l=o*3;return i.set(r.u[l]+(r.u[l+3]-r.u[l])*a,r.u[l+1]+(r.u[l+4]-r.u[l+1])*a,r.u[l+2]+(r.u[l+5]-r.u[l+2])*a).normalize()}altAt(e,t){return this.orbit[e].alt[Math.max(0,Math.min(this.NS-1,Math.round((t-this.T0)/Ht)))]}satPos(e,t,i=new U){return this.subpoint(e,t,i).multiplyScalar(1+this.altAt(e,t)/dt)}swathHalf(e,t){const i=this.D.sats[e].scan_deg*ht,r=(dt+t)/dt*Math.sin(i);return r>=1?Math.acos(dt/(dt+t)):Math.asin(r)-i}buildFires(){const e=this.D.cols,t=this.D.sats,i=this.count,r=new ug;r.setAttribute("position",new Rt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=i;const s=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),h=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i).fill(1),p=[1,2,3,0],u=Array.from({length:i},(T,M)=>M).sort((T,M)=>p[t[e.sat[T]].system]-p[t[e.sat[M]].system]||T-M);this.order=Int32Array.from(u);for(let T=0;T<i;T++){const M=u[T],E=t[e.sat[M]],b=this.scan[M]/2/dt,D=this.track[M]/2/dt;for(let S=0;S<3;S++)s[T*3+S]=this.FU[M*3+S]*Ig,o[T*3+S]=this.CROSS[M*3+S]*b,a[T*3+S]=this.ALONG[M*3+S]*D;l[T]=this.TOBS[M],c[T]=e.sat[M],h[T]=E.system,d[T]=E.pattern,f[T]=e.conf[M],m[T]=e.dn[M]?2:1,g[T]=e.frp[M]??0}const y=(T,M)=>new rg(T,M);r.setAttribute("iC",y(s,3)),r.setAttribute("iX",y(o,3)),r.setAttribute("iY",y(a,3)),r.setAttribute("aT",y(l,1)),r.setAttribute("aSat",y(c,1)),r.setAttribute("aSys",y(h,1)),r.setAttribute("aPat",y(d,1)),r.setAttribute("aConf",y(f,1)),r.setAttribute("aDn",y(m,1)),r.setAttribute("aFrp",y(g,1)),r.setAttribute("aIn",y(_,1)),this.fireGeo=r;const v=new Dt(r,new nn({uniforms:this.fireU,transparent:!0,depthWrite:!1,side:Yt,vertexShader:`
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
          }`}));v.frustumCulled=!1,v.renderOrder=2,this.scene.add(v)}setPlaying(e){e&&this.simT>=this.span&&(this.simT=-600),this.playing=e}setSpeed(e){this.speed=e}setTime(e){this.simT=Math.max(-600,Math.min(this.span,e))}setWindow(e){this.fireU.uWindow.value=e}setFilters(e){const t=this.fireU.uMask.value;this.D.sats.forEach((i,r)=>{const s=e.sats[r]!==!1;t[r]=s?1:0,this.satOn[r]=s});for(const i of this.satObjs)i.on=i.sats.some(r=>this.satOn[r]);this.fireU.uMinConf.value=e.minConf,this.fireU.uMinFrp.value=e.minFrp,this.fireU.uDn.value=e.dayNight}setAreaMask(e){if(this.inMask=e,this.fireU.uUseIn.value=e?1:0,!e)return;const t=this.fireGeo.getAttribute("aIn"),i=t.array;for(let r=0;r<this.order.length;r++)i[r]=e[this.order[r]];t.needsUpdate=!0}setOutline(e){if(!e?.length){this.outline.visible=!1;return}const t=[],i=new U,r=new U;for(const s of e)for(let o=0;o<s.length-1;o++)Jt(s[o][1],s[o][0],1.0005,i),Jt(s[o+1][1],s[o+1][0],1.0005,r),t.push(i.x,i.y,i.z,r.x,r.y,r.z);this.outline.geometry.setAttribute("position",new yt(t,3)),this.outline.geometry.computeBoundingSphere(),this.outline.visible=!0}setDrawing(e){this.drawing=e?1:0,this.p1=null,this.dragBox=!1,this.controls.enabled=!e,this.renderer.domElement.style.cursor=e?"crosshair":""}setBox(e){if(!e){this.boxLine.visible=!1;return}const[t,i,r,s]=e,o=[],a=60;for(let l=0;l<=a;l++)o.push(Jt(i,t+(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(i+(s-i)*l/a,r,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s,r-(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(Jt(s-(s-i)*l/a,t,1.0004));this.boxLine.geometry.setFromPoints(o),this.boxLine.visible=!0}flyToBox(e){const[t,i,r,s]=e,o=(i+s)/2,l=Math.max((r-t)*Math.cos(o*ht),s-i)*ht/.7/2/Math.tan(this.camera.fov*ht/2)*dt*Math.max(1,1/this.camera.aspect);this.flyToView({lat:o,lon:(t+r)/2,altKm:l})}flyToView(e){const t=Math.min(24,Math.max(4e-4,e.altKm/dt));this.zoomTarget=null,this.flyTo=Jt(e.lat,e.lon,1+t)}flyHome(){this.zoomTarget=null,this.flyTo=this.camera.position.clone().normalize().multiplyScalar(3.6)}zoomToSelection(){this.selGroup.visible&&(this.zoomTarget=null,this.flyTo=this.ring.position.clone().normalize().multiplyScalar(1.003))}clearSelection(){this.selGroup.visible=!1}cameraView(){const[e,t]=tl(this.camera.position);return{lat:Math.round(e*1e3)/1e3,lon:Math.round(t*1e3)/1e3,altKm:Math.round((this.camera.position.length()-1)*dt)}}hotspots(e=8,t=.25){const i=this.D.cols,r=new Map,s=Math.ceil(360/t);for(let o=0;o<this.count;o++){if(!this.isVisible(o))continue;const a=Math.floor((i.lat[o]+90)/t)*s+Math.floor((i.lon[o]+180)/t);let l=r.get(a);l||r.set(a,l={la:0,lo:0,count:0,frp:0,last:0}),l.la+=i.lat[o],l.lo+=i.lon[o],l.count++,l.frp+=i.frp[o]??0,l.last=Math.max(l.last,i.t[o])}return[...r.values()].sort((o,a)=>a.frp-o.frp||a.count-o.count).slice(0,e).map(o=>({lat:o.la/o.count,lon:o.lo/o.count,count:o.count,frp:o.frp,last:o.last}))}csv(e){const t=this.D.cols,i=["satellite,latitude,longitude,time_utc,frp_mw,confidence,day_night,scan_km,track_km"];for(let r=0;r<this.count;r++)t.lon[r]<e[0]||t.lon[r]>e[2]||t.lat[r]<e[1]||t.lat[r]>e[3]||!this.isVisible(r)||i.push([this.D.sats[t.sat[r]].code,t.lat[r],t.lon[r],new Date(t.t[r]*1e3).toISOString(),t.frp[r]??"",["low","nominal","high"][t.conf[r]]??"",t.dn[r]?"N":"D",this.scan[r].toFixed(2),this.track[r].toFixed(2)].join(","));return i.join(`
`)+`
`}stats(e){const t=this.D.cols,i={total:0,bySystem:[0,0,0,0],bySat:this.D.sats.map(()=>0),frp:0};for(let r=0;r<this.count;r++)e&&(t.lon[r]<e[0]||t.lon[r]>e[2]||t.lat[r]<e[1]||t.lat[r]>e[3])||this.isVisible(r)&&(i.total++,i.bySat[t.sat[r]]++,i.bySystem[this.D.sats[t.sat[r]].system]++,i.frp+=t.frp[r]??0);return i}hitLL(e){const t=this.hit(e);return t?tl(t):null}hit(e){const t=this.renderer.domElement.getBoundingClientRect(),i=new $e((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new dg;return r.setFromCamera(i,this.camera),r.intersectObject(this.earth)[0]?.point??null}boxFrom(e,t){return[Math.min(e[1],t[1]),Math.min(e[0],t[0]),Math.max(e[1],t[1]),Math.max(e[0],t[0])].map(i=>Math.round(i*100)/100)}onDown=e=>{if(this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2){const[t,i]=[...this.pinch.values()];this.pinchDist=Math.hypot(t[0]-i[0],t[1]-i[1]),this.downXY=null;return}if(this.downXY=[e.clientX,e.clientY],this.flyTo=null,this.drawing===1){const t=this.hitLL(e);if(!t)return;this.p1=[t[0],t[1]],this.dragBox=!0,this.renderer.domElement.setPointerCapture(e.pointerId)}};onMove=e=>{if(this.pinch.has(e.pointerId)&&this.pinch.set(e.pointerId,[e.clientX,e.clientY]),this.pinch.size===2&&this.pinchDist>0){const[t,i]=[...this.pinch.values()],r=Math.hypot(t[0]-i[0],t[1]-i[1]);r>0&&this.zoomBy(this.pinchDist/r,{clientX:(t[0]+i[0])/2,clientY:(t[1]+i[1])/2},!0),this.pinchDist=r;return}if(this.drawing===1&&this.dragBox&&this.p1||this.drawing===2&&this.p1){const t=this.hitLL(e);t&&this.setBox(this.boxFrom(this.p1,t))}};onCancel=e=>{this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0)};onUp=e=>{if(this.pinch.delete(e.pointerId),this.pinch.size<2&&(this.pinchDist=0),this.drawing){const i=this.hitLL(e),r=this.downXY?Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1]):0;if(this.drawing===1&&this.dragBox&&this.p1&&i&&r>8){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}else if(this.drawing===1&&this.p1)this.drawing=2,this.dragBox=!1,this.cb.onBoxPoint(1,null);else if(this.drawing===2&&this.p1&&i){const s=this.boxFrom(this.p1,i);this.setDrawing(!1),this.setBox(s),this.cb.onBoxPoint(2,s)}this.downXY=null;return}if(!this.downXY||Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1])>5)return;this.downXY=null;const t=this.hit(e);if(!t){this.select(-1);return}this.select(this.nearest(t.clone().normalize()))};onWheel=e=>{e.preventDefault();const t=e.deltaMode===1?e.deltaY*16:e.deltaY;this.zoomBy(Math.exp(Math.max(-1,Math.min(1,t/400))),e,!1)};zoomBy(e,t,i){const r=this.zoomTarget??this.camera.position.length()-1,s=Math.min(24,Math.max(4e-4,r*e));this.flyTo=null,this.zoomTarget=s,this.zoomAnchor=e<1?this.hit(t)?.normalize()??null:null,i&&this.applyZoom(1)}applyZoom(e){if(this.zoomTarget==null)return;const t=this.camera.position.length(),i=t-1,r=i+(this.zoomTarget-i)*e,s=this.camera.position.clone().divideScalar(t);if(this.zoomAnchor&&r<i){const o=Math.min(1,(1-r/i)*.9);s.lerp(this.zoomAnchor,o).normalize()}this.camera.position.copy(s.multiplyScalar(1+r)),Math.abs(this.zoomTarget-r)<this.zoomTarget*.002&&(this.zoomTarget=null,this.zoomAnchor=null)}isVisible(e){const t=this.D.cols,i=this.simT-this.TOBS[e],s=this.D.sats[t.sat[e]].system===3?Math.min(this.fireU.uWindow.value,this.fireU.uGeoWin.value):this.fireU.uWindow.value;if(i<0||i>s||!this.satOn[t.sat[e]]||t.conf[e]<this.fireU.uMinConf.value||(t.frp[e]??0)<this.fireU.uMinFrp.value)return!1;const o=this.fireU.uDn.value;return o&&(t.dn[e]?2:1)!==o?!1:!this.inMask||this.inMask[e]===1}nearest(e){const t=this.fireU.uPx.value/this.camera.position.distanceTo(e),i=Math.cos(Math.max(8/dt,14*this.renderer.getPixelRatio()/t));let r=-1,s=1/0;const o=this.FU;for(let a=0;a<this.count;a++){const l=o[a*3]*e.x+o[a*3+1]*e.y+o[a*3+2]*e.z;if(l<i||!this.isVisible(a))continue;const c=this.scan[a]/2/dt,h=this.track[a]/2/dt,d=Math.max(1,this.fireU.uMinPx.value/(2*Math.max(c,h)*t)),f=e.x-o[a*3],m=e.y-o[a*3+1],g=e.z-o[a*3+2],_=(f*this.CROSS[a*3]+m*this.CROSS[a*3+1]+g*this.CROSS[a*3+2])/(c*d),p=(f*this.ALONG[a*3]+m*this.ALONG[a*3+1]+g*this.ALONG[a*3+2])/(h*d),u=Math.max(Math.abs(_),Math.abs(p)),y=u<=1?u:10+Math.acos(Math.min(1,l))*t;y<s&&(s=y,r=a)}return r}footprintSegs(e,t){const i=new U(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]),r=new U(this.CROSS[e*3],this.CROSS[e*3+1],this.CROSS[e*3+2]),s=new U(this.ALONG[e*3],this.ALONG[e*3+1],this.ALONG[e*3+2]),o=this.scan[e]/2/dt*1.08,a=this.track[e]/2/dt*1.08,l=(h,d)=>i.clone().addScaledVector(r,h*o).addScaledVector(s,d*a).normalize().multiplyScalar(1.00006),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];for(let h=0;h<4;h++){const d=c[h],f=c[(h+1)%4];t.push(d.x,d.y,d.z,f.x,f.y,f.z)}}select(e){if(e<0){this.selGroup.visible=!1,this.cb.onPick(null);return}const t=this.D.cols,i=this.D.sats,r=t.sat[e],s=i[r],o=this.oiOf[r],a=this.TOBS[e]+this.tMin,l=s.system===3,c=new U(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]);this.ring.position.copy(c).multiplyScalar(1.00007),this.ring.lookAt(c.clone().multiplyScalar(2)),this.selGroup.visible=!0;const h=o<0?null:Math.acos(this.satPos(o,a).clone().sub(c).normalize().dot(c))/ht,d=[],f=[],m=new Map,g=Math.max(1.5,this.scan[e],this.track[e]),_=Math.cos(25/dt),p=Math.cos(g/dt);for(let u=0;u<this.count;u++){const y=this.FU[u*3]*c.x+this.FU[u*3+1]*c.y+this.FU[u*3+2]*c.z;if(y<_)continue;t.sat[u]===r&&Math.abs(this.TOBS[u]-this.TOBS[e])<(l?1:900)?(d.push(u),this.footprintSegs(u,f)):y>=p&&m.set(t.sat[u],(m.get(t.sat[u])??0)+1)}this.footprints.geometry.setAttribute("position",new yt(f,3)),this.footprints.geometry.computeBoundingSphere(),this.cb.onPick({index:e,sat:s,lat:t.lat[e],lon:t.lon[e],time:t.t[e],frp:t.frp[e],conf:t.conf[e],confRaw:t.craw[e],dayNight:t.dn[e]?"N":"D",scanKm:this.scan[e],trackKm:this.track[e],growth:Math.sqrt(this.scan[e]*this.track[e])/s.pixel_km,b4:t.b4?.[e]??null,b5:t.b5?.[e]??null,version:t.ver&&this.D.versions?this.D.versions[t.ver[e]]??null:null,altitudeKm:o<0?null:this.altAt(o,a),nadirKm:Number.isFinite(this.NADIR[e])?this.NADIR[e]:null,viewZenith:h,samePass:d.length,samePassFrp:d.reduce((u,y)=>u+(t.frp[y]??0),0),others:[...m].sort((u,y)=>y[1]-u[1]).map(([u,y])=>({sat:i[u],count:y}))})}resize(){const e=this.view.clientWidth,t=this.view.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fireU.uPx.value=t*this.renderer.getPixelRatio()/(2*Math.tan(this.camera.fov*ht/2)))}updateSats(e){const t=new U,i=new U,r=new U,s=new U,o=new U,a=new U,l=new gt;for(const c of this.satObjs){const h=c.sats[0],d=c.oi;this.satPos(d,e,t),c.grp.visible=c.on,c.grp.position.copy(t),i.copy(t).normalize();const f=this.subpoint(d,e+Ht,r).sub(this.subpoint(d,e-Ht,s));f.addScaledVector(i,-f.dot(i)),f.lengthSq()<1e-14&&f.set(0,1,0).addScaledVector(i,-i.y),f.normalize(),l.makeBasis(o.crossVectors(i,f),i,f),c.grp.quaternion.setFromRotationMatrix(l),c.grp.scale.setScalar(Math.max(.004,this.camera.position.distanceTo(t)*.011));const m=this.altAt(d,e);if(c.swath){if(c.swath.visible=c.on,c.on){const g=c.swath.geometry.attributes.position.array,_=c.swath.geometry.attributes.aA.array,p=this.swathHalf(h,m),u=new U;for(let y=0;y<this.SW_N;y++){const v=e-y*Ht;this.subpoint(d,v,u),this.subpoint(d,v+Ht,r),this.subpoint(d,v-Ht,s),s.subVectors(r,s).normalize(),o.crossVectors(u,s).normalize();const T=.32*Math.pow(1-y/this.SW_N,1.4);for(let M=0;M<this.SW_W;M++){const E=p*(2*M/(this.SW_W-1)-1);a.copy(u).multiplyScalar(Math.cos(E)).addScaledVector(o,Math.sin(E)).normalize().multiplyScalar(1.002);const b=y*this.SW_W+M;g[b*3]=a.x,g[b*3+1]=a.y,g[b*3+2]=a.z,_[b]=M===0||M===this.SW_W-1?Math.min(1,T*1.8):T}}c.swath.geometry.attributes.position.needsUpdate=!0,c.swath.geometry.attributes.aA.needsUpdate=!0}}else if(c.disk){const g=this.subpoint(d,e,new U),_=this.swathHalf(h,m),p=new U(0,1,0).addScaledVector(g,-g.y).normalize(),u=new U().crossVectors(g,p);c.disk.visible=c.on;const y=c.disk.geometry.attributes.position.array;for(let v=0;v<this.GEO_N;v++){const T=v/this.GEO_N*Math.PI*2;a.copy(g).multiplyScalar(Math.cos(_)).addScaledVector(p,Math.sin(_)*Math.cos(T)).addScaledVector(u,Math.sin(_)*Math.sin(T)).multiplyScalar(1.002),y[v*3]=a.x,y[v*3+1]=a.y,y[v*3+2]=a.z}c.disk.geometry.attributes.position.needsUpdate=!0,c.disk.computeLineDistances()}}}sunDir(e,t){const i=new Date(e*1e3),r=e/86400-10957.5,s=(357.529+.98560028*r)*ht,a=(280.459+.98564736*r+1.915*Math.sin(s)+.02*Math.sin(2*s))*ht,l=(23.439-36e-8*r)*ht,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),h=Math.asin(Math.sin(l)*Math.sin(a));let d=(c-Ys(i))/ht;return d=(d+540)%360-180,Jt(h/ht,d,1,t)}frame=e=>{if(this.disposed)return;const t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.playing&&(this.setTime(this.simT+t*this.speed),this.simT>=this.span&&(this.playing=!1));const i=this.tMin+this.simT;this.fireU.uTime.value=this.simT,this.sunDir(i,this.earthU.sunDir.value),this.updateSats(i);const r=1-Math.exp(-t*5);if(this.flyTo){const m=this.camera.position.length(),g=this.camera.position.clone().divideScalar(m),_=this.flyTo.clone().normalize(),p=g.lerp(_,r);p.lengthSq()<1e-6&&p.set(0,1,0);const u=Math.log(m-1),y=Math.log(this.flyTo.length()-1);this.camera.position.copy(p.normalize().multiplyScalar(1+Math.exp(u+(y-u)*r))),p.angleTo(_)<1e-4&&Math.abs(u-y)<.01&&(this.flyTo=null)}this.applyZoom(Math.min(1,r*1.6));const s=this.camera.position.length()-1;this.controls.rotateSpeed=Math.min(.5,Math.max(6e-4,s*.19)),this.controls.update();const o=this.camera.position.length()-1,a=Math.max(3e-5,o*.3);Math.abs(a-this.camera.near)/this.camera.near>.05&&(this.camera.near=a,this.camera.updateProjectionMatrix()),this.selGroup.visible&&this.ring.scale.setScalar(Math.max(o*.012,4e-5)),this.tiles.update(this.camera,this.view.clientWidth,this.view.clientHeight);const l=this.view.clientWidth,c=this.view.clientHeight,h=this.camera.position,d=new U,f=new U;for(const m of this.satObjs){if(!m.on){m.label.style.display="none";continue}const g=m.grp.position;d.subVectors(g,h);const _=d.length();d.divideScalar(_);const p=h.dot(d),u=p*p-(h.lengthSq()-1),y=-p-Math.sqrt(Math.max(u,0));f.copy(g).project(this.camera);const v=u>0&&y>0&&y<_||f.z>1;m.label.style.display=v?"none":"",v||(m.label.style.transform=`translate(${(f.x+1)/2*l+10}px, ${(1-f.y)/2*c-8}px)`)}this.renderer.render(this.scene,this.camera),e-this.lastTick>120&&(this.lastTick=e,this.cb.onTick(this.simT,this.playing)),this.raf=requestAnimationFrame(this.frame)};dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),this.renderer.domElement.removeEventListener("pointerdown",this.onDown),this.renderer.domElement.removeEventListener("pointerup",this.onUp),this.renderer.domElement.removeEventListener("pointermove",this.onMove),this.renderer.domElement.removeEventListener("pointercancel",this.onCancel),this.renderer.domElement.removeEventListener("wheel",this.onWheel),this.controls.dispose(),this.tiles.dispose(),this.scene.traverse(e=>{const t=e;t.geometry?.dispose?.();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i?.dispose?.()}),this.renderer.dispose(),this.renderer.domElement.remove(),this.labels.remove()}}class Fg{constructor(e,t,i){this.sunDir=i,e.add(this.group),this.loader.setCrossOrigin("anonymous"),this.aniso=t.capabilities.getMaxAnisotropy()}sunDir;group=new Zn;cache=new Map;queue=[];frame=0;loading=0;loader=new tc;aniso;dead=!1;url(e,t,i){return`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${e}/${i}/${t}`}mesh(e,t){const i=(d,f)=>Math.atan(Math.sinh(Math.PI*(1-2*f/2**d)))/ht,r=2**e.z,s=Math.max(6,Math.min(64,Math.ceil(360/r/.15))),o=new Float32Array((s+1)*(s+1)*3),a=new Float32Array((s+1)*(s+1)*2),l=[],c=new U;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){const m=d*(s+1)+f;Jt(i(e.z,e.y+d/s),(e.x+f/s)/r*360-180,e.r,c),o[m*3]=c.x,o[m*3+1]=c.y,o[m*3+2]=c.z,a[m*2]=f/s,a[m*2+1]=1-d/s,f<s&&d<s&&l.push(m,m+s+1,m+1,m+1,m+s+1,m+s+2)}const h=new _t;return h.setAttribute("position",new Rt(o,3)),h.setAttribute("uv",new Rt(a,2)),h.setIndex(l),h.computeBoundingSphere(),new Dt(h,new nn({uniforms:{map:{value:t},sunDir:this.sunDir},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){ vec3 c = texture2D(map, vUv).rgb; float k = smoothstep(-0.10, 0.10, dot(vN, sunDir)); gl_FragColor = vec4(c * mix(0.3, 1., k), 1.); }`,side:Yt}))}need(e,t,i,r){const s=`${e}/${t}/${i}`;let o=this.cache.get(s);o||(o={key:s,z:e,x:t,y:i,r,state:"queued",mesh:null,used:this.frame},this.cache.set(s,o),this.queue.push(o)),o.used=this.frame}pump(){for(;this.loading<8&&this.queue.length;){const e=this.queue.pop();if(this.frame-e.used>20){this.cache.delete(e.key);continue}this.loading++,e.state="loading",this.loader.load(this.url(e.z,e.x,e.y),t=>{if(this.loading--,t.anisotropy=this.aniso,this.dead||!this.cache.has(e.key)){t.dispose();return}e.mesh=this.mesh(e,t),e.state="ready",this.group.add(e.mesh)},void 0,()=>{this.loading--,e.state="error"})}}update(e,t,i){this.frame++;const r=e.position.length()-1,s=e.position.clone().normalize(),o=Math.asin(s.y)/ht,a=Math.atan2(s.z,-s.x)/ht-180,l=2*r*dt*Math.tan(e.fov*ht/2)/Math.max(1,i),c=Math.max(.05,Math.cos(o*ht)),h=Math.min(18,Math.round(Math.log2(40075*c/(256*l))+.4));if(h>=5){const d=(f,m,g)=>{const _=2**f,p=(a+180)/360*_,u=(1-Math.log(Math.tan(o*ht)+1/Math.cos(o*ht))/Math.PI)/2*_;for(let y=-m;y<=m;y++)for(let v=-m;v<=m;v++){const T=Math.floor(u)+y;T>=0&&T<_&&this.need(f,((Math.floor(p)+v)%_+_)%_,T,g)}};h-3>=5&&d(h-3,1,1.000012),d(h,Math.min(5,Math.ceil(Math.max(t,i)*l/(40075*c/2**h)/2)+1),1.00002)}for(const d of this.cache.values())d.mesh&&(d.mesh.visible=d.used===this.frame);if(this.pump(),this.cache.size>350){const d=[...this.cache.values()].filter(f=>f.used!==this.frame&&f.state!=="loading").sort((f,m)=>f.used-m.used);for(const f of d.slice(0,this.cache.size-300)){if(f.mesh){this.group.remove(f.mesh),f.mesh.geometry.dispose();const g=f.mesh.material;g.uniforms.map.value.dispose(),g.dispose()}this.cache.delete(f.key);const m=this.queue.indexOf(f);m>=0&&this.queue.splice(m,1)}}}dispose(){this.dead=!0;for(const e of this.cache.values()){if(!e.mesh)continue;e.mesh.geometry.dispose();const t=e.mesh.material;t.uniforms.map.value.dispose(),t.dispose()}this.cache.clear()}}let nl=null;function Og(){return nl??=(async()=>{const[{feature:n},e,t,i,r,s]=await Promise.all([ui(()=>import("./src-BnENo9bV.js"),[]),ui(()=>import("./countries-50m-DgYPl3oJ.js"),[]).then(h=>h.default),ui(()=>import("./index-DXVKXpnD.js").then(h=>h.i),__vite__mapDeps([0,1,2])).then(h=>h.default),ui(()=>import("./en-iHZ2wx5c.js"),[]),ui(()=>import("./ar-IVeb1Sj8.js"),[]),ui(()=>import("./fr-CwZlK-VA.js"),[])]);for(const h of[i,r,s])t.registerLocale(h.default??h);const o=Zr.startsWith("ar")?"ar":Zr.startsWith("fr")?"fr":"en",a=n(e,e.objects.countries),l=[];for(const h of a.features){const d=String(h.id??"").padStart(3,"0"),f=t.numericToAlpha2(d);if(!f||!h.geometry)continue;const m=h.geometry,g=m.type==="Polygon"?[m.coordinates]:m.type==="MultiPolygon"?m.coordinates:[];if(!g.length)continue;let _=g[0],p=-1;for(const y of g){const v=Ks(y[0]),T=(v[2]-v[0])*(v[3]-v[1]);T>p&&(p=T,_=y)}const u=t.getName(f,"en")??h.properties?.name??f;l.push({code:f.toLowerCase(),en:u,name:t.getName(f,o)??u,polygons:g,bbox:Ks(_[0])})}const c=new Intl.Collator(Zr);return l.sort((h,d)=>c.compare(h.name,d.name))})(),nl}function Ks(n){let e=180,t=90,i=-180,r=-90;for(const[s,o]of n)s<e&&(e=s),s>i&&(i=s),o<t&&(t=o),o>r&&(r=o);return[e,t,i,r]}function il(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[o,a]=t[r],[l,c]=t[s];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function zg(n,e,t){const i=n.polygons.map(s=>Ks(s[0])),r=new Uint8Array(e.length);for(let s=0;s<e.length;s++){const o=t[s],a=e[s];for(let l=0;l<n.polygons.length;l++){const c=i[l];if(o<c[0]||o>c[2]||a<c[1]||a>c[3])continue;const h=n.polygons[l];if(il(o,a,h[0])&&!h.slice(1).some(d=>il(o,a,d))){r[s]=1;break}}}return r}const Bg=n=>n.polygons.flat(),oa=["modis","viirs","landsat","geo"],Ds=/^\d{4}-\d{2}-\d{2}$/;function Gg(n){const e=n.get("date"),t=n.get("range")?.split(".."),i=t&&t.length===2&&Ds.test(t[0])&&Ds.test(t[1])&&t[0]<=t[1]?[t[0],t[1]]:null,r=d=>n.get(d)?.split(",").map(f=>f.trim()).filter(Boolean)??null,s=r("sensor")?.map(d=>d.toLowerCase()).filter(d=>oa.includes(d))??null,o=Number(n.get("conf")),a=Number(n.get("frp")),l=n.get("dn"),c=n.get("cam")?.split(",").map(Number),h=n.get("tab");return{date:e&&Ds.test(e)?e:null,range:i,country:n.get("country")?.trim()||null,bbox:Ic(n.get("bbox")),sats:r("sats"),sensors:s?.length?s:null,conf:o===1||o===2?o:0,frp:Number.isFinite(a)&&a>0?a:0,dn:l==="day"?1:l==="night"?2:0,cam:c&&c.length===3&&c.every(Number.isFinite)?{lat:c[0],lon:c[1],altKm:c[2]}:null,tab:h==="area"||h==="record"?h:null}}function Hg(n,e){const t=new URLSearchParams(n),i=(r,s)=>s==null||s===""?t.delete(r):t.set(r,s);return"date"in e&&i("date",e.date??null),"range"in e&&i("range",e.range?e.range.join(".."):null),"country"in e&&i("country",e.country??null),"bbox"in e&&i("bbox",e.bbox?e.bbox.join(","):null),"sats"in e&&i("sats",e.sats?.length?e.sats.join(","):null),"sensors"in e&&i("sensor",e.sensors?.length&&e.sensors.length<oa.length?e.sensors.join(","):null),"conf"in e&&i("conf",e.conf?String(e.conf):null),"frp"in e&&i("frp",e.frp?String(e.frp):null),"dn"in e&&i("dn",e.dn===1?"day":e.dn===2?"night":null),"cam"in e&&i("cam",e.cam?[e.cam.lat,e.cam.lon,Math.round(e.cam.altKm)].join(","):null),"tab"in e&&i("tab",e.tab??null),t}function kg(n){return Math.round((Date.parse(`${n[1]}T00:00:00Z`)-Date.parse(`${n[0]}T00:00:00Z`))/864e5)+1}const Vg=n=>new Date(n*1e3).toISOString().slice(11,16),rl=n=>n==null?"–":`${n.toFixed(1)} K ≈ ${(n-273.15).toFixed(0)}°C`;function Wg({record:n}){const e=[ne("m.conf.low"),ne("m.conf.nominalOne"),ne("m.conf.highOne")],t=n.sat.conf==="pct"&&n.confRaw>=0?`${n.confRaw}% → ${e[n.conf]}`:e[n.conf]??"–",i=(r,s,o=!0)=>I.jsx(At,{static:!0,title:r,trailing:I.jsx("span",{dir:o?"ltr":void 0,children:s})});return I.jsxs("div",{className:"fm-stack",children:[I.jsxs("p",{className:"fm-note",children:[I.jsxs("span",{style:{color:ri[n.sat.system]},"aria-hidden":!0,children:["■"," "]}),n.sat.symbol," ",n.sat.name," · ",n.sat.instrument," · ",Kn(new Date(n.time*1e3).toISOString().slice(0,10))," · ",ne("m.globe.observedAt",{time:Vg(n.time)})]}),I.jsxs(pn,{header:ne("m.globe.measured"),children:[i(ne("m.globe.f.position"),`${n.lat.toFixed(4)}, ${n.lon.toFixed(4)}`),i("FRP",n.frp==null?"–":`${St(n.frp,1)} MW`),i(ne("m.globe.f.conf"),t,!1),i(ne("m.globe.f.dn"),n.dayNight==="N"?ne("m.search.night"):ne("m.search.day"),!1),i(ne("m.globe.f.bright"),rl(n.b4)),i(ne("m.globe.f.brightBg"),rl(n.b5)),i(ne("m.globe.f.size"),`${n.scanKm.toFixed(2)} × ${n.trackKm.toFixed(2)} km (×${n.growth.toFixed(1)})`),n.version?i(ne("m.globe.f.version"),n.version):null]}),I.jsxs(pn,{header:ne("m.globe.geometry"),children:[n.altitudeKm==null?null:i(ne("m.globe.f.altitude"),`${St(n.altitudeKm)} km`),n.nadirKm==null?null:i(ne("m.globe.f.nadir"),`${St(n.nadirKm)} km`),n.viewZenith==null?I.jsx(At,{static:!0,title:ne("m.globe.noOrbit")}):i(ne("m.globe.f.vza"),`${n.viewZenith.toFixed(0)}°`)]}),I.jsxs(pn,{header:ne("m.globe.nearby"),footer:ne("m.globe.nearbyHint"),children:[I.jsx(At,{static:!0,title:ne("m.globe.samePass",{count:n.samePass}),trailing:I.jsxs("span",{dir:"ltr",children:[St(n.samePassFrp,1)," MW"]})}),n.others.length?n.others.map(r=>I.jsx(At,{static:!0,title:`${r.sat.symbol} ${r.sat.name}`,trailing:`${r.count}×`},r.sat.code)):I.jsx(At,{static:!0,title:ne("m.globe.noOthers")})]})]})}function Xg({bbox:n,date:e,regions:t,stats:i,sats:r}){return I.jsxs("div",{className:"fm-stack",children:[I.jsx("p",{className:"fm-note",children:I.jsx("span",{dir:"ltr",children:vc(n)})}),i?I.jsxs(pn,{header:ne("m.globe.inBox"),footer:ne("m.globe.inBoxHint"),children:[I.jsx(At,{static:!0,title:ne("m.globe.visible"),trailing:St(i.total)}),I.jsx(At,{static:!0,title:ne("m.globe.frpSum"),trailing:I.jsxs("span",{dir:"ltr",children:[St(i.frp,0)," MW"]})}),i.bySat.map((s,o)=>s?I.jsx(At,{static:!0,leading:I.jsx("i",{className:"fm-swatch",style:{background:ri[r[o].system]},"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${r[o].symbol} ${r[o].name}`}),trailing:St(s)},r[o].code):null)]}):null,e?I.jsx(jg,{bbox:n,date:e,regions:t}):I.jsx(er,{tone:"info",icon:I.jsx(Ns,{size:16}),children:ne("m.globe.rangeConversion")})]})}function jg({bbox:n,date:e,regions:t}){const i=`${n.join(",")}|${e}`,r=Nc(i,l=>Us.live({bbox:n.join(","),date:e},l)),s=r.data,o=n?t.find(l=>n[0]>=l.bbox[0]-.01&&n[1]>=l.bbox[1]-.01&&n[2]<=l.bbox[2]+.01&&n[3]<=l.bbox[3]+.01):null,a=[["ensemble",ne("m.alg.ensemble")],["frp_season",ne("m.alg.frp_season_adaptive")],["ratio_month",ne("m.alg.ratio_month_adaptive")],["ratio",ne("m.alg.ratio")]];return I.jsx(I.Fragment,{children:r.error&&!s?I.jsx(hl,{title:ne("m.live.failed"),message:Is(r.error),onRetry:r.reload}):s?I.jsxs("div",{className:"fm-stack","aria-busy":r.loading||void 0,children:[I.jsx("p",{className:"fm-note",children:Kn(s.date||e)}),o?I.jsx(er,{tone:"info",icon:I.jsx(Ns,{size:16}),children:ne("m.live.inside",{region:o.title})}):null,I.jsxs("section",{className:"fm-stack","aria-label":ne("m.live.perSat"),children:[I.jsx("h3",{className:"fm-subhead",children:ne("m.live.perSat")}),s.satellites.length?I.jsxs(ca,{label:ne("m.live.perSat"),children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx(di,{children:ne("m.live.satellite")}),I.jsx(di,{numeric:!0,children:ne("m.live.rows")}),I.jsx(di,{numeric:!0,children:ne("m.live.cells")})]})}),I.jsx("tbody",{children:s.satellites.map(l=>I.jsxs("tr",{children:[I.jsx(Rn,{children:I.jsx("span",{dir:"ltr",children:l.name})}),I.jsx(Rn,{numeric:!0,children:St(l.rows)}),I.jsx(Rn,{numeric:!0,children:l.fire_day_cells==null?"–":St(l.fire_day_cells)})]},l.code))})]}):I.jsx("p",{className:"fm-note",children:ne("m.live.none")})]}),I.jsxs("section",{className:"fm-stack","aria-label":ne("m.live.converted"),children:[I.jsx("h3",{className:"fm-subhead",children:ne("m.live.converted")}),I.jsx("p",{className:"fm-note",children:s.calibration.kind==="region"?ne("m.live.calRegion",{region:s.calibration.title??s.calibration.region??""}):ne("m.live.calGlobal")}),s.conversions.length?I.jsxs(ca,{label:ne("m.live.converted"),children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx(di,{children:ne("m.live.from")}),I.jsx(di,{numeric:!0,children:ne("m.live.cells")}),a.map(([l,c])=>I.jsx(di,{numeric:!0,children:c},l))]})}),I.jsxs("tbody",{children:[s.conversions.map(l=>I.jsxs("tr",{children:[I.jsx(Rn,{children:I.jsx("span",{dir:"ltr",children:l.name})}),I.jsx(Rn,{numeric:!0,children:St(l.cells)}),a.map(([c])=>I.jsx(Rn,{numeric:!0,"data-best":c==="ensemble"||void 0,children:St(l[c],1)},c))]},l.code)),I.jsxs("tr",{children:[I.jsx(Rn,{children:I.jsx("strong",{children:ne("m.live.aquaActual")})}),I.jsx(Rn,{numeric:!0,colSpan:a.length+1,children:I.jsx("strong",{children:St(s.aqua.fire_day_cells)})})]})]})]}):I.jsx("p",{className:"fm-note",children:ne("m.live.noViirs")}),I.jsx(er,{tone:"warning",icon:I.jsx(Ns,{size:16}),children:ne("m.live.aquaNote",{time:s.aqua.overpass_local??"15:15"})})]})]}):I.jsx(ul,{label:ne("m.live.loading")})})}const sl=["60","600","3600"],al=["3600","21600","86400"],qg=()=>new Date().toISOString().slice(0,10),rc=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10),Yg=["modis","viirs","landsat","geo"];async function sc(n,e){const t=await fetch(n,{credentials:"same-origin",signal:e}),i=await t.json().catch(()=>({}));if(!t.ok&&t.status!==202){const r=typeof i?.error=="string"?i.error:i?.error?.message??`HTTP ${t.status}`;throw new fl(t.status,r)}return i}async function $g(n,e,t){for(let i=0;i<200;i++){const r=await sc(Us.dayUrl(n??void 0),e);if(r.cols&&r.sats)return r;const s=typeof r.job=="string"?{id:r.job,status:"queued"}:r.job??{id:"",status:"queued"};if(t(s),s.status==="failed")throw new Error(s.log_tail||ne("m.globe.buildFailed"));if(await new Promise(o=>setTimeout(o,2500)),s.id)try{const o=await Us.job(s.id);if(t(o),o.status==="failed")throw new Error(o.log_tail||ne("m.globe.buildFailed"))}catch(o){if(o instanceof fl&&o.status===404)continue;throw o}}throw new Error(ne("m.globe.buildFailed"))}function Kg(n,e){const t=new URLSearchParams({from:n[0],to:n[1],bbox:e.bbox.map(i=>Math.round(i*1e3)/1e3).join(",")});return e.country&&t.set("country",e.country),`/api/range?${t}`}const ei=n=>n.toLowerCase().normalize("NFKD").replace(/[̀-ًͯ-ٟ]/g,"").replace(/[أإآ]/g,"ا").trim();function Zg(n,e){if(!e)return null;const t=ei(e);return n.find(i=>i.code===t)??n.find(i=>ei(i.en)===t||ei(i.name)===t)??null}const Jg=()=>rc(1);function d0(){const{regions:n}=xc(),[e,t]=Mc(),i=Oe.useMemo(()=>Gg(e),[e]),r=Oe.useCallback((j,ge=!1)=>t(de=>Hg(de,j),{replace:!ge}),[t]),[s,o]=Oe.useState(null),[a,l]=Oe.useState(""),[c,h]=Oe.useState(null);Oe.useEffect(()=>{let j=!0;return Og().then(ge=>j&&h(ge)).catch(()=>j&&h([])),()=>{j=!1}},[]);const d=Oe.useMemo(()=>c?Zg(c,i.country):null,[c,i.country]),f=d?{country:d.en,bbox:d.bbox}:i.bbox?{country:null,bbox:i.bbox}:null,m=i.range&&f?Kg(i.range,f):null,g=!!(i.range&&i.country&&!c),_=m??(g?null:`day|${i.date??""}`),[p,u]=Oe.useState({state:"loading"}),[y,v]=Oe.useState(0);Oe.useEffect(()=>{if(!_)return;const j=new AbortController;return u(de=>({state:"loading",data:de.data})),(m?sc(m,j.signal):$g(i.date,j.signal,de=>u(re=>({...re,state:"building",job:de})))).then(de=>u({state:"ready",data:de})).catch(de=>{j.signal.aborted||u({state:"error",error:Is(de)})}),()=>j.abort()},[_,y]);const T=p.state==="ready"?p.data:void 0,M=!!T?.range,E=Oe.useRef(null),b=Oe.useRef(null),[D,S]=Oe.useState(!1),[w,O]=Oe.useState(0),[F,V]=Oe.useState(!1),[L,N]=Oe.useState("600"),[B,Z]=Oe.useState(0),[W,$]=Oe.useState(null),Y=Oe.useRef(r);Y.current=r;const J=Oe.useRef(null);Oe.useLayoutEffect(()=>{if(!T||!E.current)return;let j=!1;const ge=window.setTimeout(()=>{if(!(j||!E.current))try{const de=new Ng(E.current,T,{onPick:P=>{$(P),P&&Y.current({tab:"record"})},onBoxPoint:(P,he)=>{Z(P===2?0:2),he&&Y.current({bbox:he,tab:"area"},!0)},onTick:(P,he)=>{O(P),V(he)}});b.current=de;const re=T.range?al[2]:sl[1];N(re),de.setSpeed(Number(re)),S(!0)}catch(de){u({state:"error",error:Is(de)})}},30);return()=>{j=!0,window.clearTimeout(ge);const de=b.current?.cameraView();b.current?.dispose(),b.current=null,S(!1),$(null),de&&(J.current=de)}},[T]),Oe.useEffect(()=>{D&&J.current&&(b.current?.flyToView(J.current),J.current=null)},[D]);const ee=Oe.useMemo(()=>T?.sats??[],[T]),G=Oe.useMemo(()=>{const j=new Set(T?.cols.sat??[]);return ee.map((ge,de)=>j.has(de))},[T,ee]),te=Oe.useMemo(()=>ee.map(j=>(!i.sats||i.sats.includes(j.code))&&(!i.sensors||i.sensors.includes(Yg[j.system]))),[ee,i.sats,i.sensors]),Q=`${te.join()}|${i.conf}|${i.frp}|${i.dn}`;Oe.useEffect(()=>{D&&b.current?.setFilters({sats:te,minConf:i.conf,minFrp:i.frp,dayNight:i.dn})},[D,Q]);const ce=Oe.useRef(null);Oe.useEffect(()=>{const j=b.current;if(!(!D||!j||!T)){if(!d){j.setAreaMask(null),j.setOutline(null),ce.current=null;return}j.setAreaMask(zg(d,T.cols.lat,T.cols.lon)),j.setOutline(Bg(d)),ce.current!==d.code&&!i.cam&&!i.bbox&&j.flyToBox(d.bbox),ce.current=d.code}},[D,T,d]);const _e=i.bbox?.join(",")??"";Oe.useEffect(()=>{!D||!b.current||(b.current.setBox(i.bbox),i.bbox&&!i.cam&&b.current.flyToBox(i.bbox))},[D,_e]);const be=i.cam?`${i.cam.lat},${i.cam.lon},${i.cam.altKm}`:"";Oe.useEffect(()=>{D&&i.cam&&b.current?.flyToView(i.cam)},[D,be]);const[Ce,Ae]=Oe.useState(null),[ze,H]=Oe.useState(null),[je,xe]=Oe.useState([]),we=Math.floor(w/(M?3600:300));Oe.useEffect(()=>{const j=b.current;!D||!j||(Ae(j.stats()),H(i.bbox?j.stats(i.bbox):null),xe(j.hotspots(8,M?.25:.1)))},[D,Q,d,_e,we]),Oe.useEffect(()=>(ha(()=>({mode:T?.range?"range":"day",shown:T?.range?{from:T.range[0],to:T.range[1],source:T.source}:{day:T?.window[0]},country:d?{code:d.code,name:d.en}:null,camera:b.current?.cameraView()??null,visible_records:Ce?.total??null,visible_frp_mw:Ce?Math.round(Ce.frp):null,per_satellite:Ce?Object.fromEntries(ee.map((j,ge)=>[j.code,Ce.bySat[ge]]).filter(([,j])=>j)):null,top_hotspots:je.slice(0,5).map(j=>({lat:+j.lat.toFixed(3),lon:+j.lon.toFixed(3),pixels:j.count,frp_mw:Math.round(j.frp)})),selected_record:W?{satellite:W.sat.code,lat:W.lat,lon:W.lon,time:new Date(W.time*1e3).toISOString(),frp:W.frp}:null})),()=>ha(null)),[T,d,Ce,ee,W,je]);const[Ee,Ue]=Oe.useState(["day","range","country","frp","sensor:viirs","sensor:modis"]),Te=T&&!T.range?T.window[0]:i.date??null,A=Oe.useMemo(()=>{const j=[...oa.filter((ge,de)=>ee.some((re,P)=>G[P]&&re.system===de)).map(ge=>({id:`sensor:${ge}`,label:ne(`m.globe.sensor.${ge}`),description:ne("m.globe.sensorsHint"),keywords:[ne("m.globe.sensors")]})),...ee.filter((ge,de)=>G[de]).map(ge=>({id:`sat:${ge.code}`,label:`${ge.symbol} ${ge.name}`,description:`${ge.instrument} · ${ne("m.globe.satellitesHint")}`,keywords:[ne("m.globe.satellites"),ge.code]}))];return[{id:"day",label:ne("m.globe.oneDay"),description:ne("m.globe.dayFoot"),type:"date",min:rc(60),max:Jg()},{id:"range",label:ne("m.globe.range"),description:ne("m.globe.pickRangeHint"),type:"dateRange",min:"2000-11-01",max:qg()},{id:"country",label:ne("m.globe.country"),description:ne("m.globe.searchAbove"),type:"enum",choices:(c??[]).map(ge=>({value:ge.code,label:ge.name}))},{id:"conf",label:ne("m.globe.confidence"),type:"enum",choices:[{value:"1",label:ne("m.conf.nominal")},{value:"2",label:ne("m.conf.high")}]},{id:"frp",label:ne("m.globe.minFrp"),description:ne("m.search.minFrpHint"),type:"custom",renderEditor:(ge,de)=>I.jsx(Lc,{label:ne("m.globe.minFrp"),unit:"MW",min:0,max:5e3,step:1,value:typeof ge=="string"&&Number(ge)||0,onValueChange:re=>de(re>0?String(re):null)}),formatValue:ge=>typeof ge=="string"?`≥ ${ge} MW`:""},{id:"dn",label:ne("m.globe.dayNight"),type:"enum",choices:[{value:"day",label:ne("m.search.day")},{value:"night",label:ne("m.search.night")}]},...j]},[c,ee,G]),x={day:i.range?null:Te,range:i.range?{from:i.range[0],to:i.range[1]}:null,country:d?.code??null,conf:i.conf?String(i.conf):null,frp:i.frp?String(i.frp):null,dn:i.dn===1?"day":i.dn===2?"night":null},z=j=>{const ge=he=>typeof he=="string"&&he?he:null,de={},re=j.range&&typeof j.range=="object"&&j.range.from&&j.range.to?j.range:null,P=re?[re.from<=re.to?re.from:re.to,re.from<=re.to?re.to:re.from]:null;JSON.stringify(P)!==JSON.stringify(i.range)&&(de.range=P),ge(j.day)!==x.day&&(de.date=ge(j.day),ge(j.day)&&(de.range=null)),ge(j.country)!==x.country&&(de.country=ge(j.country),de.cam=null),ge(j.conf)!==x.conf&&(de.conf=Number(ge(j.conf))||0),ge(j.frp)!==x.frp&&(de.frp=Number(ge(j.frp))||0),ge(j.dn)!==x.dn&&(de.dn=ge(j.dn)==="day"?1:ge(j.dn)==="night"?2:0),Object.keys(de).length&&r(de,"range"in de||"date"in de||"country"in de)},le=[...(i.sensors??[]).map(j=>`sensor:${j}`),...(i.sats??[]).map(j=>`sat:${j}`)],ae=j=>{const ge=j.filter(re=>re.startsWith("sensor:")).map(re=>re.slice(7)),de=j.filter(re=>re.startsWith("sat:")).map(re=>re.slice(4));r({sensors:ge.length?ge:null,sats:de.length?de:null})},se=!!(i.sats||i.sensors||i.conf||i.frp||i.dn||i.country),Me=!!(i.bbox||W),fe=i.tab==="record"&&W?"record":i.bbox?"area":"record",Se=()=>{$(null),b.current?.clearSelection(),r({bbox:null,tab:null})},Le=()=>{b.current?.setDrawing(!0),Z(1)},Ie=()=>{const j=b.current;if(!j||!i.bbox)return;const ge=URL.createObjectURL(new Blob([j.csv(i.bbox)],{type:"text/csv"})),de=document.createElement("a");de.href=ge,de.download=`firms_${i.range?i.range.join("_"):Te??"day"}_${i.bbox.join("_")}.csv`,de.click(),setTimeout(()=>URL.revokeObjectURL(ge),1e3)},oe=b.current,Be=oe?.span??86400,C=oe?.tMin??0,ie=j=>new Date((C+j)*1e3).toISOString(),pe=oe?M?`${Kn(ie(w).slice(0,10))} ${ie(w).slice(11,16)}`:`${ie(w).slice(11,16)} UTC`:"--:--",ue=p.state==="loading"||p.state==="building"||!!T&&!D,ye=i.range?`${Kn(i.range[0])} → ${Kn(i.range[1])} · ${ne("m.globe.days",{count:kg(i.range)})}`:Te?Kn(Te):ne("m.globe.today");return I.jsxs("div",{className:"fm-globe",children:[I.jsx("div",{ref:E,className:"fm-globe-host"}),I.jsx(Sc,{children:I.jsx(Dc,{label:ne("m.globe.filters"),options:A,value:le,onChange:ae,values:x,onValuesChange:z,pinned:Ee,onPinnedChange:Ue,onBack:se?()=>r({sats:null,sensors:null,conf:0,frp:0,dn:0,country:null}):void 0,trailing:I.jsx(Vi,{label:ne("m.globe.view"),children:I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ne("m.globe.home"),onClick:()=>b.current?.flyHome(),disabled:!D,children:I.jsx(yc,{})})})})}),I.jsxs(Ec,{children:[I.jsxs(Vi,{label:ne("m.globe.timeline"),children:[I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":F?ne("m.globe.pause"):ne("m.globe.play"),disabled:!D,onClick:()=>{b.current?.setPlaying(!F),V(!F)},children:F?I.jsx(Gc,{}):I.jsx(Hc,{})}),I.jsx("span",{className:"fm-dock-clock",dir:"ltr",children:pe})]}),B?I.jsxs(hr,{variant:"tonal",onClick:()=>{b.current?.setDrawing(!1),b.current?.setBox(i.bbox),Z(0)},children:[I.jsx(bc,{"aria-hidden":!0}),I.jsx("span",{className:"lab-control-label",children:ne("m.globe.cancelBox")})]}):I.jsxs(hr,{variant:Me?"tonal":"filled",disabled:!D,onClick:Le,children:[I.jsx(ga,{"aria-hidden":!0}),I.jsx("span",{className:"lab-control-label",children:ne("m.globe.drawBox")})]})]}),!T||p.state==="error"?I.jsx("div",{className:"fm-globe-overlay",children:I.jsx("div",{className:"fm-globe-card",children:p.state==="error"?I.jsx(hl,{title:ne("m.globe.failed"),message:p.error??"",onRetry:()=>v(j=>j+1)}):I.jsxs(I.Fragment,{children:[I.jsx(ul,{label:p.state==="building"?ne("m.globe.building"):m?ne("m.globe.loadingRange"):ne("m.globe.loading")}),p.job?.log_tail?I.jsx("pre",{className:"fm-log",dir:"ltr",children:p.job.log_tail}):null]})})}):ue?I.jsx("div",{className:"fm-globe-busy",role:"status",children:p.state==="ready"?ne("m.globe.preparing"):m?ne("m.globe.loadingRange"):ne("m.globe.loading")}):null,B?I.jsx("div",{className:"fm-globe-hint",role:"status",children:B===1?ne("m.globe.dragBox"):ne("m.globe.secondCorner")}):null,I.jsx("div",{ref:o,className:"fm-globe-stage"}),s?I.jsxs(I.Fragment,{children:[I.jsx(ua,{open:!0,onOpenChange:()=>{},label:ne("m.globe.explore"),container:s,detents:["peek","medium","large"],defaultDetent:"medium",dismissible:!1,backgroundInteraction:"medium",regular:"card",modal:!1,header:I.jsx(Qg,{value:a,onChange:l,placeholder:d?d.name:ne("m.globe.searchPlace")}),children:a.trim()?I.jsx(e0,{query:a,countries:c,regions:n.map(j=>({name:j.name,title:da(j),bbox:j.bbox})),current:d?.code??null,onCountry:j=>{r({country:j.code,bbox:null,cam:null},!0),l("")},onRegion:j=>{r({bbox:j,tab:"area",cam:null},!0),l("")}}):I.jsx(t0,{periodLabel:ye,data:T,stats:Ce,sats:ee,present:G,solo:i.sats?.length===1?i.sats[0]:null,onSolo:j=>r({sats:i.sats?.length===1&&i.sats[0]===j?null:[j]}),spots:je,isRange:M,onSpot:j=>b.current?.flyToView({lat:j.lat,lon:j.lon,altKm:M?120:60}),rangeNeedsArea:!!(i.range&&!f),timeline:D&&oe?I.jsx(n0,{engine:oe,simT:w,speed:L,speeds:M?al:sl,isRange:M,onSpeed:j=>{N(j),oe.setSpeed(Number(j))},onSeek:j=>{oe.setPlaying(!1),oe.setTime(j),O(j)},span:Be,at:ie}):null})}),I.jsx(ua,{open:Me,onOpenChange:j=>j?void 0:Se(),label:ne("m.globe.inspector"),container:s,regular:"pane",paneWidth:400,modal:!1,title:i.bbox&&W?void 0:fe==="area"?ne("m.globe.tabArea"):ne("m.globe.record"),leading:i.bbox&&W?I.jsx(Vi,{label:ne("m.globe.inspector"),children:I.jsx(dl,{label:ne("m.globe.inspector"),value:fe,onChange:j=>r({tab:j}),options:[{value:"area",label:ne("m.globe.tabArea")},{value:"record",label:ne("m.globe.tabRecord")}]})}):void 0,trailing:fe==="area"&&i.bbox?I.jsxs(Vi,{label:ne("m.globe.areaActions"),children:[I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ne("m.globe.zoomTo"),onClick:()=>i.bbox&&b.current?.flyToBox(i.bbox),children:I.jsx(_a,{})}),I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ne("m.globe.redraw"),onClick:Le,children:I.jsx(ga,{})}),I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ne("m.globe.clearBox"),onClick:()=>r({bbox:null,tab:W?"record":null}),children:I.jsx(Tc,{})})]}):W?I.jsx(Vi,{label:ne("m.globe.pixelActions"),children:I.jsx(fi,{variant:"text",appearance:"toolbar","aria-label":ne("m.globe.goToTime"),onClick:()=>b.current?.setTime(W.time-C-60),children:I.jsx(Oc,{})})}):void 0,dock:fe==="area"&&i.bbox?I.jsx(ma,{label:ne("m.globe.areaActions"),children:I.jsxs(hr,{variant:"filled",disabled:!ze?.total,onClick:Ie,children:[I.jsx(Fc,{"aria-hidden":!0}),ne("m.globe.downloadCsv",{count:St(ze?.total??0)})]})}):W?I.jsx(ma,{label:ne("m.globe.pixelActions"),children:I.jsxs(hr,{variant:"filled",onClick:()=>b.current?.zoomToSelection(),children:[I.jsx(_a,{"aria-hidden":!0}),ne("m.globe.zoomIn")]})}):void 0,children:fe==="record"&&W?I.jsx(Wg,{record:W}):i.bbox?I.jsx(Xg,{bbox:i.bbox,date:T&&!T.range?T.window[0]:null,regions:n.map(j=>({name:j.name,title:da(j),bbox:j.bbox})),stats:ze,sats:ee}):null})]}):null]})}function Qg({value:n,onChange:e,placeholder:t}){return I.jsx("div",{className:"fm-sheet-search","data-lab-sheet-handle":"",children:I.jsx(Uc,{variant:"tonal",placeholder:t,"aria-label":ne("m.globe.searchPlace"),leadingIcon:I.jsx(Cc,{size:18}),value:n,onValueChange:e,autoComplete:"off"})})}function e0({query:n,countries:e,regions:t,current:i,onCountry:r,onRegion:s}){const o=ei(n),a=(e??[]).filter(c=>ei(c.name).includes(o)||ei(c.en).includes(o)||c.code===o).slice(0,30),l=t.filter(c=>ei(c.title).includes(o)||c.name.includes(o));return I.jsxs(I.Fragment,{children:[l.length?I.jsx(pn,{header:ne("m.globe.regions"),children:l.map(c=>I.jsx(At,{leading:I.jsx(Ac,{size:18,"aria-hidden":!0}),title:c.title,subtitle:ne("m.globe.regionHint"),onClick:()=>s(c.bbox)},c.name))}):null,I.jsx(pn,{header:ne("m.globe.countries"),children:e?a.length?a.map(c=>I.jsx(At,{leading:I.jsx(zc,{size:18,"aria-hidden":!0}),title:c.name,subtitle:c.name!==c.en?c.en:void 0,selected:i===c.code,onClick:()=>r(c)},c.code)):I.jsx(At,{static:!0,title:ne("m.globe.noCountry")}):I.jsx(At,{static:!0,title:ne("m.common.loading")})})]})}function t0({periodLabel:n,data:e,stats:t,sats:i,present:r,solo:s,onSolo:o,spots:a,isRange:l,onSpot:c,rangeNeedsArea:h,timeline:d}){if(wc()?.detent==="peek")return null;const m=g=>{const _=new Date(g*1e3).toISOString();return l?`${Kn(_.slice(0,10))} ${_.slice(11,16)}`:`${_.slice(11,16)} UTC`};return I.jsxs(I.Fragment,{children:[h?I.jsx(er,{tone:"warning",children:ne("m.globe.rangeNeedsArea")}):null,e?.note?I.jsx(er,{tone:"info",children:e.note}):null,I.jsxs(pn,{header:n,footer:e?.truncated?ne("m.globe.truncated"):void 0,children:[I.jsx(At,{static:!0,leading:I.jsx(fa,{size:18,"aria-hidden":!0}),title:ne("m.globe.visible"),trailing:t?St(t.total):"…"}),I.jsx(At,{static:!0,title:ne("m.globe.frpSum"),trailing:t?I.jsxs("span",{dir:"ltr",children:[St(t.frp,0)," MW"]}):"…"})]}),d,I.jsx(pn,{header:ne("m.globe.hotspots"),footer:ne("m.globe.hotspotsHint"),children:a.length?a.map(g=>I.jsx(At,{leading:I.jsx(fa,{size:18,"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${g.lat.toFixed(2)}, ${g.lon.toFixed(2)}`}),subtitle:ne("m.globe.spot",{count:St(g.count),when:m(g.last)}),trailing:I.jsxs("span",{dir:"ltr",children:[St(g.frp,0)," MW"]}),chevron:!0,onClick:()=>c(g)},`${g.lat.toFixed(3)},${g.lon.toFixed(3)}`)):I.jsx(At,{static:!0,title:ne("m.globe.noSpots")})}),I.jsx(pn,{header:ne("m.globe.satellites"),footer:ne("m.globe.soloHint"),children:i.map((g,_)=>r[_]?I.jsx(At,{leading:I.jsx("i",{className:"fm-swatch",style:{background:ri[g.system]},"aria-hidden":!0}),title:I.jsx("span",{dir:"ltr",children:`${g.symbol} ${g.name}`}),subtitle:g.instrument,trailing:t?St(t.bySat[_]):void 0,selected:s===g.code,onClick:()=>o(g.code)},g.code):null)})]})}function n0({engine:n,simT:e,speed:t,speeds:i,isRange:r,onSpeed:s,onSeek:o,span:a,at:l}){return I.jsx(pn,{header:ne("m.globe.timeline"),children:I.jsxs("div",{className:"fm-tl",children:[I.jsx(i0,{engine:n,simT:e,onSeek:o}),I.jsx(Rc,{label:ne("m.globe.time"),trackStyle:"thin",controlSize:"small",min:-600,max:Math.round(a),step:r?600:10,value:e,onValueChange:o,getValueText:c=>r?`${l(c).slice(0,10)} ${l(c).slice(11,16)} UTC`:`${l(c).slice(11,16)} UTC`}),I.jsx(dl,{label:ne("m.globe.speed"),value:t,onChange:s,options:i.map(c=>({value:c,label:r?ne(`m.globe.speedRange.${c}`):`${c}×`}))})]})})}function i0({engine:n,simT:e,onSeek:t}){const i=Oe.useRef(null);return Oe.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight;if(!s)return;const a=devicePixelRatio;r.width=s*a,r.height=o*a;const l=r.getContext("2d");l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,s,o);const c=n.span+600,h=pa==="rtl",d=_=>{const p=(_+600)/c*s;return h?s-p:p},f=n.bins[0].length;let m=1;for(let _=0;_<f;_++)m=Math.max(m,n.bins.reduce((p,u)=>p+u[_],0));const g=Math.max(1,Math.abs(d(n.binSize)-d(0))-1);for(let _=0;_<f;_++){let p=o;n.bins.forEach((u,y)=>{const v=u[_]/m*(o-4);l.fillStyle=ri[y];const T=d(h?(_+1)*n.binSize:_*n.binSize);l.fillRect(T,p-v,g,v),p-=v})}l.fillStyle=getComputedStyle(r).color,l.fillRect(d(e)-1,0,2,o)},[n,e]),I.jsx("canvas",{ref:i,className:"fm-tl-hist","aria-hidden":!0,onClick:r=>{const s=r.currentTarget.getBoundingClientRect(),o=(r.clientX-s.left)/s.width;t((pa==="rtl"?1-o:o)*(n.span+600)-600)}})}export{d0 as default};
