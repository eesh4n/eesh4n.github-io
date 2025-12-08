function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const imgSrc = element.querySelector('img').getAttribute('data-src');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Close modal if clicked outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Tilt / parallax effect for sponsor cards
document.querySelectorAll('.sponsor-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-y) * 6; // rotateX
    const ry = (x) * 8;  // rotateY
    card.style.transform = `translateY(-10px) scale(1.06) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function showTeam(event, teamName) {
    // Hide all sections
    document.querySelectorAll('.team-section').forEach(section => {
        section.classList.remove('active-section');
    });

    // Show selected section
    document.getElementById(teamName).classList.add('active-section');

    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}