  width: 100%;
  max-width: 35rem;
  height: 250px;
  overflow: hidden;
  border-radius: 3rem;
  box-shadow: -2px -1px 10px 2px #00000052;

  @media screen and (${p.LAPTOP_M}) {
    height: 200px;
  }
`,lc=u.div`
  height: 60%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,oc=u.div`
  height: 40%;
  display: flex;
  align-items: center;
  background-color: ${({isActive:e})=>e?"var(--accent)":"var(--white)"};
  padding: 2rem 3rem;
`,tc=u.div`
  width: 70px;

  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,nc=u.div`
  width: 20rem;
  text-align: left;
  h3 {
    color: ${({isActive:e})=>e?"var(--white)":"var(--accent)"};
    font-size: clamp(1.8rem, 2.5vw, 2.3rem);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: ${({isActive:e})=>e?"var(--white)":"var(--background-hover)"};
  }
`;var sc={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function Y(e,n){var i={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:e}},o=sc[n];return function(l,c){return fetch(""+o+l+"?"+function(m){return Object.keys(m).map(function(a){return a+"="+m[a]}).join("&")}(c||{}),i).then(function(m){if(!m.ok)throw new Error(m.statusText);return m.json()})}}function mc(e){var n=Y(e,"collections");return{all:function(i){return i===void 0&&(i={}),n("",i)},media:function(i){var o=i.id,l=function(c,m){if(c==null)return{};var a,r,s={},f=Object.keys(c);for(r=0;r<f.length;r++)m.indexOf(a=f[r])>=0||(s[a]=c[a]);return s}(i,["id"]);return n(""+o,l)},featured:function(i){return i===void 0&&(i={}),n("featured",i)}}}function p1(e){return!(!e||!e.photos)}var rc={__proto__:null,isPhotos:p1,isVideos:function(e){return!(!e||!e.videos)},isError:function(e){return!!e.error}};function fc(e){var n=Y(e,"photo");return{search:function(i){return n("/search",i)},curated:function(i){return i===void 0&&(i={}),n("/curated",i)},show:function(i){return n("/photos/"+i.id)},random:function(){try{var i=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:i,per_page:1})).then(function(o){return p1(o)?o.photos[0]:o})}catch(o){return Promise.reject(o)}}}}function dc(e){var n=Y(e,"video");return{search:function(i){return n("/search",i)},popular:function(i){return i===void 0&&(i={}),n("/popular",i)},show:function(i){return n("/videos/"+i.id)}}}function hc(e){if(!e||typeof e!="string")throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");return{typeCheckers:rc,photos:fc(e),videos:dc(e),collections:mc(e)}}const pc="eZ1s9td5shkJgXJHvFOzCSHrlBJx1TYtEE2gvNI4oTbtfLA7Gm6vlSmi",kc=hc(pc),uc="landscape";async function zc(e){const n=`${e} landscape`,i=await kc.photos.search({query:n,orientation:uc,per_page:1});return{image:i.photos[0].src.medium,alt:i.photos[0].alt}}function Q(){return g.useContext(U9)}function gc({country:e}){const{getCountryInfo:n,currentCode:i}=Q(),{data:o,isError:l}=ac({queryKey:["photo",e.name],queryFn:()=>zc(e.name)});return t.jsxs(ic,{onClick:()=>n(e.code,o),title:e.name,children:[t.jsx(lc,{children:l?t.jsx("img",{src:"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",alt:"random landscape"}):t.jsx("img",{src:o==null?void 0:o.image,alt:o==null?void 0:o.alt})}),t.jsxs(oc,{isActive:i===e.code,children:[t.jsx(tc,{children:t.jsx(h1,{code:e.code,height:100,width:100,alt:`Bandera de ${e.name}`})}),t.jsxs(nc,{isActive:i===e.code,children:[t.jsx("h3",{children:e.name}),t.jsx("p",{children:e.continent.name})]})]})]})}const Mc=u.div`
  margin-top: 8rem;
  width: 30%;
  height: auto;
  right: 0rem;
  background-color: var(--white);
  color: var(--background);
  padding: 3rem;

  @media screen and (${p.DESKTOP}) {
    width: 40rem;
  }

  @media screen and (${p.LAPTOP_L}) {
    width: 40rem;
  }

  @media screen and (${p.TABLET_L}) {
    width: 30rem;
  }

  @media screen and (${p.TABLET_M}) {
    position: fixed;
    top: 18rem;
    width: 100%;
    height: calc(100vh - 25rem);
    padding: 3rem 1.5rem;
  }
`,vc=u.div`
  position: sticky;
  top: 3rem;
`,bc=u.div`
  width: 100%;
  height: 25rem;
  margin-bottom: 2rem;

  @media screen and (${p.TABLET_L}) {
    height: 15rem;
  }

  @media screen and (${p.MOVIL_S}) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3rem;
  }
`,wc=u.div`
  display: flex;
  align-items: center;
