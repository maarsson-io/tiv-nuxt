<template>
  <article>
    <LayoutPageTitle
      :content="header.header"
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
const getHeader = async (path) => {
  const { data } = await useAsyncData(`content-${path}`,
    () => queryContent()
      .where({ _path: path })
      .findOne()
  );
  return data;
};

const { path } = useRoute();
const contentPath = path.replace(/\/+$/, '') || '/';
const header = await getHeader(contentPath);
const { data } = await useAsyncData('content-contact',
  () => queryContent()
    .where({ _path: '/contact' })
    .findOne()
);
</script>
