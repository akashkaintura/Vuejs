<template>
<div id ='persons'>

  <ul>
     <li v-for="person in persons" v-on:click="person.show = !person.show">
                <h2>{{ person.name }}</h2>
                <h3 v-show="person.show">{{ person.speciality }}</h3>
            </li>
  </ul>
  <button v-on:click="deletePerson">Delete persons</button>
</div>

</template>

<script>


export default {
props:{
  persons:{
    type:Array,
    required:true
  }
},
    data () {
        return {

        }
    },
    methods:{
      deletePerson:function(){
        this.persons.pop();
      }
    },
    // lifecycle-hooks
    beforeCreate(){
      alert('beforeCreate');
    },

    created(){
      alert('created');
    },

    beforeMount(){
      alert('beforeMount');
    },

    mounted(){
      alert('mounted');
    },

    beforeUpdate(){
      alert('beforeUpdate');
    },

    updated(){
      alert('updated');
    }

}
</script>

<style scoped>
#peoples{
  width: 100%;
  max-width: 1200px;
  margin:40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
