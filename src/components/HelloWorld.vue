<template>

  <div class="card">
    <!-- @click = sort of addeventlistener -->
    <button @click="increment">Counter</button>
    <p>{{ counter }}</p>
    <div>{{ arrayOfObjects }}</div>
  </div>

</template>

<script lang="ts">
// vue composition API functions
import { ref, onMounted, watch, computed } from 'vue'

export default {
  props: {
    emoji: {
      type: String,
      default: 'aaa',
    },
  },
  setup(props) {

    // when the component is mounted which means it is rendered on the screen
    onMounted(() => {
      console.log('mounted')
    });

    const counter = ref(0);
    const increment = () => counter.value++;

    // watch means whenever the value of counter changes, it will run the function, basically and eventlistener
    watch(counter, (current, previous) => {
      if (current === 5){
        console.log('counter is 5')
      }
    })

    // computed means it will only run when the value of counter changes.
    const arrayOfObjects = computed(() => 
    Array.from(new Array(counter.value), () => props.emoji).join(' ')
    )

    console.log(arrayOfObjects)

    return {
      counter,
      increment,
      arrayOfObjects,
    };
  }
}

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
