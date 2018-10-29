(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_manage_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/manage-pages.component */ "./src/app/pages/manage-pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/pages', pathMatch: 'full' },
    { path: 'pages', component: _pages_manage_pages_component__WEBPACK_IMPORTED_MODULE_2__["ManagePagesComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#site-select {\n  font-size: 16px;\n  margin-right: 20px;\n}\n\n.semi-row {\n  max-width: 800px;\n}\n\n.align-headers .mat-expansion-panel-header-title, \n.align-headers .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.align-headers .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.intro-card {\n  margin-top: 50px;\n}\n\n.api-error .mat-icon {\n  margin-top: 5px;\n  margin-right: 15px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main\" class=\"mat-typography\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFill>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row fxFlex fxLayoutAlign=\"space-between center\">\n      <span>HST Configuration Editor</span>\n      <div>\n        <mat-form-field *ngIf=\"hstConfigs !== undefined\" id=\"site-select\" [floatLabel]=\"'never'\">\n          <mat-select placeholder=\"Select a site\" [(ngModel)]=\"selectedHstConfig\"\n                      (selectionChange)=\"setHstConfig($event)\">\n            <mat-option *ngFor=\"let hstConfig of hstConfigs\" [value]=\"hstConfig\">{{hstConfig}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button mat-icon-button (click)=\"openSettings()\">\n          <mat-icon matTooltip=\"Change settings\">settings</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-tab-group *ngIf=\"selectedHstConfig !== undefined\">\n    <mat-tab label=\"Pages\">\n      <app-manage-pages></app-manage-pages>\n    </mat-tab>\n    <mat-tab label=\"Catalog components\" disabled></mat-tab>\n    <mat-tab label=\"Site map\" disabled></mat-tab>\n    <mat-tab label=\"Templates\" disabled></mat-tab>\n    <mat-tab label=\"Menus\" disabled></mat-tab>\n  </mat-tab-group>\n  <div fxLayoutAlign=\"center\" class=\"intro-card\" *ngIf=\"selectedHstConfig === undefined\">\n    <mat-card fxFlex=\"30\">\n      <mat-card-header>\n        <mat-card-title>\n          <h2 class=\"mat-h2\">Welcome</h2>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <p>Please configure the BloomReach API URL and credentials below if you're not using the defaults.</p>\n        <p>To start editig your site configuration, select a site using either the dropdown menu below or the one at the\n          top right.</p>\n        <div fxLayoutAlign=\"space-between\">\n          <mat-form-field [floatLabel]=\"'never'\">\n            <mat-select placeholder=\"Select a site\" [(ngModel)]=\"selectedHstConfig\"\n                        (selectionChange)=\"setHstConfig($event)\" [disabled]=\"hstConfigs === undefined\">\n              <mat-option *ngFor=\"let hstConfig of hstConfigs\" [value]=\"hstConfig\">{{hstConfig}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <button mat-button (click)=\"openSettings()\">\n            Change settings <mat-icon matTooltip=\"Change settings\">settings</mat-icon>\n          </button>\n        </div>\n        <div *ngIf=\"apiError\" class=\"api-error\" fxLayoutAlign=\"space-between stretch\">\n          <mat-icon class=\"error\">error</mat-icon>\n          <p class=\"error\">Couldn't retrieve HST configurations via HST API. Check the settings.</p>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _settings_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings-dialog/settings-dialog.component */ "./src/app/settings/settings-dialog/settings-dialog.component.ts");
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
    function AppComponent(hstConfigurationService, dialog) {
        this.hstConfigurationService = hstConfigurationService;
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getConfigurations();
    };
    AppComponent.prototype.getConfigurations = function () {
        var _this = this;
        this.hstConfigurationService.getConfigurations().subscribe(function (configurations) {
            if (configurations.length > 0) {
                _this.apiError = false;
                _this.hstConfigs = configurations.filter(function (configName) { return configName !== 'hst:default'; });
            }
            else {
                _this.apiError = true;
                _this.hstConfigs = undefined;
            }
        });
    };
    AppComponent.prototype.setHstConfig = function (hstConfig) {
        this.hstConfigurationService.setHstConfig(hstConfig.value);
    };
    AppComponent.prototype.openSettings = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_settings_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SettingsDialogComponent"], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function () { return _this.getConfigurations(); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_edit_page_page_tree_page_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-page/page-tree/page-tree.component */ "./src/app/pages/edit-page/page-tree/page-tree.component.ts");
/* harmony import */ var _pages_edit_page_component_edit_page_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/edit-page-component/edit-page-component.component */ "./src/app/pages/edit-page-component/edit-page-component.component.ts");
/* harmony import */ var _properties_edit_parameters_edit_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties/edit-parameters/edit-parameters.component */ "./src/app/properties/edit-parameters/edit-parameters.component.ts");
/* harmony import */ var _templates_create_template_dialog_create_template_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/create-template-dialog/create-template-dialog.component */ "./src/app/templates/create-template-dialog/create-template-dialog.component.ts");
/* harmony import */ var _templates_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/edit-template-dialog/edit-template-dialog.component */ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.ts");
/* harmony import */ var _pages_pages_list_pages_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/pages-list/pages-list.component */ "./src/app/pages/pages-list/pages-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_manage_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/manage-pages.component */ "./src/app/pages/manage-pages.component.ts");
/* harmony import */ var _pages_pages_list_pages_group_pages_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/pages-list/pages-group/pages-group.component */ "./src/app/pages/pages-list/pages-group/pages-group.component.ts");
/* harmony import */ var _node_rename_node_rename_node_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node/rename-node/rename-node.component */ "./src/app/node/rename-node/rename-node.component.ts");
/* harmony import */ var _containers_create_container_dialog_create_container_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/create-container-dialog/create-container-dialog.component */ "./src/app/containers/create-container-dialog/create-container-dialog.component.ts");
/* harmony import */ var _containers_edit_container_properties_edit_container_properties_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/edit-container-properties/edit-container-properties.component */ "./src/app/containers/edit-container-properties/edit-container-properties.component.ts");
/* harmony import */ var _pages_edit_page_component_container_component_reference_edit_container_component_reference_properties_edit_container_component_reference_properties_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component */ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.ts");
/* harmony import */ var _pages_edit_page_component_hst_component_edit_hst_component_properties_edit_hst_component_properties_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component */ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.ts");
/* harmony import */ var _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./properties/edit-properties/edit-properties.component */ "./src/app/properties/edit-properties/edit-properties.component.ts");
/* harmony import */ var _pages_edit_page_assign_sitemap_item_assign_sitemap_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/edit-page/assign-sitemap-item/assign-sitemap-item.component */ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.ts");
/* harmony import */ var _sitemap_create_sitemap_item_dialog_create_sitemap_item_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component */ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.ts");
/* harmony import */ var _dialogs_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialogs/shared/confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _settings_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/settings-dialog/settings-dialog.component */ "./src/app/settings/settings-dialog/settings-dialog.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_edit_page_page_tree_page_tree_component__WEBPACK_IMPORTED_MODULE_9__["PageTreeComponent"],
                _pages_edit_page_component_edit_page_component_component__WEBPACK_IMPORTED_MODULE_10__["EditPageComponentComponent"],
                _properties_edit_parameters_edit_parameters_component__WEBPACK_IMPORTED_MODULE_11__["EditParametersComponent"],
                _templates_create_template_dialog_create_template_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateTemplateDialogComponent"],
                _templates_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EditTemplateDialogComponent"],
                _pages_pages_list_pages_list_component__WEBPACK_IMPORTED_MODULE_14__["PagesListComponent"],
                _pages_manage_pages_component__WEBPACK_IMPORTED_MODULE_16__["ManagePagesComponent"],
                _pages_pages_list_pages_group_pages_group_component__WEBPACK_IMPORTED_MODULE_17__["PagesGroupComponent"],
                _node_rename_node_rename_node_component__WEBPACK_IMPORTED_MODULE_18__["RenameNodeComponent"],
                _containers_create_container_dialog_create_container_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CreateContainerDialogComponent"],
                _containers_edit_container_properties_edit_container_properties_component__WEBPACK_IMPORTED_MODULE_20__["EditContainerPropertiesComponent"],
                _pages_edit_page_component_container_component_reference_edit_container_component_reference_properties_edit_container_component_reference_properties_component__WEBPACK_IMPORTED_MODULE_21__["EditContainerComponentReferencePropertiesComponent"],
                _pages_edit_page_component_hst_component_edit_hst_component_properties_edit_hst_component_properties_component__WEBPACK_IMPORTED_MODULE_22__["EditHstComponentPropertiesComponent"],
                _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_23__["EditPropertiesComponent"],
                _pages_edit_page_component_edit_page_component_component__WEBPACK_IMPORTED_MODULE_10__["EditPageComponentComponent"],
                _pages_edit_page_assign_sitemap_item_assign_sitemap_item_component__WEBPACK_IMPORTED_MODULE_24__["AssignSitemapItemComponent"],
                _sitemap_create_sitemap_item_dialog_create_sitemap_item_dialog_component__WEBPACK_IMPORTED_MODULE_25__["CreateSitemapItemDialogComponent"],
                _dialogs_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmationDialogComponent"],
                _settings_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_27__["SettingsDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_6__["NgMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_7__["TreeModule"].forRoot()
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [
                _templates_create_template_dialog_create_template_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateTemplateDialogComponent"],
                _templates_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EditTemplateDialogComponent"],
                _containers_create_container_dialog_create_container_dialog_component__WEBPACK_IMPORTED_MODULE_19__["CreateContainerDialogComponent"],
                _sitemap_create_sitemap_item_dialog_create_sitemap_item_dialog_component__WEBPACK_IMPORTED_MODULE_25__["CreateSitemapItemDialogComponent"],
                _dialogs_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmationDialogComponent"],
                _settings_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_27__["SettingsDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/create-container-dialog/create-container-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/containers/create-container-dialog/create-container-dialog.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-checkbox.new-checkbox {\n  margin-left: 1.5em;\n  margin-bottom: 1.5em;\n  width: 4em;\n}\n"

/***/ }),

/***/ "./src/app/containers/create-container-dialog/create-container-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/containers/create-container-dialog/create-container-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create container</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <div fxLayoutAlign=\"start center\">\n    <mat-form-field appearance=\"fill\" fxFlex *ngIf=\"newContainerFolder === true\">\n      <mat-label>Container folder name</mat-label>\n      <input matInput [formControl]=\"newContainerFolderNameFormControl\" required>\n      <mat-error *ngIf=\"newContainerFolderNameFormControl.hasError('required')\">\n        Please enter a name\n      </mat-error>\n      <mat-error *ngIf=\"newContainerFolderNameFormControl.hasError('duplicateName')\">\n        Name already used by sibling. Please use a different name\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\" fxFlex *ngIf=\"newContainerFolder === false\">\n      <mat-label>Container folder</mat-label>\n      <mat-select placeholder=\"No container folder selected\" [formControl]=\"containerFolderNameFormControl\"\n                  (selectionChange)=\"onContainerFolderChange($event)\" class=\"select-with-hint\" required>\n        <mat-optgroup *ngFor=\"let hstConfig of containerFolders\" [label]=\"hstConfig.name\">\n          <mat-option *ngFor=\"let containerFolder of hstConfig.children\" [value]=\"containerFolder\">\n            {{containerFolder}}\n          </mat-option>\n        </mat-optgroup>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox [(ngModel)]=\"newContainerFolder\" (change)=\"switchContainerFolderNameFormFields()\"\n                  class=\"new-checkbox\" [disabled]=\"containerFolders && containerFolders.length === 0\">New</mat-checkbox>\n  </div>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Container name</mat-label>\n    <input matInput [formControl]=\"containerNameFormControl\" required>\n    <mat-error *ngIf=\"containerNameFormControl.hasError('required')\">\n      Please enter a name\n    </mat-error>\n    <mat-error *ngIf=\"containerNameFormControl.hasError('duplicateName')\">\n      Name already used by sibling. Please use a different name\n    </mat-error>\n  </mat-form-field>\n  <p class=\"mat-body-1 error\" *ngIf=\"errorOnSave\">Error while saving, check the logs</p>\n</div>\n<div mat-dialog-actions fxLayoutAlign=\"end\">\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!containerForm.valid\">Create & edit properties</button>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/create-container-dialog/create-container-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/containers/create-container-dialog/create-container-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateContainerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContainerDialogComponent", function() { return CreateContainerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/duplicate-name.validator */ "./src/app/shared/duplicate-name.validator.ts");
/* harmony import */ var _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/child-names-group-utils */ "./src/app/shared/child-names-group-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateContainerDialogComponent = /** @class */ (function () {
    function CreateContainerDialogComponent(dialogRef, hstConfigurationService) {
        this.dialogRef = dialogRef;
        this.hstConfigurationService = hstConfigurationService;
        this.newContainerFolder = false;
        this.containerFolderNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.newContainerFolderNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.containerNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.containerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            containerFolderNameFormControl: this.containerFolderNameFormControl,
            newContainerFolderNameFormControl: this.newContainerFolderNameFormControl,
            containerNameFormControl: this.containerNameFormControl
        });
        this.hstConfigurationService = hstConfigurationService;
    }
    CreateContainerDialogComponent.prototype.ngOnInit = function () {
        this.newContainerFolderNameFormControl.disable();
        this.getContainerFolders();
    };
    CreateContainerDialogComponent.prototype.getContainerFolders = function () {
        var _this = this;
        this.hstConfigurationService
            .getContainers()
            .subscribe(function (containerFolders) {
            if (containerFolders) {
                _this.containerFolders = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_7__["ChildNamesGroupUtils"].getChildNamesGroup(containerFolders);
            }
            else {
                _this.containerFolders = [];
                _this.newContainerFolder = true;
                _this.switchContainerFolderNameFormFields();
            }
        });
    };
    CreateContainerDialogComponent.prototype.switchContainerFolderNameFormFields = function () {
        if (this.newContainerFolder) {
            this.containerFolderNameFormControl.disable();
            this.newContainerFolderNameFormControl.enable();
            this.enableDuplicateContainerFolderNameValidator();
            this.disableDuplicateContainerNameValidator();
        }
        else {
            this.containerFolderNameFormControl.enable();
            this.newContainerFolderNameFormControl.disable();
            this.disableDuplicateContainerFolderNameValidator();
            this.enableDuplicateContainerNameValidator(this.containerFolderNameFormControl.value);
        }
    };
    CreateContainerDialogComponent.prototype.onContainerFolderChange = function (change) {
        this.enableDuplicateContainerNameValidator(change.value);
    };
    CreateContainerDialogComponent.prototype.disableDuplicateContainerFolderNameValidator = function () {
        this.newContainerFolderNameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
    };
    CreateContainerDialogComponent.prototype.enableDuplicateContainerFolderNameValidator = function () {
        this.newContainerFolderNameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_6__["DuplicateNameValidator"])(this.getContainerFolderSiblings(), '')
        ]);
    };
    CreateContainerDialogComponent.prototype.enableDuplicateContainerNameValidator = function (containerFolderName) {
        var _this = this;
        this.hstConfigurationService
            .getContainerFolder(containerFolderName)
            .subscribe(function (siblingNames) {
            if (siblingNames) {
                _this.containerNameFormControl.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_6__["DuplicateNameValidator"])(siblingNames, containerFolderName)
                ]);
            }
        });
    };
    CreateContainerDialogComponent.prototype.disableDuplicateContainerNameValidator = function () {
        this.containerNameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
    };
    CreateContainerDialogComponent.prototype.getContainerFolderSiblings = function () {
        var selectedHstConfig = this.hstConfigurationService.getSelectedHstConfig();
        var selectedContainerFolder = this.containerFolders.find(function (hstConfig) { return hstConfig.name === selectedHstConfig; });
        if (selectedContainerFolder != null) {
            return selectedContainerFolder.children;
        }
        return [];
    };
    CreateContainerDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    CreateContainerDialogComponent.prototype.onSave = function () {
        var _this = this;
        if (this.newContainerFolder) {
            this.addContainerFolder().subscribe(function (_) { return _this.addContainer(_this.newContainerFolderNameFormControl.value); });
        }
        else {
            this.addContainer(this.containerFolderNameFormControl.value);
        }
    };
    CreateContainerDialogComponent.prototype.addContainerFolder = function () {
        var _this = this;
        var newContainerFolderName = this.newContainerFolderNameFormControl.value;
        var newContainerFolder = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_5__["HstContainerComponentFolder"](newContainerFolderName);
        return this.hstConfigurationService
            .addContainerFolder(newContainerFolder)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (containerFolderResponse) {
            if (containerFolderResponse == null) {
                _this.errorOnSave = true;
            }
        }));
    };
    CreateContainerDialogComponent.prototype.addContainer = function (containerFolderName) {
        var _this = this;
        var containerName = this.containerNameFormControl.value;
        var newContainer = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_5__["HstContainerComponent"](containerName);
        this.hstConfigurationService
            .addContainer(containerFolderName, newContainer)
            .subscribe(function (containerResponse) {
            if (containerResponse) {
                var referenceComponent = containerFolderName + '/' + containerName;
                _this.dialogRef.close(referenceComponent);
            }
            else {
                _this.errorOnSave = true;
            }
        });
    };
    CreateContainerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-container-dialog',
            template: __webpack_require__(/*! ./create-container-dialog.component.html */ "./src/app/containers/create-container-dialog/create-container-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-container-dialog.component.css */ "./src/app/containers/create-container-dialog/create-container-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_4__["HstConfigurationService"]])
    ], CreateContainerDialogComponent);
    return CreateContainerDialogComponent;
}());



