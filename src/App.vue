<template>
  <Navbar
    :pages="pages"
    :activePage="activePage"
    @page-change="setActivePage"
  />
  <router-view />
</template>

<script>
import Navbar from "./components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      activePage: 0,
      pages: [
        { link: { text: "Home", url: "/" } },
        { link: { text: "Merchandise", url: "/merchandise" } },
        { link: { text: "Potter", url: "/potter" } },
        { link: { text: "Ginny", url: "/ginny" } },
        { link: { text: "Ron", url: "/ron" } },
        { link: { text: "Granger", url: "/granger" } },
        { link: { text: "Luna", url: "/luna" } },
        // { link: { text: "Arthur", url: "/arthur" } },
        // { link: { text: "Molly", url: "/molly" } },
        // { link: { text: "Fred", url: "/fred" } },
        // { link: { text: "George", url: "/george" } },
        { link: { text: "Sirius", url: "/sirius" } },
        { link: { text: "Lupin", url: "/lupin" } },
        { link: { text: "Dumbledore", url: "/dumbledore" } },
        { link: { text: "McGonagall", url: "/mcgonagall" } },
        { link: { text: "Snape", url: "/snape" } },
        // { link: { text: "Mad-Eye", url: "/madeye" } },
        // { link: { text: "Tonks", url: "/tonks" } },
        // { link: { text: "Neville", url: "/neville" } },
        // { link: { text: "Draco", url: "/draco" } },
        // { link: { text: "Narcissa", url: "/narcissa" } },
        // { link: { text: "Voldemort", url: "/voldemort" } },
      ],
    };
  },
  methods: {
    setActivePage(index) {
      this.activePage = index;
    },
  },
};
</script>