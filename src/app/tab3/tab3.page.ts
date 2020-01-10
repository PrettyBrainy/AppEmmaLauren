import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public businessName: string;
  public suggestionId: string;
  public hideBusinesses: boolean=false;
  public moreBusinesses: boolean=true;

  constructor() {}
  
  getBusinesses(){
    this.hideBusinesses = true;
    this.moreBusinesses= false;
  }

  anotherBusiness(){
    this.moreBusinesses = true;
    this.hideBusinesses = false;
  }

  addBusinessToList(){

  var addition ={
    businessSuggestion: `${this.businessName}`,
    productSuggestion: `${this.productSuggestion}`
  }
  const addBusiness = firebase.firestore().collection('businessList').doc(`${this.businessName}`).set(addition);
    
  }



}
