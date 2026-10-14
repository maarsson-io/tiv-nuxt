import tooltip from '~/directives/tooltip.min.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', tooltip)
})
