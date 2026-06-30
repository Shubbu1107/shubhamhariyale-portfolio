import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import profilePic from './Images/shubham_Image.jpeg'



function App() {
  return (
    <div className="app">

      <nav className="navbar">
  <a href="#" className="logo">
    SHUBHAM
</a>

       <div className="nav-links">

    <a href="#about">About</a>

    <a href="#experience">
        Experience
    </a>

    <a href="#projects">
        Projects
    </a>

    <a href="#skills">
        Skills
    </a>

    <a href="#contact">
        Contact
    </a>

</div>
      </nav>

      <section className="hero">

        <div className="hero-image">

          {/* Replace this with your photo later */}
          <div className="profile-card">
            <img
              src={profilePic}
              alt="profile"
            />
          </div>

        </div>

        <div className="hero-content">

         <div className="status">
    🟢 Open to Graduate Software Engineer Opportunities
</div>

<p className="intro">
    👋 Hello, I'm
</p>

          <h1>
            Shubham <span>Hariyale</span>
          </h1>

          <h2>
            Software Engineer | .NET Developer
          </h2>

          <div className="education">
            MSc Advanced Computer Science (Distinction)
            <br />
            University of Leicester
          </div>

          {/* <p className="description">
            Building scalable enterprise software,
            backend systems and APIs using C#,
            ASP.NET Core, SQL Server and modern
            software engineering practices.
          </p> */}
<div className="stats">

    <div className="stat-card">
        <h3>1+</h3>
        <p>Years Experience</p>
    </div>

    <div className="stat-card">
        <h3>4+</h3>
        <p>Projects Built</p>
    </div>

    <div className="stat-card">
        <h3>MSc</h3>
        <p>Distinction</p>
    </div>

</div>

          <div className="buttons">
           <a
    href="#projects"
    className="primary-btn"
>
    View Projects
</a>

        <a
    href="/Shubham_Hariyale_CV.pdf"
    download
    className="secondary-btn"
>
    Download CV
</a>
          </div>

          <div className="socials">

    <a
        href="https://github.com/Shubbu1107"
        target="_blank"
    >
        🐙 GitHub
    </a>

    <a
    href="https://linkedin.com/in/shubhamhariyale"
    target="_blank"
    rel="noreferrer"
>
    💼 LinkedIn
</a>

    <a
        href="mailto:shubhamhariyale11@gmail.com"
    >
        ✉️ Email
    </a>

</div>
        </div>

      </section>


{/* ENGINEERING JOURNEY */}

<section className="journey-section" id="journey">

  <h2 className="section-title">
    Engineering Journey
  </h2>

  <p className="section-subtitle">
    From Computer Science student to Software Engineer and international postgraduate.
  </p>

  <div className="timeline">

    {/* BSC */}

    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-badge">
          2018 – 2021
        </div>

        <h3>BSc Computer Science</h3>

        <h4>Devi Ahilya Vishwavidyalaya • Indore, India </h4>

        <p>
          Built strong foundations in software engineering,
          programming, databases and computer science.
        </p>

        <ul>
          <li>✓ Data Structures & Algorithms</li>
          <li>✓ Database Systems</li>
          <li>✓ Software Engineering</li>
          <li>✓ Programming Fundamentals</li>
        </ul>

        <div className="tech-tags">
          <span>C</span>
          <span>c++</span>
          <span>Java</span>
          <span>SQL</span>
        </div>

      </div>

    </div>



    {/* MBA */}

    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-badge">
          2021 – 2023
        </div>

        <h3>MBA Marketing & Business Analytics</h3>

        <h4>Devi Ahilya Vishwavidyalaya • Indore, India </h4>

        <p>
          Combined technology with business strategy,
          analytics and decision making.
        </p>

        <ul>
          <li>✓ Business Analytics</li>
          <li>✓ Strategic Management</li>
          <li>✓ Data Analysis</li>
          <li>✓ Business Intelligence</li>
        </ul>

        <div className="tech-tags">
          <span>Analytics</span>
        
          <span>Power BI</span>
          <span>tableau</span>
        </div>

      </div>

    </div>



    {/* JOB */}

    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-badge">
          Apr 2023 – Aug 2024
        </div>

        <h3>Software Developer (.NET)</h3>

        <h4>Osiya Tech • Indore, India</h4>

        <p>
          Worked professionally as a .NET developer building
          enterprise applications.
        </p>

        <ul>
          <li>✓ Developed enterprise ASP.NET applications</li>
          <li>✓ Built REST APIs and backend services</li>
          <li>✓ Designed and optimized SQL Server databases</li>
          <li>✓ Worked in Agile Scrum teams</li>
          <li>✓ Supported production deployments</li>
        </ul>

        <div className="tech-tags">
          <span>C#</span>
          <span>ASP.NET</span>
          <span>SQL Server</span>
          <span>REST API</span>
        </div>

      </div>

    </div>



    {/* UK */}

    

    {/* MSC */}

    <div className="timeline-item current">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-badge">
          Jan 2025 – Jun 2026
        </div>

        <h3>MSc Advanced Computer Science</h3>

        <h4>University of Leicester • Distinction</h4>

        <p>
          Specialized in software engineering,
          cloud computing, AI and big data.
        </p>

        <ul>
          <li>✓ Dissertation Project</li>
          <li>✓ Artificial Intelligence</li>
          <li>✓ Big Data Analytics</li>
          <li>✓ Cloud Engineering</li>
          <li>✓ Software Quality Assurance</li>
        </ul>

        <div className="tech-tags">
          <span>Python</span>
          <span>AI</span>
          <span>Big Data</span>
          <span>Cloud</span>
          <span>
            c#
          </span>
        </div>

      </div>

    </div>



    {/* DISSERTATION */}

    <div className="timeline-item highlight">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="timeline-badge">
          Feb 2026 – May 2026
        </div>

        <h3>MSc Dissertation Project</h3>

        <h4>Stock Control Management System</h4>

        <p>
          Designed and developed a full-stack inventory
          management platform using modern enterprise technologies.
        </p>

        <ul>
          <li>✓ ASP.NET Core backend</li>
          <li>✓ SQL Server database</li>
          <li>✓ Authentication system</li>
          <li>✓ Reporting dashboard</li>
          <li>✓ Inventory management</li>
        </ul>

        <div className="tech-tags">
          <span>ASP.NET Webforms</span>
          <span>C#</span>
          <span>SQL Server</span>
          <span>REST APIs</span>
        </div>

      </div>

    </div>

  </div>

</section>


{/* ABOUT */}
{/* 
<section className="section">
    <h2 className="section-title">About Me</h2>

    <div className="about-card">
        <p>
            I'm a Software Engineer with over one year of commercial
            experience developing enterprise applications using
            C#, ASP.NET Core, SQL Server and REST APIs.

            Recently graduated with an MSc in Advanced Computer
            Science (Distinction) from the University of Leicester,
            I enjoy building scalable backend systems,
            solving complex problems and learning modern
            software engineering technologies.
        </p>
    </div>
</section> */}

{/* ABOUT */}

{/* ABOUT */}
<section className="about-section" id="about">

    <div className="section-header">

        <h2>About Me</h2>

        <p>
            Software Engineer specializing in enterprise backend
            development using Microsoft technologies.
        </p>

    </div>


    <div className="about-wrapper">

        {/* LEFT SIDE */}

        <div className="about-main">

            <div className="about-card">

                <h3>
                    Building scalable backend systems and
                    enterprise applications.
                </h3>

                <p>
                    I am a Software Engineer with over one year of
                    professional experience developing enterprise
                    applications using C#, ASP.NET and SQL Server.
                </p>

                <p>
                    After completing degrees in Computer Science and
                    Business Analytics in India, I worked professionally
                    as a .NET Developer before pursuing an MSc in
                    Advanced Computer Science at the University of Leicester.
                </p>

                <p>
                    My interests include backend engineering,
                    enterprise software development,
                    database systems and scalable applications.
                </p>

            </div>


            {/* STATS */}

            <div className="about-stats">

                <div className="about-stat">
                    <h3>1+</h3>
                    <p>Years Experience</p>
                </div>

                <div className="about-stat">
                    <h3>3</h3>
                    <p>Degrees</p>
                </div>

                <div className="about-stat">
                    <h3>4+</h3>
                    <p>Projects</p>
                </div>

                <div className="about-stat">
                    <h3>MSc</h3>
                    <p>Distinction</p>
                </div>

            </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="about-sidebar">

            <div className="about-card">

                <h3>Professional Snapshot</h3>

                <div className="snapshot-item">
                    <span>Experience</span>
                    <strong>1+ Years</strong>
                </div>

                <div className="snapshot-item">
                    <span>Specialization</span>
                    <strong>.NET Backend</strong>
                </div>

                <div className="snapshot-item">
                    <span>Education</span>
                    <strong>MSc Distinction</strong>
                </div>

                <div className="snapshot-item">
                    <span>Location</span>
                    <strong>Leicester, UK</strong>
                </div>

            </div>


            <div className="about-card">

                <h3>Core Technology</h3>

                <div className="tech-stack">
                    <span>C#</span>
                    <span>ASP.NET</span>
                    <span>ASP.NET Core</span>
                    <span>SQL Server</span>
                    <span>REST API</span>
                    <span>Entity Framework</span>
                    <span>Git</span>
                    <span>Azure</span>
                </div>

            </div>

        </div>

    </div>


    {/* HIGHLIGHTS */}

    <div className="about-card highlights">

        <h3>Highlights</h3>

        <ul>
            <li>✓ Commercial software experience</li>
            <li>✓ Technical + business background</li>
            <li>✓ International postgraduate education</li>
            <li>✓ Enterprise application development</li>
            <li>✓ Strong backend engineering focus</li>
        </ul>

    </div>

</section>

{/* EXPERIENCE */}
<section className="experience-section" id="experience">

    <h2 className="section-title">
        Experience
    </h2>

    <div className="experience-card">

        <div className="experience-header">

            <div>
                <h3>
                    Software Developer (.NET)
                </h3>

                <h4>
                    Osiya Tech • Indore, India
                </h4>
            </div>

            <div className="experience-date">
                Apr 2023 – Aug 2024
            </div>

        </div>

        <ul>
            <li>
                Developed enterprise applications using
                C#, ASP.NET and SQL Server.
            </li>

            <li>
                Built REST APIs and backend services.
            </li>

            <li>
                Designed and optimized SQL databases.
            </li>

            <li>
                Resolved production issues and maintained
                enterprise software.
            </li>

            <li>
                Collaborated within Agile Scrum teams.
            </li>
        </ul>

        <div className="experience-tech">

            <span>C#</span>
            <span>ASP.NET</span>
            <span>SQL Server</span>
            <span>REST API</span>
            <span>Git</span>

        </div>

    </div>

</section>
<section className="projects-section" id="projects">

    <div className="section-header">

        <h2>Projects</h2>

        <p>
            Selected software engineering projects demonstrating
            enterprise development, backend engineering and
            full-stack application development.
        </p>

    </div>

    <div className="projects-grid">

        {/* SGH */}

        <div className="project-card">

            <div className="project-badge">
                Production Website
            </div>

            <h3>
                Shubham Glass House
            </h3>

            <p>
                Developed a modern business website and management
                platform for an aluminium and glass enterprise.
            </p>

            <ul>
                <li>✓ Responsive user interface</li>
                <li>✓ Product showcase</li>
                <li>✓ Admin management</li>
                <li>✓ Database integration</li>
                <li>✓ Business branding</li>
            </ul>

            <div className="project-tech">
                <span>ASP.NET Core</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
            </div>

            <div className="project-links">

                <a
                    href="https://shubhamglasshouse.com"
                    target="_blank"
                >
                    Live Site
                </a>

                <a
                    href="https://github.com/Shubbu1107/ShubhamGlassHouse"
                    target="_blank"
                >
                    GitHub
                </a>

            </div>

        </div>

        {/* DISSERTATION */}

        <div className="project-card">

            <div className="project-badge">
                MSc Dissertation • May 2026
            </div>

            <h3>
                Stock Control Management System
            </h3>

            <p>
                Designed and developed a full-stack inventory
                management platform for stock tracking,
                supplier management and reporting using
                Microsoft technologies.
            </p>

            <ul>
                <li>✓ Inventory management operations</li>
                <li>✓ Supplier and stock tracking</li>
                <li>✓ Authentication system</li>
                <li>✓ Reporting dashboard</li>
                <li>✓ SQL Server database design</li>
            </ul>

            <div className="project-tech">
                <span>ASP.NET Web Forms</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>ADO.NET</span>

            </div>

            <div className="project-links">

                {/* <a href="#">
                    View Details
                </a> */}

                <a href="https://github.com/Shubbu1107/Stock-management-system-">
                    GitHub
                </a>

            </div>

        </div>


        {/* MSLR */}

        <div className="project-card">

            <div className="project-badge">
                University Project
            </div>

            <h3>
                MSLR Voting Platform
            </h3>

            <p>
                Developed a secure web-based voting application
                as part of the Mobile and Web Application module
                at the University of Leicester.
            </p>

            <ul>
                <li>✓ User authentication</li>
                <li>✓ Secure voting functionality</li>
                <li>✓ ASP.NET Web API backend</li>
                <li>✓ Database integration</li>
                <li>✓ Responsive web interface</li>
            </ul>

            <div className="project-tech">
                <span>ASP.NET Core</span>
                <span>Web API</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>JavaScript</span>
            </div>

            <div className="project-links">

                {/* <a href="#">
                    View Details
                </a> */}

                <a href="https://github.com/Shubbu1107/MSLR.web">
                    GitHub
                </a>

            </div>

        </div>


        {/* INVENTORY */}

        {/* <div className="project-card">

            <div className="project-badge">
                Professional Project
            </div>

            <h3>
                Inventory Management System
            </h3>

            <p>
                Developed and maintained inventory management
                functionality during my early professional
                experience at OsiyaTech.
            </p>

            <ul>
                <li>✓ Product management</li>
                <li>✓ Database operations</li>
                <li>✓ CRUD functionality</li>
                <li>✓ SQL optimization</li>
                <li>✓ Production support</li>
            </ul>

            <div className="project-tech">
                <span>ASP.NET MVC</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>Entity Framework</span>
                <span>REST API</span>
            </div>

            <div className="project-links">

                <a href="#">
                    Enterprise Project
                </a>

            </div>

        </div> */}


    </div>

</section>
{/* TECHNICAL SKILLS */}

<section className="skills-section" id="skills">

    <h2 className="section-title">
        Technical Skills
    </h2>

    <p className="section-subtitle">
        Technologies and tools used across enterprise software development.
    </p>

    <div className="skills-grid">

        <div className="skill-card">
            <h3>Backend Development</h3>

            <div className="skill-tags">
                <span>C#</span>
                <span>.NET Framework</span>
                <span>ASP.NET MVC</span>
                <span>ASP.NET Core</span>
                <span>Web API</span>
                <span>REST APIs</span>
                <span>Entity Framework</span>
                <span>LINQ</span>
            </div>
        </div>

        <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-tags">
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>Stored Procedures</span>
                <span>Database Design</span>
                <span>Query Optimization</span>
            </div>
        </div>

        <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
            </div>
        </div>

        <div className="skill-card">
            <h3>Tools & Platforms</h3>

            <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Visual Studio</span>
                <span>IIS</span>
                <span>Azure</span>
            </div>
        </div>

        <div className="skill-card">
            <h3>Software Engineering</h3>

            <div className="skill-tags">
                <span>OOP</span>
                <span>SOLID Principles</span>
                <span>Agile Scrum</span>
                <span>Design Patterns</span>
            </div>
        </div>

        <div className="skill-card">
            <h3>Additional Technologies</h3>

            <div className="skill-tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>Power BI</span>
                <span>Big Data Analytics</span>
            </div>
        </div>

    </div>

</section>

{/* FOOTER */}

{/* FOOTER */}

<footer className="footer" id="contact">

    <div className="footer-content">

        <h2>
            Let's Build Something Great
        </h2>

        <p className="footer-text">
            I'm currently seeking Graduate Software Engineer and
            Junior .NET Developer opportunities in the UK.
        </p>

        <div className="footer-links">

            <a
                href="mailto:shubhamhariyale11@gmail.com"
                target="_blank"
            >
                ✉️ Email
            </a>

            <a
                href="https://linkedin.com/in/shubhamhariyale"
                target="_blank"    rel="noreferrer"
            >
                💼 LinkedIn
            </a>

            <a
                href="https://github.com/Shubbu1107"
                target="_blank"
            >
                🐙 GitHub
            </a>

        </div>

        <div className="footer-info">

            <p>
                📍 Leicester, United Kingdom
            </p>

            <p>
                MSc Advanced Computer Science (Distinction)
            </p>

        </div>

    </div>

    <div className="footer-bottom">
        © 2026 Shubham Hariyale • Software Engineer | .NET Developer
    </div>

</footer>
    </div>
  );
}

export default App;