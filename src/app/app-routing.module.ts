import { NgModule } from "@angular/core";
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "active",
    loadChildren: () =>
      import("./active/active.module").then((m) => m.ActivePageModule),
  },
  {
    path: "amount-recived",
    loadChildren: () =>
      import("./amount-recived/amount-recived.module").then(
        (m) => m.AmountRecivedPageModule,
      ),
  },
  {
    path: "level-wise-chart",
    loadChildren: () =>
      import("./level-wise-chart/level-wise-chart.module").then(
        (m) => m.LevelWiseChartPageModule,
      ),
  },
  {
    path: "my-account",
    loadChildren: () =>
      import("./my-account/my-account.module").then(
        (m) => m.MyAccountPageModule,
      ),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'used-epin',
    loadChildren: () => import('./pages/used-epin/used-epin.module').then( m => m.UsedEpinPageModule)
  },
  {
    path: 'unused-epin',
    loadChildren: () => import('./pages/unused-epin/unused-epin.module').then( m => m.UnusedEpinPageModule)
  },
  {
    path: 'transferred-epin',
    loadChildren: () => import('./pages/transferred-epin/transferred-epin.module').then( m => m.TransferredEpinPageModule)
  },
  {
    path: 'transfer-epin',
    loadChildren: () => import('./pages/transfer-epin/transfer-epin.module').then( m => m.TransferEpinPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./pages/transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
