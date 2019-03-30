<template>
  <footer>
    <div class="copyright-bar">
      <div class="main-wrapper">
        <div class="content">
          <p style="text-align: center;">Made for practice purposes. By DodyPras</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterCopyright'
}
</script>


<style scoped>
  .copyright-bar{
    background-color: #ebebeb;
    width: 100%;
    height: 54px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  .main-wrapper{
    max-width: 100%;
    margin: auto;
    position: relative;
  }

  .content {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 300;
  }
</style>
