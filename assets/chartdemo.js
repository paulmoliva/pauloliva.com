function displayGeorgia() {
  console.log('hi');
  clearPoll();
  presidentialPoll('georgia');
  pollChart('georgia');
}
function displayNational() {
  console.log('hi');
  clearPoll();
  presidentialPoll('national');
  pollChart('national');
}
function display4WayNational() {
  console.log('hi');
  clearPoll();
  presidentialPoll('four-way-national');
  pollChart('four-way-national');
}

$(function(){
  console.log('in function');
  ['Pennsylvania',
  'Wisconsin',
  'Iowa',
  'Michigan',
  'Virginia',
  'New Hampshire',
  'Missouri',
  'Colorado',
  'Nevada',
  'Arizona',
  'Florida',
  'Ohio',
  'North Carolina',
  'Georgia'].forEach ( el => {
    $('.buttons').append(`<li class ="poll-button"
                             onclick= 'display("${el}")'>${el}
                         </li>`);
  });
});



function display(state) {
  clearPoll();
  presidentialPoll(state);
  pollChart(state);

}
function displayGeorgia() {
  console.log('hi');
  clearPoll();
  presidentialPoll('georgia');
  pollChart('georgia');
}
function displayGeorgia() {
  console.log('hi');
  clearPoll();
  presidentialPoll('georgia');
  pollChart('georgia');
}

function clearPoll() {
  $('#polls-root').empty();
}
