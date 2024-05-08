import { expect, test } from 'vitest'
import { sum, hexToBytes, byteToBitArray, bytesToBitArray, bytes4_Float,emcryption } from './helpers.ts'

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

test('4个字节转换为浮点数', () => {
  const number: number = 3.1415926
  const roundedNumber: number = parseFloat(number.toFixed(2))
  // console.log(roundedNumber); // 输出 3.14
  expect(roundedNumber).toEqual(3.14)

  let res: number = bytes4_Float([0x3f, 0x9e, 0xb8, 0x52])
  expect(res).toEqual(1.24)

  
  // 63, 158, 141, 221
  res=bytes4_Float([0x239,0x191,0x189,0x82])
  // console.log(res)
  
  res=bytes4_Float([63,158,141,221])
  console.log(res)

})

test('加密',()=>{
  const pass:string='11111111a'
  const hash = emcryption(pass)
  expect(hash).toEqual('7b77e79744fd7213bf92af2fb62e04bc7236c833d94fa61ae023df74150e8f9d')
})
