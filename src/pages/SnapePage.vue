<template>
  <div>
    <img
      :src="ollivandersImage"
      alt="Ollivanders Store"
      class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-6"
    />
    <div class="snape-info flex ml-48rem">
      <div>
        <img :src="snapeWand" alt="Snape" class="w-96" />
        <div class="mt-0.5"></div>
      </div>
      <div class="ml-16">
        <h1 class="text-4xl text-center">Interactive Professor Snape™ Wand</h1>
      </div>

      <div class="mt-16 -ml-35.2rem">
        <div>
          <div class="text-custom-lightblue text-2xl font-bold">$65.00</div>
        </div>

        <form class="text-lg mt-4 text-custom-gray">
          <label for="quantity">Quantity </label>
          <input type="number" id="quantity" min="0" max="10" />
        </form>

        <div class="mt-2">
          <router-link to="/snape">
            <button
              class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl hover:scale-105 cursor-pointer transition-all active:scale-95 active:bg-custom-darkerblue focus:outline-none focus:ring-0"
            >
              Add to Cart
            </button>
          </router-link>
        </div>
      </div>

      <div class="mt-42rem -ml-12.7rem">
        <router-link to="/merchandise">
          <button
            class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
          >
            Browse Other Wands
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnapePage",
  data() {
    return {
      ollivandersImage: require("@/assets/ollivanders-logo.png"),
      snapeWand: require("@/assets/images/Interactive-Professor-Snape-Wand.png"),
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1920px) {
  .snape-info {
    margin-left: 23.5%;
  }
}
</style>