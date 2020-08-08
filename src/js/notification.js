import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// export const myInfo = info({
//   title: 'To many countries',
//   text: 'Your query is wide. Add more letters to the searchfild',
// });

// export const myAlert = alert({
//   title: 'Not found',
//   text: 'There is no such country',
// });

export function baseInfo() {
  info({
    title: 'Too many countries',
    text: 'Your query is wide. Add more letters to the searchfild',
  });
}
export function baseAlert() {
  alert({
    title: 'Not found',
    text: 'There is no such country',
  });
}
