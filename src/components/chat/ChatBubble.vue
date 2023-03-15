<script setup lang="ts">
    import { ref, defineProps, computed } from 'vue'
    import textContent from '../../assets/textContentGithub.json'

    const content = ref('')
    
    enum ChatDirection {
        ChatLeft = 'chat-left',
        ChatRight = 'chat-right',
        ChatNeutral = 'chat-neutral'
    }
    
    const props = defineProps<{
        chatDirection: ChatDirection;
        type: string;
    }>()
    
    function getImageUrl(name: string, fileType: string): string {
        return new URL(`../../assets/${name}.${fileType}`, import.meta.url).href
    }
    
    const getClass = computed(() => {
        switch (props.chatDirection) {
            case ChatDirection.ChatLeft:
                return 'chat-left'
            case ChatDirection.ChatRight:
                return 'chat-right'
            default:
                return 'chat-neutral'
        }
    })

    const getSrc = computed(() => {
        switch (props.chatDirection) {
            case ChatDirection.ChatLeft:
                return getImageUrl('persona-icon', 'svg')
            case ChatDirection.ChatRight:
                return getImageUrl('user-icon', 'svg')
            default:
                return 'https://unsplash.it/640/425'
        }
    })

    content.value = textContent[props.type] || '';
    console.log(content.value)
</script>
<template>
    <section :class="getClass">
        <img :src="getSrc" alt="">
        <div>
            <p>{{ content }}</p>
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

    .chat-left > div {
        border-radius: 0 1rem 1rem 1rem;
        order: 2;
    }

    .chat-left > img {
        order: 1;
    }

    .chat-right > div {
        border-radius: 1rem 0 1rem 1rem;
        order: 1;
    }

    .chat-right > img {
        order: 2;
    }

    .chat-neutral > div {
        border-radius: 1rem;
    }
    
</style>