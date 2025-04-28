import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthService } from 'src/app/auth/accesos/auth.service';
import { isRequired, hasEmailError } from 'src/app/auth/validador';
import { GoogleButtonComponent } from 'src/app/auth/interfaz/google-button/google-button.component';

export interface FormSingIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-in',
  imports: [ReactiveFormsModule, GoogleButtonComponent],
  standalone: true,
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent {
  constructor(private router: Router) {}
  
    private _formBuilder = inject(FormBuilder);
    private _authService = inject(AuthService);
  
    isRequired(field: 'email' | 'password') {
      return isRequired(field, this.form);
  
    }
  
    hasEmailError() {
      return hasEmailError(this.form);
    }
  
    form = this._formBuilder.group <FormSingIn>({
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
      
      await this._authService.SingIn({email, password});
  
      toast.success('Bienvenido de nuevo');
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

  register() {
    console.log('Redirigiendo a sign-up...');
    this.router.navigate(['/sing-up']);
  }
}
