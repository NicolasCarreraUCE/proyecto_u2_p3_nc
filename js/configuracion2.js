const numeros = [1, 2, 3, 4, 5]

console.log(numeros)

const frases = [
    { texto: 'frase 1', autor: 'autor 1' },
    { texto: 'frase 2', autor: 'autor 2' },
    { texto: 'frase 3', autor: 'autor 3' },
    { texto: 'frase 4', autor: 'autor 4' },
    { texto: 'frase 5', autor: 'autor 5' },
    { texto: 'frase 6', autor: 'autor 6' },
    { texto: 'frase 7', autor: 'autor 7' },
    { texto: 'frase 8', autor: 'autor 8' }
]

console.log(frases)

console.log(Vue)

const app = Vue.createApp({
    data() {
        return {
            arreglo: frases,
            fraseNueva: null
        }
    },

    methods: {
        agregarFrase({ charCode }) {
            console.log("Mensaje desestructurado")
            console.log(charCode)
            const fraseObjetoNueva = {
                texto: this.fraseNueva,
                autor: ''
            }
            this.arreglo.unshift(fraseObjetoNueva)
        },

        agregarFraseModificador(event) {
            console.log("Mensaje")
            console.log(event.charCode)
            if (event.charCode !== 13) return
            const fraseObjetoNueva = {
                texto: this.fraseNueva,
            }
            this.arreglo.unshift(fraseObjetoNueva)
        }
    }
})

app.mount('#myApp2')