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
        { name: 'Simple Calculator', date: '2024-01-15', link: 'https://github.com/yourusername/simple-calculator' },
        { name: 'Mini-portfolio', date: '2024-03-10', link: 'https://github.com/yourusername/mini-portfolio' },
        { name: 'Attendance Monitoring', date: '2024-05-20', link: 'https://github.com/yourusername/attendance-monitoring' }
    ],
    'Junior Projects': [
        { name: 'Simple App', date: '2023-02-12', link: 'https://github.com/yourusername/simple-app' },
        { name: 'Simulation', date: '2023-04-18', link: 'https://github.com/yourusername/simulation' }
    ],
    'Sophomore Projects': [
        { name: 'LinkedList', date: '2022-03-14', link: 'https://github.com/yourusername/linkedlist' },
        { name: 'Modified Array', date: '2022-06-22', link: 'https://github.com/yourusername/modified-array' }
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
