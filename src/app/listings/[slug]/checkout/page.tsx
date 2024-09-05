'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function CheckoutPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [contact, setContact] = useState('')

  const checkoutOptions = [
    { id: 'irrigation', label: 'Irrigation System', price: 5000 },
    { id: 'seeds', label: 'Premium Seeds', price: 3000 },
    { id: 'equipment', label: 'Farming Equipment', price: 10000 },
    {
      id: 'soil-quality',
      label: 'Real Time Soil Quality Analysis',
      price: 3000,
    },
    {
      id: 'npk-sensor',
      label: 'Nitrogen - Phosphate - Potassium Sensor',
      price: 6000,
    },
    { id: 'consultation', label: 'Agricultural Consultation', price: 2000 },
  ]

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    router.push(`/listings/${params.slug}/confirmation`)
  }

  return (
    <div className='container mx-auto px-4 py-8 flex gap-4 justify-center'>
      <div>
        <Card className='max-w-xl'>
          <CardHeader>
            <CardTitle>Checkout for {params.slug.replace(/-/g, ' ')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='space-y-4'>
                {checkoutOptions.map((option) => (
                  <div key={option.id} className='flex items-center space-x-2'>
                    <Checkbox
                      id={option.id}
                      checked={selectedOptions.includes(option.id)}
                      onCheckedChange={() => handleOptionToggle(option.id)}
                    />
                    <Label htmlFor={option.id}>
                      {option.label} - ₹{option.price}
                    </Label>
                  </div>
                ))}
              </div>
              <div className='mt-6'>
                <Label htmlFor='contact'>Contact Number</Label>
                <Input
                  id='contact'
                  type='tel'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type='submit' className='w-full'>
              Complete Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Image
          src='/khet/gujrat.jpg'
          width={800}
          height={800}
          className='rounded-lg'
          alt='patel-sahab-ki-zameen'
        />
      </div>
    </div>
  )
}
