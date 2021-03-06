import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', power: 33, stamina: 34, speed: 33 },
      { id: 11, name: 'Mr. Nice', power: 30, stamina: 40, speed: 30 },
      { id: 12, name: 'Narco', power: 40, stamina: 40, speed: 20 },
      { id: 13, name: 'Bombasto', power: 80, stamina: 10, speed: 10 },
      { id: 14, name: 'Celeritas', power: 40, stamina: 40, speed: 20 },
      { id: 15, name: 'Magneta', power: 30, stamina: 40, speed: 30 },
      { id: 16, name: 'RubberMan', power: 10, stamina: 50, speed: 40 },
      { id: 17, name: 'Dynama', power: 10, stamina: 40, speed: 50 },
      { id: 18, name: 'Dr IQ', power: 10, stamina: 80, speed: 10 },
      { id: 19, name: 'Magma', power: 40, stamina: 40, speed: 20 },
      { id: 20, name: 'Tornado', power: 20, stamina: 10, speed: 70 }
    ];
    return {heroes};
  }
}