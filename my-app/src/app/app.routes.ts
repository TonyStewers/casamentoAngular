import { Routes } from '@angular/router';
import { GiftList } from './gift-list/gift-list';
import { Confirmation } from './confirmation/confirmation';

export const routes: Routes = [
  {
    path: 'giftlist',
    component: GiftList,
    title: 'Lista de Presentes',
  },
  {
    path: 'confirmation',
    component: Confirmation,
    title: 'Confirmação de Presença',
  },
];
