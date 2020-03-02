const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$('form').submit(function () {
  return false;
});

$add.on('click', () => {
  $list.append(`<li class="item">
        <span class="item-text">${$input.val()}</span>
        <button class="item-remove">Remove</button>
        </li>`);
  $input.val('');
})

$list.on('click', '.item-remove' ,function() {
  $(this).parent().remove();
})

$list.on('click', '.item-text' ,function() {
  $(this).toggleClass('done');
})