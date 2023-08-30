import Link from 'next/link';

import styles from '../styles/Home.module.css';
import Profile from '../components/profile';

export default function ProfileView() {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
}
