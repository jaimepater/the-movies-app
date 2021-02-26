import { TFunction } from 'i18next';

export const mainMenu = (t: TFunction) => [
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
    path: '/top-5',
  },
];
