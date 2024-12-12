import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center mt-20">
<Carousel>
  <CarouselContent>
    <CarouselItem className="bg-red-400 h-16 w-16"><Image src="/pic1.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    <CarouselItem><Image src="/pic2.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    <CarouselItem><Image src="/pic3.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    <CarouselItem><Image src="/pic4.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    <CarouselItem><Image src="/pic5.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    {/* <CarouselItem><Image src="/pic6.jpeg" alt="pic" width={220} height={660}/></CarouselItem>
    <CarouselItem><Image src="/pic7.jpeg" alt="pic" width={220} height={660}/></CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

export default HeroSection