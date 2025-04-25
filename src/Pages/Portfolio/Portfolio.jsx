import { useState } from 'react';
import Footer from '../Footer';

// Sample projects data
const projects = [
  {
    id: 1,
    name: 'Smart Home System',
    description: 'IoT-based home automation system with voice control',
    type: 'hardware',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description: 'Full-stack online shopping platform with payment integration',
    type: 'software',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 3,
    name: 'Robot Arm Controller',
    description: '3D printed robotic arm with precision control',
    type: 'hardware',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 4,
    name: 'Task Management App',
    description: 'Mobile-first task management application with real-time sync',
    type: 'software',
    image: 'https://picsum.photos/400/300?random=4'
  },
];

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          My Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'hardware', 'software'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects found in this category
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}