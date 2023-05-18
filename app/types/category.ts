export type CategoryType = {
  id: number;
  name: string;
  picture_urls: {
    thumbnail: string;
    main: string;
    small: string;
  };
  default_child: false;
  children: any[];
};
