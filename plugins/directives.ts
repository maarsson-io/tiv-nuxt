import tooltip from './tooltip.min.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', tooltip)
})
