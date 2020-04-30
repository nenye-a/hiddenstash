export type GetToken = {
  token: string;
};

export type SearchRecommendation = {
  url: string;
  price: string;
};

export type SearchResult = Error & {
  name: string;
  price: string;
  result: Array<SearchRecommendation>;
};

export type AddStashItemVariables = {
  name: string;
  price: number;
  source: string;
};

export type Error = {
  success?: boolean;
  message?: string;
};
