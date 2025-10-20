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

        // Validate the numbers after parsing
        this.validateNumbers(numbers);

        return numbers.reduce((sum, num) => sum + num, 0);
    }

    validateNumbers(numbers) {
        const negatives = numbers.filter((num) => num < 0);
        if (negatives.length > 0) {
            throw new Error('[ERROR] Negative numbers are not allowed.');
        }

        if (numbers.some(isNaN)) {
            throw new Error('[ERROR] Invalid number format.');
        }
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default StringCalculator;
