<template>
    <div class="container">
        <QuizCard 
        :questions="qna" 
        :number="numberOfQuestion" 
        :selected="selectedAnswer"
        :is-true="isTrueAnswer"
        @change-selected-answer="changeSelectedAnswer"
        @increment-number="incrementNumberOfQuestion"
        @check-answer="checkAnswer"/>  
    </div>
</template>
<script>
import NewButton from './NewButton.vue';
import QuizCard from './QuizCard.vue';

export default {
    name: "QuizField",
    components: {QuizCard, NewButton},

    data() {
        return {
            qna: [
                    {
                        question: "Самая большая страна в мире?",
                        answers: ["Канада", "Соединённые Штаты Америки (США)", "Россия", "Китайская Народная Республика (КНР)"],
                        rightAnswer: 2
                    },
                    {
                        question: "Вторая по площади страна в мире?",
                        answers: ["Китай", "США", "Канада", "Бразилия"],
                        rightAnswer: 2
                    },
                    {
                        question: "Третья по площади страна в мире?",
                        answers: ["США", "Китай", "Канада", "Бразилия"],
                        rightAnswer: 1
                    },
                    {
                        question: "Какая страна имеет самую большую протяжённость береговой линии?",
                        answers: ["Россия", "Китай", "Канада", "США"],
                        rightAnswer: 2
                    },
                    {
                        question: "Какая страна самая населённая в мире (2024)?",
                        answers: ["Китай", "Индия", "США", "Индонезия"],
                        rightAnswer: 1
                    },
                    {
                        question: "Какая страна не входит в пятёрку самых больших по площади?",
                        answers: ["Россия", "Канада", "Китай", "Австралия"],
                        rightAnswer: 3
                    },
                    {
                        question: "Столица самой большой страны в мире?",
                        answers: ["Пекин", "Вашингтон", "Москва", "Оттава"],
                        rightAnswer: 2
                    },
                    {
                        question: "Какая страна имеет самую низкую плотность населения среди крупнейших по площади?",
                        answers: ["Россия", "Канада", "Австралия", "Казахстан"],
                        rightAnswer: 2
                    },
                    {
                        question: "Какая страна не входит в десятку самых больших по площади?",
                        answers: ["Бразилия", "Индия", "Аргентина", "Франция"],
                        rightAnswer: 3
                    },
                    {
                        question: "Какая страна из списка имеет площадь более 17 млн кв. км?",
                        answers: ["США", "Канада", "Россия", "Китай"],
                        rightAnswer: 2
                    }
            ],
            numberOfQuestion: 0,
            selectedAnswer: null,
            isTrueAnswer: false,
        }
    },

    methods: {
        incrementNumberOfQuestion () {
            this.numberOfQuestion ++;
            this.selectedAnswer = null;
            this.isTrueAnswer = false;
        },
        changeSelectedAnswer (indexOfAnswer) {
            this.selectedAnswer = indexOfAnswer;
        },
        checkAnswer () {
            // if (this.qna[this.numberOfQuestion].rightAnswer === this.selectedAnswer) {
            //     return true;
            // } else {
            //     return false
            // }
            // let a
            // if (this.qna[this.numberOfQuestion].rightAnswer === this.selectedAnswer) {
            //     a = true
            // } else {
            //     a = false
            // }
            // return a

            return "YES!"
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        margin: 200px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background-color: #fff;
        width: 60%;
        height: 400px;
    }

    .btns {
        display: flex;
        width: 50%;
        justify-content: space-around;
    }
</style>