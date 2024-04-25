import { expect, test } from 'vitest'
import { sum,hexToBytes } from './helpers.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('hex',()=>{
  const a=0xffcd;
  expect(a).toBe(65485);
})




// function hexToBytes(hex: string) {
//   return  Buffer.from(hex, 'hex');
// }



test('十六进制数组转化为bytes',()=>{
  const hex = "B9 01EF";
  const outputOne: Array<number> = [185, 0,30];
  const bytes = hexToBytes(hex);
  expect(bytes).toStrictEqual(outputOne);
  console.log(bytes);
})