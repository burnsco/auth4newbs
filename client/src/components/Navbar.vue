<template>
  <nav class="navbar navbar-expand-lg test fixed-top">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand"
    >
      HOME
    </router-link>
    <ul class="navbar-nav mr-auto">
      <router-link
        to="/dashboard"
        tag="li"
        class="nav-item"
      >
        <a
          class="nav-link ml-4"
        >Dashboard </a>
      </router-link>
      <router-link
        to="/signup"
        tag="li"
        class="nav-item  mr-sm-2"
      >
        <a
          class="nav-link"
        >Sign Up </a>
      </router-link>

      <router-link
        to="/login"
        tag="li"
        class="nav-item ml-4"
      >
        <a
          class="nav-link mr-sm-2"
        >Login </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style>
* {
  font-family: 'SF Pro Display';
}
.test {
  background-color: #252526;
}
.test  a{
    color: #cccccc;
}
.test a:hover {
  color: #E2C08D
}
.dark-primary-color    { background: #FBC02D; }
.default-primary-color { background: #FFEB3B; }
.light-primary-color   { background: #FFF9C4; }
.text-primary-color    { color: #212121; }
.accent-color          { background: #9E9E9E; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }
</style>
