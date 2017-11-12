import { BaseCart, IBaseCart } from '../chichicarts/BaseCart';
import { ChiChiSprite, PpuStatus } from './ChiChiTypes';
import { ChiChiCPPU } from "./ChiChiMachine";
import { ChiChiBopper } from "./ChiChiAudio";
export declare class ChiChiMemMap {
    cpu: ChiChiCPPU;
    ppu: ChiChiPPU;
    apu: ChiChiBopper;
    cart: BaseCart;
    getByte(address: number): number;
    setByte(address: number, data: number): void;
}
export declare class ChiChiPPU {
    static pal: Uint32Array;
    LastcpuClock: number;
    NMIHandler: () => void;
    frameFinished: () => void;
    cpu: ChiChiCPPU;
    greyScale: boolean;
    constructor();
    chrRomHandler: IBaseCart;
    private yPosition;
    private xPosition;
    private vbufLocation;
    private currentAttributeByte;
    private spriteSize;
    private spritesOnThisScanline;
    private currentSprites;
    private _spriteCopyHasHappened;
    private spriteZeroHit;
    unpackedSprites: ChiChiSprite[];
    private isForegroundPixel;
    private spriteChanges;
    private ppuReadBuffer;
    private _clipSprites;
    private _clipTiles;
    private _tilesAreVisible;
    private _spritesAreVisible;
    private nameTableMemoryStart;
    backgroundPatternTableIndex: number;
    private _PPUAddress;
    private _PPUStatus;
    _PPUControlByte0: number;
    _PPUControlByte1: number;
    private _spriteAddress;
    private currentXPosition;
    private currentYPosition;
    private _hScroll;
    private _vScroll;
    private lockedHScroll;
    private lockedVScroll;
    private shouldRender;
    private _frames;
    private hitSprite;
    private PPUAddressLatchIsHigh;
    private p32;
    private isRendering;
    frameClock: number;
    FrameEnded: boolean;
    private frameOn;
    private nameTableBits;
    private vidRamIsRam;
    _palette: Uint8Array;
    private _openBus;
    private sprite0scanline;
    private sprite0x;
    private _maxSpritesPerScanline;
    private xNTXor;
    private yNTXor;
    private spriteRAMBuffer;
    spriteRAM: Uint8Array;
    private spritesOnLine;
    private currentTileIndex;
    private fetchTile;
    private patternEntry;
    private patternEntryByte2;
    byteOutBuffer: Uint8Array;
    ChrRomHandler: IBaseCart;
    PPU_IRQAsserted: boolean;
    readonly NextEventAt: number;
    PPU_SpriteCopyHasHappened: boolean;
    PPU_MaxSpritesPerScanline: number;
    PPU_SpriteRam: number[];
    SpritesOnLine: number[];
    GetPPUStatus(): PpuStatus;
    PPU_FrameFinishHandler: () => void;
    PPU_NameTableMemoryStart: number;
    readonly PatternTableIndex: number;
    readonly SpritePatternTableIndex: number;
    Initialize(): void;
    WriteState(writer: any): void;
    ReadState(state: any): void;
    readonly NMIIsThrown: boolean;
    SetupVINT(): void;
    VidRAM_GetNTByte(address: number): number;
    UpdatePPUControlByte0(): void;
    SetByte(Clock: number, address: number, data: number): void;
    GetByte(Clock: number, address: number): number;
    copySprites(copyFrom: number): void;
    initSprites(): void;
    getSpritePixel(): number;
    decodeSpritePixel(patternTableIndex: number, x: number, y: number, sprite: {
        v: ChiChiSprite;
    }, tileIndex: number): number;
    preloadSprites(scanline: number): void;
    UnpackSprites(): void;
    UnpackSprite(currSprite: number): void;
    GetNameTablePixel(): number;
    FetchNextTile(): void;
    GetAttributeTableEntry(ppuNameTableMemoryStart: number, i: number, j: number): number;
    oddFrame: boolean;
    advanceClock(ticks: number): void;
    UpdatePixelInfo(): void;
}
