function definirRank(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp <= 2000) return "Bronze";
    else if (xp <= 5000) return "Prata";
    else if (xp <= 7000) return "Ouro";
    else if (xp <= 8000) return "Platina";
    else if (xp <= 9000) return "Ascendente";
    else if (xp <= 10000) return "Imortal";
    else return "Radiante";
}

module.exports = { definirRank };
