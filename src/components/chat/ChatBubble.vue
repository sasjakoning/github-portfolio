<script setup lang="ts">
    import { ref, defineProps, computed, onMounted } from 'vue'
    import textContent from '../../assets/textContentGithub.json'
    import BtnQuestion from '../btnQuestion.vue'

    enum ChatDirection {
        ChatLeft = 'chat-left',
        ChatRight = 'chat-right',
        ChatNeutral = 'chat-neutral'
    }
    
    const props = defineProps<{
        chatDirection: ChatDirection;
        type: String;
    }>()

    const content = ref('')
    const userRepos = ref(null)
    const chatType = ref(props.type)

    
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

    async function getUserRepos() {
        try {
            const url = `https://api.github.com/users/sasjakoning/repos`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    content.value = textContent[props.type] || '';

    const userOptions = computed(() => {
        if(props.type == 'userOptions'){
            const options = textContent[props.type];
            return Object.values(options);  
        }
    });

    onMounted(async () => {
        if(props.type == 'botAnswer-option-1'){
            userRepos.value = await getUserRepos();
            console.log("userRepos.value")
            console.log(userRepos.value[1].html_url)
        }
    })


        
</script>
<template>
    <section :class="getClass">
        <img :src="getSrc" alt="">
        <div>
            <ul v-if="chatType == 'userOptions'" class="userOptions">

                <BtnQuestion :hash="option.link" 
                v-for="option in userOptions" 
                :key="option" 
                :content="option" 
                imageLink="">
                    {{ option.content }}
                </BtnQuestion>

            </ul>
            <ul v-else-if="chatType == 'botAnswer-option-1'">
                <li>{{ content }}</li>
                <li v-for="repo in userRepos" :key="repo.id">
                    <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                </li>
            </ul>
            <p v-else>{{ content }}</p>
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

    section > div:has(.userOptions) {
        border: none;
        padding: 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    ul > li {
        list-style: none;
        padding: 0.5rem;
        border: 2px solid var(--light-200);
        border-radius: 1rem;
        cursor: pointer;
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