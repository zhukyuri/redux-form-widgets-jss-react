export const required = value => (value || typeof value === 'number'
  ? undefined
  : 'validation.required');

export const maxLength = max => value => (value && value.length > max
  ? `validation.maxLength${max}`
  : undefined);

export const maxLength15 = maxLength(15);

export const minLength = min => value => (value && value.length < min
  ? `validation.minLength${min}`
  : undefined);

export const minLength2 = minLength(2);

export const number = value => (value && Number.isNaN(Number(value))
  ? 'validation.number'
  : undefined);

export const minValue = min => value => (value && value < min
  ? `validation.minValue${min}`
  : undefined);

export const minValue12 = minValue(12);

export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'validation.email'
  : undefined);

export const tooYoung16 = value => (value && value < 16
  ? 'validation.tooYoung16'
  : undefined);

export const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value)
  ? 'validation.alphaNumeric'
  : undefined);

export const phoneNumber = value => (value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'validation.phoneNumber'
  : undefined);
