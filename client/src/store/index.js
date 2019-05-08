import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account: {
      namedspaced: true,

      // module assets
      state: {
        user: {}

        },

      mutations: {
        login ()      {   },   // -> commit('account/login')
        isLoggedIn () {   } // --> commit('account/isLoggedIn)
      },
      actions: {
        login ()      {   } ,  // --> dispatch('account/login)
        isLoggedIn () {   } // --> dispatch('account/isLoggedIn)
      },
      getters: {
        isAdmin ()    {   }, // --> commit('account/isAdmin')
        isLoggedIn () {   } // --> commit('account/isLoggedIn)
      },

       // nested modules
       modules: {
        // inherits the namespace from parent module
        myPage: {
          state: {  },
          getters: {
            profile () {  } // -> getters['account/profile']
          }
        },

        // further nest the namespace
        posts: {
          namespaced: true,

          state: {  },
          getters: {
            popular () {  } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
});
