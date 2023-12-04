type LocaleObject = {
  _type?: string;
  [key: string]: any;
};

type LocaleObjectWithKey = {
  key: string;
  data: LocaleObject;
};

type Result = {
  localeTitle?: LocaleObject;
  localeBody?: LocaleObject;
  [key: string]: any;
};

export function findLocaleObjects(data: Result): LocaleObjectWithKey[] {
  const result: LocaleObjectWithKey[] = [];

  Object.keys(data).forEach((key) => {
    const item = data[key];
    if (key === 'localeTitle' || key === 'localeBody') {
      result.push({ key, data: item });
    } else if (typeof item === 'object' && item !== null) {
      if (item._type === 'localeTitle' || item._type === 'localeBody') {
        delete item._type;
        result.push({ key, data: item });
      }
    }
  });

  return result;
}
