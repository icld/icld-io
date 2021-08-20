import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import Projects from '../components/Projects/Projects';

export default function () {
  return (
    <div>
      <Projects />
    </div>
  );
}
