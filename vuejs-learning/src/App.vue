<template>
    <div>

        <add-blog></add-blog>
        <show-blogs></show-blogs>
        <list-blogs></list-blogs>

      <!-- binding using the primitive type -->
       <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header> -->

       <!-- binding the persons array using props -->
        <!-- <app-front v-bind:persons="persons"></app-front>

        <app-footer v-bind:title="title" ></app-footer> -->

        <!-- <form-helper>
          <div slot="form-header">
            <h3>This is title of form</h3>
            <p>Info on Form</p>
          </div>

          <div slot="form-fields">
            <input type="text" placeholder="name" required>
            <input type="password" placeholder="password" required>
          </div>

          <div slot="form-controls">
            <button v-on:click="handleSubmit">Submit</button>
          </div>

        </form-helper> -->

      <!-- swithcing the forms retains the data -->
        <!-- <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'form-one'">Show form one</button>
        <button v-on:click="component = 'form-two'">Show form two</button> -->


    </div>
</template>

<script>

//local directory import
// import Header from './components/Header.vue';
// import Front from './components/Front.vue'
// import Footer from './components/Footer.vue';

//  import formHelper from './components/formHelper.vue';

// import formOne from './components/formOne.vue';
// import formTwo from './components/formTwo.vue';

import addBlog from './components/addBlog.vue';
import listBlogs from './components/listBlogs.vue';
import showBlogs from './components/showBlogs.vue';


export default {
    components: {
        // 'app-header':Header,
        // 'app-front':Front,
        // 'app-footer':Footer

        //  'form-helper': formHelper

        // 'form-one':formOne,
        // 'form-two':formTwo

         'add-blog': addBlog,

        'show-blogs': showBlogs,
        'list-blogs': listBlogs
  },

    data () {
        return {

          // component:'form-one'
          //  title: 'Dynamic slot title'

          // props
          //  persons:[
          //   { name:'Akash' ,speciality:'Vue Component', show:false},
          //   { name:'Bennet' ,speciality:'HTML', show:false},
          //   { name:'Charley' ,speciality:'Webpack', show:false},
          //   { name:'Dickens' ,speciality:'Data Binding', show:false},
          //   { name:'Elfanso' ,speciality:'React', show:false},
          //   { name:'Frank' ,speciality:'Angular', show:false},
          //   { name:'Giorgio' ,speciality:'Laravel', show:false},
          //   { name:'Hermans' ,speciality:'SFDC', show:false},
          // ],
          // title: "Speciality"
        }
    },
   methods: {
      // updateTitle: function(updatedTitle){
      //   this.title = updatedTitle;
      // }

      // handleSubmit: function(){
      //       alert('thanks for submitting');
      //   }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
