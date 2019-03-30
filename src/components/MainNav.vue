<template>
	<div class="navbar">
		<div class="navbar-content">
			<img alt="Vue logo" src="./../assets/logo.png">
			<router-link to="/">
				<span>Asian Fakeposts</span>
			</router-link>
		</div>
		<div class="right-content">
			<router-link class="btn-vue" to="/add">
				<span>Add New +</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style scoped>
	.navbar{
	    background: #fff;
	    box-shadow: 0 1px 5px #dcdcdc;
	    padding-top: 16px;
	    padding-bottom: 16px;
	    width: 100%;
	    border: 1px solid transparent;
	    border-top-width: .25rem;
  		border-top-color: #42b983;
  		position: relative;
	}

	.navbar-content{
		max-width: 1080px;
		margin-right: auto;
		margin-left: auto;
	}

	.right-content{
		position: absolute;
		right: 130px;
		top: 33px;
	}

	.btn-vue{
		background-color: #42b983;
		padding: 15px 15px;
		border-radius: 3px;
		box-shadow: 0 1px 5px #dcdcdc;
	}

	.btn-vue span{
		color: #fff !important;
		font-size: 14px !important;
	}

	.navbar img{
		width: 50px;
		vertical-align: middle;
		display: inline-block;
		margin-right: 15px;
	}

	.navbar span{
		vertical-align: middle;
		display: inline-block;
		font-weight: 300;
		font-size: 18px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: #000;
	}

	@media screen and (max-width: 1080px){
		.navbar-content{
			max-width: 100%;
			padding: 0 16px;
		}
	}

	@media screen and (max-width: 600px){
		.right-content{
			margin-top: 20px;
			position: static;
			top: unset;
			right: unset;
			width: 50%;
			margin: 0 auto;
		}

		.right-content .btn-vue{
			display: block;
			text-align: center;
		}
	}
</style>