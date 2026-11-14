import{c as ri,r as Fe,x as ec,y as qs,z as Zn,j as J,V as tc,A as js,F as nc,G as ic,H as $o,I as Zo,J as rc,K as sc,O as ac,Q as ra,R as oc,t as Te,B as Ai,i as ws,U as Jo,E as Qo,e as Rs,L as el,N as Cs,T as sa,l as oi,m as An,u as lc,W as cc,X as hc,Y as uc,Z as dc,_ as aa,$ as fc,S as pc,a0 as mc,d as Ps,a1 as oa}from"./index-WfE_LsEK.js";import{G as gc,l as _c,L as Wr,s as vc,S as xc,a as Mc,b as Sc}from"./segmented-CHG4U17l.js";import{s as Xr,a as yc,b as Ec,c as bc,d as Tc,C as Ac,e as wc,T as Rc}from"./temporal-dialog-D4prM0DH.js";import{s as la}from"./spring-core-D_zDcavU.js";import{r as Cc}from"./algorithms-ClxA_s3O.js";import{p as Pc}from"./bbox-D104tjyD.js";import{f as sn,e as tl,g as Ls}from"./format-DN-0JGXV.js";import{u as Lc}from"./use-remote-CRulKyq4.js";import{I as ca}from"./info-Df5Jrhdu.js";const nl={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};nl.node;const Dc=ri(nl);const il={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};il.node;const ha=ri(il);const rl={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};rl.node;const Uc=ri(rl);const sl={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};sl.node;const Ic=ri(sl);const al={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};al.node;const Nc=ri(al);const ol={name:"square-dashed",size:24,node:[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aliases:["box-select"]};ol.node;const Fc=ri(ol);const ll={name:"zoom-in",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]};ll.node;const Oc=ri(ll),ua=qs(Zn.snappy),da=qs(Zn.bouncy),zc=qs(Zn.interactive);function Bc(n,e,t,i,r,s,o=!1,a="thumb"){const l=Fe.useRef({position:e,velocity:0,press:{position:1,velocity:0},lens:{position:0,velocity:0},stretch:{position:0,velocity:0},lensing:!1,frame:0,time:0}),c=Fe.useRef({target:e,tracking:t,pressed:i,thin:r,disabled:s,overshoot:o,reduced:!1}),h=Fe.useRef(()=>{});Fe.useLayoutEffect(()=>{const d=ec(),f=l.current;let m=!0;const v=n.current?.querySelector(":scope > .lab-slider-thumb > .lab-lens"),g=v?new gc(v,a,!0):null,p=()=>{const S=n.current;if(!S)return{travel:0,inset:0,height:0,rtl:!1};const T=getComputedStyle(S),N=S.offsetHeight,y=Number.parseFloat(T.getPropertyValue("--lab-slider-inset"))||N/2;return{travel:Math.max(0,S.offsetWidth-2*y),inset:y,height:N,rtl:T.direction==="rtl"}},u=()=>{const S=n.current;if(!S)return;const N=c.current.overshoot?f.position:Math.max(0,Math.min(1,f.position)),y=f.stretch.position;S.style.setProperty("--lab-slider-visual-fraction",String(N)),S.style.setProperty("--lab-slider-press",String(f.press.position)),S.style.setProperty("--lab-slider-stretch",`${y}px`),S.style.setProperty("--lab-slider-stretch-size",`${Math.abs(y)}px`),S.style.setProperty("--lab-lens",String(Math.max(0,Math.min(1,f.lens.position)))),g?.update(f.lens.position)},M=(S,T,N,{stiffness:y,damping:A})=>{const F=la(S,T,N,y,A);S.position=F.position,S.velocity=F.velocity},_=(S,T)=>{S.position=T,S.velocity=0},R=S=>{if(f.frame=0,!m)return;const T=c.current,N=f.time?Math.max(1/240,Math.min(.04,(S-f.time)/1e3)):1/60;f.time=S;const y=p();if(T.reduced||T.disabled){f.position=T.target,f.velocity=0,_(f.press,1),_(f.lens,0),_(f.stretch,0),f.lensing=!1,u(),f.time=0;return}const A=f.position;if(T.tracking)f.position=T.target,f.velocity=(T.target-A)/N;else{const O=la({position:f.position,velocity:f.velocity},T.target,N,T.thin?700:420,T.thin?48:28);f.position=O.position,f.velocity=O.velocity}f.lensing=T.pressed;const F=f.lensing;M(f.press,F?Wr:1,N,F?ua:da),M(f.lens,F?1:0,N,ua);const B=F?_c(f.velocity*y.travel):0;M(f.stretch,B,N,F?zc:da),u();const k=(O,U,Q)=>Math.abs(O.position-U)<=Q&&Math.abs(O.velocity)<=Q*10;Math.abs(f.position-T.target)>1e-4||Math.abs(f.velocity)>.002||!k(f.press,F?Wr:1,5e-4)||!k(f.lens,F?1:0,.002)||!k(f.stretch,B,.05)?f.frame=requestAnimationFrame(R):(f.position=T.target,f.velocity=0,_(f.press,F?Wr:1),_(f.lens,F?1:0),_(f.stretch,0),f.time=0,u())};h.current=()=>{!f.frame&&m&&(f.frame=requestAnimationFrame(R))};const E=()=>{c.current.reduced=d.matches,h.current()};return c.current.reduced=d.matches,d.addEventListener("change",E),u(),h.current(),()=>{m=!1,g?.dispose(),cancelAnimationFrame(f.frame),f.frame=0,f.time=0,d.removeEventListener("change",E)}},[n,a]),Fe.useLayoutEffect(()=>{c.current={...c.current,target:e,tracking:t,pressed:i,thin:r,disabled:s,overshoot:o},h.current()},[n,e,t,i,r,s,o])}const cl=Fe.forwardRef((n,e)=>J.jsx(hl,{...n,forwardedRef:e}));cl.displayName="Slider";function hl({label:n,controlSize:e="regular",trackStyle:t="thick",value:i,defaultValue:r,min:s=0,max:o=100,step:a=1,disabled:l=!1,onValueChange:c,onValueCommit:h,getValueText:d,showStops:f=!1,marks:m,renderTrack:v,renderFill:g,renderThumb:p,name:u,form:M,forwardedRef:_,switchMode:R=!1,checkedText:E,className:S,style:T,onKeyDown:N,onClick:y,onPointerDown:A,onPointerMove:F,onPointerUp:B,onPointerCancel:k,onLostPointerCapture:L,...O}){const U=bc(s,o,a),Q=P=>Ec(P,U.min,U.max,U.step),[q,Y]=Fe.useState(()=>Q(r??U.min)),V=Q(i??q),ee=Fe.useRef(V);ee.current=V;const te=Fe.useRef(null),[I,K]=Fe.useState(!1),[$,ie]=Fe.useState(!1),pe=Fe.useRef(null),he=Fe.useRef(null),[Ae,Me]=Fe.useState(null),Ce=l||U.max<=U.min,H=P=>(P=Q(P),P===ee.current||(ee.current=P,i===void 0&&Y(P),c?.(P)),P),Ye=P=>{const ne=P.currentTarget.getBoundingClientRect(),le=Tc(P.clientX,ne.left,ne.width,getComputedStyle(P.currentTarget).direction==="rtl",Number.parseFloat(getComputedStyle(P.currentTarget).getPropertyValue("--lab-slider-inset"))||ne.height/2);return U.min+le*(U.max-U.min)},ve=P=>{const ne=Ye(P);Me(ne);const le=H(ne);he.current&&(he.current.value=le)},ye=()=>{const P=he.current;he.current=null,K(!1),ie(!1),Me(null),P&&H(P.start)};Fe.useEffect(()=>{Ce&&(he.current=null,K(!1),ie(!1),Me(null))},[Ce]),Fe.useEffect(()=>{const P=pe.current?.form,ne=()=>{he.current=null,K(!1),ie(!1),Me(null),i===void 0&&Y(Q(r??U.min))};return P?.addEventListener("reset",ne),()=>P?.removeEventListener("reset",ne)},[i,r,U.min,U.max,U.step,M]);const xe=Ce?V:Ae??V,Le=R&&Ae!==null&&!Ce?Ae:Xr(xe,U.min,U.max);Bc(te,Le,$,I,t==="thin",Ce,R,R?"switch":"thumb");const Ee=P=>{const ne=Number.parseFloat(getComputedStyle(P).getPropertyValue("--lab-slider-inset"))||P.offsetHeight/2;return Math.max(0,P.offsetWidth-2*ne)},b=P=>{const ne=he.current;if(!ne)return;const le=P.currentTarget,ge=le.getBoundingClientRect(),Re=le.offsetWidth?ge.width/le.offsetWidth:1,De=getComputedStyle(le).direction==="rtl",oe=Ee(le),ze=(P.clientX-ne.x)/Re*(De?-1:1);ne.thumb=Mc(ne.start,ze,oe),ne.tracker.add(ne.thumb*oe,P.timeStamp),Me(ne.thumb),ne.value=H(ne.thumb)},x={value:V,position:xe,fraction:Le,dragging:Ae!==null,disabled:Ce},G=Math.ceil((U.max-U.min)/U.step)+1,ae=m??(f&&G<=101?Array.from({length:G},(P,ne)=>({value:Math.min(U.max,U.min+ne*U.step)})):[]),se=d?.(V);return J.jsxs(J.Fragment,{children:[J.jsxs("div",{...O,ref:P=>{te.current=P,typeof _=="function"?_(P):_&&(_.current=P)},className:js("lab-slider",S),style:{...T,"--lab-slider-fraction":Le},role:R?"switch":"slider",tabIndex:Ce?-1:O.tabIndex??0,"aria-label":n,"aria-disabled":Ce||void 0,"aria-valuemin":R?void 0:U.min,"aria-valuemax":R?void 0:U.max,"aria-valuenow":R?void 0:V,"aria-valuetext":R?void 0:se,"aria-checked":R?V===1:void 0,"data-dragging":Ae!==null,"data-pressed":I&&!Ce,"data-tracking":$&&!Ce,"data-disabled":Ce||void 0,"data-switch":R||void 0,"data-control-size":e,"data-track-style":t,onPointerDown:P=>{A?.(P),!(P.defaultPrevented||Ce||P.button!==0||!P.isPrimary||he.current)&&(ie(!1),K(!0),P.currentTarget.focus({preventScroll:!0,focusVisible:!1}),he.current={id:P.pointerId,start:V,value:V,x:P.clientX,y:P.clientY,touch:P.pointerType==="touch",moved:!1,thumb:V,tracker:new tc},P.currentTarget.setPointerCapture(P.pointerId),R||ve(P))},onPointerMove:P=>{F?.(P);const ne=he.current;if(P.defaultPrevented||ne?.id!==P.pointerId)return;const le=Math.abs(P.clientX-ne.x),ge=R?xc[ne.touch?"touch":"mouse"]:4;!ne.moved&&le>ge&&(!R||le>=Math.abs(P.clientY-ne.y))&&(ne.moved=!0,ie(!0)),R?ne.moved&&b(P):ve(P)},onPointerUp:P=>{if(B?.(P),he.current?.id!==P.pointerId)return;if(Ce||P.defaultPrevented){ye();return}const ne=he.current;if(R&&!ne.moved)ne.value=H(1-ne.start);else if(R){const ge=Ee(P.currentTarget),Re=ge?ne.tracker.velocity(P.timeStamp)/ge:0;ne.value=H(vc(ne.thumb,Re))}else ve(P);const le=ne.value;K(!1),ie(!1),he.current=null,Me(null),P.currentTarget.releasePointerCapture(P.pointerId),h?.(le)},onPointerCancel:P=>{k?.(P),he.current?.id===P.pointerId&&ye()},onLostPointerCapture:P=>{L?.(P),he.current?.id===P.pointerId&&ye()},onClick:P=>{if(y?.(P),!P.defaultPrevented&&!Ce&&R&&P.detail===0){const ne=H(1-V);h?.(ne)}},onKeyDown:P=>{if(N?.(P),P.defaultPrevented||Ce)return;if(P.key==="Escape"&&he.current){P.preventDefault(),ye();return}const ne=R&&[" ","Enter"].includes(P.key)?1-V:yc(P.key,V,U.min,U.max,U.step,getComputedStyle(P.currentTarget).direction==="rtl");ne!==null&&(P.preventDefault(),H(ne),h?.(ne))},children:[J.jsx("span",{className:"lab-slider-track-decoration","aria-hidden":"true",children:v?.(x)}),J.jsx("span",{className:"lab-slider-rail","aria-hidden":"true"}),J.jsx("span",{className:"lab-slider-fill","aria-hidden":"true",children:g?.(x)}),ae.filter(P=>P.value>=U.min&&P.value<=U.max).map((P,ne)=>J.jsx("span",{className:"lab-slider-stop","aria-hidden":"true","data-active":P.value<=V,style:{"--lab-slider-stop":Xr(P.value,U.min,U.max)}},ne)),J.jsxs("span",{className:"lab-slider-thumb","aria-hidden":"true",children:[J.jsx("span",{className:"lab-lens"}),p?.(x)]}),R&&J.jsx("span",{className:"lab-slider-switch-text","aria-hidden":"true",children:E?.(V)})]}),m?.some(P=>P.label!=null)&&J.jsx("div",{className:"lab-slider-marks","data-control-size":e,"data-track-style":t,"aria-hidden":"true",children:m.filter(P=>P.value>=U.min&&P.value<=U.max).map((P,ne)=>J.jsx("span",{style:{"--lab-slider-stop":Xr(P.value,U.min,U.max)},children:P.label},ne))}),J.jsx("input",{ref:pe,type:"hidden",name:u,form:M,value:V,disabled:l})]})}const Gc=Fe.forwardRef(({checked:n,loading:e,defaultChecked:t=!1,onCheckedChange:i,onCheckedCommit:r,onText:s,offText:o,...a},l)=>J.jsx(hl,{...a,forwardedRef:l,switchMode:!0,disabled:a.disabled||e,"aria-busy":e||void 0,min:0,max:1,step:1,value:n===void 0?void 0:Number(n),defaultValue:Number(t),onValueChange:c=>i?.(c===1),onValueCommit:c=>r?.(c===1),checkedText:c=>c===1?s:o}));Gc.displayName="SlideSwitch";const Ys="160",li={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hc=0,fa=1,kc=2,ul=1,Vc=2,yn=3,zn=0,It=1,qt=2,Nn=0,Ci=1,pa=2,ma=3,ga=4,Wc=5,qn=100,Xc=101,qc=102,_a=103,va=104,jc=200,Yc=201,Kc=202,$c=203,Ds=204,Us=205,Zc=206,Jc=207,Qc=208,eh=209,th=210,nh=211,ih=212,rh=213,sh=214,ah=0,oh=1,lh=2,Dr=3,ch=4,hh=5,uh=6,dh=7,dl=0,fh=1,ph=2,Fn=0,mh=1,gh=2,_h=3,vh=4,xh=5,Mh=6,fl=300,Di=301,Ui=302,Is=303,Ns=304,Br=306,Fs=1e3,an=1001,Os=1002,Dt=1003,xa=1004,qr=1005,$t=1006,Sh=1007,Yi=1008,On=1009,yh=1010,Eh=1011,Ks=1012,pl=1013,Un=1014,In=1015,Ki=1016,ml=1017,gl=1018,Jn=1020,bh=1021,on=1023,Th=1024,Ah=1025,Qn=1026,Ii=1027,wh=1028,_l=1029,Rh=1030,vl=1031,xl=1033,jr=33776,Yr=33777,Kr=33778,$r=33779,Ma=35840,Sa=35841,ya=35842,Ea=35843,Ml=36196,ba=37492,Ta=37496,Aa=37808,wa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ua=37815,Ia=37816,Na=37817,Fa=37818,Oa=37819,za=37820,Ba=37821,Zr=36492,Ga=36494,Ha=36495,Ch=36283,ka=36284,Va=36285,Wa=36286,Sl=3e3,ei=3001,Ph=3200,Lh=3201,Dh=0,Uh=1,Jt="",Et="srgb",fn="srgb-linear",$s="display-p3",Gr="display-p3-linear",Ur="linear",ct="srgb",Ir="rec709",Nr="p3",hi=7680,Xa=519,Ih=512,Nh=513,Fh=514,yl=515,Oh=516,zh=517,Bh=518,Gh=519,qa=35044,ja="300 es",zs=1035,En=2e3,Fr=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,Bs=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function Hh(n,e){return(n%e+e)%e}function Jr(n,e,t){return(1-t)*n+t*e}function Ya(n){return(n&n-1)===0&&n!==0}function Gs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:Pr};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],v=i[8],g=r[0],p=r[3],u=r[6],M=r[1],_=r[4],R=r[7],E=r[2],S=r[5],T=r[8];return s[0]=o*g+a*M+l*E,s[3]=o*p+a*_+l*S,s[6]=o*u+a*R+l*T,s[1]=c*g+h*M+d*E,s[4]=c*p+h*_+d*S,s[7]=c*u+h*R+d*T,s[2]=f*g+m*M+v*E,s[5]=f*p+m*_+v*S,s[8]=f*u+m*R+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,v=t*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-h*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ze;function El(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $i(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vh(){const n=$i("canvas");return n.style.display="block",n}const Ka={};function qi(n){n in Ka||(Ka[n]=!0,console.warn(n))}const $a=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Za=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[fn]:{transfer:Ur,primaries:Ir,toReference:n=>n,fromReference:n=>n},[Et]:{transfer:ct,primaries:Ir,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gr]:{transfer:Ur,primaries:Nr,toReference:n=>n.applyMatrix3(Za),fromReference:n=>n.applyMatrix3($a)},[$s]:{transfer:ct,primaries:Nr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Za),fromReference:n=>n.applyMatrix3($a).convertLinearToSRGB()}},Wh=new Set([fn,Gr]),nt={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ir[e].toReference,r=ir[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ir[n].primaries},getTransfer:function(n){return n===Jt?Ur:ir[n].transfer}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ui;class bl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=$i("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$i("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xh=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ts(r[o].image)):s.push(ts(r[o]))}else s=ts(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ts(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Gt extends si{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=an,r=an,s=$t,o=Yi,a=on,l=On,c=Gt.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ji(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?Et:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?ei:Sl}set encoding(e){qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?Et:Jt}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=fl;Gt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],v=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,R=(m+1)/2,E=(u+1)/2,S=(h+f)/4,T=(d+g)/4,N=(v+p)/4;return _>R&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=S/i,s=T/i):R>E?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=S/r,s=N/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=N/s),this.set(i,r,s,t),this}let M=Math.sqrt((p-v)*(p-v)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(d-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ei?Et:Jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Al extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yh extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==m||h!==v){let p=1-a;const u=l*f+c*m+h*v+d*g,M=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const E=Math.sqrt(_),S=Math.atan2(E,u*M);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E}const R=a*M;if(l=l*p+f*R,c=c*p+m*R,h=h*p+v*R,d=d*p+g*R,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-a*m,e[t+2]=c*v+h*m+a*f-l*d,e[t+3]=h*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new z,Ja=new ni;class Qi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),sr.subVectors(this.max,Gi),di.subVectors(e.a,Gi),fi.subVectors(e.b,Gi),pi.subVectors(e.c,Gi),wn.subVectors(fi,di),Rn.subVectors(pi,fi),Hn.subVectors(di,pi);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!is(t,di,fi,pi,sr)||(t=[1,0,0,0,1,0,0,0,1],!is(t,di,fi,pi,sr))?!1:(ar.crossVectors(wn,Rn),t=[ar.x,ar.y,ar.z],is(t,di,fi,pi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new z,new z,new z,new z,new z,new z,new z,new z],en=new z,rr=new Qi,di=new z,fi=new z,pi=new z,wn=new z,Rn=new z,Hn=new z,Gi=new z,sr=new z,ar=new z,kn=new z;function is(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){kn.fromArray(n,s);const a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),h=i.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Kh=new Qi,Hi=new z,rs=new z;class er{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(rs)),this.expandByPoint(Hi.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new z,ss=new z,or=new z,Cn=new z,as=new z,lr=new z,os=new z;class tr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ss.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Cn.dot(this.direction),l=-Cn.dot(or),c=Cn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,v;if(h>0)if(d=o*l-a,f=o*a-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ss).addScaledVector(or,f),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){as.subVectors(t,e),lr.subVectors(i,e),os.crossVectors(as,lr);let o=this.direction.dot(os),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(lr.crossVectors(Cn,lr));if(l<0)return null;const c=a*this.direction.dot(as.cross(Cn));if(c<0||l+c>o)return null;const h=-a*Cn.dot(os);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,o,a,l,c,h,d,f,m,v,g,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,f,m,v,g,p)}set(e,t,i,r,s,o,a,l,c,h,d,f,m,v,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=v,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,v=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,g=c*d;t[0]=f+g*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,v=a*h,g=a*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=g-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+g,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Zh)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Pn.crossVectors(i,Vt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Pn.crossVectors(i,Vt)),Pn.normalize(),cr.crossVectors(Vt,Pn),r[0]=Pn.x,r[4]=cr.x,r[8]=Vt.x,r[1]=Pn.y,r[5]=cr.y,r[9]=Vt.y,r[2]=Pn.z,r[6]=cr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],v=i[2],g=i[6],p=i[10],u=i[14],M=i[3],_=i[7],R=i[11],E=i[15],S=r[0],T=r[4],N=r[8],y=r[12],A=r[1],F=r[5],B=r[9],k=r[13],L=r[2],O=r[6],U=r[10],Q=r[14],q=r[3],Y=r[7],V=r[11],ee=r[15];return s[0]=o*S+a*A+l*L+c*q,s[4]=o*T+a*F+l*O+c*Y,s[8]=o*N+a*B+l*U+c*V,s[12]=o*y+a*k+l*Q+c*ee,s[1]=h*S+d*A+f*L+m*q,s[5]=h*T+d*F+f*O+m*Y,s[9]=h*N+d*B+f*U+m*V,s[13]=h*y+d*k+f*Q+m*ee,s[2]=v*S+g*A+p*L+u*q,s[6]=v*T+g*F+p*O+u*Y,s[10]=v*N+g*B+p*U+u*V,s[14]=v*y+g*k+p*Q+u*ee,s[3]=M*S+_*A+R*L+E*q,s[7]=M*T+_*F+R*O+E*Y,s[11]=M*N+_*B+R*U+E*V,s[15]=M*y+_*k+R*Q+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],g=e[7],p=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+g*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],g=e[13],p=e[14],u=e[15],M=d*p*c-g*f*c+g*l*m-a*p*m-d*l*u+a*f*u,_=v*f*c-h*p*c-v*l*m+o*p*m+h*l*u-o*f*u,R=h*g*c-v*d*c+v*a*m-o*g*m-h*a*u+o*d*u,E=v*d*l-h*g*l-v*a*f+o*g*f+h*a*p-o*d*p,S=t*M+i*_+r*R+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=M*T,e[1]=(g*f*s-d*p*s-g*r*m+i*p*m+d*r*u-i*f*u)*T,e[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*T,e[4]=_*T,e[5]=(h*p*s-v*f*s+v*r*m-t*p*m-h*r*u+t*f*u)*T,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*u-t*l*u)*T,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*T,e[8]=R*T,e[9]=(v*d*s-h*g*s-v*i*m+t*g*m+h*i*u-t*d*u)*T,e[10]=(o*g*s-v*a*s+v*i*c-t*g*c-o*i*u+t*a*u)*T,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*T,e[12]=E*T,e[13]=(h*g*r-v*d*r+v*i*f-t*g*f-h*i*p+t*d*p)*T,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*p-t*a*p)*T,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,v=s*d,g=o*h,p=o*d,u=a*d,M=l*c,_=l*h,R=l*d,E=i.x,S=i.y,T=i.z;return r[0]=(1-(g+u))*E,r[1]=(m+R)*E,r[2]=(v-_)*E,r[3]=0,r[4]=(m-R)*S,r[5]=(1-(f+u))*S,r[6]=(p+M)*S,r[7]=0,r[8]=(v+_)*T,r[9]=(p-M)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,h=1/o,d=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=En){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,v;if(a===En)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=En){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),f=(t+e)*c,m=(i+r)*h;let v,g;if(a===En)v=(o+s)*d,g=-2*d;else if(a===Fr)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new z,tn=new mt,$h=new z(0,0,0),Zh=new z(1,1,1),Pn=new z,cr=new z,Vt=new z,Qa=new mt,eo=new ni;class Hr{constructor(e=0,t=0,i=0,r=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class Zs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jh=0;const to=new z,gi=new ni,xn=new mt,hr=new z,ki=new z,Qh=new z,eu=new ni,no=new z(1,0,0),io=new z(0,1,0),ro=new z(0,0,1),tu={type:"added"},nu={type:"removed"};class Nt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,t=new Hr,i=new ni,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hr.copy(e):hr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ki,hr,this.up):xn.lookAt(hr,ki,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(xn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new z,Mn=new z,ls=new z,Sn=new z,_i=new z,vi=new z,so=new z,cs=new z,hs=new z,us=new z;let ur=!1;class rn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Mn.subVectors(i,t),ls.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Mn),l=nn.dot(ls),c=Mn.dot(Mn),h=Mn.dot(ls),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,v=(o*h-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,i,r,s,o,a,l){return ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ur=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Mn.subVectors(e,t),nn.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ur=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_i.subVectors(r,i),vi.subVectors(s,i),cs.subVectors(e,i);const l=_i.dot(cs),c=vi.dot(cs);if(l<=0&&c<=0)return t.copy(i);hs.subVectors(e,r);const h=_i.dot(hs),d=vi.dot(hs);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(_i,o);us.subVectors(e,s);const m=_i.dot(us),v=vi.dot(us);if(v>=0&&m<=v)return t.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(vi,a);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return so.subVectors(s,r),a=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(so,a);const u=1/(p+g+f);return o=g*u,a=f*u,t.copy(i).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ds(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Hh(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ds(o,s,e+1/3),this.g=ds(o,s,e),this.b=ds(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const i=wl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return nt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Ut(Ct.r*255,0,255))*65536+Math.round(Ut(Ct.g*255,0,255))*256+Math.round(Ut(Ct.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Et){nt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(dr);const i=Jr(Ln.h,dr.h,t),r=Jr(Ln.s,dr.s,t),s=Jr(Ln.l,dr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new tt;tt.NAMES=wl;let iu=0;class Fi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ci,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Us,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ds&&(i.blendSrc=this.blendSrc),this.blendDst!==Us&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new z,fr=new Ke;class Tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class Rl extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cl extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ru=0;const Kt=new mt,fs=new Nt,xi=new z,Wt=new Qi,Vi=new Qi,xt=new z;class Mt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Cl:Rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return fs.lookAt(e),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Wt.min,Vi.min),Wt.expandByPoint(xt),xt.addVectors(Wt.max,Vi.max),Wt.expandByPoint(xt)):(Wt.expandByPoint(Vi.min),Wt.expandByPoint(Vi.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xt.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(e,c),xt.add(xi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new z,h[A]=new z;const d=new z,f=new z,m=new z,v=new Ke,g=new Ke,p=new Ke,u=new z,M=new z;function _(A,F,B){d.fromArray(r,A*3),f.fromArray(r,F*3),m.fromArray(r,B*3),v.fromArray(o,A*2),g.fromArray(o,F*2),p.fromArray(o,B*2),f.sub(d),m.sub(d),g.sub(v),p.sub(v);const k=1/(g.x*p.y-p.x*g.y);isFinite(k)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(k),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(k),c[A].add(u),c[F].add(u),c[B].add(u),h[A].add(M),h[F].add(M),h[B].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let A=0,F=R.length;A<F;++A){const B=R[A],k=B.start,L=B.count;for(let O=k,U=k+L;O<U;O+=3)_(i[O+0],i[O+1],i[O+2])}const E=new z,S=new z,T=new z,N=new z;function y(A){T.fromArray(s,A*3),N.copy(T);const F=c[A];E.copy(F),E.sub(T.multiplyScalar(T.dot(F))).normalize(),S.crossVectors(N,F);const k=S.dot(h[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=k}for(let A=0,F=R.length;A<F;++A){const B=R[A],k=B.start,L=B.count;for(let O=k,U=k+L;O<U;O+=3)y(i[O+0]),y(i[O+1]),y(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)f[v++]=c[m++]}return new Tt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new mt,Vn=new tr,pr=new er,oo=new z,Mi=new z,Si=new z,yi=new z,ps=new z,mr=new z,gr=new Ke,_r=new Ke,vr=new Ke,lo=new z,co=new z,ho=new z,xr=new z,Mr=new z;class Pt extends Nt{constructor(e=new Mt,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(ps.fromBufferAttribute(d,e),o?mr.addScaledVector(ps,h):mr.addScaledVector(ps.sub(t),h))}t.add(mr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(pr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(pr,oo)===null||Vn.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ao.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(ao),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const p=f[v],u=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let R=M,E=_;R<E;R+=3){const S=a.getX(R),T=a.getX(R+1),N=a.getX(R+2);r=Sr(this,u,e,i,c,h,d,S,T,N),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=v,u=g;p<u;p+=3){const M=a.getX(p),_=a.getX(p+1),R=a.getX(p+2);r=Sr(this,o,e,i,c,h,d,M,_,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const p=f[v],u=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=M,E=_;R<E;R+=3){const S=R,T=R+1,N=R+2;r=Sr(this,u,e,i,c,h,d,S,T,N),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,u=g;p<u;p+=3){const M=p,_=p+1,R=p+2;r=Sr(this,o,e,i,c,h,d,M,_,R),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function su(n,e,t,i,r,s,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zn,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Mi),n.getVertexPosition(l,Si),n.getVertexPosition(c,yi);const h=su(n,e,t,i,Mi,Si,yi,xr);if(h){r&&(gr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),h.uv=rn.getInterpolation(xr,Mi,Si,yi,gr,_r,vr,new Ke)),s&&(gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),h.uv1=rn.getInterpolation(xr,Mi,Si,yi,gr,_r,vr,new Ke),h.uv2=h.uv1),o&&(lo.fromBufferAttribute(o,a),co.fromBufferAttribute(o,l),ho.fromBufferAttribute(o,c),h.normal=rn.getInterpolation(xr,Mi,Si,yi,lo,co,ho,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};rn.getNormal(Mi,Si,yi,d.normal),h.face=d}return h}class ii extends Mt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function v(g,p,u,M,_,R,E,S,T,N,y){const A=R/T,F=E/N,B=R/2,k=E/2,L=S/2,O=T+1,U=N+1;let Q=0,q=0;const Y=new z;for(let V=0;V<U;V++){const ee=V*F-k;for(let te=0;te<O;te++){const I=te*A-B;Y[g]=I*M,Y[p]=ee*_,Y[u]=L,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[u]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(te/T),d.push(1-V/N),Q+=1}}for(let V=0;V<N;V++)for(let ee=0;ee<T;ee++){const te=f+ee+O*V,I=f+ee+O*(V+1),K=f+(ee+1)+O*(V+1),$=f+(ee+1)+O*V;l.push(te,I,$),l.push(I,K,$),q+=6}a.addGroup(m,q,y),m+=q,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Ni(n[t]);for(const r in i)e[r]=i[r]}return e}function au(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pl(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const ou={clone:Ni,merge:Lt};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=au(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ll extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Ll{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class hu extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dl extends Gt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uu extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?Et:Jt),this.texture=new Dl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ii(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Nn});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=$t),new hu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ms=new z,du=new z,fu=new Ze;class Dn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ms.subVectors(i,t).cross(du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ms),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fu.getNormalMatrix(e),r=this.coplanarPoint(ms).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new er,yr=new z;class Ul{constructor(e=new Dn,t=new Dn,i=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],u=r[12],M=r[13],_=r[14],R=r[15];if(i[0].setComponents(l-s,f-c,p-m,R-u).normalize(),i[1].setComponents(l+s,f+c,p+m,R+u).normalize(),i[2].setComponents(l+o,f+h,p+v,R+M).normalize(),i[3].setComponents(l-o,f-h,p-v,R-M).normalize(),i[4].setComponents(l-a,f-d,p-g,R-_).normalize(),t===En)i[5].setComponents(l+a,f+d,p+g,R+_).normalize();else if(t===Fr)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Il(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,v=n.createBuffer();n.bindBuffer(h,v),n.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,v=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&v.length===0&&n.bufferSubData(d,0,f),v.length!==0){for(let g=0,p=v.length;g<p;g++){const u=v[g];t?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class Js extends Mt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],v=[],g=[],p=[];for(let u=0;u<h;u++){const M=u*f-o;for(let _=0;_<c;_++){const R=_*d-s;v.push(R,-M,0),g.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const _=M+c*u,R=M+c*(u+1),E=M+1+c*(u+1),S=M+1+c*u;m.push(_,R,S),m.push(R,E,S)}this.setIndex(m),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
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
#endif`,_u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
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
#endif`,yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
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
#endif`,bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,Cu=`#ifdef USE_BUMPMAP
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zu=`#define PI 3.141592653589793
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
} // validated`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`
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
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,yf=`#if DEPTH_PACKING == 3200
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
}`,Ef=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,Df=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,Bf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,kf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:mu,alphahash_pars_fragment:gu,alphamap_fragment:_u,alphamap_pars_fragment:vu,alphatest_fragment:xu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:yu,batching_pars_vertex:Eu,batching_vertex:bu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:wu,iridescence_fragment:Ru,bumpmap_pars_fragment:Cu,clipping_planes_fragment:Pu,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Uu,color_fragment:Iu,color_pars_fragment:Nu,color_pars_vertex:Fu,color_vertex:Ou,common:zu,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Hu,displacementmap_vertex:ku,emissivemap_fragment:Vu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:qu,envmap_fragment:ju,envmap_common_pars_fragment:Yu,envmap_pars_fragment:Ku,envmap_pars_vertex:$u,envmap_physical_pars_fragment:ld,envmap_vertex:Zu,fog_vertex:Ju,fog_pars_vertex:Qu,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_fragment:id,lightmap_pars_fragment:rd,lights_lambert_fragment:sd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:yd,map_pars_fragment:Ed,map_particle_fragment:bd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:wd,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Ud,normal_pars_fragment:Id,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Hd,opaque_fragment:kd,packing:Vd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:qd,dithering_pars_fragment:jd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:ef,skinning_pars_vertex:tf,skinning_vertex:nf,skinnormal_vertex:rf,specularmap_fragment:sf,specularmap_pars_fragment:af,tonemapping_fragment:of,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:hf,uv_pars_fragment:uf,uv_pars_vertex:df,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:_f,backgroundCube_frag:vf,cube_vert:xf,cube_frag:Mf,depth_vert:Sf,depth_frag:yf,distanceRGBA_vert:Ef,distanceRGBA_frag:bf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:wf,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:Lf,meshlambert_frag:Df,meshmatcap_vert:Uf,meshmatcap_frag:If,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:zf,meshphysical_vert:Bf,meshphysical_frag:Gf,meshtoon_vert:Hf,meshtoon_frag:kf,points_vert:Vf,points_frag:Wf,shadow_vert:Xf,shadow_frag:qf,sprite_vert:jf,sprite_frag:Yf},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},dn={basic:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Lt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Lt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Lt([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Lt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Lt([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Lt([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Lt([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Lt([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};dn.physical={uniforms:Lt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Er={r:0,b:0,g:0};function Kf(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function v(p,u){let M=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Br)?(h===void 0&&(h=new Pt(new ii(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Ni(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,(d!==_||f!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pt(new Js(2,2),new Qt({name:"BackgroundMaterial",uniforms:Ni(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(Er,Pl(n)),i.buffers.color.setClear(Er.r,Er.g,Er.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:v}}function $f(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(L,O,U,Q,q){let Y=!1;if(o){const V=g(Q,U,O);c!==V&&(c=V,m(c.object)),Y=u(L,Q,U,q),Y&&M(L,Q,U,q)}else{const V=O.wireframe===!0;(c.geometry!==Q.id||c.program!==U.id||c.wireframe!==V)&&(c.geometry=Q.id,c.program=U.id,c.wireframe=V,Y=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,N(L,O,U,Q),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,O,U){const Q=U.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Y=q[O.id];Y===void 0&&(Y={},q[O.id]=Y);let V=Y[Q];return V===void 0&&(V=p(f()),Y[Q]=V),V}function p(L){const O=[],U=[],Q=[];for(let q=0;q<r;q++)O[q]=0,U[q]=0,Q[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:Q,object:L,attributes:{},index:null}}function u(L,O,U,Q){const q=c.attributes,Y=O.attributes;let V=0;const ee=U.getAttributes();for(const te in ee)if(ee[te].location>=0){const K=q[te];let $=Y[te];if($===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),K===void 0||K.attribute!==$||$&&K.data!==$.data)return!0;V++}return c.attributesNum!==V||c.index!==Q}function M(L,O,U,Q){const q={},Y=O.attributes;let V=0;const ee=U.getAttributes();for(const te in ee)if(ee[te].location>=0){let K=Y[te];K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const $={};$.attribute=K,K&&K.data&&($.data=K.data),q[te]=$,V++}c.attributes=q,c.attributesNum=V,c.index=Q}function _(){const L=c.newAttributes;for(let O=0,U=L.length;O<U;O++)L[O]=0}function R(L){E(L,0)}function E(L,O){const U=c.newAttributes,Q=c.enabledAttributes,q=c.attributeDivisors;U[L]=1,Q[L]===0&&(n.enableVertexAttribArray(L),Q[L]=1),q[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),q[L]=O)}function S(){const L=c.newAttributes,O=c.enabledAttributes;for(let U=0,Q=O.length;U<Q;U++)O[U]!==L[U]&&(n.disableVertexAttribArray(U),O[U]=0)}function T(L,O,U,Q,q,Y,V){V===!0?n.vertexAttribIPointer(L,O,U,q,Y):n.vertexAttribPointer(L,O,U,Q,q,Y)}function N(L,O,U,Q){if(i.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=Q.attributes,Y=U.getAttributes(),V=O.defaultAttributeValues;for(const ee in Y){const te=Y[ee];if(te.location>=0){let I=q[ee];if(I===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){const K=I.normalized,$=I.itemSize,ie=t.get(I);if(ie===void 0)continue;const pe=ie.buffer,he=ie.type,Ae=ie.bytesPerElement,Me=i.isWebGL2===!0&&(he===n.INT||he===n.UNSIGNED_INT||I.gpuType===pl);if(I.isInterleavedBufferAttribute){const Ce=I.data,H=Ce.stride,Ye=I.offset;if(Ce.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)E(te.location+ve,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<te.locationSize;ve++)R(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ve=0;ve<te.locationSize;ve++)T(te.location+ve,$/te.locationSize,he,K,H*Ae,(Ye+$/te.locationSize*ve)*Ae,Me)}else{if(I.isInstancedBufferAttribute){for(let Ce=0;Ce<te.locationSize;Ce++)E(te.location+Ce,I.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)R(te.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Ce=0;Ce<te.locationSize;Ce++)T(te.location+Ce,$/te.locationSize,he,K,$*Ae,$/te.locationSize*Ce*Ae,Me)}}else if(V!==void 0){const K=V[ee];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(te.location,K);break;case 3:n.vertexAttrib3fv(te.location,K);break;case 4:n.vertexAttrib4fv(te.location,K);break;default:n.vertexAttrib1fv(te.location,K)}}}}S()}function y(){B();for(const L in a){const O=a[L];for(const U in O){const Q=O[U];for(const q in Q)v(Q[q].object),delete Q[q];delete O[U]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const U in O){const Q=O[U];for(const q in Q)v(Q[q].object),delete Q[q];delete O[U]}delete a[L.id]}function F(L){for(const O in a){const U=a[O];if(U[L.id]===void 0)continue;const Q=U[L.id];for(const q in Q)v(Q[q].object),delete Q[q];delete U[L.id]}}function B(){k(),h=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:R,disableUnusedAttributes:S}}function Zf(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Jf(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,R=o||e.has("OES_texture_float"),E=_&&R,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:S}}function Qf(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Dn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const M=s?0:i,_=M*4;let R=u.clippingState||null;l.value=R,R=h(v,f,_,m);for(let E=0;E!==_;++E)R[E]=t[E];u.clippingState=R,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,v){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const u=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,R=m;_!==g;++_,R+=4)o.copy(d[_]).applyMatrix4(M,a),o.normal.toArray(p,R),p[R+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function ep(n){let e=new WeakMap;function t(o,a){return a===Is?o.mapping=Di:a===Ns&&(o.mapping=Ui),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Is||a===Ns)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tp extends Ll{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,uo=[.125,.215,.35,.446,.526,.582],jn=20,gs=new tp,fo=new tt;let _s=null,vs=0,xs=0;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,po=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Xn,Ti),new z(0,Xn,-Ti),new z(Ti,0,Xn),new z(-Ti,0,Xn),new z(Xn,Ti,0),new z(-Xn,Ti,0)];class mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,vs,xs),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ki,format:on,colorSpace:fn,depthBuffer:!1},r=go(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=ip(s,e,t)}return r}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,i,r){const a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(fo),h.toneMapping=Fn,h.autoClear=!1;const m=new ji({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new Pt(new ii,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(fo),g=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;br(r,M*_,u>2?_:0,_,_),h.setRenderTarget(r),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Di||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=po[(r-1)%po.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),g=s/v,p=isFinite(s)?1+Math.floor(h*g):jn;p>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const u=[];let M=0;for(let T=0;T<jn;++T){const N=T/g,y=Math.exp(-N*N/2);u.push(y),T===0?M+=y:T<p&&(M+=2*y)}for(let T=0;T<u.length;T++)u[T]=u[T]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const R=this._sizeLods[r],E=3*R*(r>_-wi?r-_+wi:0),S=4*(this._cubeSize-R);br(t,E,S,3*R,2*R),l.setRenderTarget(t),l.render(d,gs)}}function np(n){const e=[],t=[],i=[];let r=n;const s=n-wi+1+uo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-wi?l=uo[o-n+wi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,g=3,p=2,u=1,M=new Float32Array(g*v*m),_=new Float32Array(p*v*m),R=new Float32Array(u*v*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,N=S>2?0:-1,y=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];M.set(y,g*v*S),_.set(f,p*v*S);const A=[S,S,S,S,S,S];R.set(A,u*v*S)}const E=new Mt;E.setAttribute("position",new Tt(M,g)),E.setAttribute("uv",new Tt(_,p)),E.setAttribute("faceIndex",new Tt(R,u)),e.push(E),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function go(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=Br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ip(n,e,t){const i=new Float32Array(jn),r=new z(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function _o(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function vo(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Qs(){return`

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
	`}function rp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Is||l===Ns,h=l===Di||l===Ui;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new mo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new mo(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ap(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let p=0,u=g.length;p<u;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const g=m[v];for(let p=0,u=g.length;p<u;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let _=0,R=M.length;_<R;_+=3){const E=M[_+0],S=M[_+1],T=M[_+2];f.push(E,S,S,T,T,E)}}else if(v!==void 0){const M=v.array;g=v.version;for(let _=0,R=M.length/3-1;_<R;_+=3){const E=_+0,S=_+1,T=_+2;f.push(E,S,S,T,T,E)}}else return;const p=new(El(f)?Cl:Rl)(f,1);p.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function op(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,v){n.drawElements(s,v,a,m*l),t.update(v,s,1)}function d(m,v,g){if(g===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,a,m*l,g),t.update(v,s,g)}function f(m,v,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,g);let u=0;for(let M=0;M<g;M++)u+=v[M];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function lp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cp(n,e){return n[0]-e[0]}function hp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function up(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let L=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),_===!0&&(N=2),R===!0&&(N=3);let y=h.attributes.position.count*N,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*A*4*v),B=new Al(F,y,A,v);B.type=In,B.needsUpdate=!0;const k=N*4;for(let O=0;O<v;O++){const U=E[O],Q=S[O],q=T[O],Y=y*A*4*O;for(let V=0;V<U.count;V++){const ee=V*k;M===!0&&(o.fromBufferAttribute(U,V),F[Y+ee+0]=o.x,F[Y+ee+1]=o.y,F[Y+ee+2]=o.z,F[Y+ee+3]=0),_===!0&&(o.fromBufferAttribute(Q,V),F[Y+ee+4]=o.x,F[Y+ee+5]=o.y,F[Y+ee+6]=o.z,F[Y+ee+7]=0),R===!0&&(o.fromBufferAttribute(q,V),F[Y+ee+8]=o.x,F[Y+ee+9]=o.y,F[Y+ee+10]=o.z,F[Y+ee+11]=q.itemSize===4?o.w:1)}}g={count:v,texture:B,size:new Ke(y,A)},s.set(h,g),h.addEventListener("dispose",L)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];i[h.id]=v}for(let _=0;_<m;_++){const R=v[_];R[0]=_,R[1]=f[_]}v.sort(hp);for(let _=0;_<8;_++)_<m&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(cp);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let _=0;_<8;_++){const R=a[_],E=R[0],S=R[1];E!==Number.MAX_SAFE_INTEGER&&S?(g&&h.getAttribute("morphTarget"+_)!==g[E]&&h.setAttribute("morphTarget"+_,g[E]),p&&h.getAttribute("morphNormal"+_)!==p[E]&&h.setAttribute("morphNormal"+_,p[E]),r[_]=S,u+=S):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function dp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Nl extends Gt{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qn&&(i=Un),i===void 0&&h===Ii&&(i=Jn),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fl=new Gt,Ol=new Nl(1,1);Ol.compareFunction=yl;const zl=new Al,Bl=new Yh,Gl=new Dl,xo=[],Mo=[],So=new Float32Array(16),yo=new Float32Array(9),Eo=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xo[r];if(s===void 0&&(s=new Float32Array(r),xo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kr(n,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Eo.set(i),n.uniformMatrix2fv(this.addr,!1,Eo),vt(t,i)}}function vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;yo.set(i),n.uniformMatrix3fv(this.addr,!1,yo),vt(t,i)}}function xp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;So.set(i),n.uniformMatrix4fv(this.addr,!1,So),vt(t,i)}}function Mp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Rp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ol:Fl;t.setTexture2D(e||s,r)}function Cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bl,r)}function Pp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gl,r)}function Lp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zl,r)}function Dp(n){switch(n){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return yp;case 35669:case 35673:return Ep;case 5125:return bp;case 36294:return Tp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Up(n,e){n.uniform1fv(this.addr,e)}function Ip(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function Np(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function Fp(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function Op(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zp(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bp(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gp(n,e){n.uniform1iv(this.addr,e)}function Hp(n,e){n.uniform2iv(this.addr,e)}function kp(n,e){n.uniform3iv(this.addr,e)}function Vp(n,e){n.uniform4iv(this.addr,e)}function Wp(n,e){n.uniform1uiv(this.addr,e)}function Xp(n,e){n.uniform2uiv(this.addr,e)}function qp(n,e){n.uniform3uiv(this.addr,e)}function jp(n,e){n.uniform4uiv(this.addr,e)}function Yp(n,e,t){const i=this.cache,r=e.length,s=kr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fl,s[o])}function Kp(n,e,t){const i=this.cache,r=e.length,s=kr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bl,s[o])}function $p(n,e,t){const i=this.cache,r=e.length,s=kr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gl,s[o])}function Zp(n,e,t){const i=this.cache,r=e.length,s=kr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zl,s[o])}function Jp(n){switch(n){case 5126:return Up;case 35664:return Ip;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return zp;case 35676:return Bp;case 5124:case 35670:return Gp;case 35667:case 35671:return Hp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}}class em{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function bo(n,e){n.seq.push(e),n.map[e.id]=e}function nm(n,e,t){const i=n.name,r=i.length;for(Ms.lastIndex=0;;){const s=Ms.exec(i),o=Ms.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bo(t,c===void 0?new Qp(a,n,e):new em(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tm(a),bo(t,d)),t=d}}}class Lr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function To(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const im=37297;let rm=0;function sm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function am(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Nr&&t===Ir?i="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Nr&&(i="LinearSRGBToLinearDisplayP3"),n){case fn:case Gr:return[i,"LinearTransferOETF"];case Et:case $s:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ao(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sm(n.getShaderSource(e),o)}else return r}function om(n,e){const t=am(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lm(n,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case _h:t="OptimizedCineon";break;case vh:t="ACESFilmic";break;case Mh:t="AgX";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function hm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ri).join(`
`)}function um(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ri(n){return n!==""}function wo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ro(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(n){return n.replace(fm,mm)}const pm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mm(n,e){let t=$e[e];if(t===void 0){const i=pm.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hs(t)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(n){return n.replace(gm,_m)}function _m(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Po(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mm(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ui&&(e="ENVMAP_MODE_REFRACTION"),e}function Sm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dl:e="ENVMAP_BLENDING_MULTIPLY";break;case fh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function ym(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Em(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vm(t),c=xm(t),h=Mm(t),d=Sm(t),f=ym(t),m=t.isWebGL2?"":cm(t),v=hm(t),g=um(s),p=r.createProgram();let u,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ri).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ri).join(`
`),M.length>0&&(M+=`
`)):(u=[Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),M=[m,Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Fn?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),o=Hs(o),o=wo(o,t),o=Ro(o,t),a=Hs(a),a=wo(a,t),a=Ro(a,t),o=Co(o),a=Co(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const R=_+u+o,E=_+M+a,S=To(r,r.VERTEX_SHADER,R),T=To(r,r.FRAGMENT_SHADER,E);r.attachShader(p,S),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(B){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(T).trim();let U=!0,Q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,S,T);else{const q=Ao(r,S,"vertex"),Y=Ao(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+q+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||O==="")&&(Q=!1);Q&&(B.diagnostics={runnable:U,programLog:k,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:M}})}r.deleteShader(S),r.deleteShader(T),y=new Lr(r,p),A=dm(r,p)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(p,im)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}let bm=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Am(e),t.set(e,i)),i}}class Am{constructor(e){this.id=bm++,this.code=e,this.usedTimes=0}}function wm(n,e,t,i,r,s,o){const a=new Zs,l=new Tm,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,A,F,B,k){const L=B.fog,O=k.geometry,U=y.isMeshStandardMaterial?B.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),q=Q&&Q.mapping===Br?Q.image.height:null,Y=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=V!==void 0?V.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let I,K,$,ie;if(Y){const st=dn[Y];I=st.vertexShader,K=st.fragmentShader}else I=y.vertexShader,K=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),he=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,Me=!!y.map,Ce=!!y.matcap,H=!!Q,Ye=!!y.aoMap,ve=!!y.lightMap,ye=!!y.bumpMap,xe=!!y.normalMap,Le=!!y.displacementMap,Ee=!!y.emissiveMap,b=!!y.metalnessMap,x=!!y.roughnessMap,G=y.anisotropy>0,ae=y.clearcoat>0,se=y.iridescence>0,P=y.sheen>0,ne=y.transmission>0,le=G&&!!y.anisotropyMap,ge=ae&&!!y.clearcoatMap,Re=ae&&!!y.clearcoatNormalMap,De=ae&&!!y.clearcoatRoughnessMap,oe=se&&!!y.iridescenceMap,ze=se&&!!y.iridescenceThicknessMap,C=P&&!!y.sheenColorMap,re=P&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Se=!!y.specularIntensityMap,Ie=ne&&!!y.transmissionMap,Ve=ne&&!!y.thicknessMap,Oe=!!y.gradientMap,ue=!!y.alphaMap,D=y.alphaTest>0,me=!!y.alphaHash,_e=!!y.extensions,Ue=!!O.attributes.uv1,Pe=!!O.attributes.uv2,We=!!O.attributes.uv3;let Ge=Fn;return y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ge=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:I,fragmentShader:K,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ae,instancing:he,instancingColor:he&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:fn,map:Me,matcap:Ce,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:q,aoMap:Ye,lightMap:ve,bumpMap:ye,normalMap:xe,displacementMap:f&&Le,emissiveMap:Ee,normalMapObjectSpace:xe&&y.normalMapType===Uh,normalMapTangentSpace:xe&&y.normalMapType===Dh,metalnessMap:b,roughnessMap:x,anisotropy:G,anisotropyMap:le,clearcoat:ae,clearcoatMap:ge,clearcoatNormalMap:Re,clearcoatRoughnessMap:De,iridescence:se,iridescenceMap:oe,iridescenceThicknessMap:ze,sheen:P,sheenColorMap:C,sheenRoughnessMap:re,specularMap:fe,specularColorMap:ce,specularIntensityMap:Se,transmission:ne,transmissionMap:Ie,thicknessMap:Ve,gradientMap:Oe,opaque:y.transparent===!1&&y.blending===Ci,alphaMap:ue,alphaTest:D,alphaHash:me,combine:y.combine,mapUv:Me&&g(y.map.channel),aoMapUv:Ye&&g(y.aoMap.channel),lightMapUv:ve&&g(y.lightMap.channel),bumpMapUv:ye&&g(y.bumpMap.channel),normalMapUv:xe&&g(y.normalMap.channel),displacementMapUv:Le&&g(y.displacementMap.channel),emissiveMapUv:Ee&&g(y.emissiveMap.channel),metalnessMapUv:b&&g(y.metalnessMap.channel),roughnessMapUv:x&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:ge&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:C&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:re&&g(y.sheenRoughnessMap.channel),specularMapUv:fe&&g(y.specularMap.channel),specularColorMapUv:ce&&g(y.specularColorMap.channel),specularIntensityMapUv:Se&&g(y.specularIntensityMap.channel),transmissionMapUv:Ie&&g(y.transmissionMap.channel),thicknessMapUv:Ve&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Pe,vertexUv3s:We,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Me||ue),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:_e&&y.extensions.derivatives===!0,extensionFragDepth:_e&&y.extensions.fragDepth===!0,extensionDrawBuffers:_e&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)A.push(F),A.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(M(A,y),_(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function M(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function R(y){const A=v[y.type];let F;if(A){const B=dn[A];F=ou.clone(B.uniforms)}else F=y.uniforms;return F}function E(y,A){let F;for(let B=0,k=c.length;B<k;B++){const L=c[B];if(L.cacheKey===A){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Em(n,A,y,s),c.push(F)),F}function S(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:R,acquireProgram:E,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:N}}function Rm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Do(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,v,g,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=g,u.group=p),e++,u}function a(d,f,m,v,g,p){const u=o(d,f,m,v,g,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,v,g,p){const u=o(d,f,m,v,g,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Cm),i.length>1&&i.sort(f||Lo),r.length>1&&r.sort(f||Lo)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Pm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Do,n.set(i,[o])):r>=s.length?(o=new Do,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Dm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Um=0;function Im(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nm(n,e){const t=new Lm,i=Dm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new z);const s=new z,o=new mt,a=new mt;function l(h,d){let f=0,m=0,v=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let g=0,p=0,u=0,M=0,_=0,R=0,E=0,S=0,T=0,N=0,y=0;h.sort(Im);const A=d===!0?Math.PI:1;for(let B=0,k=h.length;B<k;B++){const L=h[B],O=L.color,U=L.intensity,Q=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*U*A,m+=O.g*U*A,v+=O.b*U*A;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],U);y++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const V=L.shadow,ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=q,r.directionalShadowMatrix[g]=L.shadow.matrix,R++}r.directional[g]=Y,g++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(U*A),Y.distance=Q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[u]=Y;const V=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&N++),r.spotLightMatrix[u]=V.matrix,L.castShadow){const ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=q,S++}u++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(O).multiplyScalar(U),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[M]=Y,M++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*A),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const V=L.shadow,ee=i.get(L);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=L.shadow.matrix,E++}r.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(U*A),Y.groundColor.copy(L.groundColor).multiplyScalar(U*A),r.hemi[_]=Y,_++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const F=r.hash;(F.directionalLength!==g||F.pointLength!==p||F.spotLength!==u||F.rectAreaLength!==M||F.hemiLength!==_||F.numDirectionalShadows!==R||F.numPointShadows!==E||F.numSpotShadows!==S||F.numSpotMaps!==T||F.numLightProbes!==y)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=M,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=S+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=y,F.directionalLength=g,F.pointLength=p,F.spotLength=u,F.rectAreaLength=M,F.hemiLength=_,F.numDirectionalShadows=R,F.numPointShadows=E,F.numSpotShadows=S,F.numSpotMaps=T,F.numLightProbes=y,r.version=Um++)}function c(h,d){let f=0,m=0,v=0,g=0,p=0;const u=d.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){const R=h[M];if(R.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),f++}else if(R.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),v++}else if(R.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(R.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(u),m++}else if(R.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Uo(n,e){const t=new Nm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Fm(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Uo(n,e),t.set(s,[l])):o>=a.length?(l=new Uo(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Om extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zm extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function Hm(n,e,t){let i=new Ul;const r=new Ke,s=new Ke,o=new bt,a=new Om({depthPacking:Lh}),l=new zm,c={},h=t.maxTextureSize,d={[zn]:It,[It]:zn,[qt]:qt},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Bm,fragmentShader:Gm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Mt;v.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let u=this.type;this.render=function(S,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const y=n.getRenderTarget(),A=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Nn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==yn&&this.type===yn,L=u===yn&&this.type!==yn;for(let O=0,U=S.length;O<U;O++){const Q=S[O],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Y=q.getFrameExtents();if(r.multiply(Y),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||k===!0||L===!0){const ee=this.type!==yn?{minFilter:Dt,magFilter:Dt}:{};q.map!==null&&q.map.dispose(),q.map=new ti(r.x,r.y,ee),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const V=q.getViewportCount();for(let ee=0;ee<V;ee++){const te=q.getViewport(ee);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),B.viewport(o),q.updateMatrices(Q,ee),i=q.getFrustum(),R(T,N,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===yn&&M(q,N),q.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(y,A,F)};function M(S,T){const N=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,N,f,g,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,N,m,g,null)}function _(S,T,N,y){let A=null;const F=N.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)A=F;else if(A=N.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=A.uuid,k=T.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let O=L[k];O===void 0&&(O=A.clone(),L[k]=O,T.addEventListener("dispose",E)),A=O}if(A.visible=T.visible,A.wireframe=T.wireframe,y===yn?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const B=n.properties.get(A);B.light=N}return A}function R(S,T,N,y,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===yn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld);const k=e.update(S),L=S.material;if(Array.isArray(L)){const O=k.groups;for(let U=0,Q=O.length;U<Q;U++){const q=O[U],Y=L[q.materialIndex];if(Y&&Y.visible){const V=_(S,Y,y,A);S.onBeforeShadow(n,S,T,N,k,V,q),n.renderBufferDirect(N,null,k,V,S,q),S.onAfterShadow(n,S,T,N,k,V,q)}}}else if(L.visible){const O=_(S,L,y,A);S.onBeforeShadow(n,S,T,N,k,O,null),n.renderBufferDirect(N,null,k,O,S,null),S.onAfterShadow(n,S,T,N,k,O,null)}}const B=S.children;for(let k=0,L=B.length;k<L;k++)R(B[k],T,N,y,A)}function E(S){S.target.removeEventListener("dispose",E);for(const N in c){const y=c[N],A=S.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function km(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const me=new bt;let _e=null;const Ue=new bt(0,0,0,0);return{setMask:function(Pe){_e!==Pe&&!D&&(n.colorMask(Pe,Pe,Pe,Pe),_e=Pe)},setLocked:function(Pe){D=Pe},setClear:function(Pe,We,Ge,Qe,st){st===!0&&(Pe*=Qe,We*=Qe,Ge*=Qe),me.set(Pe,We,Ge,Qe),Ue.equals(me)===!1&&(n.clearColor(Pe,We,Ge,Qe),Ue.copy(me))},reset:function(){D=!1,_e=null,Ue.set(-1,0,0,0)}}}function s(){let D=!1,me=null,_e=null,Ue=null;return{setTest:function(Pe){Pe?Ae(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Pe){me!==Pe&&!D&&(n.depthMask(Pe),me=Pe)},setFunc:function(Pe){if(_e!==Pe){switch(Pe){case ah:n.depthFunc(n.NEVER);break;case oh:n.depthFunc(n.ALWAYS);break;case lh:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case ch:n.depthFunc(n.EQUAL);break;case hh:n.depthFunc(n.GEQUAL);break;case uh:n.depthFunc(n.GREATER);break;case dh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Pe}},setLocked:function(Pe){D=Pe},setClear:function(Pe){Ue!==Pe&&(n.clearDepth(Pe),Ue=Pe)},reset:function(){D=!1,me=null,_e=null,Ue=null}}}function o(){let D=!1,me=null,_e=null,Ue=null,Pe=null,We=null,Ge=null,Qe=null,st=null;return{setTest:function(de){D||(de?Ae(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(de){me!==de&&!D&&(n.stencilMask(de),me=de)},setFunc:function(de,Je,it){(_e!==de||Ue!==Je||Pe!==it)&&(n.stencilFunc(de,Je,it),_e=de,Ue=Je,Pe=it)},setOp:function(de,Je,it){(We!==de||Ge!==Je||Qe!==it)&&(n.stencilOp(de,Je,it),We=de,Ge=Je,Qe=it)},setLocked:function(de){D=de},setClear:function(de){st!==de&&(n.clearStencil(de),st=de)},reset:function(){D=!1,me=null,_e=null,Ue=null,Pe=null,We=null,Ge=null,Qe=null,st=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,g=[],p=null,u=!1,M=null,_=null,R=null,E=null,S=null,T=null,N=null,y=new tt(0,0,0),A=0,F=!1,B=null,k=null,L=null,O=null,U=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let ee=null,te={};const I=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),$=new bt().fromArray(I),ie=new bt().fromArray(K);function pe(D,me,_e,Ue){const Pe=new Uint8Array(4),We=n.createTexture();n.bindTexture(D,We),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<_e;Ge++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(me+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return We}const he={};he[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(he[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(n.DEPTH_TEST),l.setFunc(Dr),Ee(!1),b(fa),Ae(n.CULL_FACE),xe(Nn);function Ae(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Me(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Ce(D,me){return m[D]!==me?(n.bindFramebuffer(D,me),m[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function H(D,me){let _e=g,Ue=!1;if(D)if(_e=v.get(me),_e===void 0&&(_e=[],v.set(me,_e)),D.isWebGLMultipleRenderTargets){const Pe=D.texture;if(_e.length!==Pe.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let We=0,Ge=Pe.length;We<Ge;We++)_e[We]=n.COLOR_ATTACHMENT0+We;_e.length=Pe.length,Ue=!0}}else _e[0]!==n.COLOR_ATTACHMENT0&&(_e[0]=n.COLOR_ATTACHMENT0,Ue=!0);else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Ye(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const ve={[qn]:n.FUNC_ADD,[Xc]:n.FUNC_SUBTRACT,[qc]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[_a]=n.MIN,ve[va]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[_a]=D.MIN_EXT,ve[va]=D.MAX_EXT)}const ye={[jc]:n.ZERO,[Yc]:n.ONE,[Kc]:n.SRC_COLOR,[Ds]:n.SRC_ALPHA,[th]:n.SRC_ALPHA_SATURATE,[Qc]:n.DST_COLOR,[Zc]:n.DST_ALPHA,[$c]:n.ONE_MINUS_SRC_COLOR,[Us]:n.ONE_MINUS_SRC_ALPHA,[eh]:n.ONE_MINUS_DST_COLOR,[Jc]:n.ONE_MINUS_DST_ALPHA,[nh]:n.CONSTANT_COLOR,[ih]:n.ONE_MINUS_CONSTANT_COLOR,[rh]:n.CONSTANT_ALPHA,[sh]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(D,me,_e,Ue,Pe,We,Ge,Qe,st,de){if(D===Nn){u===!0&&(Me(n.BLEND),u=!1);return}if(u===!1&&(Ae(n.BLEND),u=!0),D!==Wc){if(D!==M||de!==F){if((_!==qn||S!==qn)&&(n.blendEquation(n.FUNC_ADD),_=qn,S=qn),de)switch(D){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.ONE,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ma:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ga:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}R=null,E=null,T=null,N=null,y.set(0,0,0),A=0,M=D,F=de}return}Pe=Pe||me,We=We||_e,Ge=Ge||Ue,(me!==_||Pe!==S)&&(n.blendEquationSeparate(ve[me],ve[Pe]),_=me,S=Pe),(_e!==R||Ue!==E||We!==T||Ge!==N)&&(n.blendFuncSeparate(ye[_e],ye[Ue],ye[We],ye[Ge]),R=_e,E=Ue,T=We,N=Ge),(Qe.equals(y)===!1||st!==A)&&(n.blendColor(Qe.r,Qe.g,Qe.b,st),y.copy(Qe),A=st),M=D,F=!1}function Le(D,me){D.side===qt?Me(n.CULL_FACE):Ae(n.CULL_FACE);let _e=D.side===It;me&&(_e=!_e),Ee(_e),D.blending===Ci&&D.transparent===!1?xe(Nn):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ue=D.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(D){B!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),B=D)}function b(D){D!==Hc?(Ae(n.CULL_FACE),D!==k&&(D===fa?n.cullFace(n.BACK):D===kc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),k=D}function x(D){D!==L&&(q&&n.lineWidth(D),L=D)}function G(D,me,_e){D?(Ae(n.POLYGON_OFFSET_FILL),(O!==me||U!==_e)&&(n.polygonOffset(me,_e),O=me,U=_e)):Me(n.POLYGON_OFFSET_FILL)}function ae(D){D?Ae(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function se(D){D===void 0&&(D=n.TEXTURE0+Q-1),ee!==D&&(n.activeTexture(D),ee=D)}function P(D,me,_e){_e===void 0&&(ee===null?_e=n.TEXTURE0+Q-1:_e=ee);let Ue=te[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},te[_e]=Ue),(Ue.type!==D||Ue.texture!==me)&&(ee!==_e&&(n.activeTexture(_e),ee=_e),n.bindTexture(D,me||he[D]),Ue.type=D,Ue.texture=me)}function ne(){const D=te[ee];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){$.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function Ie(D){ie.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function Ve(D,me){let _e=d.get(me);_e===void 0&&(_e=new WeakMap,d.set(me,_e));let Ue=_e.get(D);Ue===void 0&&(Ue=n.getUniformBlockIndex(me,D.name),_e.set(D,Ue))}function Oe(D,me){const Ue=d.get(me).get(D);h.get(me)!==Ue&&(n.uniformBlockBinding(me,Ue,D.__bindingPointIndex),h.set(me,Ue))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ee=null,te={},m={},v=new WeakMap,g=[],p=null,u=!1,M=null,_=null,R=null,E=null,S=null,T=null,N=null,y=new tt(0,0,0),A=0,F=!1,B=null,k=null,L=null,O=null,U=null,$.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:Me,bindFramebuffer:Ce,drawBuffers:H,useProgram:Ye,setBlending:xe,setMaterial:Le,setFlipSided:Ee,setCullFace:b,setLineWidth:x,setPolygonOffset:G,setScissorTest:ae,activeTexture:se,bindTexture:P,unbindTexture:ne,compressedTexImage2D:le,compressedTexImage3D:ge,texImage2D:fe,texImage3D:ce,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:C,texStorage3D:re,texSubImage2D:Re,texSubImage3D:De,compressedTexSubImage2D:oe,compressedTexSubImage3D:ze,scissor:Se,viewport:Ie,reset:ue}}function Vm(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,x){return m?new OffscreenCanvas(b,x):$i("canvas")}function g(b,x,G,ae){let se=1;if((b.width>ae||b.height>ae)&&(se=ae/Math.max(b.width,b.height)),se<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const P=x?Gs:Math.floor,ne=P(se*b.width),le=P(se*b.height);d===void 0&&(d=v(ne,le));const ge=G?v(ne,le):d;return ge.width=ne,ge.height=le,ge.getContext("2d").drawImage(b,0,0,ne,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ne+"x"+le+")."),ge}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Ya(b.width)&&Ya(b.height)}function u(b){return a?!1:b.wrapS!==an||b.wrapT!==an||b.minFilter!==Dt&&b.minFilter!==$t}function M(b,x){return b.generateMipmaps&&x&&b.minFilter!==Dt&&b.minFilter!==$t}function _(b){n.generateMipmap(b)}function R(b,x,G,ae,se=!1){if(a===!1)return x;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let P=x;if(x===n.RED&&(G===n.FLOAT&&(P=n.R32F),G===n.HALF_FLOAT&&(P=n.R16F),G===n.UNSIGNED_BYTE&&(P=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.R8UI),G===n.UNSIGNED_SHORT&&(P=n.R16UI),G===n.UNSIGNED_INT&&(P=n.R32UI),G===n.BYTE&&(P=n.R8I),G===n.SHORT&&(P=n.R16I),G===n.INT&&(P=n.R32I)),x===n.RG&&(G===n.FLOAT&&(P=n.RG32F),G===n.HALF_FLOAT&&(P=n.RG16F),G===n.UNSIGNED_BYTE&&(P=n.RG8)),x===n.RGBA){const ne=se?Ur:nt.getTransfer(ae);G===n.FLOAT&&(P=n.RGBA32F),G===n.HALF_FLOAT&&(P=n.RGBA16F),G===n.UNSIGNED_BYTE&&(P=ne===ct?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function E(b,x,G){return M(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function S(b){return b===Dt||b===xa||b===qr?n.NEAREST:n.LINEAR}function T(b){const x=b.target;x.removeEventListener("dispose",T),y(x),x.isVideoTexture&&h.delete(x)}function N(b){const x=b.target;x.removeEventListener("dispose",N),F(x)}function y(b){const x=i.get(b);if(x.__webglInit===void 0)return;const G=b.source,ae=f.get(G);if(ae){const se=ae[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(b),Object.keys(ae).length===0&&f.delete(G)}i.remove(b)}function A(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const G=b.source,ae=f.get(G);delete ae[x.__cacheKey],o.memory.textures--}function F(b){const x=b.texture,G=i.get(b),ae=i.get(x);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(G.__webglFramebuffer[se]))for(let P=0;P<G.__webglFramebuffer[se].length;P++)n.deleteFramebuffer(G.__webglFramebuffer[se][P]);else n.deleteFramebuffer(G.__webglFramebuffer[se]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[se])}else{if(Array.isArray(G.__webglFramebuffer))for(let se=0;se<G.__webglFramebuffer.length;se++)n.deleteFramebuffer(G.__webglFramebuffer[se]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let se=0;se<G.__webglColorRenderbuffer.length;se++)G.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[se]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,P=x.length;se<P;se++){const ne=i.get(x[se]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(x[se])}i.remove(x),i.remove(b)}let B=0;function k(){B=0}function L(){const b=B;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),B+=1,b}function O(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function U(b,x){const G=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,b,x);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function Q(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){$(G,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function q(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){$(G,b,x);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function Y(b,x){const G=i.get(b);if(b.version>0&&G.__version!==b.version){ie(G,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}const V={[Fs]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[Os]:n.MIRRORED_REPEAT},ee={[Dt]:n.NEAREST,[xa]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Sh]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},te={[Ih]:n.NEVER,[Gh]:n.ALWAYS,[Nh]:n.LESS,[yl]:n.LEQUAL,[Fh]:n.EQUAL,[Bh]:n.GEQUAL,[Oh]:n.GREATER,[zh]:n.NOTEQUAL};function I(b,x,G){if(G?(n.texParameteri(b,n.TEXTURE_WRAP_S,V[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,V[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,V[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ee[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ee[x.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==an||x.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,S(x.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,S(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==qr&&x.minFilter!==Yi||x.type===In&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function K(b,x){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",T));const ae=x.source;let se=f.get(ae);se===void 0&&(se={},f.set(ae,se));const P=O(x);if(P!==b.__cacheKey){se[P]===void 0&&(se[P]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[P].usedTimes++;const ne=se[b.__cacheKey];ne!==void 0&&(se[b.__cacheKey].usedTimes--,ne.usedTimes===0&&A(x)),b.__cacheKey=P,b.__webglTexture=se[P].texture}return G}function $(b,x,G){let ae=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ae=n.TEXTURE_3D);const se=K(b,x),P=x.source;t.bindTexture(ae,b.__webglTexture,n.TEXTURE0+G);const ne=i.get(P);if(P.version!==ne.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const le=nt.getPrimaries(nt.workingColorSpace),ge=x.colorSpace===Jt?null:nt.getPrimaries(x.colorSpace),Re=x.colorSpace===Jt||le===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=u(x)&&p(x.image)===!1;let oe=g(x.image,De,!1,r.maxTextureSize);oe=Ee(x,oe);const ze=p(oe)||a,C=s.convert(x.format,x.colorSpace);let re=s.convert(x.type),fe=R(x.internalFormat,C,re,x.colorSpace,x.isVideoTexture);I(ae,x,ze);let ce;const Se=x.mipmaps,Ie=a&&x.isVideoTexture!==!0&&fe!==Ml,Ve=ne.__version===void 0||se===!0,Oe=E(x,oe,ze);if(x.isDepthTexture)fe=n.DEPTH_COMPONENT,a?x.type===In?fe=n.DEPTH_COMPONENT32F:x.type===Un?fe=n.DEPTH_COMPONENT24:x.type===Jn?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:x.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Qn&&fe===n.DEPTH_COMPONENT&&x.type!==Ks&&x.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Un,re=s.convert(x.type)),x.format===Ii&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Jn,re=s.convert(x.type))),Ve&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,fe,oe.width,oe.height,0,C,re,null));else if(x.isDataTexture)if(Se.length>0&&ze){Ie&&Ve&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Se[0].width,Se[0].height);for(let ue=0,D=Se.length;ue<D;ue++)ce=Se[ue],Ie?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,re,ce.data):t.texImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,C,re,ce.data);x.generateMipmaps=!1}else Ie?(Ve&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,C,re,oe.data)):t.texImage2D(n.TEXTURE_2D,0,fe,oe.width,oe.height,0,C,re,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,fe,Se[0].width,Se[0].height,oe.depth);for(let ue=0,D=Se.length;ue<D;ue++)ce=Se[ue],x.format!==on?C!==null?Ie?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,oe.depth,C,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,fe,ce.width,ce.height,oe.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ce.width,ce.height,oe.depth,C,re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,fe,ce.width,ce.height,oe.depth,0,C,re,ce.data)}else{Ie&&Ve&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Se[0].width,Se[0].height);for(let ue=0,D=Se.length;ue<D;ue++)ce=Se[ue],x.format!==on?C!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ce.width,ce.height,C,re,ce.data):t.texImage2D(n.TEXTURE_2D,ue,fe,ce.width,ce.height,0,C,re,ce.data)}else if(x.isDataArrayTexture)Ie?(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,fe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,C,re,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,oe.width,oe.height,oe.depth,0,C,re,oe.data);else if(x.isData3DTexture)Ie?(Ve&&t.texStorage3D(n.TEXTURE_3D,Oe,fe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,C,re,oe.data)):t.texImage3D(n.TEXTURE_3D,0,fe,oe.width,oe.height,oe.depth,0,C,re,oe.data);else if(x.isFramebufferTexture){if(Ve)if(Ie)t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height);else{let ue=oe.width,D=oe.height;for(let me=0;me<Oe;me++)t.texImage2D(n.TEXTURE_2D,me,fe,ue,D,0,C,re,null),ue>>=1,D>>=1}}else if(Se.length>0&&ze){Ie&&Ve&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,Se[0].width,Se[0].height);for(let ue=0,D=Se.length;ue<D;ue++)ce=Se[ue],Ie?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,C,re,ce):t.texImage2D(n.TEXTURE_2D,ue,fe,C,re,ce);x.generateMipmaps=!1}else Ie?(Ve&&t.texStorage2D(n.TEXTURE_2D,Oe,fe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,C,re,oe)):t.texImage2D(n.TEXTURE_2D,0,fe,C,re,oe);M(x,ze)&&_(ae),ne.__version=P.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ie(b,x,G){if(x.image.length!==6)return;const ae=K(b,x),se=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+G);const P=i.get(se);if(se.version!==P.__version||ae===!0){t.activeTexture(n.TEXTURE0+G);const ne=nt.getPrimaries(nt.workingColorSpace),le=x.colorSpace===Jt?null:nt.getPrimaries(x.colorSpace),ge=x.colorSpace===Jt||ne===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let ue=0;ue<6;ue++)!Re&&!De?oe[ue]=g(x.image[ue],!1,!0,r.maxCubemapSize):oe[ue]=De?x.image[ue].image:x.image[ue],oe[ue]=Ee(x,oe[ue]);const ze=oe[0],C=p(ze)||a,re=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),ce=R(x.internalFormat,re,fe,x.colorSpace),Se=a&&x.isVideoTexture!==!0,Ie=P.__version===void 0||ae===!0;let Ve=E(x,ze,C);I(n.TEXTURE_CUBE_MAP,x,C);let Oe;if(Re){Se&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ce,ze.width,ze.height);for(let ue=0;ue<6;ue++){Oe=oe[ue].mipmaps;for(let D=0;D<Oe.length;D++){const me=Oe[D];x.format!==on?re!==null?Se?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,me.width,me.height,re,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,me.width,me.height,re,fe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,ce,me.width,me.height,0,re,fe,me.data)}}}else{Oe=x.mipmaps,Se&&Ie&&(Oe.length>0&&Ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,ce,oe[0].width,oe[0].height));for(let ue=0;ue<6;ue++)if(De){Se?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,oe[ue].width,oe[ue].height,re,fe,oe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ce,oe[ue].width,oe[ue].height,0,re,fe,oe[ue].data);for(let D=0;D<Oe.length;D++){const _e=Oe[D].image[ue].image;Se?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,_e.width,_e.height,re,fe,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,ce,_e.width,_e.height,0,re,fe,_e.data)}}else{Se?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,re,fe,oe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ce,re,fe,oe[ue]);for(let D=0;D<Oe.length;D++){const me=Oe[D];Se?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,re,fe,me.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,ce,re,fe,me.image[ue])}}}M(x,C)&&_(n.TEXTURE_CUBE_MAP),P.__version=se.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function pe(b,x,G,ae,se,P){const ne=s.convert(G.format,G.colorSpace),le=s.convert(G.type),ge=R(G.internalFormat,ne,le,G.colorSpace);if(!i.get(x).__hasExternalTextures){const De=Math.max(1,x.width>>P),oe=Math.max(1,x.height>>P);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,P,ge,De,oe,x.depth,0,ne,le,null):t.texImage2D(se,P,ge,De,oe,0,ne,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(G).__webglTexture,0,ye(x)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(G).__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||xe(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===In?ae=n.DEPTH_COMPONENT32F:se.type===Un&&(ae=n.DEPTH_COMPONENT24));const P=ye(x);xe(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,ae,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,P,ae,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const ae=ye(x);G&&xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,x.width,x.height):xe(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ae=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ae.length;se++){const P=ae[se],ne=s.convert(P.format,P.colorSpace),le=s.convert(P.type),ge=R(P.internalFormat,ne,le,P.colorSpace),Re=ye(x);G&&xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ge,x.width,x.height):xe(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U(x.depthTexture,0);const ae=i.get(x.depthTexture).__webglTexture,se=ye(x);if(x.depthTexture.format===Qn)xe(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(x.depthTexture.format===Ii)xe(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(b){const x=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,b)}else if(G){x.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ae]),x.__webglDepthbuffer[ae]=n.createRenderbuffer(),he(x.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),he(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(b,x,G){const ae=i.get(b);x!==void 0&&pe(ae.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Me(b)}function H(b){const x=b.texture,G=i.get(b),ae=i.get(x);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=x.version,o.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,P=b.isWebGLMultipleRenderTargets===!0,ne=p(b)||a;if(se){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let ge=0;ge<x.mipmaps.length;ge++)G.__webglFramebuffer[le][ge]=n.createFramebuffer()}else G.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)G.__webglFramebuffer[le]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(P)if(r.drawBuffers){const le=b.texture;for(let ge=0,Re=le.length;ge<Re;ge++){const De=i.get(le[ge]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const le=P?x:[x];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Re=le[ge];G.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const De=s.convert(Re.format,Re.colorSpace),oe=s.convert(Re.type),ze=R(Re.internalFormat,De,oe,Re.colorSpace,b.isXRRenderTarget===!0),C=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,C,ze,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),I(n.TEXTURE_CUBE_MAP,x,ne);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)pe(G.__webglFramebuffer[le][ge],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else pe(G.__webglFramebuffer[le],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(x,ne)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const le=b.texture;for(let ge=0,Re=le.length;ge<Re;ge++){const De=le[ge],oe=i.get(De);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),I(n.TEXTURE_2D,De,ne),pe(G.__webglFramebuffer,b,De,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),M(De,ne)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ae.__webglTexture),I(le,x,ne),a&&x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)pe(G.__webglFramebuffer[ge],b,x,n.COLOR_ATTACHMENT0,le,ge);else pe(G.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,le,0);M(x,ne)&&_(le),t.unbindTexture()}b.depthBuffer&&Me(b)}function Ye(b){const x=p(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,se=G.length;ae<se;ae++){const P=G[ae];if(M(P,x)){const ne=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(P).__webglTexture;t.bindTexture(ne,le),_(ne),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&xe(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,ae=b.height;let se=n.COLOR_BUFFER_BIT;const P=[],ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),ge=b.isWebGLMultipleRenderTargets===!0;if(ge)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){P.push(n.COLOR_ATTACHMENT0+Re),b.depthBuffer&&P.push(ne);const De=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(De===!1&&(b.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Re]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ne])),ge){const oe=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,G,ae,0,0,G,ae,se,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);const De=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ee(b,x){const G=b.colorSpace,ae=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===zs||G!==fn&&G!==Jt&&(nt.getTransfer(G)===ct?a===!1?e.has("EXT_sRGB")===!0&&ae===on?(b.format=zs,b.minFilter=$t,b.generateMipmaps=!1):x=bl.sRGBToLinear(x):(ae!==on||se!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Ce,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe}function Wm(n,e,t){const i=t.isWebGL2;function r(s,o=Jt){let a;const l=nt.getTransfer(o);if(s===On)return n.UNSIGNED_BYTE;if(s===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(s===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===yh)return n.BYTE;if(s===Eh)return n.SHORT;if(s===Ks)return n.UNSIGNED_SHORT;if(s===pl)return n.INT;if(s===Un)return n.UNSIGNED_INT;if(s===In)return n.FLOAT;if(s===Ki)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bh)return n.ALPHA;if(s===on)return n.RGBA;if(s===Th)return n.LUMINANCE;if(s===Ah)return n.LUMINANCE_ALPHA;if(s===Qn)return n.DEPTH_COMPONENT;if(s===Ii)return n.DEPTH_STENCIL;if(s===zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wh)return n.RED;if(s===_l)return n.RED_INTEGER;if(s===Rh)return n.RG;if(s===vl)return n.RG_INTEGER;if(s===xl)return n.RGBA_INTEGER;if(s===jr||s===Yr||s===Kr||s===$r)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ma||s===Sa||s===ya||s===Ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ma)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ml)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ba||s===Ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ba)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ta)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Aa||s===wa||s===Ra||s===Ca||s===Pa||s===La||s===Da||s===Ua||s===Ia||s===Na||s===Fa||s===Oa||s===za||s===Ba)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Aa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ra)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ca)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===La)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Da)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ua)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ia)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Na)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===za)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ba)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zr||s===Ga||s===Ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zr)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ga)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ha)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===ka||s===Va||s===Wa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ka)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Xm extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jm extends si{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const g=t.getContextAttributes();let p=null,u=null;const M=[],_=[],R=new Ke;let E=null;const S=new Zt;S.layers.enable(1),S.viewport=new bt;const T=new Zt;T.layers.enable(2),T.viewport=new bt;const N=[S,T],y=new Xm;y.layers.enable(1),y.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let K=M[I];return K===void 0&&(K=new Ss,M[I]=K),K.getTargetRaySpace()},this.getControllerGrip=function(I){let K=M[I];return K===void 0&&(K=new Ss,M[I]=K),K.getGripSpace()},this.getHand=function(I){let K=M[I];return K===void 0&&(K=new Ss,M[I]=K),K.getHandSpace()};function B(I){const K=_.indexOf(I.inputSource);if(K===-1)return;const $=M[K];$!==void 0&&($.update(I.inputSource,I.frame,c||o),$.dispatchEvent({type:I.type,data:I.inputSource}))}function k(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",L);for(let I=0;I<M.length;I++){const K=_[I];K!==null&&(_[I]=null,M[I].disconnect(K))}A=null,F=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",k),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ti(m.framebufferWidth,m.framebufferHeight,{format:on,type:On,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,$=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Ii:Qn,$=g.stencil?Jn:Un);const pe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new ti(f.textureWidth,f.textureHeight,{format:on,type:On,depthTexture:new Nl(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const he=e.properties.get(u);he.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(I){for(let K=0;K<I.removed.length;K++){const $=I.removed[K],ie=_.indexOf($);ie>=0&&(_[ie]=null,M[ie].disconnect($))}for(let K=0;K<I.added.length;K++){const $=I.added[K];let ie=_.indexOf($);if(ie===-1){for(let he=0;he<M.length;he++)if(he>=_.length){_.push($),ie=he;break}else if(_[he]===null){_[he]=$,ie=he;break}if(ie===-1)break}const pe=M[ie];pe&&pe.connect($)}}const O=new z,U=new z;function Q(I,K,$){O.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition($.matrixWorld);const ie=O.distanceTo(U),pe=K.projectionMatrix.elements,he=$.projectionMatrix.elements,Ae=pe[14]/(pe[10]-1),Me=pe[14]/(pe[10]+1),Ce=(pe[9]+1)/pe[5],H=(pe[9]-1)/pe[5],Ye=(pe[8]-1)/pe[0],ve=(he[8]+1)/he[0],ye=Ae*Ye,xe=Ae*ve,Le=ie/(-Ye+ve),Ee=Le*-Ye;K.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ee),I.translateZ(Le),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const b=Ae+Le,x=Me+Le,G=ye-Ee,ae=xe+(ie-Ee),se=Ce*Me/x*b,P=H*Me/x*b;I.projectionMatrix.makePerspective(G,ae,se,P,b,x),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function q(I,K){K===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(K.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;y.near=T.near=S.near=I.near,y.far=T.far=S.far=I.far,(A!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,F=y.far);const K=I.parent,$=y.cameras;q(y,K);for(let ie=0;ie<$.length;ie++)q($[ie],K);$.length===2?Q(y,S,T):y.projectionMatrix.copy(S.projectionMatrix),Y(I,y,K)};function Y(I,K,$){$===null?I.matrix.copy(K.matrixWorld):(I.matrix.copy($.matrixWorld),I.matrix.invert(),I.matrix.multiply(K.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(K.projectionMatrix),I.projectionMatrixInverse.copy(K.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Bs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let V=null;function ee(I,K){if(h=K.getViewerPose(c||o),v=K,h!==null){const $=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ie=!1;$.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let pe=0;pe<$.length;pe++){const he=$[pe];let Ae=null;if(m!==null)Ae=m.getViewport(he);else{const Ce=d.getViewSubImage(f,he);Ae=Ce.viewport,pe===0&&(e.setRenderTargetTextures(u,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(u))}let Me=N[pe];Me===void 0&&(Me=new Zt,Me.layers.enable(pe),Me.viewport=new bt,N[pe]=Me),Me.matrix.fromArray(he.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(he.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),pe===0&&(y.matrix.copy(Me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Me)}}for(let $=0;$<M.length;$++){const ie=_[$],pe=M[$];ie!==null&&pe!==void 0&&pe.update(ie,K,c||o)}V&&V(I,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const te=new Il;te.setAnimationLoop(ee),this.setAnimationLoop=function(I){V=I},this.dispose=function(){}}}function Ym(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Pl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,M,_,R){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,R)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),g(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,M,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===It&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===It&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=e.get(u).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=_*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const M=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Km(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const R=_.program;i.uniformBlockBinding(M,R)}function c(M,_){let R=r[M.id];R===void 0&&(v(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",p));const E=_.program;i.updateUBOMapping(M,E);const S=e.render.frame;s[M.id]!==S&&(f(M),s[M.id]=S)}function h(M){const _=d();M.__bindingPointIndex=_;const R=n.createBuffer(),E=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,R),R}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=r[M.id],R=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,T=R.length;S<T;S++){const N=Array.isArray(R[S])?R[S]:[R[S]];for(let y=0,A=N.length;y<A;y++){const F=N[y];if(m(F,S,y,E)===!0){const B=F.__offset,k=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let O=0;O<k.length;O++){const U=k[O],Q=g(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+L,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):(U.toArray(F.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,_,R,E){const S=M.value,T=_+"_"+R;if(E[T]===void 0)return typeof S=="number"||typeof S=="boolean"?E[T]=S:E[T]=S.clone(),!0;{const N=E[T];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return E[T]=S,!0}else if(N.equals(S)===!1)return N.copy(S),!0}return!1}function v(M){const _=M.uniforms;let R=0;const E=16;for(let T=0,N=_.length;T<N;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,F=y.length;A<F;A++){const B=y[A],k=Array.isArray(B.value)?B.value:[B.value];for(let L=0,O=k.length;L<O;L++){const U=k[L],Q=g(U),q=R%E;q!==0&&E-q<Q.boundary&&(R+=E-q),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=Q.storage}}}const S=R%E;return S>0&&(R+=E-S),M.__size=R,M.__cache={},this}function g(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const R=o.indexOf(_.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Hl{constructor(e={}){const{canvas:t=Vh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const _=this;let R=!1,E=0,S=0,T=null,N=-1,y=null;const A=new bt,F=new bt;let B=null;const k=new tt(0);let L=0,O=t.width,U=t.height,Q=1,q=null,Y=null;const V=new bt(0,0,O,U),ee=new bt(0,0,O,U);let te=!1;const I=new Ul;let K=!1,$=!1,ie=null;const pe=new mt,he=new Ke,Ae=new z,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return T===null?Q:1}let H=i;function Ye(w,W){for(let j=0;j<w.length;j++){const Z=w[j],X=t.getContext(Z,W);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),H=Ye(W,w),H===null)throw Ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,ye,xe,Le,Ee,b,x,G,ae,se,P,ne,le,ge,Re,De,oe,ze,C,re,fe,ce,Se,Ie;function Ve(){ve=new sp(H),ye=new Jf(H,ve,e),ve.init(ye),ce=new Wm(H,ve,ye),xe=new km(H,ve,ye),Le=new lp(H),Ee=new Rm,b=new Vm(H,ve,xe,Ee,ye,ce,Le),x=new ep(_),G=new rp(_),ae=new pu(H,ye),Se=new $f(H,ve,ae,ye),se=new ap(H,ae,Le,Se),P=new dp(H,se,ae,Le),C=new up(H,ye,b),De=new Qf(Ee),ne=new wm(_,x,G,ve,ye,Se,De),le=new Ym(_,Ee),ge=new Pm,Re=new Fm(ve,ye),ze=new Kf(_,x,G,xe,P,f,l),oe=new Hm(_,P,ye),Ie=new Km(H,Le,ye,xe),re=new Zf(H,ve,Le,ye),fe=new op(H,ve,Le,ye),Le.programs=ne.programs,_.capabilities=ye,_.extensions=ve,_.properties=Ee,_.renderLists=ge,_.shadowMap=oe,_.state=xe,_.info=Le}Ve();const Oe=new jm(_,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(O,U,!1))},this.getSize=function(w){return w.set(O,U)},this.setSize=function(w,W,j=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,U=W,t.width=Math.floor(w*Q),t.height=Math.floor(W*Q),j===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(O*Q,U*Q).floor()},this.setDrawingBufferSize=function(w,W,j){O=w,U=W,Q=j,t.width=Math.floor(w*j),t.height=Math.floor(W*j),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,W,j,Z){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,W,j,Z),xe.viewport(A.copy(V).multiplyScalar(Q).floor())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,W,j,Z){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,W,j,Z),xe.scissor(F.copy(ee).multiplyScalar(Q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){xe.setScissorTest(te=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,W=!0,j=!0){let Z=0;if(w){let X=!1;if(T!==null){const we=T.texture.format;X=we===xl||we===vl||we===_l}if(X){const we=T.texture.type,Ne=we===On||we===Un||we===Ks||we===Jn||we===ml||we===gl,Be=ze.getClearColor(),He=ze.getClearAlpha(),qe=Be.r,ke=Be.g,Xe=Be.b;Ne?(m[0]=qe,m[1]=ke,m[2]=Xe,m[3]=He,H.clearBufferuiv(H.COLOR,0,m)):(v[0]=qe,v[1]=ke,v[2]=Xe,v[3]=He,H.clearBufferiv(H.COLOR,0,v))}else Z|=H.COLOR_BUFFER_BIT}W&&(Z|=H.DEPTH_BUFFER_BIT),j&&(Z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Re.dispose(),Ee.dispose(),x.dispose(),G.dispose(),P.dispose(),Se.dispose(),Ie.dispose(),ne.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",st),Oe.removeEventListener("sessionend",de),ie&&(ie.dispose(),ie=null),Je.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Le.autoReset,W=oe.enabled,j=oe.autoUpdate,Z=oe.needsUpdate,X=oe.type;Ve(),Le.autoReset=w,oe.enabled=W,oe.autoUpdate=j,oe.needsUpdate=Z,oe.type=X}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){const W=w.target;W.removeEventListener("dispose",_e),Ue(W)}function Ue(w){Pe(w),Ee.remove(w)}function Pe(w){const W=Ee.get(w).programs;W!==void 0&&(W.forEach(function(j){ne.releaseProgram(j)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,j,Z,X,we){W===null&&(W=Me);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,Be=Ht(w,W,j,Z,X);xe.setMaterial(Z,Ne);let He=j.index,qe=1;if(Z.wireframe===!0){if(He=se.getWireframeAttribute(j),He===void 0)return;qe=2}const ke=j.drawRange,Xe=j.attributes.position;let lt=ke.start*qe,St=(ke.start+ke.count)*qe;we!==null&&(lt=Math.max(lt,we.start*qe),St=Math.min(St,(we.start+we.count)*qe)),He!==null?(lt=Math.max(lt,0),St=Math.min(St,He.count)):Xe!=null&&(lt=Math.max(lt,0),St=Math.min(St,Xe.count));const at=St-lt;if(at<0||at===1/0)return;Se.setup(X,Z,Be,j,He);let yt,rt=re;if(He!==null&&(yt=ae.get(He),rt=fe,rt.setIndex(yt)),X.isMesh)Z.wireframe===!0?(xe.setLineWidth(Z.wireframeLinewidth*Ce()),rt.setMode(H.LINES)):rt.setMode(H.TRIANGLES);else if(X.isLine){let je=Z.linewidth;je===void 0&&(je=1),xe.setLineWidth(je*Ce()),X.isLineSegments?rt.setMode(H.LINES):X.isLineLoop?rt.setMode(H.LINE_LOOP):rt.setMode(H.LINE_STRIP)}else X.isPoints?rt.setMode(H.POINTS):X.isSprite&&rt.setMode(H.TRIANGLES);if(X.isBatchedMesh)rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)rt.renderInstances(lt,at,X.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bn=Math.min(j.instanceCount,je);rt.renderInstances(lt,at,Bn)}else rt.render(lt,at)};function We(w,W,j){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=It,w.needsUpdate=!0,hn(w,W,j),w.side=zn,w.needsUpdate=!0,hn(w,W,j),w.side=qt):hn(w,W,j)}this.compile=function(w,W,j=null){j===null&&(j=w),p=Re.get(j),p.init(),M.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==j&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(_._useLegacyLights);const Z=new Set;return w.traverse(function(X){const we=X.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Be=we[Ne];We(Be,j,X),Z.add(Be)}else We(we,j,X),Z.add(we)}),M.pop(),p=null,Z},this.compileAsync=function(w,W,j=null){const Z=this.compile(w,W,j);return new Promise(X=>{function we(){if(Z.forEach(function(Ne){Ee.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){X(w);return}setTimeout(we,10)}ve.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ge=null;function Qe(w){Ge&&Ge(w)}function st(){Je.stop()}function de(){Je.start()}const Je=new Il;Je.setAnimationLoop(Qe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){Ge=w,Oe.setAnimationLoop(w),w===null?Je.stop():Je.start()},Oe.addEventListener("sessionstart",st),Oe.addEventListener("sessionend",de),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(W),W=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,W,T),p=Re.get(w,M.length),p.init(),M.push(p),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),I.setFromProjectionMatrix(pe),$=this.localClippingEnabled,K=De.init(this.clippingPlanes,$),g=ge.get(w,u.length),g.init(),u.push(g),it(w,W,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,Y),this.info.render.frame++,K===!0&&De.beginShadows();const j=p.state.shadowsArray;if(oe.render(j,w,W),K===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(g,w),p.setupLights(_._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let X=0,we=Z.length;X<we;X++){const Ne=Z[X];jt(g,w,Ne,Ne.viewport)}}else jt(g,w,W);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,W),Se.resetDefaultState(),N=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function it(w,W,j,Z){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||I.intersectsSprite(w)){Z&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const Ne=P.update(w),Be=w.material;Be.visible&&g.push(w,Ne,Be,j,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||I.intersectsObject(w))){const Ne=P.update(w),Be=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ae.copy(Ne.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(Be)){const He=Ne.groups;for(let qe=0,ke=He.length;qe<ke;qe++){const Xe=He[qe],lt=Be[Xe.materialIndex];lt&&lt.visible&&g.push(w,Ne,lt,j,Ae.z,Xe)}}else Be.visible&&g.push(w,Ne,Be,j,Ae.z,null)}}const we=w.children;for(let Ne=0,Be=we.length;Ne<Be;Ne++)it(we[Ne],W,j,Z)}function jt(w,W,j,Z){const X=w.opaque,we=w.transmissive,Ne=w.transparent;p.setupLightsView(j),K===!0&&De.setGlobalState(_.clippingPlanes,j),we.length>0&&et(X,we,W,j),Z&&xe.viewport(A.copy(Z)),X.length>0&&cn(X,W,j),we.length>0&&cn(we,W,j),Ne.length>0&&cn(Ne,W,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function et(w,W,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const we=ye.isWebGL2;ie===null&&(ie=new ti(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ki:On,minFilter:Yi,samples:we?4:0})),_.getDrawingBufferSize(he),we?ie.setSize(he.x,he.y):ie.setSize(Gs(he.x),Gs(he.y));const Ne=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(k),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Be=_.toneMapping;_.toneMapping=Fn,cn(w,j,Z),b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie);let He=!1;for(let qe=0,ke=W.length;qe<ke;qe++){const Xe=W[qe],lt=Xe.object,St=Xe.geometry,at=Xe.material,yt=Xe.group;if(at.side===qt&&lt.layers.test(Z.layers)){const rt=at.side;at.side=It,at.needsUpdate=!0,pn(lt,j,Z,St,at,yt),at.side=rt,at.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie)),_.setRenderTarget(Ne),_.setClearColor(k,L),_.toneMapping=Be}function cn(w,W,j){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,we=w.length;X<we;X++){const Ne=w[X],Be=Ne.object,He=Ne.geometry,qe=Z===null?Ne.material:Z,ke=Ne.group;Be.layers.test(j.layers)&&pn(Be,W,j,He,qe,ke)}}function pn(w,W,j,Z,X,we){w.onBeforeRender(_,W,j,Z,X,we),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(_,W,j,Z,w,we),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=It,X.needsUpdate=!0,_.renderBufferDirect(j,W,Z,X,w,we),X.side=zn,X.needsUpdate=!0,_.renderBufferDirect(j,W,Z,X,w,we),X.side=qt):_.renderBufferDirect(j,W,Z,X,w,we),w.onAfterRender(_,W,j,Z,X,we)}function hn(w,W,j){W.isScene!==!0&&(W=Me);const Z=Ee.get(w),X=p.state.lights,we=p.state.shadowsArray,Ne=X.state.version,Be=ne.getParameters(w,X.state,we,W,j),He=ne.getProgramCacheKey(Be);let qe=Z.programs;Z.environment=w.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(w.isMeshStandardMaterial?G:x).get(w.envMap||Z.environment),qe===void 0&&(w.addEventListener("dispose",_e),qe=new Map,Z.programs=qe);let ke=qe.get(He);if(ke!==void 0){if(Z.currentProgram===ke&&Z.lightsStateVersion===Ne)return Yt(w,Be),ke}else Be.uniforms=ne.getUniforms(w),w.onBuild(j,Be,_),w.onBeforeCompile(Be,_),ke=ne.acquireProgram(Be,He),qe.set(He,ke),Z.uniforms=Be.uniforms;const Xe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=De.uniform),Yt(w,Be),Z.needsLights=Ft(w),Z.lightsStateVersion=Ne,Z.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=ke,Z.uniformsList=null,ke}function Tn(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Yt(w,W){const j=Ee.get(w);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Ht(w,W,j,Z,X){W.isScene!==!0&&(W=Me),b.resetTextureUnits();const we=W.fog,Ne=Z.isMeshStandardMaterial?W.environment:null,Be=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fn,He=(Z.isMeshStandardMaterial?G:x).get(Z.envMap||Ne),qe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let at=Fn;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=_.toneMapping);const yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rt=yt!==void 0?yt.length:0,je=Ee.get(Z),Bn=p.state.lights;if(K===!0&&($===!0||w!==y)){const wt=w===y&&Z.id===N;De.setState(Z,w,wt)}let ot=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bn.state.version||je.outputColorSpace!==Be||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||je.envMap!==He||Z.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==De.numPlanes||je.numIntersection!==De.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==ke||je.morphTargets!==Xe||je.morphNormals!==lt||je.morphColors!==St||je.toneMapping!==at||ye.isWebGL2===!0&&je.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,je.__version=Z.version);let Ot=je.currentProgram;ot===!0&&(Ot=hn(Z,W,X));let ai=!1,mn=!1,gn=!1;const dt=Ot.getUniforms(),kt=je.uniforms;if(xe.useProgram(Ot.program)&&(ai=!0,mn=!0,gn=!0),Z.id!==N&&(N=Z.id,mn=!0),ai||y!==w){dt.setValue(H,"projectionMatrix",w.projectionMatrix),dt.setValue(H,"viewMatrix",w.matrixWorldInverse);const wt=dt.map.cameraPosition;wt!==void 0&&wt.setValue(H,Ae.setFromMatrixPosition(w.matrixWorld)),ye.logarithmicDepthBuffer&&dt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,mn=!0,gn=!0)}if(X.isSkinnedMesh){dt.setOptional(H,X,"bindMatrix"),dt.setOptional(H,X,"bindMatrixInverse");const wt=X.skeleton;wt&&(ye.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),dt.setValue(H,"boneTexture",wt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(dt.setOptional(H,X,"batchingTexture"),dt.setValue(H,"batchingTexture",X._matricesTexture,b));const Gn=j.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0&&ye.isWebGL2===!0)&&C.update(X,j,Ot),(mn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,dt.setValue(H,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(kt.envMap.value=He,kt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),mn&&(dt.setValue(H,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&ut(kt,gn),we&&Z.fog===!0&&le.refreshFogUniforms(kt,we),le.refreshMaterialUniforms(kt,Z,Q,U,ie),Lr.upload(H,Tn(je),kt,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Lr.upload(H,Tn(je),kt,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(H,"center",X.center),dt.setValue(H,"modelViewMatrix",X.modelViewMatrix),dt.setValue(H,"normalMatrix",X.normalMatrix),dt.setValue(H,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const wt=Z.uniformsGroups;for(let zi=0,Vr=wt.length;zi<Vr;zi++)if(ye.isWebGL2){const nr=wt[zi];Ie.update(nr,Ot),Ie.bind(nr,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}function ut(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ft(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,W,j){Ee.get(w.texture).__webglTexture=W,Ee.get(w.depthTexture).__webglTexture=j;const Z=Ee.get(w);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const j=Ee.get(w);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,j=0){T=w,E=W,S=j;let Z=!0,X=null,we=!1,Ne=!1;if(w){const He=Ee.get(w);He.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(H.FRAMEBUFFER,null),Z=!1):He.__webglFramebuffer===void 0?b.setupRenderTarget(w):He.__hasExternalTextures&&b.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const ke=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?X=ke[W][j]:X=ke[W],we=!0):ye.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?X=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[j]:X=ke,A.copy(w.viewport),F.copy(w.scissor),B=w.scissorTest}else A.copy(V).multiplyScalar(Q).floor(),F.copy(ee).multiplyScalar(Q).floor(),B=te;if(xe.bindFramebuffer(H.FRAMEBUFFER,X)&&ye.drawBuffers&&Z&&xe.drawBuffers(w,X),xe.viewport(A),xe.scissor(F),xe.setScissorTest(B),we){const He=Ee.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,j)}else if(Ne){const He=Ee.get(w.texture),qe=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,j||0,qe)}N=-1},this.readRenderTargetPixels=function(w,W,j,Z,X,we,Ne){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const He=w.texture,qe=He.format,ke=He.type;if(qe!==on&&ce.convert(qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ke===Ki&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ke!==On&&ce.convert(ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===In&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Z&&j>=0&&j<=w.height-X&&H.readPixels(W,j,Z,X,ce.convert(qe),ce.convert(ke),we)}finally{const He=T!==null?Ee.get(T).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,W,j=0){const Z=Math.pow(2,-j),X=Math.floor(W.image.width*Z),we=Math.floor(W.image.height*Z);b.setTexture2D(W,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,w.x,w.y,X,we),xe.unbindTexture()},this.copyTextureToTexture=function(w,W,j,Z=0){const X=W.image.width,we=W.image.height,Ne=ce.convert(j.format),Be=ce.convert(j.type);b.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),W.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Z,w.x,w.y,X,we,Ne,Be,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Z,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Ne,W.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Z,w.x,w.y,Ne,Be,W.image),Z===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,W,j,Z,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=w.max.x-w.min.x+1,Ne=w.max.y-w.min.y+1,Be=w.max.z-w.min.z+1,He=ce.convert(Z.format),qe=ce.convert(Z.type);let ke;if(Z.isData3DTexture)b.setTexture3D(Z,0),ke=H.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)b.setTexture2DArray(Z,0),ke=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xe=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),St=H.getParameter(H.UNPACK_SKIP_PIXELS),at=H.getParameter(H.UNPACK_SKIP_ROWS),yt=H.getParameter(H.UNPACK_SKIP_IMAGES),rt=j.isCompressedTexture?j.mipmaps[X]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,rt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(ke,X,W.x,W.y,W.z,we,Ne,Be,He,qe,rt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ke,X,W.x,W.y,W.z,we,Ne,Be,He,rt.data)):H.texSubImage3D(ke,X,W.x,W.y,W.z,we,Ne,Be,He,qe,rt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,St),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,yt),X===0&&Z.generateMipmaps&&H.generateMipmap(ke),xe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){E=0,S=0,T=null,xe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$s?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Gr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?ei:Sl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?Et:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $m extends Hl{}$m.prototype.isWebGL1Renderer=!0;class Zm extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jm extends Tt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Or extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new z,No=new z,Fo=new mt,ys=new tr,Tr=new er;class ea extends Nt{constructor(e=new Mt,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Io.fromBufferAttribute(t,r-1),No.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Io.distanceTo(No);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(r),Tr.radius+=s,e.ray.intersectsSphere(Tr)===!1)return;Fo.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Fo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,h=new z,d=new z,f=new z,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),M=Math.min(v.count,o.start+o.count);for(let _=u,R=M-1;_<R;_+=m){const E=v.getX(_),S=v.getX(_+1);if(c.fromBufferAttribute(p,E),h.fromBufferAttribute(p,S),ys.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let _=u,R=M-1;_<R;_+=m){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),ys.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Oo=new z,zo=new z;class Qm extends ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Oo.fromBufferAttribute(t,r),zo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Oo.distanceTo(zo);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eg extends ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kl extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bo=new mt,ks=new tr,Ar=new er,wr=new z;class tg extends Nt{constructor(e=new Mt,t=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;Bo.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Bo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=f,g=m;v<g;v++){const p=c.getX(v);wr.fromBufferAttribute(d,p),Go(wr,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m;v<g;v++)wr.fromBufferAttribute(d,v),Go(wr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Go(n,e,t,i,r,s,o){const a=ks.distanceSqToPoint(n);if(a<t){const l=new z;ks.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ta extends Mt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let d=e;const f=(t-e)/r,m=new z,v=new Ke;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,h.push(v.x,v.y)}d+=f}for(let g=0;g<r;g++){const p=g*(i+1);for(let u=0;u<i;u++){const M=u+p,_=M,R=M+i+1,E=M+i+2,S=M+1;a.push(_,R,S),a.push(R,E,S)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zr extends Mt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new z,f=new z,m=[],v=[],g=[],p=[];for(let u=0;u<=i;u++){const M=[],_=u/i;let R=0;u===0&&o===0?R=.5/t:u===i&&l===Math.PI&&(R=-.5/t);for(let E=0;E<=t;E++){const S=E/t;d.x=-e*Math.cos(r+S*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+S*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(S+R,1-_),M.push(c++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){const _=h[u][M+1],R=h[u][M],E=h[u+1][M],S=h[u+1][M+1];(u!==0||o>0)&&m.push(_,R,S),(u!==i-1||l<Math.PI)&&m.push(R,E,S)}this.setIndex(m),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ng extends Or{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Ho={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ig{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const rg=new ig;class na{constructor(e){this.manager=e!==void 0?e:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}na.DEFAULT_MATERIAL_NAME="__DEFAULT";class sg extends na{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ho.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=$i("img");function l(){h(),Ho.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vl extends na{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,o=new sg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ag extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class og{constructor(e,t,i=0,r=1/0){this.ray=new tr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Vs(e,this,i,t),i.sort(ko),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vs(e[r],this,i,t);return i.sort(ko),i}}function ko(n,e){return n.distance-e.distance}function Vs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Vs(r[s],e,t,!0)}}class Vo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);const Wo={type:"change"},Es={type:"start"},Xo={type:"end"},Rr=new tr,qo=new Dn,lg=Math.cos(70*kh.DEG2RAD);class cg extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",P),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",P),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wo),i.update(),s=r.NONE},this.update=(function(){const C=new z,re=new ni().setFromUnitVectors(e.up,new z(0,1,0)),fe=re.clone().invert(),ce=new z,Se=new ni,Ie=new z,Ve=2*Math.PI;return function(ue=null){const D=i.object.position;C.copy(D).sub(i.target),C.applyQuaternion(re),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&F(y(ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=i.minAzimuthAngle,_e=i.maxAzimuthAngle;isFinite(me)&&isFinite(_e)&&(me<-Math.PI?me+=Ve:me>Math.PI&&(me-=Ve),_e<-Math.PI?_e+=Ve:_e>Math.PI&&(_e-=Ve),me<=_e?a.theta=Math.max(me,Math.min(_e,a.theta)):a.theta=a.theta>(me+_e)/2?Math.max(me,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(fe),D.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ue=!1;if(i.zoomToCursor&&S){let Pe=null;if(i.object.isPerspectiveCamera){const We=C.length();Pe=Y(We*c);const Ge=We-Pe;i.object.position.addScaledVector(R,Ge),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const We=new z(E.x,E.y,0);We.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ue=!0;const Ge=new z(E.x,E.y,0);Ge.unproject(i.object),i.object.position.sub(Ge).add(We),i.object.updateMatrixWorld(),Pe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Pe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Pe).add(i.object.position):(Rr.origin.copy(i.object.position),Rr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Rr.direction))<lg?e.lookAt(i.target):(qo.setFromNormalAndCoplanarPoint(i.object.up,i.target),Rr.intersectPlane(qo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ue=!0);return c=1,S=!1,Ue||ce.distanceToSquared(i.object.position)>o||8*(1-Se.dot(i.object.quaternion))>o||Ie.distanceToSquared(i.target)>0?(i.dispatchEvent(Wo),ce.copy(i.object.position),Se.copy(i.object.quaternion),Ie.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ge),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",x),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",x),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",P),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Vo,l=new Vo;let c=1;const h=new z,d=new Ke,f=new Ke,m=new Ke,v=new Ke,g=new Ke,p=new Ke,u=new Ke,M=new Ke,_=new Ke,R=new z,E=new Ke;let S=!1;const T=[],N={};function y(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function A(C){const re=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*re)}function F(C){l.theta-=C}function B(C){l.phi-=C}const k=(function(){const C=new z;return function(fe,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-fe),h.add(C)}})(),L=(function(){const C=new z;return function(fe,ce){i.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(fe),h.add(C)}})(),O=(function(){const C=new z;return function(fe,ce){const Se=i.domElement;if(i.object.isPerspectiveCamera){const Ie=i.object.position;C.copy(Ie).sub(i.target);let Ve=C.length();Ve*=Math.tan(i.object.fov/2*Math.PI/180),k(2*fe*Ve/Se.clientHeight,i.object.matrix),L(2*ce*Ve/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(fe*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),L(ce*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function U(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(C,re){if(!i.zoomToCursor)return;S=!0;const fe=i.domElement.getBoundingClientRect(),ce=C-fe.left,Se=re-fe.top,Ie=fe.width,Ve=fe.height;E.x=ce/Ie*2-1,E.y=-(Se/Ve)*2+1,R.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function V(C){d.set(C.clientX,C.clientY)}function ee(C){q(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function te(C){v.set(C.clientX,C.clientY)}function I(C){f.set(C.clientX,C.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const re=i.domElement;F(2*Math.PI*m.x/re.clientHeight),B(2*Math.PI*m.y/re.clientHeight),d.copy(f),i.update()}function K(C){M.set(C.clientX,C.clientY),_.subVectors(M,u),_.y>0?U(A(_.y)):_.y<0&&Q(A(_.y)),u.copy(M),i.update()}function $(C){g.set(C.clientX,C.clientY),p.subVectors(g,v).multiplyScalar(i.panSpeed),O(p.x,p.y),v.copy(g),i.update()}function ie(C){q(C.clientX,C.clientY),C.deltaY<0?Q(A(C.deltaY)):C.deltaY>0&&U(A(C.deltaY)),i.update()}function pe(C){let re=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),re=!0;break}re&&(C.preventDefault(),i.update())}function he(C){if(T.length===1)d.set(C.pageX,C.pageY);else{const re=ze(C),fe=.5*(C.pageX+re.x),ce=.5*(C.pageY+re.y);d.set(fe,ce)}}function Ae(C){if(T.length===1)v.set(C.pageX,C.pageY);else{const re=ze(C),fe=.5*(C.pageX+re.x),ce=.5*(C.pageY+re.y);v.set(fe,ce)}}function Me(C){const re=ze(C),fe=C.pageX-re.x,ce=C.pageY-re.y,Se=Math.sqrt(fe*fe+ce*ce);u.set(0,Se)}function Ce(C){i.enableZoom&&Me(C),i.enablePan&&Ae(C)}function H(C){i.enableZoom&&Me(C),i.enableRotate&&he(C)}function Ye(C){if(T.length==1)f.set(C.pageX,C.pageY);else{const fe=ze(C),ce=.5*(C.pageX+fe.x),Se=.5*(C.pageY+fe.y);f.set(ce,Se)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const re=i.domElement;F(2*Math.PI*m.x/re.clientHeight),B(2*Math.PI*m.y/re.clientHeight),d.copy(f)}function ve(C){if(T.length===1)g.set(C.pageX,C.pageY);else{const re=ze(C),fe=.5*(C.pageX+re.x),ce=.5*(C.pageY+re.y);g.set(fe,ce)}p.subVectors(g,v).multiplyScalar(i.panSpeed),O(p.x,p.y),v.copy(g)}function ye(C){const re=ze(C),fe=C.pageX-re.x,ce=C.pageY-re.y,Se=Math.sqrt(fe*fe+ce*ce);M.set(0,Se),_.set(0,Math.pow(M.y/u.y,i.zoomSpeed)),U(_.y),u.copy(M);const Ie=(C.pageX+re.x)*.5,Ve=(C.pageY+re.y)*.5;q(Ie,Ve)}function xe(C){i.enableZoom&&ye(C),i.enablePan&&ve(C)}function Le(C){i.enableZoom&&ye(C),i.enableRotate&&Ye(C)}function Ee(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",x)),Re(C),C.pointerType==="touch"?ne(C):G(C))}function b(C){i.enabled!==!1&&(C.pointerType==="touch"?le(C):ae(C))}function x(C){De(C),T.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",x)),i.dispatchEvent(Xo),s=r.NONE}function G(C){let re;switch(C.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case li.DOLLY:if(i.enableZoom===!1)return;ee(C),s=r.DOLLY;break;case li.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;te(C),s=r.PAN}else{if(i.enableRotate===!1)return;V(C),s=r.ROTATE}break;case li.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;V(C),s=r.ROTATE}else{if(i.enablePan===!1)return;te(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Es)}function ae(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;I(C);break;case r.DOLLY:if(i.enableZoom===!1)return;K(C);break;case r.PAN:if(i.enablePan===!1)return;$(C);break}}function se(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Es),ie(C),i.dispatchEvent(Xo))}function P(C){i.enabled===!1||i.enablePan===!1||pe(C)}function ne(C){switch(oe(C),T.length){case 1:switch(i.touches.ONE){case ci.ROTATE:if(i.enableRotate===!1)return;he(C),s=r.TOUCH_ROTATE;break;case ci.PAN:if(i.enablePan===!1)return;Ae(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(C),s=r.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Es)}function le(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(C),i.update();break;default:s=r.NONE}}function ge(C){i.enabled!==!1&&C.preventDefault()}function Re(C){T.push(C.pointerId)}function De(C){delete N[C.pointerId];for(let re=0;re<T.length;re++)if(T[re]==C.pointerId){T.splice(re,1);return}}function oe(C){let re=N[C.pointerId];re===void 0&&(re=new Ke,N[C.pointerId]=re),re.set(C.pageX,C.pageY)}function ze(C){const re=C.pointerId===T[0]?T[1]:T[0];return N[re]}i.domElement.addEventListener("contextmenu",ge),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}var ln=Math.PI,ht=ln*2,Xi=ln/180,hg=1440,ug=398600.8,Xt=6378.135,bn=60/Math.sqrt(Xt*Xt*Xt/ug),bs=Xt*bn/60,dg=1/bn,Kn=.001082616,fg=-253881e-11,pg=-165597e-11,$n=fg/Kn,Zi=2/3;function mg(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+t[r-1]&&r<12;)s+=t[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:o,day:a,hr:c,minute:h,sec:d}}function jo(n,e,t,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function ia(n,e,t,i,r,s,o){if(n instanceof Date){var a=n;return jo(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return jo(n,e,t,i,r,s,o)}function Wl(n,e){var t=n.e3,i=n.ee2,r=n.peo,s=n.pgho,o=n.pho,a=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,m=n.sgh4,v=n.sh2,g=n.sh3,p=n.si2,u=n.si3,M=n.sl2,_=n.sl3,R=n.sl4,E=n.t,S=n.xgh2,T=n.xgh3,N=n.xgh4,y=n.xh2,A=n.xh3,F=n.xi2,B=n.xi3,k=n.xl2,L=n.xl3,O=n.xl4,U=n.zmol,Q=n.zmos,q=e.init,Y=e.opsmode,V=e.ep,ee=e.inclp,te=e.nodep,I=e.argpp,K=e.mp,$,ie,pe,he,Ae,Me,Ce,H,Ye,ve,ye,xe,Le,Ee,b,x,G,ae,se,P,ne,le=119459e-10,ge=.01675,Re=.00015835218,De=.0549;ne=Q+le*E,q==="y"&&(ne=Q),P=ne+2*ge*Math.sin(ne),G=Math.sin(P),ve=.5*G*G-.25,ye=-.5*G*Math.cos(P);var oe=c*ve+h*ye,ze=p*ve+u*ye,C=M*ve+_*ye+R*G,re=d*ve+f*ye+m*G,fe=v*ve+g*ye;ne=U+Re*E,q==="y"&&(ne=U),P=ne+2*De*Math.sin(ne),G=Math.sin(P),ve=.5*G*G-.25,ye=-.5*G*Math.cos(P);var ce=i*ve+t*ye,Se=F*ve+B*ye,Ie=k*ve+L*ye+O*G,Ve=S*ve+T*ye+N*G,Oe=y*ve+A*ye;return xe=oe+ce,b=ze+Se,x=C+Ie,Le=re+Ve,Ee=fe+Oe,q==="n"&&(xe-=r,b-=a,x-=l,Le-=s,Ee-=o,ee+=b,V+=xe,he=Math.sin(ee),pe=Math.cos(ee),ee>=.2?(Ee/=he,Le-=pe*Ee,I+=Le,te+=Ee,K+=x):(Me=Math.sin(te),Ae=Math.cos(te),$=he*Me,ie=he*Ae,Ce=Ee*Ae+b*pe*Me,H=-Ee*Me+b*pe*Ae,$+=Ce,ie+=H,te%=ht,te<0&&Y==="a"&&(te+=ht),ae=K+I+pe*te,Ye=x+Le-b*te*he,ae+=Ye,se=te,te=Math.atan2($,ie),te<0&&Y==="a"&&(te+=ht),Math.abs(se-te)>ln&&(te<se?te+=ht:te-=ht),K+=x,I=ae-K-pe*te)),{ep:V,inclp:ee,nodep:te,argpp:I,mp:K}}function gg(n){var e=n.epoch,t=n.ep,i=n.argpp,r=n.tc,s=n.inclp,o=n.nodep,a=n.np,l,c,h,d,f,m,v,g,p,u,M,_,R,E,S,T,N,y,A,F,B,k,L,O,U,Q,q,Y,V,ee,te,I,K,$,ie,pe,he,Ae,Me,Ce,H,Ye,ve,ye,xe,Le,Ee,b,x,G,ae,se,P,ne,le,ge,Re,De,oe,ze,C,re,fe,ce=.01675,Se=.0549,Ie=29864797e-13,Ve=47968065e-14,Oe=.39785416,ue=.91744867,D=.1945905,me=-.98088458,_e=a,Ue=t,Pe=Math.sin(o),We=Math.cos(o),Ge=Math.sin(i),Qe=Math.cos(i),st=Math.sin(s),de=Math.cos(s),Je=Ue*Ue,it=1-Je,jt=Math.sqrt(it),et=0,cn=0,pn=0,hn=0,Tn=0,Yt=e+18261.5+r/1440,Ht=(4.523602-.00092422029*Yt)%ht,ut=Math.sin(Ht),Ft=Math.cos(Ht),w=.91375164-.03568096*Ft,W=Math.sqrt(1-w*w),j=.089683511*ut/W,Z=Math.sqrt(1-j*j),X=5.8351514+.001944368*Yt,we=.39785416*ut/W,Ne=Z*Ft+.91744867*j*ut;we=Math.atan2(we,Ne),we+=X-Ht;var Be=Math.cos(we),He=Math.sin(we);F=D,B=me,O=ue,U=Oe,k=We,L=Pe,M=Ie;for(var qe=1/_e,ke=0;ke<2;)ke+=1,l=F*k+B*O*L,h=-B*k+F*O*L,v=-F*L+B*O*k,g=B*U,p=B*L+F*O*k,u=F*U,c=de*v+st*g,d=de*p+st*u,f=-st*v+de*g,m=-st*p+de*u,_=l*Qe+c*Ge,R=h*Qe+d*Ge,E=-l*Ge+c*Qe,S=-h*Ge+d*Qe,T=f*Ge,N=m*Ge,y=f*Qe,A=m*Qe,C=12*_*_-3*E*E,re=24*_*R-6*E*S,fe=12*R*R-3*S*S,se=3*(l*l+c*c)+C*Je,P=6*(l*h+c*d)+re*Je,ne=3*(h*h+d*d)+fe*Je,le=-6*l*f+Je*(-24*_*y-6*E*T),ge=-6*(l*m+h*f)+Je*(-24*(R*y+_*A)+-6*(E*N+S*T)),Re=-6*h*m+Je*(-24*R*A-6*S*N),De=6*c*f+Je*(24*_*T-6*E*y),oe=6*(d*f+c*m)+Je*(24*(R*T+_*N)-6*(S*y+E*A)),ze=6*d*m+Je*(24*R*N-6*S*A),se=se+se+it*C,P=P+P+it*re,ne=ne+ne+it*fe,Ee=M*qe,Le=-.5*Ee/jt,b=Ee*jt,xe=-15*Ue*b,x=_*E+R*S,G=R*E+_*S,ae=R*S-_*E,ke===1&&(Q=xe,q=Le,Y=Ee,V=b,ee=x,te=G,I=ae,K=se,$=P,ie=ne,pe=le,he=ge,Ae=Re,Me=De,Ce=oe,H=ze,Ye=C,ve=re,ye=fe,F=Be,B=He,O=w,U=W,k=Z*We+j*Pe,L=Pe*Z-We*j,M=Ve);var Xe=(4.7199672+(.2299715*Yt-X))%ht,lt=(6.2565837+.017201977*Yt)%ht,St=2*Q*te,at=2*Q*I,yt=2*q*he,rt=2*q*(Ae-pe),je=-2*Y*$,Bn=-2*Y*(ie-K),ot=-2*Y*(-21-9*Je)*ce,Ot=2*V*ve,ai=2*V*(ye-Ye),mn=-18*V*ce,gn=-2*q*Ce,dt=-2*q*(H-Me),kt=2*xe*G,Gn=2*xe*ae,wt=2*Le*ge,zi=2*Le*(Re-le),Vr=-2*Ee*P,nr=-2*Ee*(ne-se),Yl=-2*Ee*(-21-9*Je)*Se,Kl=2*b*re,$l=2*b*(fe-C),Zl=-18*b*Se,Jl=-2*Le*oe,Ql=-2*Le*(ze-De);return{snodm:Pe,cnodm:We,sinim:st,cosim:de,sinomm:Ge,cosomm:Qe,day:Yt,e3:Gn,ee2:kt,em:Ue,emsq:Je,gam:X,peo:et,pgho:hn,pho:Tn,pinco:cn,plo:pn,rtemsq:jt,se2:St,se3:at,sgh2:Ot,sgh3:ai,sgh4:mn,sh2:gn,sh3:dt,si2:yt,si3:rt,sl2:je,sl3:Bn,sl4:ot,s1:xe,s2:Le,s3:Ee,s4:b,s5:x,s6:G,s7:ae,ss1:Q,ss2:q,ss3:Y,ss4:V,ss5:ee,ss6:te,ss7:I,sz1:K,sz2:$,sz3:ie,sz11:pe,sz12:he,sz13:Ae,sz21:Me,sz22:Ce,sz23:H,sz31:Ye,sz32:ve,sz33:ye,xgh2:Kl,xgh3:$l,xgh4:Zl,xh2:Jl,xh3:Ql,xi2:wt,xi3:zi,xl2:Vr,xl3:nr,xl4:Yl,nm:_e,z1:se,z2:P,z3:ne,z11:le,z12:ge,z13:Re,z21:De,z22:oe,z23:ze,z31:C,z32:re,z33:fe,zmol:Xe,zmos:lt}}function _g(n){var e=n.cosim,t=n.argpo,i=n.s1,r=n.s2,s=n.s3,o=n.s4,a=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,m=n.ss5,v=n.sz1,g=n.sz3,p=n.sz11,u=n.sz13,M=n.sz21,_=n.sz23,R=n.sz31,E=n.sz33,S=n.t,T=n.tc,N=n.gsto,y=n.mo,A=n.mdot,F=n.no,B=n.nodeo,k=n.nodedot,L=n.xpidot,O=n.z1,U=n.z3,Q=n.z11,q=n.z13,Y=n.z21,V=n.z23,ee=n.z31,te=n.z33,I=n.ecco,K=n.eccsq,$=n.emsq,ie=n.em,pe=n.argpm,he=n.inclm,Ae=n.mm,Me=n.nm,Ce=n.nodem,H=n.irez,Ye=n.atime,ve=n.d2201,ye=n.d2211,xe=n.d3210,Le=n.d3222,Ee=n.d4410,b=n.d4422,x=n.d5220,G=n.d5232,ae=n.d5421,se=n.d5433,P=n.dedt,ne=n.didt,le=n.dmdt,ge=n.dnodt,Re=n.domdt,De=n.del1,oe=n.del2,ze=n.del3,C=n.xfact,re=n.xlamo,fe=n.xli,ce=n.xni,Se,Ie,Ve,Oe,ue,D,me,_e,Ue,Pe,We,Ge,Qe,st,de,Je,it,jt,et,cn,pn,hn,Tn,Yt,Ht,ut,Ft,w,W,j,Z,X,we=17891679e-13,Ne=21460748e-13,Be=22123015e-14,He=17891679e-13,qe=73636953e-16,ke=21765803e-16,Xe=.0043752690880113,lt=37393792e-14,St=11428639e-14,at=.00015835218,yt=119459e-10;H=0,Me<.0052359877&&Me>.0034906585&&(H=1),Me>=.00826&&Me<=.00924&&ie>=.5&&(H=2);var rt=c*yt*m,je=h*yt*(p+u),Bn=-yt*d*(v+g-14-6*$),ot=f*yt*(R+E-6),Ot=-yt*h*(M+_);(he<.052359877||he>ln-.052359877)&&(Ot=0),l!==0&&(Ot/=l);var ai=ot-e*Ot;P=rt+i*at*a,ne=je+r*at*(Q+q),le=Bn-at*s*(O+U-14-6*$);var mn=o*at*(ee+te-6),gn=-at*r*(Y+V);(he<.052359877||he>ln-.052359877)&&(gn=0),Re=ai+mn,ge=Ot,l!==0&&(Re-=e/l*gn,ge+=gn/l);var dt=0,kt=(N+T*Xe)%ht;if(ie+=P*S,he+=ne*S,pe+=Re*S,Ce+=ge*S,Ae+=le*S,H!==0){if(j=Math.pow(Me/bn,Zi),H===2){Z=e*e;var Gn=ie;ie=I;var wt=$;$=K,X=ie*$,st=-.306-(ie-.64)*.44,ie<=.65?(de=3.616-13.247*ie+16.29*$,it=-19.302+117.39*ie-228.419*$+156.591*X,jt=-18.9068+109.7927*ie-214.6334*$+146.5816*X,et=-41.122+242.694*ie-471.094*$+313.953*X,cn=-146.407+841.88*ie-1629.014*$+1083.435*X,pn=-532.114+3017.977*ie-5740.032*$+3708.276*X):(de=-72.099+331.819*ie-508.738*$+266.724*X,it=-346.844+1582.851*ie-2415.925*$+1246.113*X,jt=-342.585+1554.908*ie-2366.899*$+1215.972*X,et=-1052.797+4758.686*ie-7193.992*$+3651.957*X,cn=-3581.69+16178.11*ie-24462.77*$+12422.52*X,ie>.715?pn=-5149.66+29936.92*ie-54087.36*$+31324.56*X:pn=1464.74-4664.75*ie+3763.64*$),ie<.7?(Yt=-919.2277+4988.61*ie-9064.77*$+5542.21*X,hn=-822.71072+4568.6173*ie-8491.4146*$+5337.524*X,Tn=-853.666+4690.25*ie-8624.77*$+5341.4*X):(Yt=-37995.78+161616.52*ie-229838.2*$+109377.94*X,hn=-51752.104+218913.95*ie-309468.16*$+146349.42*X,Tn=-40023.88+170470.89*ie-242699.48*$+115605.82*X),Ht=l*l,Se=.75*(1+2*e+Z),Ie=1.5*Ht,Oe=1.875*l*(1-2*e-3*Z),ue=-1.875*l*(1+2*e-3*Z),me=35*Ht*Se,_e=39.375*Ht*Ht,Ue=9.84375*l*(Ht*(1-2*e-5*Z)+.33333333*(-2+4*e+6*Z)),Pe=l*(4.92187512*Ht*(-2-4*e+10*Z)+6.56250012*(1+2*e-3*Z)),We=29.53125*l*(2-8*e+Z*(-12+8*e+10*Z)),Ge=29.53125*l*(-2-8*e+Z*(12+8*e-10*Z)),w=Me*Me,W=j*j,Ft=3*w*W,ut=Ft*He,ve=ut*Se*st,ye=ut*Ie*de,Ft*=j,ut=Ft*lt,xe=ut*Oe*it,Le=ut*ue*jt,Ft*=j,ut=2*Ft*qe,Ee=ut*me*et,b=ut*_e*cn,Ft*=j,ut=Ft*St,x=ut*Ue*pn,G=ut*Pe*Tn,ut=2*Ft*ke,ae=ut*We*hn,se=ut*Ge*Yt,re=(y+B+B-(kt+kt))%ht,C=A+le+2*(k+ge-Xe)-F,ie=Gn,$=wt}H===1&&(Qe=1+$*(-2.5+.8125*$),it=1+2*$,Je=1+$*(-6+6.60937*$),Se=.75*(1+e)*(1+e),Ve=.9375*l*l*(1+3*e)-.75*(1+e),D=1+e,D*=1.875*D*D,De=3*Me*Me*j*j,oe=2*De*Se*Qe*we,ze=3*De*D*Je*Be*j,De=De*Ve*it*Ne*j,re=(y+B+t-kt)%ht,C=A+L+le+Re+ge-(F+Xe)),fe=re,ce=F,Ye=0,Me=F+dt}return{em:ie,argpm:pe,inclm:he,mm:Ae,nm:Me,nodem:Ce,irez:H,atime:Ye,d2201:ve,d2211:ye,d3210:xe,d3222:Le,d4410:Ee,d4422:b,d5220:x,d5232:G,d5421:ae,d5433:se,dedt:P,didt:ne,dmdt:le,dndt:dt,dnodt:ge,domdt:Re,del1:De,del2:oe,del3:ze,xfact:C,xlamo:re,xli:fe,xni:ce}}function Yo(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Xi/240%ht,t<0&&(t+=ht),t}function Ws(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Yo(ia.apply(void 0,arguments)):Yo.apply(void 0,arguments)}function vg(n){var e=n.ecco,t=n.epoch,i=n.inclo,r=n.opsmode,s=n.no,o=e*e,a=1-o,l=Math.sqrt(a),c=Math.cos(i),h=c*c,d=Math.pow(bn/s,Zi),f=.75*Kn*(3*h-1)/(l*a),m=f/(d*d),v=d*(1-m*m-m*(1/3+134*m*m/81));m=f/(v*v),s/=1+m;var g=Math.pow(bn/s,Zi),p=Math.sin(i),u=g*a,M=1-5*h,_=-M-h-h,R=1/g,E=u*u,S=g*(1-e),T="n",N;if(r==="a"){var y=t-7305,A=Math.floor(y+1e-8),F=y-A,B=.017202791694070362,k=1.7321343856509375,L=5075514194322695e-30,O=B+ht;N=(k+B*A+O*F+y*y*L)%ht,N<0&&(N+=ht)}else N=Ws(t+24332815e-1);return{no:s,method:T,ainv:R,ao:g,con41:_,con42:M,cosio:c,cosio2:h,eccsq:o,omeosq:a,posq:E,rp:S,rteosq:l,sinio:p,gsto:N}}function xg(n){var e=n.irez,t=n.d2201,i=n.d2211,r=n.d3210,s=n.d3222,o=n.d4410,a=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,m=n.del1,v=n.del2,g=n.del3,p=n.didt,u=n.dmdt,M=n.dnodt,_=n.domdt,R=n.argpo,E=n.argpdot,S=n.t,T=n.tc,N=n.gsto,y=n.xfact,A=n.xlamo,F=n.no,B=n.atime,k=n.em,L=n.argpm,O=n.inclm,U=n.xli,Q=n.mm,q=n.xni,Y=n.nodem,V=n.nm,ee=.13130908,te=2.8843198,I=.37448087,K=5.7686396,$=.95240898,ie=1.8014998,pe=1.050833,he=4.4108898,Ae=.0043752690880113,Me=720,Ce=-720,H=259200,Ye,ve,ye,xe,Le,Ee,b,x,G=0,ae=0,se=(N+T*Ae)%ht;if(k+=f*S,O+=p*S,L+=_*S,Y+=M*S,Q+=u*S,e!==0){(B===0||S*B<=0||Math.abs(S)<Math.abs(B))&&(B=0,q=F,U=A),S>0?Ye=Me:Ye=Ce;for(var P=381;P===381;)e!==2?(b=m*Math.sin(U-ee)+v*Math.sin(2*(U-te))+g*Math.sin(3*(U-I)),Le=q+y,Ee=m*Math.cos(U-ee)+2*v*Math.cos(2*(U-te))+3*g*Math.cos(3*(U-I)),Ee*=Le):(x=R+E*B,ye=x+x,ve=U+U,b=t*Math.sin(ye+U-K)+i*Math.sin(U-K)+r*Math.sin(x+U-$)+s*Math.sin(-x+U-$)+o*Math.sin(ye+ve-ie)+a*Math.sin(ve-ie)+l*Math.sin(x+U-pe)+c*Math.sin(-x+U-pe)+h*Math.sin(x+ve-he)+d*Math.sin(-x+ve-he),Le=q+y,Ee=t*Math.cos(ye+U-K)+i*Math.cos(U-K)+r*Math.cos(x+U-$)+s*Math.cos(-x+U-$)+l*Math.cos(x+U-pe)+c*Math.cos(-x+U-pe)+2*(o*Math.cos(ye+ve-ie)+a*Math.cos(ve-ie)+h*Math.cos(x+ve-he)+d*Math.cos(-x+ve-he)),Ee*=Le),Math.abs(S-B)>=Me?P=381:(ae=S-B,P=0),P===381&&(U+=Le*Ye+b*H,q+=b*Ye+Ee*H,B+=Ye);V=q+b*ae+Ee*ae*ae*.5,xe=U+Le*ae+b*ae*ae*.5,e!==1?(Q=xe-2*Y+2*se,G=V-F):(Q=xe-Y-L+se,G=V-F),V=F+G}return{atime:B,em:k,argpm:L,inclm:O,xli:U,mm:Q,xni:q,nodem:Y,dndt:G,nm:V}}function Xl(n,e){var t,i,r,s,o,a,l,c,h,d,f,m,v,g,p,u,M,_,R,E,S,T,N,y,A,F,B,k=15e-13;n.t=e,n.error=0;var L=n.mo+n.mdot*n.t,O=n.argpo+n.argpdot*n.t,U=n.nodeo+n.nodedot*n.t;h=O,S=L;var Q=n.t*n.t;if(N=U+n.nodecf*Q,M=1-n.cc1*n.t,_=n.bstar*n.cc4*n.t,R=n.t2cof*Q,n.isimp!==1){l=n.omgcof*n.t;var q=1+n.eta*Math.cos(L);a=n.xmcof*(q*q*q-n.delmo),u=l+a,S=L+u,h=O-u,m=Q*n.t,v=m*n.t,M=M-n.d2*Q-n.d3*m-n.d4*v,_+=n.bstar*n.cc5*(Math.sin(S)-n.sinmao),R=R+n.t3cof*m+v*(n.t4cof+n.t*n.t5cof)}T=n.no;var Y=n.ecco;if(E=n.inclo,n.method==="d"){g=n.t;var V={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:g,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:Y,argpm:h,inclm:E,xli:n.xli,mm:S,xni:n.xni,nodem:N,nm:T},ee=xg(V);Y=ee.em,h=ee.argpm,E=ee.inclm,S=ee.mm,N=ee.nodem,T=ee.nm}if(T<=0)return n.error=2,[!1,!1];var te=Math.pow(bn/T,Zi)*M*M;if(T=bn/Math.pow(te,1.5),Y-=_,Y>=1||Y<-.001)return n.error=1,[!1,!1];Y<1e-6&&(Y=1e-6),S+=n.no*R,A=S+h+N,N%=ht,h%=ht,A%=ht,S=(A-h-N)%ht;var I=Math.sin(E),K=Math.cos(E),$=Y;if(y=E,d=h,B=N,F=S,s=I,r=K,n.method==="d"){var ie={inclo:n.inclo,init:"n",ep:$,inclp:y,nodep:B,argpp:d,mp:F,opsmode:n.operationmode},pe=Wl(n,ie);if($=pe.ep,B=pe.nodep,d=pe.argpp,F=pe.mp,y=pe.inclp,y<0&&(y=-y,B+=ln,d-=ln),$<0||$>1)return n.error=3,[!1,!1]}n.method==="d"&&(s=Math.sin(y),r=Math.cos(y),n.aycof=-.5*$n*s,Math.abs(r+1)>15e-13?n.xlcof=-.25*$n*s*(3+5*r)/(1+r):n.xlcof=-.25*$n*s*(3+5*r)/k);var he=$*Math.cos(d);u=1/(te*(1-$*$));var Ae=$*Math.sin(d)+u*n.aycof,Me=F+d+B+u*n.xlcof*he,Ce=(Me-B)%ht;c=Ce,p=9999.9;for(var H=1;Math.abs(p)>=1e-12&&H<=10;)i=Math.sin(c),t=Math.cos(c),p=1-t*he-i*Ae,p=(Ce-Ae*t+he*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,H+=1;var Ye=he*t+Ae*i,ve=he*i-Ae*t,ye=he*he+Ae*Ae,xe=te*(1-ye);if(xe<0)return n.error=4,[!1,!1];var Le=te*(1-Ye),Ee=Math.sqrt(te)*ve/Le,b=Math.sqrt(xe)/Le,x=Math.sqrt(1-ye);u=ve/(1+x);var G=te/Le*(i-Ae-he*u),ae=te/Le*(t-he+Ae*u);f=Math.atan2(G,ae);var se=(ae+ae)*G,P=1-2*G*G;u=1/xe;var ne=.5*Kn*u,le=ne*u;n.method==="d"&&(o=r*r,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);var ge=Le*(1-1.5*le*x*n.con41)+.5*ne*n.x1mth2*P;if(ge<1)return n.error=6,{position:!1,velocity:!1};f-=.25*le*n.x7thm1*se;var Re=B+1.5*le*r*se,De=y+1.5*le*r*s*P,oe=Ee-T*ne*n.x1mth2*se/bn,ze=b+T*ne*(n.x1mth2*P+1.5*n.con41)/bn,C=Math.sin(f),re=Math.cos(f),fe=Math.sin(Re),ce=Math.cos(Re),Se=Math.sin(De),Ie=Math.cos(De),Ve=-fe*Ie,Oe=ce*Ie,ue=Ve*C+ce*re,D=Oe*C+fe*re,me=Se*C,_e=Ve*re-ce*C,Ue=Oe*re-fe*C,Pe=Se*re,We={x:ge*ue*Xt,y:ge*D*Xt,z:ge*me*Xt},Ge={x:(oe*ue+ze*_e)*bs,y:(oe*D+ze*Ue)*bs,z:(oe*me+ze*Pe)*bs};return{position:We,velocity:Ge}}function Mg(n,e){var t=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,c=e.xno,h=e.xnodeo,d,f,m,v,g,p,u,M,_,R,E,S,T,N,y,A,F,B,k,L,O,U,Q,q,Y,V,ee,te,I,K,$,ie,pe,he,Ae,Me,Ce,H,Ye,ve,ye,xe,Le,Ee,b,x,G,ae,se,P,ne,le,ge,Re,De,oe,ze=15e-13;n.isimp=0,n.method="n",n.aycof=0,n.con41=0,n.cc1=0,n.cc4=0,n.cc5=0,n.d2=0,n.d3=0,n.d4=0,n.delmo=0,n.eta=0,n.argpdot=0,n.omgcof=0,n.sinmao=0,n.t=0,n.t2cof=0,n.t3cof=0,n.t4cof=0,n.t5cof=0,n.x1mth2=0,n.x7thm1=0,n.mdot=0,n.nodedot=0,n.xlcof=0,n.xmcof=0,n.nodecf=0,n.irez=0,n.d2201=0,n.d2211=0,n.d3210=0,n.d3222=0,n.d4410=0,n.d4422=0,n.d5220=0,n.d5232=0,n.d5421=0,n.d5433=0,n.dedt=0,n.del1=0,n.del2=0,n.del3=0,n.didt=0,n.dmdt=0,n.dnodt=0,n.domdt=0,n.e3=0,n.ee2=0,n.peo=0,n.pgho=0,n.pho=0,n.pinco=0,n.plo=0,n.se2=0,n.se3=0,n.sgh2=0,n.sgh3=0,n.sgh4=0,n.sh2=0,n.sh3=0,n.si2=0,n.si3=0,n.sl2=0,n.sl3=0,n.sl4=0,n.gsto=0,n.xfact=0,n.xgh2=0,n.xgh3=0,n.xgh4=0,n.xh2=0,n.xh3=0,n.xi2=0,n.xi3=0,n.xl2=0,n.xl3=0,n.xl4=0,n.xlamo=0,n.zmol=0,n.zmos=0,n.atime=0,n.xli=0,n.xni=0,n.bstar=r,n.ecco=s,n.argpo=o,n.inclo=a,n.mo=l,n.no=c,n.nodeo=h,n.operationmode=t;var C=78/Xt+1,re=42/Xt,fe=re*re*re*re;n.init="y",n.t=0;var ce={ecco:n.ecco,epoch:i,inclo:n.inclo,no:n.no,method:n.method,opsmode:n.operationmode},Se=vg(ce),Ie=Se.ao,Ve=Se.con42,Oe=Se.cosio,ue=Se.cosio2,D=Se.eccsq,me=Se.omeosq,_e=Se.posq,Ue=Se.rp,Pe=Se.rteosq,We=Se.sinio;if(n.no=Se.no,n.con41=Se.con41,n.gsto=Se.gsto,n.a=Math.pow(n.no*dg,-2/3),n.alta=n.a*(1+n.ecco)-1,n.altp=n.a*(1-n.ecco)-1,n.error=0,me>=0||n.no>=0){if(n.isimp=0,Ue<220/Xt+1&&(n.isimp=1),ee=C,O=fe,B=(Ue-1)*Xt,B<156){ee=B-78,B<98&&(ee=20);var Ge=(120-ee)/Xt;O=Ge*Ge*Ge*Ge,ee=ee/Xt+1}k=1/_e,x=1/(Ie-ee),n.eta=Ie*n.ecco*x,S=n.eta*n.eta,E=n.ecco*n.eta,L=Math.abs(1-S),p=O*Math.pow(x,4),u=p/Math.pow(L,3.5),v=u*n.no*(Ie*(1+1.5*S+E*(4+S))+.375*Kn*x/L*n.con41*(8+3*S*(8+S))),n.cc1=n.bstar*v,g=0,n.ecco>1e-4&&(g=-2*p*x*$n*n.no*We/n.ecco),n.x1mth2=1-ue,n.cc4=2*n.no*u*Ie*me*(n.eta*(2+.5*S)+n.ecco*(.5+2*S)-Kn*x/(Ie*L)*(-3*n.con41*(1-2*E+S*(1.5-.5*E))+.75*n.x1mth2*(2*S-E*(1+S))*Math.cos(2*n.argpo))),n.cc5=2*u*Ie*me*(1+2.75*(S+E)+E*S),M=ue*ue,Le=1.5*Kn*k*n.no,Ee=.5*Le*Kn*k,b=-.46875*pg*k*k*n.no,n.mdot=n.no+.5*Le*Pe*n.con41+.0625*Ee*Pe*(13-78*ue+137*M),n.argpdot=-.5*Le*Ve+.0625*Ee*(7-114*ue+395*M)+b*(3-36*ue+49*M),ae=-Le*Oe,n.nodedot=ae+(.5*Ee*(4-19*ue)+2*b*(3-7*ue))*Oe,G=n.argpdot+n.nodedot,n.omgcof=n.bstar*g*Math.cos(n.argpo),n.xmcof=0,n.ecco>1e-4&&(n.xmcof=-Zi*p*n.bstar/E),n.nodecf=3.5*me*ae*n.cc1,n.t2cof=1.5*n.cc1,Math.abs(Oe+1)>15e-13?n.xlcof=-.25*$n*We*(3+5*Oe)/(1+Oe):n.xlcof=-.25*$n*We*(3+5*Oe)/ze,n.aycof=-.5*$n*We;var Qe=1+n.eta*Math.cos(n.mo);if(n.delmo=Qe*Qe*Qe,n.sinmao=Math.sin(n.mo),n.x7thm1=7*ue-1,2*ln/n.no>=225){n.method="d",n.isimp=1,ye=0,y=n.inclo;var st={epoch:i,ep:n.ecco,argpp:n.argpo,tc:ye,inclp:n.inclo,nodep:n.nodeo,np:n.no,e3:n.e3,ee2:n.ee2,peo:n.peo,pgho:n.pgho,pho:n.pho,pinco:n.pinco,plo:n.plo,se2:n.se2,se3:n.se3,sgh2:n.sgh2,sgh3:n.sgh3,sgh4:n.sgh4,sh2:n.sh2,sh3:n.sh3,si2:n.si2,si3:n.si3,sl2:n.sl2,sl3:n.sl3,sl4:n.sl4,xgh2:n.xgh2,xgh3:n.xgh3,xgh4:n.xgh4,xh2:n.xh2,xh3:n.xh3,xi2:n.xi2,xi3:n.xi3,xl2:n.xl2,xl3:n.xl3,xl4:n.xl4,zmol:n.zmol,zmos:n.zmos},de=gg(st);n.e3=de.e3,n.ee2=de.ee2,n.peo=de.peo,n.pgho=de.pgho,n.pho=de.pho,n.pinco=de.pinco,n.plo=de.plo,n.se2=de.se2,n.se3=de.se3,n.sgh2=de.sgh2,n.sgh3=de.sgh3,n.sgh4=de.sgh4,n.sh2=de.sh2,n.sh3=de.sh3,n.si2=de.si2,n.si3=de.si3,n.sl2=de.sl2,n.sl3=de.sl3,n.sl4=de.sl4,f=de.sinim,d=de.cosim,_=de.em,R=de.emsq,U=de.s1,Q=de.s2,q=de.s3,Y=de.s4,V=de.s5,te=de.ss1,I=de.ss2,K=de.ss3,$=de.ss4,ie=de.ss5,pe=de.sz1,he=de.sz3,Ae=de.sz11,Me=de.sz13,Ce=de.sz21,H=de.sz23,Ye=de.sz31,ve=de.sz33,n.xgh2=de.xgh2,n.xgh3=de.xgh3,n.xgh4=de.xgh4,n.xh2=de.xh2,n.xh3=de.xh3,n.xi2=de.xi2,n.xi3=de.xi3,n.xl2=de.xl2,n.xl3=de.xl3,n.xl4=de.xl4,n.zmol=de.zmol,n.zmos=de.zmos,F=de.nm,se=de.z1,P=de.z3,ne=de.z11,le=de.z13,ge=de.z21,Re=de.z23,De=de.z31,oe=de.z33;var Je={inclo:y,init:n.init,ep:n.ecco,inclp:n.inclo,nodep:n.nodeo,argpp:n.argpo,mp:n.mo,opsmode:n.operationmode},it=Wl(n,Je);n.ecco=it.ep,n.inclo=it.inclp,n.nodeo=it.nodep,n.argpo=it.argpp,n.mo=it.mp,T=0,N=0,A=0;var jt={cosim:d,emsq:R,argpo:n.argpo,s1:U,s2:Q,s3:q,s4:Y,s5:V,sinim:f,ss1:te,ss2:I,ss3:K,ss4:$,ss5:ie,sz1:pe,sz3:he,sz11:Ae,sz13:Me,sz21:Ce,sz23:H,sz31:Ye,sz33:ve,t:n.t,tc:ye,gsto:n.gsto,mo:n.mo,mdot:n.mdot,no:n.no,nodeo:n.nodeo,nodedot:n.nodedot,xpidot:G,z1:se,z3:P,z11:ne,z13:le,z21:ge,z23:Re,z31:De,z33:oe,ecco:n.ecco,eccsq:D,em:_,argpm:T,inclm:y,mm:A,nm:F,nodem:N,irez:n.irez,atime:n.atime,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,del1:n.del1,del2:n.del2,del3:n.del3,xfact:n.xfact,xlamo:n.xlamo,xli:n.xli,xni:n.xni},et=_g(jt);n.irez=et.irez,n.atime=et.atime,n.d2201=et.d2201,n.d2211=et.d2211,n.d3210=et.d3210,n.d3222=et.d3222,n.d4410=et.d4410,n.d4422=et.d4422,n.d5220=et.d5220,n.d5232=et.d5232,n.d5421=et.d5421,n.d5433=et.d5433,n.dedt=et.dedt,n.didt=et.didt,n.dmdt=et.dmdt,n.dnodt=et.dnodt,n.domdt=et.domdt,n.del1=et.del1,n.del2=et.del2,n.del3=et.del3,n.xfact=et.xfact,n.xlamo=et.xlamo,n.xli=et.xli,n.xni=et.xni}n.isimp!==1&&(m=n.cc1*n.cc1,n.d2=4*Ie*x*m,xe=n.d2*x*n.cc1/3,n.d3=(17*Ie+ee)*xe,n.d4=.5*xe*Ie*x*(221*Ie+31*ee)*n.cc1,n.t3cof=n.d2+2*m,n.t4cof=.25*(3*n.d3+n.cc1*(12*n.d2+10*m)),n.t5cof=.2*(3*n.d4+12*n.cc1*n.d3+6*n.d2*n.d2+15*m*(2*n.d2+m)))}Xl(n,0),n.init="n"}function Sg(n,e){var t="i",i=1440/(2*ln),r=0,s={};s.error=0,s.satnum=n.substring(2,7),s.epochyr=parseInt(n.substring(18,20),10),s.epochdays=parseFloat(n.substring(20,32)),s.ndot=parseFloat(n.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(n.substring(44,50),10),"E").concat(n.substring(50,52))),s.bstar=parseFloat("".concat(n.substring(53,54),".").concat(parseInt(n.substring(54,59),10),"E").concat(n.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=Xi,s.nodeo*=Xi,s.argpo*=Xi,s.mo*=Xi,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=mg(r,s.epochdays),a=o.mon,l=o.day,c=o.hr,h=o.minute,d=o.sec;return s.jdsatepoch=ia(r,a,l,c,h,d),Mg(s,{opsmode:t,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function yg(n){return Eg(n)||bg(n)||Tg(n)||Ag()}function Eg(n){if(Array.isArray(n))return Xs(n)}function bg(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Tg(n,e){if(n){if(typeof n=="string")return Xs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xs(n,e)}}function Xs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Ag(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wg(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var i=e[0],r=Array.prototype.slice.call(e,1),s=ia.apply(void 0,yg(r)),o=(s-i.jdsatepoch)*hg;return Xl(i,o)}function Rg(n,e){for(var t=6378.137,i=6356.7523142,r=Math.sqrt(n.x*n.x+n.y*n.y),s=(t-i)/t,o=2*s-s*s,a=Math.atan2(n.y,n.x)-e;a<-ln;)a+=ht;for(;a>ln;)a-=ht;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c<l;)d=1/Math.sqrt(1-o*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*o*Math.sin(h),r),c+=1;var f=r/Math.cos(h)-t*d;return{longitude:a,latitude:h,height:f}}const Li=["#e8a33d","#4fb3d9","#8fd16a","#b58cf0"],gt=6371,ft=Math.PI/180,Bt=10,Cg=1.00005;function un(n,e,t=1,i=new z){const r=(e+180)*ft,s=n*ft;return i.set(-Math.cos(r)*Math.cos(s)*t,Math.sin(s)*t,Math.sin(r)*Math.cos(s)*t)}function Pg(n){const e=n.clone().normalize(),t=Math.asin(e.y)/ft,i=(Math.atan2(e.z,-e.x)/ft-180+540)%360-180;return[t,i]}class Lg{tMin;span;bins;binSize=900;count;validPct;D;renderer;scene=new Zm;camera;controls;view;labels;cb;T0;NS;orbit;FU;TOBS;NADIR;CROSS;ALONG;fireU;earth;earthU;satObjs;boxLine;selGroup=new Yn;ring;footprints;raf=0;last=performance.now();lastTick=0;simT=0;playing=!0;speed=600;flyTo=null;drawing=0;p1=null;downXY=null;disposed=!1;resizeObserver;tiles;satOn;constructor(e,t,i){this.D=t,this.cb=i,this.view=e;const r=t.cols,s=r.lat.length;this.count=s;const o=t.sats;let a=1/0,l=-1/0;for(let E=0;E<s;E++){const S=r.t[E];S<a&&(a=S),S>l&&(l=S)}Number.isFinite(a)||(a=Date.parse(`${t.window[0]}T00:00:00Z`)/1e3,l=a+86400),this.tMin=a,this.T0=a-1800;const c=l+1800;this.NS=Math.ceil((c-this.T0)/Bt)+1,this.span=l-a+900;const h=[...new Set(o.map(E=>E.norad))],d=o.map(E=>h.indexOf(E.norad)),f=new z;this.orbit=h.map(E=>{const S=o.find(A=>A.norad===E),T=Sg(S.tle[0],S.tle[1]),N=new Float32Array(this.NS*3),y=new Float32Array(this.NS);for(let A=0;A<this.NS;A++){const F=new Date((this.T0+A*Bt)*1e3),B=wg(T,F);if(typeof B.position=="boolean")continue;const k=Rg(B.position,Ws(F));un(k.latitude/ft,k.longitude/ft,1,f),N[A*3]=f.x,N[A*3+1]=f.y,N[A*3+2]=f.z,y[A]=k.height}return{u:N,alt:y,sats:o.map((A,F)=>A.norad===E?F:-1).filter(A=>A>=0)}}),this.oiOf=d,this.FU=new Float32Array(s*3),this.TOBS=new Float32Array(s),this.NADIR=new Float32Array(s),this.CROSS=new Float32Array(s*3),this.ALONG=new Float32Array(s*3);const m=Float32Array.from(r.scan),v=Float32Array.from(r.track);this.scan=m,this.track=v;{const E=new z,S=new z,T=new z,N=new z,y=new z,A=new z;let F=0,B=0;for(let k=0;k<s;k++){un(r.lat[k],r.lon[k],1,E),this.FU[k*3]=E.x,this.FU[k*3+1]=E.y,this.FU[k*3+2]=E.z;const L=r.sat[k],O=o[L],U=d[L];if(O.system===3){this.TOBS[k]=r.t[k]-a,this.satPos(U,r.t[k],A),this.subpoint(U,r.t[k],N),this.NADIR[k]=Math.acos(Math.min(1,N.dot(E)))*gt,S.copy(N).addScaledVector(E,-N.dot(E)),S.lengthSq()<1e-12&&S.set(0,1,0).addScaledVector(E,-E.y),S.normalize(),T.crossVectors(E,S).normalize(),y.subVectors(A,E);const Q=y.length()*gt;y.normalize();const q=Math.max(.12,y.dot(E)),Y=O.pixel_km*Q/35786;m[k]=Y,v[k]=Y/q}else{const Q=this.orbit[U].u,q=Math.max(0,Math.floor((r.t[k]-180-this.T0)/Bt)),Y=Math.min(this.NS-1,Math.ceil((r.t[k]+O.granule_s+420-this.T0)/Bt));let V=-2,ee=q;for(let I=q;I<=Y;I++){const K=Q[I*3]*E.x+Q[I*3+1]*E.y+Q[I*3+2]*E.z;K>V&&(V=K,ee=I)}const te=this.T0+ee*Bt;this.TOBS[k]=te-a,this.NADIR[k]=Math.acos(Math.min(1,V))*gt,B++,this.NADIR[k]<=this.swathHalf(L,this.altAt(U,te))*gt+100&&F++,this.subpoint(U,te+Bt,N),this.subpoint(U,te-Bt,y),S.subVectors(N,y),S.addScaledVector(E,-S.dot(E)).normalize(),T.crossVectors(E,S).normalize(),O.system===2&&(m[k]=O.pixel_km,v[k]=O.pixel_km)}this.ALONG[k*3]=S.x,this.ALONG[k*3+1]=S.y,this.ALONG[k*3+2]=S.z,this.CROSS[k*3]=T.x,this.CROSS[k*3+1]=T.y,this.CROSS[k*3+2]=T.z}this.validPct=B?100*F/B:100}const g=Math.ceil(this.span/this.binSize)+1;this.bins=[0,1,2,3].map(()=>new Float32Array(g));for(let E=0;E<s;E++){const S=Math.floor(this.TOBS[E]/this.binSize);S>=0&&S<g&&this.bins[o[r.sat[E]].system][S]++}nt.enabled=!1,this.renderer=new Hl({antialias:!0}),this.renderer.outputColorSpace=fn,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.domElement.className="fm-globe-canvas",e.appendChild(this.renderer.domElement),this.labels=document.createElement("div"),this.labels.className="fm-globe-labels",e.appendChild(this.labels),this.camera=new Zt(40,1,.001,300),this.camera.position.copy(un(20,30,3.6)),this.controls=new cg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.minDistance=1.002,this.controls.maxDistance=25,this.controls.rotateSpeed=.5;{const E=new Mt,S=[];for(let T=0;T<3e3;T++){const N=new z().randomDirection().multiplyScalar(120+Math.random()*60);S.push(N.x,N.y,N.z)}E.setAttribute("position",new At(S,3)),this.scene.add(new tg(E,new kl({color:7829367,size:.25})))}this.earthU={dayTex:{value:null},nightTex:{value:null},hasTex:{value:0},sunDir:{value:new z(1,0,0)}},this.earth=new Pt(new zr(1,192,96),new Qt({uniforms:this.earthU,vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D dayTex, nightTex; uniform float hasTex; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){
            float d = dot(normalize(vN), sunDir), k = smoothstep(-0.10, 0.10, d);
            vec3 day = hasTex > 0.5 ? texture2D(dayTex, vUv).rgb : vec3(0.12,0.2,0.3);
            vec3 night = hasTex > 0.5 ? texture2D(nightTex, vUv).rgb * 0.9 + day * 0.07 : vec3(0.02);
            gl_FragColor = vec4(mix(night, day * (0.75 + 0.25 * max(d, 0.)), k), 1.);
          }`})),this.scene.add(this.earth);const p=new Vl;Promise.all(["earth-blue-marble.jpg","earth-night.jpg"].map(E=>new Promise((S,T)=>p.load(`https://unpkg.com/three-globe@2.31.0/example/img/${E}`,S,void 0,T)))).then(([E,S])=>{this.disposed||(this.earthU.dayTex.value=E,this.earthU.nightTex.value=S,this.earthU.hasTex.value=1)}).catch(()=>{}),this.scene.add(new Pt(new zr(1.015,64,32),new Qt({transparent:!0,depthWrite:!1,side:It,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-abs(dot(vN,vV)),3.); gl_FragColor=vec4(0.55,0.65,0.8,f*0.5); }"}))),this.tiles=new Dg(this.scene,this.renderer,this.earthU.sunDir),this.satOn=o.map(()=>!0),this.fireU={uTime:{value:0},uWindow:{value:1e9},uGeoWin:{value:900},uMinConf:{value:0},uPx:{value:800},uMinPx:{value:2.5*this.renderer.getPixelRatio()},uDpr:{value:this.renderer.getPixelRatio()},uMask:{value:new Array(16).fill(1)},uSysCol:{value:Li.map(E=>new tt(E))}},this.buildFires();const u=150,M=13,_=128;this.satObjs=this.orbit.map((E,S)=>{const T=o[E.sats[0]],N=new tt(Li[T.system]??"#ffffff"),y=T.system===3,A=new Yn,F=new ji({color:14211288});A.add(new Pt(new ii(.6,.6,1),F)),A.add(new Pt(new ii(2.6,.05,.7),new ji({color:N}))),this.scene.add(A);const B={oi:S,geo:y,sats:E.sats,grp:A,on:!0,label:document.createElement("div")};if(y){const k=new Mt;k.setAttribute("position",new Tt(new Float32Array(_*3),3)),B.disk=new eg(k,new ng({color:N,dashSize:.03,gapSize:.02,transparent:!0,opacity:.8})),B.disk.frustumCulled=!1,this.scene.add(B.disk)}else{const k=new Mt;k.setAttribute("position",new Tt(new Float32Array(u*M*3),3)),k.setAttribute("aA",new Tt(new Float32Array(u*M),1));const L=[];for(let O=0;O<u-1;O++)for(let U=0;U<M-1;U++){const Q=O*M+U,q=Q+M;L.push(Q,Q+1,q,Q+1,q+1,q)}k.setIndex(L),B.swath=new Pt(k,new Qt({uniforms:{c:{value:N}},transparent:!0,depthWrite:!1,side:qt,vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying float vA; void main(){ gl_FragColor=vec4(c, vA); }"})),B.swath.renderOrder=1,B.swath.frustumCulled=!1,this.scene.add(B.swath)}return B.label.className="fm-globe-label",B.label.style.color=Li[T.system]??"#fff",B.label.textContent=`${E.sats.map(k=>o[k].symbol).join(" ")} ${T.name.replace(" FRP","")}`,this.labels.appendChild(B.label),B}),this.SW_N=u,this.SW_W=M,this.GEO_N=_,this.boxLine=new ea(new Mt,new Or({color:16777215,transparent:!0,opacity:.95})),this.boxLine.renderOrder=8,this.boxLine.frustumCulled=!1,this.scene.add(this.boxLine),this.ring=new Pt(new ta(.8,1,40),new ji({color:16777215,side:qt,transparent:!0,opacity:.9,depthTest:!1})),this.ring.renderOrder=6,this.footprints=new Qm(new Mt,new Or({color:16777215,transparent:!0,opacity:.8})),this.footprints.renderOrder=5,this.footprints.frustumCulled=!1,this.selGroup.add(this.ring,this.footprints),this.selGroup.visible=!1,this.scene.add(this.selGroup);const R=this.renderer.domElement;R.addEventListener("pointerdown",this.onDown),R.addEventListener("pointerup",this.onUp),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.raf=requestAnimationFrame(this.frame)}oiOf;scan;track;SW_N;SW_W;GEO_N;subpoint(e,t,i=new z){const r=this.orbit[e];let s=(t-this.T0)/Bt;s=Math.max(0,Math.min(this.NS-1.001,s));const o=Math.floor(s),a=s-o,l=o*3;return i.set(r.u[l]+(r.u[l+3]-r.u[l])*a,r.u[l+1]+(r.u[l+4]-r.u[l+1])*a,r.u[l+2]+(r.u[l+5]-r.u[l+2])*a).normalize()}altAt(e,t){return this.orbit[e].alt[Math.max(0,Math.min(this.NS-1,Math.round((t-this.T0)/Bt)))]}satPos(e,t,i=new z){return this.subpoint(e,t,i).multiplyScalar(1+this.altAt(e,t)/gt)}swathHalf(e,t){const i=this.D.sats[e].scan_deg*ft,r=(gt+t)/gt*Math.sin(i);return r>=1?Math.acos(gt/(gt+t)):Math.asin(r)-i}buildFires(){const e=this.D.cols,t=this.D.sats,i=this.count,r=new ag;r.setAttribute("position",new Tt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=i;const s=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),h=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i),m=[1,2,3,0],v=Array.from({length:i},(u,M)=>M).sort((u,M)=>m[t[e.sat[u]].system]-m[t[e.sat[M]].system]||u-M);for(let u=0;u<i;u++){const M=v[u],_=t[e.sat[M]],R=this.scan[M]/2/gt,E=this.track[M]/2/gt;for(let S=0;S<3;S++)s[u*3+S]=this.FU[M*3+S]*Cg,o[u*3+S]=this.CROSS[M*3+S]*R,a[u*3+S]=this.ALONG[M*3+S]*E;l[u]=this.TOBS[M],c[u]=e.sat[M],h[u]=_.system,d[u]=_.pattern,f[u]=e.conf[M]}const g=(u,M)=>new Jm(u,M);r.setAttribute("iC",g(s,3)),r.setAttribute("iX",g(o,3)),r.setAttribute("iY",g(a,3)),r.setAttribute("aT",g(l,1)),r.setAttribute("aSat",g(c,1)),r.setAttribute("aSys",g(h,1)),r.setAttribute("aPat",g(d,1)),r.setAttribute("aConf",g(f,1));const p=new Pt(r,new Qt({uniforms:this.fireU,transparent:!0,depthWrite:!1,side:qt,vertexShader:`
          attribute vec3 iC, iX, iY;
          attribute float aT, aSat, aSys, aPat, aConf;
          uniform float uTime, uWindow, uGeoWin, uMinConf, uPx, uMinPx; uniform float uMask[16]; uniform vec3 uSysCol[4];
          varying vec3 vCol; varying float vFlash, vPx, vSys, vPat; varying vec2 vUv;
          void main(){
            float age = uTime - aT;
            float win = aSys > 2.5 ? min(uWindow, uGeoWin) : uWindow;
            if (age < 0.0 || age > win || uMask[int(aSat + 0.5)] < 0.5 || aConf < uMinConf - 0.5) { gl_Position = vec4(2.,2.,2.,1.); return; }
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
          }`}));p.frustumCulled=!1,p.renderOrder=2,this.scene.add(p)}setPlaying(e){e&&this.simT>=this.span&&(this.simT=-600),this.playing=e}setSpeed(e){this.speed=e}setTime(e){this.simT=Math.max(-600,Math.min(this.span,e))}setWindow(e){this.fireU.uWindow.value=e}setSystemVisible(e,t){const i=this.fireU.uMask.value;this.D.sats.forEach((r,s)=>{r.system===e&&(i[s]=t?1:0,this.satOn[s]=t)});for(const r of this.satObjs)r.on=r.sats.some(s=>this.satOn[s])}setDrawing(e){this.drawing=e?1:0,this.p1=null,this.renderer.domElement.style.cursor=e?"crosshair":""}setBox(e){if(!e){this.boxLine.visible=!1;return}const[t,i,r,s]=e,o=[],a=60;for(let l=0;l<=a;l++)o.push(un(i,t+(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(un(i+(s-i)*l/a,r,1.0004));for(let l=0;l<=a;l++)o.push(un(s,r-(r-t)*l/a,1.0004));for(let l=0;l<=a;l++)o.push(un(s-(s-i)*l/a,t,1.0004));this.boxLine.geometry.setFromPoints(o),this.boxLine.visible=!0}flyToBox(e){const[t,i,r,s]=e,o=Math.max(r-t,s-i);this.flyTo=un((i+s)/2,(t+r)/2,1+Math.min(2,Math.max(.02,o/60)))}flyHome(){this.flyTo=this.camera.position.clone().normalize().multiplyScalar(3.6)}zoomToSelection(){this.selGroup.visible&&(this.flyTo=this.ring.position.clone().normalize().multiplyScalar(1.003))}clearSelection(){this.selGroup.visible=!1}onDown=e=>{this.downXY=[e.clientX,e.clientY]};onUp=e=>{if(!this.downXY||Math.hypot(e.clientX-this.downXY[0],e.clientY-this.downXY[1])>5)return;const t=this.renderer.domElement.getBoundingClientRect(),i=new Ke((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new og;r.setFromCamera(i,this.camera);const s=r.intersectObject(this.earth)[0];if(this.drawing){if(!s)return;const[o,a]=Pg(s.point);if(this.drawing===1)this.p1=[a,o],this.drawing=2,this.cb.onBoxPoint(1,null);else if(this.p1){const l=[Math.min(this.p1[0],a),Math.min(this.p1[1],o),Math.max(this.p1[0],a),Math.max(this.p1[1],o)].map(c=>Math.round(c*100)/100);this.setDrawing(!1),this.setBox(l),this.cb.onBoxPoint(2,l)}return}if(!s){this.select(-1);return}this.select(this.nearest(s.point.clone().normalize()))};isVisible(e){const t=this.D.cols,i=this.simT-this.TOBS[e],s=this.D.sats[t.sat[e]].system===3?Math.min(this.fireU.uWindow.value,this.fireU.uGeoWin.value):this.fireU.uWindow.value;return i>=0&&i<=s&&this.satOn[t.sat[e]]}nearest(e){const t=this.fireU.uPx.value/this.camera.position.distanceTo(e),i=Math.cos(Math.max(8/gt,14*this.renderer.getPixelRatio()/t));let r=-1,s=1/0;const o=this.FU;for(let a=0;a<this.count;a++){const l=o[a*3]*e.x+o[a*3+1]*e.y+o[a*3+2]*e.z;if(l<i||!this.isVisible(a))continue;const c=this.scan[a]/2/gt,h=this.track[a]/2/gt,d=Math.max(1,this.fireU.uMinPx.value/(2*Math.max(c,h)*t)),f=e.x-o[a*3],m=e.y-o[a*3+1],v=e.z-o[a*3+2],g=(f*this.CROSS[a*3]+m*this.CROSS[a*3+1]+v*this.CROSS[a*3+2])/(c*d),p=(f*this.ALONG[a*3]+m*this.ALONG[a*3+1]+v*this.ALONG[a*3+2])/(h*d),u=Math.max(Math.abs(g),Math.abs(p)),M=u<=1?u:10+Math.acos(Math.min(1,l))*t;M<s&&(s=M,r=a)}return r}footprintSegs(e,t){const i=new z(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]),r=new z(this.CROSS[e*3],this.CROSS[e*3+1],this.CROSS[e*3+2]),s=new z(this.ALONG[e*3],this.ALONG[e*3+1],this.ALONG[e*3+2]),o=this.scan[e]/2/gt*1.08,a=this.track[e]/2/gt*1.08,l=(h,d)=>i.clone().addScaledVector(r,h*o).addScaledVector(s,d*a).normalize().multiplyScalar(1.00006),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];for(let h=0;h<4;h++){const d=c[h],f=c[(h+1)%4];t.push(d.x,d.y,d.z,f.x,f.y,f.z)}}select(e){if(e<0){this.selGroup.visible=!1,this.cb.onPick(null);return}const t=this.D.cols,i=this.D.sats,r=t.sat[e],s=i[r],o=this.oiOf[r],a=this.TOBS[e]+this.tMin,l=s.system===3,c=new z(this.FU[e*3],this.FU[e*3+1],this.FU[e*3+2]);this.ring.position.copy(c).multiplyScalar(1.00007),this.ring.lookAt(c.clone().multiplyScalar(2)),this.selGroup.visible=!0;const h=this.satPos(o,a),d=Math.acos(h.clone().sub(c).normalize().dot(c))/ft,f=[],m=[],v=new Map,g=Math.max(1.5,this.scan[e],this.track[e]),p=Math.cos(25/gt),u=Math.cos(g/gt);for(let M=0;M<this.count;M++){const _=this.FU[M*3]*c.x+this.FU[M*3+1]*c.y+this.FU[M*3+2]*c.z;if(_<p)continue;t.sat[M]===r&&Math.abs(this.TOBS[M]-this.TOBS[e])<(l?1:900)?(f.push(M),this.footprintSegs(M,m)):_>=u&&v.set(t.sat[M],(v.get(t.sat[M])??0)+1)}this.footprints.geometry.setAttribute("position",new At(m,3)),this.footprints.geometry.computeBoundingSphere(),this.cb.onPick({index:e,sat:s,lat:t.lat[e],lon:t.lon[e],time:t.t[e],frp:t.frp[e],conf:t.conf[e],confRaw:t.craw[e],dayNight:t.dn[e]?"N":"D",scanKm:this.scan[e],trackKm:this.track[e],growth:Math.sqrt(this.scan[e]*this.track[e])/s.pixel_km,b4:t.b4?.[e]??null,b5:t.b5?.[e]??null,version:t.ver&&this.D.versions?this.D.versions[t.ver[e]]??null:null,altitudeKm:this.altAt(o,a),nadirKm:this.NADIR[e],viewZenith:d,samePass:f.length,samePassFrp:f.reduce((M,_)=>M+(t.frp[_]??0),0),others:[...v].sort((M,_)=>_[1]-M[1]).map(([M,_])=>({sat:i[M],count:_}))})}visibleBySystem(){const e=[0,0,0,0],t=this.D.cols;for(let i=0;i<this.count;i++)this.isVisible(i)&&e[this.D.sats[t.sat[i]].system]++;return e}resize(){const e=this.view.clientWidth,t=this.view.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fireU.uPx.value=t*this.renderer.getPixelRatio()/(2*Math.tan(this.camera.fov*ft/2)))}updateSats(e){const t=new z,i=new z,r=new z,s=new z,o=new z,a=new z,l=new mt;for(const c of this.satObjs){const h=c.sats[0],d=c.oi;this.satPos(d,e,t),c.grp.visible=c.on,c.grp.position.copy(t),i.copy(t).normalize();const f=this.subpoint(d,e+Bt,r).sub(this.subpoint(d,e-Bt,s));f.addScaledVector(i,-f.dot(i)),f.lengthSq()<1e-14&&f.set(0,1,0).addScaledVector(i,-i.y),f.normalize(),l.makeBasis(o.crossVectors(i,f),i,f),c.grp.quaternion.setFromRotationMatrix(l),c.grp.scale.setScalar(Math.max(.004,this.camera.position.distanceTo(t)*.011));const m=this.altAt(d,e);if(c.swath){if(c.swath.visible=c.on,c.on){const v=c.swath.geometry.attributes.position.array,g=c.swath.geometry.attributes.aA.array,p=this.swathHalf(h,m),u=new z;for(let M=0;M<this.SW_N;M++){const _=e-M*Bt;this.subpoint(d,_,u),this.subpoint(d,_+Bt,r),this.subpoint(d,_-Bt,s),s.subVectors(r,s).normalize(),o.crossVectors(u,s).normalize();const R=.32*Math.pow(1-M/this.SW_N,1.4);for(let E=0;E<this.SW_W;E++){const S=p*(2*E/(this.SW_W-1)-1);a.copy(u).multiplyScalar(Math.cos(S)).addScaledVector(o,Math.sin(S)).normalize().multiplyScalar(1.002);const T=M*this.SW_W+E;v[T*3]=a.x,v[T*3+1]=a.y,v[T*3+2]=a.z,g[T]=E===0||E===this.SW_W-1?Math.min(1,R*1.8):R}}c.swath.geometry.attributes.position.needsUpdate=!0,c.swath.geometry.attributes.aA.needsUpdate=!0}}else if(c.disk){const v=this.subpoint(d,e,new z),g=this.swathHalf(h,m),p=new z(0,1,0).addScaledVector(v,-v.y).normalize(),u=new z().crossVectors(v,p);c.disk.visible=c.on;const M=c.disk.geometry.attributes.position.array;for(let _=0;_<this.GEO_N;_++){const R=_/this.GEO_N*Math.PI*2;a.copy(v).multiplyScalar(Math.cos(g)).addScaledVector(p,Math.sin(g)*Math.cos(R)).addScaledVector(u,Math.sin(g)*Math.sin(R)).multiplyScalar(1.002),M[_*3]=a.x,M[_*3+1]=a.y,M[_*3+2]=a.z}c.disk.geometry.attributes.position.needsUpdate=!0,c.disk.computeLineDistances()}}}sunDir(e,t){const i=new Date(e*1e3),r=e/86400-10957.5,s=(357.529+.98560028*r)*ft,a=(280.459+.98564736*r+1.915*Math.sin(s)+.02*Math.sin(2*s))*ft,l=(23.439-36e-8*r)*ft,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),h=Math.asin(Math.sin(l)*Math.sin(a));let d=(c-Ws(i))/ft;return d=(d+540)%360-180,un(h/ft,d,1,t)}frame=e=>{if(this.disposed)return;const t=Math.min(.1,(e-this.last)/1e3);this.last=e,this.playing&&(this.setTime(this.simT+t*this.speed),this.simT>=this.span&&(this.playing=!1));const i=this.tMin+this.simT;if(this.fireU.uTime.value=this.simT,this.sunDir(i,this.earthU.sunDir.value),this.updateSats(i),this.flyTo){const d=this.camera.position.length(),f=this.flyTo.clone().normalize(),m=this.camera.position.clone().divideScalar(d).lerp(f,.08);m.lengthSq()<1e-6&&m.set(0,1,0),this.camera.position.copy(m.normalize().multiplyScalar(d+(this.flyTo.length()-d)*.08)),this.camera.position.distanceTo(this.flyTo)<(this.flyTo.length()-1)*.02&&(this.flyTo=null)}this.controls.update();const r=this.camera.position.length()-1,s=Math.max(3e-5,r*.3);Math.abs(s-this.camera.near)/this.camera.near>.05&&(this.camera.near=s,this.camera.updateProjectionMatrix()),this.controls.zoomSpeed=r<.05?.5:1,this.selGroup.visible&&this.ring.scale.setScalar(Math.max(r*.012,4e-5)),this.tiles.update(this.camera,this.view.clientWidth,this.view.clientHeight);const o=this.view.clientWidth,a=this.view.clientHeight,l=this.camera.position,c=new z,h=new z;for(const d of this.satObjs){if(!d.on){d.label.style.display="none";continue}const f=d.grp.position;c.subVectors(f,l);const m=c.length();c.divideScalar(m);const v=l.dot(c),g=v*v-(l.lengthSq()-1),p=-v-Math.sqrt(Math.max(g,0));h.copy(f).project(this.camera);const u=g>0&&p>0&&p<m||h.z>1;d.label.style.display=u?"none":"",u||(d.label.style.transform=`translate(${(h.x+1)/2*o+10}px, ${(1-h.y)/2*a-8}px)`)}this.renderer.render(this.scene,this.camera),e-this.lastTick>120&&(this.lastTick=e,this.cb.onTick(this.simT,this.playing)),this.raf=requestAnimationFrame(this.frame)};dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),this.renderer.domElement.removeEventListener("pointerdown",this.onDown),this.renderer.domElement.removeEventListener("pointerup",this.onUp),this.controls.dispose(),this.tiles.dispose(),this.scene.traverse(e=>{const t=e;t.geometry?.dispose?.();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i?.dispose?.()}),this.renderer.dispose(),this.renderer.domElement.remove(),this.labels.remove()}}class Dg{constructor(e,t,i){this.sunDir=i,e.add(this.group),this.loader.setCrossOrigin("anonymous"),this.aniso=t.capabilities.getMaxAnisotropy()}sunDir;group=new Yn;cache=new Map;queue=[];frame=0;loading=0;loader=new Vl;aniso;dead=!1;url(e,t,i){return`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${e}/${i}/${t}`}mesh(e,t){const i=(d,f)=>Math.atan(Math.sinh(Math.PI*(1-2*f/2**d)))/ft,r=2**e.z,s=Math.max(6,Math.min(64,Math.ceil(360/r/.15))),o=new Float32Array((s+1)*(s+1)*3),a=new Float32Array((s+1)*(s+1)*2),l=[],c=new z;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){const m=d*(s+1)+f;un(i(e.z,e.y+d/s),(e.x+f/s)/r*360-180,e.r,c),o[m*3]=c.x,o[m*3+1]=c.y,o[m*3+2]=c.z,a[m*2]=f/s,a[m*2+1]=1-d/s,f<s&&d<s&&l.push(m,m+s+1,m+1,m+1,m+s+1,m+s+2)}const h=new Mt;return h.setAttribute("position",new Tt(o,3)),h.setAttribute("uv",new Tt(a,2)),h.setIndex(l),h.computeBoundingSphere(),new Pt(h,new Qt({uniforms:{map:{value:t},sunDir:this.sunDir},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
          void main(){ vec3 c = texture2D(map, vUv).rgb; float k = smoothstep(-0.10, 0.10, dot(vN, sunDir)); gl_FragColor = vec4(c * mix(0.3, 1., k), 1.); }`,side:qt}))}need(e,t,i,r){const s=`${e}/${t}/${i}`;let o=this.cache.get(s);o||(o={key:s,z:e,x:t,y:i,r,state:"queued",mesh:null,used:this.frame},this.cache.set(s,o),this.queue.push(o)),o.used=this.frame}pump(){for(;this.loading<8&&this.queue.length;){const e=this.queue.pop();if(this.frame-e.used>20){this.cache.delete(e.key);continue}this.loading++,e.state="loading",this.loader.load(this.url(e.z,e.x,e.y),t=>{if(this.loading--,t.anisotropy=this.aniso,this.dead||!this.cache.has(e.key)){t.dispose();return}e.mesh=this.mesh(e,t),e.state="ready",this.group.add(e.mesh)},void 0,()=>{this.loading--,e.state="error"})}}update(e,t,i){this.frame++;const r=e.position.length()-1,s=e.position.clone().normalize(),o=Math.asin(s.y)/ft,a=Math.atan2(s.z,-s.x)/ft-180,l=2*r*gt*Math.tan(e.fov*ft/2)/Math.max(1,i),c=Math.max(.05,Math.cos(o*ft)),h=Math.min(18,Math.round(Math.log2(40075*c/(256*l))+.4));if(h>=5){const d=(f,m,v)=>{const g=2**f,p=(a+180)/360*g,u=(1-Math.log(Math.tan(o*ft)+1/Math.cos(o*ft))/Math.PI)/2*g;for(let M=-m;M<=m;M++)for(let _=-m;_<=m;_++){const R=Math.floor(u)+M;R>=0&&R<g&&this.need(f,((Math.floor(p)+_)%g+g)%g,R,v)}};h-3>=5&&d(h-3,1,1.000012),d(h,Math.min(5,Math.ceil(Math.max(t,i)*l/(40075*c/2**h)/2)+1),1.00002)}for(const d of this.cache.values())d.mesh&&(d.mesh.visible=d.used===this.frame);if(this.pump(),this.cache.size>350){const d=[...this.cache.values()].filter(f=>f.used!==this.frame&&f.state!=="loading").sort((f,m)=>f.used-m.used);for(const f of d.slice(0,this.cache.size-300)){if(f.mesh){this.group.remove(f.mesh),f.mesh.geometry.dispose();const v=f.mesh.material;v.uniforms.map.value.dispose(),v.dispose()}this.cache.delete(f.key);const m=this.queue.indexOf(f);m>=0&&this.queue.splice(m,1)}}}dispose(){this.dead=!0;for(const e of this.cache.values()){if(!e.mesh)continue;e.mesh.geometry.dispose();const t=e.mesh.material;t.uniforms.map.value.dispose(),t.dispose()}this.cache.clear()}}const ql=.55;function Ug(n,e,t){const i=t.row*ql;if(n>i&&t.fullLeading&&t.leading)return{offset:t.row,commit:"leading"};if(n<-i&&t.fullTrailing&&t.trailing)return{offset:-t.row,commit:"trailing"};const r=nc(n,e,.99);return r>t.leading/2&&t.leading&&n>0?{offset:t.leading,commit:null}:r<-t.trailing/2&&t.trailing&&n<0?{offset:-t.trailing,commit:null}:{offset:0,commit:null}}function Ig(n,e){const t=e.row*ql;return n>t&&e.fullLeading&&e.leading>0||n<-t&&e.fullTrailing&&e.trailing>0}function Ng(n,e,t){const i=[];let r=0;for(const a of n)i.push(r),r+=a;const s=i[e]+n[e]/2+t;let o=e;for(let a=e+1;a<n.length;a++)s>i[a]+n[a]/2&&(o=a);for(let a=e-1;a>=0;a--)s<i[a]+n[a]/2&&(o=a);return o}function Fg(n,e,t){return n.map((i,r)=>r===e?0:e<t&&r>e&&r<=t?-n[e]:t<e&&r>=t&&r<e?n[e]:0)}function Og(n,e,t){let i=0;if(t>e)for(let r=e+1;r<=t;r++)i+=n[r];else for(let r=t;r<e;r++)i-=n[r];return i}const jl=Fe.createContext({enabled:!1});function Ts({header:n,footer:e,children:t,className:i,label:r,onReorder:s}){const o=Fe.useId(),a=Fe.useRef(null),l=Fe.useRef(null),[c,h]=Fe.useState(""),d=Fe.useRef(s);d.current=s,Fe.useLayoutEffect(()=>{if(!l.current)return;const g=l.current;l.current=null,ic(g,{spring:Zn.snappy})});const f=()=>a.current?Array.from(a.current.children):[],m=(g,p)=>{l.current=ac(f()),d.current?.(g,p),h(`Moved to position ${p+1} of ${f().length}.`)};Fe.useEffect(()=>{const g=a.current;if(!g||!s)return;let p=null,u=null;const M=(E,S,T)=>{E.style.transform=T?`translate3d(0, ${S}px, 0) scale(1.02)`:`translate3d(0, ${S}px, 0)`},_=()=>{const E=p;if(!E)return;const S=(E.scroller?.scrollTop??0)-E.scrollStart,T=oc(E.dy+S,E.bounds[0],E.bounds[1],200);E.offsets[E.from].set(T);const N=Ng(E.heights,E.from,T);N!==E.to&&(E.to=N,Fg(E.heights,E.from,N).forEach((y,A)=>{A!==E.from&&E.offsets[A].animateTo(y,{spring:Zn.snappy})}))},R=()=>{const E=p;if(!E||(E.frame=requestAnimationFrame(R),!E.scroller))return;const S=E.scroller.getBoundingClientRect(),T=64,N=E.pointerY<S.top+T?-((S.top+T-E.pointerY)/T)*14:E.pointerY>S.bottom-T?(E.pointerY-(S.bottom-T))/T*14:0;N&&(E.scroller.scrollTop+=N,_())};return $o(g,()=>({axis:"y",threshold:2,canBegin:({target:E})=>(u=E?.closest("[data-lab-reorder-handle]")??null,!!u),onStart:({originY:E})=>{const S=f(),T=S.findIndex(B=>!!u&&B.contains(u));if(T<0)return;const N=S.map(B=>B.getBoundingClientRect().height);let y=g.parentElement;for(;y&&!/(auto|scroll)/.test(getComputedStyle(y).overflowY);)y=y.parentElement;const A=N.slice(0,T).reduce((B,k)=>B+k,0),F=N.slice(T+1).reduce((B,k)=>B+k,0);p={from:T,to:T,heights:N,nodes:S,offsets:S.map((B,k)=>{const L=new Zo(0,.25);return L.subscribe(O=>M(B,O,k===T)),L}),scroller:y,scrollStart:y?.scrollTop??0,dy:0,bounds:[-A,F],frame:0,pointerY:E},S[T].dataset.lifted="",g.dataset.reordering="",M(S[T],0,!0),p.frame=requestAnimationFrame(R)},onMove:({dy:E,originY:S})=>{p&&(p.dy=E,p.pointerY=S+E,_())},onEnd:()=>{const E=p;if(p=null,!E)return;cancelAnimationFrame(E.frame);const S=()=>{delete E.nodes[E.from].dataset.lifted,delete g.dataset.reordering,E.offsets.forEach(N=>N.stop()),E.to!==E.from&&m(E.from,E.to),E.nodes.forEach(N=>{E.to===E.from&&(N.style.transform="")})},T=Og(E.heights,E.from,E.to);E.offsets[E.from].animateTo(T,{spring:Zn.release}).then(N=>N&&S())}}))},[!!s]);const v=g=>{const p=g.target.closest("[data-lab-reorder-handle]");if(!p||!s||g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;const u=f(),M=u.findIndex(R=>R.contains(p)),_=M+(g.key==="ArrowUp"?-1:1);M<0||_<0||_>=u.length||(g.preventDefault(),m(M,_))};return J.jsxs("section",{className:js("lab-list-section",i),"aria-labelledby":n?o:void 0,"aria-label":n?void 0:r,children:[n&&J.jsx("h3",{id:o,className:"lab-list-header",children:n}),J.jsx(jl.Provider,{value:{enabled:!!s},children:J.jsx("div",{ref:a,className:"lab-list-card",role:"list",onKeyDown:s?v:void 0,children:t})}),e&&J.jsx("p",{className:"lab-list-footer",children:e}),s&&J.jsx("span",{className:"lab-sr-only",role:"status",children:c})]})}const As=76;let Wi=null;const Cr=Fe.forwardRef(function({title:e,subtitle:t,leading:i,trailing:r,chevron:s,selected:o,asChild:a,static:l,leadingActions:c,trailingActions:h,fullSwipe:d=!0,reorderLabel:f,className:m,children:v,...g},p){const u=Fe.useContext(jl),M=Fe.useRef(null),_=!!(c?.length||h?.length),[R,E]=Fe.useState(null),[S,T]=Fe.useState(null),N=Fe.useRef(null);N.current||(N.current=new Zo(0,.25));const y=Fe.useRef({leadingActions:c,trailingActions:h,fullSwipe:d});y.current={leadingActions:c,trailingActions:h,fullSwipe:d};const A=()=>!!M.current&&getComputedStyle(M.current).direction==="rtl",F=()=>({leading:(y.current.leadingActions?.length??0)*As,trailing:(y.current.trailingActions?.length??0)*As,row:M.current?.clientWidth??360,fullLeading:y.current.fullSwipe,fullTrailing:y.current.fullSwipe});Fe.useLayoutEffect(()=>{if(_)return N.current.subscribe(V=>{const ee=M.current;if(!ee)return;ee.style.setProperty("--lab-row-swipe",`${Math.abs(V)}px`);const te=ee.querySelector(":scope > .lab-list-row");te&&(te.style.transform=V?`translate3d(${A()?-V:V}px, 0, 0)`:""),ee.dataset.swiping=V>.5?"leading":V<-.5?"trailing":"";const I=Ig(V,F());T(I?V>0?"leading":"trailing":null)})},[_]);const B=(V,ee)=>N.current.animateTo(V,{spring:Zn.release,velocity:ee}),k=Fe.useCallback(()=>{E(null),B(0)},[]),L=V=>{k(),V.onAction()};Fe.useEffect(()=>{const V=M.current;if(!V||!_)return;let ee=0;return $o(V,()=>({axis:"x",threshold:8,canBegin:({target:te})=>!te?.closest(".lab-list-actions, [data-lab-reorder-handle]"),onStart:()=>{Wi&&Wi!==k&&Wi(),N.current.stop(),ee=N.current.get()},onMove:({dx:te,time:I})=>{const K=F(),$=ee+(A()?-te:te),ie=K.leading?K.row:0,pe=K.trailing?-K.row:0;N.current.track($>ie?ie+ra($-ie,120):$<pe?pe+ra($-pe,120):$,I)},onEnd:({time:te,cancelled:I})=>{const K=N.current.getVelocity(te),$=I?{offset:0,commit:null}:Ug(N.current.get(),K,F()),ie=y.current;if($.commit){const pe=($.commit==="leading"?ie.leadingActions:ie.trailingActions)[0];B($.offset,K).then(()=>{pe.onAction(),M.current?.isConnected&&B(0)}),E(null);return}E($.offset>0?"leading":$.offset<0?"trailing":null),Wi=$.offset?k:null,B($.offset,K)}}))},[_,k]);const O=V=>{if(g.onKeyDown?.(V),!_||V.defaultPrevented)return;const ee=V.key===(A()?"ArrowLeft":"ArrowRight"),I=V.key===(A()?"ArrowRight":"ArrowLeft")&&h?.length?"trailing":ee&&c?.length?"leading":null;if(!I)return;V.preventDefault();const K=(I==="leading"?c.length:h.length)*As;E(I),Wi=k,M.current&&(M.current.dataset.swiping=I),B(I==="leading"?K:-K),requestAnimationFrame(()=>M.current?.querySelector(`.lab-list-actions[data-side="${I}"] button`)?.focus())},U=J.jsxs(J.Fragment,{children:[i&&J.jsx(rc,{className:"lab-list-row-leading",children:i}),J.jsxs("span",{className:"lab-list-row-text",children:[J.jsx("span",{className:"lab-list-row-title",children:e}),t&&J.jsx("span",{className:"lab-list-row-subtitle",children:t})]}),r&&J.jsx("span",{className:"lab-list-row-trailing",children:r}),s&&J.jsx(Ac,{className:"lab-list-row-chevron lab-dir-flip","aria-hidden":"true"})]}),Q={className:js("lab-list-row",m),"data-selected":o||void 0},q=(V,ee)=>ee?.length?J.jsx("div",{className:"lab-list-actions","data-side":V,"data-full":S===V||void 0,"aria-hidden":R!==V||void 0,children:ee.map(te=>J.jsxs("button",{type:"button",className:"lab-list-action","data-tone":te.tone??"neutral",tabIndex:R===V?0:-1,onClick:()=>L(te),onKeyDown:I=>{I.key==="Escape"&&(k(),M.current?.querySelector(":scope > .lab-list-row")?.focus())},children:[te.icon,J.jsx("span",{children:te.label})]},te.label))}):null,Y=typeof e=="string"?e:void 0;return J.jsxs("div",{ref:M,role:"listitem",className:"lab-list-item","data-leading":i?"":void 0,"data-swipe":_||void 0,"data-reorder":u.enabled||void 0,children:[q("leading",c),q("trailing",h),l?J.jsx("div",{...Q,"data-static":"",children:U}):a?J.jsx(sc,{...Q,...g,"aria-current":o?"true":void 0,onKeyDown:O,children:Fe.isValidElement(v)?Fe.cloneElement(v,{},U):v}):J.jsx("button",{ref:p,type:"button",...Q,...g,"aria-current":o?"true":void 0,onKeyDown:O,onClickCapture:V=>{R&&(V.preventDefault(),V.stopPropagation(),k())},children:U}),u.enabled&&J.jsx("button",{type:"button",className:"lab-list-grip","data-lab-reorder-handle":"","aria-label":f??(Y?`Reorder ${Y}`:"Reorder"),"aria-description":"Drag, or use the up and down arrow keys.",children:J.jsx(Uc,{"aria-hidden":"true"})})]})}),zg=n=>new Date(n*1e3).toISOString().slice(11,16),Ko=n=>n==null?"–":`${n.toFixed(1)} K ≈ ${(n-273.15).toFixed(0)}°C`;function Bg({record:n,onZoom:e,onGoTo:t}){const i=[Te("m.conf.low"),Te("m.conf.nominalOne"),Te("m.conf.highOne")],r=n.sat.conf==="pct"&&n.confRaw>=0?`${n.confRaw}% → ${i[n.conf]}`:i[n.conf]??"–",s=(o,a,l=!0)=>J.jsx(Cr,{static:!0,title:o,trailing:J.jsx("span",{dir:l?"ltr":void 0,children:a})});return J.jsxs("div",{className:"fm-stack",children:[J.jsxs("p",{className:"fm-note",children:[J.jsxs("span",{style:{color:Li[n.sat.system]},"aria-hidden":!0,children:["■"," "]}),n.sat.instrument," · ",Te("m.globe.observedAt",{time:zg(n.time)})]}),J.jsxs(Ts,{header:Te("m.globe.measured"),children:[s(Te("m.globe.f.position"),`${n.lat.toFixed(4)}, ${n.lon.toFixed(4)}`),s("FRP",n.frp==null?"–":`${sn(n.frp,1)} MW`),s(Te("m.globe.f.conf"),r,!1),s(Te("m.globe.f.dn"),n.dayNight==="N"?Te("m.search.night"):Te("m.search.day"),!1),s(Te("m.globe.f.bright"),Ko(n.b4)),s(Te("m.globe.f.brightBg"),Ko(n.b5)),s(Te("m.globe.f.size"),`${n.scanKm.toFixed(2)} × ${n.trackKm.toFixed(2)} km (×${n.growth.toFixed(1)})`),n.version?s(Te("m.globe.f.version"),n.version):null]}),J.jsxs(Ts,{header:Te("m.globe.geometry"),children:[s(Te("m.globe.f.altitude"),`${sn(n.altitudeKm)} km`),s(Te("m.globe.f.nadir"),`${sn(n.nadirKm)} km`),s(Te("m.globe.f.vza"),`${n.viewZenith.toFixed(0)}°`)]}),J.jsxs(Ts,{header:Te("m.globe.nearby"),footer:Te("m.globe.nearbyHint"),children:[J.jsx(Cr,{static:!0,title:Te("m.globe.samePass",{count:n.samePass}),trailing:J.jsxs("span",{dir:"ltr",children:[sn(n.samePassFrp,1)," MW"]})}),n.others.length?n.others.map(o=>J.jsx(Cr,{static:!0,title:`${o.sat.symbol} ${o.sat.name}`,trailing:`${o.count}×`},o.sat.code)):J.jsx(Cr,{static:!0,title:Te("m.globe.noOthers")})]}),J.jsxs("div",{className:"fm-actions",children:[J.jsxs(Ai,{variant:"tonal",onClick:e,children:[J.jsx(Oc,{"aria-hidden":!0}),Te("m.globe.zoomIn")]}),J.jsxs(Ai,{variant:"text",onClick:t,children:[J.jsx(Dc,{"aria-hidden":!0}),Te("m.globe.goToTime")]})]})]})}function Gg({open:n,onClose:e,bbox:t,date:i,regions:r}){const s=n&&t?`${t.join(",")}|${i??""}`:null,o=Lc(s,h=>ws.live({bbox:t.join(","),date:i},h)),a=o.data,l=t?r.find(h=>t[0]>=h.bbox[0]-.01&&t[1]>=h.bbox[1]-.01&&t[2]<=h.bbox[2]+.01&&t[3]<=h.bbox[3]+.01):null,c=[["ensemble",Te("m.alg.ensemble")],["frp_season",Te("m.alg.frp_season_adaptive")],["ratio_month",Te("m.alg.ratio_month_adaptive")],["ratio",Te("m.alg.ratio")]];return J.jsx(Jo,{open:n,onOpenChange:h=>h?void 0:e(),label:Te("m.live.title"),title:Te("m.live.title"),detents:["medium","large"],regular:"card",cardWidth:420,modal:!1,children:t?o.error&&!a?J.jsx(Qo,{title:Te("m.live.failed"),message:Rs(o.error),onRetry:o.reload}):a?J.jsxs("div",{className:"fm-stack","aria-busy":o.loading||void 0,children:[J.jsxs("p",{className:"fm-note",children:[J.jsx("span",{dir:"ltr",children:tl(t)})," · ",Ls(a.date||i)]}),l?J.jsx(Cs,{tone:"info",icon:J.jsx(ca,{size:16}),children:Te("m.live.inside",{region:l.title})}):null,J.jsxs("section",{className:"fm-stack","aria-label":Te("m.live.perSat"),children:[J.jsx("h3",{className:"fm-subhead",children:Te("m.live.perSat")}),a.satellites.length?J.jsxs(sa,{label:Te("m.live.perSat"),children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx(oi,{children:Te("m.live.satellite")}),J.jsx(oi,{numeric:!0,children:Te("m.live.rows")}),J.jsx(oi,{numeric:!0,children:Te("m.live.cells")})]})}),J.jsx("tbody",{children:a.satellites.map(h=>J.jsxs("tr",{children:[J.jsx(An,{children:J.jsx("span",{dir:"ltr",children:h.name})}),J.jsx(An,{numeric:!0,children:sn(h.rows)}),J.jsx(An,{numeric:!0,children:h.fire_day_cells==null?"–":sn(h.fire_day_cells)})]},h.code))})]}):J.jsx("p",{className:"fm-note",children:Te("m.live.none")})]}),J.jsxs("section",{className:"fm-stack","aria-label":Te("m.live.converted"),children:[J.jsx("h3",{className:"fm-subhead",children:Te("m.live.converted")}),J.jsx("p",{className:"fm-note",children:a.calibration.kind==="region"?Te("m.live.calRegion",{region:a.calibration.title??a.calibration.region??""}):Te("m.live.calGlobal")}),a.conversions.length?J.jsxs(sa,{label:Te("m.live.converted"),children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx(oi,{children:Te("m.live.from")}),J.jsx(oi,{numeric:!0,children:Te("m.live.cells")}),c.map(([h,d])=>J.jsx(oi,{numeric:!0,children:d},h))]})}),J.jsxs("tbody",{children:[a.conversions.map(h=>J.jsxs("tr",{children:[J.jsx(An,{children:J.jsx("span",{dir:"ltr",children:h.name})}),J.jsx(An,{numeric:!0,children:sn(h.cells)}),c.map(([d])=>J.jsx(An,{numeric:!0,"data-best":d==="ensemble"||void 0,children:sn(h[d],1)},d))]},h.code)),J.jsxs("tr",{children:[J.jsx(An,{children:J.jsx("strong",{children:Te("m.live.aquaActual")})}),J.jsx(An,{numeric:!0,colSpan:c.length+1,children:J.jsx("strong",{children:sn(a.aqua.fire_day_cells)})})]})]})]}):J.jsx("p",{className:"fm-note",children:Te("m.live.noViirs")}),J.jsx(Cs,{tone:"warning",icon:J.jsx(ca,{size:16}),children:Te("m.live.aquaNote",{time:a.aqua.overpass_local??"15:15"})})]})]}):J.jsx(el,{label:Te("m.live.loading")}):null})}const Hg=["60","600","3600"];async function kg(n,e,t){for(let i=0;i<200;i++){const r=await fetch(ws.dayUrl(n??void 0),{credentials:"same-origin",signal:e});if(!r.ok&&r.status!==202){let a=`HTTP ${r.status}`;try{a=(await r.json()).error??a}catch{}throw new oa(r.status,a)}const s=await r.json();if(s.cols&&s.sats)return s;const o=typeof s.job=="string"?{id:s.job,status:"queued"}:s.job??{id:"",status:"queued"};if(t(o),o.status==="failed")throw new Error(o.log_tail||Te("m.globe.buildFailed"));if(await new Promise(a=>setTimeout(a,2500)),o.id)try{const a=await ws.job(o.id);if(t(a),a.status==="failed")throw new Error(a.log_tail||Te("m.globe.buildFailed"))}catch(a){if(a instanceof oa&&a.status===404)continue;throw a}}throw new Error(Te("m.globe.buildFailed"))}function Qg(){const{regions:n}=lc(),[e,t]=cc(),i=e.get("date"),r=Pc(e.get("bbox")),[s,o]=Fe.useState({state:"loading"}),[a,l]=Fe.useState(0),c=Fe.useRef(null),h=Fe.useRef(null),[d,f]=Fe.useState(0),[m,v]=Fe.useState(!0),[g,p]=Fe.useState("600"),[u,M]=Fe.useState(0),[_,R]=Fe.useState(null),[E,S]=Fe.useState(!1),[T,N]=Fe.useState([!0,!0,!0,!0]),[y,A]=Fe.useState(!1),[F,B]=Fe.useState(null),[k,L]=Fe.useState(!1),O=Fe.useRef(t);O.current=t,Fe.useEffect(()=>{const I=new AbortController;return o({state:"loading"}),kg(i,I.signal,K=>o({state:"building",job:K})).then(K=>o({state:"ready",data:K})).catch(K=>{I.signal.aborted||o({state:"error",error:Rs(K)})}),()=>I.abort()},[i,a]);const U=Fe.useCallback(I=>R(I),[]);Fe.useLayoutEffect(()=>{if(s.state!=="ready"||!s.data||!c.current)return;let I=!1;const K=window.setTimeout(()=>{if(!(I||!c.current))try{h.current=new Lg(c.current,s.data,{onPick:U,onBoxPoint:($,ie)=>{M($===2?0:2),ie&&(O.current(pe=>{const he=new URLSearchParams(pe);return he.set("bbox",ie.join(",")),he},{replace:!0}),S(!0))},onTick:($,ie)=>{f($),v(ie)}}),L(!0)}catch($){o({state:"error",error:Rs($)})}},30);return()=>{I=!0,window.clearTimeout(K),h.current?.dispose(),h.current=null,L(!1)}},[s,U]);const Q=r?.join(",")??"";Fe.useEffect(()=>{!k||!h.current||(h.current.setBox(r),r&&h.current.flyToBox(r))},[k,Q]);const q=h.current,Y=q?.span??86400,V=q?.tMin??0,ee=q?new Date((V+d)*1e3).toISOString().slice(11,16):"--:--",te=s.data?Ls(s.data.window[0]):i?Ls(i):"";return J.jsxs("div",{className:"fm-globe",children:[J.jsx("div",{ref:c,className:"fm-globe-host"}),J.jsx(hc,{children:J.jsxs(uc,{label:Te("m.globe.day"),children:[J.jsxs(Ai,{variant:"ghost",appearance:"toolbar",onClick:()=>{B(s.data?.window[0]??i),A(!0)},"aria-label":Te("m.globe.pickDay",{date:te}),children:[J.jsx(dc,{"aria-hidden":!0}),J.jsx("span",{className:"lab-control-label",children:te||Te("m.globe.today")})]}),J.jsx(aa,{variant:"ghost",appearance:"toolbar","aria-label":Te("m.globe.home"),onClick:()=>h.current?.flyHome(),disabled:!k,children:J.jsx(fc,{})})]})}),J.jsxs(pc,{children:[u?J.jsxs(Ai,{variant:"tonal",onClick:()=>{h.current?.setDrawing(!1),M(0)},children:[J.jsx(mc,{"aria-hidden":!0}),J.jsx("span",{className:"lab-control-label",children:Te("m.globe.cancelBox")})]}):r?J.jsxs(Ai,{variant:"tonal",onClick:()=>S(!0),disabled:!k,children:[J.jsx(ha,{"aria-hidden":!0}),J.jsx("span",{className:"lab-control-label",children:Te("m.globe.boxResults")})]}):null,u?null:J.jsxs(Ai,{variant:"filled",disabled:!k,onClick:()=>{h.current?.setDrawing(!0),M(1),R(null)},children:[J.jsx(Fc,{"aria-hidden":!0}),J.jsx("span",{className:"lab-control-label",children:Te("m.globe.drawBox")})]})]}),s.state!=="ready"||!k?J.jsx("div",{className:"fm-globe-overlay",children:s.state==="error"?J.jsx("div",{className:"fm-globe-card",children:J.jsx(Qo,{title:Te("m.globe.failed"),message:s.error??"",onRetry:()=>l(I=>I+1)})}):J.jsxs("div",{className:"fm-globe-card",children:[J.jsx(el,{label:s.state==="building"?Te("m.globe.building"):s.state==="ready"?Te("m.globe.preparing"):Te("m.globe.loading")}),s.job?.log_tail?J.jsx("pre",{className:"fm-log",dir:"ltr",children:s.job.log_tail}):null]})}):null,u?J.jsx("div",{className:"fm-globe-hint",role:"status",children:u===1?Te("m.globe.firstCorner"):Te("m.globe.secondCorner")}):null,k&&q?J.jsxs("section",{className:"fm-globe-timeline","aria-label":Te("m.globe.timeline"),children:[J.jsxs("div",{className:"fm-tl-row",children:[J.jsx(aa,{variant:"tonal","aria-label":m?Te("m.globe.pause"):Te("m.globe.play"),onClick:()=>{h.current?.setPlaying(!m),v(!m)},children:m?J.jsx(Ic,{}):J.jsx(Nc,{})}),J.jsxs("span",{className:"fm-tl-clock",dir:"ltr",children:[ee," UTC"]}),J.jsx(Sc,{label:Te("m.globe.speed"),className:"fm-segmented-box",value:g,onChange:I=>{p(I),h.current?.setSpeed(Number(I))},options:Hg.map(I=>({value:I,label:`${I}×`}))})]}),J.jsx(Vg,{engine:q,simT:d,onSeek:I=>h.current?.setTime(I)}),J.jsx(cl,{label:Te("m.globe.time"),trackStyle:"thin",controlSize:"small",min:-600,max:Math.round(Y),step:10,value:d,onValueChange:I=>{h.current?.setPlaying(!1),h.current?.setTime(I),f(I)},getValueText:I=>`${new Date((V+I)*1e3).toISOString().slice(11,16)} UTC`}),J.jsxs("div",{className:"fm-tl-legend",children:[["MODIS","VIIRS","Landsat",Te("m.globe.geo")].map((I,K)=>J.jsx(wc,{controlSize:"small",label:J.jsxs("span",{className:"fm-chip-label",children:[J.jsx("i",{style:{background:Li[K],height:10,width:10,borderRadius:2},"aria-hidden":!0}),I]}),checked:T[K],onCheckedChange:$=>{h.current?.setSystemVisible(K,$),N(ie=>ie.map((pe,he)=>he===K?$:pe))}},I)),J.jsx("small",{className:"fm-muted",children:Te("m.globe.records",{count:sn(q.count),pct:sn(q.validPct,1)})})]})]}):null,J.jsx(Jo,{open:!!_,onOpenChange:I=>{I||(R(null),h.current?.clearSelection())},label:Te("m.globe.record"),title:_?`${_.sat.symbol} ${_.sat.name}`:Te("m.globe.record"),detents:["medium","large"],regular:"card",modal:!1,dismissible:!0,children:_?J.jsx(Bg,{record:_,onZoom:()=>h.current?.zoomToSelection(),onGoTo:()=>h.current?.setTime(_.time-V-60)}):null}),J.jsx(Gg,{open:E,onClose:()=>S(!1),bbox:r,date:s.data?.window[0]??i??void 0,regions:n.map(I=>({name:I.name,title:Cc(I),bbox:I.bbox}))}),J.jsx(Rc,{open:y,label:Te("m.globe.pickDayTitle"),close:()=>A(!1),formId:"firms-globe-day",dir:Ps,config:{type:"date",max:new Date().toISOString().slice(0,10),min:new Date(Date.now()-60*864e5).toISOString().slice(0,10)},intro:Te("m.globe.pickDayHint"),value:F,onChange:B,resetKey:y,onSubmit:I=>{I.preventDefault(),typeof F=="string"&&F&&(t(K=>{const $=new URLSearchParams(K);return $.set("date",F),$}),A(!1))}}),r&&!E&&k?J.jsx("div",{className:"fm-globe-boxnote",children:J.jsx(Cs,{tone:"info",icon:J.jsx(ha,{size:16}),children:J.jsx("span",{dir:"ltr",children:tl(r)})})}):null]})}function Vg({engine:n,simT:e,onSeek:t}){const i=Fe.useRef(null);return Fe.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight;if(!s)return;const a=devicePixelRatio;r.width=s*a,r.height=o*a;const l=r.getContext("2d");l.setTransform(a,0,0,a,0,0),l.clearRect(0,0,s,o);const c=n.span+600,h=Ps==="rtl",d=g=>{const p=(g+600)/c*s;return h?s-p:p},f=n.bins[0].length;let m=1;for(let g=0;g<f;g++)m=Math.max(m,n.bins.reduce((p,u)=>p+u[g],0));const v=Math.max(1,Math.abs(d(n.binSize)-d(0))-1);for(let g=0;g<f;g++){let p=o;n.bins.forEach((u,M)=>{const _=u[g]/m*(o-4);l.fillStyle=Li[M];const R=d(h?(g+1)*n.binSize:g*n.binSize);l.fillRect(R,p-_,v,_),p-=_})}l.fillStyle=getComputedStyle(r).color,l.fillRect(d(e)-1,0,2,o)},[n,e]),J.jsx("canvas",{ref:i,className:"fm-tl-hist","aria-hidden":!0,onClick:r=>{const s=r.currentTarget.getBoundingClientRect(),o=(r.clientX-s.left)/s.width;t((Ps==="rtl"?1-o:o)*(n.span+600)-600)}})}export{Qg as default};
