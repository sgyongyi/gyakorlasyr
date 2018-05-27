function lakossag() {
    var lakosokszama = 10000;
    var ev = 2017;
    var tort = 0.03;
    while (lakosokszama < 20000); {
        var pill = lakosokszama + (lakosokszama * tort);
        ev = ev + 1;

        if (pill >= 20000) {
            alert(ev);
        }
        lakosokSzama = pill;

    }

}