<template>
  <nav class="navbar text-white">
    <div class="flex justify-between items-center text-3xl">
      <a href="/" class="logo-btn">
        <img
          src="@/assets/universal-orlando-logo.png"
          alt="Universal Orlando Logo"
          class="w-32 ml-7 mt-2"
        />
      </a>
      <div class="ml-15 mr-5">
        <ul class="flex">
          <li class="text-base mb-4 mr-2">
            Need help?<br />Call
            <a
              href="tel:1-888-762-0820"
              title="Call 1-888-762-0820 for assistance"
              >1-888-762-0820</a
            >
          </li>
          <div class="park-border"></div>
          <li class="text-base mt-4 mr-2">
            <a href="" class="hover:underline">Park Tickets</a>
          </li>
          <div class="cart-border"></div>
          <li>
            <button class="cart-btn mt-3">
              <div>
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="30"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#ffffff"
                    d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  />
                </svg>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <!-- <li v-for="(page, index) in pages" :key="index">
          <router-link
            class="ml-10"
            :to="page.link.url"
            :class="{ active: activePage === index }"
            aria-current="page"
            :title="`This link goes to the ${page.link.text} page`"
            @click="handleNavLinkClick(index)"
          >
            {{ page.link.text }}
          </router-link>
      </li> -->
    </div>

    <div class="hidden md:flex text-2xl flex-wrap mt-4">
      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-7 mt-1"
          @click.prevent="toggleMegaMenu('superNintendoWorld')"
        >
        <span class="ml-1 font-medium">SUPER NINTENDO WORLD™</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'superNintendoWorld'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline">
                <a href="#">ACCESSORIES</a>
              </h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="">APPAREL</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Adult T-Shirts</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="">HEADWEAR</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="">HOME DECORATIONS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SOUVENIRS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Drinkware</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Key Chains</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Lanyards</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Pins</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TOYS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Plush</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('universalStudios')"
        >
          <span class="ml-1 font-medium">Universal Studios</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'universalStudios'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">LOVE IS UNIVERSAL</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">EARL THE SQUIRREL</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">GREAT MOVIE ESCAPE</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">ACCESSORIES</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Patches</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Socks</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">APPAREL</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Adult Shorts</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">COLLECTIBLES</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HEADWEAR</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOLIDAY</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOME DECORATIONS</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SOUVENIRS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Beach Towels</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Drinkware</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Key Chains</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Lanyards</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TOYS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Plush</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Toys</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('harryPotter')"
        >
          <span class="ml-1 font-medium">Harry Potter</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'harryPotter'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">GRYFFINDOR</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">SLYTHERIN</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">RAVENCLAW</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HUFFLEPUFF</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">ACCESSORIES</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Gloves</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Jewelry</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Neckwear</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Patches</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Socks</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">APPAREL</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Adult Shorts</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Infant</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">COLLECTIBLES</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">COSTUMES</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Costume Accessories</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Costume Props</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Costume Apparel</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Character Wands</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HEADWEAR</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOLIDAY</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOME DECORATIONS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Dinnerware</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SOUVENIRS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Beach Towels</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Drinkware</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Key Chains</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Lanyards</a>
                </li>

                <li>
                  <a href="#" class="text-base hover:underline">Magnets</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Pins</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Stationery</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TOYS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Plush</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Toys</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TREATS</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('shopByBrands')"
        >
          <span class="ml-1 font-medium">Shop by Brands</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'shopByBrands'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">BACK TO THE FUTURE</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">JAWS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">THE TRIBUTE STORE</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">UNIVRS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SUPER NINTENDO WORLD™</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">BETTY BOOP</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">DARK UNIVERSE</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">DREAMWORKS LAND</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">EPIC UNIVERSE</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">ET</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">FANTASTIC BEASTS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">FAST & FURIOUS</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HALLOWEEN HORROR NIGHTS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HARRY POTTER</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HELLO KITTY</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOW TO TRAIN YOUR DRAGON</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">JURASSIC WORLD</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">MINION LAND</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SECRET LIFE OF PETS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">REIGN OF KONG</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">THE BOURNE STUNTACULAR</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">THE TONIGHT SHOP</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TRANSFORMERS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">UNIVERSAL STUDIOS</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">VOLCANO BAY</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('sale')"
        >
          <span class="ml-1 font-medium">Sale</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'sale'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="one-item-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">Sale</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('shopAllMerchandise')"
        >
          <span class="ml-1 font-medium">Shop All Merchandise</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'shopAllMerchandise'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">SALE</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">PARK ESSENTIALS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Travel</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Headwear</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Beach Towels</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Drinkware</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Lanyards</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Hogwarts™ Essentials</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">LOUNGEFLY</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">ACCESSORIES</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Gloves</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Jewelry</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Neckwear</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Patches</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Pets</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Slippers</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Socks</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">APPAREL</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Adult Shorts</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Infant</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Shorts</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Toddler</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">COLLECTIBLES</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline"
                    >Interactive Wands</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Replicas</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Wands</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">COSTUMES</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HEADWEAR</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOLIDAY</a></h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">HOME DECORATIONS</a></h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">SOUVENIRS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Beach Towels</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Drinkware</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Key Chains</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Lanyards</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Magnets</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Pins</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Stationery</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TOYS</a></h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:underline">Plush</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:underline">Toys</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5 hover:underline"><a href="#">TREATS</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('topSellers')"
        >
          <span class="ml-1 font-medium">Top Sellers</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'topSellers'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="one-item-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">Top Sellers</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative menu">
        <a
          href="#"
          class="text-base align-middle ml-8 mt-1"
          @click.prevent="toggleMegaMenu('newArrivals')"
        >
          <span class="ml-1 font-medium">New Arrivals</span>
          <div class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </a>
        <div
          v-if="activeMenu === 'newArrivals'"
          class="absolute ml-8 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="one-item-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold hover:underline"><a href="#">New Arrivals</a></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <button
          @click.prevent="toggleMegaMenu('allDepartments')"
          class="text-base align-middle ml-8 mt-2 font-medium"
        >
          All Departments
          <div class="arrowBtn">
            <svg
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </button>
        <ul
          v-if="activeMenu === 'allDepartments'"
          class="dropdown absolute mt-2 ml-8 w-56 bg-blue-900 text-white text-sm font-bold"
        >
          <li class="px-4 py-2 cursor-pointer hover:underline">
            SUPER NINTENDO WORLD™
          </li>
          <li class="px-4 py-2 cursor-pointer hover:underline">
            Universal Studios
          </li>
          <li class="px-4 py-2 cursor-pointer hover:underline">Harry Potter</li>
          <li class="px-4 py-2 cursor-pointer hover:underline">
            Shop by Brands
          </li>
          <li class="px-4 py-2 cursor-pointer hover:underline">Sale</li>
          <li class="px-4 py-2 cursor-pointer hover:underline">
            Shop All Merchandise
          </li>
          <li class="px-4 py-2 cursor-pointer hover:underline">Top Sellers</li>
          <li class="px-4 py-2 cursor-pointer hover:underline">New Arrivals</li>
        </ul>
      </div>

      <div class="search-container text-black">
        <form
          action=""
          class="searchBox flex items-center border border-custom-grey rounded overflow-hidden mb-1 -p-1"
        >
          <input
            type="text"
            placeholder="Search"
            name="search"
            class="w-full px-4 py-2 focus:outline-none"
          />
          <button type="submit" class="px-4 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="#666666"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: null, // Store the active menu (null means no menu is open)
    };
  },
  methods: {
    toggleMegaMenu(menuName) {
      // If the clicked menu is already open, close it; otherwise, open the clicked menu
      if (this.activeMenu === menuName) {
        this.activeMenu = null; // Close the menu if it's already open
      } else {
        this.activeMenu = menuName; // Set the clicked menu as active
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(#005ec7, #0573ee);
}

.park-border {
  border-left: 0.1px solid white;
  padding-left: 30px;
  margin-top: 5px;
  margin-bottom: 18px;
  margin-right: -10px;
}

.cart-border {
  border-left: 0.1px solid white;
  padding-left: 30px;
  margin-top: 19px;
  margin-bottom: 27px;
  margin-right: -5px;
}

.arrowBtn {
  margin-top: -2%;
  margin-left: 98.5%;
}

.menu {
  z-index: 1;
}

.mega-menu {
  width: 855px;
}

.one-item-menu {
  width: 600px;
}

.dropdown {
  width: 350px;
}

.searchBox {
  margin-left: 58rem;
  font-size: 12pt;
}

@media only screen and (max-width: 1920px) {
  .searchBox {
    margin-left: 18rem;
  }
}
</style>