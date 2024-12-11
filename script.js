const livros = [
    { nome: "Alice no país das Maravilhas", imagem: "https://m.media-amazon.com/images/I/71t+VRA7UhL._SL1000_.jpg", link: "https://a.co/d/iJAYBMn" },
      { nome: "Alice Através do Espelho", imagem: "https://m.media-amazon.com/images/I/71aV8Gimo5L._SL1200_.jpg", link: "https://a.co/d/9DVOXxb" },
    { nome: "A Rainha Vermelha", imagem: "https://m.media-amazon.com/images/I/718rKQisF7L._SL1500_.jpg", link: "https://a.co/d/gvUXeFu" },
    { nome: "Eu e esse meu coração", imagem: "https://m.media-amazon.com/images/I/81w-GCfqtjL._SL1500_.jpg", link: "https://a.co/d/0WfHp3p" },
    { nome: "It: A coisa", imagem: "https://m.media-amazon.com/images/I/91g9Dvtf+jL._SL1500_.jpg", link: "https://a.co/d/fapyhom" },
    { nome: "A menina que roubava livros", imagem: "https://m.media-amazon.com/images/I/61L+4OBhm-L._SL1000_.jpg", link: "https://a.co/d/1mZJ8cq" },
    { nome: "The Book Thief", imagem: "https://m.media-amazon.com/images/I/81TLlGqEFyL._SL1500_.jpg", link: "https://a.co/d/iRV801u" },
    { nome: "The Nightingale: A Novel", imagem: "https://m.media-amazon.com/images/I/81OkWjcf4WL._SL1500_.jpg", link: "https://a.co/d/dNyfBga" },
    { nome: "Coraline", imagem: "https://m.media-amazon.com/images/I/91ESiciytQL._SL1500_.jpg", link: "https://a.co/d/abVUdPi" },
    { nome: "O último rei Dragão", imagem: "https://m.media-amazon.com/images/I/91z92c6URXL._SL1500_.jpg", link: "https://a.co/d/iEdNUcI" },
    { nome: "A Biblioteca da Meia-Noite", imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL._SL1500_.jpg", link: "https://a.co/d/8IKQB2h" },
    { nome: "O Pequeno Príncipe", imagem: "https://m.media-amazon.com/images/I/91cuVFh3BsL._SL1500_.jpg", link: "https://a.co/d/1KRPOjg" },
    { nome: "500 Dias Sem/Com Você ", imagem: "https://m.media-amazon.com/images/I/61pmJDraOJL._SL1500_.jpg", link: "https://a.co/d/6tPrIsC" },
    { nome: "Grey: Cinquenta Tons de Cinza Pelos Olhos de Christian", imagem: "https://m.media-amazon.com/images/I/51QhnBxvR3L._SL1000_.jpg", link: "https://a.co/d/9DfAXvR" },
    { nome: "Mais escuro: Cinquenta tons mais escuros pelos olhos de Christian: 2 ", imagem: "https://m.media-amazon.com/images/I/61Zh2IhpAZL._SL1000_.jpg", link: "https://a.co/d/1WvYmRq" },
    { nome: "Livre: Cinquenta Tons de Liberdade Pelos Olhos de Christian: 3", imagem: "https://m.media-amazon.com/images/I/71z-fnjNE-S._SL1500_.jpg", link: "https://a.co/d/5nuk4y2" },
    { nome: "Orgulho & Preconceito", imagem: "https://m.media-amazon.com/images/I/81JaWLFru0L._SL1500_.jpg", link: "https://a.co/d/9NCRwSM" },
    { nome: "Jane Eyre", imagem: "https://m.media-amazon.com/images/I/610ZWLAxlXS._SL1500_.jpg", link: "https://a.co/d/0gQtdjh" },
    { nome: "O Morro dos Ventos Uivantes", imagem: "https://m.media-amazon.com/images/I/71mFEJ+ZLVL._SL1500_.jpg", link: "https://a.co/d/brLLHQi" },
    { nome: "A vida que ninguém vê", imagem: "https://m.media-amazon.com/images/I/71z12tcoM-L._SL1500_.jpg", link: "https://a.co/d/e2jn4Bd" },
     { nome: "A Garota no Trem", imagem: "https://m.media-amazon.com/images/I/91h-D3B+7yL._SL1500_.jpg", link: "https://a.co/d/iqzu0mC" },
      { nome: "O Conto da Aia", imagem: "https://m.media-amazon.com/images/I/91AHNAr638L._SL1500_.jpg", link: "https://a.co/d/9SlBkIz" },
      { nome: "Garota Exemplar", imagem: "https://m.media-amazon.com/images/I/71eIW3mRUvL._SL1500_.jpg", link: "https://a.co/d/dnZ7kto" },
      { nome: "Box Duna: Primeira Trilogia + Mapa Arrakis", imagem: "https://m.media-amazon.com/images/I/91sjnBZTDKL._SL1500_.jpg", link: "https://a.co/d/6Ine0LV" },
      { nome: "O Silêncio dos Inocentes: Entre Cordeiros e Monstros", imagem: "https://m.media-amazon.com/images/I/81WFnxxa7kL._SL1500_.jpg", link: "https://a.co/d/j9HO9P0" },
];

const container = document.getElementById("livros-container");


livros.forEach(livro => {
    const livroDiv = document.createElement("div");
    livroDiv.innerHTML = `
        <img src="${livro.imagem}" alt="${livro.nome}" style="width:100px;">
        <p>${livro.nome}</p>
        <a href="${livro.link}" target="_blank">Comprar</a>
    `;
    container.appendChild(livroDiv);
});

