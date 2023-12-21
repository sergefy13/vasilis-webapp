<template>
    <div class="header bg-white h-[10%] xl:h-[13%] w-full z-50 top-0 left-0" :class="{ 'sticky': isHeaderFixed }">
        <div class="flex flex-row px-4 md:px-8 xl:px-16 h-full w-full justify-between items-center">
            <div class="text-2xl lg:text-xl xl:text-2xl uppercase" id="site-name">
                <NuxtLink to="/">{{ sitename }}</NuxtLink>
            </div>
            <div class="hidden lg:flex flex-row gap-10">
                <div class="flex flex-row gap-5 items-center">
                    <div v-for="item in menuItems" :key="item.label" class="lg:text-md xl:text-lg transition-all text-gray-500 hover:text-gray-900">
                        <a href="#">{{ item.label }}</a>
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-center lg:[&>a>svg]:w-6 xl:[&>a>svg]:w-7 [&>a]:transition-all [&>a]:fill-gray-400 hover:[&>a]:fill-gray-800">
                    <a href="https://instagram.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                  <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 6 6 L 24 6 L 24 12 L 20.740234 12 C 19.475104 10.187917 17.377663 9 15 9 C 12.622337 9 10.524896 10.187917 9.2597656 12 L 6 12 L 6 6 z M 21 8 L 21 10 L 23 10 L 23 8 L 21 8 z M 15 11 C 17.757 11 20 13.243 20 16 C 20 18.757 17.757 21 15 21 C 12.243 21 10 18.757 10 16 C 10 13.243 12.243 11 15 11 z M 15 13 C 14.537 13 14.104891 13.113781 13.712891 13.300781 C 13.889891 13.480781 14 13.727 14 14 C 14 14.552 13.552 15 13 15 C 12.727 15 12.480781 14.889891 12.300781 14.712891 C 12.113781 15.104891 12 15.537 12 16 C 12 17.657 13.343 19 15 19 C 16.657 19 18 17.657 18 16 C 18 14.343 16.657 13 15 13 z"></path>
              </svg>
                                  </a>
                    <a href="https://instagram.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
              </svg>
                                  </a>
                </div>
            </div>
            <div class="relative flex items-end lg:hidden cursor-pointer select-none" @click="toggleHam">
                <svg :class="{ 'active': isMobActive }" class="ham hamRotate ham4 top-0 left-0 transform transition duration-400" viewBox="0 0 100 100" width="4rem">
                          <path
                      class="line top"
                      d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                <path
                      class="line middle"
                      d="m 70,50 h -40" />
                <path
                      class="line bottom"
                      d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                        </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

export default {
    props: {
      sitename: String,
    },
    setup() {

        const menuItems = [
            { label: 'Artworks' },
            { label: 'Biography' },
            { label: 'Exhibitions' },
            { label: 'Contacts' },
            { label: 'Shop' },
        ];

        const isMobActive = ref(false);
        const isHeaderFixed = ref(false);

        const toggleHam = () => {
            isMobActive.value = !isMobActive.value;
        };

        const handleScroll = () => {
            const headerHeight = document.querySelector('.header').clientHeight;
            const scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition > headerHeight) {
                isHeaderFixed.value = true;
                document.body.classList.add('header-sticked')
            } else {
                isHeaderFixed.value = false;
                document.body.classList.remove('header-sticked')
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            menuItems,
            isMobActive,
            toggleHam,
            isHeaderFixed,
        };
    },
};
</script>

<style>
 .header.sticky {
     height: 10%;
     border-bottom: 1px solid #f0f0f0;
     animation: slideDown 0.5s ease-out;
 }

 .ham {
     cursor: pointer;
     -webkit-tap-highlight-color: transparent;
     transition: transform 400ms;
     -moz-user-select: none;
     -webkit-user-select: none;
     -ms-user-select: none;
     user-select: none;
 }

 .hamRotate.active {
     transform: rotate(45deg);
 }

 .line {
     fill: none;
     transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
     stroke: #000;
     stroke-width: 2;
 }

 .ham4 .top {
     stroke-dasharray: 40 121;
 }

 .ham4 .bottom {
     stroke-dasharray: 40 121;
 }

 .ham4.active .top {
     stroke-dashoffset: -68px;
 }

 .ham4.active .bottom {
     stroke-dashoffset: -68px;
 }
</style>
