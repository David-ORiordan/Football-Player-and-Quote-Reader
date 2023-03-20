import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  countryID: number;
  minAge: number;
  maxAge: number; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveButton() {
    console.log("save is live");
    console.log(this.countryID);
    if (this.countryID == null) {
      alert("Please enter a Country ID");
    } else {
      this.countryID = this.countryID;
      (this.navCtrl.pop());
    }
  }

  cancelButton() {
    console.log("cancel is live");
    this.countryID = null;
    console.log(this.countryID);
    this.minAge = null;
    console.log(this.minAge);
    this.maxAge = null;
    console.log(this.maxAge);
  }

}
