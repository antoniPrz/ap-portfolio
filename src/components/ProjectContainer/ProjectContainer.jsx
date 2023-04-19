import { GitHub, Launch } from '@mui/icons-material';
import './ProjectContainer.css';

export function ProjectContainer({ project }) {
  return (
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li className='project__stack-item'>{item}</li>
          ))}
        </ul>
      )}

      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHub />
      </a>

      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        {/* <LaunchIcon /> */}
        <Launch />
      </a>
    </div>
  );
}
