const animateSections = () => {
  let sections = document.getElementsByName('section-content');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { transform: 'translateY(30%) scaleX(0.9)', opacity: 0 },
            { transform: 'translateY(0) scaleX(0.9)', opacity: 1 },
          ],
          {
            duration: 500,
            iterations: 1,
          }
        );
      }
    });
  });
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};

export default animateSections;
