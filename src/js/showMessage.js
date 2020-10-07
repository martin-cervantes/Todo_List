function hideMessage() {
  const message = document.getElementById('message');
  message.classList.add('none');
}

const showMessage = (message) => {
  const showMessage = document.getElementById('message');

  showMessage.innerHTML = '';
  showMessage.classList.remove('none');

  const p = document.createElement('p');
  p.innerText = message;

  showMessage.appendChild(p);

  setTimeout(hideMessage, 2000);

  return showMessage;
};

export default showMessage;
