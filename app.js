let wins = 40;
let loses = 50;

let resultWinLose = calculateWinLose(wins, loses);
let rank = defineRank(resultWinLose);

console.log(`O Herói tem de saldo de ${resultWinLose} está no nível de ${rank}`);

function defineRank(calcResult) {
    if (calcResult < 10) {
        return "Ferro";
    }
    if (calcResult >= 11 && calcResult <= 20) {
        return "Bronze";
    }
    if (calcResult >= 21 && calcResult <= 50) {
        return "Prata";
    }
    if (calcResult >= 51 && calcResult <= 80) {
        return "Ouro";
    }
    if (calcResult >= 81 && calcResult <= 90) {
        return "Diamante";
    }
    if (calcResult >= 91 && calcResult <= 100) {
        return "Lendário";
    }
    if (calcResult >= 101) {
        return "Imortal";
    }

    return "Não foi possível definir o rank";
}

function calculateWinLose(wins, loses) {
    return wins - loses;
};