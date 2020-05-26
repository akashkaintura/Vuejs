new Vue({
    el: '#vue-app',
    data: {
        name: 'Akash',
        Desig: "ASE",
        website: 'https://vuejs.org/v2/guide/installation.html',
        websiteTag: '<a href="https://vuejs.org/v2/guide/installation.html">Vuejs</a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + ' ' + time + ' ' + this.name;
        }
    }
});