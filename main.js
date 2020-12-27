(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DVh":
/*!**********************************************************!*\
  !*** ./src/app/messagecenter/messagecenter.component.ts ***!
  \**********************************************************/
/*! exports provided: MessagecenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagecenterComponent", function() { return MessagecenterComponent; });
/* harmony import */ var _raw_loader_messagecenter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./messagecenter.component.html */ "g2eJ");
/* harmony import */ var _messagecenter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagecenter.component.css */ "RWan");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _model_communication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/communication */ "X37V");
/* harmony import */ var _model_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/message */ "HkZp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/DnsHelper */ "0hfJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MessagecenterComponent = /** @class */ (function () {
    function MessagecenterComponent(appComponent, http) {
        this.appComponent = appComponent;
        this.http = http;
        this.messageInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        appComponent.setCurrentMessageCenter(this);
    }
    MessagecenterComponent.prototype.ngOnInit = function () {
        this.currentUserUuid = this.appComponent.getCurrCookieUserId();
        // TODO Angular Server-Sent Events (SSE)
        this.communication = new _model_communication__WEBPACK_IMPORTED_MODULE_4__["Communication"]();
        // const requester: User = this.appComponent.getCurrCookieUserOrNull();
        // const responder: User = this.appComponent.getCurrCookieUserOrNull();
        // this.communication.requesterName = requester.name;
        // this.communication.responderName = responder.name;
    };
    MessagecenterComponent.prototype.setNewCommunication = function (communication) {
        this.communication = communication;
        this.relaodAllMessages();
    };
    MessagecenterComponent.prototype.relaodAllMessages = function () {
        var _this = this;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var commClone = Object.create(this.communication);
        commClone.commUuid = this.communication.commUuid;
        commClone.requesterName = this.communication.requesterName;
        commClone.responderName = this.communication.responderName;
        commClone.communicationPartnerName = this.communication.communicationPartnerName;
        commClone.commodityId = this.communication.commodityId;
        commClone.messages = this.communication.messages;
        commClone.currentRequestingUserUuid = this.currentUserUuid;
        var resp = this.http.get(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_8__["DnsHelper"]().url +
            '/api/communication/' + this.communication.commUuid +
            '?useruuid=' + this.currentUserUuid);
        resp.subscribe(function (result) {
            var resultMessages = result;
            _this.communication.messages = resultMessages;
        });
    };
    MessagecenterComponent.prototype.sendMessage = function (event) {
        var _this = this;
        var requesterUuId = this.appComponent.getCurrCookieUserId();
        var commodityId = this.communication.commodityId;
        var messageToSend = new _model_message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
        messageToSend.messageText = this.messageInput.value;
        messageToSend.communicationUuid = this.communication.commUuid;
        messageToSend.messageOwnerUuid = requesterUuId;
        messageToSend.commodityId = commodityId;
        // this.communication.messages.push(messageToSend);
        this.messageInput.setValue("");
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var resp2 = this.http.put(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_8__["DnsHelper"]().url + '/api/communication', messageToSend, httpOpt);
        resp2.subscribe(function (result) {
            _this.relaodAllMessages();
        });
    };
    MessagecenterComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    MessagecenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-messagecenter',
            template: _raw_loader_messagecenter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_messagecenter_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], MessagecenterComponent);
    return MessagecenterComponent;
}());



/***/ }),

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\workspace\sharty\src\main.ts */"zUnb");


/***/ }),

/***/ "0hfJ":
/*!*************************************!*\
  !*** ./src/app/helper/DnsHelper.ts ***!
  \*************************************/
/*! exports provided: DnsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DnsHelper", function() { return DnsHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var DnsHelper = /** @class */ (function () {
    function DnsHelper() {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            // this.url = "http://127.0.0.1:5001";  // Test
            this.url = "http://localhost:5001"; // Test
        }
        else {
            this.url = "http://192.168.0.178:5001"; // Produktion
        }
    }
    return DnsHelper;
}());



/***/ }),

