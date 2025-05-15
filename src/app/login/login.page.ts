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
  // Constructor que inyecta el servicio NavController para manejar la navegación
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // Método para navegar hacia adelante a la página del dashboard
  geToLoginWithNavCtrl() { 
    this.navCtrl.navigateForward('/dashboard'); // Navega a la ruta '/dashboard'
  }
}
