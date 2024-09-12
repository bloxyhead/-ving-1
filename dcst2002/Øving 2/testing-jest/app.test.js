import {isLeapYear} from './app.js';

// Gruppering for tester som omhandler gyldige skuddår.
describe('A year is a leap year', () => {  
    // Bruker test.each for å sjekke flere år som er delelig med 4, men ikke 100.
    // Dette sikrer at 1820, 1960, og 2020 er korrekt klassifisert som skuddår.
    test.each([1820, 1960, 2020])('Year %i is divisible by 4 but not by 100', (year) => {
        expect(isLeapYear(year)).toBe(true); // Forventer at resultatet er true, da disse er skuddår.
    });

    // Tester om et år som er delelig med 400 (2000) også regnes som skuddår.
    test('Year is divisible by 400', () => {
        expect(isLeapYear(2000)).toBe(true); // Forventer true, fordi 2000 er delelig med 400.
    });
});

// Gruppering for tester som omhandler gyldige ikke-skuddår.
describe('A year is not a leap year', () => {
    // Tester et år som ikke er delelig med 4, og dermed ikke er et skuddår.
    test('Year is not divisible by 4', () => {
        expect(isLeapYear(1981)).toBe(false); // Forventer false, fordi 1981 ikke er delelig med 4.
    });

    // Tester et år som er delelig med 100, men ikke med 400 (2100), noe som gjør det til et ikke-skuddår.
    test('Year is divisible by 100 but not by 400', () => {
        expect(isLeapYear(2100)).toBe(false); // Forventer false, fordi 2100 er delelig med 100, men ikke med 400.
    });
});

// Gruppering for tester som omhandler ugyldige input, som negative tall, null, og undefined.
describe('A year is not supported', () => { 
    // Tester at funksjonen kaster en feil når årstallet er negativt.
    test('Year is negative', () => {
        expect(() => isLeapYear(-2020)).toThrow('Invalid argument: year must be an integer equal to or larger than 0');
        // Forventer at en feil blir kastet med riktig feilmelding når året er negativt.
    });

    // Bruker test.each for å sjekke at både null og undefined kaster en feil.
    test.each([null, undefined])('Year is %s', (year) => {
        expect(() => isLeapYear(year)).toThrow('Invalid argument: year must be an integer equal to or larger than 0');
        // Forventer at funksjonen kaster en feil for både null og undefined som input.
    });
});
