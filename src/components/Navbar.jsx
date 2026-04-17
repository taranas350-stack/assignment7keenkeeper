'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const NavbarPage = () => {
    const pathName = usePathname();
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className="flex justify-between container mx-auto">
                <Link href="/">
                    <h2 className='font-bold text-lg'>Keen<span className='text-green-500'>Keeper</span></h2>
                </Link>
                <div className='flex space-x-5 items-center'>
                    <Link className={pathName === '/' ? 'btn btn-primary text-white' : ''} href="/">
                        <button className='font-bold flex gap-2 items-center'><RiHome2Line />Home</button>
                    </Link>
                    <Link className={pathName === '/timeline' ? 'btn btn-primary text-white' : ''} href="/timeline">
                        <button className="font-bold flex gap-2 items-center"><LuClock3 />Timeline</button>
                    </Link>
                    <Link className={pathName === '/stats' ? 'btn btn-primary text-white' : ''} href="/stats">
                        <button className="font-bold flex gap-2 items-center"><TfiStatsUp />Stats</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default NavbarPage;