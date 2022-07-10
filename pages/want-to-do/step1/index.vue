<template>
    <div>
        <PageTemplate>
            <h2>ステップ１自分の中の欲望を知る</h2>
            <nuxt-link to="/want-to-do/step2" @click="updateWant(test)">
                <div>
                    step2へ
                </div>
            </nuxt-link>

            
            <!-- <div>
                {{count}}
            </div> -->

            <div>
                {{want}}<br />want<br />
            </div>

            <div v-for="(item, index) in want" :key="index">
                <div>
                    <input type="text" v-model="want[index].text" placeholder="思いついたことを書こう" @keypress="updateText(index, message)" />
                    {{index}}
                    <button @click="doRemove(index)">削除</button>
                </div>
            </div>

            <button @click="addItem">
                追加
            </button>

        </PageTemplate>
    </div>
</template>

<script setup>
    const foo = useFoo()
    import { useCounter } from '~/composables/useCounter';
    const { count, inc, dec } = useCounter();
    const { want, updateWant } = wantToDoStep1();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do',
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
            console.log(index, text)
            this.want[index].text = text
        }
    }
}
</script>
