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

  document.querySelector('#notes').innerText = `TMID: ${id}\n NAME: ${name}\n TELEPHONE: ${telephone}\n LOCATION: ${location}\n TAG: ${tag}\n ----------------------------------------------------------------------------------------------------\n PROBLEM: ${problem}\n PREVIOUS TICKETS: ${prevTickets}\n TROUBLESHOOTING: ${troubleshoot}\n NEXT STEPS: ${nextSteps}\n ESCALATION: ${escalation}`
}