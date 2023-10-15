exports.id=929,exports.ids=[929],exports.modules={39454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(60080),i=n(9885),l=n(82179),r=n(76786),a=n(91445),s=n.n(a);let __WEBPACK_DEFAULT_EXPORT__=function({Content:e,floor:t,Pro:n,Con:a}){let[d,c]=(0,i.useState)(!0);return(0,o.jsxs)("div",{className:s().container,children:[o.jsx(l.Z,{title:e.title,path:e.path,path2:e.path2,path3:e.path3,available:e.available,bed_laundry:e.bed_laundry,rooms:e.rooms,moreInfo:e.moreInfo,description:e.description,location:e.location,pic:e.pic,pro:n,con:a,changeDetail:()=>void c(!d)}),d?o.jsx("div",{className:s().placeholder,children:" "}):null,o.jsx(r.Z,{displayDetail:d,floor:t})]})}},56169:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_components_DormDisplayMobile});var o=n(60080),i=n(65099),l=n(9885),r=n.n(l),a=n(61522),s=n(34972),d=n.n(s),c=n(10413),h=n.n(c),p=n(23509),u=n(25262),m=n(15705),g=n(41581),x=n(89817);let b=x.ZP.div`
  ${({theme:e})=>x.iv`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    background: white;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 30%);
    border-radius: 8px;
    margin: auto;
    width: auto;
    height: 100%;
    padding: 0px 12px;
    z-index: 3;
    position: relative;
  `}
`;x.ZP.button`
  ${({theme:e})=>x.iv`
    backgroundcolor: pink;
    cursor: pointer;
    border: none;
    padding: 8px;
    border-radius: 100%;
    position: absolute;
    right: 16px;
    &:hover {
      background: ${e.surfaceHover};
    }
  `}
`,x.ZP.p`
  ${({theme:e})=>x.iv`
    color: ${e.onSurface};
  `}
`;let _=x.ZP.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding-bottom: 16px;
`,v=x.ZP.div`
  ${({theme:e})=>x.iv`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    & h1 {
      color: ${e.onSurface};
      font-size: 1.125rem;
      line-height: 1.5;
      margin: 0;
    }
    & h2 {
      color: ${e.onSurfaceSecondary};
      font-size: 0.875rem;
      line-height: 1;
      font-weight: 600;
      margin: 0;
    }
  `}
`,f=x.ZP.div`
  ${({bodyheight:e})=>x.iv`
    width: calc(100vw - 24px);
    height: ${e}px;
    transition: height 200ms;
  `}
