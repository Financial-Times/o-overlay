var noop = function (){};

module.exports = {
    src: undefined,
    srcType: 'selector',
    outerClasses: '',
    innerClasses: '',
    preset: 'modal',
    isDismissable: true, //
    isAnchoredToTrigger: false, //
    verticalAnchorSide: null,
    horizontalAnchorSide: null,
    headingSelector: '.o-dialog__heading',
    bodySelector: '.o-dialog__body',
    hasHeading: false,
    hasOverlay: false, //
    hasCloseButton: false, //
    isCenteredVertically: true, //
    isCenteredHorizontally: true, //
    snapsToFullHeight: true, //
    snapsToFullWidth: true, //
    onTrigger: noop,
    onFail: noop,
    onBeforeRender: noop,
    onAfterRender: noop,
    onBeforeResize: noop,
    onAfterResize: noop,
    onBeforeClose: noop,
    onAfterClose: noop
};