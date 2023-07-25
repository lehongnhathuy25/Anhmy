export default function SwiperModule() {
    var swiperRelate = new Swiper(".relate-slide .swiper", {

        pagination: {
            el: ".relate-slide .swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl: ".relate-slide .ctrl-prev",
            nextEl: ".relate-slide .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });

    var swiperRelate = new Swiper(".contact-slide .swiper", {

        pagination: {
            el: ".contact-slide .pagination",
            clickable: true,
        },
    });

    var swiperSvAll = new Swiper(".sv-all-list .swiper", {

        pagination: {
            el: ".sv-all-list .swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl: ".sv-all-list .ctrl-prev",
            nextEl: ".sv-all-list .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });

    const knowKnew = document.querySelectorAll(".know-knowl-slide")
    knowKnew.forEach(item => {
        const knowSwiper = item.querySelector('.swiper')
        const prev = item.querySelector('.ctrl-prev')
        const next = item.querySelector('.ctrl-next')
        const pagi = item.querySelector('.swiper-pagination')

        var swiperSvAll = new Swiper(knowSwiper, {

            pagination: {
                el: pagi,
                clickable: true,
            },
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            }
        });
    })
    const swiperx = document.querySelector('.know-active-slide .swiper')
    var swiperActive = new Swiper('.know-active-slide .swiper', {
        pagination: {
            el: '.know-active-slide .swiper-pagination',
            clickable: true,
        },
        centeredSlides: true,
        navigation: {
            prevEl: '.know-active-slide .ctrl-prev',
            nextEl: '.know-active-slide .ctrl-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 8,
                centeredSlides: false,
            },
            701: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        on: {
            init: function () {
                const swiperSlide = swiperx.querySelectorAll('.swiper-slide')
                const total = swiperSlide.length;
                let totalFloor = Math.floor(total / 2)
                const swiperParent = swiperSlide.parentElement
                this.slideTo(totalFloor)
                swiperSlide.forEach(items => {
                    let heigths = swiperx.querySelector('.swiper-slide-active').offsetHeight
                    if (window.innerWidth > 1000) {
                        items.style.minHeight = heigths + 30 + 'px'
                        console.log(heigths)
                    }
                    else if (window.innerWidth < 1000 && window.innerWidth > 700) {
                        items.style.minHeight = heigths + 20 + 'px'
                    } else {
                        items.style.minHeight = heigths + 'px'
                    }
                })
            },

        }
    });



    const progressCircle = document.querySelector(".autoplay-progress .circles");
    const progressContent = document.querySelector(".autoplay-progress .time");


    var swiperHomeContent = new Swiper(".home-bn .content .swiper", {
        effect: 'fade',
        pagination: {
            el: ".home-bn .circle .dot",
            clickable: true,
        },
    })
    var swiperHome = new Swiper(".home-bn .circle .swiper", {
        effect: 'fade',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".home-bn .circle .number",
            type: 'fraction',
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
            },
        },
    });
    if (swiperHome.slides.length == 1) {
        progressCircle.style.display = "none";
    }

    swiperHomeContent.controller.control = swiperHome;
    swiperHome.controller.control = swiperHomeContent;



    const swColor = document.querySelectorAll(".home-ab-flex");
    swColor.forEach(items => {
        const swiperColor = items.querySelector('.swiper')
        const progressPagi = items.querySelector('.progress')

        var swiperColors = new Swiper(swiperColor, {
            grabCursor: true,
            on: {
                init: function (e) {
                    const totalSlide = swiperColor.querySelectorAll(".swiper-slide")
                    const total = items.querySelector('.total')
                    if (totalSlide.length < 10) {
                        total.innerHTML = '0' + totalSlide.length
                    } else {
                        total.innerHTML = totalSlide.length
                    }

                    // 

                    let progress = 100 / (totalSlide.length);
                    let percent = (e.realIndex + 1) * progress;
                    progressPagi.style = `--progress: ${percent}%`
                },
                slideChange: function (e) {
                    const totalSlide = swiperColor.querySelectorAll(".swiper-slide")
                    let progress = 100 / (totalSlide.length);
                    let percent = (e.realIndex + 1) * progress;
                    progressPagi.style = `--progress: ${percent}%`
                },
            }
        });
    })



    var swiperMember = new Swiper(".home-member .swiper", {

        pagination: {
            el: ".home-member .swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl: ".home-member .ctrl-prev",
            nextEl: ".home-member .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });
}