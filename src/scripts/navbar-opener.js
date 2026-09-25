const nav = document.querySelector("#navbar");
const bars = document.querySelector("#Bars");
const items = document.querySelectorAll(".navitems");

let menuOpen = false;

// تنظیم انیمیشن Stagger برای آیتم‌ها
items.forEach((item, index) => {
    item.style.setProperty(
        "--item-delay",
        `${index * 70}ms`
    );
});

// باز و بسته کردن Navbar
if (bars && nav) {
    bars.addEventListener("click", () => {
        if (menuOpen) {
            nav.classList.remove("show");
            bars.classList.remove("menuOn");
            items.forEach(item => {
                item.classList.remove("items_on");
            });
            menuOpen = false;
        } else {
            nav.classList.add("show");
            bars.classList.add("menuOn");
            menuOpen = true;
        }
    });
}

// انتخاب آیتم Navbar
items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => {
            i.classList.remove("items_on");
        });
        item.classList.add("items_on");
    });
});

// باز کردن ماشین حساب
const calculatorOpener = document.querySelector("#calculator_opener");
if (calculatorOpener) {
    calculatorOpener.addEventListener("click", () => {
        document.dispatchEvent(
            new CustomEvent("openCalculator")
        );
    });
}