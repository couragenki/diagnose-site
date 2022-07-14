<template>
    <div>
        <PageTemplate>
            <div>
                <h2>はじめに</h2>
                <p>
                    ~サイト制作者からのメッセージ~<br /><br />
                    豊かになった結果、特に10代、20代の若者の間ではやりたいことがないという方も少なくないこの時代です。<br />
                    自分も何かやりたいことがあった方がいいのかなという思いでこのサイトにたどり着いた方もいらっしゃるのではないでしょうか。<br /><br />
                    ただ、私は全ての人にやりたいことが必要だとも思っていません。特にやりたいことがなくても今を楽しく生きられている方もいらっしゃると思います。<br /><br />
                    もしも、今何かもやもやした感覚を持っていたり、未来に焦燥感を抱えている方がいらっしゃった際に、<br />
                    少しでも前に進むきっかけになればと思いこちらのサイトを開発しました。<br /><br />
                    ステップに合わせて進めていくとやりたいことが少しずつ見えてくるように設計しています。<br />
                    まずは難しく考えず、気楽に空欄を埋めて行ってみてください。<br /><br />
                    作者より
                </p>
                <h2>このページの使い方</h2>
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

                <p style="color:red">注意：デモ版なのでリロードするとデータがリセットされるのでご注意ください</p>
            </div>
            <nuxt-link to="/want-to-do/step1">
                <div>
                    スタートする
                </div>
            </nuxt-link>
        </PageTemplate>
    </div>
</template>
<script>
import PageTemplate from '~/src/components/PageTemplate/indev.vue'
export default {
    title: 'Pages/Want-To-Do',
    components: {
        PageTemplate,
    }
}
</script>
