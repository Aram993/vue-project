<template>
    <div class="container">
        <div :class="{'numberPlace': true, 'resultStyle': resultValue}">
            <span>{{ calculatorValue }}</span>
        </div>
        <div class="signs">
            <div class="ring" @click="reset">C</div>
            <button class="ring" @click="equals" :disabled="!signValue">=</button>
            <div class="oval" @click="enterSign('+')">+</div>
            <div class="oval" @click="enterSign('-')">-</div>
        </div>
        <div class="numbers">
            <div class="oval" @click="enterNumber('1')">1</div>
            <div class="oval" @click="enterNumber('2')">2</div>
            <div class="oval" @click="enterNumber('3')">3</div>
            <div class="oval" @click="enterNumber('4')">4</div>
            <div class="oval" @click="enterNumber('5')">5</div>
            <div class="oval" @click="enterNumber('6')">6</div>
            <div class="oval" @click="enterNumber('7')">7</div>
            <div class="oval" @click="enterNumber('8')">8</div>
            <div class="oval" @click="enterNumber('9')">9</div>
            <div class="wrapper">
                <div class="oval" @click="enterNumber('0')">0</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Calculator",
    data() {
        return {
            calculatorValue: 0,
            signValue: "",
            resultValue: false
        }
    },
    methods: {
        enterNumber(number) {
            this.resultValue = false;
            if (this.calculatorValue === 0) {
                this.calculatorValue = number;
            } else {
                if (this.calculatorValue.length < 12) {
                    this.calculatorValue += number;
                }
            }
        },
        enterSign(sign) {
            this.resultValue = false;
            if (this.calculatorValue === 0 && sign === "-") {
                return
            }
            if (this.calculatorValue.length < 9) {
                this.calculatorValue += ` ${sign} `;
                this.signValue = sign;
            }
            
        },
        equals() {
            const updatedNumbers = this.calculatorValue.split(this.signValue);
            if (this.signValue === "+") {
                const num = updatedNumbers.reduce((acc, number) => {
                    return acc + Number(number)
                }, 0)
            this.calculatorValue = String(num);
            } else {
                let result = updatedNumbers[0];
                updatedNumbers.forEach((item, index) => {
                    if (index > 0) {
                        result -= item;
                    }
                })
                this.calculatorValue = String(result);
            }
            this.signValue = "";
            this.resultValue = true;
        },
        reset () {
            this.resultValue = false;
            this.calculatorValue = 0;
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 450px;
        height: 450px;
        border-radius: 20px;
        padding: 40px;
        font-weight: bolder;

        & > .numberPlace {
            width: 100%;
            height: 50px;
            border: 1px solid black;
            border-radius: 10px;
            font-size: 40px;
            padding: 0 20px;
            display: flex;
            justify-content: flex-end;
        }

        & > .signs {
            display: flex;
            gap: 20px;

            & > .ring {
                width: 50px;
                height: 50px;
                border: 1px solid grey;
                background-color: #fff;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.5s;

                &:hover {
                    box-shadow: 5px 5px 5px 5px;
                }
            }
        }

        .oval {
            height: 50px;
            width: 100px;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.5s;

            &:hover {
                    box-shadow: 5px 5px 5px 5px;
            }
        }

        .numbers {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 15px;
        }

        .wrapper {
            display: flex;
            justify-content: center;
            width: 100%;

        }

        .resultStyle {
            border: 1px solid cyan;
            color: cyan;
        }
    }
</style>