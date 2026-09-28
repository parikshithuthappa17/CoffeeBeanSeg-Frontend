import { Link, NavLink, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";


function Navbar() {

  const location = useLocation();

  const navRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });


  /* =====================================================
     DESKTOP ACTIVE INDICATOR
     ===================================================== */

  const updateIndicator = (element) => {

    if (!element || !navRef.current) {
      return;
    }

    const navRect =
      navRef.current.getBoundingClientRect();

    const itemRect =
      element.getBoundingClientRect();

    setIndicator({

      left:
        itemRect.left -
        navRect.left +
        itemRect.width / 2 -
        24,

      width: 48,

      visible: true,

    });

  };


  /* =====================================================
     UPDATE INDICATOR WHEN ROUTE CHANGES
     ===================================================== */

  useEffect(() => {

    const activeItem =
      navRef.current?.querySelector(
        '[aria-current="page"]'
      );

    if (activeItem) {
      updateIndicator(activeItem);
    }

  }, [location.pathname]);


  /* =====================================================
     CLOSE MOBILE MENU WHEN PAGE CHANGES
     ===================================================== */

  useEffect(() => {

    setMobileMenuOpen(false);

  }, [location.pathname]);


  /* =====================================================
     MOBILE MENU TOGGLE
     ===================================================== */

  const toggleMobileMenu = () => {

    setMobileMenuOpen(
      (previous) => !previous
    );

  };


  return (

    <nav
      className="
        site-navbar

        fixed
        top-4
        md:top-6

        left-1/2

        -translate-x-1/2

        z-50

        w-[calc(100%-24px)]
        md:w-[min(920px,calc(100%-32px))]

        rounded-2xl
        md:rounded-full

        px-4
        py-3
        md:py-2
      "
    >

      {/* =================================================
          TOP BAR
          ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between

          w-full
        "
      >

        {/* =================================================
            LOGO
            ================================================= */}

        <Link
          to="/"
          className="
            flex
            items-center

            gap-2
            md:gap-3

            shrink-0
          "
        >

          {/* YOUR LOGO */}

          <img
            src="/Logo.png"
            alt="BrewGrade"
            className="
              w-9
              h-9

              md:w-10
              md:h-10

              object-contain
            "
          />


          {/* BRAND NAME */}

          <span
            className="
              text-[17px]
              md:text-[18px]

              leading-none

              font-light

              tracking-tight

              text-[#4B2E2B]

              whitespace-nowrap
            "
          >
            BrewGrade
          </span>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <div
          ref={navRef}
          className="
            relative

            hidden
            md:flex

            items-center

            gap-7

            mx-6
          "
        >

          {/* SLIDING INDICATOR */}

          <span
            className="
              nav-sliding-indicator
            "
            style={{
              left: `${indicator.left}px`,
              width: `${indicator.width}px`,
              opacity:
                indicator.visible ? 1 : 0,
            }}
          />


          {/* PLATFORM */}

          <NavLink
            to="/"
            end

            onClick={(event) => {
              updateIndicator(
                event.currentTarget
              );
            }}

            className={({ isActive }) => `
              nav-link

              relative

              py-2

              text-sm
              font-medium

              whitespace-nowrap

              ${
                isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            `}
          >
            Platform
          </NavLink>


          {/* GRADING */}

          <NavLink
            to="/grading"

            onClick={(event) => {
              updateIndicator(
                event.currentTarget
              );
            }}

            className={({ isActive }) => `
              nav-link

              relative

              py-2

              text-sm
              font-medium

              whitespace-nowrap

              ${
                isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            `}
          >
            Grading
          </NavLink>


          {/* TECHNOLOGY */}

          <NavLink
            to="/technology"

            onClick={(event) => {
              updateIndicator(
                event.currentTarget
              );
            }}

            className={({ isActive }) => `
              nav-link

              relative

              py-2

              text-sm
              font-medium

              whitespace-nowrap

              ${
                isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            `}
          >
            Technology
          </NavLink>


          {/* PRICING */}

          <NavLink
            to="/pricing"

            onClick={(event) => {
              updateIndicator(
                event.currentTarget
              );
            }}

            className={({ isActive }) => `
              nav-link

              relative

              py-2

              text-sm
              font-medium

              whitespace-nowrap

              ${
                isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            `}
          >
            Pricing
          </NavLink>

        </div>


        {/* =================================================
            DESKTOP AUTH
            ================================================= */}

        <div
          className="
            hidden
            md:flex

            items-center

            gap-2

            shrink-0
          "
        >

          <Link
            to="/login"
            className="
              px-3
              py-2

              rounded-full

              text-sm

              font-label-sm
              text-label-sm

              text-[#6F5145]

              transition-colors
              duration-200

              hover:text-[#C08552]
            "
          >
            Log In
          </Link>


          <Link
            to="/signup"
            className="
              px-5
              py-2

              rounded-full

              bg-glass-primary

              text-[#FFF8F0]

              font-label-sm
              text-label-sm

              whitespace-nowrap

              glow-primary

              transition-all
              duration-200

              hover:brightness-105

              active:scale-[0.97]
            "
          >
            Get Started
          </Link>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <button
          type="button"

          onClick={toggleMobileMenu}

          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }

          aria-expanded={
            mobileMenuOpen
          }

          className="
            md:hidden

            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-full

            text-[#4B2E2B]

            border
            border-[#4B2E2B]/10

            bg-[#4B2E2B]/5

            transition-colors
            duration-200

            hover:bg-[#C08552]/10

            active:scale-95
          "
        >

          <span
            className="
              text-xl

              leading-none

              select-none
            "
          >
            {mobileMenuOpen ? "×" : "☰"}
          </span>

        </button>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
          ================================================= */}

      <div
        className={`
          md:hidden

          overflow-hidden

          transition-all
          duration-300
          ease-out

          ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }
        `}
      >

        <div
          className="
            pt-3

            border-t
            border-[#4B2E2B]/10
          "
        >

          {/* PLATFORM */}

          <NavLink
            to="/"
            end

            className={({ isActive }) => `
              mobile-nav-link

              ${
                isActive
                  ? "mobile-nav-link-active"
                  : ""
              }
            `}
          >
            <span>
              Platform
            </span>

            {isActiveForRoute(
              location.pathname,
              "/"
            ) && (
              <span className="mobile-active-bar" />
            )}

          </NavLink>


          {/* GRADING */}

          <NavLink
            to="/grading"

            className={({ isActive }) => `
              mobile-nav-link

              ${
                isActive
                  ? "mobile-nav-link-active"
                  : ""
              }
            `}
          >
            <span>
              Grading
            </span>

            {location.pathname === "/grading" && (
              <span className="mobile-active-bar" />
            )}

          </NavLink>


          {/* TECHNOLOGY */}

          <NavLink
            to="/technology"

            className={({ isActive }) => `
              mobile-nav-link

              ${
                isActive
                  ? "mobile-nav-link-active"
                  : ""
              }
            `}
          >
            <span>
              Technology
            </span>

            {location.pathname === "/technology" && (
              <span className="mobile-active-bar" />
            )}

          </NavLink>


          {/* PRICING */}

          <NavLink
            to="/pricing"

            className={({ isActive }) => `
              mobile-nav-link

              ${
                isActive
                  ? "mobile-nav-link-active"
                  : ""
              }
            `}
          >
            <span>
              Pricing
            </span>

            {location.pathname === "/pricing" && (
              <span className="mobile-active-bar" />
            )}

          </NavLink>


          {/* MOBILE AUTH */}

          <div
            className="
              flex
              flex-col

              gap-2

              mt-4
              pt-4

              border-t
              border-[#4B2E2B]/10
            "
          >

            {/* LOGIN */}

            <Link
              to="/login"

              className="
                mobile-auth-link
              "
            >
              Log In
            </Link>


            {/* GET STARTED */}

            <Link
              to="/signup"

              className="
                mobile-get-started
              "
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>

    </nav>

  );

}


/* =========================================================
   HELPER
   ========================================================= */

function isActiveForRoute(
  pathname,
  route
) {

  if (route === "/") {
    return pathname === "/";
  }

  return pathname === route;

}


export default Navbar;