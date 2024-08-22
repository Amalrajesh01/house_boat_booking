import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) { }
  submitForm(event: Event) {
    event.preventDefault(); // Prevent form submission
    const nameInput = (event.target as HTMLFormElement).querySelector('#name') as HTMLInputElement;
    const name = nameInput.value.trim();
    if (name) {
      alert(`${name}, we will get back to you.`);
    }
    this.router.navigate(['/home'])
  }
}
