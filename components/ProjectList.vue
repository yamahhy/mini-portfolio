<template>
    <div class="project-list">
        <button class="back-button" @click="$emit('go-back')">
            <i class="ri-arrow-left-line"></i> Back
        </button>
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Date</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.name">
                    <td>{{ project.name }}</td>
                    <td>{{ project.date }}</td>
                    <td><a :href="project.link" target="_blank">View on GitHub</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Project {
    name: string;
    date: string;
    link: string;
}

const props = defineProps<{ projects: Project[] }>();
</script>

<style scoped>
.project-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.back-button {
    align-self: flex-start;
    margin-bottom: 1rem;
    background-color: #1a73e8;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.back-button i {
    margin-right: 0.5rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    text-align: left;
}

a {
    color: #1a73e8;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
