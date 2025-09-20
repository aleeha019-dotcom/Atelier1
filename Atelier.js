// Save button action
document.addEventListener('DOMContentLoaded', function() {
    // Save button functionality
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Pin saved!');
        });
    });

    // Upload button functionality
    const uploadBtn = document.querySelector('.upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            alert('Upload functionality coming soon!');
        });
    }
});
// ========================
// NAVBAR FUNCTION - Add this to your existing Atelier.js
// ========================

function initAtelierNavbar() {
    const navbarHTML = `
    <nav>
      <div class="logo gradient-text">
        <img src="Easel.svg" alt="Atelier Logo" class="logo-easel">
        <span>Atelier</span>
      </div>
      <ul>
        <li><a href="challenges.html">Daily challenges</a></li>
        <li class="dropdown">
          <a href="#">Tools 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
          <ul class="dropdown-menu">
            <li><a href="color-generator.html">Color Generator</a></li>
            <li><a href="prompt-generator.html">Prompt Generator</a></li>
            <li><a href="grid-tool.html">Grid Tool</a></li>
          </ul>
        </li>
        <li><a href="community.html">Community</a></li>
        <li class="divider"></li>
        <li><button onclick="window.location.href='Signup.html'">sign in</button></li>
      </ul>
    </nav>
    `;

    // Add navbar to page
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Load Google Fonts
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&family=Montserrat:wght@400;500;600&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
    }

    // Load CSS
    if (!document.querySelector('link[href="Atelier.css"]')) {
        const cssLink = document.createElement('link');
        cssLink.href = 'Atelier.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);
    }

    // Setup dropdown
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdown && dropdownMenu) {
        dropdown.addEventListener('mouseenter', () => {
            dropdownMenu.style.display = 'block';
            dropdown.classList.add('active');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
            dropdown.classList.remove('active');
        });
    }

    // Setup logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => window.location.href = 'index.html');
        logo.style.cursor = 'pointer';
    }

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// YOUR EXISTING ATELIER.JS CODE...

// Existing Atelier.js ke DOMContentLoaded mein yeh line add karें:
document.addEventListener('DOMContentLoaded', function() {
    initAtelierNavbar(); // <-- Yeh line add karें
    
    // Your existing code...
});
