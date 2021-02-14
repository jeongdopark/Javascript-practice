
const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highLight = document.querySelector('.highlight')

tabMenu.forEach(function(item, idx){
    item.addEventListener('click', function(e){
        e.preventDefault();
        showContent(idx);
        moveHighlight(idx);
    });
});

function showContent(num){
    tabContent.forEach(function(item){
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
}

function moveHighlight(num){
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;

    highLight.style.left = `${newLeft}px`
    highLight.style.width = `${newWidth}px`
}