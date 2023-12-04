export type SearchTabValue = "movies" | "tv" | "person";

export interface BaseSearchState {
  loading: boolean;
  pages: number;
  error?: string;
}