/***/ "18Le":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/DnsHelper */ "0hfJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOpt = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'ContentType': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.getUserAttr = function (loginName, password) {
        /*
        const httpsHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        });
        const httpOpt = {
          headers: httpsHeaders
        };
    
        const user: User = new User();
        user.loginName = loginName;
        user.passphrase = password;
        */
        return this.http.get(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_2__["DnsHelper"]().url + '/api/user?loginname=' + loginName + '&passphrase=' + password);
        // return this.http.get(new DnsHelper().url + '/api/user/user?loginName=' +
        // loginName + '&passphrase=' + password);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user */ "kl1M");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/DnsHelper */ "0hfJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, appComponent) {
        this.http = http;
        this.appComponent = appComponent;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.passphrase = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // TODO Payment:
        // https://dev.to/ashinzekene/creating-an-angular-shopping-app-and-integrating-payments-using-rave-418l
        var currUser = this.appComponent.getCurrCookieUserOrNull();
        this.username.setValue(currUser.name);
    };
    RegisterComponent.prototype.registerTheUser = function (event) {
        var _this = this;
        event.preventDefault();
        var currUserId = this.appComponent.getCurrCookieUserId();
        var user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        user.uuId = currUserId;
        user.name = this.username.value;
        user.loginName = this.email.value;
        user.passphrase = this.passphrase.value;
        var resp1 = this.http.post(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/user/', user, {
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
        });
        resp1.subscribe(function (result) {
            var resUser = result;
            _this.appComponent.setCurrUserCookie(resUser);
        });
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('reqired') ? 'Sie müssen einen Wert eingeben' :
            this.email.hasError('email') ? 'Keine gültige E-Mail-Adresse' : '';
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "40DX":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"margin:2em;\">{{helloString}}</p>\n<div fxLayout=\"row wrap padding\">\n  <app-add-card *ngIf=\"displayAddCard\" fxFlex.xs=\"100\" fxFlex=\"33\" fxFlex.md=\"33\" fxFlex.sm=\"50\" fxLayout=\"column\">\n  </app-add-card>\n  <app-card *ngFor=\"let commodity of appComponent.commodities\" [cardCommodity]=\"commodity\" fxFlex.xs=\"100\" fxFlex=\"33\"\n    fxFlex.md=\"33\" fxFlex.sm=\"50\" fxLayout=\"column\"></app-card>\n</div>\n<button mat-fab id=\"share_button\" (click)=\"displayShareItem($event)\">\n  <i class=\"material-icons\">add</i>\n</button>");

/***/ }),

/***/ "6K3O":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxFlex.xs=\"auto\" >\n  <mat-card>\n    <video mat-card-image width=\"640\" height=\"480\" id=\"vid\" autoplay class=\"mat-card-image-style\"></video>\n    <canvas id=\"canvas1\" width=\"640\" height=\"480\" style=\"width: 100%;display: none;height: 20em;\"></canvas>\n    <mat-card-actions>\n      <button (click)=\"takePicture($event)\" mat-button>TEILEN</button>\n      <button (click)=\"cancelNewCommodity($event)\" mat-button>ABBRECHEN</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "7AAY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprint/imprint.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap padding\">\n    <div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"column\" style=\"padding:20px;\">\n        <mat-card style=\"box-shadow:0 0 0 0\">\n          <mat-card-title>Standort</mat-card-title>\n          <p><span style=\"color:green;\">sharty</span> ist ein non-for-profit \"Garagen-Projekt\", das in der Freizeit\n            neben einem Vollzeitjob als Hobby entstanden ist. Daher kann keine Garantie f&uuml;r irgendeine\n            Funktionalit&auml;t &uuml;bernommen werden. Verwendung zu eigenem Vergn&uuml;gen und auf eigene Gefahr.</p>\n            <p>Der Standort des <span style=\"color:green;\">sharty</span>-Servers ist <i>Steckborn, Schweiz</i></p>\n        </mat-card>\n    </div>\n\n    <div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"column\" style=\"padding:20px;\">\n        <mat-card style=\"box-shadow:0 0 0 0\">\n          <mat-card-title>Datenschutz</mat-card-title>\n          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen\n              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>\n\n          <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren\n              Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt\n              dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung\n              nicht an Dritte weitergegeben.</p>\n\n          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken\n              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>\n\n        </mat-card>\n    </div>\n\n    <div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"column\" style=\"padding:20px;\">\n        <mat-card style=\"box-shadow:0 0 0 0\">\n          <mat-card-title>Server-Log-Files</mat-card-title>\n          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files,\n              die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>\n              <ul>\n                  <li>Browsertyp und Browserversion</li>\n                  <li>verwendetes Betriebssystem</li>\n                  <li>Referrer URL</li>\n                  <li>Hostname des zugreifenden Rechners</li>\n                  <li>Uhrzeit der Serveranfrage</li>\n              </ul>\n          <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen\n              wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte\n              für eine rechtswidrige Nutzung bekannt werden.</p>\n        </mat-card>\n    </div>\n\n    <div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"column\" style=\"padding:20px;\">\n        <mat-card style=\"box-shadow:0 0 0 0\">\n          <mat-card-title>&Uuml;bertragung Nutzungsrechte</mat-card-title>\n          <p>Durch das Hochladen und Eingeben von Informationen und Medien (Fotos etc.) &uuml;bertragen\n              Sie stillschweigend die Nutzungsrechte an allen diesen Informationen und Medien an\n              <span style=\"color:green;\">sharty</span>. Diese Informationen und Medien k&ouml;nnen von \n              <span style=\"color:green;\">sharty</span> zu jedem beliebigen Zweck verwendet werden.</p>\n        </mat-card>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mainbox {\n    height: 100%;\n}\n\nmat-toolbar {\n    background-color: #2a3a44;\n}\n\n.logo_button {\n    color: lightgreen;\n    text-decoration: none;\n    font-weight: lighter;\n    font-style: italic;\n    font-size: 120%;\n}\n\n.logo_subtitle {\n    color: white;\n    text-decoration: none;\n    font-weight: lighter;\n    font-size: 80%;\n}\n\n.align-right-spacer {\n    flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n    position: absolute;\n    width: 100%;\n    height: 90%;\n    background-color: white;\n}\n\nmat-sidenav-content {\n    height:100%;\n}\n\nmat-nav-list {\n    padding: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5ib3gge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTNhNDQ7XG59XG4ubG9nb19idXR0b24ge1xuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxMjAlO1xufVxuLmxvZ29fc3VidGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1zaXplOiA4MCU7XG59XG5cbi5hbGlnbi1yaWdodC1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG5tYXQtbmF2LWxpc3Qge1xuICAgIHBhZGRpbmc6IDEuNWVtO1xufVxuIl19 */");

