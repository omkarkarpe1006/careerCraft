    document.getElementById("learn-more").addEventListener("click", function(e){
    e.preventDefault(); 
    let content=document.getElementById("read_more");

    if(content.style.display==="none"){
      content.style.display="inline";
      this.textContent="Read less";
    } else {
      content.style.display="none";
      this.textContent="Read more";
    }
  });
