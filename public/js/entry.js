//Injectable
import angular from "public/angular";
import ngAnimate from "public/angular-animate";
import ngAria from "public/angular-aria";
import uirouter from "public/angular-ui-router";
import ngMaterial from "public/angular-material";

//App
require( '.\/app.js');
//Directive
require( '.\/Directives.js');

//Controllers
require( '.\/ctMain.js');
require( '.\/ctRsvp.js');
require( '.\/ctAdmin.js');
//End Of Controllers

//Services
require( '.\/svAdminLogin.js');
require( '.\/svRsvpForm.js');
require( '.\/svUpdateBios.js');
//End Services

//Factories
require( '.\/ftAuth.js');
//End of Factories

//Addons
require( '.\/ng-map.min.js');