/***/ }),

/***/ "Aqmg":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#share_button {\n    margin: 1em;\n    position: fixed;\n    bottom: 0px;\n    right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2hhcmVfYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiServer: "http://localhost:5000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HkZp":
/*!**********************************!*\
  !*** ./src/app/model/message.ts ***!
  \**********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "Hykb":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"row\" style=\"padding:20px;\">\n    <mat-card style=\"min-width:300px;min-height:100%;\">\n        <mat-card-title>Registrieren</mat-card-title>\n        <mat-card-content>\n            <div style=\"display:flex;flex-direction:column;\">\n                <mat-form-field>\n                    <input matInput id=\"username\" type=\"text\" placeholder=\"Benutzername\"\n                        [formControl]=\"username\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput id=\"loginname\" type=\"text\" placeholder=\"E-Mail\"\n                        [formControl]=\"email\" required>\n                    <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput [formControl]=\"passphrase\" id=\"password\"\n                            type=\"password\" placeholder=\"Passwort\" required>\n                </mat-form-field>\n                <button routerLink='/' (click)=\"registerTheUser($event)\" mat-button>Registrieren</button>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>");

/***/ }),

/***/ "PwIw":
/*!************************************************!*\
  !*** ./src/app/add-card/add-card.component.ts ***!
  \************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "6K3O");
/* harmony import */ var _add_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.css */ "YBRd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_commodity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/commodity */ "aGIF");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main/main.component */ "wlho");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/DnsHelper */ "0hfJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(http, mainComp, appComponent) {
        this.http = http;
        this.mainComp = mainComp;
        this.appComponent = appComponent;
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var videoConstraint = {
            video: true
        };
        navigator.mediaDevices.getUserMedia(videoConstraint)
            .then(function (videoStream) {
            _this.videoStream = videoStream;
            window.stream = videoStream;
            window.vid.srcObject = window.stream;
        }).catch(function (error) {
            alert(error);
        });
    };
    AddCardComponent.prototype.takePicture = function (event) {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (loc) {
                var vid = document.getElementById('vid');
                window.canvas = document.getElementById("canvas1");
                var canvas1 = window.canvas;
                var canvasContext = canvas1.getContext('2d');
                canvasContext.
                    drawImage(vid, 0, 0, canvas1.width, canvas1.height);
                canvas1.toBlob(function (pic) {
                    // let imgUrl = window.URL.createObjectURL(pic);
                    // hier scheitert es:
                    // pic enthält nicht Bild sondern
                    // Text "[object Blob]":
                    var readBlob = new FileReader();
                    readBlob.onload = function () {
                        var picString = readBlob.result;
                        var img = new Image();
                        img.src = picString;
                        document.body.appendChild(img);
                        var myImg = {
                            data: btoa(picString)
                        };
                        var resp1 = _this.http.put(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/image', myImg, {
                            headers: {
                                'Content-Type': 'application/json',
                                'cache-control': 'no-cache'
                            }
                        });
                        resp1.subscribe(function (result) {
                            var newPicId = JSON.stringify(result);
                            var commodity = new _model_commodity__WEBPACK_IMPORTED_MODULE_4__["Commodity"]();
                            commodity.name = "Wow5!";
                            commodity.picUrl = newPicId;
                            var ownerUuid = _this.appComponent.getCurrCookieUserId();
                            commodity.ownerUuid = ownerUuid;
                            commodity.latitude = loc.coords.latitude;
                            commodity.longitude = loc.coords.longitude;
                            commodity.reportAbuse = 0;
                            var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'cache-control': 'no-cache'
                            });
                            var httpOpt = {
                                headers: httpsHeaders
                            };
                            var resp2 = _this.http.put(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/commodity', commodity, httpOpt);
                            resp2.subscribe(function (result) {
                            });
                        });
                    };
                    readBlob.readAsBinaryString(pic);
                }, "image/jpeg", 1.0);
            });
        }
        // let commodity: Commodity = new Commodity();
        // commodity.name = "Wow2!";
        /*
        //this.mainComp.commodities[this.mainComp.commodities.length]
        //      = commodity;
    
        const httpsHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        });
        const httpOpt = {
          headers: httpsHeaders
        };
        const resp = this.http.post<Commodity>(
          new DnsHelper().url + '/api/commodity',
          commodity, httpOpt
        );
        resp.subscribe(result => {
          console.log("AH: " + JSON.stringify(result));
        });
        */
    };
    AddCardComponent.prototype.cancelNewCommodity = function (event) {
        this.mainComp.displayShareItem(event);
    };
    AddCardComponent.prototype.ngOnDestroy = function () {
        this.videoStream.getTracks()[0].stop();
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
    ]; };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "RWan":
