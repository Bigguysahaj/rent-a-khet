import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Navbar from '@/components/navbar'
import { Plus } from 'lucide-react'
import { ListingsGrid } from '@/components/listing-card'

export function DashboardComponent() {
  const [listings] = useState([
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
  ])

  return (
    <main className='h-dvh'>
      <Navbar title={'Kisan Partner Dashboard'} />
      <Card className='w-full h-full'>
        <CardContent>
          <div className='w-full flex justify-center'>
            <div className='max-w-7xl w-full'>
              {/* <CardTitle className='mx-4 mt-8'>Your Farms</CardTitle> */}
              <ListingsGrid listings={listings} />
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Button className='w-1/2 sticky bottom-0 left-1/4 shadow-lg bg-gray-200 hover:bg-gray-300'>
        <Plus color='black' />
      </Button>
    </main>
  )
}
