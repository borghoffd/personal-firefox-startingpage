<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'
import PomodoroTimer from './components/PomodoroTimer.vue'
import GoogleCalendar from './components/GoogleCalendar.vue';

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <PomodoroTimer />
    <Todos />
    <GoogleCalendar />
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */
</style>
