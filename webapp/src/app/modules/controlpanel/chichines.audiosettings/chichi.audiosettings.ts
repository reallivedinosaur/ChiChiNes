﻿import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NESService } from '../../../services/NESService';
import { Observable } from 'rxjs/Observable';
import { AudioSettings } from 'chichi';
import { WishboneMachine } from '../../../services/wishbone/wishbone';
import { IAudioHandler } from '../../../services/wishbone/wishbone.audio';
import { LocalAudioSettings } from '../../../services/wishbone/wishbone.audio.localsettings';
import { WishboneWorker } from '../../../services/wishbone/wishbone.worker';

@Component({
  selector: 'chichi-audiosettings',
  templateUrl: './chichi.audiosettings.html',
  styleUrls: ['./chichi.audiosettings.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AudioSettingsComponent {
    audioSettings: AudioSettings ;

    constructor(public wishbone: WishboneMachine, public worker: WishboneWorker ) {
        this.audioSettings = this.wishbone.SoundBopper.audioSettings;
    }
}
