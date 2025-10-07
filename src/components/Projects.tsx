import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Users, Sparkles } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    title: 'Broker Management System',
    role: 'Frontend Team Lead',
    team: '3-person frontend team',
    highlights: [
      '10x performance improvement migrating jQuery to React',
      'Built real-time voting/analytics platform with interactive charts',
      'Developed concession management system',
      'Implemented RBAC for financial data security',
    ],
    tech: ['React', 'React Context', 'TypeScript', 'MUI', 'SpringBoot'],
    gradient: 'from-[#3282B8] to-[#BBE1FA]',
  },
  {
    icon: Sparkles,
    title: 'Startup Empowerment Tool',
    role: 'Frontend Lead & Mentor',
    team: 'Led complete frontend + mentored 2 junior developers',
    highlights: [
      'Built PDF management system with annotations/highlights',
      'Implemented Next Auth for user differentiation (admin/founders)',
      'Utilized NextJS SSR and server actions for performance/SEO',
    ],
    tech: [
      'NextJS',
      'Next Auth',
      'TypeScript',
      'TailwindCSS',
      'Material UI',
      'FastAPI',
    ],
    gradient: 'from-[#BBE1FA] to-[#3282B8]',
  },
  {
    icon: Shield,
    title: 'PMS Portal',
    role: 'Frontend Lead',
    team: 'Led frontend refactoring initiative',
    highlights: [
      '40% reduction in load times through optimization',
      'Delivered features 10-15% ahead of schedule',
      'Designed multi-level RBAC for financial data security',
    ],
    tech: [
      'ReactJS',
      'RTK Query',
      'TypeScript',
      'TailwindCSS',
      'Mantine UI',
      'FastAPI',
    ],
    gradient: 'from-[#0F4C75] to-[#3282B8]',
  },
  {
    icon: Users,
    title: 'Cash Management Application',
    role: 'Frontend Developer',
    team: 'Full-stack development',
    highlights: [
      'Developed user permission flows for enhanced security',
      'Created interactive transaction charts with smooth transitions',
      'Built adaptable, reusable components with dynamic styling',
    ],
    tech: ['VueJS', 'Vuex', 'SCSS', 'Django'],
    gradient: 'from-[#3282B8] to-[#0F4C75]',
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.project-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #BBE1FA 25%, transparent 25%, transparent 75%, #BBE1FA 75%, #BBE1FA), linear-gradient(45deg, #BBE1FA 25%, transparent 25%, transparent 75%, #BBE1FA 75%, #BBE1FA)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BBE1FA] mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleProjects.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`project-item group relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${
                        isEven ? '-translate-x-12' : 'translate-x-12'
                      }`
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-[#1B262C]/80 backdrop-blur-sm border-2 border-[#3282B8]/30 rounded-2xl p-8 hover:border-[#BBE1FA]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3282B8]/30">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-2xl bg-[#1B262C] flex items-center justify-center">
                          <Icon className="text-[#BBE1FA]" size={36} />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#BBE1FA] mb-2 group-hover:text-[#3282B8] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-[#BBE1FA]/70 font-medium mb-1">
                          {project.role}
                        </p>
                        <p className="text-[#BBE1FA]/60 text-sm">
                          {project.team}
                        </p>
                      </div>

                      <div className="mb-6 space-y-3">
                        {project.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-3">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#3282B8] flex-shrink-0" />
                            <p className="text-[#BBE1FA]/90 leading-relaxed">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-[#0F4C75]/60 text-[#BBE1FA] rounded-lg text-sm font-medium border border-[#3282B8]/40 hover:bg-[#3282B8] hover:border-[#BBE1FA]/50 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
