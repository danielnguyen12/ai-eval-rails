import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log('React controller connected');
    const app = document.getElementById('app');
  }
}
