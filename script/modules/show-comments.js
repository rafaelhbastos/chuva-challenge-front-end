export default function showComments() {
  const topic = document.querySelector('.topic-commented');
  const topicText = document.querySelector('.topic-commented .topic-question');
  const initialText = topicText.innerHTML;

  function comeComments() {
    const footer = document.querySelector('.topic-commented .topic-footer');
    const footerText = document.querySelectorAll('.topic-commented .topic-footer p');
    const comments = document.querySelectorAll('[data-show = "appear"]');
  
    const restTopic = document.querySelector('.rest-topic');

    if(!comments[0].classList.contains('active')) {
      footer.style.marginTop = '28px';
      footerText.forEach(p => {
        p.innerText =  p.innerText.replace('1', '4') + 's';
      });

      comments.forEach(comment => {
        comment.classList.add('active');
      });

      restTopic.classList.add('active');
      let text = topicText.innerHTML.split('...').join('');
      topicText.innerHTML = text;

    } else {
      footer.style.marginTop = '11px';
      footerText.forEach(p => {
        let text = new String(p.innerText);
        text = text.replace('4', '1');
        text = text.slice(0,-1);
        p.innerText = text;
      });

      comments.forEach(comment => {
        comment.classList.remove('active');
      });
      topicText.innerHTML = initialText
      restTopic.classList.remove('active');
    }
  }

  topic.addEventListener('click', comeComments);
  
}