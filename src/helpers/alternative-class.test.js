import alternativeClass from './alternative-class';
import {Status} from '../types';

test('Returns empty string when guessing', () => {
    expect(alternativeClass(
        'Sweden',
        'Sweden',
        Status.Guessing
    )).toEqual('');
});

test('Returns selectedAnswer when Guessed and button is the same', () => {
    expect(alternativeClass(
        'Sweden',
        'Norway',
        Status.Guessed('Sweden')
    )).toEqual('selectedAnswer');
});

test('Returns empty string when Guessed and not the same button', () => {
    expect(alternativeClass(
        'Sweden',
        'Norway',
        Status.Guessed('Denmark')
    )).toEqual('');
});

test('Returns correctAnswer when Result and correct', () => {
    expect(alternativeClass(
        'Sweden',
        'Sweden',
        Status.Result('Sweden')
    )).toEqual('correctAnswer');
});

test('Returns wrongAnswer when Result and wrong', () => {
    expect(alternativeClass(
        'Sweden',
        'Norway',
        Status.Result('Sweden')
    )).toEqual('wrongAnswer');
});

test('Returns empty string if Result and not the same button', () => {
    expect(alternativeClass(
        'Sweden',
        'Norway',
        Status.Result('Denmark')
    )).toEqual('');
});
