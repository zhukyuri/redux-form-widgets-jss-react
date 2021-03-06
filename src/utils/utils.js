// @flow

/**
 * Create unique name event from field name
 * @param name
 * @returns {string}
 */
export const eName = name => `event-${name}`;

/**
 * Get default value
 * @param componentType
 * @returns {string|Array}
 */
export const getDef = (componentType) => {
  switch (componentType) {
    case 'text':
    case 'select':
    case 'checkList':
    case 'datepicker':
      return '';

    case 'selectMulti':
    case 'checkListMulti':
    case 'inlineCheckMulti':
      return [];

    default:
      return '';
  }
};


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
  if (!Array.isArray(data)) return undefined;
  if (itemId === '') return undefined;

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
  if (activeItems === undefined || activeItems === null) return false;

  if (Array.isArray(activeItems)) {
    return undefined !== findItemInArrayById(activeItems, itemId, valueField);
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
  if (!Array.isArray(currentArray)) return;
  const isItem = findItemInArrayById(currentArray, itemId, valueField);

  if (isItem === undefined) {
    return addItemToArrayById(data, itemId, valueField, currentArray);
  }

  return removeItemFromArrayById(itemId, valueField, currentArray);
};

export const toSimpleArray = (
  data: Array<any>, valueField: string,
): Array<any> => (!Array.isArray(data) ? [] : data.map(
  i => (i[valueField]),
));

export const createTitle = (
  value: any, textField: string, emptyText: string, cbTranslateText: any
): string => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      if (value[0] === undefined || !textField ) {
        return !cbTranslateText ? 'Value not found' : cbTranslateText('global.valueNotFound');
      }

      return value[0][textField];
    }
    if (value.length > 1) {
      return `${value.length} ${!cbTranslateText ? 'item(s)' : cbTranslateText('global.items')}`;
    }

    return !emptyText ? '' : emptyText;
  }
  if (value === undefined || value === null) return '';

  return value[textField];
};

export const createTextFromArray = (
  data: Array, textField: string, emptyText: string, cbTranslateCounts,
): string => {
  const txtEmpty = (text) => {
    return text === '' ? !emptyText ? text : emptyText : text;
  };

  if (!Array.isArray(data) || !data.length) return txtEmpty('');

  if (data.length === 1) {
    return data[0][textField];
  }

  return !cbTranslateCounts ? `${data.length} item(s)` : cbTranslateCounts(data.length);
};

/**
 * Create title in input box for List select/check redux field;
 *  - for array value without callback;
 *  - for array value with callback;
 *  - for string/number value without callback;
 *  - for string/number value with callback;
 *
 * @param {number|string|array} value - data from redux
 * @param {array} data - full data array
 * @param {string} textField
 * @param {string} valueField
 * @param {function} cbTextFormat
 * @returns {String} - title in input box
 */
export const createTitleFromReduxValue = (
  value: any, data: Array<any>, textField: string, valueField: string, cbTextFormat: any,
): string => {
  // Array value format
  if (Array.isArray(value)) {
    // not callback
    if (!cbTextFormat) {
      if (value.length === 1) {
        return value[0][textField];
      }
      if (value.length > 1) {
        return `${value.length} item(s)`;
      }

      return '';
    }

    // for callback
    const fullDataValue = value.map(i => findItemInArrayById(data, i, valueField));

    return cbTextFormat(fullDataValue, textField, valueField);
  }

  // Simple value format
  const fullData = findItemInArrayById(data, value, valueField);

  return !cbTextFormat ? fullData[textField] : cbTextFormat(fullData, textField, valueField);
};

export const setOriginId = (
  data: Array<any>, itemId: | string | number, valueField: string,
): | string | number => {
  const find = findItemInArrayById(data, itemId, valueField);

  if (!find) return null;

  return find[valueField];
};

/**
 * Convert redux value format to full value format
 * @param {number|string|array} value - data from redux
 * @param {array} data - full data array
 * @param {string} valueField
 * @returns {any|Array<any>}
 */
export const convertValueReduxToFullFormat = (
  value: Array<any> | string | number, data: Array<any>, valueField: string,
) => {
  if (Array.isArray(value)) {
    return value.map(i => findItemInArrayById(data, i, valueField));
  }

  return findItemInArrayById(data, value, valueField);
};


export const setFullSelect = (data, valueField) => {
  if (!Array.isArray(data)) return [];

  return data.reduce((a, i) => {
    a.push(i[valueField]);

    return a;
  }, []);
};
