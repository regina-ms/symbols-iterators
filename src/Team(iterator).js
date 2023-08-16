// eslint-disable-next-line no-unused-vars
class Team {
  constructor(...characters) {
    for (const character of characters) {
      this[characters.indexOf(character)] = character;
    }
    this.length = characters.length;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const lastIndex = this.length;
    const team = this;
    return {

      next() {
        if (currentIndex !== lastIndex) {
          // eslint-disable-next-line no-plusplus
          return { done: false, value: team[currentIndex++] };
        }
        return { done: true };
      },
    };
  }
}
