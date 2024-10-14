<template>
  <div class="dumbledore">
    <div class="dumbledore-container">
      <img
        :src="ollivandersImage"
        alt="Ollivanders Store"
        class="ollivanders-logo w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-6"
      />
      <div class="dumbledore-info">
        <div>
          <img :src="dumbledoreWand" alt="Dumbledore" class="w-96" />
          <div class="mt-0.5"></div>
        </div>
        <div class="dumbledore-title">
          <h1 class="text-4xl text-center">
            Interactive Professor Dumbledore™ Wand
          </h1>
        </div>
        <div class="dumbledore-price">
          <div class="text-custom-lightblue text-2xl font-bold">$65.00</div>
        </div>

        <form class="dumbledore-quantity">
          <label for="quantity">Quantity </label>
          <input type="number" id="quantity" min="0" max="10" />
        </form>

        <div class="dumbledore-link">
          <router-link to="/dumbledore">
            <button
              class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
            >
              Add to Cart
            </button>
          </router-link>
        </div>

        <div class="home-link">
          <router-link to="/merchandise">
            <button
              class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
            >
              Browse Other Wands
            </button>
          </router-link>
        </div>
      </div>
      <footer class="py-6 text-center text-black mt-12">
        <p>&copy; 2024 Ollivanders</p>
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
  </div>
</template>

<script>
export default {
  name: "LunaPage",
  data() {
    return {
      ollivandersImage: require("@/assets/ollivanders-logo.png"),
      dumbledoreWand: require("@/assets/images/Interactive-Professor-Dumbledore-Wand.png"),
    };
  },
};
</script>

<style scoped>
.dumbledore-info {
  margin-left: 30%;
  display: flex;
}

.dumbledore-title {
  margin-left: 5%;
}

.dumbledore-price {
  margin-top: 4%;
  margin-left: -37%;
}

.dumbledore-quantity {
  font-size: 20px;
  margin-left: -4.5%;
  margin-top: 7%;
  margin-bottom: 36%;
}

/* Hide the spin buttons for Chrome, Safari, and Edge */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide the spin buttons for Firefox */
input[type="number"] {
  /* -moz-appearance: textfield; */ /* COME BACK TO THIS LINE LATER ON */
  border: 2px solid black;
}

.dumbledore-link {
  margin-top: 10%;
  margin-left: -8.5%;
}

.home-link {
  margin-top: 40%;
  margin-left: -12.3%;
}
</style>