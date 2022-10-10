const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let arrKey = key.repeat(Math.ceil(message.length/key.length)).slice(0, message.length).split('')
    let res = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i].toLowerCase().charCodeAt() >= 97 && message[i].toLowerCase().charCodeAt() <= 122) {
        let a = message[i].toUpperCase().charCodeAt(0);
        let b = arrKey[i].toUpperCase().charCodeAt(0);
        if (a+b < 91 + 65) {
          res.push(String.fromCharCode(a + b - 65))
        } else {
          res.push(String.fromCharCode(a + b - 65 - 26))
        }       
      } else {
        res.push(message[i])
        arrKey.splice(i, 0, message[i])
      }
    }
    if (this.bool) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    console.log(arguments.length)
    if (arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let arrKey = key.repeat(Math.ceil(encryptedMessage.length/key.length)).slice(0, encryptedMessage.length).split('')
    let res = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt() <= 90) {
        let a = encryptedMessage[i].toUpperCase().charCodeAt(0);
        let b = arrKey[i].toUpperCase().charCodeAt(0);
        if (a-b < 0) {
          res.push(String.fromCharCode((a - b) + 65 + 26))
        } else {
          res.push(String.fromCharCode((a - b) + 65))
        }
      } else {
        res.push(encryptedMessage[i])
        arrKey.splice(i, 0, encryptedMessage[i])
      }
    }
    if (this.bool) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
