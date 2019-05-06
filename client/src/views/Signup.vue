<template>
  <b-container class="mt-5">
    <form @submit.prevent>
      <b-form-group
        id="username"
        label="Enter Username"
        label-for="input-1"
        :invalid-feedback="invalidFeedbackUsername"
        :valid-feedback="validFeedbackUsername"
        :state="usernameState"
      >
        <b-form-input
          id="username"
          v-model="username"
          :state="usernameState"
          trim
        />
      </b-form-group>
      <b-form-group
        id="text-password"
        label="Enter Password"
        label-for="text-password"
        :invalid-feedback="invalidFeedbackPassword"
        :valid-feedback="validFeedbackPassword"
        :state="passwordState"
      >
        <b-form-input
          id="text-password"
          v-model="password"
          :state="passwordState"
          trim
        />
      </b-form-group>
      <b-form-group
        id="text-password2"
        label="Enter Password Again"
        label-for="text-password2"
        :invalid-feedback="invalidFeedbackPassword2"
        :valid-feedback="validFeedbackPassword2"
        :state="passwordState2"
      >
        <b-form-input
          id="text-password2"
          v-model="password2"
          :state="passwordState2"
          trim
        /> <b-alert
          v-show="password !== password2"
          show
          variant="danger"
        >
          Passwords don't match
        </b-alert>
      </b-form-group>
      
      <b-button
        v-show="validation === false"
        variant="secondary"
        @click="validUser"
      >
        Validate
        <b-spinner
          small
          type="grow"
        />
      </b-button>
      <b-button
        v-show="validation === true"
        block
        variant="primary"
        @click="submitData"
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

const SIGNUP_URL = 'http://localhost:5005/auth/signup';

const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(5).max(15).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(),
      password2: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(),
});
  export default {
    data() {
      return {
        username: '',
        password: '',
        password2: '',
        validation: false,
        errorMessages: '',
      }
    },
    computed: {
      usernameState() {
        return this.username.length >= 5 && this.username.length <= 15 ? true : false;
      },
      passwordState() {
        return this.password.length >= 5 && this.password.length <= 15 ? true : false;
      },
       passwordState2() {
        return this.password2.length >= 5 && this.password.length <= 15 ? true : false;
      },
      invalidFeedbackUsername() {
        if (this.username.length > 5) {
          return ''
        } else if (this.username.length > 0) {
          return 'Enter at least 5 characters'
        } else if (this.username.length >= 15) {
          return 'No more than 15 chars'
        } else {
          return 'Username between 5 and 15 characters'
        }
      },
      invalidFeedbackPassword() {
        if (this.password.length > 5) {
          return ''
        } else if (this.password.length > 0) {
          return 'Enter at least 5 characters'
        } else if (this.password.length >= 15) {
          return 'No more than 15 chars'
        } else {
          return 'password between 5 and 15 characters'
        }
      },
       invalidFeedbackPassword2() {
        if (this.password2.length > 5) {
          return ''
        } else if (this.password2.length > 0) {
          return 'Enter at least 5 characters'
        } else if (this.password2.length >= 15) {
          return 'No more than 15 chars'
        } else {
          return 'please make sure they match!'
        }
      },
      validFeedbackUsername() {
        return this.usernameState === true ? 'Thank you' : ''
      },
      validFeedbackPassword() {
        return this.passwordState === true ? '1st password length OK' : ''
      },
      validFeedbackPassword2() {
         return this.passwordState2 === true ? '2st password length OK' : ''
      }
    },
    methods: {
      validUser() {
          const user =  {
          username: this.username,
          password: this.password,
          password2: this.password2
        }
        // result ==> validate via Joi.js
        const result = Joi.validate(user, schema);
        // result.error is true
        if (result.error === null) {
          this.$data.errorMessages = '';
          this.$data.validation = true;
            return true;
        } 
        // its not valid
        if (result.error !== null) {
          this.errorMessages = result.error.message;
        }
      },
      submitData() {
         const body =  {
          username: this.$data.username,
          password: this.$data.password,
        }
        // post to the signup API
        fetch(SIGNUP_URL, {
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
          this.$data.errorMessages = 'username taken'
        })
      }
    }
  }
</script>

<style lang="css">
  .red {
    color: red;
    font-weight: 800
  }
</style>