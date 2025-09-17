// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    const loveElement = document.querySelector('.love');
    const text = 'For Me{"Science is Life and Tech is Love"}';
    loveElement.innerHTML = '<span></span>';
    const typingSpan = loveElement.querySelector('span');
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = text.substring(0, charIndex);
        typingSpan.textContent = currentText;
        
        if (!isDeleting && charIndex < text.length) {
            charIndex++;
            setTimeout(typeText, 100);
        } else if (!isDeleting && charIndex >= text.length) {
            isDeleting = true;
            setTimeout(typeText, 1000); // Pause at the end
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeText, 50);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            setTimeout(typeText, 500); // Pause before restarting
        }
    }
    
    typeText();
});

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("active");
}