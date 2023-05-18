import {ENDPOINTS} from '../shared/constants/endpoints';
import {METHODS} from '../shared/constants/methods';
import {instanceAxios} from '../shared/helpers/createAxios';

export const getCatagories = () =>
  instanceAxios({
    method: METHODS.GET,
    url: ENDPOINTS.CATAGORIES,
  });

export const getCatalogBooks = () =>
  instanceAxios({
    method: METHODS.GET,
    url: ENDPOINTS.CATALOG,
  });

export const getBookID = (id: number) =>
  instanceAxios({
    method: METHODS.GET,
    url: ENDPOINTS.BOOK_ID(id),
  });

export const getCompilationsBooks = () =>
  instanceAxios({
    method: METHODS.GET,
    url: ENDPOINTS.COMPILATIONS,
  });
