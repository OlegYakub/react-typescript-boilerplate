
interface TestApiInterface {
  showMessage(): void;
}

export default class TestApi implements TestApiInterface{

  showMessage() {
    console.log('hello Typescript');
  }
}

