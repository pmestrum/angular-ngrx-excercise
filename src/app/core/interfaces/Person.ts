export interface PersonState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  errorMessage?: string;
  persons: Person[];
}

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

export interface SelectablePerson extends Person {
  selected: boolean;
}
