export default function activeMenu() {
  const menuButton = document.querySelectorAll('[data-menu="button"]');
  const sideBar = document.querySelector('.side-menu-container');

  function showSideBar() {
    menuButton.forEach(btn => {
      btn.classList.toggle('active');
    });

    if(menuButton[0].classList.contains('active')) {
      sideBar.classList.add('show')
    } else {
      sideBar.classList.remove('show')
    }
  }

  menuButton.forEach(btn => {
    btn.addEventListener('click', showSideBar);
  });
}