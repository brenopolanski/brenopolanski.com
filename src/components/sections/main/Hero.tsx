import { MatrixText } from './MatrixText'
import { QuoteTextButton } from './QuoteText/QuoteTextButton'

export const Hero = () => {
  return (
    <div className="text-center">
      <div className="flex items-start justify-center gap-2">
        <MatrixText text="Breno Polanski" textClassName="mb-2 text-3xl font-bold md:text-4xl" />{' '}
        <QuoteTextButton />
      </div>
      <p className="text-base text-muted-foreground">
        Software Engineer. Indie hacker. Open source enthusiast. Always learning. Usually from my
        mistakes.
      </p>
    </div>
  )
}
