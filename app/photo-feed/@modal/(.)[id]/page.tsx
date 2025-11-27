import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/photos";
import Modal from "@/app/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-brown p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
      </div>
    </Modal>
  );
}