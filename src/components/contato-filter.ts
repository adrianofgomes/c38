import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'contatofilter'
})
@Injectable()
export class ContatoFilter implements PipeTransform {
    transform(items: any[], filtro: string): any {
        return items.filter(item => item.nome.toUpperCase().indexOf(filtro.toUpperCase()) !== -1);
    }
}