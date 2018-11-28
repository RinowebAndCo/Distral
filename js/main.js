// Fonction appellée lorsqu'on change la taille de la fenetre
// 


$(document).ready(function () {
    clickMenu();
    datahref();
});


function datahref() {
    $('[data-href]').on("click", function () {
        document.location = $(this).data('href');
    });
}




// Affiche ou masque le menu en fonction de son état
function clickMenu() {
    $('#menuProduitslink').click(function () {
        if ($("#menuProduits").css('display') == 'none') {
            $("#menuProduits").show();
        }
        else {
            $("#menuProduits").hide();
        }
    });
}


// Fonction qui verifie que les champs du formulaire soient remplis
function verifContact() {
    var retour = true;

    if ($("input#nom").val().trim().empty()) {
        $.jGrowl("Le champ nom n'est pas rempli");
        retour = false;
    }

    if ($("input#mail").val().trim().empty()) {
        $.jGrowl("Le champs email n'est pas rempli");
        retour = false;
    }
    else {
        if (!$("input#mail").val().trim().isEmail()) {
            $.jGrowl("L'adresse mail rentrée n'est pas valide", { position: 'center' });
            retour = false;
        }
    }

    if ($("textarea#message").val().trim().empty()) {
        $.jGrowl("Le message est vide");
        retour = false;
    }
    return retour;
}

