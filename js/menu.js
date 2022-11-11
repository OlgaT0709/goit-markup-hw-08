(() => {
  const mobileMenu = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
    mobileMenu.addEventListener("click", () => {
        const expanded = mobileMenu.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.classList.toggle("button__menu--is-open");
        mobileMenu.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("menu--is-open");
    
    
  
  });
})();