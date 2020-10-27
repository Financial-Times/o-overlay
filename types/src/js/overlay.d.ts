export default Overlay;
/**
 * Represents an Overlay.
 */
declare class Overlay {
    static init(el: any): Overlay[];
    static destroy(): void;
    static getOverlays(): {};
    /**
     * Construct an overlay.
     * @constructor
     * @param {HTMLElement} id - String. A unique identifier for the overlay within the page. (Required)
     * @param {Object} opts - An options object for configuring the Overlay. This object MUST have either `src` or `html` set. (Required)
     * @param {String} opts.heading.title - Your overlay's title
     * @param {Boolean} opts.heading.visuallyhidetitle - If you want to provide a different title style, this option will prevent the title span from being added to the overlay. (In this case the title is only used for aria labelling) Default: false.
     * @param {Boolean} opts.heading.shaded - Whether to shade the background of the header. Default: to false
     * @param {Boolean} opts.modal - Whether the overlay should have modal behaviour or not. Setting this as true will add a translucent shadow between the page and the overlay
     * @param {Boolean} opts.compact - If true, the .o-overlay--compact class will be added to the overlay that reduces heading font-size and paddings in the content.
     * @param {String} opts.src - Either a url from which HTML to populate the overlay can be loaded, or a querySelector string identifying an element from which the textContent should be extracted.
     * @param {String} opts.html - String or HTMLElement. Raw HTML (cannot be set declaratively)
     * @param {String} opts.trigger - querySelector expression or HTMLElement. When there's a trigger set, a click event handler will be added to it that will open or close the overlay accordingly. (cannot be set declaratively)
     * @param {String} opts.zindex - Value of the CSS z-index property of the overlay. Default set via CSS: '10'
     * @param {Boolean} opts.preventclosing - Prevents closure of overlay via standard x button or escape key. For use when you are directing the user to somewhere else. Only valid with modal set to true.
     * @param {Boolean} opts.customclose - If you do not use the heading, but want to provide a close button in your html / src (with a class of o-overlay__close), setting customclose to true will attach o-overlay's close handler function to that button.
     * @param {String} opts.parentnode - Should be a query selector for a DOM element. If set, the overlay will be appended as a child of this rather than the document body or target. If multiple nodes are matched, it will use the first. If nothing matches this selector, the body will be used.
     * @param {Boolean} opts.nested - If set to true, the resize, escape, and layer listeners will not be set up. This boolean should be used in conjunction with the parentnode setting to allow an overlay to be positioned within a DOM element rather than overlaid on top of everything. Default: false.
     * @param {Boolean} opts.nofocus - If set to true, the tabindex will not be set on the wrapper element. Useful in conjunction with the nested and parentnode options. Default: false.
     * @param {Boolean} opts.fullscreen - If set to true, the overlay will display full screen. This overlay disables scroll on the underlying document and is dismissible with the back button.
     * @throws {Error} Will throw an error if the `id` parameter is not unique.
    */
    constructor(id: HTMLElement, opts: any);
    visible: boolean;
    id: HTMLElement;
    opts: any;
    context: any;
    delegates: {
        doc: any;
        wrap: any;
        context: any;
    };
    open(): void;
    originalOverflow: string;
    popstateHandler: any;
    loadContent(callback: any): void;
    render(): void;
    wrapper: HTMLDivElement;
    content: HTMLElement;
    _trapFocus(): void;
    show(): void;
    shadow: HTMLDivElement;
    closeHandler: any;
    resizeListenerHandler: any;
    closeOnEscapePressHandler: any;
    closeOnNewLayerHandler: any;
    closeOnExternalClickHandler: any;
    close(): boolean;
    closeOnExternalClick(ev: any): void;
    closeOnEscapePress(ev: any): void;
    closeOnNewLayer(ev: any): void;
    resizeListener(ev: any): void;
    broadcast(eventType: any, namespace: any, detail: any): void;
    realign(dimension: any, size: any): void;
    _align(dimension: any, size: any): void;
    width: number;
    height: number;
    respondToWindow(): void;
    fills(dimension: any): boolean;
    destroy(): void;
    getHeight(): number;
    getWidth(): number;
}
