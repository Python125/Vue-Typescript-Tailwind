<template>
  <div class="snape">
    <div class="snape-container">
      <img
        :src="ollivandersImage"
        alt="Ollivanders Store"
        class="ollivanders-logo w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-6"
      />
      <div class="snape-info">
        <div>
          <img :src="snapeWand" alt="Snape" class="w-96" />
          <div class="mt-0.5"></div>
        </div>
        <div class="snape-title">
          <h1 class="text-4xl text-center">
            Interactive Professor Snape™ Wand
          </h1>
        </div>
        <div class="snape-price">
          <div class="text-custom-lightblue text-2xl font-bold">$65.00</div>
        </div>

        <form class="snape-quantity">
          <label for="quantity">Quantity </label>
          <input type="number" id="quantity" min="0" max="10" />
        </form>

        <div class="snape-link">
          <router-link to="/snape">
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
      snapeWand: require("@/assets/images/Interactive-Professor-Snape-Wand.png"),
    };
  },
};
</script>

<style scoped>
.snape-info {
  margin-left: 30%;
  display: flex;
}

.snape-title {
  margin-left: 5%;
}

.snape-price {
  margin-top: 4%;
  margin-left: -31.5%;
}

.snape-quantity {
  font-size: 20px;
  margin-left: -4%;
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

.snape-link {
  margin-top: 10%;
  margin-left: -8.5%;
}

.home-link {
  margin-top: 40%;
  margin-left: -13%;
}
</style>