(function () {
  const STORAGE_LANG = "portfolio-lang";
  const STORAGE_THEME = "portfolio-theme";

  const root = document.documentElement;
  const langToggle = document.getElementById("langToggle");
  const langToggleLabel = document.getElementById("langToggleLabel");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");

  // Outline icons — hand-authored inline SVG (stroke = currentColor), no icon-font dependency.
  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.75a2.25 2.25 0 0 1 4.5 0v3.75M12 12.75v3.75"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  };

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getNested(dict, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.innerHTML = value;
    });
  }

  function setLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    root.lang = lang;
    root.dir = dict.dir;
    applyTranslations(lang);
    langToggleLabel.textContent = lang === "en" ? "فا" : "EN";
    localStorage.setItem(STORAGE_LANG, lang);
    renderProjects(lang);
    renderExperience(lang);
    renderLinks(lang);
    renderContact(lang);
  }

  function currentLang() {
    return root.lang === "fa" ? "fa" : "en";
  }

  function localized(field, lang) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] || field.en || "";
  }

  function renderProjects(lang) {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      const h3 = document.createElement("h3");
      h3.textContent = localized(p.title, lang);
      card.appendChild(h3);

      const desc = document.createElement("p");
      desc.textContent = localized(p.description, lang);
      card.appendChild(desc);

      const tags = document.createElement("div");
      tags.className = "project-tags";
      (p.tags || []).forEach((t) => {
        const span = document.createElement("span");
        span.textContent = t;
        tags.appendChild(span);
      });
      card.appendChild(tags);

      if (p.link) {
        const a = document.createElement("a");
        a.className = "project-link";
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = TRANSLATIONS[lang].projects.linkLabel;
        card.appendChild(a);
      }

      grid.appendChild(card);
    });
  }

  function renderExperience(lang) {
    const list = document.getElementById("experienceList");
    list.innerHTML = "";
    EXPERIENCE.forEach((e) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="role">${localized(e.role, lang)}</div>
        <div class="company">${localized(e.company, lang)}</div>
        <div class="dates">${localized(e.dates, lang)}</div>
        <p class="desc">${localized(e.description, lang)}</p>
      `;
      list.appendChild(item);
    });
  }

  function renderLinks(lang) {
    const list = document.getElementById("linksList");
    list.innerHTML = "";
    USEFUL_LINKS.forEach((l) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = localized(l.label, lang);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function renderContact(lang) {
    const list = document.getElementById("contactList");
    list.innerHTML = "";
    CONTACT_LINKS.forEach((c) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = c.href;
      if (c.href && c.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.innerHTML = `<span class="contact-icon" aria-hidden="true">${ICONS[c.icon] || ""}</span><span>${localized(c.label, lang)}: ${c.value}</span>`;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeIcon.innerHTML = ICONS.sun;
    } else {
      root.setAttribute("data-theme", "dark");
      themeIcon.innerHTML = ICONS.moon;
    }
    localStorage.setItem(STORAGE_THEME, theme);
  }

  langToggle.addEventListener("click", () => {
    setLanguage(currentLang() === "en" ? "fa" : "en");
  });

  themeToggle.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });

  const savedLang = localStorage.getItem(STORAGE_LANG);
  const savedTheme = localStorage.getItem(STORAGE_THEME) || "dark";

  setLanguage(savedLang === "fa" ? "fa" : "en");
  setTheme(savedTheme);
})();
