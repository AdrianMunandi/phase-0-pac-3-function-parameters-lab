function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  console.log(introductionWithLanguage("Aki", "Ember.js"));

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  console.log(introductionWithLanguageOptional("Aki", "Ember.js"));

console.log(introductionWithLanguageOptional("Aki"));

