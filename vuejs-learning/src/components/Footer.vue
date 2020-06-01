<template>
<footer>
  <p>{{ copyright }} {{ title }}</p>
</footer>

</template>

<script>


export default {
props:{
  title:{
    type:String
  }
},
    data () {
        return {
          copyright: 'copyright'
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