`,xc=u.div`
  margin-right: 2rem;
  img {
    @media screen and (${p.TABLET_L}) {
      width: 7rem;
      height: 7rem;
    }
  }
`,yc=u.div`
  h3 {
    font-size: 3rem;
    color: var(--accent);
    @media screen and (${p.TABLET_L}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 2rem;
    @media screen and (${p.TABLET_L}) {
      font-size: 1.5rem;
    }
  }
`,V=u.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  white-space: nowrap;

  p:first-child {
    color: var(--accent);
    font-size: 3rem;
    font-weight: 600;
    margin-right: 2rem;

    @media screen and (${p.TABLET_L}) {
      font-size: 2rem;
    }
  }

  p:last-child {
    font-size: 2.8rem;
    @media screen and (${p.TABLET_L}) {
      font-size: 1.8rem;
    }
  }
`,Sc=u(V)`
  flex-direction: column;
  align-items: flex-start;

  ul {
    width: 100%;
    margin-top: 2rem;
    padding-left: 2rem;
    height: 20rem;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 1px 2px 5px 1px #d4d4d4;

    @media screen and (${p.TABLET_M}) {
      margin-top: 0.5rem;
      height: 8rem;
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.5rem !important;
      color: var(--background-hover) !important;
    }
  }
`;function k1(e){const n=g.useRef(),i=o=>{n.current&&!n.current.contains(o.target)&&e()};return g.useEffect(()=>(document.addEventListener("click",i,!0),()=>{document.removeEventListener("click",i,!0)}),[e]),n}function Rc(){var c,m,a,r,s,f,h,k,M;const{response:{data:e,loading:n},modalImage:i,toggleModal:o}=Q(),l=k1(o);return t.jsx(Mc,{ref:l,children:t.jsxs(vc,{children:[t.jsx(bc,{children:t.jsx("img",{src:i==null?void 0:i.image,alt:i==null?void 0:i.alt})}),n?t.jsx(r1,{}):t.jsxs(t.Fragment,{children:[t.jsxs(wc,{children:[t.jsx(xc,{children:t.jsx(h1,{code:(c=e==null?void 0:e.country)==null?void 0:c.code,width:100,height:100})}),t.jsxs(yc,{children:[t.jsx("h3",{children:(m=e==null?void 0:e.country)==null?void 0:m.name}),t.jsx("p",{children:(a=e==null?void 0:e.country)==null?void 0:a.continent.name})]})]}),t.jsxs(V,{children:[t.jsx("p",{children:"Capital :"}),t.jsx("p",{children:(r=e==null?void 0:e.country)==null?void 0:r.capital})]}),t.jsxs(V,{children:[t.jsx("p",{children:"Idioma :"}),t.jsx("p",{children:(f=(s=e==null?void 0:e.country)==null?void 0:s.languages[0])==null?void 0:f.name})]}),t.jsxs(V,{children:[t.jsx("p",{children:"Moneda :"}),t.jsx("p",{children:(h=e==null?void 0:e.country)==null?void 0:h.currency})]}),((k=e==null?void 0:e.country)==null?void 0:k.states.length)>0&&t.jsxs(Sc,{children:[t.jsx("p",{children:"Estados :"}),t.jsx("ul",{children:(M=e==null?void 0:e.country)==null?void 0:M.states.map(d=>t.jsx("li",{children:t.jsx("p",{children:d.name})},d.name))})]})]})]})})}function u1(){return g.useContext(V9)}function Ac(){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}const Bc=u.form`
  display: flex;
  width: 90%;
  max-width: 80rem;
  background-color: var(--white);
  padding: 1.5rem 2rem 1.5rem 3.5rem;
  border-radius: 4rem;
  margin: auto;
  box-shadow: 1px 2px 1px 1px #0000005a;
`,Cc=u.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--background);
  }

  input {
    width: 100%;
    line-height: 1.5;
    max-width: 23rem;
    color: var(--background);
    font-size: 1.5rem;
    transition: border 0.2s ease;
    border-bottom: ${({isFocused:e})=>e?"1px solid var(--accent)":"1px solid var(--white)"};
  }

  input::placeholder {
    color: #a0a0a0;
  }
`,jc=u.button`
  background-color: var(--accent);
  color: var(--white);
  border-radius: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (${p.TABLET_M}) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  span {
    font-size: 2.5rem;
    font-weight: 300;

    @media screen and (${p.TABLET_L}) {
      display: none;
    }
  }
`,Fc=D9`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Hc=u.div`
  width: calc(100% + 3.5rem);
  padding: 3rem 3.5rem;
  border-radius: 5rem;
  transform: translateY(-3rem);
  opacity: 0;
  position: absolute;
  left: -3.5rem;
  top: 8rem;
  z-index: 1000;
  background-color: var(--white);
  color: var(--background);
  animation: ${Fc} 0.2s ease-in-out forwards;

  @media screen and (${p.LAPTOP_L}) {
    width: calc(100% + 22rem);
  }

  @media screen and (${p.TABLET_L}) {
    width: calc(100% + 12rem);
  }

  @media screen and (${p.MOVIL_L}) {
    padding: 3rem 2rem;
  }
`,Pc=u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  font-size: 2.2rem;

  @media screen and (${p.TABLET_M}) {
    font-size: 1.5rem;
  }

  button {
    font-size: 2.2rem;
    color: var(--accent);

    @media screen and (${p.TABLET_M}) {
      font-size: 1.5rem;
    }
  }
