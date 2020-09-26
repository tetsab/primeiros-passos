let items = document.querySelectorAll('ul > li')

items.forEach((item) => {
    item.onClick = function () {
        document.querySelector('ul > li.active')
        .classList.remove('active')
        item.classList.add('active');
    }
})