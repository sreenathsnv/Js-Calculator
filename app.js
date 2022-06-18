

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


for(i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function() {

        // When Operators are used the result section will be erased to
        // provide a clean section
        let result = document.getElementById('results')
        result.innerText = '';

        // the entrybox will be currently has a value 0 but we dont need
        // that to be in concatenation
        if(entry.innerText == '0')
        {
           entry.innerText = '';
           setValue(this.innerText); 
        }
        else{
            setValue(this.innerText);
        }
    }
    )
}

function del_last()
{
    entry.innerText = entry.innerText.slice(0,-1)

}




