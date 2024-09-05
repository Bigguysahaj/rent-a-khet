import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { MapPin, Ruler } from 'lucide-react'

export interface Listing {
  id: number
  image: string
  label: string
  size: string
  location: string
  price: string
  features?: string[]
}

function ListingsGrid({ listings }: { listings: Listing[] }) {
  return (
    <div className='grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3'>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}

function ListingCard({ listing }: { listing: Listing }) {
  const slug = listing.label.toLowerCase().replace(/\s+/g, '-')

  return (
    <Card className='overflow-hidden transition-all duration-300 hover:shadow-md'>
      <Link href='#' className='block' prefetch={false}>
        <div className='relative'>
          <Image
            src={listing.image}
            width={400}
            height={300}
            alt={`Farmland - ${listing.size}`}
            className='w-full h-56 object-cover'
          />
          <div>
            {listing.features &&
              listing.features.map((feature, index) => (
                <Badge
                  key={index}
                  className='absolute top-4 right-4 bg-gray-700 text-primary-foreground'>
                  {feature}
                </Badge>
              ))}
          </div>
        </div>
      </Link>
      <CardContent className='p-6'>
        <CardTitle className='text-2xl font-semibold text-gray-800 mb-4'>
          {listing.label || ''}
        </CardTitle>
        <div className='flex items-center text-muted-foreground mb-4'>
          <MapPin className='w-4 h-4 mr-2' />
          <span>{listing.location}</span>
        </div>
        <div className='flex items-center text-muted-foreground'>
          <Ruler className='w-4 h-4 mr-2' />
          <span>{listing.size}</span>
        </div>
      </CardContent>
      <CardFooter className='px-6 pb-6'>
        <Link href={`/listings/${slug}/checkout`} className='w-full'>
          <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300 rounded-full py-2 text-sm font-medium shadow-sm hover:shadow-md'>
            Rent for {listing.price}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export { ListingsGrid, ListingCard }
