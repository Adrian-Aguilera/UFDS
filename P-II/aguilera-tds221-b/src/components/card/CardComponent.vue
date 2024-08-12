<template>
    <div class="flex mr-3 mt-3">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg w-full" :src="urlImagen" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{titulo}}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{  }}</p>
                <a :href="MasInfo" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mas Informacion
                     <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:'CardsComponent',
    props:{
        urlImagen: String,
        titulo: String,
        MasInfo: String,
        Informacion: String,
    }
}
</script>
<style scoped>
.nav_item__TGdUC {
    width: 100% !important;
    border-radius: 6px !important;
    color: #17100e !important;
    font-weight: 800 !important;
    display: flex !important;
    flex-direction: column !important;
    text-align: left !important;
    justify-content: center;
    font-family: "ABeeZee", sans-serif !important;
  }
  .Resize{
    font-size: 18px !important;
    text-align: center;
  }

  .nav_item__TGdUC:hover{
    background-color: #f4f3ec;
    border-radius: 0.5rem;
  }

  .original-button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color: #333333;
    font-size: 18px;
    border-radius: 0px;
    width: 180px;
    height: 40px;
    font-weight: bold;
    border: 2px solid #333333;
    transition: 0.3s;
    box-shadow: -5px 5px 0px 0px rgba(51, 51, 51, 1);
    background-color: #ffffff;
  }

  .original-button:hover {
    box-shadow: 0 0 #333;
    color: #fff;
    background-color: #333;
  }

</style>