// Global variable to count button clicks
let bounceCount = 0;

function triggerAnimation(element, className, duration = 800) {
  element.classList.remove(className); // reset if already applied
  void element.offsetWidth; // force reflow to restart animation
  element.classList.add(className);

  setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

/**
 * Increments and returns the current bounce count
 * Demonstrates return value and global variable usage
 */
function incrementBounceCount() {
  bounceCount++;
  return bounceCount;
}

function showModal(modal) {
  modal.classList.add('show');
}

/**
 * Closes a modal by removing the 'show' class
 **/
function hideModal(modal) {
  modal.classList.remove('show');
}

// ====== Part 3: Event Listeners (Connecting JS to CSS) ======

// Animate the Box
document.getElementById('animateBoxBtn').addEventListener('click', () => {
  const box = document.getElementById('animatedBox');
  triggerAnimation(box, 'animated');

  const count = incrementBounceCount();
  console.log(`Box has bounced ${count} times.`);
});

// Open Modal
document.getElementById('openModalBtn').addEventListener('click', () => {
  const modal = document.getElementById('modal');
  showModal(modal);
});

// Close Modal
document.getElementById('closeModalBtn').addEventListener('click', () => {
  const modal = document.getElementById('modal');
  hideModal(modal);
});
