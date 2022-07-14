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
            <h2>ステップ3 努力によって達成・実現できることを選ぶ</h2>
            <p>
                ステップ1で書いたやりたいことやステップ2で書いた憧れている・嫉妬している人の中で実現したいこと、<br />
                但し努力次第で実現可能なことを<strong>ひとつ選ぶ</strong>。
            </p>
            <div>
                <h3>
                    ステップ1であげたやってみたいことリスト
                </h3>
                <div v-for="(item, index) in want" :key="index">
                    <div>{{item.text}}</div>
                </div>
            </div>
            <div>
                <h3>
                    ステップ2であげた人物とその理由
                </h3>
                <div v-for="(item, index) in admire" :key="index">
                    <div>
                        <div>{{index + 1}}人目</div>
                        <div>人物：{{item.person}}</div>
                        <div>理由：{{item.reason}}</div>
                    </div>
                </div>
            </div>

            <div>上記を踏まえ今の自分がやりたいことを一つだけ決めて書いてみよう</div>

            <nuxt-link to="/want-to-do/" @click="updateAdmire(admire)">
                <div>
                    ステップ4へ
                </div>
            </nuxt-link>
        </PageTemplate>
    </div>
</template>
<script setup>
    const { want } = wantToDoStep1();
    const {admire, updatePerson, updateReason, removeItem} = wantToDoStep2();
</script>

<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do/Step3',
    components: {
        PageTemplate,
    }
}
</script>
