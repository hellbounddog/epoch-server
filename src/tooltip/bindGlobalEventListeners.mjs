import {TOUCH_OPTIONS} from '../tooltip.mjs';
import {isReferenceElement} from '../dom-utils.mjs';

export const currentInput = {isTouch: false};
let lastMouseMoveTime = 0;

/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 * @return void
 */
export function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}

/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 * @return void
 */
export function onDocumentMouseMove() {
  const now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;

    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}

/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * @todo find a better technique to solve this problem
 * @return void
 */
export function onWindowBlur() {
  const activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    const instance = activeElement.tooltip;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}

// @return void
export default function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}
