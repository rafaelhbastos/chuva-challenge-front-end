export default function activeMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const sideBar = document.querySelector('.side-menu-container');

  function showSideBar() {
    menuButton.classList.toggle('active');

    if(menuButton.classList.contains('active')) {
      sideBar.classList.add('show')
    } else {
      sideBar.classList.remove('show')
    }
  }

  menuButton.addEventListener('click', showSideBar);

}