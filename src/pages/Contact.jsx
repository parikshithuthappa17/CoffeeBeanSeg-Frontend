import { useState } from "react";

import LegalPageLayout, {
  InfoCard,
} from "../components/LegalPageLayout";


function Contact() {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };


  return (
    <LegalPageLayout
      eyebrow="BrewGrade / Contact"
      title="Let's talk coffee."
      description="Have a question, want to discuss the platform, or interested in an enterprise deployment? Get in touch."
    >

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3

          gap-6
        "
      >

        {/* ========================================= */}
        {/* CONTACT INFORMATION */}
        {/* ========================================= */}

        <div
          className="
            lg:col-span-1

            space-y-4
          "
        >

          <InfoCard
            icon="mail"
            title="Email"
          >

            <a
              href="mailto:hello@obsidianbrew.ai"
              className="
                text-primary
                hover:underline
              "
            >
              hello@obsidianbrew.ai
            </a>

          </InfoCard>


          <InfoCard
            icon="business"
            title="Enterprise"
          >

            <p className="mb-3">
              Looking to deploy coffee grading across your
              organization?
            </p>

            <a
              href="mailto:enterprise@obsidianbrew.ai"
              className="
                text-primary
                hover:underline
              "
            >
              enterprise@obsidianbrew.ai
            </a>

          </InfoCard>


          <InfoCard
            icon="schedule"
            title="Response"
          >

            <p>
              Send us a message and we'll get back to you
              regarding your enquiry.
            </p>

          </InfoCard>

        </div>


        {/* ========================================= */}
        {/* CONTACT FORM */}
        {/* ========================================= */}

        <div
          className="
            lg:col-span-2

            glass-card

            rounded-2xl

            p-7
            md:p-9
          "
        >

          {submitted ? (

            /* ===================================== */
            /* SUCCESS */
            /* ===================================== */

            <div
              className="
                min-h-[420px]

                flex
                flex-col

                items-center
                justify-center

                text-center
              "
            >

              <div
                className="
                  w-16
                  h-16

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

                <span
                  className="
                    material-symbols-outlined
                    text-primary
                    text-3xl
                  "
                >
                  check
                </span>

              </div>


              <h2
                className="
                  text-2xl
                  text-on-surface
                  mb-3
                "
              >
                Message ready.
              </h2>


              <p
                className="
                  text-on-surface-variant
                  max-w-md
                "
              >
                The frontend form is working. To send this
                message to a real inbox, we'll connect it to
                the backend/API next.
              </p>


              <button
                type="button"

                onClick={() => setSubmitted(false)}

                className="
                  mt-6

                  px-5
                  py-2

                  rounded-full

                  border
                  border-primary/30

                  text-primary

                  font-label-sm
                  text-label-sm

                  hover:bg-primary/10
                "
              >
                Send Another
              </button>

            </div>

          ) : (

            /* ===================================== */
            /* FORM */
            /* ===================================== */

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
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
                  Send a Message
                </span>


                <h2
                  className="
                    text-2xl
                    md:text-3xl

                    font-light

                    text-on-surface

                    mt-2
                  "
                >
                  Tell us what you need.
                </h2>

              </div>


              {/* Name */}

              <div>

                <label
                  htmlFor="name"

                  className="
                    block

                    font-label-sm
                    text-label-sm

                    text-on-surface-variant

                    mb-2
                  "
                >
                  NAME
                </label>


                <input
                  id="name"
                  name="name"
                  type="text"
                  required

                  placeholder="Your name"

                  className="
                    w-full

                    px-4
                    py-3

                    rounded-lg

                    bg-white/5

                    border
                    border-white/10

                    text-on-surface

                    placeholder:text-on-surface-variant/50

                    outline-none

                    focus:border-primary/50

                    focus:ring-1
                    focus:ring-primary/20

                    transition
                  "
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="email"

                  className="
                    block

                    font-label-sm
                    text-label-sm

                    text-on-surface-variant

                    mb-2
                  "
                >
                  EMAIL
                </label>


                <input
                  id="email"
                  name="email"
                  type="email"
                  required

                  placeholder="you@example.com"

                  className="
                    w-full

                    px-4
                    py-3

                    rounded-lg

                    bg-white/5

                    border
                    border-white/10

                    text-on-surface

                    placeholder:text-on-surface-variant/50

                    outline-none

                    focus:border-primary/50

                    focus:ring-1
                    focus:ring-primary/20

                    transition
                  "
                />

              </div>


              {/* Subject */}

              <div>

                <label
                  htmlFor="subject"

                  className="
                    block

                    font-label-sm
                    text-label-sm

                    text-on-surface-variant

                    mb-2
                  "
                >
                  SUBJECT
                </label>


                <select
                  id="subject"
                  name="subject"

                  className="
                    w-full

                    px-4
                    py-3

                    rounded-lg

                    bg-white/5

                    border
                    border-white/10

                    text-on-surface

                    outline-none

                    focus:border-primary/50

                    transition
                  "
                >

                  <option
                    value="general"
                    className="bg-[#0F1115]"
                  >
                    General Enquiry
                  </option>

                  <option
                    value="enterprise"
                    className="bg-[#0F1115]"
                  >
                    Enterprise
                  </option>

                  <option
                    value="api"
                    className="bg-[#0F1115]"
                  >
                    API / Integration
                  </option>

                  <option
                    value="support"
                    className="bg-[#0F1115]"
                  >
                    Technical Support
                  </option>

                </select>

              </div>


              {/* Message */}

              <div>

                <label
                  htmlFor="message"

                  className="
                    block

                    font-label-sm
                    text-label-sm

                    text-on-surface-variant

                    mb-2
                  "
                >
                  MESSAGE
                </label>


                <textarea
                  id="message"
                  name="message"
                  required

                  rows="6"

                  placeholder="Tell us how we can help..."

                  className="
                    w-full

                    px-4
                    py-3

                    rounded-lg

                    bg-white/5

                    border
                    border-white/10

                    text-on-surface

                    placeholder:text-on-surface-variant/50

                    outline-none

                    resize-none

                    focus:border-primary/50

                    focus:ring-1
                    focus:ring-primary/20

                    transition
                  "
                />

              </div>


              {/* Submit */}

              <button
                type="submit"

                className="
                  w-full

                  flex
                  items-center
                  justify-center
                  gap-2

                  px-6
                  py-3

                  rounded-full

                  bg-primary

                  text-on-primary-fixed

                  font-label-sm
                  text-label-sm

                  glow-primary

                  hover:brightness-110

                  transition-all

                  active:scale-[0.99]
                "
              >

                Send Message

                <span
                  className="
                    material-symbols-outlined
                    text-lg
                  "
                >
                  arrow_forward
                </span>

              </button>

            </form>

          )}

        </div>

      </div>

    </LegalPageLayout>
  );
}


export default Contact;