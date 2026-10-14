<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <LayoutMainImage
      :content="data.main_image"
    />
    <AboutTextBlock
      :content="data.text_block_one"
    />
    <AboutListBlock
      :content="data.list_block"
    />
    <AboutTextBlock
      :content="data.text_block_two"
    />
    <AboutImageRow
      :content="data.image_row_block"
    />
    <AboutTextBlock
      :content="data.text_block_three"
    />
    <AboutTestimonials
      :content="data.testimonials"
      :testimonials="testimonials.blocks"
    />
  </article>
</template>

<script setup lang="ts">
const getTestimonials = async () => {
  const { data } = await useAsyncData('content-testimonials',
    () => queryContent()
      .where({ _path: '/testimonials' })
      .findOne()
  );
  return data;
};

const testimonials = await getTestimonials();
const { path } = useRoute();
const contentPath = path.replace(/\/+$/, '') || '/';
const { data } = await useAsyncData(`content-${contentPath}`,
  () => queryContent()
    .where({ _path: contentPath })
    .findOne()
);
</script>
