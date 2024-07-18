<template>
    <div>
        <Header />
        <NuxtPage />
        <Footer />
        <!-- You can add more content here -->
    </div>

</template>
<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

definePageMeta({
    layout: 'default'
});
</script>

