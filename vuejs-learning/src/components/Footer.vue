<template>
<footer>
  <p>copyright &copy; 2020 {{ title }}</p>
</footer>

</template>

<script>
import {bus} from '../main';

export default {
props:{
  title:{
    type:String
  }
},
    data () {
        return {

        }
    },
    // event calling
    created(){
      bus.$on('titleChanged', (data) => {
        this.title = data;
      })
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