/*!***********************************************************!*\
  !*** ./src/app/messagecenter/messagecenter.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    margin: 0.5em;\r\n}\r\n\r\n.my-message {\r\n    background-color: lightblue;\r\n    margin-left: 40%;\r\n}\r\n\r\n.others-message {\r\n    background-color: lightgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VjZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6Im1lc3NhZ2VjZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5teS1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5vdGhlcnMtbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/user */ "kl1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper/DnsHelper */ "0hfJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService, snckBar, http, router, oMedia) {
        var _this = this;
        this.snckBar = snckBar;
        this.http = http;
        this.router = router;
        this.title = 'sharty';
        this.cookieNameUser = 'sharty_user';
        this.sideNavMode = 'side';
        this.isSideNavDisableClose = true;
        this.messageCenter = null;
        this.commodities = [];
        this.commoditiesAll = [];
        this.cookieService = cookieService;
        this.mediaWatcher = oMedia.asObservable().subscribe(function (mChange) {
            if (mChange[0].mqAlias === 'xs') {
                _this.sideNavMode = 'over';
                _this.isSideNavDisableClose = false;
            }
            else {
                _this.sideNavMode = 'side';
                _this.isSideNavDisableClose = true;
                _this.sideNavOpened = true;
            }
        });
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.currentUser.registered = false;
        var currUser = this.getCurrCookieUserOrNull();
        // create new user cookie if not exists:
        if (currUser === undefined || currUser === null) {
            this.createNewUserCookie();
        }
        else {
            // user cookie exists already:
            this.loadContacts(currUser);
        }
        this.showCookieNotification();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getCurrCookieUserId = function () {
        var currUser = this.getCurrCookieUserOrNull();
        if (currUser !== undefined && currUser !== null) {
            // set new or refresh date if already set:
            this.setCurrUserCookie(currUser);
            return currUser.uuId;
        }
        else {
            return '';
        }
    };
    // Returns current User from cookie or null if no
    // user has been written to the cookie so far (which should not
    // be possible in "normal" operation).
    AppComponent.prototype.getCurrCookieUserOrNull = function () {
        var currUserCookieString = this.cookieService.get(this.cookieNameUser);
        var currUser = null;
        if (currUserCookieString !== undefined && currUserCookieString !== null &&
            currUserCookieString !== "") {
            currUser = JSON.parse(currUserCookieString);
            this.setCurrUserCookie(currUser);
        }
        return currUser;
    };
    // Replaces the current user cookie with the
    // given user object.
    AppComponent.prototype.setCurrUserCookie = function (user) {
        var expDate = new Date();
        expDate.setDate(expDate.getDate() + 365);
        this.cookieService.set(this.cookieNameUser, JSON.stringify(user), expDate, null, null, false, "Lax");
        this.currentUser = user;
        this.loadContacts(user);
    };
    AppComponent.prototype.setCurrentMessageCenter = function (messageCenter) {
        this.messageCenter = messageCenter;
    };
    AppComponent.prototype.openCommLink = function (event, communication) {
        this.openCommLinkInternal(communication);
    };
    AppComponent.prototype.openCommLinkInternal = function (communication) {
        if (this.messageCenter != null) {
            this.messageCenter.setNewCommunication(communication);
        }
    };
    AppComponent.prototype.toggleSideNav = function (event) {
        if (!this.isSideNavDisableClose) {
            this.sideNavOpened = !this.sideNavOpened;
        }
    };
    AppComponent.prototype.toggleShowLikes = function (event) {
        this.commodities = [];
        if (!this.isShowLikes) {
            for (var _i = 0, _a = this.commoditiesAll; _i < _a.length; _i++) {
                var comm = _a[_i];
                if (comm.likedByCurrentUser) {
                    this.commodities.push(comm);
                }
            }
        }
        else {
            for (var _b = 0, _c = this.commoditiesAll; _b < _c.length; _b++) {
                var comm = _c[_b];
                this.commodities.push(comm);
            }
        }
    };
    AppComponent.prototype.logout = function (event) {
        this.createNewUserCookie();
        this.currentUser = this.getCurrCookieUserOrNull();
    };
    AppComponent.prototype.loadContacts = function (currUser) {
        /*
        const httpsHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        });
        const httpOpt = {
          headers: httpsHeaders
        };
    
        let sendUser: User = new User();
        sendUser.uuId = currUser.uuId;
        */
        var _this = this;
        var resp = this.http.get(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_9__["DnsHelper"]().url + '/api/communication?useruuid=' + currUser.uuId);
        resp.subscribe(function (result) {
            var communication = result;
            _this.contacts = communication;
            if (_this.contacts.length != 0) {
                for (var _i = 0, _a = _this.contacts; _i < _a.length; _i++) {
                    var contact = _a[_i];
                    _this.setCommunicationPartnerName(contact, currUser.name);
                }
                if (_this.contacts[0].requesterName == currUser.name) {
                    _this.contacts[0].communicationPartnerName =
                        _this.contacts[0].responderName;
                }
                else {
                    _this.contacts[0].communicationPartnerName =
                        _this.contacts[0].requesterName;
                }
                _this.openCommLinkInternal(_this.contacts[0]);
            }
        });
    };
    AppComponent.prototype.setCommunicationPartnerName = function (comm, currUserName) {
        if (comm.requesterName == currUserName) {
            comm.communicationPartnerName =
                comm.responderName;
        }
        else {
            comm.communicationPartnerName =
                comm.requesterName;
        }
    };
    AppComponent.prototype.createNewUserCookie = function () {
        var _this = this;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var resp2 = this.http.put(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_9__["DnsHelper"]().url + '/api/user', httpOpt);
        resp2.subscribe(function (result) {
            var resUser = result;
            _this.setCurrUserCookie(resUser);
        });
    };
    AppComponent.prototype.showCookieNotification = function () {
        var _this = this;
        var hideInfoCookieName = 'hide_info';
        var hideInfoValue = this.cookieService.get(hideInfoCookieName);
        if (hideInfoValue !== 'true') {
            var snckBarHandle = this.snckBar.open('Diese App verwendet Cookies. Nähere Informationen im Impressum.', 'X', {
                duration: 99999999999999
            });
            snckBarHandle.afterDismissed().subscribe(function () {
                _this.cookieService.set(hideInfoCookieName, 'true', 50 * 365, null, null, false, "Lax");
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // deactivate watcher that identifies whether
        // smartphone or desktop:
        this.mediaWatcher.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"mainbox\">\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <button arial-label=\"Toggle sidenav\" mat-icon-button (click)=\"toggleSideNav($event)\" style=\"color:white;\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>&nbsp;&nbsp;&nbsp;\n      <span><a class=\"logo_button\" href=\"\">{{title}}</a></span>&nbsp;&nbsp;\n      <span *ngIf=\"isSideNavDisableClose\" class=\"logo_subtitle\">Kostenloses in der Umgebung</span>\n      <span class=\"align-right-spacer\"></span>\n      <mat-icon [matMenuTriggerFor]=\"rightmenu\" style=\"color:white;\" aria-label=\"Submenu icon\"\n        *ngIf=\"router.url == '/'\">more_vert</mat-icon>\n      <mat-menu #rightmenu=\"matMenu\">\n        <button mat-menu-item><mat-checkbox [(ngModel)]=\"isShowLikes\" (click)=\"toggleShowLikes($event)\">Nur Likes anzeigen</mat-checkbox></button>\n        <button mat-menu-item><mat-checkbox>Nur Eigene anzeigen</mat-checkbox></button>\n        <button mat-menu-item><mat-checkbox>Ausgeblendete anzeigen</mat-checkbox></button>\n        <button mat-menu-item>Max. Entfernung</button>\n      </mat-menu>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-sidenav-container>\n    <mat-sidenav *ngIf=\"router.url != '/messagecenter'\" [(opened)]=\"sideNavOpened\" #drawer\n      [mode]=\"sideNavMode\" role=\"navigation\" [(disableClose)]=\"isSideNavDisableClose\">\n      <mat-nav-list>\n        <a mat-list-item routerLink='/messagecenter' (click)=\"toggleSideNav($event)\">\n          <mat-icon aria-label=\"Nachrichten\">speaker_notes</mat-icon>&nbsp;Nachrichten\n        </a>\n        <a *ngIf=\"!currentUser.registered\" mat-list-item routerLink='/login'\n              (click)=\"toggleSideNav($event)\">\n          <mat-icon aria-label=\"Anmelden\">contacts</mat-icon>&nbsp;Anmelden\n        </a>\n        <a *ngIf=\"!currentUser.registered\"  mat-list-item routerLink='/register'\n              (click)=\"toggleSideNav($event)\">\n          <mat-icon aria-label=\"Registrieren\">contact_mail</mat-icon>&nbsp;Registrieren\n        </a>\n        <a mat-list-item routerLink='/profile' (click)=\"toggleSideNav($event)\">\n          <mat-icon aria-label=\"Profil\">contact_mail</mat-icon>&nbsp;Profil\n        </a>\n        <a mat-list-item routerLink='/imprint' (click)=\"toggleSideNav($event)\">\n          <mat-icon aria-label=\"Impressum\">star_border</mat-icon>&nbsp;Impressum\n        </a>\n        <a *ngIf=\"currentUser.registered\" mat-list-item routerLink='/'\n              (click)=\"logout($event)\">\n          <mat-icon aria-label=\"Logout\">arrow_right_alt</mat-icon>&nbsp;Logout\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav *ngIf=\"router.url == '/messagecenter'\" [(opened)]=\"sideNavOpened\" #drawer\n      [mode]=\"sideNavMode\" role=\"navigation\" [(disableClose)]=\"isSideNavDisableClose\">\n      <mat-nav-list>\n        <button mat-mini-fab routerLink='/'>&lt;-</button>\n        <a *ngFor=\"let contact of contacts\" id=\"{{contact.commUuid}}\" (click)=\"openCommLink($event, contact)\"\n          mat-list-item>&nbsp;{{contact.communicationPartnerName}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.css */ "fMGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "Sy1n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(appComponent) {
        this.appComponent = appComponent;
        this.userName = "";
        this.loginName = "";
        this.uuid = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var user = this.appComponent.getCurrCookieUserOrNull();
        if (user !== null) {
            this.userName = user.name;
            this.loginName = user.loginName;
            this.uuid = user.uuId;
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "WpTA":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <img mat-card-image src=\"{{ picUrl }}\"\n      alt=\"Bild {{ cardCommodity.picUrl }}.jpg kann nicht angezeigt werden.\" />\n    <mat-card-content>\n        <mat-chip-list>\n          <mat-chip class=\"mat-chip-style\">\n            Entfernung {{ cardCommodity.distanceToCurrentUser }} km\n          </mat-chip>\n        </mat-chip-list>\n    </mat-card-content>\n    <mat-divider></mat-divider>\n    <mat-card-actions>\n      <button *ngIf=\"belongsToCurrentUser\" mat-button matTooltip=\"Löschen\">\n        <mat-icon aria-label=\"Clear\" class=\"icon-clear-style\">clear</mat-icon>\n      </button>\n      <button *ngIf=\"belongsToCurrentUser == false\" (click)=\"openMessage($event)\" mat-button matTooltip=\"Anbieter anschreiben\">\n        <mat-icon aria-label=\"Contact\" class=\"icon-contact-style\">mail_outline</mat-icon>\n      </button>\n      <button mat-button matTooltip=\"Like\" (click)=\"likeCommodity($event)\">\n        <mat-icon *ngIf=\"cardCommodity.likedByCurrentUser\" aria-label=\"Like\" class=\"icon-red-style\">\n          favorite\n        </mat-icon>\n        <mat-icon *ngIf=\"cardCommodity.likedByCurrentUser == false\" aria-label=\"Like\" class=\"icon-red-style\">\n          favorite_border\n        </mat-icon>\n      </button>\n      <button *ngIf=\"belongsToCurrentUser == false\" \n          (click)=\"reportAbuse($event)\" mat-button matTooltip=\"Missbrauch melden\">\n        <mat-icon aria-label=\"Report\" class=\"icon-report-style\">warning</mat-icon>\n      </button>\n      <button mat-button matTooltip=\"Ausblenden\">\n        <mat-icon aria-label=\"Unshow\" class=\"icon-unshow-style\">remove_red_eye</mat-icon>\n     </button>\n    </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "X37V":
/*!****************************************!*\
  !*** ./src/app/model/communication.ts ***!
  \****************************************/
/*! exports provided: Communication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Communication", function() { return Communication; });
var Communication = /** @class */ (function () {
    function Communication() {
    }
    /**
     * Copy method. Creates a shallow copy. Messages are not copied
     * but only referenced.
     */
    Communication.prototype.clone = function () {
        var commCopy = new Communication();
        commCopy.commUuid = this.commUuid;
        commCopy.requesterName = this.requesterName;
        commCopy.responderName = this.responderName;
        commCopy.communicationPartnerName = this.communicationPartnerName;
        commCopy.commodityId = this.commodityId;
        commCopy.messages = this.messages;
        commCopy.currentRequestingUserUuid = this.currentRequestingUserUuid;
        return commCopy;
    };
    return Communication;
}());



/***/ }),

/***/ "XRhJ":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "m6/9");
/* harmony import */ var _error404_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.component.css */ "Hykb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component.ctorParameters = function () { return []; };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-error404',
            template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "YBRd":
/*!*************************************************!*\
  !*** ./src/app/add-card/add-card.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n    max-width: 400px;\n    min-width: 400px;\n    margin: 0.5em;\n}\n.mat-card-image-style {\n    width: 100%;\n    height: 20em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFkZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMC41ZW07XG59XG4ubWF0LWNhcmQtaW1hZ2Utc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBlbTtcbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./imprint/imprint.component */ "jXtx");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./error404/error404.component */ "XRhJ");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-card/add-card.component */ "PwIw");
