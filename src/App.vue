<script>
import NavbarApp from '@/components/NavbarApp/NavbarApp.vue';
import { useRouter } from 'vue-router';

export default {
  components: { NavbarApp },
  setup() {
    const router = useRouter()

    return { router }
  }
}
</script>
<template>
  <main>
    <NavbarApp />
    <div class="routesContainer">
      <router-view />
    </div>
  </main>
</template>

<style>
  .routesContainer {
    padding-top: 16vh;
  }
</style>

