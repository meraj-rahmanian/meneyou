// "bottom_click" animation: a soft teal fill rises from the bottom of the
// element on click, then fades back out. Applied to every <button> and to
// the menu (nav) items.
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll("button, .navitems a");

    targets.forEach(el => {
        el.classList.add("bottom_click");
        let resetTimeout;
        let cleanupTimeout;

        el.addEventListener("click", () => {
            clearTimeout(resetTimeout);
            clearTimeout(cleanupTimeout);

            el.classList.remove("clicked-out");
            // Force reflow so the animation restarts on rapid re-clicks
            void el.offsetWidth;
            el.classList.add("clicked");

            resetTimeout = setTimeout(() => {
                el.classList.remove("clicked");
                el.classList.add("clicked-out");

                cleanupTimeout = setTimeout(() => {
                    el.classList.remove("clicked-out");
                }, 400);
            }, 260);
        });
    });
});
