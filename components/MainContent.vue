<template>
    <main class="main">
        <section class="filters container">
            <ul class="filters-content">
                <button class="filters-button filter-tab-active" data-target="#project">
                    Projects
                </button>
                <button class="filters-button" data-target="#skills">
                    Skills
                </button>
            </ul>
            <div class="filters-section">
                <div class="project-content grid filters-active" data-content id="project">
                    <Projects />
                </div>
                <div class="skills-content" data-content id="skills">
                    <Skills />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import { onMounted } from 'vue';

onMounted(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach(tc => {
                tc.classList.remove('filters-active');
            });
            target.classList.add('filters-active');

            tabs.forEach(t => {
                t.classList.remove('filter-tab-active');
            });
            tab.classList.add('filter-tab-active');
        });
    });

    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line';
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Apply the stored theme if any
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'remove' : 'add'](iconTheme);
    } else {
        // Default to light theme if no theme is stored
        document.body.classList.remove(darkTheme);
        themeButton.classList.remove(iconTheme);
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
        localStorage.setItem('selected-icon', themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line');
    });
});
</script>

<style scoped>

.project-content {
    grid-template-columns: 332px;
    justify-content: center;
    gap: 5rem 5rem;
}

.skills-content {
    grid-template-columns: 332px;
    justify-content: center;
}

.filters-content {
    width: 332px;
    margin: 3rem auto;
}
.skills-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

.skills-box {
    display: flex;
    flex-direction: column;
    column-gap: 3rem;
}

.skills-group {
    display: grid;
    row-gap: 1rem;
}

.skills-area {
    margin-bottom: 2rem;
}

.skills-data {
    display: flex;
    align-items: center;
    column-gap: 1rem;
}

.skills-name {
    font-size: 1rem;
    font-weight: 500;
}

.skills-level {
    font-size: 0.875rem;
    color: var(--text-color-light);
}

.dark-theme {
    background-color: #121212;
    color: #ffffff;
}
</style>
