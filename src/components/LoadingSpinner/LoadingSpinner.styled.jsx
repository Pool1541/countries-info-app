import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

`;

export const StyledLoadingSpinner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ isDesktop }) => (isDesktop ? ' 35rem' : '0')};
`;
export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid var(--background);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${loading} 1s linear infinite;
`;
