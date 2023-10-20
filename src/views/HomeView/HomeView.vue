<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import HeroSection from './components/HeroSection.vue';
export default {
    components: {ContainerLayout, HeroSection},
}
</script>

<template>
    <ContainerLayout>
      <HeroSection />
    </ContainerLayout>
    rest of stuff
</template>
<style scoped src="./styles.css"></style>
