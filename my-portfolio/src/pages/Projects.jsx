import { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "NSCC Timesheet Simplification with Power Automate",
      image: "/projects/powerautomate.png",
      description: "Automated email notifications using Power Automate and Microsoft Forms.",
      tech: "Power Automate, Microsoft Forms, SQL",
      details: `This project leverages Microsoft Power Automate to streamline faculty attendance tracking by automating bi-weekly email reminders and form submissions.

When a new reporting period begins, Power Automate sends dynamic, personalized emails to each employee, prompting them to confirm their attendance or report time off. Responses submitted via Microsoft Forms are automatically captured and processed — eliminating manual tracking and follow-up.

The flow checks for missing submissions, updates the database accordingly, and ensures that administrators always have up-to-date information with minimal intervention. This automation significantly reduces admin overhead, improves accuracy, and ensures accountability during each reporting cycle.`
    },
    {
      title: "Faculty Timesheet Canvas App",
      image: "/projects/canvasapp.png",
      description: "A user-friendly Power Apps Canvas App for timesheet submissions.",
      tech: "Power Apps, Canvas, SQL Server",
      details: `This Power Apps Canvas App was developed as an improved version of a system I had previously created using Microsoft Forms and Power Automate, designed to address faculty timesheet submissions.

The app provides a more intuitive and structured user interface, guiding faculty through step-by-step timesheet submissions. It dynamically retrieves the relevant reporting period from a connected SQL Server database and allows users to report sick leave, time off, or confirm no absences — all with real-time input validation.

Users can review their entries before submitting, and after confirmation, Power Automate handles backend updates to the SQL database. This version improves upon the limitations of the earlier form-based workflow by reducing user error, enhancing the user experience, and offering more control over data validation and reporting.`
    },
    {
      title: "Faculty Timesheet Admin Dashboard",
      image: "/projects/reactadminapp.png",
      description: "A React-based admin tool for managing employee submissions and time off records.",
      tech: "React, Express.js, SQL Server, Bootstrap, Axios, Node.js",
      github: "https://github.com/DasDevn/faculty-timesheet-app",
      details: `This admin-facing dashboard was developed to help faculty administrators manage timesheet submissions and reported time off. Built with React and a Node.js/Express backend, the system allows for easy employee lookup, record viewing, and administrative actions.

Key features:
• Search for employee data by ID with real-time submission and time off visibility  
• Expandable submission rows to view related time off records for each reporting period  
• Delete individual time off records securely with confirmation prompts  
• Add new employees with email-based EmployeeID generation  
• Clear error and success messages to guide user actions  

This project supports the overall faculty time reporting system by giving administrators a simple and effective way to access, edit, and manage records — reducing manual overhead and increasing data transparency.`
    },
    {
      title: "Hand Gesture-Controlled Media Navigation",
      image: "/projects/handtracking.png",
      description: "A computer vision app that uses hand gestures to trigger keyboard inputs.",
      tech: "Python, OpenCV, MediaPipe, Math, Keyboard",
      github: "https://github.com/DasDevn/GestureControlledSlideshow",
      details: `This project allows users to control keyboard input using hand gestures captured through a webcam. Built with MediaPipe and OpenCV, it detects swipe gestures and pinches in real-time and triggers keypresses using Python's keyboard module.

Key features:
• Real-time hand tracking using MediaPipe  
• Swipe left/right to trigger ← or → keyboard inputs  
• Pinch detection for triggering exit or custom actions  
• Gesture cooldown timer to prevent repeated triggers  
• Visual feedback using OpenCV with hand landmark rendering  

This project demonstrates practical applications of computer vision, gesture recognition, and Python-based system interaction without needing any special hardware.`
    },
    {
      title: "Human vs Zombie Survival Simulation",
      image: "/projects/humanvszombie.png",
      description: "A C++ console simulation modeling survival dynamics between humans and zombies.",
      tech: "C++, OOP, Polymorphism",
      github: "https://github.com/DasDevn/HumanAndZombieSimulation",
      details: `This project simulates a grid-based world where humans and zombies interact in a turn-based environment. The simulation uses object-oriented programming principles to define organisms with shared and unique behaviors.

Key features:
• Turn-based interaction between humans and zombies  
• Humans can recruit others; zombies can infect humans  
• Utilizes inheritance and polymorphism for clean class structure  
• Dynamic memory management for grid updates and organism tracking  
• Console visualization of evolving survival patterns over time

This project helped reinforce my understanding of OOP, data structures, and simulation design in C++ while offering a fun and visual way to track logic in real-time.`
    },
    {
      title: "Profile Management System",
      image: "/projects/profilemanagement.png",
      description: "A full-stack profile management tool built with Next.js and Vercel Postgres.",
      tech: "Next.js (App Router), Server Actions, Vercel Postgres, React, Bootstrap",
      github: "https://github.com/DasDevn/profilemanager",
      details: `This application allows users to create, store, and view personal profiles in real time using a serverless PostgreSQL database hosted on Vercel.

Built with modern full-stack technologies, the form captures user data securely via Server Actions in Next.js, stores it in a Vercel Postgres database, and displays all saved entries in a structured, responsive table.

Key features:
• Server-side form handling using Next.js Server Actions  
• Real-time profile listing with no caching (revalidate: 0)  
• Clean, responsive interface using Bootstrap 4  
• Secure SQL inserts with parameterized queries  

This project demonstrates practical use of full-stack web development principles, efficient data handling without a dedicated API layer, and a modern React-based UI experience.`
    },
    {
      title: "E-Commerce Web App",
      image: "/projects/ecommerce.png",
      description: "A fully functional Razor Pages-based e-commerce site with photo uploads, shopping cart, and admin authentication.",
      tech: "ASP.NET Core, Razor Pages, SQLite, C#, HTML/CSS",
      github: "https://github.com/DasDevn/ecommerce",
      details: `This e-commerce web application was built using ASP.NET Core and Razor Pages, featuring a full product catalog, individual product detail views, and a cookie-based shopping cart system.

Key features:
• Product creation via admin interface, including photo upload and file storage  
• Secure admin login system using cookie-based authentication  
• Detailed product display pages and cart item tracking using browser cookies  
• SQLite database with Entity Framework Core for fast and simple data storage  
• Custom validation, file management, and real-world CRUD functionality

The project demonstrates back-end and front-end integration, user authentication, state management, and practical use of ASP.NET Core’s page model architecture.`
    },
    {
      title: "Jetpack Weather App",
      image: "/projects/weatherapp.png",
      description: "A Jetpack Compose Android app with tabbed weather views.",
      tech: "Kotlin, Jetpack Compose, Navigation, Weather API",
      details: `This Android application displays current, hourly, and daily weather forecasts using Jetpack Compose and a clean navigation structure.

Built with modern Android practices, it features:
• Dynamic top and bottom app bars using Material3  
• Tabbed navigation via a NavHostController and composable screens  
• ViewModel-driven architecture using StateFlow for reactive weather updates  
• Real-time weather from a remote API  
• Location-based display with elegant UI theming

This project demonstrates advanced Compose UI layout, modular screen design, and API integration in a multi-tab Android experience.`
    },
    {
      title: "AI Recipe Generator",
      image: "/projects/recipegen.png",
      description: "A web app that generates full recipes based on user-entered ingredients using GPT-2.",
      tech: "Flask, Python, Transformers (Hugging Face), HTML",
      github: "https://github.com/DasDevn/Assignment3-ai-app",
      details: `This AI-powered web application allows users to enter a list of ingredients and instantly receive a unique recipe generated by a fine-tuned GPT-2 model.

Built with Flask and Hugging Face Transformers, the app uses the 'recipe-nlg-gpt2' model to generate full recipe instructions. The backend handles form input, dynamically constructs prompts, and displays the generated recipe cleanly via HTML templates.

This project highlights skills in AI prompt design, backend integration with NLP models, and user-friendly frontend delivery through a lightweight Flask framework.`
    },
    {
      title: "MP3 Media Player (WPF App)",
      image: "/projects/mediaplayer.png",
      description: "A custom-built WPF desktop application for playing and editing MP3 metadata.",
      tech: "C#, WPF, XAML, TagLib#, MVVM Concepts",
      github: "https://github.com/DasDevn/MediaPlayer",
      details: `This project is a functional WPF-based MP3 media player that allows users to play songs, view metadata, and edit MP3 tags in real time.

Key features:
• Play, pause, stop functionality with a custom media control bar  
• Real-time display of song duration and playback progress  
• Displays album art and metadata (title, artist, album, year)  
• Allows users to edit and save updated MP3 tag info using the TagLib# library  
• Uses DispatcherTimer for precise UI updates and a responsive experience

This app demonstrates proficiency in desktop UI development, file I/O, event-driven programming, and integrating third-party libraries for media handling.`
    },
    {
      title: "IMDb Movie Management App",
      image: "/projects/imdb.png",
      description: "A WPF desktop app for browsing and managing IMDb-style movie and TV data.",
      tech: "C#, WPF, SQL Server, Entity Framework",
      github: "https://github.com/DasDevn/IMDBFinalProject",
      details: `Built a WPF desktop application that simulates IMDb functionality using a connected SQL database. 

Users can search for and view detailed information on artists, movies, and TV shows — including release dates, genres, ratings, and roles.

The app features:
• Searchable artist profiles with birth/death years and credited appearances  
• Expandable TV show listings showing writers, actors, and episodes  
• A styled and navigable UI built with XAML  
• Optimized data access using LINQ and SQL  
• Real-world design patterns for modular, responsive, and user-friendly layout

This project demonstrates skills in object-oriented programming, relational databases, and data-driven UI design.`
    }
  ];

  return (
    <section className="min-h-[calc(100vh-112px)] px-6 pt-20 pb-20 font-mono">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-contain border-b border-black bg-white"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm italic">Tech used: {project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-lg w-full rounded-lg p-6 text-left shadow-lg relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-2 right-3 text-xl font-bold text-black hover:text-red-600"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-56 object-contain rounded border border-black mb-4"
            />
            <p className="mb-4">{activeProject.details}</p>
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                View on GitHub →
              </a>
            )}
            <p className="text-sm italic mt-4">Tech used: {activeProject.tech}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
