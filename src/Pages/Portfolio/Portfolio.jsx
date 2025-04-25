import Footer from '../Footer';

const projects = [
  {
    id: 1,
    name: 'Smart Home System',
    description: 'IoT-based home automation system with voice control',
    type: 'hardware',
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description: 'Full-stack online shopping platform with payment integration',
    type: 'software',
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 3,
    name: 'Robot Arm Controller',
    description: '3D printed robotic arm with precision control',
    type: 'hardware',
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 4,
    name: 'Task Management App',
    description: 'Mobile-first task management application with real-time sync',
    type: 'software',
    image: 'https://picsum.photos/400/300?random=4',
  },
];

const groupedProjects = {
  software: projects.filter(p => p.type === 'software'),
  hardware: projects.filter(p => p.type === 'hardware'),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h1>

        {Object.entries(groupedProjects).map(([type, items]) => (
          <div key={type} className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 capitalize">
              {type} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
