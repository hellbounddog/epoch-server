// @todo import
import {getOwnerDocument, isMouseEvent} from '../dom-utils.mjs';

let mouseCoords = {clientX: 0, clientY: 0};
let activeInstances = [];

// @return void
function storeMouseCoords(clientX, clientY) {
  mouseCoords = {clientX, clientY};
}

// @return void
function addMouseCoordsListener(doc) {
  doc.addEventListener('mousemove', storeMouseCoords);
}

// @return void
function removeMouseCoordsListener(doc) {
  doc.removeEventListener('mousemove', storeMouseCoords);
}

const followCursor = {
  name: 'followCursor',
  defaultValue: true,
  fn(instance) {
    const reference = instance.reference;
    const doc = getOwnerDocument(instance.props.triggerTarget || reference);

    let isInternalUpdate = false;
    let wasFocusEvent = false;
    let isUnmounted = true;
    let prevProps = instance.props;

    // @return boolean
    function getIsInitialBehavior() {
      return (
        instance.props.followCursor === 'initial' && instance.state.isVisible
      );
    }

    // @return void
    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    // @return void
    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    // @return void
    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({getReferenceClientRect: null});
      isInternalUpdate = false;
    }

    // @return void
    // @param {MouseEvent} event
    function onMouseMove(event) {
      // If the instance is interactive, avoid updating the position unless it's
      // over the reference element
      const isCursorOverReference = event.target
        ? reference.contains(event.target)
        : true;
      const {followCursor} = instance.props;
      const {clientX, clientY} = event;

      const rect = reference.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          getReferenceClientRect() {
            const rect = reference.getBoundingClientRect();

            let x = clientX;
            let y = clientY;

            if (followCursor === 'initial') {
              x = rect.left + relativeX;
              y = rect.top + relativeY;
            }

            const top = followCursor === 'horizontal' ? rect.top : y;
            const right = followCursor === 'vertical' ? rect.right : x;
            const bottom = followCursor === 'horizontal' ? rect.bottom : y;
            const left = followCursor === 'vertical' ? rect.left : x;

            return {
              width: right - left,
              height: bottom - top,
              top,
              right,
              bottom,
              left,
            };
          },
        });
      }
    }

    // @return void
    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({instance, doc});
        addMouseCoordsListener(doc);
      }
    }

    // @return void
    function destroy() {
      activeInstances = activeInstances.filter(
        (data) => data.instance !== instance
      );

      if (activeInstances.filter((data) => data.doc === doc).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }

    return {
      onCreate: create,
      onDestroy: destroy,
      // @return void
      onBeforeUpdate() {
        prevProps = instance.props;
      },
      // @return void
      onAfterUpdate(_, followCursor) {
        if (isInternalUpdate) {
          return;
        }

        if (
          followCursor !== undefined &&
          prevProps.followCursor !== followCursor
        ) {
          destroy();

          if (followCursor) {
            create();

            if (
              instance.state.isMounted &&
              !wasFocusEvent &&
              !getIsInitialBehavior()
            ) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      // @return void
      onMount() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }

          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      // @return void
      onTrigger(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {clientX: event.clientX, clientY: event.clientY};
        }
        wasFocusEvent = event.type === 'focus';
      },
      // @return void
      onHidden() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      },
    };
  },
};

export default followCursor;
