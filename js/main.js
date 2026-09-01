
function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("active");
}

function closeMenu() {
    document.querySelector(".navigation").classList.remove("active");
}

function toggleProjects(wrapperId, btn) {
    const wrapper = document.getElementById(wrapperId);
    const hiddenCards = wrapper.querySelectorAll('.project-hidden');
    const isExpanded = btn.getAttribute('data-expanded') === 'true';

    hiddenCards.forEach(function (card) {
        if (isExpanded) {
            card.classList.remove('project-visible');
        } else {
            card.classList.add('project-visible');
        }
    });

    btn.setAttribute('data-expanded', !isExpanded);
    btn.textContent = isExpanded ? 'See More \u2193' : 'See Less \u2191';
}