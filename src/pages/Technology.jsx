function Technology() {
  return (
    <main className="pt-32 pb-24">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div className="max-w-4xl">

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
              memory
            </span>

            <span
              className="
                font-label-sm
                text-label-sm
                text-primary
                uppercase
              "
            >
              Chromato-Textural Engine V2.1
            </span>

          </div>


          <h1
            className="
              font-display-lg
              text-display-lg
              text-on-surface
              mb-6
              max-w-4xl
            "
          >
            The Technology Behind
            <span className="text-primary">
              {" "}Precision Grading.
            </span>
          </h1>


          <p
            className="
              font-body-md
              text-body-md
              text-on-surface-variant
              max-w-3xl
            "
          >
            BrewGrade combines computer vision, handcrafted
            chromato-textural analysis, chaotic feature optimization,
            and gradient-boosted classification into a modular
            grading pipeline for unroasted Robusta coffee beans.
          </p>

        </div>

      </section>


      {/* ================================================= */}
      {/* PIPELINE */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div className="mb-10">

          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
            "
          >
            01 / System Architecture
          </span>


          <h2
            className="
              font-headline-lg
              text-headline-lg
              text-on-surface
              mt-3
            "
          >
            From Bean Image to Grade
          </h2>

        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >

          {/* Stage 01 */}

          <PipelineCard
            number="01"
            icon="photo_camera"
            title="Image Input"
            description="A high-resolution image containing a single unroasted Robusta coffee bean is supplied to the pipeline."
          />


          {/* Stage 02 */}

          <PipelineCard
            number="02"
            icon="center_focus_strong"
            title="ROI Segmentation"
            description="YOLOv11m-seg isolates the coffee bean from the background and produces a standardized region of interest."
          />


          {/* Stage 03 */}

          <PipelineCard
            number="03"
            icon="hub"
            title="Feature Profiling"
            description="Color, texture, frequency and morphological descriptors are fused into a 48-dimensional representation."
          />


          {/* Stage 04 */}

          <PipelineCard
            number="04"
            icon="analytics"
            title="Classification"
            description="CGO selects the most discriminative features before an Optuna-tuned XGBoost classifier predicts the bean grade."
          />

        </div>

      </section>


      {/* ================================================= */}
      {/* ROI SEGMENTATION */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div
          className="
            glass-card
            rounded-2xl
            p-8
            md:p-12
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              items-center
            "
          >

            <div>

              <span
                className="
                  font-label-sm
                  text-label-sm
                  text-primary
                  uppercase
                "
              >
                02 / Bean-Finder
              </span>


              <h2
                className="
                  font-headline-lg
                  text-headline-lg
                  text-on-surface
                  mt-3
                  mb-5
                "
              >
                YOLOv11m-seg
              </h2>


              <p
                className="
                  font-body-md
                  text-body-md
                  text-on-surface-variant
                  mb-6
                "
              >
                The first stage of the pipeline is dedicated to
                localization rather than grading. The model treats
                segmentation as a class-agnostic problem and merges
                grade-specific annotations into a single coffee class.
              </p>


              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                "
              >

                <Metric
                  value="0.995"
                  label="mAP@50"
                />

                <Metric
                  value="0.969"
                  label="mAP@50–95"
                />

                <Metric
                  value="0.998"
                  label="Box Precision"
                />

                <Metric
                  value="12 ms"
                  label="Inference"
                />

              </div>

            </div>


            {/* Visual Pipeline */}

            <div
              className="
                rounded-xl
                bg-black/20
                border
                border-white/10
                p-6
              "
            >

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-4
                "
              >

                <StageVisual
                  icon="photo_camera"
                  label="RAW IMAGE"
                />

                <span
                  className="
                    material-symbols-outlined
                    text-primary
                  "
                >
                  arrow_downward
                </span>

                <StageVisual
                  icon="crop_free"
                  label="SEGMENTATION"
                />

                <span
                  className="
                    material-symbols-outlined
                    text-primary
                  "
                >
                  arrow_downward
                </span>

                <StageVisual
                  icon="center_focus_strong"
                  label="ISOLATED ROI"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* FEATURE EXTRACTION */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div className="mb-10">

          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
            "
          >
            03 / Chromato-Textural Profiling
          </span>


          <h2
            className="
              font-headline-lg
              text-headline-lg
              text-on-surface
              mt-3
              mb-4
            "
          >
            48 Dimensions. Four Visual Domains.
          </h2>


          <p
            className="
              text-on-surface-variant
              max-w-3xl
            "
          >
            Each segmented bean is converted into a unified
            48-dimensional representation combining chromatic,
            textural, frequency and shape information.
          </p>

        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >

          <FeatureCard
            icon="palette"
            title="CIELAB Color"
            dimension="06"
            description="Mean and standard deviation across the L, a and b channels."
          />

          <FeatureCard
            icon="texture"
            title="LBP Texture"
            dimension="10"
            description="Uniform Local Binary Patterns capture surface micro-texture and roughness."
          />

          <FeatureCard
            icon="grid_3x3"
            title="GLCM"
            dimension="06"
            description="Contrast, dissimilarity, homogeneity, energy, correlation and ASM."
          />

          <FeatureCard
            icon="waves"
            title="Gabor Filters"
            dimension="08"
            description="Mean and variance responses across four filter orientations."
          />

          <FeatureCard
            icon="graphic_eq"
            title="Haar DWT"
            dimension="08"
            description="Multi-resolution frequency information from LL, LH, HL and HH sub-bands."
          />

          <FeatureCard
            icon="gesture"
            title="Fourier Descriptors"
            dimension="10"
            description="Low-frequency contour harmonics describe morphological shape."
          />

        </div>


        {/* Total */}

        <div
          className="
            mt-6
            glass-panel
            rounded-xl
            p-6
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >

          <div>

            <span
              className="
                font-label-sm
                text-label-sm
                text-on-surface-variant
                uppercase
              "
            >
              Fused Representation
            </span>

            <p className="text-on-surface mt-1">
              Color ⊕ LBP ⊕ GLCM ⊕ Gabor ⊕ Wavelet ⊕ Fourier
            </p>

          </div>


          <div
            className="
              text-3xl
              font-light
              text-primary
            "
          >
            48-D
          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CGO + XGBOOST */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >

          {/* CGO */}

          <div className="glass-card rounded-2xl p-8">

            <div
              className="
                w-12
                h-12
                rounded-full
                bg-primary/10
                border
                border-primary/20
                flex
                items-center
                justify-center
                mb-6
              "
            >

              <span className="material-symbols-outlined text-primary">
                scatter_plot
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
              Feature Selection
            </span>


            <h3
              className="
                font-headline-lg-mobile
                text-headline-lg-mobile
                text-on-surface
                mt-2
                mb-4
              "
            >
              Chaos Game Optimization
            </h3>


            <p
              className="
                text-on-surface-variant
                mb-6
              "
            >
              CGO searches the 48-dimensional feature space for
              a compact subset of discriminative features. In the
              reported experiments, the optimizer converged to
              a 30-feature subset.
            </p>


            <div className="flex items-end gap-4">

              <div>

                <div className="text-4xl text-primary font-light">
                  48
                </div>

                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  ORIGINAL
                </div>

              </div>


              <span className="material-symbols-outlined text-primary mb-3">
                arrow_forward
              </span>


              <div>

                <div className="text-4xl text-primary font-light">
                  30
                </div>

                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  SELECTED
                </div>

              </div>

            </div>

          </div>


          {/* XGBoost */}

          <div className="glass-card rounded-2xl p-8">

            <div
              className="
                w-12
                h-12
                rounded-full
                bg-secondary/10
                border
                border-secondary/20
                flex
                items-center
                justify-center
                mb-6
              "
            >

              <span className="material-symbols-outlined text-secondary">
                account_tree
              </span>

            </div>


            <span
              className="
                font-label-sm
                text-label-sm
                text-secondary
                uppercase
              "
            >
              Classification
            </span>


            <h3
              className="
                font-headline-lg-mobile
                text-headline-lg-mobile
                text-on-surface
                mt-2
                mb-4
              "
            >
              Optuna-Tuned XGBoost
            </h3>


            <p
              className="
                text-on-surface-variant
                mb-6
              "
            >
              The selected features are passed to an XGBoost
              classifier whose hyperparameters were optimized
              with Optuna using weighted F1 as the optimization
              objective.
            </p>


            <div className="grid grid-cols-2 gap-3">

              <Metric
                value="0.05"
                label="Learning Rate"
              />

              <Metric
                value="10"
                label="Max Depth"
              />

              <Metric
                value="0.8"
                label="Subsample"
              />

              <Metric
                value="0.8"
                label="Colsample"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* RESULTS */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div
          className="
            glass-card
            rounded-2xl
            p-8
            md:p-12
          "
        >

          <div className="mb-10">

            <span
              className="
                font-label-sm
                text-label-sm
                text-primary
                uppercase
              "
            >
              04 / Experimental Results
            </span>


            <h2
              className="
                font-headline-lg
                text-headline-lg
                text-on-surface
                mt-3
              "
            >
              Measured Performance
            </h2>

          </div>


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            "
          >

            <BigMetric
              value="93.61%"
              label="Test Accuracy"
            />

            <BigMetric
              value="0.9359"
              label="F1 Score"
            />

            <BigMetric
              value="30 / 48"
              label="Selected Features"
            />

          </div>


          <div
            className="
              mt-8
              pt-8
              border-t
              border-white/10
            "
          >

            <p
              className="
                text-on-surface-variant
                max-w-4xl
              "
            >
              The CGO-XGBoost framework exceeded the strongest
              reported baseline accuracy of 93.03% by 0.58
              percentage points while reducing the feature space
              from 48 dimensions to 30.
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* DEPLOYMENT */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
          mb-24
        "
      >

        <div className="mb-10">

          <span
            className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
            "
          >
            05 / Deployment
          </span>


          <h2
            className="
              font-headline-lg
              text-headline-lg
              text-on-surface
              mt-3
              mb-4
            "
          >
            Designed for Edge Computing
          </h2>


          <p className="text-on-surface-variant max-w-3xl">
            The paper identifies Raspberry Pi and NVIDIA Jetson
            Nano as potential edge deployment targets, with the
            compact feature representation intended to support
            low-latency operation.
          </p>

        </div>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >

          <DeploymentCard
            icon="memory"
            title="Raspberry Pi"
            description="A lightweight edge-computing target for deploying the compact classification pipeline."
          />

          <DeploymentCard
            icon="developer_board"
            title="NVIDIA Jetson Nano"
            description="A GPU-enabled edge platform identified as another deployment target for the grading framework."
          />

        </div>

      </section>


      {/* ================================================= */}
      {/* RESEARCH PAPER CTA */}
      {/* ================================================= */}

      <section
        className="
          max-w-max-width
          mx-auto
          px-container-padding
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            p-8
            md:p-12
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-8
          "
        >

          <div>

            <span
              className="
                font-label-sm
                text-label-sm
                text-primary
                uppercase
              "
            >
              Full Technical Documentation
            </span>


            <h2
              className="
                font-headline-lg
                text-headline-lg
                text-on-surface
                mt-3
                mb-3
              "
            >
              Read the Research Paper
            </h2>


            <p
              className="
                text-on-surface-variant
                max-w-2xl
              "
            >
              Explore the complete methodology, feature
              extraction framework, optimization strategy,
              experiments, results and references.
            </p>

          </div>


          <a
            href="/research-paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              shrink-0

              flex
              items-center
              gap-2

              bg-glass-primary
              text-on-primary-fixed

              px-6
              py-3

              rounded-full

              font-label-sm
              text-label-sm

              glow-primary

              hover:brightness-110

              transition-all
            "
          >

            View Research Paper

            <span className="material-symbols-outlined text-lg">
              open_in_new
            </span>

          </a>

        </div>

      </section>

    </main>
  );
}


/* ========================================================= */
/* REUSABLE COMPONENTS */
/* ========================================================= */

function PipelineCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        glass-card
        rounded-xl
        p-6
        hover:-translate-y-1
        transition-transform
      "
    >

      <div className="flex justify-between items-start mb-6">

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
            {icon}
          </span>

        </div>


        <span
          className="
            font-label-sm
            text-label-sm
            text-on-surface-variant
          "
        >
          {number}
        </span>

      </div>


      <h3
        className="
          text-lg
          text-on-surface
          font-medium
          mb-2
        "
      >
        {title}
      </h3>


      <p
        className="
          text-sm
          leading-6
          text-on-surface-variant
        "
      >
        {description}
      </p>

    </div>
  );
}


