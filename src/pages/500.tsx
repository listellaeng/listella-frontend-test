import Typography from '@mui/material/Typography';
import Link from '../components/common/Link';

export default function Error500() {
  return (
    <>
      <Typography variant='h1' textAlign='center'>
        404 - Page not found.
      </Typography>
      <Typography variant='h2' textAlign='center'>
        Go to <Link href='/'>Home</Link> page.
      </Typography>
    </>
  );
}
