"use client";
import { FiDownload } from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import Social from '@/components/ui/Social';
import { Photo } from '@/components/Photo';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="h-full">
        {/* On ajuste le flex et l'espacement pour les petits écrans */}
        <div className="mb-8 flex flex-col xl:flex-row items-center justify-center xl:space-y-0 space-y-8">        
          <div className="container h-full px-4 xl:px-0 flex flex-col items-center xl:items-start text-center xl:text-left">
            {/* On centre bien le contenu */}
            <span className="text-2xl md:text-4xl">FULLSTACK JAVASCRIPT</span>
            <h1 className="text-2xl md:text-4xl mb-6">
              Je suis <br /> 
              <span className="text-accent text-xl md:text-2xl">MOUHAMED DIOUF</span>
            </h1>
            
            <p className="max-w-[300px] md:max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">
              Développeur Fullstack JAVASCRIPT, je crée des applications web et mobiles avec Flutter et React Native, avec un souci particulier pour la performance et la conception esthétique.
            </p>
           
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center xl:justify-start">
            <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      {/* Directement dans le Link sans <a> */}
      <Link href="/assets/cv Rassoul.pdf" passHref download="cv.pdf">
        <span className="flex items-center gap-2 text-accent hover:text-primary">
          <span>Télécharger CV</span>
          <FiDownload className="hover:text-primary text-accent text-xl" />
        </span>
      </Link>
    </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent transition-colors hover:bg-accent hover:text-primary"
                />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/3">
            <Photo /> 
          </div>
        </div>
      </section>
    </main>
  );
}
