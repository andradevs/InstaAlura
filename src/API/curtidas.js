const ImgLike = (curtiu) => {
    if (curtiu > 0) {
        return require('../../res/img/s2-checked.png')
    } else {
        return require('../../res/img/s2.png')
    }
}
const curtirFoto = (curtiu, likes) => {
    let qnt = likes
    if(curtiu){
         qnt --;
    }else{
         qnt ++;
    }
    return [!curtiu,qnt]
}

export {ImgLike, curtirFoto} 