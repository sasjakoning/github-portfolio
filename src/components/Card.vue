<template>
    <article class="cardContainer">

        <!-- card container for perspective -->
        <section>

            <!-- card container for flip function -->
            <section :class="cardClasses" class="card">

                <!-- backside -->
                <section @click="flipCard" class="cardBack cardFlip">
                    <q>mooie quote</q>
                </section>

                <!-- frontside -->
                <section class="cardFront">
                    <figure class="animContainer">
                        <img src="../assets/ringme.svg" alt="">
                        <canvas ref="canvasCharacter" id="canvas-character" width="1000" height="1000"></canvas>
                    </figure>
                    <section @click="flipCard" class="cardDetails cardFlip">
                        <h2 class="cardName"><span></span> <span></span></h2>
                        <a href="tel:+31631058146">+31 62130545146</a>
                        <a href="mailto:sasjakoning@hotmail.com">sasjakoning@hotmail.com</a>
                        <a href="https://sasjakoning.com/" target="blank">sasjakoning.com</a>
                        <div>
                            <a href="#" aria-label="Instagram"></a>
                            <a href="#" aria-label="LinkedIn"></a>
                        </div>
                    </section>
                </section>

            </section>

        </section>
    </article>
</template>

<script>
import { defineComponent } from 'vue';
import { Rive } from '@rive-app/canvas';

export default defineComponent({
    name: 'Rive',
    props: {
        src: String
    },
    data() {
        return {
            isFlipped: false,
        }
    },
    computed: {
        cardClasses() {
            return {
                clicked: this.isFlipped
            }
        }
    },
    mounted() {
        console.log(this)
        new Rive({
            canvas: this.$refs.canvasCharacter,
            src: '../src/assets/persona.riv',
            autoplay: true,
            stateMachines: 'persona-states',
            artboard: 'character-card',
        })
    },
    methods: {
        flipCard(event) {
            
            console.log("clicked");
            
            const cardContent = document.querySelector(".card");

            cardContent.classList.toggle("clicked");
        },
    }
});

</script>


<style scoped>
    @import '../styles/card.css';
</style>