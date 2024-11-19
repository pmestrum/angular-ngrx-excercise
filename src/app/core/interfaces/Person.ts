
export interface Person {
  'id': number;
  'email': string;
  'first_name': string;
  'last_name': string;
  'avatar': string;
}

export interface SelectablePerson extends Person {
  selected: boolean;
}

export interface Persons {
  'page': number;
  'per_page': number;
  'total': number;
  'total_pages': number;
  'data': Person[];
}
