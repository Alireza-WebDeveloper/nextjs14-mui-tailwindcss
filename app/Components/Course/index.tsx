import { CourseState } from '@/app/Types/Course.type';
import React from 'react';
import Title from './Title';
import List from './List';

// Types
interface CourseProps {
  courses: CourseState[];
}
// Component
const Course: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className="flex flex-col space-y-4">
      <Title title={'نمایش تمامی دوره ها'} />
      <List courses={courses} />
    </div>
  );
};

export default Course;
