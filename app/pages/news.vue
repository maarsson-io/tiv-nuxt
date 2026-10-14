<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <NewsItems
      :content="data.items"
    />
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
