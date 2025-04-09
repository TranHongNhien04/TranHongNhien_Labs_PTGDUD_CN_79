document.getElementById('convertBtn').addEventListener('click', function(){
    const text = document.getElementById('textInput').value.split('\n');
    for(const [index, line] of text.entries()){
        const [first, second] = line.toLowerCase().split('_');
        const camelCase =  first + second[0].toUpperCase() + second.slice(1);
        const check = '✅'.repeat(index+1);
        console.log(`${camelCase} ${check}`)
    }
})
//data test
/*
 underscore_Case
 first_name
 some_variable
 calculate_age
 delayed_departure
 */