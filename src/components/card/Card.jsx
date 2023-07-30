import Flag from 'react-world-flags';
import { CardContent, CardTitle, FlagContainer, StyledCard, Thumbnail } from './Card.styled';
import { fetchPhoto } from '../../services/pexelsService';
import { useQuery } from 'react-query';
import useModal from '../../hooks/useModal';

export default function Card({ country }) {
  const { getCountryInfo, currentCode } = useModal();
  const {
    data: photo,
    // isLoading,
    isError,
  } = useQuery({
    queryKey: ['photo', country.name],
    queryFn: () => fetchPhoto(country.name),
  });

  return (
    <StyledCard onClick={() => getCountryInfo(country.code, photo)} title={country.name}>
      <Thumbnail>
        {isError ? (
          <img
            src='https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
            alt='random landscape'
          />
        ) : (
          <img src={photo?.image} alt={photo?.alt} />
        )}
      </Thumbnail>
      <CardContent isActive={currentCode === country.code}>
        <FlagContainer>
          <Flag code={country.code} height={100} width={100} />
        </FlagContainer>
        <CardTitle isActive={currentCode === country.code}>
          <h3>{country.name}</h3>
          <p>{country.continent.name}</p>
        </CardTitle>
      </CardContent>
    </StyledCard>
  );
}
