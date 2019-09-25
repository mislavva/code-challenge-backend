
const encode = (text: string) => {
  if (!text) {
    return '';
  }
  let encoded = '';
  let currentChar: string;
  let nextChar: string;
  let counter = 0;
  const textLength = text.length;

  for (let i = 0; i < textLength; i++) { // tslint:disable-line
    counter++; // tslint:disable-line
    currentChar = text[i];

    nextChar = text[i + 1];
    if (i === textLength - 1) {
      encoded += `${currentChar}${counter}`;
      break;
    }

    if (currentChar !== nextChar) {
      encoded += `${currentChar}${counter}`;
      counter = 0;
    }
  }

  return encoded;
};

export default {
  encode,
};

// Method implemenentation with regex
// const encode = (str: string) => {
//   if (!str) {
//     return '';
//   }
//   // Match all alphabetic characters
//   // followed by zero or more occurences of the same character
//   const regex = /([A-z])\1*/g;
//   return str.match(regex).map(g => g.charAt(0) + g.length).join('');
// };
