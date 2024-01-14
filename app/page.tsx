import Course from './Components/Course';
import { courseData } from './Data/Course';
const HomePage = () => {
  return (
    <div className="grid grid-cols-1 container p-5 mx-auto">
      <Course courses={courseData} />
    </div>
  );
};

export default HomePage;
