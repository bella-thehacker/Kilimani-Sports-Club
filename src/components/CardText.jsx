import { Card } from "./Card"

export function CardText() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      <Card
        img="/gym.avif"
        gif="/funny.gif"
        title="Visit Our Gym"
        description="State-of-the-art equipment and expert trainers to help you achieve your fitness goals."
      />
      <Card
        img="/tennis.avif"
        gif="/tennis-stars.gif"
        title="Tennis"
        description="Professional courts and coaching for players of all levels."
      />
      <Card
        img="/basket.avif"
        gif="/dunk.webp"
        title="Basketball"
        description="Indoor and outdoor courts for casual play and competitive matches."
      />
      <Card
        img="/soccer.avif"
        gif="/fall.webp"
        title="Football"
        description="Premium fields for the beautiful game, with leagues for all ages."
      />
    </div>
  )
}

