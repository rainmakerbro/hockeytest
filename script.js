function handleFormSubmit(event) {
  event.preventDefault();
  
  const createdPlayer = new FormData(event.target);
  
  const formJSON = Object.fromEntries(createdPlayer.entries());

  // for multi-selects, we need special handling
  //formJSON.snacks = data.getAll('snacks');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.create-player');
form.addEventListener('submit', handleFormSubmit);