<template>
    <div>

       <app-header></app-header>
      <app-front></app-front>
        <app-footer></app-footer>

    </div>
</template>

<script>
import Header from './components/Header.vue';
import Front from './components/Front.vue'
import Footer from './components/Footer.vue';

export default {
    components: {
        'app-header':Header,
        'app-front':Front,
        'app-footer':Footer
    },
    data () {
        return {
          title: 'App'
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
