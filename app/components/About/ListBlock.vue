<template>
  <section class="section about-page py-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3" />

        <div class="col-lg-9 text-justify">
          <div class="skill-list">
            <h5 class="mb-4">
              {{ content.title }}
            </h5>
            <template
              v-for="(list, index) in content.items"
              :key="index"
            >
              <ul class="list-unstyled department-service mb-2">
                <li
                  v-for="(item, index) in list"
                  :key="index"
                >
                  <i class="icofont-check mr-2" />{{ item }}
                </li>
              </ul>
              <div
                v-if="index < content.items.length - 1"
                class="divider my-4"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
