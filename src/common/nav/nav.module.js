import angular from 'angular';
import ngResource from 'angular-resource';
import { NavComponent } from './nav.component';
import { NavService } from './nav.service';
import './nav.style.css';

export const NavModule = angular.module('nav', ['ngResource'])
.component('nav', NavComponent)
.service('NavService', NavService).name;
