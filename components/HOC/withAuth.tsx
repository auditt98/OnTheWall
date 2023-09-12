import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const { status, data } = useSession();
    useEffect(() => {
      if (status === 'unauthenticated') {
				// router.push('/profile');
				signIn('zitadel', {
					callbackUrl: 'http://localhost:3000/profile',
				})
      }
    }, [router, status]);

    return !!data ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
export default withAuth;