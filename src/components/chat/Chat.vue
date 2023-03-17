<script setup lang="ts">
    import chatBubble from './ChatBubble.vue'
    import { defineProps, onMounted } from 'vue'

    const props = defineProps(['topic', 'id', 'name'])

    onMounted(() => {
        console.log(props.name)
    })


</script>

<template>

    <article class="slide-in-left" v-if="topic === 'github'">
        <chatBubble :repoName="name" chatDirection="chat-right" type="userQuestion"/>
        <chatBubble :repoName="name" chatDirection="chat-left" type="BotAnswer"/>
        <chatBubble :repoName="name" chatDirection="chat-right" type="userOptions"/>
        <div v-if="topic === 'github' && id === 'repositories'">
            <chatBubble :repoName="name" chatDirection="chat-left" type="botAnswer-option-1"/>
        </div>
    </article>

    <article class="" v-if="topic === 'github' && id === 'commits'">
        <chatBubble :repoName="name" chatDirection="chat-right" type="userQuestion-commits"/>
        <chatBubble :repoName="name" chatDirection="chat-left" type="botAnswer-commits"/>
    </article>


</template>


<style scoped>

    article {
        gap: 2rem;
        justify-content: start;
    }


</style>