/***/ }),

/***/ "./src/app/containers/edit-container-properties/edit-container-properties.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/containers/edit-container-properties/edit-container-properties.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/edit-container-properties/edit-container-properties.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/containers/edit-container-properties/edit-container-properties.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"container != null\">\n  <div fxLayout=\"column\" class=\"outline\">\n    <p class=\"outline-header\">\n      Container properties: {{containerData.containerFolderName + '/' + containerData.containerName}}\n    </p>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>(rename) Container name</mat-label>\n      <input matInput [formControl]=\"nameFormControl\" required>\n      <mat-icon matSuffix matTooltip=\"Renaming will break references to this container by other components\">\n        info\n      </mat-icon>\n      <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Please enter a container name\n      </mat-error>\n      <mat-error *ngIf=\"nameFormControl.hasError('duplicateName')\">\n        Name already used by sibling. Pease use a different name\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Label</mat-label>\n      <input matInput placeholder=\"Label\" [(ngModel)]=\"properties['hst:label']\">\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Layout (xtype)</mat-label>\n      <mat-select [(value)]=\"properties['hst:xtype']\" class=\"select-with-hint\" required>\n        <mat-option value=\"hst.vbox\">Vertical - &lt;div&gt;</mat-option>\n        <mat-option value=\"hst.unorderedlist\">Vertical - &lt;ul&gt;</mat-option>\n        <mat-option value=\"hst.orderedlist\">Vertical - &lt;ol&gt;</mat-option>\n        <mat-option value=\"hst.span\">Horizontal - &lt;span&gt;</mat-option>\n        <mat-option value=\"hst.nomarkup\">Vertical - none (hst.nomarkup)</mat-option>\n      </mat-select>\n      <mat-icon matSuffix\n                matTooltip=\"Layout of container: horizontal or vertical, and HTML element components are wrapped in\">\n        info\n      </mat-icon>\n    </mat-form-field>\n    <app-edit-parameters [parameterNames]=\"properties['hst:parameternames']\"\n                         [parameterValues]=\"properties['hst:parametervalues']\">\n    </app-edit-parameters>\n    <app-edit-properties [properties]=\"properties\" [availableProperties]=\"availableProperties\"\n                         [specialProperties]=\"specialProperties\">\n    </app-edit-properties>\n    <p class=\"mat-body-1 error\" *ngIf=\"errorOnSave\">Error while saving, check the logs</p>\n    <div fxLayoutAlign=\"end\">\n      <button mat-button (click)=\"onReset()\">\n        <mat-icon>undo</mat-icon>\n        Reset container\n      </button>\n      <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!nameFormControl.valid\">\n        <mat-icon>save</mat-icon>\n        Save container\n      </button>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/containers/edit-container-properties/edit-container-properties.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/containers/edit-container-properties/edit-container-properties.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HstContainerComponentData, EditContainerPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponentData", function() { return HstContainerComponentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContainerPropertiesComponent", function() { return EditContainerPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/duplicate-name.validator */ "./src/app/shared/duplicate-name.validator.ts");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../properties/edit-properties/edit-properties.component */ "./src/app/properties/edit-properties/edit-properties.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HstContainerComponentData = /** @class */ (function () {
    function HstContainerComponentData(containerFolderName, containerName, hstConfig, siblingNames) {
        this.containerFolderName = containerFolderName;
        this.containerName = containerName;
        this.hstConfig = hstConfig;
        this.siblingNames = siblingNames;
    }
    return HstContainerComponentData;
}());

var EditContainerPropertiesComponent = /** @class */ (function () {
    function EditContainerPropertiesComponent(hstConfigurationService) {
        this.hstConfigurationService = hstConfigurationService;
        // @Output() containerReset = new EventEmitter();
        // @Output() containerSaved = new EventEmitter();
        this.containerRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorOnSave = false;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.availableProperties = [
            // { name: 'hst:parametervalues', type: HstPropertyType.StringArray },
            { name: 'hst:template', type: _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["HstPropertyType"].String },
            { name: 'hst:componentclassname', type: _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["HstPropertyType"].String },
        ];
        this.specialProperties = ['hst:label', 'hst:xtype'];
    }
    EditContainerPropertiesComponent.prototype.ngOnInit = function () {
    };
    EditContainerPropertiesComponent.prototype.ngOnChanges = function () {
        if (this.containerData) {
            this.getContainer();
        }
    };
    EditContainerPropertiesComponent.prototype.getContainer = function () {
        var _this = this;
        this.hstConfigurationService
            .getContainer(this.containerData.containerFolderName, this.containerData.containerName, this.containerData.hstConfig)
            .subscribe(function (container) {
            _this.container = container;
            _this.properties = container.properties;
            _this.originalName = container.name;
            _this.initNameFormControl(container.name);
        });
    };
    EditContainerPropertiesComponent.prototype.initNameFormControl = function (name) {
        this.nameFormControl.setValue(name);
        this.nameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_2__["DuplicateNameValidator"])(this.containerData.siblingNames, name)
        ]);
    };
    EditContainerPropertiesComponent.prototype.onReset = function () {
        this.getContainer();
        // this.containerReset.emit();
    };
    EditContainerPropertiesComponent.prototype.onSave = function () {
        if (this.nameFormControl.valid) {
            this.container.name = this.nameFormControl.value;
            this.saveContainer();
        }
    };
    EditContainerPropertiesComponent.prototype.saveContainer = function () {
        var _this = this;
        this.hstConfigurationService
            .updateContainer(this.containerData.containerFolderName, this.originalName, this.container, this.containerData.hstConfig)
            .subscribe(function (response) {
            if (response && _this.originalName !== _this.container.name) {
                var newName = _this.containerData.containerFolderName + '/' + _this.container.name;
                _this.containerRenamed.emit(newName);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HstContainerComponentData)
    ], EditContainerPropertiesComponent.prototype, "containerData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditContainerPropertiesComponent.prototype, "containerRenamed", void 0);
    EditContainerPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-container-properties',
            template: __webpack_require__(/*! ./edit-container-properties.component.html */ "./src/app/containers/edit-container-properties/edit-container-properties.component.html"),
            styles: [__webpack_require__(/*! ./edit-container-properties.component.css */ "./src/app/containers/edit-container-properties/edit-container-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_3__["HstConfigurationService"]])
    ], EditContainerPropertiesComponent);
    return EditContainerPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content fxLayout=\"column\">\n  <p>{{ data.top }}</p>\n  <p *ngIf=\"data.bottom\">{{ data.bottom }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onConfirm()\">Confirm</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    ConfirmationDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/ng-material.module.ts":
/*!***************************************!*\
  !*** ./src/app/ng-material.module.ts ***!
  \***************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgMaterialModule = /** @class */ (function () {
    function NgMaterialModule(matIconRegistry, domSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
    NgMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], NgMaterialModule);
    return NgMaterialModule;
}());



/***/ }),

/***/ "./src/app/node/rename-node/rename-node.component.css":
/*!************************************************************!*\
  !*** ./src/app/node/rename-node/rename-node.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/node/rename-node/rename-node.component.html":
/*!*************************************************************!*\
  !*** ./src/app/node/rename-node/rename-node.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput #nameField (keydown.esc)=\"cancelRename()\" (keydown.enter)=\"rename()\"\n         placeholder=\"Name component...\" [formControl]=\"nameFormControl\" required>\n  <mat-error *ngIf=\"nameFormControl.hasError('duplicateName')\">\n    Name already used by sibling. Pease use a different name\n  </mat-error>\n</mat-form-field>\n<button mat-icon-button matTooltip=\"(Re)name component\" (click)=\"rename()\" [disabled]=\"!nameFormControl.valid\"\n        class=\"icon-ok-on-hover always-visible\">\n  <mat-icon>check</mat-icon>\n</button>\n<button mat-icon-button matTooltip=\"Cancel\" (click)=\"cancelRename()\" class=\"icon-cancel-on-hover always-visible\">\n  <mat-icon>cancel</mat-icon>\n</button>\n"

/***/ }),

/***/ "./src/app/node/rename-node/rename-node.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/node/rename-node/rename-node.component.ts ***!
  \***********************************************************/
