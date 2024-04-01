const walkthroughLinks = document.querySelectorAll('.walkthrough-link a');

walkthroughLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.querySelector('.walkthrough-line').style.transform = 'translateX(0)';
  });

  link.addEventListener('mouseleave', () => {
    link.querySelector('.walkthrough-line').style.transform = 'translateX(-100%)';
  });
});
