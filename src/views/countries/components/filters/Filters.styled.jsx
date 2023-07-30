import styled from 'styled-components';

export const StyledFilters = styled.div`
  width: calc(100% + 3.5rem);
  padding: 3rem 3.5rem;
  border-radius: 5rem;
  position: absolute;
  left: -3.5rem;
  top: 8rem;
  z-index: 1000;
  background-color: var(--white);
  color: var(--background);
`;

export const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  font-size: 2.2rem;

  button {
    font-size: 2.2rem;
    color: var(--accent);
  }
`;

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  gap: 2rem;
`;

export const StyledFilterButton = styled.button`
  width: 100%;
  height: 15rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid #cecece;
  border-radius: 1rem;
  overflow: hidden;

  /* &.active {
    box-shadow:
      0 0 5px 1px var(--accent),
      0 0 5px 1px var(--accent);
  } */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
  color: var(--background);
`;
