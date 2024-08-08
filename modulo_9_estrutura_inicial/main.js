$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
});

$("#btn-cancel").click(function () {
  $("form").slideUp();
});

$("form").on("submit", function (e) {
  e.preventDefault();
  const enderecoDaNovaImagem = $("#address-new-img").val();
  const novaItem = $("<li style='display: none'></li>");
  $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novaItem);
  $(`<div class="overlay-image-link">
      <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
        ver imagem em tamanho real
      </a>
    </div>`).appendTo(novaItem);
  $(novaItem).appendTo("ul");
  $(novaItem).fadeIn(1000);
  $("#address-new-img").val("");
});
