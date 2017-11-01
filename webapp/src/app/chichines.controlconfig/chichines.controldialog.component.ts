import { Emulator } from '../services/NESService';
import { Component, Inject, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WishboneMachine, KeyBindings, WishBoneControlPad } from '../services/wishbone/wishbone';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'chichines-controldialog',
  templateUrl: './chichines.controldialog.component.html',
  styleUrls: ['./chichines.controldialog.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ControlDialogComponent {
    wishbone: WishboneMachine;
    controls: KeyBindings = new KeyBindings();
    controls2: KeyBindings = new KeyBindings();

    currCapture: KeyBindings;

    origControls: KeyBindings;
    capturing = false;
    captureType = '';
    sub: Subscription;
    keydownEvent: Observable<any> = Observable.fromEvent(document, 'keydown');

    constructor(
        public dialogRef: MatDialogRef<ControlDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private cd: ChangeDetectorRef
    ) {
        this.wishbone = data.wishbone;
        this.origControls = Object.assign({}, this.wishbone.PadOne.bindings);
        this.controls = Object.assign({}, this.wishbone.PadOne.bindings);
        this.sub = this.keydownEvent.subscribe((event) => { this.handleKeyDownEvent(event); });
    }

    handleKeyDownEvent(event: KeyboardEvent) {
        if (this.capturing) {
            console.log(this.captureType + ' ' + event.keyCode );
            this.currCapture[this.captureType] = event.keyCode;
        }
    }

    captureInput(event: any, type: string, captureFor: KeyBindings) {
        // debugger;
        this.currCapture = captureFor;
        this.captureType = type;
        this.capturing = event.value;
        this.cd.detectChanges();
    }

    applyBindings() {
        this.wishbone.PadOne.attach(this.controls);
        this.sub.unsubscribe();

        this.dialogRef.close();
        this.capturing = false;
    }

    onNoClick(): void {
        this.wishbone.PadOne.attach(this.origControls);
        this.sub.unsubscribe();
        this.dialogRef.close();
        this.capturing = false;
    }
}