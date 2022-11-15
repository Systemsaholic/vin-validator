document.getElementById('validateVin').addEventListener('click', runValidation)

function runValidation() {

    let vinInput = document.getElementById('vinInput').value
    let url = 'https://auto.dev/api/vin/' + vinInput + "?apikey=ZrQEPSkKc3lzdGVtc2Fob2xpY0BnbWFpbC5jb20="

    fetch(url)
        .then(res => {
            if (res.ok) {
                console.log('API Call Success')
                return res.json()
            } else {
                console.log('API Call Error')
            }
        })
        .then(data => {
            if(data.status) {
                //The VIN is not valid
                let outputValue = "VIN Number Not Valid"
                document.getElementById('validationOutput').innerHTML = outputValue
            } else {
                //The VIN returns values so validate and output the data returned
                console.log(data)
                let outputValue = `
                    <ul>
                        <li>Year: ${data.years[0].year}</li>
                        <li>Make: ${data.make.name}</li>
                        <li>Model: ${data.model.name}</li>
                    </ul>
                `
                document.getElementById('validationOutput').innerHTML = outputValue
            }
            
        })
        .catch( err => console.log(err))
}
