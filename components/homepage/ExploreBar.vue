<template>
    <div class="w-full lg:w-3/12 h-full pb-10 px-4 md:px-8 lg:px-0 lg:ml-8 xl:ml-16 flex flex-col justify-start gap-6">
        <div class="text-lg sm:text-xl lg:text-base text-gray-500">Explore</div>
        <div class="group lg:flex flex-col h-full justify-between">
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-1 w-full mb-5">
                <template v-for="(item, index) in mediums" :key="index">
                          <div class="group-hover:grayscale hover:!grayscale-0 transition-all group-hover:[&>div]:opacity-60 [&>div]:font-medium lg:[&>div]:font-normal hover:[&>div]:!opacity-100 [&>div]:transition-all cursor-pointer lg:!bg-none bg-cover bg-center bg-no-repeat" :style="item.attributes.Thumbnail.data ? `background-image: url('http://localhost:1337${item.attributes.Thumbnail.data.attributes.formats.small.url}');`: ''">
                            <div class="border py-5 sm:py-7 px-1 text-center lg:border-0 lg:p-0 lg:text-start text-lg text-white lg:text-gray-900"><span>{{ item.attributes.Title }}</span></div>
                          </div>
</template>
        </div>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:flex lg:flex-col lg:gap-1 justify-around [&>div]:font-normal [&>div]:transition-all cursor-pointer">
            <template v-for="(item, index) in infoPages" :key="index">
                      <div class="transition-all group-hover:[&>div]:opacity-60 [&>div]:font-normal hover:[&>div]:!opacity-100 [&>div]:transition-all cursor-pointer ">
                        <div class="border py-3 sm:py-4 px-1 text-center lg:border-0 lg:p-0 lg:text-start text-base lg:text-lg text-gray-900"><span>{{ item.label }}</span></div>
                      </div>
            </template>
        </div>
       </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mediums: null,
        infoPages: [
          { label: 'Biography', url: '/paintings' },
          { label: 'Exhibitions & Fairs', url: '/graphic' },
          { label: 'Bibliography', url: '/installation' },
          { label: 'Shop', url: '/collage' }
        ]
      };
    },
    async beforeMount() {
      try {
        const token = '3f63bcbef75f60f8646fa7016da73e85f9244646e0c25d51c9c25576e5c16bdf77c0f245d7f54fbf3d51ce3425a4edff80e28bbf30bc2c62a44f0e1e2959437a1e61d2f61fa6538048ffc52cf6d739fceb983207957c60c270cb7580c4ecaa985eae869c5a029eab7075a44190ee4b15890f195e29c7f498c0dde164feec6e24'; // Replace with your API token from Strapi
        const response = await axios.get('http://localhost:1337/api/mediums?populate=Thumbnail', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.mediums = response.data.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>