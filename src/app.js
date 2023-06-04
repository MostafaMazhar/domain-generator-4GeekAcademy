window.onload = function() {
 
  pronoun = ['your', 'his', 'her', 'their', 'the', 'our', 'my'];
  adj =     ['wacky', 'funky', 'quirky', 'zany', 'great', 'big', 'amazing'];
  noun =    ['dream', 'wonder', 'bliss', 'magic', 'jogger', 'racoon', 'adventure'];
  extensions = ['.com', '.net', '.us', '.io'];

  // Create an empty array to store the generated domain 
  let domainNames = [];
  // Iterate over each pronoun, adj, noun, ext
  function randDomain(){
    for(let pr of pronoun){
     for(let adjWord of adj){
      for(let nounWord of noun){
        for(let ext of extensions){
       let domain = pr + adjWord + nounWord + ext;
      //  Add the domain name to the array of domainNames:
       domainNames.push(domain);
       
        }
      }
    }
  }
    return domainNames;
  };

      allDomainNames = randDomain();
      console.log(allDomainNames);
      document.getElementById('domainList').innerHTML = allDomainNames.join('_ <br> _');
  
};

  //     let domainList = document.getElementById('domainList');
  //     for(domain of domainNames){
  //     let listItems = document.createElement('li');  //  element will represent each domain name in the list
  //     listItems.textContent = domain;  // assign domain name as the txt inside the listItem
  //     domainList.appendChild(listItems);
  //     };