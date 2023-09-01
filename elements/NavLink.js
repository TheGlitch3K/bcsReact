import { useRouter } from 'next/router';
import Link from 'next/link';

export function NavLink({ href, exact = false, children, className,disabledActive  }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive && !disabledActive) {
        className += ' active';
    }

    return (
        <li  className='Onav-item'>
        <Link href={href}>
            <a className={className}>
                {children}
            </a>
        </Link>
        </li>
    );
}