import { Poster } from "./Poster";

export interface Response {
  data: Poster[];
  isLoading: boolean;
  error: boolean;
}
