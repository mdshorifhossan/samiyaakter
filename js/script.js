$(document).ready(function () {
    // -------- logo animated --------

    let textWrapper = document.querySelector('.navbar-brand .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.navbar-brand .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.navbar-brand',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 5000,
        });
    // -------- logo animated --------
    //  ---------- Navbar scroll ---------
    let navtop = document.querySelector(".navbar")
    window.addEventListener("scroll", function () {
        navscroll = window.scrollY;
        if (navscroll > 50) {
            navtop.classList.add("sticky");
        } else {
            navtop.classList.remove("sticky");
        }
    })
    //  ---------- Navbar scroll ---------

    // ----------- banner text wrap ----------

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // ----------- banner text wrap ----------

    // -------------- Price sponser -----------
    $('.sponser-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
    });
    // -------------- Price sponser ----------- 

    // ------- Testimonial slick part ---------------


    $('.slider').slick({
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        nextArrow: '<span><i class="fa-solid fa-angle-right"></i></span>',
        prevArrow: '<span><i class="fa-solid fa-angle-left"></i></span>',
        centerPadding: '0px',
    });

    $('.counter').counterUp({
        delay: 20,
        time: 4000,
    });

    // ------- Testimonial slick part ---------------
});