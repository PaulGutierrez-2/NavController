import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  // Constructor que inyecta el servicio Router para manejar la navegación
  constructor(private router: Router) {}

  // Método que navega a la página de inicio de sesión
  navigateToLogin() {
    this.router.navigate(['/login']); // Utiliza el servicio Router para redirigir a la ruta '/login'
  }
}
