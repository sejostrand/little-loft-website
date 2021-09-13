export const animateSections = () => {
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

export const animateWoodBlocks = () => {
  let woodBlocks = document.getElementById('wood-blocks');

  const woodBlocksObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimation(true);
      }
    });
    woodBlocksObserver.observe(woodBlocks);
  });
};

//Previous animation
// const options = {
//   duration: 1000,
//   iterations: 1,
//   animationTimingFunction: 'cubic-bezier(0,.94,.29,.84)',
// };

//   const woodBlocksObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         rectangle.animate(
//           [
//             { transform: 'translate(-300%, -150%) rotate(-90deg)' },
//             {
//               transform:
//                 'matrix(0.869411 0.494089 -0.495843 0.868412 115.272 0) rotate(0deg)',
//             },
//           ],
//           options
//         );
//         square.animate(
//           [
//             { transform: 'translate(-100%, 350%) rotate(-120deg)' },
//             {
//               transform: 'translate(0, 0) rotate(0deg)',
//             },
//           ],
//           options
//         );
//         semiCircle.animate(
//           [
//             { transform: 'translate(50%, -450%) rotate(-120deg)' },
//             {
//               transform: 'translate(0, 0) rotate(0deg)',
//             },
//           ],
//           options
//         );
//         triangle.animate(
//           [
//             { transform: 'translate(200%, 400%) rotate(-90deg)' },
//             {
//               transform: 'translate(0, 0) rotate(0deg)',
//             },
//           ],
//           options
//         );
//         circle.animate(
//           [
//             { transform: 'translate(150%, -250%)' },
//             {
//               transform: 'translate(0, 0)',
//             },
//           ],
//           options
//         );
//       }
//     });
//   });

//   woodBlocksObserver.observe(woodBlocks);
