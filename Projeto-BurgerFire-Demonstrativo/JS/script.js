
let MaiorImagem = document.querySelector('.img-maior')

function alterar(imagem){
    if (imagem !== MaiorImagem){
        let imagemPrincipal = imagem
        document.querySelector('#maior').src = imagemPrincipal
        document.querySelector('#maior').style.width = '700px'
        document.querySelector('#maior').style.height = '700px'
    }
}
