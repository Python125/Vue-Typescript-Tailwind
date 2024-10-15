<template>
  <!-- <div class="min-h-screen"></div> -->
  <div class="flex flex-col items-center p-2">
    <img
      :src="ollivandersImage"
      alt="Ollivanders Store"
      class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-5"
    />

    <section class="featured-products text-center">
      <div
        class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 py-5"
      >
        <div
          class="product-card p-6 border border-custom-darkblue rounded-lg shadow-xl"
        >
          <img
            :src="potterWand"
            alt="Potter"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/potter">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Harry Potter
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-6 border border-custom-darkblue rounded-lg shadow-xl"
        >
          <img
            :src="ronWand"
            alt="Ron"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/ron">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Ron Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-6 border border-custom-darkblue rounded-lg shadow-xl"
        >
          <img
            :src="hermioneWand"
            alt="Hermione"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/granger">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Hermione Granger
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <router-link to="/merchandise">
          <button
            class="mt-12 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl transform transition-transform hover:scale-125"
          >
            Discover Your Wand
          </button>
        </router-link>
      </div>
    </section>

    <footer class="py-6 text-center text-black mt-12">
      <p>&copy; 2024 Ollivanders. Makers of Fine Wands since 382 B.C.</p>
      <div class="mt-4">
        <a href="#" class="hover:underline mx-2">About Us</a> |
        <a href="#" class="hover:underline mx-2">Contact</a> |
        <a href="#" class="hover:underline mx-2">Terms & Conditions</a>
      </div>
      <div class="mt-6">
        <p>Follow Us:</p>
        <a href="#" class="hover:underline mx-2">Facebook</a> |
        <a href="#" class="hover:underline mx-2">Twitter</a> |
        <a href="#" class="hover:underline mx-2">Instagram</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {
  data() {
    return {
      ollivandersImage: require("@/assets/ollivanders-logo.png"),
      potterWand: require("@/assets/images/Interactive-Harry-Potter-Wand.png"),
      ronWand: require("@/assets/images/Interactive-Ron-Weasley-Wand.png"),
      hermioneWand: require("@/assets/images/Interactive-Hermione-Granger-Wand.png"),
    };
  }
}
</script>

<style scoped>
/* .ollivanders-logo {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(15.5px);
  }
  50% {
    transform: translateY(-15.5px);
  }
} */
</style>