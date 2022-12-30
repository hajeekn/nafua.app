<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          欢迎来到 Nafua.app
        </span>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">介绍</div>
          <p>
            由 Hajeekn 构建
            这是一个很垃圾的作品,纯粹是我拿来练手的,没有什么意义(狗头)
          </p>
        </div>
        <div class="doc">
          <div class="title alt">采用的技术(框架)</div>
          <button class="alt mdui-ripple mdui-color-teal-500" mdui-tooltip="{content: '没有意义啦'}" @click="alert('mdui 超好用的有木有')">Mdui</button>
          <button class="alt mdui-ripple mdui-color-teal-500" mdui-tooltip="{content: '没有意义啦'}" @click="alert('vue yyds!')">Vue.js</button>
          <button class="alt mdui-ripple mdui-color-teal-500" mdui-tooltip="{content: '没有意义啦'}" @click="alert('electron 挺好的,就是内存占用挺大')">Electron</button>
          <div class="title alt">欸嘿</div>
          <button class="alt mdui-ripple mdui-color-teal-500" mdui-tooltip="{content: '没有意义啦'}" @click="snackbar('真的有人会点吗', 'right-bottom')">欸嘿</button>
        </div>
        </div>
    </main>
  </div>
</template>

<script>
  import mdui from 'mdui'

  export default {
    name: 'FirstPage',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      alert (context) {
        mdui.alert(context)
      },
      snackbar (message, position) {
        mdui.snackbar({
          message: message,
          position: position
        })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }
  .doc button:hover {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #4fc08d;
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
  .doc button.alt:hover {
    color: #fff;
    background-color: #42b983;
  }
</style>
