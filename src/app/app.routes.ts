import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/features/product-list/products.component';
import { ShoppingCartComponent } from './components/products/features/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'shopping-cart',
                component: ShoppingCartComponent
            },

        ]      
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'         
    },
];
