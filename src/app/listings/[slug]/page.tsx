import { Listing, ListingCard } from '@/components/listing-card'
import { notFound } from 'next/navigation'

async function getListingBySlug(slug: string): Promise<Listing | null> {
  // This is a mock function. In a real application, you would fetch this data from an API or database
  const listings: Listing[] = [
    {
      id: 1,
      image: '/khet/strawberry.jpg',
      label: 'Strawberry Fields',
      location: 'Punjab',
      size: '5 hectares',
      price: '₹30,000/month',
    },
    {
      id: 2,
      image: '/khet/dragon-fruit.jpg',
      label: 'Dragon Fruit Farms',
      location: 'Haryana',
      size: '3 hectares',
      price: '₹25,000/month',
    },
  ]

  return (
    listings.find(
      (listing) => listing.label.toLowerCase().replace(/\s+/g, '-') === slug
    ) || null
  )
}

export default async function ListingPage({
  params,
}: {
  params: { slug: string }
}) {
  const listing = await getListingBySlug(params.slug)

  if (!listing) {
    notFound()
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <ListingCard listing={listing} />
      {/* Add more details about the listing here */}
    </div>
  )
}
