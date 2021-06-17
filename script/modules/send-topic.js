export default function sendTopic() {
  const createTopic = document.querySelector('.create .discussion-btn');
  const send = document.querySelector('.write .discussion-btn');
  const createAgain = document.querySelector('.topic-sent .discussion-btn');
  const comeBack = document.querySelector('.topic-sent .discover');

  const create = document.querySelector('.discussion-content.create');
  const write = document.querySelector('.discussion-content.write');
  const sent = document.querySelector('.topic-sent');

  function writeMessage() {
    create.classList.remove('active');
    sent.classList.remove('active');
    write.classList.add('active')
  }

  function sendMessage() {
    create.classList.remove('active');
    write.classList.remove('active');
    sent.classList.add('active');
  }

  function comeToInitial() {
    sent.classList.remove('active');
    write.classList.remove('active');
    create.classList.add('active');
  }

  createTopic.addEventListener('click', writeMessage);
  send.addEventListener('click', sendMessage);
  createAgain.addEventListener('click', writeMessage);
  comeBack.addEventListener('click', comeToInitial);
}