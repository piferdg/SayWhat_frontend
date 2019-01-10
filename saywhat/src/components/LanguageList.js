import React from "react";
import Language from "./Language";

const LanguageList = ({ allLanguages }) => {
  let listOfLanguages = allLanguages.map(language => {
    return (
      <Language
        key={language.id}
        languageName={language.languageName}
        languageCode={language.languageCode}
      />
    );
  });

  return (
    <div className="language-container">
      <select>
        <option disabled value="">
          Languages and codes...
        </option>
        {listOfLanguages}
      </select>
    </div>
  );
};

export default LanguageList;
