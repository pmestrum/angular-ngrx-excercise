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

export interface LoadState<T> {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  errorMessage?: string;
  data: T[];
}

export interface PersonState extends LoadState<Person> {
}

/*
Create PersonState interface containing data (Person[]) and booleans for loading, loaded, failed
 */
