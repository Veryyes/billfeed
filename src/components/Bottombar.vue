<template>
  <div class="bottombar">
    <div class="spacer"></div>
    <div class="content">
      Bill Feed © 2018
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottombar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spacer{
  height:4em;

}
.content{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  padding:1em;
    background-color:white;
}
</style>
