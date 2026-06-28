import Image from "next/image";

export default function Home() {
  return (
    <>
    <header className="header">
      <div className="max-width flex-columns">
        <div className="header__logo">
          <Image src="/logo.svg" alt="Markr logo" width={119} height={55} />
        </div>
        <nav className="header__nav">
          <a href="#register" className="btn">Get in touch</a>
        </nav>
      </div>
    </header>
    <main>
      <section className="section peachy hero">
        <div className="flex-columns max-width">
          <div className="hero__content">
            <h1>Give your teachers back their evenings. Give yourself back visibility.</h1>
            <p>Markr marks assessments in seconds, not weekends — and turns every result into a clear picture of how your students, classes and year groups are really progressing.</p>
            <p><a href="#register" className="btn">Get product news and updates</a></p>
          </div>
          <div className="hero__image">
            <Image src="/hero.jpg" alt="A person holding a pen, marking some work" width={600} height={400} />
          </div>
        </div>
      </section>
      <section className="section main-content">
          <div className="main-content__content max-width">
            <h2>What Markr does</h2>
            <p className="highlight">One platform, from question to insight</p>
            <p>Markr is built for the day-to-day reality of K-12 assessment: teachers spend hours writing tests, marking them, and entering results, often duplicating that work across spreadsheets and report cards.</p>
            <p>Markr brings it together. Teachers create or import assessments, assign them to a class in a few clicks, and let Markr mark them automatically — multiple choice, short answer, even extended response. Every result flows straight into a live picture of student progress, by student, by class, by year level.</p>
            <p>The marking is the part people notice first. The part school leaders care about is what happens next: real-time, school-wide visibility into where students are succeeding and where they're falling behind — without waiting for term reports to find out.</p>
          </div>
      </section>
      <section className="section peachy features">
        <div className="max-width">
          <h2>Built for the whole school, not just the classroom</h2>
          <div className="flex-columns">
            <div className="feature">
              <Image src="/automated-marking.svg" alt="An icon" width={90} height={90} />
              <p className="h3">Automated marking</p>
              <p>Multiple choice, short answer and extended response, marked consistently and fast — freeing up hours teachers currently spend with a red pen.</p>  
            </div>
            <div className="feature">
              <Image src="/assessment-builder.svg" alt="An icon" width={90} height={90} />
              <p className="h3">Assessment builder</p>
              <p>Teachers create new assessments or bring in existing ones, aligned to your curriculum framework, ready to assign in minutes.</p>  
            </div>
            <div className="feature">
              <Image src="/progress-tracking.svg" alt="An icon" width={90} height={90} />
              <p className="h3">Progress tracking over time</p>
              <p>Every result feeds into a longitudinal view of student growth — not just a single test score, but a trend you can act on early.</p>  
            </div>
            <div className="feature">
              <Image src="/site-wide-reporting.svg" alt="An icon" width={90} height={90} />
              <p className="h3">School-wide reporting</p>
              <p>Curriculum leads and principals can see performance by class, cohort or year level, without asking teachers to compile it manually.</p>  
            </div>
            <div className="feature">
              <Image src="/curriculum-builder.svg" alt="An icon" width={90} height={90} />
              <p className="h3">Curriculum alignment</p>
              <p>Markr maps assessment data back to your curriculum standards, so gaps in coverage are visible before they become gaps in outcomes.</p>  
            </div>
            <div className="feature">
              <Image src="/secure-student-data.svg" alt="An icon" width={90} height={90} />
              <p className="h3">Secure student data</p>
              <p>Built to meet the data handling and privacy obligations schools are accountable for — student data stays within your school's control.</p>  
            </div>
          </div>
        </div>
      </section>
      <section className="section faqs">
        <div className="max-width">
          <h2>Frequently asked questions</h2>
          <h3>Does Markr replace teacher judgement in marking?</h3>
          <p>No. Markr handles the repetitive marking load — particularly multiple choice and short answer — so teachers can spend their time on moderation, feedback and the assessments that genuinely need a human eye.</p>
          <h3>What types of assessments can Markr mark automatically?</h3>
          <p>Multiple choice, short answer and extended response questions. Extended response marking is guided by criteria your teachers set, so results stay consistent with how your school assesses.</p>
          <h3>How does Markr fit with our existing curriculum framework?</h3>
          <p>Assessments and results can be mapped to your curriculum's standards and outcomes, so reporting reflects the framework you already use rather than a generic one.</p>
          <h3>Who can see student results?</h3>
          <p>You control access by role. Teachers see their own classes; curriculum leads and principals can see school-wide views, depending on the permissions you set.</p>
          <h3>Is our student data safe?</h3>
          <p>Student data is handled in line with the data protection standards schools are required to meet, and stays within your school's environment.</p>
          <h3>Is this a trial sign-up?</h3>
          <p>No — this page is for product news and updates. If you'd like to see Markr in action or trial it with your school, reach out to our team separately.</p>      
        </div>
      </section>
      <section className="section peachy">
        <div className="max-width">
          <h4 className="h2">Stay ahead of what's coming</h4>
          <p>Get occasional updates on new Markr features, curriculum alignment tools, and how other schools are using Markr — straight to your inbox. No spam, no sales calls.</p>
          <p><em>Fields marked with an asterisk (*) are required.</em></p>
            <form id="register" className="form">
              <div className="flex-columns">
                <div className="form__item">
                  <label htmlFor="first-name">First name*</label>
                  <input type="text" name="first-name" id="first-name" required />
                </div>
                <div className="form__item">
                  <label htmlFor="last-name">Last name*</label>
                  <input type="text" name="last-name" id="last-name" required />
                </div>
                <div className="form__item">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="form__item">
                  <label htmlFor="phone-number">Phone number</label>
                  <input type="tel" name="phone-number" id="phone-number" required />
                </div>
                <div className="form__item">
                  <button type="submit" className="btn">Submit</button>
                </div>
              </div>
            </form>
          </div>
      </section>
    </main>
    <footer className="footer">
      <div className="max-width">
        <div className="footer__logo">
          <Image src="/logo.svg" alt="Markr logo" width={119} height={55} />
        </div>
        <p>© 2026 Markr. Built for schools, with student data privacy at the core.</p>
      </div>
    </footer>
    </>
  );
}
