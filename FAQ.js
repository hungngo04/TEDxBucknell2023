// const accordionHeaders = document.querySelectorAll(".accordion-header");

// accordionHeaders.forEach((header) => {
//   header.addEventListener("click", () => {
//     const accordionContent = header.nextElementSibling;
//     if (accordionContent.style.display === "block") {
//       accordionContent.style.display = "none";
//     } else {
//       accordionContent.style.display = "block";
//     }
//     header.classList.toggle("accordion-header-active");
//     header.querySelector(".accordion-icon").classList.toggle("accordion-icon-active");
//   });
// });

// const accordionHeaders = document.querySelectorAll('.accordion-header');

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', () => {
//     const accordionIcon = header.querySelector('.accordion-icon');
//     accordionIcon.classList.toggle('accordion-icon-active');
//     header.classList.toggle('accordion-header-active');
//   });
// });


// const accordionHeaders = document.querySelectorAll('.accordion-header');

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', () => {
//     const accordionIcon = header.querySelector('.accordion-icon');
//     accordionIcon.classList.toggle('accordion-icon-active');
//     header.classList.toggle('accordion-header-active');
//     const accordionContent = header.nextElementSibling;
//     if (accordionContent.style.maxHeight) {
//       accordionContent.style.maxHeight = null;
//     } else {
//       accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//     }
//   });
// });

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  const accordionIcon = header.querySelector('.accordion-icon');
  header.addEventListener('click', () => {
    accordionIcon.classList.toggle('accordion-icon-active');
    header.classList.toggle('accordion-header-active');
    const accordionContent = header.querySelector('.accordion-content');
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.display = "block";
    }
  });
});