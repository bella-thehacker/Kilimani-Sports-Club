import { cn } from "../lib/utils"

export function Card({ img, gif, title, description }) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-amber-200",
          "transition-all duration-500 hover:shadow-2xl",
        )}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hover Effect for GIF */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${gif})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h1 className="font-bold text-xl md:text-3xl mb-2">{title}</h1>
          <p className="font-normal text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

