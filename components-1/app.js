Vue.component('greeting', {
    template: '<p>hey there, I am {{ name }}. <button v-on:click="changeName">changename</button></p>',

    // data here must be a function not like a object
    data:function(){
        return{
            name:'akki'
        }
    },
    methods :{
        changeName:function(){
            this.name = "AKASH";
        }
    }
});

new Vue({
    el:'#vue-app-one',
    
});

 new Vue({
    el:'#vue-app-two'
});

