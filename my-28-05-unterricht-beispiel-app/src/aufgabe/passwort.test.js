const {
    checkIfGrossbuchstabeVorhanden,
    checkIfLaengeGroesserAcht,
    checkIfZahlVorhanden
} = require('./passwort');

// Test für checkIfGrossbuchstabeVorhanden
test('Prüft, ob ein Großbuchstabe vorhanden ist', () => {
    expect(checkIfGrossbuchstabeVorhanden('Abc')).toBe(true);
    expect(checkIfGrossbuchstabeVorhanden('abc')).toBe(false);
    expect(checkIfGrossbuchstabeVorhanden('123')).toBe(false);
    expect(checkIfGrossbuchstabeVorhanden('ABC')).toBe(true);
});

// Test für checkIfLaengeGroesserAcht
test('Prüft, ob die Länge größer oder gleich acht ist', () => {
    expect(checkIfLaengeGroesserAcht('abcdefgh')).toBe(true);
    expect(checkIfLaengeGroesserAcht('abcdefg')).toBe(false);
    expect(checkIfLaengeGroesserAcht('12345678')).toBe(true);
    expect(checkIfLaengeGroesserAcht('')).toBe(false);
});

// Test für checkIfZahlVorhanden
test('Prüft, ob eine Zahl vorhanden ist', () => {
    expect(checkIfZahlVorhanden('abc123')).toBe(true);
    expect(checkIfZahlVorhanden('abcdef')).toBe(false);
    expect(checkIfZahlVorhanden('123')).toBe(true);
    expect(checkIfZahlVorhanden('')).toBe(false);
});
