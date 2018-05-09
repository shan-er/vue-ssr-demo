<template>
	<div class="about">
	    <h4>about</h4>
	    <table>
	    	<tbody>
	    		<tr v-for="item in list">
	    			<td>{{item.name}}</td>
	    			<td>{{item.width + '*' + item.height}}</td>
	    			<td>{{item.time}}</td>
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
            list: []
        };
    },
    methods: {
        getList() {
            Http.post('/common/getList').then((res) => {
                if(res.body.code == 1) {
                    this.list = res.body.data || [];
                }
            });
        }
    },
    created() {
    	this.getList();
    }
};
</script>