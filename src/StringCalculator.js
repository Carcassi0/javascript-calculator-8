class StringCalculator {
    add(text) {
        if (!text) {
            return 0;
        }

        const delimiter = /[,\:]/;
        const numbers = text.split(delimiter).map(Number);

        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;
