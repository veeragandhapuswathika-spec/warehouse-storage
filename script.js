document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // DARK MODE
    // =========================
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            themeBtn.textContent = isDark ? "☀" : "☾";

        });
    }


    // =========================
    // RTL / LTR
    // =========================
    const rtlBtn = document.getElementById("rtlBtn");

    if (rtlBtn) {
        rtlBtn.addEventListener("click", function () {

            const isRTL =
                document.documentElement.dir === "rtl";

            document.documentElement.dir =
                isRTL ? "ltr" : "rtl";

        });
    }


    // =========================
    // MOBILE MENU
    // =========================
    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mainNav =
        document.getElementById("mainNav");

    if (mobileMenuBtn && mainNav) {

        mobileMenuBtn.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("mobile-open");

            mobileMenuBtn.textContent =
                isOpen ? "✕" : "☰";

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    }


    // =========================
    // HOME DROPDOWN
    // HOME 1 / HOME 2
    // =========================
    document.querySelectorAll(".home-dropdown").forEach(
        function (dropdown) {

            // Select the direct Home link
            const homeLink =
                dropdown.querySelector(":scope > a");

            if (!homeLink) return;

            homeLink.setAttribute("aria-expanded", "false");

            homeLink.addEventListener("click", function (event) {

                // Mobile and tablet dropdown
                if (window.innerWidth <= 1100) {

                    event.preventDefault();

                    const isOpen =
                        dropdown.classList.toggle("dropdown-open");

                    homeLink.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                }

            });

        }
    );


    // =========================
    // CLOSE MOBILE MENU WHEN
    // CLICKING A NORMAL NAV LINK
    // =========================
    if (mainNav && mobileMenuBtn) {

        mainNav.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener("click", function () {

                    // Keep the mobile menu open when
                    // tapping Home to expand its dropdown.
                    const homeDropdown =
                        link.closest(".home-dropdown");

                    const isHomeParent =
                        homeDropdown &&
                        link.parentElement === homeDropdown;

                    if (
                        window.innerWidth <= 1100 &&
                        !isHomeParent
                    ) {

                        mainNav.classList.remove("mobile-open");

                        mobileMenuBtn.textContent = "☰";

                        mobileMenuBtn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });

            }
        );

    }

});