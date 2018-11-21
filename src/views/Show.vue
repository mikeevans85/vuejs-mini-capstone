<template>
   <div class="Home">
     <div class="container">
      <h1>{{ quilts.name }}</h1>
      <img v-bind:src="quilts.images" alt="">
      <h2>{{ quilts.price }}</h2>
      <h2>{{ quilts.size }}</h2>
      <p>{{ quilts.description }}</p>
       <a href="/#/">Back to all quilts</a>
     </div>
   </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');
  export default {
    data: function() {
      return {
        quilts: {}
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/quilts/" + this.$route.params.id).then(function(response) {
        this.quilts = response.data;
      }.bind(this));
    },
    methods: {},
    computed: {}
};
</script>