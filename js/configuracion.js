console.log(Vue)

const app = Vue.createApp({
    template:`
    <h2>Hola Mundo!!</h2>
    {{(1+1)}}
    `
})

app.mount('#myApp')