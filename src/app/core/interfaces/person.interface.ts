export interface PersonInterface {
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
  'data': PersonInterface[];
}


export interface Selectable {
  selected: boolean;
}

export interface SelectablePerson extends PersonInterface, Selectable {}

