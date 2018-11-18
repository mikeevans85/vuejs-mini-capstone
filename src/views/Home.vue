<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Wade's Quilts!</h1>
      <p class="lead">This is a website to buy my quilts. Take a look!
      <hr class="my-4">
      <p>Find out more information here.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div> 
    <div class="container">
      <div class="row">
        <template id="QuiltCard">
          <div v-for="quilt in quilts" class="col">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="https://i2.wp.com/www.sunflowerstitcheries.com/wp-content/uploads/2015/06/1-IMGP35841.jpg?w=364" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ quilt.name }}</h5>
                  <p class="card-size">{{ quilt.size }}</p>
                  <p class="card-price">{{ quilt.price }}</p>
                  <p class="card-text">{{ quilt.description }}</p>
                  <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div> 
          </div> 
        </template>
      </div>
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
        message: "Welcome to Vue.js!",
        quilts: []
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/quilts').then(function(response) {
        console.log(response.data);
        this.quilts = response.data;
      }.bind(this));
    },
    methods: {},
    computed: {}
};
</script>
