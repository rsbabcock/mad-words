//concatenate inputs together and output them to empty div in html when submit button is pressed


const madSentence = () => {
    //generates random inbetween words to add to the fun
    const descriptiveNouns = ["a crazy old lady", "a wild orcha", "the wicked witch of the west", "Darth Vader", "Han Solo", "that one guy from down the corner", "an undercover hobo", "a crew of penguins", "Mary Poppins", "Gandalf the White", "Aladin's flying carpet", "the Pirates of the Caribbean", "Jack Sparrow"];
    const randomNoun = descriptiveNouns[Math.floor(Math.random()*descriptiveNouns.length)];
    const verbs = ["turned", "pooped", "birthed", "magicked", "melted", "trampled", "fetched", "wrestled", "macerated", "chewed", "whispered", "scratched", "sewed", "buried", "break-danced", "jumped" ];
    const randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
     //collect inputs into constants? probably let(s)
    let nameInput = $('#name').val();
    let verbInput1 =$('#verb1').val();
    let locationInput = $('#location').val();
    let verbInput = $('#verb').val();
    let adjectiveInput = $('#adjective').val();
    let nounInput = $('#noun').val();
    let HTMLstring = `<h2 id="output">${nameInput} ${verbInput1} into ${randomNoun} in ${locationInput} and there ${verbInput} with ${randomNoun} who ${randomVerb} ${nameInput} into a ${adjectiveInput} ${nounInput}</h2>`;
    $('#mad-output').html(HTMLstring);
};


//     let HTMLstring = `<h2>${nameInput} ran into a ${locationInput} and there ${verbInput} into a ${adjectiveInput}${nounInput}<h2>`;
//     $('#mad-output').html(HTMLstring);
// };

$('#form-submit').click(madSentence);
$('form-submit').toggle();



//empty div html
/* <div id="mad-output">
<h2 id="output"></h2>
</div> */


