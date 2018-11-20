<template>
  <div class="logoutmessage">
    <h1>You have successfully logged out.</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/LogoutMessage");
  }
};
</script>