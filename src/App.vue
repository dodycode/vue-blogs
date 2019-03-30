<template>
  <div id="app">
    <MainNav />

    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <FooterCopyright />
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';
import FooterCopyright from './components/FooterCopyright.vue';

export default {
  name: 'app',
  components: {
    MainNav,
    FooterCopyright
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html{
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  position: relative;
  min-height: 100%;
  padding-bottom: 54px;
}

main {
  height: 100%;
}

a{
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