/*! exports provided: RenameNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameNodeComponent", function() { return RenameNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/duplicate-name.validator */ "./src/app/shared/duplicate-name.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RenameNodeComponent = /** @class */ (function () {
    function RenameNodeComponent() {
        this.updatedName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    RenameNodeComponent.prototype.ngOnInit = function () {
        this.nameFormControl.setValue(this.nodeName);
        this.nameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_2__["DuplicateNameValidator"])(this.getExistingChildNames(), this.nodeName)
        ]);
        this.nameField.nativeElement.focus();
    };
    RenameNodeComponent.prototype.ngAfterViewChecked = function () {
    };
    RenameNodeComponent.prototype.rename = function () {
        if (this.nameFormControl.valid) {
            this.updatedName.emit(this.nameFormControl.value);
        }
    };
    RenameNodeComponent.prototype.cancelRename = function () {
        this.updatedName.emit(null);
    };
    RenameNodeComponent.prototype.getExistingChildNames = function () {
        if (this.existingNodes && this.existingNodes instanceof Array && this.existingNodes.length > 0) {
            // can be either an array with strings, or an array with objects
            if (typeof this.existingNodes[0] === 'string') {
                return this.existingNodes;
            }
            return this.existingNodes.map(function (node) { return node.name; });
        }
        return [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RenameNodeComponent.prototype, "nodeName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RenameNodeComponent.prototype, "existingNodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RenameNodeComponent.prototype, "updatedName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RenameNodeComponent.prototype, "nameField", void 0);
    RenameNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rename-node',
            template: __webpack_require__(/*! ./rename-node.component.html */ "./src/app/node/rename-node/rename-node.component.html"),
            styles: [__webpack_require__(/*! ./rename-node.component.css */ "./src/app/node/rename-node/rename-node.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RenameNodeComponent);
    return RenameNodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <mat-form-field appearance=\"fill\" fxFlex>\n    <mat-label>Referenced container (hst:referencecomponent)</mat-label>\n    <mat-select placeholder=\"No reference component defined\" [(ngModel)]=\"containerComponentReference\"\n                class=\"select-with-hint\" (selectionChange)=\"setReferenceComponentProperty($event)\"\n                [compareWith]=\"compareFn\">\n      <mat-option value=\"\">No referenced container</mat-option>\n      <mat-optgroup *ngFor=\"let hstConfig of containers\" [label]=\"hstConfig.name\">\n        <ng-container *ngFor=\"let containerFolder of hstConfig.children\">\n          <mat-option *ngFor=\"let container of containerFolder.children\"\n                      [value]=\"container.data\">\n            {{containerFolder.name + '/' + container.name}}\n          </mat-option>\n        </ng-container>\n      </mat-optgroup>\n    </mat-select>\n    <mat-icon matSuffix matTooltip=\"Because containers live in the hst:workspace they need to be referenced. Through this reference the component will inherit all child components of the container\">info</mat-icon>\n  </mat-form-field>\n  <button mat-icon-button (click)=\"addContainer()\" class=\"icon-accent-on-hover\">\n    <mat-icon matTooltip=\"Add container\" [matTooltipPosition]=\"'left'\">add</mat-icon>\n  </button>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.ts":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: HstNodeGroupWithContainerData, EditContainerComponentReferencePropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstNodeGroupWithContainerData", function() { return HstNodeGroupWithContainerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContainerComponentReferencePropertiesComponent", function() { return EditContainerComponentReferencePropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _containers_edit_container_properties_edit_container_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../containers/edit-container-properties/edit-container-properties.component */ "./src/app/containers/edit-container-properties/edit-container-properties.component.ts");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _containers_create_container_dialog_create_container_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../containers/create-container-dialog/create-container-dialog.component */ "./src/app/containers/create-container-dialog/create-container-dialog.component.ts");
/* harmony import */ var _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/child-names-group-utils */ "./src/app/shared/child-names-group-utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HstNodeGroupWithContainerData = /** @class */ (function (_super) {
    __extends(HstNodeGroupWithContainerData, _super);
    function HstNodeGroupWithContainerData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstNodeGroupWithContainerData;
}(_types_hst_configuration__WEBPACK_IMPORTED_MODULE_4__["ChildName"]));

var EditContainerComponentReferencePropertiesComponent = /** @class */ (function () {
    function EditContainerComponentReferencePropertiesComponent(hstConfigurationService, dialog) {
        this.hstConfigurationService = hstConfigurationService;
        this.dialog = dialog;
        this.referenceComponentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditContainerComponentReferencePropertiesComponent.prototype.ngOnInit = function () {
    };
    EditContainerComponentReferencePropertiesComponent.prototype.ngOnChanges = function () {
        this.getContainers();
    };
    EditContainerComponentReferencePropertiesComponent.prototype.getContainers = function () {
        var _this = this;
        this.hstConfigurationService
            .getContainers(2, this.containerHstConfig)
            .subscribe(function (containers) {
            _this.containers = containers;
            if (containers) {
                _this.transformContainerComponentData();
                _this.initContainerComponentReference();
            }
        });
    };
    EditContainerComponentReferencePropertiesComponent.prototype.transformContainerComponentData = function () {
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var hstConfig = _a[_i];
            for (var _b = 0, _c = hstConfig.children; _b < _c.length; _b++) {
                var containerFolder = _c[_b];
                containerFolder = containerFolder;
                for (var _d = 0, _e = containerFolder.children; _d < _e.length; _d++) {
                    var container = _e[_d];
                    container = container;
                    var siblingNames = containerFolder.children.map(function (child) { return child.name; });
                    container.data = new _containers_edit_container_properties_edit_container_properties_component__WEBPACK_IMPORTED_MODULE_3__["HstContainerComponentData"](containerFolder.name, container.name, hstConfig.name, siblingNames);
                }
            }
        }
    };
    EditContainerComponentReferencePropertiesComponent.prototype.initContainerComponentReference = function () {
        if (this.referenceComponent) {
            var splitContainerComponentReference = this.referenceComponent.split('/');
            if (splitContainerComponentReference.length > 1) {
                var containerFolderName = splitContainerComponentReference[0];
                var containerName = splitContainerComponentReference[1];
                this.containerComponentReference = this.getContainerComponentData(containerFolderName, containerName);
                if (this.containerComponentReference != null) {
                    this.referenceComponentChanged.emit(this.containerComponentReference);
                }
            }
        }
    };
    EditContainerComponentReferencePropertiesComponent.prototype.getContainerComponentData = function (containerFolderName, containerName) {
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var hstConfig = _a[_i];
            for (var _b = 0, _c = hstConfig.children; _b < _c.length; _b++) {
                var containerFolder = _c[_b];
                // if containerFolder is not a string it must be a HstNodeGroup
                if (typeof containerFolder !== 'string') {
                    for (var _d = 0, _e = containerFolder.children; _d < _e.length; _d++) {
                        var container = _e[_d];
                        if (typeof container !== 'string') {
                            if (container.name === containerName && containerFolder.name === containerFolderName) {
                                return new _containers_edit_container_properties_edit_container_properties_component__WEBPACK_IMPORTED_MODULE_3__["HstContainerComponentData"](containerFolderName, containerName, hstConfig.name, _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_6__["ChildNamesGroupUtils"].getChildrenAsStringArray(containerFolder));
                            }
                        }
                    }
                }
            }
        }
        return null;
    };
    EditContainerComponentReferencePropertiesComponent.prototype.addContainer = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_containers_create_container_dialog_create_container_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateContainerDialogComponent"], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (referenceComponent) {
            if (referenceComponent != null) {
                _this.referenceComponent = referenceComponent;
                _this.getContainers();
            }
        });
    };
    EditContainerComponentReferencePropertiesComponent.prototype.setReferenceComponentProperty = function (event) {
        var containerComponentData = event.value;
        this.referenceComponent = containerComponentData.containerFolderName + '/' + containerComponentData.containerName;
        this.referenceComponentChanged.emit(containerComponentData);
    };
    // compare function for reference component dropdown/select
    EditContainerComponentReferencePropertiesComponent.prototype.compareFn = function (o1, o2) {
        return o1 && o2 &&
            o1.hstConfig === o2.hstConfig &&
            o1.containerFolderName === o2.containerFolderName &&
            o1.containerName === o2.containerName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditContainerComponentReferencePropertiesComponent.prototype, "referenceComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditContainerComponentReferencePropertiesComponent.prototype, "containerHstConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditContainerComponentReferencePropertiesComponent.prototype, "referenceComponentChanged", void 0);
    EditContainerComponentReferencePropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-container-component-reference-properties',
            template: __webpack_require__(/*! ./edit-container-component-reference-properties.component.html */ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.html"),
            styles: [__webpack_require__(/*! ./edit-container-component-reference-properties.component.css */ "./src/app/pages/edit-page-component/container-component-reference/edit-container-component-reference-properties/edit-container-component-reference-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EditContainerComponentReferencePropertiesComponent);
    return EditContainerComponentReferencePropertiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-page-component/edit-page-component.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/edit-page-component.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-page-component/edit-page-component.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/edit-page-component.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex>\n  <ng-container *ngIf=\"component != null\">\n  <mat-card-header>\n    <mat-card-title>\n      <h2 class=\"mat-h2\">Selected component: {{component.name}}</h2>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content *ngIf=\"component.primaryType !== 'hst:containercomponentreference'\">\n    <app-edit-hst-component-properties [properties]=\"component.properties\" [componentHstConfig]=\"componentHstConfig\"\n                                       fxLayout=\"column\">\n                                       <!--(componentReset)=\"onReset()\">-->\n    </app-edit-hst-component-properties>\n  </mat-card-content>\n  <mat-card-content *ngIf=\"component.primaryType === 'hst:containercomponentreference'\">\n    <app-edit-container-component-reference-properties [referenceComponent]=\"component.properties['hst:referencecomponent']\"\n                                                       [containerHstConfig]=\"componentHstConfig\"\n                                                       (referenceComponentChanged)=\"updateContainerComponentReference($event)\">\n    </app-edit-container-component-reference-properties>\n    <app-edit-container-properties [containerData]=\"containerData\" (containerRenamed)=\"onContainerRename($event)\">\n                                   <!--(containerSaved)=\"onComponentSave()\" (containerReset)=\"onReset()\">-->\n    </app-edit-container-properties>\n  </mat-card-content>\n  </ng-container>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/edit-page-component/edit-page-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/edit-page-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponentComponent", function() { return EditPageComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditPageComponentComponent = /** @class */ (function () {
    // originalProperties: HstPageProperties | HstContainerComponentReferenceProperties;
    function EditPageComponentComponent() {
    }
    EditPageComponentComponent.prototype.ngOnInit = function () { };
    EditPageComponentComponent.prototype.ngOnChanges = function () {
        //   if (this.component && this.component.properties) {
        //     // create a deep copy so that changes can be reversed
        //     this.originalProperties = JSON.parse(JSON.stringify(this.component.properties));
        //   }
    };
    // onComponentSave() {
    //   // create a deep copy so that changes can be reversed
    //   this.originalProperties = JSON.parse(JSON.stringify(this.component.properties));
    //   // this.removeEmptyProperties();
    //   this.componentSaved.emit();
    // }
    // onReset() {
    //   // create a deep copy so that changes can be reversed
    //   this.component.properties = JSON.parse(JSON.stringify(this.originalProperties));
    // }
    EditPageComponentComponent.prototype.updateContainerComponentReference = function (containerData) {
        this.component.properties['hst:referencecomponent'] = containerData.containerFolderName + '/' + containerData.containerName;
        this.containerData = containerData;
    };
    EditPageComponentComponent.prototype.onContainerRename = function (newName) {
        this.component.properties['hst:referencecomponent'] = newName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditPageComponentComponent.prototype, "component", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditPageComponentComponent.prototype, "componentHstConfig", void 0);
    EditPageComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-page-component',
            template: __webpack_require__(/*! ./edit-page-component.component.html */ "./src/app/pages/edit-page-component/edit-page-component.component.html"),
            styles: [__webpack_require__(/*! ./edit-page-component.component.css */ "./src/app/pages/edit-page-component/edit-page-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditPageComponentComponent);
    return EditPageComponentComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.css":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".component-class-name-option {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field appearance=\"fill\" fxFlex>\n    <mat-label>Template</mat-label>\n    <mat-select placeholder=\"No template defined\" [(value)]=\"properties['hst:template']\" (selectionChange)=\"selectTemplate($event)\">\n      <mat-option value=\"\">No template</mat-option>\n      <mat-optgroup *ngFor=\"let hstConfig of templates\" [label]=\"hstConfig.name\">\n        <mat-option *ngFor=\"let template of hstConfig.children\" [value]=\"template\">{{template}}</mat-option>\n      </mat-optgroup>\n    </mat-select>\n    <mat-hint *ngIf=\"templatePath != null\">{{templatePath}}</mat-hint>\n  </mat-form-field>\n  <button mat-icon-button (click)=\"editTemplate()\" *ngIf=\"properties['hst:template'] != null\"\n          class=\"icon-accent-on-hover\">\n    <mat-icon matTooltip=\"Edit template\" [matTooltipPosition]=\"'left'\">edit</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"addTemplate()\" class=\"icon-accent-on-hover\">\n    <mat-icon matTooltip=\"Add template\" [matTooltipPosition]=\"'left'\">add</mat-icon>\n  </button>\n</div>\n<mat-form-field appearance=\"fill\" fxFlex>\n  <mat-label>Component class name</mat-label>\n  <input type=\"text\" placeholder=\"No component class name defined\" aria-label=\"Component class name\" matInput\n         [formControl]=\"componentClassNameFormControl\" [matAutocomplete]=\"auto\">\n  <mat-icon matSuffix matTooltip=\"Java class controller containing the business logic of component\">info</mat-icon>\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n    <mat-option [value]=\"\" class=\"component-class-name-option\">No component class name</mat-option>\n    <mat-option *ngFor=\"let className of filteredComponentClassNames | async\" [value]=\"className\" class=\"component-class-name-option\">\n      {{className}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n<mat-form-field appearance=\"fill\" fxFlex>\n  <mat-label>Inherit from component (hst:referencecomponent)</mat-label>\n  <mat-select placeholder=\"No reference component defined\" [(ngModel)]=\"properties['hst:referencecomponent']\"\n              class=\"select-with-hint\">\n    <mat-option value=\"\">No inherited component</mat-option>\n    <mat-optgroup *ngFor=\"let hstConfig of abstractPages\" [label]=\"hstConfig.name + '/hst:abstractpages'\">\n      <mat-option *ngFor=\"let page of hstConfig.children\" [value]=\"getPagePath('hst:abstractpages', page)\">\n        {{getPagePath('hst:abstractpages', page)}}\n      </mat-option>\n    </mat-optgroup>\n    <mat-optgroup *ngFor=\"let hstConfig of pages\" [label]=\"hstConfig.name + '/hst:pages'\">\n      <mat-option *ngFor=\"let page of hstConfig.children\" [value]=\"getPagePath('hst:pages', page)\">\n        {{getPagePath('hst:pages', page)}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n  <mat-icon matSuffix matTooltip=\"Inherit components and child components of referenced component\">info</mat-icon>\n</mat-form-field>\n<app-edit-parameters [parameterNames]=\"properties['hst:parameternames']\"\n                     [parameterValues]=\"properties['hst:parametervalues']\"></app-edit-parameters>\n<app-edit-properties [properties]=\"properties\" [specialProperties]=\"specialProperties\"\n                     [availableProperties]=\"availableProperties\"></app-edit-properties>\n"

/***/ }),

/***/ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: EditHstComponentPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHstComponentPropertiesComponent", function() { return EditHstComponentPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _templates_create_template_dialog_create_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../templates/create-template-dialog/create-template-dialog.component */ "./src/app/templates/create-template-dialog/create-template-dialog.component.ts");
/* harmony import */ var _templates_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../templates/edit-template-dialog/edit-template-dialog.component */ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.ts");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../properties/edit-properties/edit-properties.component */ "./src/app/properties/edit-properties/edit-properties.component.ts");
/* harmony import */ var _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/child-names-group-utils */ "./src/app/shared/child-names-group-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditHstComponentPropertiesComponent = /** @class */ (function () {
    function EditHstComponentPropertiesComponent(hstConfigurationService, dialog) {
        this.hstConfigurationService = hstConfigurationService;
        this.dialog = dialog;
        this.componentClassNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.availableProperties = [
            { name: 'hst:parametersinfoclassname', type: _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__["HstPropertyType"].String },
            { name: 'hst:parameternames', type: _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__["HstPropertyType"].StringArray },
            { name: 'hst:parametervalues', type: _properties_edit_properties_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__["HstPropertyType"].StringArray }
        ];
        this.specialProperties = [
            'hst:componentclassname',
            'hst:template',
            'hst:referencecomponent'
        ];
    }
    EditHstComponentPropertiesComponent.prototype.ngOnInit = function () {
    };
    EditHstComponentPropertiesComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.properties != null) {
            this.getTemplatePath();
            this.hstConfigurationService
                .getPages(this.componentHstConfig, true, 'hst:abstractpages')
                .subscribe(function (pages) {
                if (pages) {
                    _this.abstractPages = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_9__["ChildNamesGroupUtils"].getChildNamesGroup(pages);
                }
            });
            this.hstConfigurationService
                .getPages(this.componentHstConfig)
                .subscribe(function (pages) {
                if (pages) {
                    _this.pages = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_9__["ChildNamesGroupUtils"].getChildNamesGroup(pages);
                }
            });
            this.getTemplates();
            this.getComponentClassNames();
        }
    };
    EditHstComponentPropertiesComponent.prototype.selectTemplate = function (change) {
        var selectedOption = change.source.selected;
        if (selectedOption.group) {
            this.selectedTemplateHstConfig = selectedOption.group.label;
            this.getTemplatePath(this.selectedTemplateHstConfig);
        }
        else {
            this.templatePath = undefined;
        }
    };
    EditHstComponentPropertiesComponent.prototype.getPagePath = function (pageGroup, pageName) {
        return pageGroup + '/' + pageName;
    };
    EditHstComponentPropertiesComponent.prototype.getTemplatePath = function (hstConfig) {
        var _this = this;
        if (!hstConfig) {
            hstConfig = this.componentHstConfig;
        }
        if (this.properties['hst:template']) {
            this.hstConfigurationService
                .getTemplate(this.properties['hst:template'], hstConfig)
                .subscribe(function (template) {
                _this.selectedTemplate = template;
                _this.templatePath = template.properties['hst:renderpath'];
            });
        }
        else {
            this.templatePath = '';
        }
    };
    EditHstComponentPropertiesComponent.prototype.getTemplateHstConfig = function () {
        for (var _i = 0, _a = this.templates; _i < _a.length; _i++) {
            var templateGroup = _a[_i];
            for (var _b = 0, _c = templateGroup.children; _b < _c.length; _b++) {
                var templateName = _c[_b];
                if (this.properties['hst:template'] === templateName) {
                    this.selectedTemplateHstConfig = templateGroup.name;
                }
            }
        }
    };
    EditHstComponentPropertiesComponent.prototype.addTemplate = function () {
        var _this = this;
        var existingTemplateNames = this.getTemplateNames(this.componentHstConfig);
        var newTemplate = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_7__["HstTemplate"]();
        var dialogRef = this.dialog.open(_templates_create_template_dialog_create_template_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateTemplateDialogComponent"], {
            width: '500px',
            data: {
                template: newTemplate,
                existingNames: existingTemplateNames
            }
        });
        dialogRef.afterClosed().subscribe(function (template) {
            if (template != null) {
                _this.properties['hst:template'] = template.name;
                _this.getTemplates();
                _this.selectedTemplate = template;
                _this.templatePath = template.properties['hst:renderpath'];
            }
        });
    };
    EditHstComponentPropertiesComponent.prototype.editTemplate = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_templates_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditTemplateDialogComponent"], {
            width: '500px',
            data: {
                template: this.selectedTemplate,
                hstConfig: this.selectedTemplateHstConfig
            }
        });
        dialogRef.afterClosed().subscribe(function (template) {
            if (template != null) {
                _this.templatePath = template.properties['hst:renderpath'];
            }
        });
    };
    EditHstComponentPropertiesComponent.prototype.getTemplates = function () {
        var _this = this;
        this.hstConfigurationService
            .getTemplates(this.componentHstConfig)
            .subscribe(function (templates) {
            if (templates) {
                _this.templates = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_9__["ChildNamesGroupUtils"].getChildNamesGroup(templates);
                _this.getTemplateHstConfig();
            }
            else {
                _this.templates = [];
            }
        });
    };
    EditHstComponentPropertiesComponent.prototype.getTemplateNames = function (hstConfigName) {
        var templateGroup = this.getTemplateGroup(hstConfigName);
        if (templateGroup != null) {
            return templateGroup.children;
        }
        return [];
    };
    EditHstComponentPropertiesComponent.prototype.getTemplateGroup = function (hstConfigName) {
        return this.templates.find(function (childNameGroup) {
            return childNameGroup.name === hstConfigName;
        });
    };
    EditHstComponentPropertiesComponent.prototype.getComponentClassNames = function () {
        var _this = this;
        if (this.properties['hst:componentclassname'] !== undefined) {
            this.componentClassNameFormControl.setValue(this.properties['hst:componentclassname']);
        }
        else {
            this.componentClassNameFormControl.setValue('');
        }
        this.hstConfigurationService
            .getComponentClassNames()
            .subscribe(function (componentClassNames) {
            _this.componentClassNames = componentClassNames;
            _this.filteredComponentClassNames = _this.componentClassNameFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                _this.properties['hst:componentclassname'] = value;
                return _this._filter(value);
            }));
        });
    };
    EditHstComponentPropertiesComponent.prototype._filter = function (value) {
        if (value) {
            var filterValue_1 = value.toLowerCase();
            return this.componentClassNames.filter(function (className) { return className.toLowerCase().includes(filterValue_1); });
        }
        return this.componentClassNames;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_hst_configuration__WEBPACK_IMPORTED_MODULE_7__["HstPageProperties"])
    ], EditHstComponentPropertiesComponent.prototype, "properties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditHstComponentPropertiesComponent.prototype, "componentHstConfig", void 0);
    EditHstComponentPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-hst-component-properties',
            template: __webpack_require__(/*! ./edit-hst-component-properties.component.html */ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.html"),
            styles: [__webpack_require__(/*! ./edit-hst-component-properties.component.css */ "./src/app/pages/edit-page-component/hst-component/edit-hst-component-properties/edit-hst-component-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_6__["HstConfigurationService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EditHstComponentPropertiesComponent);
    return EditHstComponentPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex *ngIf=\"siteMapItems != null\">\n  <mat-card-header>\n    <mat-card-title>\n      <h2 class=\"mat-h2\" fxFlex>Assigned URL</h2>\n      <!--<button mat-icon-button (click)=\"switchToSiteMapEditor()\" class=\"icon-accent-on-hover\">-->\n        <!--<mat-icon matTooltip=\"Switch to site map editor - Not implemented yet :(\">edit</mat-icon>-->\n      <!--</button>-->\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content fxLayout=\"column\">\n    <div>\n      <mat-form-field appearance=\"fill\" fxFlex>\n        <mat-label *ngIf=\"siteMapItems.length > 0\">Assigned site map-item</mat-label>\n        <mat-label *ngIf=\"siteMapItems.length === 0\">No available site map-item</mat-label>\n        <mat-select [(value)]=\"selectedSiteMapItem\" [compareWith]=\"compareFn\"\n                    (selectionChange)=\"selectSiteMapItem($event)\" [disabled]=\"siteMapItems.length === 0\">\n          <mat-option value=\"\">No site map-item</mat-option>\n          <mat-option *ngFor=\"let siteMapItem of flattenedSiteMapItems\" [value]=\"siteMapItem\">{{siteMapItem.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-icon-button (click)=\"addSiteMapItem()\" class=\"icon-accent-on-hover\">\n        <mat-icon matTooltip=\"Add site map-item\">add</mat-icon>\n      </button>\n    </div>\n    <!--<div fxLayout=\"column\" class=\"outline\">-->\n      <!--<p class=\"outline-header\">-->\n        <!--Assigned site map-item properties: {{ selectedSiteMapItem?.name }}-->\n      <!--</p>-->\n      <!--<form #siteMapItemForm=\"ngForm\">-->\n        <!--<mat-form-field appearance=\"fill\" fxFlex>-->\n          <!--<mat-label>Relative content-path</mat-label>-->\n          <!--<input matInput #relativeContentPathField=\"ngModel\" name=\"relativeContentPath\"-->\n                 <!--placeholder=\"Relative content-path\"-->\n                 <!--[(ngModel)]=\"relativeContentPath\">-->\n          <!--<mat-icon matSuffix matTooltip=\"Relative path to folder or content-item. Typically not used by landing pages.\">-->\n            <!--info-->\n          <!--</mat-icon>-->\n        <!--</mat-form-field>-->\n        <!--<button mat-button (click)=\"onReset()\" class=\"small-button\" [disabled]=\"relativeContentPathField.pristine\"-->\n                <!--matTooltip=\"Reset site map item\">-->\n          <!--<mat-icon>undo</mat-icon>-->\n        <!--</button>-->\n        <!--<button mat-button cdkFocusInitial (click)=\"onSave()\" class=\"small-button\" [disabled]=\"relativeContentPathField.pristine\"-->\n                <!--matTooltip=\"Save site map-item\">-->\n          <!--<mat-icon>save</mat-icon>-->\n        <!--</button>-->\n      <!--</form>-->\n    <!--</div>-->\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AssignSitemapItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSitemapItemComponent", function() { return AssignSitemapItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _types_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../types/pages */ "./src/app/types/pages.ts");
/* harmony import */ var _sitemap_create_sitemap_item_dialog_create_sitemap_item_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component */ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.ts");
/* harmony import */ var _services_save_messaging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/save-messaging.service */ "./src/app/services/save-messaging.service.ts");
/* harmony import */ var _dialogs_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dialogs/shared/confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/shared/confirmation-dialog/confirmation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssignSitemapItemComponent = /** @class */ (function () {
    function AssignSitemapItemComponent(hstConfigurationService, saveMessagingService, dialog) {
        this.hstConfigurationService = hstConfigurationService;
        this.saveMessagingService = saveMessagingService;
        this.dialog = dialog;
    }
    AssignSitemapItemComponent.prototype.ngOnInit = function () {
        this.getSiteMapItems();
        this.subscribeOnSavePage();
    };
    AssignSitemapItemComponent.prototype.ngOnChanges = function () {
        if (this.page) {
            this.getSiteMapItemByPage(this.page);
        }
    };
    AssignSitemapItemComponent.prototype.ngOnDestroy = function () {
        this.onPageSave.unsubscribe();
    };
    AssignSitemapItemComponent.prototype.getSiteMapItems = function () {
        var _this = this;
        var hstConfig = this.hstConfigurationService.getSelectedHstConfig();
        this.hstConfigurationService
            .getSiteMapItems(hstConfig, false, 999)
            .subscribe(function (siteMapItems) {
            if (siteMapItems) {
                _this.siteMapItems = siteMapItems;
                _this.flattenedSiteMapItems = _this.flattenHstNodeGroupChildren(siteMapItems);
            }
            else {
                _this.siteMapItems = [];
                _this.flattenedSiteMapItems = [];
            }
        });
    };
    AssignSitemapItemComponent.prototype.flattenHstNodeGroupChildren = function (childNamesGroup) {
        // skip the first object, because that contains the HST-config
        if (childNamesGroup && childNamesGroup instanceof Array && childNamesGroup.length > 0) {
            var children = childNamesGroup[0].children;
            return this.addChildrenToFlattenedList(children, '', []).reverse();
        }
    };
    AssignSitemapItemComponent.prototype.addChildrenToFlattenedList = function (children, currentPath, flattenedList) {
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            var childPath = currentPath !== '' ? currentPath + '/' + child.name : child.name;
            var childName = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_3__["ChildName"](childPath, child.uuid);
            flattenedList.push(childName);
            if (child.children && child.children.length > 0) {
                var subChildren = child.children;
                this.addChildrenToFlattenedList(subChildren, childPath, flattenedList);
            }
        }
        return flattenedList;
    };
    AssignSitemapItemComponent.prototype.subscribeOnSavePage = function () {
        var _this = this;
        this.onPageSave = this.saveMessagingService.notifyObservable$.subscribe(function (response) {
            if (response && response === _services_save_messaging_service__WEBPACK_IMPORTED_MODULE_6__["SaveScope"].Page) {
                _this.saveSiteMapItem();
            }
        });
    };
    AssignSitemapItemComponent.prototype.getSiteMapItemByPage = function (page) {
        var _this = this;
        this.hstConfigurationService
            .querySiteMapItemNamesByPage(page.name, page.hstConfig)
            .subscribe(function (siteMapItemNames) {
            if (siteMapItemNames && siteMapItemNames.length > 0) {
                _this.hstConfigurationService.getSiteMapItem(siteMapItemNames[0]).subscribe(function (siteMapItem) {
                    if (siteMapItem) {
                        _this.siteMapItem = siteMapItem;
                        // using undefined as name which is checked onSave to see if sitemap is changed
                        _this.setSiteMapItem(undefined, siteMapItem);
                    }
                    else {
                        _this.resetSiteMapItem();
                    }
                });
            }
            else {
                _this.resetSiteMapItem();
            }
        });
    };
    AssignSitemapItemComponent.prototype.resetSiteMapItem = function () {
        this.siteMapItem = undefined;
        this.selectedSiteMapItem = undefined;
        this.prevSelectedSiteMapItem = undefined;
    };
    AssignSitemapItemComponent.prototype.compareFn = function (o1, o2) {
        return o1 && o2 && o1.uuid === o2.uuid;
    };
    AssignSitemapItemComponent.prototype.selectSiteMapItem = function (change) {
        var _this = this;
        var selectedSiteMapItem = change.value;
        this.hstConfigurationService
            .getSiteMapItem(selectedSiteMapItem.name, this.page.hstConfig)
            .subscribe(function (siteMapItemData) {
            if (siteMapItemData && siteMapItemData.properties['hst:componentconfigurationid']) {
                _this.showSiteMapChangeConfirmationDialog(selectedSiteMapItem, siteMapItemData);
            }
            else {
                _this.setSiteMapItem(selectedSiteMapItem.name, siteMapItemData);
            }
        });
    };
    AssignSitemapItemComponent.prototype.showSiteMapChangeConfirmationDialog = function (selectedSiteMapItem, siteMapItemData) {
        var _this = this;
        var dialogTextTop = "Site map-item '" + selectedSiteMapItem.name + "' already assigned to " +
            ("'" + siteMapItemData.properties['hst:componentconfigurationid'] + "'.");
        var dialogTextBottom = 'Do you want to assign it to the current page? This will make the old page no longer available at the ' +
            'site map\'s URL-path.';
        var dialogRef = this.dialog.open(_dialogs_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            width: '300px',
            data: { top: dialogTextTop, bottom: dialogTextBottom }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.setSiteMapItem(selectedSiteMapItem.name, siteMapItemData);
            }
            else {
                _this.selectedSiteMapItem = _this.prevSelectedSiteMapItem;
            }
        });
    };
    AssignSitemapItemComponent.prototype.setSiteMapItem = function (siteMapItemPath, siteMapItem) {
        this.siteMapItem = siteMapItem;
        // if (this.siteMapItem && this.siteMapItem.properties && this.siteMapItem.properties['hst:relativecontentpath']) {
        //   this.relativeContentPath = this.siteMapItem.properties['hst:relativecontentpath'];
        // } else {
        //   this.relativeContentPath = '';
        // }
        // if (this.siteMapItem && this.siteMapItem.properties && this.siteMapItem.properties['hst:componentconfigurationid']) {
        //   this.componentConfigurationId = this.siteMapItem.properties['hst:componentconfigurationid'];
        // } else {
        //   this.componentConfigurationId = '';
        // }
        this.selectedSiteMapItem = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_3__["ChildName"](siteMapItemPath, siteMapItem.uuid);
        this.prevSelectedSiteMapItem = this.selectedSiteMapItem;
    };
    AssignSitemapItemComponent.prototype.addSiteMapItem = function () {
        var _this = this;
        var existingNodes = this.convertFlattenedListToStringArray();
        var componentConfigurationId = this.page.type + '/' + this.page.name;
        var dialogRef = this.dialog.open(_sitemap_create_sitemap_item_dialog_create_sitemap_item_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateSitemapItemDialogComponent"], {
            width: '500px',
            data: { existingNodes: existingNodes, componentConfigurationId: componentConfigurationId }
        });
        dialogRef.afterClosed().subscribe(function (siteMapItemPath) {
            if (siteMapItemPath) {
                _this.getSiteMapItems();
                _this.getSiteMapItemByPath(siteMapItemPath);
            }
        });
    };
    AssignSitemapItemComponent.prototype.convertFlattenedListToStringArray = function () {
        return this.flattenedSiteMapItems.map(function (siteMapItem) { return siteMapItem.name; });
    };
    AssignSitemapItemComponent.prototype.getSiteMapItemByPath = function (siteMapItemPath) {
        var _this = this;
        this.hstConfigurationService
            .getSiteMapItem(siteMapItemPath)
            .subscribe(function (siteMapItem) {
            _this.setSiteMapItem(siteMapItemPath, siteMapItem);
        });
    };
    // onReset(): void {
    // if (this.siteMapItem.properties['hst:relativecontentpath']) {
    //   this.relativeContentPath = this.siteMapItem.properties['hst:relativecontentpath'];
    // } else {
    //   this.relativeContentPath = '';
    // }
    // if (this.siteMapItem.properties['hst:componentconfigurationid']) {
    //   this.componentConfigurationId = this.siteMapItem.properties['hst:componentconfigurationid'];
    // } else {
    //   this.componentConfigurationId = '';
    // }
    // this.siteMapItemForm.form.markAsPristine();
    // }
    // onSave(): void {
    //   this.saveSiteMapItem();
    // }
    AssignSitemapItemComponent.prototype.saveSiteMapItem = function () {
        // this.siteMapItem.properties['hst:relativecontentpath'] = this.relativeContentPath;
        if (this.selectedSiteMapItem !== undefined && this.selectedSiteMapItem.name !== undefined && this.siteMapItem) {
            this.siteMapItem.properties['hst:componentconfigurationid'] = this.page.type + '/' + this.page.name;
            this.hstConfigurationService
                .updateSiteMapItem(this.siteMapItem, this.selectedSiteMapItem.name)
                .subscribe();
            // .subscribe(_response => this.siteMapItemForm.form.markAsPristine());
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_pages__WEBPACK_IMPORTED_MODULE_4__["ActivePage"])
    ], AssignSitemapItemComponent.prototype, "page", void 0);
    AssignSitemapItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-sitemap-item',
            template: __webpack_require__(/*! ./assign-sitemap-item.component.html */ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.html"),
            styles: [__webpack_require__(/*! ./assign-sitemap-item.component.css */ "./src/app/pages/edit-page/assign-sitemap-item/assign-sitemap-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], _services_save_messaging_service__WEBPACK_IMPORTED_MODULE_6__["SaveMessagingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AssignSitemapItemComponent);
    return AssignSitemapItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-page/page-tree/page-tree.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-page/page-tree/page-tree.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-tree-wrapper {\n  min-height: calc(100vh - 340px);\n}\n\n.page-tree-wrapper.fill-height {\n  flex: 1 1;\n  box-sizing: border-box;\n}\n\napp-assign-sitemap-item {\n  min-height: 160px;\n}\n\n.tree-actions .mat-icon {\n  margin-right: 10px;\n}\n\n.add-component {\n  margin-left: 5px;\n}\n\n.tree-node-select {\n  padding-left: 5px;\n  padding-right: 10px;\n  min-width: auto;\n}\n\n.tree-node-select.edit-mode {\n  padding-right: 0;\n}\n\n.tree-node-select span {\n  font-weight: 400;\n}\n\n.tree-node-icon {\n  padding-right: 10px;\n}\n\n.node-content-wrapper-selected .node-name {\n  color: #3f51b5;\n  font-weight: 500;\n}\n\n.node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n  box-shadow: none;\n  background-color: transparent;\n}\n\n.node-disabled-icon {\n  color: black;\n}\n"

/***/ }),

/***/ "./src/app/pages/edit-page/page-tree/page-tree.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/edit-page/page-tree/page-tree.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"50\" fxLayout=\"column\">\n  <mat-card class=\"page-tree-wrapper\" [ngClass]=\"{'fill-height': pageData === undefined || page?.type !== 'hst:pages'}\">\n    <mat-card-header class=\"page-tree-header\">\n      <mat-card-title>\n        <ng-container *ngIf=\"pageData !== undefined\">\n          <h2 class=\"mat-h2\">Selected page: {{pageData.name}}</h2>\n          <div class=\"tree-actions\" fxLayoutAlign=\"end start\" fxFlex>\n            <button mat-button (click)=\"resetPage()\"><mat-icon>undo</mat-icon>Reset</button>\n            <button mat-button cdkFocusInitial (click)=\"savePage()\"><mat-icon>save</mat-icon>Save</button>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"pageData === undefined\">\n          <h2 class=\"mat-h2\">Please select a page on the left</h2>\n        </ng-container>\n      </mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content *ngIf=\"pageData !== undefined\">\n      <tree-root [nodes]=\"[pageData]\" [options]=\"treeOptions\" #tree>\n        <ng-template #treeNodeWrapperTemplate let-node let-index=\"index\">\n          <div class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\" *ngIf=\"showNode(node)\">\n            <button mat-icon-button *ngIf=\"canExpand(node)\" [attr.aria-label]=\"'toggle ' + node.name\"\n                    (click)=\"node.mouseAction('expanderClick', $event)\">\n              <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{node.isExpanded ? 'expand_more' : 'chevron_right'}}\n              </mat-icon>\n            </button>\n            <button mat-icon-button *ngIf=\"!canExpand(node)\" disabled>\n              <mat-icon class=\"node-disabled-icon\" svgIcon=\"minus\"></mat-icon>\n            </button>\n            <div class=\"node-content-wrapper button-on-hover\"\n                 [class.node-content-wrapper-selected]=\"node.data === selectedItem\"\n                 (treeDrop)=\"node.onDrop($event)\" [treeAllowDrop]=\"node.allowDrop\" [treeDrag]=\"node\"\n                 [treeDragEnabled]=\"node.allowDrag()\">\n              <button mat-button class=\"tree-node-select always-visible\" (click)=\"selectNode(node.data)\"\n                      matTooltip=\"Select node\" [disabled]=\"node.isActive\" [class.edit-mode]=\"node.isActive\">\n                <mat-icon class=\"tree-node-icon\">{{ showIcon(node) }}</mat-icon>\n                <span *ngIf=\"!node.isActive\" class=\"node-name\">{{node.data.name}}</span>\n              </button>\n              <app-rename-node *ngIf=\"node.isActive\" [nodeName]=\"node.data.name\"\n                               [existingNodes]=\"node.parent?.data.children\" (updatedName)=\"onRename($event)\">\n              </app-rename-node>\n              <button mat-icon-button matTooltip=\"Open menu\" [matMenuTriggerFor]=\"nodeMenu\" (click)=\"openMenu(node)\"\n                      class=\"add-component\" *ngIf=\"!node.isActive\">\n                <mat-icon>more_horiz</mat-icon>\n              </button>\n              <button mat-icon-button matTooltip=\"Order node\" *ngIf=\"!node.isActive && node.allowDrag()\">\n                <mat-icon matTooltip=\"Order node\">drag_indicator</mat-icon>\n              </button>\n            </div>\n          </div>\n          <div *ngIf=\"!canExpand(node) && node.isRoot\" class=\"empty-page-menu\">\n            <p>This page is still empty. Add a component using the buttons below.</p>\n              <button mat-button (click)=\"addComponent()\">\n                <mat-icon>web_asset</mat-icon>Add component\n              </button>\n              <button mat-button (click)=\"addContainerReference()\">\n                <mat-icon>inbox</mat-icon>Add container component reference\n              </button>\n          </div>\n        </ng-template>\n      </tree-root>\n    </mat-card-content>\n  </mat-card>\n  <app-assign-sitemap-item fxFlex *ngIf=\"page?.type === 'hst:pages'\" [page]=\"page\"></app-assign-sitemap-item>\n</div>\n<app-edit-page-component *ngIf=\"pageData !== undefined\" [component]=\"selectedItem\" [componentHstConfig]=\"page.hstConfig\"\n                         (componentSaved)=\"savePage()\" fxFlex=\"50\">\n</app-edit-page-component>\n\n<mat-menu #nodeMenu=\"matMenu\">\n  <button mat-menu-item (click)=\"renameNode()\">\n    <mat-icon>edit</mat-icon>\n    <span>Rename</span>\n  </button>\n  <button mat-menu-item [matMenuTriggerFor]=\"addComponentMenu\"\n          *ngIf=\"activeItem?.primaryType !== 'hst:containercomponentreference'\">\n    <mat-icon>add</mat-icon>\n    <span>Add ...</span>\n  </button>\n  <button mat-menu-item (click)=\"removeNode()\">\n    <mat-icon>remove</mat-icon>\n    <span>Remove</span>\n  </button>\n</mat-menu>\n\n<mat-menu add-menu-items #addComponentMenu=\"matMenu\">\n  <button mat-menu-item (click)=\"addComponent()\">\n    <mat-icon>web_asset</mat-icon>\n    <span>Component</span>\n  </button>\n  <button mat-menu-item (click)=\"addContainerReference()\">\n    <mat-icon>inbox</mat-icon>\n    <span>Container reference</span>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/pages/edit-page/page-tree/page-tree.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/edit-page/page-tree/page-tree.component.ts ***!
  \******************************************************************/
/*! exports provided: PageTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTreeComponent", function() { return PageTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _tree_abstract_tree_abstract_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tree/abstract-tree/abstract-tree.component */ "./src/app/tree/abstract-tree/abstract-tree.component.ts");
/* harmony import */ var _types_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../types/pages */ "./src/app/types/pages.ts");
/* harmony import */ var _services_save_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/save-messaging.service */ "./src/app/services/save-messaging.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageTreeComponent = /** @class */ (function (_super) {
    __extends(PageTreeComponent, _super);
    function PageTreeComponent(hstConfigurationService, saveMessagingService) {
        var _this = _super.call(this) || this;
        _this.hstConfigurationService = hstConfigurationService;
        _this.saveMessagingService = saveMessagingService;
        _this.mandatoryProperties = {
            'hst:containercomponentreference': ['hst:referencecomponent']
        };
        return _this;
    }
    PageTreeComponent.prototype.ngOnChanges = function () {
        if (this.page !== undefined) {
            this.getPage();
        }
        else {
            this.pageData = undefined;
        }
    };
    PageTreeComponent.prototype.getPage = function () {
        var _this = this;
        this.hstConfigurationService
            .getPage(this.page.name, this.page.type, this.page.hstConfig)
            .subscribe(function (pageData) {
            _this.pageData = pageData;
            _super.prototype.expandTree.call(_this);
        });
    };
    PageTreeComponent.prototype.showIcon = function (node) {
        if (node.data.primaryType === 'hst:component') {
            return 'web_asset';
        }
        return 'inbox';
    };
    PageTreeComponent.prototype.showNode = function (node) {
        return !this.isEmptyTree();
    };
    PageTreeComponent.prototype.addComponent = function () {
        var newComponent = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_1__["HstPage"]();
        this.addNode(newComponent);
    };
    PageTreeComponent.prototype.addContainerReference = function () {
        var newContainerReference = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_1__["HstContainerComponentReference"]();
        this.addNode(newContainerReference);
    };
    PageTreeComponent.prototype.savePage = function () {
        var _this = this;
        this.removeEmptyProperties(this.pageData);
        this.hstConfigurationService
            .updatePage(this.page.name, this.pageData, this.page.hstConfig)
            .subscribe(function (_response) {
            _this.saveMessagingService.notifyOther(_services_save_messaging_service__WEBPACK_IMPORTED_MODULE_5__["SaveScope"].Page);
        });
    };
    PageTreeComponent.prototype.resetPage = function () {
        this.getPage();
    };
    PageTreeComponent.prototype.removeEmptyProperties = function (component) {
        for (var propertyName in component.properties) {
            if (component.properties.hasOwnProperty(propertyName) && component.properties[propertyName] === ''
                && !this.isMandatoryProperty(propertyName, component.primaryType)) {
                delete component.properties[propertyName];
            }
        }
        if (component.children) {
            for (var _i = 0, _a = component.children; _i < _a.length; _i++) {
                var childComponent = _a[_i];
                this.removeEmptyProperties(childComponent);
            }
        }
    };
    PageTreeComponent.prototype.isMandatoryProperty = function (propertyName, primaryType) {
        if (this.mandatoryProperties[primaryType] && this.mandatoryProperties[primaryType].length > 0) {
            return this.mandatoryProperties[primaryType].indexOf(propertyName) !== -1;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_pages__WEBPACK_IMPORTED_MODULE_4__["ActivePage"])
    ], PageTreeComponent.prototype, "page", void 0);
    PageTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-tree',
            template: __webpack_require__(/*! ./page-tree.component.html */ "./src/app/pages/edit-page/page-tree/page-tree.component.html"),
            styles: [__webpack_require__(/*! ./page-tree.component.css */ "./src/app/pages/edit-page/page-tree/page-tree.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], _services_save_messaging_service__WEBPACK_IMPORTED_MODULE_5__["SaveMessagingService"]])
    ], PageTreeComponent);
    return PageTreeComponent;
}(_tree_abstract_tree_abstract_tree_component__WEBPACK_IMPORTED_MODULE_3__["AbstractTreeComponent"]));



