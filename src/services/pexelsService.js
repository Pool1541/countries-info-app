import { createClient } from 'pexels';
import { API_KEY } from '../config/pexels';

const client = createClient(API_KEY);
const orientation = 'landscape';

export async function fetchPhoto(query) {
  const response = await client.photos.search({ query, orientation, per_page: 1 });
  return {
    image: response.photos[0].src.medium,
    alt: response.photos[0].alt,
  };
}
