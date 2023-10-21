<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import CtaSection from '@/components/CtaSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const hobbies = [
    {
        name: "Photography",
        icon: "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Capturing moments and scenes that inspire me. Check out my photography portfolio [link]."
    },
    {
        name: "Hiking and Nature Exploration",
        icon: "https://plus.unsplash.com/premium_photo-1661900005779-4ad8baac0f15?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Exploring the great outdoors, finding serenity in nature's wonders."
    },
    {
        name: "Reading",
        icon: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Immersing myself in the world of books, constantly seeking new knowledge and perspectives."
    },
    {
        name: "Cooking",
        icon: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80&w=2952&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A culinary enthusiast creating delectable dishes from around the world."
    },
    {
        name: "Gardening",
        icon: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Nurturing green spaces, one plant at a time."
    },
    {
        name: "Music",
        icon: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Expressing myself through melodies and rhythms."
    },
    {
        name: "Sports",
        icon: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Staying active and competitive on the field."
    },
    {
        name: "Art and Creativity",
        icon: "https://images.unsplash.com/photo-1485546784815-e380f3297414?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Unleashing creativity through various art forms."
    }
];

export default {
    components: { ContainerLayout, CtaSection, SectionTitle },
    data() {
      return { hobbies }
    }
}
</script>

<template>
    <ContainerLayout>
      <section class="mainContainer">
        <SectionTitle>My Hobbies and Interests &#128526;</SectionTitle>
        <div class="hobbiesGrid">
          <div v-for="hobbie in hobbies" :key="hobbie.name" class="hobbie">
            <div class="hobbieImage">
              <img :src="hobbie.icon" alt="Hobbie" />
            </div>
            <div class="hobbieDetails">
              <h3 class="hobbieTitle">{{ hobbie.name }}</h3>
              <p class="hobbieDesc">{{ hobbie.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
    <CtaSection />
</template>

<style scoped src="./styles.css"></style>
