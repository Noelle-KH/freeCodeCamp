function rot13(str) {
  let caesarsCipher = ''
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      if (charCode - 13 < 65) {
        caesarsCipher += String.fromCharCode(charCode - 13 + 26)
      } else {
        caesarsCipher += String.fromCharCode(charCode - 13)
      }
    } else {
      caesarsCipher += str[i]
    }
  }
  return caesarsCipher
}


console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))