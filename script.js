// Renders everything from data.js — you normally don't need to edit this file.
(function () {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z"/><path d="M9.8 15.5l5.7-3.5-5.7-3.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>',
  };
  const icon = (n) => ICONS[(n || "").toLowerCase()] || ICONS.link;
  const SKILL_EMOJI = ["🎨", "⚙️", "🗄️", "🛠️", "🤖", "📱", "☁️", "🧠"];
  const GRADS = [
    "linear-gradient(135deg,#7c5cff,#00d4ff)", "linear-gradient(135deg,#ff4ecd,#7c5cff)",
    "linear-gradient(135deg,#00d4ff,#22c55e)", "linear-gradient(135deg,#f59e0b,#ff4ecd)",
  ];

  // ---------- BASIC ----------
  document.title = `${D.name} — ${D.roles[0]}`;
  $("#logo").innerHTML = `<i>${esc(D.initials)}</i>${esc(D.name.split(" ")[0])}`;
  $("#heroName").textContent = D.name;
  $("#tagline").textContent = D.tagline;
  $("#footName").textContent = D.name;
  $("#year").textContent = new Date().getFullYear();
  $("#heroLoc").textContent = D.location;
  if (!D.location) $("#locCard").remove();
  ["#hl1", "#hl2"].forEach((id, i) => {
    const h = (D.highlights || [])[i];
    if (h) $(id).innerHTML = `<span>${esc(h.icon)}</span> ${esc(h.text)}`; else $(id).remove();
  });
  if (!D.availableForWork) $("#availBadge").remove();
  $("#avatar").innerHTML = D.photo ? `<img src="${esc(D.photo)}" alt="${esc(D.name)}">` : `<span class="grad">${esc(D.initials)}</span>`;
  if (D.resume) $("#resumeBtn").href = D.resume; else $("#resumeBtn").remove();
  $("#mailBtn").href = `mailto:${D.email}`;

  const socials = D.socials.filter((s) => s.url);
  const socialHTML = socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}">${icon(s.name)}</a>`).join("")
    + `<a href="mailto:${esc(D.email)}" aria-label="Email" title="Email">${ICONS.mail}</a>`;
  $("#heroSocials").innerHTML = socialHTML;
  $("#contactSocials").innerHTML = socialHTML;

  // ---------- ABOUT ----------
  $("#aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = D.stats.map((s) => `<div class="card stat"><b data-count="${esc(s.value)}">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  // ---------- SKILLS ----------
  $("#skillsGrid").innerHTML = D.skills.map((g, i) => `
    <div class="card skill-card reveal" style="transition-delay:${i * 80}ms">
      <h3><i>${SKILL_EMOJI[i % SKILL_EMOJI.length]}</i>${esc(g.category)}</h3>
      <div class="chips">${g.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div>`).join("");
  const all = D.skills.flatMap((g) => g.items);
  $("#marquee").innerHTML = [...all, ...all].map((t) => `<span>${esc(t)}</span>`).join("");

  // ---------- PROJECTS ----------
  const cats = ["All", ...new Set(D.projects.map((p) => p.category).filter(Boolean))];
  $("#filters").innerHTML = cats.map((c, i) => `<button class="filter${i ? "" : " active"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("#projectsGrid").innerHTML = D.projects.map((p, i) => `
    <article class="card project reveal" data-cat="${esc(p.category)}" style="transition-delay:${(i % 3) * 80}ms">
      <div class="project-img" style="background:${GRADS[i % GRADS.length]}">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : `<span class="ph">${esc(p.title.split(/\s+/).filter((w) => /^[A-Za-z0-9]/.test(w)).map((w) => w[0].toUpperCase()).join("").slice(0, 2))}</span>`}
        ${p.featured ? `<span class="featured-tag">★ Featured</span>` : ""}
      </div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${p.github || p.live ? `<div class="project-links">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${ICONS.github} Code</a>` : ""}
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${ICONS.external} Live demo</a>` : ""}
        </div>` : ""}
      </div>
    </article>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter"); if (!b) return;
    document.querySelectorAll(".filter").forEach((f) => f.classList.toggle("active", f === b));
    document.querySelectorAll(".project").forEach((p) => p.classList.toggle("hide", b.dataset.cat !== "All" && p.dataset.cat !== b.dataset.cat));
  });

  // ---------- JOURNEY ----------
  $("#expList").innerHTML = D.experience.map((x) => `
    <li class="reveal"><div class="card">
      <span class="period">${esc(x.period)}</span><h4>${esc(x.role)}</h4><div class="org">${esc(x.company)}</div>
      <p>${esc(x.description)}</p>
      ${x.tech && x.tech.length ? `<div class="chips">${x.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
    </div></li>`).join("");
  $("#eduList").innerHTML = D.education.map((x) => `
    <li class="reveal"><div class="card">
      <span class="period">${esc(x.period)}</span><h4>${esc(x.degree)}</h4><div class="org">${esc(x.school)}</div>
      ${x.detail ? `<p>${esc(x.detail)}</p>` : ""}
    </div></li>`).join("");
  $("#achList").innerHTML = D.achievements.map((a) => `
    <div class="card ach reveal"><i>${esc(a.icon || "🏆")}</i><div><h4>${esc(a.title)}</h4><p>${esc(a.detail)}</p></div><small>${esc(a.year)}</small></div>`).join("");

  // ---------- TYPING EFFECT ----------
  const typed = $("#typed"); let ri = 0, ci = 0, del = false;
  (function tick() {
    const word = D.roles[ri];
    typed.textContent = word.slice(0, ci);
    if (!del && ci++ === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && ci-- === 0) { del = false; ri = (ri + 1) % D.roles.length; ci = 0; }
    setTimeout(tick, del ? 45 : 90);
  })();

  // ---------- THEME ----------
  const root = document.documentElement;
  let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
  root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  $("#themeToggle").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  };

  // ---------- MOBILE MENU ----------
  const links = $("#navLinks");
  $("#menuBtn").onclick = () => links.classList.toggle("open");
  links.addEventListener("click", () => links.classList.remove("open"));

  // ---------- COPY EMAIL ----------
  $("#copyBtn").onclick = async () => {
    try { await navigator.clipboard.writeText(D.email); } catch (e) {}
    const t = $("#toast"); t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1800);
  };

  // ---------- SCROLL: progress, nav, active link ----------
  const nav = $(".nav"), bar = $(".progress");
  const sections = [...document.querySelectorAll("main section")];
  const navAs = [...links.querySelectorAll("a")];
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    nav.classList.toggle("scrolled", scrollY > 20);
    let cur = "";
    sections.forEach((s) => { if (scrollY >= s.offsetTop - 160) cur = s.id; });
    navAs.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // ---------- REVEAL ON SCROLL ----------
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- COUNT-UP STATS ----------
  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const raw = e.target.dataset.count, n = parseInt(raw, 10), suf = raw.replace(/^\d+/, "");
    if (isNaN(n)) return; let k = 0; const step = Math.max(1, Math.ceil(n / 40));
    const iv = setInterval(() => { k = Math.min(n, k + step); e.target.textContent = k + suf; if (k >= n) clearInterval(iv); }, 30);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  // ---------- CURSOR GLOW + 3D TILT (desktop only) ----------
  if (matchMedia("(hover: hover)").matches) {
    const glow = $(".cursor-glow");
    addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });
    document.querySelectorAll(".project").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }
})();
