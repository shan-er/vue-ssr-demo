<template>
    <div class="home">
        <ol>
            <li v-for="item in home">
                {{ item.text }}
            </li>
        </ol>
        <button @click="clickHander"><span v-html="getLogin"></span></button>
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
    methods: {
        clickHander() {
            Http.post('/common/getLoginInfo').then((res) => {
                if(res.body.code == 1) {
                    this.getLogin = res.body.data && res.body.data.pin + ' 已登录';
                }
            });
        }
    }
};
</script>