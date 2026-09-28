import { useRef, useState } from "react";

function Grading() {

  const fileInputRef = useRef(null);

const [selectedFile, setSelectedFile] = useState(null);
const [previewUrl, setPreviewUrl] = useState("");
const [fileError, setFileError] = useState("");
const [isDragging, setIsDragging] = useState(false);

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const handleFile = (file) => {
  setFileError("");

  // No file
  if (!file) {
    return;
  }

  // Check file type
  const allowedTypes = [
    "image/jpeg",
    "image/png",
  ];

  if (!allowedTypes.includes(file.type)) {
    setSelectedFile(null);
    setPreviewUrl("");

    setFileError(
      "Invalid file type. Please upload a JPG, JPEG, or PNG image."
    );

    return;
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    setSelectedFile(null);
    setPreviewUrl("");

    setFileError(
      "File is too large. Please upload an image below 10 MB."
    );

    return;
  }

  // File is valid
  setSelectedFile(file);

  // Create preview
  const url = URL.createObjectURL(file);

  setPreviewUrl(url);
};

const handleSelectFile = (event) => {
  const file = event.target.files?.[0];

  handleFile(file);

  // Allows selecting the same file again later
  event.target.value = "";
};

const handleDragOver = (event) => {
  event.preventDefault();

  setIsDragging(true);
};


const handleDragLeave = (event) => {
  event.preventDefault();

  setIsDragging(false);
};


const handleDrop = (event) => {
  event.preventDefault();

  setIsDragging(false);

  const file = event.dataTransfer.files?.[0];

  handleFile(file);
};

  return (
    <main
      className="
        flex-grow
        pt-32
        pb-24
        px-6
        md:px-12
        max-w-max-width
        mx-auto
        w-full
        flex
        flex-col
        lg:flex-row
        gap-gutter
      "
    >

      {/* ========================= */}
      {/* Left Column */}
      {/* ========================= */}

      <div className="w-full lg:w-2/3 flex flex-col gap-8">

        {/* Hero */}
        <section className="mb-4">

          <h1
            className="
              font-display-lg
              text-display-lg
              text-on-surface
              mb-2
            "
          >
            Start Your Precision Analysis
          </h1>

          <p
            className="
              font-body-md
              text-body-md
              text-on-surface-variant
              max-w-2xl
            "
          >
            Deploy the Chromato-Textural Engine.
            Upload a macro image of a single coffee bean
            for instant, objective grading powered by deep learning.
          </p>

        </section>


        {/* ========================= */}
        {/* Upload Zone */}
        {/* ========================= */}

        <div
  onClick={() => fileInputRef.current?.click()}

  onDragOver={handleDragOver}

  onDragLeave={handleDragLeave}

  onDrop={handleDrop}

  className={`
    glass-card
    rounded-xl
    p-1
    w-full
    aspect-[16/9]
    sm:aspect-[21/9]
    lg:aspect-video

    flex
    flex-col
    items-center
    justify-center

    relative
    overflow-hidden
    group

    cursor-pointer

    upload-zone
    upload-pulse

    transition-all
    duration-300

    ${
      isDragging
        ? "border-primary bg-primary/10 scale-[1.01]"
        : ""
    }
  `}
>

  {/* Hover background */}

  <div
    className="
      absolute
      inset-0

      bg-primary/5

      opacity-0
      group-hover:opacity-100

      transition-opacity
      duration-500
    "
  />


  {/* ============================================ */}
  {/* Hidden File Input */}
  {/* ============================================ */}

  <input
    ref={fileInputRef}

    type="file"

    accept="image/png,image/jpeg"

    onChange={handleSelectFile}

    className="hidden"
  />


  {/* ============================================ */}
  {/* CONTENT */}
  {/* ============================================ */}

  <div
    className="
      relative
      z-10

      flex
      flex-col

      items-center
      justify-center

      text-center

      p-8

      w-full
    "
  >

    {/* ======================================== */}
    {/* NO FILE SELECTED */}
    {/* ======================================== */}

    {!selectedFile && (

      <>

        <span
          className="
            material-symbols-outlined

            text-4xl
            sm:text-6xl

            text-primary

            mb-4
          "
        >
          cloud_upload
        </span>


        <h3
          className="
            font-headline-lg-mobile
            text-headline-lg-mobile

            text-on-surface

            mb-2
          "
        >
          {isDragging
            ? "Drop Image Here"
            : "Drag & Drop Image Here"
          }
        </h3>


        <p
          className="
            font-body-md
            text-body-md

            text-on-surface-variant

            mb-6
          "
        >
          or click to browse local files
          <br />

          <span className="text-primary">
            JPG, JPEG, PNG up to 10MB
          </span>
        </p>


        <button
          type="button"

          onClick={(event) => {
            event.stopPropagation();

            fileInputRef.current?.click();
          }}

          className="
            btn-primary-glass

            px-8
            py-3

            rounded-full

            font-label-sm
            text-label-sm

            uppercase
            tracking-wider

            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              material-symbols-outlined
              text-lg
            "
          >
            search
          </span>

          Select File

        </button>

      </>

    )}


    {/* ======================================== */}
    {/* FILE SELECTED */}
    {/* ======================================== */}

    {selectedFile && (

      <div
        className="
          flex
          flex-col

          items-center

          w-full
          max-w-md
        "
      >

        {/* Preview */}

        <div
          className="
            w-40
            h-40

            rounded-xl

            overflow-hidden

            border
            border-primary/30

            bg-black/30

            mb-5
          "
        >

          <img
            src={previewUrl}

            alt="Selected coffee bean"

            className="
              w-full
              h-full

              object-contain
            "
          />

        </div>


        {/* File icon */}

        <span
          className="
            material-symbols-outlined

            text-primary

            text-3xl

            mb-2
          "
        >
          check_circle
        </span>


        {/* Filename */}

        <h3
          className="
            text-on-surface

            font-medium

            text-lg

            max-w-full

            truncate
          "
        >
          {selectedFile.name}
        </h3>


        {/* File size */}

        <p
          className="
            font-label-sm
            text-label-sm

            text-on-surface-variant

            mt-1
          "
        >
          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
        </p>


        {/* Change file */}

        <button
          type="button"

          onClick={(event) => {
            event.stopPropagation();

            fileInputRef.current?.click();
          }}

          className="
            mt-5

            border
            border-primary/40

            text-primary

            px-6
            py-2

            rounded-full

            font-label-sm
            text-label-sm

            hover:bg-primary/10

            transition-colors
          "
        >
          Change File
        </button>

      </div>

    )}

  </div>


  {/* ============================================ */}
  {/* ERROR MESSAGE */}
  {/* ============================================ */}

  {fileError && (

    <div
      className="
        absolute
        bottom-4

        left-1/2
        -translate-x-1/2

        z-20

        w-[90%]
        max-w-lg

        px-4
        py-3

        rounded-lg

        bg-error-container/90

        border
        border-error/30

        text-error

        text-sm

        text-center

        backdrop-blur-md
      "
    >

      <div
        className="
          flex
          items-center
          justify-center
          gap-2
        "
      >

        <span
          className="
            material-symbols-outlined
            text-lg
          "
        >
          error
        </span>

        {fileError}

      </div>

    </div>

  )}


  {/* ============================================ */}
  {/* CORNER ACCENTS */}
  {/* ============================================ */}

  <div
    className="
      absolute
      top-0
      left-0

      w-8
      h-8

      border-t-2
      border-l-2

      border-primary/30

      m-4
    "
  />


  <div
    className="
      absolute
      top-0
      right-0

      w-8
      h-8

      border-t-2
      border-r-2

      border-primary/30

      m-4
    "
  />


  <div
    className="
      absolute
      bottom-0
      left-0

      w-8
      h-8

      border-b-2
      border-l-2

      border-primary/30

      m-4
    "
  />


  <div
    className="
      absolute
      bottom-0
      right-0

      w-8
      h-8

      border-b-2
      border-r-2

      border-primary/30

      m-4
    "
  />

</div>


        {/* ========================= */}
        {/* System Status */}
        {/* ========================= */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
        ">

          {/* Model Status */}

          <div
            className="
              glass-panel
              rounded-lg
              p-4
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-primary
                  shadow-[0_0_8px_#a1d1b9]
                  animate-pulse
                "
              />

              <span
                className="
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  uppercase
                "
              >
                Model Status
              </span>

            </div>

            <span
              className="
                font-label-sm
                text-label-sm
                text-primary
              "
            >
              YOLOv11m-seg READY
            </span>

          </div>


          {/* Latency */}

          <div
            className="
              glass-panel
              rounded-lg
              p-4
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  material-symbols-outlined
                  text-on-surface-variant
                  text-sm
                "
              >
                speed
              </span>

              <span
                className="
                  font-label-sm
                  text-label-sm
                  text-on-surface-variant
                  uppercase
                "
              >
                Est. Latency
              </span>

            </div>

            <span
              className="
                font-label-sm
                text-label-sm
                text-primary
              "
            >
              120ms
            </span>

          </div>

        </div>

      </div>


      {/* ========================= */}
      {/* Right Column */}
      {/* ========================= */}

      <aside
        className="
          w-full
          lg:w-1/3
          flex
          flex-col
          gap-6
        "
      >

        {/* Analysis Requirements */}

        <div className="glass-card rounded-xl p-6">

          <h3
            className="
              font-body-md
              text-body-md
              font-semibold
              text-on-surface
              mb-4
              flex
              items-center
              gap-2
              border-b
              border-white/10
              pb-2
            "
          >

            <span className="material-symbols-outlined text-primary">
              rule
            </span>

            Analysis Requirements

          </h3>


          <ul
            className="
              flex
              flex-col
              gap-3
              font-label-sm
              text-label-sm
              text-on-surface-variant
            "
          >

            <Requirement
              text={
                <>
                  <strong>Lighting:</strong>{" "}
                  Diffused, standard D65 illuminant preferred.
                  Avoid harsh shadows.
                </>
              }
            />

            <Requirement
              text={
                <>
                  <strong>Subject:</strong>{" "}
                  Single bean centered in frame,
                  completely isolated from background.
                </>
              }
            />

            <Requirement
              text={
                <>
                  <strong>Lens:</strong>{" "}
                  Macro lens or tight crop ensuring
                  the bean occupies &gt; 50% of the image.
                </>
              }
            />

            <Requirement
              text={
                <>
                  <strong>Format:</strong>{" "}
                  High resolution (Min 1024x1024px)
                  for accurate textural matrix mapping.
                </>
              }
            />

          </ul>

        </div>


        {/* ========================= */}
        {/* Grading Standards */}
        {/* ========================= */}

        <div className="glass-card rounded-xl p-6">

          <h3
            className="
              font-body-md
              text-body-md
              font-semibold
              text-on-surface
              mb-4
              flex
              items-center
              gap-2
              border-b
              border-white/10
              pb-2
            "
          >

            <span className="material-symbols-outlined text-secondary">
              military_tech
            </span>

            Grading Standards Map

          </h3>


          <div className="flex flex-col gap-2">

            <Grade
              name="Grade A (Premium)"
              score="> 90.0 SCA"
              color="primary"
            />

            <Grade
              name="Grade B (Specialty)"
              score="80.0 - 89.9 SCA"
              color="primary"
            />

            <Grade
              name="Grade C (Commercial)"
              score="70.0 - 79.9 SCA"
              color="secondary"
            />

            <Grade
              name="Grade D (Sub-Standard)"
              score="< 70.0 SCA"
              color="error"
            />

          </div>

        </div>

      </aside>

    </main>
  );
}


/* ================================= */
/* Requirement Component */
/* ================================= */

function Requirement({ text }) {
  return (
    <li className="flex items-start gap-2">

      <span
        className="
          material-symbols-outlined
          text-primary
          text-sm
          mt-0.5
        "
      >
        check_circle
      </span>

      <span>
        {text}
      </span>

    </li>
  );
}


/* ================================= */
/* Grade Component */
/* ================================= */

function Grade({
  name,
  score,
  color,
}) {

  const colorClasses = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    error: "text-error bg-error/10",
  };

  return (
    <div
      className="
        flex
        justify-between
        items-center
        p-2
        rounded
        bg-white/5
        border
        border-white/5
      "
    >

      <span
        className="
          font-label-sm
          text-label-sm
          text-on-surface
        "
      >
        {name}
      </span>

      <span
        className={`
          font-label-sm
          text-label-sm
          px-2
          py-1
          rounded-full
          ${colorClasses[color]}
        `}
      >
        {score}
      </span>

    </div>
  );

}


export default Grading;