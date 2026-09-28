import LegalPageLayout, {
  LegalSection,
  InfoCard,
} from "../components/LegalPageLayout";


function API() {
  return (
    <LegalPageLayout
      eyebrow="Developer Platform"
      title="API Documentation"
      description="Integrate BrewGrade's coffee-bean analysis capabilities into your own applications and workflows."
    >

      {/* ============================================= */}
      {/* STATUS */}
      {/* ============================================= */}

      <InfoCard
        icon="api"
        title="API Status"
      >

        <div className="flex items-center gap-2">

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-primary
              shadow-[0_0_10px_rgba(161,209,185,0.8)]
            "
          />

          <span className="text-primary">
            Documentation Preview
          </span>

        </div>

        <p className="mt-3">
          The API interface shown here represents the intended
          integration architecture. Production endpoints,
          authentication, rate limits, and deployment URLs
          should be configured when the backend is deployed.
        </p>

      </InfoCard>


      {/* ============================================= */}
      {/* OVERVIEW */}
      {/* ============================================= */}

      <LegalSection
        number="01"
        title="Overview"
      >

        <p>
          The BrewGrade API is intended to allow external
          applications to submit coffee-bean images and receive
          automated grading results.
        </p>


        <div
          className="
            glass-panel
            rounded-xl
            p-5
            mt-6
            overflow-x-auto
          "
        >

          <code
            className="
              font-label-sm
              text-label-sm
              text-primary
              whitespace-nowrap
            "
          >
            POST /api/v1/analyze
          </code>

        </div>

      </LegalSection>


      {/* ============================================= */}
      {/* AUTHENTICATION */}
      {/* ============================================= */}

      <LegalSection
        number="02"
        title="Authentication"
      >

        <p>
          Authenticated API access can use an API key supplied
          through the Authorization header.
        </p>


        <CodeBlock>
{`Authorization: Bearer YOUR_API_KEY`}
        </CodeBlock>

        <p>
          The final authentication mechanism should be
          implemented by the backend before exposing the API
          publicly.
        </p>

      </LegalSection>


      {/* ============================================= */}
      {/* ANALYZE */}
      {/* ============================================= */}

      <LegalSection
        number="03"
        title="Analyze a Coffee Bean"
      >

        <p>
          Submit a coffee-bean image to the analysis endpoint.
          The image should follow the same upload requirements
          used by the BrewGrade web application.
        </p>


        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            mt-6
          "
        >

          <InfoCard
            icon="upload_file"
            title="Request"
          >

            <p>
              Method: <strong className="text-on-surface">
                POST
              </strong>
            </p>

            <p>
              Content-Type:{" "}
              <strong className="text-on-surface">
                multipart/form-data
              </strong>
            </p>

            <p>
              Field:{" "}
              <strong className="text-on-surface">
                image
              </strong>
            </p>

          </InfoCard>


          <InfoCard
            icon="image"
            title="Image Requirements"
          >

            <p>
              JPG, JPEG, or PNG
            </p>

            <p>
              Maximum size: 10 MB
            </p>

          </InfoCard>

        </div>


        <CodeBlock>
{`curl -X POST https://api.example.com/api/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@coffee-bean.jpg"`}
        </CodeBlock>

      </LegalSection>


      {/* ============================================= */}
      {/* RESPONSE */}
      {/* ============================================= */}

      <LegalSection
        number="04"
        title="Response"
      >

        <p>
          A successful analysis is intended to return the
          predicted grade together with relevant analytical
          information.
        </p>


        <CodeBlock>
{`{
  "success": true,
  "grade": "A",
  "confidence": 0.94,
  "analysis": {
    "model": "XGBoost",
    "features_selected": 30
  }
}`}
        </CodeBlock>

        <p>
          The exact response schema will be finalized alongside
          the production inference backend.
        </p>

      </LegalSection>


      {/* ============================================= */}
      {/* PIPELINE */}
      {/* ============================================= */}

      <LegalSection
        number="05"
        title="Analysis Pipeline"
      >

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >

          <InfoCard
            icon="center_focus_strong"
            title="1. Segmentation"
          >
            YOLOv11m-seg identifies and isolates the coffee-bean
            region of interest.
          </InfoCard>


          <InfoCard
            icon="texture"
            title="2. Feature Extraction"
          >
            CIELAB, LBP, GLCM, Gabor, Haar DWT, and Fourier
            descriptors produce the feature representation.
          </InfoCard>


          <InfoCard
            icon="scatter_plot"
            title="3. Feature Selection"
          >
            Chaos Game Optimization selects a compact subset
            from the original feature space.
          </InfoCard>


          <InfoCard
            icon="account_tree"
            title="4. Classification"
          >
            Optuna-tuned XGBoost predicts the coffee-bean grade.
          </InfoCard>

        </div>

      </LegalSection>


      {/* ============================================= */}
      {/* ERRORS */}
      {/* ============================================= */}

      <LegalSection
        number="06"
        title="Errors"
      >

        <div className="space-y-3">

          <ErrorRow
            code="400"
            title="Bad Request"
            description="The request or uploaded image is invalid."
          />

          <ErrorRow
            code="401"
            title="Unauthorized"
            description="The API key is missing or invalid."
          />

          <ErrorRow
            code="413"
            title="Payload Too Large"
            description="The uploaded image exceeds the allowed size."
          />

          <ErrorRow
            code="415"
            title="Unsupported Media Type"
            description="The uploaded file format is not supported."
          />

          <ErrorRow
            code="500"
            title="Internal Server Error"
            description="The analysis service encountered an unexpected error."
          />

        </div>

      </LegalSection>

    </LegalPageLayout>
  );
}


/* ========================================================= */
/* CODE BLOCK */
/* ========================================================= */

function CodeBlock({
  children,
}) {
  return (
    <pre
      className="
        mt-6

        p-5

        rounded-xl

        bg-[#010f1f]

        border
        border-white/10

        overflow-x-auto

        text-sm

        text-primary

        leading-6

        font-mono
      "
    >
      <code>
        {children}
      </code>
    </pre>
  );
}


/* ========================================================= */
/* ERROR ROW */
/* ========================================================= */

function ErrorRow({
  code,
  title,
  description,
}) {
  return (
    <div
      className="
        glass-panel

        rounded-lg

        p-4

        flex
        items-start
        gap-4
      "
    >

      <span
        className="
          font-label-sm
          text-label-sm

          text-secondary

          shrink-0
        "
      >
        {code}
      </span>


      <div>

        <p className="text-on-surface font-medium">
          {title}
        </p>

        <p className="text-sm mt-1">
          {description}
        </p>

      </div>

    </div>
  );
}


export default API;