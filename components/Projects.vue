<template>
    <div>
        <div v-if="!showTable">
            <article class="project-card" @click="showProjectList('CCCI 2024 Projects')">
                <img src="@/assets/img/project1.jpg" alt="" class="project-img">
                <div class="project-model">
                    <div>
                        <span class="project-subtitle">CCCIs Compiled Projects</span>
                        <h3 class="project-title">CCCI 2024</h3>
                    </div>
                </div>
            </article>
            <article class="project-card" @click="showProjectList('Junior Projects')">
                <img src="@/assets/img/project2.jpg" alt="" class="project-img">
                <div class="project-model">
                    <div>
                        <span class="project-subtitle">Compiled Projects in Junior</span>
                        <h3 class="project-title">Junior Projects</h3>
                    </div>
                </div>
            </article>
            <article class="project-card" @click="showProjectList('Sophomore Projects')">
                <img src="@/assets/img/project3.jpg" alt="" class="project-img">
                <div class="project-model">
                    <div>
                        <span class="project-subtitle">Compiled Projects in Sophomore</span>
                        <h3 class="project-title">Sophomore Projects</h3>
                    </div>
                </div>
            </article>
        </div>
        <ProjectList v-else :projects="selectedProjects" @go-back="showTable = false"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectList from './ProjectList.vue';

const selectedProjects = ref([]);
const showTable = ref(false);

const projects = {
    'CCCI 2024 Projects': [
        { name: 'Mini-portfolio', date: '2024-03-10', githubLink: 'https://github.com/yamahhy/mini-portfolio', driveLink: 'https://drive.google.com/drive/folders/1h2s4St64Z2i53iKXBO2NS0dhGsKBZwhU?usp=drive_link' },
        { name: 'Attendance Monitoring', date: '2024-05-20', githubLink: 'https://github.com/yamahhy/attendance-monitoring', driveLink: 'https://drive.google.com/drive/folders/1KMYK5pMP5IN81G68v-GD-eEElmd-ovsR?usp=drive_link' }
    ],
    'Junior Projects': [
        { name: 'Simple App', date: '2024-01-17', githubLink: 'https://github.com/yourusername/simple-app' , driveLink: 'https://drive.google.com/file/d/1wZHZrKpX00X_uBmW-s5Infpb2_6DUH45/view?usp=drive_link'},
        { name: 'CSC133', date: '2024-02-20', githubLink: 'https://github.com/yourusername/simulation' , driveLink: 'https://drive.google.com/drive/folders/1R1mVve5WQbsQzSFNnJp9FyYYRGbERZqm?usp=drive_link'},
        { name: 'CSC124', date: '2023-06-01', githubLink: 'https://github.com/yourusername/simulation', driveLink: 'https://drive.google.com/drive/folders/1SPKc6402Kl3hpgR7eebx5iynzYSv5TPD' }
    ],
    'Sophomore Projects': [
        { name: 'CCC121', date: '2022-01-10', githubLink: 'https://github.com/yourusername/linkedlist', driveLink: 'https://drive.google.com/drive/folders/1uoB3rz1d8PP4wMU__DFowHCZS2mY2V82?usp=drive_link' },
    ]
};

const showProjectList = (projectCategory) => {
    selectedProjects.value = projects[projectCategory];
    showTable.value = true;
};
</script>

<style scoped>

.project-card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    margin-inline: 1rem;
    cursor: pointer;
}

.project-card img {
    width: 100%;
    height: 100%;
}

.project-model {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
}

.project-title, .project-subtitle {
    margin: 0;
}
</style>
