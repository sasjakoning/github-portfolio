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
        <chatBubble chatDirection="chat-right" type="userQuestion"/>
        <chatBubble chatDirection="chat-left" type="BotAnswer"/>
        <chatBubble chatDirection="chat-right" type="userOptions"/>

        <p>{{ topic }}</p>
    </article>

</template>


<style scoped>

    article {
        gap: 2rem;
        justify-content: start;
    }


</style>