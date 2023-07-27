import { NavLink } from 'react-router-dom';
import { LogoContainer, Navbar, StyledSidebar } from './Sidebar.styled';
import { ROUTES } from '../../config/routes';

export default function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <Navbar>
        <ul>
          <li>
            <NavLink to={ROUTES.home}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.countries}>Paises</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.continents}>Continentes</NavLink>
          </li>
        </ul>
      </Navbar>
    </StyledSidebar>
  );
}
