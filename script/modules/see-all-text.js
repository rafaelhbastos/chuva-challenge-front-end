export default function seeAllText() {
  const abstract = document.querySelector('.abstract');
  const abstractText = document.querySelector('.abstract-text p');
  const initalText = abstractText.innerHTML;

  function showAll() {
  const restAbstract = document.querySelector('.rest-abstract');
    if(!restAbstract.classList.contains('active')) {
      restAbstract.classList.add('active');
      const splitAbstract = abstractText.innerHTML.split('... <span class="see-more">ver mais</span>');
      const newAbstract = splitAbstract.join('');
      abstractText.innerHTML = newAbstract;
    } else {
      restAbstract.classList.remove('active');
      abstractText.innerHTML = initalText;
    }
  }
  
  abstract.addEventListener('click', showAll);

}