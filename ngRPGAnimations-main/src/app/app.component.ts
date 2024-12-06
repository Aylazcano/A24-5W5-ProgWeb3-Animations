import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { pulse, shakeX, wobble } from 'ng-animate';

// Même durée que l'animation de FadeIn
const DEATH_DURATION_SECONDS = 0.5;
const ATTACK_DURATION_SECONDS = 0.3;
const PREATTACK_DURATION_SECONDS = 0.2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('death', [transition(':increment', useAnimation(shakeX, {params: {timing: DEATH_DURATION_SECONDS}}))]),
    trigger('attack', [transition(':increment', useAnimation(pulse, {params: {timing: ATTACK_DURATION_SECONDS, scale: 4.5}}))]),
    trigger('preAttack', [transition(':increment', useAnimation(wobble, {params: {timing: PREATTACK_DURATION_SECONDS}}))])
  ],
})
export class AppComponent {
  slimeIsPresent = false;

  ng_death = 0;
  ng_preAttack = 0;
  ng_attack = 0;

  constructor() {
  }

  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }

  hideSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards
    this.showSlime();
  }

  death(){
    this.slimeIsPresent = false;
    // TODO Animation angular avec forwards
    this.hideSlime();

    // TODO 2e animation angular en même temps
    this.ng_death++;
    
  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    this.ng_preAttack++;
    setTimeout(() => this.ng_attack++, 200);
    // TODO Jouer une autre animation avant
  }

  hit(){
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
  }

}
