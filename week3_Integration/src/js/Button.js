export default class Button {
  constructor(type = 'primary') {
    const $button = $(`<button type="button" class="btn btn-${type}">${type}</button>`);
    $button.click(() => {
      alert(type);
    });

    this.$button = $button;
  }

  render() {
    return this.$button;
  }
}
