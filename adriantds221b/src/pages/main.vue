<template>
    <div>
        <BannerInter/>
        <OptionsButtons/>
        <hr class="accordion-body">
        <infoContent/>
        <hr class="accordion-body">
        <FooterContent/>
    </div>
</template>
<script>
import OptionsButtons from '@components/OptionsComponents.vue';
import BannerInter from '@components/BannerComponents.vue';
import infoContent from '@components/InfoComponents.vue';
import FooterContent from '@components/FooterComponents.vue';

export default {
    name: 'mainPage',
    components: {
        OptionsButtons,
        BannerInter,
        infoContent,
        FooterContent
    }
}
</script>