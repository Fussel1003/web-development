// Implementiere Funktion um zu prüfen, ob ein gegebener Input min. einen Großbuchstaben enthält
function checkIfGrossbuchstabeVorhanden(input) {
    return /[A-Z]/.test(input);
}

// Implementiere Funktion um zu prüfen, ob ein gegeben Input min. 8 Zeichen hat.
function checkIfLaengeGroesserAcht(input) {
    return input.length >= 8;
}

// Implementiere Funktion um zu prüfen, ob eine Zahl vorhanden ist.
function checkIfZahlVorhanden(input) {
    return /\d/.test(input);
}

module.exports = {
    checkIfGrossbuchstabeVorhanden,
    checkIfLaengeGroesserAcht,
    checkIfZahlVorhanden
};
