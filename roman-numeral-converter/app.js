function convertToRoman(num) {
  const romanArray = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  if (num === 0) return ''

  for (let roman of romanArray) {
    if (num >= roman[0]) {
      return roman[1] + convertToRoman(num - roman[0])
    }
  }
}


console.log(convertToRoman(2))
console.log(convertToRoman(3))
console.log(convertToRoman(4))
console.log(convertToRoman(5))
console.log(convertToRoman(9))
console.log(convertToRoman(12))
console.log(convertToRoman(16))
console.log(convertToRoman(29))
console.log(convertToRoman(44))
console.log(convertToRoman(45))
console.log(convertToRoman(68))
console.log(convertToRoman(83))
console.log(convertToRoman(97))
console.log(convertToRoman(99))
console.log(convertToRoman(400))
console.log(convertToRoman(500))
console.log(convertToRoman(501))
console.log(convertToRoman(649))
console.log(convertToRoman(798))
console.log(convertToRoman(891))
console.log(convertToRoman(1000))
console.log(convertToRoman(1004))
console.log(convertToRoman(1006))
console.log(convertToRoman(1023))
console.log(convertToRoman(2014))
console.log(convertToRoman(3999))