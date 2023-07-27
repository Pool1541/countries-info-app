import Flag from 'react-world-flags';
import { CardContent, CardTitle, FlagContainer, StyledCard, Thumbnail } from './Card.styled';
import { useEffect, useState } from 'react';
import { fetchPhoto } from '../../services/pexelsService';

export default function Card({ country }) {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    async function getPhoto() {
      const info = await fetchPhoto(country.name);
      if (info) setPhoto(info);
    }

    getPhoto();
  }, []);

  return (
    <StyledCard>
      <Thumbnail>
        <img src={photo?.image} alt={photo?.alt} />
      </Thumbnail>
      <CardContent>
        <FlagContainer>
          <Flag code={country.code} height={100} width={100} />
        </FlagContainer>
        <CardTitle>
          <h3>{country.name}</h3>
          <p>{country.continent.name}</p>
        </CardTitle>
      </CardContent>
    </StyledCard>
  );
}
