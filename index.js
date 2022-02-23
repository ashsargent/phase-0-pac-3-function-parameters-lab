function introduction(Name) {
  return `Hi, my name is ${Name}.`;
}
introduction(Aki);

function introductionWithLanguage (Name,language){
    return `Hi, my name is ${Name} and I am learning to program in ${language}.`
}
introductionWithLanguage(Aki,Ember.js);

function introductionWithLanguageOptional (Name,language = "JavaScript"){
    return `Hi, my name is ${Name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional(Gracie,JavaScript);
