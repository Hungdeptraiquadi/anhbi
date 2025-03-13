"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type Photo = {
  src: string
  alt: string
}

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={400}
              height={400}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-3xl p-2 md:p-6">
          {selectedPhoto && (
            <div className="relative w-full h-[70vh] md:h-auto">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

