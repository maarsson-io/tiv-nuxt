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
    <ContactForm />
  </article>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({ _path: path })
    .findOne()
);
</script>
