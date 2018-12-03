// Fonction appellée lorsqu'on change la taille de la fenetre
// 


$(document).ready(function () {
    initDiap();
    clickMenu();
    datahref();
    //$("nav").sticky({ topSpacing: 0, zIndex:3 });
    $(window).scroll(function (e) {
        e.preventDefault();
        if ($(window).scrollTop() >= $('nav').offset().top) {
            $('nav').addClass('isSticky');
        } else {
            $('nav').removeClass('isSticky');
        }
    });
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
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function(){
        $.fn.multiscroll.moveSectionUp();
        
    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });
   
}

function initProduitDistrasun() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil', 'gamme','alizee','eole'],
        menu: '#navigationProduit',
        afterRender: function () {
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}

function initProduitGC() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}

function initProduitGarage() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}

function initProduitPiscine() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}

function initProduitMotorisation() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
        menu: true,
        anchors: ['accueil'],
        menu: '#navigationProduit',
        afterRender: function () {
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}

function initProduitPortail() {
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        keyboardScrolling: true,
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
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

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
            var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
            $('.ms-section,#navigationProduit').css('min-height', 'calc(100vh - ' + heightOff + 'px');
            verifIndex();
        },
        afterLoad: function () {
            verifIndex();
        }
    });
    $(window).on('resize', function () {
        var heightOff = $('nav').height() + $('footer').height() + $('#anchor').height();
        $('.ms-section').css('height', 'calc(100vh - ' + heightOff + 'px');

    });
    $('#precProd').click(function () {
        $.fn.multiscroll.moveSectionUp();

    });
    $('#nextProd').click(function () {
        $.fn.multiscroll.moveSectionDown();
    });

}


// Affiche ou masque le menu en fonction de son état
function clickMenu() {
    $('#menuProduitslink').on("click",function () {
        $('#body').toggleClass('sousMenuTransform');
        $('body').toggleClass('noOverflow');
        $(this).toggleClass('active');
        $('#overlay').toggleClass('active ')
        $('.sousMenu').css('top', $(document).scrollTop());
    });
    $('#overlay').click(function () {
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
    $('.sousMenu div').mouseenter(function () {

        $(this).css('margin', '0 0 0 0');
    });
    $('.sousMenu div').mouseleave(function () {

        $(this).css('margin', '0 0 -30% 0');
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