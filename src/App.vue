<script>
  import NavbarApp from './components/NavbarApp/NavbarApp.vue';
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      NavbarApp
    }
  }
</script>

<template>
  <main>
    <NavbarApp />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </main>
</template>

