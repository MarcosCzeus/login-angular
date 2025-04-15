import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from 'src/app/auth/validador';
import { AuthService } from 'src/app/auth/accesos/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { GoogleButtonComponent } from 'src/app/auth/interfaz/google-button/google-button.component';



interface FormSingUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  imports: [ReactiveFormsModule, GoogleButtonComponent],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  constructor(private router: Router) {
  }

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);

  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group <FormSingUp>({
    email: this._formBuilder.control('', [
      Validators.required, 
      Validators.email
    ]),
    password: this._formBuilder.control('', Validators.required),
  });


  async submit() {
    
    if (this.form.invalid) return;

    try{
      const {email, password} = this.form.value;
    

    if (!email || !password) return;
    
    await this._authService.singUp({email, password});

    toast.success('Usuario creado correctamente');
    this.router.navigate(['/index']);
    } catch (error) {
      toast.error('Error al crear el usuario');
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.singInWithGoogle();
      toast.success('Usuario creado correctamente');
      this.router.navigate(['/index']);
    } catch (error) {
      toast.error('Error al crear el usuario');
    }
  }

  logeo() {
    this.router.navigate(['/sing-in']);
}

}

