import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/people?page=1');
}
