"use client";

import SignInComponent from '@/components/pages/signin';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SignInPage = () => {
  const t = useTranslations('Auth');
  const router = useRouter();

  // State to manage role
  const [displayRole, setDisplayRole] = useState<string | null>(null);

  useEffect(() => {
    // Check if the router is ready and extract the role from query params
    if (router.isReady) {
      const { role } = router.query;

      if (role === 'parent') {
        setDisplayRole('Parent');
      } else if (role === 'babysitter') {
        setDisplayRole('Babysitter');
      } else {
        setDisplayRole('Guest');
      }
    }
  }, [router.isReady, router.query]);

  // Wait until the role is determined to render the page
  if (!displayRole) {
    return null; // Or a loading indicator
  }

  return (
    <React.Fragment>
      <h1>{t('login_as', { role: displayRole })}</h1>
      <SignInComponent />
    </React.Fragment>
  );
};

export default SignInPage;
