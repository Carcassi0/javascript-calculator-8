import { Console } from '@woowacourse/mission-utils';
import StringCalculator from './StringCalculator.js';

class App {
    constructor() {
        this.calculator = new StringCalculator();
    }
    async run() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        const result = this.calculator.add(input);
        Console.print(`결과 : ${result}`);
    }
}

export default App;
