import Link from 'next/link';
import { ReactNode } from 'react';
import '../styles/app.scss';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
