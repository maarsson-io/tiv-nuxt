<template>
  <!-- Navigation -->
  <nav
    id="navbar"
    class="navbar navbar-expand-lg navigation"
  >
    <div class="container">
      <NuxtLink
        to="/"
        class="navbar-brand d-flex m-0"
      >
        <img
          src="/logo/logo_old.svg"
          alt=""
          class="logo"
        >
        <img
          src="/logo/logo_text.svg"
          :alt="config.name"
          class="logo-text ml-3"
        >
      </NuxtLink>
      <!-- Burger icon -->
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarmain"
        aria-controls="navbarmain"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMobileNav"
      >
        <span class="icofont-navigation-menu" />
      </button>
      <!-- Menu -->
      <div
        id="navbarmain"
        :class="'collapse navbar-collapse' + (showMobileNav ? ' show' : '')"
      >
        <ul class="navbar-nav ml-auto">
          <li
            v-for="(item, index) in navigation"
            :key="index"
            :class="'nav-item' + (item.items ? ' dropdown' + (isDropdownOpen(index) ? ' show' : '') : null)"
          >
            <NuxtLink
              v-if="!item.items"
              :to="item.link"
              class="nav-link"
            >
              {{ item.title }}
            </NuxtLink>
            <template
              v-else
            >
              <a
                id="dropdown"
                class="nav-link dropdown-toggle"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click.prevent="toggleDropdown(index)"
              >Hjälp oss <i class="icofont-thin-down" /></a>
              <ul
                :class="'dropdown-menu' + (isDropdownOpen(index) ? ' show' : '')"
                aria-labelledby="dropdown"
              >
                <li
                  v-for="(subitem, subitemIndex) in item.items"
                  :key="subitemIndex"
                  :class="'nav-item' + item.items ? ' dropdown' : null"
                >
                  <NuxtLink
                    :to="subitem.link"
                    class="dropdown-item"
                  >
                    {{ subitem.title }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    const config = useAppConfig();

    return { config };
  },

  data() {
    return {
      showMobileNav: false,
      openedDropdowns: [],
    };
  },

  watch: {
    $route(route) {
      this.showMobileNav = false;
    },
  },

  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },

    toggleDropdown(index) {
      if (!this.isDropdownOpen(index)) {
        this.openedDropdowns.push(index);
        return;
      }

      const itemIndex = this.openedDropdowns.indexOf(index);
      if (itemIndex > -1) {
        this.openedDropdowns.splice(itemIndex);
      }
    },

    isDropdownOpen(index) {
      return this.openedDropdowns.includes(index);
    },
  },
};
</script>
