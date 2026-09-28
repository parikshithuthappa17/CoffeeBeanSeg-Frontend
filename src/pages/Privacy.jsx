import LegalPageLayout, {
  LegalSection,
  InfoCard,
} from "../components/LegalPageLayout";


function Privacy() {
  return (
    <LegalPageLayout
      eyebrow="Legal / Privacy"
      title="Privacy Policy"
      description="This page describes how BrewGrade is intended to handle information when users interact with the platform."
      updated="August 2026"
    >

      <InfoCard
        icon="privacy_tip"
        title="Important"
      >
        <p>
          This is a portfolio-project privacy policy draft.
          Replace the placeholders and review the policy with
          appropriate legal guidance before using BrewGrade
          as a production commercial service.
        </p>
      </InfoCard>


      <LegalSection
        number="01"
        title="Information We Collect"
      >
        <p>
          BrewGrade may receive information that users
          voluntarily provide when creating an account,
          contacting the service, or using features of the
          platform.
        </p>

        <p>
          When an image is submitted for coffee-bean analysis,
          the platform may process that image and the associated
          analysis data in order to provide the requested
          functionality.
        </p>
      </LegalSection>


      <LegalSection
        number="02"
        title="How Information Is Used"
      >
        <p>
          Information may be used to provide, operate,
          maintain, and improve the BrewGrade platform.
        </p>

        <p>
          Uploaded coffee-bean images may be processed as part
          of the grading workflow, including image segmentation,
          feature extraction, and classification.
        </p>
      </LegalSection>


      <LegalSection
        number="03"
        title="Uploaded Images"
      >
        <p>
          Users should only upload images that they are
          authorized to submit for analysis.
        </p>

        <p>
          The exact retention period for uploaded images has
          not been defined for this project. A production
          deployment should explicitly document whether images
          are stored, for how long, and when they are deleted.
        </p>
      </LegalSection>


      <LegalSection
        number="04"
        title="Third-Party Services"
      >
        <p>
          A production version of BrewGrade may use
          third-party infrastructure, authentication,
          analytics, payment, hosting, or machine-learning
          services.
        </p>

        <p>
          Any such services should be identified here together
          with the categories of information they process.
        </p>
      </LegalSection>


      <LegalSection
        number="05"
        title="Data Security"
      >
        <p>
          Reasonable technical and organizational safeguards
          should be implemented to protect information handled
          by the platform.
        </p>

        <p>
          The specific security controls depend on the final
          production architecture and infrastructure.
        </p>
      </LegalSection>


      <LegalSection
        number="06"
        title="Your Choices"
      >
        <p>
          Users should be provided with appropriate mechanisms
          to access, correct, or request deletion of applicable
          account information where required by the laws
          applicable to the service.
        </p>
      </LegalSection>


      <LegalSection
        number="07"
        title="Contact"
      >
        <p>
          Questions regarding privacy can be directed to the
          contact address provided on the BrewGrade Contact
          page.
        </p>
      </LegalSection>

    </LegalPageLayout>
  );
}


export default Privacy;