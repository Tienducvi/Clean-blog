import axios from 'axios';
import { apiLink } from './linkApi';

// eslint-disable-next-line import/prefer-default-export
export const api = axios.create({
  baseURL: apiLink.apiLink,
});
