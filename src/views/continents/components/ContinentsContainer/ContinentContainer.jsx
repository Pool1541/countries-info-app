import ContinentCard from '../continentCard/ContinentCard';
import { StyledContinentcontainer } from './ContinentContainer.styled';
import { useQuery } from '@apollo/client';
import { FIND_ALL_CONTINENTS } from '../../../../services/queries';
import LoadingSpiner from '../../../../components/LoadingSpinner/LoadingSpiner';

export default function ContinentContainer() {
  const { data, loading, error } = useQuery(FIND_ALL_CONTINENTS);

  if (error) return <div>Hubo un error</div>;

  return (
    <StyledContinentcontainer>
      {loading ? (
        <LoadingSpiner /> 
      ) : (
        data.continents.map((continent) => (
          <ContinentCard continent={continent} key={continent.code} />
        ))
      )}
    </StyledContinentcontainer>
  );
}
