var facts = [
  "One in five Americans has experienced some form of mental illness, with one in 25 experiencing serious mental illness, such as bipolar disorder or schizophrenia.",
  "Suicide accounts for over 800,000 deaths globally each year, with over 41,000 in the U.S. alone. It is the second leading cause of death worldwide for 15-29 year olds.",
  "Many factors can lead to mental illness, including genetics, physical illness or injury, and traumatic life experiences.",
  "There can be other ways to treat mental health issues like therapy, yoga, meditation and holistic treatments.",
  "50.5% of adults in the U.S. who have had a problem with substance abuse also suffer from mental illness.",
  "20% of youth have a mental health condition, with one in 10 young people having experienced a period of major depression.",
  "70-90% of people who seek proper treatment for mental health disorders witness a significant reduction in symptoms.",
  "Cases of major depression among teens ages sixteen and seventeen rose by an overwhelming 69%.",
  "Feelings of anxiety and hopelessness increased by 71% among people ages 17-75.",
  "Between 2008 and 2017, the suicide rate among teens ages eighteen to nineteen increased by 56%.",
 "One out of five girls ages twelve to seventeen had experienced major depression within the last year."
];
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = facts[count];
  count++;
  if (count == facts.length){
    count = 0;
  }
}
