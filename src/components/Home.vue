<script setup lang="ts">

    import btnQuestion from './BtnQuestion.vue'

</script>

<template>

    <article>
        <header>
            <img src="https://unsplash.it/640/425" alt="">
            <div>
                <h1>Sasja Koning</h1>
                <p>Front-end, Design, Illustration</p>
            </div>
        </header>

        <section>
            <h2>Ask me something...</h2>
            <btnQuestion content="What are your skills?" url="https://unsplash.it/640/425" />
            <btnQuestion content="More about yourself" url="https://unsplash.it/640/425" />
            <btnQuestion content="Are you on Github?" url="https://unsplash.it/640/425" />
            <btnQuestion content="What's your experience?" url="https://unsplash.it/640/425" />

        </section>
    </article>

</template>


<style scoped>

    article {
        width: 100%;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: scroll;

        background: var(--light-100);

        padding: 2rem;
    }

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