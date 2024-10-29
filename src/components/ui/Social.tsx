import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import React from 'react';

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const Socials = [
    { icon: <FaGithub />, path: 'https://github.com/MDiouf9' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mouhamed-diouf-b0ba05204/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/votreprofil' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/votreprofil' }
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index) => {
                return (
                    <a 
                        key={index} 
                        href={item.path} 
                        className={iconStyles} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
