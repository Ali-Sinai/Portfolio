(function () {
  const STORAGE_LANG = "portfolio-lang";
  const STORAGE_THEME = "portfolio-theme";

  const root = document.documentElement;
  const langToggle = document.getElementById("langToggle");
  const langToggleLabel = document.getElementById("langToggleLabel");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");

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
      a.innerHTML = `<span aria-hidden="true">${c.icon || ""}</span><span>${localized(c.label, lang)}: ${c.value}</span>`;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function setTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeIcon.textContent = "☀️";
    } else {
      root.setAttribute("data-theme", "dark");
      themeIcon.textContent = "🌙";
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
