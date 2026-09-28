import { useState } from "react";


function Pricing() {

  // false = monthly
  // true = annual
  const [isAnnual, setIsAnnual] = useState(false);


  const proPrice = isAnnual ? 228 : 19;
  const expertPrice = isAnnual ? 708 : 59;


  return (
    <main className="pt-36 pb-24">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          text-center
          mb-16
        "
      >

        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            border
            border-primary/30

            bg-primary/5

            mb-6
          "
        >

          <span
            className="
              material-symbols-outlined
              text-primary
              text-sm
            "
          >
            payments
          </span>

          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
            "
          >
            Simple & Transparent
          </span>

        </div>


        <h1
          className="
            font-display-lg
            text-display-lg
            text-on-surface

            mb-6

            max-w-4xl
            mx-auto
          "
        >
          Choose the right
          <span className="text-primary">
            {" "}grading power.
          </span>
        </h1>


        <p
          className="
            font-body-md
            text-body-md

            text-on-surface-variant

            max-w-2xl
            mx-auto
          "
        >
          Start free and scale your coffee analysis workflow
          as your requirements grow.
        </p>


        {/* ================================================= */}
        {/* BILLING TOGGLE */}
        {/* ================================================= */}

        <div
          className="
            mt-8

            inline-flex
            items-center
            gap-2

            p-1

            rounded-full

            bg-white/5

            border
            border-white/10
          "
        >

          {/* Monthly */}

          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`
              px-5
              py-2

              rounded-full

              text-sm
              font-medium

              transition-all

              ${
                !isAnnual
                  ? "bg-primary text-on-primary-fixed shadow-lg"
                  : "text-on-surface-variant hover:text-on-surface"
              }
            `}
          >
            Monthly
          </button>


          {/* Annual */}

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`
              px-5
              py-2

              rounded-full

              text-sm
              font-medium

              transition-all

              ${
                isAnnual
                  ? "bg-primary text-on-primary-fixed shadow-lg"
                  : "text-on-surface-variant hover:text-on-surface"
              }
            `}
          >
            Annual
          </button>

        </div>


        <p
          className="
            mt-3

            font-label-sm
            text-label-sm

            text-on-surface-variant
          "
        >
          {isAnnual
            ? "Billed annually"
            : "Billed monthly"
          }
        </p>

      </section>


      {/* ================================================= */}
      {/* PRICING CARDS */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding

          grid
          grid-cols-1
          md:grid-cols-3

          gap-5
        "
      >

        {/* ================================================= */}
        {/* FREE */}
        {/* ================================================= */}

        <PricingCard
          name="Free"
          description="For exploring the BrewGrade platform."
          price="$0"
          period="/month"
          features={[
            "Basic coffee grading",
            "Limited daily analyses",
            "Standard grading results",
            "Basic analysis history",
          ]}
          buttonText="Get Started"
        />


        {/* ================================================= */}
        {/* PRO */}
        {/* ================================================= */}

        <PricingCard
          name="Pro"
          description="For serious coffee analysis and regular workflows."
          price={`$${proPrice}`}
          period={isAnnual ? "/year" : "/month"}
          popular
          features={[
            "Advanced coffee grading",
            "Higher analysis limits",
            "Detailed quality metrics",
            "Full analysis history",
            "Priority processing",
          ]}
          buttonText="Choose Pro"
        />


        {/* ================================================= */}
        {/* EXPERT */}
        {/* ================================================= */}

        <PricingCard
          name="Expert"
          description="For professionals requiring deeper analysis."
          price={`$${expertPrice}`}
          period={isAnnual ? "/year" : "/month"}
          features={[
            "Unlimited coffee grading",
            "Advanced analysis metrics",
            "Detailed grading reports",
            "Extended analysis history",
            "Priority processing",
            "Professional workflow tools",
          ]}
          buttonText="Choose Expert"
        />

      </section>


      {/* ================================================= */}
      {/* ENTERPRISE */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding

          mt-8
        "
      >

        <div
          className="
            glass-card

            rounded-2xl

            p-8
            md:p-10

            border
            border-primary/20

            relative
            overflow-hidden
          "
        >

          {/* Decorative glow */}

          <div
            className="
              absolute
              -top-32
              -right-32

              w-80
              h-80

              rounded-full

              bg-primary/10

              blur-3xl

              pointer-events-none
            "
          />


          <div
            className="
              relative

              flex
              flex-col
              lg:flex-row

              lg:items-center
              lg:justify-between

              gap-8
            "
          >

            {/* Enterprise information */}

            <div className="max-w-2xl">

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-4
                "
              >

                <div
                  className="
                    w-11
                    h-11

                    rounded-full

                    bg-primary/10

                    border
                    border-primary/20

                    flex
                    items-center
                    justify-center
                  "
                >

                  <span className="material-symbols-outlined text-primary">
                    business
                  </span>

                </div>


                <span
                  className="
                    font-label-sm
                    text-label-sm

                    text-primary

                    uppercase
                  "
                >
                  Enterprise
                </span>

              </div>


              <h2
                className="
                  font-headline-lg
                  text-headline-lg

                  text-on-surface

                  mb-3
                "
              >
                Built for coffee businesses at scale.
              </h2>


              <p
                className="
                  text-on-surface-variant

                  leading-7
                "
              >
                Deploy BrewGrade across your organization
                with custom workflows, larger-scale processing,
                integration support, and a plan tailored to
                your operation.
              </p>


              {/* Enterprise features */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2

                  gap-x-8
                  gap-y-3

                  mt-6
                "
              >

                <EnterpriseFeature text="Custom usage limits" />

                <EnterpriseFeature text="Team workflows" />

                <EnterpriseFeature text="API integration" />

                <EnterpriseFeature text="Dedicated support" />

              </div>

            </div>


            {/* Enterprise CTA */}

            <div
              className="
                shrink-0

                flex
                flex-col

                items-start
                lg:items-end

                gap-3
              "
            >

              <div
                className="
                  font-label-sm
                  text-label-sm

                  text-on-surface-variant
                "
              >
                CUSTOM PRICING
              </div>


              <a
                href="mailto:enterprise@obsidianbrew.ai"
                className="
                  flex
                  items-center
                  gap-2

                  px-6
                  py-3

                  rounded-full

                  border
                  border-primary/40

                  text-primary

                  font-label-sm
                  text-label-sm

                  hover:bg-primary/10

                  transition-all
                "
              >

                Contact Sales

                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* SMALL NOTE */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding

          mt-8

          text-center
        "
      >

        <p
          className="
            text-xs
            text-on-surface-variant
          "
        >
          All plans can be upgraded or changed as your
          requirements evolve.
        </p>

      </section>

    </main>
  );
}


/* ========================================================= */
/* PRICING CARD */
/* ========================================================= */

function PricingCard({
  name,
  description,
  price,
  period,
  features,
  buttonText,
  popular = false,
}) {

  return (
    <div
      className={`
        glass-card

        rounded-2xl

        p-7

        flex
        flex-col

        relative

        ${
          popular
            ? "border-primary/50 shadow-[0_0_35px_rgba(161,209,185,0.08)]"
            : ""
        }
      `}
    >

      {/* Popular badge */}

      {popular && (

        <div
          className="
            absolute

            top-5
            right-5

            px-3
            py-1

            rounded-full

            bg-primary/10

            border
            border-primary/20

            font-label-sm
            text-label-sm

            text-primary
          "
        >
          MOST POPULAR
        </div>

      )}


      {/* Plan name */}

      <div
        className="
          font-label-sm
          text-label-sm

          text-primary

          uppercase
        "
      >
        {name}
      </div>


      <h2
        className="
          text-2xl

          text-on-surface

          font-medium

          mt-3
        "
      >
        {name}
      </h2>


      <p
        className="
          text-sm
          leading-6

          text-on-surface-variant

          mt-2

          min-h-[48px]
        "
      >
        {description}
      </p>


      {/* Price */}

      <div
        className="
          flex
          items-baseline
          gap-1

          mt-8
          mb-8
        "
      >

        <span
          className="
            text-5xl

            font-light

            tracking-tight

            text-on-surface
          "
        >
          {price}
        </span>


        <span
          className="
            text-sm

            text-on-surface-variant
          "
        >
          {period}
        </span>

      </div>


      {/* CTA */}

      <button
        type="button"
        className={`
          w-full

          py-3

          rounded-full

          font-label-sm
          text-label-sm

          transition-all

          ${
            popular
              ? `
                bg-primary
                text-on-primary-fixed

                hover:brightness-110

                glow-primary
              `
              : `
                border
                border-white/15

                text-on-surface

                hover:border-primary/40
                hover:text-primary
              `
          }
        `}
      >
        {buttonText}
      </button>


      {/* Divider */}

      <div
        className="
          h-px

          bg-white/10

          my-7
        "
      />


      {/* Features */}

      <div className="space-y-4">

        <p
          className="
            font-label-sm
            text-label-sm

            text-on-surface-variant

            uppercase
          "
        >
          Includes
        </p>


        {features.map((feature) => (

          <div
            key={feature}

            className="
              flex
              items-start
              gap-3
            "
          >

            <span
              className="
                material-symbols-outlined

                text-primary

                text-[18px]
              "
            >
              check
            </span>


            <span
              className="
                text-sm

                text-on-surface-variant
              "
            >
              {feature}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}


/* ========================================================= */
/* ENTERPRISE FEATURE */
/* ========================================================= */

function EnterpriseFeature({
  text,
}) {

  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >

      <span
        className="
          material-symbols-outlined

          text-primary

          text-[18px]
        "
      >
        check_circle
      </span>


      <span
        className="
          text-sm

          text-on-surface-variant
        "
      >
        {text}
      </span>

    </div>
  );
}


export default Pricing;