const app= Vue.createApp({
    data(){
        return {
            title:"Create an App",
            link:"https://vuejs.org",
            text1:" Learn Vue",
            text2:"Learn JS, TS, HTML, CSS",
            text3:"Learn Web Dev",
            text4:<h1>"Learn Git"</h1>
        }
    },
    methods: {
        getText: function(){
            return "Learn Vue"
        },
        getAnothertext(){
            return "Learn JS, TS, HTML, CSS"
        },
        getMoreText(){
            return this.text3;
        },
        getEvenMoreText(){
            return this.text4;
        }

    }
});

app.mount("#app");