<template>
  <div class="container mt-5">
    <br><br>
    <h3>Dash Board to go here</h3>
    <p>Welcome <em>{{ user.username }}</em></p>
    <br>
    <button @click="logout">
      logout
    </button>
  </div>
</template>

<script>
const API_URL = 'http://localhost:5000/'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: {}
    }
  },
  mounted () {
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      }
    }).then(res => res.json())
    .then(result => {
      if (result.user) {
      console.log(result)
      this.user = result.user
      } else {
        this.logout()
      }
    });
  },
  methods: {
    logout () {
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
