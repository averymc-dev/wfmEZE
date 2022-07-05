document.querySelector('#create-notes').addEventListener('click', makeNotes)

function makeNotes() {
  const id = document.querySelector('#tmid').value
  const name = document.querySelector('#name').value
  const telephone = document.querySelector('#telephone').value
  const location = document.querySelector('#location').value
  const tag = document.querySelector('#tag').value
  const problem = document.querySelector('#problem').value
  const prevTickets = document.querySelector('#previous-tix').value
  const troubleshoot = document.querySelector('#troubleshooting').value
  const nextSteps = document.querySelector('#next-steps').value
  const escalation = document.querySelector('#escalation').value

  document.querySelector('#notes').innerText = `TMID: ${id}\n Name: ${name}\n Telephone: ${telephone}\n Location: ${location}\n Tag: ${tag}\n ----------------------------------------------------------------------------------------------------\n Problem: ${problem}\n Previous Tickets: ${prevTickets}\n Troubleshooting: ${troubleshoot}\n Next Steps: ${nextSteps}\n Escalation: ${escalation}`// ${fMidName} ${lMidName} ${lName}`
}