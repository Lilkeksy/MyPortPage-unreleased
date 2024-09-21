const toggleButton = document.getElementById('toggle-dark-mode');
const hideImage = document.getElementById('gradient-img')
const img = document.getElementById('mode-icon');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // document.body.hideImage.classList.toggle('hidden-img');
  
  const currentSrc = img.src.split('/').pop();  // Get the current filename

  if (currentSrc === 'Logo1.png') {
    img.src = './Assets/pictures and logos/Logo.png';  // Switch to light mode logo
  } else {
    img.src = './Assets/pictures and logos/Logo1.png';  // Switch to dark mode logo
  }
  });

  document.getElementById('button1').addEventListener('click', function() {
     event.preventDefault();
    document.getElementById('contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('about-me-link').addEventListener('click', function() {
    event.preventDefault();
   document.getElementById('about-me').scrollIntoView({
     behavior: 'smooth'
   });
 });

document.getElementById('services').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('service-section').scrollIntoView({
   behavior: 'smooth'
 });
});

 document.getElementById('works').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('portfolio').scrollIntoView({
   behavior: 'smooth'
 });
});

document.getElementById('contact').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('contact-section').scrollIntoView({
   behavior: 'smooth'
 });
});

