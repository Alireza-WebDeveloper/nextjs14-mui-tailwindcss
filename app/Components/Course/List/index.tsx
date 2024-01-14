import { CourseState } from '@/app/Types/Course.type';
import React from 'react';
import Item from '../Item';

// Types
interface ListProps {
  courses: CourseState[];
}
// Component
const List: React.FC<ListProps> = ({ courses }) => {
  // Create Course Items
  const renderCourseItem = () => {
    return courses.map((course) => {
      return <Item key={course.id} course={course} />;
    });
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {renderCourseItem()}
    </div>
  );
};

export default List;
