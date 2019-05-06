<template>
  <div class="container">
    <br>
    <br>
    <h3>Login Page</h3>
    <form
      method="GET"
      action="/login"
    >
      <div class="form-group mt-5">
        <label for="username">Username: </label>
        <input
          id="username"
          type="text"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
name: 'Login'
}
</script>

<style>
.container {
  max-width:50vw;
}
</style>
