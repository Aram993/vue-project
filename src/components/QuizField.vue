<template>
    <div class="container">
        <QuizCard 
         :quizItem="qna[activeQuizIndex]"
         @changeQuestion="changeQuestion"  
         v-if="!isFinish"
        />  
        <h1 v-else>Results: {{ correctAnswersAmount }} / {{ qna.length }}</h1>
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
            activeQuizIndex: 0,
            isFinish: false,
            correctAnswersAmount: 0
        }
    },

    methods: {
        changeQuestion (isCorrect) {
            if (this.activeQuizIndex < this.qna.length - 1) {
                this.activeQuizIndex ++;
            } else {
                this.isFinish = true;
            }

            if (isCorrect) {
                this.correctAnswersAmount ++;
            }
        },
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

    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: xx-large;
        font-weight: bolder;
        font-style: italic;
    }
</style>