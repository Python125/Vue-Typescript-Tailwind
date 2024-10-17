<template>
  <div class="flex flex-col items-center p-2">
    <img
      :src="ollivandersImage"
      alt="Ollivanders Store"
      class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-5"
    />
    <h1 class="text-4xl text-center">
      Check Out Our Magical Merchandise Below
    </h1>
    <div class="border-t border-gray-custom my-4"></div>

    <section class="featured-products text-center">
      <h2 class="text-3xl font-semibold text-custom-lightblue mb-6">
        Wands From Your Favorite Characters
      </h2>
      <div class="product-grid grid lg:grid-cols-5 gap-14 py-5">
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
            :src="ginnyWand"
            alt="Ginny"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/ginny">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Ginny Weasley
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
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue"
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
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue"
              >
                Hermione Granger
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="lunaWand"
            alt="Lovegood"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/luna">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Luna Lovegood
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="arthurWand"
            alt="Arthur"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/arthur">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Arthur Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="mollyWand"
            alt="Molly"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/molly">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Molly Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="fredWand"
            alt="Fred"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/fred">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Fred Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="georgeWand"
            alt="George"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/george">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                George Weasley
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="blackWand"
            alt="Sirius"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/sirius">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Sirius Black
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="lupinWand"
            alt="Lupin"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/lupin">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Professor Lupin
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="dumbledoreWand"
            alt="Dumbledore"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/dumbledore">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Professor Dumbledore
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="mcgonagallWand"
            alt="McGonagall"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/mcgonagall">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Professor McGonagall
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="snapeWand"
            alt="Snape"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/snape">
              <button
                class="product-button mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Professor Snape
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="madEyeWand"
            alt="MadEye"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/madeye">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Mad-Eye Moody
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="tonksWand"
            alt="Tonks"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/tonks">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Nymphadora Tonks
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="nevilleWand"
            alt="Neville"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/neville">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Neville Longbottom
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="dracoWand"
            alt="Draco"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/draco">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Draco Malfoy
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="narcissaWand"
            alt="Narcissa"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/narcissa">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Narcissa Malfoy
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="product-card p-20 h-fit border border-custom-lightblue rounded-lg shadow-xl"
        >
          <img
            :src="voldemortWand"
            alt="Voldemort"
            class="product-image object-cover rounded-lg mb-4"
          />
          <div class="mt-0.5">
            <router-link to="/voldemort">
              <button
                class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
              >
                Voldemort
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <router-link to="/">
          <button
            class="mt-12 bg-custom-lightblue text-white text-xl py-2 px-4 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl transform transition-transform hover:scale-125"
          >
            Back to Home Page
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MerchandisePage",
  data() {
    return {
      ollivandersImage: require("@/assets/ollivanders-logo.png"),
      potterWand: require("@/assets/images/Interactive-Harry-Potter-Wand.png"),
      ginnyWand: require("@/assets/images/Interactive-Ginny-Weasley-Wand.png"),
      ronWand: require("@/assets/images/Interactive-Ron-Weasley-Wand.png"),
      hermioneWand: require("@/assets/images/Interactive-Hermione-Granger-Wand.png"),
      lunaWand: require("@/assets/images/Interactive-Luna-Lovegood-Wand.png"),
      blackWand: require("@/assets/images/Interactive-Sirius-Black-Wand.png"),
      lupinWand: require("@/assets/images/Interactive-Professor-Lupin-Wand.png"),
      dumbledoreWand: require("@/assets/images/Interactive-Professor-Dumbledore-Wand.png"),
      mcgonagallWand: require("@/assets/images/Interactive-Professor-Mcgonagall-Wand.png"),
      snapeWand: require("@/assets/images/Interactive-Professor-Snape-Wand.png"),

      arthurWand: require("@/assets/images/Interactive-Arthur-Weasley-Wand.png"),
      mollyWand: require("@/assets/images/Interactive-Molly-Weasley-Wand.png"),
      fredWand: require("@/assets/images/Interactive-Fred-Weasley-Wand.png"),
      georgeWand: require("@/assets/images/Interactive-George-Weasley-Wand.png"),
      madEyeWand: require("@/assets/images/Interactive-Mad-Eye-Moody-Wand.png"),
      tonksWand: require("@/assets/images/Interactive-Nymphadora-Tonks-Wand.png"),
      nevilleWand: require("@/assets/images/Interactive-Neville-Longbottom-Wand.png"),
      dracoWand: require("@/assets/images/Interactive-Draco-Malfoy-Wand.png"),
      narcissaWand: require("@/assets/images/Interactive-Narcissa-Malfoy-Wand.png"),
      voldemortWand: require("@/assets/images/Interactive-Voldemort-Wand.png"),
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1920px) {
  .product-card {
    padding: 1rem;
    background-color: black;
    width: 20rem;
    height: 22.5rem;
  }

  .product-image {
    margin-left: 1.8rem;
    margin-top: 0.5rem;
    width: 14rem;
    height: 14.5rem;
  }

  .product-button {
    margin-top: 16px;
    margin-right: 4px;
  }
}
</style>