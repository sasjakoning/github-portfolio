<script setup lang="ts">

    import btnQuestion from './BtnQuestion.vue'



</script>

<template>

    <article>
        <header>
            <img src="https://unsplash.it/640/425" alt="">
            <div>
                <h1>Name Name</h1>
                <p>Front-end, Design, Illustration</p>
            </div>
        </header>

        <section>
            <h2>Ask me something...</h2>
            <btnQuestion hash="/chat/skills" imageLink="https://unsplash.it/640/425">What are your skills?</btnQuestion>
            <btnQuestion hash="/chat/about" imageLink="https://unsplash.it/640/425">More about yourself</btnQuestion>
            <btnQuestion hash="/chat/github" imageLink="https://unsplash.it/640/425">Are you on Github?</btnQuestion>
            <btnQuestion hash="/chat/experience" imageLink="https://unsplash.it/640/425">What's your experience?</btnQuestion>

        </section>
    </article>

    <router-view></router-view>

</template>


<style scoped>

    header {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 1rem;

        /* height: 40%; */
    }   

    header > img {
        width: clamp(2rem, 7.5rem, 10rem);
        aspect-ratio: 1/1;
        border-radius: 50%;
        object-fit: cover;
    }

    header > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    header > div > p {
        font-size: 1.25rem;
    }

    article > section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    article > section > h2 {
        color: var(--accent-1);
    }

</style>