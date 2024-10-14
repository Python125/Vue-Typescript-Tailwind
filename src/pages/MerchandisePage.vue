<template>
  <div class="merchandise">
    <div class="merchandise-container">
      <img
        :src="ollivandersImage"
        alt="Ollivanders Store"
        class="ollivanders-logo w-2/3 sm:w-1/2 lg:w-1/3 mx-auto py-5"
      />
      <h1 class="text-4xl text-center">
        Check Out Our Magical Merchandise Below
      </h1>
      <div class="border-t border-gray-custom my-4"></div>

      <section class="featured-products text-center">
        <h2 class="text-3xl font-semibold text-custom-lightblue mb-6">
          Wands From Your Favorite Characters
        </h2>
        <div
          class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 py-5"
        >
          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="potterWand"
              alt="Potter"
              class="w-48 h-48 object-cover rounded-lg mb-4"
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
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="ginnyWand"
              alt="Ginny"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/ginny">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Ginny Weasley
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="ronWand"
              alt="Ron"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/ron">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue"
                >
                  Ron Weasley
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="hermioneWand"
              alt="Hermione"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/granger">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue"
                >
                  Hermione Granger
                </button>
              </router-link>
            </div>
            <h3 class="text-xl font-semibold text-white">Hermione Granger</h3>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="lunaWand"
              alt="Lovegood"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/luna">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Luna Lovegood
                </button>
              </router-link>
            </div>
          </div>

          <!-- <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="authurWand"
              alt="Authur"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">
              Authur Weasley
            </h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="mollyWand"
              alt="Molly"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">Molly Weasley</h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="fredWand"
              alt="Fred"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">Fred Weasley</h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="georgeWand"
              alt="George"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">
              George Weasley
            </h3>
          </div> -->

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="blackWand"
              alt="Sirius"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/sirius">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Sirius Black
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="lupinWand"
              alt="Lupin"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/lupin">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Remus Lupin
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="dumbledoreWand"
              alt="Dumbledore"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/dumbledore">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Professor Dumbledore
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="mcgonagallWand"
              alt="McGonagall"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/mcgonagall">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Professor McGonagall
                </button>
              </router-link>
            </div>
          </div>

          <div
            class="product-card p-24 border border-custom-lightblue rounded-lg shadow-xl"
          >
            <img
              :src="snapeWand"
              alt="Snape"
              class="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <div class="mt-0.5">
              <router-link to="/snape">
                <button
                  class="mt-5 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl"
                >
                  Professor Snape
                </button>
              </router-link>
            </div>
          </div>

          <!-- <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="madEyeWand"
              alt="MadEye"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">Mad-Eye Moody</h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="tonksWand"
              alt="Tonks"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">
              Nymphadora Tonks
            </h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="nevilleWand"
              alt="Neville"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">
              Neville Longbottom
            </h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="dracoWand"
              alt="Draco"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">Draco Malfoy</h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="narcissaWand"
              alt="Narcissa"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">
              Narcissa Malfoy
            </h3>
          </div>

          <div
            class="product-card p-6 border border-yellow-500 rounded-lg shadow-xl"
          >
            <img
              :src="voldemortWand"
              alt="Voldemort"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-semibold text-yellow-400">Voldemort</h3>
          </div> -->
        </div>
        <div class="mt-10">
          <router-link to="/">
            <button
              class="mt-12 bg-custom-lightblue text-white text-xl py-2 px-6 rounded-lg hover:bg-custom-darkblue hover:shadow-2xl transform transition-transform hover:scale-125"
            >
              Back to Home Page
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

      // authurWand: require("@/assets/images/Interactive-Arthur-Weasley-Wand.png"),
      // mollyWand: require("@/assets/images/Interactive-Molly-Weasley-Wand.png"),
      // fredWand: require("@/assets/images/Interactive-Fred-Weasley-Wand.png"),
      // georgeWand: require("@/assets/images/Interactive-George-Weasley-Wand.png"),
      // madEyeWand: require("@/assets/images/Interactive-Mad-Eye-Moody-Wand.png"),
      // tonksWand: require("@/assets/images/Interactive-Nymphadora-Tonks-Wand.png"),
      // nevilleWand: require("@/assets/images/Interactive-Neville-Longbottom-Wand.png"),
      // dracoWand: require("@/assets/images/Interactive-Draco-Malfoy-Wand.png"),
      // narcissaWand: require("@/assets/images/Interactive-Narcissa-Malfoy-Wand.png"),
      // voldemortWand: require("@/assets/images/Interactive-Voldemort-Wand.png"),
    };
  },
};
</script>

<style scoped>
.merchandise-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
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