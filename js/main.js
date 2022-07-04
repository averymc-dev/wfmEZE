document.querySelector('#create-notes').addEventListener('click', makeNotes)

function makeNotes() {
  const id = document.querySelector('#tmid').value
  const name = document.querySelector('#name').value
  const telephone = document.querySelector('#telephone').value
  const location = document.querySelector('#location').value
  const tag = document.querySelector('#tag').value
  // const lMidName = document.querySelector('#lastMiddle').value
  // const lName = document.querySelector('#lastName').value

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  document.querySelector('#notes').innerText = `TMID: ${id}\n Name: ${name}\n Telephone: ${telephone}\n Location: ${location}\n Tag: ${tag}`// ${fMidName} ${lMidName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
