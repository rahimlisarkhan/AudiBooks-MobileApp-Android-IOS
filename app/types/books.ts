export type Authors = {
  name: string;
  id: number;
};

export type NarratorsType = {
  id: number;
  name: string;
};

export type PictureType = {
  thumbnail: string;
  main: string;
  small: string;
};

export type BookType = {
  id: number;
  title: string;
  picture?: PictureType;
  picture_urls?: PictureType;
  authors: Authors[];
};

export type GenreType = {
  id: number;
  name: string;
  picture_urls: PictureType;
  default_child: boolean;
};

export type BookDetailType = {
  id: number;
  title: number;
  year: number;
  second_year: number | null;
  duration: number;
  size: number;
  description: string;
  picture_urls: PictureType;
  rating: 1 | 2 | 3 | 4 | 5;
  featured: boolean;
  featured_priority: number;
  reviews_count: 6;
  presale: false;
  purchase_id: string;
  reward_purchase_id: string;
  uploads_count: number;
  type: string;
  text_sample: null;
  price: number;
  created_at: number;
  price_uah: number;
  authors: Authors[];
  narrators: NarratorsType;
  genre: GenreType;
};
