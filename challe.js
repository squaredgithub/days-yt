//alert('hey');
//challege 1:your age to days
function ageInDays(){
    var birthYear = prompt("what year were you born?");
    var ageDays = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageDays + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageDays);

}
function reset(){
    document.getElementById('ageInDays').remove();
}
