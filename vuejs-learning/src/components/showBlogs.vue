<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" >
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-Uppercase }}</h2></router-link>
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },

    methods:{

    },

    created() {
        this.$http.get('https://blog-by-akash.firebaseio.com/posts.json').then(function(data){
           return data.json();
        }).then(function(data){
          var blogsArray = [];
          for(let key in data){
            data[key].id = key
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        });
    },

    computed:{

    },

    filter:{
      toUppercase(value){
        return value.toUppercase();
      }
    },

     directives: {
        'rainbow' :{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        }
    },

    mixins: [searchMixin]
}
</script>

<style>
h1{
  color: #e76a17;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: rgb(255, 184, 151);
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
</style>
