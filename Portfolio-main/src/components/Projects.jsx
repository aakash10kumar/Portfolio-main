import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Learning App",
      description:
        "An online learning platform with instructor panels and course management.",
      role: "REST API for app, admin, instructors panel",
      TechStack: "NodeJs, Express, MongoDB (Mongoose)",
      components: "User App, Instructor panel, Admin Panel",
      image:
        "https://t3.ftcdn.net/jpg/02/86/04/26/240_F_286042606_fIhZBhTxN7SgW79D7MeUZfAIGNuM5wia.jpg"
    },
    {
      title: "Organic Bazar App",
      description:
        "Manage plants and get notifications for nutritional needs.",
      role: "REST API, Notifications, Admin Panel",
      TechStack: "NodeJs, Express, PostgreSQL (Sequelize)",
      components: "User App, Admin Panel",
      image:
        "https://media.gettyimages.com/id/1556119299/photo/empty-aisles-at-a-supermarket.jpg?s=612x612&w=0&k=20&c=jsJAvDjAY2DAMyWE2NMNcr4IguRZjWb_zcspLwMQ6ko=",
    },
    {
      title: "PujaPathaurSeva",
      description:
        "Book religious services with verified priests using secure RESTful APIs.",
      role: "Backend development, API design, DB management",
      TechStack: "Node.js, Express.js, MongoDB, JWT",
      components: "User App, Admin Panel",
      image:
        "https://media.gettyimages.com/id/1953998293/photo/ayodhya-india-a-general-view-of-the-ram-mandir-on-the-day-of-its-consecration-ceremony.jpg?s=612x612&w=0&k=20&c=nJIgGdE_0ueMf1ONUFUHmSGhAL324DIjLZSTVNfo6tY=",
    },
  ];

  return (
    <div className=" text-white py-16 px-6 md:px-16" id="projects">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-400">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 
             shadow-md transform hover:scale-[1.03] 
             hover:shadow-xl hover:shadow-indigo-500/30 
             hover:border-indigo-500 transition-all duration-300 ease-in-out"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-indigo-400 group-hover:text-white transition">
                {project.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>

              <div className="text-sm text-gray-400 mt-3 space-y-2">
                <p>
                  <span className="font-semibold text-white">Role:</span>{" "}
                  {project.role}
                </p>
                <p>
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  {project.TechStack}
                </p>
                <p>
                  <span className="font-semibold text-white">Components:</span>{" "}
                  {project.components}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Projects;
