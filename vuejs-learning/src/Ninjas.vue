<template>
  <div>
<ul>
  <li v-bind:key="ninja in ninjas">{{ ninja }}</li>
</ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      heads:[
        'Name1',
        'Name2',
        'Name3'
      ]
    }
  }
}
</script>
