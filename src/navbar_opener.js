const nav = document.querySelector("#navbar");
const bars = document.querySelector("#Bars");
const items = document.querySelectorAll(".navitems");

let menuOpen = false;


// ==========================================
// تنظیم انیمیشن Stagger برای آیتم‌ها
// ==========================================

items.forEach((item, index) => {
    item.style.setProperty(
        "--item-delay",
        `${index * 70}ms`
    );
});


// ==========================================
// باز و بسته کردن Navbar
// ==========================================

bars.addEventListener("click", () => {

    if (menuOpen) {

        // بستن Navbar
        nav.classList.remove("show");

        // تغییر وضعیت آیکون Menu
        bars.classList.remove("menuOn");

        // حذف حالت انتخاب‌شده آیتم‌ها
        items.forEach(item => {
            item.classList.remove("items_on");
        });

        menuOpen = false;

    } else {

        // باز کردن Navbar
        nav.classList.add("show");

        // تغییر وضعیت آیکون Menu
        bars.classList.add("menuOn");

        menuOpen = true;
    }

});


// ==========================================
// انتخاب آیتم Navbar
// ==========================================

items.forEach(item => {

    item.addEventListener("click", () => {

        // حذف انتخاب قبلی
        items.forEach(i => {
            i.classList.remove("items_on");
        });

        // انتخاب آیتم فعلی
        item.classList.add("items_on");

    });

});

const calculatorOpener = document.querySelector("#calculator_opener");

if (calculatorOpener) {
    calculatorOpener.addEventListener("click", () => {
        document.dispatchEvent(
            new CustomEvent("openCalculator")
        );
    });
}