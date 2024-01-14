'use client';
import { CourseState } from '@/app/Types/Course.type';
import {
  Card,
  Box,
  Typography,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { LoadImage } from '@/app/Types/Image..type';

// Types
interface ItemProps {
  course: CourseState;
}

const Item: React.FC<ItemProps> = ({ course }) => {
  return (
    <Card>
      {/* Image */}
      <Box className="md:h-80 h-60 relative rounded" component="section">
        <Image
          loader={LoadImage}
          src={course.img}
          alt={'image'}
          fill
          style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
          priority
          sizes="(max-width: 1200px) 100vw"
        />
      </Box>
      {/* Detail */}
      <CardContent>
        <Box className="flex flex-col">
          <Typography variant="h3" component="h1" textAlign="center">
            {course.title}
          </Typography>
          <Typography variant="h6" component="p">
            {course.description}
          </Typography>
        </Box>
      </CardContent>
      {/* Actions */}
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          خرید دوره
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
