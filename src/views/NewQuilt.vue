<template>
  <div class="newquilt">
    <div class="container">
      <h1>Add a quilt!</h1>
        <div class="row">
    Name: <input v-model="inputName" type="text">
    Size: <input v-model="inputSize" type="text">
    Price: <input v-model="inputPrice" type="text">
    Description: <input v-model="inputDescription" type="text">
    <button v-on:click="createQuilt()" class=" btn btn-primary">Add!</button>
    <ul>
      <li v-for="error in Errors" class="text-danger">{{Errors}}</li>
    </ul>
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
        Errors: []
      };
    },
    created: function() {
      axios.get('http://localhost:3000/api/quilts').then(function(response) {
        console.log(response.data);
        this.quilts = response.data;
      }.bind(this));
    },
    methods: {
      createQuilt: function() {
        console.log("createQuilt");
        var params = {
          name: this.inputName,
          size: this.inputSize,
          price: this.inputPrice,
          description: this.inputDescription,
          supplier_id: 1
        };
        axios.post("http://localhost:3000/api/quilts", params).then(function(response) {
          console.log(response.data);
          this.quilts.push(response.data);
          this.inputName = "";
          this.inputSize = "";
          this.inputPrice = "";
          this.inputDescription = "";
        }.bind(this)
        )
          .catch(
            function(error) {
              console.log(error.response.data);
              this.Errors = error.response.data.errors;
            }.bind(this)
          );
        this.$router.push("/");
      }
    },
    computed: {}
};
</script>