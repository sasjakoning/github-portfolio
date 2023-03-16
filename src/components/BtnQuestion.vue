<script setup lang="ts">

    import { defineProps, onMounted } from 'vue'


    const props = defineProps({
        imageLink: { type: String, default: '', required: false },
        hash: { type: String, required: true}
    })

    onMounted(() => {
        console.log(props.imageLink)
    })

</script>

<template>
    <router-link :to="hash">
        <img v-if="imageLink != ''" :src="imageLink" alt="">
        <p><slot></slot></p>
    </router-link>
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