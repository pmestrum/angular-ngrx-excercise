export interface Person {
  'id': number;
  'email': string;
  'first_name': string;
  'last_name': string;
  'avatar': string;
}

export interface Persons {
  'page': number;
  'per_page': number;
  'total': number;
  'total_pages': number;
  'data': Person[];
}


export interface Selectable {
  selected: boolean;
}

export interface SelectablePerson extends Person, Selectable {}

export interface LoadState<T> {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: T;
  errorMessage?: string;
}
