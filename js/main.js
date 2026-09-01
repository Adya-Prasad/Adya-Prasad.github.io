
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

/* ── Media Slider ── */

function changeSlide(btn, direction) {
    var slider = btn.closest('.project-slider');
    var slides = slider.querySelectorAll('.slide');
    var current = slider.querySelector('.slide.active');
    var currentIndex = Array.from(slides).indexOf(current);
    var newIndex = (currentIndex + direction + slides.length) % slides.length;

    current.classList.remove('active');
    slides[newIndex].classList.add('active');

    var counter = slider.querySelector('.slider-counter');
    if (counter) counter.textContent = (newIndex + 1) + ' / ' + slides.length;
}

// Auto-wrap every project-box's direct img/iframe children into a slider
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-box').forEach(function (box) {
        var mediaItems = Array.from(box.querySelectorAll(':scope > img, :scope > iframe'));
        if (mediaItems.length === 0) return;

        // Build slider skeleton
        var slider = document.createElement('div');
        slider.className = 'project-slider';

        var track = document.createElement('div');
        track.className = 'slider-track';
        slider.appendChild(track);

        // Insert slider at the first media element's position (before moving elements)
        box.insertBefore(slider, mediaItems[0]);

        // Move each media element into a slide
        mediaItems.forEach(function (item, i) {
            var slide = document.createElement('div');
            slide.className = 'slide' + (i === 0 ? ' active' : '');
            item.classList.add('project-img');
            slide.appendChild(item);
            track.appendChild(slide);
        });

        // Show controls only when 2+ slides exist
        if (mediaItems.length > 1) {
            var controls = document.createElement('div');
            controls.className = 'slider-controls';
            controls.innerHTML =
                '<button class="slider-arrow" onclick="changeSlide(this,-1)">&#8249;</button>' +
                '<span class="slider-counter">1 / ' + mediaItems.length + '</span>' +
                '<button class="slider-arrow" onclick="changeSlide(this,1)">&#8250;</button>';
            slider.appendChild(controls);
        }
    });
});