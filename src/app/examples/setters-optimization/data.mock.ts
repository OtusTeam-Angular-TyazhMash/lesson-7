import { UserInterface } from './user.interface';

export function createMockTableData(length = 10): UserInterface[] {
  return Array.from(Array(length).keys()).map((index) => ({
    name: `name--${index}`,
    age: 2 * index,
  }));
}
