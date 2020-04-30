export type GetToken = {
  token: string;
};

export type SearchRecommendation = {
  url: string;
  price: string;
};

export type SearchResult = {
  name: string;
  price: number;
  result: Array<SearchRecommendation>;
};

export type AddStashItemVariables = {
  name: string;
  price: number;
  source: string;
};
