"use client";

import { LANGUAGES } from "../constants";
import styles from "../styles";

interface LanguageSelectorProps {
  setCurrentLanguage: (language: string) => void;
}

export default function LanguageSelector({
  setCurrentLanguage,
}: LanguageSelectorProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.row}>
        <h1>Select Language</h1>
        <select
          className={styles.select}
          onChange={(e) => setCurrentLanguage(e.target.value)}
        >
          {Object.values(LANGUAGES).map((language) => (
            <option className={styles.option} key={language.id} value={language.id}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
