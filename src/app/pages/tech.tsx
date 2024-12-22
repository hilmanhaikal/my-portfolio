type TechProps = {
    technologies: string[];
  };
  
  const Tech = ({ technologies }: TechProps) => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Tech Stack</h1>
        <ul className="list-disc pl-5">
          {technologies.map((tech) => (
            <li key={tech} className="text-lg">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default function TechPage() {
    const techList = ['Rust', 'TypeScript', 'Next.js', 'Tailwind CSS'];
  
    return <Tech technologies={techList} />;
  }
  