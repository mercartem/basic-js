const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|'
  }
  if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('addition') && options.hasOwnProperty('additionRepeatTimes')) {
    let addRepeat = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).split('');
    let addSeparator = addRepeat.slice(0, -options.additionSeparator.length).join('')
    let strRepeat = (str + addSeparator + options.separator).repeat(options.repeatTimes).split('')
    let res = strRepeat.slice(0, -options.separator.length).join('')
    return res
  }
  if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('addition')) {
    let addRepeat = (options.addition + options.additionSeparator).split('');
    let addSeparator = addRepeat.slice(0, -options.additionSeparator.length).join('')
    let strRepeat = (str + addSeparator + options.separator).repeat(options.repeatTimes).split('')
    let res = strRepeat.slice(0, -options.separator.length).join('')
    return res
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('separator')) {
    let addRepeat = (options.addition + options.additionSeparator).split('');
    let addSeparator = addRepeat.slice(0, -options.additionSeparator.length).join('')
    let strRepeat = (str + addSeparator + options.separator).split('')
    let res = strRepeat.slice(0, -options.separator.length).join('')
    return res 
  }

  let strRepeat = (str + options.separator).repeat(options.repeatTimes).split('')
  let res = strRepeat.slice(0, -options.separator.length).join('')
  return res;
}

module.exports = {
  repeater
};
