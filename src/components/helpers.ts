// helpers.js
export function sum(a: number, b: number) {
  return a + b
}

//TODO:把16进制--》bytes
export function hexToBytes(hex: string) {
  const bytes = []
  for (let i = 0; i < hex.length - 1; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16))
  }
  return bytes
}

//把一个字节转换为bit数组，可输入16进制 如 byte :0x18;10进制 如 byte:18
export function byteToBitArray(byte: number) {
  const bitArray: boolean[] = []
  for (let i: number = 7; i >= 0; i--) {
    bitArray.push((byte >> i) & 1)
  }
  return bitArray
}

//把一个字节组转换为bit数组
export function bytesToBitArray(bytes: number[]) {
  const bitArray: boolean[] = []
  // console.log(bytes)
  bytes.forEach((value) => {
    // console.log(`Index: ${index}, Value: ${value}`);
    const tmp: boolean[] = byteToBitArray(value).reverse()  //这里反转是为了点的顺序从左边第一位开始
    tmp.forEach((value) => {
      bitArray.push(value)
    })
  })
  // console.log(bitArray)
  return bitArray
}
