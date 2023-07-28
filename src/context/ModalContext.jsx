import { useLazyQuery } from '@apollo/client';
import { createContext } from 'react';
import { FIND_COUNTRY_BY_CODE } from '../services/queries';
import { useState } from 'react';

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [getResults, response] = useLazyQuery(FIND_COUNTRY_BY_CODE);
  const [modalImage, setModalImage] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function getCountryInfo(countryCode, imageInfo) {
    getResults({ variables: { countryCode } });
    setModalImage(imageInfo);
    toggleModal();
  }

  return (
    <ModalContext.Provider
      value={{ getCountryInfo, response, modalImage, isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
