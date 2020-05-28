var one = new Vue({
    el:'#vue-app-one',
    data:{
        title: 'Vue one App'
    },
    methods:{

    },
    computed:{
        greet:function(){
            return "Hello-1";
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data:{
        title: 'Vue two App'
    },
    methods:{
        changeTitle: function(){
            one.title = "title changed";
        }
    },
    computed:{
        greet:function(){
            return "Hello-2";
        }
    }
});

two.title = "changes from outside";