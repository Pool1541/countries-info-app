import styled from 'styled-components';
import BREAKPOINTS from '../../../../assets/breakPoints';

export const StyledSearchBar = styled.form`
  display: flex;
  width: 90%;
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
  position: relative;

  label {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--background);
  }

  input {
    width: 100%;
    line-height: 1.5;
    max-width: 23rem;
    color: var(--background);
    font-size: 1.5rem;
    transition: border 0.2s ease;
    border-bottom: ${({ isFocused }) =>
      isFocused ? '1px solid var(--accent)' : '1px solid var(--white)'};
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

  @media screen and (${BREAKPOINTS.TABLET_M}) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  span {
    font-size: 2.5rem;
    font-weight: 300;

    @media screen and (${BREAKPOINTS.TABLET_L}) {
      display: none;
    }
  }
`;
