new Vue({
    el: '#vue-app',
    data:{
        output:'Your Name'
    },
    method:{
        readRefs: function(){
            console.log(this.$refs.innerText);
            this.output = this.$refs.input.value;
        }
    }
});