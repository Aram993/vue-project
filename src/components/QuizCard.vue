<template>
    <div class="card">
        <div class="question">{{ quizItem.question }}</div>
        <div :class="{'answers': true, 'chosenElement': selectedAnswerIndex === index, 'trueAnswer': correctAnswer === index, 'wrongAnswer': wrongAnswer === index}" v-for="(item, index) in quizItem.answers" @click="selectedAnswerIndex = index">{{ item }}</div>
    </div>
    <div class="btns">
        <button :disabled="selectedAnswerIndex === null" @click="checkAnswer" v-if="!firstClick">Next</button>
        <button :disabled="selectedAnswerIndex === null" @click="onChangeQuestion" v-else>Next</button>
    </div>
</template>
<script>
import NewButton from './NewButton.vue';

export default {
    name: "QuizCard",
    components: {NewButton},
    props: ["quizItem"],
    emits: ["changeQuestion"],
    data() {
        return {
           selectedAnswerIndex: null,
           firstClick: false,
           correctAnswer: null,
           wrongAnswer: null
        }
    },
    methods: {
       onChangeQuestion() {
            const isCorrect = this.selectedAnswerIndex === this.quizItem.rightAnswer;
            this.$emit("changeQuestion", isCorrect);
            this.selectedAnswerIndex = null;
            this.firstClick = false;
            this.correctAnswer = null;
            this.wrongAnswer = null;
       },

       checkAnswer () {
        if (this.selectedAnswerIndex === this.quizItem.rightAnswer) {
            this.correctAnswer = this.selectedAnswerIndex;
        } else {
            this.wrongAnswer = this.selectedAnswerIndex;
            this.correctAnswer = this.quizItem.rightAnswer;
        }
            this.firstClick = true;
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

        & > button {
            width: 200px;
            height: 40px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #abc;
            border: none;
            color: bisque;
            font-weight: bolder;
            font-size: 20px;
        }
    }
</style>