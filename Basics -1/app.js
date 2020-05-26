new Vue({
    el: '#vue-app',
    data: {
        name: 'Akash',
        Desig: "ASE"
    },
    methods: {
        greet: function(time){
            return 'Good' + ' ' + time + ' ' + this.name;
        }
    }
});
