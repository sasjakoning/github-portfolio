<script setup lang="ts">
    import chatBubble from './ChatBubble.vue'
    import { defineProps, onMounted } from 'vue'

    const props = defineProps(['topic'])

    onMounted(() => {
        console.log(props.topic)
    })


</script>

<template>

    <article class="slide-in-left" v-if="topic === 'github'">
        <chatBubble chatDirection="chat-right" content="smth"/>
        <chatBubble chatDirection="chat-left" content="smth"/>
        <chatBubble chatDirection="chat-right" content="smth"/>

        <p>{{ topic }}</p>
    </article>

</template>


<style scoped>

    article {
        gap: 2rem;
        justify-content: start;
    }


</style>