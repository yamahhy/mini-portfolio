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
    width: 110px;
    height: 110px;
    background: linear-gradient(180deg,
                hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
                hsla(var(--hue), var(--sat), var(--lig), .2) 100%);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.profile-border {
    border: 3.5px solid var(--first-color);
    justify-self: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: .75rem;
}

.profile-button,
.profile-button-small {
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-button{
    column-gap: 1rem;
}

.profile-button-small{
    column-gap: .5rem;
}
/* buttons */
.button {
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem 1rem;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 8px 24px hsla(var(--hue), var(--sat), var(--lig), .25);
}

.button i{
    font-size: 1.15rem;
}

.button:hover {
    background-color: var(--first-color-alt);
}

.button-small {
    padding: .75rem;
    box-shadow: none;
    column-gap: .25rem;
}

.button-gray {
    background-color: var(--text-color-light);
    color: var(--title-color);
}

.button-gray:hover {
    background-color: var(--text-color-light);
}
</style>
