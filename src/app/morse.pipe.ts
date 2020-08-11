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

    throw 'Unknown format requested, supported formats: \'md5\' and \'morse\'';

  }

  private transFormToMD5(input: string): string {
    //return crypto.
    //CryptoJS.MD5("addd");
    return CryptoJS.MD5(input);
  }

  private transFormToMorse(input: string): string {
    let transformed = "";


    for(let i = 0; i < input.length; i++) {

      let item = input[i].toUpperCase();
      transformed += 
        this.charCodeMorseSet[item.charCodeAt(0)]
          ? this.charCodeMorseSet[item.charCodeAt(0)] 
          : input[i];

    }

    return transformed;
  }

  private charCodeMorseSet = {
    
    34: '. - . . - .', // " quotation mark
    39: '. - - - - .', // ' apostrophe
    40: '- . - - .', // ( left parenthesis
    41: '- . - - . -', // ) right parenthesis
    //42: '', // * asterisk
    //43: '', // + plus sign
    44: '- - . . - -', // , comma
    45: '- . . . . -', // - hyphen
    46: '. - . - . -', // Period (.)
    47: '- . . - .', // / Slash
    48: '- - - - -', // 0
    49: '. - - - -', // 1
    50: '. . - - -', // 2
    51: '. . . - -', // 3
    52: '. . . . -', // 4
    53: '. . . . .', // 5
    54: '- . . . .', // 6
    55: '- - . . .', // 7
    56: '- - - . .', // 8
    57: '- - - - .', // 9
    58: '- - - . . .', // : colon
    63: '. . - - . .', // ? question mark
    64: '. - - . - .', // @ at sign
    65: '. -', //A
    66: '- . . .', //B
    67: '- . - .', //C
    68: '- . .', //D
    69: '.', //E
    70: '. . - .', //F
    71: '- - .', // G
    72: '. . . .', // H
    73: '. .', // I
    74: '. - - -', // J
    75: '- . -', // K
    76: '. - . .', // L
    77: '- .', // N 
    78: '- -', // M
    79: '- - -', // O
    80: '. - - .', // P
    81: '- - . -', // Q
    82: '. - .', // R
    83: '. . .', // S
    84: '-', // T
    85: '. . -', //  U
    86: '. . . -', // V
    87: '. - -', // W
    88: '- . . -', // X
    89: '- . - -', // Y
    90: '- - . .', // Z
    197: '. - - . -', // Å
    198: '. - . -', // Æ
    215: '- . . -', // × Multiplication sign
    216: '- - - .', // Ø

    //230: '???', // æ
    //248: '???', // ø
    //229: '???', // å
  }

  
  

}