function FeatureCard({
  icon,
  title,
  dimension,
  description,
}) {
  return (
    <div
      className="
        glass-panel
        rounded-xl
        p-6
      "
    >

      <div className="flex justify-between items-start mb-5">

        <span
          className="
            material-symbols-outlined
            text-primary
          "
        >
          {icon}
        </span>


        <span
          className="
            font-label-sm
            text-label-sm
            text-primary
          "
        >
          {dimension}D
        </span>

      </div>


      <h3 className="text-on-surface font-medium mb-2">
        {title}
      </h3>


      <p className="text-sm leading-6 text-on-surface-variant">
        {description}
      </p>

    </div>
  );
}


function Metric({
  value,
  label,
}) {
  return (
    <div
      className="
        rounded-lg
        bg-white/5
        border
        border-white/5
        p-4
      "
    >

      <div className="text-xl text-primary font-light">
        {value}
      </div>

      <div
        className="
          font-label-sm
          text-label-sm
          text-on-surface-variant
          mt-1
        "
      >
        {label}
      </div>

    </div>
  );
}


function BigMetric({
  value,
  label,
}) {
  return (
    <div
      className="
        rounded-xl
        bg-black/20
        border
        border-white/10
        p-6
      "
    >

      <div
        className="
          text-4xl
          md:text-5xl
          font-light
          text-primary
        "
      >
        {value}
      </div>


      <div
        className="
          font-label-sm
          text-label-sm
          text-on-surface-variant
          mt-3
          uppercase
        "
      >
        {label}
      </div>

    </div>
  );
}


function StageVisual({
  icon,
  label,
}) {
  return (
    <div
      className="
        w-full
        max-w-xs
        flex
        items-center
        gap-4
        p-4
        rounded-lg
        bg-white/5
        border
        border-white/10
      "
    >

      <span className="material-symbols-outlined text-primary">
        {icon}
      </span>

      <span
        className="
          font-label-sm
          text-label-sm
          text-on-surface
        "
      >
        {label}
      </span>

    </div>
  );
}


function DeploymentCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        glass-card
        rounded-xl
        p-7
        flex
        gap-5
      "
    >

      <div
        className="
          w-12
          h-12
          shrink-0
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
          {icon}
        </span>

      </div>


      <div>

        <h3 className="text-on-surface font-medium mb-2">
          {title}
        </h3>

        <p className="text-sm leading-6 text-on-surface-variant">
          {description}
        </p>

      </div>

    </div>
  );
}


export default Technology;