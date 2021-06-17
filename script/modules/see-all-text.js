export default function seeAllText() {
  const abstract = document.querySelector('.abstract');
  const abstractText = document.querySelector('.abstract-text p');
  const initalText = abstractText.innerHTML;

  function showAll() {
  const rest = document.querySelector('.rest');
    console.log(rest);
    if(!rest.classList.contains('active')) {
      rest.classList.add('active');
      const splitAbstract = abstractText.innerHTML.split('... <span class="see-more">ver mais</span>');
      const newAbstract = splitAbstract[0].concat(splitAbstract[1]);
      abstractText.innerHTML = newAbstract;
    } else {
      rest.classList.remove('active');
      abstractText.innerHTML = initalText;
    }
  }
  
  abstract.addEventListener('click', showAll);

}