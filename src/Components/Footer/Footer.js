import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage("en")}>EN</button>
      <button onClick={() => handleChangeLanguage("ka")}>KA</button>
    </div>
  )
}

export default Footer