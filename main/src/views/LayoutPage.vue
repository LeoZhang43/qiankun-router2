<template>
    <div id="micro-app"></div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';
import router from '../router';

export default{
    mounted() {
        const apps = [
                {
                    name: 'micro-app-goods', // 微应用名称，确保唯一
                    entry: '//localhost:3002', // 微应用入口
                    container: '#micro-app', // 微应用挂载的节点
                    activeRule: '#/micro-app-goods', // 微应用激活规则，由于是用的hash模式，所以前面记得加#
                    props: { router }
                },
                {
                    name: 'micro-app-order',
                    entry: '//localhost:3003',
                    container: '#micro-app',
                    activeRule: '#/micro-app-order'
                }
            ]
        registerMicroApps(apps) // 注册
        start() // 启动
    }
}


</script>