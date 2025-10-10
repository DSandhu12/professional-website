const blob = document.getElementById('blob');
const smoothness = 0.1; // smaller = smoother movement
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

if (blob) {
    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate offset relative to screen center
        targetX = (e.clientX - centerX) / 20;
        targetY = (e.clientY - centerY) / 20;
    });

    function animate() {
        // Smooth follow
        currentX += (targetX - currentX) * smoothness;
        currentY += (targetY - currentY) * smoothness;

        blob.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

const roles = ["Software Engineer", "Web Developer", "QA & Developer", "AI Enthusiast"];
const typewriter = document.getElementById("typewriter");

let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenRoles = 2000; // 2 seconds after fully typed

function type() {
    if (typewriter && charIndex < roles[roleIndex].length) {
        typewriter.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (typewriter && charIndex > 0) {
        typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

// Start typing on page load
document.addEventListener("DOMContentLoaded", function() {
    if (typewriter) type();
});

const body = document.body;

if (body) {
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;  // 0 to 1
        const y = e.clientY / window.innerHeight; // 0 to 1

        // Calculate background position based on mouse
        const posX = 50 + (x - 0.5) * 20; // center ±10%
        const posY = 50 + (y - 0.5) * 20; // center ±10%

        body.style.backgroundPosition = `${posX}% ${posY}%`;
    });
}

const textColumn = document.querySelector('.text-column');
const modelColumn = document.querySelector('.model-column');

if (textColumn && modelColumn) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;  // left-right tilt
        const y = (e.clientY / window.innerHeight - 0.5) * 20; // up-down tilt

        // Text tilts slightly more for depth
        textColumn.style.transform = `perspective(800px) rotateY(${10 + x}deg) rotateX(${y}deg)`;

        // Model tilts slightly opposite for parallax effect
        modelColumn.style.transform = `perspective(800px) rotateY(${-x}deg) rotateX(${-y}deg)`;
    });
}

const container = document.querySelector('.parallax-container');

if (container) {
    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30; // horizontal tilt
        const y = (e.clientY / innerHeight - 0.5) * 30; // vertical tilt
        container.style.transform = `perspective(800px) rotateY(${-x}deg) rotateX(${-y}deg)`;
    });
}

document.querySelectorAll('.glass-card').forEach(card => {
    if (!card) return;
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--reflection-x', `${x}%`);
        card.style.setProperty('--reflection-y', `${y}%`);
    });
});

document.body.insertAdjacentHTML('beforeend', `
  <footer style="
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
    padding: 10px 0;
    color: rgba(255, 255, 255, 0.338);
    font-size: 0.9rem;
    z-index: 1000;
  ">
    &copy; 2025 Dharmveer Sandhu. All rights reserved.
  </footer>
`);

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const maxScroll = 200; // scroll distance over which fade occurs
  const opacity = Math.min(window.scrollY / maxScroll, 1); // max 0.8

  navbar.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 0))`;
});


