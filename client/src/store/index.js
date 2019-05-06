import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account: {
      namedspaced: true,

      // module assets
      state: {   } ,     // module state is already nested and not affected by namespace option
      
      mutations: {
        login () {   }   // -> commit('account/login')
      },
      actions: {
        login () {   }   // --> dispatch('account/login)
      },
      getters: {
        isAdmin () {   } // --> commit('account/isAdmin')
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
