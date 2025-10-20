class StringCalculator {
    add(text) {
        if (!text) {
            return 0;
        }

        let delimiter = /[,\:]/;
        let numbersText = text;

        const customDelimiterMatch = text.match(/^\/\/(.)\n(.*)/);
        if (customDelimiterMatch) {
            const customDelimiter = customDelimiterMatch[1];

            delimiter = new RegExp(this.escapeRegExp(customDelimiter));
            numbersText = customDelimiterMatch[2];
        }

        const numbers = numbersText.split(delimiter).map(Number);

        return numbers.reduce((sum, num) => sum + num, 0);
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default StringCalculator;
