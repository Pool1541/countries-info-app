import{s as n,j as e,B as t,L as s,R as r}from"./index-b5c0af3b.js";import{H as o}from"./Header-df20afc0.js";import{M as a}from"./Main-d147ac36.js";const c=n.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    white-space: nowrap;
    font-size: clamp(3rem, 5vw, 8rem);
    color: var(--accent);
  }
`;function d(){return e.jsx(c,{children:e.jsx("h1",{children:"Bienvenidos 😀"})})}const l=n.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i=n(s)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 30rem;
  border-radius: 5rem;
  background-color: var(--background-hover);
  color: var(--white);
  font-size: 3rem;
  font-weight: 600;
  transition: all 0.2s ease;
  @media screen and (${t.MOVIL_L}) {
    width: 20rem;
    height: 20rem;
    font-size: 2rem;
  }

  &:hover {
    background-color: var(--background);
  }
`,m=n.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`,h=n.div`
  p {
    font-size: 2rem;
  }
`;function p(){return e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("p",{children:"Escoge una opción para iniciar 🎯"})}),e.jsxs(m,{children:[e.jsx(i,{to:r.countries,children:"Paises"}),e.jsx(i,{to:r.continents,children:"Continentes"})]})]})}function j(){return e.jsxs(a,{children:[e.jsx(o,{children:e.jsx(d,{})}),e.jsx("main",{children:e.jsx(p,{})})]})}export{j as default};
