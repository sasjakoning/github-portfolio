<script setup lang="ts">
    defineProps<{
        content: string;
        url: string;
    }>()
</script>

<template>
    <a href="">
        <img :src="url" alt="">
        <p>{{ content }}</p>
    </a>
</template>

<style scoped>
    a {
        display: flex;
        align-items: center;
        gap: 1rem;

        background-color: var(--white);
        border: 2px solid var(--accent-3);
        border-radius: 1rem;

        padding: 1rem;
    }

    a > img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        object-fit: cover;
    }

</style>