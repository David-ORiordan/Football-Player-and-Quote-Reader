import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { RandomQuoteProvider } from '../../providers/random-quote/random-quote';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  author: string;
  content: string;
  tags: string[];
  entryForCountryID: string;
  text: string;

  //new stuff - delete later
  // CID: number;

  constructor(public navCtrl: NavController, private rqp:RandomQuoteProvider) {

  }

  ionViewDidLoad() {
    this.rqp.getRandomQuote().subscribe(data => {
      this.author = data.author;
      this.content = data.content;
      this.tags = data.tags;
    });
  }

  goToSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }

  // showCountryID() {
  //   if (this.entryForCountryID = null) {
  //     this.text = "Country ID does not exist";
  //   }
  // }


  //new stuff - delete later
 // CIDButton() {
 //   console.log(this.CID);
 // }

}
