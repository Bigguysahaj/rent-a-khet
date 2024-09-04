import Link from 'next/link'

function Navbar() {
  return (
    <header className='sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-white/80 backdrop-blur-sm shadow-sm'>
      <Link
        href='#'
        className='flex items-center justify-center'
        prefetch={false}>
        <div className='text-2xl font-bold text-gray-800'>Rent-a-Khet</div>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href='#'
            className='text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 transition-colors'
            prefetch={false}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
