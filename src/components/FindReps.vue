<template>
  <div class="findreps">
    <h4>Find Your Representatives in Congress</h4>
      <div id="app">
        <!-- <dropdown :data="options" :cbChanged="changed"></dropdown> -->
        <input id="zipcode" type="text" v-model="zip" placeholder="zip code">
        <input id="submitbtn" type="submit" v-on:click="getConstituents(zip)">
        <p>Your Representatives Based on Zip Code: {{ zip }}</p>
        <div id="FindReps">
          <ol>
            <li v-for="rep in repsList" v-bind:key="rep.name">
              {{ rep.name }}
              <span v-if="rep.district===''">, Senator</span>
              <span v-else>, Representative</span>
            </li>
          </ol>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FindReps',
  props: {
    zip: Number,
    repsList: Array
  },
  methods: {
    getConstituents: function (zip) {
      var list = []
      fetch('http://localhost:3000/' + zip).then(
        function (response) {
          return response.json()
        }).then(function (response) {
        console.log(response)
        response.forEach(function (item) {
          console.log(item)
          list.push(item)
          // console.log(item)
        }).catch(err => console.log(err))
      })
      this.repsList = list
    },
    changed: function (selected) {
      console.log(selected)
    }
  }
  // data () {
  //   return {
  //     options: [{
  //       label: 'DC',
  //       value: 1
  //     }, {
  //       label: 'VA',
  //       value: 2
  //     }, {
  //       label: 'MD',
  //       value: 3
  //     }, {
  //       label: 'CA',
  //       value: 4
  //     }, {
  //       label: 'FL',
  //       value: 5
  //     }, {
  //       label: 'GA',
  //       value: 6
  //     }, {
  //       label: 'MA',
  //       value: 7
  //     }, {
  //       label: 'NJ',
  //       value: 8
  //     }, {
  //       label: 'NH',
  //       value: 9
  //     }, {
  //       label: 'NY',
  //       value: 10
  //     }, {
  //       label: 'PA',
  //       value: 11
  //     }, {
  //       label: 'HI',
  //       value: 12
  //     }, {
  //       label: 'DE',
  //       value: 13
  //     }, {
  //       label: 'IL',
  //       value: 14
  //     }, {
  //       label: 'CO',
  //       value: 15
  //     }]
}
</script>

<style scoped>
.findreps{

}
</style>
