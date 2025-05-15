import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule],
})
export class LoginPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  geToLoginWithNavCtrl() { 
    this.navCtrl.navigateForward('/dashboard');
  }
  
}
