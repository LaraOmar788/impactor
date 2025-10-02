document.addEventListener("DOMContentLoaded", function() {
  // Simple count up for animated stats
  const counters = document.querySelectorAll('.stat-number:not(.static)');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const inc = Math.ceil(target / 36);
      if(current < target) {
        counter.innerText = Math.min(current + inc, target);
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});