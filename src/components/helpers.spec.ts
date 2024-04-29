import { expect, test } from 'vitest'
import { sum, hexToBytes, byteToBitArray, bytesToBitArray } from './helpers.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('hex', () => {
  const a = 0xffcd
  expect(a).toBe(65485)
})

test('byteToBitArray', () => {
  let res: boolean[] = byteToBitArray(0x18)
  expect(res[3]).toEqual(1)
  expect(res[4]).toEqual(1)
  expect(res).toEqual([0, 0, 0, 1, 1, 0, 0, 0])
  res = byteToBitArray(18)
  expect(res[3]).toEqual(1)
  expect(res[4]).toEqual(0)
  expect(res).toEqual([0, 0, 0, 1, 0, 0, 1, 0])
})

test('bytesToBitArray', () => {
  const res: boolean[] = bytesToBitArray([0x31, 0x01])
  // expect(res).toEqual([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1])
  expect(res).toEqual([1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0])
})

test('stringToUint8Array', () => {
  //0A01000000177D7F
  const hexArray: string[] = ['0A', '01', '00', '00', '00', '17', '7D', '7F']

  // 转换为字节数组
  const bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
  expect(bytes[1]).toStrictEqual(1)
})

test('十六进制数组转化为bytes', () => {
  const hex = 'B9 01EF'
  const outputOne: Array<number> = [185, 0, 30]
  const bytes = hexToBytes(hex)
  expect(bytes).toStrictEqual(outputOne)
  // console.log(bytes)
})
