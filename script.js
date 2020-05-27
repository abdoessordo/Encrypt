const input_encrypt = document.getElementById('input_encrypt')
const button_encrypt = document.getElementById('button_encrypt')
const textarea_encrypt = document.getElementById('textarea_encrypt')

const input_decrypt = document.getElementById('input_decrypt')
const button_decrypt = document.getElementById('button_decrypt')
const textarea_decrypt = document.getElementById('textarea_decrypt')

function code(mdp) {
    const mdparr = mdp.toString().split('')
    let mdp1 = []
    let mdp2 = []
    let result = []

    for(var i=0; i<mdparr.length; i+=2){
        mdp1.push(mdparr[i])
    }
    for(var j=1; j<mdparr.length; j+=2){
        mdp2.push(mdparr[j])
    }

    mdp1 = mdp1.map(function(num){
        if(num === '0' || num ==='1'){
            return parseInt(num)+8
        }else{
            return Math.abs((num-2)%10)
        }
    })

    mdp2 = mdp2.map(num=>(parseInt(num)+2)%10)
    
    for(var i=0,j=0; i<mdp1.length, j<mdp2.length+1; i++, j++){
        result.push(mdp1[i])
        result.push(mdp2[j])
    }
    document.getElementById("textarea_encrypt").innerHTML = result.join('');
}

function uncode(code){
    const codearr = code.toString().split('')
    let code1 = []
    let code2 = []
    let result = []

    for(var i=0; i<codearr.length; i+=2){
        code1.push(codearr[i])
    }
    for(var j=1; j<codearr.length; j+=2){
        code2.push(codearr[j])
    }

    code1 = code1.map(num=>(parseInt(num)+2)%10)
    code2 = code2.map(num=>{
        if(num==='0' || num==='1'){
            return parseInt(num)+8
        }else{
            return Math.abs(num-2)
        }
    })   
    
    for(var i=0,j=0; i<code1.length, j<code2.length+1; i++, j++){
        result.push(code1[i])
        result.push(code2[j])
    }
    document.getElementById("textarea_decrypt").innerHTML = result.join('');
    
}

function runcode(){
    code(input_encrypt.value)
}

function rununcode(){
    uncode(input_decrypt.value)
}

button_encrypt.addEventListener("click",runcode)

input_encrypt.addEventListener('keypress',(e)=>{
    if (e.keyCode ===13){runcode()}
})

button_decrypt.addEventListener("click",rununcode)

input_decrypt.addEventListener('keypress',(e)=>{
    if (e.keyCode ===13){rununcode()}
})
