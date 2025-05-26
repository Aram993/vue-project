<template>
    <div class="card">
        <div class="question">{{ questions[number].question }}</div>
        <div :class="['answers', selected === 0 ? 'chosenElement' : '']" @click="selectAnswer(0)" ref="firstAnswer">{{ questions[number].answers[0] }}</div>
        <div :class="['answers', selected === 1 ? 'chosenElement' : '']" @click="selectAnswer(1)" ref="secondAnswer">{{ questions[number].answers[1] }}</div>
        <div :class="['answers', selected === 2 ? 'chosenElement' : '']" @click="selectAnswer(2)" ref="thirdAnswer">{{ questions[number].answers[2] }}</div>
        <div :class="['answers', selected === 3 ? 'chosenElement' : '']" @click="selectAnswer(3)" ref="fourthAnswer">{{ questions[number].answers[3] }}</div>

    </div>
    <div class="btns">
        <NewButton @click="check">Проверить</NewButton>
        <NewButton @increment-number="this.$emit('incrementNumber')">Далее</NewButton>
    </div>
</template>
<script>
import NewButton from './NewButton.vue';

export default {
    name: "QuizCard",
    components: {NewButton},
    props: ["questions", "number", "selected", "isTrue"],
    emits: ["changeSelectedAnswer", "incrementNumber", "checkAnswer"],
    data() {
        return {
            answerIndex: null
        }
    },
    methods: {
        selectAnswer(idx) {
            this.$emit("changeSelectedAnswer", idx)
            this.answerIndex = idx
        },
        check () {
            // if (this.$emit("checkAnswer")) {
            //     if (this.answerIndex === 2) {
            //         this.$refs.firstAnswer.classList.replace("chosenElement", "trueAnswer")
            //     }
            // }
            const a = this.$emit("checkAnswer");
            console.log(a);
            // console.log(this.$refs.firstAnswer);
        }
    }

}
</script>
<style lang="scss" scoped>
    .card {
        margin: 0 auto;
        background-color: #abcdef;
        width: 50%;
        height: 70%;
    }

    .question {
        height: 40%;
        border: 1px solid grey;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color:antiquewhite
    }

    .answers {
        height: 15%;
        border: 1px solid blue;
        padding-left: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 25px;
        color:antiquewhite;

        &:hover {
            cursor: pointer;
            color: grey;
        }
    }

    .chosenElement {
        border: 4px solid goldenrod;
        color: goldenrod;
        font-size: 30px;

        &:hover {
            color: goldenrod;
        }
    }

    .trueAnswer {
        border: 4px solid green;
        color: green;
        font-size: 30px;

        &:hover {
            color: green;
        } 
    }

    .wrongAnswer {
        border: 4px solid red;
        color: red;
        font-size: 30px;

        &:hover {
            color: red;
        }
    }

    .btns {
        display: flex;
        width: 50%;
        justify-content: space-around;
    }
</style>