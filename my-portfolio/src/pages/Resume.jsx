function Resume() {
  return (
    <section className="min-h-[calc(100vh-112px)] flex flex-col items-center justify-center px-6 text-center font-mono text-base leading-relaxed">
      <div className="max-w-4xl w-full text-left">
        <h2 className="text-4xl font-bold mb-6 text-center">Resume</h2>

        <h3 className="text-2xl sm:text-3xl font-bold text-center">Devan Eisnor</h3>
<p className="text-lg sm:text-xl font-medium text-center mb-6">Halifax, Nova Scotia</p>


        {/* PDF Download Button */}
        <div className="text-center">
          <a
            href="/Devan_Eisnor_Resume.pdf"
            download
            className="inline-block mt-4 mb-8 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            📄 Download PDF Resume
          </a>
        </div>

        <p className="mb-6">
          Working professional with over 10 years of customer service experience, significant workplace expertise, and a keen eye for detail. Thrives in fast-paced environments, staying organized and adapting quickly to changes. Proven ability to lead teams and deliver exceptional customer service. Enthusiastic about technology and eager to leverage transferable skills to pursue a career in the IT industry.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-2">Education</h3>
        <p>Nova Scotia Community College — Information Technology Program</p>
        <p className="mb-4 italic">Expected Graduation: 2024</p>

        <h3 className="text-2xl font-semibold mt-10 mb-2">IT Projects</h3>

        <div className="mb-4">
          <p className="font-semibold">NSCC Timesheet Simplification System</p>
          <ul className="list-disc list-inside ml-4">
            <li>Designed and implemented a relational database for employee timesheet data.</li>
            <li>Developed Microsoft Forms and Power Automate flows for submissions and notifications.</li>
            <li>Collaborated in a team of three, balancing individual and group work to meet deadlines.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold">E-Commerce Web Application using ASP.NET Core and Razor Pages</p>
          <ul className="list-disc list-inside ml-4">
            <li>Built a full e-commerce site with product listings, cart, and user authentication.</li>
            <li>Used Bootstrap for responsive design and implemented secure cookie authentication.</li>
            <li>Handled dynamic cart updates using server-side C# logic.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Transit Tracking App using Android and Jetpack Compose</p>
          <ul className="list-disc list-inside ml-4">
            <li>Built a mobile app with real-time GPS tracking and transit alerts using Mapbox.</li>
            <li>Created a reactive UI and backend logic for fetching transit data.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Survival Simulation in C++</p>
          <ul className="list-disc list-inside ml-4">
            <li>Simulated a human vs zombie city using OOP principles and polymorphism.</li>
            <li>Implemented turn-based logic, infection, and movement in C++.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-2">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 list-disc list-inside ml-4 gap-y-1">
          <li>ASP.NET Core</li>
          <li>JSON</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>Android Development</li>
          <li>Visual Studio</li>
          <li>Git/GitHub</li>
          <li>C++</li>
          <li>RESTful APIs</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>SQL</li>
          <li>Research Skills</li>
          <li>Critical Thinking</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-2">Professional Work Experience</h3>

        <div className="mb-4">
          <p className="font-semibold">Manager — Cora’s Breakfast Restaurant</p>
          <p className="italic mb-1">Halifax, Nova Scotia | 06/2015 – Present</p>
          <ul className="list-disc list-inside ml-4">
            <li>Led team operations and used digital tools to monitor safety and streamline processes.</li>
            <li>Maintained records of transactions, inventory, and schedules using software tools.</li>
            <li>Analyzed sales data to improve promotions and customer engagement.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Server — Swiss Chalet</p>
          <p className="italic mb-1">Halifax, Nova Scotia | 09/2010 – Present</p>
          <ul className="list-disc list-inside ml-4">
            <li>Delivered personalized service using tech tools to manage orders and enhance experience.</li>
            <li>Resolved issues using strong communication and CRM tools to improve satisfaction.</li>
            <li>Used customer feedback to guide service improvements and minimize complaints.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-2">Other Work Experience</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Jack Astor’s Bar and Grill — Server (2021–2023)</li>
          <li>The Drawing Room — Bartender (2019–2021)</li>
          <li>Captains Boil — Server (2016–2017)</li>
          <li>The Platter House — Server (2008–2010)</li>
          <li>Guppy’s Family Restaurant — Server (2006–2008)</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