/* harmony import */ var _messagecenter_messagecenter_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./messagecenter/messagecenter.component */ "+DVh");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_21__["ImprintComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_23__["Error404Component"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_24__["CardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_27__["AddCardComponent"],
                _messagecenter_messagecenter_component__WEBPACK_IMPORTED_MODULE_28__["MessagecenterComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aGIF":
/*!************************************!*\
  !*** ./src/app/model/commodity.ts ***!
  \************************************/
/*! exports provided: Commodity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commodity", function() { return Commodity; });
var Commodity = /** @class */ (function () {
    function Commodity() {
    }
    return Commodity;
}());



/***/ }),

/***/ "cKw8":
/*!***********************************************!*\
  !*** ./src/app/imprint/imprint.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByaW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "cZL6":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n    margin: 0.5em;\n}\n\n.mat-chip-style {\n    background-color: lightgreen;    \n}\n\n.icon-clear-style {\n    color: darkred;\n}\n\n.icon-contact-style {\n    color: darkgreen;\n}\n\n.icon-red-style {\n    color: red;\n}\n\n.icon-report-style {\n    color: orange;\n}\n\n.icon-unshow-style {\n    color: blue;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLm1hdC1jaGlwLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuOyAgICBcbn1cblxuLmljb24tY2xlYXItc3R5bGUge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4uaWNvbi1jb250YWN0LXN0eWxlIHtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xufVxuXG4uaWNvbi1yZWQtc3R5bGUge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5pY29uLXJlcG9ydC1zdHlsZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmljb24tdW5zaG93LXN0eWxlIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuIl19 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fMGI":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "g2eJ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messagecenter/messagecenter.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"row\" style=\"padding:20px;\">\n    <mat-card style=\"min-width:300px;max-height:100%;\">\n        <mat-card-content>\n            <!-- <p>\n                Requester name: {{ communication.requesterName }}<br />\n                Responder name: {{ communication.responderName }}<br />\n                Objekte: <br />\n                Kommunikationen: {{ communication.commUuid }}<br />\n                Nachrichten:<br />\n              </p> -->\n              <div *ngFor=\"let message of communication.messages\">\n                <mat-chip-list>\n                        <mat-chip *ngIf=\"message.belongsThisUser\" class=\"my-message\">\n                            {{ message.messageText }}\n                        </mat-chip>\n                        <mat-chip *ngIf=\"!message.belongsThisUser\" class=\"others-message\">\n                            {{ message.messageText }}\n                        </mat-chip>\n                </mat-chip-list>\n            </div>\n            <mat-form-field>\n                <input matInput [formControl]=\"messageInput\" id=\"newmessage\" type=\"text\" placeholder=\"Nachricht...\">\n            </mat-form-field>\n            <button (click)=\"sendMessage($event)\" mat-button>Senden</button>\n        </mat-card-content>\n    </mat-card>\n</div>\n");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex.xs=\"auto\" fxFlex.gt.xs=\"50\" fxFlex=\"33\" fxFlex.gt.md=\"33\" fxLayout=\"row\" style=\"padding:20px;\">\n    <mat-card style=\"min-width:300px;min-height:100%;display:block;margin-left:auto;margin-right:auto;vertical-align:middle;\">\n        <mat-card-title>Login</mat-card-title>\n        <mat-card-content>\n            <div style=\"display:flex;flex-direction:column;\">\n                <mat-form-field>\n                    <input matInput id=\"loginname\" type=\"text\" placeholder=\"E-Mail\"\n                        [formControl]=\"email\" required>\n                    <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput [formControl]=\"passphrase\" id=\"password\"\n                            type=\"password\" placeholder=\"Passwort\" required>\n                </mat-form-field>\n                <button routerLink='/' (click)=\"loginTheUser($event)\" mat-button>Login</button>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n");

/***/ }),

