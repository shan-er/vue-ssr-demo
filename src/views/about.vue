<template>
    <div class="about">
        <h4>about</h4>
        <table>
            <tbody>
                <tr v-for="item in getList">
                    <td>{{item && item.name}}</td>
                    <td>{{item && item.width + '*' + item && item.height}}</td>
                    <td>{{item && item.time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'about',
    data() {
        return {
        }
    },
    asyncData ({ store, route }) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('getList');
    },
    computed: {
        // 从 store 的 state 对象中的获取 item。
        getList () {
          return this.$store.state.list && this.$store.state.list.data;
        }
    },
    methods: {
    }
};
</script>