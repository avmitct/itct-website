// nav.js - Shared navigation and footer component

const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="logo.jpg" alt="ITCT Computer Education Logo" style="height:52px;width:52px;object-fit:contain;border-radius:8px;background:white;padding:2px;" />
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
          <img src="logo.jpg" alt="ITCT Logo" style="height:52px;width:52px;object-fit:contain;border-radius:8px;background:white;padding:2px;flex-shrink:0;" />
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

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectChatbot();
});

// ---- CHATBOT ----
function injectChatbot() {
  const chatHTML = `
  <style>
    #chatbot-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #1a3a5c, #e8600a);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(26,58,92,0.4);
      z-index: 9999;
      transition: transform 0.2s;
      border: none;
    }
    #chatbot-btn:hover { transform: scale(1.1); }
    #chatbot-btn .chat-icon { font-size: 26px; }
    #chatbot-btn .close-icon { font-size: 22px; display: none; color: white; }

    #chatbot-window {
      position: fixed;
      bottom: 100px;
      right: 28px;
      width: 360px;
      height: 500px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 12px 48px rgba(26,58,92,0.25);
      z-index: 9998;
      display: none;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #e5e2db;
    }
    #chatbot-window.open { display: flex; }

    .chat-header {
      background: linear-gradient(135deg, #1a3a5c, #1e4d7b);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .chat-header img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: contain;
      background: white;
      padding: 2px;
    }
    .chat-header-info strong {
      display: block;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }
    .chat-header-info span {
      color: rgba(255,255,255,0.65);
      font-size: 12px;
    }
    .chat-online {
      width: 8px; height: 8px;
      background: #22c55e;
      border-radius: 50%;
      margin-left: auto;
      flex-shrink: 0;
      box-shadow: 0 0 0 2px rgba(34,197,94,0.3);
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #f7f5f0;
    }

    .msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13.5px;
      line-height: 1.5;
      font-family: 'DM Sans', sans-serif;
    }
    .msg.bot {
      background: white;
      color: #1c1c1c;
      border-radius: 4px 14px 14px 14px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      align-self: flex-start;
    }
    .msg.user {
      background: #1a3a5c;
      color: white;
      border-radius: 14px 4px 14px 14px;
      align-self: flex-end;
    }
    .msg.typing {
      background: white;
      color: #999;
      font-style: italic;
      align-self: flex-start;
      border-radius: 4px 14px 14px 14px;
    }

    .quick-replies {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .qr-btn {
      background: white;
      border: 1.5px solid #1a3a5c;
      color: #1a3a5c;
      padding: 6px 12px;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.2s;
    }
    .qr-btn:hover { background: #1a3a5c; color: white; }

    .chat-input-area {
      padding: 12px 16px;
      border-top: 1px solid #e5e2db;
      display: flex;
      gap: 8px;
      background: white;
    }
    #chatInput {
      flex: 1;
      border: 1.5px solid #e5e2db;
      border-radius: 10px;
      padding: 10px 14px;
      font-size: 13px;
      font-family: 'DM Sans', sans-serif;
      outline: none;
      transition: border-color 0.2s;
    }
    #chatInput:focus { border-color: #1a3a5c; }
    #chatSend {
      background: #e8600a;
      color: white;
      border: none;
      border-radius: 10px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #chatSend:hover { background: #ff8533; }

    @media (max-width: 480px) {
      #chatbot-window { width: calc(100vw - 32px); right: 16px; bottom: 90px; }
      #chatbot-btn { right: 16px; bottom: 16px; }
    }
  </style>

  <button id="chatbot-btn" onclick="toggleChat()" aria-label="Open Chat">
    <span class="chat-icon">💬</span>
    <span class="close-icon">✕</span>
  </button>

  <div id="chatbot-window">
    <div class="chat-header">
      <img src="logo.jpg" alt="ITCT" />
      <div class="chat-header-info">
        <strong>ITCT Assistant</strong>
        <span>Ask about courses & admissions</span>
      </div>
      <div class="chat-online"></div>
    </div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-input-area">
      <input type="text" id="chatInput" placeholder="Type your question..." onkeydown="if(event.key==='Enter') sendMessage()" />
      <button id="chatSend" onclick="sendMessage()">➤</button>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // Show welcome message
  setTimeout(() => {
    addBotMessage("👋 Namaste! Welcome to <strong>ITCT Computer Education</strong>, Nandurbar.<br/>How can I help you today?", [
      "MS-CIT Course", "KLiC Courses", "Fees & Batches", "Admission Process", "Contact Us"
    ]);
  }, 800);
}

function toggleChat() {
  const win = document.getElementById('chatbot-window');
  const btn = document.getElementById('chatbot-btn');
  const isOpen = win.classList.toggle('open');
  btn.querySelector('.chat-icon').style.display = isOpen ? 'none' : 'block';
  btn.querySelector('.close-icon').style.display = isOpen ? 'block' : 'none';
  if (isOpen) document.getElementById('chatInput').focus();
}

function addBotMessage(text, quickReplies = []) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.innerHTML = text;
  msgs.appendChild(div);

  if (quickReplies.length > 0) {
    const qr = document.createElement('div');
    qr.className = 'quick-replies';
    quickReplies.forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'qr-btn';
      btn.textContent = label;
      btn.onclick = () => handleQuickReply(label);
      qr.appendChild(btn);
    });
    msgs.appendChild(qr);
  }
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg user';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg typing';
  div.id = 'typingIndicator';
  div.textContent = 'Typing...';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addUserMessage(text);
  showTyping();
  setTimeout(() => {
    removeTyping();
    getBotResponse(text.toLowerCase());
  }, 700);
}

function handleQuickReply(label) {
  addUserMessage(label);
  showTyping();
  setTimeout(() => {
    removeTyping();
    getBotResponse(label.toLowerCase());
  }, 600);
}

function getBotResponse(text) {
  // MS-CIT
  if (text.includes('ms-cit') || text.includes('mscit')) {
    addBotMessage(
      "📘 <strong>MS-CIT</strong> (Maharashtra State Certificate in Information Technology)<br/><br/>" +
      "• Duration: ~3 months<br/>" +
      "• Medium: English, Marathi, Hindi<br/>" +
      "• Topics: Computer Basics, MS Office, Internet, AI Tools, Cyber Security, e-Governance<br/>" +
      "• Eligibility: Anyone above age 10<br/>" +
      "• Certificate: Issued by MKCL (Govt. of Maharashtra)<br/><br/>" +
      "🆓 Free demo available!",
      ["Fees & Batches", "Admission Process", "Contact Us"]
    );
  }
  // KLiC
  else if (text.includes('klic') || text.includes('career') || text.includes('course')) {
    addBotMessage(
      "💼 <strong>KLiC Courses</strong> (Knowledge Lit Career)<br/><br/>" +
      "Popular courses:<br/>" +
      "• 📊 KLiC Tally Prime (120 hrs)<br/>" +
      "• 🌐 Hardware & Networking (120 hrs)<br/>" +
      "• 🤖 AI-ML (120 hrs)<br/>" +
      "• 🎨 Graphic Design (120 hrs)<br/>" +
      "• 💻 Web Development (60 hrs)<br/>" +
      "• 📣 Digital Marketing (120 hrs)<br/><br/>" +
      "🎓 YCMOU certified | Placement assistance available!",
      ["Fees & Batches", "Admission Process", "Contact Us"]
    );
  }
  // Fees
  else if (text.includes('fee') || text.includes('cost') || text.includes('price') || text.includes('batch')) {
    addBotMessage(
      "💰 <strong>Fees & Batches</strong><br/><br/>" +
      "For exact fee details, please contact us directly as fees may vary by course and batch.<br/><br/>" +
      "⏰ <strong>Batch Timings:</strong><br/>" +
      "• Morning: 9:00 AM – 11:00 AM<br/>" +
      "• Afternoon: 11:00 AM – 1:00 PM<br/>" +
      "• Evening: 4:00 PM – 6:00 PM<br/><br/>" +
      "📞 Call: <strong>+91 98765 43210</strong>",
      ["Admission Process", "Contact Us", "MS-CIT Course"]
    );
  }
  // Admission
  else if (text.includes('admission') || text.includes('enrol') || text.includes('join') || text.includes('register')) {
    addBotMessage(
      "📋 <strong>Admission Process</strong><br/><br/>" +
      "1️⃣ Fill our online enquiry form<br/>" +
      "2️⃣ Visit our centre for a free demo<br/>" +
      "3️⃣ Submit documents + pay fees<br/>" +
      "4️⃣ Get ERA login & MKCL Learner App<br/>" +
      "5️⃣ Start learning immediately!<br/><br/>" +
      "📄 Documents needed: ID proof, photo, qualification certificate",
      ["Fill Enquiry Form", "Contact Us"]
    );
  }
  // Contact
  else if (text.includes('contact') || text.includes('address') || text.includes('phone') || text.includes('location')) {
    addBotMessage(
      "📍 <strong>ITCT Computer Education</strong><br/>" +
      "Nandurbar, Maharashtra – 425412<br/><br/>" +
      "📞 <strong>+91 98765 43210</strong><br/>" +
      "✉️ info@itctnandurbar.com<br/><br/>" +
      "⏰ Mon–Fri: 9 AM – 7 PM<br/>" +
      "⏰ Saturday: 9 AM – 5 PM<br/>" +
      "❌ Closed Sundays",
      ["MS-CIT Course", "KLiC Courses", "Admission Process"]
    );
  }
  // Enquiry form
  else if (text.includes('enquiry') || text.includes('form') || text.includes('fill')) {
    addBotMessage("📋 You can fill our enquiry form and we'll contact you within 24 hours!");
    setTimeout(() => {
      window.location.href = 'enquiry.html';
    }, 1500);
  }
  // Certificate / result
  else if (text.includes('certificate') || text.includes('result') || text.includes('exam')) {
    addBotMessage(
      "🎓 <strong>Certificate & Exam</strong><br/><br/>" +
      "• MS-CIT exam is conducted online at our centre<br/>" +
      "• Certificate is issued by MKCL and downloadable online<br/>" +
      "• KLiC 120-hr courses are certified by YCMOU<br/><br/>" +
      "For result queries visit: <a href='https://mscit.mkcl.org' target='_blank' style='color:#e8600a;'>mscit.mkcl.org</a>",
      ["Contact Us", "MS-CIT Course"]
    );
  }
  // Greeting
  else if (text.includes('hello') || text.includes('hi') || text.includes('namaste') || text.includes('hey')) {
    addBotMessage(
      "👋 Namaste! Welcome to ITCT Computer Education.<br/>We are Nandurbar's <strong>first and leading MKCL Authorised Centre</strong> since 2002.<br/><br/>How can I help you?",
      ["MS-CIT Course", "KLiC Courses", "Fees & Batches", "Admission Process", "Contact Us"]
    );
  }
  // Default
  else {
    addBotMessage(
      "🙏 Thank you for your question! For detailed information, please contact us directly.<br/><br/>" +
      "📞 <strong>+91 98765 43210</strong><br/>" +
      "✉️ info@itctnandurbar.com<br/><br/>" +
      "Or choose a topic below:",
      ["MS-CIT Course", "KLiC Courses", "Fees & Batches", "Contact Us"]
    );
  }
}