/***/ }),

/***/ "./src/app/pages/manage-pages.component.css":
/*!**************************************************!*\
  !*** ./src/app/pages/manage-pages.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pages-list {\n  min-height: calc(100vh - 64px - 49px);\n}\n"

/***/ }),

/***/ "./src/app/pages/manage-pages.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/manage-pages.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pages-list class=\"pages-list\" [hstConfig]=\"hstConfig\" fxFlex></app-pages-list>\n"

/***/ }),

/***/ "./src/app/pages/manage-pages.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/manage-pages.component.ts ***!
  \*************************************************/
/*! exports provided: ManagePagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePagesComponent", function() { return ManagePagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagePagesComponent = /** @class */ (function () {
    function ManagePagesComponent(hstConfigurationService) {
        this.hstConfigurationService = hstConfigurationService;
    }
    ManagePagesComponent.prototype.ngOnInit = function () {
        this.hstConfig = this.hstConfigurationService.getSelectedHstConfig();
        this.subscribeHstConfigChanged();
    };
    ManagePagesComponent.prototype.ngOnDestroy = function () {
        this.onHstConfigChange.unsubscribe();
    };
    ManagePagesComponent.prototype.subscribeHstConfigChanged = function () {
        var _this = this;
        this.onHstConfigChange = this.hstConfigurationService.hstConfigObservable$.subscribe(function (hstConfig) {
            if (hstConfig) {
                _this.hstConfig = hstConfig;
            }
        });
    };
    ManagePagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-pages',
            template: __webpack_require__(/*! ./manage-pages.component.html */ "./src/app/pages/manage-pages.component.html"),
            styles: [__webpack_require__(/*! ./manage-pages.component.css */ "./src/app/pages/manage-pages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_1__["HstConfigurationService"]])
    ], ManagePagesComponent);
    return ManagePagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-list/pages-group/pages-group.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/pages-list/pages-group/pages-group.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4.active {\n  font-weight: bold !important;\n  color: #3f51b5;\n}\n"

/***/ }),

/***/ "./src/app/pages/pages-list/pages-group/pages-group.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pages-list/pages-group/pages-group.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>{{groupName}}</mat-panel-title>\n  </mat-expansion-panel-header>\n  <mat-nav-list *ngIf=\"pages != null\" dense>\n    <ng-container *ngFor=\"let pageName of pages\" >\n      <mat-list-item *ngIf=\"renamingExistingPage !== pageName\" class=\"button-on-hover\" (click)=\"selectPage(pageName)\">\n        <mat-icon mat-list-icon>web</mat-icon>\n        <div class=\"mat-list-text\">\n          <h4 mat-line [class.active]=\"activePage === pageName\">\n            {{pageName}}\n          </h4>\n        </div>\n        <button mat-icon-button class=\"icon-accent-on-hover\" (click)=\"renamePage(pageName)\">\n          <mat-icon matTooltip=\"Rename page\">edit</mat-icon>\n        </button>\n        <button mat-icon-button class=\"icon-accent-on-hover\" (click)=\"deletePage(pageName)\">\n          <mat-icon matTooltip=\"Delete page\">delete</mat-icon>\n        </button>\n      </mat-list-item>\n      <mat-list-item *ngIf=\"renamingExistingPage === pageName\">\n        <app-rename-node [nodeName]=\"renamingExistingPage\" [existingNodes]=\"pages\"\n                         (updatedName)=\"onRenameExisting($event)\" class=\"limited-width\"></app-rename-node>\n      </mat-list-item>\n    </ng-container>\n    <mat-list-item matTooltip=\"Create page definition\" (click)=\"newPage()\">\n      <mat-icon mat-list-icon>add</mat-icon>\n      <h4 mat-line>Create page definition</h4>\n    </mat-list-item>\n    <app-rename-node *ngIf=\"renamingNewPage\" [nodeName]=\"\" [existingNodes]=\"pages\"\n                     (updatedName)=\"onRenameNew($event)\" class=\"limited-width\"></app-rename-node>\n  </mat-nav-list>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/pages/pages-list/pages-group/pages-group.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pages-list/pages-group/pages-group.component.ts ***!
  \***********************************************************************/
/*! exports provided: PagesGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesGroupComponent", function() { return PagesGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _types_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/pages */ "./src/app/types/pages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesGroupComponent = /** @class */ (function () {
    function PagesGroupComponent(hstConfigurationService) {
        this.hstConfigurationService = hstConfigurationService;
        this.selectedPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PagesGroupComponent.prototype.ngOnInit = function () { };
    PagesGroupComponent.prototype.selectPage = function (pageName) {
        this.activePage = pageName;
        if (pageName !== undefined) {
            this.selectedPage.emit(new _types_pages__WEBPACK_IMPORTED_MODULE_3__["ActivePage"](pageName, this.type, this.hstConfig));
        }
        else {
            this.selectedPage.emit(undefined);
        }
    };
    PagesGroupComponent.prototype.renamePage = function (pageName) {
        this.renamingExistingPage = pageName;
    };
    PagesGroupComponent.prototype.onRenameExisting = function (newName) {
        if (newName) {
            this.doRenameExisting(newName, this.renamingExistingPage);
        }
        this.renamingExistingPage = undefined;
    };
    PagesGroupComponent.prototype.doRenameExisting = function (newName, oldName) {
        var _this = this;
        var pageIdx = this.pages.indexOf(oldName);
        if (pageIdx !== -1) {
            // get the page, then change the name, and update it
            this.hstConfigurationService
                .getPage(oldName, this.type, this.hstConfig)
                .subscribe(function (pageData) {
                if (pageData) {
                    pageData.name = newName;
                    _this.hstConfigurationService
                        .updatePage(oldName, pageData, _this.hstConfig)
                        .subscribe(function () {
                        _this.pages[pageIdx] = newName;
                        if (_this.activePage === oldName) {
                            _this.selectPage(newName);
                        }
                    });
                }
            });
        }
    };
    PagesGroupComponent.prototype.newPage = function () {
        this.renamingNewPage = true;
    };
    PagesGroupComponent.prototype.onRenameNew = function (newName) {
        if (newName) {
            this.addPage(newName);
        }
        this.renamingNewPage = false;
    };
    PagesGroupComponent.prototype.addPage = function (newName) {
        var _this = this;
        var newPage = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_1__["HstPage"](newName);
        this.hstConfigurationService
            .addPage(newPage, this.type, this.newPageHstConfig)
            .subscribe(function (response) {
            if (response) {
                _this.pages.push(newName);
                _this.activePage = newName;
                _this.selectPage(newName);
            }
        });
    };
    PagesGroupComponent.prototype.deletePage = function (pageName) {
        var _this = this;
        this.hstConfigurationService
            .deletePage(pageName, this.type, this.hstConfig)
            .subscribe(function () {
            _this.deleteFromPageGroup(pageName);
        });
    };
    PagesGroupComponent.prototype.deleteFromPageGroup = function (pageName) {
        var pageIdx = this.pages.indexOf(pageName);
        if (pageIdx !== -1) {
            this.pages.splice(pageIdx, 1);
            if (this.activePage === pageName) {
                this.selectPage(undefined);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PagesGroupComponent.prototype, "pages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PagesGroupComponent.prototype, "groupName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PagesGroupComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PagesGroupComponent.prototype, "hstConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PagesGroupComponent.prototype, "selectedPage", void 0);
    PagesGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages-group',
            template: __webpack_require__(/*! ./pages-group.component.html */ "./src/app/pages/pages-list/pages-group/pages-group.component.html"),
            styles: [__webpack_require__(/*! ./pages-group.component.css */ "./src/app/pages/pages-list/pages-group/pages-group.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"]])
    ], PagesGroupComponent);
    return PagesGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-list/pages-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/pages-list/pages-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: black;\n}\n\nmat-divider {\n  margin-bottom: 10px;\n}\n\n.page-group {\n  padding-left: 7px;\n}\n\n.page-group mat-icon {\n  padding-right: 15px;\n}\n"

/***/ }),

