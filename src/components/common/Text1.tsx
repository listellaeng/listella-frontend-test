import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export default function Text1({ sx, children, ...rest }: TypographyProps) {
  return (
    <Typography
      sx={{ ...(sx || {}), fontSize: '32px', lineHeight: '43.58px' }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
