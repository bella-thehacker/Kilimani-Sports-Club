import { Card } from "./Card";

export function CardText() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
       <Card 
    img="/gym.avif" 
    gif="/funny.gif" 
    title="Vist Our Gym" 
    description="" 
  />
  <Card 
    img="/tennis.avif" 
    gif="/tennis-stars.gif" 
    title="Tennis" 
    description="Achieve your dream physique." 
  />
  <Card 
    img="/basket.avif" 
    gif="/dunk.webp" 
    title="Basket Ball" 
    description="Build powerful front-end apps." 
  />
  <Card 
    img="/soccer.avif" 
    gif="/fall.webp" 
    title="Football" 
    description="Learn how to scale your career." 
  />
    </div>
  );
}
