import { useEffect, useRef, useState } from 'react';
import { Code2, Server, Palette, Settings, MonitorCog } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Vue'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['NodeJS', 'ExpressJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Palette,
    title: 'Styling',
    skills: [
      'SCSS',
      'Bootstrap',
      'TailwindCSS',
      'Material UI',
      'Styled Components',
      'CSS-in-JS',
    ],
  },
  {
    icon: Settings,
    title: 'State Management',
    skills: ['Redux', 'Redux Toolkit', 'RTK Query', 'Vuex', 'Pinia'],
  },
  {
    icon: MonitorCog,
    title: 'Tools',
    skills: ['Jira', 'Git', 'Docker', 'Kubernetes'],
  },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.skill-category');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-[#0F4C75] to-[#1B262C]"
    >
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BBE1FA] mb-4">
            Technical Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] mx-auto rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const isVisible = visibleSkills.has(categoryIndex);

              return (
                <div
                  key={categoryIndex}
                  data-index={categoryIndex}
                  className={`skill-category group relative p-8 bg-[#1B262C]/50 backdrop-blur-sm border border-[#3282B8]/20 rounded-2xl transition-all duration-700 hover:border-[#BBE1FA]/50 hover:shadow-2xl hover:shadow-[#3282B8]/20 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#3282B8] to-[#BBE1FA] rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center shadow-lg">
                    <Icon className="text-[#1B262C]" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#BBE1FA] mb-6 ml-12">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-[#0F4C75]/60 text-[#BBE1FA] rounded-lg text-sm font-medium hover:bg-[#3282B8] hover:scale-105 transition-all duration-300 cursor-default border border-[#3282B8]/30 hover:border-[#BBE1FA]/50"
                        style={{
                          animationDelay: `${
                            categoryIndex * 150 + skillIndex * 50
                          }ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
