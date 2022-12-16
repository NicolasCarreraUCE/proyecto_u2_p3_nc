console.log(Vue)

// Options API
const app = Vue.createApp({
//    template:`
//    <h2>Hola Mundo!!</h2>
//    <p>{{(1+1)}}</p>
//    `,
    data(){
        // Propiedades reactivas
        return {
            mensaje: 'Hola mundo',
            nombre: 'Nicolas',
            apellido: 'Carrera'
        }
    },
    methods: {
        cambiarNombre(event){
            console.log(event)
            this.nombre = 'Daniel'
        },
        cambiarApellido(event){
            console.log(event)
            this.apellido = 'Teran'
        }
    }
})

app.mount('#myApp')