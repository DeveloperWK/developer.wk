import React from 'react';
import { Brain, Database, Globe, Layout, Server, Smartphone, Code2, Github as Git } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  category: string;
  subSkills?: { name: string; proficiency: number }[];
}

function SkillsSection() {
  const skills: Skill[] = [
    { 
      name: 'React', 
      proficiency: 90, 
      icon: <Layout className="w-6 h-6" />, 
      category: 'Frontend',
      subSkills: [
        { name: 'Next.js', proficiency: 85 },
      ]
    },
    { name: 'Node.js', proficiency: 85, icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'MongoDB', proficiency: 80, icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'TypeScript', proficiency: 85, icon: <Code2 className="w-6 h-6" />, category: 'Language' },
    { name: 'JavaScript', proficiency: 85, icon: <Code2 className="w-6 h-6" />, category: 'Language' },
    { name: 'REST APIs', proficiency: 90, icon: <Globe className="w-6 h-6" />, category: 'Backend' },
    { name: 'React Native', proficiency: 75, icon: <Smartphone className="w-6 h-6" />, category: 'Mobile' },
    { name: 'Git', proficiency: 85, icon: <Git className="w-6 h-6" />, category: 'Tools' },
    { name: 'AI/ML', proficiency: 70, icon: <Brain className="w-6 h-6" />, category: 'Data Science' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="min-h-screen bg-[#111827] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-300">A comprehensive overview of my technical expertise and proficiency levels</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-400">{skill.icon}</span>
                            <span className="font-medium text-gray-200">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.proficiency}%`,
                              animation: 'progressAnimation 1.5s ease-out forwards'
                            }}
                          />
                        </div>
                      </div>
                      
                      {skill.subSkills && skill.subSkills.length > 0 && (
                        <div className="pl-8 space-y-3">
                          {skill.subSkills.map(subSkill => (
                            <div key={subSkill.name} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-300">{subSkill.name}</span>
                                <span className="text-sm text-gray-400">{subSkill.proficiency}%</span>
                              </div>
                              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full transition-all duration-1000 ease-out"
                                  style={{ 
                                    width: `${subSkill.proficiency}%`,
                                    animation: 'progressAnimation 1.5s ease-out forwards'
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default SkillsSection;