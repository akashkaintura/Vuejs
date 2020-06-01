<template>
<footer>
  <p>{{ copyright }}</p>
</footer>

</template>

<script>


export default {

    data () {
        return {
          copyright: 'copyright 2020'
        }
    }
}
</script>

<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color:limegreen;
     text-align: center;
  }
</style>
