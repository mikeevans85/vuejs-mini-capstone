<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Wade's Quilts!</h1>
      <p class="lead">This is a website to buy my quilts. Take a look!
      <hr class="my-4">
      <p>Find out more information here.</p>
      <a class="btn btn-primary btn-lg" href="#/about" role="button">Learn more</a>
    </div> 
    <div>
      <button v-on:click="sortAttribute = 'name'"" class="btn btn-secondary">Sort by Name</button>
      <button v-on:click="sortAttribute = 'price'"" class="btn btn-secondary">Sort by Price</button>
    </div>
    <h1>Search Recipes:</h1>
    <input type="text" v-model="wordFilter" list="names">
    <datalist id="names">
      <option v-for="quilt in quilts">{{ quilt.name }}</option>
    </datalist>
    <div class="container">
      <div class="row">
        <template id="QuiltCard">
          <div v-for="quilt in orderBy(filterBy(quilts, wordFilter, 'name'), sortAttribute)" class="col">
            <div class="card-body" style="width: 18rem;">
              <img class="card-img-top" v-bind:src="quilt.images[0] ? quilt.images[0] : 'http://i2.wp.com/www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg?zoom=2&fit=300%2C300'" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ quilt.name }}</h5>
                  <p class="card-size">{{ quilt.size }}</p>
                  <p class="card-price">{{ quilt.price }}</p>
                  <p class="card-text">{{ quilt.description }}</p>
                  <a v-bind:href="`/#/${quilt.id}`" class="btn btn-primary">Details</a>
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
        quilts: [],
        inputName: "",
        inputSize: "",
        inputPrice: "",
        inputDescription: "",
        wordFilter: "",
        sortAttribute: "",
        Errors: []
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
