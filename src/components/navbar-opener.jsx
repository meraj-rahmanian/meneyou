import React, { useEffect, useState } from "react";

const ITEMS = [
  {
    id: 1,
    label: "home",
    type: "link",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
  },
  {
    id: 2,
    label: "project",
    type: "link",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    ),
  },
  {
    id: 3,
    label: "calculator",
    type: "calc",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
      />
    ),
  },
  {
    id: 4,
    label: "setting",
    type: "setting",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </>
    ),
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleAction = (e, item) => {
    setActiveItem(item.id);
    if (item.type === "calc") {
      e.preventDefault();
      document.dispatchEvent(new CustomEvent("openCalculator"));
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCount = () => {
    if (windowWidth > 1024) return 4;
    if (windowWidth > 768) return 3;
    if (windowWidth > 640) return 2;
    return 0;
  };

  const visibleCount = getVisibleCount();
  const outerItems = ITEMS.slice(0, visibleCount);
  const drawerItems = ITEMS.slice(visibleCount);

  return (
    <div className="animate-fade-up fixed top-0 left-0 w-full flex justify-between items-center p-3 z-50 navar">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6 block">
          <defs>
            <linearGradient id="mGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34F5F8" />
              <stop offset="100%" stopColor="#09C8D5" />
            </linearGradient>
          </defs>
          <path
            d="M20 80 V22 L50 55 L80 22 V80"
            fill="none"
            stroke="url(#mGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-Inter font-medium text-lg text-white leading-none">
          MeneYou
        </span>
      </div>

      {/* نکته: "relative" از این دیو حذف شد تا containing block اشتباه نشه
          و کشوی absolute نسبت به کل هدر (که fixed و در نتیجه positioned هست)
          محاسبه بشه، نه نسبت به این باکس کوچیک دور آیکون‌ها. */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {outerItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleAction(e, item)}
              className={`p-2 rounded-xl transition ${
                activeItem === item.id ? "items_on bg-white/10" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                {item.icon}
              </svg>
            </button>
          ))}
        </div>

        {drawerItems.length > 0 && (
          <button
            onClick={toggleMenu}
            className={`flex w-10 h-10 justify-center items-center cursor-pointer ${
              menuOpen ? "items_on" : ""
            }`}
            id="Bars"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-7 bars ${menuOpen ? "menuOn text-black" : "text-white"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}

        {drawerItems.length > 0 && (
          <nav
            className={`absolute top-full right-3 margin-top mt-6 navbar flex flex-col justify-between gap-11 w-10 h-80 items-center ${
              menuOpen ? "show" : ""
            }`}
            id="navbar"
          >
            <ul className="flex flex-col h-full justify-between p-3 items-center">
              {drawerItems.map((item, index) => (
                <li
                  key={item.id}
                  style={{ "--item-delay": `${index * 70}ms` }}
                  onClick={(e) => handleAction(e, item)}
                  className={`navitems cursor-pointer ${activeItem === item.id ? "items_on" : ""}`}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-white"
                    >
                      {item.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;