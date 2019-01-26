<template>
  <!--是原来的0.34倍-->
  <div class="quan">
    <div class="header">
      <div class="xuan" :class="isCho.length>0 ? '' : 'noCho' ">
        <span class="first" v-for="(item,index) in isCho" :key="index">{{item}}<i @click="del(index)"></i> </span>
      </div>
      <span class="second" @click="show">+</span>
    </div>
    <div class="sel" v-show="isshow">
      <div class="search">
        <input type="text" placeholder="搜索" v-model="searchContent">
        <img src="../../../static/images/search.png" alt="">
      </div>
      <ul v-for="(item,index) in searchData" :key="index">
        <li>
          <div class="checkbox01">
            <input type="checkbox" v-model="isCho" :name="item" :id="item" :value="item">
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
          searchContent:'',
          isshow:false,
          isCho:[], //监听是否选中
          all:[]      //下拉列表的选项数据，此数据可以从父组件传过来，通过props接收，接收到props数据后赋值给该数据即可,
        }
      },
      computed:{
        searchData:function(){
            var search = this.searchContent;
            if(search){
              if(search.length==1){
                return this.all.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).indexOf(search) > -1
                  })
                })
              }else{
                return this.all.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).indexOf(search.substr(0,1)) > -1
                  })
                })
              }
            }
            return this.all;
          }
      },
      created(){
        this.all = this.data1;
        this.getData();
      },
      methods:{
          getData(){
            this.isCho = [];
          },
          del(index){
            this.isCho.splice(index,1);
          },
        show(){
            this.isshow = !this.isshow;
        }
      }
    }
</script>

<style scoped>
  .quan{
    margin: 150px 40%;
    border: 1px solid #D6D6D6;
    width: 260px;
  }
  .header{
    height: auto;
    width: 260px;
    padding: 4px 0 2px 4px;
    position: relative;
    overflow: hidden;
  }
  .header .xuan{
    width: 230px;
    overflow: hidden;
    float: left;
  }
  .header .noCho{
    height: 20px;
  }
  .header .first{
    background-color: #2873DF;
    margin-right: 2px;
    width: auto;
    height: 19px;
    font-size: 10px;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: "Microsoft YaHei UI";
    padding: 4px 8px;
    color: #DDEBFA;
    float: left;
    margin-bottom: 2px;
  }
  .header .first i::after{
    content: "\2716";
    color: aliceblue;
  }
  .header .first i{
    color: #EFF5FD;
    padding: 0 3px;
    width: 10px;
    height: 2px;
    cursor: pointer;
  }
  .header .second{
    border: 1px solid #E7E7E7;
    color: #C1C1C1;
    border-radius: 50%;
    padding: 0 4px;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -10px;
    cursor: pointer;
  }
  .sel{
    width: 100%;
    box-shadow: -1px 1px 4px #ccc
  }
  .sel .search{
    padding: 5px 20px;
    background-color: #F5F5F5;
    position: relative;
  }
  .sel .search input{
    width: 100%;
    height: 25px;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid #DEDEDE;
    padding: 0 30px;
    color: #7F7F7F;
    font-size: 12px;
  }
  .sel .search input::-webkit-input-placeholder,
  .sel .search input:-moz-placeholder,
  .sel .search input::-moz-placeholder{
    color: #7F7F7F;
    font-size: 12px;
    text-align: left;
  }
  .sel .search img{
    position: absolute;
    left: 28px;
    top: 50%;
    margin-top: -6px;
    width: 13px;
    height: 13px;
    cursor: pointer;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    height: 26px;
    line-height: 26px;
    padding-left: 24px;
    overflow: hidden;
  }
  li div{
    float: left;
  }
  .checkbox01 input[type=checkbox] + label::before {
    content: "\a0";  /* 不换行空格 */
    display: inline-block;
    border: 1px solid #D6D6D6;
    vertical-align: 2px;
    width: 13px;
    height: 11px;
    margin-right: 5px;
    border-radius: 2px;
    background-color: transparent;
    text-indent: 2px;
    line-height: .5;  /* 行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高 */
    padding-top: 2px;
  }
  .checkbox01 input[type="checkbox"]:checked + label::before {
    content: "\2714";
    background-color: #2874DF;
    color: aliceblue;
  }
  .checkbox01 input[type='checkbox'] {
    position: absolute;
     visibility: hidden;
  }
  li div label{
    font-size: 10px;
    font-family: "Microsoft YaHei UI";
    color: #4A4A4A;
  }
</style>
