import Flag from 'react-world-flags';
import {
  FlagContainer,
  ModalFeature,
  ModalImage,
  ModalTitle,
  States,
  StyledModal,
  Title,
  Wrapper,
} from './Modal.styled';
import useModal from '../../hooks/useModal';
import useOutsideClick from '../../hooks/useOutsideClick';
import LoadingSpiner from '../LoadingSpinner/LoadingSpiner';

export default function Modal() {
  const {
    response: { data, loading },
    modalImage,
    toggleModal,
  } = useModal();
  const ref = useOutsideClick(toggleModal);

  return (
    <StyledModal ref={ref}>
      <Wrapper>
        <ModalImage>
          <img src={modalImage?.image} alt={modalImage?.alt} />
        </ModalImage>
        {loading ? (
          <LoadingSpiner />
        ) : (
          <>
            <ModalTitle>
              <FlagContainer>
                <Flag code={data?.country?.code} width={100} height={100} />
              </FlagContainer>
              <Title>
                <h3>{data?.country?.name}</h3>
                <p>{data?.country?.continent.name}</p>
              </Title>
            </ModalTitle>
            <ModalFeature>
              <p>Capital :</p>
              <p>{data?.country?.capital}</p>
            </ModalFeature>
            <ModalFeature>
              <p>Idioma :</p>
              <p>{data?.country?.languages[0]?.name}</p>
            </ModalFeature>
            <ModalFeature>
              <p>Moneda :</p>
              <p>{data?.country?.currency}</p>
            </ModalFeature>
            {data?.country?.states.length > 0 && (
              <States>
                <p>Estados :</p>
                <ul>
                  {data?.country?.states.map((state) => (
                    <li key={state.name}>
                      <p>{state.name}</p>
                    </li>
                  ))}
                </ul>
              </States>
            )}
          </>
        )}
      </Wrapper>
    </StyledModal>
  );
}
