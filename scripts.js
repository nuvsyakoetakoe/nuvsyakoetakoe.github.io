window.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    const text = button.textContent;
    button.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i] === ' ' ? '\xa0' : text[i];
      span.setAttribute('data-text', text[i] === ' ' ? '\xa0' : text[i]);
      button.appendChild(span);
    }
  });
});