/***/ "./src/app/pages/pages-list/pages-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/pages-list/pages-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"hstConfig !== undefined && this.pages !== undefined\">\n  <div fxFlex=\"20\">\n    <app-pages-group [pages]=\"pages\" [groupName]=\"'Pages'\" [type]=\"'hst:pages'\" (selectedPage)=\"onSelectPage($event)\"\n                     [hstConfig]=\"hstConfig\"></app-pages-group>\n    <app-pages-group [pages]=\"abstractPages\" [groupName]=\"'Abstract pages'\" [type]=\"'hst:abstractpages'\"\n                     [hstConfig]=\"hstConfig\" (selectedPage)=\"onSelectPage($event)\"></app-pages-group>\n    <app-pages-group [pages]=\"prototypePages\" [groupName]=\"'Prototype pages'\" [type]=\"'hst:prototypepages'\"\n                     [hstConfig]=\"hstConfig\" (selectedPage)=\"onSelectPage($event)\"></app-pages-group>\n  </div>\n  <app-page-tree [page]=\"selectedPage\" fxFlex=\"80\"></app-page-tree>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/pages/pages-list/pages-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages-list/pages-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesListComponent", function() { return PagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/child-names-group-utils */ "./src/app/shared/child-names-group-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesListComponent = /** @class */ (function () {
    function PagesListComponent(hstConfigurationService) {
        this.hstConfigurationService = hstConfigurationService;
    }
    PagesListComponent.prototype.ngOnInit = function () {
    };
    PagesListComponent.prototype.ngOnChanges = function () {
        if (this.hstConfig) {
            this.getPages();
            this.selectedPage = undefined;
        }
    };
    PagesListComponent.prototype.getPages = function () {
        var _this = this;
        this.hstConfigurationService
            .getPages(this.hstConfig, false)
            .subscribe(function (pages) { return (_this.pages = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_2__["ChildNamesGroupUtils"].getChildrenOfFirstGroup(pages)); });
        this.hstConfigurationService
            .getPages(this.hstConfig, false, 'hst:abstractpages')
            .subscribe(function (pages) { return (_this.abstractPages = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_2__["ChildNamesGroupUtils"].getChildrenOfFirstGroup(pages)); });
        this.hstConfigurationService
            .getPages(this.hstConfig, false, 'hst:prototypepages')
            .subscribe(function (pages) { return (_this.prototypePages = _shared_child_names_group_utils__WEBPACK_IMPORTED_MODULE_2__["ChildNamesGroupUtils"].getChildrenOfFirstGroup(pages)); });
    };
    PagesListComponent.prototype.onSelectPage = function (page) {
        this.selectedPage = page;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PagesListComponent.prototype, "hstConfig", void 0);
    PagesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages-list',
            template: __webpack_require__(/*! ./pages-list.component.html */ "./src/app/pages/pages-list/pages-list.component.html"),
            styles: [__webpack_require__(/*! ./pages-list.component.css */ "./src/app/pages/pages-list/pages-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_1__["HstConfigurationService"]])
    ], PagesListComponent);
    return PagesListComponent;
}());



