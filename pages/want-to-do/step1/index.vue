<template>
    <div>
        <PageTemplate>
            <h2>ステップ１自分の中の欲望を知る</h2>
            <p>
                まずは自分の心の中にあるやりたいことを書き出してみよう。
            </p>

            <div class="add-button-wrappr">
                <button class="add-button" @click="addItem">
                    項目を追加
                </button>
            </div>

            <div class="cards">
                <div class="item" v-for="(item, index) in want" :key="index" >
                    <input id="text" type="text" v-model="want[index].text" placeholder="思いついたことを書こう" @keydown="updateText(index, want[index].text)" />
                    <div class="text_underline"></div>
                    <button class="delete" @click="doRemove(index)">X</button>
                </div>
            </div>

            <nuxt-link to="/want-to-do/step2" @click="updateWant(want)">
                <div>
                    やりたいことの入力を完了してstep2へ進む⇨
                </div>
            </nuxt-link>

        </PageTemplate>
    </div>
</template>

<script setup>
    const { want, updateWant } = wantToDoStep1();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do/Step1',
    components: {
        PageTemplate,
    },
    methods:{
        addItem(){
            this.want.push({text: 'やりたいこと'})
        },
        doRemove(index){
            this.want.splice(index, 1)
        },
        updateText(index, text){
            console.log(index, text, 'updateText')
            this.want[index].text = text
        }
    }
}
</script>
<style lang="scss" scoped>
.add-button-wrappr {
    padding: 30px;
    .add-button {
        width: 100px;
        height: 50px;
        display: block;
    }
}
.cards {
    display: flex;
    flex-wrap: wrap;
    .item {
        position: relative;
        width: 30%;
        padding-left: 2%;
        padding-bottom: 3%;
        #text {
            font-size: 16px;
            width: 100%;
            border: none;
            outline: none;
            padding-bottom: 8px;
            box-sizing: border-box;
        }
        .text_underline{
            position: relative;
            border-top: 1px solid #c2c2c2;
        }
        .text_underline::before,
        .text_underline::after{
            position: absolute; 
            bottom: 0px;
            width: 0px;
            height: 1px;
            content: '';
            background-color: #3be5ae;
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
        }
        .text_underline::before{
            left: 50%;
        }
        .text_underline::after{
            right: 50%;
        }
        #text:focus + .text_underline::before,
        #text:focus + .text_underline::after{
            width: 50%;
        }
    }
    .delete {
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
    }
}
</style>