`,Ec=u.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(8rem, 1fr));

  @media screen and (${p.TABLET_M}) {
    grid-template-columns: repeat(2, minmax(5rem, 1fr));
  }
  gap: 2rem;
`,Gc=u.button`
  width: 100%;
  height: 15rem;

  @media screen and (${p.TABLET_M}) {
    height: 10rem;
  }
`,Tc=u.div`
  width: 100%;
  height: 80%;
  border: 1px solid #cecece;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${({selected:e})=>e?"0 0 5px 1px var(--accent), 0 0 5px 1px var(--accent)":""};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Nc=u.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
  color: var(--background);

  @media screen and (${p.TABLET_M}) {
    font-size: 1.4rem;
  }
`;function Lc(){const{continents:e,changeParams:n,clearParams:i}=u1();return t.jsxs(Hc,{children:[t.jsxs(Pc,{children:[t.jsx("p",{children:"Filtrar por continentes"}),t.jsx("button",{type:"button",onClick:i,children:"Limpiar"})]}),t.jsx(Ec,{children:e.map(o=>t.jsx(Ic,{continent:o,handleClick:n},o.name))})]})}function Ic({continent:e,handleClick:n}){return t.jsxs(Gc,{title:e.name,type:"button",onClick:()=>n(e.name),children:[t.jsx(Tc,{selected:e.selected,children:t.jsx("img",{src:e.image,alt:e.name})}),t.jsx(Nc,{children:e.name})]})}function Kc({filterFn:e}){const[n,i]=g.useState(""),[o,l]=g.useState(!1),{pathname:c}=f1(),m=k1(f);function a(h){const k=h.target.value.charAt(0).toUpperCase()+h.target.value.slice(1);i(k)}function r(h){h.preventDefault(),e(n),f()}function s(){l(!0)}function f(){l(!1)}return t.jsxs(Bc,{onSubmit:r,children:[t.jsxs(Cc,{ref:m,isFocused:o,children:[t.jsx("label",{children:"País"}),t.jsx("input",{placeholder:"Escribe el pais que deseas ver",onChange:a,onClick:s,autoComplete:"disabled"}),o&&c==O9.countries&&t.jsx(Lc,{})]}),t.jsxs(jc,{title:"Buscar país",children:[t.jsx(Ac,{}),t.jsx("span",{children:"Buscar"})]})]})}function Uc(e,{threshold:n=0,root:i=null,rootMargin:o="0%",freezeOnceVisible:l=!1}){const[c,m]=g.useState(),a=(c==null?void 0:c.isIntersecting)&&l,r=([s])=>{m(s)};return g.useEffect(()=>{const s=e==null?void 0:e.current;if(!!!window.IntersectionObserver||a||!s)return;const h={threshold:n,root:i,rootMargin:o},k=new IntersectionObserver(r,h);return k.observe(s),()=>k.disconnect()},[e==null?void 0:e.current,JSON.stringify(n),i,o,a]),c}const Vc=u.div`
  flex: 1 1 auto;
  margin-top: 8rem;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  position: relative;
  justify-items: center;
  overflow: hidden;

  @media screen and (${p.DESKTOP}) {
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  }

  @media screen and (${p.MOVIL_L}) {
    grid-template-columns: 1fr;
  }
`;function Zc(){const{continentCode:e}=q9(),{pathname:n}=f1(),[i,o]=g.useState([]),{data:l,loading:c,error:m,getCountriesByContinent:a}=u1(),{isModalOpen:r}=Q(),[s,f]=g.useState(15),h=g.useRef(null),k=Uc(h,{rootMargin:"100px"});function M(d){const B=structuredClone(l.countries).filter(C=>C.name.includes(d));o(B)}return g.useEffect(()=>{k!=null&&k.isIntersecting&&l.countries.length>s&&f(d=>d+15)},[k]),g.useEffect(()=>{e&&a(e)},[e]),g.useEffect(()=>{c||o(l.countries)},[c,n,l]),t.jsxs(Z9,{children:[t.jsx(J9,{children:t.jsx(Kc,{filterFn:M})}),c?t.jsx(r1,{}):m?t.jsx("div",{children:"Error"}):t.jsxs("div",{style:{display:"flex"},children:[t.jsx(Vc,{children:i.slice(0,s).map(d=>t.jsx(gc,{country:d},d.code))}),r&&t.jsx(Rc,{})]}),t.jsx("div",{ref:h})]})}export{Zc as default};