// document.getElementById('#job').click = showJobs
document.querySelector('#job').addEventListener('click', showJobs)
document.querySelector('#SO').addEventListener('click', showSO)
document.querySelector('#UX').addEventListener('click', showUX)
document.querySelector('#PM').addEventListener('click', showPM)

function showJobs() {
    document.querySelector('#jobs').style.display = 'inline'
  }
  
  function showSO() {
    document.querySelector('#uX').style.display = 'none'
    document.querySelector('#pM').style.display = 'none'
    document.querySelector('#jobs').style.display = 'none'
  }
  
  function showUX() {
    document.querySelector('#sO').style.display = 'none'
    document.querySelector('#pM').style.display = 'none'
    document.querySelector('#jobs').style.display = 'none'
  }
  function showPM() {
    document.querySelector('#sO').style.display = 'none'
    document.querySelector('#uX').style.display = 'none'
    document.querySelector('#jobs').style.display = 'none'
  }
