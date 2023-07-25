export default function RatingModule() {
    const star = document.querySelectorAll('.rating .stars');
    if(star) {
        const ip = document.querySelectorAll('.rating .stars input');
        star.forEach((item, index) => {
            item.addEventListener('click', () => {
                star.forEach((item2, i) => {
                    if (i <= index) {
                        item2.classList.add('active')
                        ip[i].checked = true
                    } else {
                        item2.classList.remove('active')
                        ip[i].checked = false
                    }
                })
            })
        })
    }
    
}