
let result = document.getElementById('results')

result.innerText = 0

let entry = document.getElementById('entry');

// function for the clear button 

ClearScr = document.getElementById('clear');
ClearScr.addEventListener('click',function() 
            {
                entry.innerText  = ''
                document.getElementById('results').innerText = '';
            }
        );

 // this will return the text in results 
function getoutput()
{
    return document.getElementById('result').innerText
}
// this function will set the value provided as the argument in entry box
function setValue(num)
{
    let entry = document.getElementById('entry');

    entry.innerText += num ;
}

function getresult()
{
    let result = document.getElementById('results')
    result.innerText = eval(entry.innerText)

}

let buttons = document.getElementsByClassName('button')

function perc()
{
    let result = document.getElementById('results')
    entry.innerText = ''
    setValue(result.innerText + '%')
    result.innerText =  (result.innerText)/100
}

for(i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function() {

        // When Operators are used the result section will be erased to
        // provide a clean section

        let result = document.getElementById('results')
        
        // since every time the result will be set to '' after key press. therefore we couldn't
        //get the result after each operation to do opration with the result 
        if(result.innerText == '0')
        {
            result.innerText = '';
        }

        // the entrybox will be currently has a value 0 but we dont need
        // that to be in concatenation
        if(entry.innerText == '0')
        {
           entry.innerText = ''; 
           setValue(this.innerText);
           // first the value within the entrybox is zero. So when a button is pressed the
            // the zero will be erased and value associated with the button is inserted 
        }
        else{
            if(result.innerText == '0' || result.innerText == '')
            {
                setValue(this.innerText)
            }
            else{
                if(this.id == 'operator')
                {
                    entry.innerText = ''
                    setValue(result.innerText+ this.innerText)
                }
                else{
                    setValue(this.innerText)
                }
            }
            console.log(result.innerText)
            
        }
    }
    )
}

function del_last()
{
    entry.innerText = entry.innerText.slice(0,-1)

}




