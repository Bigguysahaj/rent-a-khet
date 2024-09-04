import { GridPatternDemo } from './grid-pattern'

export const Hero: React.FC = () => (
  <GridPatternDemo>
    <div className='flex flex-col items-center justify-center space-y-4 text-center h-60'>
      <div className='space-y-2'>
        <h1 className='text-5xl font-bold tracking-tighter sm:text-6xl'>
          Rent<span className='px-2'> Farmland 🌱</span>with Ease
        </h1>
        <p className='max-w-[700px] text-muted-foreground md:text-xl'>
          Discover the perfect plot of land for your organic agricultural needs.
        </p>
      </div>
    </div>
  </GridPatternDemo>
)
