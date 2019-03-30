<template>
  <div class="main">
    <form class="form-card">
    	<BadgeCallout />

    	<div class="form-group">
    		<label>Title</label>
    		<input type="text" v-model="post.title" class="form-control" required />
    	</div>

    	<div class="form-group">
    		<label>Content</label>
    		<textarea v-model="post.content" rows="5" class="form-control" required></textarea>
    	</div>

    	<div class="form-group">
    		<label>Category</label>
    		<select v-model="post.category" class="form-control" required>
    			<option v-for="category in categories" v-bind:value="category">{{ category }}</option>
    		</select>
    	</div>

    	<div class="form-group">
    		<input type="submit" class="btn-form" v-on:click.prevent="store" value="Submit Post" />
    	</div>
    </form>
  </div>
</template>

<script>
import BadgeCallout from '../components/BadgeCallout.vue';

export default {
  name: 'AddBlog',
  components: {
  	BadgeCallout
  },
  data: function() {
  	return {
  		post: {
  			title: '',
  			content: '',
  			category: ''
  		},
  		categories: ['Entertainment', 'News', 'Film', 'Drama', 'JPOP']
  	}
  },
  methods: {
  	store: function() {
  		if(this.post.title && this.post.content && this.post.category){
  			this.$swal({
  				title: "Confirmation",
			  	text: "Apa anda yakin ingin mengirimkan post ini?",
			  	icon: "warning",
			  	closeOnClickOutside: false,
			  	buttons: {
			    	cancel: {
			      		text: "Cancel",
			      		visible: true,
			      		closeModal: true
			    	},
			    	confirm: {
			      		text: "Iya saya yakin!",
			      		visible: true,
			      		closeModal: false
			    	}
			  	},
			  	dangerMode: true
  			}).then(function(willPost) {
  				if(willPost){
  					this.$http.post('https://vue-blogs-007.firebaseio.com/posts.json', this.post).then(
              function(data) {
			  			this.$swal('Operation Success!', 'Data berhasil dikirim!', 'success').then(function(response) {
                this.$router.push('/');
              }.bind(this));
			  		});
  				}
  			}.bind(this));
  		}else{
  			this.$swal('Whoops! Something were wrong!', 'Tolong diisi seluruh input terlebih dahulu!', 'error');
  		}
  	}
  }
}
</script>


<style scoped>
.main{
	max-width: 1080px;
	margin: 20px auto;
}

.form-card{
	padding: 30px;
  background-color: #FFFFFF;
  width: 50%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.22);
}

.form-group{
	margin-bottom: 1rem;
  padding-top: 0;
}

.form-group label{
	display: inline-block;
}

.form-group .form-control{
	display: block;
  background-color: transparent;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  border: 1px solid #BEBEBE;
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
}

.form-group .form-control:focus{
	-moz-box-shadow: 0 0 8px #42b983;
  -webkit-box-shadow: 0 0 8px #42b983;
  box-shadow: 0 0 8px #42b983;
  border: 1px solid #42b983;
}

.form-group .btn-form{
	color: #FFFFFF;
  background-color: #42b983;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #42b983;
  margin: 0;
  width: 100%;
  padding: 14px 0px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
}

@media screen and (max-width: 1080px){
  .main{
    max-width: 100%;
    padding: 0 16px;
  }

  .form-card{
    width: 100%;
  }
}
</style>
