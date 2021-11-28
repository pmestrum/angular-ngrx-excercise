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

/*
Create PersonState interface containing data (Person[]) and booleans for loading, loaded, failed
 */
