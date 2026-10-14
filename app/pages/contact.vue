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
const { path } = useRoute();
const contentPath = path.replace(/\/+$/, '') || '/';
const { data } = await useAsyncData(`content-${contentPath}`,
  () => queryContent()
    .where({ _path: contentPath })
    .findOne()
);
</script>
