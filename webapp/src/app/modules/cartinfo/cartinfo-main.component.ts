import { Component } from '@angular/core';
import { WishboneMachine } from '../../services/wishbone/wishbone';
import { Emulator } from '../../services/NESService';
import { MatDialog } from '@angular/material';
import { CartInfoDialogComponent } from './cartinfo-dialog.component';
import { Http } from '@angular/http';
import { RomLoader } from '../../services/cartloader';


@Component({
  selector: 'cartinfo-main',
  templateUrl: './cartinfo-main.component.html',
  styleUrls: ['./cartinfo-main.component.css']
})
export class CartInfoComponent {
    wishbone: WishboneMachine;
    constructor(private nesService: Emulator, private loader: RomLoader, private dialog: MatDialog, private http: Http) {
        this.wishbone = nesService.wishbone;
    }
    showDialog () {
        this.loader.getCartInfo().subscribe((info) => {
            const dialogRef = this.dialog.open(CartInfoDialogComponent, {
                height: '80%',
                width: '60%',
                data: { wishbone:  this.wishbone, info: info }
            });
        }, (err) => {
            console.log('cart info fail');
        });
    }
}