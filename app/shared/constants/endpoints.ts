export const ENDPOINTS = {
  CATAGORIES: '/genres',
  CATALOG: '/books/catalog',
  BOOK_ID: (id: number) => `/books/${id}`,
  COMPILATIONS: '/compilations?limit=10',
};
