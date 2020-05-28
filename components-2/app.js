Vue.component('button-counter',{
    template:
    '<button v-on:click="count++"> clicked {{ count }} times</button>',
    data: function(){
        return {
            count: 0
        }
    }
})
 new Vue({
     el:'#button-count'
 })
