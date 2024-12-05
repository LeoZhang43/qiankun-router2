<template>
  <div style="height: 100%;">
    <el-container style="height: 100%;">
      <el-aside style="height: 100%;">
        <el-menu
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%;"
          :default-active="$route.path"
        >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/micro-app-goods/list">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/micro-app-order/list">
          <i class="el-icon-menu"></i>
          <span slot="title">订单列表</span>
        </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主内容 -->
      <el-main>
        <!-- 主应用路由 -->
        <router-view />
        <!-- 挂载子应用的节点 -->
        <div id="micro-app"></div>
      </el-main>
    </el-container>
  </div>
</template>
