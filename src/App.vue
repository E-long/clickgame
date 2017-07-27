<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1 text-center">
          <div class="gameTitle">
            <h1>{{gameName}}</h1>
          </div>
          <div class="row">
            <div class="gameUserName" v-if="!gameInfo.userNameEnter">
              <input type="text" v-bind:placeholder="placeholder" v-model="gameInfo.userName">  
              <button class="btn btn-default" v-on:click="enterName">命名</button>
            </div>
            <div class="userName" v-if="gameInfo.userNameEnter">{{gameInfo.userName}}</div>
          </div>
          <div class="row">
            <div class="col-lg-1">
              九转轮回
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      gameName:"修真世界",
      placeholder:"仙名",
      gameInfo:{
        userName:null,
        userNameEnter:false

      }
    }
  },
  methods: {
    enterName:function(){
      this.gameInfo.userNameEnter=true
    }
    
  }
}
</script>

<style lang="less">
  body{background-color: #333;}
  .container{
    background-color: #ccc;
  }
</style>
