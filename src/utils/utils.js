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

/**
 * Is it active item in Object format data
 * @param {object} activeItems
 * @param {string} itemId
 * @returns {boolean}
 */
export const isActiveInObj = (
  activeItems: { [id: string]: any }, itemId: string,
) => {
  if (!activeItems) return false;

  return Object.prototype.hasOwnProperty.call(activeItems, itemId);
};

export const findItemInArrayById = (
  data: Array<any>, itemId: | string | number, valueField: string,
): boolean => {
  if (!Array.isArray(data)) return null;

  return data.find(f => (f[valueField] === itemId || f[valueField] === itemId * 1));
};

/**
 * Is active item
 * @param {array} activeItems
 * @param {string} itemId
 * @param {string} valueField
 * @returns {boolean}
 */
export const isActive = (
  activeItems: Array<any>, itemId: string | number, valueField: string,
) => {
  if (Array.isArray(activeItems)) {
    const ttt = findItemInArrayById(activeItems, itemId, valueField);

    return undefined !== ttt;
  }
  return activeItems[valueField] === itemId || activeItems[valueField] === itemId * 1;
};

export const addItemToArrayById = (
  data: Array<any>, itemId: | string | number, valueField: string, currentArray: Array<any>,
): Array<any> => {
  const item = findItemInArrayById(currentArray, itemId, valueField);

  if (item !== undefined) return currentArray;

  const itemNew = findItemInArrayById(data, itemId, valueField);

  currentArray.push(itemNew);
  return currentArray;
};

export const removeItemFromArrayById = (
  itemId: | string | number, valueField: string, currentArray: Array<any>,
): Array<any> => {
  const item = findItemInArrayById(currentArray, itemId, valueField);

  if (item === undefined) return currentArray;

  return currentArray.reduce((acc, i) => {
    if (!(i[valueField] === itemId || i[valueField] === itemId * 1)) {
      acc.push(i);
    }
    return acc;
  }, []);
};

export const toggleItemInArrayById = (
  data: Array<any>, itemId: | string | number, valueField: string,
  currentArray: Array<any>,
): Array<any> => {
  const isItem = findItemInArrayById(currentArray, itemId, valueField);

  if (isItem === undefined) {
    return addItemToArrayById(data, itemId, valueField, currentArray);
  }
  return removeItemFromArrayById(itemId, valueField, currentArray);
};

export const toSimpleArray = (data: Array<any>, valueField: string): Array<any> => data.map(
  i => (i[valueField]),
);

export const createTitle = (value: any, textField: string): string => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return value[0][textField];
    }
    if (value.length > 1) {
      return `${value.length} item(s)`;
    }

    return 'not filled';
  }

  return value[textField];
};

export const setOriginId = (
  data: Array<any>, itemId: | string | number, valueField: string,
): | string | number => {
  const find = findItemInArrayById(data, itemId, valueField);

  if (!find) return null;

  return find[valueField];
};
