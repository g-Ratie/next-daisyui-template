import { HeroContentButton } from "components/atoms/HeroContentButton"
import { HeroContentText } from "components/atoms/HeroContentText"

export const HeroContent = () => {
  return (
    <div className="max-w-md text-center">
      <HeroContentText variant="h1" className="text-5xl font-bold">
        Hello there
      </HeroContentText>
      <HeroContentText variant="p" className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </HeroContentText>
      <HeroContentButton>Get Started</HeroContentButton>
      <a href="https://daisyui.com/">
        <HeroContentButton>Daisy UI </HeroContentButton>
      </a>
    </div>
  )
}
