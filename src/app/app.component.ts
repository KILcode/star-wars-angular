import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ApiService } from './api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly apiService = inject(ApiService);
  public readonly planets = this.apiService.planets;
}
