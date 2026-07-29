document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("header nav ul li a");

  const setActiveNav = (id) => {
    navItems.forEach((item) => {
      const targetId = item.getAttribute("href")?.substring(1).replace(/\/$/, "");
      if (targetId === id) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  const callback = (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (visible.length > 0) {
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActiveNav(visible[0].target.id);
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px -30% 0px",
    threshold: 0.2,
  });

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });

  const initialHash = window.location.hash;
  if (initialHash) {
    const targetId = initialHash.substring(1).replace(/\/$/, "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveNav(targetId);
      }, 100);
    }
  }

  document.onvisibilitychange = () => {
    if (document.visibilityState === "hidden") {
      observer.disconnect();
    } else {
      sections.forEach((section) => {
        if (section.id) observer.observe(section);
      });
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      navbar?.classList.add("nav-scrolled");
    } else {
      navbar?.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
