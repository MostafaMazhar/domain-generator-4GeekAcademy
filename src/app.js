// window.onload = function() {
 
  pronoun = ['the', 'our'];
  adj =     ['great', 'big'];
  noun =    ['jogger', 'racoon'];
  extensions = ['.com', '.net', '.us', '.io'];

  // Create an empty array to store the generated domain 
  domainNames = [];
  // Iterate over each pronoun, adj, noun, ext
  for(let pr of pronoun){
    for(let adjWord of adj){
      for(let nounWord of noun){
        for(let ext of extensions){
       let domain = pr + adjWord + nounWord + ext;
      //  Add the domain name to the array of domainNames:
       domainNames.push(domain);
       console.log(domain);
        }
      }
    }
  }
   let domainList = document.getElementById('domainList');
      for(domain of domainNames){
      let itemList = document.createElement('li');  //  element will represent each domain name in the list
      itemList.textContent = domain;  // assign domain name as the txt inside the listItem
     
   }
  


// };

