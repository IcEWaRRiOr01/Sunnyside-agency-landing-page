document.querySelector('.menu-button').addEventListener('click', toggle);

function toggle() {
    document.querySelector('.menu-list').classList.toggle('hide');
}



const menuList = document.querySelector('.menu-list');

window.addEventListener('load', deleteClass);

function deleteClass() {
    if (window.innerWidth >= 768) {
        menuList.classList.remove('hide');
    } else if (window.innerWidth < 768) {
        menuList.classList.add('hide');
    }
}