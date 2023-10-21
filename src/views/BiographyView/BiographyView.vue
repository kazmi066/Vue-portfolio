<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import CtaSection from '@/components/CtaSection.vue';

export default {
    components: { ContainerLayout, HeroSection, CtaSection},
}
</script>

<template>
    <ContainerLayout>
      <HeroSection />
    </ContainerLayout>
    <CtaSection />
</template>
