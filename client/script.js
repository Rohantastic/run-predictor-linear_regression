document.getElementById('btn').addEventListener('click',async (e)=>{
    e.preventDefault();
    try{
        
        const matches = document.getElementById('matches').value;
        console.log(matches);

        const response = await axios.post('http://localhost:3000/post',{
            matches
        })
    }catch(e){
        console.log(e);
    }
})