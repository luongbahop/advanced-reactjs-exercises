export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface State {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  states: State[];
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
}
