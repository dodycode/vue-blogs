<template>
  <div class="badge">
    <h4>Tambah Post Baru</h4>
    <p>Memiliki sesuatu yang ingin di posting? Tulis aja dimari!</p>
  </div>
</template>

<script>
export default {
  name: 'BadgeCallout'
}
</script>


<style scoped>
.badge{
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #eee;
  border-left-width: .25rem;
  border-left-color: #42b983;
}

.badge h4{
  margin-top: 0;
  margin-bottom: 2px;
}

.badge p{
  margin-top: 5px;
}

.badge p:last-child{
  margin-bottom: 0;
}
</style>
