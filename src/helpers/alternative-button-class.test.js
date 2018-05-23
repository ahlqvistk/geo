import alternativeButtonClass from './alternative-button-class';
import {Status} from '../types';

test('Returns empty string when guessing', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Sweden',
        Status.Guessing
    )).toEqual('');
});

test('Returns selectedAnswer when Guessed and button is the same', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Norway',
        Status.Guessed('Sweden')
    )).toEqual('selectedAnswer');
});

test('Returns empty string when Guessed and not the same button', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Norway',
        Status.Guessed('Denmark')
    )).toEqual('');
});

test('Returns correctAnswer when Result and correct', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Sweden',
        Status.Result('Sweden')
    )).toEqual('correctAnswer');
});

test('Returns wrongAnswer when Result and wrong', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Norway',
        Status.Result('Sweden')
    )).toEqual('wrongAnswer');
});

test('Returns empty string if Result and not the same button', () => {
    expect(alternativeButtonClass(
        'Sweden',
        'Norway',
        Status.Result('Denmark')
    )).toEqual('');
});
