document.getElementById('btn').addEventListener('click', async (e) => {
    e.preventDefault();
    try {

        const matches = document.getElementById('matches').value;
    
        const response = await axios.post('http://localhost:3000/post', {
            matches
        })

        const runs_predicted = response.data.runs_predicted;
        
        const output_result = document.getElementById('result_h3');
        output_result.innerHTML = `Predicted Runs virat will score:- ${runs_predicted.predicted_runs}`;
        document.getElementById('matches').value = '';
    } catch (e) {
        console.log(e);
    }
})