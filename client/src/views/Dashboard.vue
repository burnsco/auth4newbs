<template>
  <div class="container mt-5">
    <br><br>
    <h3>Dash Board to go here</h3>
    <p>Welcome {{ username }}</p>
  </div>
</template>

<script>
export default {
name: 'Dashboard',
data() {
  return {
    username: localStorage.token.username,
  }
},
}
</script>

<style>
</style>
