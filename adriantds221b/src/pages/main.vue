<template>
    <div>
        <BannerInter/>
        <OptionsButtons/>
        <hr class="accordion-body">
        <infoContent/>
        <hr class="accordion-body">
    </div>
</template>
<script>
import OptionsButtons from '@components/OptionsComponents.vue';
import BannerInter from '@components/BannerComponents.vue';
import infoContent from '@components/InfoComponents.vue';

export default {
    name: 'mainPage',
    components: {
        OptionsButtons,
        BannerInter,
        infoContent,
    }
}
</script>