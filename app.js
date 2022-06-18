

let entry = document.getElementById('entry');

ClearScr = document.getElementById('clear');
ClearScr.addEventListener('click',function() 
            {
                entry.innerText  = ''
                document.getElementById('results').innerText = '';
            }
        );

function getoutput()
{
    return document.getElementById('result').innerText
}

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

        let result = document.getElementById('results')
        result.innerText = '';

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






