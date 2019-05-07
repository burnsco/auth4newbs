<template>
  <div>
    <Navbar />
    <transition name="fade">
      <router-view class=" min-vh-100" />
    </transition>
    <Footer class="fixed-bottom" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  font-weight: 600;
  font-family: 'SF Pro Display',
}

</style>
