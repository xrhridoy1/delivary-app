import { menu } from '@/data';
import Link from 'next/link';

const MenuPage = () => {
    return (
        <div className='p-4 lg:px-15 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex flex-col md:flex-row items-center justify-center'>
            {menu.map(category => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className={`bg-no-repeat bg-cover h-1/3 w-full md:h-1/2 text-${category.color} p-8 border border-slate-200`}
                    style={{ backgroundImage: `url(${category.img})` }}
                >
                    <div className='flex flex-col items-start justify-center h-full w-1/2'>
                        <h1 className='text-3xl font-bold uppercase'>{category.title}</h1>
                        <p className='text-sm my-8'>{category.desc}</p>
                        <button className={`hidden md:block bg-red-500 px-6 py-3 text-white font-bold rounded-sm`}>Explor</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;