// Create a new bubble element
function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    document.body.appendChild(bubble);
  
    // Remove the bubble after animation duration
    setTimeout(() => {
      bubble.remove();
    }, 2000);
  }
  
  // Event listener for click events
  document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    createBubble(x, y);
  });
  