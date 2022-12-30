<template>
  <div id="app">
    <div class="mdui-drawer" id="drawer">
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
        <div class="mdui-list-item-content">无意义按钮 1</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
        <div class="mdui-list-item-content">无意义按钮 2</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
        <div class="mdui-list-item-content">无意义按钮 3</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">drafts</i>
        <div class="mdui-list-item-content">无意义按钮 4</div>
      </li>
      <li class="mdui-subheader">无意义</li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
        <div class="mdui-list-item-content">无意义按钮 5</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
        <div class="mdui-list-item-content">无意义按钮 6</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
        <div class="mdui-list-item-content">无意义按钮 7</div>
      </li>
    </ul>
  </div>
    <div class="mdui-toolbar mdui-color-teal-500">
        <a class="mdui-btn mdui-ripple mdui-btn-icon" mdui-drawer="{target: '#drawer'}">
            <i class="mdui-icon material-icons">menu</i>
        </a>
        <span class="mdui-typo-title">Nafua.app</span>
        <div class="mdui-toolbar-spacer"></div>
        <a @click="alert('要什么搜索功能啊')" class="mdui-btn mdui-ripple mdui-btn-icon">
            <i class="mdui-icon material-icons">search</i>
        </a>
        <a @click="minimize()" class="mdui-btn mdui-ripple mdui-btn-icon">
            <i class="mdui-icon material-icons">widgets</i>
        </a>
        <a @click="close()" class="mdui-btn mdui-ripple mdui-btn-icon">
            <i class="mdui-icon material-icons">close</i>
        </a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import mdui from 'mdui'
  import { remote } from 'electron'

  export default {
    name: 'nafua.app',
    methods: {
      alert (context) {
        mdui.alert(context)
      },
      close () {
        remote.getCurrentWindow().close()
      },
      minimize () {
        remote.getCurrentWindow().minimize()
      }
    }
}
</script>

<style>
  /* CSS */
</style>
