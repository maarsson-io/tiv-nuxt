<template>
  <article>
    <LayoutPageTitle
      :content="tips.header"
    />
    <ContactBoxes
      :content="data.boxes"
    />
    <ContactTextBlock
      :content="data.texts"
    />
    <!--
    <ContactForm />
    -->
  </article>
</template>

<script setup lang="ts">
// The header is specific to this page; the contact details are shared with /contact.
const { data: tips } = await useContentData('contactTips');
const { data } = await useContentData('contact');
</script>
