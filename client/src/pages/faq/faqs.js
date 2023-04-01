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