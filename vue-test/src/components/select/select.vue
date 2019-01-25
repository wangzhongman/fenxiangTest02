<template>
  <div class="quan">
    <div class="header">
      <div class="xuan">
        <span class="first" v-for="(item,index) in chooseAll" :key="index">{{item}}<i @click="del(index)">x</i> </span>
      </div>
      <span class="second" @click="show">+</span>
    </div>
    <div class="sel" v-show="isshow">
      <ul>
        <li v-for="(item,index) in all" :key="index">
          <div>
            <input type="checkbox" v-model="isCho[index]" :id="item" @click='choose(index)'>
            <label :for="item" class="aa">{{item}}</label>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "select",
      props:{
        //接收父组件传递过来的数据
        data1: { type: Array, default: [] },
      },
      data(){
        return{
          isshow:false,
          isCho:[], //监听是否选中
          chooseAll:[], //选中的数组
          all:[]//下拉列表的选项数据，此数据可以从父组件传过来，通过props接收，接收到props数据后赋值给该数据即可
        }
      },
      created(){
        this.all = this.data1;
        this.getData();
      },
      methods:{
          getData(){
            for(var i=0;i<this.data1.length;i++){
              this.isCho[i] = false;
            }
          },
          choose(index){
            var name = this.all[index];
            this.isCho[index] = !this.isCho[index]
            if(this.isCho[index]){
              this.chooseAll.push(name)
            }else{
              for(var j=0;j<this.chooseAll.length;j++){
                if(this.chooseAll[j] == this.all[index]){
                  this.chooseAll.splice(j,1)
                }
              }
            }
          },
          del(index){
            for(var k=0;k<this.all.length;k++){
              if(this.all[k] == this.chooseAll[index]){
                this.isCho[k] = false;
                break
              }
            }
            this.chooseAll.splice(index,1);
          },
        show(){
            this.isshow = !this.isshow;
        }
      }
    }
</script>

<style scoped>
  .quan{
    margin: 100px;
  }
  .header{
    border: 1px solid #E7E7E7;
    height: auto;
    width: 200px;
    padding-top: 4px;
    position: relative;
    overflow: hidden;
  }
  .header .xuan{
    width: 150px;
    height: 20px;
    display: inline-block;
  }
  .header .first{
    background-color: blue;
    margin-right: 2px;
    width: auto;
    height: 10px;
    font-size: 10px;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: "Microsoft YaHei UI";
    padding: 2px 8px;
    color: #fff;
  }
  .header .first i{
    padding: 0 3px;
    width: 10px;
    height: 2px;
    cursor: pointer;
  }
  .header .second{
    border: 1px solid #E7E7E7;
    color: #C1C1C1;
    border-radius: 50%;
    padding: 0 5px;
    float: right;
    margin-right: 4px;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    cursor: pointer;
  }
  .sel{
    border: 1px solid #E7E7E7;
    border-top: none;
    width: 200px;
    box-shadow: -1px 1px 4px #ccc;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
    overflow: hidden;
  }
  li div{
    float: left;
  }
  li div label{
    font-size: 12px;
    font-family: "Microsoft YaHei UI";
  }
</style>
