// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ScoresController from "./scores_controller"
application.register("scores", ScoresController)

import ScrollReveal from 'stimulus-scroll-reveal'
application.register('scroll-reveal', ScrollReveal)
