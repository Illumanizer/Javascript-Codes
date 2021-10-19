const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
    createToast();
});

function createToast() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = "This is my first notification"

    container.appendChild(notif)

    setTimeout(() => {
        notif.remove();
    }, 3000)
}