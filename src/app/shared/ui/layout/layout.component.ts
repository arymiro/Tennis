import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component'
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.interface';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  public menu!: Menu;
  private readonly menuService = inject(MenuService);
  
  constructor() { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.menu = data;      
    });
  }
}