/***/ }),

/***/ "./src/app/properties/edit-parameters/edit-parameters.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/properties/edit-parameters/edit-parameters.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-parameter {\n  margin-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/properties/edit-parameters/edit-parameters.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/edit-parameters/edit-parameters.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" *ngIf=\"displayParameters()\">\n  <p>Parameter-names & values:</p>\n  <div fxLayout=\"start center\" *ngFor=\"let parameter of parameterNames; let i = index\">\n    <div fxFlex=\"45\">\n      <mat-form-field appearance=\"fill\">\n        <input matInput [(ngModel)]=\"parameterNames[i]\">\n      </mat-form-field>\n    </div>\n    <div fxFlex=\"45\">\n      <mat-form-field appearance=\"fill\">\n        <input matInput [(ngModel)]=\"parameterValues[i]\">\n      </mat-form-field>\n    </div>\n    <button mat-icon-button (click)=\"removeParameter(i)\" fxFlex=\"10\">\n      <mat-icon class=\"remove\" matTooltip=\"Remove parameter\" [matTooltipPosition]=\"'left'\">remove</mat-icon>\n    </button>\n  </div>\n  <button mat-icon-button (click)=\"addParameter()\" class=\"add-parameter icon-accent-on-hover\">\n    <mat-icon matTooltip=\"Add parameter\">add</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/properties/edit-parameters/edit-parameters.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/edit-parameters/edit-parameters.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditParametersComponent", function() { return EditParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditParametersComponent = /** @class */ (function () {
    function EditParametersComponent() {
    }
    EditParametersComponent.prototype.ngOnInit = function () { };
    EditParametersComponent.prototype.displayParameters = function () {
        return this.parameterNames != null && this.parameterNames.length === this.parameterValues.length;
    };
    EditParametersComponent.prototype.removeParameter = function (idx) {
        this.parameterNames.splice(idx, 1);
        this.parameterValues.splice(idx, 1);
    };
    EditParametersComponent.prototype.addParameter = function () {
        this.parameterNames.push('');
        this.parameterValues.push('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditParametersComponent.prototype, "parameterNames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditParametersComponent.prototype, "parameterValues", void 0);
    EditParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-parameters',
            template: __webpack_require__(/*! ./edit-parameters.component.html */ "./src/app/properties/edit-parameters/edit-parameters.component.html"),
            styles: [__webpack_require__(/*! ./edit-parameters.component.css */ "./src/app/properties/edit-parameters/edit-parameters.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditParametersComponent);
    return EditParametersComponent;
}());



/***/ }),

/***/ "./src/app/properties/edit-properties/edit-properties.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/properties/edit-properties/edit-properties.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-property {\n  margin-right: 40px;\n}\n"

/***/ }),

/***/ "./src/app/properties/edit-properties/edit-properties.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/properties/edit-properties/edit-properties.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let property of getProperties()\">\n  <div *ngIf=\"isGenericProperty(property) && properties[property].constructor.name as propType\">\n    <mat-checkbox appearance=\"fill\" fxFlex *ngIf=\"propType === 'Boolean'\" [(ngModel)]=\"properties[property]\">\n      {{property}}\n    </mat-checkbox>\n    <mat-form-field appearance=\"fill\" fxFlex *ngIf=\"propType === 'String'\">\n      <mat-label>{{property}}</mat-label>\n      <input matInput placeholder=\"{{property}}\" [(ngModel)]=\"properties[property]\">\n    </mat-form-field>\n    <button mat-icon-button (click)=\"removeProperty(property)\" *ngIf=\"propType === 'Boolean' || propType === 'String'\">\n      <mat-icon class=\"remove\" matTooltip=\"Remove property\" [matTooltipPosition]=\"'left'\">remove</mat-icon>\n    </button>\n  </div>\n</ng-container>\n<p fxLayoutAlign=\"end center\" class=\"add-property\">\n  <button mat-raised-button [matMenuTriggerFor]=\"addPropertyMenu\" [disabled]=\"addableProperties.length === 0\">\n    <mat-icon matTooltip=\"Add property\">add</mat-icon>\n    Add property\n  </button>\n</p>\n\n<mat-menu #addPropertyMenu>\n  <button mat-menu-item *ngFor=\"let property of addableProperties\" (click)=\"addProperty(property)\">\n    {{property.name}}\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/properties/edit-properties/edit-properties.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/properties/edit-properties/edit-properties.component.ts ***!
  \*************************************************************************/
/*! exports provided: HstPropertyType, EditPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstPropertyType", function() { return HstPropertyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertiesComponent", function() { return EditPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HstPropertyType;
(function (HstPropertyType) {
    HstPropertyType[HstPropertyType["Boolean"] = 0] = "Boolean";
    HstPropertyType[HstPropertyType["String"] = 1] = "String";
    HstPropertyType[HstPropertyType["StringArray"] = 2] = "StringArray";
    HstPropertyType[HstPropertyType["Date"] = 3] = "Date";
    HstPropertyType[HstPropertyType["Number"] = 4] = "Number";
})(HstPropertyType || (HstPropertyType = {}));
var EditPropertiesComponent = /** @class */ (function () {
    function EditPropertiesComponent() {
        // using static list of available properties and the types as types in TS are compile-time not run-time :(
        // unless someone figures out a workaround
        // commented properties are either not relevant properties or are always shown, so don't have to be added through Add property menu
        this.defaultAvailableProperties = [
            // { name: 'hst:description', type: HstPropertyType.String },
            { name: 'hst:async', type: HstPropertyType.Boolean },
            { name: 'hst:suppresswastemessage', type: HstPropertyType.Boolean },
            // { name: 'hst:parametersinfoclassname', type: HstPropertyType.String },
            // { name: 'hst:parameternameprefixes', type: HstPropertyType.StringArray },
            { name: 'hst:page_errorhandlerclassname', type: HstPropertyType.String },
            // { name: 'hst:parametervalues', type: HstPropertyType.StringArray },
            { name: 'hst:cacheable', type: HstPropertyType.Boolean },
            { name: 'hst:resourcetemplate', type: HstPropertyType.String },
            // { name: 'hst:template', type: HstPropertyType.String },
            // { name: 'hst:referencename', type: HstPropertyType.String },
            { name: 'hst:standalone', type: HstPropertyType.Boolean },
            // { name: 'hst:componentclassname', type: HstPropertyType.String },
            // { name: 'hst:parameternames', type: HstPropertyType.StringArray },
            { name: 'hst:asyncmode', type: HstPropertyType.String },
        ];
    }
    EditPropertiesComponent.prototype.ngOnChanges = function () {
        if (this.availableProperties != null) {
            this.updateAddableProperties();
        }
    };
    EditPropertiesComponent.prototype.ngOnInit = function () {
    };
    EditPropertiesComponent.prototype.sortProperties = function (propA, propB) {
        if (propA.name < propB.name) {
            return -1;
        }
        else if (propA.name > propB.name) {
            return 1;
        }
        return 0;
    };
    EditPropertiesComponent.prototype.getProperties = function () {
        if (this.properties) {
            return Object.keys(this.properties);
        }
        return [];
    };
    EditPropertiesComponent.prototype.isGenericProperty = function (property) {
        return this.specialProperties.indexOf(property) === -1;
    };
    EditPropertiesComponent.prototype.updateAddableProperties = function () {
        var availableProperties = this.availableProperties.concat(this.defaultAvailableProperties);
        availableProperties.sort(this.sortProperties);
        var addableProperties = [];
        for (var _i = 0, availableProperties_1 = availableProperties; _i < availableProperties_1.length; _i++) {
            var property = availableProperties_1[_i];
            if (Object.keys(this.properties).indexOf(property.name) === -1) {
                addableProperties.push(property);
            }
        }
        this.addableProperties = addableProperties;
    };
    EditPropertiesComponent.prototype.addProperty = function (property) {
        switch (property.type) {
            case HstPropertyType.Boolean: {
                this.properties[property.name] = false;
                break;
            }
            case HstPropertyType.String: {
                this.properties[property.name] = '';
                break;
            }
            case HstPropertyType.StringArray: {
                this.properties[property.name] = [];
                if (property.name === 'hst:parameternames') {
                    this.properties['hst:parametervalues'] = [];
                }
                if (property.name === 'hst:parametervalues') {
                    this.properties['hst:parameternames'] = [];
                }
                break;
            }
            default: {
                break;
            }
        }
        this.updateAddableProperties();
    };
    EditPropertiesComponent.prototype.removeProperty = function (property) {
        delete this.properties[property];
        this.updateAddableProperties();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditPropertiesComponent.prototype, "properties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditPropertiesComponent.prototype, "availableProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditPropertiesComponent.prototype, "specialProperties", void 0);
    EditPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-properties',
            template: __webpack_require__(/*! ./edit-properties.component.html */ "./src/app/properties/edit-properties/edit-properties.component.html"),
            styles: [__webpack_require__(/*! ./edit-properties.component.css */ "./src/app/properties/edit-properties/edit-properties.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditPropertiesComponent);
    return EditPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/services/hst-configuration.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/hst-configuration.service.ts ***!
  \*******************************************************/
/*! exports provided: HstConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstConfigurationService", function() { return HstConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HstConfigurationService = /** @class */ (function () {
    function HstConfigurationService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/site/hst-api/';
        this.username = 'admin';
        this.password = 'admin';
        this.hstConfigNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hstConfigObservable$ = this.hstConfigNotifier.asObservable();
    }
    HstConfigurationService.prototype.setHstConfig = function (hstConfig) {
        this.selectedHstConfig = hstConfig;
        this.hstConfigNotifier.next(hstConfig);
    };
    HstConfigurationService.prototype.getSelectedHstConfig = function () {
        return this.selectedHstConfig;
    };
    HstConfigurationService.prototype.buildApiUrl = function (configSection, hstConfig, childNode) {
        var apiUrl = this.apiUrl + configSection;
        if (hstConfig) {
            apiUrl += '/' + hstConfig;
        }
        else {
            apiUrl += '/' + this.selectedHstConfig;
        }
        if (childNode) {
            apiUrl += '/' + childNode;
        }
        return apiUrl;
    };
    HstConfigurationService.prototype.buildRequestOptions = function (params, headers) {
        headers = this.setAuthorizationHeader(headers);
        return { headers: headers, params: params };
    };
    HstConfigurationService.prototype.buildRequestBodyOptions = function (params, headers) {
        headers = this.setAuthorizationHeader(headers);
        headers = this.setPostHeader(headers);
        return { headers: headers, params: params };
    };
    HstConfigurationService.prototype.setAuthorizationHeader = function (headers) {
        if (headers === undefined) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
            });
        }
        else {
            return headers.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));
        }
    };
    HstConfigurationService.prototype.setPostHeader = function (headers) {
        return headers.set('Content-Type', 'application/json');
    };
    HstConfigurationService.prototype.doGet = function (apiUrl, callerName, returnOnError, params, headers) {
        var options = this.buildRequestOptions(params, headers);
        return this.http.get(apiUrl, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.getData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(callerName, returnOnError)));
    };
    HstConfigurationService.prototype.doPost = function (apiUrl, data, callerName, params, headers) {
        var options = this.buildRequestBodyOptions(params, headers);
        return this.http.post(apiUrl, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(callerName, undefined)));
    };
    HstConfigurationService.prototype.doPut = function (apiUrl, data, callerName, params, headers) {
        var options = this.buildRequestBodyOptions(params, headers);
        return this.http.put(apiUrl, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(callerName, undefined)));
    };
    HstConfigurationService.prototype.doDelete = function (apiUrl, callerName, params, headers) {
        var options = this.buildRequestOptions(params, headers);
        return this.http.delete(apiUrl, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(callerName, undefined)));
    };
    HstConfigurationService.prototype.getConfigurations = function () {
        var apiUrl = this.apiUrl + 'configurations';
        return this.doGet(apiUrl, 'getConfigurations', []);
    };
    HstConfigurationService.prototype.getContainers = function (depth, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (depth != null) {
            params = params.append('depth', String(depth));
        }
        return this.doGet(apiUrl, 'getContainers', [], params);
    };
    HstConfigurationService.prototype.getContainerFolder = function (containerFolderName, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig, containerFolderName);
        return this.doGet(apiUrl, 'getContainerFolder', []);
    };
    HstConfigurationService.prototype.addContainerFolder = function (containerFolder, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig, containerFolder.name);
        return this.doPost(apiUrl, containerFolder, 'addContainerFolder');
    };
    HstConfigurationService.prototype.getContainer = function (containerFolderName, containerName, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig, containerFolderName + '/' + containerName);
        return this.doGet(apiUrl, 'getContainer', undefined);
    };
    HstConfigurationService.prototype.addContainer = function (containerFolderName, container, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig, containerFolderName + '/' + container.name);
        return this.doPost(apiUrl, container, 'addContainer');
    };
    HstConfigurationService.prototype.updateContainer = function (containerFolderName, containerName, container, hstConfig) {
        var apiUrl = this.buildApiUrl('containers', hstConfig, containerFolderName + '/' + containerName);
        return this.doPut(apiUrl, container, 'updateContainer');
    };
    HstConfigurationService.prototype.getPages = function (hstConfig, includeInherited, pageType) {
        var apiUrl = this.buildApiUrl('pages', hstConfig);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (includeInherited != null) {
            params = params.append('includeInherited', String(includeInherited));
        }
        if (pageType != null) {
            params = params.append('type', pageType);
        }
        return this.doGet(apiUrl, 'getPages', [], params);
    };
    HstConfigurationService.prototype.getPage = function (pageName, pageType, hstConfig) {
        var apiUrl = this.buildApiUrl('pages', hstConfig, pageName);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (pageType != null) {
            params = params.append('type', pageType);
        }
        return this.doGet(apiUrl, 'getPage', undefined, params);
    };
    HstConfigurationService.prototype.addPage = function (page, pageType, hstConfig) {
        var apiUrl = this.buildApiUrl('pages', hstConfig, page.name);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (pageType != null) {
            params = params.append('type', pageType);
        }
        return this.doPost(apiUrl, page, 'addPage', params);
    };
    HstConfigurationService.prototype.updatePage = function (pageName, page, hstConfig) {
        var apiUrl = this.buildApiUrl('pages', hstConfig, pageName);
        return this.doPut(apiUrl, page, 'updatePage');
    };
    HstConfigurationService.prototype.deletePage = function (pageName, pageType, hstConfig) {
        var apiUrl = this.buildApiUrl('pages', hstConfig, pageName);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (pageType != null) {
            params = params.append('type', pageType);
        }
        return this.doDelete(apiUrl, 'deletePage', params);
    };
    HstConfigurationService.prototype.getSiteMapItems = function (hstConfig, includeInherited, depth) {
        var apiUrl = this.buildApiUrl('sitemap', hstConfig);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (includeInherited != null) {
            params = params.append('includeInherited', String(includeInherited));
        }
        if (depth != null) {
            params = params.append('depth', String(depth));
        }
        return this.doGet(apiUrl, 'getSiteMapItems', [], params);
    };
    HstConfigurationService.prototype.getSiteMapItem = function (siteMapItemName, hstConfig) {
        var apiUrl = this.buildApiUrl('sitemap', hstConfig, siteMapItemName);
        return this.doGet(apiUrl, 'getSiteMapItem', undefined);
    };
    HstConfigurationService.prototype.querySiteMapItemNamesByPage = function (pageName, hstConfig) {
        var apiUrl = this.buildApiUrl('sitemap', hstConfig, 'query-by-page/' + pageName);
        return this.doGet(apiUrl, 'querySiteMapItemByPage', []);
    };
    HstConfigurationService.prototype.addSiteMapItem = function (siteMapItem, siteMapItemPath, hstConfig) {
        siteMapItemPath = siteMapItemPath === null ? siteMapItem.name : siteMapItemPath;
        var apiUrl = this.buildApiUrl('sitemap', hstConfig, siteMapItemPath);
        return this.doPost(apiUrl, siteMapItem, 'addSiteMapItem');
    };
    HstConfigurationService.prototype.updateSiteMapItem = function (siteMapItem, siteMapItemPath, hstConfig) {
        siteMapItemPath = siteMapItemPath === null ? siteMapItem.name : siteMapItemPath;
        var apiUrl = this.buildApiUrl('sitemap', hstConfig, siteMapItemPath);
        return this.doPut(apiUrl, siteMapItem, 'updateSiteMapItem');
    };
    HstConfigurationService.prototype.getTemplates = function (hstConfig) {
        var apiUrl = this.buildApiUrl('templates', hstConfig);
        return this.doGet(apiUrl, 'getTemplates', []);
    };
    HstConfigurationService.prototype.getTemplate = function (template, hstConfig) {
        var apiUrl = this.buildApiUrl('templates', hstConfig, template);
        return this.doGet(apiUrl, 'getTemplate', undefined);
    };
    HstConfigurationService.prototype.addTemplate = function (template, hstConfig) {
        var apiUrl = this.buildApiUrl('templates', hstConfig, template.name);
        return this.doPost(apiUrl, template, 'addTemplate');
    };
    HstConfigurationService.prototype.updateTemplate = function (template, hstConfig) {
        var apiUrl = this.buildApiUrl('templates', hstConfig, template.name);
        return this.doPut(apiUrl, template, 'updateTemplate');
    };
    HstConfigurationService.prototype.getComponentClassNames = function () {
        var apiUrl = this.apiUrl + 'componentclassnames';
        return this.doGet(apiUrl, 'getComponentClassNames', []);
    };
    HstConfigurationService.prototype.getWebfiles = function () {
        var apiUrl = this.apiUrl + 'webfiles/site';
        return this.doGet(apiUrl, 'getWebfiles', []);
    };
    HstConfigurationService.prototype.getData = function (response) {
        if (response && response.data) {
            return response.data;
        }
        return null;
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HstConfigurationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.error.message) {
                console.log(operation + " failed: " + error.error.message);
            }
            else {
                console.log(operation + " failed: " + error.message);
            }
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HstConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HstConfigurationService);
    return HstConfigurationService;
}());



