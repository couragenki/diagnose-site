<template>
    <div>
        <PageTemplate>
            <div>
                <p>このページの使い方</p>
                <ol>
                    <li>
                        自分の中の欲望を知る
                    </li>
                    <li>
                        憧れている人、嫉妬している人を3名あげる
                    </li>
                    <li>
                        努力によって達成・実現できることを選ぶ
                    </li>
                    <li>
                        目標達成の必要条件を書き出す
                    </li>
                    <li>
                        徹底的にリサーチする
                    </li>
                    <li>
                        目標達成を数字で管理する
                    </li>
                </ol>
            </div>
            <h2>ステップ2 憧れている人、嫉妬している人を3名あげる</h2>

            <div>
                <div v-for="(item, index) in admire" :key="index">
                    <div>
                        <div>{{index + 1}}人目</div>
                        <div>
                            <input id="text" type="text" v-model="admire[index].person" placeholder="誰ですか" @keydown="updatePerson(index, admire[index].person)" />
                        </div>
                        <div>
                            <input id="text" type="text" v-model="admire[index].reason" placeholder="どんなところですか" @keydown="updateReason(index, admire[index].reason)" />
                        </div>
                    </div>
                </div>
            </div>

            <nuxt-link to="/want-to-do/step3" @click="updateAdmire(admire)">
                <div>
                    ステップ3へ進む
                </div>
            </nuxt-link>
        </PageTemplate>
    </div>
</template>
<script setup>
    const {admire, updatePerson, updateReason, removeItem} = wantToDoStep2();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do/Step2',
    components: {
        PageTemplate,
    }
}
</script>
