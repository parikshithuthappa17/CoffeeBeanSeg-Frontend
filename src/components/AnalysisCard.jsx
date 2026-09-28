function AnalysisCard({
  number,
  icon,
  title,
  description,
  accuracy,
  inference,
}) {
  return (
    <div
      className="
        glass-card
        rounded-xl
        p-8
        flex
        flex-col
        gap-6
        group
        hover:-translate-y-1
      "
    >

      {/* Header */}

      <div className="
        flex
        justify-between
        items-start
      ">

        <div
          className="
            w-12
            h-12
            rounded-full
            glass-panel
            flex
            items-center
            justify-center
            glow-primary
          "
        >

          <span
            className="
              material-symbols-outlined
              text-primary
            "
          >
            {icon}
          </span>

        </div>


        <span
          className="
            font-label-sm
            text-label-sm
            text-on-surface-variant
            opacity-50
          "
        >
          {number}
        </span>

      </div>


      {/* Content */}

      <div>

        <h3
          className="
            font-headline-lg-mobile
            text-headline-lg-mobile
            text-on-surface
            mb-2
          "
        >
          {title}
        </h3>


        <p
          className="
            text-on-surface-variant
            text-sm
          "
        >
          {description}
        </p>

      </div>


      {/* Accuracy */}

      {accuracy && (
        <div
          className="
            mt-auto
            pt-4
            border-t
            border-white/5
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
              font-label-sm
              text-label-sm
              mb-2
            "
          >

            <span className="text-on-surface-variant">
              IoU Accuracy
            </span>


            <span className="text-primary font-bold">
              {accuracy}
            </span>

          </div>


          <div
            className="
              w-full
              h-1
              bg-surface-variant
              rounded-full
              overflow-hidden
            "
          >

            <div
              className="
                h-full
                bg-primary
                w-[98%]
              "
            />

          </div>

        </div>
      )}


      {/* Inference */}

      {inference && (
        <div
          className="
            mt-auto
            pt-4
            border-t
            border-white/5
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
              font-label-sm
              text-label-sm
              mb-2
            "
          >

            <span className="text-on-surface-variant">
              Inference Time
            </span>


            <span className="text-primary font-bold">
              {inference}
            </span>

          </div>


          <div className="progress-bar rounded-full" />

        </div>
      )}

    </div>
  );
}

export default AnalysisCard;