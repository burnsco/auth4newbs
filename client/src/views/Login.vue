<template>
  <div class="bg-secondary">
    <b-container class="mt-5 card bg-light align-middle">
      <h1>LOGIN PAGE</h1>
      <br>
      <form @submit.prevent="login()">
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
          class="test"
          block
          @click="login"
        >
          Login
        </b-button>
        <br>
        <b-alert
          v-show="errorMessages.length > 0"
          show
          variant="warning"
        >
          {{ errorMessages }}
        </b-alert>
      </form>
    </b-container>
  </div>
</template>

<script>
import Joi from '@hapi/joi';

const LOGIN_URL = 'http://localhost:5000/auth/login';

const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(5).max(15).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(),
});

  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessages: '',
      }
    },
    methods: {
      login() {
        this.errorMessages = '';
        if(this.validUser()) {
          const body = {
            username: this.username,
            password: this.password
          }
          fetch(LOGIN_URL, {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then(res => {
          // if the response is ok, go to dashboard screen
          if (res.ok) {
            return res.json();
          }
          // if response shows error, copy the error msg
            return res.json().then(error => {
              throw new Error(error.message)
            })
          // log the user output
          }).then(result => {
            // valid info, time for token stuff
            // user is logged in
            console.log(result);
            localStorage.token = result;
            this.$router.push('/dashboard')
        // error catch...confused here
        }) .catch(err => {
          this.errorMessages = '';
          this.$data.errorMessages = 'unable to login'
        })
        }
      },
      validUser() {
          const user =  {
          username: this.username,
          password: this.password,
          }
        const result = Joi.validate(user, schema);
        // result.error is true
        if (result.error === null) {
          this.$data.errorMessages = 'data meets requirements';
            return true;
        }
        // its not valid
        if (result.error !== null) {
          this.errorMessages = result.error.message;
        }
      },
      },
       submitData() {
         const body =  {
          username: this.username,
          password: this.password,
        }
        // post to the login API
        fetch(LOGIN_URL, {
          method: "post",
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json'
          }
        }).then(res => {
          // if the response is ok, go to login screen
          if (res.ok) {
            this.$router.push('/login')
          }
          // if response shows error, copy the error msg
            return res.json().then(error => {
              throw new Error(error.message)
            })
          // log the user output
          }).then(user => {
            console.log(user);
        // error catch...confused here
        }) .catch(err => {
          this.errorMessages = '';
          this.$data.errorMessages = 'cannot login'
        })
      }
  }
</script>

<style lang="css">
.card {
  background: #fff;
  width:50vw;
  height:25vh;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
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
</style>
