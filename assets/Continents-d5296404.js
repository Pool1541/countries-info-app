import{s as t,j as e,L as a,R as d,w as r,x as m,o as c,F as l}from"./index-b5c0af3b.js";import{M as u}from"./Main-d147ac36.js";const x=t.div`
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 3rem;
`,h=t.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    border-radius: 3rem;
  }
`,p=t.div`
  position: absolute;
  bottom: -3.5rem;
`;function g({continent:n}){return e.jsx(x,{children:e.jsxs(a,{to:`${d.continents}/${n.code}`,children:[e.jsx(h,{children:e.jsx("img",{src:r[n.code]||r.default,alt:"default image"})}),e.jsx(p,{children:e.jsx("h3",{children:n.name})})]})})}const j=t.div`
  margin-left: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  row-gap: 6rem;
  column-gap: 2rem;
`;function f(){const{data:n,loading:s,error:o}=m(l);return o?e.jsx("div",{children:"Hubo un error"}):e.jsx(j,{children:s?e.jsx(c,{}):n.continents.map(i=>e.jsx(g,{continent:i},i.code))})}function b(){return e.jsx(u,{children:e.jsx(f,{})})}export{b as default};
