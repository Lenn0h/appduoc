/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  };
  constructor(private alertController: AlertController , private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.usuario.username==='Sebastian' && this.usuario.password==='12345')
    {
      //ir al inicio
      let navigationextras: NavigationExtras={
        state: {
          miusuario:this.usuario
        }
      };
      this.router.navigate(['/home'],navigationextras);

    }
    else
    {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'miClase',
      header: 'Error',
      subHeader: 'No se ha podido iniciar sesión',
      message: 'Reingrese usuario y/o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

}

