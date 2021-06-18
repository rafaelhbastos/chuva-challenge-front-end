export default function sideBar() {
  const navigation = document.querySelectorAll('.menu-nav .topics li a');
  const user = document.querySelector('.menu-nav .topics li p');
  const userDiv = document.querySelector('.topics .user');
  
  function addActive(element) {
    user.classList.remove('active');
    userDiv.classList.remove('active');
    navigation.forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  }

  function addActiveUser(element) {
    navigation.forEach(item => {
      item.classList.remove('active');
    });
    user.classList.add('active');
    userDiv.classList.add('active');
  }

  navigation.forEach(element => {
    element.addEventListener('click', () => addActive(element));
    user.addEventListener('click', () => addActiveUser(user));
  });
}