// Fonction appellée lorsqu'on change la taille de la fenetre
// 


$(document).ready(function () {
    initDiap();
    clickMenu();
    datahref();
    
});

function initDiap() {
    $('#diap').vegas({

        slides: [{ src: 'datas/diaporama/37/top3_37.jpg' },
        { src: 'datas/diaporama/48/top1_48.jpg' },
        { src: 'datas/diaporama/47/top2_47.jpg' },
        { src: 'datas/diaporama/45/5_45.jpg' },
        { src: 'datas/diaporama/44/top2_44.jpg' }],
        transition: 'fade',
        timer: false,
    });
}
function datahref() {
    $('[data-href]').on("click", function () {
        document.location = $(this).data('href');
    });
}
   
function initProduitCloture() {
  $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil', 'gamme'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
  });
    navigationMultiscroll();
}

function initProduitDistrasun() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil', 'gamme','alizee','eole'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();

}

function initProduitGC() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();

}

function initProduitGarage() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();
}

function initProduitPiscine() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();

}

function initProduitMotorisation() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();

}

function initProduitPortail() {
    
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        paddingTop: $('nav').outerHeight() + $('#anchor').outerHeight(),
            paddingBottom:  $('footer').outerHeight(),
        menu: true,
        anchors:
            ['Millenium', 'Millenium_2',
            'Concorde', 'Concorde_2',
            'Caravelle', 'Caravelle_2',
            'Steel', 'Steel_2', 
            'R15', 'R15_2', 
           'Mirage', 'Mirage_2', 'Mirage_3',
            'Alpha', 'Alpha_2', 
            'Modele', 'Modele_2', 'Modele_3', 'Modele_4', ],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
            
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    
    navigationMultiscroll();

}

function initProduitVolet() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors:
            ['Presentation', 'Battants','Coulissants'],
        menu: '#navigationProduit',
        afterRender: function () {
            dimensionMultiscroll();
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    navigationMultiscroll();

}

function dimensionMultiscroll()
    {
    var heightOff = $('nav').outerHeight() + $('footer').outerHeight() + $('#anchor').outerHeight()+20;
    $('.ms-tableCell').css('height', 'calc(' + $(window).height() + 'px - ' + heightOff + 'px ');

    $('.ms-section').css('min-height', 'calc(' + $(window).height() + 'px - ' + heightOff + 'px');
    $('#navigationProduit').css('max-height', 'calc(' + $(window).height() + 'px - ' + heightOff + 'px');
}

function navigationMultiscroll() {
    $(window).on('resize', function () {
        var heightOff = $('nav').outerHeight() + $('footer').outerHeight() + $('#anchor').outerHeight();
        $('.ms-section').css('height', 'calc(' + $(window).height() + 'px - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });
    $('.ms-left, .ms-right').preview();


}
// Affiche ou masque le menu en fonction de son état
function clickMenu() {
    $('#menuProduitslink').on("click",function () {
        $('#body').toggleClass('sousMenuTransform');
        $('body').toggleClass('noOverflow');
        $(this).toggleClass('active');
        $('#overlay').toggleClass('active ')
        $('.sousMenu').css('top', $(document).scrollTop() + (8 * $(window).height() / 100));
        $('#closeSousMenu').css('top', $(document).scrollTop() + (8 * $(window).height() / 100));
    });
    $('#overlay,#closeSousMenu').click(function () {
        $('#body').toggleClass('sousMenuTransform');
        $('body').toggleClass('noOverflow');
        $('#menuProduitslink').toggleClass('active');
        $('#overlay').toggleClass('active ');

    });
    $('#sandwich').click(function () {
        $(this).toggleClass("changeSandwich");
        $(".navbar-nav").toggleClass("open");
        $("#body").toggleClass("menuOpen");
    });
   
    $(window).scroll(function () {

        if ($(window).scrollTop() >= $('nav').offset().top) {
            $('nav').addClass('isSticky');
        } else {
            $('nav').removeClass('isSticky');
        }

    });
    $(window).on('resize orientationchange', function (e) {
        e.preventDefault();
        $('.sousMenu').css('top', $(document).scrollTop() + (8 * $(window).height() / 100));
        $('#closeSousMenu').css('top', $(document).scrollTop() + (8 * $(window).height() / 100));

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

function verifIndex() {
    if ($('.ms-left .ms-section.active').index() == 0) {
        $('#precProd').find('img').css('opacity', '0.35');
    } else {
        $('#precProd').find('img').css('opacity', '1');
    }

    if ($('.ms-right .ms-section.active').index() == 0) {
        $('#nextProd').find('img').css('opacity', '0.35');
    } else {
        $('#nextProd').find('img').css('opacity', '1');
    }
    
}