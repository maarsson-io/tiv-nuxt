import tooltip from './tooltip.min.js';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(tooltip);
  nuxtApp.vueApp.directive('tooltip', tooltip)
})
