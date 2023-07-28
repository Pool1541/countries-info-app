import { NavLink } from 'react-router-dom';
import { LogoContainer, Navbar, StyledSidebar, ToggleButton } from './Sidebar.styled';
import { ROUTES } from '../../config/routes';
import useSidebar from '../../hooks/useSidebar';

export default function Sidebar() {
  const { display, toggleSidebar } = useSidebar();

  return (
    <StyledSidebar isActive={display}>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <Navbar>
        <ul>
          <li>
            <NavLink to={ROUTES.home} onClick={toggleSidebar}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.countries} onClick={toggleSidebar}>
              Paises
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.continents} onClick={toggleSidebar}>
              Continentes
            </NavLink>
          </li>
        </ul>
      </Navbar>
      <ToggleButton isActive={display} onClick={toggleSidebar}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </ToggleButton>
    </StyledSidebar>
  );
}
