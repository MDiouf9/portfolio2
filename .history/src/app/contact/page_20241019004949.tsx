"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { json } from "stream/consumers";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "77 398 79 86",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Dioufm641@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Medina rue 41x 30",
  },
];




const Contact = () => {

  const  [ firstname , setFirstname] = useState (" ");
  const [lastname  , setLasname  ]  = useState (" ");
  const [email , setEmail]      =     useState (" ");
  const  [phone , setPhone    ]  = useState (" ") ;
  const [service , setService  ] =useState ("") ;
  const  [message , Setmessage] = useState ("") ;

  const HandleSubmit = async (){

    const formData =  {
      firstname,
      lastname,
      email,
      phone,
      service,
      message

    };




    try {
   const response = await fetch("https://formspree.io/f/meoqqbpp",{
    method  :"Post",
    headers :{"content-type" : "application/json",

   },
   body : JSON.stringify(formData)

    }),
if (response.ok){
   alert("Votre message a été envoyer avec succes")
} else {
  alert("une erreur est survenue veiller ressayer")
} else if {
  
}
 










































  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row xl:items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Formulaire de contact */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none ml-0 lg:ml-12"> {/* Responsive margin */}
            <form className="flex flex-col gap-2 p-6 bg-[#27272c] rounded-xl"> {/* Responsive gap */}
              <h3 className="text-3xl lg:text-4xl text-accent">Allons travailler ensemble</h3>
              <p className="text-white/60">
                Ensemble, réalisons vos projets avec expertise et créativité.
                Prêt à relever vos défis, je suis à vos côtés pour transformer
                vos idées en réalité.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid */}
                <Input type="firstname" placeholder="Prénom" />
                <Input type="lastname" placeholder="Nom" />
                <Input type="email" placeholder="Adresse Email" />
                <Input type="phone" placeholder="Téléphone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sélectionnez un service</SelectLabel>
                    <SelectItem value="web">Développement Web</SelectItem>
                    <SelectItem value="mobile">Développement Mobile</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[80px]" placeholder="Votre message" /> {/* Hauteur ajustée */}
              <Button className="max-w-24">Soumettre</Button>
            </form>
          </div>

          {/* Section avec les informations de contact */}
          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row gap-6 items-center justify-center order-1 lg:order-none mb-8 lg:mb-0">
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
