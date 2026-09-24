(function () {
    const loader = document.getElementById("page-loader");
    if (!loader) return;

    let progress = 0;
    const trickle = setInterval(() => {
        // Ease toward 90%: quick at first, slower as it approaches the cap,
        // so the bar never looks "stuck" while still waiting for real load.
        progress += (90 - progress) * 0.1;
        loader.style.width = progress + "%";
    }, 200);

    const finish = () => {
        clearInterval(trickle);
        loader.style.width = "100%";
        loader.classList.add("loader-done");
        setTimeout(() => loader.remove(), 700);
    };

    if (document.readyState === "complete") {
        finish();
    } else {
        window.addEventListener("load", finish);
    }
})();
