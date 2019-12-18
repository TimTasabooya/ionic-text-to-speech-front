import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string;
  rate: number;
  locale: string;
 

  constructor(private tts: TextToSpeech) {
    this.text = "To be, or not to be. That is the question";
    this.rate = 5;
    this.locale = "en-GB";
  }

// playSomething() {
  // this.tts.speak(
  //   {
  //   text: this.text,
  //   locale: this.locale,
  //   rate: this.rate
  // }
  // )
  // .then(() => console.log('Success'))
  // .catch((reason: any) => console.log(reason));
// }
  playSomething() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
  }).then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

  stopPlaying() {
    this.tts.speak("")
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
