import Link from 'next/link';
import { Button } from '@mui/material';
import React from 'react';

interface ButtonLinkProps {
  text: string;
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button
        size="large"
        variant="text"
        color="inherit"
        sx={{ fontSize: '1.4rem' }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonLink;
