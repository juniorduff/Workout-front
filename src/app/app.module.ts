import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {FuseModule} from '@fuse';
import {FuseConfigModule} from '@fuse/services/config';
import {FuseMockApiModule} from '@fuse/lib/mock-api';
import {CoreModule} from 'app/core/core.module';
import {appConfig} from 'app/core/config/app.config';
import {mockApiServices} from 'app/mock-api';
import {LayoutModule} from 'app/layout/layout.module';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {IMaskModule} from 'angular-imask';

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions

@NgModule({
    declarations: [AppComponent],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgSelectModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        FuseModule,
        IMaskModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),
        CoreModule,
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        ToastrModule.forRoot({
            closeButton: true,
            progressBar: true,
            maxOpened: 1,
            preventDuplicates: true,
            autoDismiss: true,
        }),
    ],

    bootstrap: [AppComponent],
})
export class AppModule {
}
