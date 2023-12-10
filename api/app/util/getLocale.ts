/** Gets the locale from the Accept-Language header or defaults to 'en-US' .*/
export const getLocale = (locale?: string) =>
  (locale?.split(',')[0].split(';')[0] ?? 'en-US').replace('-', '_');
