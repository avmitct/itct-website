// nav.js - Shared navigation and footer component

const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="logo-icon">IT</div>
      <div class="logo-text">
        <strong>ITCT Computer Education</strong>
        <span>Authorised MKCL Learning Centre · Nandurbar</span>
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="enquiry.html" class="btn-nav">Enquire Now</a></li>
    </ul>
    <div class="hamburger" onclick="toggleNav()" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo" style="gap:12px;display:flex;align-items:center;">
          <div class="logo-icon" style="background:#e8600a;width:40px;height:40px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-weight:800;color:white;font-size:16px;">IT</div>
          <div class="logo-text"><strong style="color:white;font-family:'Playfair Display',serif;font-size:16px;display:block;">ITCT Computer Education</strong><span style="color:rgba(255,255,255,0.5);font-size:11px;">Nandurbar, Maharashtra</span></div>
        </div>
        <p>Leading Authorised Learning Centre for MS-CIT & KLiC courses by MKCL in Nandurbar district since 2002. Empowering learners with digital literacy and career-ready skills.</p>
        <div class="footer-badges">
          <span class="f-badge">✓ MS-CIT ALC</span>
          <span class="f-badge">✓ KLiC ALC</span>
          <span class="f-badge">✓ Since 2002</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="courses.html">Courses</a></li>
          <li><a href="profile.html">Institute Profile</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="enquiry.html">Enquiry Form</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Courses</h4>
        <ul>
          <li><a href="courses.html#mscit">MS-CIT</a></li>
          <li><a href="courses.html#klic">KLiC Courses</a></li>
          <li><a href="courses.html#klic">KLiC Diploma</a></li>
          <li><a href="courses.html#klic">AI & Digital Literacy</a></li>
          <li><a href="courses.html#klic">Tally / Accounting</a></li>
          <li><a href="courses.html#klic">Hardware & Networking</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">📍 Nandurbar, Maharashtra</a></li>
          <li><a href="tel:+919876543210">📞 +91 98765 43210</a></li>
          <li><a href="mailto:info@itctnandurbar.com">✉ info@itctnandurbar.com</a></li>
          <li><a href="#">🌐 itctnandurbar.com</a></li>
          <li><a href="https://mscit.mkcl.org" target="_blank">🔗 mscit.mkcl.org</a></li>
          <li><a href="https://klic.mkcl.org" target="_blank">🔗 klic.mkcl.org</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© 2025 ITCT Computer Education, Nandurbar. All rights reserved.</span>
      <span>Authorised Learning Centre for <a href="https://mkcl.org" target="_blank">MKCL</a> · MS-CIT & KLiC</span>
    </div>
  </div>
</footer>
`;

function injectNav() {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Set active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav on outside click
document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  if (nav && nav.classList.contains('open') && !e.target.closest('nav')) {
    nav.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', injectNav);
