/**
 * @store
 * @author shan-er
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = (DEV ? '/' : 'http://localhost:8082/')

export function createStore () {
  return new Vuex.Store({
    state: {
      loginInfo: {},
      list: []
    },
    actions: {

        getLoginInfo ({ commit }) { 
            return axios.post(`${baseUrl}common/getLoginInfo`).then((res) => {
                commit('getLoginInfo', res.data);
            });
        },
        getList ({ commit }) { 
            return axios.post(`${baseUrl}common/getList`).then((res) => {
                commit('getList', res.data);
            });
        }
    },
    mutations: {
      getLoginInfo (state, info) {
        state.loginInfo = info;
      },
       getList (state, list) {
        state.list = list;
      }
    }
  })
}