import './TechStack.css';
import StackImages from './StackImages';

const TechStack = ({techstack}) => {
    return (
      <div className="tech-text"> 
            <ul>
              {techstack.map((item, index) => (
                console.log(item), console.log(index),
                <div className="images" key={index}> {StackImages[item]['image']} </div>
              ))}
            </ul>
      </div>  
    );
};

export default TechStack;