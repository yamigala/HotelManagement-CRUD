import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Menu } from './menu/menu.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menus: Menu[] = [
      {
        id: 1,
        details: { id: 11, menuName: 'southIndian', quantity: 3, price: 500 },
        address: { id: 111, city: 'valsad', pinCode: 396001 }
      },
      {
        id: 2,
        details: { id: 22, menuName: 'Italian', quantity: 5, price: 1500 },
        address: { id: 222, city: 'mumbai', pinCode: 42007 }
      }
    ];
    return { menus };
  }
}
