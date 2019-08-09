<template>
	<div>
	    <div class="MyStartButtonDiv">
	        <div class="MyStartButton">
	            <el-button type="primary" @click="startTest()">开始</el-button>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
	    mounted() {
	        this.init();
	    },
	    methods: {
	        init() {
	        },
	        startTest() {
	            this.$router.push('mytest');
	        }
	    }
	}
</script>

<style>
body {background-color: rgb(74,84,89)}
html, body {
    height: 100%;
    margin: 0;
}
.MyStartButtonDiv {
    position: absolute;
    bottom: 22%;
    left: 47%;
}
</style>
