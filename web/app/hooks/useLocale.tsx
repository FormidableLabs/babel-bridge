import { useEffect, useState } from 'react';

const DEFAULT_LOCALE: string = 'en_US';
const LOCALE_API_URL: string = 'http://localhost:3000/api/locale';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

type StatusType = (typeof Status)[keyof typeof Status];

interface LocaleData {
  locale: string;
}

export const useLocale = (): { locale: string; status: StatusType } => {
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);
  const [status, setStatus] = useState<StatusType>(Status.IDLE);

  useEffect(() => {
    setStatus(Status.LOADING);
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {
        const response = await fetch(LOCALE_API_URL, { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: LocaleData = await response.json();
        setLocale(data.locale);
        setStatus(Status.SUCCESS);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setStatus(Status.ERROR);
        }
      }
    };

    getData();

    // Clean-up function to abort the fetch
    return () => {
      abortController.abort();
    };
  }, []);

  return { locale, status };
};
