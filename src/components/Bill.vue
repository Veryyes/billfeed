<template>
  <div class="bill">
    <div class="bill-title">
      <h2>{{ bill.title }}</h2>
      <hr>
      <p>{{ bill.text }}</p>
    </div>
    <div class="bill-text" />
  </div>
</template>

<script>
require('dotenv').config();
var fetch = require('node-fetch');

export default {
  name: 'Bill',
  methods: {
    getTitle(billSlug) {
      fetch(`https://api.propublica.org/congress/v1/115/bills/${billSlug}`,
        {
          headers: {
            'X-API-Key': 'kTURrPH8Awsjo6H8zd7JSEqfyFrxvPO0ubGmbHl6'
          }
        })
        .then(res => res.json())
        .then((res) => {
          return `${res.results.bill}: ${res.results.short_title}`;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getText() {
      fetch(`https://api.propublica.org/congress/v1/115/bills/${billSlug}`,
        {
          headers: {
            'X-API-Key': 'kTURrPH8Awsjo6H8zd7JSEqfyFrxvPO0ubGmbHl6'
          }
        })
        .then(res => res.json())
        .then((res) => {
          return `${res.results.bill}: ${res.results.short_title}`;
        })
        .catch((err) => {
          console.error(err);
        });

    }
  },
  data: function () {
    return {
      title: this.methods.getTitle(),
      text: this.methods.getText()
    }
  },
  props: {
    billSlug: String,
  }
}
</script>

<style>

</style>