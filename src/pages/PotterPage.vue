<template>
  <div>
    <img
      :src="ollivandersImage"
      alt="Ollivanders Store"
      class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-6"
    />
    <div class="flex ml-48rem">
      <div>
        <img :src="potterWand" alt="Potter" class="w-96" />
        <div class="mt-0.5"></div>
      </div>
      <div class="ml-16">
        <h1 class="text-4xl text-center">Interactive Harry Potter™ Wand</h1>
      </div>

      <div class="mt-16 -ml-31rem">
        <div>
          <div class="text-custom-lightblue text-2xl font-bold">$65.00</div>
        </div>
        <form class="text-lg mt-4 text-custom-gray">
          <label for="quantity">Quantity </label>
          <input type="number" id="quantity" min="0" max="10" />
        </form>
        <div class="mt-2">
          <router-link to="/potter">
            <button
              class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
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
  name: "PotterPage",
  data() {
    return {
      ollivandersImage: require("@/assets/ollivanders-logo.png"),
      potterWand: require("@/assets/images/Interactive-Harry-Potter-Wand.png"),
    };
  },
};
</script>

<style scoped>
/* Hide the spin buttons for Chrome, Safari, and Edge */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide the spin buttons for Firefox */
input[type="number"] {
  /* COME BACK TO LINE 88 LATER ON */
  /* -moz-appearance: textfield; */
  border: 2px solid black;
}
</style>