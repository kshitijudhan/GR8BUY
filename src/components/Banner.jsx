import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  const images = [
    "https://shop.veneziafc.it/cdn/shop/files/55_VFC_TravelPoloBeige.jpg?v=1759237205&width=1400",
    "https://shop.veneziafc.it/cdn/shop/files/58_VFC_TravelPoloBeige.jpg?v=1759237205&width=1400",
    "https://shop.veneziafc.it/cdn/shop/files/57_VFC_TravelPoloBeige.jpg?v=1759237205&width=1400",
    "https://shop.veneziafc.it/cdn/shop/files/59_VFC_TravelPoloBeige.jpg?v=1759237205&width=1400",
    "https://shop.veneziafc.it/cdn/shop/files/56_VFC_TravelPoloBeige.jpg?v=1759237205&width=1400",
  ];
  return (
    <section className="container mx-auto grid min-h-[90vh] items-center gap-12 lg:grid-cols-2">
      {/* Left */}

      <div>
        <Badge>✨ Shop the Latest</Badge>

        <h1 className="mt-6 text-6xl font-bold tracking-tight">
          Discover Products
          <br />
          You'll Love.
        </h1>

        <p className="mt-6 text-muted-foreground">
          Explore a curated collection of quality products designed to fit your
          lifestyle, all in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">Shop Now</Button>

          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right */}

      <div className="flex justify-center">
        <Carousel className="w-full max-w-48 sm:max-w-xs">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="animate-[float_6s_ease-in-out_infinite]">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