/***/ }),

/***/ "./src/app/services/save-messaging.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/save-messaging.service.ts ***!
  \****************************************************/
/*! exports provided: SaveScope, SaveMessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveScope", function() { return SaveScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveMessagingService", function() { return SaveMessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveScope;
(function (SaveScope) {
    SaveScope[SaveScope["Page"] = 1] = "Page";
})(SaveScope || (SaveScope = {}));
var SaveMessagingService = /** @class */ (function () {
    function SaveMessagingService() {
        this.notify = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.notifyObservable$ = this.notify.asObservable();
    }
    SaveMessagingService.prototype.notifyOther = function (data) {
        if (data) {
            this.notify.next(data);
        }
    };
    SaveMessagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SaveMessagingService);
    return SaveMessagingService;
}());



/***/ }),

/***/ "./src/app/settings/settings-dialog/settings-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/settings/settings-dialog/settings-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings-dialog/settings-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/settings/settings-dialog/settings-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Change settings</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Base API URL</mat-label>\n    <input matInput [formControl]=\"apiUrlFormControl\" required>\n    <mat-hint>Should be the same as your site URL, including the context-path</mat-hint>\n    <mat-error *ngIf=\"apiUrlFormControl.hasError('required')\">\n      Please enter a URL\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Username</mat-label>\n    <input matInput [formControl]=\"usernameFormControl\" required>\n    <mat-error *ngIf=\"usernameFormControl.hasError('required')\">\n      Please enter a username\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Password</mat-label>\n    <input matInput [formControl]=\"passwordFormControl\" required>\n    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n      Please enter a password\n    </mat-error>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions fxLayoutAlign=\"end\">\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!settingsForm.valid\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings-dialog/settings-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/settings/settings-dialog/settings-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialogComponent", function() { return SettingsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsDialogComponent = /** @class */ (function () {
    function SettingsDialogComponent(dialogRef, hstConfigurationService) {
        this.dialogRef = dialogRef;
        this.hstConfigurationService = hstConfigurationService;
        this.apiUrlFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            apiUrlFormControl: this.apiUrlFormControl,
            usernameFormControl: this.usernameFormControl,
            passwordFormControl: this.passwordFormControl
        });
    }
    SettingsDialogComponent.prototype.ngOnInit = function () {
        this.apiUrlFormControl.setValue(this.hstConfigurationService.apiUrl);
        this.usernameFormControl.setValue(this.hstConfigurationService.username);
        this.passwordFormControl.setValue(this.hstConfigurationService.password);
    };
    SettingsDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    SettingsDialogComponent.prototype.onSave = function () {
        var apiUrl = this.apiUrlFormControl.value.toString();
        if (!apiUrl.endsWith('/')) {
            apiUrl += '/';
        }
        this.hstConfigurationService.apiUrl = apiUrl;
        this.hstConfigurationService.username = this.usernameFormControl.value.toString();
        this.hstConfigurationService.password = this.passwordFormControl.value.toString();
        this.dialogRef.close();
    };
    SettingsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-dialog',
            template: __webpack_require__(/*! ./settings-dialog.component.html */ "./src/app/settings/settings-dialog/settings-dialog.component.html"),
            styles: [__webpack_require__(/*! ./settings-dialog.component.css */ "./src/app/settings/settings-dialog/settings-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"]])
    ], SettingsDialogComponent);
    return SettingsDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/child-names-group-utils.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/child-names-group-utils.ts ***!
  \***************************************************/
/*! exports provided: ChildNamesGroupUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildNamesGroupUtils", function() { return ChildNamesGroupUtils; });
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/hst-configuration */ "./src/app/types/hst-configuration.ts");

var ChildNamesGroupUtils = /** @class */ (function () {
    function ChildNamesGroupUtils() {
    }
    ChildNamesGroupUtils.getChildrenOfFirstGroup = function (hstNodeGroups) {
        if (hstNodeGroups && hstNodeGroups.length > 0 && hstNodeGroups[0].children && hstNodeGroups[0].children.length > 0) {
            return hstNodeGroups[0].children.map(function (child) { return child.name; });
        }
        return [];
    };
    ChildNamesGroupUtils.getChildrenAsStringArray = function (hstNodeGroup) {
        if (hstNodeGroup.children && hstNodeGroup.children.length > 0) {
            return hstNodeGroup.children.map(function (child) { return child.name; });
        }
        return [];
    };
    ChildNamesGroupUtils.getChildNamesGroup = function (hstNodeGroups) {
        var childNamesGroup = [];
        for (var _i = 0, hstNodeGroups_1 = hstNodeGroups; _i < hstNodeGroups_1.length; _i++) {
            var hstNodeGroup = hstNodeGroups_1[_i];
            childNamesGroup.push(new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_0__["ChildNamesGroup"](hstNodeGroup.name, this.getChildrenAsStringArray(hstNodeGroup)));
        }
        return childNamesGroup;
    };
    return ChildNamesGroupUtils;
}());



/***/ }),

/***/ "./src/app/shared/duplicate-name.validator.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/duplicate-name.validator.ts ***!
  \****************************************************/
/*! exports provided: DuplicateNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateNameValidator", function() { return DuplicateNameValidator; });
function DuplicateNameValidator(array, selfName) {
    return function (control) {
        if (control.value !== selfName && array.indexOf(control.value) !== -1) {
            return { 'duplicateName': { value: control.value } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/shared/no-leading-slash.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/no-leading-slash.validator.ts ***!
  \******************************************************/
/*! exports provided: NoLeadingSlashValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLeadingSlashValidator", function() { return NoLeadingSlashValidator; });
function NoLeadingSlashValidator() {
    return function (control) {
        if (control.value.startsWith('/')) {
            return { 'noLeadingSlash': { value: control.value } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-text td {\n  font-size: 13px;\n}\n"

/***/ }),

/***/ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create site map-item</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>URL-path</mat-label>\n    <input matInput [formControl]=\"siteMapItemPathFormControl\" required>\n    <mat-icon matSuffix matTooltip=\"Can contain slashes, provided the parent items/segments exist\">info</mat-icon>\n    <mat-error *ngIf=\"siteMapItemPathFormControl.hasError('required')\">\n      Please enter a URL-path\n    </mat-error>\n    <mat-error *ngIf=\"siteMapItemPathFormControl.hasError('duplicateName')\">\n      Path already in use. Please specify a different path\n    </mat-error>\n    <mat-error *ngIf=\"siteMapItemPathFormControl.hasError('noLeadingSlash')\">\n      Path cannot start with a slash\n    </mat-error>\n  </mat-form-field>\n  <p>You can use the following wildcard matchers in the path:</p>\n  <table class=\"small-text\">\n    <tr><td>_default_</td>          <td>this is equivalent to a *, matching any single path segment</td></tr>\n    <tr><td>_any_</td>              <td>this is equivalent to a **, matching any ending of a URL</td></tr>\n    <tr><td>_default_.ext</td>      <td>where 'ext' can be some extension, for example *.html</td></tr>\n    <tr><td>_any_.ext</td>          <td>where 'ext' can be some extension, for example **.xml</td></tr>\n    <tr><td>_index_</td>            <td>map URL to an optional default document in a folder, with fallback to the\n      folder if the default document does not exist</td></tr>\n  </table>\n  <p class=\"mat-body-1 error\" *ngIf=\"errorOnSave\">Error while saving, see logs. Check if parent item/segment exists.</p>\n</div>\n<div mat-dialog-actions fxLayoutAlign=\"end\">\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!siteMapItemPathFormControl.valid\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateSitemapItemDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSitemapItemDialogComponent", function() { return CreateSitemapItemDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _types_hst_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/hst-configuration */ "./src/app/types/hst-configuration.ts");
/* harmony import */ var _shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/duplicate-name.validator */ "./src/app/shared/duplicate-name.validator.ts");
/* harmony import */ var _shared_no_leading_slash_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/no-leading-slash.validator */ "./src/app/shared/no-leading-slash.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CreateSitemapItemDialogComponent = /** @class */ (function () {
    function CreateSitemapItemDialogComponent(dialogRef, hstConfigurationService, data) {
        this.dialogRef = dialogRef;
        this.hstConfigurationService = hstConfigurationService;
        this.data = data;
        this.errorOnSave = false;
        this.siteMapItemPathFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    CreateSitemapItemDialogComponent.prototype.ngOnInit = function () {
        this.siteMapItemPathFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_5__["DuplicateNameValidator"])(this.data.existingNodes, ''),
            Object(_shared_no_leading_slash_validator__WEBPACK_IMPORTED_MODULE_6__["NoLeadingSlashValidator"])()
        ]);
    };
    CreateSitemapItemDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    CreateSitemapItemDialogComponent.prototype.onSave = function () {
        var _this = this;
        var siteMapItemPath = this.siteMapItemPathFormControl.value;
        var siteMapItemName = this.convertPathToName(siteMapItemPath);
        var newSiteMapItem = new _types_hst_configuration__WEBPACK_IMPORTED_MODULE_4__["HstSiteMapItem"](siteMapItemName, this.data.componentConfigurationId);
        this.hstConfigurationService
            .addSiteMapItem(newSiteMapItem, siteMapItemPath)
            .subscribe(function (response) {
            if (response) {
                _this.dialogRef.close(siteMapItemPath);
            }
            else {
                _this.errorOnSave = true;
            }
        });
    };
    CreateSitemapItemDialogComponent.prototype.convertPathToName = function (path) {
        var lastSegmentIdx = path.lastIndexOf('/');
        if (lastSegmentIdx !== -1) {
            return path.substring(lastSegmentIdx);
        }
        return path;
    };
    CreateSitemapItemDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-sitemap-item-dialog',
            template: __webpack_require__(/*! ./create-sitemap-item-dialog.component.html */ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-sitemap-item-dialog.component.css */ "./src/app/sitemap/create-sitemap-item-dialog/create-sitemap-item-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_3__["HstConfigurationService"], Object])
    ], CreateSitemapItemDialogComponent);
    return CreateSitemapItemDialogComponent;
}());



/***/ }),

/***/ "./src/app/templates/abstract-template-dialog/abstract-template-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/templates/abstract-template-dialog/abstract-template-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AbstractTemplateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTemplateDialogComponent", function() { return AbstractTemplateDialogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var AbstractTemplateDialogComponent = /** @class */ (function () {
    function AbstractTemplateDialogComponent(hstConfigurationService) {
        this.errorOnSave = false;
        this.templateNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.webFilesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.templateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            templateNameFormControl: this.templateNameFormControl,
            webFilesFormControl: this.webFilesFormControl
        });
        this.hstConfigurationService = hstConfigurationService;
    }
    AbstractTemplateDialogComponent.prototype.setTemplate = function (data) {
        this.template = data;
        this.templateNameFormControl.setValue(this.template.name);
    };
    AbstractTemplateDialogComponent.prototype.getWebFiles = function () {
        var _this = this;
        this.webFilesFormControl.setValue(this.template.properties['hst:renderpath']);
        this.hstConfigurationService.getWebfiles().subscribe(function (webfiles) {
            _this.webFiles = webfiles;
            _this.filteredWebFiles = _this.webFilesFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
                _this.template.properties['hst:renderpath'] = value;
                return _this._filter(value);
            }));
        });
    };
    AbstractTemplateDialogComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.webFiles.filter(function (webFile) { return webFile.toLowerCase().includes(filterValue); });
    };
    AbstractTemplateDialogComponent.prototype.onSave = function () {
        this.template.name = this.templateNameFormControl.value;
        this.template.properties['hst:renderpath'] = this.webFilesFormControl.value;
    };
    // workaround for bug in TS on accessing protected variables of base class
    AbstractTemplateDialogComponent.prototype.setTemplateNameFormValidator = function (validator) {
        return this.templateNameFormControl.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            validator
        ]);
    };
    return AbstractTemplateDialogComponent;
}());



/***/ }),

