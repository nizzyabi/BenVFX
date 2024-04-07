import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        {
            href: 'https://twitter.com/BenVFXs',
            icon: <XIcon className='h-8 w-8'/>
        },
        {
            href: 'https://www.instagram.com/benl3e/',
            icon: <InstagramIcon className='h-9 w-9'/>
        },
        {
            href: 'https://www.youtube.com/@Vfxbenlee',
            icon: <YouTubeIcon className='h-10 w-10'/>
        },
        {
            href: 'mailto:vfxbenlee@gmail.com',
            icon: <EmailIcon className='h-8 w-8'/>
        }
    ]
    return (
        <div className='text-center pb-8'>
            <div className='flex items-center justify-center space-x-4'>
                
                {links.map((link, index) => (
                    <Link href={link.href} key={index} className='hover:opacity-45 transition duration-300'>
                        {link.icon}
                    </Link>
                
                ))}
                
            </div>
            <p className='text-sm text-slate-100/50'>vfxbenlee@gmail.com</p>
            <p className='text-sm text-slate-100/50'>© Ben. All rights reserved.</p>
        </div>
    )
}