import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')




const card = document.querySelector(".card > section")

const root = document.documentElement;

document.addEventListener("mousemove", (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;


    root.style.setProperty('--rotateX', `${y * 0.02}deg`);
    root.style.setProperty('--rotateY', `${x * 0.02}deg`);
});