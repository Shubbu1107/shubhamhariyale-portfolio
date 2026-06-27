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
        <div className="logo">SHUBHAM</div>

        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
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

          <p className="description">
            Building scalable enterprise software,
            backend systems and APIs using C#,
            ASP.NET Core, SQL Server and modern
            software engineering practices.
          </p>

          <div className="buttons">
            <button className="primary">
              View Projects
            </button>

            <button className="secondary">
              Download CV
            </button>
          </div>

          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>

        </div>

      </section>
{/* ABOUT */}

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
</section>


{/* EXPERIENCE */}

<section className="section">

    <h2 className="section-title">
        Experience
    </h2>

    <div className="timeline">

        <div className="timeline-card">

            <h3>
                Software Developer (.NET)
            </h3>

            <h4>
                Osiya Tech • Apr 2023 - Aug 2024
            </h4>

            <ul>
                <li>
                    Developed applications using C#,
                    ASP.NET Core and SQL Server.
                </li>

                <li>
                    Built REST APIs and backend services.
                </li>

                <li>
                    Designed and optimized SQL databases.
                </li>

                <li>
                    Debugged production issues and
                    maintained enterprise software.
                </li>

                <li>
                    Worked in Agile Scrum teams.
                </li>
            </ul>

        </div>

    </div>

</section>


{/* PROJECTS */}

<section className="section">

    <h2 className="section-title">
        Projects
    </h2>

    <div className="projects">

        <div className="project-card">

            <h3>
                Stock Control System
            </h3>

            <p>
                Enterprise inventory management
                system built using C#, ASP.NET
                and SQL Server.
            </p>

            <div className="tech">
                C# • ASP.NET • SQL Server
            </div>

        </div>

        <div className="project-card">

            <h3>
                Shubham Glass House
            </h3>

            <p>
                Production business website
                developed using ASP.NET Core
                and SQL Server.
            </p>

            <div className="tech">
                ASP.NET Core • SQL Server
            </div>

        </div>

    </div>

</section>


{/* SKILLS */}

<section className="section">

    <h2 className="section-title">
        Technical Skills
    </h2>

    <div className="skills">

        <div className="skill">
            <h3>C# / .NET</h3>
            <div className="bar"><span style={{width:"95%"}}></span></div>
        </div>

        <div className="skill">
            <h3>SQL Server</h3>
            <div className="bar"><span style={{width:"90%"}}></span></div>
        </div>

        <div className="skill">
            <h3>ASP.NET Core</h3>
            <div className="bar"><span style={{width:"90%"}}></span></div>
        </div>

        <div className="skill">
            <h3>JavaScript</h3>
            <div className="bar"><span style={{width:"70%"}}></span></div>
        </div>

    </div>

</section>


{/* FOOTER */}

<footer className="footer">

    <h3>
        Shubham Hariyale
    </h3>

    <p>
        Software Engineer | .NET Developer
    </p>

    <p>
        Leicester, United Kingdom
    </p>

    <p>
        © 2026 Shubham Hariyale
    </p>

</footer>
    </div>
  );
}

export default App;