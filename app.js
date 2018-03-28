//concatenate inputs together and output them to empty div in html when submit button is pressed
const madSentence = function() {
        //collect inputs into constants? probably let(s)
    let nameInput = $('#name').val();
    let locationInput = $('#location').val();
    let verbInput = $('#verb').val();
    let adjectiveInput = $('#adjective').val();
    let nounInput = $('#noun').val();
    return console.log(`${nameInput} ran into a ${locationInput} and there ${verbInput} into a ${adjectiveInput}${nounInput}`);
};

$('#form-submit').click(madSentence);



