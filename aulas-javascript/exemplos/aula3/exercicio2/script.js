function showNotification() {
    let notification = document.createElement('div')
    notification.innerText = 'Deu tudo certo!'
    notification.className = 'notification success'
    document.body.append(notification)

    setTimeout(() => {
        notification.style.opacity = 1;
    }, 2000) // 2 sec

    setTimeout(() => {
        removeNotification(notification)
    }, 4000);
}

function removeNotification(notification) {
    notification.style.opacity = 0.1;

    setTimeout(() => {
        notification.remove();        
    }, 500);
}