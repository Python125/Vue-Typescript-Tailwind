<template>
  <router-link
    :to="page.link.url"
    :class="activeClasses"
    aria-current="page"
    :title="`This link goes to the ${page.link.text} page`"
    @click="handleNavLinkClick(index)"
  >
    {{ page.link.text }}
  </router-link>
</template>

<script>
export default {
  props: ["page", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>