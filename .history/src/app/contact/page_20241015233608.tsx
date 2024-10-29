"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '77 398 79 86'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Dioufm641@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Adresse',
    description: 'Medina rue 41x 30'
  }
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulaire de contact */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-wrap gap-6 p-10 bg-[#27272c] rounded-xl items-center justify-between">
              <h3 className="text-4xl text-accent w-full"> Allons travailler ensemble</h3>
              <p className="text-white/60 w-full">
                Ensemble, réalisons vos projets avec expertise et créativité. Prêt à relever vos défis, je suis à vos côtés pour transformer vos idées en réalité.
              </p>
              
              {/* Les champs de formulaire en une seule ligne */}
              <div className="flex flex-wrap gap-6 w-full">
                <Input type="text" placeholder="Firstname" className="flex-1" />
                <Input type="text" placeholder="Lastname" className="flex-1" />
                <Input type="email" placeholder="Email Address" className="flex-1" />
                <Input type="tel" placeholder="Phone" className="flex-1" />
              </div>

              {/* Select pour les services */}
              <Select className="w-full">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Zone de texte pour le message */}
              <Textarea className="h-[200px] w-full" placeholder="Your message" />

              {/* Bouton de soumission */}
              <Button className="w-full md:w-auto">Submit</Button>
            </form>
          </div>
          
          {/* Section avec les informations de contact */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="space-y-4 text-white">
              {info.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-accent">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
