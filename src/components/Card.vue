<template>
  <div class="card">
    <modal :title.sync="card.title"
           :text.sync="card.text"
           />
    <button v-on:click="handleClick">
      <div class="content">
        <h2> {{card.title}} </h2>
        <hr>
        <p> {{card.intro}} </p>
      </div>
    </button>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
require('dotenv').config()
var fetch = require('node-fetch')

export default {
  name: 'Card',
  components: {
    Modal
  },
  props: {
    card: {
      title: String,
      intro: String,
      text: String,
      category: String,
      dateIntroduced: String,
      houseOrSenate: String
    }
  },
  data: function () {
    return {
    }
  },

  created: function () {
    this.getBillInfo()
  },

  methods: {
    handleClick: function (event) {
      console.log(event.target)
      event.target.previousElementSibling.style.display = 'block'
    },

    getBillInfo: function () {
      var propub = 'https://api.propublica.org/congress/v1/115/bills/hr4881'
      fetch(propub, { headers: {
        'X-API-Key': 'kTURrPH8Awsjo6H8zd7JSEqfyFrxvPO0ubGmbHl6'
      }})
        .then((res) => res.json())
        .then((json) => {
          var results = json.results[0]
          this.card.title = results.short_title
          this.card.intro = results.title
          this.card.text = results.summary
          this.card.category = results.primary_subject
          this.card.houseOrSenate = results.bill_type
          this.card.dateIntroduced = results.introduced_date
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 1em;
}
button{
  text-align: left;
  width: 50em;
  border-left: 6px solid blue;
  border-bottom:none;
  border-right:none;
  background-color:white;
  transition: .15s;
  border-radius: 5px;
}

button:hover{
  background-color: #f0f0f0;
  border-left: 9px solid red;
}

</style>
