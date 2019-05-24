// @flow

/**
 * Get one only item from array by itemId
 * @param {array} data
 * @param {string} valueField
 * @param {string} findId
 * @returns {null|any}
 */
export const getItemFromArrayByItemId = (
  data: Array<*>, valueField: string, findId: any,
): null | any => {
  const filter = data.filter((f) => {
    if (Object.prototype.hasOwnProperty.call(f, valueField)) {
      return f[valueField] === findId || f[valueField] === parseInt(findId, 10);
    }

    return false;
  });

  return filter.length ? filter[0] : null;
};

/**
 * Conver redux value to Object data format
 * @param {any} value
 * @param {array} data
 * @param {string} valueField
 * @returns {*}
 */
export const valueToObject = (
  value: any, data: Array<*>, valueField: string,
): { [id: string]: any } => {
  if (!value || !valueField || !Array.isArray(data)) return {};
  if (typeof value === 'string' || typeof value === 'number') {
    const arrayItem = getItemFromArrayByItemId(data, valueField, value);

    return !arrayItem ? {} : { [arrayItem[valueField]]: arrayItem };
  }

  // TODO for value Array

  return {};
};

/**
 * Convert object data structure to array structure
 * @param {object} obj
 * @returns {array}
 */
export const objectToArray = (obj: { [id: string]: any }): Array<*> => {
  if (!obj || typeof obj !== 'object') return [];

  return Object.keys(obj)
    .reduce((acc, key) => {
      acc.push(obj[key]);

      return acc;
    }, []);
};
