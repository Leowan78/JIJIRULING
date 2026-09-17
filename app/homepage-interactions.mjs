function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function formatBirthDate({ year, month, day }) {
  return [year, month, day].map((value, index) => String(value).padStart(index ? 2 : 4, "0")).join("-");
}

function formatBirthTime({ hour, minute, period }) {
  const hour24 = (hour % 12) + (period === "PM" ? 12 : 0);
  return `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function setupPage() {
  const controller = new AbortController();
  const cleanups = [];
  const listen = (target, event, handler) => target?.addEventListener(event, handler, { signal: controller.signal });
  document.documentElement.classList.add("js");

  const items = document.querySelectorAll("[data-reveal]");



  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    cleanups.push(() => observer.disconnect());
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#primary-navigation");

  listen(navToggle, "click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.documentElement.classList.toggle("nav-open", !expanded);
  });

  listen(navigation, "click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    navToggle?.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("nav-open");
  });

  return () => {
    controller.abort();
    cleanups.forEach((cleanup) => cleanup());
    document.documentElement.classList.remove("js", "nav-open");
  };
}


export { daysInMonth, formatBirthDate, formatBirthTime };
