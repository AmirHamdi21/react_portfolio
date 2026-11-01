import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';
import { ProjectCard } from '../ui/ProjectCard';

const featuredProject = {
  title: 'EduVerse',
  dateRange: 'Sep 2025 – Jul 2026',
  description:
    'Graduation project (rated Excellent): an AI-powered educational management platform built in Flutter with a NestJS and MySQL backend, supporting three user roles: students, instructors, and teaching assistants. Covers course management, grades, attendance, and quizzes in the Flutter app, with REST API endpoints integrated from the NestJS backend, along with an AI feature and role-based access / authentication.',
  technologies: ['Flutter', 'Dart', 'BLoC', 'NestJS', 'MySQL', 'REST APIs', 'WebSockets', 'Dio'],
  githubUrl: 'https://github.com/AmirHamdi21/EduVerse',
  liveUrl: 'https://github.com/AmirHamdi21/EduVerse/releases/download/v1.0.0/app-release.apk',
  liveLabel: 'Download APK',
  imageUrl: 'https://raw.githubusercontent.com/AmirHamdi21/EduVerse/main/assets/images/onboarding_1.jpg',
  badge: 'Graduation Project',
};

const otherProjects = [
  {
    title: 'Fitlytic',
    dateRange: 'Mar 2025 – May 2025',
    description:
      'A fitness app with workout and calorie tracking, built with Flutter and using Firebase Auth and Firestore for authentication and data, with Cubit state management supporting the app flows.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cubit'],
    githubUrl: 'https://github.com/AmirHamdi21/Fitlytic_App',
  },
  {
    title: 'GPAce',
    dateRange: 'Sep 2024 – Oct 2024',
    description:
      'A GPA calculator app for GPA calculation and academic data management, with input validation and local storage.',
    technologies: ['Flutter', 'Dart', 'Sqflite'],
    githubUrl: 'https://github.com/AmirHamdi21/GPAce',
  },
  {
    title: 'My Trip',
    dateRange: 'Sep 2025',
    description:
      'React frontend for a smart airline booking system. Passengers can search and book flights, admins manage flights and users, and crew members view assigned flights, all behind role-based authentication.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    githubUrl: 'https://github.com/AmirHamdi21/new_trip',
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <PanelHead
        title="Selected builds"
        note={<a href="https://github.com/AmirHamdi21" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors duration-200">archive → github.com/AmirHamdi21</a>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3.5 items-start">
        <SectionFade>
          <ProjectCard {...featuredProject} featured index={0} />
        </SectionFade>

        <div className="grid gap-3.5">
          {otherProjects.map((project, index) => (
            <SectionFade key={project.title} delay={0.08 + index * 0.06}>
              <ProjectCard
                title={project.title}
                dateRange={project.dateRange}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                index={index + 1}
              />
            </SectionFade>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
