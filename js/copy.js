(() => {
    const filterContainer = document.querySelector('.portfolio-filter'),
        portfolioItemsContainer = document.querySelector('.portfolio-items'),
        portfolioItems = document.querySelectorAll('.portfolio-item'),
        popup = document.querySelector('.portfolio-popup'),
        prevBtn = popup.querySelector('.pp-prev'),
        nextBtn = popup.querySelector('.pp-next'),
        closeBtn = popup.querySelector('.pp-close'),
        projectDetailsContainer = popup.querySelector('.pp-details'),
        projectDetailsBtn = popup.querySelector('.pp-project-details-btn');
    let itemIndex, slideIndex, screenshots;

    // filter portfolio item
    filterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-item') && !event.target.classList.contains('active')) {
            const target = event.target.getAttribute('data-target');
            filterContainer.querySelector('.active').classList.remove('outer-shadow', 'active');

            event.target.classList.add('active', 'outer-shadow');
        }
    });
})();