<template>
<div id ='persons'>
  <ul>
     <li v-for="person in persons" v-on:click="person.show = !person.show">
                <h2>{{ person.name }}</h2>
                <h3 v-show="person.show">{{ person.speciality }}</h3>
            </li>
  </ul>
</div>

</template>

<script>


export default {

    data () {
        return {
          persons:[
            { name:'Akash' ,speciality:'Vue Component', show:false},
            { name:'Bennet' ,speciality:'HTML', show:false},
            { name:'Charley' ,speciality:'Webpack', show:false},
            { name:'Dickens' ,speciality:'Data Binding', show:false},
            { name:'Elfanso' ,speciality:'React', show:false},
            { name:'Frank' ,speciality:'Angular', show:false},
            { name:'Giorgio' ,speciality:'Laravel', show:false},
            { name:'Hermans' ,speciality:'SFDC', show:false},
          ]
        }
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
