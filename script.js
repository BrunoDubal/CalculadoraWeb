function insert(num){
    document.getElementById('resultado').innerHTML += num
}

function apaga(){
    var res =  document.getElementById('resultado').innerHTML = ''
}

function calc(){
    var res = document.getElementById('resultado').innerHTML
    if(res){
        document.getElementById('resultado').innerHTML = eval(res)
    }
}

function back(){
    var res =  document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}