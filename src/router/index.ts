import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Chat from '../components/chat/Chat.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/chat/:topic',
        name: 'Chat',
        props: true,
        component: Chat
    },
    {
        path: '/chat/:topic/:id',
        name: 'ChatId',
        props: true,
        component: Chat
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router