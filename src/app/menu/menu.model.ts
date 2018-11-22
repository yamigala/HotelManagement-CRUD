export class Menu {
  id: number;
  details: Details;
  address: Address;
}

export class Details {
  id: number;
  menuName: string;
  quantity: number;
  price: number;
}

export class Address {
  id: number;
  city: string;
  pinCode: number;
}
