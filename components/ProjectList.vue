<template>
    <div class="project-list">
        <button class="back-button" @click="$emit('go-back')">
            <i class="ri-arrow-left-circle-line"></i>
        </button>
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Date</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.name">
                    <td>{{ project.name }}</td>
                    <td>{{ project.date }}</td>
                    <td>
                        <a :href="project.githubLink" target="_blank" class="icon-link">
                            <i class="ri-github-line"></i>
                        </a>
                        <a :href="project.driveLink" target="_blank" class="icon-link">
                            <i class="ri-drive-line"></i>
                        </a>
                    </td>
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
    githubLink: string;
    driveLink: string;
}

const props = defineProps<{ projects: Project[] }>();
</script>

<style scoped>
.project-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.back-button {
    align-self: flex-start;
    margin-bottom: 1rem;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}

.back-button i {
    font-size: 2rem;
    color: #000000;
}

.back-button:hover i {
    color: #155ab3;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: .3px solid #ddd;
    padding: 10px;
}

th {
    background-color: #f2f2f2;
    text-align: left;
}

a.icon-link {
    margin-right: 0.5rem;
    color: var(--title-color);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
}

a.icon-link i {
    font-size: 1.5rem;
    padding-left: 1rem;
}

a.icon-link:hover {
    color: var(--first-color)
}
</style>
