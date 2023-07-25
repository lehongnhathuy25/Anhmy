export default function HeaderModule() {
    const header = document.querySelector('.header')
    const mobile = document.querySelector('.mobile')
    const mobileOverlay = document.querySelector('.mobile-overlay')
    const cart = document.querySelectorAll('.disableJS')
    cart.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth < 1200) {
                e.preventDefault();
            }
        })
    })
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                header.classList.add('sticky')

            } else {
                header.classList.remove('sticky')
            }
        })
    }
    $(document).ready(function () {
        if (header) {
            window.addEventListener("scroll", function () {
                if (window.scrollY > 0) {
                    header.classList.add('sticky')

                } else {
                    header.classList.remove('sticky')
                }
            })
        }
    });

}