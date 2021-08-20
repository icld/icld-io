import React from 'react';
import { useRouter } from 'next/router';
import { div } from 'prelude-ls';

const DynamicPage = () => {
  const router = useRouter();
  const heading = router.query.title;
  return (
    <div>
      <h3>This is a dyanamic page</h3>
      <h4>heading</h4>
    </div>
  );
};

export default DynamicPage;
