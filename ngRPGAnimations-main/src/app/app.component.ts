import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { pulse, shakeX, jello, bounce, flip} from 'ng-animate';
import { lastValueFrom, timer } from 'rxjs';

// Durées des animations Angular
const DEATH_DURATION_SECONDS = 0.5;
const ATTACK_DURATION_SECONDS = 0.3;
const PREATTACK_DURATION_SECONDS = 0.2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Animations Angular
  animations: [
    // Animation "Death" : tremblement
    trigger('death', [
      transition(':increment', useAnimation(shakeX, { params: { timing: DEATH_DURATION_SECONDS } })),
    ]),
    // Animation "Attack" : pulsation avec agrandissement
    trigger('attack', [
      transition(':increment', useAnimation(pulse, { params: { timing: ATTACK_DURATION_SECONDS, scale: 4.5 } })),
    ]),
    // Animation "PreAttack" : mouvement oscillant
    trigger('preAttack', [
      transition(':increment', useAnimation(jello, { params: { timing: PREATTACK_DURATION_SECONDS } })),
    ]),
    // Animation Angular "BounceShakeFlip"
    trigger('shake', [
      transition(':increment', useAnimation(shakeX, { params: { timing: 1 } })),
    ]),
    trigger('bounce', [
      transition(':increment', useAnimation(bounce, { params: { timing: 0.75 } })),
    ]),
    trigger('flip', [
      transition(':increment', useAnimation(flip, { params: { timing: 0.75 } })),
    ]),

  ],
})
export class AppComponent {
  // Variables d'état
  slimeIsPresent = false; // Slime visible ?
  ng_death = 0; // Animation Angular "Death"
  ng_preAttack = 0; // Animation Angular "PreAttack"
  ng_attack = 0; // Animation Angular "Attack"
  
  css_hit = false; // Animation CSS "Hit"
 
  // Animation Angular "BounceShakeFlip"
  ng_shake = 0; 
  ng_bounce = 0;
  ng_flip = 0;
  


  // Méthode pour montrer Slime
  showSlime() {
    const element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }

  // Méthode pour cacher Slime
  hideSlime() {
    const element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }

  // Bouton "Spawn" : montre Slime
  spawn() {
    this.slimeIsPresent = true;
    this.showSlime();
  }

  // Déclenche l'animation Angular "Death"
  death() {
    this.slimeIsPresent = false;
    this.hideSlime();
    this.ng_death++;
  }

  // Déclenche l'animation Angular "Attack"
  attack() {
    this.ng_preAttack++;
    setTimeout(() => this.ng_attack++, 200); // Déclenche après la préparation
  }

  // Déclenche l'animation CSS "Hit"
  hit() {
    this.css_hit = true;
    setTimeout(() => { this.css_hit = false; }, 500); // Réinitialise après 5 secondes
  }

  // Déclenche l'animation Angular "BounceShakeFlip"
   async bounceShakeFlip() {
    this.ng_bounce++;
    await this.waitFor(1);
    this.ng_shake++;
    await this.waitFor(.75);
    this.ng_flip++;
  }

  // Attendre un certain temps
  async waitFor(delayInSeconds:number) {
    await lastValueFrom(timer(delayInSeconds * 1000));
  }
}
