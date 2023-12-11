import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'hakfgcdn',
  dataset: 'development',
  apiVersion: '2023-10-09',
  token:
    'sktxqWpLswHSCCRSkqytdJoEfQUtrxUebPmsL4Bz37obSDfc8OCQDMHLyC8NYjGlX0l8Rwl3X8hc99ncccEHKX0XfDPo06VXCn6hpYB8Gmig3ohYSB0FHv8CZrMlHIOagrbwLd84HU8aDpcJTCgcq30w0oMY7WZISEhHyjdlBj2x8GdGe9TP',
  useCdn: true,
});

export const getLocale = (locale: string | null) => (locale?.split(',')[0].split(';')[0] ?? 'en-US').replace('-', '_');
