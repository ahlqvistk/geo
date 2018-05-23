export default function(buttonName, questionName, status) {
    return status.case({
        Guessing: () => '',
        Guessed: (guessName) => {
            if (buttonName === guessName) {
                return 'selectedAnswer';
            }
            return '';
        },
        Result: (guessName) => {
            if (buttonName === questionName) {
                return 'correctAnswer';
            } else if (buttonName === guessName) {
                return 'wrongAnswer';
            } else {
                return '';
            }
        },
        _: () => '',
    });
}
