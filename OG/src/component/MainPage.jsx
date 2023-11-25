function mainPage() {
    return (
        <>
        
        <body>
           <div className='card'> 
          <div >
              <img className='logo' src="../public/olymp-logo.jpg" alt="" />
            </div>
            <div className="row">
              <div id="join-link">
                <img src="../public/groupe.jpeg" alt="" id="groupe-logo"/>
             <div>     
              <input type="text" placeholder='Pseudo' id='pseudo' />
            </div>
            <div> 
              <input type="text" placeholder="Code de votre partie" id="code-partie"/><div id="div-code-partie">

            </div>
           
              <button id='join'>Rejoindre</button>
    
              
            </div>
              </div>

            


              <div id="tournoie-link">
                <img src="../public/start2.jpeg" alt="" id="start"/>
     
              <input type="text" placeholder='Pseudo' id='pseudo' />
          
            <div>
              <button id='join'>Créer un Tournoie</button>
            </div>

              </div>

            </div>
          
          
            </div>  
           
        </body>
       
         
         
        </>
    );
}

export default mainPage;