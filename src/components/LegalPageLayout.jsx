function LegalPageLayout({
  eyebrow,
  title,
  description,
  updated,
  children,
}) {
  return (
    <main className="pt-36 pb-24">

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
        "
      >

        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div className="max-w-4xl mb-16">

          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
            "
          >
            {eyebrow}
          </span>


          <h1
            className="
              font-display-lg
              text-display-lg
              text-on-surface
              mt-4
              mb-6
            "
          >
            {title}
          </h1>


          <p
            className="
              text-body-md
              text-body-md
              text-on-surface-variant
              max-w-3xl
            "
          >
            {description}
          </p>


          {updated && (
            <p
              className="
                font-label-sm
                text-label-sm
                text-on-surface-variant
                mt-5
              "
            >
              Last updated: {updated}
            </p>
          )}

        </div>


        {/* ============================= */}
        {/* CONTENT */}
        {/* ============================= */}

        <div
          className="
            max-w-4xl
            space-y-12
          "
        >
          {children}
        </div>

      </section>

    </main>
  );
}


export function LegalSection({
  number,
  title,
  children,
}) {
  return (
    <section>

      <div className="flex items-start gap-4 mb-4">

        {number && (
          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              pt-1
              shrink-0
            "
          >
            {number}
          </span>
        )}


        <h2
          className="
            text-2xl
            md:text-3xl
            font-light
            text-on-surface
          "
        >
          {title}
        </h2>

      </div>


      <div
        className="
          pl-0
          md:pl-12

          text-on-surface-variant

          leading-7

          space-y-4
        "
      >
        {children}
      </div>

    </section>
  );
}


export function InfoCard({
  icon,
  title,
  children,
}) {
  return (
    <div
      className="
        glass-panel
        rounded-xl
        p-6
      "
    >

      <div className="flex items-center gap-3 mb-3">

        <span className="material-symbols-outlined text-primary">
          {icon}
        </span>

        <h3 className="text-on-surface font-medium">
          {title}
        </h3>

      </div>

      <div className="text-sm leading-6">
        {children}
      </div>

    </div>
  );
}


export default LegalPageLayout;