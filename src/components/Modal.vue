<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" v-on:click="handleClose">&times;</span>
      {{title}} | {{dateIntroduced}}
      <p>
        {{category}}
      </p>
      {{houseOrSenate}}
      <hr>
      <h4>Bill Summary</h4>
      <p>
        {{text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    text: String,
    category: String,
    dateIntroduced: String,
    houseOrSenate: String
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose: function (event) {
      event.target.parentElement.parentElement.style.display = 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  animation-name: back-fadein;
  animation-duration: .75s;
}

@keyframes back-fadein{
  from {background-color: rgba(0,0,0,0.0);}
  to {background-color: rgba(0,0,0,0.4);}
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  animation-name: slide;
  animation-duration: 1s;
}

@keyframes slide{
  from {margin: 0% auto;}
  to {margin: 10% auto;}
}

/* The Close Button TODO move this to bill card*/
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
