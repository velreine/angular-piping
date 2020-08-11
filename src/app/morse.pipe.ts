import { Pipe, PipeTransform } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {


  transform(value: string, ...args: [string]): string {

    if(args[0] === 'morse') {
      return this.transFormToMorse(value);
    }

    if(args[0] === 'md5') {
      return this.transFormToMD5(value);
    }

    if(args[0] === 'fromMorse') {
      return this.transFormToText(value);
    }

    throw 'Unknown format requested, supported formats: \'md5\' and \'morse\'';

  }

  private transFormToMD5(input: string): string {
    return CryptoJS.MD5(input);
  }

  private transFormToText(morseInput: string): string {
    let transformed = "";

    let morseCharacters = morseInput.split(" ");

    morseCharacters.forEach(char => {
      transformed += 
        this.morseCharCodeSet[char]
        ? this.morseCharCodeSet[char]
        : char;
    });

    return transformed;
  }

  private transFormToMorse(input: string): string {
    let transformed = "";


    for(let i = 0; i < input.length; i++) {

      let item = input[i].toUpperCase();
      transformed += 
        this.charCodeMorseSet[item.charCodeAt(0)]
          ? this.charCodeMorseSet[item.charCodeAt(0)] 
          : input[i];

      if(i < input.length -1)
        transformed += " ";

    }

    return transformed;
  }

  private morseCharCodeSet = { 
    '.-..-.': '"', // " quotation mark
    '.----.': '\'', // ' apostrophe
    '-.--.': '(', // ( left parenthesis
    '-.--.-': ')', // ) right parenthesis
    '--..--': ',', // , comma
    '-....-': '-', // - hyphen
    '.-.-.-': '.', // Period (.)
    '-..-.': '/', // / Slash
    '-----': '0', // 0
    '.----': '1', // 1
    '..---': '2', // 2
    '...--': '3', // 3
    '....-': '4', // 4
    '.....': '5', // 5
    '-....': '6', // 6
    '--...': '7', // 7
    '---..': '8', // 8
    '----.': '9', // 9
    '---...': ':', // : colon
    '..--..': '?', // ? question mark
    '.--.-.': '@', // @ at sign
    '.-': 'A', //A
    '-...': 'B', //B
    '-.-.': 'C', //C
    '-..': 'D', //D
    '.': 'E', //E
    '..-.': 'F', //F
    '--.': 'G', // G
    '....': 'H', // H
    '..': 'I', // I
    '.---': 'J', // J
    '-.-': 'K', // K
    '.-..': 'L', // L
    '--': 'M', // M 
    '-.': 'N', // N
    '---': 'O', // O
    '.--.': 'P', // P
    '--.-': 'Q', // Q
    '.-.': 'R', // R
    '...': 'S', // S
    '-': 'T', // T
    '..-': 'U', //  U
    '...-': 'V', // V
    '.--': 'W', // W  
    '-..-': 'X', // X
    '-.--': 'Y', // Y
    '--..': 'Z', // Z
    '.--.-': 'Å', // Å
    '.-.-': 'Æ', // Æ
    //'-..-': 215, // × Multiplication sign
    '---.': 'Ø', // Ø
  }

  private charCodeMorseSet = { 
    34: '.-..-.', // " quotation mark
    39: '.----.', // ' apostrophe
    40: '-.--.', // ( left parenthesis
    41: '-.--.-', // ) right parenthesis
    //42: '', // * asterisk
    //43: '', // + plus sign
    44: '--..--', // , comma
    45: '-....-', // - hyphen
    46: '.-.-.-', // Period (.)
    47: '-..-.', // / Slash
    48: '-----', // 0
    49: '.----', // 1
    50: '..---', // 2
    51: '...--', // 3
    52: '....-', // 4
    53: '.....', // 5
    54: '-....', // 6
    55: '--...', // 7
    56: '---..', // 8
    57: '----.', // 9
    58: '---...', // : colon
    63: '..--..', // ? question mark
    64: '.--.-.', // @ at sign
    65: '.-', //A
    66: '-...', //B
    67: '-.-.', //C
    68: '-..', //D
    69: '.', //E
    70: '..-.', //F
    71: '--.', // G
    72: '....', // H
    73: '..', // I
    74: '.---', // J
    75: '-.-', // K
    76: '.-..', // L
    77: '--', // M 
    78: '-.', // N
    79: '---', // O
    80: '.--.', // P
    81: '--.-', // Q
    82: '.-.', // R
    83: '...', // S
    84: '-', // T
    85: '..-', //  U
    86: '...-', // V
    87: '.--', // W
    88: '-..-', // X
    89: '-.--', // Y
    90: '--..', // Z
    197: '.--.-', // Å
    198: '.-.-', // Æ
    215: '-..-', // × Multiplication sign
    216: '---.', // Ø

    //230: '???', // æ
    //248: '???', // ø
    //229: '???', // å
  }

  
  

}
