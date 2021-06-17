export default function animeInit() {
  const sideBar = document.querySelector('[data-anime="show-right"]');
  const content = document.querySelectorAll('[data-anime="show-down"]');

  sideBar.classList.add('active');
  content.forEach(section => {
    section.classList.add('active');
  });
}