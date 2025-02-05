<template>
    <div>
        <div class="profile-info grid">
            <div class="profile-info-group">
                <h3 class="profile-info-number">4th</h3>
                <p class="profile-info-description">CS Students</p>
            </div>
            <div class="profile-info-group">
                <h3 class="profile-info-number">--</h3>
                <p class="profile-info-description">Compiled Task</p>
            </div>
            <div class="profile-info-group">
                <h3 class="profile-info-number">--</h3>
                <p class="profile-info-description">On-going Project</p>
            </div>
        </div>
        <div class="profile-button">
            <a download href="/public/HadjeEbrahim_CV.pdf" class="button">
                Download CV <i class="ri-download-line"></i>
            </a>
            <div class="profile-buttons-small">
                <a href="mailto:ebrahim.mahaalangadi@gmail.com" target="_blank" class="button button-small button-gray">
                    <i class="ri-mail-line"></i>
                </a>
                <a href="https://m.me/sambae.alangadi.1" target="_blank" class="button button-small button-gray">
                    <i class="ri-messenger-line"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-button{
    column-gap: 1rem;
    margin-left: .5rem;
}

.profile-button-small{
    column-gap: .5rem;
    margin-left: .5rem;
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
    padding: .95rem;
    box-shadow: none;
    column-gap: .5rem;
    margin-left: .5rem;
}

.button-gray {
    background-color: var(--text-color-light);
    color: var(--title-color);
}

.button-gray:hover {
    background-color: var(--text-color-light);
}
</style>
