import { Component } from '@angular/core';

@Component({
  selector: 'app-referencias',
  standalone: true,
  templateUrl: './referencias.component.html',
  styleUrl: './referencias.component.css'
})
export class ReferenciasComponent {
  links = [
    {
      label: 'Henry Rowan Lemly - El Espectador',
      url: 'https://www.elespectador.com/deportes/henry-rowan-lemly-el-pionero/'
    },
    {
      label: 'Henry Rowan Lemly - Olimpico',
      url: 'https://www.olimpicocol.co/archivo/pioneros-henry-rowan-lemly/'
    },
    {
      label: 'Primer partido de futbol - El Malpensante',
      url: 'https://elmalpensante.com/articulo/4005/el-primer-partido-de-futbol-en-colombia'
    },
    {
      label: 'Historia del futbol colombiano - Revista Credencial',
      url: 'https://www.revistacredencial.com/noticia/actualidad/futbol-colombiano-historia-de-una-pasion'
    }
  ];
}