/***/ "./src/app/templates/create-template-dialog/create-template-dialog.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/templates/create-template-dialog/create-template-dialog.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webfile-option {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/templates/create-template-dialog/create-template-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/templates/create-template-dialog/create-template-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create template</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Template name</mat-label>\n    <input matInput [formControl]=\"templateNameFormControl\" required>\n    <mat-error *ngIf=\"templateNameFormControl.hasError('required')\">\n      Please enter a template name\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <input type=\"text\" placeholder=\"Choose web file\" aria-label=\"Web file\" matInput [formControl]=\"webFilesFormControl\" [matAutocomplete]=\"auto\" required>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let webFile of filteredWebFiles | async\" [value]=\"webFile\" class=\"webfile-option\">\n        {{webFile}}\n      </mat-option>\n    </mat-autocomplete>\n    <mat-error *ngIf=\"webFilesFormControl.hasError('required')\">\n      Please select a web file\n    </mat-error>\n  </mat-form-field>\n  <p class=\"mat-body-1 error\" *ngIf=\"errorOnSave\">Error while saving, check the logs</p>\n</div>\n<div mat-dialog-actions fxLayoutAlign=\"end\">\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!templateForm.valid\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/templates/create-template-dialog/create-template-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/templates/create-template-dialog/create-template-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateTemplateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateDialogComponent", function() { return CreateTemplateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _abstract_template_dialog_abstract_template_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-template-dialog/abstract-template-dialog.component */ "./src/app/templates/abstract-template-dialog/abstract-template-dialog.component.ts");
/* harmony import */ var _shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/duplicate-name.validator */ "./src/app/shared/duplicate-name.validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CreateTemplateDialogComponent = /** @class */ (function (_super) {
    __extends(CreateTemplateDialogComponent, _super);
    function CreateTemplateDialogComponent(dialogRef, hstConfigurationService, data) {
        var _this = _super.call(this, hstConfigurationService) || this;
        _this.dialogRef = dialogRef;
        _this.hstConfigurationService = hstConfigurationService;
        _this.data = data;
        return _this;
    }
    CreateTemplateDialogComponent.prototype.ngOnInit = function () {
        _super.prototype.setTemplate.call(this, this.data.template);
        _super.prototype.getWebFiles.call(this);
        _super.prototype.setTemplateNameFormValidator.call(this, Object(_shared_duplicate_name_validator__WEBPACK_IMPORTED_MODULE_4__["DuplicateNameValidator"])(this.data.existingNames, this.data.template.name));
    };
    CreateTemplateDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    CreateTemplateDialogComponent.prototype.onSave = function () {
        var _this = this;
        _super.prototype.onSave.call(this);
        this.hstConfigurationService
            .addTemplate(this.template)
            .subscribe(function (response) {
            if (response) {
                _this.dialogRef.close(_this.template);
            }
            else {
                _this.errorOnSave = true;
            }
        });
    };
    CreateTemplateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-template-dialog',
            template: __webpack_require__(/*! ./create-template-dialog.component.html */ "./src/app/templates/create-template-dialog/create-template-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-template-dialog.component.css */ "./src/app/templates/create-template-dialog/create-template-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], Object])
    ], CreateTemplateDialogComponent);
    return CreateTemplateDialogComponent;
}(_abstract_template_dialog_abstract_template_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AbstractTemplateDialogComponent"]));



/***/ }),

/***/ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/templates/edit-template-dialog/edit-template-dialog.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.webfile-option {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/templates/edit-template-dialog/edit-template-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit template: {{template.name}}</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Template name</mat-label>\n    <input matInput [value]=\"template.name\" [formControl]=\"templateNameFormControl\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <input type=\"text\" placeholder=\"Choose web file\" aria-label=\"Web file\" matInput [formControl]=\"webFilesFormControl\" [matAutocomplete]=\"auto\" required>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let webFile of filteredWebFiles | async\" [value]=\"webFile\" class=\"webfile-option\">\n        {{webFile}}\n      </mat-option>\n    </mat-autocomplete>\n    <mat-error *ngIf=\"webFilesFormControl.hasError('required')\">\n      Please select a web file\n    </mat-error>\n  </mat-form-field>\n  <p class=\"mat-body-1 warning\">Please note that changing an existing template can impact other components</p>\n  <p class=\"mat-body-1 error\" *ngIf=\"errorOnSave\">Error while saving, check the logs</p>\n</div>\n<div mat-dialog-actions fxLayoutAlign=\"end\">\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"onSave()\" [disabled]=\"!templateForm.valid\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/edit-template-dialog/edit-template-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditTemplateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTemplateDialogComponent", function() { return EditTemplateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hst-configuration.service */ "./src/app/services/hst-configuration.service.ts");
/* harmony import */ var _abstract_template_dialog_abstract_template_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-template-dialog/abstract-template-dialog.component */ "./src/app/templates/abstract-template-dialog/abstract-template-dialog.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditTemplateDialogComponent = /** @class */ (function (_super) {
    __extends(EditTemplateDialogComponent, _super);
    function EditTemplateDialogComponent(dialogRef, hstConfigurationService, data) {
        var _this = _super.call(this, hstConfigurationService) || this;
        _this.dialogRef = dialogRef;
        _this.hstConfigurationService = hstConfigurationService;
        _this.data = data;
        return _this;
    }
    EditTemplateDialogComponent.prototype.ngOnInit = function () {
        _super.prototype.setTemplate.call(this, this.data.template);
        _super.prototype.getWebFiles.call(this);
        this.hstConfig = this.data.hstConfig;
        this.templateNameFormControl.disable();
    };
    EditTemplateDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    EditTemplateDialogComponent.prototype.onSave = function () {
        var _this = this;
        _super.prototype.onSave.call(this);
        this.hstConfigurationService
            .updateTemplate(this.data.template, this.data.hstConfig)
            .subscribe(function (response) {
            if (response) {
                _this.dialogRef.close(_this.template);
            }
            else {
                _this.errorOnSave = true;
            }
        });
    };
    EditTemplateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-template-dialog',
            template: __webpack_require__(/*! ./edit-template-dialog.component.html */ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-template-dialog.component.css */ "./src/app/templates/edit-template-dialog/edit-template-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_hst_configuration_service__WEBPACK_IMPORTED_MODULE_2__["HstConfigurationService"], Object])
    ], EditTemplateDialogComponent);
    return EditTemplateDialogComponent;
}(_abstract_template_dialog_abstract_template_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AbstractTemplateDialogComponent"]));



/***/ }),

/***/ "./src/app/tree/abstract-tree/abstract-tree.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tree/abstract-tree/abstract-tree.component.ts ***!
  \***************************************************************/
/*! exports provided: NamedNode, NewNamedNode, AbstractTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedNode", function() { return NamedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNamedNode", function() { return NewNamedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTreeComponent", function() { return AbstractTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NamedNode = /** @class */ (function () {
    function NamedNode() {
    }
    return NamedNode;
}());

var NewNamedNode = /** @class */ (function (_super) {
    __extends(NewNamedNode, _super);
    function NewNamedNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewNamedNode;
}(NamedNode));

var AbstractTreeComponent = /** @class */ (function () {
    function AbstractTreeComponent() {
        this.treeOptions = {
            allowDrag: function (node) { return !node.isRoot; },
            allowDrop: function (element, _a) {
                var parent = _a.parent, index = _a.index;
                return parent.parent != null && parent.data && parent.data.primaryType !== 'hst:containercomponentreference';
            },
            levelPadding: 40,
            idField: 'uuid'
        };
    }
    AbstractTreeComponent.prototype.expandTree = function () {
        var _this = this;
        // use the first operator to do this only once, otherwise the tree keeps expanding on every interaction
        var initTree = this.queryTree.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        initTree.subscribe(function (comps) {
            _this.tree = comps.first;
            if (_this.tree && _this.tree.treeModel) {
                _this.tree.treeModel.expandAll();
            }
        });
    };
    // can override this function to conditionally hide or show nodes
    AbstractTreeComponent.prototype.showNode = function (node) {
        return true;
    };
    AbstractTreeComponent.prototype.canExpand = function (node) {
        return node.hasChildren;
    };
    AbstractTreeComponent.prototype.showIcon = function (_) {
        return 'web_asset';
    };
    AbstractTreeComponent.prototype.openMenu = function (node) {
        this.activeNode = node;
        this.activeItem = node.data;
    };
    AbstractTreeComponent.prototype.selectNode = function (node) {
        this.selectedItem = node;
    };
    AbstractTreeComponent.prototype.renameNode = function () {
        this.activeNode.setIsActive(true);
    };
    AbstractTreeComponent.prototype.onRename = function (newName) {
        if (newName) {
            // rename node
            this.activeItem.name = newName;
            this.activeNode.setIsActive(false);
            if (this.activeItem.isNewNode) {
                // select node if new/created
                this.selectedItem = this.activeItem;
                delete this.activeItem.isNewNode;
            }
        }
        else {
            // cancel creation of new node
            if (this.activeItem.isNewNode) {
                // remove node;
                this.activeNode.parent.data.children.pop();
                this.tree.treeModel.update();
            }
            else {
                // cancel rename existing node
                this.activeNode.setIsActive(false);
            }
        }
    };
    AbstractTreeComponent.prototype.addNode = function (newNode) {
        var newNamedNode = newNode;
        newNamedNode.isNewNode = true;
        // set activeItem to root item if tree has only a single root node,
        // this fixes a bug when adding component to empty tree a second time
        if (this.isEmptyTree()) {
            this.activeItem = this.tree.treeModel.getFirstRoot().data;
        }
        // add node
        if (this.activeItem.children === undefined) {
            this.activeItem.children = [];
        }
        this.activeItem.children.push(newNamedNode);
        this.tree.treeModel.update();
        // expand for when adding a node to empty tree
        this.tree.treeModel.expandAll();
        // set active node and item; disable 'edit mode'
        var newTreeNodeId = this.activeItem.children[this.activeItem.children.length - 1].uuid;
        var newTreeNode = this.tree.treeModel.getNodeById(newTreeNodeId);
        this.activeNode = newTreeNode;
        this.activeItem = newNode;
        this.activeNode.setIsActive(true);
    };
    AbstractTreeComponent.prototype.removeNode = function () {
        this.activeNode.parent.data.children.splice(this.activeNode.index, 1);
        this.tree.treeModel.update();
    };
    AbstractTreeComponent.prototype.isEmptyTree = function () {
        if (this.tree !== undefined && this.tree.treeModel !== undefined) {
            return this.tree.treeModel.getFirstRoot().children.length === 0 ? true : false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tree'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AbstractTreeComponent.prototype, "queryTree", void 0);
    return AbstractTreeComponent;
}());



/***/ }),

/***/ "./src/app/types/hst-configuration.ts":
/*!********************************************!*\
  !*** ./src/app/types/hst-configuration.ts ***!
  \********************************************/
/*! exports provided: HstNodeGroup, ChildName, ChildNamesGroup, JcrNode, HstAbstractComponent, HstPage, HstAbstractComponentProperties, HstPageProperties, HstContainerComponentReference, HstContainerComponentReferenceProperties, HstContainerComponent, HstContainerComponentProperties, HstContainerComponentFolder, HstContainerItemComponent, HstContainerItemComponentProperties, HstSiteMapItem, HstSiteMapItemProperties, HstTemplate, HstTemplateProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstNodeGroup", function() { return HstNodeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildName", function() { return ChildName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildNamesGroup", function() { return ChildNamesGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JcrNode", function() { return JcrNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstAbstractComponent", function() { return HstAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstPage", function() { return HstPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstAbstractComponentProperties", function() { return HstAbstractComponentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstPageProperties", function() { return HstPageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponentReference", function() { return HstContainerComponentReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponentReferenceProperties", function() { return HstContainerComponentReferenceProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponent", function() { return HstContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponentProperties", function() { return HstContainerComponentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerComponentFolder", function() { return HstContainerComponentFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerItemComponent", function() { return HstContainerItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstContainerItemComponentProperties", function() { return HstContainerItemComponentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstSiteMapItem", function() { return HstSiteMapItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstSiteMapItemProperties", function() { return HstSiteMapItemProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstTemplate", function() { return HstTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstTemplateProperties", function() { return HstTemplateProperties; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HstNodeGroup = /** @class */ (function () {
    function HstNodeGroup() {
    }
    return HstNodeGroup;
}());

var ChildName = /** @class */ (function () {
    function ChildName(name, uuid) {
        this.name = name;
        this.uuid = uuid;
    }
    return ChildName;
}());

var ChildNamesGroup = /** @class */ (function () {
    function ChildNamesGroup(name, children) {
        this.name = name;
        this.children = children;
    }
    return ChildNamesGroup;
}());

var JcrNode = /** @class */ (function () {
    function JcrNode(name) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = '';
        }
    }
    return JcrNode;
}());

var HstAbstractComponent = /** @class */ (function (_super) {
    __extends(HstAbstractComponent, _super);
    function HstAbstractComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstAbstractComponent;
}(JcrNode));

var HstPage = /** @class */ (function (_super) {
    __extends(HstPage, _super);
    function HstPage(name) {
        var _this = _super.call(this) || this;
        if (name) {
            _this.name = name;
        }
        else {
            _this.name = '';
        }
        _this.primaryType = 'hst:component';
        _this.children = [];
        _this.properties = {};
        return _this;
    }
    return HstPage;
}(JcrNode));

// export type HstPage = typeof HstComponent;
// export type HstPageProperties = typeof HstComponentProperties;
var HstAbstractComponentProperties = /** @class */ (function () {
    function HstAbstractComponentProperties() {
    }
    return HstAbstractComponentProperties;
}());

var HstPageProperties = /** @class */ (function (_super) {
    __extends(HstPageProperties, _super);
    function HstPageProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstPageProperties;
}(HstAbstractComponentProperties));

var HstContainerComponentReference = /** @class */ (function (_super) {
    __extends(HstContainerComponentReference, _super);
    function HstContainerComponentReference() {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.primaryType = 'hst:containercomponentreference';
        _this.properties = {
            'hst:referencecomponent': ''
        };
        return _this;
    }
    return HstContainerComponentReference;
}(JcrNode));

var HstContainerComponentReferenceProperties = /** @class */ (function () {
    function HstContainerComponentReferenceProperties() {
    }
    return HstContainerComponentReferenceProperties;
}());

var HstContainerComponent = /** @class */ (function (_super) {
    __extends(HstContainerComponent, _super);
    function HstContainerComponent(name) {
        var _this = _super.call(this, name) || this;
        _this.primaryType = 'hst:containercomponent';
        _this.properties = {
            'hst:xtype': 'hst.vbox'
        };
        return _this;
    }
    return HstContainerComponent;
}(JcrNode));

var HstContainerComponentProperties = /** @class */ (function (_super) {
    __extends(HstContainerComponentProperties, _super);
    function HstContainerComponentProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstContainerComponentProperties;
}(HstAbstractComponentProperties));

var HstContainerComponentFolder = /** @class */ (function (_super) {
    __extends(HstContainerComponentFolder, _super);
    function HstContainerComponentFolder(name) {
        var _this = _super.call(this, name) || this;
        _this.primaryType = 'hst:containercomponentfolder';
        return _this;
    }
    return HstContainerComponentFolder;
}(JcrNode));

var HstContainerItemComponent = /** @class */ (function (_super) {
    __extends(HstContainerItemComponent, _super);
    function HstContainerItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstContainerItemComponent;
}(JcrNode));

var HstContainerItemComponentProperties = /** @class */ (function (_super) {
    __extends(HstContainerItemComponentProperties, _super);
    function HstContainerItemComponentProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HstContainerItemComponentProperties;
}(HstAbstractComponentProperties));

var HstSiteMapItem = /** @class */ (function (_super) {
    __extends(HstSiteMapItem, _super);
    function HstSiteMapItem(name, componentConfigurationId) {
        var _this = _super.call(this) || this;
        if (name != null) {
            _this.name = name;
        }
        else {
            _this.name = '';
        }
        _this.primaryType = 'hst:sitemapitem';
        if (componentConfigurationId) {
            _this.properties = {
                'hst:componentconfigurationid': componentConfigurationId
            };
        }
        return _this;
    }
    return HstSiteMapItem;
}(JcrNode));

var HstSiteMapItemProperties = /** @class */ (function () {
    function HstSiteMapItemProperties() {
    }
    return HstSiteMapItemProperties;
}());

var HstTemplate = /** @class */ (function (_super) {
    __extends(HstTemplate, _super);
    function HstTemplate(name) {
        var _this = _super.call(this) || this;
        if (name != null) {
            _this.name = name;
        }
        else {
            _this.name = '';
        }
        _this.primaryType = 'hst:template';
        _this.properties = {
            'hst:renderpath': ''
        };
        return _this;
    }
    return HstTemplate;
}(JcrNode));

var HstTemplateProperties = /** @class */ (function () {
    function HstTemplateProperties() {
    }
    return HstTemplateProperties;
}());



/***/ }),

/***/ "./src/app/types/pages.ts":
/*!********************************!*\
  !*** ./src/app/types/pages.ts ***!
  \********************************/
/*! exports provided: ActivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePage", function() { return ActivePage; });
var ActivePage = /** @class */ (function () {
    function ActivePage(name, type, hstConfig) {
        this.name = name;
        this.type = type;
        this.hstConfig = hstConfig;
    }
    return ActivePage;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Robbert.Kauffman/Projects/hst-config-editor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map