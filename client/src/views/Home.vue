<template>
  <b-container fluid>
    <b-jumbotron class="mt-5">
      <template slot="header">
        Auth for Noobs
      </template>

      <template slot="lead">
        This is a simple boilerplate for authentication from start to finish.
      </template>

      <hr class="my-4">

      <p>
        Please sign up to use this amazing site!
      </p>

      <router-link
        to="/signup"
        tag="b-button"
        class="primary"
      >
        Sign Up
      </router-link>
    </b-jumbotron>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style>
.container {
  background: white;
  min-height:30vh;
}
</style>


