const { UP, DOWN } = require('./Constant/constant');

const STRING_MAKER = {
  BRACKET: {
    OPEN: '[',
    CLOSE: ']',
  },
  SLASH: '|',
  EMPTY: '   ',
  RIGHT: ' O ',
  WRONG: ' X ',
};

module.exports = function resultMaker(bridge, index, bool) {
  result = '';
  result += makeOneLine(bridge, UP, index);
  result += addLastOne(bridge.getbridgePart(index), bool, UP);
  result += '\n';
  result += makeOneLine(bridge, DOWN, index);
  result += addLastOne(bridge.getbridgePart(index), bool, DOWN);
  return result;
};

function makeOneLine(bridge, right, index) {
  let string = STRING_MAKER.BRACKET.OPEN;
  for (let x = 0; x < index; x++) {
    const direction = bridge.getbridgePart(x);
    if (direction === right) string += STRING_MAKER.RIGHT;
    else string += STRING_MAKER.EMPTY;
    string += STRING_MAKER.SLASH;
  }
  return string;
}

function addLastOne(last, bool, direction) {
  if (bool) {
    if (direction == last)
      return STRING_MAKER.RIGHT + STRING_MAKER.BRACKET.CLOSE;
    return STRING_MAKER.EMPTY + STRING_MAKER.BRACKET.CLOSE;
  }
  if (direction == last) return STRING_MAKER.EMPTY + STRING_MAKER.BRACKET.CLOSE;
  return STRING_MAKER.WRONG + STRING_MAKER.BRACKET.CLOSE;
}