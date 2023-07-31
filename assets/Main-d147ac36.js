import{s as e,B as i,y as n,j as s}from"./index-b5c0af3b.js";const m=e.main`
  margin-left: ${({isActive:r})=>r?"35rem":"0"};
  min-height: 100vh;
  padding: 5rem 0 5rem 5rem;
  background-color: var(--primary);
  transition: margin 0.3s ease;

  @media screen and (${i.TABLET_L}) {
    margin-left: 0;
    padding: 5rem 2rem;
  }
`;function d({children:r}){const{display:a}=n();return s.jsx(m,{isActive:a,children:r})}export{d as M};
