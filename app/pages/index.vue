<template>
  <StartpageSlider
    :content="data.slider"
  />
  <StartpageThreeBoxes
    :content="data.three_boxes"
  />
  <StartpageAbout
    :content="data.about"
  />
  <StartpageCounterBoxes
    :content="data.counter_boxes"
  />
  <StartpageTestimonials
    :content="data.testimonials"
    :testimonials="testimonials.blocks"
  />
  <StartpageSponsors
    :content="data.sponsors"
    :sponsors="sponsors.sponsors"
  />
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

const getSponsors = async () => {
  const { data } = await useAsyncData('content-sponsors',
    () => queryContent()
      .where({ _path: '/sponsors' })
      .findOne()
  );
  return data;
};
const sponsors = await getSponsors();

const { path } = useRoute();
const contentPath = path.replace(/\/+$/, '') || '/';
const { data } = await useAsyncData(`content-${contentPath}`,
  () => queryContent()
    .where({ _path: contentPath })
    .findOne()
);
</script>
