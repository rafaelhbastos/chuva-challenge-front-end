export default function sideBar() {
  const navigation = document.querySelectorAll('.menu-nav .topics li a');
  
  function addActive(element) {
    navigation.forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  }

  navigation.forEach(element => {
    element.addEventListener('click', () => addActive(element));
  });
}