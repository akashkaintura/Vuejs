new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            console.log('Entered Name');
        },
        logAge: function(){
            console.log('Entered Age');
        }

    }
});
