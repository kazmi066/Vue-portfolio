<script>
import { ref } from 'vue';
import ContainerLayout from '@/components/ContainerLayout.vue';
import { useRoute } from 'vue-router';

export default {
    components: {ContainerLayout},
    setup() {
        const section = ref('');
        const openHeader = ref(false);
        const location = useRoute();

        const toggleHeader = () => {
            if (openHeader.value) openHeader.value = false
            else if (!openHeader.value) openHeader.value = true
        }

        return {
            section,
            openHeader,
            toggleHeader,
            currentPath: location.params.id
        }
    }
}
</script>
<template>
    <nav class="navContainer">
        <ContainerLayout>
            <div class="contentContainer">
                <h2>Olivia <span class="text-color-primary">Queen{{console.log(currentPath)}}</span></h2>
                <ul class="links" :class="openHeader ? 'open' : undefined">
                    <li class="linkWrapper">
                        <router-link to="/" class="link">
                            <div :class="section === 'home' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                                home
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link to="/about" class="link">
                            <div :class="section === 'about' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                                about
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link to="/services" class="link">
                            <div :class="section === 'services' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                                services
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link to="/projects" class="link">
                            <div :class="section === 'projects' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                                projects
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link to="/contact" class="link">
                            <div :class="section === 'contact' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                                contact
                            </div>
                        </router-link>
                    </li>
                    <div @click="toggleHeader()" class="flex lg:hidden text-white absolute top-5 right-5 cursor pointer">
                        <IconX :size="30" />
                    </div>
                    <div @click="toggleHeader()" class="cancelIcon">
                        <img svg-inline src="../../assets/icons/crossIcon.svg" alt="Cancel" />
                    </div>
                </ul>
                <div @click="toggleHeader()" class="toggleIcon">
                    <img svg-inline src="../../assets/icons/toggleIcon.svg" alt="Toggle" />
                </div>
            </div>
        </ContainerLayout>
    </nav>
</template>
<style scoped src="./styles.css">
</style>
