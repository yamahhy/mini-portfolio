<template>
    <div>
        <ProfileSection/>
        <MainContent />
    </div>
</template>

<script setup>
import ProfileSection from '~/components/ProfileSection.vue'
import MainContent from '~/components/MainContent.vue'


definePageMeta({
    layout: 'default'
});
</script>

