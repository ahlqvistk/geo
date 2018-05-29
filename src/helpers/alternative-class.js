export default function(buttonName, questionName, status) {
    return status.case({
        Guessing: () => 'alternative-button',
        Guessed: (guessName) => {
            if (buttonName === guessName) {
                return 'alternative-button selected-answer';
            }
            return 'alternative-button';
        },
        Result: (guessName) => {
            if (buttonName === questionName) {
                return 'alternative-button correct-answer';
            } else if (buttonName === guessName) {
                return 'alternative-button wrong-answer';
            } else {
                return 'alternative-button';
            }
        },
        _: () => 'alternative-button',
    });
}