/***/ "jXtx":
/*!**********************************************!*\
  !*** ./src/app/imprint/imprint.component.ts ***!
  \**********************************************/
/*! exports provided: ImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintComponent", function() { return ImprintComponent; });
/* harmony import */ var _raw_loader_imprint_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./imprint.component.html */ "7AAY");
/* harmony import */ var _imprint_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imprint.component.css */ "cKw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImprintComponent = /** @class */ (function () {
    function ImprintComponent() {
    }
    ImprintComponent.prototype.ngOnInit = function () {
    };
    ImprintComponent.ctorParameters = function () { return []; };
    ImprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-imprint',
            template: _raw_loader_imprint_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_imprint_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ImprintComponent);
    return ImprintComponent;
}());



/***/ }),

/***/ "kl1M":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "m6/9":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error404/error404.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Error 404 - Oooops, Webseite nicht gefunden!\n</p>\n");

/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./card.component.html */ "WpTA");
/* harmony import */ var _card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.css */ "cZL6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_commodity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/commodity */ "aGIF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _model_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/message */ "HkZp");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/DnsHelper */ "0hfJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CardComponent = /** @class */ (function () {
    function CardComponent(http, appComponent, router) {
        this.http = http;
        this.appComponent = appComponent;
        this.router = router;
        this.iconForFavorite = "favorite_border";
    }
    CardComponent.prototype.ngOnInit = function () {
        var tempPicUrl = this.cardCommodity.picUrl.substring(1, this.cardCommodity.picUrl.length - 1);
        this.picUrl = new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + "/api/image/" + tempPicUrl;
        this.belongsToCurrentUser = this.cardCommodity.belongsToCurretUser;
    };
    CardComponent.prototype.reportAbuse = function (event) {
        this.cardCommodity.reportAbuse++;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var resp2 = this.http.post(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/commodity', this.cardCommodity, httpOpt);
        resp2.subscribe(function (result) {
        });
    };
    CardComponent.prototype.openMessage = function (event) {
        var _this = this;
        if (!this.belongsToCurrentUser) {
            // const requester: User = new User();
            var requesterUuId = this.appComponent.getCurrCookieUserId();
            var commodityId = this.cardCommodity.id;
            var messageToSend = new _model_message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
            messageToSend.messageText = "Hello Sharty World!";
            messageToSend.communicationUuid = "";
            messageToSend.messageOwnerUuid = requesterUuId;
            messageToSend.commodityId = commodityId;
            var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            });
            var httpOpt = {
                headers: httpsHeaders
            };
            var resp2 = this.http.put(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/communication', messageToSend, httpOpt);
            resp2.subscribe(function (result) {
                _this.router.navigateByUrl("/messagecenter");
            });
        }
    };
    CardComponent.prototype.likeCommodity = function (event) {
        var _this = this;
        var commodityToSend = new _model_commodity__WEBPACK_IMPORTED_MODULE_3__["Commodity"]();
        commodityToSend.id = this.cardCommodity.id;
        commodityToSend.uuidOfCurrUserThatLikes = this.appComponent.getCurrCookieUserId();
        commodityToSend.likedByCurrentUser = !this.cardCommodity.likedByCurrentUser;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var resp2 = this.http.post(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_7__["DnsHelper"]().url + '/api/commodity/updatelike', commodityToSend, httpOpt);
        resp2.subscribe(function (result) {
            _this.cardCommodity.likedByCurrentUser = !_this.cardCommodity.likedByCurrentUser;
        });
    };
    CardComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    CardComponent.propDecorators = {
        cardCommodity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-card',
            template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _messagecenter_messagecenter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagecenter/messagecenter.component */ "+DVh");
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imprint/imprint.component */ "jXtx");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error404/error404.component */ "XRhJ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], pathMatch: 'full' },
    { path: 'messagecenter', component: _messagecenter_messagecenter_component__WEBPACK_IMPORTED_MODULE_2__["MessagecenterComponent"], pathMatch: 'full' },
    { path: 'imprint', component: _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_3__["ImprintComponent"], pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], pathMatch: 'full' },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], pathMatch: 'full' },
    // bei Fehler immer zu Error 404:
    { path: '**', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authentication, http, appComponent) {
        this.http = http;
        this.appComponent = appComponent;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.passphrase = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
        this.authentication = authentication;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginTheUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.authentication.getUserAttr(this.email.value, this.passphrase.value)
            .subscribe(function (result) {
            var user = result;
            _this.appComponent.setCurrUserCookie(user);
        }, function (error) {
            // do nothing
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        var errorText = "Error unbekannt";
        if (this.email.hasError('reqired')) {
            errorText = 'Sie müssen eine E-Mail-Adresse eingeben';
        }
        else if (this.email.hasError('email')) {
            errorText = 'Dies ist keine gültige E-Mail-Adresse';
        }
        return errorText;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./main.component.html */ "40DX");
/* harmony import */ var _main_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.css */ "Aqmg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/user */ "kl1M");
/* harmony import */ var _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/DnsHelper */ "0hfJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = /** @class */ (function () {
    function MainComponent(http, appComponent) {
        this.http = http;
        this.appComponent = appComponent;
        this.displayAddCard = false;
        this.helloString = "Aha2";
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (loc) {
            _this.getComponents(loc); // user gives location
        }, function () {
            _this.getComponents(null); // user gives no location
        });
        this.getHelloString();
    };
    MainComponent.prototype.getComponents = function (loc) {
        var _this = this;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        });
        var httpOpt = {
            headers: httpsHeaders
        };
        var user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.uuId = this.appComponent.getCurrCookieUserId();
        if (loc != null) {
            user.latitude = loc.coords.latitude;
            user.longitude = loc.coords.longitude;
        }
        else {
            user.latitude = 100.0;
            user.longitude = 200.0;
        }
        var resp = this.http.get(new _helper_DnsHelper__WEBPACK_IMPORTED_MODULE_6__["DnsHelper"]().url + '/api/commodity?useruuid=' +
            user.uuId + '&latitude=' + user.latitude + '&longitude=' +
            user.longitude, httpOpt);
        resp.subscribe(function (result) {
            _this.appComponent.commodities = result;
            _this.appComponent.commoditiesAll = result;
        });
    };
    MainComponent.prototype.displayShareItem = function (event) {
        this.displayAddCard = !this.displayAddCard;
        /*
    
        var commodity: Commodity = new Commodity();
        commodity.name = "Wow2!";
    
        this.commodities[this.commodities.length] = commodity;
    
        const httpsHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        });
    
        const httpOpt = {
          headers: httpsHeaders
        };
    
        const resp = this.http.post<Commodity>(
          new DnsHelper().url + '/api/commodity',
          commodity, httpOpt
        );
        resp.subscribe(result => {
          console.log("AH: " + JSON.stringify(result));
        });
    
        */
    };
    MainComponent.prototype.getHelloString = function () {
        var _this = this;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiServer).subscribe(function (response) {
            var responseObj = response;
            _this.helloString = responseObj.text;
        }, function (error) {
            _this.helloString = "ERROR";
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
    ]; };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main',
            template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_main_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Benutzername: {{ userName }}<br/>\n  Login-Name: {{ loginName }}<br/>\n  UUID (SP&Auml;TER ENTFERNEN): {{ uuid }}<br/>  \n  <button mat-button>KONTO L&Ouml;SCHEN</button>\n</p>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map