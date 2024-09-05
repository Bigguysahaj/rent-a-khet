import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <header className='sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm shadow-sm'>
      <Link
        href='/'
        className='flex items-center justify-center'
        prefetch={false}>
        <div className='text-2xl font-bold text-gray-800'>Rent-a-Khet</div>
      </Link>
      <div className='ml-auto flex items-center gap-4 sm:gap-6'>
        <Link
          href='/listings'
          className='text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 transition-colors'
          prefetch={false}>
          Land Listings
        </Link>
        <Link
          href='/how-it-works'
          className='text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 transition-colors'
          prefetch={false}>
          How It Works
        </Link>
        <Button
          asChild
          variant='outline'
          className='bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300'>
          <Link href='/partner'>Baniye Kisan Partner</Link>
        </Button>
      </div>
    </header>
  )
}

export default Navbar
