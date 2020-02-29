function myLoop(curseur) {
    setTimeout(function () {
        var title = document.getElementById('about');
        if (curseur) {
            title.innerHTML = "<img class="img-thumbnail" width="150" height="150" src="img/profil.jpg">A PROPOS DE MOI |";
            myLoop(false);
        }
        else {
            title.innerHTML = "<img class="img-thumbnail" width="150" height="150" src="img/profil.jpg">A PROPOS DE MOI  ";
            myLoop(true);
        }
    }, 750)
};

myLoop(false);

function myLoop2(curseur) {
    setTimeout(function () {
        var title = document.getElementById('parcours');
        if (curseur) {
            title.innerHTML = "Parcours |";
            myLoop(false);
        }
        else {
            title.innerHTML = "Parcours  ";
            myLoop(true);
        }
    }, 750)
};

myLoop2(false);