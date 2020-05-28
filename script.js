const input_encrypt = document.getElementById('input_encrypt')
const button_encrypt = document.getElementById('button_encrypt')
const textarea_encrypt = document.getElementById('textarea_encrypt')
const error_encrypt = document.getElementById('error_encrypt')
const clear_encrypt = document.getElementById('clear_encrypt')
const copy_encrypt = document.getElementById('copy_encrypt')

const input_decrypt = document.getElementById('input_decrypt')
const button_decrypt = document.getElementById('button_decrypt')
const textarea_decrypt = document.getElementById('textarea_decrypt')
const error_decrypt = document.getElementById('error_decrypt')
const clear_decrypt = document.getElementById('clear_decrypt')
const copy_decrypt = document.getElementById('copy_decrypt')


////////////////////////////////////
////////////////////////////////////


function code(mdp) {
    if(isNaN(mdp) || mdp.length === 0){
        error_encrypt.innerHTML = "Please enter a correct number !";
        textarea_encrypt.innerHTML = "";
    }else{
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
        textarea_encrypt.innerHTML = result.join('');
        error_encrypt.innerHTML ="";
    }   
}

function uncode(code){
    if(isNaN(code) || code.length === 0){
        error_decrypt.innerHTML = "Please enter a correct number !";
        textarea_decrypt.innerHTML = "";
    }else{
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
        textarea_decrypt.innerHTML = result.join('');
        error_decrypt.innerHTML ="";
    }
}

function runcode(){
    code(input_encrypt.value)
}

function rununcode(){
    uncode(input_decrypt.value)
}

////////////////////////////////////
////////////////////////////////////


button_encrypt.addEventListener("click",runcode)

input_encrypt.addEventListener('keypress',(e)=>{
    if (e.keyCode ===13){runcode()}
})

button_decrypt.addEventListener("click",rununcode)

input_decrypt.addEventListener('keypress',(e)=>{
    if (e.keyCode ===13){rununcode()}
})

clear_decrypt.addEventListener('click',()=>{
    textarea_decrypt.innerHTML=""
    input_decrypt.value=""
    error_decrypt.innerHTML=""
})

clear_encrypt.addEventListener('click',()=>{
    textarea_encrypt.innerHTML=""
    input_encrypt.value=""
    error_encrypt.innerHTML=""
})