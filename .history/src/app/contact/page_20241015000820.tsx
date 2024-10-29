"user client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from '@/components/ui/select';
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';


const info = [
  {
icon: <FaPhoneAlt />,
title: 'Phone',
description : '77 398 79 86'
} ,

{
  icon: <FaEnvelope />,
  title: 'email',
  description : 'Dioufm641@gmail.com'
  } ,

  {
    icon: <FaMapMarkerAlt />,
    title: 'Adresse',
    description : 'Medina rue 41x 30'
    } ,



];

import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.section   initial={{ opacity: 0 }}
    animate={{ opacity: 1, 
      transition:{ delay:2.4 , duration:0.4 ,ease: easeIn'' },
    }} >

      
    </motion.section>
  )
}

export default Contact