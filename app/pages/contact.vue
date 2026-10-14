<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
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
const { data } = await useContentData('contact');
</script>
