import {Enum} from '@/utils';

// export enum testEnum {
//   test1 = "test1",
//   test2 = "test2",
//   test3 = "test3",
//   test4 = "test4",
// }

export const testEnum = new Enum([
  { key: 'STEP1', name: '步骤1', value: 1 },
  { key: 'SETP2', name: '步骤2', value: 2 },
]);