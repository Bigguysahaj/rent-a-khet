import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function AuthComponent({
  onAuthenticate,
}: {
  onAuthenticate: () => void
}) {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-4rem)]'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Welcome, Kisan Partner!
          </CardTitle>
          <CardDescription className='text-center'>
            Sign in or create an account to manage your listings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='signin' className='w-full'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='signin'>Sign In</TabsTrigger>
              <TabsTrigger value='signup'>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value='signin'>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  onAuthenticate()
                }}>
                <div className='space-y-4'>
                  <Input type='email' placeholder='Email' required />
                  <Input type='password' placeholder='Password' required />
                  <Button type='submit' className='w-full'>
                    Sign In
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value='signup'>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  onAuthenticate()
                }}>
                <div className='space-y-4'>
                  <Label className='font-normal mt-4'>Farmer Certificate</Label>
                  <Input
                    type='file'
                    placeholder='Farmer Certificate'
                    required
                  />
                  <Label className='font-normal'>Land Documents</Label>
                  <Input type='file' placeholder='Land Documents' required />
                  <Label className='font-normal'>Passport Size Photo</Label>
                  <Input type='file' placeholder='photo' required />
                  <Input type='text' placeholder='Full Name' required />
                  <Input type='number' placeholder='Aadhar Card' required />
                  <Input type='number' placeholder='Phone Number' required />
                  <Input type='email' placeholder='Email' required />
                  <Input type='password' placeholder='Password' required />
                  <Input
                    type='password'
                    placeholder='Confirm Password'
                    required
                  />
                  <Button type='submit' className='w-full'>
                    Sign Up
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
