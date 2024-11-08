import Image from "next/image"



export default function Header() {
    return (
      <div className='bg-black flex justify-around items-center h-28 w-[90%] rounded-lg mt-2'>
         <div>
         <Image src="/logo.svg" alt="Logo" width={200} height={200} />
         </div>
         <div className="flex justify-between items-center h-9">
          <h3 className="text-white">Produits</h3>
          <h3 className="text-white ml-4">Contact</h3>
         </div>
         <div className="flex justify-center items-center">
          <Image
          src="/Like.svg"
           alt="les plus aimer"
           width={40}
           height={40}/>
           <Image className="ml-2"
           src="/panier.svg"
           alt="panier"
           width={40}
           height={40}/>
         </div>
      </div>
    );
  }