import { Link } from 'react-router-dom';
import { images } from '../../../../config/imagesMap';
import { StyledContinentCard, ImageContainer, ContinentName } from './ContinentCard.styled';
import { ROUTES } from '../../../../config/routes';

export default function ContinentCard({ continent }) {
  return (
    <StyledContinentCard>
      <Link to={`${ROUTES.continents}/${continent.code}`}>
        <ImageContainer>
          <img src={images[continent.code] || images.default} alt='default image' />
        </ImageContainer>
        <ContinentName>
          <h3>{continent.name}</h3>
        </ContinentName>
      </Link>
    </StyledContinentCard>
  );
}
