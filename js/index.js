const texts = [
    'Need quick hiring?',
    'One stop solution ',
    'RecruiSol is here for you!',
    'Start with us now!'
  ];
  
  const typingContainer = document.getElementById('typing-container');
  const typingText = document.getElementById('typing-text');
  
  let currentIndex = 0;
  let isBackspacing = false;
  
  function typeNextText() {
    if (currentIndex >= texts.length) {
      currentIndex = 0;
    }
  
    const currentText = texts[currentIndex];
  
    if (isBackspacing) {
      typingText.textContent = currentText.substring(0, typingText.textContent.length - 1);
      if (typingText.textContent.length === 0) {
        isBackspacing = false;
        currentIndex++;
        setTimeout(typeNextText, 2000);
      } else {
        setTimeout(typeNextText, 100);
      }
    } else {
      typingText.textContent = currentText.substring(0, typingText.textContent.length + 1);
      if (typingText.textContent.length === currentText.length) {
        isBackspacing = true;
        setTimeout(typeNextText, 3000);
      } else {
        setTimeout(typeNextText, 100);
      }
    }
  }
  
  typeNextText();
  