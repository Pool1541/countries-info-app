import { ROUTES } from '../../../../config/routes';
import { LinksWrapper, StyledLink, StyledNavbar, Text } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Text>
        <p>Escoge una opción para iniciar 🎯</p>
      </Text>
      <LinksWrapper>
        <StyledLink to={ROUTES.countries}>Paises</StyledLink>
        <StyledLink to={ROUTES.continents}>Continentes</StyledLink>
      </LinksWrapper>
    </StyledNavbar>
  );
}
