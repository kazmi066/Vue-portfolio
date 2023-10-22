<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import CtaSection from '@/components/CtaSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const photos = [
  "https://images.unsplash.com/photo-1697487957555-5f8df6a965f6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697653614090-96801bf66509?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697451964242-80c11bbc227a?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697289722651-30d774895244?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1683657536472-a68099179a18?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697386576246-ab27cecf6151?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
];

export default {
    components: { ContainerLayout, CtaSection, SectionTitle },
    data() {
      return { photos }
    }
}
</script>

<template>
    <ContainerLayout>
      <section class="mainContainer">
        <SectionTitle>Bit of a Photographer too! &#128513;</SectionTitle>
        <p class="headerDesc">Here are some of my best takes</p>
        <div class="photosGrid">
          <div v-for="(photo, index) in photos" :key="index" class="photo">
            <div class="photoImage">
              <img :src="photo" alt="photo" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
    <CtaSection />
</template>

<style scoped src="./styles.css"></style>
