<template>
  <b-container class="mt-5">
    <h1>LOGIN PAGE</h1>
    <br>
    <form @submit.prevent>
      <b-form-group
        id="username"
        label="Username"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="username"
          trim
        />
      </b-form-group>
      <b-form-group
        id="password"
        label="Password"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="password"
          trim
        />
      </b-form-group>
      <b-button
        block
        variant="primary"
      >
        Submit
      </b-button>
      <b-alert
        v-show="errorMessages.length > 0"
        show
        variant="warning"
      >
        {{ errorMessages }}
      </b-alert>
    </form>
  </b-container>
</template>

<script>
import Joi from '@hapi/joi';

const LOGIN_URL = 'http://localhost:5005/auth/login';

  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessages: '',
      }
    }, 
  }
</script>

<style lang="css">
  .red {
    color: red;
    font-weight: 800
  }
</style>