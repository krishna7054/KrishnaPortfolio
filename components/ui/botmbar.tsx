import {
    Activity,
    ShieldCheck,
    Component,
    HomeIcon,
    Mail,
    ScrollText,
    SunMoon,
    FolderRoot,
  } from 'lucide-react';
  
  import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import Link from 'next/link';
  
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/',
    },
    {
      title: 'Projects',
      icon: (
        <FolderRoot className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/projects',
    },
    {
      title: 'Certificates',
      icon: (
        <ShieldCheck className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/certificates',
    },
    {
      title: 'Skills',
      icon: (
        <Component className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/skills',
    },
    {
      title: 'Resume',
      icon: (
        <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/resume',
    },
    {
      title: 'Contact',
      icon: (
        <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300 cursor-pointer' />
      ),
      href: '/contact',
    },
  
  ];
  
  export function AppleStyleDock() {
    return (
      <div className='fixed bottom-2 z-20 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link key={idx} href={item.href} className="no-underline">
          <DockItem
            
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
    );
  }
  