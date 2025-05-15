import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonButton, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigateBack() {
    this.navCtrl.navigateBack('/login');
  }

  navigateRoot(page: string) {
    this.navCtrl.navigateRoot(page);
  }
}
