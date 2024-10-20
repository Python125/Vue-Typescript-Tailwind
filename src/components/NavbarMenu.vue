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
            <button class="cart-btn mt-1">
              <img
                src="@/assets/shopping-cart.png"
                alt="Shopping Cart"
                class="rounded w-14 mb-2"
              />
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
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">ACCESSORIES</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Bags</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold">APPAREL</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold">HEADWEAR</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HOME DECORATIONS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">SOUVENIRS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Drinkware</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Key Chains</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Lanyards</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Pins</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">TOYS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Plush</a>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">LOVE IS UNIVERSAL</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">EARL THE SQUIRREL</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">GREAT MOVIE ESCAPE</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">ACCESSORIES</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Patches</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Socks</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">APPAREL</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Shorts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">COLLECTIBLES</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HEADWEAR</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HOLIDAY</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HOME DECORATIONS</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">SOUVENIRS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Beach Towels</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Drinkware</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Key Chains</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Lanyards</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">TOYS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Plush</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Toys</a>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">GRYFFINDOR</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">SLYTHERIN</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">RAVENCLAW</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HUFFLEPUFF</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">ACCESSORIES</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Gloves</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Jewelry</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Neckwear</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Patches</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Socks</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">APPAREL</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Shorts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult T-Shirts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Infant</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">COLLECTIBLES</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">COSTUMES</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Costume Accessories</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Costume Props</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Costume Apparel</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Character Wands</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HEADWEAR</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HOLIDAY</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HOME DECORATIONS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Dinnerware</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">SOUVENIRS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Beach Towels</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Drinkware</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Key Chains</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Lanyards</a>
                </li>

                <li>
                  <a href="#" class="text-base hover:text-gray-300">Magnets</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Pins</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Stationery</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">TOYS</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Plush</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Toys</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mt-5">TREATS</h3>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">BACK TO THE FUTURE</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">JAWS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">THE TRIBUTE STORE</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">UNIVRS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">SUPER NINTENDO WORLD™</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">BETTY BOOP</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">DARK UNIVERSE</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">DREAMWORKS LAND</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">EPIC UNIVERSE</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">ET</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">FANTASTIC BEASTS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">FAST & FURIOUS</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HALLOWEEN HORROR NIGHTS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HARRY POTTER</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HELLO KITTY</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HOW TO TRAIN YOUR DRAGON</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">JURASSIC WORLD</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">MINION LAND</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">SECRET LIFE OF PETS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">REIGN OF KONG</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">THE BOURNE STUNTACULAR</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">THE TONIGHT SHOP</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">TRANSFORMERS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">UNIVERSAL STUDIOS</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">VOLCANO BAY</h3>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">Sale</h3>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">SALE</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold">PARK ESSENTIALS</h3>
              <ul>
                <li><a href="#" class="text-base hover:text-gray-300">Bags</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Travel</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Headwear</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Beach Towels</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Drinkware</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Lanyards</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Hogwarts™ Essentials</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold">LOUNGEFLY</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">ACCESSORIES</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Bags</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Gloves</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Jewelry</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Neckwear</a>
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Patches</a>
                </li>
                <li><a href="#" class="text-base hover:text-gray-300">Pets</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Slippers</a></li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300">Socks</a>
                </li>
                <li><a href="#" class="text-base hover:text-gray-300">Travel</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">APPAREL</h3>
              <ul>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Fashion Tops</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Loungewear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult Shorts</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Adult T-Shirts</a
                  >
                </li>
                <li><a href="#" class="text-base hover:text-gray-300">Infant</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Shorts</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Toddler</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Youth Fashion Tops</a></li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth Outerwear</a
                  >
                </li>
                <li>
                  <a href="#" class="text-base hover:text-gray-300"
                    >Youth T-Shirts</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">COLLECTIBLES</h3>
              <ul>
                <li><a href="#" class="text-base hover:text-gray-300">Interactive Wands</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Replicas</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Wands</a></li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">COSTUMES</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HEADWEAR</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">HOLIDAY</h3>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">HOME DECORATIONS</h3>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">SOUVENIRS</h3>
              <ul>
                <li><a href="#" class="text-base hover:text-gray-300">Bags</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Beach Towels</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Drinkware</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Key Chains</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Lanyards</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Magnets</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Pins</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Stationery</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mt-5">TOYS</h3>
              <ul>
                <li><a href="#" class="text-base hover:text-gray-300">Plush</a></li>
                <li><a href="#" class="text-base hover:text-gray-300">Toys</a></li>
              </ul>
            </div>
          </div>

          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mt-5">TREATS</h3>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">Top Sellers</h3>
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
          class="absolute left-0 top-full bg-blue-900 text-white p-6 shadow-lg"
        >
          <div class="mega-menu grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold">New Arrivals</h3>
            </div>
          </div>
        </div>
      </div>

<!-- 
      <div>
        <button @click="toggleDropdown" class="">All Departments
          <div class="arrowBtn">
          <svg
            class="-mr-1 ml-2 h-5 w-5"
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
        </button>
      </div> 
-->

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
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
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
  props: ["pages", "activePage"],
  data() {
    return {
      activeMenu: null, // Store the active mega menu (null means no menu is open)
    };
  },
  methods: {
    handleNavLinkClick(index) {
      this.$emit("page-change", index); // Emit means to trigger an event
    },
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

.searchBox {
  margin-left: 5.5rem;
  font-size: 12pt;
}

/* @media only screen and (max-width: 1920px) {
  .searchBox {
    margin-left: 327px;
  }
} */
</style>