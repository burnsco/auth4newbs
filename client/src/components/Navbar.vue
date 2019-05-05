<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a
      class="navbar-brand"
      href="#"
    >Auth Page</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNavDropdown"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav">
        <router-link
          to="/"
          tag="li"
          class="nav-item"
        >
          <a
            class="nav-link"
          >Home </a>
        </router-link>
        <router-link
          to="/dashboard"
          tag="li"
          class="nav-item"
        >
          <a
            class="nav-link"
          >Dashboard </a>
        </router-link>
        <router-link
          to="/signup"
          tag="li"
          class="nav-item"
        >
          <a
            class="nav-link"
          >Sign Up </a>
        </router-link>

        <router-link
          to="/login"
          tag="li"
          class="nav-item"
        >
          <a
            class="nav-link"
          >Login </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style>

</style>
