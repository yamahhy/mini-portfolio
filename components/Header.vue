<template>
    <header class="profile-container">
        <i class="ri-moon-line change-theme" id="theme-button"></i>
        <div class="profile-container-grid">
            <div class="profile-data">
                <div class="profile-border">
                    <div class="profile-profile">
                        <img src="/assets/img/profile.png" alt="">
                    </div>
                </div>

                <h2 class="profile-name">Maha Alangadi Hadje Ebrahim</h2>
                <h3 class="profile-profession">Student Intern</h3>

                <ul class="profile-social">
                    <a href="https://www.instagram.com/yaa_mahhy" target="_blank" class="profile-social-links">
                        <i class="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/maha-hadje-ebrahim-0b889b319/" target="_blank" class="profile-social-links">
                        <i class="ri-linkedin-box-line"></i>
                    </a>
                    <a href="https://github.com/yamahhy" target="_blank" class="profile-social-links">
                        <i class="ri-github-line"></i>
                    </a>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.profile-social {
    font-size: 1.5rem;
    color: var(--title-color);
    transition: .3s;
}

.profile-social:hover{
    color: var(--first-color);
}

.profile-profile img{
    width: 100px;
}
.profile-profile {
    width: 100px;
    height: 100px;
    background: linear-gradient(180deg,
                hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
                hsla(var(--hue), var(--sat), var(--lig), .2) 100%);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
</style>
