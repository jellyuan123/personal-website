// StackImages.jsx
import './StackImages.css';

const StackImages = {
  "React": {
    image: (
      <div className="image-container">
        <img className="tech-logo" src="/favicon.ico" width="80" alt="react" />
        <div className="overlay-text">React</div>
      </div>
    )
  },
  "TailwindCSS": {
    image: (
      <div className="image-container">
        <img className="tech-logo" src="/tcsslogo.png" width="80" alt="tailwindcss" />
        <div className="overlay-text">Tailwind CSS</div>
      </div>
    )
  },
  "Next": {
    image: (
      <div className="image-container">
        <img className="tech-logo" src="/nextjsiconreal.png" width="80" alt="next" />
        <div className="overlay-text">Next.js</div>
      </div>
    )
  },
  "Jinja": {
    image: (
      <div className="image-container">
        <img className="tech-logo" src="/jinjaicon.png" width="80" alt="jinja" />
        <div className="overlay-text">Jinja</div>
      </div>
    )
  },
  "Python": {
    image: (
      <div className="image-container">
        <img className="tech-logo" src="/pythonicon.png" width="80" alt="python" />
        <div className="overlay-text">Python</div>
      </div>
    )
  }
};

export default StackImages;
