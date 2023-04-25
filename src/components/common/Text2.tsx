import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export default function Text2({ sx, children, ...rest }: TypographyProps) {
  return (
    <Typography
      sx={{ ...(sx || {}), fontSize: '26px', lineHeight: '35.41px' }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
