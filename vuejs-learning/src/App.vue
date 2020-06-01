<template>
    <div>
      <!-- binding using the primitive type -->
       <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>

       <!-- binding the persons array using props -->
        <app-front v-bind:persons="persons"></app-front>

        <app-footer v-bind:title="title" ></app-footer>

    </div>
</template>

<script>
import Header from './components/Header.vue';
import Front from './components/Front.vue'
import Footer from './components/Footer.vue';

export default {
    components: {
        'app-header':Header,
        'app-front':Front,
        'app-footer':Footer
    },
    data () {
        return {
          // props
           persons:[
            { name:'Akash' ,speciality:'Vue Component', show:false},
            { name:'Bennet' ,speciality:'HTML', show:false},
            { name:'Charley' ,speciality:'Webpack', show:false},
            { name:'Dickens' ,speciality:'Data Binding', show:false},
            { name:'Elfanso' ,speciality:'React', show:false},
            { name:'Frank' ,speciality:'Angular', show:false},
            { name:'Giorgio' ,speciality:'Laravel', show:false},
            { name:'Hermans' ,speciality:'SFDC', show:false},
          ],
          title: "Speciality"
        }
    },
    methods:{
      updateTitle: function(updatedTitle){
        this.title = updatedTitle
      }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
