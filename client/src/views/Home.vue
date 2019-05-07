<template>
  <div class="bg-secondary min-vh-100">
    <b-container fluid>
      <b-jumbotron>
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

      <img
        src="https://images.pexels.com/photos/159282/technology-servers-server-159282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        height="100%"
        width="66%"
      >
    </b-container>
  </div>
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


