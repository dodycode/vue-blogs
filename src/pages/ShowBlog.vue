<template>
  <div class="wrapper">
    <div class="card-details">
      <div class="image">
        <img src="../assets/blog.png">
      </div>
      <div class="content">
        <!-- If data still on load -->
        <h4 v-if="loading" style="text-align: center;">Loading...</h4>

        <span class="label">{{ blog.category }}</span>
        <h4 style="text-align: center;">{{ blog.title }}</h4>
        <article>
          {{ blog.content }}
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlog',
  data: function() {
    return {
      id: this.$route.params.id,
      blog: {},
      loading: true
    }
  },
  created: function() {
    this.$http.get('https://vue-blogs-007.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
      return data.json();
    }.bind(this)).then(function(response){
      this.loading = false;
      this.blog = response;
    }.bind(this));
  }
}
</script>

<style scoped>
  .wrapper{
    max-width: 1080px;
    margin: 40px auto;
  }

  .card-details{
    width: 100%;
    background-color: #fff;
    margin-right: 20px;
    margin-bottom: 30px;
    box-shadow: 0 1px 5px #dcdcdc;
  }

  .card-details .image{
    width: 100%;
    height: auto;
    position: relative;
  }

  .card-details .content{
    padding: 1.25rem 1.875rem;
    border-bottom-left-radius: .125rem;
    border-bottom-right-radius: .125rem;
  }

  .card-details .content .label{
    display: block;
    font-size: 1rem;
    color: #42b983;
    letter-spacing: 1px;
  }

  .card-details .content h4{
    margin: 40px 0;
    color: #696969;
    letter-spacing: 1px;
    font-size: 2.5rem;
  }

  .card-details .content article{
    color: #696969;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 1080px) {
    .wrapper{
      max-width: 100%;
      padding: 0 16px;
    }

    .card-details .content h4{
      font-size: 2rem;
      line-height: 1.2;
    }

    .card-details .content article{
      font-size: 1.25rem;
    }
  }
</style>
