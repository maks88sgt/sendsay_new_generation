export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error: object, validator: (value: string) => undefined | string) => error || validator(value), undefined);


export const emailValidator = (email: string): undefined | string => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const result = re.test(String(email).toLowerCase());
  return result ? undefined : 'Email';
};

export const stringValidator = (str: string): undefined | string => {
  const re = /^[0-9a-zA-Z_]*$/;
  const result = re.test(String(str));
  return result ? undefined : 'String';
};

export const loginValidator = (str: string): undefined | string => {
  const emailCheck = emailValidator(str);
  const stringCheck = stringValidator(str);
  const result = !emailCheck || !stringCheck;
  return result ? undefined : 'Incorrect login';
};

export const passwordValidator = (str: string): undefined | string => {
  const re = /^[0-9a-zA-Z\s]*$/;
  const result = re.test(String(str));
  return result ? undefined : 'Password';
};

export const requiredValidator = (value: string): undefined | string => (value ? undefined : 'Required');

export const JSONValidator = (value: string): undefined | string => {
  try {
    JSON.parse(value);
    return undefined;
  }
  catch {
    return 'Invalid JSON';
  }
};

