import { TFunction } from 'i18next';

interface Menu {
  label: string;
  path: string;
}

export const mainMenu = (t: TFunction): Menu[] => [
  {
    label: t('home'),
    path: '/',
  },

  {
    label: t('addMovie'),
    path: '/add-movie',
  },

  {
    label: t('top5'),
    path: '/top-movies',
  },
];
