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

  // Constructor que inyecta el servicio NavController para manejar la navegación
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  // Método para navegar hacia atrás, redirigiendo al usuario a la página de inicio de sesión
  navigateBack() {
    this.navCtrl.navigateBack('/login'); // Navega a la ruta '/login'
  }

  // Método para navegar a una página específica como raíz de la pila de navegación
  navigateRoot(page: string) {
    this.navCtrl.navigateRoot(page); // Navega a la página especificada como raíz
  }
}
