"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

// Déclare une interface pour typer les props du composant
interface WorkSliderBtnProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

// Typage du composant avec les props
export const WorkSliderBtn: React.FC<WorkSliderBtnProps> = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper(); // Inférence du type pour swiper

  return (
    <div className={containerStyles}>
      {/* Bouton pour aller à gauche */}
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>

      {/* Bouton pour aller à droite */}
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtn;
