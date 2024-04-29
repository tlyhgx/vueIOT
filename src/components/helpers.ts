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
    const tmp: boolean[] = byteToBitArray(value).reverse() //这里反转是为了点的顺序从左边第一位开始
    tmp.forEach((value) => {
      bitArray.push(value)
    })
  })
  // console.log(bitArray)
  return bitArray
}

//bytes :4个字节如[0x3F,0x9E,0xB8,0x52],decimal_number:小数位数-->得到一个float
export function bytes4_Float(bytes: numer[], decimal_number: number = 2) {
  const register1 = bytes[0]
  const register2 = bytes[1]
  const register3 = bytes[2]
  const register4 = bytes[3]

  // 创建一个ArrayBuffer和DataView
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint8(0, register1)
  view.setUint8(1, register2)
  view.setUint8(2, register3)
  view.setUint8(3, register4)
  // 从ArrayBuffer读取浮点数
  const float = view.getFloat32(0)
  const outFloat = parseFloat(float.toFixed(decimal_number))
  // console.log(outFloat) // 输出浮点数
  return outFloat
}
