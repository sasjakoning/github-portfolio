<script setup lang="ts">
    import chatBubble from './ChatBubble.vue'
    import { defineProps, onMounted } from 'vue'

    const props = defineProps(['topic', 'id'])

    onMounted(() => {
        console.log(props.topic)
    })


</script>

<template>

    <article class="slide-in-left" v-if="topic === 'github'">
        <chatBubble chatDirection="chat-right" type="userQuestion"/>
        <chatBubble chatDirection="chat-left" type="BotAnswer"/>
        <chatBubble chatDirection="chat-right" type="userOptions"/>
        <div v-if="topic === 'github' && id === 'repositories'">
            <chatBubble chatDirection="chat-left" type="botAnswer-option-1"/>
        </div>
    </article>


</template>


<style scoped>

    article {
        gap: 2rem;
        justify-content: start;
    }


</style>