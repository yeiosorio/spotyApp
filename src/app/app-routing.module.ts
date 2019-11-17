import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'playlist', loadChildren: './playlist/playlist.module#PlaylistPageModule' },
  { path: 'song-detail', loadChildren: './song-detail/song-detail.module#SongDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
