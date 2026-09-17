(() => {
  const LOGO_URL = "https://raw.githubusercontent.com/wissammantoufeh-jpg/wissam-portfolio/main/assets/LogoWebsite.png";

  const LINKS = [
    { label: "About", href: "about.html", key: "about" },
    { label: "Services", href: "index.html#services", key: "services" },
    { label: "Work", href: "index.html#work", key: "work" }
  ];

  function currentPageKey() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("about")) return "about";
    if (path.includes("project")) return "work";
    if (window.location.hash === "#services") return "services";
    if (window.location.hash === "#work") return "work";
    return "";
  }

  function openContact(event) {
    if (event) event.preventDefault();

    const directOpeners = document.querySelectorAll(
      ".js-open-contact, [data-contact-open], .open-contact, #openContact, #openContactBtn"
    );

    for (const opener of directOpeners) {
      if (opener !== event?.currentTarget) {
        try {
          opener.click();
          return;
        } catch (_) {}
      }
    }

    const sheet = document.getElementById("contactSheet") ||
      document.querySelector(".contact-sheet, .contact-modal, .contact-popup, [data-contact-modal]");

    if (sheet) {
      sheet.classList.add("is-open", "open", "active");
      sheet.setAttribute("aria-hidden", "false");
      document.body.classList.add("lock", "contact-open", "modal-open", "sheet-open");
      return;
    }

    window.location.href = "index.html#contact";
  }

  function closeMenu(nav) {
    nav.classList.remove("is-open");
    document.body.classList.remove("wd-menu-open");
    const toggle = nav.querySelector(".wd-site-nav__toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function buildNav() {
    document.querySelectorAll(".wd-site-nav").forEach((el) => el.remove());

    const active = currentPageKey();
    const linkHTML = LINKS.map((link) => `
      <a class="wd-site-nav__link ${active === link.key ? "is-active" : ""}" href="${link.href}">${link.label}</a>
    `).join("");

    const html = `
      <header class="wd-site-nav" data-wd-shared-nav>
        <div class="wd-site-nav__inner">
          <a class="wd-site-nav__logo" href="index.html" aria-label="Wissam Designs home">
            <img src="${LOGO_URL}" alt="Wissam Designs" />
          </a>

          <nav class="wd-site-nav__desktop" aria-label="Primary navigation">
            ${linkHTML}
            <button class="wd-site-nav__button" type="button" data-wd-open-contact>Contact</button>
          </nav>

          <button class="wd-site-nav__toggle" type="button" aria-label="Open menu" aria-expanded="false">
            <span></span>
          </button>

          <div class="wd-site-nav__mobile" aria-hidden="true">
            <nav class="wd-site-nav__mobile-links" aria-label="Mobile navigation">
              ${linkHTML}
              <button class="wd-site-nav__button" type="button" data-wd-open-contact>Contact</button>
            </nav>
          </div>
        </div>
      </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", html);

    const nav = document.querySelector(".wd-site-nav");
    const toggle = nav.querySelector(".wd-site-nav__toggle");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("wd-menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMenu(nav));
    });

    nav.querySelectorAll("[data-wd-open-contact]").forEach((button) => {
      button.addEventListener("click", (event) => {
        closeMenu(nav);
        openContact(event);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu(nav);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildNav);
  } else {
    buildNav();
  }
})();
