//số ngẫu nhiên từ l đến 9
let soBiMat = Math.floor(Math.random()*10);
ktSoNhap.addEventListener('click', function(){
    const soNhap = document.getElementById('soNhap').value;
    const ketQua = document.getElementById('ketQua');
    if(soNhap == soBiMat){
    ketQua.value = `Đúng, con số bí mật là ${soBiMat}`;
    }else{
    ketQua.value = `Sai, con số bí mật là ${soBiMat}`;
    }
})

choiLaiBtn.addEventListener('click', function(){
    soBiMat = Math.floor(Math.random()*10);
    document.getElementById('soNhap').value = "";
    document.getElementById('ketQua').value = "";
})


