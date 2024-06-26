import CryptoJS from 'crypto-js'

// helpers.js
export function sum(a: number, b: number) {
  return a + b
}

//把16进制--》bytes
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
    bitArray.push(Boolean((byte >> i) & 1))
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
export function bytes4_Float(bytes: number[], decimal_number: number = 2) {
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

export function emcryption(original_value: string) {
  const hash = CryptoJS.SHA256(original_value).toString()
  return hash
}

/**
 *  MODBUS-RTU CRC校验
 * @param data Buffer对象十六进制Hex
 * @returns {any[]}  十六进制高低位
 * @constructor
 */
export function MODBUS_CRC(data:Buffer) {
  let crcValue = 0xffff
  for (let i = 0; i < data.length; i++) {
    crcValue ^= data[i] & 0xffff
    for (let j = 0; j < 8; j++) {
      if (crcValue & 0x0001) {
        crcValue >>= 1
        crcValue ^= 0xa001
      } else {
        crcValue >>= 1
      }
    }
  }

  const _crcValue = crcValue.toString(16)
  // console.log(crcValue)
  const crcArr = new Array(2)
  crcArr[0] = _crcValue.substring(2, 4)
  crcArr[1] = _crcValue.substring(0, 2)
  return crcArr[0] + crcArr[1]
}
