export interface LoadState<T> {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: T;
  errorMessage?: string;
}
