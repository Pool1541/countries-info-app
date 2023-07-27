import Flag from 'react-world-flags';
import { CardContent, CardTitle, FlagContainer, StyledCard, Thumbnail } from './Card.styled';

export default function Card() {
  return (
    <StyledCard>
      <Thumbnail>
        <img
          src='https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          alt='united kingdom image'
        />
      </Thumbnail>
      <CardContent>
        <FlagContainer>
          <Flag code={'GB'} height={100} width={100} />
        </FlagContainer>
        <CardTitle>
          <h3>United Kingdom</h3>
          <p>Europe</p>
        </CardTitle>
      </CardContent>
    </StyledCard>
  );
}
