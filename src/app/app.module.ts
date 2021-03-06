import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

/**
 * 模块
 */
import { CoreModule } from '~@core/core.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouting,
    CoreModule,
    LoginModule,
    MainModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
