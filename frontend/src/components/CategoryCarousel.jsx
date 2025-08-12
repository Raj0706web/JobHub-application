import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Mobile App Developer",
];

export const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 relative">
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent className="flex gap-4 px-2">
          {category.map((cat, index) => (
            <CarouselItem key={index} className="basis-auto flex-shrink-0">
              <Button
                variant="outline"
                className="px-6 py-3 rounded-full hover:bg-[#F83002] hover:text-white transition"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};
