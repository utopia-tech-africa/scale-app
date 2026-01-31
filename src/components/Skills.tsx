import { Code, TestTube, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Redux'],
  },
  {
    title: 'Quality Assurance',
    icon: TestTube,
    skills: ['Test Planning', 'Automated Testing', 'Manual Testing', 'Selenium', 'Cypress', 'Jest', 'API Testing', 'Bug Tracking'],
  },
  {
    title: 'UI/UX',
    icon: Layout,
    skills: ['Responsive Design', 'Accessibility', 'Figma', 'User Testing', 'Wireframing', 'Design Systems'],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Agile/Scrum', 'CI/CD', 'npm/yarn', 'REST APIs'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Skills
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-mono text-muted-foreground bg-muted rounded hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
