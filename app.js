const projects = document.getElementById('projects');

const handleScroll = () => {
  const projectTop = projects.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (projectTop < windowHeight) {
    projects.classList.add('active');
  } else {
    projects.classList.remove('active');
  }
};

window.addEventListener('scroll', handleScroll);
const navLinks = document.querySelectorAll('nav a');

