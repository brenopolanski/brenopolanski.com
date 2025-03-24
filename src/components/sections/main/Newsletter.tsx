import { MailIcon, SendIcon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export const Newsletter = () => {
  return (
    <Card className="bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-600">
      <CardContent className="px-8 py-4">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold text-black">Join breno&apos;s list</CardTitle>
          <CardDescription className="text-black/80">
            Sporadic emails where I talk about what i&apos;m working on (usually web3 development, open source and
            SaaS).
          </CardDescription>
        </CardHeader>
        <div className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <MailIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/60" />
            <Input
              className="flex-1 border-0 !bg-white pl-10 text-black placeholder:text-black/60 focus-visible:ring-0"
              placeholder="type your email to join..."
              type="email"
            />
          </div>
          <Button
            className="cursor-pointer bg-white text-black transition-colors hover:bg-gray-100"
            size="icon"
            variant="secondary"
          >
            <SendIcon className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
