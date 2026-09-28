import { Link } from "react-router";


function Footer() {

  return (

    <footer
      className="
        site-footer

        w-full

        mt-20

        px-6
        md:px-10

        py-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          flex
          flex-col

          md:flex-row

          justify-between
          items-center

          gap-8
        "
      >

        {/* ================================================= */}
        {/* BRAND */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center

            gap-4

            text-center
            md:text-left
          "
        >

          <span
            className="
              font-headline-lg
              text-headline-lg

              text-[#4B2E2B]

              font-light
            "
          >
            BrewGrade
          </span>

        </div>


        {/* ================================================= */}
        {/* FOOTER LINKS */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-x-8
            gap-y-4
          "
        >

          {/* PRIVACY */}

          <Link
            to="/privacy"
            className="
              font-label-sm
              text-label-sm

              text-[#6F5145]

              opacity-80

              transition-colors
              duration-200

              hover:text-[#C08552]
              hover:opacity-100
            "
          >
            Privacy Policy
          </Link>


          {/* TERMS */}

          <Link
            to="/terms"
            className="
              font-label-sm
              text-label-sm

              text-[#6F5145]

              opacity-80

              transition-colors
              duration-200

              hover:text-[#C08552]
              hover:opacity-100
            "
          >
            Terms of Service
          </Link>


          {/* API */}

          <Link
            to="/api"
            className="
              font-label-sm
              text-label-sm

              text-[#6F5145]

              opacity-80

              transition-colors
              duration-200

              hover:text-[#C08552]
              hover:opacity-100
            "
          >
            API Documentation
          </Link>


          {/* CONTACT */}

          <Link
            to="/contact"
            className="
              font-label-sm
              text-label-sm

              text-[#6F5145]

              opacity-80

              transition-colors
              duration-200

              hover:text-[#C08552]
              hover:opacity-100
            "
          >
            Contact
          </Link>

        </div>


        {/* ================================================= */}
        {/* STATUS */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col

            items-center
            md:items-end

            gap-2
          "
        >

          {/* API STATUS */}

          <div
            className="
              flex
              items-center

              gap-2
            "
          >

            <div
              className="
                w-2
                h-2

                rounded-full

                bg-[#C08552]

                glow-primary

                animate-pulse
              "
            />


            <span
              className="
                font-label-sm
                text-label-sm

                text-[#6F5145]
              "
            >
              API: Operational
            </span>

          </div>


          {/* COPYRIGHT */}

          <p
            className="
              font-label-sm
              text-label-sm

              text-[#6F5145]/70

              text-center
              md:text-right

              m-0
            "
          >
            © 2025 BrewGrade AI.
            Technical Precision in Every Bean.
          </p>

        </div>

      </div>

    </footer>

  );

}


export default Footer;