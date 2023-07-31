import { Spinner, StyledLoadingSpinner } from './LoadingSpinner.styled';

export default function LoadingSpiner({ mainSpinner = false }) {
  const isDesktop = setIsdesktop();

  function setIsdesktop() {
    if (window.innerWidth <= 1024) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <StyledLoadingSpinner isDesktop={mainSpinner && isDesktop}>
      <Spinner />
    </StyledLoadingSpinner>
  );
}
