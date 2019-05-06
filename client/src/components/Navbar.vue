<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand"
    >
      Auth Page
    </router-link>

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

        <div class="d-flex">
          <router-link
            to="/signup"
            tag="li"
            class="nav-item"
          >
            <a
              class="nav-link ml-4"
            >Sign Up </a>
          </router-link>

          <router-link
            to="/login"
            tag="li"
            class="nav-item ml-4"
          >
            <a
              class="nav-link ml-4"
            >Login </a>
          </router-link>
        </div>
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
