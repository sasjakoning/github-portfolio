<script setup lang="ts">

    import { ref } from 'vue'

    const content = ref(null);
    
    const props = defineProps<{
        chatDirection: string;
        content: string;
    }>()
    
    function getImageUrl(name, fileType) {
        return new URL(`../../assets/${name}.${fileType}`, import.meta.url).href
    }  
    
    const getClass = () => {
        if(props.chatDirection == 'chat-left') {
            return 'chat-left order-2'
        } else if(props.chatDirection == 'chat-right') {
            return 'chat-right order-1'
        } else {
            return 'chat-neutral'
        }
    }

    const getSrc = () => {
        if(props.chatDirection == 'chat-left') {
            return getImageUrl('persona-icon', 'svg')
        } else if(props.chatDirection == 'chat-right') {
            return getImageUrl('user-icon', 'svg')
        } else {
            return 'https://unsplash.it/640/425'
        }
    }
</script>

<template>
    <section>
        <img :src="getSrc()" alt="">
        <div :class="getClass()">
            <p ref="content">{{ content }}</p>
        </div>
    </section>
</template>

<style scoped>

    section {
        display: flex;
        align-items: start;
        gap: 1rem;
    }

    section > img {
        width: 3.75rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        object-fit: cover;
    }

    section > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        border: 2px solid var(--light-200);
        width: 100%;
        padding: 1rem;
    }

    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }

    .chat-left {
        border-radius: 0 1rem 1rem 1rem;
    }

    .chat-right {
        border-radius: 1rem 0 1rem 1rem;
    }

    .chat-neutral {
        border-radius: 1rem;
    }
    
</style>