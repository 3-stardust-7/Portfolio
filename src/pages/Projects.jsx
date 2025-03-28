import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  
const projectsData = [
  {
    id: 1,
    title: "Hear-Us-Out",
    description: (
      <ul className="list-disc  pl-5">
        <li>
          Bridges the gap between{" "}
          <strong>citizens, NGOs, and government authorities</strong>.
        </li>
        <li>
          Allows citizens to <strong>register complaints</strong> on public
          services or infrastructure.
        </li>
        <li>
          Partnering NGOs <strong>verify complaints</strong> for transparency
          and legitimacy.
        </li>
        <li>
          Verified complaints are <strong>publicly posted</strong> and forwarded
          to authorities.
        </li>
        <li>
          Users can <strong>track progress</strong> with real-time updates.
        </li>
        <li>
          Promotes{" "}
          <strong>
            accountability, transparency, and efficient problem resolution
          </strong>
          .
        </li>
      </ul>
    ),
    image: "/hearUsOut.png",
    link: "https://github.com/3-stardust-7/Hear-Us-Out", // Add the project link if available
  },

  {
    id: 2,
    title: "Nandana Surgicare",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed a{" "}
          <strong>
            responsive healthcare platform for Nandana Surgicare using React and
            Tailwind CSS
          </strong>
          . Ensured smooth user experience by integrating dynamic features and
          enhancing system performance.
        </li>
        <li>
          <strong>Nandana Surgicare is a trusted distributor</strong> of
          biomedical equipment, enabling healthcare professionals to deliver
          exceptional patient care.
        </li>

        <li>
          Ensures <strong>high-quality healthcare services.</strong>
        </li>
      </ul>
    ),
    image: "/surgicare.png",
    link: "https://github.com/3-stardust-7/Surgicare",
  },
  {
    id: 3,
    title: "Project Three",
    description: (
      <ul className="text-black list-disc list-inside">
        <li>
          Developed a simple and responsive To-Do app using HTML, CSS, and
          JavaScript.
        </li>
        <li>Implemented task addition, deletion, and completion features.</li>
        <li>Used local storage to save tasks and ensure data persistence.</li>
      </ul>
    ),
    image: "/todo.png",
    link: "https://github.com/3-stardust-7/To-Do-App/",
  },
];

  return (
    <>
      <div className=" fixed w-full z-100 ">
        <Navbar />
      </div>
      <div className="h-screen bg-gradient-to-b from-black to-gray-500  text-white">
        <div className="text-5xl p-30 font-bold">
          My <span className="text-red-300">Projects</span>
        </div>
        <section
          id="projects"
          className="bg-gradient-to-b from-black to-gray-500 text-white "
        >
          <div className="container mx-auto  px-6">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-20 lg:p-20">
              {" "}
              {/* Only 1 column for all screen sizes */}
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="bg-white lg:w-4/5 mx-auto rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full sm:h-100 lg:h-150 p-2 rounded-2xl object-cover"
                  />

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-2xl text-black font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-black pl mb-4">{project.description}</p>

                    {/* Link to Project */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Projects