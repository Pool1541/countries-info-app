import styled from 'styled-components';

export const StyledSearchBar = styled.form`
  display: flex;
  width: 100%;
  max-width: 80rem;
  background-color: var(--white);
  padding: 1.5rem 2rem 1.5rem 3.5rem;
  border-radius: 4rem;
  margin: auto;
  box-shadow: 1px 2px 1px 1px #0000005a;
`;

export const SearchBarInputWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  label {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--background);
  }

  input {
    color: var(--background);
    font-size: 1.5rem;
  }

  input::placeholder {
    color: #a0a0a0;
  }
`;

export const SearchBarButton = styled.button`
  background-color: var(--accent);
  color: var(--white);
  border-radius: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 2.5rem;
    font-weight: 300;
  }
`;
