const { createApp } = Vue;

createApp({
    data() {
        return { brojac: 0 }
    },
    methods: {
        povecaj() {
            this.brojac++;
        },
        smanji(){
            this.brojac--;
        },
        promjeni(){
            this.brojac += 100;
        },
        udvostruci(){
            this.brojac *= 2;
        },
        dvostrukoSmanji(){
            this.brojac /= 2;
        }
    }

}).mount('#app')