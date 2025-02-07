import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

function ProjectShowcaseCard({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group relative p-[2px] rounded-xl transition-all duration-500 hover:scale-[1.01]">
      {/* Animated neon border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>

      {/* Card content */}
      <div className="relative flex flex-col bg-gray-900 rounded-xl h-full">
        <div className="h-48 overflow-hidden rounded-t-xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 flex-1">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
              >
                <FaExternalLinkAlt size={20} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
              >
                <FaGithubSquare size={20} />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectShowcaseCard;