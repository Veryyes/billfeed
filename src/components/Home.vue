<template>
  <div class="home">
    <topbar/>
    <!--h1>Bill Feed</h1>
    See what organizations have to say about on-going bills
    <hr-->
    <div class="content">
      <div class="topsection">
        <img src="../assets/AI.jpg"/>
        <div class="title">
          <h1>Amnesty Interational</h1>
          <p><em>Campaign for a world where human rights are enjoyed by all</em></p>
        </div>
      </div>

      <div class="card-view">
        <card :card.sync="Card1"/>
        <card :card.sync="Card2"/>
      </div>
    </div>
    <findreps></findreps>
    <bottombar/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Topbar from '@/components/Topbar.vue'
import Bottombar from '@/components/Bottombar.vue'
export default {
  name: 'Home',
  components: {
    Card, Topbar, Bottombar
  },
  data: function () {
    return {
      Card1: {
        title: 'Amazing Bill',
        intro: 'Introduction To this bill',
        bill_id: 'hr21'

      },
      Card2: {
        title: 'Not a cool bill',
        intro: 'text here lol',
        bill_id: 'hr1865'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topsection{
  overflow:hidden;
  padding-left:20em;
  padding-right:20em;
  padding-top:3em;
}

img{
  float:left;
  width: 150px;
  height: 150px;
  overflow:hidden;
  border-radius: 50%;
}

h1{
  font-size:2.5em;
}

.findreps{
  position: relative;
  left: 450px;
  bottom: 50px;
}
</style>
