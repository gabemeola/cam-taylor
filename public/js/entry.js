//Injectable
import angular from "angular";
import "firebase";
import firebae from "angularfire";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import uirouter from "angular-ui-router";
import ngMaterial from "angular-material";

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