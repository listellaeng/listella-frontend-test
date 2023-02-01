import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export default function Text3({ sx, children, ...rest }: TypographyProps) {
  return (
    <Typography
      sx={{ ...(sx || {}), fontSize: '24px', lineHeight: '32.69px' }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
