<template>
    <div class="home">
        <ol>
            <li v-for="item in home">
                {{ item.text }}
            </li>
        </ol>
        <span>获取login: </span>
        <span>{{loginInfo && loginInfo.pin}}</span>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            home: [{
                text: 'item 1'
            }, {
                text: 'item 2'
            }, {
                text: 'item 3'
            }],
            getLogin: '请点我'
        };
    },
    asyncData ({ store, route }) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('getLoginInfo');
    },
    computed: {
        // 从 store 的 state 对象中的获取 item。
        loginInfo () {
          return this.$store.state.loginInfo && this.$store.state.loginInfo.data;
        }
    },
    methods: {
        clickHander() {
            store.dispatch('getLoginInfo');
        }
    }
};
</script>