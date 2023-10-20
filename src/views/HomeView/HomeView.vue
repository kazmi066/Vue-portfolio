<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import QualitiesSection from './components/QualitiesSection/QualitiesSection.vue';
import CtaSection from '@/components/CtaSection.vue';
import FooterApp from '@/components/FooterApp.vue';
export default {
    components: { ContainerLayout, HeroSection, CtaSection, QualitiesSection, FooterApp },
}
</script>

<template>
    <ContainerLayout>
      <HeroSection />
      <QualitiesSection />
    </ContainerLayout>
    <CtaSection />
    <FooterApp />
</template>
<style scoped src="./styles.css"></style>
