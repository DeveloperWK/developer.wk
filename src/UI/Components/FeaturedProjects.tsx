import ProjectShowcaseCard from "./ProjectShowcaseCard";

const FeaturedProjects = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        <ProjectShowcaseCard
          title="AI Chat Application"
          description="A real-time chat application powered by artificial intelligence, featuring natural language processing and context awareness."
          imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
          liveUrl="https://example.com"
          githubUrl="https://github.com"
          tags={["React", "TypeScript", "AI", "WebSocket"]}
        />
        <ProjectShowcaseCard
          title="AI Chat Application"
          description="A real-time chat application powered by artificial intelligence, featuring natural language processing and context awareness."
          imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
          liveUrl="https://example.com"
          githubUrl="https://github.com"
          tags={["React", "TypeScript", "AI", "WebSocket"]}
        />
        <ProjectShowcaseCard
          title="AI Chat Application"
          description="A real-time chat application powered by artificial intelligence, featuring natural language processing and context awareness."
          imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
          liveUrl="https://example.com"
          githubUrl="https://github.com"
          tags={["React", "TypeScript", "AI", "WebSocket"]}
        />
        <ProjectShowcaseCard
          title="AI Chat Application"
          description="A real-time chat application powered by artificial intelligence, featuring natural language processing and context awareness."
          imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
          liveUrl="https://example.com"
          githubUrl="https://github.com"
          tags={["React", "TypeScript", "AI", "WebSocket"]}
        />
      </section>
    </>
  );
};

export default FeaturedProjects;
