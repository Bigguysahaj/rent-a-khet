import { Button } from './ui/button'

export function CallToAction() {
  return (
    <div className=' max-w-7xl w-full my-24 rounded-2xl overflow-hidden h-full'>
      <div className='relative bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12 flex justify-center items-center h-96'>
        <div className='absolute inset-0 bg-white/10 backdrop-filter backdrop-blur-sm' />
        <div className='relative z-10'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            Join Our Growing 🌱 Community
          </h2>
          {/* <p className='text-white/90 mb-8 max-w-2xl'>
            Whether you&apos;re a farmer looking to expand or an investor
            seeking new opportunities, we have the perfect solution for you.
            Join us in revolutionizing farmland rentals.
          </p> */}
          <div className='flex flex-col sm:flex-row gap-4 mt-16 justify-center'>
            <Button className='bg-white text-primary hover:bg-white/90 text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
              Baniye humare Kisan Partner
            </Button>
            <Button
              variant='outline'
              className='bg-transparent border-2 border-white text-white hover:bg-white/80 text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
              Get our extended catalogue
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20" />
      </div>
    </div>
  )
}
