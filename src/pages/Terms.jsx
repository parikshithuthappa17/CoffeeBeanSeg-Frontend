import LegalPageLayout, {
  LegalSection,
  InfoCard,
} from "../components/LegalPageLayout";


function Terms() {
  return (
    <LegalPageLayout
      eyebrow="Legal / Terms"
      title="Terms of Service"
      description="These terms describe the intended rules for using the BrewGrade platform."
      updated="August 2026"
    >

      <InfoCard
        icon="gavel"
        title="Important"
      >
        <p>
          This is a portfolio-project draft and is not legal
          advice. Before commercial deployment, replace the
          placeholders and have the terms reviewed for the
          jurisdiction and business model in which the service
          operates.
        </p>
      </InfoCard>


      <LegalSection
        number="01"
        title="Acceptance of Terms"
      >
        <p>
          By accessing or using BrewGrade, users agree to
          comply with these Terms of Service and any additional
          terms presented for specific features.
        </p>
      </LegalSection>


      <LegalSection
        number="02"
        title="Use of the Service"
      >
        <p>
          BrewGrade is intended to provide software tools
          for analyzing images of unroasted Robusta coffee beans
          and presenting automated grading results.
        </p>

        <p>
          Users are responsible for ensuring that their use of
          the service complies with applicable laws and that
          submitted content does not violate the rights of
          another person or organization.
        </p>
      </LegalSection>


      <LegalSection
        number="03"
        title="Analysis Results"
      >
        <p>
          BrewGrade's grading results are generated using
          machine-learning and computer-vision techniques.
        </p>

        <p>
          Results should be treated as automated analytical
          outputs and should not automatically be considered a
          substitute for professional coffee-quality inspection,
          laboratory testing, or other independent evaluation.
        </p>
      </LegalSection>


      <LegalSection
        number="04"
        title="Accounts"
      >
        <p>
          If account functionality is enabled, users are
          responsible for maintaining the confidentiality of
          their account credentials and for activity performed
          through their account.
        </p>
      </LegalSection>


      <LegalSection
        number="05"
        title="Subscriptions and Payments"
      >
        <p>
          BrewGrade may offer Free, Pro, Expert, and
          Enterprise plans.
        </p>

        <p>
          Any production payment terms, renewal rules,
          cancellation policies, taxes, refunds, and billing
          conditions should be explicitly defined before paid
          subscriptions are activated.
        </p>
      </LegalSection>


      <LegalSection
        number="06"
        title="Intellectual Property"
      >
        <p>
          The BrewGrade platform, its software, visual
          design, documentation, and associated intellectual
          property are protected by applicable intellectual
          property laws unless otherwise stated.
        </p>
      </LegalSection>


      <LegalSection
        number="07"
        title="Availability"
      >
        <p>
          The service may be modified, interrupted, suspended,
          or discontinued as development and infrastructure
          requirements change.
        </p>
      </LegalSection>


      <LegalSection
        number="08"
        title="Limitation of Liability"
      >
        <p>
          The final production terms concerning warranties,
          liability, indemnification, and dispute resolution
          must be determined based on the actual business,
          jurisdiction, and applicable law.
        </p>
      </LegalSection>


      <LegalSection
        number="09"
        title="Changes to These Terms"
      >
        <p>
          These terms may be updated as the platform evolves.
          The effective date should be updated whenever material
          changes are made.
        </p>
      </LegalSection>


      <LegalSection
        number="10"
        title="Contact"
      >
        <p>
          Questions regarding these Terms of Service can be
          directed through the BrewGrade Contact page.
        </p>
      </LegalSection>

    </LegalPageLayout>
  );
}


export default Terms;