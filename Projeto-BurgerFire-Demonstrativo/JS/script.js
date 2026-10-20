
let MaiorImagem = document.querySelector('.img-maior')

function alterar(imagem){
    if (imagem !== MaiorImagem){
        let imagemPrincipal = imagem
        document.querySelector('#maior').src = imagemPrincipal
        document.querySelector('#maior').style.width = '500px'
        document.querySelector('#maior').style.height = '550px'
    }
}
