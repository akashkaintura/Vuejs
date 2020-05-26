new Vue({
    el: '#vue-app',
    data: {
        age: 23,
        a: 0,
        b: 0,
    },
    methods: {
        
        // methods will run and will create problem if we dont need to run  all functions at once 
       /* addToA : function() {
            console.log('addToA');
            return this.a + this.age;
        },

        addToB : function() {
            console.log('addToB');
            return this.b + this.age;
        }
        */
    },

    // only allow the clickable to run
    computed:{
        addToA : function() {
            console.log('addToA');
            return this.a + this.age;
        },

        addToB : function() {
            console.log('addToB');
            return this.b + this.age;
        }
    }
});
