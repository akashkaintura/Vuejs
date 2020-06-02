<template id="container">
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <p>Blog Categories:</p>

                <input type="checkbox" value="PHP" v-model="blog.categories">
                <label>PHP</label>

                <input type="checkbox" value="Laravel" v-model="blog.categories" >
                <label>Larvel</label>

                <input type="checkbox" value="Vue" v-model="blog.categories" >
                <label>Vue</label>

                <input type="checkbox" value="Angular" v-model="blog.categories" >
                 <label>Angular</label>

                  <input type="checkbox" value="webpack" v-model="blog.categories" >
                 <label>webpack</label>

                  <input type="checkbox" value="wordpress" v-model="blog.categories" >
                 <label>wordpress</label>


            </div>
            <label>Author:</label>
            <input v-model="blog.author" type="smalltext" name="author" >
            <!-- <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select> -->
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: [],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://blog-by-akash.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
/* #container{
  background-color: coral;
} */

#add-blog *{

    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
</style>
