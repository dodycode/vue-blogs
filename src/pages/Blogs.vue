<template>
	<div id="blogs" class="wrapper">
		<div class="search">
			<input type="text" v-model="search" name="search" placeholder="Search titles" />
		</div>
		<div class="blogs">
			<router-link v-for="blog in filteredBlogs" v-bind:to="'/blog/' + blog.id">
				<div class="card">
					<div class="image">
						<div class="centercrop">
							<img src="../assets/blog.png" />
						</div>
					</div>
					<div class="content">
						<span class="label">{{ blog.category }}</span>
						<h4>{{ blog.title | to-capitalized }}</h4>
						<p>{{ blog.content | limit-words }}</p>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Blogs',
  data: function() {
  	return {
  		blogs: [],
  		search: ''
  	}
  },
  created: function() {
  	this.$http.get('https://vue-blogs-007.firebaseio.com/posts.json').then(function(data) {
  		return data.json();
  	}.bind(this))
  	.then(function(responses) {
  		var blogsTemp = [];

  		//collects id
  		for (var key in responses){
  			responses[key].id = key;
  			blogsTemp.push(responses[key]); 
  		}

  		this.blogs = blogsTemp;
  	}.bind(this));
  },
  computed: {
  	filteredBlogs: function() {
  		return this.blogs.filter(function(blog) {
  			var title = blog.title.toLowerCase();
  			return title.match(this.search);
  		}.bind(this));
  	}
  },
  filters: {
  	toCapitalized: function(value){
  		var title = value.slice(0,30) + '...';
		return title.toUpperCase();
  	},
  	limitWords: function(value){
  		return value.slice(0, 50) + '...';
  	}
  }
}
</script>

<style scoped>
	.wrapper{
		max-width: 1080px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 40px;
	}

	.card{
		display: inline-block;
		vertical-align: middle;
		width: 32%;
		background-color: #fff;
		margin-right: 20px;
		margin-bottom: 30px;
		box-shadow: 0 1px 5px #dcdcdc;
	}

	.blogs a:nth-child(3n) .card{
		margin-right: 0;
	}

	.card .image{
		width: 100%;
		height: 210px;
		position: relative;
	}

	.card .image .centercrop{
		width: 100%;
    	height: 100%;
    	overflow: hidden;
    	position: relative;
    	border-top-left-radius: .125rem;
    	border-top-right-radius: .125rem;
	}

	.card .image .centercrop img{
		min-width: 100%;
	    min-height: 100%;
	    height: auto;
	    max-height: 100%;
	    display: block;
	    position: relative;
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}

	.card .content{
		padding: 1.25rem 1.875rem;
		border-bottom-left-radius: .125rem;
    	border-bottom-right-radius: .125rem;
    	min-height: 170px;
	}

	.card .content .label{
		display: block;
		font-size: 13px;
		color: #42b983;
		letter-spacing: 1px;
	}

	.card .content h4{
		margin: 10px 0;
		color: #696969;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.card .content p{
		color: #696969;
		font-weight: 300;
	}

	.search {
		width: 100%;
		margin: 40px 0;
	}

	.search input{
		width: 100%;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		border-radius: .125rem;
		border-color: transparent;
		box-shadow: 0 1px 5px #dcdcdc;
	    outline: none;
		padding: 14px 5px;
	}

	@media screen and (max-width: 1080px){
		.wrapper{
			max-width: 100%;
			padding: 0 16px;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 1080px) {
		.card{
			width: 48%;
		}
	}

	@media screen and (max-width: 600px){
		.card{
			display: block;
			vertical-align: unset;
			width: 100%;
		}
		.search {
			width: 100%;
		}
	}
</style>