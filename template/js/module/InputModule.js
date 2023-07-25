export default function InputModule() {
    const forms = document.querySelector('.form-list')
    if (forms) {
        const ip = forms.querySelectorAll('.form-ip')
        ip.forEach(items => {
            const input = items.querySelector('input')
            const textarea = items.querySelector('textarea')
            if (input) {
                const text = items.querySelector('.text-abs')
                input.addEventListener('input', () => {
                    if (input.value != '') {
                        input.parentElement.parentElement.classList.add('active')
                    }
                    else {
                        input.parentElement.parentElement.classList.remove('active')
                    }
                })
                input.addEventListener('blur', () => {
                    if (input.value == '') {
                        input.parentElement.parentElement.classList.remove('active')
                    }
                })
            }
            if (textarea) {
                const text = items.querySelector('.text-abs')
                text.classList.add('field')
                textarea.addEventListener('input', () => {
                    if (textarea.value != '') {
                        textarea.parentElement.parentElement.classList.add('active')
                    } else {
                        textarea.parentElement.parentElement.classList.remove('active')
                    }
                })
                textarea.addEventListener('blur', () => {
                    if (textarea.value == '') {
                        textarea.parentElement.parentElement.classList.remove('active')
                    }
                })
            }

        })
    }

    const chose = document.querySelectorAll('.upfile');
    if (chose) {
        chose.forEach(item => {
            const ip = item.querySelector('input')
            const label = item.querySelector('.label-txt')
            ip.addEventListener('change', (e) => {
                const files = ip.files;
                for (const file of files) {
                    label.innerHTML = file.name
                }
            })
        })
    }
}