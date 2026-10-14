<template>
  <a
    class="obfuscated"
    href="#"
    :data-account="mailAccount"
    :data-domain="mailDomain"
    :data-tld="mailTld"
    onclick="window.location.href = 'mailto:Tryggbilen <' + this.dataset.account + '@' + this.dataset.domain + '.' + this.dataset.tld + '>?subject=Tips till Tryggbilen'; return false;"
  >
    <i
      v-if="withIcon"
      class="icofont-ui-message mr-2"
    />
  </a>
</template>

<script lang="ts">
export default {
  props: {
    withIcon: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const config = useAppConfig();

    return { config };
  },

  computed: {
    mailAccount(): string {
      return this.config.mail.split('@').shift();
    },

    mailDomainAndTld(): string {
      return this.config.mail.split('@').pop();
    },

    mailDomain(): string {
      return this.mailDomainAndTld.split('.').shift();
    },

    mailTld(): string {
      return this.mailDomainAndTld.split('.').pop();
    },
  },
};
</script>

<style>
.obfuscated::after {
  content: attr(data-account) "@" attr(data-domain) "." attr(data-tld);
}
</style>
