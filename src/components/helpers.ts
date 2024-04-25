// helpers.js
export function sum(a:number, b:number) {
  return a + b;
}

//TODO:把16进制--》bytes
export function hexToBytes(hex:string) {
  const bytes = [];
  for(let i=0; i< hex.length-1; i+=2){
      bytes.push(parseInt(hex.substr(i, 2), 16));
  }
  return bytes;
}