`,j=x.ZP.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: move; /* fallback if grab cursor is unsupported */
  ${e=>e.dragging?x.iv`
          cursor: grabbing;
          cursor: -moz-grabbing;
          cursor: -webkit-grabbing;
        `:x.iv`
          cursor: grab;
          cursor: -moz-grab;
          cursor: -webkit-grab;
        `}
`,y=x.ZP.div`
  ${({theme:e})=>x.iv`
    background: #ddd;
    width: 64px;
    margin: 8px auto;
    height: 0.25rem;
    border-radius: 4px;
  `}
`,syncHeight=()=>{},w={collapsed:"in collapse state",dismissed:"was dismissed",expanded:"is expanded",snapToTop:"snapped to top"},useReduceMotion=()=>{let[e,t]=r().useState(window.matchMedia("(prefers-reduced-motion: reduce)").matches);return r().useEffect(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)"),handleChange=()=>{t(e.matches)};return handleChange(),e.addEventListener("change",handleChange),()=>{e.removeEventListener("change",handleChange)}},[]),e},S=-9,P=580,BottomSheet=({children:e,closeButtonAriaLabel:t="Close",initialDrawerDistanceTop:n=S,isDebugMode:i,imgSrc:a,isOpen:s,maxWidth:d=P,onClose:c,onStatusChange:h,subtitle:p,title:u})=>{let m=(0,l.useRef)(null),[x,D]=r().useState(0),[E,M]=r().useState(null),[F,k]=r().useState(!1),[C,Z]=r().useState(!0),[B,L]=r().useState(0);(0,l.useEffect)(()=>{L(window.innerHeight),D(-window.innerHeight)},[]),(0,l.useEffect)(()=>{window.addEventListener("resize",syncHeight),syncHeight()},[]);let T=useReduceMotion(),N=(0,g.q_)({bottom:x,immediate:T,config:{friction:20}}),handlePointerDown=e=>{let t=e?.touches!=null?e.touches[0]:e;document.documentElement.classList.add("is-locked");let n=(e.currentTarget.parentElement?.getBoundingClientRect().bottom??0)-t.clientY-158;Z(9!==x),M(n)},R=r().useCallback(e=>{let t=e?.touches!=null?e?.touches[0]:e;if(null!=E){let e=B-t.clientY-E;e!==x&&D(e)}},[x,E,B]),handleScrollRepositioning=()=>{m&&m.current&&(m.current.scrollTop=0)},$=r().useCallback(e=>{let t=w[e];h&&h(t)},[h]);return(0,l.useEffect)(()=>{s?(k(!0),$("expanded"),handleScrollRepositioning(),D(-n)):($("collapsed"),D(-B+75))},[s]),(0,l.useEffect)(()=>{let handlePointerUp=()=>{document.documentElement.classList.remove("is-locked"),null!=E&&(x>-10?(k(!0),$("snapToTop"),D(-n)):x-158<-B+75?(k(!1),$("dismissed"),c(),D(-B+158)):C?(k(!0),$("snapToTop"),D(-n)):(k(!1),$("collapsed"),D(-B+75)),M(null))};return document.addEventListener("touchend",handlePointerUp),document.addEventListener("touchmove",R),document.addEventListener("mouseup",handlePointerUp),document.addEventListener("mousemove",R),()=>{document.removeEventListener("touchend",handlePointerUp),document.removeEventListener("touchmove",R),document.removeEventListener("mouseup",handlePointerUp),document.removeEventListener("mousemove",R)}},[n,C,x,E,R,$,c]),o.jsx(o.Fragment,{children:(0,o.jsxs)(g.q.div,{style:{left:"50%",transform:"translateX(-50%)",position:"fixed",width:"100%",height:B,transition:"height 200ms",zIndex:2,...N},children:[F&&o.jsx("img",{src:a,alt:"dorm",style:{transform:"translate(0, 8px)",width:"100%",height:"150px",objectFit:"cover",backgroundColor:"pink"}}),(0,o.jsxs)(b,{"aria-modal":"true",role:"dialog","aria-labelledby":"BottomSheet-title",children:[(0,o.jsxs)("div",{onMouseDown:handlePointerDown,onTouchStart:handlePointerDown,children:[o.jsx(j,{dragging:null!=E,onDragStart:e=>{e.preventDefault(),e.dataTransfer.setDragImage(new Image,0,0)},draggable:!0,children:o.jsx(y,{})}),o.jsx(_,{children:(0,o.jsxs)(v,{children:[u&&o.jsx("h1",{id:"BottomSheet-title",children:u}),p&&o.jsx("h2",{children:p})]})})]}),o.jsx(f,{ref:m,tabIndex:0,bodyheight:B+x-(u||p?75:135),children:e})]})]})})};var D=n(33083),E=n.n(D);let components_MobileDetailBottomSheet=({content:e,pro:t,con:n})=>{let[i,r]=(0,l.useState)(!0),[s,c]=(0,l.useState)(null),[g,x]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{let getReviews=async()=>{try{let t=await (0,a.PL)((0,a.hJ)(p.db,e.path3));c(t.docs.map(e=>({...e.data()}))),x(!1)}catch(e){console.error("Error fetching documents:",e)}};getReviews()},[e.path3]),o.jsx(BottomSheet,{title:e.title+" \xb7 "+e.location,imgSrc:e.pic,subtitle:e.available,isDebugMode:!1,isOpen:i,onClose:()=>{r(!1)},children:o.jsx("div",{className:E().containerOuter,children:(0,o.jsxs)("div",{className:E().container,children:[g?o.jsx(h(),{width:"100%",height:"35px"}):o.jsx("div",{className:E().data,children:s?.map(e=>o.jsxs("div",{className:E().reviewData,children:[e.Rate.toFixed(1),o.jsx(d(),{index:e.index,name:"read-only",value:e.Rate,precision:.5,readOnly:!0},"{element}"),e.nReviews," reviews"]},e.nReviews))}),o.jsx("div",{style:{marginBottom:"5px"},children:e.bed_laundry}),o.jsx("div",{style:{marginBottom:"10px"},children:e.rooms}),o.jsx("hr",{}),o.jsx("div",{style:{marginBottom:"5px",fontSize:"14px"},children:e.description}),o.jsx("a",{className:E().link,href:e.moreInfo,target:"_blank",rel:"noreferrer",children:"View more about room, bathroom, and amenities"}),o.jsx(u.Z,{pro:t,con:n}),o.jsx("hr",{style:{marginTop:"20px"}}),o.jsx(m.Z,{path:e.path,path2:e.path2,path3:e.path3,isMobile:!0})]})})})};var M=n(76786);let _components_DormDisplayMobile=function({Content:e,floor:t,Pro:n,Con:l}){return(0,o.jsxs)(o.Fragment,{children:[o.jsx("a",{href:"/map",style:{position:"absolute",padding:"5px",paddingLeft:"3px",left:"12px",top:"20px",zIndex:1,height:"15px",width:"15px"},children:o.jsx(i.Z,{style:{height:"15px",color:"#2f2f2f"}})}),o.jsx(M.Z,{displayDetail:!0,floor:t}),o.jsx(components_MobileDetailBottomSheet,{content:e,pro:n,con:l})]})}},76786:(e,t,n)=>{"use strict";n.d(t,{Z:()=>components_FloorPlan});var o=n(60080),i=n(9885),l=n(72586),r=n(99646);let FloorPlan_ZoomPanPinch=({src:e})=>o.jsx("div",{style:{width:"100vw",height:"100vh",cursor:"grab"},children:o.jsx(r.d$,{initialScale:1,initialPositionY:10,limitToBounds:!0,centerZoomedOut:!0,centerOnInit:!0,wheel:{step:.5,smoothStep:.01},children:o.jsx(r.Uv,{children:o.jsx("img",{style:{width:"100vw",height:"100vh",objectFit:"contain"},src:e,alt:"floor plan"})})})});var a=n(55766),s=n.n(a);let components_FloorPlan=function({floor:e,displayDetail:t}){let[n,r]=(0,i.useState)(0),a=(0,l.Z)("(max-width:860px)"),d="G"===e.at(e.length-1).title?[...Array(e.length).keys()].reverse():[...Array(e.length).keys(),e.length-1].reverse();function isString(e){return"[object String]"===Object.prototype.toString.call(e)}let btnStyle=e=>e===d[n]?a?s().btnClickedMobile:s().btnClicked:a?s().btnMobile:s().btn;return(0,o.jsxs)("div",{className:a?s().containerExpand:t?s().container:s().containerExpand,children:[o.jsx(FloorPlan_ZoomPanPinch,{src:e.at(d[n]).pic}),o.jsx("div",{className:a?s().selectMobile:s().select,children:e.map((e,t)=>o.jsx("div",{onClick:()=>r(isString(e.title)?0:e.title),className:btnStyle(t),children:isString(e.title)?e.title:"L"+e.title},t))}),o.jsx("img",{className:a?s().legendMobile:s().legend,src:a?"/LegendMobile.png":"/Legend.png",alt:"legend"})]})}},91445:e=>{e.exports={container:"DormDisplay_container__EN4aF",placeholder:"DormDisplay_placeholder__M895N"}},55766:e=>{e.exports={container:"FloorPlan_container__ovjT_",containerExpand:"FloorPlan_containerExpand__3pFDS",select:"FloorPlan_select__jKreX",selectMobile:"FloorPlan_selectMobile__Fv2Ul",placeholder:"FloorPlan_placeholder__hg8aB",btnMobile:"FloorPlan_btnMobile__Zvx37",btn:"FloorPlan_btn___cANh",btnClickedMobile:"FloorPlan_btnClickedMobile__795MQ",btnClicked:"FloorPlan_btnClicked__3mlVy",pic:"FloorPlan_pic__chofD",legend:"FloorPlan_legend__pKH7F",legendMobile:"FloorPlan_legendMobile__3lzEn",compass:"FloorPlan_compass__PEb77"}},33083:e=>{e.exports={containerOuter:"MobileDetailBottomSheet_containerOuter__No8zJ",container:"MobileDetailBottomSheet_container__I9tTd",data:"MobileDetailBottomSheet_data___d7Cx",reviewData:"MobileDetailBottomSheet_reviewData__AHMbu",link:"MobileDetailBottomSheet_link__Ccx0B"}}};