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
            <div class="col-md-12">
              <h1>修为:{{gameInfo.cultivation}}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 text-left">
              <p>第{{gameInfo.samsara}}重天</p>
            </div>
            <div class="col-md-4 text-center">
              <button class="btn btn-lg btn-default bigBtn" v-on:click="practice">修炼</button>
            </div>
            <div class="col-md-4 text-right">
              <h3>{{gameInfo.levelName}}境</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import big from 'big.js'
import level from './level.js'
export default {
  name: 'app',
  data () {
    return {
      gameName:"修真世界",
      placeholder:"仙名",
      gameInfo:{
        userName:null,
        userNameEnter:false,
        cultivation:0,
        samsara:0,
        level:0,
        levelName:level._0.name,
        nextLevel:level._0.max
      }
    }
  },
  methods: {
    enterName:function(){
      if(!this.gameInfo.userName){
        this.gameInfo.userName="无名氏"
      }
      this.gameInfo.userNameEnter=true
    },
    practice:function(){
      this.gameInfo.cultivation++

      if(this.gameInfo.cultivation>this.gameInfo.nextLevel){
      }



    }
    
  }
}
</script>

<style lang="less">
  body{background-color: #333;}
  .container{
    background-color: #ccc;
  }
  .userName{
    font-size: 18px;
  }
  .bigBtn{
    width: 60%;
    line-height: 30px;
    font-size: 24px;
  }
</style>
