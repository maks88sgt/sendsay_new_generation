export const JSONformater = (value: string): string => {
  try {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, 4);
  }
  catch {
    console.log('Cann\'t reformat invalid JSON');
    return value;
  }
};