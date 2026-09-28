import { Link } from "react-router";
import AnalysisCard from "../components/AnalysisCard";


function Home() {
  return (
    <main className="
      flex-grow
      pt-32
      pb-24
      px-container-padding
      md:px-20
      max-w-max-width
      mx-auto
      w-full
      flex
      flex-col
      gap-32
    ">

      {/* ========================= */}
      {/* Hero Section */}
      {/* ========================= */}

      <section className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-16
        items-center
      ">

        {/* Left */}
        <div className="
          lg:col-span-6
          flex
          flex-col
          gap-8
          z-10
        ">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            border
            border-primary/30
            bg-primary/10
            w-fit
          ">

            <span className="
              material-symbols-outlined
              text-[16px]
              text-primary
            ">
              psychology
            </span>

            <span className="
              font-label-sm
              text-label-sm
              text-primary
              uppercase
              tracking-widest
            ">
              Chromato-Textural Engine v2.1
            </span>

          </div>


          <h1 className="
            font-display-lg
            text-display-lg
            text-on-surface
          ">

            Precision Coffee Grading,

            <br />

            <span className="
              text-primary
              font-light
            ">
              Powered by AI.
            </span>

          </h1>


          <p className="
            text-on-surface-variant
            font-body-md
            text-body-md
            max-w-xl
            leading-relaxed
          ">
            Instant, objective Robusta bean classification
            utilizing YOLOv11 segmentation,
            48-dimensional feature extraction,
            and CGO-XGBoost optimization.
          </p>


          <div className="
            flex
            flex-wrap
            items-center
            gap-6
            pt-4
          ">

            <Link
              to="/grading"
              className="
                bg-glass-primary
                text-on-primary-fixed
                glow-primary
                px-8
                py-4
                rounded-xl
                font-label-sm
                text-label-sm
                hover:brightness-110
                transition-all
                active:scale-95
                flex
                items-center
                gap-2
              "
            >
              Launch Live Demo

              <span className="
                material-symbols-outlined
                text-[18px]
              ">
                arrow_forward
              </span>

            </Link>


            <button className="
              glass-panel
              text-on-surface
              px-8
              py-4
              rounded-xl
              font-label-sm
              text-label-sm
              hover:bg-white/10
              transition-all
              active:scale-95
              flex
              items-center
              gap-2
            ">

              <span className="
                material-symbols-outlined
                text-[18px]
              ">
                description
              </span>

              <a
                href="/research-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
               >
                 View Research Paper
                </a>

            </button>

          </div>

        </div>


        {/* Right */}
        <div className="
          lg:col-span-6
          relative
          flex
          justify-center
          items-center
          h-[500px]
        ">

          <div className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[400px]
            h-[400px]
            bg-primary/20
            rounded-full
            blur-[100px]
            pointer-events-none
          " />

          <div className="
            absolute
            top-1/2
            left-[60%]
            -translate-x-1/2
            -translate-y-1/2
            w-[300px]
            h-[300px]
            bg-secondary/10
            rounded-full
            blur-[80px]
            pointer-events-none
          " />

          <img
            alt="AI Coffee Grading Visualization"
            className="
              w-full
              h-full
              object-contain
              relative
              z-10
            "
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChFWsSeyxhy_31KVgrd668dl9YcLJCfrwhLO0FT3RC275YODLEx3qoqr7dR0gzcaMlAcokaOTWk61soSnXCHbQWPRLJUU-jLGPOX1J8APExY1WzyTtiARlP3byeORu1Wgu024ennDVDUJjvUVttsyBdPjWSWKUmuV5YcKbUatfpjnU0D8VuCfP3uprTTH7NFVcCcl5RW9Cz2Rg4pivtelsS0yEFwxpTwrXUxyswZhaKWQdXbCk3KtHFQ"
          />

        </div>

      </section>


      {/* ========================= */}
      {/* Analysis Pipeline */}
      {/* ========================= */}

      <section className="flex flex-col gap-12">

        <div className="flex flex-col gap-4">

          <h2 className="
            font-headline-lg
            text-headline-lg
            text-on-surface
          ">
            Analysis Pipeline
          </h2>

          <p className="
            text-on-surface-variant
            max-w-2xl
          ">
            A proprietary three-stage process extracting
            objective quality metrics from visual data.
          </p>

        </div>


        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        ">

          <AnalysisCard
            number="01"
            icon="view_in_ar"
            title="ROI Segmentation"
            description="YOLOv11 isolates individual beans, stripping environmental noise for pure morphological analysis."
            accuracy="98.4%"
          />

          <AnalysisCard
            number="02"
            icon="scatter_plot"
            title="48-D Profiling"
            description="Extracts 48 distinct features spanning CIELAB color space, LBP texture maps, and Wavelet transforms."
          />

          <AnalysisCard
            number="03"
            icon="network_node"
            title="CGO-XGBoost"
            description="Chaos Game Optimization fine-tunes an XGBoost classifier for hyper-accurate grading."
            inference="12ms"
          />

        </div>

      </section>

    </main>
  );
}

export default Home;