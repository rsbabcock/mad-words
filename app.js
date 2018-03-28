//concatenate inputs together and output them to empty div in html when submit button is pressed


const madSentence = () => {
        //collect inputs into constants? probably let(s)
    let nameInput = $('#name').val();
    let locationInput = $('#location').val();
    let verbInput = $('#verb').val();
    let adjectiveInput = $('#adjective').val();
    let nounInput = $('#noun').val();
    let HTMLstring = `<h2 id="output">${nameInput} ran into ${locationInput} and there ${verbInput} a ${adjectiveInput}${nounInput}</h2>`;
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


