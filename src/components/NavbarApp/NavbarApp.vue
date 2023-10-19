<script>
import { ref } from 'vue';
import ToggleIcon from '@/assets/icons/toggleIcon.svg?inline';

    export default {
        components: {ToggleIcon},

        setup() {
            const section = ref('');
            const openHeader = ref(false);
            
            const showHeader = () => {
                if (openHeader.value) openHeader.value = false
                else if (!openHeader.value) openHeader.value = true
            }

            return {
                section,
                openHeader,
                showHeader,
            }
        }
    }
</script>
<template>
    <nav class="navContainer">
        <div class="contentContainer">
            <h2>Olivia <span class="text-color-primary">Queen</span></h2>
            <ul class="links" :class="openHeader ? 'right-0' : '-right-[100%] lg:right-0'">
                <li class="linkWrapper">
                    <a @click="showHeader()" href="home" class="link"
                        :class="section === 'home' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        home
                    </a>
                </li>
                <li class="linkWrapper">
                    <a @click="showHeader()" href="about" class="link"
                        :class="section === 'about' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        about
                    </a>
                </li>
                <li class="linkWrapper">
                    <a @click="showHeader()" href="services" class="link"
                        :class="section === 'services' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        services
                    </a>
                </li>
                <li class="linkWrapper">
                    <a @click="showHeader()" href="projects" class="link"
                        :class="section === 'projects' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        projects
                    </a>
                </li>
                <li class="linkWrapper">
                    <a @click="showHeader()" href="contact" class="link"
                        :class="section === 'contact' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        contact
                    </a>
                </li>
                <div @click="showHeader()" class="flex lg:hidden text-white absolute top-5 right-5 cursor pointer">
                    <IconX :size="30" />
                </div>
            </ul>
            <div @click="showHeader()" class="toggleIcon">
                <ToggleIcon />
            </div>
        </div>
    </nav>
</template>
<style scoped src="./styles.css">
</style>
