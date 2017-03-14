import angular from 'angular';
import { NavModule } from './nav/nav.module';

export const CommonModule = angular.module('common', [NavModule]).name;
