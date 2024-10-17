<template>
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
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="potterWand"
            alt="Potter"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/potter">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Harry Potter
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="ronWand"
            alt="Ron"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/ron">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Ron Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="hermioneWand"
            alt="Hermione"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/granger">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
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
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";

// @Options({
//   components: {},
// })
export default /* class HomeView extends Vue */ {
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
@media only screen and (max-width: 1920px) {
  .product-card {
    padding: 3rem;
    height: fit-content;
    border: 1px solid #0573ee;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .product-image {
    width: 225px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .product-button {
    margin-top: 1.25rem;
    background-color: #0573ee;
    color: #ffffff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
}

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