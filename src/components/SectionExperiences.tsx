import { Content, ExternalLink, Heading } from 'components';
import { data } from 'data';

export const SectionExperiences = () => (
  <div className="mt-16">
    <Heading title="Experiences" />
    <div className="space-y-6">
      {data.experiences.map((experience, index) => (
        <div key={index} className="space-y-2">
          <ExternalLink className="text-xl font-semibold" href={experience.link}>
            {experience.title}
          </ExternalLink>
          <Content>{experience.content}</Content>
        </div>
      ))}
    </div>
  </div>
);
