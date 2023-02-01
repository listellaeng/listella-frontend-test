import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Link from '../../components/common/Link';

export default function ErrorPage() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <>
      <Typography variant='h1' textAlign='center'>
        Something went wrong.
      </Typography>
      <Typography variant='h2' textAlign='center'>
        Status Code - ${status}
      </Typography>
      <Typography variant='h2' textAlign='center'>
        Go to <Link href='/'>Home</Link> page.
      </Typography>
    </>
  );
}
