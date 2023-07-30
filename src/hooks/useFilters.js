import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { images } from '../config/imagesMap';

const initialState = [
  {
    code: ['OC'],
    image: images.default,
    name: 'Oceania',
    selected: false,
  },
  {
    code: ['NA', 'SA'],
    image: images.SA,
    name: 'América',
    selected: false,
  },
  {
    code: ['AS'],
    image: images.AS,
    name: 'Asia',
    selected: false,
  },
  {
    code: ['EU'],
    image: images.default,
    name: 'Europa',
    selected: false,
  },
  {
    code: ['AF'],
    image: images.AF,
    name: 'Africa',
    selected: false,
  },
  {
    code: ['AN'],
    image: images.default,
    name: 'Antártida',
    selected: false,
  },
];

export default function useFilters() {
  const [continents, setContinents] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get('continentes')?.split(',') || [];
  const continentCodes = continents
    .filter((continent) => continent.selected)
    .flatMap((continent) => continent.code);

  function changeParams(continentName) {
    const currentParams = searchParams.get('continentes') || '';

    if (currentParams?.includes(continentName)) {
      const filteredParams = currentParams.split(',').filter((param) => param !== continentName);
      const continentes = filteredParams.length > 0 && { continentes: filteredParams.join(',') };

      setSearchParams(continentes);
    } else {
      const params = currentParams ? currentParams + ',' + continentName : continentName;
      setSearchParams({ continentes: params });
    }
  }

  function clearParams() {
    const voidParams = searchParams.delete('continentes');
    setSearchParams(voidParams);
  }

  useEffect(() => {
    const temp = continents.map((continent) => {
      if (currentParams.includes(continent.name)) {
        continent.selected = true;
      } else {
        continent.selected = false;
      }

      return continent;
    });
    setContinents([...temp]);
  }, [searchParams]);

  return { continents, changeParams, clearParams, continentCodes };
}
