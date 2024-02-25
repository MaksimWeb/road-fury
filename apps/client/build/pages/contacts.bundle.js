/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/node-domexception/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/node-domexception/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

if (!globalThis.DOMException) {
  try {
    const { MessageChannel } = __webpack_require__(/*! worker_threads */ "worker_threads"),
    port = new MessageChannel().port1,
    ab = new ArrayBuffer()
    port.postMessage(ab, [ab, ab])
  } catch (err) {
    err.constructor.name === 'DOMException' && (
      globalThis.DOMException = err.constructor
    )
  }
}

module.exports = globalThis.DOMException


/***/ }),

/***/ "../../node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "../../node_modules/react/jsx-runtime.js":
/*!***********************************************!*\
  !*** ../../node_modules/react/jsx-runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "../../node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "../../node_modules/web-streams-polyfill/dist/ponyfill.es2018.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/web-streams-polyfill/dist/ponyfill.es2018.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    function noop() {
        return undefined;
    }

    function typeIsObject(x) {
        return (typeof x === 'object' && x !== null) || typeof x === 'function';
    }
    const rethrowAssertionErrorRejection = noop;
    function setFunctionName(fn, name) {
        try {
            Object.defineProperty(fn, 'name', {
                value: name,
                configurable: true
            });
        }
        catch (_a) {
            // This property is non-configurable in older browsers, so ignore if this throws.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
        }
    }

    const originalPromise = Promise;
    const originalPromiseThen = Promise.prototype.then;
    const originalPromiseReject = Promise.reject.bind(originalPromise);
    // https://webidl.spec.whatwg.org/#a-new-promise
    function newPromise(executor) {
        return new originalPromise(executor);
    }
    // https://webidl.spec.whatwg.org/#a-promise-resolved-with
    function promiseResolvedWith(value) {
        return newPromise(resolve => resolve(value));
    }
    // https://webidl.spec.whatwg.org/#a-promise-rejected-with
    function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
    }
    function PerformPromiseThen(promise, onFulfilled, onRejected) {
        // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
        // approximation.
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
    }
    // Bluebird logs a warning when a promise is created within a fulfillment handler, but then isn't returned
    // from that handler. To prevent this, return null instead of void from all handlers.
    // http://bluebirdjs.com/docs/warning-explanations.html#warning-a-promise-was-created-in-a-handler-but-was-not-returned-from-it
    function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
    }
    function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
    }
    function uponRejection(promise, onRejected) {
        uponPromise(promise, undefined, onRejected);
    }
    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
    }
    function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
    }
    let _queueMicrotask = callback => {
        if (typeof queueMicrotask === 'function') {
            _queueMicrotask = queueMicrotask;
        }
        else {
            const resolvedPromise = promiseResolvedWith(undefined);
            _queueMicrotask = cb => PerformPromiseThen(resolvedPromise, cb);
        }
        return _queueMicrotask(callback);
    };
    function reflectCall(F, V, args) {
        if (typeof F !== 'function') {
            throw new TypeError('Argument is not a function');
        }
        return Function.prototype.apply.call(F, V, args);
    }
    function promiseCall(F, V, args) {
        try {
            return promiseResolvedWith(reflectCall(F, V, args));
        }
        catch (value) {
            return promiseRejectedWith(value);
        }
    }

    // Original from Chromium
    // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
    const QUEUE_MAX_ARRAY_SIZE = 16384;
    /**
     * Simple queue structure.
     *
     * Avoids scalability issues with using a packed array directly by using
     * multiple arrays in a linked list and keeping the array size bounded.
     */
    class SimpleQueue {
        constructor() {
            this._cursor = 0;
            this._size = 0;
            // _front and _back are always defined.
            this._front = {
                _elements: [],
                _next: undefined
            };
            this._back = this._front;
            // The cursor is used to avoid calling Array.shift().
            // It contains the index of the front element of the array inside the
            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
            this._cursor = 0;
            // When there is only one node, size === elements.length - cursor.
            this._size = 0;
        }
        get length() {
            return this._size;
        }
        // For exception safety, this method is structured in order:
        // 1. Read state
        // 2. Calculate required state mutations
        // 3. Perform state mutations
        push(element) {
            const oldBack = this._back;
            let newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
                newBack = {
                    _elements: [],
                    _next: undefined
                };
            }
            // push() is the mutation most likely to throw an exception, so it
            // goes first.
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
                this._back = newBack;
                oldBack._next = newBack;
            }
            ++this._size;
        }
        // Like push(), shift() follows the read -> calculate -> mutate pattern for
        // exception safety.
        shift() { // must not be called on an empty queue
            const oldFront = this._front;
            let newFront = oldFront;
            const oldCursor = this._cursor;
            let newCursor = oldCursor + 1;
            const elements = oldFront._elements;
            const element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
                newFront = oldFront._next;
                newCursor = 0;
            }
            // No mutations before this point.
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) {
                this._front = newFront;
            }
            // Permit shifted element to be garbage collected.
            elements[oldCursor] = undefined;
            return element;
        }
        // The tricky thing about forEach() is that it can be called
        // re-entrantly. The queue may be mutated inside the callback. It is easy to
        // see that push() within the callback has no negative effects since the end
        // of the queue is checked for on every iteration. If shift() is called
        // repeatedly within the callback then the next iteration may return an
        // element that has been removed. In this case the callback will be called
        // with undefined values until we either "catch up" with elements that still
        // exist or reach the back of the queue.
        forEach(callback) {
            let i = this._cursor;
            let node = this._front;
            let elements = node._elements;
            while (i !== elements.length || node._next !== undefined) {
                if (i === elements.length) {
                    node = node._next;
                    elements = node._elements;
                    i = 0;
                    if (elements.length === 0) {
                        break;
                    }
                }
                callback(elements[i]);
                ++i;
            }
        }
        // Return the element that would be returned if shift() was called now,
        // without modifying the queue.
        peek() { // must not be called on an empty queue
            const front = this._front;
            const cursor = this._cursor;
            return front._elements[cursor];
        }
    }

    const AbortSteps = Symbol('[[AbortSteps]]');
    const ErrorSteps = Symbol('[[ErrorSteps]]');
    const CancelSteps = Symbol('[[CancelSteps]]');
    const PullSteps = Symbol('[[PullSteps]]');
    const ReleaseSteps = Symbol('[[ReleaseSteps]]');

    function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === 'readable') {
            defaultReaderClosedPromiseInitialize(reader);
        }
        else if (stream._state === 'closed') {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
        }
        else {
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
        }
    }
    // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
    // check.
    function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
    }
    function ReadableStreamReaderGenericRelease(reader) {
        const stream = reader._ownerReadableStream;
        if (stream._state === 'readable') {
            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        stream._readableStreamController[ReleaseSteps]();
        stream._reader = undefined;
        reader._ownerReadableStream = undefined;
    }
    // Helper functions for the readers.
    function readerLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released reader');
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
            reader._closedPromise_resolve = resolve;
            reader._closedPromise_reject = reject;
        });
    }
    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
    }
    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
    }
    function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }
    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
    }
    function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === undefined) {
            return;
        }
        reader._closedPromise_resolve(undefined);
        reader._closedPromise_resolve = undefined;
        reader._closedPromise_reject = undefined;
    }

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
    const NumberIsFinite = Number.isFinite || function (x) {
        return typeof x === 'number' && isFinite(x);
    };

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
    const MathTrunc = Math.trunc || function (v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
    };

    // https://heycam.github.io/webidl/#idl-dictionaries
    function isDictionary(x) {
        return typeof x === 'object' || typeof x === 'function';
    }
    function assertDictionary(obj, context) {
        if (obj !== undefined && !isDictionary(obj)) {
            throw new TypeError(`${context} is not an object.`);
        }
    }
    // https://heycam.github.io/webidl/#idl-callback-functions
    function assertFunction(x, context) {
        if (typeof x !== 'function') {
            throw new TypeError(`${context} is not a function.`);
        }
    }
    // https://heycam.github.io/webidl/#idl-object
    function isObject(x) {
        return (typeof x === 'object' && x !== null) || typeof x === 'function';
    }
    function assertObject(x, context) {
        if (!isObject(x)) {
            throw new TypeError(`${context} is not an object.`);
        }
    }
    function assertRequiredArgument(x, position, context) {
        if (x === undefined) {
            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
        }
    }
    function assertRequiredField(x, field, context) {
        if (x === undefined) {
            throw new TypeError(`${field} is required in '${context}'.`);
        }
    }
    // https://heycam.github.io/webidl/#idl-unrestricted-double
    function convertUnrestrictedDouble(value) {
        return Number(value);
    }
    function censorNegativeZero(x) {
        return x === 0 ? 0 : x;
    }
    function integerPart(x) {
        return censorNegativeZero(MathTrunc(x));
    }
    // https://heycam.github.io/webidl/#idl-unsigned-long-long
    function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x = Number(value);
        x = censorNegativeZero(x);
        if (!NumberIsFinite(x)) {
            throw new TypeError(`${context} is not a finite number`);
        }
        x = integerPart(x);
        if (x < lowerBound || x > upperBound) {
            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        }
        if (!NumberIsFinite(x) || x === 0) {
            return 0;
        }
        // TODO Use BigInt if supported?
        // let xBigInt = BigInt(integerPart(x));
        // xBigInt = BigInt.asUintN(64, xBigInt);
        // return Number(xBigInt);
        return x;
    }

    function assertReadableStream(x, context) {
        if (!IsReadableStream(x)) {
            throw new TypeError(`${context} is not a ReadableStream.`);
        }
    }

    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
    }
    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
            readRequest._closeSteps();
        }
        else {
            readRequest._chunkSteps(chunk);
        }
    }
    function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
    }
    function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === undefined) {
            return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
            return false;
        }
        return true;
    }
    /**
     * A default reader vended by a {@link ReadableStream}.
     *
     * @public
     */
    class ReadableStreamDefaultReader {
        constructor(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed,
         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
         */
        get closed() {
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
            }
            return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(reason = undefined) {
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('cancel'));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
        }
        /**
         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        read() {
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('read'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('read from'));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readRequest = {
                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
                _closeSteps: () => resolvePromise({ value: undefined, done: true }),
                _errorSteps: e => rejectPromise(e)
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) {
                throw defaultReaderBrandCheckException('releaseLock');
            }
            if (this._ownerReadableStream === undefined) {
                return;
            }
            ReadableStreamDefaultReaderRelease(this);
        }
    }
    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
    });
    setFunctionName(ReadableStreamDefaultReader.prototype.cancel, 'cancel');
    setFunctionName(ReadableStreamDefaultReader.prototype.read, 'read');
    setFunctionName(ReadableStreamDefaultReader.prototype.releaseLock, 'releaseLock');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamDefaultReader.prototype, Symbol.toStringTag, {
            value: 'ReadableStreamDefaultReader',
            configurable: true
        });
    }
    // Abstract operations for the readers.
    function IsReadableStreamDefaultReader(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
            return false;
        }
        return x instanceof ReadableStreamDefaultReader;
    }
    function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'closed') {
            readRequest._closeSteps();
        }
        else if (stream._state === 'errored') {
            readRequest._errorSteps(stream._storedError);
        }
        else {
            stream._readableStreamController[PullSteps](readRequest);
        }
    }
    function ReadableStreamDefaultReaderRelease(reader) {
        ReadableStreamReaderGenericRelease(reader);
        const e = new TypeError('Reader was released');
        ReadableStreamDefaultReaderErrorReadRequests(reader, e);
    }
    function ReadableStreamDefaultReaderErrorReadRequests(reader, e) {
        const readRequests = reader._readRequests;
        reader._readRequests = new SimpleQueue();
        readRequests.forEach(readRequest => {
            readRequest._errorSteps(e);
        });
    }
    // Helper functions for the ReadableStreamDefaultReader.
    function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
    }

    /// <reference lib="es2018.asynciterable" />
    /* eslint-disable @typescript-eslint/no-empty-function */
    const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () { }).prototype);

    /// <reference lib="es2018.asynciterable" />
    class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
            this._ongoingPromise = undefined;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
        }
        next() {
            const nextSteps = () => this._nextSteps();
            this._ongoingPromise = this._ongoingPromise ?
                transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
                nextSteps();
            return this._ongoingPromise;
        }
        return(value) {
            const returnSteps = () => this._returnSteps(value);
            return this._ongoingPromise ?
                transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
                returnSteps();
        }
        _nextSteps() {
            if (this._isFinished) {
                return Promise.resolve({ value: undefined, done: true });
            }
            const reader = this._reader;
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readRequest = {
                _chunkSteps: chunk => {
                    this._ongoingPromise = undefined;
                    // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                    // FIXME Is this a bug in the specification, or in the test?
                    _queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
                },
                _closeSteps: () => {
                    this._ongoingPromise = undefined;
                    this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    resolvePromise({ value: undefined, done: true });
                },
                _errorSteps: reason => {
                    this._ongoingPromise = undefined;
                    this._isFinished = true;
                    ReadableStreamReaderGenericRelease(reader);
                    rejectPromise(reason);
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
        }
        _returnSteps(value) {
            if (this._isFinished) {
                return Promise.resolve({ value, done: true });
            }
            this._isFinished = true;
            const reader = this._reader;
            if (!this._preventCancel) {
                const result = ReadableStreamReaderGenericCancel(reader, value);
                ReadableStreamReaderGenericRelease(reader);
                return transformPromiseWith(result, () => ({ value, done: true }));
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({ value, done: true });
        }
    }
    const ReadableStreamAsyncIteratorPrototype = {
        next() {
            if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
            }
            return this._asyncIteratorImpl.next();
        },
        return(value) {
            if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
            }
            return this._asyncIteratorImpl.return(value);
        }
    };
    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
    }
    function IsReadableStreamAsyncIterator(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
            return false;
        }
        try {
            // noinspection SuspiciousTypeOfGuard
            return x._asyncIteratorImpl instanceof
                ReadableStreamAsyncIteratorImpl;
        }
        catch (_a) {
            return false;
        }
    }
    // Helper functions for the ReadableStream.
    function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
    }

    /// <reference lib="es2015.core" />
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
    const NumberIsNaN = Number.isNaN || function (x) {
        // eslint-disable-next-line no-self-compare
        return x !== x;
    };

    var _a, _b, _c;
    function CreateArrayFromList(elements) {
        // We use arrays to represent lists, so this is basically a no-op.
        // Do a slice though just in case we happen to depend on the unique-ness.
        return elements.slice();
    }
    function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
    }
    let TransferArrayBuffer = (O) => {
        if (typeof O.transfer === 'function') {
            TransferArrayBuffer = buffer => buffer.transfer();
        }
        else if (typeof structuredClone === 'function') {
            TransferArrayBuffer = buffer => structuredClone(buffer, { transfer: [buffer] });
        }
        else {
            // Not implemented correctly
            TransferArrayBuffer = buffer => buffer;
        }
        return TransferArrayBuffer(O);
    };
    let IsDetachedBuffer = (O) => {
        if (typeof O.detached === 'boolean') {
            IsDetachedBuffer = buffer => buffer.detached;
        }
        else {
            // Not implemented correctly
            IsDetachedBuffer = buffer => buffer.byteLength === 0;
        }
        return IsDetachedBuffer(O);
    };
    function ArrayBufferSlice(buffer, begin, end) {
        // ArrayBuffer.prototype.slice is not available on IE10
        // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
        if (buffer.slice) {
            return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
    }
    function GetMethod(receiver, prop) {
        const func = receiver[prop];
        if (func === undefined || func === null) {
            return undefined;
        }
        if (typeof func !== 'function') {
            throw new TypeError(`${String(prop)} is not a function`);
        }
        return func;
    }
    function CreateAsyncFromSyncIterator(syncIteratorRecord) {
        // Instead of re-implementing CreateAsyncFromSyncIterator and %AsyncFromSyncIteratorPrototype%,
        // we use yield* inside an async generator function to achieve the same result.
        // Wrap the sync iterator inside a sync iterable, so we can use it with yield*.
        const syncIterable = {
            [Symbol.iterator]: () => syncIteratorRecord.iterator
        };
        // Create an async generator function and immediately invoke it.
        const asyncIterator = (async function* () {
            return yield* syncIterable;
        }());
        // Return as an async iterator record.
        const nextMethod = asyncIterator.next;
        return { iterator: asyncIterator, nextMethod, done: false };
    }
    // Aligns with core-js/modules/es.symbol.async-iterator.js
    const SymbolAsyncIterator = (_c = (_a = Symbol.asyncIterator) !== null && _a !== void 0 ? _a : (_b = Symbol.for) === null || _b === void 0 ? void 0 : _b.call(Symbol, 'Symbol.asyncIterator')) !== null && _c !== void 0 ? _c : '@@asyncIterator';
    function GetIterator(obj, hint = 'sync', method) {
        if (method === undefined) {
            if (hint === 'async') {
                method = GetMethod(obj, SymbolAsyncIterator);
                if (method === undefined) {
                    const syncMethod = GetMethod(obj, Symbol.iterator);
                    const syncIteratorRecord = GetIterator(obj, 'sync', syncMethod);
                    return CreateAsyncFromSyncIterator(syncIteratorRecord);
                }
            }
            else {
                method = GetMethod(obj, Symbol.iterator);
            }
        }
        if (method === undefined) {
            throw new TypeError('The object is not iterable');
        }
        const iterator = reflectCall(method, obj, []);
        if (!typeIsObject(iterator)) {
            throw new TypeError('The iterator method must return an object');
        }
        const nextMethod = iterator.next;
        return { iterator, nextMethod, done: false };
    }
    function IteratorNext(iteratorRecord) {
        const result = reflectCall(iteratorRecord.nextMethod, iteratorRecord.iterator, []);
        if (!typeIsObject(result)) {
            throw new TypeError('The iterator.next() method must return an object');
        }
        return result;
    }
    function IteratorComplete(iterResult) {
        return Boolean(iterResult.done);
    }
    function IteratorValue(iterResult) {
        return iterResult.value;
    }

    function IsNonNegativeNumber(v) {
        if (typeof v !== 'number') {
            return false;
        }
        if (NumberIsNaN(v)) {
            return false;
        }
        if (v < 0) {
            return false;
        }
        return true;
    }
    function CloneAsUint8Array(O) {
        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
        return new Uint8Array(buffer);
    }

    function DequeueValue(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
        }
        return pair.value;
    }
    function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) {
            throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
        }
        container._queue.push({ value, size });
        container._queueTotalSize += size;
    }
    function PeekQueueValue(container) {
        const pair = container._queue.peek();
        return pair.value;
    }
    function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
    }

    function isDataViewConstructor(ctor) {
        return ctor === DataView;
    }
    function isDataView(view) {
        return isDataViewConstructor(view.constructor);
    }
    function arrayBufferViewElementSize(ctor) {
        if (isDataViewConstructor(ctor)) {
            return 1;
        }
        return ctor.BYTES_PER_ELEMENT;
    }

    /**
     * A pull-into request in a {@link ReadableByteStreamController}.
     *
     * @public
     */
    class ReadableStreamBYOBRequest {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
         */
        get view() {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('view');
            }
            return this._view;
        }
        respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('respond');
            }
            assertRequiredArgument(bytesWritten, 1, 'respond');
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
            if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
            }
            if (IsDetachedBuffer(this._view.buffer)) {
                throw new TypeError(`The BYOB request's buffer has been detached and so cannot be used as a response`);
            }
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('respondWithNewView');
            }
            assertRequiredArgument(view, 1, 'respondWithNewView');
            if (!ArrayBuffer.isView(view)) {
                throw new TypeError('You can only respond with array buffer views');
            }
            if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
            }
            if (IsDetachedBuffer(view.buffer)) {
                throw new TypeError('The given view\'s buffer has been detached and so cannot be used as a response');
            }
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
    }
    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
    });
    setFunctionName(ReadableStreamBYOBRequest.prototype.respond, 'respond');
    setFunctionName(ReadableStreamBYOBRequest.prototype.respondWithNewView, 'respondWithNewView');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, Symbol.toStringTag, {
            value: 'ReadableStreamBYOBRequest',
            configurable: true
        });
    }
    /**
     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
     *
     * @public
     */
    class ReadableByteStreamController {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the current BYOB pull request, or `null` if there isn't one.
         */
        get byobRequest() {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('byobRequest');
            }
            return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('desiredSize');
            }
            return ReadableByteStreamControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('close');
            }
            if (this._closeRequested) {
                throw new TypeError('The stream has already been closed; do not close it again!');
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
            }
            ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('enqueue');
            }
            assertRequiredArgument(chunk, 1, 'enqueue');
            if (!ArrayBuffer.isView(chunk)) {
                throw new TypeError('chunk must be an array buffer view');
            }
            if (chunk.byteLength === 0) {
                throw new TypeError('chunk must have non-zero byteLength');
            }
            if (chunk.buffer.byteLength === 0) {
                throw new TypeError(`chunk's buffer must have non-zero byteLength`);
            }
            if (this._closeRequested) {
                throw new TypeError('stream is closed or draining');
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
            }
            ReadableByteStreamControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(e = undefined) {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('error');
            }
            ReadableByteStreamControllerError(this, e);
        }
        /** @internal */
        [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this);
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */
        [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
                ReadableByteStreamControllerFillReadRequestFromQueue(this, readRequest);
                return;
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== undefined) {
                let buffer;
                try {
                    buffer = new ArrayBuffer(autoAllocateChunkSize);
                }
                catch (bufferE) {
                    readRequest._errorSteps(bufferE);
                    return;
                }
                const pullIntoDescriptor = {
                    buffer,
                    bufferByteLength: autoAllocateChunkSize,
                    byteOffset: 0,
                    byteLength: autoAllocateChunkSize,
                    bytesFilled: 0,
                    minimumFill: 1,
                    elementSize: 1,
                    viewConstructor: Uint8Array,
                    readerType: 'default'
                };
                this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
        }
        /** @internal */
        [ReleaseSteps]() {
            if (this._pendingPullIntos.length > 0) {
                const firstPullInto = this._pendingPullIntos.peek();
                firstPullInto.readerType = 'none';
                this._pendingPullIntos = new SimpleQueue();
                this._pendingPullIntos.push(firstPullInto);
            }
        }
    }
    Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    setFunctionName(ReadableByteStreamController.prototype.close, 'close');
    setFunctionName(ReadableByteStreamController.prototype.enqueue, 'enqueue');
    setFunctionName(ReadableByteStreamController.prototype.error, 'error');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableByteStreamController.prototype, Symbol.toStringTag, {
            value: 'ReadableByteStreamController',
            configurable: true
        });
    }
    // Abstract operations for the ReadableByteStreamController.
    function IsReadableByteStreamController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
            return false;
        }
        return x instanceof ReadableByteStreamController;
    }
    function IsReadableStreamBYOBRequest(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
            return false;
        }
        return x instanceof ReadableStreamBYOBRequest;
    }
    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
            return;
        }
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        // TODO: Test controller argument
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
            return null;
        }, e => {
            ReadableByteStreamControllerError(controller, e);
            return null;
        });
    }
    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
    }
    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === 'closed') {
            done = true;
        }
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === 'default') {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
        }
        else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
    }
    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
    }
    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
    }
    function ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, buffer, byteOffset, byteLength) {
        let clonedChunk;
        try {
            clonedChunk = ArrayBufferSlice(buffer, byteOffset, byteOffset + byteLength);
        }
        catch (cloneE) {
            ReadableByteStreamControllerError(controller, cloneE);
            throw cloneE;
        }
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, clonedChunk, 0, byteLength);
    }
    function ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstDescriptor) {
        if (firstDescriptor.bytesFilled > 0) {
            ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, firstDescriptor.buffer, firstDescriptor.byteOffset, firstDescriptor.bytesFilled);
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
    }
    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        const remainderBytes = maxBytesFilled % pullIntoDescriptor.elementSize;
        const maxAlignedBytes = maxBytesFilled - remainderBytes;
        // A descriptor for a read() request that is not yet filled up to its minimum length will stay at the head
        // of the queue, so the underlying source can keep filling it.
        if (maxAlignedBytes >= pullIntoDescriptor.minimumFill) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue.peek();
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
                queue.shift();
            }
            else {
                headOfQueue.byteOffset += bytesToCopy;
                headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
    }
    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
    }
    function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
        }
        else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
    }
    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
            return;
        }
        controller._byobRequest._associatedReadableByteStreamController = undefined;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
    }
    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
                return;
            }
            const pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
        }
    }
    function ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller) {
        const reader = controller._controlledReadableByteStream._reader;
        while (reader._readRequests.length > 0) {
            if (controller._queueTotalSize === 0) {
                return;
            }
            const readRequest = reader._readRequests.shift();
            ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest);
        }
    }
    function ReadableByteStreamControllerPullInto(controller, view, min, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        const ctor = view.constructor;
        const elementSize = arrayBufferViewElementSize(ctor);
        const { byteOffset, byteLength } = view;
        const minimumFill = min * elementSize;
        let buffer;
        try {
            buffer = TransferArrayBuffer(view.buffer);
        }
        catch (e) {
            readIntoRequest._errorSteps(e);
            return;
        }
        const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset,
            byteLength,
            bytesFilled: 0,
            minimumFill,
            elementSize,
            viewConstructor: ctor,
            readerType: 'byob'
        };
        if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
            // - No change happens on desiredSize
            // - The source has already been notified of that there's at least 1 pending read(view)
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
        }
        if (stream._state === 'closed') {
            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
        }
        if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                ReadableByteStreamControllerHandleQueueDrain(controller);
                readIntoRequest._chunkSteps(filledView);
                return;
            }
            if (controller._closeRequested) {
                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                readIntoRequest._errorSteps(e);
                return;
            }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        if (firstDescriptor.readerType === 'none') {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
        }
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
        }
    }
    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === 'none') {
            ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, pullIntoDescriptor);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
            return;
        }
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.minimumFill) {
            // A descriptor for a read() request that is not yet filled up to its minimum length will stay at the head
            // of the queue, so the underlying source can keep filling it.
            return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, pullIntoDescriptor.buffer, end - remainderSize, remainderSize);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
        }
        else {
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
    }
    function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') {
            return false;
        }
        if (controller._closeRequested) {
            return false;
        }
        if (!controller._started) {
            return false;
        }
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
        }
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
        }
        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
            return true;
        }
        return false;
    }
    function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
    }
    // A client of ReadableByteStreamController may use these functions directly to bypass state check.
    function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') {
            return;
        }
        if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
        }
        if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled % firstPendingPullInto.elementSize !== 0) {
                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                ReadableByteStreamControllerError(controller, e);
                throw e;
            }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
    function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== 'readable') {
            return;
        }
        const { buffer, byteOffset, byteLength } = chunk;
        if (IsDetachedBuffer(buffer)) {
            throw new TypeError('chunk\'s buffer is detached and so cannot be enqueued');
        }
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (IsDetachedBuffer(firstPendingPullInto.buffer)) {
                throw new TypeError('The BYOB request\'s buffer has been detached and so cannot be filled with an enqueued chunk');
            }
            ReadableByteStreamControllerInvalidateBYOBRequest(controller);
            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
            if (firstPendingPullInto.readerType === 'none') {
                ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstPendingPullInto);
            }
        }
        if (ReadableStreamHasDefaultReader(stream)) {
            ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller);
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
                ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            }
            else {
                if (controller._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerShiftPendingPullInto(controller);
                }
                const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
        }
        else if (ReadableStreamHasBYOBReader(stream)) {
            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        else {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
    function ReadableByteStreamControllerError(controller, e) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== 'readable') {
            return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest) {
        const entry = controller._queue.shift();
        controller._queueTotalSize -= entry.byteLength;
        ReadableByteStreamControllerHandleQueueDrain(controller);
        const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
        readRequest._chunkSteps(view);
    }
    function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
            controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
    }
    function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === 'errored') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            if (bytesWritten !== 0) {
                throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
            }
        }
        else {
            if (bytesWritten === 0) {
                throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
            }
            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
                throw new RangeError('bytesWritten out of range');
            }
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
    }
    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === 'closed') {
            if (view.byteLength !== 0) {
                throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
            }
        }
        else {
            if (view.byteLength === 0) {
                throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
            }
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError('The region specified by view does not match byobRequest');
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
            throw new RangeError('The buffer of view has different capacity than byobRequest');
        }
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
            throw new RangeError('The region specified by view is larger than byobRequest');
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
    }
    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
            return null;
        }, r => {
            ReadableByteStreamControllerError(controller, r);
            return null;
        });
    }
    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController.prototype);
        let startAlgorithm;
        let pullAlgorithm;
        let cancelAlgorithm;
        if (underlyingByteSource.start !== undefined) {
            startAlgorithm = () => underlyingByteSource.start(controller);
        }
        else {
            startAlgorithm = () => undefined;
        }
        if (underlyingByteSource.pull !== undefined) {
            pullAlgorithm = () => underlyingByteSource.pull(controller);
        }
        else {
            pullAlgorithm = () => promiseResolvedWith(undefined);
        }
        if (underlyingByteSource.cancel !== undefined) {
            cancelAlgorithm = reason => underlyingByteSource.cancel(reason);
        }
        else {
            cancelAlgorithm = () => promiseResolvedWith(undefined);
        }
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
            throw new TypeError('autoAllocateChunkSize must be greater than 0');
        }
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
    }
    function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
    }
    // Helper functions for the ReadableStreamBYOBRequest.
    function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
    }
    // Helper functions for the ReadableByteStreamController.
    function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
    }

    function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        const mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
            mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
    }
    function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== 'byob') {
            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        }
        return mode;
    }
    function convertByobReadOptions(options, context) {
        var _a;
        assertDictionary(options, context);
        const min = (_a = options === null || options === void 0 ? void 0 : options.min) !== null && _a !== void 0 ? _a : 1;
        return {
            min: convertUnsignedLongLongWithEnforceRange(min, `${context} has member 'min' that`)
        };
    }

    // Abstract operations for the ReadableStream.
    function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
    }
    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
            readIntoRequest._closeSteps(chunk);
        }
        else {
            readIntoRequest._chunkSteps(chunk);
        }
    }
    function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
    }
    function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === undefined) {
            return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
            return false;
        }
        return true;
    }
    /**
     * A BYOB reader vended by a {@link ReadableStream}.
     *
     * @public
     */
    class ReadableStreamBYOBReader {
        constructor(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
            assertReadableStream(stream, 'First parameter');
            if (IsReadableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            if (!IsReadableByteStreamController(stream._readableStreamController)) {
                throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                    'source');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the reader's lock is released before the stream finishes closing.
         */
        get closed() {
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('closed'));
            }
            return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(reason = undefined) {
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('cancel'));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
        }
        read(view, rawOptions = {}) {
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('read'));
            }
            if (!ArrayBuffer.isView(view)) {
                return promiseRejectedWith(new TypeError('view must be an array buffer view'));
            }
            if (view.byteLength === 0) {
                return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
            }
            if (view.buffer.byteLength === 0) {
                return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
            }
            if (IsDetachedBuffer(view.buffer)) {
                return promiseRejectedWith(new TypeError('view\'s buffer has been detached'));
            }
            let options;
            try {
                options = convertByobReadOptions(rawOptions, 'options');
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            const min = options.min;
            if (min === 0) {
                return promiseRejectedWith(new TypeError('options.min must be greater than 0'));
            }
            if (!isDataView(view)) {
                if (min > view.length) {
                    return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s length'));
                }
            }
            else if (min > view.byteLength) {
                return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s byteLength'));
            }
            if (this._ownerReadableStream === undefined) {
                return promiseRejectedWith(readerLockException('read from'));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
            });
            const readIntoRequest = {
                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
                _closeSteps: chunk => resolvePromise({ value: chunk, done: true }),
                _errorSteps: e => rejectPromise(e)
            };
            ReadableStreamBYOBReaderRead(this, view, min, readIntoRequest);
            return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) {
                throw byobReaderBrandCheckException('releaseLock');
            }
            if (this._ownerReadableStream === undefined) {
                return;
            }
            ReadableStreamBYOBReaderRelease(this);
        }
    }
    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
    });
    setFunctionName(ReadableStreamBYOBReader.prototype.cancel, 'cancel');
    setFunctionName(ReadableStreamBYOBReader.prototype.read, 'read');
    setFunctionName(ReadableStreamBYOBReader.prototype.releaseLock, 'releaseLock');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamBYOBReader.prototype, Symbol.toStringTag, {
            value: 'ReadableStreamBYOBReader',
            configurable: true
        });
    }
    // Abstract operations for the readers.
    function IsReadableStreamBYOBReader(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
            return false;
        }
        return x instanceof ReadableStreamBYOBReader;
    }
    function ReadableStreamBYOBReaderRead(reader, view, min, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === 'errored') {
            readIntoRequest._errorSteps(stream._storedError);
        }
        else {
            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, min, readIntoRequest);
        }
    }
    function ReadableStreamBYOBReaderRelease(reader) {
        ReadableStreamReaderGenericRelease(reader);
        const e = new TypeError('Reader was released');
        ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
    }
    function ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e) {
        const readIntoRequests = reader._readIntoRequests;
        reader._readIntoRequests = new SimpleQueue();
        readIntoRequests.forEach(readIntoRequest => {
            readIntoRequest._errorSteps(e);
        });
    }
    // Helper functions for the ReadableStreamBYOBReader.
    function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
    }

    function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === undefined) {
            return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError('Invalid highWaterMark');
        }
        return highWaterMark;
    }
    function ExtractSizeAlgorithm(strategy) {
        const { size } = strategy;
        if (!size) {
            return () => 1;
        }
        return size;
    }

    function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        const size = init === null || init === void 0 ? void 0 : init.size;
        return {
            highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
            size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
    }
    function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return chunk => convertUnrestrictedDouble(fn(chunk));
    }

    function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
            abort: abort === undefined ?
                undefined :
                convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
            close: close === undefined ?
                undefined :
                convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
            start: start === undefined ?
                undefined :
                convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
            write: write === undefined ?
                undefined :
                convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
            type
        };
    }
    function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
    }
    function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return () => promiseCall(fn, original, []);
    }
    function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
    }

    function assertWritableStream(x, context) {
        if (!IsWritableStream(x)) {
            throw new TypeError(`${context} is not a WritableStream.`);
        }
    }

    function isAbortSignal(value) {
        if (typeof value !== 'object' || value === null) {
            return false;
        }
        try {
            return typeof value.aborted === 'boolean';
        }
        catch (_a) {
            // AbortSignal.prototype.aborted throws if its brand check fails
            return false;
        }
    }
    const supportsAbortController = typeof AbortController === 'function';
    /**
     * Construct a new AbortController, if supported by the platform.
     *
     * @internal
     */
    function createAbortController() {
        if (supportsAbortController) {
            return new AbortController();
        }
        return undefined;
    }

    /**
     * A writable stream represents a destination for data, into which you can write.
     *
     * @public
     */
    class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
            if (rawUnderlyingSink === undefined) {
                rawUnderlyingSink = null;
            }
            else {
                assertObject(rawUnderlyingSink, 'First parameter');
            }
            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
            InitializeWritableStream(this);
            const type = underlyingSink.type;
            if (type !== undefined) {
                throw new RangeError('Invalid type is specified');
            }
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        /**
         * Returns whether or not the writable stream is locked to a writer.
         */
        get locked() {
            if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2('locked');
            }
            return IsWritableStreamLocked(this);
        }
        /**
         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
         * mechanism of the underlying sink.
         *
         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
         * the stream) if the stream is currently locked.
         */
        abort(reason = undefined) {
            if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2('abort'));
            }
            if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
            }
            return WritableStreamAbort(this, reason);
        }
        /**
         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
         *
         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
         */
        close() {
            if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2('close'));
            }
            if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            }
            return WritableStreamClose(this);
        }
        /**
         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
         * is locked, no other writer can be acquired until this one is released.
         *
         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
         */
        getWriter() {
            if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2('getWriter');
            }
            return AcquireWritableStreamDefaultWriter(this);
        }
    }
    Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
    });
    setFunctionName(WritableStream.prototype.abort, 'abort');
    setFunctionName(WritableStream.prototype.close, 'close');
    setFunctionName(WritableStream.prototype.getWriter, 'getWriter');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(WritableStream.prototype, Symbol.toStringTag, {
            value: 'WritableStream',
            configurable: true
        });
    }
    // Abstract operations for the WritableStream.
    function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
    }
    // Throws if and only if startAlgorithm throws.
    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    function InitializeWritableStream(stream) {
        stream._state = 'writable';
        // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
        // 'erroring' or 'errored'. May be set to an undefined value.
        stream._storedError = undefined;
        stream._writer = undefined;
        // Initialize to undefined first because the constructor of the controller checks this
        // variable to validate the caller.
        stream._writableStreamController = undefined;
        // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
        // producer without waiting for the queued writes to finish.
        stream._writeRequests = new SimpleQueue();
        // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
        // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
        stream._inFlightWriteRequest = undefined;
        // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
        // has been detached.
        stream._closeRequest = undefined;
        // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
        // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
        stream._inFlightCloseRequest = undefined;
        // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
        stream._pendingAbortRequest = undefined;
        // The backpressure signal set by the controller.
        stream._backpressure = false;
    }
    function IsWritableStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
            return false;
        }
        return x instanceof WritableStream;
    }
    function IsWritableStreamLocked(stream) {
        if (stream._writer === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamAbort(stream, reason) {
        var _a;
        if (stream._state === 'closed' || stream._state === 'errored') {
            return promiseResolvedWith(undefined);
        }
        stream._writableStreamController._abortReason = reason;
        (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort(reason);
        // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
        // but it doesn't know that signaling abort runs author code that might have changed the state.
        // Widen the type again by casting to WritableStreamState.
        const state = stream._state;
        if (state === 'closed' || state === 'errored') {
            return promiseResolvedWith(undefined);
        }
        if (stream._pendingAbortRequest !== undefined) {
            return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === 'erroring') {
            wasAlreadyErroring = true;
            // reason will not be used, so don't keep a reference to it.
            reason = undefined;
        }
        const promise = newPromise((resolve, reject) => {
            stream._pendingAbortRequest = {
                _promise: undefined,
                _resolve: resolve,
                _reject: reject,
                _reason: reason,
                _wasAlreadyErroring: wasAlreadyErroring
            };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason);
        }
        return promise;
    }
    function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === 'closed' || state === 'errored') {
            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        }
        const promise = newPromise((resolve, reject) => {
            const closeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== undefined && stream._backpressure && state === 'writable') {
            defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
    }
    // WritableStream API exposed for controllers.
    function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject) => {
            const writeRequest = {
                _resolve: resolve,
                _reject: reject
            };
            stream._writeRequests.push(writeRequest);
        });
        return promise;
    }
    function WritableStreamDealWithRejection(stream, error) {
        const state = stream._state;
        if (state === 'writable') {
            WritableStreamStartErroring(stream, error);
            return;
        }
        WritableStreamFinishErroring(stream);
    }
    function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = 'erroring';
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== undefined) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
            WritableStreamFinishErroring(stream);
        }
    }
    function WritableStreamFinishErroring(stream) {
        stream._state = 'errored';
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach(writeRequest => {
            writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === undefined) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = undefined;
        if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
        }
        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, () => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return null;
        }, (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return null;
        });
    }
    function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(undefined);
        stream._inFlightWriteRequest = undefined;
    }
    function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = undefined;
        WritableStreamDealWithRejection(stream, error);
    }
    function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(undefined);
        stream._inFlightCloseRequest = undefined;
        const state = stream._state;
        if (state === 'erroring') {
            // The error was too late to do anything, so it is ignored.
            stream._storedError = undefined;
            if (stream._pendingAbortRequest !== undefined) {
                stream._pendingAbortRequest._resolve();
                stream._pendingAbortRequest = undefined;
            }
        }
        stream._state = 'closed';
        const writer = stream._writer;
        if (writer !== undefined) {
            defaultWriterClosedPromiseResolve(writer);
        }
    }
    function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = undefined;
        // Never execute sink abort() after sink close().
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._reject(error);
            stream._pendingAbortRequest = undefined;
        }
        WritableStreamDealWithRejection(stream, error);
    }
    // TODO(ricea): Fix alphabetical order.
    function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
        }
        return true;
    }
    function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = undefined;
    }
    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
    }
    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== undefined) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = undefined;
        }
        const writer = stream._writer;
        if (writer !== undefined) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
    }
    function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== undefined && backpressure !== stream._backpressure) {
            if (backpressure) {
                defaultWriterReadyPromiseReset(writer);
            }
            else {
                defaultWriterReadyPromiseResolve(writer);
            }
        }
        stream._backpressure = backpressure;
    }
    /**
     * A default writer vended by a {@link WritableStream}.
     *
     * @public
     */
    class WritableStreamDefaultWriter {
        constructor(stream) {
            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
            assertWritableStream(stream, 'First parameter');
            if (IsWritableStreamLocked(stream)) {
                throw new TypeError('This stream has already been locked for exclusive writing by another writer');
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === 'writable') {
                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                    defaultWriterReadyPromiseInitialize(this);
                }
                else {
                    defaultWriterReadyPromiseInitializeAsResolved(this);
                }
                defaultWriterClosedPromiseInitialize(this);
            }
            else if (state === 'erroring') {
                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                defaultWriterClosedPromiseInitialize(this);
            }
            else if (state === 'closed') {
                defaultWriterReadyPromiseInitializeAsResolved(this);
                defaultWriterClosedPromiseInitializeAsResolved(this);
            }
            else {
                const storedError = stream._storedError;
                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the writer’s lock is released before the stream finishes closing.
         */
        get closed() {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
            }
            return this._closedPromise;
        }
        /**
         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
         * A producer can use this information to determine the right amount of data to write.
         *
         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
         * the writer’s lock is released.
         */
        get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException('desiredSize');
            }
            if (this._ownerWritableStream === undefined) {
                throw defaultWriterLockException('desiredSize');
            }
            return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        /**
         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
         *
         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
         * rejected.
         */
        get ready() {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
            }
            return this._readyPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
         */
        abort(reason = undefined) {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
            }
            if (this._ownerWritableStream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('abort'));
            }
            return WritableStreamDefaultWriterAbort(this, reason);
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
         */
        close() {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('close'));
            }
            const stream = this._ownerWritableStream;
            if (stream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('close'));
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
            }
            return WritableStreamDefaultWriterClose(this);
        }
        /**
         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
         * now on; otherwise, the writer will appear closed.
         *
         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
         * other producers from writing in an interleaved manner.
         */
        releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException('releaseLock');
            }
            const stream = this._ownerWritableStream;
            if (stream === undefined) {
                return;
            }
            WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = undefined) {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('write'));
            }
            if (this._ownerWritableStream === undefined) {
                return promiseRejectedWith(defaultWriterLockException('write to'));
            }
            return WritableStreamDefaultWriterWrite(this, chunk);
        }
    }
    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
    });
    setFunctionName(WritableStreamDefaultWriter.prototype.abort, 'abort');
    setFunctionName(WritableStreamDefaultWriter.prototype.close, 'close');
    setFunctionName(WritableStreamDefaultWriter.prototype.releaseLock, 'releaseLock');
    setFunctionName(WritableStreamDefaultWriter.prototype.write, 'write');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(WritableStreamDefaultWriter.prototype, Symbol.toStringTag, {
            value: 'WritableStreamDefaultWriter',
            configurable: true
        });
    }
    // Abstract operations for the WritableStreamDefaultWriter.
    function IsWritableStreamDefaultWriter(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
            return false;
        }
        return x instanceof WritableStreamDefaultWriter;
    }
    // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
    function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
    }
    function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
    }
    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
            return promiseResolvedWith(undefined);
        }
        if (state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
    }
    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        if (writer._closedPromiseState === 'pending') {
            defaultWriterClosedPromiseReject(writer, error);
        }
        else {
            defaultWriterClosedPromiseResetToRejected(writer, error);
        }
    }
    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        if (writer._readyPromiseState === 'pending') {
            defaultWriterReadyPromiseReject(writer, error);
        }
        else {
            defaultWriterReadyPromiseResetToRejected(writer, error);
        }
    }
    function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === 'errored' || state === 'erroring') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
    }
    function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
        // rejected until afterwards. This means that simply testing state will not work.
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = undefined;
        writer._ownerWritableStream = undefined;
    }
    function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException('write to'));
        }
        const state = stream._state;
        if (state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
            return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
        }
        if (state === 'erroring') {
            return promiseRejectedWith(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
    }
    const closeSentinel = {};
    /**
     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
     *
     * @public
     */
    class WritableStreamDefaultController {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
         *
         * @deprecated
         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
         */
        get abortReason() {
            if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2('abortReason');
            }
            return this._abortReason;
        }
        /**
         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
         */
        get signal() {
            if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2('signal');
            }
            if (this._abortController === undefined) {
                // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
                // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
                // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
                throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
            }
            return this._abortController.signal;
        }
        /**
         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
         *
         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
         * normal lifecycle of interactions with the underlying sink.
         */
        error(e = undefined) {
            if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2('error');
            }
            const state = this._controlledWritableStream._state;
            if (state !== 'writable') {
                // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
                // just treat it as a no-op.
                return;
            }
            WritableStreamDefaultControllerError(this, e);
        }
        /** @internal */
        [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */
        [ErrorSteps]() {
            ResetQueue(this);
        }
    }
    Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true }
    });
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(WritableStreamDefaultController.prototype, Symbol.toStringTag, {
            value: 'WritableStreamDefaultController',
            configurable: true
        });
    }
    // Abstract operations implementing interface required by the WritableStream.
    function IsWritableStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
            return false;
        }
        return x instanceof WritableStreamDefaultController;
    }
    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._abortReason = undefined;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, () => {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            return null;
        }, r => {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r);
            return null;
        });
    }
    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController.prototype);
        let startAlgorithm;
        let writeAlgorithm;
        let closeAlgorithm;
        let abortAlgorithm;
        if (underlyingSink.start !== undefined) {
            startAlgorithm = () => underlyingSink.start(controller);
        }
        else {
            startAlgorithm = () => undefined;
        }
        if (underlyingSink.write !== undefined) {
            writeAlgorithm = chunk => underlyingSink.write(chunk, controller);
        }
        else {
            writeAlgorithm = () => promiseResolvedWith(undefined);
        }
        if (underlyingSink.close !== undefined) {
            closeAlgorithm = () => underlyingSink.close();
        }
        else {
            closeAlgorithm = () => promiseResolvedWith(undefined);
        }
        if (underlyingSink.abort !== undefined) {
            abortAlgorithm = reason => underlyingSink.abort(reason);
        }
        else {
            abortAlgorithm = () => promiseResolvedWith(undefined);
        }
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
    function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = undefined;
        controller._closeAlgorithm = undefined;
        controller._abortAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
            return controller._strategySizeAlgorithm(chunk);
        }
        catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
        }
    }
    function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
    }
    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        }
        catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }
    // Abstract operations for the WritableStreamDefaultController.
    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
            return;
        }
        if (stream._inFlightWriteRequest !== undefined) {
            return;
        }
        const state = stream._state;
        if (state === 'erroring') {
            WritableStreamFinishErroring(stream);
            return;
        }
        if (controller._queue.length === 0) {
            return;
        }
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller);
        }
        else {
            WritableStreamDefaultControllerProcessWrite(controller, value);
        }
    }
    function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === 'writable') {
            WritableStreamDefaultControllerError(controller, error);
        }
    }
    function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, () => {
            WritableStreamFinishInFlightClose(stream);
            return null;
        }, reason => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
            return null;
        });
    }
    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, () => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            return null;
        }, reason => {
            if (stream._state === 'writable') {
                WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
            return null;
        });
    }
    function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
    }
    // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
    function WritableStreamDefaultControllerError(controller, error) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
    }
    // Helper functions for the WritableStream.
    function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
    }
    // Helper functions for the WritableStreamDefaultController.
    function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
    }
    // Helper functions for the WritableStreamDefaultWriter.
    function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
    }
    function defaultWriterLockException(name) {
        return new TypeError('Cannot ' + name + ' a stream using a released writer');
    }
    function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
            writer._closedPromise_resolve = resolve;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = 'pending';
        });
    }
    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
    }
    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
    }
    function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'rejected';
    }
    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === undefined) {
            return;
        }
        writer._closedPromise_resolve(undefined);
        writer._closedPromise_resolve = undefined;
        writer._closedPromise_reject = undefined;
        writer._closedPromiseState = 'resolved';
    }
    function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
            writer._readyPromise_resolve = resolve;
            writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = 'pending';
    }
    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
    }
    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
    }
    function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'rejected';
    }
    function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
    }
    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
    }
    function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === undefined) {
            return;
        }
        writer._readyPromise_resolve(undefined);
        writer._readyPromise_resolve = undefined;
        writer._readyPromise_reject = undefined;
        writer._readyPromiseState = 'fulfilled';
    }

    /// <reference lib="dom" />
    function getGlobals() {
        if (typeof globalThis !== 'undefined') {
            return globalThis;
        }
        else if (typeof self !== 'undefined') {
            return self;
        }
        else if (typeof global !== 'undefined') {
            return global;
        }
        return undefined;
    }
    const globals = getGlobals();

    /// <reference types="node" />
    function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
            return false;
        }
        if (ctor.name !== 'DOMException') {
            return false;
        }
        try {
            new ctor();
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    /**
     * Support:
     * - Web browsers
     * - Node 18 and higher (https://github.com/nodejs/node/commit/e4b1fb5e6422c1ff151234bb9de792d45dd88d87)
     */
    function getFromGlobal() {
        const ctor = globals === null || globals === void 0 ? void 0 : globals.DOMException;
        return isDOMExceptionConstructor(ctor) ? ctor : undefined;
    }
    /**
     * Support:
     * - All platforms
     */
    function createPolyfill() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const ctor = function DOMException(message, name) {
            this.message = message || '';
            this.name = name || 'Error';
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
        };
        setFunctionName(ctor, 'DOMException');
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
        return ctor;
    }
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    const DOMException = getFromGlobal() || createPolyfill();

    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
        let currentWrite = promiseResolvedWith(undefined);
        return newPromise((resolve, reject) => {
            let abortAlgorithm;
            if (signal !== undefined) {
                abortAlgorithm = () => {
                    const error = signal.reason !== undefined ? signal.reason : new DOMException('Aborted', 'AbortError');
                    const actions = [];
                    if (!preventAbort) {
                        actions.push(() => {
                            if (dest._state === 'writable') {
                                return WritableStreamAbort(dest, error);
                            }
                            return promiseResolvedWith(undefined);
                        });
                    }
                    if (!preventCancel) {
                        actions.push(() => {
                            if (source._state === 'readable') {
                                return ReadableStreamCancel(source, error);
                            }
                            return promiseResolvedWith(undefined);
                        });
                    }
                    shutdownWithAction(() => Promise.all(actions.map(action => action())), true, error);
                };
                if (signal.aborted) {
                    abortAlgorithm();
                    return;
                }
                signal.addEventListener('abort', abortAlgorithm);
            }
            // Using reader and writer, read all chunks from this and write them to dest
            // - Backpressure must be enforced
            // - Shutdown must stop all activity
            function pipeLoop() {
                return newPromise((resolveLoop, rejectLoop) => {
                    function next(done) {
                        if (done) {
                            resolveLoop();
                        }
                        else {
                            // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                            // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                            PerformPromiseThen(pipeStep(), next, rejectLoop);
                        }
                    }
                    next(false);
                });
            }
            function pipeStep() {
                if (shuttingDown) {
                    return promiseResolvedWith(true);
                }
                return PerformPromiseThen(writer._readyPromise, () => {
                    return newPromise((resolveRead, rejectRead) => {
                        ReadableStreamDefaultReaderRead(reader, {
                            _chunkSteps: chunk => {
                                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                                resolveRead(false);
                            },
                            _closeSteps: () => resolveRead(true),
                            _errorSteps: rejectRead
                        });
                    });
                });
            }
            // Errors must be propagated forward
            isOrBecomesErrored(source, reader._closedPromise, storedError => {
                if (!preventAbort) {
                    shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
                }
                else {
                    shutdown(true, storedError);
                }
                return null;
            });
            // Errors must be propagated backward
            isOrBecomesErrored(dest, writer._closedPromise, storedError => {
                if (!preventCancel) {
                    shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
                }
                else {
                    shutdown(true, storedError);
                }
                return null;
            });
            // Closing must be propagated forward
            isOrBecomesClosed(source, reader._closedPromise, () => {
                if (!preventClose) {
                    shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
                }
                else {
                    shutdown();
                }
                return null;
            });
            // Closing must be propagated backward
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
                const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
                if (!preventCancel) {
                    shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
                }
                else {
                    shutdown(true, destClosed);
                }
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
                // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
                // for that too.
                const oldCurrentWrite = currentWrite;
                return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
            }
            function isOrBecomesErrored(stream, promise, action) {
                if (stream._state === 'errored') {
                    action(stream._storedError);
                }
                else {
                    uponRejection(promise, action);
                }
            }
            function isOrBecomesClosed(stream, promise, action) {
                if (stream._state === 'closed') {
                    action();
                }
                else {
                    uponFulfillment(promise, action);
                }
            }
            function shutdownWithAction(action, originalIsError, originalError) {
                if (shuttingDown) {
                    return;
                }
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                    uponFulfillment(waitForWritesToFinish(), doTheRest);
                }
                else {
                    doTheRest();
                }
                function doTheRest() {
                    uponPromise(action(), () => finalize(originalIsError, originalError), newError => finalize(true, newError));
                    return null;
                }
            }
            function shutdown(isError, error) {
                if (shuttingDown) {
                    return;
                }
                shuttingDown = true;
                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                    uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
                }
                else {
                    finalize(isError, error);
                }
            }
            function finalize(isError, error) {
                WritableStreamDefaultWriterRelease(writer);
                ReadableStreamReaderGenericRelease(reader);
                if (signal !== undefined) {
                    signal.removeEventListener('abort', abortAlgorithm);
                }
                if (isError) {
                    reject(error);
                }
                else {
                    resolve(undefined);
                }
                return null;
            }
        });
    }

    /**
     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
     *
     * @public
     */
    class ReadableStreamDefaultController {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('desiredSize');
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('close');
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError('The stream is not in a state that permits close');
            }
            ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = undefined) {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('enqueue');
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError('The stream is not in a state that permits enqueue');
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(e = undefined) {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('error');
            }
            ReadableStreamDefaultControllerError(this, e);
        }
        /** @internal */
        [CancelSteps](reason) {
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
        }
        /** @internal */
        [PullSteps](readRequest) {
            const stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
                const chunk = DequeueValue(this);
                if (this._closeRequested && this._queue.length === 0) {
                    ReadableStreamDefaultControllerClearAlgorithms(this);
                    ReadableStreamClose(stream);
                }
                else {
                    ReadableStreamDefaultControllerCallPullIfNeeded(this);
                }
                readRequest._chunkSteps(chunk);
            }
            else {
                ReadableStreamAddReadRequest(stream, readRequest);
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
        }
        /** @internal */
        [ReleaseSteps]() {
            // Do nothing.
        }
    }
    Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    setFunctionName(ReadableStreamDefaultController.prototype.close, 'close');
    setFunctionName(ReadableStreamDefaultController.prototype.enqueue, 'enqueue');
    setFunctionName(ReadableStreamDefaultController.prototype.error, 'error');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStreamDefaultController.prototype, Symbol.toStringTag, {
            value: 'ReadableStreamDefaultController',
            configurable: true
        });
    }
    // Abstract operations for the ReadableStreamDefaultController.
    function IsReadableStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
            return false;
        }
        return x instanceof ReadableStreamDefaultController;
    }
    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
            return;
        }
        if (controller._pulling) {
            controller._pullAgain = true;
            return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
            return null;
        }, e => {
            ReadableStreamDefaultControllerError(controller, e);
            return null;
        });
    }
    function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false;
        }
        if (!controller._started) {
            return false;
        }
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
        }
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
            return true;
        }
        return false;
    }
    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
        controller._strategySizeAlgorithm = undefined;
    }
    // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
    function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
        }
    }
    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
        }
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
        }
        else {
            let chunkSize;
            try {
                chunkSize = controller._strategySizeAlgorithm(chunk);
            }
            catch (chunkSizeE) {
                ReadableStreamDefaultControllerError(controller, chunkSizeE);
                throw chunkSizeE;
            }
            try {
                EnqueueValueWithSize(controller, chunk, chunkSize);
            }
            catch (enqueueE) {
                ReadableStreamDefaultControllerError(controller, enqueueE);
                throw enqueueE;
            }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
    function ReadableStreamDefaultControllerError(controller, e) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== 'readable') {
            return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e);
    }
    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === 'errored') {
            return null;
        }
        if (state === 'closed') {
            return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
    }
    // This is used in the implementation of TransformStream.
    function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false;
        }
        return true;
    }
    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === 'readable') {
            return true;
        }
        return false;
    }
    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = undefined;
        controller._queueTotalSize = undefined;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            return null;
        }, r => {
            ReadableStreamDefaultControllerError(controller, r);
            return null;
        });
    }
    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        let startAlgorithm;
        let pullAlgorithm;
        let cancelAlgorithm;
        if (underlyingSource.start !== undefined) {
            startAlgorithm = () => underlyingSource.start(controller);
        }
        else {
            startAlgorithm = () => undefined;
        }
        if (underlyingSource.pull !== undefined) {
            pullAlgorithm = () => underlyingSource.pull(controller);
        }
        else {
            pullAlgorithm = () => promiseResolvedWith(undefined);
        }
        if (underlyingSource.cancel !== undefined) {
            cancelAlgorithm = reason => underlyingSource.cancel(reason);
        }
        else {
            cancelAlgorithm = () => promiseResolvedWith(undefined);
        }
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    }
    // Helper functions for the ReadableStreamDefaultController.
    function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
    }

    function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) {
            return ReadableByteStreamTee(stream);
        }
        return ReadableStreamDefaultTee(stream);
    }
    function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise(resolve => {
            resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
            if (reading) {
                readAgain = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const readRequest = {
                _chunkSteps: chunk => {
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    _queueMicrotask(() => {
                        readAgain = false;
                        const chunk1 = chunk;
                        const chunk2 = chunk;
                        // There is no way to access the cloning code right now in the reference implementation.
                        // If we add one then we'll need an implementation for serializable objects.
                        // if (!canceled2 && cloneForBranch2) {
                        //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                        // }
                        if (!canceled1) {
                            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                        }
                        if (!canceled2) {
                            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                        }
                        reading = false;
                        if (readAgain) {
                            pullAlgorithm();
                        }
                    });
                },
                _closeSteps: () => {
                    reading = false;
                    if (!canceled1) {
                        ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                    }
                    if (!canceled2) {
                        ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                    }
                    if (!canceled1 || !canceled2) {
                        resolveCancelPromise(undefined);
                    }
                },
                _errorSteps: () => {
                    reading = false;
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(undefined);
        }
        function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function startAlgorithm() {
            // do nothing
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, (r) => {
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
            if (!canceled1 || !canceled2) {
                resolveCancelPromise(undefined);
            }
            return null;
        });
        return [branch1, branch2];
    }
    function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise(resolve => {
            resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, r => {
                if (thisReader !== reader) {
                    return null;
                }
                ReadableByteStreamControllerError(branch1._readableStreamController, r);
                ReadableByteStreamControllerError(branch2._readableStreamController, r);
                if (!canceled1 || !canceled2) {
                    resolveCancelPromise(undefined);
                }
                return null;
            });
        }
        function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamDefaultReader(stream);
                forwardReaderError(reader);
            }
            const readRequest = {
                _chunkSteps: chunk => {
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    _queueMicrotask(() => {
                        readAgainForBranch1 = false;
                        readAgainForBranch2 = false;
                        const chunk1 = chunk;
                        let chunk2 = chunk;
                        if (!canceled1 && !canceled2) {
                            try {
                                chunk2 = CloneAsUint8Array(chunk);
                            }
                            catch (cloneE) {
                                ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                                ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                                return;
                            }
                        }
                        if (!canceled1) {
                            ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                        }
                        if (!canceled2) {
                            ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                        }
                        reading = false;
                        if (readAgainForBranch1) {
                            pull1Algorithm();
                        }
                        else if (readAgainForBranch2) {
                            pull2Algorithm();
                        }
                    });
                },
                _closeSteps: () => {
                    reading = false;
                    if (!canceled1) {
                        ReadableByteStreamControllerClose(branch1._readableStreamController);
                    }
                    if (!canceled2) {
                        ReadableByteStreamControllerClose(branch2._readableStreamController);
                    }
                    if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                        ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                    }
                    if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                        ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                    }
                    if (!canceled1 || !canceled2) {
                        resolveCancelPromise(undefined);
                    }
                },
                _errorSteps: () => {
                    reading = false;
                }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamBYOBReader(stream);
                forwardReaderError(reader);
            }
            const byobBranch = forBranch2 ? branch2 : branch1;
            const otherBranch = forBranch2 ? branch1 : branch2;
            const readIntoRequest = {
                _chunkSteps: chunk => {
                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                    // successful synchronously-available reads get ahead of asynchronously-available errors.
                    _queueMicrotask(() => {
                        readAgainForBranch1 = false;
                        readAgainForBranch2 = false;
                        const byobCanceled = forBranch2 ? canceled2 : canceled1;
                        const otherCanceled = forBranch2 ? canceled1 : canceled2;
                        if (!otherCanceled) {
                            let clonedChunk;
                            try {
                                clonedChunk = CloneAsUint8Array(chunk);
                            }
                            catch (cloneE) {
                                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                                return;
                            }
                            if (!byobCanceled) {
                                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                            }
                            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                        }
                        else if (!byobCanceled) {
                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        }
                        reading = false;
                        if (readAgainForBranch1) {
                            pull1Algorithm();
                        }
                        else if (readAgainForBranch2) {
                            pull2Algorithm();
                        }
                    });
                },
                _closeSteps: chunk => {
                    reading = false;
                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
                    if (!byobCanceled) {
                        ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                    }
                    if (!otherCanceled) {
                        ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                    }
                    if (chunk !== undefined) {
                        if (!byobCanceled) {
                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        }
                        if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                            ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                        }
                    }
                    if (!byobCanceled || !otherCanceled) {
                        resolveCancelPromise(undefined);
                    }
                },
                _errorSteps: () => {
                    reading = false;
                }
            };
            ReadableStreamBYOBReaderRead(reader, view, 1, readIntoRequest);
        }
        function pull1Algorithm() {
            if (reading) {
                readAgainForBranch1 = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
            if (byobRequest === null) {
                pullWithDefaultReader();
            }
            else {
                pullWithBYOBReader(byobRequest._view, false);
            }
            return promiseResolvedWith(undefined);
        }
        function pull2Algorithm() {
            if (reading) {
                readAgainForBranch2 = true;
                return promiseResolvedWith(undefined);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
            if (byobRequest === null) {
                pullWithDefaultReader();
            }
            else {
                pullWithBYOBReader(byobRequest._view, true);
            }
            return promiseResolvedWith(undefined);
        }
        function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
        }
        function startAlgorithm() {
            return;
        }
        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [branch1, branch2];
    }

    function isReadableStreamLike(stream) {
        return typeIsObject(stream) && typeof stream.getReader !== 'undefined';
    }

    function ReadableStreamFrom(source) {
        if (isReadableStreamLike(source)) {
            return ReadableStreamFromDefaultReader(source.getReader());
        }
        return ReadableStreamFromIterable(source);
    }
    function ReadableStreamFromIterable(asyncIterable) {
        let stream;
        const iteratorRecord = GetIterator(asyncIterable, 'async');
        const startAlgorithm = noop;
        function pullAlgorithm() {
            let nextResult;
            try {
                nextResult = IteratorNext(iteratorRecord);
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            const nextPromise = promiseResolvedWith(nextResult);
            return transformPromiseWith(nextPromise, iterResult => {
                if (!typeIsObject(iterResult)) {
                    throw new TypeError('The promise returned by the iterator.next() method must fulfill with an object');
                }
                const done = IteratorComplete(iterResult);
                if (done) {
                    ReadableStreamDefaultControllerClose(stream._readableStreamController);
                }
                else {
                    const value = IteratorValue(iterResult);
                    ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
                }
            });
        }
        function cancelAlgorithm(reason) {
            const iterator = iteratorRecord.iterator;
            let returnMethod;
            try {
                returnMethod = GetMethod(iterator, 'return');
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            if (returnMethod === undefined) {
                return promiseResolvedWith(undefined);
            }
            let returnResult;
            try {
                returnResult = reflectCall(returnMethod, iterator, [reason]);
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            const returnPromise = promiseResolvedWith(returnResult);
            return transformPromiseWith(returnPromise, iterResult => {
                if (!typeIsObject(iterResult)) {
                    throw new TypeError('The promise returned by the iterator.return() method must fulfill with an object');
                }
                return undefined;
            });
        }
        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
        return stream;
    }
    function ReadableStreamFromDefaultReader(reader) {
        let stream;
        const startAlgorithm = noop;
        function pullAlgorithm() {
            let readPromise;
            try {
                readPromise = reader.read();
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            return transformPromiseWith(readPromise, readResult => {
                if (!typeIsObject(readResult)) {
                    throw new TypeError('The promise returned by the reader.read() method must fulfill with an object');
                }
                if (readResult.done) {
                    ReadableStreamDefaultControllerClose(stream._readableStreamController);
                }
                else {
                    const value = readResult.value;
                    ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
                }
            });
        }
        function cancelAlgorithm(reason) {
            try {
                return promiseResolvedWith(reader.cancel(reason));
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
        }
        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
        return stream;
    }

    function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
            autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
                undefined :
                convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
            cancel: cancel === undefined ?
                undefined :
                convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            pull: pull === undefined ?
                undefined :
                convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
            start: start === undefined ?
                undefined :
                convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
            type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
    }
    function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
    }
    function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
    }
    function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== 'bytes') {
            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        }
        return type;
    }

    function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
    }

    function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        const signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== undefined) {
            assertAbortSignal(signal, `${context} has member 'signal' that`);
        }
        return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
        };
    }
    function assertAbortSignal(signal, context) {
        if (!isAbortSignal(signal)) {
            throw new TypeError(`${context} is not an AbortSignal.`);
        }
    }

    function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, 'readable', 'ReadableWritablePair');
        assertReadableStream(readable, `${context} has member 'readable' that`);
        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, 'writable', 'ReadableWritablePair');
        assertWritableStream(writable, `${context} has member 'writable' that`);
        return { readable, writable };
    }

    /**
     * A readable stream represents a source of data, from which you can read.
     *
     * @public
     */
    class ReadableStream {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
            if (rawUnderlyingSource === undefined) {
                rawUnderlyingSource = null;
            }
            else {
                assertObject(rawUnderlyingSource, 'First parameter');
            }
            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
            InitializeReadableStream(this);
            if (underlyingSource.type === 'bytes') {
                if (strategy.size !== undefined) {
                    throw new RangeError('The strategy for a byte stream cannot have a size function');
                }
                const highWaterMark = ExtractHighWaterMark(strategy, 0);
                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            }
            else {
                const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                const highWaterMark = ExtractHighWaterMark(strategy, 1);
                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
        }
        /**
         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
         */
        get locked() {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('locked');
            }
            return IsReadableStreamLocked(this);
        }
        /**
         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
         *
         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
         * method, which might or might not use it.
         */
        cancel(reason = undefined) {
            if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1('cancel'));
            }
            if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
            }
            return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions = undefined) {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('getReader');
            }
            const options = convertReaderOptions(rawOptions, 'First parameter');
            if (options.mode === undefined) {
                return AcquireReadableStreamDefaultReader(this);
            }
            return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('pipeThrough');
            }
            assertRequiredArgument(rawTransform, 1, 'pipeThrough');
            const transform = convertReadableWritablePair(rawTransform, 'First parameter');
            const options = convertPipeOptions(rawOptions, 'Second parameter');
            if (IsReadableStreamLocked(this)) {
                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
            }
            if (IsWritableStreamLocked(transform.writable)) {
                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
            }
            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
            }
            if (destination === undefined) {
                return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
            }
            if (!IsWritableStream(destination)) {
                return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
            }
            let options;
            try {
                options = convertPipeOptions(rawOptions, 'Second parameter');
            }
            catch (e) {
                return promiseRejectedWith(e);
            }
            if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
            }
            if (IsWritableStreamLocked(destination)) {
                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
            }
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        /**
         * Tees this readable stream, returning a two-element array containing the two resulting branches as
         * new {@link ReadableStream} instances.
         *
         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
         * propagated to the stream's underlying source.
         *
         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
         * this could allow interference between the two branches.
         */
        tee() {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('tee');
            }
            const branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
        }
        values(rawOptions = undefined) {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('values');
            }
            const options = convertIteratorOptions(rawOptions, 'First parameter');
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        }
        [SymbolAsyncIterator](options) {
            // Stub implementation, overridden below
            return this.values(options);
        }
        /**
         * Creates a new ReadableStream wrapping the provided iterable or async iterable.
         *
         * This can be used to adapt various kinds of objects into a readable stream,
         * such as an array, an async generator, or a Node.js readable stream.
         */
        static from(asyncIterable) {
            return ReadableStreamFrom(asyncIterable);
        }
    }
    Object.defineProperties(ReadableStream, {
        from: { enumerable: true }
    });
    Object.defineProperties(ReadableStream.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
    });
    setFunctionName(ReadableStream.from, 'from');
    setFunctionName(ReadableStream.prototype.cancel, 'cancel');
    setFunctionName(ReadableStream.prototype.getReader, 'getReader');
    setFunctionName(ReadableStream.prototype.pipeThrough, 'pipeThrough');
    setFunctionName(ReadableStream.prototype.pipeTo, 'pipeTo');
    setFunctionName(ReadableStream.prototype.tee, 'tee');
    setFunctionName(ReadableStream.prototype.values, 'values');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ReadableStream.prototype, Symbol.toStringTag, {
            value: 'ReadableStream',
            configurable: true
        });
    }
    Object.defineProperty(ReadableStream.prototype, SymbolAsyncIterator, {
        value: ReadableStream.prototype.values,
        writable: true,
        configurable: true
    });
    // Abstract operations for the ReadableStream.
    // Throws if and only if startAlgorithm throws.
    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(ReadableStream.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
    }
    // Throws if and only if startAlgorithm throws.
    function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableByteStreamController.prototype);
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
        return stream;
    }
    function InitializeReadableStream(stream) {
        stream._state = 'readable';
        stream._reader = undefined;
        stream._storedError = undefined;
        stream._disturbed = false;
    }
    function IsReadableStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
            return false;
        }
        return x instanceof ReadableStream;
    }
    function IsReadableStreamLocked(stream) {
        if (stream._reader === undefined) {
            return false;
        }
        return true;
    }
    // ReadableStream API exposed for controllers.
    function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === 'closed') {
            return promiseResolvedWith(undefined);
        }
        if (stream._state === 'errored') {
            return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
            const readIntoRequests = reader._readIntoRequests;
            reader._readIntoRequests = new SimpleQueue();
            readIntoRequests.forEach(readIntoRequest => {
                readIntoRequest._closeSteps(undefined);
            });
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop);
    }
    function ReadableStreamClose(stream) {
        stream._state = 'closed';
        const reader = stream._reader;
        if (reader === undefined) {
            return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
            const readRequests = reader._readRequests;
            reader._readRequests = new SimpleQueue();
            readRequests.forEach(readRequest => {
                readRequest._closeSteps();
            });
        }
    }
    function ReadableStreamError(stream, e) {
        stream._state = 'errored';
        stream._storedError = e;
        const reader = stream._reader;
        if (reader === undefined) {
            return;
        }
        defaultReaderClosedPromiseReject(reader, e);
        if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamDefaultReaderErrorReadRequests(reader, e);
        }
        else {
            ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
        }
    }
    // Helper functions for the ReadableStream.
    function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
    }

    function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
        return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
    }

    // The size function must not have a prototype property nor be a constructor
    const byteLengthSizeFunction = (chunk) => {
        return chunk.byteLength;
    };
    setFunctionName(byteLengthSizeFunction, 'size');
    /**
     * A queuing strategy that counts the number of bytes in each chunk.
     *
     * @public
     */
    class ByteLengthQueuingStrategy {
        constructor(options) {
            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException('highWaterMark');
            }
            return this._byteLengthQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by returning the value of its `byteLength` property.
         */
        get size() {
            if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException('size');
            }
            return byteLengthSizeFunction;
        }
    }
    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
    });
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, Symbol.toStringTag, {
            value: 'ByteLengthQueuingStrategy',
            configurable: true
        });
    }
    // Helper functions for the ByteLengthQueuingStrategy.
    function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
    }
    function IsByteLengthQueuingStrategy(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
            return false;
        }
        return x instanceof ByteLengthQueuingStrategy;
    }

    // The size function must not have a prototype property nor be a constructor
    const countSizeFunction = () => {
        return 1;
    };
    setFunctionName(countSizeFunction, 'size');
    /**
     * A queuing strategy that counts the number of chunks.
     *
     * @public
     */
    class CountQueuingStrategy {
        constructor(options) {
            assertRequiredArgument(options, 1, 'CountQueuingStrategy');
            options = convertQueuingStrategyInit(options, 'First parameter');
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException('highWaterMark');
            }
            return this._countQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by always returning 1.
         * This ensures that the total queue size is a count of the number of chunks in the queue.
         */
        get size() {
            if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException('size');
            }
            return countSizeFunction;
        }
    }
    Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
    });
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(CountQueuingStrategy.prototype, Symbol.toStringTag, {
            value: 'CountQueuingStrategy',
            configurable: true
        });
    }
    // Helper functions for the CountQueuingStrategy.
    function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
    }
    function IsCountQueuingStrategy(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
            return false;
        }
        return x instanceof CountQueuingStrategy;
    }

    function convertTransformer(original, context) {
        assertDictionary(original, context);
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
            cancel: cancel === undefined ?
                undefined :
                convertTransformerCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            flush: flush === undefined ?
                undefined :
                convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
            readableType,
            start: start === undefined ?
                undefined :
                convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
            transform: transform === undefined ?
                undefined :
                convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
            writableType
        };
    }
    function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
    }
    function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
    }
    function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
    }
    function convertTransformerCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
    }

    // Class TransformStream
    /**
     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
     * made available for reading from the readable side.
     *
     * @public
     */
    class TransformStream {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
            if (rawTransformer === undefined) {
                rawTransformer = null;
            }
            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
            const transformer = convertTransformer(rawTransformer, 'First parameter');
            if (transformer.readableType !== undefined) {
                throw new RangeError('Invalid readableType specified');
            }
            if (transformer.writableType !== undefined) {
                throw new RangeError('Invalid writableType specified');
            }
            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            let startPromise_resolve;
            const startPromise = newPromise(resolve => {
                startPromise_resolve = resolve;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== undefined) {
                startPromise_resolve(transformer.start(this._transformStreamController));
            }
            else {
                startPromise_resolve(undefined);
            }
        }
        /**
         * The readable side of the transform stream.
         */
        get readable() {
            if (!IsTransformStream(this)) {
                throw streamBrandCheckException('readable');
            }
            return this._readable;
        }
        /**
         * The writable side of the transform stream.
         */
        get writable() {
            if (!IsTransformStream(this)) {
                throw streamBrandCheckException('writable');
            }
            return this._writable;
        }
    }
    Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
    });
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(TransformStream.prototype, Symbol.toStringTag, {
            value: 'TransformStream',
            configurable: true
        });
    }
    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
            return startPromise;
        }
        function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
            return TransformStreamDefaultSourceCancelAlgorithm(stream, reason);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
        stream._backpressure = undefined;
        stream._backpressureChangePromise = undefined;
        stream._backpressureChangePromise_resolve = undefined;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = undefined;
    }
    function IsTransformStream(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
            return false;
        }
        return x instanceof TransformStream;
    }
    // This is a no-op if both sides are already errored.
    function TransformStreamError(stream, e) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
    }
    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
        TransformStreamUnblockWrite(stream);
    }
    function TransformStreamUnblockWrite(stream) {
        if (stream._backpressure) {
            // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
            // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
            // _backpressure is set.
            TransformStreamSetBackpressure(stream, false);
        }
    }
    function TransformStreamSetBackpressure(stream, backpressure) {
        // Passes also when called during construction.
        if (stream._backpressureChangePromise !== undefined) {
            stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise(resolve => {
            stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
    }
    // Class TransformStreamDefaultController
    /**
     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
     *
     * @public
     */
    class TransformStreamDefaultController {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        /**
         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
         */
        get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('desiredSize');
            }
            const readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk = undefined) {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('enqueue');
            }
            TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors both the readable side and the writable side of the controlled transform stream, making all future
         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
         */
        error(reason = undefined) {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('error');
            }
            TransformStreamDefaultControllerError(this, reason);
        }
        /**
         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
         * transformer only needs to consume a portion of the chunks written to the writable side.
         */
        terminate() {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('terminate');
            }
            TransformStreamDefaultControllerTerminate(this);
        }
    }
    Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
    });
    setFunctionName(TransformStreamDefaultController.prototype.enqueue, 'enqueue');
    setFunctionName(TransformStreamDefaultController.prototype.error, 'error');
    setFunctionName(TransformStreamDefaultController.prototype.terminate, 'terminate');
    if (typeof Symbol.toStringTag === 'symbol') {
        Object.defineProperty(TransformStreamDefaultController.prototype, Symbol.toStringTag, {
            value: 'TransformStreamDefaultController',
            configurable: true
        });
    }
    // Transform Stream Default Controller Abstract Operations
    function IsTransformStreamDefaultController(x) {
        if (!typeIsObject(x)) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
            return false;
        }
        return x instanceof TransformStreamDefaultController;
    }
    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._finishPromise = undefined;
        controller._finishPromise_resolve = undefined;
        controller._finishPromise_reject = undefined;
    }
    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController.prototype);
        let transformAlgorithm;
        let flushAlgorithm;
        let cancelAlgorithm;
        if (transformer.transform !== undefined) {
            transformAlgorithm = chunk => transformer.transform(chunk, controller);
        }
        else {
            transformAlgorithm = chunk => {
                try {
                    TransformStreamDefaultControllerEnqueue(controller, chunk);
                    return promiseResolvedWith(undefined);
                }
                catch (transformResultE) {
                    return promiseRejectedWith(transformResultE);
                }
            };
        }
        if (transformer.flush !== undefined) {
            flushAlgorithm = () => transformer.flush(controller);
        }
        else {
            flushAlgorithm = () => promiseResolvedWith(undefined);
        }
        if (transformer.cancel !== undefined) {
            cancelAlgorithm = reason => transformer.cancel(reason);
        }
        else {
            cancelAlgorithm = () => promiseResolvedWith(undefined);
        }
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm);
    }
    function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = undefined;
        controller._flushAlgorithm = undefined;
        controller._cancelAlgorithm = undefined;
    }
    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
            throw new TypeError('Readable side is not in a state that permits enqueue');
        }
        // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
        // accept TransformStreamDefaultControllerEnqueue() calls.
        try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        }
        catch (e) {
            // This happens when readableStrategy.size() throws.
            TransformStreamErrorWritableAndUnblockWrite(stream, e);
            throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true);
        }
    }
    function TransformStreamDefaultControllerError(controller, e) {
        TransformStreamError(controller._controlledTransformStream, e);
    }
    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, undefined, r => {
            TransformStreamError(controller._controlledTransformStream, r);
            throw r;
        });
    }
    function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error = new TypeError('TransformStream terminated');
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
    }
    // TransformStreamDefaultSink Algorithms
    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, () => {
                const writable = stream._writable;
                const state = writable._state;
                if (state === 'erroring') {
                    throw writable._storedError;
                }
                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    }
    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== undefined) {
            return controller._finishPromise;
        }
        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
        const readable = stream._readable;
        // Assign the _finishPromise now so that if _cancelAlgorithm calls readable.cancel() internally,
        // we don't run the _cancelAlgorithm again.
        controller._finishPromise = newPromise((resolve, reject) => {
            controller._finishPromise_resolve = resolve;
            controller._finishPromise_reject = reject;
        });
        const cancelPromise = controller._cancelAlgorithm(reason);
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(cancelPromise, () => {
            if (readable._state === 'errored') {
                defaultControllerFinishPromiseReject(controller, readable._storedError);
            }
            else {
                ReadableStreamDefaultControllerError(readable._readableStreamController, reason);
                defaultControllerFinishPromiseResolve(controller);
            }
            return null;
        }, r => {
            ReadableStreamDefaultControllerError(readable._readableStreamController, r);
            defaultControllerFinishPromiseReject(controller, r);
            return null;
        });
        return controller._finishPromise;
    }
    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== undefined) {
            return controller._finishPromise;
        }
        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
        const readable = stream._readable;
        // Assign the _finishPromise now so that if _flushAlgorithm calls readable.cancel() internally,
        // we don't also run the _cancelAlgorithm.
        controller._finishPromise = newPromise((resolve, reject) => {
            controller._finishPromise_resolve = resolve;
            controller._finishPromise_reject = reject;
        });
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(flushPromise, () => {
            if (readable._state === 'errored') {
                defaultControllerFinishPromiseReject(controller, readable._storedError);
            }
            else {
                ReadableStreamDefaultControllerClose(readable._readableStreamController);
                defaultControllerFinishPromiseResolve(controller);
            }
            return null;
        }, r => {
            ReadableStreamDefaultControllerError(readable._readableStreamController, r);
            defaultControllerFinishPromiseReject(controller, r);
            return null;
        });
        return controller._finishPromise;
    }
    // TransformStreamDefaultSource Algorithms
    function TransformStreamDefaultSourcePullAlgorithm(stream) {
        // Invariant. Enforced by the promises returned by start() and pull().
        TransformStreamSetBackpressure(stream, false);
        // Prevent the next pull() call until there is backpressure.
        return stream._backpressureChangePromise;
    }
    function TransformStreamDefaultSourceCancelAlgorithm(stream, reason) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== undefined) {
            return controller._finishPromise;
        }
        // stream._writable cannot change after construction, so caching it across a call to user code is safe.
        const writable = stream._writable;
        // Assign the _finishPromise now so that if _flushAlgorithm calls writable.abort() or
        // writable.cancel() internally, we don't run the _cancelAlgorithm again, or also run the
        // _flushAlgorithm.
        controller._finishPromise = newPromise((resolve, reject) => {
            controller._finishPromise_resolve = resolve;
            controller._finishPromise_reject = reject;
        });
        const cancelPromise = controller._cancelAlgorithm(reason);
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(cancelPromise, () => {
            if (writable._state === 'errored') {
                defaultControllerFinishPromiseReject(controller, writable._storedError);
            }
            else {
                WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, reason);
                TransformStreamUnblockWrite(stream);
                defaultControllerFinishPromiseResolve(controller);
            }
            return null;
        }, r => {
            WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, r);
            TransformStreamUnblockWrite(stream);
            defaultControllerFinishPromiseReject(controller, r);
            return null;
        });
        return controller._finishPromise;
    }
    // Helper functions for the TransformStreamDefaultController.
    function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
    }
    function defaultControllerFinishPromiseResolve(controller) {
        if (controller._finishPromise_resolve === undefined) {
            return;
        }
        controller._finishPromise_resolve();
        controller._finishPromise_resolve = undefined;
        controller._finishPromise_reject = undefined;
    }
    function defaultControllerFinishPromiseReject(controller, reason) {
        if (controller._finishPromise_reject === undefined) {
            return;
        }
        setPromiseIsHandledToTrue(controller._finishPromise);
        controller._finishPromise_reject(reason);
        controller._finishPromise_resolve = undefined;
        controller._finishPromise_reject = undefined;
    }
    // Helper functions for the TransformStream.
    function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
    }

    exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
    exports.CountQueuingStrategy = CountQueuingStrategy;
    exports.ReadableByteStreamController = ReadableByteStreamController;
    exports.ReadableStream = ReadableStream;
    exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
    exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
    exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
    exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
    exports.TransformStream = TransformStream;
    exports.TransformStreamDefaultController = TransformStreamDefaultController;
    exports.WritableStream = WritableStream;
    exports.WritableStreamDefaultController = WritableStreamDefaultController;
    exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;

}));
//# sourceMappingURL=ponyfill.es2018.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "../../node_modules/fetch-blob/streams.cjs":
/*!*************************************************!*\
  !*** ../../node_modules/fetch-blob/streams.cjs ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* c8 ignore start */
// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536

if (!globalThis.ReadableStream) {
  // `node:stream/web` got introduced in v16.5.0 as experimental
  // and it's preferred over the polyfilled version. So we also
  // suppress the warning that gets emitted by NodeJS for using it.
  try {
    const process = __webpack_require__(/*! node:process */ "node:process")
    const { emitWarning } = process
    try {
      process.emitWarning = () => {}
      Object.assign(globalThis, __webpack_require__(/*! node:stream/web */ "node:stream/web"))
      process.emitWarning = emitWarning
    } catch (error) {
      process.emitWarning = emitWarning
      throw error
    }
  } catch (error) {
    // fallback to polyfill implementation
    Object.assign(globalThis, __webpack_require__(/*! web-streams-polyfill/dist/ponyfill.es2018.js */ "../../node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"))
  }
}

try {
  // Don't use node: prefix for this, require+node: is not supported until node v14.14
  // Only `import()` can use prefix in 12.20 and later
  const { Blob } = __webpack_require__(/*! buffer */ "buffer")
  if (Blob && !Blob.prototype.stream) {
    Blob.prototype.stream = function name (params) {
      let position = 0
      const blob = this

      return new ReadableStream({
        type: 'bytes',
        async pull (ctrl) {
          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE))
          const buffer = await chunk.arrayBuffer()
          position += buffer.byteLength
          ctrl.enqueue(new Uint8Array(buffer))

          if (position === blob.size) {
            ctrl.close()
          }
        }
      })
    }
  }
} catch (error) {}
/* c8 ignore end */


/***/ }),

/***/ "../../node_modules/data-uri-to-buffer/dist/index.js":
/*!***********************************************************!*\
  !*** ../../node_modules/data-uri-to-buffer/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataUriToBuffer: () => (/* binding */ dataUriToBuffer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @returns {Buffer} Buffer instance from Data URI
 * @api public
 */
function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, '');
    // split the URI up into the "metadata" and the "data" portions
    const firstComma = uri.indexOf(',');
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError('malformed data: URI');
    }
    // remove the "data:" scheme and parse the metadata
    const meta = uri.substring(5, firstComma).split(';');
    let charset = '';
    let base64 = false;
    const type = meta[0] || 'text/plain';
    let typeFull = type;
    for (let i = 1; i < meta.length; i++) {
        if (meta[i] === 'base64') {
            base64 = true;
        }
        else if (meta[i]) {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf('charset=') === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ';charset=US-ASCII';
        charset = 'US-ASCII';
    }
    // get the encoded data portion and decode URI-encoded chars
    const encoding = base64 ? 'base64' : 'ascii';
    const data = unescape(uri.substring(firstComma + 1));
    const buffer = Buffer.from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer.type = type;
    buffer.typeFull = typeFull;
    // set the `.charset` property
    buffer.charset = charset;
    return buffer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataUriToBuffer);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/fetch-blob/file.js":
/*!*********************************************!*\
  !*** ../../node_modules/fetch-blob/file.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../../node_modules/fetch-blob/index.js");


const _File = class File extends _index_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #lastModified = 0
  #name = ''

  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */// @ts-ignore
  constructor (fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`)
    }
    super(fileBits, options)

    if (options === null) options = {}

    // Simulate WebIDL type casting for NaN value in lastModified option.
    const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified)
    if (!Number.isNaN(lastModified)) {
      this.#lastModified = lastModified
    }

    this.#name = String(fileName)
  }

  get name () {
    return this.#name
  }

  get lastModified () {
    return this.#lastModified
  }

  get [Symbol.toStringTag] () {
    return 'File'
  }

  static [Symbol.hasInstance] (object) {
    return !!object && object instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__["default"] &&
      /^(File)$/.test(object[Symbol.toStringTag])
  }
}

/** @type {typeof globalThis.File} */// @ts-ignore
const File = _File
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "../../node_modules/fetch-blob/from.js":
/*!*********************************************!*\
  !*** ../../node_modules/fetch-blob/from.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   File: () => (/* reexport safe */ _file_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   blobFrom: () => (/* binding */ blobFrom),
/* harmony export */   blobFromSync: () => (/* binding */ blobFromSync),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fileFrom: () => (/* binding */ fileFrom),
/* harmony export */   fileFromSync: () => (/* binding */ fileFromSync)
/* harmony export */ });
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ "node:fs");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_domexception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-domexception */ "../../node_modules/node-domexception/index.js");
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.js */ "../../node_modules/fetch-blob/file.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "../../node_modules/fetch-blob/index.js");







const { stat } = node_fs__WEBPACK_IMPORTED_MODULE_0__.promises

/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */
const blobFromSync = (path, type) => fromBlob((0,node_fs__WEBPACK_IMPORTED_MODULE_0__.statSync)(path), path, type)

/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<Blob>}
 */
const blobFrom = (path, type) => stat(path).then(stat => fromBlob(stat, path, type))

/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<File>}
 */
const fileFrom = (path, type) => stat(path).then(stat => fromFile(stat, path, type))

/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */
const fileFromSync = (path, type) => fromFile((0,node_fs__WEBPACK_IMPORTED_MODULE_0__.statSync)(path), path, type)

// @ts-ignore
const fromBlob = (stat, path, type = '') => new _index_js__WEBPACK_IMPORTED_MODULE_4__["default"]([new BlobDataItem({
  path,
  size: stat.size,
  lastModified: stat.mtimeMs,
  start: 0
})], { type })

// @ts-ignore
const fromFile = (stat, path, type = '') => new _file_js__WEBPACK_IMPORTED_MODULE_3__["default"]([new BlobDataItem({
  path,
  size: stat.size,
  lastModified: stat.mtimeMs,
  start: 0
})], (0,node_path__WEBPACK_IMPORTED_MODULE_1__.basename)(path), { type, lastModified: stat.mtimeMs })

/**
 * This is a blob backed up by a file on the disk
 * with minium requirement. Its wrapped around a Blob as a blobPart
 * so you have no direct access to this.
 *
 * @private
 */
class BlobDataItem {
  #path
  #start

  constructor (options) {
    this.#path = options.path
    this.#start = options.start
    this.size = options.size
    this.lastModified = options.lastModified
  }

  /**
   * Slicing arguments is first validated and formatted
   * to not be out of range by Blob.prototype.slice
   */
  slice (start, end) {
    return new BlobDataItem({
      path: this.#path,
      lastModified: this.lastModified,
      size: end - start,
      start: this.#start + start
    })
  }

  async * stream () {
    const { mtimeMs } = await stat(this.#path)
    if (mtimeMs > this.lastModified) {
      throw new node_domexception__WEBPACK_IMPORTED_MODULE_2__('The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.', 'NotReadableError')
    }
    yield * (0,node_fs__WEBPACK_IMPORTED_MODULE_0__.createReadStream)(this.#path, {
      start: this.#start,
      end: this.#start + this.size - 1
    })
  }

  get [Symbol.toStringTag] () {
    return 'Blob'
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blobFromSync);



/***/ }),

/***/ "../../node_modules/fetch-blob/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/fetch-blob/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blob: () => (/* binding */ Blob),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _streams_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streams.cjs */ "../../node_modules/fetch-blob/streams.cjs");
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

// TODO (jimmywarting): in the feature use conditional loading with top level await (requires 14.x)
// Node has recently added whatwg stream into core



// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536

/** @param {(Blob | Uint8Array)[]} parts */
async function * toIterator (parts, clone = true) {
  for (const part of parts) {
    if ('stream' in part) {
      yield * (/** @type {AsyncIterableIterator<Uint8Array>} */ (part.stream()))
    } else if (ArrayBuffer.isView(part)) {
      if (clone) {
        let position = part.byteOffset
        const end = part.byteOffset + part.byteLength
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE)
          const chunk = part.buffer.slice(position, position + size)
          position += chunk.byteLength
          yield new Uint8Array(chunk)
        }
      } else {
        yield part
      }
    /* c8 ignore next 10 */
    } else {
      // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
      let position = 0, b = (/** @type {Blob} */ (part))
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE))
        const buffer = await chunk.arrayBuffer()
        position += buffer.byteLength
        yield new Uint8Array(buffer)
      }
    }
  }
}

const _Blob = class Blob {
  /** @type {Array.<(Blob|Uint8Array)>} */
  #parts = []
  #type = ''
  #size = 0
  #endings = 'transparent'

  /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */
  constructor (blobParts = [], options = {}) {
    if (typeof blobParts !== 'object' || blobParts === null) {
      throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.')
    }

    if (typeof blobParts[Symbol.iterator] !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.')
    }

    if (typeof options !== 'object' && typeof options !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.')
    }

    if (options === null) options = {}

    const encoder = new TextEncoder()
    for (const element of blobParts) {
      let part
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength))
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0))
      } else if (element instanceof Blob) {
        part = element
      } else {
        part = encoder.encode(`${element}`)
      }

      this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size
      this.#parts.push(part)
    }

    this.#endings = `${options.endings === undefined ? 'transparent' : options.endings}`
    const type = options.type === undefined ? '' : String(options.type)
    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : ''
  }

  /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */
  get size () {
    return this.#size
  }

  /**
   * The type property of a Blob object returns the MIME type of the file.
   */
  get type () {
    return this.#type
  }

  /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */
  async text () {
    // More optimized than using this.arrayBuffer()
    // that requires twice as much ram
    const decoder = new TextDecoder()
    let str = ''
    for await (const part of toIterator(this.#parts, false)) {
      str += decoder.decode(part, { stream: true })
    }
    // Remaining
    str += decoder.decode()
    return str
  }

  /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */
  async arrayBuffer () {
    // Easier way... Just a unnecessary overhead
    // const view = new Uint8Array(this.size);
    // await this.stream().getReader({mode: 'byob'}).read(view);
    // return view.buffer;

    const data = new Uint8Array(this.size)
    let offset = 0
    for await (const chunk of toIterator(this.#parts, false)) {
      data.set(chunk, offset)
      offset += chunk.length
    }

    return data.buffer
  }

  stream () {
    const it = toIterator(this.#parts, true)

    return new globalThis.ReadableStream({
      // @ts-ignore
      type: 'bytes',
      async pull (ctrl) {
        const chunk = await it.next()
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value)
      },

      async cancel () {
        await it.return()
      }
    })
  }

  /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */
  slice (start = 0, end = this.size, type = '') {
    const { size } = this

    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size)
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size)

    const span = Math.max(relativeEnd - relativeStart, 0)
    const parts = this.#parts
    const blobParts = []
    let added = 0

    for (const part of parts) {
      // don't add the overflow to new blobParts
      if (added >= span) {
        break
      }

      const size = ArrayBuffer.isView(part) ? part.byteLength : part.size
      if (relativeStart && size <= relativeStart) {
        // Skip the beginning and change the relative
        // start & end position as we skip the unwanted parts
        relativeStart -= size
        relativeEnd -= size
      } else {
        let chunk
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size, relativeEnd))
          added += chunk.byteLength
        } else {
          chunk = part.slice(relativeStart, Math.min(size, relativeEnd))
          added += chunk.size
        }
        relativeEnd -= size
        blobParts.push(chunk)
        relativeStart = 0 // All next sequential parts should start at 0
      }
    }

    const blob = new Blob([], { type: String(type).toLowerCase() })
    blob.#size = span
    blob.#parts = blobParts

    return blob
  }

  get [Symbol.toStringTag] () {
    return 'Blob'
  }

  static [Symbol.hasInstance] (object) {
    return (
      object &&
      typeof object === 'object' &&
      typeof object.constructor === 'function' &&
      (
        typeof object.stream === 'function' ||
        typeof object.arrayBuffer === 'function'
      ) &&
      /^(Blob|File)$/.test(object[Symbol.toStringTag])
    )
  }
}

Object.defineProperties(_Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
})

/** @type {typeof globalThis.Blob} */
const Blob = _Blob
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blob);


/***/ }),

/***/ "../../node_modules/formdata-polyfill/esm.min.js":
/*!*******************************************************!*\
  !*** ../../node_modules/formdata-polyfill/esm.min.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   FormData: () => (/* binding */ FormData),
/* harmony export */   formDataToBlob: () => (/* binding */ formDataToBlob)
/* harmony export */ });
/* harmony import */ var fetch_blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fetch-blob */ "../../node_modules/fetch-blob/index.js");
/* harmony import */ var fetch_blob_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetch-blob/file.js */ "../../node_modules/fetch-blob/file.js");
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */




var {toStringTag:t,iterator:i,hasInstance:h}=Symbol,
r=Math.random,
m='append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','),
f=(a,b,c)=>(a+='',/^(Blob|File)$/.test(b && b[t])?[(c=c!==void 0?c+'':b[t]=='File'?b.name:'blob',a),b.name!==c||b[t]=='blob'?new fetch_blob_file_js__WEBPACK_IMPORTED_MODULE_1__["default"]([b],c,b):b]:[a,b+'']),
e=(c,f)=>(f?c:c.replace(/\r?\n|\r/g,'\r\n')).replace(/\n/g,'%0A').replace(/\r/g,'%0D').replace(/"/g,'%22'),
x=(n, a, e)=>{if(a.length<e){throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`)}}

const File = fetch_blob_file_js__WEBPACK_IMPORTED_MODULE_1__["default"]

/** @type {typeof globalThis.FormData} */
const FormData = class FormData {
#d=[];
constructor(...a){if(a.length)throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`)}
get [t]() {return 'FormData'}
[i](){return this.entries()}
static [h](o) {return o&&typeof o==='object'&&o[t]==='FormData'&&!m.some(m=>typeof o[m]!='function')}
append(...a){x('append',arguments,2);this.#d.push(f(...a))}
delete(a){x('delete',arguments,1);a+='';this.#d=this.#d.filter(([b])=>b!==a)}
get(a){x('get',arguments,1);a+='';for(var b=this.#d,l=b.length,c=0;c<l;c++)if(b[c][0]===a)return b[c][1];return null}
getAll(a,b){x('getAll',arguments,1);b=[];a+='';this.#d.forEach(c=>c[0]===a&&b.push(c[1]));return b}
has(a){x('has',arguments,1);a+='';return this.#d.some(b=>b[0]===a)}
forEach(a,b){x('forEach',arguments,1);for(var [c,d]of this)a.call(b,d,c,this)}
set(...a){x('set',arguments,2);var b=[],c=!0;a=f(...a);this.#d.forEach(d=>{d[0]===a[0]?c&&(c=!b.push(a)):b.push(d)});c&&b.push(a);this.#d=b}
*entries(){yield*this.#d}
*keys(){for(var[a]of this)yield a}
*values(){for(var[,a]of this)yield a}}

/** @param {FormData} F */
function formDataToBlob (F,B=fetch_blob__WEBPACK_IMPORTED_MODULE_0__["default"]){
var b=`${r()}${r()}`.replace(/\./g, '').slice(-28).padStart(32, '-'),c=[],p=`--${b}\r\nContent-Disposition: form-data; name="`
F.forEach((v,n)=>typeof v=='string'
?c.push(p+e(n)+`"\r\n\r\n${v.replace(/\r(?!\n)|(?<!\r)\n/g, '\r\n')}\r\n`)
:c.push(p+e(n)+`"; filename="${e(v.name, 1)}"\r\nContent-Type: ${v.type||"application/octet-stream"}\r\n\r\n`, v, '\r\n'))
c.push(`--${b}--`)
return new B(c,{type:"multipart/form-data; boundary="+b})}


/***/ }),

/***/ "../../node_modules/node-fetch/src/body.js":
/*!*************************************************!*\
  !*** ../../node_modules/node-fetch/src/body.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   "default": () => (/* binding */ Body),
/* harmony export */   extractContentType: () => (/* binding */ extractContentType),
/* harmony export */   getTotalBytes: () => (/* binding */ getTotalBytes),
/* harmony export */   writeToStream: () => (/* binding */ writeToStream)
/* harmony export */ });
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:stream */ "node:stream");
/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:util */ "node:util");
/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:buffer */ "node:buffer");
/* harmony import */ var fetch_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fetch-blob */ "../../node_modules/fetch-blob/index.js");
/* harmony import */ var formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formdata-polyfill/esm.min.js */ "../../node_modules/formdata-polyfill/esm.min.js");
/* harmony import */ var _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/fetch-error.js */ "../../node_modules/node-fetch/src/errors/fetch-error.js");
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/base.js */ "../../node_modules/node-fetch/src/errors/base.js");
/* harmony import */ var _utils_is_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/is.js */ "../../node_modules/node-fetch/src/utils/is.js");

/**
 * Body.js
 *
 * Body interface provides common methods for Request and Response
 */












const pipeline = (0,node_util__WEBPACK_IMPORTED_MODULE_1__.promisify)(node_stream__WEBPACK_IMPORTED_MODULE_0__.pipeline);
const INTERNALS = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Body {
	constructor(body, {
		size = 0
	} = {}) {
		let boundary = null;

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isURLSearchParameters)(body)) {
			// Body is a URLSearchParams
			body = node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(body.toString());
		} else if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isBlob)(body)) {
			// Body is blob
		} else if (node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(body)) {
			// Body is Buffer
		} else if (node_util__WEBPACK_IMPORTED_MODULE_1__.types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			body = node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(body);
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			body = node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
		} else if (body instanceof node_stream__WEBPACK_IMPORTED_MODULE_0__) {
			// Body is stream
		} else if (body instanceof formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_4__.FormData) {
			// Body is FormData
			body = (0,formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_4__.formDataToBlob)(body);
			boundary = body.type.split('=')[1];
		} else {
			// None of the above
			// coerce to string then buffer
			body = node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(String(body));
		}

		let stream = body;

		if (node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(body)) {
			stream = node_stream__WEBPACK_IMPORTED_MODULE_0__.Readable.from(body);
		} else if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isBlob)(body)) {
			stream = node_stream__WEBPACK_IMPORTED_MODULE_0__.Readable.from(body.stream());
		}

		this[INTERNALS] = {
			body,
			stream,
			boundary,
			disturbed: false,
			error: null
		};
		this.size = size;

		if (body instanceof node_stream__WEBPACK_IMPORTED_MODULE_0__) {
			body.on('error', error_ => {
				const error = error_ instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_6__.FetchBaseError ?
					error_ :
					new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__.FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, 'system', error_);
				this[INTERNALS].error = error;
			});
		}
	}

	get body() {
		return this[INTERNALS].stream;
	}

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
	}

	async formData() {
		const ct = this.headers.get('content-type');

		if (ct.startsWith('application/x-www-form-urlencoded')) {
			const formData = new formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_4__.FormData();
			const parameters = new URLSearchParams(await this.text());

			for (const [name, value] of parameters) {
				formData.append(name, value);
			}

			return formData;
		}

		const {toFormData} = await __webpack_require__.e(/*! import() */ "node_modules_node-fetch_src_utils_multipart-parser_js").then(__webpack_require__.bind(__webpack_require__, /*! ./utils/multipart-parser.js */ "../../node_modules/node-fetch/src/utils/multipart-parser.js"));
		return toFormData(this.body, ct);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS].body && this[INTERNALS].body.type) || '';
		const buf = await this.arrayBuffer();

		return new fetch_blob__WEBPACK_IMPORTED_MODULE_3__["default"]([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		const text = await this.text();
		return JSON.parse(text);
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return new TextDecoder().decode(buffer);
	}

	/**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */
	buffer() {
		return consumeBody(this);
	}
}

Body.prototype.buffer = (0,node_util__WEBPACK_IMPORTED_MODULE_1__.deprecate)(Body.prototype.buffer, 'Please use \'response.arrayBuffer()\' instead of \'response.buffer()\'', 'node-fetch#buffer');

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: {enumerable: true},
	bodyUsed: {enumerable: true},
	arrayBuffer: {enumerable: true},
	blob: {enumerable: true},
	json: {enumerable: true},
	text: {enumerable: true},
	data: {get: (0,node_util__WEBPACK_IMPORTED_MODULE_1__.deprecate)(() => {},
		'data doesn\'t exist, use json(), text(), arrayBuffer(), or body instead',
		'https://github.com/node-fetch/node-fetch/issues/1000 (response)')}
});

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */
async function consumeBody(data) {
	if (data[INTERNALS].disturbed) {
		throw new TypeError(`body used already for: ${data.url}`);
	}

	data[INTERNALS].disturbed = true;

	if (data[INTERNALS].error) {
		throw data[INTERNALS].error;
	}

	const {body} = data;

	// Body is null
	if (body === null) {
		return node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(0);
	}

	/* c8 ignore next 3 */
	if (!(body instanceof node_stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(0);
	}

	// Body is stream
	// get ready to actually consume the body
	const accum = [];
	let accumBytes = 0;

	try {
		for await (const chunk of body) {
			if (data.size > 0 && accumBytes + chunk.length > data.size) {
				const error = new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__.FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
				body.destroy(error);
				throw error;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		}
	} catch (error) {
		const error_ = error instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_6__.FetchBaseError ? error : new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__.FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
		throw error_;
	}

	if (body.readableEnded === true || body._readableState.ended === true) {
		try {
			if (accum.every(c => typeof c === 'string')) {
				return node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(accum.join(''));
			}

			return node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat(accum, accumBytes);
		} catch (error) {
			throw new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__.FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
		}
	} else {
		throw new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_7__.FetchError(`Premature close of server response while trying to fetch ${data.url}`);
	}
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */
const clone = (instance, highWaterMark) => {
	let p1;
	let p2;
	let {body} = instance[INTERNALS];

	// Don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// Check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if ((body instanceof node_stream__WEBPACK_IMPORTED_MODULE_0__) && (typeof body.getBoundary !== 'function')) {
		// Tee instance body
		p1 = new node_stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough({highWaterMark});
		p2 = new node_stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough({highWaterMark});
		body.pipe(p1);
		body.pipe(p2);
		// Set instance body to teed body and return the other teed body
		instance[INTERNALS].stream = p1;
		body = p2;
	}

	return body;
};

const getNonSpecFormDataBoundary = (0,node_util__WEBPACK_IMPORTED_MODULE_1__.deprecate)(
	body => body.getBoundary(),
	'form-data doesn\'t follow the spec and requires special treatment. Use alternative package',
	'https://github.com/node-fetch/node-fetch/issues/1167'
);

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */
const extractContentType = (body, request) => {
	// Body is null or undefined
	if (body === null) {
		return null;
	}

	// Body is string
	if (typeof body === 'string') {
		return 'text/plain;charset=UTF-8';
	}

	// Body is a URLSearchParams
	if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isURLSearchParameters)(body)) {
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	}

	// Body is blob
	if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isBlob)(body)) {
		return body.type || null;
	}

	// Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
	if (node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(body) || node_util__WEBPACK_IMPORTED_MODULE_1__.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
		return null;
	}

	if (body instanceof formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_4__.FormData) {
		return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getBoundary === 'function') {
		return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
	}

	// Body is stream - can't really do much about this
	if (body instanceof node_stream__WEBPACK_IMPORTED_MODULE_0__) {
		return null;
	}

	// Body constructor defaults other things to string
	return 'text/plain;charset=UTF-8';
};

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */
const getTotalBytes = request => {
	const {body} = request[INTERNALS];

	// Body is null or undefined
	if (body === null) {
		return 0;
	}

	// Body is Blob
	if ((0,_utils_is_js__WEBPACK_IMPORTED_MODULE_5__.isBlob)(body)) {
		return body.size;
	}

	// Body is Buffer
	if (node_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(body)) {
		return body.length;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getLengthSync === 'function') {
		return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
	}

	// Body is stream
	return null;
};

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {Promise<void>}
 */
const writeToStream = async (dest, {body}) => {
	if (body === null) {
		// Body is null
		dest.end();
	} else {
		// Body is stream
		await pipeline(body, dest);
	}
};


/***/ }),

/***/ "../../node_modules/node-fetch/src/errors/abort-error.js":
/*!***************************************************************!*\
  !*** ../../node_modules/node-fetch/src/errors/abort-error.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* binding */ AbortError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/node-fetch/src/errors/base.js");


/**
 * AbortError interface for cancelled requests
 */
class AbortError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.FetchBaseError {
	constructor(message, type = 'aborted') {
		super(message, type);
	}
}


/***/ }),

/***/ "../../node_modules/node-fetch/src/errors/base.js":
/*!********************************************************!*\
  !*** ../../node_modules/node-fetch/src/errors/base.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchBaseError: () => (/* binding */ FetchBaseError)
/* harmony export */ });
class FetchBaseError extends Error {
	constructor(message, type) {
		super(message);
		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);

		this.type = type;
	}

	get name() {
		return this.constructor.name;
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}


/***/ }),

/***/ "../../node_modules/node-fetch/src/errors/fetch-error.js":
/*!***************************************************************!*\
  !*** ../../node_modules/node-fetch/src/errors/fetch-error.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchError: () => (/* binding */ FetchError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "../../node_modules/node-fetch/src/errors/base.js");



/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/

/**
 * FetchError interface for operational errors
 */
class FetchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.FetchBaseError {
	/**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */
	constructor(message, type, systemError) {
		super(message, type);
		// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = this.errno = systemError.code;
			this.erroredSysCall = systemError.syscall;
		}
	}
}


/***/ }),

/***/ "../../node_modules/node-fetch/src/headers.js":
/*!****************************************************!*\
  !*** ../../node_modules/node-fetch/src/headers.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Headers),
/* harmony export */   fromRawHeaders: () => (/* binding */ fromRawHeaders)
/* harmony export */ });
/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:util */ "node:util");
/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:http */ "node:http");
/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */




/* c8 ignore next 9 */
const validateHeaderName = typeof node_http__WEBPACK_IMPORTED_MODULE_1__.validateHeaderName === 'function' ?
	node_http__WEBPACK_IMPORTED_MODULE_1__.validateHeaderName :
	name => {
		if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
			const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
			Object.defineProperty(error, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
			throw error;
		}
	};

/* c8 ignore next 9 */
const validateHeaderValue = typeof node_http__WEBPACK_IMPORTED_MODULE_1__.validateHeaderValue === 'function' ?
	node_http__WEBPACK_IMPORTED_MODULE_1__.validateHeaderValue :
	(name, value) => {
		if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
			const error = new TypeError(`Invalid character in header content ["${name}"]`);
			Object.defineProperty(error, 'code', {value: 'ERR_INVALID_CHAR'});
			throw error;
		}
	};

/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 */
class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) { // eslint-disable-line no-eq-null, eqeqeq
			// No op
		} else if (typeof init === 'object' && !node_util__WEBPACK_IMPORTED_MODULE_0__.types.isBoxedPrimitive(init)) {
			const method = init[Symbol.iterator];
			// eslint-disable-next-line no-eq-null, eqeqeq
			if (method == null) {
				// Record<ByteString, ByteString>
				result.push(...Object.entries(init));
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// Sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				result = [...init]
					.map(pair => {
						if (
							typeof pair !== 'object' || node_util__WEBPACK_IMPORTED_MODULE_0__.types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object');
						}

						return [...pair];
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple');
						}

						return [...pair];
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined;

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						return name => {
							validateHeaderName(name);
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
		});
		/* c8 ignore next */
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			Reflect.apply(callback, thisArg, [this.get(name), name, this]);
		}
	}

	* values() {
		for (const name of this.keys()) {
			yield this.get(name);
		}
	}

	/**
	 * @type {() => IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			yield [name, this.get(name)];
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {});
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, {});
	}
}

/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */
Object.defineProperties(
	Headers.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
		result[property] = {enumerable: true};
		return result;
	}, {})
);

/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */
function fromRawHeaders(headers = []) {
	return new Headers(
		headers
			// Split into pairs
			.reduce((result, value, index, array) => {
				if (index % 2 === 0) {
					result.push(array.slice(index, index + 2));
				}

				return result;
			}, [])
			.filter(([name, value]) => {
				try {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return true;
				} catch {
					return false;
				}
			})

	);
}


/***/ }),

/***/ "../../node_modules/node-fetch/src/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/node-fetch/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* reexport safe */ _errors_abort_error_js__WEBPACK_IMPORTED_MODULE_12__.AbortError),
/* harmony export */   Blob: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.Blob),
/* harmony export */   FetchError: () => (/* reexport safe */ _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError),
/* harmony export */   File: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.File),
/* harmony export */   FormData: () => (/* reexport safe */ formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_6__.FormData),
/* harmony export */   Headers: () => (/* reexport safe */ _headers_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Request: () => (/* reexport safe */ _request_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Response: () => (/* reexport safe */ _response_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   blobFrom: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.blobFrom),
/* harmony export */   blobFromSync: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.blobFromSync),
/* harmony export */   "default": () => (/* binding */ fetch),
/* harmony export */   fileFrom: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.fileFrom),
/* harmony export */   fileFromSync: () => (/* reexport safe */ fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__.fileFromSync),
/* harmony export */   isRedirect: () => (/* reexport safe */ _utils_is_redirect_js__WEBPACK_IMPORTED_MODULE_13__.isRedirect)
/* harmony export */ });
/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:http */ "node:http");
/* harmony import */ var node_https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:https */ "node:https");
/* harmony import */ var node_zlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:zlib */ "node:zlib");
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:stream */ "node:stream");
/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:buffer */ "node:buffer");
/* harmony import */ var data_uri_to_buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data-uri-to-buffer */ "../../node_modules/data-uri-to-buffer/dist/index.js");
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./body.js */ "../../node_modules/node-fetch/src/body.js");
/* harmony import */ var _response_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./response.js */ "../../node_modules/node-fetch/src/response.js");
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headers.js */ "../../node_modules/node-fetch/src/headers.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request.js */ "../../node_modules/node-fetch/src/request.js");
/* harmony import */ var _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors/fetch-error.js */ "../../node_modules/node-fetch/src/errors/fetch-error.js");
/* harmony import */ var _errors_abort_error_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./errors/abort-error.js */ "../../node_modules/node-fetch/src/errors/abort-error.js");
/* harmony import */ var _utils_is_redirect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/is-redirect.js */ "../../node_modules/node-fetch/src/utils/is-redirect.js");
/* harmony import */ var formdata_polyfill_esm_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formdata-polyfill/esm.min.js */ "../../node_modules/formdata-polyfill/esm.min.js");
/* harmony import */ var _utils_is_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/is.js */ "../../node_modules/node-fetch/src/utils/is.js");
/* harmony import */ var _utils_referrer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/referrer.js */ "../../node_modules/node-fetch/src/utils/referrer.js");
/* harmony import */ var fetch_blob_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fetch-blob/from.js */ "../../node_modules/fetch-blob/from.js");
/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */
























const supportedSchemas = new Set(['data:', 'http:', 'https:']);

/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */
async function fetch(url, options_) {
	return new Promise((resolve, reject) => {
		// Build request object
		const request = new _request_js__WEBPACK_IMPORTED_MODULE_9__["default"](url, options_);
		const {parsedURL, options} = (0,_request_js__WEBPACK_IMPORTED_MODULE_9__.getNodeRequestOptions)(request);
		if (!supportedSchemas.has(parsedURL.protocol)) {
			throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, '')}" is not supported.`);
		}

		if (parsedURL.protocol === 'data:') {
			const data = (0,data_uri_to_buffer__WEBPACK_IMPORTED_MODULE_5__["default"])(request.url);
			const response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](data, {headers: {'Content-Type': data.typeFull}});
			resolve(response);
			return;
		}

		// Wrap http.request into fetch
		const send = (parsedURL.protocol === 'https:' ? node_https__WEBPACK_IMPORTED_MODULE_1__ : node_http__WEBPACK_IMPORTED_MODULE_0__).request;
		const {signal} = request;
		let response = null;

		const abort = () => {
			const error = new _errors_abort_error_js__WEBPACK_IMPORTED_MODULE_12__.AbortError('The operation was aborted.');
			reject(error);
			if (request.body && request.body instanceof node_stream__WEBPACK_IMPORTED_MODULE_3__.Readable) {
				request.body.destroy(error);
			}

			if (!response || !response.body) {
				return;
			}

			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = () => {
			abort();
			finalize();
		};

		// Send request
		const request_ = send(parsedURL.toString(), options);

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		const finalize = () => {
			request_.abort();
			if (signal) {
				signal.removeEventListener('abort', abortAndFinalize);
			}
		};

		request_.on('error', error => {
			reject(new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError(`request to ${request.url} failed, reason: ${error.message}`, 'system', error));
			finalize();
		});

		fixResponseChunkedTransferBadEnding(request_, error => {
			if (response && response.body) {
				response.body.destroy(error);
			}
		});

		/* c8 ignore next 18 */
		if (process.version < 'v14') {
			// Before Node.js 14, pipeline() does not fully support async iterators and does not always
			// properly handle when the socket close/end events are out of order.
			request_.on('socket', s => {
				let endedWithEventsCount;
				s.prependListener('end', () => {
					endedWithEventsCount = s._eventsCount;
				});
				s.prependListener('close', hadError => {
					// if end happened before close but the socket didn't emit an error, do it now
					if (response && endedWithEventsCount < s._eventsCount && !hadError) {
						const error = new Error('Premature close');
						error.code = 'ERR_STREAM_PREMATURE_CLOSE';
						response.body.emit('error', error);
					}
				});
			});
		}

		request_.on('response', response_ => {
			request_.setTimeout(0);
			const headers = (0,_headers_js__WEBPACK_IMPORTED_MODULE_8__.fromRawHeaders)(response_.rawHeaders);

			// HTTP fetch step 5
			if ((0,_utils_is_redirect_js__WEBPACK_IMPORTED_MODULE_13__.isRedirect)(response_.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				let locationURL = null;
				try {
					locationURL = location === null ? null : new URL(location, request.url);
				} catch {
					// error here can only be invalid URL in Location: header
					// do not throw when options.redirect == manual
					// let the user extract the errorneous redirect URL
					if (request.redirect !== 'manual') {
						reject(new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
						finalize();
						return;
					}
				}

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// Nothing to do
						break;
					case 'follow': {
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOptions = {
							headers: new _headers_js__WEBPACK_IMPORTED_MODULE_8__["default"](request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: (0,_body_js__WEBPACK_IMPORTED_MODULE_14__.clone)(request),
							signal: request.signal,
							size: request.size,
							referrer: request.referrer,
							referrerPolicy: request.referrerPolicy
						};

						// when forwarding sensitive headers like "Authorization",
						// "WWW-Authenticate", and "Cookie" to untrusted targets,
						// headers will be ignored when following a redirect to a domain
						// that is not a subdomain match or exact match of the initial domain.
						// For example, a redirect from "foo.com" to either "foo.com" or "sub.foo.com"
						// will forward the sensitive headers, but a redirect to "bar.com" will not.
						// headers will also be ignored when following a redirect to a domain using
						// a different protocol. For example, a redirect from "https://foo.com" to "http://foo.com"
						// will not forward the sensitive headers
						if (!(0,_utils_is_js__WEBPACK_IMPORTED_MODULE_15__.isDomainOrSubdomain)(request.url, locationURL) || !(0,_utils_is_js__WEBPACK_IMPORTED_MODULE_15__.isSameProtocol)(request.url, locationURL)) {
							for (const name of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
								requestOptions.headers.delete(name);
							}
						}

						// HTTP-redirect fetch step 9
						if (response_.statusCode !== 303 && request.body && options_.body instanceof node_stream__WEBPACK_IMPORTED_MODULE_3__.Readable) {
							reject(new _errors_fetch_error_js__WEBPACK_IMPORTED_MODULE_11__.FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
							requestOptions.method = 'GET';
							requestOptions.body = undefined;
							requestOptions.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 14
						const responseReferrerPolicy = (0,_utils_referrer_js__WEBPACK_IMPORTED_MODULE_16__.parseReferrerPolicyFromHeader)(headers);
						if (responseReferrerPolicy) {
							requestOptions.referrerPolicy = responseReferrerPolicy;
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new _request_js__WEBPACK_IMPORTED_MODULE_9__["default"](locationURL, requestOptions)));
						finalize();
						return;
					}

					default:
						return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
				}
			}

			// Prepare response
			if (signal) {
				response_.once('end', () => {
					signal.removeEventListener('abort', abortAndFinalize);
				});
			}

			let body = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(response_, new node_stream__WEBPACK_IMPORTED_MODULE_3__.PassThrough(), error => {
				if (error) {
					reject(error);
				}
			});
			// see https://github.com/nodejs/node/pull/29376
			/* c8 ignore next 3 */
			if (process.version < 'v12.10') {
				response_.on('aborted', abortAndFinalize);
			}

			const responseOptions = {
				url: request.url,
				status: response_.statusCode,
				statusText: response_.statusMessage,
				headers,
				size: request.size,
				counter: request.counter,
				highWaterMark: request.highWaterMark
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
				response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: node_zlib__WEBPACK_IMPORTED_MODULE_2__.Z_SYNC_FLUSH,
				finishFlush: node_zlib__WEBPACK_IMPORTED_MODULE_2__.Z_SYNC_FLUSH
			};

			// For gzip
			if (codings === 'gzip' || codings === 'x-gzip') {
				body = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(body, node_zlib__WEBPACK_IMPORTED_MODULE_2__.createGunzip(zlibOptions), error => {
					if (error) {
						reject(error);
					}
				});
				response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
				resolve(response);
				return;
			}

			// For deflate
			if (codings === 'deflate' || codings === 'x-deflate') {
				// Handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(response_, new node_stream__WEBPACK_IMPORTED_MODULE_3__.PassThrough(), error => {
					if (error) {
						reject(error);
					}
				});
				raw.once('data', chunk => {
					// See http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(body, node_zlib__WEBPACK_IMPORTED_MODULE_2__.createInflate(), error => {
							if (error) {
								reject(error);
							}
						});
					} else {
						body = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(body, node_zlib__WEBPACK_IMPORTED_MODULE_2__.createInflateRaw(), error => {
							if (error) {
								reject(error);
							}
						});
					}

					response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
					resolve(response);
				});
				raw.once('end', () => {
					// Some old IIS servers return zero-length OK deflate responses, so
					// 'data' is never emitted. See https://github.com/node-fetch/node-fetch/pull/903
					if (!response) {
						response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
						resolve(response);
					}
				});
				return;
			}

			// For br
			if (codings === 'br') {
				body = (0,node_stream__WEBPACK_IMPORTED_MODULE_3__.pipeline)(body, node_zlib__WEBPACK_IMPORTED_MODULE_2__.createBrotliDecompress(), error => {
					if (error) {
						reject(error);
					}
				});
				response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
				resolve(response);
				return;
			}

			// Otherwise, use response as-is
			response = new _response_js__WEBPACK_IMPORTED_MODULE_10__["default"](body, responseOptions);
			resolve(response);
		});

		// eslint-disable-next-line promise/prefer-await-to-then
		(0,_body_js__WEBPACK_IMPORTED_MODULE_14__.writeToStream)(request_, request).catch(reject);
	});
}

function fixResponseChunkedTransferBadEnding(request, errorCallback) {
	const LAST_CHUNK = node_buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.from('0\r\n\r\n');

	let isChunkedTransfer = false;
	let properLastChunkReceived = false;
	let previousChunk;

	request.on('response', response => {
		const {headers} = response;
		isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
	});

	request.on('socket', socket => {
		const onSocketClose = () => {
			if (isChunkedTransfer && !properLastChunkReceived) {
				const error = new Error('Premature close');
				error.code = 'ERR_STREAM_PREMATURE_CLOSE';
				errorCallback(error);
			}
		};

		const onData = buf => {
			properLastChunkReceived = node_buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;

			// Sometimes final 0-length chunk and end of message code are in separate packets
			if (!properLastChunkReceived && previousChunk) {
				properLastChunkReceived = (
					node_buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
					node_buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0
				);
			}

			previousChunk = buf;
		};

		socket.prependListener('close', onSocketClose);
		socket.on('data', onData);

		request.on('close', () => {
			socket.removeListener('close', onSocketClose);
			socket.removeListener('data', onData);
		});
	});
}


/***/ }),

/***/ "../../node_modules/node-fetch/src/request.js":
/*!****************************************************!*\
  !*** ../../node_modules/node-fetch/src/request.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Request),
/* harmony export */   getNodeRequestOptions: () => (/* binding */ getNodeRequestOptions)
/* harmony export */ });
/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:url */ "node:url");
/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:util */ "node:util");
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headers.js */ "../../node_modules/node-fetch/src/headers.js");
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body.js */ "../../node_modules/node-fetch/src/body.js");
/* harmony import */ var _utils_is_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is.js */ "../../node_modules/node-fetch/src/utils/is.js");
/* harmony import */ var _utils_get_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/get-search.js */ "../../node_modules/node-fetch/src/utils/get-search.js");
/* harmony import */ var _utils_referrer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/referrer.js */ "../../node_modules/node-fetch/src/utils/referrer.js");
/**
 * Request.js
 *
 * Request class contains server only options
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */









const INTERNALS = Symbol('Request internals');

/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} object
 * @return {boolean}
 */
const isRequest = object => {
	return (
		typeof object === 'object' &&
		typeof object[INTERNALS] === 'object'
	);
};

const doBadDataWarn = (0,node_util__WEBPACK_IMPORTED_MODULE_1__.deprecate)(() => {},
	'.data is not a valid RequestInit property, use .body instead',
	'https://github.com/node-fetch/node-fetch/issues/1000 (request)');

/**
 * Request class
 *
 * Ref: https://fetch.spec.whatwg.org/#request-class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request extends _body_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
	constructor(input, init = {}) {
		let parsedURL;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(input)) {
			parsedURL = new URL(input.url);
		} else {
			parsedURL = new URL(input);
			input = {};
		}

		if (parsedURL.username !== '' || parsedURL.password !== '') {
			throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
		}

		let method = init.method || input.method || 'GET';
		if (/^(delete|get|head|options|post|put)$/i.test(method)) {
			method = method.toUpperCase();
		}

		if (!isRequest(init) && 'data' in init) {
			doBadDataWarn();
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if ((init.body != null || (isRequest(input) && input.body !== null)) &&
			(method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		const inputBody = init.body ?
			init.body :
			(isRequest(input) && input.body !== null ?
				(0,_body_js__WEBPACK_IMPORTED_MODULE_2__.clone)(input) :
				null);

		super(inputBody, {
			size: init.size || input.size || 0
		});

		const headers = new _headers_js__WEBPACK_IMPORTED_MODULE_3__["default"](init.headers || input.headers || {});

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = (0,_body_js__WEBPACK_IMPORTED_MODULE_2__.extractContentType)(inputBody, this);
			if (contentType) {
				headers.set('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ?
			input.signal :
			null;
		if ('signal' in init) {
			signal = init.signal;
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (signal != null && !(0,_utils_is_js__WEBPACK_IMPORTED_MODULE_4__.isAbortSignal)(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

		// §5.4, Request constructor steps, step 15.1
		// eslint-disable-next-line no-eq-null, eqeqeq
		let referrer = init.referrer == null ? input.referrer : init.referrer;
		if (referrer === '') {
			// §5.4, Request constructor steps, step 15.2
			referrer = 'no-referrer';
		} else if (referrer) {
			// §5.4, Request constructor steps, step 15.3.1, 15.3.2
			const parsedReferrer = new URL(referrer);
			// §5.4, Request constructor steps, step 15.3.3, 15.3.4
			referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
		} else {
			referrer = undefined;
		}

		this[INTERNALS] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal,
			referrer
		};

		// Node-fetch-only options
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;

		// §5.4, Request constructor steps, step 16.
		// Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
		this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
	}

	/** @returns {string} */
	get method() {
		return this[INTERNALS].method;
	}

	/** @returns {string} */
	get url() {
		return (0,node_url__WEBPACK_IMPORTED_MODULE_0__.format)(this[INTERNALS].parsedURL);
	}

	/** @returns {Headers} */
	get headers() {
		return this[INTERNALS].headers;
	}

	get redirect() {
		return this[INTERNALS].redirect;
	}

	/** @returns {AbortSignal} */
	get signal() {
		return this[INTERNALS].signal;
	}

	// https://fetch.spec.whatwg.org/#dom-request-referrer
	get referrer() {
		if (this[INTERNALS].referrer === 'no-referrer') {
			return '';
		}

		if (this[INTERNALS].referrer === 'client') {
			return 'about:client';
		}

		if (this[INTERNALS].referrer) {
			return this[INTERNALS].referrer.toString();
		}

		return undefined;
	}

	get referrerPolicy() {
		return this[INTERNALS].referrerPolicy;
	}

	set referrerPolicy(referrerPolicy) {
		this[INTERNALS].referrerPolicy = (0,_utils_referrer_js__WEBPACK_IMPORTED_MODULE_5__.validateReferrerPolicy)(referrerPolicy);
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}
}

Object.defineProperties(Request.prototype, {
	method: {enumerable: true},
	url: {enumerable: true},
	headers: {enumerable: true},
	redirect: {enumerable: true},
	clone: {enumerable: true},
	signal: {enumerable: true},
	referrer: {enumerable: true},
	referrerPolicy: {enumerable: true}
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param {Request} request - A Request instance
 * @return The options object to be passed to http.request
 */
const getNodeRequestOptions = request => {
	const {parsedURL} = request[INTERNALS];
	const headers = new _headers_js__WEBPACK_IMPORTED_MODULE_3__["default"](request[INTERNALS].headers);

	// Fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body === null && /^(post|put)$/i.test(request.method)) {
		contentLengthValue = '0';
	}

	if (request.body !== null) {
		const totalBytes = (0,_body_js__WEBPACK_IMPORTED_MODULE_2__.getTotalBytes)(request);
		// Set Content-Length if totalBytes is a number (that is not NaN)
		if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
			contentLengthValue = String(totalBytes);
		}
	}

	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// 4.1. Main fetch, step 2.6
	// > If request's referrer policy is the empty string, then set request's referrer policy to the
	// > default referrer policy.
	if (request.referrerPolicy === '') {
		request.referrerPolicy = _utils_referrer_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_REFERRER_POLICY;
	}

	// 4.1. Main fetch, step 2.7
	// > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
	// > determine request's referrer.
	if (request.referrer && request.referrer !== 'no-referrer') {
		request[INTERNALS].referrer = (0,_utils_referrer_js__WEBPACK_IMPORTED_MODULE_5__.determineRequestsReferrer)(request);
	} else {
		request[INTERNALS].referrer = 'no-referrer';
	}

	// 4.5. HTTP-network-or-cache fetch, step 6.9
	// > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
	// >  and isomorphic encoded, to httpRequest's header list.
	if (request[INTERNALS].referrer instanceof URL) {
		headers.set('Referer', request.referrer);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip, deflate, br');
	}

	let {agent} = request;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	const search = (0,_utils_get_search_js__WEBPACK_IMPORTED_MODULE_6__.getSearch)(parsedURL);

	// Pass the full URL directly to request(), but overwrite the following
	// options:
	const options = {
		// Overwrite search to retain trailing ? (issue #776)
		path: parsedURL.pathname + search,
		// The following options are not expressed in the URL
		method: request.method,
		headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
		insecureHTTPParser: request.insecureHTTPParser,
		agent
	};

	return {
		/** @type {URL} */
		parsedURL,
		options
	};
};


/***/ }),

/***/ "../../node_modules/node-fetch/src/response.js":
/*!*****************************************************!*\
  !*** ../../node_modules/node-fetch/src/response.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Response)
/* harmony export */ });
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headers.js */ "../../node_modules/node-fetch/src/headers.js");
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.js */ "../../node_modules/node-fetch/src/body.js");
/* harmony import */ var _utils_is_redirect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/is-redirect.js */ "../../node_modules/node-fetch/src/utils/is-redirect.js");
/**
 * Response.js
 *
 * Response class provides content decoding
 */





const INTERNALS = Symbol('Response internals');

/**
 * Response class
 *
 * Ref: https://fetch.spec.whatwg.org/#response-class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response extends _body_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(body = null, options = {}) {
		super(body, options);

		// eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
		const status = options.status != null ? options.status : 200;

		const headers = new _headers_js__WEBPACK_IMPORTED_MODULE_1__["default"](options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = (0,_body_js__WEBPACK_IMPORTED_MODULE_0__.extractContentType)(body, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS] = {
			type: 'default',
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter,
			highWaterMark: options.highWaterMark
		};
	}

	get type() {
		return this[INTERNALS].type;
	}

	get url() {
		return this[INTERNALS].url || '';
	}

	get status() {
		return this[INTERNALS].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS].status >= 200 && this[INTERNALS].status < 300;
	}

	get redirected() {
		return this[INTERNALS].counter > 0;
	}

	get statusText() {
		return this[INTERNALS].statusText;
	}

	get headers() {
		return this[INTERNALS].headers;
	}

	get highWaterMark() {
		return this[INTERNALS].highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response((0,_body_js__WEBPACK_IMPORTED_MODULE_0__.clone)(this, this.highWaterMark), {
			type: this.type,
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size,
			highWaterMark: this.highWaterMark
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!(0,_utils_is_redirect_js__WEBPACK_IMPORTED_MODULE_2__.isRedirect)(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	static error() {
		const response = new Response(null, {status: 0, statusText: ''});
		response[INTERNALS].type = 'error';
		return response;
	}

	static json(data = undefined, init = {}) {
		const body = JSON.stringify(data);

		if (body === undefined) {
			throw new TypeError('data is not JSON serializable');
		}

		const headers = new _headers_js__WEBPACK_IMPORTED_MODULE_1__["default"](init && init.headers);

		if (!headers.has('content-type')) {
			headers.set('content-type', 'application/json');
		}

		return new Response(body, {
			...init,
			headers
		});
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

Object.defineProperties(Response.prototype, {
	type: {enumerable: true},
	url: {enumerable: true},
	status: {enumerable: true},
	ok: {enumerable: true},
	redirected: {enumerable: true},
	statusText: {enumerable: true},
	headers: {enumerable: true},
	clone: {enumerable: true}
});


/***/ }),

/***/ "../../node_modules/node-fetch/src/utils/get-search.js":
/*!*************************************************************!*\
  !*** ../../node_modules/node-fetch/src/utils/get-search.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSearch: () => (/* binding */ getSearch)
/* harmony export */ });
const getSearch = parsedURL => {
	if (parsedURL.search) {
		return parsedURL.search;
	}

	const lastOffset = parsedURL.href.length - 1;
	const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
	return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};


/***/ }),

/***/ "../../node_modules/node-fetch/src/utils/is-redirect.js":
/*!**************************************************************!*\
  !*** ../../node_modules/node-fetch/src/utils/is-redirect.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRedirect: () => (/* binding */ isRedirect)
/* harmony export */ });
const redirectStatus = new Set([301, 302, 303, 307, 308]);

/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */
const isRedirect = code => {
	return redirectStatus.has(code);
};


/***/ }),

/***/ "../../node_modules/node-fetch/src/utils/is.js":
/*!*****************************************************!*\
  !*** ../../node_modules/node-fetch/src/utils/is.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAbortSignal: () => (/* binding */ isAbortSignal),
/* harmony export */   isBlob: () => (/* binding */ isBlob),
/* harmony export */   isDomainOrSubdomain: () => (/* binding */ isDomainOrSubdomain),
/* harmony export */   isSameProtocol: () => (/* binding */ isSameProtocol),
/* harmony export */   isURLSearchParameters: () => (/* binding */ isURLSearchParameters)
/* harmony export */ });
/**
 * Is.js
 *
 * Object type checks.
 */

const NAME = Symbol.toStringTag;

/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isURLSearchParameters = object => {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.has === 'function' &&
		typeof object.set === 'function' &&
		typeof object.sort === 'function' &&
		object[NAME] === 'URLSearchParams'
	);
};

/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isBlob = object => {
	return (
		object &&
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		typeof object.stream === 'function' &&
		typeof object.constructor === 'function' &&
		/^(Blob|File)$/.test(object[NAME])
	);
};

/**
 * Check if `obj` is an instance of AbortSignal.
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isAbortSignal = object => {
	return (
		typeof object === 'object' && (
			object[NAME] === 'AbortSignal' ||
			object[NAME] === 'EventTarget'
		)
	);
};

/**
 * isDomainOrSubdomain reports whether sub is a subdomain (or exact match) of
 * the parent domain.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */
const isDomainOrSubdomain = (destination, original) => {
	const orig = new URL(original).hostname;
	const dest = new URL(destination).hostname;

	return orig === dest || orig.endsWith(`.${dest}`);
};

/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */
const isSameProtocol = (destination, original) => {
	const orig = new URL(original).protocol;
	const dest = new URL(destination).protocol;

	return orig === dest;
};


/***/ }),

/***/ "../../node_modules/node-fetch/src/utils/referrer.js":
/*!***********************************************************!*\
  !*** ../../node_modules/node-fetch/src/utils/referrer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REFERRER_POLICY: () => (/* binding */ DEFAULT_REFERRER_POLICY),
/* harmony export */   ReferrerPolicy: () => (/* binding */ ReferrerPolicy),
/* harmony export */   determineRequestsReferrer: () => (/* binding */ determineRequestsReferrer),
/* harmony export */   isOriginPotentiallyTrustworthy: () => (/* binding */ isOriginPotentiallyTrustworthy),
/* harmony export */   isUrlPotentiallyTrustworthy: () => (/* binding */ isUrlPotentiallyTrustworthy),
/* harmony export */   parseReferrerPolicyFromHeader: () => (/* binding */ parseReferrerPolicyFromHeader),
/* harmony export */   stripURLForUseAsAReferrer: () => (/* binding */ stripURLForUseAsAReferrer),
/* harmony export */   validateReferrerPolicy: () => (/* binding */ validateReferrerPolicy)
/* harmony export */ });
/* harmony import */ var node_net__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:net */ "node:net");


/**
 * @external URL
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 */

/**
 * @module utils/referrer
 * @private
 */

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#strip-url|Referrer Policy §8.4. Strip url for use as a referrer}
 * @param {string} URL
 * @param {boolean} [originOnly=false]
 */
function stripURLForUseAsAReferrer(url, originOnly = false) {
	// 1. If url is null, return no referrer.
	if (url == null) { // eslint-disable-line no-eq-null, eqeqeq
		return 'no-referrer';
	}

	url = new URL(url);

	// 2. If url's scheme is a local scheme, then return no referrer.
	if (/^(about|blob|data):$/.test(url.protocol)) {
		return 'no-referrer';
	}

	// 3. Set url's username to the empty string.
	url.username = '';

	// 4. Set url's password to null.
	// Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
	url.password = '';

	// 5. Set url's fragment to null.
	// Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
	url.hash = '';

	// 6. If the origin-only flag is true, then:
	if (originOnly) {
		// 6.1. Set url's path to null.
		// Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
		url.pathname = '';

		// 6.2. Set url's query to null.
		// Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
		url.search = '';
	}

	// 7. Return url.
	return url;
}

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy|enum ReferrerPolicy}
 */
const ReferrerPolicy = new Set([
	'',
	'no-referrer',
	'no-referrer-when-downgrade',
	'same-origin',
	'origin',
	'strict-origin',
	'origin-when-cross-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url'
]);

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy|default referrer policy}
 */
const DEFAULT_REFERRER_POLICY = 'strict-origin-when-cross-origin';

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#referrer-policies|Referrer Policy §3. Referrer Policies}
 * @param {string} referrerPolicy
 * @returns {string} referrerPolicy
 */
function validateReferrerPolicy(referrerPolicy) {
	if (!ReferrerPolicy.has(referrerPolicy)) {
		throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
	}

	return referrerPolicy;
}

/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy|Referrer Policy §3.2. Is origin potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */
function isOriginPotentiallyTrustworthy(url) {
	// 1. If origin is an opaque origin, return "Not Trustworthy".
	// Not applicable

	// 2. Assert: origin is a tuple origin.
	// Not for implementations

	// 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
	if (/^(http|ws)s:$/.test(url.protocol)) {
		return true;
	}

	// 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
	const hostIp = url.host.replace(/(^\[)|(]$)/g, '');
	const hostIPVersion = (0,node_net__WEBPACK_IMPORTED_MODULE_0__.isIP)(hostIp);

	if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
		return true;
	}

	if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
		return true;
	}

	// 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
	// We are returning FALSE here because we cannot ensure conformance to
	// let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
	if (url.host === 'localhost' || url.host.endsWith('.localhost')) {
		return false;
	}

	// 6. If origin's scheme component is file, return "Potentially Trustworthy".
	if (url.protocol === 'file:') {
		return true;
	}

	// 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
	// Not supported

	// 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
	// Not supported

	// 9. Return "Not Trustworthy".
	return false;
}

/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-url-trustworthy|Referrer Policy §3.3. Is url potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */
function isUrlPotentiallyTrustworthy(url) {
	// 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
	if (/^about:(blank|srcdoc)$/.test(url)) {
		return true;
	}

	// 2. If url's scheme is "data", return "Potentially Trustworthy".
	if (url.protocol === 'data:') {
		return true;
	}

	// Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
	// created. Therefore, blobs created in a trustworthy origin will themselves be potentially
	// trustworthy.
	if (/^(blob|filesystem):$/.test(url.protocol)) {
		return true;
	}

	// 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
	return isOriginPotentiallyTrustworthy(url);
}

/**
 * Modifies the referrerURL to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerURLCallback
 * @param {external:URL} referrerURL
 * @returns {external:URL} modified referrerURL
 */

/**
 * Modifies the referrerOrigin to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerOriginCallback
 * @param {external:URL} referrerOrigin
 * @returns {external:URL} modified referrerOrigin
 */

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}
 * @param {Request} request
 * @param {object} o
 * @param {module:utils/referrer~referrerURLCallback} o.referrerURLCallback
 * @param {module:utils/referrer~referrerOriginCallback} o.referrerOriginCallback
 * @returns {external:URL} Request's referrer
 */
function determineRequestsReferrer(request, {referrerURLCallback, referrerOriginCallback} = {}) {
	// There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
	// these cases:
	// > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
	// > Note: If request's referrer policy is the empty string, Fetch will not call into this
	// > algorithm.
	if (request.referrer === 'no-referrer' || request.referrerPolicy === '') {
		return null;
	}

	// 1. Let policy be request's associated referrer policy.
	const policy = request.referrerPolicy;

	// 2. Let environment be request's client.
	// not applicable to node.js

	// 3. Switch on request's referrer:
	if (request.referrer === 'about:client') {
		return 'no-referrer';
	}

	// "a URL": Let referrerSource be request's referrer.
	const referrerSource = request.referrer;

	// 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
	let referrerURL = stripURLForUseAsAReferrer(referrerSource);

	// 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
	//    origin-only flag set to true.
	let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);

	// 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
	//    referrerURL to referrerOrigin.
	if (referrerURL.toString().length > 4096) {
		referrerURL = referrerOrigin;
	}

	// 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
	//    policy considerations in the interests of minimizing data leakage. For example, the user
	//    agent could strip the URL down to an origin, modify its host, replace it with an empty
	//    string, etc.
	if (referrerURLCallback) {
		referrerURL = referrerURLCallback(referrerURL);
	}

	if (referrerOriginCallback) {
		referrerOrigin = referrerOriginCallback(referrerOrigin);
	}

	// 8.Execute the statements corresponding to the value of policy:
	const currentURL = new URL(request.url);

	switch (policy) {
		case 'no-referrer':
			return 'no-referrer';

		case 'origin':
			return referrerOrigin;

		case 'unsafe-url':
			return referrerURL;

		case 'strict-origin':
			// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 2. Return referrerOrigin.
			return referrerOrigin.toString();

		case 'strict-origin-when-cross-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 3. Return referrerOrigin.
			return referrerOrigin;

		case 'same-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// 2. Return no referrer.
			return 'no-referrer';

		case 'origin-when-cross-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// Return referrerOrigin.
			return referrerOrigin;

		case 'no-referrer-when-downgrade':
			// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 2. Return referrerURL.
			return referrerURL;

		default:
			throw new TypeError(`Invalid referrerPolicy: ${policy}`);
	}
}

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header|Referrer Policy §8.1. Parse a referrer policy from a Referrer-Policy header}
 * @param {Headers} headers Response headers
 * @returns {string} policy
 */
function parseReferrerPolicyFromHeader(headers) {
	// 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
	//    and response’s header list.
	const policyTokens = (headers.get('referrer-policy') || '').split(/[,\s]+/);

	// 2. Let policy be the empty string.
	let policy = '';

	// 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
	//    string, then set policy to token.
	// Note: This algorithm loops over multiple policy values to allow deployment of new policy
	// values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
	for (const token of policyTokens) {
		if (token && ReferrerPolicy.has(token)) {
			policy = token;
		}
	}

	// 4. Return policy.
	return policy;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"contacts": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/pages/contacts.tsx ***!
  \********************************/
/* provided dependency */ var fetch = __webpack_require__(/*! node-fetch */ "../../node_modules/node-fetch/src/index.js")["default"];


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SSR = void 0;
exports["default"] = Contacts;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Contacts(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      style: {
        color: 'green'
      },
      children: "You are the best my friend"
    }), posts === null || posts === void 0 ? void 0 : posts.map(function (post) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: post.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: post.body
        })]
      }, post.id);
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: {
        color: 'blue'
      },
      children: "Special thanks to Nikolay Goncharuk"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: {
        color: 'blue'
      },
      children: "Special thanks to Vladimir Gagarkin"
    })]
  });
}
var SSR = exports.SSR = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var posts;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://jsonplaceholder.typicode.com/posts');
        case 2:
          posts = _context.sent;
          _context.next = 5;
          return posts.json();
        case 5:
          _context.t0 = _context.sent;
          _context.t1 = {
            posts: _context.t0
          };
          return _context.abrupt("return", {
            props: _context.t1
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function SSR() {
    return _ref2.apply(this, arguments);
  };
}();
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUEySDtBQUMzSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9FQUFvRTs7QUFFcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVUsa0JBQWtCLFFBQVE7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTyxrQkFBa0IsUUFBUTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTLG1DQUFtQyxZQUFZLEtBQUssV0FBVztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUNBQWlDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxNQUFNO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxNQUFNO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLFNBQVM7QUFDckc7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsT0FBTztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0RBQWtEO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNENBQTRDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFEQUFxRCxtREFBbUQ7QUFDeEcsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DLGlCQUFpQixrQkFBa0I7QUFDbkMsdUJBQXVCLGtCQUFrQjtBQUN6QyxpQkFBaUIsa0JBQWtCO0FBQ25DLGtCQUFrQixrQkFBa0I7QUFDcEMsdUJBQXVCLGtCQUFrQjtBQUN6QyxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBNkM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekMsa0JBQWtCLGtCQUFrQjtBQUNwQyxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsTUFBTTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsTUFBTTtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsTUFBTTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsTUFBTTtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQyxpQkFBaUIsa0JBQWtCO0FBQ25DLHFCQUFxQixrQkFBa0I7QUFDdkMsdUJBQXVCO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxNQUFNO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsTUFBTTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ2hvSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7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QUEsR0FBQXFGLElBQUEsQ0FBRyxTQUFBb0QsUUFBQTtJQUFBLElBQUFkLEtBQUE7SUFBQSxPQUFBM0gsbUJBQUEsR0FBQXVCLElBQUEsVUFBQW1ILFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBN0MsSUFBQSxHQUFBNkMsUUFBQSxDQUFBeEUsSUFBQTtRQUFBO1VBQUF3RSxRQUFBLENBQUF4RSxJQUFBO1VBQUEsT0FDR3lFLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztRQUFBO1VBQWpFakIsS0FBSyxHQUFBZ0IsUUFBQSxDQUFBL0UsSUFBQTtVQUFBK0UsUUFBQSxDQUFBeEUsSUFBQTtVQUFBLE9BSU13RCxLQUFLLENBQUNrQixJQUFJLENBQUMsQ0FBQztRQUFBO1VBQUFGLFFBQUEsQ0FBQUcsRUFBQSxHQUFBSCxRQUFBLENBQUEvRSxJQUFBO1VBQUErRSxRQUFBLENBQUFJLEVBQUE7WUFBekJwQixLQUFLLEVBQUFnQixRQUFBLENBQUFHO1VBQUE7VUFBQSxPQUFBSCxRQUFBLENBQUE1RSxNQUFBO1lBRFBpRixLQUFLLEVBQUFMLFFBQUEsQ0FBQUk7VUFBQTtRQUFBO1FBQUE7VUFBQSxPQUFBSixRQUFBLENBQUExQyxJQUFBO01BQUE7SUFBQSxHQUFBd0MsT0FBQTtFQUFBLENBSVI7RUFBQSxnQkFSWUgsR0FBR0EsQ0FBQTtJQUFBLE9BQUFFLEtBQUEsQ0FBQWxCLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FRZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZG9tZXhjZXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy93ZWItc3RyZWFtcy1wb2x5ZmlsbC9kaXN0L3BvbnlmaWxsLmVzMjAxOC5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBjb21tb25qcy1tb2R1bGUgXCJyZWFjdFwiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpidWZmZXJcIiIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpmc1wiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOmh0dHBcIiIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpodHRwc1wiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOm5ldFwiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnBhdGhcIiIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpwcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6c3RyZWFtXCIiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6c3RyZWFtL3dlYlwiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnVybFwiIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnV0aWxcIiIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTp6bGliXCIiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIndvcmtlcl90aHJlYWRzXCIiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL2ZldGNoLWJsb2Ivc3RyZWFtcy5janMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGEtdXJpLXRvLWJ1ZmZlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9mZXRjaC1ibG9iL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL2ZldGNoLWJsb2IvZnJvbS5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvZmV0Y2gtYmxvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZXNtLm1pbi5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvZXJyb3JzL2Fib3J0LWVycm9yLmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9lcnJvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvZXJyb3JzL2ZldGNoLWVycm9yLmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9oZWFkZXJzLmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL2dldC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL2lzLXJlZGlyZWN0LmpzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy91dGlscy9pcy5qcyIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvcmVmZXJyZXIuanMiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHJvYWQtZnVyeS9jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Acm9hZC1mdXJ5L2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvcmVxdWlyZSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0Byb2FkLWZ1cnkvY2xpZW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9kZS1kb21leGNlcHRpb24uIE1JVCBMaWNlbnNlLiBKaW1teSBXw6RydGluZyA8aHR0cHM6Ly9qaW1teS53YXJ0aW5nLnNlL29wZW5zb3VyY2U+ICovXG5cbmlmICghZ2xvYmFsVGhpcy5ET01FeGNlcHRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IE1lc3NhZ2VDaGFubmVsIH0gPSByZXF1aXJlKCd3b3JrZXJfdGhyZWFkcycpLFxuICAgIHBvcnQgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKS5wb3J0MSxcbiAgICBhYiA9IG5ldyBBcnJheUJ1ZmZlcigpXG4gICAgcG9ydC5wb3N0TWVzc2FnZShhYiwgW2FiLCBhYl0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVyci5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRE9NRXhjZXB0aW9uJyAmJiAoXG4gICAgICBnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbiA9IGVyci5jb25zdHJ1Y3RvclxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uXG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiB3ZWItc3RyZWFtcy1wb2x5ZmlsbCB2My4zLjNcbiAqIENvcHlyaWdodCAyMDI0IE1hdHRpYXMgQnVlbGVucywgRGl3YW5rIFNpbmdoIFRvbWVyIGFuZCBvdGhlciBjb250cmlidXRvcnMuXG4gKiBUaGlzIGNvZGUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLldlYlN0cmVhbXNQb2x5ZmlsbCA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gbm9vcCgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0eXBlSXNPYmplY3QoeCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKSB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgY29uc3QgcmV0aHJvd0Fzc2VydGlvbkVycm9yUmVqZWN0aW9uID0gbm9vcDtcbiAgICBmdW5jdGlvbiBzZXRGdW5jdGlvbk5hbWUoZm4sIG5hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ25hbWUnLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm9uLWNvbmZpZ3VyYWJsZSBpbiBvbGRlciBicm93c2Vycywgc28gaWdub3JlIGlmIHRoaXMgdGhyb3dzLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vbmFtZSNicm93c2VyX2NvbXBhdGliaWxpdHlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9yaWdpbmFsUHJvbWlzZSA9IFByb21pc2U7XG4gICAgY29uc3Qgb3JpZ2luYWxQcm9taXNlVGhlbiA9IFByb21pc2UucHJvdG90eXBlLnRoZW47XG4gICAgY29uc3Qgb3JpZ2luYWxQcm9taXNlUmVqZWN0ID0gUHJvbWlzZS5yZWplY3QuYmluZChvcmlnaW5hbFByb21pc2UpO1xuICAgIC8vIGh0dHBzOi8vd2ViaWRsLnNwZWMud2hhdHdnLm9yZy8jYS1uZXctcHJvbWlzZVxuICAgIGZ1bmN0aW9uIG5ld1Byb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvcmlnaW5hbFByb21pc2UoZXhlY3V0b3IpO1xuICAgIH1cbiAgICAvLyBodHRwczovL3dlYmlkbC5zcGVjLndoYXR3Zy5vcmcvI2EtcHJvbWlzZS1yZXNvbHZlZC13aXRoXG4gICAgZnVuY3Rpb24gcHJvbWlzZVJlc29sdmVkV2l0aCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3UHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUodmFsdWUpKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly93ZWJpZGwuc3BlYy53aGF0d2cub3JnLyNhLXByb21pc2UtcmVqZWN0ZWQtd2l0aFxuICAgIGZ1bmN0aW9uIHByb21pc2VSZWplY3RlZFdpdGgocmVhc29uKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbFByb21pc2VSZWplY3QocmVhc29uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUGVyZm9ybVByb21pc2VUaGVuKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgIC8vIFRoZXJlIGRvZXNuJ3QgYXBwZWFyIHRvIGJlIGFueSB3YXkgdG8gY29ycmVjdGx5IGVtdWxhdGUgdGhlIGJlaGF2aW91ciBmcm9tIEphdmFTY3JpcHQsIHNvIHRoaXMgaXMganVzdCBhblxuICAgICAgICAvLyBhcHByb3hpbWF0aW9uLlxuICAgICAgICByZXR1cm4gb3JpZ2luYWxQcm9taXNlVGhlbi5jYWxsKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gICAgLy8gQmx1ZWJpcmQgbG9ncyBhIHdhcm5pbmcgd2hlbiBhIHByb21pc2UgaXMgY3JlYXRlZCB3aXRoaW4gYSBmdWxmaWxsbWVudCBoYW5kbGVyLCBidXQgdGhlbiBpc24ndCByZXR1cm5lZFxuICAgIC8vIGZyb20gdGhhdCBoYW5kbGVyLiBUbyBwcmV2ZW50IHRoaXMsIHJldHVybiBudWxsIGluc3RlYWQgb2Ygdm9pZCBmcm9tIGFsbCBoYW5kbGVycy5cbiAgICAvLyBodHRwOi8vYmx1ZWJpcmRqcy5jb20vZG9jcy93YXJuaW5nLWV4cGxhbmF0aW9ucy5odG1sI3dhcm5pbmctYS1wcm9taXNlLXdhcy1jcmVhdGVkLWluLWEtaGFuZGxlci1idXQtd2FzLW5vdC1yZXR1cm5lZC1mcm9tLWl0XG4gICAgZnVuY3Rpb24gdXBvblByb21pc2UocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgUGVyZm9ybVByb21pc2VUaGVuKFBlcmZvcm1Qcm9taXNlVGhlbihwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCksIHVuZGVmaW5lZCwgcmV0aHJvd0Fzc2VydGlvbkVycm9yUmVqZWN0aW9uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBvbkZ1bGZpbGxtZW50KHByb21pc2UsIG9uRnVsZmlsbGVkKSB7XG4gICAgICAgIHVwb25Qcm9taXNlKHByb21pc2UsIG9uRnVsZmlsbGVkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBvblJlamVjdGlvbihwcm9taXNlLCBvblJlamVjdGVkKSB7XG4gICAgICAgIHVwb25Qcm9taXNlKHByb21pc2UsIHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVByb21pc2VXaXRoKHByb21pc2UsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgICByZXR1cm4gUGVyZm9ybVByb21pc2VUaGVuKHByb21pc2UsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUocHJvbWlzZSkge1xuICAgICAgICBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgdW5kZWZpbmVkLCByZXRocm93QXNzZXJ0aW9uRXJyb3JSZWplY3Rpb24pO1xuICAgIH1cbiAgICBsZXQgX3F1ZXVlTWljcm90YXNrID0gY2FsbGJhY2sgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFzaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIF9xdWV1ZU1pY3JvdGFzayA9IGNiID0+IFBlcmZvcm1Qcm9taXNlVGhlbihyZXNvbHZlZFByb21pc2UsIGNiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3F1ZXVlTWljcm90YXNrKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlZmxlY3RDYWxsKEYsIFYsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChGLCBWLCBhcmdzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvbWlzZUNhbGwoRiwgViwgYXJncykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgocmVmbGVjdENhbGwoRiwgViwgYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3JpZ2luYWwgZnJvbSBDaHJvbWl1bVxuICAgIC8vIGh0dHBzOi8vY2hyb21pdW0uZ29vZ2xlc291cmNlLmNvbS9jaHJvbWl1bS9zcmMvKy8wYWVlNDQzNGE0ZGJhNDJhNDJhYmFlYTliZmJjMGNkMTk2YTYzYmMxL3RoaXJkX3BhcnR5L2JsaW5rL3JlbmRlcmVyL2NvcmUvc3RyZWFtcy9TaW1wbGVRdWV1ZS5qc1xuICAgIGNvbnN0IFFVRVVFX01BWF9BUlJBWV9TSVpFID0gMTYzODQ7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIHF1ZXVlIHN0cnVjdHVyZS5cbiAgICAgKlxuICAgICAqIEF2b2lkcyBzY2FsYWJpbGl0eSBpc3N1ZXMgd2l0aCB1c2luZyBhIHBhY2tlZCBhcnJheSBkaXJlY3RseSBieSB1c2luZ1xuICAgICAqIG11bHRpcGxlIGFycmF5cyBpbiBhIGxpbmtlZCBsaXN0IGFuZCBrZWVwaW5nIHRoZSBhcnJheSBzaXplIGJvdW5kZWQuXG4gICAgICovXG4gICAgY2xhc3MgU2ltcGxlUXVldWUge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnNvciA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgIC8vIF9mcm9udCBhbmQgX2JhY2sgYXJlIGFsd2F5cyBkZWZpbmVkLlxuICAgICAgICAgICAgdGhpcy5fZnJvbnQgPSB7XG4gICAgICAgICAgICAgICAgX2VsZW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBfbmV4dDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fYmFjayA9IHRoaXMuX2Zyb250O1xuICAgICAgICAgICAgLy8gVGhlIGN1cnNvciBpcyB1c2VkIHRvIGF2b2lkIGNhbGxpbmcgQXJyYXkuc2hpZnQoKS5cbiAgICAgICAgICAgIC8vIEl0IGNvbnRhaW5zIHRoZSBpbmRleCBvZiB0aGUgZnJvbnQgZWxlbWVudCBvZiB0aGUgYXJyYXkgaW5zaWRlIHRoZVxuICAgICAgICAgICAgLy8gZnJvbnQtbW9zdCBub2RlLiBJdCBpcyBhbHdheXMgaW4gdGhlIHJhbmdlIFswLCBRVUVVRV9NQVhfQVJSQVlfU0laRSkuXG4gICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSAwO1xuICAgICAgICAgICAgLy8gV2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBub2RlLCBzaXplID09PSBlbGVtZW50cy5sZW5ndGggLSBjdXJzb3IuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGV4Y2VwdGlvbiBzYWZldHksIHRoaXMgbWV0aG9kIGlzIHN0cnVjdHVyZWQgaW4gb3JkZXI6XG4gICAgICAgIC8vIDEuIFJlYWQgc3RhdGVcbiAgICAgICAgLy8gMi4gQ2FsY3VsYXRlIHJlcXVpcmVkIHN0YXRlIG11dGF0aW9uc1xuICAgICAgICAvLyAzLiBQZXJmb3JtIHN0YXRlIG11dGF0aW9uc1xuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEJhY2sgPSB0aGlzLl9iYWNrO1xuICAgICAgICAgICAgbGV0IG5ld0JhY2sgPSBvbGRCYWNrO1xuICAgICAgICAgICAgaWYgKG9sZEJhY2suX2VsZW1lbnRzLmxlbmd0aCA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUgLSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3QmFjayA9IHtcbiAgICAgICAgICAgICAgICAgICAgX2VsZW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX25leHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwdXNoKCkgaXMgdGhlIG11dGF0aW9uIG1vc3QgbGlrZWx5IHRvIHRocm93IGFuIGV4Y2VwdGlvbiwgc28gaXRcbiAgICAgICAgICAgIC8vIGdvZXMgZmlyc3QuXG4gICAgICAgICAgICBvbGRCYWNrLl9lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG5ld0JhY2sgIT09IG9sZEJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrID0gbmV3QmFjaztcbiAgICAgICAgICAgICAgICBvbGRCYWNrLl9uZXh0ID0gbmV3QmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsrdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMaWtlIHB1c2goKSwgc2hpZnQoKSBmb2xsb3dzIHRoZSByZWFkIC0+IGNhbGN1bGF0ZSAtPiBtdXRhdGUgcGF0dGVybiBmb3JcbiAgICAgICAgLy8gZXhjZXB0aW9uIHNhZmV0eS5cbiAgICAgICAgc2hpZnQoKSB7IC8vIG11c3Qgbm90IGJlIGNhbGxlZCBvbiBhbiBlbXB0eSBxdWV1ZVxuICAgICAgICAgICAgY29uc3Qgb2xkRnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICAgICAgICAgIGxldCBuZXdGcm9udCA9IG9sZEZyb250O1xuICAgICAgICAgICAgY29uc3Qgb2xkQ3Vyc29yID0gdGhpcy5fY3Vyc29yO1xuICAgICAgICAgICAgbGV0IG5ld0N1cnNvciA9IG9sZEN1cnNvciArIDE7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IG9sZEZyb250Ll9lbGVtZW50cztcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tvbGRDdXJzb3JdO1xuICAgICAgICAgICAgaWYgKG5ld0N1cnNvciA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUpIHtcbiAgICAgICAgICAgICAgICBuZXdGcm9udCA9IG9sZEZyb250Ll9uZXh0O1xuICAgICAgICAgICAgICAgIG5ld0N1cnNvciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyBtdXRhdGlvbnMgYmVmb3JlIHRoaXMgcG9pbnQuXG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG4gICAgICAgICAgICB0aGlzLl9jdXJzb3IgPSBuZXdDdXJzb3I7XG4gICAgICAgICAgICBpZiAob2xkRnJvbnQgIT09IG5ld0Zyb250KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnJvbnQgPSBuZXdGcm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFBlcm1pdCBzaGlmdGVkIGVsZW1lbnQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICAgICAgICBlbGVtZW50c1tvbGRDdXJzb3JdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRyaWNreSB0aGluZyBhYm91dCBmb3JFYWNoKCkgaXMgdGhhdCBpdCBjYW4gYmUgY2FsbGVkXG4gICAgICAgIC8vIHJlLWVudHJhbnRseS4gVGhlIHF1ZXVlIG1heSBiZSBtdXRhdGVkIGluc2lkZSB0aGUgY2FsbGJhY2suIEl0IGlzIGVhc3kgdG9cbiAgICAgICAgLy8gc2VlIHRoYXQgcHVzaCgpIHdpdGhpbiB0aGUgY2FsbGJhY2sgaGFzIG5vIG5lZ2F0aXZlIGVmZmVjdHMgc2luY2UgdGhlIGVuZFxuICAgICAgICAvLyBvZiB0aGUgcXVldWUgaXMgY2hlY2tlZCBmb3Igb24gZXZlcnkgaXRlcmF0aW9uLiBJZiBzaGlmdCgpIGlzIGNhbGxlZFxuICAgICAgICAvLyByZXBlYXRlZGx5IHdpdGhpbiB0aGUgY2FsbGJhY2sgdGhlbiB0aGUgbmV4dCBpdGVyYXRpb24gbWF5IHJldHVybiBhblxuICAgICAgICAvLyBlbGVtZW50IHRoYXQgaGFzIGJlZW4gcmVtb3ZlZC4gSW4gdGhpcyBjYXNlIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAvLyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgdW50aWwgd2UgZWl0aGVyIFwiY2F0Y2ggdXBcIiB3aXRoIGVsZW1lbnRzIHRoYXQgc3RpbGxcbiAgICAgICAgLy8gZXhpc3Qgb3IgcmVhY2ggdGhlIGJhY2sgb2YgdGhlIHF1ZXVlLlxuICAgICAgICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5fZnJvbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBub2RlLl9lbGVtZW50cztcbiAgICAgICAgICAgIHdoaWxlIChpICE9PSBlbGVtZW50cy5sZW5ndGggfHwgbm9kZS5fbmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBub2RlLl9lbGVtZW50cztcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBlbGVtZW50IHRoYXQgd291bGQgYmUgcmV0dXJuZWQgaWYgc2hpZnQoKSB3YXMgY2FsbGVkIG5vdyxcbiAgICAgICAgLy8gd2l0aG91dCBtb2RpZnlpbmcgdGhlIHF1ZXVlLlxuICAgICAgICBwZWVrKCkgeyAvLyBtdXN0IG5vdCBiZSBjYWxsZWQgb24gYW4gZW1wdHkgcXVldWVcbiAgICAgICAgICAgIGNvbnN0IGZyb250ID0gdGhpcy5fZnJvbnQ7XG4gICAgICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLl9jdXJzb3I7XG4gICAgICAgICAgICByZXR1cm4gZnJvbnQuX2VsZW1lbnRzW2N1cnNvcl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBBYm9ydFN0ZXBzID0gU3ltYm9sKCdbW0Fib3J0U3RlcHNdXScpO1xuICAgIGNvbnN0IEVycm9yU3RlcHMgPSBTeW1ib2woJ1tbRXJyb3JTdGVwc11dJyk7XG4gICAgY29uc3QgQ2FuY2VsU3RlcHMgPSBTeW1ib2woJ1tbQ2FuY2VsU3RlcHNdXScpO1xuICAgIGNvbnN0IFB1bGxTdGVwcyA9IFN5bWJvbCgnW1tQdWxsU3RlcHNdXScpO1xuICAgIGNvbnN0IFJlbGVhc2VTdGVwcyA9IFN5bWJvbCgnW1tSZWxlYXNlU3RlcHNdXScpO1xuXG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljSW5pdGlhbGl6ZShyZWFkZXIsIHN0cmVhbSkge1xuICAgICAgICByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHN0cmVhbS5fcmVhZGVyID0gcmVhZGVyO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ3JlYWRhYmxlJykge1xuICAgICAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHJlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQocmVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQocmVhZGVyLCBzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBIGNsaWVudCBvZiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIgYW5kIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlciBtYXkgdXNlIHRoZXNlIGZ1bmN0aW9ucyBkaXJlY3RseSB0byBieXBhc3Mgc3RhdGVcbiAgICAvLyBjaGVjay5cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNDYW5jZWwocmVhZGVyLCByZWFzb24pIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtO1xuICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW07XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSAncmVhZGFibGUnKSB7XG4gICAgICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChyZWFkZXIsIG5ldyBUeXBlRXJyb3IoYFJlYWRlciB3YXMgcmVsZWFzZWQgYW5kIGNhbiBubyBsb25nZXIgYmUgdXNlZCB0byBtb25pdG9yIHRoZSBzdHJlYW0ncyBjbG9zZWRuZXNzYCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNldFRvUmVqZWN0ZWQocmVhZGVyLCBuZXcgVHlwZUVycm9yKGBSZWFkZXIgd2FzIHJlbGVhc2VkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgc3RyZWFtJ3MgY2xvc2VkbmVzc2ApKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcltSZWxlYXNlU3RlcHNdKCk7XG4gICAgICAgIHN0cmVhbS5fcmVhZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSByZWFkZXJzLlxuICAgIGZ1bmN0aW9uIHJlYWRlckxvY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQ2Fubm90ICcgKyBuYW1lICsgJyBhIHN0cmVhbSB1c2luZyBhIHJlbGVhc2VkIHJlYWRlcicpO1xuICAgIH1cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZShyZWFkZXIpIHtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZChyZWFkZXIsIHJlYXNvbikge1xuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKTtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZWplY3QocmVhZGVyLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHJlYWRlcikge1xuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKTtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNvbHZlKHJlYWRlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVqZWN0KHJlYWRlciwgcmVhc29uKSB7XG4gICAgICAgIGlmIChyZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHJlYWRlci5fY2xvc2VkUHJvbWlzZSk7XG4gICAgICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QocmVhc29uKTtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHJlYWRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQocmVhZGVyLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUocmVhZGVyKSB7XG4gICAgICAgIGlmIChyZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8vIDxyZWZlcmVuY2UgbGliPVwiZXMyMDE1LmNvcmVcIiAvPlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL051bWJlci9pc0Zpbml0ZSNQb2x5ZmlsbFxuICAgIGNvbnN0IE51bWJlcklzRmluaXRlID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUoeCk7XG4gICAgfTtcblxuICAgIC8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxNS5jb3JlXCIgLz5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3RydW5jI1BvbHlmaWxsXG4gICAgY29uc3QgTWF0aFRydW5jID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiA8IDAgPyBNYXRoLmNlaWwodikgOiBNYXRoLmZsb29yKHYpO1xuICAgIH07XG5cbiAgICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtZGljdGlvbmFyaWVzXG4gICAgZnVuY3Rpb24gaXNEaWN0aW9uYXJ5KHgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgZnVuY3Rpb24gYXNzZXJ0RGljdGlvbmFyeShvYmosIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkICYmICFpc0RpY3Rpb25hcnkob2JqKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYW4gb2JqZWN0LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vaGV5Y2FtLmdpdGh1Yi5pby93ZWJpZGwvI2lkbC1jYWxsYmFjay1mdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbih4LCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYSBmdW5jdGlvbi5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtb2JqZWN0XG4gICAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKSB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgZnVuY3Rpb24gYXNzZXJ0T2JqZWN0KHgsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYW4gb2JqZWN0LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFzc2VydFJlcXVpcmVkQXJndW1lbnQoeCwgcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgUGFyYW1ldGVyICR7cG9zaXRpb259IGlzIHJlcXVpcmVkIGluICcke2NvbnRleHR9Jy5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhc3NlcnRSZXF1aXJlZEZpZWxkKHgsIGZpZWxkLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZmllbGR9IGlzIHJlcXVpcmVkIGluICcke2NvbnRleHR9Jy5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtdW5yZXN0cmljdGVkLWRvdWJsZVxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbnJlc3RyaWN0ZWREb3VibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNlbnNvck5lZ2F0aXZlWmVybyh4KSB7XG4gICAgICAgIHJldHVybiB4ID09PSAwID8gMCA6IHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludGVnZXJQYXJ0KHgpIHtcbiAgICAgICAgcmV0dXJuIGNlbnNvck5lZ2F0aXZlWmVybyhNYXRoVHJ1bmMoeCkpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtdW5zaWduZWQtbG9uZy1sb25nXG4gICAgZnVuY3Rpb24gY29udmVydFVuc2lnbmVkTG9uZ0xvbmdXaXRoRW5mb3JjZVJhbmdlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGxvd2VyQm91bmQgPSAwO1xuICAgICAgICBjb25zdCB1cHBlckJvdW5kID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCB4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgeCA9IGNlbnNvck5lZ2F0aXZlWmVybyh4KTtcbiAgICAgICAgaWYgKCFOdW1iZXJJc0Zpbml0ZSh4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYSBmaW5pdGUgbnVtYmVyYCk7XG4gICAgICAgIH1cbiAgICAgICAgeCA9IGludGVnZXJQYXJ0KHgpO1xuICAgICAgICBpZiAoeCA8IGxvd2VyQm91bmQgfHwgeCA+IHVwcGVyQm91bmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgb3V0c2lkZSB0aGUgYWNjZXB0ZWQgcmFuZ2Ugb2YgJHtsb3dlckJvdW5kfSB0byAke3VwcGVyQm91bmR9LCBpbmNsdXNpdmVgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU51bWJlcklzRmluaXRlKHgpIHx8IHggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8gVXNlIEJpZ0ludCBpZiBzdXBwb3J0ZWQ/XG4gICAgICAgIC8vIGxldCB4QmlnSW50ID0gQmlnSW50KGludGVnZXJQYXJ0KHgpKTtcbiAgICAgICAgLy8geEJpZ0ludCA9IEJpZ0ludC5hc1VpbnROKDY0LCB4QmlnSW50KTtcbiAgICAgICAgLy8gcmV0dXJuIE51bWJlcih4QmlnSW50KTtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzZXJ0UmVhZGFibGVTdHJlYW0oeCwgY29udGV4dCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0oeCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGEgUmVhZGFibGVTdHJlYW0uYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBYnN0cmFjdCBvcGVyYXRpb25zIGZvciB0aGUgUmVhZGFibGVTdHJlYW0uXG4gICAgZnVuY3Rpb24gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKTtcbiAgICB9XG4gICAgLy8gUmVhZGFibGVTdHJlYW0gQVBJIGV4cG9zZWQgZm9yIGNvbnRyb2xsZXJzLlxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQWRkUmVhZFJlcXVlc3Qoc3RyZWFtLCByZWFkUmVxdWVzdCkge1xuICAgICAgICBzdHJlYW0uX3JlYWRlci5fcmVhZFJlcXVlc3RzLnB1c2gocmVhZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGNodW5rLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgICAgICBjb25zdCByZWFkUmVxdWVzdCA9IHJlYWRlci5fcmVhZFJlcXVlc3RzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICByZWFkUmVxdWVzdC5fY2xvc2VTdGVwcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVhZFJlcXVlc3QuX2NodW5rU3RlcHMoY2h1bmspO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZFJlcXVlc3RzKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc3RyZWFtLl9yZWFkZXIuX3JlYWRSZXF1ZXN0cy5sZW5ndGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtSGFzRGVmYXVsdFJlYWRlcihzdHJlYW0pIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgICAgIGlmIChyZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIGRlZmF1bHQgcmVhZGVyIHZlbmRlZCBieSBhIHtAbGluayBSZWFkYWJsZVN0cmVhbX0uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xhc3MgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyIHtcbiAgICAgICAgY29uc3RydWN0b3Ioc3RyZWFtKSB7XG4gICAgICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHN0cmVhbSwgMSwgJ1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcicpO1xuICAgICAgICAgICAgYXNzZXJ0UmVhZGFibGVTdHJlYW0oc3RyZWFtLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZChzdHJlYW0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBsb2NrZWQgZm9yIGV4Y2x1c2l2ZSByZWFkaW5nIGJ5IGFub3RoZXIgcmVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNJbml0aWFsaXplKHRoaXMsIHN0cmVhbSk7XG4gICAgICAgICAgICB0aGlzLl9yZWFkUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBzdHJlYW0gYmVjb21lcyBjbG9zZWQsXG4gICAgICAgICAqIG9yIHJlamVjdGVkIGlmIHRoZSBzdHJlYW0gZXZlciBlcnJvcnMgb3IgdGhlIHJlYWRlcidzIGxvY2sgaXMgcmVsZWFzZWQgYmVmb3JlIHRoZSBzdHJlYW0gZmluaXNoZXMgY2xvc2luZy5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbG9zZWRQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgcmVhZGVyIGlzIGFjdGl2ZSwgYmVoYXZlcyB0aGUgc2FtZSBhcyB7QGxpbmsgUmVhZGFibGVTdHJlYW0uY2FuY2VsIHwgc3RyZWFtLmNhbmNlbChyZWFzb24pfS5cbiAgICAgICAgICovXG4gICAgICAgIGNhbmNlbChyZWFzb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0UmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbignY2FuY2VsJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHJlYWRlckxvY2tFeGNlcHRpb24oJ2NhbmNlbCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNDYW5jZWwodGhpcywgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBhbGxvd3MgYWNjZXNzIHRvIHRoZSBuZXh0IGNodW5rIGZyb20gdGhlIHN0cmVhbSdzIGludGVybmFsIHF1ZXVlLCBpZiBhdmFpbGFibGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHJlYWRpbmcgYSBjaHVuayBjYXVzZXMgdGhlIHF1ZXVlIHRvIGJlY29tZSBlbXB0eSwgbW9yZSBkYXRhIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIHVuZGVybHlpbmcgc291cmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZCgpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0UmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbigncmVhZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKCdyZWFkIGZyb20nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG4gICAgICAgICAgICBsZXQgcmVqZWN0UHJvbWlzZTtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgcmVqZWN0UHJvbWlzZSA9IHJlamVjdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVhZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgX2NodW5rU3RlcHM6IGNodW5rID0+IHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IGNodW5rLCBkb25lOiBmYWxzZSB9KSxcbiAgICAgICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIF9lcnJvclN0ZXBzOiBlID0+IHJlamVjdFByb21pc2UoZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHRoaXMsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxlYXNlcyB0aGUgcmVhZGVyJ3MgbG9jayBvbiB0aGUgY29ycmVzcG9uZGluZyBzdHJlYW0uIEFmdGVyIHRoZSBsb2NrIGlzIHJlbGVhc2VkLCB0aGUgcmVhZGVyIGlzIG5vIGxvbmdlciBhY3RpdmUuXG4gICAgICAgICAqIElmIHRoZSBhc3NvY2lhdGVkIHN0cmVhbSBpcyBlcnJvcmVkIHdoZW4gdGhlIGxvY2sgaXMgcmVsZWFzZWQsIHRoZSByZWFkZXIgd2lsbCBhcHBlYXIgZXJyb3JlZCBpbiB0aGUgc2FtZSB3YXlcbiAgICAgICAgICogZnJvbSBub3cgb247IG90aGVyd2lzZSwgdGhlIHJlYWRlciB3aWxsIGFwcGVhciBjbG9zZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEEgcmVhZGVyJ3MgbG9jayBjYW5ub3QgYmUgcmVsZWFzZWQgd2hpbGUgaXQgc3RpbGwgaGFzIGEgcGVuZGluZyByZWFkIHJlcXVlc3QsIGkuZS4sIGlmIGEgcHJvbWlzZSByZXR1cm5lZCBieVxuICAgICAgICAgKiB0aGUgcmVhZGVyJ3Mge0BsaW5rIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5yZWFkIHwgcmVhZCgpfSBtZXRob2QgaGFzIG5vdCB5ZXQgYmVlbiBzZXR0bGVkLiBBdHRlbXB0aW5nIHRvXG4gICAgICAgICAqIGRvIHNvIHdpbGwgdGhyb3cgYSBgVHlwZUVycm9yYCBhbmQgbGVhdmUgdGhlIHJlYWRlciBsb2NrZWQgdG8gdGhlIHN0cmVhbS5cbiAgICAgICAgICovXG4gICAgICAgIHJlbGVhc2VMb2NrKCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGRlZmF1bHRSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdyZWxlYXNlTG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlclJlbGVhc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyLnByb3RvdHlwZSwge1xuICAgICAgICBjYW5jZWw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICByZWFkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcmVsZWFzZUxvY2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBjbG9zZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgfSk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5wcm90b3R5cGUuY2FuY2VsLCAnY2FuY2VsJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5wcm90b3R5cGUucmVhZCwgJ3JlYWQnKTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyLnByb3RvdHlwZS5yZWxlYXNlTG9jaywgJ3JlbGVhc2VMb2NrJyk7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyJyxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIHJlYWRlcnMuXG4gICAgZnVuY3Rpb24gSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoeCkge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfcmVhZFJlcXVlc3RzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbTtcbiAgICAgICAgc3RyZWFtLl9kaXN0dXJiZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jbG9zZVN0ZXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgICAgICByZWFkUmVxdWVzdC5fZXJyb3JTdGVwcyhzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlclJlbGVhc2UocmVhZGVyKSB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBUeXBlRXJyb3IoJ1JlYWRlciB3YXMgcmVsZWFzZWQnKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyRXJyb3JSZWFkUmVxdWVzdHMocmVhZGVyLCBlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyRXJyb3JSZWFkUmVxdWVzdHMocmVhZGVyLCBlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0cyA9IHJlYWRlci5fcmVhZFJlcXVlc3RzO1xuICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICByZWFkUmVxdWVzdHMuZm9yRWFjaChyZWFkUmVxdWVzdCA9PiB7XG4gICAgICAgICAgICByZWFkUmVxdWVzdC5fZXJyb3JTdGVwcyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJgKTtcbiAgICB9XG5cbiAgICAvLy8gPHJlZmVyZW5jZSBsaWI9XCJlczIwMTguYXN5bmNpdGVyYWJsZVwiIC8+XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXG4gICAgY29uc3QgQXN5bmNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24qICgpIHsgfSkucHJvdG90eXBlKTtcblxuICAgIC8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxOC5hc3luY2l0ZXJhYmxlXCIgLz5cbiAgICBjbGFzcyBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IocmVhZGVyLCBwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLl9vbmdvaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZlbnRDYW5jZWwgPSBwcmV2ZW50Q2FuY2VsO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0U3RlcHMgPSAoKSA9PiB0aGlzLl9uZXh0U3RlcHMoKTtcbiAgICAgICAgICAgIHRoaXMuX29uZ29pbmdQcm9taXNlID0gdGhpcy5fb25nb2luZ1Byb21pc2UgP1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVByb21pc2VXaXRoKHRoaXMuX29uZ29pbmdQcm9taXNlLCBuZXh0U3RlcHMsIG5leHRTdGVwcykgOlxuICAgICAgICAgICAgICAgIG5leHRTdGVwcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uZ29pbmdQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmV0dXJuU3RlcHMgPSAoKSA9PiB0aGlzLl9yZXR1cm5TdGVwcyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25nb2luZ1Byb21pc2UgP1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVByb21pc2VXaXRoKHRoaXMuX29uZ29pbmdQcm9taXNlLCByZXR1cm5TdGVwcywgcmV0dXJuU3RlcHMpIDpcbiAgICAgICAgICAgICAgICByZXR1cm5TdGVwcygpO1xuICAgICAgICB9XG4gICAgICAgIF9uZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gdGhpcy5fcmVhZGVyO1xuICAgICAgICAgICAgbGV0IHJlc29sdmVQcm9taXNlO1xuICAgICAgICAgICAgbGV0IHJlamVjdFByb21pc2U7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHJlamVjdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIF9jaHVua1N0ZXBzOiBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uZ29pbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgYnkgb25lIG1pY3JvdGFzaywgb3RoZXJ3aXNlIHdlIHN0b3AgcHVsbGluZyB0b28gZWFybHkgd2hpY2ggYnJlYWtzIGEgdGVzdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRklYTUUgSXMgdGhpcyBhIGJ1ZyBpbiB0aGUgc3BlY2lmaWNhdGlvbiwgb3IgaW4gdGhlIHRlc3Q/XG4gICAgICAgICAgICAgICAgICAgIF9xdWV1ZU1pY3JvdGFzaygoKSA9PiByZXNvbHZlUHJvbWlzZSh7IHZhbHVlOiBjaHVuaywgZG9uZTogZmFsc2UgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF9lcnJvclN0ZXBzOiByZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbmdvaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHJlYWRlciwgcmVhZFJlcXVlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3JldHVyblN0ZXBzKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB2YWx1ZSwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gdGhpcy5fcmVhZGVyO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljQ2FuY2VsKHJlYWRlciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgocmVzdWx0LCAoKSA9PiAoeyB2YWx1ZSwgZG9uZTogdHJ1ZSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh7IHZhbHVlLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvclByb3RvdHlwZSA9IHtcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW1Bc3luY0l0ZXJhdG9yQnJhbmRDaGVja0V4Y2VwdGlvbignbmV4dCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hc3luY0l0ZXJhdG9ySW1wbC5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKCdyZXR1cm4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXN5bmNJdGVyYXRvckltcGwucmV0dXJuKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvclByb3RvdHlwZSwgQXN5bmNJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtLlxuICAgIGZ1bmN0aW9uIEFjcXVpcmVSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3Ioc3RyZWFtLCBwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKTtcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JJbXBsKHJlYWRlciwgcHJldmVudENhbmNlbCk7XG4gICAgICAgIGNvbnN0IGl0ZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICBpdGVyYXRvci5fYXN5bmNJdGVyYXRvckltcGwgPSBpbXBsO1xuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yKHgpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2FzeW5jSXRlcmF0b3JJbXBsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFN1c3BpY2lvdXNUeXBlT2ZHdWFyZFxuICAgICAgICAgICAgcmV0dXJuIHguX2FzeW5jSXRlcmF0b3JJbXBsIGluc3RhbmNlb2ZcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JJbXBsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbiAgICBmdW5jdGlvbiBzdHJlYW1Bc3luY0l0ZXJhdG9yQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVTdGVhbUFzeW5jSXRlcmF0b3JgKTtcbiAgICB9XG5cbiAgICAvLy8gPHJlZmVyZW5jZSBsaWI9XCJlczIwMTUuY29yZVwiIC8+XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL2lzTmFOI1BvbHlmaWxsXG4gICAgY29uc3QgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgICByZXR1cm4geCAhPT0geDtcbiAgICB9O1xuXG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgZnVuY3Rpb24gQ3JlYXRlQXJyYXlGcm9tTGlzdChlbGVtZW50cykge1xuICAgICAgICAvLyBXZSB1c2UgYXJyYXlzIHRvIHJlcHJlc2VudCBsaXN0cywgc28gdGhpcyBpcyBiYXNpY2FsbHkgYSBuby1vcC5cbiAgICAgICAgLy8gRG8gYSBzbGljZSB0aG91Z2gganVzdCBpbiBjYXNlIHdlIGhhcHBlbiB0byBkZXBlbmQgb24gdGhlIHVuaXF1ZS1uZXNzLlxuICAgICAgICByZXR1cm4gZWxlbWVudHMuc2xpY2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ29weURhdGFCbG9ja0J5dGVzKGRlc3QsIGRlc3RPZmZzZXQsIHNyYywgc3JjT2Zmc2V0LCBuKSB7XG4gICAgICAgIG5ldyBVaW50OEFycmF5KGRlc3QpLnNldChuZXcgVWludDhBcnJheShzcmMsIHNyY09mZnNldCwgbiksIGRlc3RPZmZzZXQpO1xuICAgIH1cbiAgICBsZXQgVHJhbnNmZXJBcnJheUJ1ZmZlciA9IChPKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgTy50cmFuc2ZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgVHJhbnNmZXJBcnJheUJ1ZmZlciA9IGJ1ZmZlciA9PiBidWZmZXIudHJhbnNmZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3RydWN0dXJlZENsb25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBUcmFuc2ZlckFycmF5QnVmZmVyID0gYnVmZmVyID0+IHN0cnVjdHVyZWRDbG9uZShidWZmZXIsIHsgdHJhbnNmZXI6IFtidWZmZXJdIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IGltcGxlbWVudGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgVHJhbnNmZXJBcnJheUJ1ZmZlciA9IGJ1ZmZlciA9PiBidWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRyYW5zZmVyQXJyYXlCdWZmZXIoTyk7XG4gICAgfTtcbiAgICBsZXQgSXNEZXRhY2hlZEJ1ZmZlciA9IChPKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgTy5kZXRhY2hlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBJc0RldGFjaGVkQnVmZmVyID0gYnVmZmVyID0+IGJ1ZmZlci5kZXRhY2hlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBpbXBsZW1lbnRlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgIElzRGV0YWNoZWRCdWZmZXIgPSBidWZmZXIgPT4gYnVmZmVyLmJ5dGVMZW5ndGggPT09IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIElzRGV0YWNoZWRCdWZmZXIoTyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBBcnJheUJ1ZmZlclNsaWNlKGJ1ZmZlciwgYmVnaW4sIGVuZCkge1xuICAgICAgICAvLyBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBJRTEwXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LmNhbml1c2UuY29tL21kbi1qYXZhc2NyaXB0X2J1aWx0aW5zX2FycmF5YnVmZmVyX3NsaWNlXG4gICAgICAgIGlmIChidWZmZXIuc2xpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZW5kIC0gYmVnaW47XG4gICAgICAgIGNvbnN0IHNsaWNlID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgICAgIENvcHlEYXRhQmxvY2tCeXRlcyhzbGljZSwgMCwgYnVmZmVyLCBiZWdpbiwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHNsaWNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBHZXRNZXRob2QocmVjZWl2ZXIsIHByb3ApIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHJlY2VpdmVyW3Byb3BdO1xuICAgICAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkIHx8IGZ1bmMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke1N0cmluZyhwcm9wKX0gaXMgbm90IGEgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuYztcbiAgICB9XG4gICAgZnVuY3Rpb24gQ3JlYXRlQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHN5bmNJdGVyYXRvclJlY29yZCkge1xuICAgICAgICAvLyBJbnN0ZWFkIG9mIHJlLWltcGxlbWVudGluZyBDcmVhdGVBc3luY0Zyb21TeW5jSXRlcmF0b3IgYW5kICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlLFxuICAgICAgICAvLyB3ZSB1c2UgeWllbGQqIGluc2lkZSBhbiBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gdG8gYWNoaWV2ZSB0aGUgc2FtZSByZXN1bHQuXG4gICAgICAgIC8vIFdyYXAgdGhlIHN5bmMgaXRlcmF0b3IgaW5zaWRlIGEgc3luYyBpdGVyYWJsZSwgc28gd2UgY2FuIHVzZSBpdCB3aXRoIHlpZWxkKi5cbiAgICAgICAgY29uc3Qgc3luY0l0ZXJhYmxlID0ge1xuICAgICAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHN5bmNJdGVyYXRvclJlY29yZC5pdGVyYXRvclxuICAgICAgICB9O1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGFuZCBpbW1lZGlhdGVseSBpbnZva2UgaXQuXG4gICAgICAgIGNvbnN0IGFzeW5jSXRlcmF0b3IgPSAoYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCogc3luY0l0ZXJhYmxlO1xuICAgICAgICB9KCkpO1xuICAgICAgICAvLyBSZXR1cm4gYXMgYW4gYXN5bmMgaXRlcmF0b3IgcmVjb3JkLlxuICAgICAgICBjb25zdCBuZXh0TWV0aG9kID0gYXN5bmNJdGVyYXRvci5uZXh0O1xuICAgICAgICByZXR1cm4geyBpdGVyYXRvcjogYXN5bmNJdGVyYXRvciwgbmV4dE1ldGhvZCwgZG9uZTogZmFsc2UgfTtcbiAgICB9XG4gICAgLy8gQWxpZ25zIHdpdGggY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuICAgIGNvbnN0IFN5bWJvbEFzeW5jSXRlcmF0b3IgPSAoX2MgPSAoX2EgPSBTeW1ib2wuYXN5bmNJdGVyYXRvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKF9iID0gU3ltYm9sLmZvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoU3ltYm9sLCAnU3ltYm9sLmFzeW5jSXRlcmF0b3InKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJ0BAYXN5bmNJdGVyYXRvcic7XG4gICAgZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqLCBoaW50ID0gJ3N5bmMnLCBtZXRob2QpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaGludCA9PT0gJ2FzeW5jJykge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9IEdldE1ldGhvZChvYmosIFN5bWJvbEFzeW5jSXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW5jTWV0aG9kID0gR2V0TWV0aG9kKG9iaiwgU3ltYm9sLml0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3luY0l0ZXJhdG9yUmVjb3JkID0gR2V0SXRlcmF0b3Iob2JqLCAnc3luYycsIHN5bmNNZXRob2QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3JlYXRlQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHN5bmNJdGVyYXRvclJlY29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gR2V0TWV0aG9kKG9iaiwgU3ltYm9sLml0ZXJhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBvYmplY3QgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSByZWZsZWN0Q2FsbChtZXRob2QsIG9iaiwgW10pO1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdChpdGVyYXRvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBpdGVyYXRvciBtZXRob2QgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dE1ldGhvZCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgICAgIHJldHVybiB7IGl0ZXJhdG9yLCBuZXh0TWV0aG9kLCBkb25lOiBmYWxzZSB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBJdGVyYXRvck5leHQoaXRlcmF0b3JSZWNvcmQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVmbGVjdENhbGwoaXRlcmF0b3JSZWNvcmQubmV4dE1ldGhvZCwgaXRlcmF0b3JSZWNvcmQuaXRlcmF0b3IsIFtdKTtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGl0ZXJhdG9yLm5leHQoKSBtZXRob2QgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gSXRlcmF0b3JDb21wbGV0ZShpdGVyUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGl0ZXJSZXN1bHQuZG9uZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuICAgICAgICByZXR1cm4gaXRlclJlc3VsdC52YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBJc05vbk5lZ2F0aXZlTnVtYmVyKHYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXJJc05hTih2KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDbG9uZUFzVWludDhBcnJheShPKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEFycmF5QnVmZmVyU2xpY2UoTy5idWZmZXIsIE8uYnl0ZU9mZnNldCwgTy5ieXRlT2Zmc2V0ICsgTy5ieXRlTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGVxdWV1ZVZhbHVlKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBwYWlyID0gY29udGFpbmVyLl9xdWV1ZS5zaGlmdCgpO1xuICAgICAgICBjb250YWluZXIuX3F1ZXVlVG90YWxTaXplIC09IHBhaXIuc2l6ZTtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgPCAwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuX3F1ZXVlVG90YWxTaXplID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFpci52YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udGFpbmVyLCB2YWx1ZSwgc2l6ZSkge1xuICAgICAgICBpZiAoIUlzTm9uTmVnYXRpdmVOdW1iZXIoc2l6ZSkgfHwgc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdTaXplIG11c3QgYmUgYSBmaW5pdGUsIG5vbi1OYU4sIG5vbi1uZWdhdGl2ZSBudW1iZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLl9xdWV1ZS5wdXNoKHsgdmFsdWUsIHNpemUgfSk7XG4gICAgICAgIGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgKz0gc2l6ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUGVla1F1ZXVlVmFsdWUoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBjb250YWluZXIuX3F1ZXVlLnBlZWsoKTtcbiAgICAgICAgcmV0dXJuIHBhaXIudmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlc2V0UXVldWUoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5fcXVldWUgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgY29udGFpbmVyLl9xdWV1ZVRvdGFsU2l6ZSA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXRhVmlld0NvbnN0cnVjdG9yKGN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGN0b3IgPT09IERhdGFWaWV3O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0RhdGFWaWV3KHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIGlzRGF0YVZpZXdDb25zdHJ1Y3Rvcih2aWV3LmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJWaWV3RWxlbWVudFNpemUoY3Rvcikge1xuICAgICAgICBpZiAoaXNEYXRhVmlld0NvbnN0cnVjdG9yKGN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3Rvci5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHB1bGwtaW50byByZXF1ZXN0IGluIGEge0BsaW5rIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJ9LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgdmlldyBmb3Igd3JpdGluZyBpbiB0bywgb3IgYG51bGxgIGlmIHRoZSBCWU9CIHJlcXVlc3QgaGFzIGFscmVhZHkgYmVlbiByZXNwb25kZWQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgdmlldygpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKCd2aWV3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgICAgICAgfVxuICAgICAgICByZXNwb25kKGJ5dGVzV3JpdHRlbikge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3Jlc3BvbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQoYnl0ZXNXcml0dGVuLCAxLCAncmVzcG9uZCcpO1xuICAgICAgICAgICAgYnl0ZXNXcml0dGVuID0gY29udmVydFVuc2lnbmVkTG9uZ0xvbmdXaXRoRW5mb3JjZVJhbmdlKGJ5dGVzV3JpdHRlbiwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIEJZT0IgcmVxdWVzdCBoYXMgYmVlbiBpbnZhbGlkYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKElzRGV0YWNoZWRCdWZmZXIodGhpcy5fdmlldy5idWZmZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIEJZT0IgcmVxdWVzdCdzIGJ1ZmZlciBoYXMgYmVlbiBkZXRhY2hlZCBhbmQgc28gY2Fubm90IGJlIHVzZWQgYXMgYSByZXNwb25zZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uZFdpdGhOZXdWaWV3KHZpZXcpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKCdyZXNwb25kV2l0aE5ld1ZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQodmlldywgMSwgJ3Jlc3BvbmRXaXRoTmV3VmlldycpO1xuICAgICAgICAgICAgaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcodmlldykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgY2FuIG9ubHkgcmVzcG9uZCB3aXRoIGFycmF5IGJ1ZmZlciB2aWV3cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIEJZT0IgcmVxdWVzdCBoYXMgYmVlbiBpbnZhbGlkYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKElzRGV0YWNoZWRCdWZmZXIodmlldy5idWZmZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGdpdmVuIHZpZXdcXCdzIGJ1ZmZlciBoYXMgYmVlbiBkZXRhY2hlZCBhbmQgc28gY2Fubm90IGJlIHVzZWQgYXMgYSByZXNwb25zZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRXaXRoTmV3Vmlldyh0aGlzLl9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciwgdmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUsIHtcbiAgICAgICAgcmVzcG9uZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlc3BvbmRXaXRoTmV3VmlldzogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHZpZXc6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgfSk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QucHJvdG90eXBlLnJlc3BvbmQsICdyZXNwb25kJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QucHJvdG90eXBlLnJlc3BvbmRXaXRoTmV3VmlldywgJ3Jlc3BvbmRXaXRoTmV3VmlldycpO1xuICAgIGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgdmFsdWU6ICdSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0JyxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsb3dzIGNvbnRyb2wgb2YgYSB7QGxpbmsgUmVhZGFibGVTdHJlYW0gfCByZWFkYWJsZSBieXRlIHN0cmVhbX0ncyBzdGF0ZSBhbmQgaW50ZXJuYWwgcXVldWUuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xhc3MgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IEJZT0IgcHVsbCByZXF1ZXN0LCBvciBgbnVsbGAgaWYgdGhlcmUgaXNuJ3Qgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGJ5b2JSZXF1ZXN0KCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2J5b2JSZXF1ZXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldEJZT0JSZXF1ZXN0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXNpcmVkIHNpemUgdG8gZmlsbCB0aGUgY29udHJvbGxlZCBzdHJlYW0ncyBpbnRlcm5hbCBxdWV1ZS4gSXQgY2FuIGJlIG5lZ2F0aXZlLCBpZiB0aGUgcXVldWUgaXNcbiAgICAgICAgICogb3Zlci1mdWxsLiBBbiB1bmRlcmx5aW5nIGJ5dGUgc291cmNlIG91Z2h0IHRvIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRldGVybWluZSB3aGVuIGFuZCBob3cgdG8gYXBwbHkgYmFja3ByZXNzdXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGRlc2lyZWRTaXplKCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Rlc2lyZWRTaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldERlc2lyZWRTaXplKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZXMgdGhlIGNvbnRyb2xsZWQgcmVhZGFibGUgc3RyZWFtLiBDb25zdW1lcnMgd2lsbCBzdGlsbCBiZSBhYmxlIHRvIHJlYWQgYW55IHByZXZpb3VzbHktZW5xdWV1ZWQgY2h1bmtzIGZyb21cbiAgICAgICAgICogdGhlIHN0cmVhbSwgYnV0IG9uY2UgdGhvc2UgYXJlIHJlYWQsIHRoZSBzdHJlYW0gd2lsbCBiZWNvbWUgY2xvc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGJ5dGVTdHJlYW1Db250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbignY2xvc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQ7IGRvIG5vdCBjbG9zZSBpdCBhZ2FpbiEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc3RyZWFtIChpbiAke3N0YXRlfSBzdGF0ZSkgaXMgbm90IGluIHRoZSByZWFkYWJsZSBzdGF0ZSBhbmQgY2Fubm90IGJlIGNsb3NlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoY2h1bmspIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYnl0ZVN0cmVhbUNvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdlbnF1ZXVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KGNodW5rLCAxLCAnZW5xdWV1ZScpO1xuICAgICAgICAgICAgaWYgKCFBcnJheUJ1ZmZlci5pc1ZpZXcoY2h1bmspKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2h1bmsgbXVzdCBiZSBhbiBhcnJheSBidWZmZXIgdmlldycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjaHVuayBtdXN0IGhhdmUgbm9uLXplcm8gYnl0ZUxlbmd0aCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNodW5rLmJ1ZmZlci5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY2h1bmsncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0cmVhbSBpcyBjbG9zZWQgb3IgZHJhaW5pbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgc3RyZWFtIChpbiAke3N0YXRlfSBzdGF0ZSkgaXMgbm90IGluIHRoZSByZWFkYWJsZSBzdGF0ZSBhbmQgY2Fubm90IGJlIGVucXVldWVkIHRvYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVycm9ycyB0aGUgY29udHJvbGxlZCByZWFkYWJsZSBzdHJlYW0sIG1ha2luZyBhbGwgZnV0dXJlIGludGVyYWN0aW9ucyB3aXRoIGl0IGZhaWwgd2l0aCB0aGUgZ2l2ZW4gZXJyb3IgYGVgLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3IoZSA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBbQ2FuY2VsU3RlcHNdKHJlYXNvbikge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyUGVuZGluZ1B1bGxJbnRvcyh0aGlzKTtcbiAgICAgICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jYW5jZWxBbGdvcml0aG0ocmVhc29uKTtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXModGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgICAgICAgICBpZiAodGhpcy5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxSZWFkUmVxdWVzdEZyb21RdWV1ZSh0aGlzLCByZWFkUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXV0b0FsbG9jYXRlQ2h1bmtTaXplID0gdGhpcy5fYXV0b0FsbG9jYXRlQ2h1bmtTaXplO1xuICAgICAgICAgICAgaWYgKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYXV0b0FsbG9jYXRlQ2h1bmtTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGJ1ZmZlckUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZFJlcXVlc3QuX2Vycm9yU3RlcHMoYnVmZmVyRSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcHVsbEludG9EZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckJ5dGVMZW5ndGg6IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYXV0b0FsbG9jYXRlQ2h1bmtTaXplLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0ZpbGxlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bUZpbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTaXplOiAxLFxuICAgICAgICAgICAgICAgICAgICB2aWV3Q29uc3RydWN0b3I6IFVpbnQ4QXJyYXksXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlclR5cGU6ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1B1bGxJbnRvcy5wdXNoKHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUFkZFJlYWRSZXF1ZXN0KHN0cmVhbSwgcmVhZFJlcXVlc3QpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBbUmVsZWFzZVN0ZXBzXSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFB1bGxJbnRvID0gdGhpcy5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgZmlyc3RQdWxsSW50by5yZWFkZXJUeXBlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdQdWxsSW50b3MgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nUHVsbEludG9zLnB1c2goZmlyc3RQdWxsSW50byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5wcm90b3R5cGUsIHtcbiAgICAgICAgY2xvc2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBlbnF1ZXVlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZXJyb3I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBieW9iUmVxdWVzdDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGRlc2lyZWRTaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLnByb3RvdHlwZS5jbG9zZSwgJ2Nsb3NlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLmVucXVldWUsICdlbnF1ZXVlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLmVycm9yLCAnZXJyb3InKTtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcicsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLlxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcih4KSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh4KSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFB1bGwgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hvdWxkQ2FsbFB1bGwoY29udHJvbGxlcik7XG4gICAgICAgIGlmICghc2hvdWxkUHVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wdWxsaW5nKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxpbmcgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBUZXN0IGNvbnRyb2xsZXIgYXJndW1lbnRcbiAgICAgICAgY29uc3QgcHVsbFByb21pc2UgPSBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtKCk7XG4gICAgICAgIHVwb25Qcm9taXNlKHB1bGxQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlci5fcHVsbEFnYWluKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5fcHVsbEFnYWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgZSA9PiB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhclBlbmRpbmdQdWxsSW50b3MoY29udHJvbGxlcikge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpO1xuICAgICAgICBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDb21taXRQdWxsSW50b0Rlc2NyaXB0b3Ioc3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxsZWRWaWV3ID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbnZlcnRQdWxsSW50b0Rlc2NyaXB0b3IocHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgaWYgKHB1bGxJbnRvRGVzY3JpcHRvci5yZWFkZXJUeXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRnVsZmlsbFJlYWRSZXF1ZXN0KHN0cmVhbSwgZmlsbGVkVmlldywgZG9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCBmaWxsZWRWaWV3LCBkb25lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29udmVydFB1bGxJbnRvRGVzY3JpcHRvcihwdWxsSW50b0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3QgYnl0ZXNGaWxsZWQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTaXplID0gcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgICAgICByZXR1cm4gbmV3IHB1bGxJbnRvRGVzY3JpcHRvci52aWV3Q29uc3RydWN0b3IocHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciwgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQsIGJ5dGVzRmlsbGVkIC8gZWxlbWVudFNpemUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZUNodW5rVG9RdWV1ZShjb250cm9sbGVyLCBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWUucHVzaCh7IGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCB9KTtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgKz0gYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDbG9uZWRDaHVua1RvUXVldWUoY29udHJvbGxlciwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgICAgIGxldCBjbG9uZWRDaHVuaztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNsb25lZENodW5rID0gQXJyYXlCdWZmZXJTbGljZShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoY2xvbmVFKSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgIHRocm93IGNsb25lRTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZUNodW5rVG9RdWV1ZShjb250cm9sbGVyLCBjbG9uZWRDaHVuaywgMCwgYnl0ZUxlbmd0aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlRGV0YWNoZWRQdWxsSW50b1RvUXVldWUoY29udHJvbGxlciwgZmlyc3REZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmIChmaXJzdERlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgPiAwKSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZUNsb25lZENodW5rVG9RdWV1ZShjb250cm9sbGVyLCBmaXJzdERlc2NyaXB0b3IuYnVmZmVyLCBmaXJzdERlc2NyaXB0b3IuYnl0ZU9mZnNldCwgZmlyc3REZXNjcmlwdG9yLmJ5dGVzRmlsbGVkKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hpZnRQZW5kaW5nUHVsbEludG8oY29udHJvbGxlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUHVsbEludG9EZXNjcmlwdG9yRnJvbVF1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcikge1xuICAgICAgICBjb25zdCBtYXhCeXRlc1RvQ29weSA9IE1hdGgubWluKGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplLCBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZUxlbmd0aCAtIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCk7XG4gICAgICAgIGNvbnN0IG1heEJ5dGVzRmlsbGVkID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkICsgbWF4Qnl0ZXNUb0NvcHk7XG4gICAgICAgIGxldCB0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID0gbWF4Qnl0ZXNUb0NvcHk7XG4gICAgICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZW1haW5kZXJCeXRlcyA9IG1heEJ5dGVzRmlsbGVkICUgcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgICAgICBjb25zdCBtYXhBbGlnbmVkQnl0ZXMgPSBtYXhCeXRlc0ZpbGxlZCAtIHJlbWFpbmRlckJ5dGVzO1xuICAgICAgICAvLyBBIGRlc2NyaXB0b3IgZm9yIGEgcmVhZCgpIHJlcXVlc3QgdGhhdCBpcyBub3QgeWV0IGZpbGxlZCB1cCB0byBpdHMgbWluaW11bSBsZW5ndGggd2lsbCBzdGF5IGF0IHRoZSBoZWFkXG4gICAgICAgIC8vIG9mIHRoZSBxdWV1ZSwgc28gdGhlIHVuZGVybHlpbmcgc291cmNlIGNhbiBrZWVwIGZpbGxpbmcgaXQuXG4gICAgICAgIGlmIChtYXhBbGlnbmVkQnl0ZXMgPj0gcHVsbEludG9EZXNjcmlwdG9yLm1pbmltdW1GaWxsKSB7XG4gICAgICAgICAgICB0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID0gbWF4QWxpZ25lZEJ5dGVzIC0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkO1xuICAgICAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gY29udHJvbGxlci5fcXVldWU7XG4gICAgICAgIHdoaWxlICh0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID4gMCkge1xuICAgICAgICAgICAgY29uc3QgaGVhZE9mUXVldWUgPSBxdWV1ZS5wZWVrKCk7XG4gICAgICAgICAgICBjb25zdCBieXRlc1RvQ29weSA9IE1hdGgubWluKHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcsIGhlYWRPZlF1ZXVlLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgZGVzdFN0YXJ0ID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgICAgICBDb3B5RGF0YUJsb2NrQnl0ZXMocHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciwgZGVzdFN0YXJ0LCBoZWFkT2ZRdWV1ZS5idWZmZXIsIGhlYWRPZlF1ZXVlLmJ5dGVPZmZzZXQsIGJ5dGVzVG9Db3B5KTtcbiAgICAgICAgICAgIGlmIChoZWFkT2ZRdWV1ZS5ieXRlTGVuZ3RoID09PSBieXRlc1RvQ29weSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkT2ZRdWV1ZS5ieXRlT2Zmc2V0ICs9IGJ5dGVzVG9Db3B5O1xuICAgICAgICAgICAgICAgIGhlYWRPZlF1ZXVlLmJ5dGVMZW5ndGggLT0gYnl0ZXNUb0NvcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSAtPSBieXRlc1RvQ29weTtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsSGVhZFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLCBieXRlc1RvQ29weSwgcHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgLT0gYnl0ZXNUb0NvcHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRmlsbEhlYWRQdWxsSW50b0Rlc2NyaXB0b3IoY29udHJvbGxlciwgc2l6ZSwgcHVsbEludG9EZXNjcmlwdG9yKSB7XG4gICAgICAgIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArPSBzaXplO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySGFuZGxlUXVldWVEcmFpbihjb250cm9sbGVyKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCAmJiBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtQ2xvc2UoY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5fYnlvYlJlcXVlc3QuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdC5fdmlldyA9IG51bGw7XG4gICAgICAgIGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclByb2Nlc3NQdWxsSW50b0Rlc2NyaXB0b3JzVXNpbmdRdWV1ZShjb250cm9sbGVyKSB7XG4gICAgICAgIHdoaWxlIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHB1bGxJbnRvRGVzY3JpcHRvciA9IGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucGVlaygpO1xuICAgICAgICAgICAgaWYgKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUHVsbEludG9EZXNjcmlwdG9yRnJvbVF1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hpZnRQZW5kaW5nUHVsbEludG8oY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQcm9jZXNzUmVhZFJlcXVlc3RzVXNpbmdRdWV1ZShjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0uX3JlYWRlcjtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5fcmVhZFJlcXVlc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0ID0gcmVhZGVyLl9yZWFkUmVxdWVzdHMuc2hpZnQoKTtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUmVhZFJlcXVlc3RGcm9tUXVldWUoY29udHJvbGxlciwgcmVhZFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQdWxsSW50byhjb250cm9sbGVyLCB2aWV3LCBtaW4sIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgICAgICBjb25zdCBjdG9yID0gdmlldy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgY29uc3QgZWxlbWVudFNpemUgPSBhcnJheUJ1ZmZlclZpZXdFbGVtZW50U2l6ZShjdG9yKTtcbiAgICAgICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoIH0gPSB2aWV3O1xuICAgICAgICBjb25zdCBtaW5pbXVtRmlsbCA9IG1pbiAqIGVsZW1lbnRTaXplO1xuICAgICAgICBsZXQgYnVmZmVyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcih2aWV3LmJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fZXJyb3JTdGVwcyhlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgICBidWZmZXJCeXRlTGVuZ3RoOiBidWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQsXG4gICAgICAgICAgICBieXRlTGVuZ3RoLFxuICAgICAgICAgICAgYnl0ZXNGaWxsZWQ6IDAsXG4gICAgICAgICAgICBtaW5pbXVtRmlsbCxcbiAgICAgICAgICAgIGVsZW1lbnRTaXplLFxuICAgICAgICAgICAgdmlld0NvbnN0cnVjdG9yOiBjdG9yLFxuICAgICAgICAgICAgcmVhZGVyVHlwZTogJ2J5b2InXG4gICAgICAgIH07XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucHVzaChwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgLy8gTm8gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoKSBjYWxsIHNpbmNlOlxuICAgICAgICAgICAgLy8gLSBObyBjaGFuZ2UgaGFwcGVucyBvbiBkZXNpcmVkU2l6ZVxuICAgICAgICAgICAgLy8gLSBUaGUgc291cmNlIGhhcyBhbHJlYWR5IGJlZW4gbm90aWZpZWQgb2YgdGhhdCB0aGVyZSdzIGF0IGxlYXN0IDEgcGVuZGluZyByZWFkKHZpZXcpXG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUFkZFJlYWRJbnRvUmVxdWVzdChzdHJlYW0sIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVZpZXcgPSBuZXcgY3RvcihwdWxsSW50b0Rlc2NyaXB0b3IuYnVmZmVyLCBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZU9mZnNldCwgMCk7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Nsb3NlU3RlcHMoZW1wdHlWaWV3KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgICAgICBpZiAoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxQdWxsSW50b0Rlc2NyaXB0b3JGcm9tUXVldWUoY29udHJvbGxlciwgcHVsbEludG9EZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxlZFZpZXcgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29udmVydFB1bGxJbnRvRGVzY3JpcHRvcihwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJIYW5kbGVRdWV1ZURyYWluKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2h1bmtTdGVwcyhmaWxsZWRWaWV3KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IFR5cGVFcnJvcignSW5zdWZmaWNpZW50IGJ5dGVzIHRvIGZpbGwgZWxlbWVudHMgaW4gdGhlIGdpdmVuIGJ1ZmZlcicpO1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlKTtcbiAgICAgICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Vycm9yU3RlcHMoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucHVzaChwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUFkZFJlYWRJbnRvUmVxdWVzdChzdHJlYW0sIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEluQ2xvc2VkU3RhdGUoY29udHJvbGxlciwgZmlyc3REZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmIChmaXJzdERlc2NyaXB0b3IucmVhZGVyVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hpZnRQZW5kaW5nUHVsbEludG8oY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgaWYgKFJlYWRhYmxlU3RyZWFtSGFzQllPQlJlYWRlcihzdHJlYW0pKSB7XG4gICAgICAgICAgICB3aGlsZSAoUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkSW50b1JlcXVlc3RzKHN0cmVhbSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHVsbEludG9EZXNjcmlwdG9yID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDb21taXRQdWxsSW50b0Rlc2NyaXB0b3Ioc3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5SZWFkYWJsZVN0YXRlKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbiwgcHVsbEludG9EZXNjcmlwdG9yKSB7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsSGVhZFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4sIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIGlmIChwdWxsSW50b0Rlc2NyaXB0b3IucmVhZGVyVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZURldGFjaGVkUHVsbEludG9Ub1F1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUHJvY2Vzc1B1bGxJbnRvRGVzY3JpcHRvcnNVc2luZ1F1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgPCBwdWxsSW50b0Rlc2NyaXB0b3IubWluaW11bUZpbGwpIHtcbiAgICAgICAgICAgIC8vIEEgZGVzY3JpcHRvciBmb3IgYSByZWFkKCkgcmVxdWVzdCB0aGF0IGlzIG5vdCB5ZXQgZmlsbGVkIHVwIHRvIGl0cyBtaW5pbXVtIGxlbmd0aCB3aWxsIHN0YXkgYXQgdGhlIGhlYWRcbiAgICAgICAgICAgIC8vIG9mIHRoZSBxdWV1ZSwgc28gdGhlIHVuZGVybHlpbmcgc291cmNlIGNhbiBrZWVwIGZpbGxpbmcgaXQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICBjb25zdCByZW1haW5kZXJTaXplID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkICUgcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgICAgICBpZiAocmVtYWluZGVyU2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlT2Zmc2V0ICsgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDbG9uZWRDaHVua1RvUXVldWUoY29udHJvbGxlciwgcHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciwgZW5kIC0gcmVtYWluZGVyU2l6ZSwgcmVtYWluZGVyU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkIC09IHJlbWFpbmRlclNpemU7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDb21taXRQdWxsSW50b0Rlc2NyaXB0b3IoY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbSwgcHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclByb2Nlc3NQdWxsSW50b0Rlc2NyaXB0b3JzVXNpbmdRdWV1ZShjb250cm9sbGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJbnRlcm5hbChjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4pIHtcbiAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJJbnZhbGlkYXRlQllPQlJlcXVlc3QoY29udHJvbGxlcik7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5DbG9zZWRTdGF0ZShjb250cm9sbGVyLCBmaXJzdERlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJblJlYWRhYmxlU3RhdGUoY29udHJvbGxlciwgYnl0ZXNXcml0dGVuLCBmaXJzdERlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hpZnRQZW5kaW5nUHVsbEludG8oY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1IYXNEZWZhdWx0UmVhZGVyKHN0cmVhbSkgJiYgUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSAmJiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRJbnRvUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc2lyZWRTaXplID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoZGVzaXJlZFNpemUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEEgY2xpZW50IG9mIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIgbWF5IHVzZSB0aGVzZSBmdW5jdGlvbnMgZGlyZWN0bHkgdG8gYnlwYXNzIHN0YXRlIGNoZWNrLlxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbG9zZShjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCB8fCBzdHJlYW0uX3N0YXRlICE9PSAncmVhZGFibGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplID4gMCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGVuZGluZ1B1bGxJbnRvID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoZmlyc3RQZW5kaW5nUHVsbEludG8uYnl0ZXNGaWxsZWQgJSBmaXJzdFBlbmRpbmdQdWxsSW50by5lbGVtZW50U2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgVHlwZUVycm9yKCdJbnN1ZmZpY2llbnQgYnl0ZXMgdG8gZmlsbCBlbGVtZW50cyBpbiB0aGUgZ2l2ZW4gYnVmZmVyJyk7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUpO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZShjb250cm9sbGVyLCBjaHVuaykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgfHwgc3RyZWFtLl9zdGF0ZSAhPT0gJ3JlYWRhYmxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoIH0gPSBjaHVuaztcbiAgICAgICAgaWYgKElzRGV0YWNoZWRCdWZmZXIoYnVmZmVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2h1bmtcXCdzIGJ1ZmZlciBpcyBkZXRhY2hlZCBhbmQgc28gY2Fubm90IGJlIGVucXVldWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNmZXJyZWRCdWZmZXIgPSBUcmFuc2ZlckFycmF5QnVmZmVyKGJ1ZmZlcik7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGVuZGluZ1B1bGxJbnRvID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoSXNEZXRhY2hlZEJ1ZmZlcihmaXJzdFBlbmRpbmdQdWxsSW50by5idWZmZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIEJZT0IgcmVxdWVzdFxcJ3MgYnVmZmVyIGhhcyBiZWVuIGRldGFjaGVkIGFuZCBzbyBjYW5ub3QgYmUgZmlsbGVkIHdpdGggYW4gZW5xdWV1ZWQgY2h1bmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJJbnZhbGlkYXRlQllPQlJlcXVlc3QoY29udHJvbGxlcik7XG4gICAgICAgICAgICBmaXJzdFBlbmRpbmdQdWxsSW50by5idWZmZXIgPSBUcmFuc2ZlckFycmF5QnVmZmVyKGZpcnN0UGVuZGluZ1B1bGxJbnRvLmJ1ZmZlcik7XG4gICAgICAgICAgICBpZiAoZmlyc3RQZW5kaW5nUHVsbEludG8ucmVhZGVyVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVEZXRhY2hlZFB1bGxJbnRvVG9RdWV1ZShjb250cm9sbGVyLCBmaXJzdFBlbmRpbmdQdWxsSW50byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFJlYWRhYmxlU3RyZWFtSGFzRGVmYXVsdFJlYWRlcihzdHJlYW0pKSB7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUHJvY2Vzc1JlYWRSZXF1ZXN0c1VzaW5nUXVldWUoY29udHJvbGxlcik7XG4gICAgICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIHRyYW5zZmVycmVkQnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2ZlcnJlZFZpZXcgPSBuZXcgVWludDhBcnJheSh0cmFuc2ZlcnJlZEJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1GdWxmaWxsUmVhZFJlcXVlc3Qoc3RyZWFtLCB0cmFuc2ZlcnJlZFZpZXcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogSWRlYWxseSBpbiB0aGlzIGJyYW5jaCBkZXRhY2hpbmcgc2hvdWxkIGhhcHBlbiBvbmx5IGlmIHRoZSBidWZmZXIgaXMgbm90IGNvbnN1bWVkIGZ1bGx5LlxuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgdHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclByb2Nlc3NQdWxsSW50b0Rlc2NyaXB0b3JzVXNpbmdRdWV1ZShjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIHRyYW5zZmVycmVkQnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xlYXJQZW5kaW5nUHVsbEludG9zKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUVycm9yKHN0cmVhbSwgZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUmVhZFJlcXVlc3RGcm9tUXVldWUoY29udHJvbGxlciwgcmVhZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZW50cnkgPSBjb250cm9sbGVyLl9xdWV1ZS5zaGlmdCgpO1xuICAgICAgICBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSAtPSBlbnRyeS5ieXRlTGVuZ3RoO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySGFuZGxlUXVldWVEcmFpbihjb250cm9sbGVyKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGVudHJ5LmJ1ZmZlciwgZW50cnkuYnl0ZU9mZnNldCwgZW50cnkuYnl0ZUxlbmd0aCk7XG4gICAgICAgIHJlYWRSZXF1ZXN0Ll9jaHVua1N0ZXBzKHZpZXcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyR2V0QllPQlJlcXVlc3QoY29udHJvbGxlcikge1xuICAgICAgICBpZiAoY29udHJvbGxlci5fYnlvYlJlcXVlc3QgPT09IG51bGwgJiYgY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdERlc2NyaXB0b3IgPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheShmaXJzdERlc2NyaXB0b3IuYnVmZmVyLCBmaXJzdERlc2NyaXB0b3IuYnl0ZU9mZnNldCArIGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCwgZmlyc3REZXNjcmlwdG9yLmJ5dGVMZW5ndGggLSBmaXJzdERlc2NyaXB0b3IuYnl0ZXNGaWxsZWQpO1xuICAgICAgICAgICAgY29uc3QgYnlvYlJlcXVlc3QgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QucHJvdG90eXBlKTtcbiAgICAgICAgICAgIFNldFVwUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdChieW9iUmVxdWVzdCwgY29udHJvbGxlciwgdmlldyk7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9IGJ5b2JSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLl9ieW9iUmVxdWVzdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLl9zdHJhdGVneUhXTSAtIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZChjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4pIHtcbiAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIGlmIChieXRlc1dyaXR0ZW4gIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdieXRlc1dyaXR0ZW4gbXVzdCBiZSAwIHdoZW4gY2FsbGluZyByZXNwb25kKCkgb24gYSBjbG9zZWQgc3RyZWFtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYnl0ZXNXcml0dGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYnl0ZXNXcml0dGVuIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgd2hlbiBjYWxsaW5nIHJlc3BvbmQoKSBvbiBhIHJlYWRhYmxlIHN0cmVhbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArIGJ5dGVzV3JpdHRlbiA+IGZpcnN0RGVzY3JpcHRvci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2J5dGVzV3JpdHRlbiBvdXQgb2YgcmFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaXJzdERlc2NyaXB0b3IuYnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcihmaXJzdERlc2NyaXB0b3IuYnVmZmVyKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJbnRlcm5hbChjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZFdpdGhOZXdWaWV3KGNvbnRyb2xsZXIsIHZpZXcpIHtcbiAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIGlmICh2aWV3LmJ5dGVMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmlld1xcJ3MgbGVuZ3RoIG11c3QgYmUgMCB3aGVuIGNhbGxpbmcgcmVzcG9uZFdpdGhOZXdWaWV3KCkgb24gYSBjbG9zZWQgc3RyZWFtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodmlldy5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZpZXdcXCdzIGxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIHdoZW4gY2FsbGluZyByZXNwb25kV2l0aE5ld1ZpZXcoKSBvbiBhIHJlYWRhYmxlIHN0cmVhbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdERlc2NyaXB0b3IuYnl0ZU9mZnNldCArIGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCAhPT0gdmlldy5ieXRlT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHJlZ2lvbiBzcGVjaWZpZWQgYnkgdmlldyBkb2VzIG5vdCBtYXRjaCBieW9iUmVxdWVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdERlc2NyaXB0b3IuYnVmZmVyQnl0ZUxlbmd0aCAhPT0gdmlldy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBidWZmZXIgb2YgdmlldyBoYXMgZGlmZmVyZW50IGNhcGFjaXR5IHRoYW4gYnlvYlJlcXVlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3REZXNjcmlwdG9yLmJ5dGVzRmlsbGVkICsgdmlldy5ieXRlTGVuZ3RoID4gZmlyc3REZXNjcmlwdG9yLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgcmVnaW9uIHNwZWNpZmllZCBieSB2aWV3IGlzIGxhcmdlciB0aGFuIGJ5b2JSZXF1ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgdmlld0J5dGVMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIGZpcnN0RGVzY3JpcHRvci5idWZmZXIgPSBUcmFuc2ZlckFycmF5QnVmZmVyKHZpZXcuYnVmZmVyKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJbnRlcm5hbChjb250cm9sbGVyLCB2aWV3Qnl0ZUxlbmd0aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFNldFVwUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSkge1xuICAgICAgICBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbGluZyA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIC8vIE5lZWQgdG8gc2V0IHRoZSBzbG90cyBzbyB0aGF0IHRoZSBhc3NlcnQgZG9lc24ndCBmaXJlLiBJbiB0aGUgc3BlYyB0aGUgc2xvdHMgYWxyZWFkeSBleGlzdCBpbXBsaWNpdGx5LlxuICAgICAgICBjb250cm9sbGVyLl9xdWV1ZSA9IGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplID0gdW5kZWZpbmVkO1xuICAgICAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNID0gaGlnaFdhdGVyTWFyaztcbiAgICAgICAgY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSA9IHB1bGxBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2NhbmNlbEFsZ29yaXRobSA9IGNhbmNlbEFsZ29yaXRobTtcbiAgICAgICAgY29udHJvbGxlci5fYXV0b0FsbG9jYXRlQ2h1bmtTaXplID0gYXV0b0FsbG9jYXRlQ2h1bmtTaXplO1xuICAgICAgICBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgY29uc3Qgc3RhcnRSZXN1bHQgPSBzdGFydEFsZ29yaXRobSgpO1xuICAgICAgICB1cG9uUHJvbWlzZShwcm9taXNlUmVzb2x2ZWRXaXRoKHN0YXJ0UmVzdWx0KSwgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LCByID0+IHtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCByKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2Uoc3RyZWFtLCB1bmRlcmx5aW5nQnl0ZVNvdXJjZSwgaGlnaFdhdGVyTWFyaykge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGxldCBzdGFydEFsZ29yaXRobTtcbiAgICAgICAgbGV0IHB1bGxBbGdvcml0aG07XG4gICAgICAgIGxldCBjYW5jZWxBbGdvcml0aG07XG4gICAgICAgIGlmICh1bmRlcmx5aW5nQnl0ZVNvdXJjZS5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdCeXRlU291cmNlLnN0YXJ0KGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRBbGdvcml0aG0gPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuZGVybHlpbmdCeXRlU291cmNlLnB1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHVsbEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdCeXRlU291cmNlLnB1bGwoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwdWxsQWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlcmx5aW5nQnl0ZVNvdXJjZS5jYW5jZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FuY2VsQWxnb3JpdGhtID0gcmVhc29uID0+IHVuZGVybHlpbmdCeXRlU291cmNlLmNhbmNlbChyZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FuY2VsQWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9IHVuZGVybHlpbmdCeXRlU291cmNlLmF1dG9BbGxvY2F0ZUNodW5rU2l6ZTtcbiAgICAgICAgaWYgKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXV0b0FsbG9jYXRlQ2h1bmtTaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgfVxuICAgICAgICBTZXRVcFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrLCBhdXRvQWxsb2NhdGVDaHVua1NpemUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBTZXRVcFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QocmVxdWVzdCwgY29udHJvbGxlciwgdmlldykge1xuICAgICAgICByZXF1ZXN0Ll9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHJlcXVlc3QuX3ZpZXcgPSB2aWV3O1xuICAgIH1cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5cbiAgICBmdW5jdGlvbiBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdGApO1xuICAgIH1cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5cbiAgICBmdW5jdGlvbiBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcmApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRSZWFkZXJPcHRpb25zKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RGljdGlvbmFyeShvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbW9kZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tb2RlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kZTogbW9kZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogY29udmVydFJlYWRhYmxlU3RyZWFtUmVhZGVyTW9kZShtb2RlLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdtb2RlJyB0aGF0YClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtUmVhZGVyTW9kZShtb2RlLCBjb250ZXh0KSB7XG4gICAgICAgIG1vZGUgPSBgJHttb2RlfWA7XG4gICAgICAgIGlmIChtb2RlICE9PSAnYnlvYicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gJyR7bW9kZX0nIGlzIG5vdCBhIHZhbGlkIGVudW1lcmF0aW9uIHZhbHVlIGZvciBSZWFkYWJsZVN0cmVhbVJlYWRlck1vZGVgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydEJ5b2JSZWFkT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYXNzZXJ0RGljdGlvbmFyeShvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbWluID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1pbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbjogY29udmVydFVuc2lnbmVkTG9uZ0xvbmdXaXRoRW5mb3JjZVJhbmdlKG1pbiwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnbWluJyB0aGF0YClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBBYnN0cmFjdCBvcGVyYXRpb25zIGZvciB0aGUgUmVhZGFibGVTdHJlYW0uXG4gICAgZnVuY3Rpb24gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcihzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIoc3RyZWFtKTtcbiAgICB9XG4gICAgLy8gUmVhZGFibGVTdHJlYW0gQVBJIGV4cG9zZWQgZm9yIGNvbnRyb2xsZXJzLlxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQWRkUmVhZEludG9SZXF1ZXN0KHN0cmVhbSwgcmVhZEludG9SZXF1ZXN0KSB7XG4gICAgICAgIHN0cmVhbS5fcmVhZGVyLl9yZWFkSW50b1JlcXVlc3RzLnB1c2gocmVhZEludG9SZXF1ZXN0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1GdWxmaWxsUmVhZEludG9SZXF1ZXN0KHN0cmVhbSwgY2h1bmssIGRvbmUpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgICAgIGNvbnN0IHJlYWRJbnRvUmVxdWVzdCA9IHJlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5zaGlmdCgpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9jbG9zZVN0ZXBzKGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2h1bmtTdGVwcyhjaHVuayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkSW50b1JlcXVlc3RzKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc3RyZWFtLl9yZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMubGVuZ3RoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgICAgICBpZiAocmVhZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHJlYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBCWU9CIHJlYWRlciB2ZW5kZWQgYnkgYSB7QGxpbmsgUmVhZGFibGVTdHJlYW19LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChzdHJlYW0sIDEsICdSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXInKTtcbiAgICAgICAgICAgIGFzc2VydFJlYWRhYmxlU3RyZWFtKHN0cmVhbSwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXMgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gbG9ja2VkIGZvciBleGNsdXNpdmUgcmVhZGluZyBieSBhbm90aGVyIHJlYWRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBhIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlciBmb3IgYSBzdHJlYW0gbm90IGNvbnN0cnVjdGVkIHdpdGggYSBieXRlICcgK1xuICAgICAgICAgICAgICAgICAgICAnc291cmNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNJbml0aWFsaXplKHRoaXMsIHN0cmVhbSk7XG4gICAgICAgICAgICB0aGlzLl9yZWFkSW50b1JlcXVlc3RzID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZSBmdWxmaWxsZWQgd2hlbiB0aGUgc3RyZWFtIGJlY29tZXMgY2xvc2VkLCBvciByZWplY3RlZCBpZiB0aGUgc3RyZWFtIGV2ZXIgZXJyb3JzIG9yXG4gICAgICAgICAqIHRoZSByZWFkZXIncyBsb2NrIGlzIHJlbGVhc2VkIGJlZm9yZSB0aGUgc3RyZWFtIGZpbmlzaGVzIGNsb3NpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGJ5b2JSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdjbG9zZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIHJlYWRlciBpcyBhY3RpdmUsIGJlaGF2ZXMgdGhlIHNhbWUgYXMge0BsaW5rIFJlYWRhYmxlU3RyZWFtLmNhbmNlbCB8IHN0cmVhbS5jYW5jZWwocmVhc29uKX0uXG4gICAgICAgICAqL1xuICAgICAgICBjYW5jZWwocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoYnlvYlJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2NhbmNlbCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKCdjYW5jZWwnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljQ2FuY2VsKHRoaXMsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmVhZCh2aWV3LCByYXdPcHRpb25zID0ge30pIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbigncmVhZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghQXJyYXlCdWZmZXIuaXNWaWV3KHZpZXcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcigndmlldyBtdXN0IGJlIGFuIGFycmF5IGJ1ZmZlciB2aWV3JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpZXcuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoJ3ZpZXcgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlldy5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoYHZpZXcncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoSXNEZXRhY2hlZEJ1ZmZlcih2aWV3LmJ1ZmZlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCd2aWV3XFwncyBidWZmZXIgaGFzIGJlZW4gZGV0YWNoZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb3B0aW9ucztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvbnZlcnRCeW9iUmVhZE9wdGlvbnMocmF3T3B0aW9ucywgJ29wdGlvbnMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBvcHRpb25zLm1pbjtcbiAgICAgICAgICAgIGlmIChtaW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdvcHRpb25zLm1pbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0RhdGFWaWV3KHZpZXcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA+IHZpZXcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBSYW5nZUVycm9yKCdvcHRpb25zLm1pbiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB2aWV3XFwncyBsZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWluID4gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFJhbmdlRXJyb3IoJ29wdGlvbnMubWluIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHZpZXdcXCdzIGJ5dGVMZW5ndGgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbigncmVhZCBmcm9tJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc29sdmVQcm9taXNlO1xuICAgICAgICAgICAgbGV0IHJlamVjdFByb21pc2U7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHJlamVjdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRJbnRvUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBfY2h1bmtTdGVwczogY2h1bmsgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pLFxuICAgICAgICAgICAgICAgIF9jbG9zZVN0ZXBzOiBjaHVuayA9PiByZXNvbHZlUHJvbWlzZSh7IHZhbHVlOiBjaHVuaywgZG9uZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogZSA9PiByZWplY3RQcm9taXNlKGUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyUmVhZCh0aGlzLCB2aWV3LCBtaW4sIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVsZWFzZXMgdGhlIHJlYWRlcidzIGxvY2sgb24gdGhlIGNvcnJlc3BvbmRpbmcgc3RyZWFtLiBBZnRlciB0aGUgbG9jayBpcyByZWxlYXNlZCwgdGhlIHJlYWRlciBpcyBubyBsb25nZXIgYWN0aXZlLlxuICAgICAgICAgKiBJZiB0aGUgYXNzb2NpYXRlZCBzdHJlYW0gaXMgZXJyb3JlZCB3aGVuIHRoZSBsb2NrIGlzIHJlbGVhc2VkLCB0aGUgcmVhZGVyIHdpbGwgYXBwZWFyIGVycm9yZWQgaW4gdGhlIHNhbWUgd2F5XG4gICAgICAgICAqIGZyb20gbm93IG9uOyBvdGhlcndpc2UsIHRoZSByZWFkZXIgd2lsbCBhcHBlYXIgY2xvc2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBBIHJlYWRlcidzIGxvY2sgY2Fubm90IGJlIHJlbGVhc2VkIHdoaWxlIGl0IHN0aWxsIGhhcyBhIHBlbmRpbmcgcmVhZCByZXF1ZXN0LCBpLmUuLCBpZiBhIHByb21pc2UgcmV0dXJuZWQgYnlcbiAgICAgICAgICogdGhlIHJlYWRlcidzIHtAbGluayBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucmVhZCB8IHJlYWQoKX0gbWV0aG9kIGhhcyBub3QgeWV0IGJlZW4gc2V0dGxlZC4gQXR0ZW1wdGluZyB0b1xuICAgICAgICAgKiBkbyBzbyB3aWxsIHRocm93IGEgYFR5cGVFcnJvcmAgYW5kIGxlYXZlIHRoZSByZWFkZXIgbG9ja2VkIHRvIHRoZSBzdHJlYW0uXG4gICAgICAgICAqL1xuICAgICAgICByZWxlYXNlTG9jaygpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbigncmVsZWFzZUxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJSZWxlYXNlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlci5wcm90b3R5cGUsIHtcbiAgICAgICAgY2FuY2VsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcmVhZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlbGVhc2VMb2NrOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgY2xvc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLmNhbmNlbCwgJ2NhbmNlbCcpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLnJlYWQsICdyZWFkJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlci5wcm90b3R5cGUucmVsZWFzZUxvY2ssICdyZWxlYXNlTG9jaycpO1xuICAgIGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcicsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSByZWFkZXJzLlxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHgpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX3JlYWRJbnRvUmVxdWVzdHMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJSZWFkKHJlYWRlciwgdmlldywgbWluLCByZWFkSW50b1JlcXVlc3QpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtO1xuICAgICAgICBzdHJlYW0uX2Rpc3R1cmJlZCA9IHRydWU7XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fZXJyb3JTdGVwcyhzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQdWxsSW50byhzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgdmlldywgbWluLCByZWFkSW50b1JlcXVlc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlclJlbGVhc2UocmVhZGVyKSB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBUeXBlRXJyb3IoJ1JlYWRlciB3YXMgcmVsZWFzZWQnKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyRXJyb3JSZWFkSW50b1JlcXVlc3RzKHJlYWRlciwgZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlckVycm9yUmVhZEludG9SZXF1ZXN0cyhyZWFkZXIsIGUpIHtcbiAgICAgICAgY29uc3QgcmVhZEludG9SZXF1ZXN0cyA9IHJlYWRlci5fcmVhZEludG9SZXF1ZXN0cztcbiAgICAgICAgcmVhZGVyLl9yZWFkSW50b1JlcXVlc3RzID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICAgIHJlYWRJbnRvUmVxdWVzdHMuZm9yRWFjaChyZWFkSW50b1JlcXVlc3QgPT4ge1xuICAgICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9lcnJvclN0ZXBzKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlci5cbiAgICBmdW5jdGlvbiBieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcmApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCBkZWZhdWx0SFdNKSB7XG4gICAgICAgIGNvbnN0IHsgaGlnaFdhdGVyTWFyayB9ID0gc3RyYXRlZ3k7XG4gICAgICAgIGlmIChoaWdoV2F0ZXJNYXJrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0SFdNO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXJJc05hTihoaWdoV2F0ZXJNYXJrKSB8fCBoaWdoV2F0ZXJNYXJrIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaGlnaFdhdGVyTWFyaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWdoV2F0ZXJNYXJrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBFeHRyYWN0U2l6ZUFsZ29yaXRobShzdHJhdGVneSkge1xuICAgICAgICBjb25zdCB7IHNpemUgfSA9IHN0cmF0ZWd5O1xuICAgICAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRRdWV1aW5nU3RyYXRlZ3koaW5pdCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KGluaXQsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gaW5pdCA9PT0gbnVsbCB8fCBpbml0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbml0LmhpZ2hXYXRlck1hcms7XG4gICAgICAgIGNvbnN0IHNpemUgPSBpbml0ID09PSBudWxsIHx8IGluaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXQuc2l6ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhpZ2hXYXRlck1hcms6IGhpZ2hXYXRlck1hcmsgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGNvbnZlcnRVbnJlc3RyaWN0ZWREb3VibGUoaGlnaFdhdGVyTWFyayksXG4gICAgICAgICAgICBzaXplOiBzaXplID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5U2l6ZShzaXplLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzaXplJyB0aGF0YClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFF1ZXVpbmdTdHJhdGVneVNpemUoZm4sIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gY2h1bmsgPT4gY29udmVydFVucmVzdHJpY3RlZERvdWJsZShmbihjaHVuaykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2luayhvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KG9yaWdpbmFsLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgYWJvcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuYWJvcnQ7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLmNsb3NlO1xuICAgICAgICBjb25zdCBzdGFydCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5zdGFydDtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50eXBlO1xuICAgICAgICBjb25zdCB3cml0ZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC53cml0ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBhYm9ydCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU2lua0Fib3J0Q2FsbGJhY2soYWJvcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdhYm9ydCcgdGhhdGApLFxuICAgICAgICAgICAgY2xvc2U6IGNsb3NlID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgY29udmVydFVuZGVybHlpbmdTaW5rQ2xvc2VDYWxsYmFjayhjbG9zZSwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2Nsb3NlJyB0aGF0YCksXG4gICAgICAgICAgICBzdGFydDogc3RhcnQgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICAgICBjb252ZXJ0VW5kZXJseWluZ1NpbmtTdGFydENhbGxiYWNrKHN0YXJ0LCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnc3RhcnQnIHRoYXRgKSxcbiAgICAgICAgICAgIHdyaXRlOiB3cml0ZSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU2lua1dyaXRlQ2FsbGJhY2sod3JpdGUsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICd3cml0ZScgdGhhdGApLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NpbmtBYm9ydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAocmVhc29uKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtyZWFzb25dKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTaW5rQ2xvc2VDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKCkgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2lua1N0YXJ0Q2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIChjb250cm9sbGVyKSA9PiByZWZsZWN0Q2FsbChmbiwgb3JpZ2luYWwsIFtjb250cm9sbGVyXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2lua1dyaXRlQ2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIChjaHVuaywgY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY2h1bmssIGNvbnRyb2xsZXJdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhc3NlcnRXcml0YWJsZVN0cmVhbSh4LCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbSh4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYSBXcml0YWJsZVN0cmVhbS5gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWJvcnRTaWduYWwodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5hYm9ydGVkID09PSAnYm9vbGVhbic7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBBYm9ydFNpZ25hbC5wcm90b3R5cGUuYWJvcnRlZCB0aHJvd3MgaWYgaXRzIGJyYW5kIGNoZWNrIGZhaWxzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3VwcG9ydHNBYm9ydENvbnRyb2xsZXIgPSB0eXBlb2YgQWJvcnRDb250cm9sbGVyID09PSAnZnVuY3Rpb24nO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBBYm9ydENvbnRyb2xsZXIsIGlmIHN1cHBvcnRlZCBieSB0aGUgcGxhdGZvcm0uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVBYm9ydENvbnRyb2xsZXIoKSB7XG4gICAgICAgIGlmIChzdXBwb3J0c0Fib3J0Q29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgd3JpdGFibGUgc3RyZWFtIHJlcHJlc2VudHMgYSBkZXN0aW5hdGlvbiBmb3IgZGF0YSwgaW50byB3aGljaCB5b3UgY2FuIHdyaXRlLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFdyaXRhYmxlU3RyZWFtIHtcbiAgICAgICAgY29uc3RydWN0b3IocmF3VW5kZXJseWluZ1NpbmsgPSB7fSwgcmF3U3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICAgICAgaWYgKHJhd1VuZGVybHlpbmdTaW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByYXdVbmRlcmx5aW5nU2luayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NlcnRPYmplY3QocmF3VW5kZXJseWluZ1NpbmssICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdTdHJhdGVneSwgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHVuZGVybHlpbmdTaW5rID0gY29udmVydFVuZGVybHlpbmdTaW5rKHJhd1VuZGVybHlpbmdTaW5rLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgICAgICBJbml0aWFsaXplV3JpdGFibGVTdHJlYW0odGhpcyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdW5kZXJseWluZ1NpbmsudHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlIGlzIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2l6ZUFsZ29yaXRobSA9IEV4dHJhY3RTaXplQWxnb3JpdGhtKHN0cmF0ZWd5KTtcbiAgICAgICAgICAgIGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBFeHRyYWN0SGlnaFdhdGVyTWFyayhzdHJhdGVneSwgMSk7XG4gICAgICAgICAgICBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NpbmsodGhpcywgdW5kZXJseWluZ1NpbmssIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB3cml0YWJsZSBzdHJlYW0gaXMgbG9ja2VkIHRvIGEgd3JpdGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGxvY2tlZCgpIHtcbiAgICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMignbG9ja2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gSXNXcml0YWJsZVN0cmVhbUxvY2tlZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQWJvcnRzIHRoZSBzdHJlYW0sIHNpZ25hbGluZyB0aGF0IHRoZSBwcm9kdWNlciBjYW4gbm8gbG9uZ2VyIHN1Y2Nlc3NmdWxseSB3cml0ZSB0byB0aGUgc3RyZWFtIGFuZCBpdCBpcyB0byBiZVxuICAgICAgICAgKiBpbW1lZGlhdGVseSBtb3ZlZCB0byBhbiBlcnJvcmVkIHN0YXRlLCB3aXRoIGFueSBxdWV1ZWQtdXAgd3JpdGVzIGRpc2NhcmRlZC4gVGhpcyB3aWxsIGFsc28gZXhlY3V0ZSBhbnkgYWJvcnRcbiAgICAgICAgICogbWVjaGFuaXNtIG9mIHRoZSB1bmRlcmx5aW5nIHNpbmsuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgZnVsZmlsbCBpZiB0aGUgc3RyZWFtIHNodXRzIGRvd24gc3VjY2Vzc2Z1bGx5LCBvciByZWplY3QgaWYgdGhlIHVuZGVybHlpbmcgc2luayBzaWduYWxlZFxuICAgICAgICAgKiB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvciBkb2luZyBzby4gQWRkaXRpb25hbGx5LCBpdCB3aWxsIHJlamVjdCB3aXRoIGEgYFR5cGVFcnJvcmAgKHdpdGhvdXQgYXR0ZW1wdGluZyB0byBjYW5jZWxcbiAgICAgICAgICogdGhlIHN0cmVhbSkgaWYgdGhlIHN0cmVhbSBpcyBjdXJyZW50bHkgbG9ja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgYWJvcnQocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDIoJ2Fib3J0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKElzV3JpdGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdDYW5ub3QgYWJvcnQgYSBzdHJlYW0gdGhhdCBhbHJlYWR5IGhhcyBhIHdyaXRlcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbUFib3J0KHRoaXMsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlcyB0aGUgc3RyZWFtLiBUaGUgdW5kZXJseWluZyBzaW5rIHdpbGwgZmluaXNoIHByb2Nlc3NpbmcgYW55IHByZXZpb3VzbHktd3JpdHRlbiBjaHVua3MsIGJlZm9yZSBpbnZva2luZyBpdHNcbiAgICAgICAgICogY2xvc2UgYmVoYXZpb3IuIER1cmluZyB0aGlzIHRpbWUgYW55IGZ1cnRoZXIgYXR0ZW1wdHMgdG8gd3JpdGUgd2lsbCBmYWlsICh3aXRob3V0IGVycm9yaW5nIHRoZSBzdHJlYW0pLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBmdWxmaWxsIGlmIGFsbCByZW1haW5pbmcgY2h1bmtzIGFyZSBzdWNjZXNzZnVsbHkgd3JpdHRlbiBhbmQgdGhlIHN0cmVhbVxuICAgICAgICAgKiBzdWNjZXNzZnVsbHkgY2xvc2VzLCBvciByZWplY3RzIGlmIGFuIGVycm9yIGlzIGVuY291bnRlcmVkIGR1cmluZyB0aGlzIHByb2Nlc3MuIEFkZGl0aW9uYWxseSwgaXQgd2lsbCByZWplY3Qgd2l0aFxuICAgICAgICAgKiBhIGBUeXBlRXJyb3JgICh3aXRob3V0IGF0dGVtcHRpbmcgdG8gY2FuY2VsIHRoZSBzdHJlYW0pIGlmIHRoZSBzdHJlYW0gaXMgY3VycmVudGx5IGxvY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQyKCdjbG9zZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcignQ2Fubm90IGNsb3NlIGEgc3RyZWFtIHRoYXQgYWxyZWFkeSBoYXMgYSB3cml0ZXInKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2xvc2UgYW4gYWxyZWFkeS1jbG9zaW5nIHN0cmVhbScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbUNsb3NlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEge0BsaW5rIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlciB8IHdyaXRlcn0gYW5kIGxvY2tzIHRoZSBzdHJlYW0gdG8gdGhlIG5ldyB3cml0ZXIuIFdoaWxlIHRoZSBzdHJlYW1cbiAgICAgICAgICogaXMgbG9ja2VkLCBubyBvdGhlciB3cml0ZXIgY2FuIGJlIGFjcXVpcmVkIHVudGlsIHRoaXMgb25lIGlzIHJlbGVhc2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uYWxpdHkgaXMgZXNwZWNpYWxseSB1c2VmdWwgZm9yIGNyZWF0aW5nIGFic3RyYWN0aW9ucyB0aGF0IGRlc2lyZSB0aGUgYWJpbGl0eSB0byB3cml0ZSB0byBhIHN0cmVhbVxuICAgICAgICAgKiB3aXRob3V0IGludGVycnVwdGlvbiBvciBpbnRlcmxlYXZpbmcuIEJ5IGdldHRpbmcgYSB3cml0ZXIgZm9yIHRoZSBzdHJlYW0sIHlvdSBjYW4gZW5zdXJlIG5vYm9keSBlbHNlIGNhbiB3cml0ZSBhdFxuICAgICAgICAgKiB0aGUgc2FtZSB0aW1lLCB3aGljaCB3b3VsZCBjYXVzZSB0aGUgcmVzdWx0aW5nIHdyaXR0ZW4gZGF0YSB0byBiZSB1bnByZWRpY3RhYmxlIGFuZCBwcm9iYWJseSB1c2VsZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0V3JpdGVyKCkge1xuICAgICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQyKCdnZXRXcml0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBBY3F1aXJlV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFdyaXRhYmxlU3RyZWFtLnByb3RvdHlwZSwge1xuICAgICAgICBhYm9ydDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGNsb3NlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZ2V0V3JpdGVyOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgbG9ja2VkOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUuYWJvcnQsICdhYm9ydCcpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUuY2xvc2UsICdjbG9zZScpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUuZ2V0V3JpdGVyLCAnZ2V0V3JpdGVyJyk7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgdmFsdWU6ICdXcml0YWJsZVN0cmVhbScsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBXcml0YWJsZVN0cmVhbS5cbiAgICBmdW5jdGlvbiBBY3F1aXJlV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gbmV3IFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcihzdHJlYW0pO1xuICAgIH1cbiAgICAvLyBUaHJvd3MgaWYgYW5kIG9ubHkgaWYgc3RhcnRBbGdvcml0aG0gdGhyb3dzLlxuICAgIGZ1bmN0aW9uIENyZWF0ZVdyaXRhYmxlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCB3cml0ZUFsZ29yaXRobSwgY2xvc2VBbGdvcml0aG0sIGFib3J0QWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrID0gMSwgc2l6ZUFsZ29yaXRobSA9ICgpID0+IDEpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUpO1xuICAgICAgICBJbml0aWFsaXplV3JpdGFibGVTdHJlYW0oc3RyZWFtKTtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUpO1xuICAgICAgICBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemVXcml0YWJsZVN0cmVhbShzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLl9zdGF0ZSA9ICd3cml0YWJsZSc7XG4gICAgICAgIC8vIFRoZSBlcnJvciB0aGF0IHdpbGwgYmUgcmVwb3J0ZWQgYnkgbmV3IG1ldGhvZCBjYWxscyBvbmNlIHRoZSBzdGF0ZSBiZWNvbWVzIGVycm9yZWQuIE9ubHkgc2V0IHdoZW4gW1tzdGF0ZV1dIGlzXG4gICAgICAgIC8vICdlcnJvcmluZycgb3IgJ2Vycm9yZWQnLiBNYXkgYmUgc2V0IHRvIGFuIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAgICAgc3RyZWFtLl9zdG9yZWRFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RyZWFtLl93cml0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdG8gdW5kZWZpbmVkIGZpcnN0IGJlY2F1c2UgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBjb250cm9sbGVyIGNoZWNrcyB0aGlzXG4gICAgICAgIC8vIHZhcmlhYmxlIHRvIHZhbGlkYXRlIHRoZSBjYWxsZXIuXG4gICAgICAgIHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBUaGlzIHF1ZXVlIGlzIHBsYWNlZCBoZXJlIGluc3RlYWQgb2YgdGhlIHdyaXRlciBjbGFzcyBpbiBvcmRlciB0byBhbGxvdyBmb3IgcGFzc2luZyBhIHdyaXRlciB0byB0aGUgbmV4dCBkYXRhXG4gICAgICAgIC8vIHByb2R1Y2VyIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCB3cml0ZXMgdG8gZmluaXNoLlxuICAgICAgICBzdHJlYW0uX3dyaXRlUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgLy8gV3JpdGUgcmVxdWVzdHMgYXJlIHJlbW92ZWQgZnJvbSBfd3JpdGVSZXF1ZXN0cyB3aGVuIHdyaXRlKCkgaXMgY2FsbGVkIG9uIHRoZSB1bmRlcmx5aW5nIHNpbmsuIFRoaXMgcHJldmVudHNcbiAgICAgICAgLy8gdGhlbSBmcm9tIGJlaW5nIGVycm9uZW91c2x5IHJlamVjdGVkIG9uIGVycm9yLiBJZiBhIHdyaXRlKCkgY2FsbCBpcyBpbi1mbGlnaHQsIHRoZSByZXF1ZXN0IGlzIHN0b3JlZCBoZXJlLlxuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBUaGUgcHJvbWlzZSB0aGF0IHdhcyByZXR1cm5lZCBmcm9tIHdyaXRlci5jbG9zZSgpLiBTdG9yZWQgaGVyZSBiZWNhdXNlIGl0IG1heSBiZSBmdWxmaWxsZWQgYWZ0ZXIgdGhlIHdyaXRlclxuICAgICAgICAvLyBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICAgICAgc3RyZWFtLl9jbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIENsb3NlIHJlcXVlc3QgaXMgcmVtb3ZlZCBmcm9tIF9jbG9zZVJlcXVlc3Qgd2hlbiBjbG9zZSgpIGlzIGNhbGxlZCBvbiB0aGUgdW5kZXJseWluZyBzaW5rLiBUaGlzIHByZXZlbnRzIGl0XG4gICAgICAgIC8vIGZyb20gYmVpbmcgZXJyb25lb3VzbHkgcmVqZWN0ZWQgb24gZXJyb3IuIElmIGEgY2xvc2UoKSBjYWxsIGlzIGluLWZsaWdodCwgdGhlIHJlcXVlc3QgaXMgc3RvcmVkIGhlcmUuXG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFRoZSBwcm9taXNlIHRoYXQgd2FzIHJldHVybmVkIGZyb20gd3JpdGVyLmFib3J0KCkuIFRoaXMgbWF5IGFsc28gYmUgZnVsZmlsbGVkIGFmdGVyIHRoZSB3cml0ZXIgaGFzIGRldGFjaGVkLlxuICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFRoZSBiYWNrcHJlc3N1cmUgc2lnbmFsIHNldCBieSB0aGUgY29udHJvbGxlci5cbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmUgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gSXNXcml0YWJsZVN0cmVhbSh4KSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ193cml0YWJsZVN0cmVhbUNvbnRyb2xsZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgV3JpdGFibGVTdHJlYW07XG4gICAgfVxuICAgIGZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0uX3dyaXRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQWJvcnQoc3RyZWFtLCByZWFzb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcgfHwgc3RyZWFtLl9zdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyLl9hYm9ydFJlYXNvbiA9IHJlYXNvbjtcbiAgICAgICAgKF9hID0gc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXIuX2Fib3J0Q29udHJvbGxlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFib3J0KHJlYXNvbik7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgbmFycm93cyB0aGUgdHlwZSBvZiBgc3RyZWFtLl9zdGF0ZWAgZG93biB0byAnd3JpdGFibGUnIHwgJ2Vycm9yaW5nJyxcbiAgICAgICAgLy8gYnV0IGl0IGRvZXNuJ3Qga25vdyB0aGF0IHNpZ25hbGluZyBhYm9ydCBydW5zIGF1dGhvciBjb2RlIHRoYXQgbWlnaHQgaGF2ZSBjaGFuZ2VkIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV2lkZW4gdGhlIHR5cGUgYWdhaW4gYnkgY2FzdGluZyB0byBXcml0YWJsZVN0cmVhbVN0YXRlLlxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcgfHwgc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QuX3Byb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdhc0FscmVhZHlFcnJvcmluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgICAgIHdhc0FscmVhZHlFcnJvcmluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyByZWFzb24gd2lsbCBub3QgYmUgdXNlZCwgc28gZG9uJ3Qga2VlcCBhIHJlZmVyZW5jZSB0byBpdC5cbiAgICAgICAgICAgIHJlYXNvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgX3Byb21pc2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBfcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICBfcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgICAgICAgX3JlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgICAgIF93YXNBbHJlYWR5RXJyb3Jpbmc6IHdhc0FscmVhZHlFcnJvcmluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdC5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIGlmICghd2FzQWxyZWFkeUVycm9yaW5nKSB7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbVN0YXJ0RXJyb3Jpbmcoc3RyZWFtLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUNsb3NlKHN0cmVhbSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcgfHwgc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgd3JpdGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBjbG9zZWRgKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvc2VSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIF9yZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIF9yZWplY3Q6IHJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0cmVhbS5fY2xvc2VSZXF1ZXN0ID0gY2xvc2VSZXF1ZXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gc3RyZWFtLl93cml0ZXI7XG4gICAgICAgIGlmICh3cml0ZXIgIT09IHVuZGVmaW5lZCAmJiBzdHJlYW0uX2JhY2twcmVzc3VyZSAmJiBzdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2Uoc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLy8gV3JpdGFibGVTdHJlYW0gQVBJIGV4cG9zZWQgZm9yIGNvbnRyb2xsZXJzLlxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQWRkV3JpdGVSZXF1ZXN0KHN0cmVhbSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZVJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgX3Jlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgX3JlamVjdDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3RyZWFtLl93cml0ZVJlcXVlc3RzLnB1c2god3JpdGVSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlYWxXaXRoUmVqZWN0aW9uKHN0cmVhbSwgZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBXcml0YWJsZVN0cmVhbUZpbmlzaEVycm9yaW5nKHN0cmVhbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIHJlYXNvbikge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICAgIHN0cmVhbS5fc3RhdGUgPSAnZXJyb3JpbmcnO1xuICAgICAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gcmVhc29uO1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICAgICAgaWYgKHdyaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJFbnN1cmVSZWFkeVByb21pc2VSZWplY3RlZCh3cml0ZXIsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFXcml0YWJsZVN0cmVhbUhhc09wZXJhdGlvbk1hcmtlZEluRmxpZ2h0KHN0cmVhbSkgJiYgY29udHJvbGxlci5fc3RhcnRlZCkge1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hFcnJvcmluZyhzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoRXJyb3Jpbmcoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5fc3RhdGUgPSAnZXJyb3JlZCc7XG4gICAgICAgIHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyW0Vycm9yU3RlcHNdKCk7XG4gICAgICAgIGNvbnN0IHN0b3JlZEVycm9yID0gc3RyZWFtLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgc3RyZWFtLl93cml0ZVJlcXVlc3RzLmZvckVhY2god3JpdGVSZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgIHdyaXRlUmVxdWVzdC5fcmVqZWN0KHN0b3JlZEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmVhbS5fd3JpdGVSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICBpZiAoc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhYm9ydFJlcXVlc3QgPSBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3Q7XG4gICAgICAgIHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGFib3J0UmVxdWVzdC5fd2FzQWxyZWFkeUVycm9yaW5nKSB7XG4gICAgICAgICAgICBhYm9ydFJlcXVlc3QuX3JlamVjdChzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbVJlamVjdENsb3NlQW5kQ2xvc2VkUHJvbWlzZUlmTmVlZGVkKHN0cmVhbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyW0Fib3J0U3RlcHNdKGFib3J0UmVxdWVzdC5fcmVhc29uKTtcbiAgICAgICAgdXBvblByb21pc2UocHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgYWJvcnRSZXF1ZXN0Ll9yZXNvbHZlKCk7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbVJlamVjdENsb3NlQW5kQ2xvc2VkUHJvbWlzZUlmTmVlZGVkKHN0cmVhbSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgYWJvcnRSZXF1ZXN0Ll9yZWplY3QocmVhc29uKTtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodFdyaXRlKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0Ll9yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZVdpdGhFcnJvcihzdHJlYW0sIGVycm9yKSB7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QuX3JlamVjdChlcnJvcik7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVhbFdpdGhSZWplY3Rpb24oc3RyZWFtLCBlcnJvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRDbG9zZShzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdC5fcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yaW5nJykge1xuICAgICAgICAgICAgLy8gVGhlIGVycm9yIHdhcyB0b28gbGF0ZSB0byBkbyBhbnl0aGluZywgc28gaXQgaXMgaWdub3JlZC5cbiAgICAgICAgICAgIHN0cmVhbS5fc3RvcmVkRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QuX3Jlc29sdmUoKTtcbiAgICAgICAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLl9zdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICAgICAgaWYgKHdyaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUZpbmlzaEluRmxpZ2h0Q2xvc2VXaXRoRXJyb3Ioc3RyZWFtLCBlcnJvcikge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0Ll9yZWplY3QoZXJyb3IpO1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBOZXZlciBleGVjdXRlIHNpbmsgYWJvcnQoKSBhZnRlciBzaW5rIGNsb3NlKCkuXG4gICAgICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0Ll9yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVhbFdpdGhSZWplY3Rpb24oc3RyZWFtLCBlcnJvcik7XG4gICAgfVxuICAgIC8vIFRPRE8ocmljZWEpOiBGaXggYWxwaGFiZXRpY2FsIG9yZGVyLlxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLl9jbG9zZVJlcXVlc3QgPT09IHVuZGVmaW5lZCAmJiBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1IYXNPcGVyYXRpb25NYXJrZWRJbkZsaWdodChzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPT09IHVuZGVmaW5lZCAmJiBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1NYXJrQ2xvc2VSZXF1ZXN0SW5GbGlnaHQoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSBzdHJlYW0uX2Nsb3NlUmVxdWVzdDtcbiAgICAgICAgc3RyZWFtLl9jbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtTWFya0ZpcnN0V3JpdGVSZXF1ZXN0SW5GbGlnaHQoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSBzdHJlYW0uX3dyaXRlUmVxdWVzdHMuc2hpZnQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1SZWplY3RDbG9zZUFuZENsb3NlZFByb21pc2VJZk5lZWRlZChzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbS5fY2xvc2VSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0cmVhbS5fY2xvc2VSZXF1ZXN0Ll9yZWplY3Qoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgICAgICAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICAgICAgaWYgKHdyaXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlamVjdCh3cml0ZXIsIHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtVXBkYXRlQmFja3ByZXNzdXJlKHN0cmVhbSwgYmFja3ByZXNzdXJlKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHN0cmVhbS5fd3JpdGVyO1xuICAgICAgICBpZiAod3JpdGVyICE9PSB1bmRlZmluZWQgJiYgYmFja3ByZXNzdXJlICE9PSBzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgaWYgKGJhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNldCh3cml0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IGJhY2twcmVzc3VyZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBkZWZhdWx0IHdyaXRlciB2ZW5kZWQgYnkgYSB7QGxpbmsgV3JpdGFibGVTdHJlYW19LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChzdHJlYW0sIDEsICdXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXInKTtcbiAgICAgICAgICAgIGFzc2VydFdyaXRhYmxlU3RyZWFtKHN0cmVhbSwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgaWYgKElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXMgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gbG9ja2VkIGZvciBleGNsdXNpdmUgd3JpdGluZyBieSBhbm90aGVyIHdyaXRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHN0cmVhbS5fd3JpdGVyID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICAgICAgICAgIGlmICghV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSAmJiBzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQodGhpcywgc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZWRFcnJvciA9IHN0cmVhbS5fc3RvcmVkRXJyb3I7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHRoaXMsIHN0b3JlZEVycm9yKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHRoaXMsIHN0b3JlZEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBzdHJlYW0gYmVjb21lcyBjbG9zZWQsIG9yIHJlamVjdGVkIGlmIHRoZSBzdHJlYW0gZXZlciBlcnJvcnMgb3JcbiAgICAgICAgICogdGhlIHdyaXRlcuKAmXMgbG9jayBpcyByZWxlYXNlZCBiZWZvcmUgdGhlIHN0cmVhbSBmaW5pc2hlcyBjbG9zaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyQnJhbmRDaGVja0V4Y2VwdGlvbignY2xvc2VkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlZFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRlc2lyZWQgc2l6ZSB0byBmaWxsIHRoZSBzdHJlYW3igJlzIGludGVybmFsIHF1ZXVlLiBJdCBjYW4gYmUgbmVnYXRpdmUsIGlmIHRoZSBxdWV1ZSBpcyBvdmVyLWZ1bGwuXG4gICAgICAgICAqIEEgcHJvZHVjZXIgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRldGVybWluZSB0aGUgcmlnaHQgYW1vdW50IG9mIGRhdGEgdG8gd3JpdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEl0IHdpbGwgYmUgYG51bGxgIGlmIHRoZSBzdHJlYW0gY2Fubm90IGJlIHN1Y2Nlc3NmdWxseSB3cml0dGVuIHRvIChkdWUgdG8gZWl0aGVyIGJlaW5nIGVycm9yZWQsIG9yIGhhdmluZyBhbiBhYm9ydFxuICAgICAgICAgKiBxdWV1ZWQgdXApLiBJdCB3aWxsIHJldHVybiB6ZXJvIGlmIHRoZSBzdHJlYW0gaXMgY2xvc2VkLiBBbmQgdGhlIGdldHRlciB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBpbnZva2VkIHdoZW5cbiAgICAgICAgICogdGhlIHdyaXRlcuKAmXMgbG9jayBpcyByZWxlYXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBkZXNpcmVkU2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBkZWZhdWx0V3JpdGVyQnJhbmRDaGVja0V4Y2VwdGlvbignZGVzaXJlZFNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignZGVzaXJlZFNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJHZXREZXNpcmVkU2l6ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBkZXNpcmVkIHNpemUgdG8gZmlsbCB0aGUgc3RyZWFt4oCZcyBpbnRlcm5hbCBxdWV1ZSB0cmFuc2l0aW9uc1xuICAgICAgICAgKiBmcm9tIG5vbi1wb3NpdGl2ZSB0byBwb3NpdGl2ZSwgc2lnbmFsaW5nIHRoYXQgaXQgaXMgbm8gbG9uZ2VyIGFwcGx5aW5nIGJhY2twcmVzc3VyZS4gT25jZSB0aGUgZGVzaXJlZCBzaXplIGRpcHNcbiAgICAgICAgICogYmFjayB0byB6ZXJvIG9yIGJlbG93LCB0aGUgZ2V0dGVyIHdpbGwgcmV0dXJuIGEgbmV3IHByb21pc2UgdGhhdCBzdGF5cyBwZW5kaW5nIHVudGlsIHRoZSBuZXh0IHRyYW5zaXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBzdHJlYW0gYmVjb21lcyBlcnJvcmVkIG9yIGFib3J0ZWQsIG9yIHRoZSB3cml0ZXLigJlzIGxvY2sgaXMgcmVsZWFzZWQsIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmVjb21lXG4gICAgICAgICAqIHJlamVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdyZWFkeScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkeVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSByZWFkZXIgaXMgYWN0aXZlLCBiZWhhdmVzIHRoZSBzYW1lIGFzIHtAbGluayBXcml0YWJsZVN0cmVhbS5hYm9ydCB8IHN0cmVhbS5hYm9ydChyZWFzb24pfS5cbiAgICAgICAgICovXG4gICAgICAgIGFib3J0KHJlYXNvbiA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdhYm9ydCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignYWJvcnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQWJvcnQodGhpcywgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIHJlYWRlciBpcyBhY3RpdmUsIGJlaGF2ZXMgdGhlIHNhbWUgYXMge0BsaW5rIFdyaXRhYmxlU3RyZWFtLmNsb3NlIHwgc3RyZWFtLmNsb3NlKCl9LlxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgICAgIGlmIChzdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJMb2NrRXhjZXB0aW9uKCdjbG9zZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcignQ2Fubm90IGNsb3NlIGFuIGFscmVhZHktY2xvc2luZyBzdHJlYW0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGVhc2VzIHRoZSB3cml0ZXLigJlzIGxvY2sgb24gdGhlIGNvcnJlc3BvbmRpbmcgc3RyZWFtLiBBZnRlciB0aGUgbG9jayBpcyByZWxlYXNlZCwgdGhlIHdyaXRlciBpcyBubyBsb25nZXIgYWN0aXZlLlxuICAgICAgICAgKiBJZiB0aGUgYXNzb2NpYXRlZCBzdHJlYW0gaXMgZXJyb3JlZCB3aGVuIHRoZSBsb2NrIGlzIHJlbGVhc2VkLCB0aGUgd3JpdGVyIHdpbGwgYXBwZWFyIGVycm9yZWQgaW4gdGhlIHNhbWUgd2F5IGZyb21cbiAgICAgICAgICogbm93IG9uOyBvdGhlcndpc2UsIHRoZSB3cml0ZXIgd2lsbCBhcHBlYXIgY2xvc2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGxvY2sgY2FuIHN0aWxsIGJlIHJlbGVhc2VkIGV2ZW4gaWYgc29tZSBvbmdvaW5nIHdyaXRlcyBoYXZlIG5vdCB5ZXQgZmluaXNoZWQgKGkuZS4gZXZlbiBpZiB0aGVcbiAgICAgICAgICogcHJvbWlzZXMgcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBjYWxscyB0byB7QGxpbmsgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLndyaXRlIHwgd3JpdGUoKX0gaGF2ZSBub3QgeWV0IHNldHRsZWQpLlxuICAgICAgICAgKiBJdOKAmXMgbm90IG5lY2Vzc2FyeSB0byBob2xkIHRoZSBsb2NrIG9uIHRoZSB3cml0ZXIgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgd3JpdGU7IHRoZSBsb2NrIGluc3RlYWQgc2ltcGx5IHByZXZlbnRzXG4gICAgICAgICAqIG90aGVyIHByb2R1Y2VycyBmcm9tIHdyaXRpbmcgaW4gYW4gaW50ZXJsZWF2ZWQgbWFubmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVsZWFzZUxvY2soKSB7XG4gICAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ3JlbGVhc2VMb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgICAgICAgICAgaWYgKHN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyUmVsZWFzZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB3cml0ZShjaHVuayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCd3cml0ZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignd3JpdGUgdG8nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyV3JpdGUodGhpcywgY2h1bmspO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUsIHtcbiAgICAgICAgYWJvcnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBjbG9zZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlbGVhc2VMb2NrOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgd3JpdGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBjbG9zZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBkZXNpcmVkU2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlYWR5OiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIucHJvdG90eXBlLmFib3J0LCAnYWJvcnQnKTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLnByb3RvdHlwZS5jbG9zZSwgJ2Nsb3NlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUucmVsZWFzZUxvY2ssICdyZWxlYXNlTG9jaycpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIucHJvdG90eXBlLndyaXRlLCAnd3JpdGUnKTtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgdmFsdWU6ICdXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXInLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBYnN0cmFjdCBvcGVyYXRpb25zIGZvciB0aGUgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLlxuICAgIGZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHgpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX293bmVyV3JpdGFibGVTdHJlYW0nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyO1xuICAgIH1cbiAgICAvLyBBIGNsaWVudCBvZiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIgbWF5IHVzZSB0aGVzZSBmdW5jdGlvbnMgZGlyZWN0bHkgdG8gYnlwYXNzIHN0YXRlIGNoZWNrLlxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckFib3J0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQoc3RyZWFtLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZSh3cml0ZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZVdpdGhFcnJvclByb3BhZ2F0aW9uKHdyaXRlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKFdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkgfHwgc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2Uod3JpdGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyRW5zdXJlQ2xvc2VkUHJvbWlzZVJlamVjdGVkKHdyaXRlciwgZXJyb3IpIHtcbiAgICAgICAgaWYgKHdyaXRlci5fY2xvc2VkUHJvbWlzZVN0YXRlID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZXNldFRvUmVqZWN0ZWQod3JpdGVyLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyRW5zdXJlUmVhZHlQcm9taXNlUmVqZWN0ZWQod3JpdGVyLCBlcnJvcikge1xuICAgICAgICBpZiAod3JpdGVyLl9yZWFkeVByb21pc2VTdGF0ZSA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVqZWN0KHdyaXRlciwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0VG9SZWplY3RlZCh3cml0ZXIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJHZXREZXNpcmVkU2l6ZSh3cml0ZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yZWQnIHx8IHN0YXRlID09PSAnZXJyb3JpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyUmVsZWFzZSh3cml0ZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgICAgICBjb25zdCByZWxlYXNlZEVycm9yID0gbmV3IFR5cGVFcnJvcihgV3JpdGVyIHdhcyByZWxlYXNlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIHN0cmVhbSdzIGNsb3NlZG5lc3NgKTtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyRW5zdXJlUmVhZHlQcm9taXNlUmVqZWN0ZWQod3JpdGVyLCByZWxlYXNlZEVycm9yKTtcbiAgICAgICAgLy8gVGhlIHN0YXRlIHRyYW5zaXRpb25zIHRvIFwiZXJyb3JlZFwiIGJlZm9yZSB0aGUgc2luayBhYm9ydCgpIG1ldGhvZCBydW5zLCBidXQgdGhlIHdyaXRlci5jbG9zZWQgcHJvbWlzZSBpcyBub3RcbiAgICAgICAgLy8gcmVqZWN0ZWQgdW50aWwgYWZ0ZXJ3YXJkcy4gVGhpcyBtZWFucyB0aGF0IHNpbXBseSB0ZXN0aW5nIHN0YXRlIHdpbGwgbm90IHdvcmsuXG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZUNsb3NlZFByb21pc2VSZWplY3RlZCh3cml0ZXIsIHJlbGVhc2VkRXJyb3IpO1xuICAgICAgICBzdHJlYW0uX3dyaXRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJXcml0ZSh3cml0ZXIsIGNodW5rKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyO1xuICAgICAgICBjb25zdCBjaHVua1NpemUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0Q2h1bmtTaXplKGNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICAgICAgaWYgKHN0cmVhbSAhPT0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignd3JpdGUgdG8nKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkgfHwgc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdUaGUgc3RyZWFtIGlzIGNsb3Npbmcgb3IgY2xvc2VkIGFuZCBjYW5ub3QgYmUgd3JpdHRlbiB0bycpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBXcml0YWJsZVN0cmVhbUFkZFdyaXRlUmVxdWVzdChzdHJlYW0pO1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyV3JpdGUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZVNlbnRpbmVsID0ge307XG4gICAgLyoqXG4gICAgICogQWxsb3dzIGNvbnRyb2wgb2YgYSB7QGxpbmsgV3JpdGFibGVTdHJlYW0gfCB3cml0YWJsZSBzdHJlYW19J3Mgc3RhdGUgYW5kIGludGVybmFsIHF1ZXVlLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlYXNvbiB3aGljaCB3YXMgcGFzc2VkIHRvIGBXcml0YWJsZVN0cmVhbS5hYm9ydChyZWFzb24pYCB3aGVuIHRoZSBzdHJlYW0gd2FzIGFib3J0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqICBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgc3BlY2lmaWNhdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvc3RyZWFtcy9wdWxsLzExNzcuXG4gICAgICAgICAqICBVc2Uge0BsaW5rIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIuc2lnbmFsfSdzIGByZWFzb25gIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgYWJvcnRSZWFzb24oKSB7XG4gICAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQyKCdhYm9ydFJlYXNvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Fib3J0UmVhc29uO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBgQWJvcnRTaWduYWxgIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWJvcnQgdGhlIHBlbmRpbmcgd3JpdGUgb3IgY2xvc2Ugb3BlcmF0aW9uIHdoZW4gdGhlIHN0cmVhbSBpcyBhYm9ydGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHNpZ25hbCgpIHtcbiAgICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDIoJ3NpZ25hbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2Fib3J0Q29udHJvbGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gT2xkZXIgYnJvd3NlcnMgb3Igb2xkZXIgTm9kZSB2ZXJzaW9ucyBtYXkgbm90IHN1cHBvcnQgYEFib3J0Q29udHJvbGxlcmAgb3IgYEFib3J0U2lnbmFsYC5cbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIGJ1bmRsZSBhbmQgc2hpcCBhbiBgQWJvcnRDb250cm9sbGVyYCBwb2x5ZmlsbCB0b2dldGhlciB3aXRoIG91ciBwb2x5ZmlsbCxcbiAgICAgICAgICAgICAgICAvLyBzbyBpbnN0ZWFkIHdlIG9ubHkgaW1wbGVtZW50IHN1cHBvcnQgZm9yIGBzaWduYWxgIGlmIHdlIGZpbmQgYSBnbG9iYWwgYEFib3J0Q29udHJvbGxlcmAgY29uc3RydWN0b3IuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUuc2lnbmFsIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZXMgdGhlIGNvbnRyb2xsZWQgd3JpdGFibGUgc3RyZWFtLCBtYWtpbmcgYWxsIGZ1dHVyZSBpbnRlcmFjdGlvbnMgd2l0aCBpdCBmYWlsIHdpdGggdGhlIGdpdmVuIGVycm9yIGBlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgcmFyZWx5IHVzZWQsIHNpbmNlIHVzdWFsbHkgaXQgc3VmZmljZXMgdG8gcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSBmcm9tIG9uZSBvZiB0aGUgdW5kZXJseWluZ1xuICAgICAgICAgKiBzaW5rJ3MgbWV0aG9kcy4gSG93ZXZlciwgaXQgY2FuIGJlIHVzZWZ1bCBmb3Igc3VkZGVubHkgc2h1dHRpbmcgZG93biBhIHN0cmVhbSBpbiByZXNwb25zZSB0byBhbiBldmVudCBvdXRzaWRlIHRoZVxuICAgICAgICAgKiBub3JtYWwgbGlmZWN5Y2xlIG9mIGludGVyYWN0aW9ucyB3aXRoIHRoZSB1bmRlcmx5aW5nIHNpbmsuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcihlID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQyKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSAnd3JpdGFibGUnKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHN0cmVhbSBpcyBjbG9zZWQsIGVycm9yZWQgb3Igd2lsbCBiZSBzb29uLiBUaGUgc2luayBjYW4ndCBkbyBhbnl0aGluZyB1c2VmdWwgaWYgaXQgZ2V0cyBhbiBlcnJvciBoZXJlLCBzb1xuICAgICAgICAgICAgICAgIC8vIGp1c3QgdHJlYXQgaXQgYXMgYSBuby1vcC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBbQWJvcnRTdGVwc10ocmVhc29uKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9hYm9ydEFsZ29yaXRobShyZWFzb24pO1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBbRXJyb3JTdGVwc10oKSB7XG4gICAgICAgICAgICBSZXNldFF1ZXVlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgICAgIGFib3J0UmVhc29uOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgc2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZXJyb3I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ1dyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBYnN0cmFjdCBvcGVyYXRpb25zIGltcGxlbWVudGluZyBpbnRlcmZhY2UgcmVxdWlyZWQgYnkgdGhlIFdyaXRhYmxlU3RyZWFtLlxuICAgIGZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih4KSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb250cm9sbGVkV3JpdGFibGVTdHJlYW0nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pIHtcbiAgICAgICAgY29udHJvbGxlci5fY29udHJvbGxlZFdyaXRhYmxlU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIC8vIE5lZWQgdG8gc2V0IHRoZSBzbG90cyBzbyB0aGF0IHRoZSBhc3NlcnQgZG9lc24ndCBmaXJlLiBJbiB0aGUgc3BlYyB0aGUgc2xvdHMgYWxyZWFkeSBleGlzdCBpbXBsaWNpdGx5LlxuICAgICAgICBjb250cm9sbGVyLl9xdWV1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPSB1bmRlZmluZWQ7XG4gICAgICAgIFJlc2V0UXVldWUoY29udHJvbGxlcik7XG4gICAgICAgIGNvbnRyb2xsZXIuX2Fib3J0UmVhc29uID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9hYm9ydENvbnRyb2xsZXIgPSBjcmVhdGVBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSBzaXplQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneUhXTSA9IGhpZ2hXYXRlck1hcms7XG4gICAgICAgIGNvbnRyb2xsZXIuX3dyaXRlQWxnb3JpdGhtID0gd3JpdGVBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2Nsb3NlQWxnb3JpdGhtID0gY2xvc2VBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2Fib3J0QWxnb3JpdGhtID0gYWJvcnRBbGdvcml0aG07XG4gICAgICAgIGNvbnN0IGJhY2twcmVzc3VyZSA9IFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRCYWNrcHJlc3N1cmUoY29udHJvbGxlcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtVXBkYXRlQmFja3ByZXNzdXJlKHN0cmVhbSwgYmFja3ByZXNzdXJlKTtcbiAgICAgICAgY29uc3Qgc3RhcnRSZXN1bHQgPSBzdGFydEFsZ29yaXRobSgpO1xuICAgICAgICBjb25zdCBzdGFydFByb21pc2UgPSBwcm9taXNlUmVzb2x2ZWRXaXRoKHN0YXJ0UmVzdWx0KTtcbiAgICAgICAgdXBvblByb21pc2Uoc3RhcnRQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LCByID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX3N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWFsV2l0aFJlamVjdGlvbihzdHJlYW0sIHIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1Npbmsoc3RyZWFtLCB1bmRlcmx5aW5nU2luaywgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGxldCBzdGFydEFsZ29yaXRobTtcbiAgICAgICAgbGV0IHdyaXRlQWxnb3JpdGhtO1xuICAgICAgICBsZXQgY2xvc2VBbGdvcml0aG07XG4gICAgICAgIGxldCBhYm9ydEFsZ29yaXRobTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdTaW5rLnN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1Npbmsuc3RhcnQoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1Npbmsud3JpdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd3JpdGVBbGdvcml0aG0gPSBjaHVuayA9PiB1bmRlcmx5aW5nU2luay53cml0ZShjaHVuaywgY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cml0ZUFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1NpbmsuY2xvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xvc2VBbGdvcml0aG0gPSAoKSA9PiB1bmRlcmx5aW5nU2luay5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuZGVybHlpbmdTaW5rLmFib3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFib3J0QWxnb3JpdGhtID0gcmVhc29uID0+IHVuZGVybHlpbmdTaW5rLmFib3J0KHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhYm9ydEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgfVxuICAgIC8vIENsZWFyQWxnb3JpdGhtcyBtYXkgYmUgY2FsbGVkIHR3aWNlLiBFcnJvcmluZyB0aGUgc2FtZSBzdHJlYW0gaW4gbXVsdGlwbGUgd2F5cyB3aWxsIG9mdGVuIHJlc3VsdCBpbiByZWR1bmRhbnQgY2FsbHMuXG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX3dyaXRlQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9jbG9zZUFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udHJvbGxlci5fYWJvcnRBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0cmF0ZWd5U2l6ZUFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udHJvbGxlciwgY2xvc2VTZW50aW5lbCwgMCk7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldENodW5rU2l6ZShjb250cm9sbGVyLCBjaHVuaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuX3N0cmF0ZWd5U2l6ZUFsZ29yaXRobShjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGNodW5rU2l6ZUUpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcklmTmVlZGVkKGNvbnRyb2xsZXIsIGNodW5rU2l6ZUUpO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNIC0gY29udHJvbGxlci5fcXVldWVUb3RhbFNpemU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJXcml0ZShjb250cm9sbGVyLCBjaHVuaywgY2h1bmtTaXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBFbnF1ZXVlVmFsdWVXaXRoU2l6ZShjb250cm9sbGVyLCBjaHVuaywgY2h1bmtTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZW5xdWV1ZUUpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcklmTmVlZGVkKGNvbnRyb2xsZXIsIGVucXVldWVFKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGlmICghV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSAmJiBzdHJlYW0uX3N0YXRlID09PSAnd3JpdGFibGUnKSB7XG4gICAgICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0QmFja3ByZXNzdXJlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1VcGRhdGVCYWNrcHJlc3N1cmUoc3RyZWFtLCBiYWNrcHJlc3N1cmUpO1xuICAgICAgICB9XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICB9XG4gICAgLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIuXG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckFkdmFuY2VRdWV1ZUlmTmVlZGVkKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFdyaXRhYmxlU3RyZWFtO1xuICAgICAgICBpZiAoIWNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoRXJyb3Jpbmcoc3RyZWFtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fcXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBQZWVrUXVldWVWYWx1ZShjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBjbG9zZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyUHJvY2Vzc0Nsb3NlKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclByb2Nlc3NXcml0ZShjb250cm9sbGVyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgZXJyb3IpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbS5fc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclByb2Nlc3NDbG9zZShjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1NYXJrQ2xvc2VSZXF1ZXN0SW5GbGlnaHQoc3RyZWFtKTtcbiAgICAgICAgRGVxdWV1ZVZhbHVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBjb25zdCBzaW5rQ2xvc2VQcm9taXNlID0gY29udHJvbGxlci5fY2xvc2VBbGdvcml0aG0oKTtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgdXBvblByb21pc2Uoc2lua0Nsb3NlUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodENsb3NlKHN0cmVhbSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRDbG9zZVdpdGhFcnJvcihzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQcm9jZXNzV3JpdGUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFdyaXRhYmxlU3RyZWFtO1xuICAgICAgICBXcml0YWJsZVN0cmVhbU1hcmtGaXJzdFdyaXRlUmVxdWVzdEluRmxpZ2h0KHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IHNpbmtXcml0ZVByb21pc2UgPSBjb250cm9sbGVyLl93cml0ZUFsZ29yaXRobShjaHVuayk7XG4gICAgICAgIHVwb25Qcm9taXNlKHNpbmtXcml0ZVByb21pc2UsICgpID0+IHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZShzdHJlYW0pO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICAgICAgRGVxdWV1ZVZhbHVlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgaWYgKCFXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pICYmIHN0YXRlID09PSAnd3JpdGFibGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFja3ByZXNzdXJlID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldEJhY2twcmVzc3VyZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQWR2YW5jZVF1ZXVlSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSAnd3JpdGFibGUnKSB7XG4gICAgICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZVdpdGhFcnJvcihzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRCYWNrcHJlc3N1cmUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBkZXNpcmVkU2l6ZSA9IFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKTtcbiAgICAgICAgcmV0dXJuIGRlc2lyZWRTaXplIDw9IDA7XG4gICAgfVxuICAgIC8vIEEgY2xpZW50IG9mIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIgbWF5IHVzZSB0aGVzZSBmdW5jdGlvbnMgZGlyZWN0bHkgdG8gYnlwYXNzIHN0YXRlIGNoZWNrLlxuICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlcnJvcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIGVycm9yKTtcbiAgICB9XG4gICAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFdyaXRhYmxlU3RyZWFtLlxuICAgIGZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgV3JpdGFibGVTdHJlYW1gKTtcbiAgICB9XG4gICAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIuXG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDIobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcmApO1xuICAgIH1cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyYCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJMb2NrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCAnICsgbmFtZSArICcgYSBzdHJlYW0gdXNpbmcgYSByZWxlYXNlZCB3cml0ZXInKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcikge1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VTdGF0ZSA9ICdwZW5kaW5nJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZCh3cml0ZXIpIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVzb2x2ZSh3cml0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlamVjdCh3cml0ZXIsIHJlYXNvbikge1xuICAgICAgICBpZiAod3JpdGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJvbWlzZUlzSGFuZGxlZFRvVHJ1ZSh3cml0ZXIuX2Nsb3NlZFByb21pc2UpO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VTdGF0ZSA9ICdyZWplY3RlZCc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUod3JpdGVyKSB7XG4gICAgICAgIGlmICh3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZVN0YXRlID0gJ3Jlc29sdmVkJztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemUod3JpdGVyKSB7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlU3RhdGUgPSAncGVuZGluZyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh3cml0ZXIsIHJlYXNvbikge1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh3cml0ZXIpO1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHdyaXRlcikge1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh3cml0ZXIpO1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzb2x2ZSh3cml0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGlmICh3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUod3JpdGVyLl9yZWFkeVByb21pc2UpO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QocmVhc29uKTtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZVN0YXRlID0gJ3JlamVjdGVkJztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0KHdyaXRlcikge1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh3cml0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzZXRUb1JlamVjdGVkKHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh3cml0ZXIsIHJlYXNvbik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNvbHZlKHdyaXRlcikge1xuICAgICAgICBpZiAod3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlU3RhdGUgPSAnZnVsZmlsbGVkJztcbiAgICB9XG5cbiAgICAvLy8gPHJlZmVyZW5jZSBsaWI9XCJkb21cIiAvPlxuICAgIGZ1bmN0aW9uIGdldEdsb2JhbHMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZ2xvYmFscyA9IGdldEdsb2JhbHMoKTtcblxuICAgIC8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiIC8+XG4gICAgZnVuY3Rpb24gaXNET01FeGNlcHRpb25Db25zdHJ1Y3RvcihjdG9yKSB7XG4gICAgICAgIGlmICghKHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBjdG9yID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3Rvci5uYW1lICE9PSAnRE9NRXhjZXB0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgY3RvcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VwcG9ydDpcbiAgICAgKiAtIFdlYiBicm93c2Vyc1xuICAgICAqIC0gTm9kZSAxOCBhbmQgaGlnaGVyIChodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0L2U0YjFmYjVlNjQyMmMxZmYxNTEyMzRiYjlkZTc5MmQ0NWRkODhkODcpXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0RnJvbUdsb2JhbCgpIHtcbiAgICAgICAgY29uc3QgY3RvciA9IGdsb2JhbHMgPT09IG51bGwgfHwgZ2xvYmFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFscy5ET01FeGNlcHRpb247XG4gICAgICAgIHJldHVybiBpc0RPTUV4Y2VwdGlvbkNvbnN0cnVjdG9yKGN0b3IpID8gY3RvciA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VwcG9ydDpcbiAgICAgKiAtIEFsbCBwbGF0Zm9ybXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVQb2x5ZmlsbCgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3dcbiAgICAgICAgY29uc3QgY3RvciA9IGZ1bmN0aW9uIERPTUV4Y2VwdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnRXJyb3InO1xuICAgICAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNldEZ1bmN0aW9uTmFtZShjdG9yLCAnRE9NRXhjZXB0aW9uJyk7XG4gICAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHsgdmFsdWU6IGN0b3IsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiBjdG9yO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlZGVjbGFyZVxuICAgIGNvbnN0IERPTUV4Y2VwdGlvbiA9IGdldEZyb21HbG9iYWwoKSB8fCBjcmVhdGVQb2x5ZmlsbCgpO1xuXG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1QaXBlVG8oc291cmNlLCBkZXN0LCBwcmV2ZW50Q2xvc2UsIHByZXZlbnRBYm9ydCwgcHJldmVudENhbmNlbCwgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc291cmNlKTtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gQWNxdWlyZVdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcihkZXN0KTtcbiAgICAgICAgc291cmNlLl9kaXN0dXJiZWQgPSB0cnVlO1xuICAgICAgICBsZXQgc2h1dHRpbmdEb3duID0gZmFsc2U7XG4gICAgICAgIC8vIFRoaXMgaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBzcGVjJ3MgcmVxdWlyZW1lbnQgdGhhdCB3ZSB3YWl0IGZvciBvbmdvaW5nIHdyaXRlcyBkdXJpbmcgc2h1dGRvd24uXG4gICAgICAgIGxldCBjdXJyZW50V3JpdGUgPSBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhYm9ydEFsZ29yaXRobTtcbiAgICAgICAgICAgIGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFib3J0QWxnb3JpdGhtID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHNpZ25hbC5yZWFzb24gIT09IHVuZGVmaW5lZCA/IHNpZ25hbC5yZWFzb24gOiBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRBYm9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdC5fc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQoZGVzdCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuX3N0YXRlID09PSAncmVhZGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbUNhbmNlbChzb3VyY2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNodXRkb3duV2l0aEFjdGlvbigoKSA9PiBQcm9taXNlLmFsbChhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uKCkpKSwgdHJ1ZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFib3J0QWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbGdvcml0aG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNpbmcgcmVhZGVyIGFuZCB3cml0ZXIsIHJlYWQgYWxsIGNodW5rcyBmcm9tIHRoaXMgYW5kIHdyaXRlIHRoZW0gdG8gZGVzdFxuICAgICAgICAgICAgLy8gLSBCYWNrcHJlc3N1cmUgbXVzdCBiZSBlbmZvcmNlZFxuICAgICAgICAgICAgLy8gLSBTaHV0ZG93biBtdXN0IHN0b3AgYWxsIGFjdGl2aXR5XG4gICAgICAgICAgICBmdW5jdGlvbiBwaXBlTG9vcCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvbWlzZSgocmVzb2x2ZUxvb3AsIHJlamVjdExvb3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbmV4dChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYFBlcmZvcm1Qcm9taXNlVGhlbmAgaW5zdGVhZCBvZiBgdXBvblByb21pc2VgIHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkaW5nIHVubmVjZXNzYXJ5IGAuY2F0Y2gocmV0aHJvd0Fzc2VydGlvbkVycm9yUmVqZWN0aW9uKWAgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJmb3JtUHJvbWlzZVRoZW4ocGlwZVN0ZXAoKSwgbmV4dCwgcmVqZWN0TG9vcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBwaXBlU3RlcCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUGVyZm9ybVByb21pc2VUaGVuKHdyaXRlci5fcmVhZHlQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9taXNlKChyZXNvbHZlUmVhZCwgcmVqZWN0UmVhZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2h1bmtTdGVwczogY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V3JpdGUgPSBQZXJmb3JtUHJvbWlzZVRoZW4oV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyV3JpdGUod3JpdGVyLCBjaHVuayksIHVuZGVmaW5lZCwgbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVSZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jbG9zZVN0ZXBzOiAoKSA9PiByZXNvbHZlUmVhZCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogcmVqZWN0UmVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb3JzIG11c3QgYmUgcHJvcGFnYXRlZCBmb3J3YXJkXG4gICAgICAgICAgICBpc09yQmVjb21lc0Vycm9yZWQoc291cmNlLCByZWFkZXIuX2Nsb3NlZFByb21pc2UsIHN0b3JlZEVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRBYm9ydCkge1xuICAgICAgICAgICAgICAgICAgICBzaHV0ZG93bldpdGhBY3Rpb24oKCkgPT4gV3JpdGFibGVTdHJlYW1BYm9ydChkZXN0LCBzdG9yZWRFcnJvciksIHRydWUsIHN0b3JlZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNodXRkb3duKHRydWUsIHN0b3JlZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEVycm9ycyBtdXN0IGJlIHByb3BhZ2F0ZWQgYmFja3dhcmRcbiAgICAgICAgICAgIGlzT3JCZWNvbWVzRXJyb3JlZChkZXN0LCB3cml0ZXIuX2Nsb3NlZFByb21pc2UsIHN0b3JlZEVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2h1dGRvd25XaXRoQWN0aW9uKCgpID0+IFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHNvdXJjZSwgc3RvcmVkRXJyb3IpLCB0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDbG9zaW5nIG11c3QgYmUgcHJvcGFnYXRlZCBmb3J3YXJkXG4gICAgICAgICAgICBpc09yQmVjb21lc0Nsb3NlZChzb3VyY2UsIHJlYWRlci5fY2xvc2VkUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJldmVudENsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNodXRkb3duV2l0aEFjdGlvbigoKSA9PiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZVdpdGhFcnJvclByb3BhZ2F0aW9uKHdyaXRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2h1dGRvd24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENsb3NpbmcgbXVzdCBiZSBwcm9wYWdhdGVkIGJhY2t3YXJkXG4gICAgICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkgfHwgZGVzdC5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdENsb3NlZCA9IG5ldyBUeXBlRXJyb3IoJ3RoZSBkZXN0aW5hdGlvbiB3cml0YWJsZSBzdHJlYW0gY2xvc2VkIGJlZm9yZSBhbGwgZGF0YSBjb3VsZCBiZSBwaXBlZCB0byBpdCcpO1xuICAgICAgICAgICAgICAgIGlmICghcHJldmVudENhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBzaHV0ZG93bldpdGhBY3Rpb24oKCkgPT4gUmVhZGFibGVTdHJlYW1DYW5jZWwoc291cmNlLCBkZXN0Q2xvc2VkKSwgdHJ1ZSwgZGVzdENsb3NlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBkZXN0Q2xvc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHBpcGVMb29wKCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvcldyaXRlc1RvRmluaXNoKCkge1xuICAgICAgICAgICAgICAgIC8vIEFub3RoZXIgd3JpdGUgbWF5IGhhdmUgc3RhcnRlZCB3aGlsZSB3ZSB3ZXJlIHdhaXRpbmcgb24gdGhpcyBjdXJyZW50V3JpdGUsIHNvIHdlIGhhdmUgdG8gYmUgc3VyZSB0byB3YWl0XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRoYXQgdG9vLlxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZEN1cnJlbnRXcml0ZSA9IGN1cnJlbnRXcml0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGVyZm9ybVByb21pc2VUaGVuKGN1cnJlbnRXcml0ZSwgKCkgPT4gb2xkQ3VycmVudFdyaXRlICE9PSBjdXJyZW50V3JpdGUgPyB3YWl0Rm9yV3JpdGVzVG9GaW5pc2goKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc09yQmVjb21lc0Vycm9yZWQoc3RyZWFtLCBwcm9taXNlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbihzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwb25SZWplY3Rpb24ocHJvbWlzZSwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc09yQmVjb21lc0Nsb3NlZChzdHJlYW0sIHByb21pc2UsIGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwb25GdWxmaWxsbWVudChwcm9taXNlLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNodXRkb3duV2l0aEFjdGlvbihhY3Rpb24sIG9yaWdpbmFsSXNFcnJvciwgb3JpZ2luYWxFcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChzaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaHV0dGluZ0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChkZXN0Ll9zdGF0ZSA9PT0gJ3dyaXRhYmxlJyAmJiAhV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBvbkZ1bGZpbGxtZW50KHdhaXRGb3JXcml0ZXNUb0ZpbmlzaCgpLCBkb1RoZVJlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9UaGVSZXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvVGhlUmVzdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBvblByb21pc2UoYWN0aW9uKCksICgpID0+IGZpbmFsaXplKG9yaWdpbmFsSXNFcnJvciwgb3JpZ2luYWxFcnJvciksIG5ld0Vycm9yID0+IGZpbmFsaXplKHRydWUsIG5ld0Vycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNodXRkb3duKGlzRXJyb3IsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNodXR0aW5nRG93bikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNodXR0aW5nRG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3QuX3N0YXRlID09PSAnd3JpdGFibGUnICYmICFXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChkZXN0KSkge1xuICAgICAgICAgICAgICAgICAgICB1cG9uRnVsZmlsbG1lbnQod2FpdEZvcldyaXRlc1RvRmluaXNoKCksICgpID0+IGZpbmFsaXplKGlzRXJyb3IsIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZShpc0Vycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZmluYWxpemUoaXNFcnJvciwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJSZWxlYXNlKHdyaXRlcik7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFsZ29yaXRobSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgY29udHJvbCBvZiBhIHtAbGluayBSZWFkYWJsZVN0cmVhbSB8IHJlYWRhYmxlIHN0cmVhbX0ncyBzdGF0ZSBhbmQgaW50ZXJuYWwgcXVldWUuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xhc3MgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXNpcmVkIHNpemUgdG8gZmlsbCB0aGUgY29udHJvbGxlZCBzdHJlYW0ncyBpbnRlcm5hbCBxdWV1ZS4gSXQgY2FuIGJlIG5lZ2F0aXZlLCBpZiB0aGUgcXVldWUgaXNcbiAgICAgICAgICogb3Zlci1mdWxsLiBBbiB1bmRlcmx5aW5nIHNvdXJjZSBvdWdodCB0byB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkZXRlcm1pbmUgd2hlbiBhbmQgaG93IHRvIGFwcGx5IGJhY2twcmVzc3VyZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBkZXNpcmVkU2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2Rlc2lyZWRTaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZXMgdGhlIGNvbnRyb2xsZWQgcmVhZGFibGUgc3RyZWFtLiBDb25zdW1lcnMgd2lsbCBzdGlsbCBiZSBhYmxlIHRvIHJlYWQgYW55IHByZXZpb3VzbHktZW5xdWV1ZWQgY2h1bmtzIGZyb21cbiAgICAgICAgICogdGhlIHN0cmVhbSwgYnV0IG9uY2UgdGhvc2UgYXJlIHJlYWQsIHRoZSBzdHJlYW0gd2lsbCBiZWNvbWUgY2xvc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCdjbG9zZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc3RyZWFtIGlzIG5vdCBpbiBhIHN0YXRlIHRoYXQgcGVybWl0cyBjbG9zZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoY2h1bmsgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2VucXVldWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHN0cmVhbSBpcyBub3QgaW4gYSBzdGF0ZSB0aGF0IHBlcm1pdHMgZW5xdWV1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKHRoaXMsIGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRXJyb3JzIHRoZSBjb250cm9sbGVkIHJlYWRhYmxlIHN0cmVhbSwgbWFraW5nIGFsbCBmdXR1cmUgaW50ZXJhY3Rpb25zIHdpdGggaXQgZmFpbCB3aXRoIHRoZSBnaXZlbiBlcnJvciBgZWAuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcihlID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKHRoaXMsIGUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgW0NhbmNlbFN0ZXBzXShyZWFzb24pIHtcbiAgICAgICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jYW5jZWxBbGdvcml0aG0ocmVhc29uKTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXModGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBEZXF1ZXVlVmFsdWUodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlUmVxdWVzdGVkICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUNsb3NlKHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZFJlcXVlc3QuX2NodW5rU3RlcHMoY2h1bmspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1BZGRSZWFkUmVxdWVzdChzdHJlYW0sIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIFtSZWxlYXNlU3RlcHNdKCkge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgICAgICBjbG9zZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGVucXVldWU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBlcnJvcjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGRlc2lyZWRTaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZS5jbG9zZSwgJ2Nsb3NlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLmVucXVldWUsICdlbnF1ZXVlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLmVycm9yLCAnZXJyb3InKTtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcicsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLlxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih4KSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb250cm9sbGVkUmVhZGFibGVTdHJlYW0nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzaG91bGRQdWxsID0gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoIXNob3VsZFB1bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fcHVsbGluZykge1xuICAgICAgICAgICAgY29udHJvbGxlci5fcHVsbEFnYWluID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcHVsbFByb21pc2UgPSBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtKCk7XG4gICAgICAgIHVwb25Qcm9taXNlKHB1bGxQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlci5fcHVsbEFnYWluKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5fcHVsbEFnYWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSwgZSA9PiB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJTaG91bGRDYWxsUHVsbChjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbTtcbiAgICAgICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZChzdHJlYW0pICYmIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZFJlcXVlc3RzKHN0cmVhbSkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNpcmVkU2l6ZSA9IFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKGRlc2lyZWRTaXplID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udHJvbGxlci5fY2FuY2VsQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEEgY2xpZW50IG9mIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIgbWF5IHVzZSB0aGVzZSBmdW5jdGlvbnMgZGlyZWN0bHkgdG8gYnlwYXNzIHN0YXRlIGNoZWNrLlxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShjb250cm9sbGVyKSB7XG4gICAgICAgIGlmICghUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKGNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtO1xuICAgICAgICBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUNsb3NlKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVucXVldWUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICAgICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHN0cmVhbSkgJiYgUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRnVsZmlsbFJlYWRSZXF1ZXN0KHN0cmVhbSwgY2h1bmssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjaHVua1NpemU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNodW5rU2l6ZSA9IGNvbnRyb2xsZXIuX3N0cmF0ZWd5U2l6ZUFsZ29yaXRobShjaHVuayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoY2h1bmtTaXplRSkge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBjaHVua1NpemVFKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBjaHVua1NpemVFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBFbnF1ZXVlVmFsdWVXaXRoU2l6ZShjb250cm9sbGVyLCBjaHVuaywgY2h1bmtTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlbnF1ZXVlRSkge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlbnF1ZXVlRSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZW5xdWV1ZUU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUVycm9yKHN0cmVhbSwgZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLl9zdHJhdGVneUhXTSAtIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIHVzZWQgaW4gdGhlIGltcGxlbWVudGF0aW9uIG9mIFRyYW5zZm9ybVN0cmVhbS5cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVySGFzQmFja3ByZXNzdXJlKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgaWYgKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJTaG91bGRDYWxsUHVsbChjb250cm9sbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmICghY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgJiYgc3RhdGUgPT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSkge1xuICAgICAgICBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgUmVzZXRRdWV1ZShjb250cm9sbGVyKTtcbiAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbGluZyA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSBzaXplQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneUhXTSA9IGhpZ2hXYXRlck1hcms7XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBbGdvcml0aG0gPSBwdWxsQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSBjYW5jZWxBbGdvcml0aG07XG4gICAgICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgY29uc3Qgc3RhcnRSZXN1bHQgPSBzdGFydEFsZ29yaXRobSgpO1xuICAgICAgICB1cG9uUHJvbWlzZShwcm9taXNlUmVzb2x2ZWRXaXRoKHN0YXJ0UmVzdWx0KSwgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LCByID0+IHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCByKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2Uoc3RyZWFtLCB1bmRlcmx5aW5nU291cmNlLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgbGV0IHN0YXJ0QWxnb3JpdGhtO1xuICAgICAgICBsZXQgcHVsbEFsZ29yaXRobTtcbiAgICAgICAgbGV0IGNhbmNlbEFsZ29yaXRobTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdTb3VyY2Uuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhcnRBbGdvcml0aG0gPSAoKSA9PiB1bmRlcmx5aW5nU291cmNlLnN0YXJ0KGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRBbGdvcml0aG0gPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuZGVybHlpbmdTb3VyY2UucHVsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwdWxsQWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1NvdXJjZS5wdWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHVsbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1NvdXJjZS5jYW5jZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2FuY2VsQWxnb3JpdGhtID0gcmVhc29uID0+IHVuZGVybHlpbmdTb3VyY2UuY2FuY2VsKHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW5jZWxBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLlxuICAgIGZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQxKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVRlZShzdHJlYW0sIGNsb25lRm9yQnJhbmNoMikge1xuICAgICAgICBpZiAoSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWRhYmxlQnl0ZVN0cmVhbVRlZShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRUZWUoc3RyZWFtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0VGVlKHN0cmVhbSwgY2xvbmVGb3JCcmFuY2gyKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKTtcbiAgICAgICAgbGV0IHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlYWRBZ2FpbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FuY2VsZWQxID0gZmFsc2U7XG4gICAgICAgIGxldCBjYW5jZWxlZDIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlYXNvbjE7XG4gICAgICAgIGxldCByZWFzb24yO1xuICAgICAgICBsZXQgYnJhbmNoMTtcbiAgICAgICAgbGV0IGJyYW5jaDI7XG4gICAgICAgIGxldCByZXNvbHZlQ2FuY2VsUHJvbWlzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvbWlzZSA9IG5ld1Byb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBwdWxsQWxnb3JpdGhtKCkge1xuICAgICAgICAgICAgaWYgKHJlYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZWFkQWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIF9jaHVua1N0ZXBzOiBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZGVsYXllZCBhIG1pY3JvdGFzayBiZWNhdXNlIGl0IHRha2VzIGF0IGxlYXN0IGEgbWljcm90YXNrIHRvIGRldGVjdCBlcnJvcnMgKHVzaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWRlci5fY2xvc2VkUHJvbWlzZSBiZWxvdyksIGFuZCB3ZSB3YW50IGVycm9ycyBpbiBzdHJlYW0gdG8gZXJyb3IgYm90aCBicmFuY2hlcyBpbW1lZGlhdGVseS4gV2UgY2Fubm90IGxldFxuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsIHN5bmNocm9ub3VzbHktYXZhaWxhYmxlIHJlYWRzIGdldCBhaGVhZCBvZiBhc3luY2hyb25vdXNseS1hdmFpbGFibGUgZXJyb3JzLlxuICAgICAgICAgICAgICAgICAgICBfcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEFnYWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVuazEgPSBjaHVuaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rMiA9IGNodW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8gd2F5IHRvIGFjY2VzcyB0aGUgY2xvbmluZyBjb2RlIHJpZ2h0IG5vdyBpbiB0aGUgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYWRkIG9uZSB0aGVuIHdlJ2xsIG5lZWQgYW4gaW1wbGVtZW50YXRpb24gZm9yIHNlcmlhbGl6YWJsZSBvYmplY3RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFjYW5jZWxlZDIgJiYgY2xvbmVGb3JCcmFuY2gyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNodW5rMiA9IFN0cnVjdHVyZWREZXNlcmlhbGl6ZShTdHJ1Y3R1cmVkU2VyaWFsaXplKGNodW5rMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGNodW5rMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2h1bmsyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkQWdhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxIHx8ICFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF9lcnJvclN0ZXBzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsMUFsZ29yaXRobShyZWFzb24pIHtcbiAgICAgICAgICAgIGNhbmNlbGVkMSA9IHRydWU7XG4gICAgICAgICAgICByZWFzb24xID0gcmVhc29uO1xuICAgICAgICAgICAgaWYgKGNhbmNlbGVkMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvc2l0ZVJlYXNvbiA9IENyZWF0ZUFycmF5RnJvbUxpc3QoW3JlYXNvbjEsIHJlYXNvbjJdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxSZXN1bHQgPSBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIGNvbXBvc2l0ZVJlYXNvbik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UoY2FuY2VsUmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYW5jZWxQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbDJBbGdvcml0aG0ocmVhc29uKSB7XG4gICAgICAgICAgICBjYW5jZWxlZDIgPSB0cnVlO1xuICAgICAgICAgICAgcmVhc29uMiA9IHJlYXNvbjtcbiAgICAgICAgICAgIGlmIChjYW5jZWxlZDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsUmVzdWx0ID0gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjb21wb3NpdGVSZWFzb24pO1xuICAgICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKGNhbmNlbFJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FuY2VsUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdGFydEFsZ29yaXRobSgpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBicmFuY2gxID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbDFBbGdvcml0aG0pO1xuICAgICAgICBicmFuY2gyID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbDJBbGdvcml0aG0pO1xuICAgICAgICB1cG9uUmVqZWN0aW9uKHJlYWRlci5fY2xvc2VkUHJvbWlzZSwgKHIpID0+IHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHIpO1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgcik7XG4gICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSB8fCAhY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFticmFuY2gxLCBicmFuY2gyXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtVGVlKHN0cmVhbSkge1xuICAgICAgICBsZXQgcmVhZGVyID0gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzdHJlYW0pO1xuICAgICAgICBsZXQgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgcmVhZEFnYWluRm9yQnJhbmNoMSA9IGZhbHNlO1xuICAgICAgICBsZXQgcmVhZEFnYWluRm9yQnJhbmNoMiA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FuY2VsZWQxID0gZmFsc2U7XG4gICAgICAgIGxldCBjYW5jZWxlZDIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlYXNvbjE7XG4gICAgICAgIGxldCByZWFzb24yO1xuICAgICAgICBsZXQgYnJhbmNoMTtcbiAgICAgICAgbGV0IGJyYW5jaDI7XG4gICAgICAgIGxldCByZXNvbHZlQ2FuY2VsUHJvbWlzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvbWlzZSA9IG5ld1Byb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkUmVhZGVyRXJyb3IodGhpc1JlYWRlcikge1xuICAgICAgICAgICAgdXBvblJlamVjdGlvbih0aGlzUmVhZGVyLl9jbG9zZWRQcm9taXNlLCByID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1JlYWRlciAhPT0gcmVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByKTtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSB8fCAhY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHVsbFdpdGhEZWZhdWx0UmVhZGVyKCkge1xuICAgICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHJlYWRlcikpIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICAgICAgcmVhZGVyID0gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzdHJlYW0pO1xuICAgICAgICAgICAgICAgIGZvcndhcmRSZWFkZXJFcnJvcihyZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgX2NodW5rU3RlcHM6IGNodW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGEgbWljcm90YXNrIGJlY2F1c2UgaXQgdGFrZXMgYXQgbGVhc3QgYSBtaWNyb3Rhc2sgdG8gZGV0ZWN0IGVycm9ycyAodXNpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVhZGVyLl9jbG9zZWRQcm9taXNlIGJlbG93KSwgYW5kIHdlIHdhbnQgZXJyb3JzIGluIHN0cmVhbSB0byBlcnJvciBib3RoIGJyYW5jaGVzIGltbWVkaWF0ZWx5LiBXZSBjYW5ub3QgbGV0XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWwgc3luY2hyb25vdXNseS1hdmFpbGFibGUgcmVhZHMgZ2V0IGFoZWFkIG9mIGFzeW5jaHJvbm91c2x5LWF2YWlsYWJsZSBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgIF9xdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVuazEgPSBjaHVuaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaHVuazIgPSBjaHVuaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxICYmICFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVuazIgPSBDbG9uZUFzVWludDhBcnJheShjaHVuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChjbG9uZUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UoUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjbG9uZUUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWUoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjaHVuazEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZShicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGNodW5rMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEFnYWluRm9yQnJhbmNoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1bGwxQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWFkQWdhaW5Gb3JCcmFuY2gyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVsbDJBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xvc2UoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZChicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSB8fCAhY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlclJlYWQocmVhZGVyLCByZWFkUmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHVsbFdpdGhCWU9CUmVhZGVyKHZpZXcsIGZvckJyYW5jaDIpIHtcbiAgICAgICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJlYWRlciA9IEFjcXVpcmVSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIoc3RyZWFtKTtcbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVhZGVyRXJyb3IocmVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJ5b2JCcmFuY2ggPSBmb3JCcmFuY2gyID8gYnJhbmNoMiA6IGJyYW5jaDE7XG4gICAgICAgICAgICBjb25zdCBvdGhlckJyYW5jaCA9IGZvckJyYW5jaDIgPyBicmFuY2gxIDogYnJhbmNoMjtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRJbnRvUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBfY2h1bmtTdGVwczogY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgYSBtaWNyb3Rhc2sgYmVjYXVzZSBpdCB0YWtlcyBhdCBsZWFzdCBhIG1pY3JvdGFzayB0byBkZXRlY3QgZXJyb3JzICh1c2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyByZWFkZXIuX2Nsb3NlZFByb21pc2UgYmVsb3cpLCBhbmQgd2Ugd2FudCBlcnJvcnMgaW4gc3RyZWFtIHRvIGVycm9yIGJvdGggYnJhbmNoZXMgaW1tZWRpYXRlbHkuIFdlIGNhbm5vdCBsZXRcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bCBzeW5jaHJvbm91c2x5LWF2YWlsYWJsZSByZWFkcyBnZXQgYWhlYWQgb2YgYXN5bmNocm9ub3VzbHktYXZhaWxhYmxlIGVycm9ycy5cbiAgICAgICAgICAgICAgICAgICAgX3F1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBZ2FpbkZvckJyYW5jaDEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBZ2FpbkZvckJyYW5jaDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5b2JDYW5jZWxlZCA9IGZvckJyYW5jaDIgPyBjYW5jZWxlZDIgOiBjYW5jZWxlZDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdGhlckNhbmNlbGVkID0gZm9yQnJhbmNoMiA/IGNhbmNlbGVkMSA6IGNhbmNlbGVkMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3RoZXJDYW5jZWxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbG9uZWRDaHVuaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRDaHVuayA9IENsb25lQXNVaW50OEFycmF5KGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGNsb25lRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnlvYkJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjbG9uZUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3Iob3RoZXJCcmFuY2guX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UoUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjbG9uZUUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5b2JDYW5jZWxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZFdpdGhOZXdWaWV3KGJ5b2JCcmFuY2guX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZShvdGhlckJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjbG9uZWRDaHVuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghYnlvYkNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRXaXRoTmV3VmlldyhieW9iQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkQWdhaW5Gb3JCcmFuY2gxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVsbDFBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlYWRBZ2FpbkZvckJyYW5jaDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWxsMkFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF9jbG9zZVN0ZXBzOiBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnlvYkNhbmNlbGVkID0gZm9yQnJhbmNoMiA/IGNhbmNlbGVkMiA6IGNhbmNlbGVkMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJDYW5jZWxlZCA9IGZvckJyYW5jaDIgPyBjYW5jZWxlZDEgOiBjYW5jZWxlZDI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYnlvYkNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xvc2UoYnlvYkJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW90aGVyQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbG9zZShvdGhlckJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFieW9iQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZFdpdGhOZXdWaWV3KGJ5b2JCcmFuY2guX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvdGhlckNhbmNlbGVkICYmIG90aGVyQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kKG90aGVyQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghYnlvYkNhbmNlbGVkIHx8ICFvdGhlckNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlclJlYWQocmVhZGVyLCB2aWV3LCAxLCByZWFkSW50b1JlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHB1bGwxQWxnb3JpdGhtKCkge1xuICAgICAgICAgICAgaWYgKHJlYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gxID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVhZGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBieW9iUmVxdWVzdCA9IFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXRCWU9CUmVxdWVzdChicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgaWYgKGJ5b2JSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVsbFdpdGhEZWZhdWx0UmVhZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwdWxsV2l0aEJZT0JSZWFkZXIoYnlvYlJlcXVlc3QuX3ZpZXcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHVsbDJBbGdvcml0aG0oKSB7XG4gICAgICAgICAgICBpZiAocmVhZGluZykge1xuICAgICAgICAgICAgICAgIHJlYWRBZ2FpbkZvckJyYW5jaDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ5b2JSZXF1ZXN0ID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldEJZT0JSZXF1ZXN0KGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICBpZiAoYnlvYlJlcXVlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdWxsV2l0aERlZmF1bHRSZWFkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHB1bGxXaXRoQllPQlJlYWRlcihieW9iUmVxdWVzdC5fdmlldywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbDFBbGdvcml0aG0ocmVhc29uKSB7XG4gICAgICAgICAgICBjYW5jZWxlZDEgPSB0cnVlO1xuICAgICAgICAgICAgcmVhc29uMSA9IHJlYXNvbjtcbiAgICAgICAgICAgIGlmIChjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsUmVzdWx0ID0gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjb21wb3NpdGVSZWFzb24pO1xuICAgICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKGNhbmNlbFJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FuY2VsUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWwyQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgICAgY2FuY2VsZWQyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlYXNvbjIgPSByZWFzb247XG4gICAgICAgICAgICBpZiAoY2FuY2VsZWQxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9zaXRlUmVhc29uID0gQ3JlYXRlQXJyYXlGcm9tTGlzdChbcmVhc29uMSwgcmVhc29uMl0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbFJlc3VsdCA9IFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHN0cmVhbSwgY29tcG9zaXRlUmVhc29uKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZShjYW5jZWxSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbmNlbFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbGdvcml0aG0oKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnJhbmNoMSA9IENyZWF0ZVJlYWRhYmxlQnl0ZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbDFBbGdvcml0aG0sIGNhbmNlbDFBbGdvcml0aG0pO1xuICAgICAgICBicmFuY2gyID0gQ3JlYXRlUmVhZGFibGVCeXRlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCBwdWxsMkFsZ29yaXRobSwgY2FuY2VsMkFsZ29yaXRobSk7XG4gICAgICAgIGZvcndhcmRSZWFkZXJFcnJvcihyZWFkZXIpO1xuICAgICAgICByZXR1cm4gW2JyYW5jaDEsIGJyYW5jaDJdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW1MaWtlKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gdHlwZUlzT2JqZWN0KHN0cmVhbSkgJiYgdHlwZW9mIHN0cmVhbS5nZXRSZWFkZXIgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRnJvbShzb3VyY2UpIHtcbiAgICAgICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbUZyb21EZWZhdWx0UmVhZGVyKHNvdXJjZS5nZXRSZWFkZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtRnJvbUl0ZXJhYmxlKHNvdXJjZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgICAgICAgbGV0IHN0cmVhbTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3JSZWNvcmQgPSBHZXRJdGVyYXRvcihhc3luY0l0ZXJhYmxlLCAnYXN5bmMnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRBbGdvcml0aG0gPSBub29wO1xuICAgICAgICBmdW5jdGlvbiBwdWxsQWxnb3JpdGhtKCkge1xuICAgICAgICAgICAgbGV0IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5leHRSZXN1bHQgPSBJdGVyYXRvck5leHQoaXRlcmF0b3JSZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5leHRQcm9taXNlID0gcHJvbWlzZVJlc29sdmVkV2l0aChuZXh0UmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChuZXh0UHJvbWlzZSwgaXRlclJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoaXRlclJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGl0ZXJhdG9yLm5leHQoKSBtZXRob2QgbXVzdCBmdWxmaWxsIHdpdGggYW4gb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSBJdGVyYXRvckNvbXBsZXRlKGl0ZXJSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBpdGVyYXRvclJlY29yZC5pdGVyYXRvcjtcbiAgICAgICAgICAgIGxldCByZXR1cm5NZXRob2Q7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybk1ldGhvZCA9IEdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmV0dXJuUmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm5SZXN1bHQgPSByZWZsZWN0Q2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yLCBbcmVhc29uXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmV0dXJuUHJvbWlzZSA9IHByb21pc2VSZXNvbHZlZFdpdGgocmV0dXJuUmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChyZXR1cm5Qcm9taXNlLCBpdGVyUmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXR5cGVJc09iamVjdChpdGVyUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgaXRlcmF0b3IucmV0dXJuKCkgbWV0aG9kIG11c3QgZnVsZmlsbCB3aXRoIGFuIG9iamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgMCk7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRnJvbURlZmF1bHRSZWFkZXIocmVhZGVyKSB7XG4gICAgICAgIGxldCBzdHJlYW07XG4gICAgICAgIGNvbnN0IHN0YXJ0QWxnb3JpdGhtID0gbm9vcDtcbiAgICAgICAgZnVuY3Rpb24gcHVsbEFsZ29yaXRobSgpIHtcbiAgICAgICAgICAgIGxldCByZWFkUHJvbWlzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVhZFByb21pc2UgPSByZWFkZXIucmVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChyZWFkUHJvbWlzZSwgcmVhZFJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QocmVhZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIHJlYWRlci5yZWFkKCkgbWV0aG9kIG11c3QgZnVsZmlsbCB3aXRoIGFuIG9iamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVhZFJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlYWRSZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aChyZWFkZXIuY2FuY2VsKHJlYXNvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0gPSBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCAwKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ0RlZmF1bHRPckJ5dGVTb3VyY2Uoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5hdXRvQWxsb2NhdGVDaHVua1NpemU7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5jYW5jZWw7XG4gICAgICAgIGNvbnN0IHB1bGwgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwucHVsbDtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuc3RhcnQ7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwudHlwZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9BbGxvY2F0ZUNodW5rU2l6ZTogYXV0b0FsbG9jYXRlQ2h1bmtTaXplID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgY29udmVydFVuc2lnbmVkTG9uZ0xvbmdXaXRoRW5mb3JjZVJhbmdlKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnYXV0b0FsbG9jYXRlQ2h1bmtTaXplJyB0aGF0YCksXG4gICAgICAgICAgICBjYW5jZWw6IGNhbmNlbCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU291cmNlQ2FuY2VsQ2FsbGJhY2soY2FuY2VsLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnY2FuY2VsJyB0aGF0YCksXG4gICAgICAgICAgICBwdWxsOiBwdWxsID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgY29udmVydFVuZGVybHlpbmdTb3VyY2VQdWxsQ2FsbGJhY2socHVsbCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3B1bGwnIHRoYXRgKSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU291cmNlU3RhcnRDYWxsYmFjayhzdGFydCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3N0YXJ0JyB0aGF0YCksXG4gICAgICAgICAgICB0eXBlOiB0eXBlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0UmVhZGFibGVTdHJlYW1UeXBlKHR5cGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3R5cGUnIHRoYXRgKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZUNhbmNlbENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAocmVhc29uKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtyZWFzb25dKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTb3VyY2VQdWxsQ2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIChjb250cm9sbGVyKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtjb250cm9sbGVyXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU291cmNlU3RhcnRDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKGNvbnRyb2xsZXIpID0+IHJlZmxlY3RDYWxsKGZuLCBvcmlnaW5hbCwgW2NvbnRyb2xsZXJdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgICAgIHR5cGUgPSBgJHt0eXBlfWA7XG4gICAgICAgIGlmICh0eXBlICE9PSAnYnl0ZXMnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9ICcke3R5cGV9JyBpcyBub3QgYSB2YWxpZCBlbnVtZXJhdGlvbiB2YWx1ZSBmb3IgUmVhZGFibGVTdHJlYW1UeXBlYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydEl0ZXJhdG9yT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHByZXZlbnRDYW5jZWwgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJldmVudENhbmNlbDtcbiAgICAgICAgcmV0dXJuIHsgcHJldmVudENhbmNlbDogQm9vbGVhbihwcmV2ZW50Q2FuY2VsKSB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRQaXBlT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHByZXZlbnRBYm9ydCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50QWJvcnQ7XG4gICAgICAgIGNvbnN0IHByZXZlbnRDYW5jZWwgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJldmVudENhbmNlbDtcbiAgICAgICAgY29uc3QgcHJldmVudENsb3NlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZXZlbnRDbG9zZTtcbiAgICAgICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpZ25hbDtcbiAgICAgICAgaWYgKHNpZ25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhc3NlcnRBYm9ydFNpZ25hbChzaWduYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3NpZ25hbCcgdGhhdGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmV2ZW50QWJvcnQ6IEJvb2xlYW4ocHJldmVudEFib3J0KSxcbiAgICAgICAgICAgIHByZXZlbnRDYW5jZWw6IEJvb2xlYW4ocHJldmVudENhbmNlbCksXG4gICAgICAgICAgICBwcmV2ZW50Q2xvc2U6IEJvb2xlYW4ocHJldmVudENsb3NlKSxcbiAgICAgICAgICAgIHNpZ25hbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhc3NlcnRBYm9ydFNpZ25hbChzaWduYWwsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGFuIEFib3J0U2lnbmFsLmApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlV3JpdGFibGVQYWlyKHBhaXIsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RGljdGlvbmFyeShwYWlyLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgcmVhZGFibGUgPSBwYWlyID09PSBudWxsIHx8IHBhaXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXIucmVhZGFibGU7XG4gICAgICAgIGFzc2VydFJlcXVpcmVkRmllbGQocmVhZGFibGUsICdyZWFkYWJsZScsICdSZWFkYWJsZVdyaXRhYmxlUGFpcicpO1xuICAgICAgICBhc3NlcnRSZWFkYWJsZVN0cmVhbShyZWFkYWJsZSwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAncmVhZGFibGUnIHRoYXRgKTtcbiAgICAgICAgY29uc3Qgd3JpdGFibGUgPSBwYWlyID09PSBudWxsIHx8IHBhaXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXIud3JpdGFibGU7XG4gICAgICAgIGFzc2VydFJlcXVpcmVkRmllbGQod3JpdGFibGUsICd3cml0YWJsZScsICdSZWFkYWJsZVdyaXRhYmxlUGFpcicpO1xuICAgICAgICBhc3NlcnRXcml0YWJsZVN0cmVhbSh3cml0YWJsZSwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnd3JpdGFibGUnIHRoYXRgKTtcbiAgICAgICAgcmV0dXJuIHsgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWFkYWJsZSBzdHJlYW0gcmVwcmVzZW50cyBhIHNvdXJjZSBvZiBkYXRhLCBmcm9tIHdoaWNoIHlvdSBjYW4gcmVhZC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbGFzcyBSZWFkYWJsZVN0cmVhbSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJhd1VuZGVybHlpbmdTb3VyY2UgPSB7fSwgcmF3U3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICAgICAgaWYgKHJhd1VuZGVybHlpbmdTb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJhd1VuZGVybHlpbmdTb3VyY2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0T2JqZWN0KHJhd1VuZGVybHlpbmdTb3VyY2UsICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdTdHJhdGVneSwgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHVuZGVybHlpbmdTb3VyY2UgPSBjb252ZXJ0VW5kZXJseWluZ0RlZmF1bHRPckJ5dGVTb3VyY2UocmF3VW5kZXJseWluZ1NvdXJjZSwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHVuZGVybHlpbmdTb3VyY2UudHlwZSA9PT0gJ2J5dGVzJykge1xuICAgICAgICAgICAgICAgIGlmIChzdHJhdGVneS5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBzdHJhdGVneSBmb3IgYSBieXRlIHN0cmVhbSBjYW5ub3QgaGF2ZSBhIHNpemUgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCAwKTtcbiAgICAgICAgICAgICAgICBTZXRVcFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NvdXJjZSh0aGlzLCB1bmRlcmx5aW5nU291cmNlLCBoaWdoV2F0ZXJNYXJrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemVBbGdvcml0aG0gPSBFeHRyYWN0U2l6ZUFsZ29yaXRobShzdHJhdGVneSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCAxKTtcbiAgICAgICAgICAgICAgICBTZXRVcFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NvdXJjZSh0aGlzLCB1bmRlcmx5aW5nU291cmNlLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHJlYWRhYmxlIHN0cmVhbSBpcyBsb2NrZWQgdG8gYSB7QGxpbmsgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyIHwgcmVhZGVyfS5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBsb2NrZWQoKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2xvY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIElzUmVhZGFibGVTdHJlYW1Mb2NrZWQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbmNlbHMgdGhlIHN0cmVhbSwgc2lnbmFsaW5nIGEgbG9zcyBvZiBpbnRlcmVzdCBpbiB0aGUgc3RyZWFtIGJ5IGEgY29uc3VtZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBzdXBwbGllZCBgcmVhc29uYCBhcmd1bWVudCB3aWxsIGJlIGdpdmVuIHRvIHRoZSB1bmRlcmx5aW5nIHNvdXJjZSdzIHtAbGluayBVbmRlcmx5aW5nU291cmNlLmNhbmNlbCB8IGNhbmNlbCgpfVxuICAgICAgICAgKiBtZXRob2QsIHdoaWNoIG1pZ2h0IG9yIG1pZ2h0IG5vdCB1c2UgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBjYW5jZWwocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2NhbmNlbCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbmNlbCBhIHN0cmVhbSB0aGF0IGFscmVhZHkgaGFzIGEgcmVhZGVyJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHRoaXMsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmVhZGVyKHJhd09wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMSgnZ2V0UmVhZGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY29udmVydFJlYWRlck9wdGlvbnMocmF3T3B0aW9ucywgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBwaXBlVGhyb3VnaChyYXdUcmFuc2Zvcm0sIHJhd09wdGlvbnMgPSB7fSkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCdwaXBlVGhyb3VnaCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChyYXdUcmFuc2Zvcm0sIDEsICdwaXBlVGhyb3VnaCcpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29udmVydFJlYWRhYmxlV3JpdGFibGVQYWlyKHJhd1RyYW5zZm9ybSwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnZlcnRQaXBlT3B0aW9ucyhyYXdPcHRpb25zLCAnU2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRocm91Z2ggY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgUmVhZGFibGVTdHJlYW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRyYW5zZm9ybS53cml0YWJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRocm91Z2ggY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgV3JpdGFibGVTdHJlYW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBSZWFkYWJsZVN0cmVhbVBpcGVUbyh0aGlzLCB0cmFuc2Zvcm0ud3JpdGFibGUsIG9wdGlvbnMucHJldmVudENsb3NlLCBvcHRpb25zLnByZXZlbnRBYm9ydCwgb3B0aW9ucy5wcmV2ZW50Q2FuY2VsLCBvcHRpb25zLnNpZ25hbCk7XG4gICAgICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybS5yZWFkYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBwaXBlVG8oZGVzdGluYXRpb24sIHJhd09wdGlvbnMgPSB7fSkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCdwaXBlVG8nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGBQYXJhbWV0ZXIgMSBpcyByZXF1aXJlZCBpbiAncGlwZVRvJy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbShkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRvJ3MgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFdyaXRhYmxlU3RyZWFtYCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9wdGlvbnM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBjb252ZXJ0UGlwZU9wdGlvbnMocmF3T3B0aW9ucywgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoJ1JlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS5waXBlVG8gY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgUmVhZGFibGVTdHJlYW0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoSXNXcml0YWJsZVN0cmVhbUxvY2tlZChkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRvIGNhbm5vdCBiZSB1c2VkIG9uIGEgbG9ja2VkIFdyaXRhYmxlU3RyZWFtJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtUGlwZVRvKHRoaXMsIGRlc3RpbmF0aW9uLCBvcHRpb25zLnByZXZlbnRDbG9zZSwgb3B0aW9ucy5wcmV2ZW50QWJvcnQsIG9wdGlvbnMucHJldmVudENhbmNlbCwgb3B0aW9ucy5zaWduYWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZWVzIHRoaXMgcmVhZGFibGUgc3RyZWFtLCByZXR1cm5pbmcgYSB0d28tZWxlbWVudCBhcnJheSBjb250YWluaW5nIHRoZSB0d28gcmVzdWx0aW5nIGJyYW5jaGVzIGFzXG4gICAgICAgICAqIG5ldyB7QGxpbmsgUmVhZGFibGVTdHJlYW19IGluc3RhbmNlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGVlaW5nIGEgc3RyZWFtIHdpbGwgbG9jayBpdCwgcHJldmVudGluZyBhbnkgb3RoZXIgY29uc3VtZXIgZnJvbSBhY3F1aXJpbmcgYSByZWFkZXIuXG4gICAgICAgICAqIFRvIGNhbmNlbCB0aGUgc3RyZWFtLCBjYW5jZWwgYm90aCBvZiB0aGUgcmVzdWx0aW5nIGJyYW5jaGVzOyBhIGNvbXBvc2l0ZSBjYW5jZWxsYXRpb24gcmVhc29uIHdpbGwgdGhlbiBiZVxuICAgICAgICAgKiBwcm9wYWdhdGVkIHRvIHRoZSBzdHJlYW0ncyB1bmRlcmx5aW5nIHNvdXJjZS5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZSB0aGF0IHRoZSBjaHVua3Mgc2VlbiBpbiBlYWNoIGJyYW5jaCB3aWxsIGJlIHRoZSBzYW1lIG9iamVjdC4gSWYgdGhlIGNodW5rcyBhcmUgbm90IGltbXV0YWJsZSxcbiAgICAgICAgICogdGhpcyBjb3VsZCBhbGxvdyBpbnRlcmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIGJyYW5jaGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGVlKCkge1xuICAgICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCd0ZWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJyYW5jaGVzID0gUmVhZGFibGVTdHJlYW1UZWUodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gQ3JlYXRlQXJyYXlGcm9tTGlzdChicmFuY2hlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzKHJhd09wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMSgndmFsdWVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY29udmVydEl0ZXJhdG9yT3B0aW9ucyhyYXdPcHRpb25zLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgICAgICByZXR1cm4gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcih0aGlzLCBvcHRpb25zLnByZXZlbnRDYW5jZWwpO1xuICAgICAgICB9XG4gICAgICAgIFtTeW1ib2xBc3luY0l0ZXJhdG9yXShvcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBTdHViIGltcGxlbWVudGF0aW9uLCBvdmVycmlkZGVuIGJlbG93XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgUmVhZGFibGVTdHJlYW0gd3JhcHBpbmcgdGhlIHByb3ZpZGVkIGl0ZXJhYmxlIG9yIGFzeW5jIGl0ZXJhYmxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGFkYXB0IHZhcmlvdXMga2luZHMgb2Ygb2JqZWN0cyBpbnRvIGEgcmVhZGFibGUgc3RyZWFtLFxuICAgICAgICAgKiBzdWNoIGFzIGFuIGFycmF5LCBhbiBhc3luYyBnZW5lcmF0b3IsIG9yIGEgTm9kZS5qcyByZWFkYWJsZSBzdHJlYW0uXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZnJvbShhc3luY0l0ZXJhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1Gcm9tKGFzeW5jSXRlcmFibGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtLCB7XG4gICAgICAgIGZyb206IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgICAgIGNhbmNlbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGdldFJlYWRlcjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHBpcGVUaHJvdWdoOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcGlwZVRvOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgdGVlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgdmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgbG9ja2VkOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbS5mcm9tLCAnZnJvbScpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUuY2FuY2VsLCAnY2FuY2VsJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS5nZXRSZWFkZXIsICdnZXRSZWFkZXInKTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLnBpcGVUaHJvdWdoLCAncGlwZVRocm91Z2gnKTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLnBpcGVUbywgJ3BpcGVUbycpO1xuICAgIHNldEZ1bmN0aW9uTmFtZShSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUudGVlLCAndGVlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS52YWx1ZXMsICd2YWx1ZXMnKTtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ1JlYWRhYmxlU3RyZWFtJyxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZSwgU3ltYm9sQXN5bmNJdGVyYXRvciwge1xuICAgICAgICB2YWx1ZTogUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLnZhbHVlcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbiAgICAvLyBUaHJvd3MgaWYgYW5kIG9ubHkgaWYgc3RhcnRBbGdvcml0aG0gdGhyb3dzLlxuICAgIGZ1bmN0aW9uIENyZWF0ZVJlYWRhYmxlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmsgPSAxLCBzaXplQWxnb3JpdGhtID0gKCkgPT4gMSkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZSk7XG4gICAgICAgIEluaXRpYWxpemVSZWFkYWJsZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIFNldFVwUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cbiAgICAvLyBUaHJvd3MgaWYgYW5kIG9ubHkgaWYgc3RhcnRBbGdvcml0aG0gdGhyb3dzLlxuICAgIGZ1bmN0aW9uIENyZWF0ZVJlYWRhYmxlQnl0ZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IE9iamVjdC5jcmVhdGUoUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlKTtcbiAgICAgICAgSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgMCwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX3N0YXRlID0gJ3JlYWRhYmxlJztcbiAgICAgICAgc3RyZWFtLl9yZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0cmVhbS5fc3RvcmVkRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0cmVhbS5fZGlzdHVyYmVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW0oeCkge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfcmVhZGFibGVTdHJlYW1Db250cm9sbGVyJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLl9yZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBSZWFkYWJsZVN0cmVhbSBBUEkgZXhwb3NlZCBmb3IgY29udHJvbGxlcnMuXG4gICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCByZWFzb24pIHtcbiAgICAgICAgc3RyZWFtLl9kaXN0dXJiZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICAgICAgaWYgKHJlYWRlciAhPT0gdW5kZWZpbmVkICYmIElzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHJlYWRlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRJbnRvUmVxdWVzdHMgPSByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHM7XG4gICAgICAgICAgICByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdHMuZm9yRWFjaChyZWFkSW50b1JlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2xvc2VTdGVwcyh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlQ2FuY2VsUHJvbWlzZSA9IHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyW0NhbmNlbFN0ZXBzXShyZWFzb24pO1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgoc291cmNlQ2FuY2VsUHJvbWlzZSwgbm9vcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQ2xvc2Uoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5fc3RhdGUgPSAnY2xvc2VkJztcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgICAgIGlmIChyZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzb2x2ZShyZWFkZXIpO1xuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZFJlcXVlc3RzID0gcmVhZGVyLl9yZWFkUmVxdWVzdHM7XG4gICAgICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICAgICAgcmVhZFJlcXVlc3RzLmZvckVhY2gocmVhZFJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jbG9zZVN0ZXBzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUVycm9yKHN0cmVhbSwgZSkge1xuICAgICAgICBzdHJlYW0uX3N0YXRlID0gJ2Vycm9yZWQnO1xuICAgICAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gZTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgICAgIGlmIChyZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVqZWN0KHJlYWRlciwgZSk7XG4gICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJFcnJvclJlYWRSZXF1ZXN0cyhyZWFkZXIsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyRXJyb3JSZWFkSW50b1JlcXVlc3RzKHJlYWRlciwgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtLlxuICAgIGZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMShuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVTdHJlYW1gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5SW5pdChpbml0LCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkoaW5pdCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBpbml0ID09PSBudWxsIHx8IGluaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXQuaGlnaFdhdGVyTWFyaztcbiAgICAgICAgYXNzZXJ0UmVxdWlyZWRGaWVsZChoaWdoV2F0ZXJNYXJrLCAnaGlnaFdhdGVyTWFyaycsICdRdWV1aW5nU3RyYXRlZ3lJbml0Jyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaWdoV2F0ZXJNYXJrOiBjb252ZXJ0VW5yZXN0cmljdGVkRG91YmxlKGhpZ2hXYXRlck1hcmspXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVGhlIHNpemUgZnVuY3Rpb24gbXVzdCBub3QgaGF2ZSBhIHByb3RvdHlwZSBwcm9wZXJ0eSBub3IgYmUgYSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0IGJ5dGVMZW5ndGhTaXplRnVuY3Rpb24gPSAoY2h1bmspID0+IHtcbiAgICAgICAgcmV0dXJuIGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgfTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoYnl0ZUxlbmd0aFNpemVGdW5jdGlvbiwgJ3NpemUnKTtcbiAgICAvKipcbiAgICAgKiBBIHF1ZXVpbmcgc3RyYXRlZ3kgdGhhdCBjb3VudHMgdGhlIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGNodW5rLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kge1xuICAgICAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KG9wdGlvbnMsIDEsICdCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5Jyk7XG4gICAgICAgICAgICBvcHRpb25zID0gY29udmVydFF1ZXVpbmdTdHJhdGVneUluaXQob3B0aW9ucywgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgdGhpcy5fYnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcmsgPSBvcHRpb25zLmhpZ2hXYXRlck1hcms7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGhpZ2ggd2F0ZXIgbWFyayBwcm92aWRlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgaGlnaFdhdGVyTWFyaygpIHtcbiAgICAgICAgICAgIGlmICghSXNCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24oJ2hpZ2hXYXRlck1hcmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ieXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyaztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTWVhc3VyZXMgdGhlIHNpemUgb2YgYGNodW5rYCBieSByZXR1cm5pbmcgdGhlIHZhbHVlIG9mIGl0cyBgYnl0ZUxlbmd0aGAgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICghSXNCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3NpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBieXRlTGVuZ3RoU2l6ZUZ1bmN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCB7XG4gICAgICAgIGhpZ2hXYXRlck1hcms6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgdmFsdWU6ICdCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5JyxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kuXG4gICAgZnVuY3Rpb24gYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneWApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBJc0J5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3koeCkge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfYnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcmsnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneTtcbiAgICB9XG5cbiAgICAvLyBUaGUgc2l6ZSBmdW5jdGlvbiBtdXN0IG5vdCBoYXZlIGEgcHJvdG90eXBlIHByb3BlcnR5IG5vciBiZSBhIGNvbnN0cnVjdG9yXG4gICAgY29uc3QgY291bnRTaXplRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH07XG4gICAgc2V0RnVuY3Rpb25OYW1lKGNvdW50U2l6ZUZ1bmN0aW9uLCAnc2l6ZScpO1xuICAgIC8qKlxuICAgICAqIEEgcXVldWluZyBzdHJhdGVneSB0aGF0IGNvdW50cyB0aGUgbnVtYmVyIG9mIGNodW5rcy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbGFzcyBDb3VudFF1ZXVpbmdTdHJhdGVneSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQob3B0aW9ucywgMSwgJ0NvdW50UXVldWluZ1N0cmF0ZWd5Jyk7XG4gICAgICAgICAgICBvcHRpb25zID0gY29udmVydFF1ZXVpbmdTdHJhdGVneUluaXQob3B0aW9ucywgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgdGhpcy5fY291bnRRdWV1aW5nU3RyYXRlZ3lIaWdoV2F0ZXJNYXJrID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBoaWdoIHdhdGVyIG1hcmsgcHJvdmlkZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGhpZ2hXYXRlck1hcmsoKSB7XG4gICAgICAgICAgICBpZiAoIUlzQ291bnRRdWV1aW5nU3RyYXRlZ3kodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBjb3VudEJyYW5kQ2hlY2tFeGNlcHRpb24oJ2hpZ2hXYXRlck1hcmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb3VudFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcms7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1lYXN1cmVzIHRoZSBzaXplIG9mIGBjaHVua2AgYnkgYWx3YXlzIHJldHVybmluZyAxLlxuICAgICAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgdG90YWwgcXVldWUgc2l6ZSBpcyBhIGNvdW50IG9mIHRoZSBudW1iZXIgb2YgY2h1bmtzIGluIHRoZSBxdWV1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgICAgaWYgKCFJc0NvdW50UXVldWluZ1N0cmF0ZWd5KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgY291bnRCcmFuZENoZWNrRXhjZXB0aW9uKCdzaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY291bnRTaXplRnVuY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCB7XG4gICAgICAgIGhpZ2hXYXRlck1hcms6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnQ291bnRRdWV1aW5nU3RyYXRlZ3knLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgQ291bnRRdWV1aW5nU3RyYXRlZ3kuXG4gICAgZnVuY3Rpb24gY291bnRCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYENvdW50UXVldWluZ1N0cmF0ZWd5LnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBDb3VudFF1ZXVpbmdTdHJhdGVneWApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBJc0NvdW50UXVldWluZ1N0cmF0ZWd5KHgpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2NvdW50UXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyaycpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBDb3VudFF1ZXVpbmdTdHJhdGVneTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXIob3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RGljdGlvbmFyeShvcmlnaW5hbCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5jYW5jZWw7XG4gICAgICAgIGNvbnN0IGZsdXNoID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLmZsdXNoO1xuICAgICAgICBjb25zdCByZWFkYWJsZVR5cGUgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwucmVhZGFibGVUeXBlO1xuICAgICAgICBjb25zdCBzdGFydCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5zdGFydDtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgd3JpdGFibGVUeXBlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLndyaXRhYmxlVHlwZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhbmNlbDogY2FuY2VsID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgY29udmVydFRyYW5zZm9ybWVyQ2FuY2VsQ2FsbGJhY2soY2FuY2VsLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnY2FuY2VsJyB0aGF0YCksXG4gICAgICAgICAgICBmbHVzaDogZmx1c2ggPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICAgICBjb252ZXJ0VHJhbnNmb3JtZXJGbHVzaENhbGxiYWNrKGZsdXNoLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnZmx1c2gnIHRoYXRgKSxcbiAgICAgICAgICAgIHJlYWRhYmxlVHlwZSxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgIGNvbnZlcnRUcmFuc2Zvcm1lclN0YXJ0Q2FsbGJhY2soc3RhcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzdGFydCcgdGhhdGApLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0gPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICAgICBjb252ZXJ0VHJhbnNmb3JtZXJUcmFuc2Zvcm1DYWxsYmFjayh0cmFuc2Zvcm0sIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICd0cmFuc2Zvcm0nIHRoYXRgKSxcbiAgICAgICAgICAgIHdyaXRhYmxlVHlwZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJGbHVzaENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJTdGFydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcmVmbGVjdENhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJUcmFuc2Zvcm1DYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKGNodW5rLCBjb250cm9sbGVyKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtjaHVuaywgY29udHJvbGxlcl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJDYW5jZWxDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKHJlYXNvbikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbcmVhc29uXSk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgVHJhbnNmb3JtU3RyZWFtXG4gICAgLyoqXG4gICAgICogQSB0cmFuc2Zvcm0gc3RyZWFtIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBzdHJlYW1zOiBhIHtAbGluayBXcml0YWJsZVN0cmVhbSB8IHdyaXRhYmxlIHN0cmVhbX0sXG4gICAgICoga25vd24gYXMgaXRzIHdyaXRhYmxlIHNpZGUsIGFuZCBhIHtAbGluayBSZWFkYWJsZVN0cmVhbSB8IHJlYWRhYmxlIHN0cmVhbX0sIGtub3duIGFzIGl0cyByZWFkYWJsZSBzaWRlLlxuICAgICAqIEluIGEgbWFubmVyIHNwZWNpZmljIHRvIHRoZSB0cmFuc2Zvcm0gc3RyZWFtIGluIHF1ZXN0aW9uLCB3cml0ZXMgdG8gdGhlIHdyaXRhYmxlIHNpZGUgcmVzdWx0IGluIG5ldyBkYXRhIGJlaW5nXG4gICAgICogbWFkZSBhdmFpbGFibGUgZm9yIHJlYWRpbmcgZnJvbSB0aGUgcmVhZGFibGUgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbGFzcyBUcmFuc2Zvcm1TdHJlYW0ge1xuICAgICAgICBjb25zdHJ1Y3RvcihyYXdUcmFuc2Zvcm1lciA9IHt9LCByYXdXcml0YWJsZVN0cmF0ZWd5ID0ge30sIHJhd1JlYWRhYmxlU3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICAgICAgaWYgKHJhd1RyYW5zZm9ybWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByYXdUcmFuc2Zvcm1lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZVN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdXcml0YWJsZVN0cmF0ZWd5LCAnU2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVTdHJhdGVneSA9IGNvbnZlcnRRdWV1aW5nU3RyYXRlZ3kocmF3UmVhZGFibGVTdHJhdGVneSwgJ1RoaXJkIHBhcmFtZXRlcicpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZXIgPSBjb252ZXJ0VHJhbnNmb3JtZXIocmF3VHJhbnNmb3JtZXIsICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1lci5yZWFkYWJsZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHJlYWRhYmxlVHlwZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1lci53cml0YWJsZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHdyaXRhYmxlVHlwZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRhYmxlSGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHJlYWRhYmxlU3RyYXRlZ3ksIDApO1xuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVTaXplQWxnb3JpdGhtID0gRXh0cmFjdFNpemVBbGdvcml0aG0ocmVhZGFibGVTdHJhdGVneSk7XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZUhpZ2hXYXRlck1hcmsgPSBFeHRyYWN0SGlnaFdhdGVyTWFyayh3cml0YWJsZVN0cmF0ZWd5LCAxKTtcbiAgICAgICAgICAgIGNvbnN0IHdyaXRhYmxlU2l6ZUFsZ29yaXRobSA9IEV4dHJhY3RTaXplQWxnb3JpdGhtKHdyaXRhYmxlU3RyYXRlZ3kpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0UHJvbWlzZV9yZXNvbHZlO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRQcm9taXNlID0gbmV3UHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBzdGFydFByb21pc2VfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEluaXRpYWxpemVUcmFuc2Zvcm1TdHJlYW0odGhpcywgc3RhcnRQcm9taXNlLCB3cml0YWJsZUhpZ2hXYXRlck1hcmssIHdyaXRhYmxlU2l6ZUFsZ29yaXRobSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrLCByZWFkYWJsZVNpemVBbGdvcml0aG0pO1xuICAgICAgICAgICAgU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckZyb21UcmFuc2Zvcm1lcih0aGlzLCB0cmFuc2Zvcm1lcik7XG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtZXIuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0UHJvbWlzZV9yZXNvbHZlKHRyYW5zZm9ybWVyLnN0YXJ0KHRoaXMuX3RyYW5zZm9ybVN0cmVhbUNvbnRyb2xsZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0UHJvbWlzZV9yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByZWFkYWJsZSBzaWRlIG9mIHRoZSB0cmFuc2Zvcm0gc3RyZWFtLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHJlYWRhYmxlKCkge1xuICAgICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24oJ3JlYWRhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB3cml0YWJsZSBzaWRlIG9mIHRoZSB0cmFuc2Zvcm0gc3RyZWFtLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHdyaXRhYmxlKCkge1xuICAgICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24oJ3dyaXRhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3JpdGFibGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVHJhbnNmb3JtU3RyZWFtLnByb3RvdHlwZSwge1xuICAgICAgICByZWFkYWJsZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHdyaXRhYmxlOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtU3RyZWFtLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ1RyYW5zZm9ybVN0cmVhbScsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemVUcmFuc2Zvcm1TdHJlYW0oc3RyZWFtLCBzdGFydFByb21pc2UsIHdyaXRhYmxlSGlnaFdhdGVyTWFyaywgd3JpdGFibGVTaXplQWxnb3JpdGhtLCByZWFkYWJsZUhpZ2hXYXRlck1hcmssIHJlYWRhYmxlU2l6ZUFsZ29yaXRobSkge1xuICAgICAgICBmdW5jdGlvbiBzdGFydEFsZ29yaXRobSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JpdGVBbGdvcml0aG0oY2h1bmspIHtcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua1dyaXRlQWxnb3JpdGhtKHN0cmVhbSwgY2h1bmspO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFib3J0QWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rQWJvcnRBbGdvcml0aG0oc3RyZWFtLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWxnb3JpdGhtKCkge1xuICAgICAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rQ2xvc2VBbGdvcml0aG0oc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3dyaXRhYmxlID0gQ3JlYXRlV3JpdGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIHdyaXRhYmxlSGlnaFdhdGVyTWFyaywgd3JpdGFibGVTaXplQWxnb3JpdGhtKTtcbiAgICAgICAgZnVuY3Rpb24gcHVsbEFsZ29yaXRobSgpIHtcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U291cmNlUHVsbEFsZ29yaXRobShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbEFsZ29yaXRobShyZWFzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U291cmNlQ2FuY2VsQWxnb3JpdGhtKHN0cmVhbSwgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3JlYWRhYmxlID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrLCByZWFkYWJsZVNpemVBbGdvcml0aG0pO1xuICAgICAgICAvLyBUaGUgW1tiYWNrcHJlc3N1cmVdXSBzbG90IGlzIHNldCB0byB1bmRlZmluZWQgc28gdGhhdCBpdCBjYW4gYmUgaW5pdGlhbGlzZWQgYnkgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlLlxuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgdHJ1ZSk7XG4gICAgICAgIHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gSXNUcmFuc2Zvcm1TdHJlYW0oeCkge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBUcmFuc2Zvcm1TdHJlYW07XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgYSBuby1vcCBpZiBib3RoIHNpZGVzIGFyZSBhbHJlYWR5IGVycm9yZWQuXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRXJyb3Ioc3RyZWFtLCBlKSB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGUpO1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcldyaXRhYmxlQW5kVW5ibG9ja1dyaXRlKHN0cmVhbSwgZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbUVycm9yV3JpdGFibGVBbmRVbmJsb2NrV3JpdGUoc3RyZWFtLCBlKSB7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcklmTmVlZGVkKHN0cmVhbS5fd3JpdGFibGUuX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlciwgZSk7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbVVuYmxvY2tXcml0ZShzdHJlYW0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1VbmJsb2NrV3JpdGUoc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgLy8gUHJldGVuZCB0aGF0IHB1bGwoKSB3YXMgY2FsbGVkIHRvIHBlcm1pdCBhbnkgcGVuZGluZyB3cml0ZSgpIGNhbGxzIHRvIGNvbXBsZXRlLiBUcmFuc2Zvcm1TdHJlYW1TZXRCYWNrcHJlc3N1cmUoKVxuICAgICAgICAgICAgLy8gY2Fubm90IGJlIGNhbGxlZCBmcm9tIGVucXVldWUoKSBvciBwdWxsKCkgb25jZSB0aGUgUmVhZGFibGVTdHJlYW0gaXMgZXJyb3JlZCwgc28gdGhpcyB3aWxsIHdpbGwgYmUgdGhlIGZpbmFsIHRpbWVcbiAgICAgICAgICAgIC8vIF9iYWNrcHJlc3N1cmUgaXMgc2V0LlxuICAgICAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbVNldEJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSkge1xuICAgICAgICAvLyBQYXNzZXMgYWxzbyB3aGVuIGNhbGxlZCBkdXJpbmcgY29uc3RydWN0aW9uLlxuICAgICAgICBpZiAoc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZV9yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlID0gbmV3UHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlID0gYmFja3ByZXNzdXJlO1xuICAgIH1cbiAgICAvLyBDbGFzcyBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclxuICAgIC8qKlxuICAgICAqIEFsbG93cyBjb250cm9sIG9mIHRoZSB7QGxpbmsgUmVhZGFibGVTdHJlYW19IGFuZCB7QGxpbmsgV3JpdGFibGVTdHJlYW19IG9mIHRoZSBhc3NvY2lhdGVkIHtAbGluayBUcmFuc2Zvcm1TdHJlYW19LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsYXNzIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRlc2lyZWQgc2l6ZSB0byBmaWxsIHRoZSByZWFkYWJsZSBzaWRl4oCZcyBpbnRlcm5hbCBxdWV1ZS4gSXQgY2FuIGJlIG5lZ2F0aXZlLCBpZiB0aGUgcXVldWUgaXMgb3Zlci1mdWxsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IGRlc2lyZWRTaXplKCkge1xuICAgICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdkZXNpcmVkU2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZGFibGVDb250cm9sbGVyID0gdGhpcy5fY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbS5fcmVhZGFibGUuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUocmVhZGFibGVDb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGNodW5rID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2VucXVldWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVycm9ycyBib3RoIHRoZSByZWFkYWJsZSBzaWRlIGFuZCB0aGUgd3JpdGFibGUgc2lkZSBvZiB0aGUgY29udHJvbGxlZCB0cmFuc2Zvcm0gc3RyZWFtLCBtYWtpbmcgYWxsIGZ1dHVyZVxuICAgICAgICAgKiBpbnRlcmFjdGlvbnMgd2l0aCBpdCBmYWlsIHdpdGggdGhlIGdpdmVuIGVycm9yIGBlYC4gQW55IGNodW5rcyBxdWV1ZWQgZm9yIHRyYW5zZm9ybWF0aW9uIHdpbGwgYmUgZGlzY2FyZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3IocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIUlzVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKHRoaXMsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlcyB0aGUgcmVhZGFibGUgc2lkZSBhbmQgZXJyb3JzIHRoZSB3cml0YWJsZSBzaWRlIG9mIHRoZSBjb250cm9sbGVkIHRyYW5zZm9ybSBzdHJlYW0uIFRoaXMgaXMgdXNlZnVsIHdoZW4gdGhlXG4gICAgICAgICAqIHRyYW5zZm9ybWVyIG9ubHkgbmVlZHMgdG8gY29uc3VtZSBhIHBvcnRpb24gb2YgdGhlIGNodW5rcyB3cml0dGVuIHRvIHRoZSB3cml0YWJsZSBzaWRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGVybWluYXRlKCkge1xuICAgICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCd0ZXJtaW5hdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyVGVybWluYXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgICAgICBlbnF1ZXVlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZXJyb3I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICB0ZXJtaW5hdGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBkZXNpcmVkU2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbiAgICB9KTtcbiAgICBzZXRGdW5jdGlvbk5hbWUoVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLmVucXVldWUsICdlbnF1ZXVlJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZS5lcnJvciwgJ2Vycm9yJyk7XG4gICAgc2V0RnVuY3Rpb25OYW1lKFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZS50ZXJtaW5hdGUsICd0ZXJtaW5hdGUnKTtcbiAgICBpZiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVHJhbnNmb3JtIFN0cmVhbSBEZWZhdWx0IENvbnRyb2xsZXIgQWJzdHJhY3QgT3BlcmF0aW9uc1xuICAgIGZ1bmN0aW9uIElzVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoeCkge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbScpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHRyYW5zZm9ybUFsZ29yaXRobSwgZmx1c2hBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSkge1xuICAgICAgICBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzdHJlYW0uX3RyYW5zZm9ybVN0cmVhbUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICBjb250cm9sbGVyLl90cmFuc2Zvcm1BbGdvcml0aG0gPSB0cmFuc2Zvcm1BbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtID0gZmx1c2hBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2NhbmNlbEFsZ29yaXRobSA9IGNhbmNlbEFsZ29yaXRobTtcbiAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlX3JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckZyb21UcmFuc2Zvcm1lcihzdHJlYW0sIHRyYW5zZm9ybWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1BbGdvcml0aG07XG4gICAgICAgIGxldCBmbHVzaEFsZ29yaXRobTtcbiAgICAgICAgbGV0IGNhbmNlbEFsZ29yaXRobTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybWVyLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGdvcml0aG0gPSBjaHVuayA9PiB0cmFuc2Zvcm1lci50cmFuc2Zvcm0oY2h1bmssIGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNmb3JtQWxnb3JpdGhtID0gY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShjb250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoICh0cmFuc2Zvcm1SZXN1bHRFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHRyYW5zZm9ybVJlc3VsdEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybWVyLmZsdXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZsdXNoQWxnb3JpdGhtID0gKCkgPT4gdHJhbnNmb3JtZXIuZmx1c2goY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmbHVzaEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNmb3JtZXIuY2FuY2VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFsZ29yaXRobSA9IHJlYXNvbiA9PiB0cmFuc2Zvcm1lci5jYW5jZWwocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbmNlbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBTZXRVcFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgdHJhbnNmb3JtQWxnb3JpdGhtLCBmbHVzaEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLl90cmFuc2Zvcm1BbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShjb250cm9sbGVyLCBjaHVuaykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtO1xuICAgICAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSBzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICAgIGlmICghUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKHJlYWRhYmxlQ29udHJvbGxlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWRhYmxlIHNpZGUgaXMgbm90IGluIGEgc3RhdGUgdGhhdCBwZXJtaXRzIGVucXVldWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSB0aHJvdHRsZSB0cmFuc2Zvcm0gaW52b2NhdGlvbnMgYmFzZWQgb24gdGhlIGJhY2twcmVzc3VyZSBvZiB0aGUgUmVhZGFibGVTdHJlYW0sIGJ1dCB3ZSBzdGlsbFxuICAgICAgICAvLyBhY2NlcHQgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKCkgY2FsbHMuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShyZWFkYWJsZUNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gcmVhZGFibGVTdHJhdGVneS5zaXplKCkgdGhyb3dzLlxuICAgICAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIGUpO1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtLl9yZWFkYWJsZS5fc3RvcmVkRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFja3ByZXNzdXJlID0gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckhhc0JhY2twcmVzc3VyZShyZWFkYWJsZUNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoYmFja3ByZXNzdXJlICE9PSBzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlKSB7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbUVycm9yKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRUcmFuc2Zvcm1TdHJlYW0sIGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclBlcmZvcm1UcmFuc2Zvcm0oY29udHJvbGxlciwgY2h1bmspIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtUHJvbWlzZSA9IGNvbnRyb2xsZXIuX3RyYW5zZm9ybUFsZ29yaXRobShjaHVuayk7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aCh0cmFuc2Zvcm1Qcm9taXNlLCB1bmRlZmluZWQsIHIgPT4ge1xuICAgICAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3IoY29udHJvbGxlci5fY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbSwgcik7XG4gICAgICAgICAgICB0aHJvdyByO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJUZXJtaW5hdGUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtO1xuICAgICAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSBzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShyZWFkYWJsZUNvbnRyb2xsZXIpO1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoJ1RyYW5zZm9ybVN0cmVhbSB0ZXJtaW5hdGVkJyk7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbUVycm9yV3JpdGFibGVBbmRVbmJsb2NrV3JpdGUoc3RyZWFtLCBlcnJvcik7XG4gICAgfVxuICAgIC8vIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rIEFsZ29yaXRobXNcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua1dyaXRlQWxnb3JpdGhtKHN0cmVhbSwgY2h1bmspIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgaWYgKHN0cmVhbS5fYmFja3ByZXNzdXJlKSB7XG4gICAgICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlID0gc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVByb21pc2VXaXRoKGJhY2twcmVzc3VyZUNoYW5nZVByb21pc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3cml0YWJsZSA9IHN0cmVhbS5fd3JpdGFibGU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3cml0YWJsZS5fc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnZXJyb3JpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHdyaXRhYmxlLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyUGVyZm9ybVRyYW5zZm9ybShjb250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQZXJmb3JtVHJhbnNmb3JtKGNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNpbmtBYm9ydEFsZ29yaXRobShzdHJlYW0sIHJlYXNvbikge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gc3RyZWFtLl90cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fZmluaXNoUHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5fZmluaXNoUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdHJlYW0uX3JlYWRhYmxlIGNhbm5vdCBjaGFuZ2UgYWZ0ZXIgY29uc3RydWN0aW9uLCBzbyBjYWNoaW5nIGl0IGFjcm9zcyBhIGNhbGwgdG8gdXNlciBjb2RlIGlzIHNhZmUuXG4gICAgICAgIGNvbnN0IHJlYWRhYmxlID0gc3RyZWFtLl9yZWFkYWJsZTtcbiAgICAgICAgLy8gQXNzaWduIHRoZSBfZmluaXNoUHJvbWlzZSBub3cgc28gdGhhdCBpZiBfY2FuY2VsQWxnb3JpdGhtIGNhbGxzIHJlYWRhYmxlLmNhbmNlbCgpIGludGVybmFsbHksXG4gICAgICAgIC8vIHdlIGRvbid0IHJ1biB0aGUgX2NhbmNlbEFsZ29yaXRobSBhZ2Fpbi5cbiAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2VfcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvbWlzZSA9IGNvbnRyb2xsZXIuX2NhbmNlbEFsZ29yaXRobShyZWFzb24pO1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgdXBvblByb21pc2UoY2FuY2VsUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYWRhYmxlLl9zdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdENvbnRyb2xsZXJGaW5pc2hQcm9taXNlUmVqZWN0KGNvbnRyb2xsZXIsIHJlYWRhYmxlLl9zdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IocmVhZGFibGUuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29udHJvbGxlckZpbmlzaFByb21pc2VSZXNvbHZlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIHIgPT4ge1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKHJlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHIpO1xuICAgICAgICAgICAgZGVmYXVsdENvbnRyb2xsZXJGaW5pc2hQcm9taXNlUmVqZWN0KGNvbnRyb2xsZXIsIHIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fZmluaXNoUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNpbmtDbG9zZUFsZ29yaXRobShzdHJlYW0pIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RyZWFtLl9yZWFkYWJsZSBjYW5ub3QgY2hhbmdlIGFmdGVyIGNvbnN0cnVjdGlvbiwgc28gY2FjaGluZyBpdCBhY3Jvc3MgYSBjYWxsIHRvIHVzZXIgY29kZSBpcyBzYWZlLlxuICAgICAgICBjb25zdCByZWFkYWJsZSA9IHN0cmVhbS5fcmVhZGFibGU7XG4gICAgICAgIC8vIEFzc2lnbiB0aGUgX2ZpbmlzaFByb21pc2Ugbm93IHNvIHRoYXQgaWYgX2ZsdXNoQWxnb3JpdGhtIGNhbGxzIHJlYWRhYmxlLmNhbmNlbCgpIGludGVybmFsbHksXG4gICAgICAgIC8vIHdlIGRvbid0IGFsc28gcnVuIHRoZSBfY2FuY2VsQWxnb3JpdGhtLlxuICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmbHVzaFByb21pc2UgPSBjb250cm9sbGVyLl9mbHVzaEFsZ29yaXRobSgpO1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgdXBvblByb21pc2UoZmx1c2hQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZGFibGUuX3N0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29udHJvbGxlckZpbmlzaFByb21pc2VSZWplY3QoY29udHJvbGxlciwgcmVhZGFibGUuX3N0b3JlZEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShyZWFkYWJsZS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29udHJvbGxlckZpbmlzaFByb21pc2VSZXNvbHZlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIHIgPT4ge1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKHJlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHIpO1xuICAgICAgICAgICAgZGVmYXVsdENvbnRyb2xsZXJGaW5pc2hQcm9taXNlUmVqZWN0KGNvbnRyb2xsZXIsIHIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fZmluaXNoUHJvbWlzZTtcbiAgICB9XG4gICAgLy8gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZSBBbGdvcml0aG1zXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZVB1bGxBbGdvcml0aG0oc3RyZWFtKSB7XG4gICAgICAgIC8vIEludmFyaWFudC4gRW5mb3JjZWQgYnkgdGhlIHByb21pc2VzIHJldHVybmVkIGJ5IHN0YXJ0KCkgYW5kIHB1bGwoKS5cbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgZmFsc2UpO1xuICAgICAgICAvLyBQcmV2ZW50IHRoZSBuZXh0IHB1bGwoKSBjYWxsIHVudGlsIHRoZXJlIGlzIGJhY2twcmVzc3VyZS5cbiAgICAgICAgcmV0dXJuIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZUNhbmNlbEFsZ29yaXRobShzdHJlYW0sIHJlYXNvbikge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gc3RyZWFtLl90cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fZmluaXNoUHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5fZmluaXNoUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdHJlYW0uX3dyaXRhYmxlIGNhbm5vdCBjaGFuZ2UgYWZ0ZXIgY29uc3RydWN0aW9uLCBzbyBjYWNoaW5nIGl0IGFjcm9zcyBhIGNhbGwgdG8gdXNlciBjb2RlIGlzIHNhZmUuXG4gICAgICAgIGNvbnN0IHdyaXRhYmxlID0gc3RyZWFtLl93cml0YWJsZTtcbiAgICAgICAgLy8gQXNzaWduIHRoZSBfZmluaXNoUHJvbWlzZSBub3cgc28gdGhhdCBpZiBfZmx1c2hBbGdvcml0aG0gY2FsbHMgd3JpdGFibGUuYWJvcnQoKSBvclxuICAgICAgICAvLyB3cml0YWJsZS5jYW5jZWwoKSBpbnRlcm5hbGx5LCB3ZSBkb24ndCBydW4gdGhlIF9jYW5jZWxBbGdvcml0aG0gYWdhaW4sIG9yIGFsc28gcnVuIHRoZVxuICAgICAgICAvLyBfZmx1c2hBbGdvcml0aG0uXG4gICAgICAgIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2VfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb21pc2UgPSBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0ocmVhc29uKTtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIHVwb25Qcm9taXNlKGNhbmNlbFByb21pc2UsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3cml0YWJsZS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRDb250cm9sbGVyRmluaXNoUHJvbWlzZVJlamVjdChjb250cm9sbGVyLCB3cml0YWJsZS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQod3JpdGFibGUuX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlciwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1VbmJsb2NrV3JpdGUoc3RyZWFtKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29udHJvbGxlckZpbmlzaFByb21pc2VSZXNvbHZlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIHIgPT4ge1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQod3JpdGFibGUuX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlciwgcik7XG4gICAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1VbmJsb2NrV3JpdGUoc3RyZWFtKTtcbiAgICAgICAgICAgIGRlZmF1bHRDb250cm9sbGVyRmluaXNoUHJvbWlzZVJlamVjdChjb250cm9sbGVyLCByKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2U7XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlci5cbiAgICBmdW5jdGlvbiBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyYCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyRmluaXNoUHJvbWlzZVJlc29sdmUoY29udHJvbGxlcikge1xuICAgICAgICBpZiAoY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZXNvbHZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlX3Jlc29sdmUoKTtcbiAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250cm9sbGVyLl9maW5pc2hQcm9taXNlX3JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbnRyb2xsZXJGaW5pc2hQcm9taXNlUmVqZWN0KGNvbnRyb2xsZXIsIHJlYXNvbikge1xuICAgICAgICBpZiAoY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZWplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUoY29udHJvbGxlci5fZmluaXNoUHJvbWlzZSk7XG4gICAgICAgIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2VfcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIGNvbnRyb2xsZXIuX2ZpbmlzaFByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29udHJvbGxlci5fZmluaXNoUHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBUcmFuc2Zvcm1TdHJlYW0uXG4gICAgZnVuY3Rpb24gc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBUcmFuc2Zvcm1TdHJlYW0ucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFRyYW5zZm9ybVN0cmVhbWApO1xuICAgIH1cblxuICAgIGV4cG9ydHMuQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSA9IEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3k7XG4gICAgZXhwb3J0cy5Db3VudFF1ZXVpbmdTdHJhdGVneSA9IENvdW50UXVldWluZ1N0cmF0ZWd5O1xuICAgIGV4cG9ydHMuUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciA9IFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgZXhwb3J0cy5SZWFkYWJsZVN0cmVhbSA9IFJlYWRhYmxlU3RyZWFtO1xuICAgIGV4cG9ydHMuUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyID0gUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyO1xuICAgIGV4cG9ydHMuUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCA9IFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3Q7XG4gICAgZXhwb3J0cy5SZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyID0gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICBleHBvcnRzLlJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlciA9IFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcjtcbiAgICBleHBvcnRzLlRyYW5zZm9ybVN0cmVhbSA9IFRyYW5zZm9ybVN0cmVhbTtcbiAgICBleHBvcnRzLlRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyID0gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXI7XG4gICAgZXhwb3J0cy5Xcml0YWJsZVN0cmVhbSA9IFdyaXRhYmxlU3RyZWFtO1xuICAgIGV4cG9ydHMuV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlciA9IFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXI7XG4gICAgZXhwb3J0cy5Xcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXI7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmVzMjAxOC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOmJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOmZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6aHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOmh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6bmV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6cGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOnByb2Nlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZTpzdHJlYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZTpzdHJlYW0vd2ViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6dXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6dXRpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOnpsaWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid29ya2VyX3RocmVhZHNcIik7IiwiLyogYzggaWdub3JlIHN0YXJ0ICovXG4vLyA2NCBLaUIgKHNhbWUgc2l6ZSBjaHJvbWUgc2xpY2UgdGhlaXJzIGJsb2IgaW50byBVaW50OGFycmF5J3MpXG5jb25zdCBQT09MX1NJWkUgPSA2NTUzNlxuXG5pZiAoIWdsb2JhbFRoaXMuUmVhZGFibGVTdHJlYW0pIHtcbiAgLy8gYG5vZGU6c3RyZWFtL3dlYmAgZ290IGludHJvZHVjZWQgaW4gdjE2LjUuMCBhcyBleHBlcmltZW50YWxcbiAgLy8gYW5kIGl0J3MgcHJlZmVycmVkIG92ZXIgdGhlIHBvbHlmaWxsZWQgdmVyc2lvbi4gU28gd2UgYWxzb1xuICAvLyBzdXBwcmVzcyB0aGUgd2FybmluZyB0aGF0IGdldHMgZW1pdHRlZCBieSBOb2RlSlMgZm9yIHVzaW5nIGl0LlxuICB0cnkge1xuICAgIGNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKCdub2RlOnByb2Nlc3MnKVxuICAgIGNvbnN0IHsgZW1pdFdhcm5pbmcgfSA9IHByb2Nlc3NcbiAgICB0cnkge1xuICAgICAgcHJvY2Vzcy5lbWl0V2FybmluZyA9ICgpID0+IHt9XG4gICAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHJlcXVpcmUoJ25vZGU6c3RyZWFtL3dlYicpKVxuICAgICAgcHJvY2Vzcy5lbWl0V2FybmluZyA9IGVtaXRXYXJuaW5nXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb2Nlc3MuZW1pdFdhcm5pbmcgPSBlbWl0V2FybmluZ1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gcG9seWZpbGwgaW1wbGVtZW50YXRpb25cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHJlcXVpcmUoJ3dlYi1zdHJlYW1zLXBvbHlmaWxsL2Rpc3QvcG9ueWZpbGwuZXMyMDE4LmpzJykpXG4gIH1cbn1cblxudHJ5IHtcbiAgLy8gRG9uJ3QgdXNlIG5vZGU6IHByZWZpeCBmb3IgdGhpcywgcmVxdWlyZStub2RlOiBpcyBub3Qgc3VwcG9ydGVkIHVudGlsIG5vZGUgdjE0LjE0XG4gIC8vIE9ubHkgYGltcG9ydCgpYCBjYW4gdXNlIHByZWZpeCBpbiAxMi4yMCBhbmQgbGF0ZXJcbiAgY29uc3QgeyBCbG9iIH0gPSByZXF1aXJlKCdidWZmZXInKVxuICBpZiAoQmxvYiAmJiAhQmxvYi5wcm90b3R5cGUuc3RyZWFtKSB7XG4gICAgQmxvYi5wcm90b3R5cGUuc3RyZWFtID0gZnVuY3Rpb24gbmFtZSAocGFyYW1zKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSAwXG4gICAgICBjb25zdCBibG9iID0gdGhpc1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICAgICAgdHlwZTogJ2J5dGVzJyxcbiAgICAgICAgYXN5bmMgcHVsbCAoY3RybCkge1xuICAgICAgICAgIGNvbnN0IGNodW5rID0gYmxvYi5zbGljZShwb3NpdGlvbiwgTWF0aC5taW4oYmxvYi5zaXplLCBwb3NpdGlvbiArIFBPT0xfU0laRSkpXG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgY2h1bmsuYXJyYXlCdWZmZXIoKVxuICAgICAgICAgIHBvc2l0aW9uICs9IGJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICAgICAgY3RybC5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpXG5cbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09IGJsb2Iuc2l6ZSkge1xuICAgICAgICAgICAgY3RybC5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZXJyb3IpIHt9XG4vKiBjOCBpZ25vcmUgZW5kICovXG4iLCIvKipcbiAqIFJldHVybnMgYSBgQnVmZmVyYCBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBkYXRhIFVSSSBgdXJpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpIERhdGEgVVJJIHRvIHR1cm4gaW50byBhIEJ1ZmZlciBpbnN0YW5jZVxuICogQHJldHVybnMge0J1ZmZlcn0gQnVmZmVyIGluc3RhbmNlIGZyb20gRGF0YSBVUklcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVXJpVG9CdWZmZXIodXJpKSB7XG4gICAgaWYgKCEvXmRhdGE6L2kudGVzdCh1cmkpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B1cmlgIGRvZXMgbm90IGFwcGVhciB0byBiZSBhIERhdGEgVVJJIChtdXN0IGJlZ2luIHdpdGggXCJkYXRhOlwiKScpO1xuICAgIH1cbiAgICAvLyBzdHJpcCBuZXdsaW5lc1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXHI/XFxuL2csICcnKTtcbiAgICAvLyBzcGxpdCB0aGUgVVJJIHVwIGludG8gdGhlIFwibWV0YWRhdGFcIiBhbmQgdGhlIFwiZGF0YVwiIHBvcnRpb25zXG4gICAgY29uc3QgZmlyc3RDb21tYSA9IHVyaS5pbmRleE9mKCcsJyk7XG4gICAgaWYgKGZpcnN0Q29tbWEgPT09IC0xIHx8IGZpcnN0Q29tbWEgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYWxmb3JtZWQgZGF0YTogVVJJJyk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSB0aGUgXCJkYXRhOlwiIHNjaGVtZSBhbmQgcGFyc2UgdGhlIG1ldGFkYXRhXG4gICAgY29uc3QgbWV0YSA9IHVyaS5zdWJzdHJpbmcoNSwgZmlyc3RDb21tYSkuc3BsaXQoJzsnKTtcbiAgICBsZXQgY2hhcnNldCA9ICcnO1xuICAgIGxldCBiYXNlNjQgPSBmYWxzZTtcbiAgICBjb25zdCB0eXBlID0gbWV0YVswXSB8fCAndGV4dC9wbGFpbic7XG4gICAgbGV0IHR5cGVGdWxsID0gdHlwZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1ldGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1ldGFbaV0gPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgICBiYXNlNjQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1ldGFbaV0pIHtcbiAgICAgICAgICAgIHR5cGVGdWxsICs9IGA7JHttZXRhW2ldfWA7XG4gICAgICAgICAgICBpZiAobWV0YVtpXS5pbmRleE9mKCdjaGFyc2V0PScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2hhcnNldCA9IG1ldGFbaV0uc3Vic3RyaW5nKDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlZmF1bHRzIHRvIFVTLUFTQ0lJIG9ubHkgaWYgdHlwZSBpcyBub3QgcHJvdmlkZWRcbiAgICBpZiAoIW1ldGFbMF0gJiYgIWNoYXJzZXQubGVuZ3RoKSB7XG4gICAgICAgIHR5cGVGdWxsICs9ICc7Y2hhcnNldD1VUy1BU0NJSSc7XG4gICAgICAgIGNoYXJzZXQgPSAnVVMtQVNDSUknO1xuICAgIH1cbiAgICAvLyBnZXQgdGhlIGVuY29kZWQgZGF0YSBwb3J0aW9uIGFuZCBkZWNvZGUgVVJJLWVuY29kZWQgY2hhcnNcbiAgICBjb25zdCBlbmNvZGluZyA9IGJhc2U2NCA/ICdiYXNlNjQnIDogJ2FzY2lpJztcbiAgICBjb25zdCBkYXRhID0gdW5lc2NhcGUodXJpLnN1YnN0cmluZyhmaXJzdENvbW1hICsgMSkpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGRhdGEsIGVuY29kaW5nKTtcbiAgICAvLyBzZXQgYC50eXBlYCBhbmQgYC50eXBlRnVsbGAgcHJvcGVydGllcyB0byBNSU1FIHR5cGVcbiAgICBidWZmZXIudHlwZSA9IHR5cGU7XG4gICAgYnVmZmVyLnR5cGVGdWxsID0gdHlwZUZ1bGw7XG4gICAgLy8gc2V0IHRoZSBgLmNoYXJzZXRgIHByb3BlcnR5XG4gICAgYnVmZmVyLmNoYXJzZXQgPSBjaGFyc2V0O1xuICAgIHJldHVybiBidWZmZXI7XG59XG5leHBvcnQgZGVmYXVsdCBkYXRhVXJpVG9CdWZmZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgQmxvYiBmcm9tICcuL2luZGV4LmpzJ1xuXG5jb25zdCBfRmlsZSA9IGNsYXNzIEZpbGUgZXh0ZW5kcyBCbG9iIHtcbiAgI2xhc3RNb2RpZmllZCA9IDBcbiAgI25hbWUgPSAnJ1xuXG4gIC8qKlxuICAgKiBAcGFyYW0geypbXX0gZmlsZUJpdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lXG4gICAqIEBwYXJhbSB7e2xhc3RNb2RpZmllZD86IG51bWJlciwgdHlwZT86IHN0cmluZ319IG9wdGlvbnNcbiAgICovLy8gQHRzLWlnbm9yZVxuICBjb25zdHJ1Y3RvciAoZmlsZUJpdHMsIGZpbGVOYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEZhaWxlZCB0byBjb25zdHJ1Y3QgJ0ZpbGUnOiAyIGFyZ3VtZW50cyByZXF1aXJlZCwgYnV0IG9ubHkgJHthcmd1bWVudHMubGVuZ3RofSBwcmVzZW50LmApXG4gICAgfVxuICAgIHN1cGVyKGZpbGVCaXRzLCBvcHRpb25zKVxuXG4gICAgaWYgKG9wdGlvbnMgPT09IG51bGwpIG9wdGlvbnMgPSB7fVxuXG4gICAgLy8gU2ltdWxhdGUgV2ViSURMIHR5cGUgY2FzdGluZyBmb3IgTmFOIHZhbHVlIGluIGxhc3RNb2RpZmllZCBvcHRpb24uXG4gICAgY29uc3QgbGFzdE1vZGlmaWVkID0gb3B0aW9ucy5sYXN0TW9kaWZpZWQgPT09IHVuZGVmaW5lZCA/IERhdGUubm93KCkgOiBOdW1iZXIob3B0aW9ucy5sYXN0TW9kaWZpZWQpXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4obGFzdE1vZGlmaWVkKSkge1xuICAgICAgdGhpcy4jbGFzdE1vZGlmaWVkID0gbGFzdE1vZGlmaWVkXG4gICAgfVxuXG4gICAgdGhpcy4jbmFtZSA9IFN0cmluZyhmaWxlTmFtZSlcbiAgfVxuXG4gIGdldCBuYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZVxuICB9XG5cbiAgZ2V0IGxhc3RNb2RpZmllZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xhc3RNb2RpZmllZFxuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddICgpIHtcbiAgICByZXR1cm4gJ0ZpbGUnXG4gIH1cblxuICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0gKG9iamVjdCkge1xuICAgIHJldHVybiAhIW9iamVjdCAmJiBvYmplY3QgaW5zdGFuY2VvZiBCbG9iICYmXG4gICAgICAvXihGaWxlKSQvLnRlc3Qob2JqZWN0W1N5bWJvbC50b1N0cmluZ1RhZ10pXG4gIH1cbn1cblxuLyoqIEB0eXBlIHt0eXBlb2YgZ2xvYmFsVGhpcy5GaWxlfSAqLy8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBGaWxlID0gX0ZpbGVcbmV4cG9ydCBkZWZhdWx0IEZpbGVcbiIsImltcG9ydCB7IHN0YXRTeW5jLCBjcmVhdGVSZWFkU3RyZWFtLCBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBET01FeGNlcHRpb24gZnJvbSAnbm9kZS1kb21leGNlcHRpb24nXG5cbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcydcbmltcG9ydCBCbG9iIGZyb20gJy4vaW5kZXguanMnXG5cbmNvbnN0IHsgc3RhdCB9ID0gZnNcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBmaWxlcGF0aCBvbiB0aGUgZGlza1xuICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSBtaW1ldHlwZSB0byB1c2VcbiAqL1xuY29uc3QgYmxvYkZyb21TeW5jID0gKHBhdGgsIHR5cGUpID0+IGZyb21CbG9iKHN0YXRTeW5jKHBhdGgpLCBwYXRoLCB0eXBlKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIGZpbGVwYXRoIG9uIHRoZSBkaXNrXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIG1pbWV0eXBlIHRvIHVzZVxuICogQHJldHVybnMge1Byb21pc2U8QmxvYj59XG4gKi9cbmNvbnN0IGJsb2JGcm9tID0gKHBhdGgsIHR5cGUpID0+IHN0YXQocGF0aCkudGhlbihzdGF0ID0+IGZyb21CbG9iKHN0YXQsIHBhdGgsIHR5cGUpKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIGZpbGVwYXRoIG9uIHRoZSBkaXNrXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIG1pbWV0eXBlIHRvIHVzZVxuICogQHJldHVybnMge1Byb21pc2U8RmlsZT59XG4gKi9cbmNvbnN0IGZpbGVGcm9tID0gKHBhdGgsIHR5cGUpID0+IHN0YXQocGF0aCkudGhlbihzdGF0ID0+IGZyb21GaWxlKHN0YXQsIHBhdGgsIHR5cGUpKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIGZpbGVwYXRoIG9uIHRoZSBkaXNrXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIG1pbWV0eXBlIHRvIHVzZVxuICovXG5jb25zdCBmaWxlRnJvbVN5bmMgPSAocGF0aCwgdHlwZSkgPT4gZnJvbUZpbGUoc3RhdFN5bmMocGF0aCksIHBhdGgsIHR5cGUpXG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGZyb21CbG9iID0gKHN0YXQsIHBhdGgsIHR5cGUgPSAnJykgPT4gbmV3IEJsb2IoW25ldyBCbG9iRGF0YUl0ZW0oe1xuICBwYXRoLFxuICBzaXplOiBzdGF0LnNpemUsXG4gIGxhc3RNb2RpZmllZDogc3RhdC5tdGltZU1zLFxuICBzdGFydDogMFxufSldLCB7IHR5cGUgfSlcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgZnJvbUZpbGUgPSAoc3RhdCwgcGF0aCwgdHlwZSA9ICcnKSA9PiBuZXcgRmlsZShbbmV3IEJsb2JEYXRhSXRlbSh7XG4gIHBhdGgsXG4gIHNpemU6IHN0YXQuc2l6ZSxcbiAgbGFzdE1vZGlmaWVkOiBzdGF0Lm10aW1lTXMsXG4gIHN0YXJ0OiAwXG59KV0sIGJhc2VuYW1lKHBhdGgpLCB7IHR5cGUsIGxhc3RNb2RpZmllZDogc3RhdC5tdGltZU1zIH0pXG5cbi8qKlxuICogVGhpcyBpcyBhIGJsb2IgYmFja2VkIHVwIGJ5IGEgZmlsZSBvbiB0aGUgZGlza1xuICogd2l0aCBtaW5pdW0gcmVxdWlyZW1lbnQuIEl0cyB3cmFwcGVkIGFyb3VuZCBhIEJsb2IgYXMgYSBibG9iUGFydFxuICogc28geW91IGhhdmUgbm8gZGlyZWN0IGFjY2VzcyB0byB0aGlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEJsb2JEYXRhSXRlbSB7XG4gICNwYXRoXG4gICNzdGFydFxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy4jcGF0aCA9IG9wdGlvbnMucGF0aFxuICAgIHRoaXMuI3N0YXJ0ID0gb3B0aW9ucy5zdGFydFxuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZVxuICAgIHRoaXMubGFzdE1vZGlmaWVkID0gb3B0aW9ucy5sYXN0TW9kaWZpZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBTbGljaW5nIGFyZ3VtZW50cyBpcyBmaXJzdCB2YWxpZGF0ZWQgYW5kIGZvcm1hdHRlZFxuICAgKiB0byBub3QgYmUgb3V0IG9mIHJhbmdlIGJ5IEJsb2IucHJvdG90eXBlLnNsaWNlXG4gICAqL1xuICBzbGljZSAoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgQmxvYkRhdGFJdGVtKHtcbiAgICAgIHBhdGg6IHRoaXMuI3BhdGgsXG4gICAgICBsYXN0TW9kaWZpZWQ6IHRoaXMubGFzdE1vZGlmaWVkLFxuICAgICAgc2l6ZTogZW5kIC0gc3RhcnQsXG4gICAgICBzdGFydDogdGhpcy4jc3RhcnQgKyBzdGFydFxuICAgIH0pXG4gIH1cblxuICBhc3luYyAqIHN0cmVhbSAoKSB7XG4gICAgY29uc3QgeyBtdGltZU1zIH0gPSBhd2FpdCBzdGF0KHRoaXMuI3BhdGgpXG4gICAgaWYgKG10aW1lTXMgPiB0aGlzLmxhc3RNb2RpZmllZCkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVGhlIHJlcXVlc3RlZCBmaWxlIGNvdWxkIG5vdCBiZSByZWFkLCB0eXBpY2FsbHkgZHVlIHRvIHBlcm1pc3Npb24gcHJvYmxlbXMgdGhhdCBoYXZlIG9jY3VycmVkIGFmdGVyIGEgcmVmZXJlbmNlIHRvIGEgZmlsZSB3YXMgYWNxdWlyZWQuJywgJ05vdFJlYWRhYmxlRXJyb3InKVxuICAgIH1cbiAgICB5aWVsZCAqIGNyZWF0ZVJlYWRTdHJlYW0odGhpcy4jcGF0aCwge1xuICAgICAgc3RhcnQ6IHRoaXMuI3N0YXJ0LFxuICAgICAgZW5kOiB0aGlzLiNzdGFydCArIHRoaXMuc2l6ZSAtIDFcbiAgICB9KVxuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddICgpIHtcbiAgICByZXR1cm4gJ0Jsb2InXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvYkZyb21TeW5jXG5leHBvcnQgeyBGaWxlLCBCbG9iLCBibG9iRnJvbSwgYmxvYkZyb21TeW5jLCBmaWxlRnJvbSwgZmlsZUZyb21TeW5jIH1cbiIsIi8qISBmZXRjaC1ibG9iLiBNSVQgTGljZW5zZS4gSmltbXkgV8OkcnRpbmcgPGh0dHBzOi8vamltbXkud2FydGluZy5zZS9vcGVuc291cmNlPiAqL1xuXG4vLyBUT0RPIChqaW1teXdhcnRpbmcpOiBpbiB0aGUgZmVhdHVyZSB1c2UgY29uZGl0aW9uYWwgbG9hZGluZyB3aXRoIHRvcCBsZXZlbCBhd2FpdCAocmVxdWlyZXMgMTQueClcbi8vIE5vZGUgaGFzIHJlY2VudGx5IGFkZGVkIHdoYXR3ZyBzdHJlYW0gaW50byBjb3JlXG5cbmltcG9ydCAnLi9zdHJlYW1zLmNqcydcblxuLy8gNjQgS2lCIChzYW1lIHNpemUgY2hyb21lIHNsaWNlIHRoZWlycyBibG9iIGludG8gVWludDhhcnJheSdzKVxuY29uc3QgUE9PTF9TSVpFID0gNjU1MzZcblxuLyoqIEBwYXJhbSB7KEJsb2IgfCBVaW50OEFycmF5KVtdfSBwYXJ0cyAqL1xuYXN5bmMgZnVuY3Rpb24gKiB0b0l0ZXJhdG9yIChwYXJ0cywgY2xvbmUgPSB0cnVlKSB7XG4gIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgIGlmICgnc3RyZWFtJyBpbiBwYXJ0KSB7XG4gICAgICB5aWVsZCAqICgvKiogQHR5cGUge0FzeW5jSXRlcmFibGVJdGVyYXRvcjxVaW50OEFycmF5Pn0gKi8gKHBhcnQuc3RyZWFtKCkpKVxuICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHBhcnQpKSB7XG4gICAgICBpZiAoY2xvbmUpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gcGFydC5ieXRlT2Zmc2V0XG4gICAgICAgIGNvbnN0IGVuZCA9IHBhcnQuYnl0ZU9mZnNldCArIHBhcnQuYnl0ZUxlbmd0aFxuICAgICAgICB3aGlsZSAocG9zaXRpb24gIT09IGVuZCkge1xuICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihlbmQgLSBwb3NpdGlvbiwgUE9PTF9TSVpFKVxuICAgICAgICAgIGNvbnN0IGNodW5rID0gcGFydC5idWZmZXIuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgc2l6ZSlcbiAgICAgICAgICBwb3NpdGlvbiArPSBjaHVuay5ieXRlTGVuZ3RoXG4gICAgICAgICAgeWllbGQgbmV3IFVpbnQ4QXJyYXkoY2h1bmspXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIHBhcnRcbiAgICAgIH1cbiAgICAvKiBjOCBpZ25vcmUgbmV4dCAxMCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgYmxvYnMgdGhhdCBoYXZlIGFycmF5QnVmZmVyIGJ1dCBubyBzdHJlYW0gbWV0aG9kIChub2RlcyBidWZmZXIuQmxvYilcbiAgICAgIGxldCBwb3NpdGlvbiA9IDAsIGIgPSAoLyoqIEB0eXBlIHtCbG9ifSAqLyAocGFydCkpXG4gICAgICB3aGlsZSAocG9zaXRpb24gIT09IGIuc2l6ZSkge1xuICAgICAgICBjb25zdCBjaHVuayA9IGIuc2xpY2UocG9zaXRpb24sIE1hdGgubWluKGIuc2l6ZSwgcG9zaXRpb24gKyBQT09MX1NJWkUpKVxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBjaHVuay5hcnJheUJ1ZmZlcigpXG4gICAgICAgIHBvc2l0aW9uICs9IGJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICAgIHlpZWxkIG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgX0Jsb2IgPSBjbGFzcyBCbG9iIHtcbiAgLyoqIEB0eXBlIHtBcnJheS48KEJsb2J8VWludDhBcnJheSk+fSAqL1xuICAjcGFydHMgPSBbXVxuICAjdHlwZSA9ICcnXG4gICNzaXplID0gMFxuICAjZW5kaW5ncyA9ICd0cmFuc3BhcmVudCdcblxuICAvKipcbiAgICogVGhlIEJsb2IoKSBjb25zdHJ1Y3RvciByZXR1cm5zIGEgbmV3IEJsb2Igb2JqZWN0LiBUaGUgY29udGVudFxuICAgKiBvZiB0aGUgYmxvYiBjb25zaXN0cyBvZiB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgdmFsdWVzIGdpdmVuXG4gICAqIGluIHRoZSBwYXJhbWV0ZXIgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gYmxvYlBhcnRzXG4gICAqIEBwYXJhbSB7eyB0eXBlPzogc3RyaW5nLCBlbmRpbmdzPzogc3RyaW5nIH19IFtvcHRpb25zXVxuICAgKi9cbiAgY29uc3RydWN0b3IgKGJsb2JQYXJ0cyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGJsb2JQYXJ0cyAhPT0gJ29iamVjdCcgfHwgYmxvYlBhcnRzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ0Jsb2JcXCc6IFRoZSBwcm92aWRlZCB2YWx1ZSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgc2VxdWVuY2UuJylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJsb2JQYXJ0c1tTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ0Jsb2JcXCc6IFRoZSBvYmplY3QgbXVzdCBoYXZlIGEgY2FsbGFibGUgQEBpdGVyYXRvciBwcm9wZXJ0eS4nKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnQmxvYlxcJzogcGFyYW1ldGVyIDIgY2Fubm90IGNvbnZlcnQgdG8gZGljdGlvbmFyeS4nKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSBudWxsKSBvcHRpb25zID0ge31cblxuICAgIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBibG9iUGFydHMpIHtcbiAgICAgIGxldCBwYXJ0XG4gICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG4gICAgICAgIHBhcnQgPSBuZXcgVWludDhBcnJheShlbGVtZW50LmJ1ZmZlci5zbGljZShlbGVtZW50LmJ5dGVPZmZzZXQsIGVsZW1lbnQuYnl0ZU9mZnNldCArIGVsZW1lbnQuYnl0ZUxlbmd0aCkpXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBwYXJ0ID0gbmV3IFVpbnQ4QXJyYXkoZWxlbWVudC5zbGljZSgwKSlcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgcGFydCA9IGVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnQgPSBlbmNvZGVyLmVuY29kZShgJHtlbGVtZW50fWApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuI3NpemUgKz0gQXJyYXlCdWZmZXIuaXNWaWV3KHBhcnQpID8gcGFydC5ieXRlTGVuZ3RoIDogcGFydC5zaXplXG4gICAgICB0aGlzLiNwYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuXG4gICAgdGhpcy4jZW5kaW5ncyA9IGAke29wdGlvbnMuZW5kaW5ncyA9PT0gdW5kZWZpbmVkID8gJ3RyYW5zcGFyZW50JyA6IG9wdGlvbnMuZW5kaW5nc31gXG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcob3B0aW9ucy50eXBlKVxuICAgIHRoaXMuI3R5cGUgPSAvXltcXHgyMC1cXHg3RV0qJC8udGVzdCh0eXBlKSA/IHR5cGUgOiAnJ1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBCbG9iIGludGVyZmFjZSdzIHNpemUgcHJvcGVydHkgcmV0dXJucyB0aGVcbiAgICogc2l6ZSBvZiB0aGUgQmxvYiBpbiBieXRlcy5cbiAgICovXG4gIGdldCBzaXplICgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIHByb3BlcnR5IG9mIGEgQmxvYiBvYmplY3QgcmV0dXJucyB0aGUgTUlNRSB0eXBlIG9mIHRoZSBmaWxlLlxuICAgKi9cbiAgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlXG4gIH1cblxuICAvKipcbiAgICogVGhlIHRleHQoKSBtZXRob2QgaW4gdGhlIEJsb2IgaW50ZXJmYWNlIHJldHVybnMgYSBQcm9taXNlXG4gICAqIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0cmluZyBjb250YWluaW5nIHRoZSBjb250ZW50cyBvZlxuICAgKiB0aGUgYmxvYiwgaW50ZXJwcmV0ZWQgYXMgVVRGLTguXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGFzeW5jIHRleHQgKCkge1xuICAgIC8vIE1vcmUgb3B0aW1pemVkIHRoYW4gdXNpbmcgdGhpcy5hcnJheUJ1ZmZlcigpXG4gICAgLy8gdGhhdCByZXF1aXJlcyB0d2ljZSBhcyBtdWNoIHJhbVxuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICAgIGxldCBzdHIgPSAnJ1xuICAgIGZvciBhd2FpdCAoY29uc3QgcGFydCBvZiB0b0l0ZXJhdG9yKHRoaXMuI3BhcnRzLCBmYWxzZSkpIHtcbiAgICAgIHN0ciArPSBkZWNvZGVyLmRlY29kZShwYXJ0LCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgIH1cbiAgICAvLyBSZW1haW5pbmdcbiAgICBzdHIgKz0gZGVjb2Rlci5kZWNvZGUoKVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJyYXlCdWZmZXIoKSBtZXRob2QgaW4gdGhlIEJsb2IgaW50ZXJmYWNlIHJldHVybnMgYVxuICAgKiBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGJsb2IgYXNcbiAgICogYmluYXJ5IGRhdGEgY29udGFpbmVkIGluIGFuIEFycmF5QnVmZmVyLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cbiAgICovXG4gIGFzeW5jIGFycmF5QnVmZmVyICgpIHtcbiAgICAvLyBFYXNpZXIgd2F5Li4uIEp1c3QgYSB1bm5lY2Vzc2FyeSBvdmVyaGVhZFxuICAgIC8vIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheSh0aGlzLnNpemUpO1xuICAgIC8vIGF3YWl0IHRoaXMuc3RyZWFtKCkuZ2V0UmVhZGVyKHttb2RlOiAnYnlvYid9KS5yZWFkKHZpZXcpO1xuICAgIC8vIHJldHVybiB2aWV3LmJ1ZmZlcjtcblxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLnNpemUpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHRvSXRlcmF0b3IodGhpcy4jcGFydHMsIGZhbHNlKSkge1xuICAgICAgZGF0YS5zZXQoY2h1bmssIG9mZnNldClcbiAgICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5idWZmZXJcbiAgfVxuXG4gIHN0cmVhbSAoKSB7XG4gICAgY29uc3QgaXQgPSB0b0l0ZXJhdG9yKHRoaXMuI3BhcnRzLCB0cnVlKVxuXG4gICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzLlJlYWRhYmxlU3RyZWFtKHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHR5cGU6ICdieXRlcycsXG4gICAgICBhc3luYyBwdWxsIChjdHJsKSB7XG4gICAgICAgIGNvbnN0IGNodW5rID0gYXdhaXQgaXQubmV4dCgpXG4gICAgICAgIGNodW5rLmRvbmUgPyBjdHJsLmNsb3NlKCkgOiBjdHJsLmVucXVldWUoY2h1bmsudmFsdWUpXG4gICAgICB9LFxuXG4gICAgICBhc3luYyBjYW5jZWwgKCkge1xuICAgICAgICBhd2FpdCBpdC5yZXR1cm4oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhlIEJsb2IgaW50ZXJmYWNlJ3Mgc2xpY2UoKSBtZXRob2QgY3JlYXRlcyBhbmQgcmV0dXJucyBhXG4gICAqIG5ldyBCbG9iIG9iamVjdCB3aGljaCBjb250YWlucyBkYXRhIGZyb20gYSBzdWJzZXQgb2YgdGhlXG4gICAqIGJsb2Igb24gd2hpY2ggaXQncyBjYWxsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRdXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdXG4gICAqL1xuICBzbGljZSAoc3RhcnQgPSAwLCBlbmQgPSB0aGlzLnNpemUsIHR5cGUgPSAnJykge1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpc1xuXG4gICAgbGV0IHJlbGF0aXZlU3RhcnQgPSBzdGFydCA8IDAgPyBNYXRoLm1heChzaXplICsgc3RhcnQsIDApIDogTWF0aC5taW4oc3RhcnQsIHNpemUpXG4gICAgbGV0IHJlbGF0aXZlRW5kID0gZW5kIDwgMCA/IE1hdGgubWF4KHNpemUgKyBlbmQsIDApIDogTWF0aC5taW4oZW5kLCBzaXplKVxuXG4gICAgY29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMClcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuI3BhcnRzXG4gICAgY29uc3QgYmxvYlBhcnRzID0gW11cbiAgICBsZXQgYWRkZWQgPSAwXG5cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIC8vIGRvbid0IGFkZCB0aGUgb3ZlcmZsb3cgdG8gbmV3IGJsb2JQYXJ0c1xuICAgICAgaWYgKGFkZGVkID49IHNwYW4pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2l6ZSA9IEFycmF5QnVmZmVyLmlzVmlldyhwYXJ0KSA/IHBhcnQuYnl0ZUxlbmd0aCA6IHBhcnQuc2l6ZVxuICAgICAgaWYgKHJlbGF0aXZlU3RhcnQgJiYgc2l6ZSA8PSByZWxhdGl2ZVN0YXJ0KSB7XG4gICAgICAgIC8vIFNraXAgdGhlIGJlZ2lubmluZyBhbmQgY2hhbmdlIHRoZSByZWxhdGl2ZVxuICAgICAgICAvLyBzdGFydCAmIGVuZCBwb3NpdGlvbiBhcyB3ZSBza2lwIHRoZSB1bndhbnRlZCBwYXJ0c1xuICAgICAgICByZWxhdGl2ZVN0YXJ0IC09IHNpemVcbiAgICAgICAgcmVsYXRpdmVFbmQgLT0gc2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNodW5rXG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcocGFydCkpIHtcbiAgICAgICAgICBjaHVuayA9IHBhcnQuc3ViYXJyYXkocmVsYXRpdmVTdGFydCwgTWF0aC5taW4oc2l6ZSwgcmVsYXRpdmVFbmQpKVxuICAgICAgICAgIGFkZGVkICs9IGNodW5rLmJ5dGVMZW5ndGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHVuayA9IHBhcnQuc2xpY2UocmVsYXRpdmVTdGFydCwgTWF0aC5taW4oc2l6ZSwgcmVsYXRpdmVFbmQpKVxuICAgICAgICAgIGFkZGVkICs9IGNodW5rLnNpemVcbiAgICAgICAgfVxuICAgICAgICByZWxhdGl2ZUVuZCAtPSBzaXplXG4gICAgICAgIGJsb2JQYXJ0cy5wdXNoKGNodW5rKVxuICAgICAgICByZWxhdGl2ZVN0YXJ0ID0gMCAvLyBBbGwgbmV4dCBzZXF1ZW50aWFsIHBhcnRzIHNob3VsZCBzdGFydCBhdCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtdLCB7IHR5cGU6IFN0cmluZyh0eXBlKS50b0xvd2VyQ2FzZSgpIH0pXG4gICAgYmxvYi4jc2l6ZSA9IHNwYW5cbiAgICBibG9iLiNwYXJ0cyA9IGJsb2JQYXJ0c1xuXG4gICAgcmV0dXJuIGJsb2JcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSAoKSB7XG4gICAgcmV0dXJuICdCbG9iJ1xuICB9XG5cbiAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdIChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgb2JqZWN0ICYmXG4gICAgICB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKFxuICAgICAgICB0eXBlb2Ygb2JqZWN0LnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqZWN0LmFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nXG4gICAgICApICYmXG4gICAgICAvXihCbG9ifEZpbGUpJC8udGVzdChvYmplY3RbU3ltYm9sLnRvU3RyaW5nVGFnXSlcbiAgICApXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX0Jsb2IucHJvdG90eXBlLCB7XG4gIHNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICB0eXBlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgc2xpY2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KVxuXG4vKiogQHR5cGUge3R5cGVvZiBnbG9iYWxUaGlzLkJsb2J9ICovXG5leHBvcnQgY29uc3QgQmxvYiA9IF9CbG9iXG5leHBvcnQgZGVmYXVsdCBCbG9iXG4iLCIvKiEgZm9ybWRhdGEtcG9seWZpbGwuIE1JVCBMaWNlbnNlLiBKaW1teSBXw6RydGluZyA8aHR0cHM6Ly9qaW1teS53YXJ0aW5nLnNlL29wZW5zb3VyY2U+ICovXG5cbmltcG9ydCBDIGZyb20gJ2ZldGNoLWJsb2InXG5pbXBvcnQgRiBmcm9tICdmZXRjaC1ibG9iL2ZpbGUuanMnXG5cbnZhciB7dG9TdHJpbmdUYWc6dCxpdGVyYXRvcjppLGhhc0luc3RhbmNlOmh9PVN5bWJvbCxcbnI9TWF0aC5yYW5kb20sXG5tPSdhcHBlbmQsc2V0LGdldCxnZXRBbGwsZGVsZXRlLGtleXMsdmFsdWVzLGVudHJpZXMsZm9yRWFjaCxjb25zdHJ1Y3Rvcicuc3BsaXQoJywnKSxcbmY9KGEsYixjKT0+KGErPScnLC9eKEJsb2J8RmlsZSkkLy50ZXN0KGIgJiYgYlt0XSk/WyhjPWMhPT12b2lkIDA/YysnJzpiW3RdPT0nRmlsZSc/Yi5uYW1lOidibG9iJyxhKSxiLm5hbWUhPT1jfHxiW3RdPT0nYmxvYic/bmV3IEYoW2JdLGMsYik6Yl06W2EsYisnJ10pLFxuZT0oYyxmKT0+KGY/YzpjLnJlcGxhY2UoL1xccj9cXG58XFxyL2csJ1xcclxcbicpKS5yZXBsYWNlKC9cXG4vZywnJTBBJykucmVwbGFjZSgvXFxyL2csJyUwRCcpLnJlcGxhY2UoL1wiL2csJyUyMicpLFxueD0obiwgYSwgZSk9PntpZihhLmxlbmd0aDxlKXt0aHJvdyBuZXcgVHlwZUVycm9yKGBGYWlsZWQgdG8gZXhlY3V0ZSAnJHtufScgb24gJ0Zvcm1EYXRhJzogJHtlfSBhcmd1bWVudHMgcmVxdWlyZWQsIGJ1dCBvbmx5ICR7YS5sZW5ndGh9IHByZXNlbnQuYCl9fVxuXG5leHBvcnQgY29uc3QgRmlsZSA9IEZcblxuLyoqIEB0eXBlIHt0eXBlb2YgZ2xvYmFsVGhpcy5Gb3JtRGF0YX0gKi9cbmV4cG9ydCBjb25zdCBGb3JtRGF0YSA9IGNsYXNzIEZvcm1EYXRhIHtcbiNkPVtdO1xuY29uc3RydWN0b3IoLi4uYSl7aWYoYS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihgRmFpbGVkIHRvIGNvbnN0cnVjdCAnRm9ybURhdGEnOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnSFRNTEZvcm1FbGVtZW50Jy5gKX1cbmdldCBbdF0oKSB7cmV0dXJuICdGb3JtRGF0YSd9XG5baV0oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9XG5zdGF0aWMgW2hdKG8pIHtyZXR1cm4gbyYmdHlwZW9mIG89PT0nb2JqZWN0JyYmb1t0XT09PSdGb3JtRGF0YScmJiFtLnNvbWUobT0+dHlwZW9mIG9bbV0hPSdmdW5jdGlvbicpfVxuYXBwZW5kKC4uLmEpe3goJ2FwcGVuZCcsYXJndW1lbnRzLDIpO3RoaXMuI2QucHVzaChmKC4uLmEpKX1cbmRlbGV0ZShhKXt4KCdkZWxldGUnLGFyZ3VtZW50cywxKTthKz0nJzt0aGlzLiNkPXRoaXMuI2QuZmlsdGVyKChbYl0pPT5iIT09YSl9XG5nZXQoYSl7eCgnZ2V0Jyxhcmd1bWVudHMsMSk7YSs9Jyc7Zm9yKHZhciBiPXRoaXMuI2QsbD1iLmxlbmd0aCxjPTA7YzxsO2MrKylpZihiW2NdWzBdPT09YSlyZXR1cm4gYltjXVsxXTtyZXR1cm4gbnVsbH1cbmdldEFsbChhLGIpe3goJ2dldEFsbCcsYXJndW1lbnRzLDEpO2I9W107YSs9Jyc7dGhpcy4jZC5mb3JFYWNoKGM9PmNbMF09PT1hJiZiLnB1c2goY1sxXSkpO3JldHVybiBifVxuaGFzKGEpe3goJ2hhcycsYXJndW1lbnRzLDEpO2ErPScnO3JldHVybiB0aGlzLiNkLnNvbWUoYj0+YlswXT09PWEpfVxuZm9yRWFjaChhLGIpe3goJ2ZvckVhY2gnLGFyZ3VtZW50cywxKTtmb3IodmFyIFtjLGRdb2YgdGhpcylhLmNhbGwoYixkLGMsdGhpcyl9XG5zZXQoLi4uYSl7eCgnc2V0Jyxhcmd1bWVudHMsMik7dmFyIGI9W10sYz0hMDthPWYoLi4uYSk7dGhpcy4jZC5mb3JFYWNoKGQ9PntkWzBdPT09YVswXT9jJiYoYz0hYi5wdXNoKGEpKTpiLnB1c2goZCl9KTtjJiZiLnB1c2goYSk7dGhpcy4jZD1ifVxuKmVudHJpZXMoKXt5aWVsZCp0aGlzLiNkfVxuKmtleXMoKXtmb3IodmFyW2Fdb2YgdGhpcyl5aWVsZCBhfVxuKnZhbHVlcygpe2Zvcih2YXJbLGFdb2YgdGhpcyl5aWVsZCBhfX1cblxuLyoqIEBwYXJhbSB7Rm9ybURhdGF9IEYgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtRGF0YVRvQmxvYiAoRixCPUMpe1xudmFyIGI9YCR7cigpfSR7cigpfWAucmVwbGFjZSgvXFwuL2csICcnKS5zbGljZSgtMjgpLnBhZFN0YXJ0KDMyLCAnLScpLGM9W10scD1gLS0ke2J9XFxyXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiYFxuRi5mb3JFYWNoKCh2LG4pPT50eXBlb2Ygdj09J3N0cmluZydcbj9jLnB1c2gocCtlKG4pK2BcIlxcclxcblxcclxcbiR7di5yZXBsYWNlKC9cXHIoPyFcXG4pfCg/PCFcXHIpXFxuL2csICdcXHJcXG4nKX1cXHJcXG5gKVxuOmMucHVzaChwK2UobikrYFwiOyBmaWxlbmFtZT1cIiR7ZSh2Lm5hbWUsIDEpfVwiXFxyXFxuQ29udGVudC1UeXBlOiAke3YudHlwZXx8XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn1cXHJcXG5cXHJcXG5gLCB2LCAnXFxyXFxuJykpXG5jLnB1c2goYC0tJHtifS0tYClcbnJldHVybiBuZXcgQihjLHt0eXBlOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIrYn0pfVxuIiwiXG4vKipcbiAqIEJvZHkuanNcbiAqXG4gKiBCb2R5IGludGVyZmFjZSBwcm92aWRlcyBjb21tb24gbWV0aG9kcyBmb3IgUmVxdWVzdCBhbmQgUmVzcG9uc2VcbiAqL1xuXG5pbXBvcnQgU3RyZWFtLCB7UGFzc1Rocm91Z2h9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7dHlwZXMsIGRlcHJlY2F0ZSwgcHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtCdWZmZXJ9IGZyb20gJ25vZGU6YnVmZmVyJztcblxuaW1wb3J0IEJsb2IgZnJvbSAnZmV0Y2gtYmxvYic7XG5pbXBvcnQge0Zvcm1EYXRhLCBmb3JtRGF0YVRvQmxvYn0gZnJvbSAnZm9ybWRhdGEtcG9seWZpbGwvZXNtLm1pbi5qcyc7XG5cbmltcG9ydCB7RmV0Y2hFcnJvcn0gZnJvbSAnLi9lcnJvcnMvZmV0Y2gtZXJyb3IuanMnO1xuaW1wb3J0IHtGZXRjaEJhc2VFcnJvcn0gZnJvbSAnLi9lcnJvcnMvYmFzZS5qcyc7XG5pbXBvcnQge2lzQmxvYiwgaXNVUkxTZWFyY2hQYXJhbWV0ZXJzfSBmcm9tICcuL3V0aWxzL2lzLmpzJztcblxuY29uc3QgcGlwZWxpbmUgPSBwcm9taXNpZnkoU3RyZWFtLnBpcGVsaW5lKTtcbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbCgnQm9keSBpbnRlcm5hbHMnKTtcblxuLyoqXG4gKiBCb2R5IG1peGluXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jYm9keVxuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSB7XG5cdGNvbnN0cnVjdG9yKGJvZHksIHtcblx0XHRzaXplID0gMFxuXHR9ID0ge30pIHtcblx0XHRsZXQgYm91bmRhcnkgPSBudWxsO1xuXG5cdFx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHRcdC8vIEJvZHkgaXMgdW5kZWZpbmVkIG9yIG51bGxcblx0XHRcdGJvZHkgPSBudWxsO1xuXHRcdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbWV0ZXJzKGJvZHkpKSB7XG5cdFx0XHQvLyBCb2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS50b1N0cmluZygpKTtcblx0XHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdFx0Ly8gQm9keSBpcyBibG9iXG5cdFx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRcdC8vIEJvZHkgaXMgQnVmZmVyXG5cdFx0fSBlbHNlIGlmICh0eXBlcy5pc0FueUFycmF5QnVmZmVyKGJvZHkpKSB7XG5cdFx0XHQvLyBCb2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keSk7XG5cdFx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHRcdC8vIEJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0XHRib2R5ID0gQnVmZmVyLmZyb20oYm9keS5idWZmZXIsIGJvZHkuYnl0ZU9mZnNldCwgYm9keS5ieXRlTGVuZ3RoKTtcblx0XHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRcdC8vIEJvZHkgaXMgc3RyZWFtXG5cdFx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcblx0XHRcdC8vIEJvZHkgaXMgRm9ybURhdGFcblx0XHRcdGJvZHkgPSBmb3JtRGF0YVRvQmxvYihib2R5KTtcblx0XHRcdGJvdW5kYXJ5ID0gYm9keS50eXBlLnNwbGl0KCc9JylbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIE5vbmUgb2YgdGhlIGFib3ZlXG5cdFx0XHQvLyBjb2VyY2UgdG8gc3RyaW5nIHRoZW4gYnVmZmVyXG5cdFx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0XHR9XG5cblx0XHRsZXQgc3RyZWFtID0gYm9keTtcblxuXHRcdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRcdHN0cmVhbSA9IFN0cmVhbS5SZWFkYWJsZS5mcm9tKGJvZHkpO1xuXHRcdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0XHRzdHJlYW0gPSBTdHJlYW0uUmVhZGFibGUuZnJvbShib2R5LnN0cmVhbSgpKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0XHRib2R5LFxuXHRcdFx0c3RyZWFtLFxuXHRcdFx0Ym91bmRhcnksXG5cdFx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IG51bGxcblx0XHR9O1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cblx0XHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdFx0Ym9keS5vbignZXJyb3InLCBlcnJvcl8gPT4ge1xuXHRcdFx0XHRjb25zdCBlcnJvciA9IGVycm9yXyBpbnN0YW5jZW9mIEZldGNoQmFzZUVycm9yID9cblx0XHRcdFx0XHRlcnJvcl8gOlxuXHRcdFx0XHRcdG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7dGhpcy51cmx9OiAke2Vycm9yXy5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnJvcl8pO1xuXHRcdFx0XHR0aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBib2R5KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uc3RyZWFtO1xuXHR9XG5cblx0Z2V0IGJvZHlVc2VkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlY29kZSByZXNwb25zZSBhcyBBcnJheUJ1ZmZlclxuXHQgKlxuXHQgKiBAcmV0dXJuICBQcm9taXNlXG5cdCAqL1xuXHRhc3luYyBhcnJheUJ1ZmZlcigpIHtcblx0XHRjb25zdCB7YnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RofSA9IGF3YWl0IGNvbnN1bWVCb2R5KHRoaXMpO1xuXHRcdHJldHVybiBidWZmZXIuc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGgpO1xuXHR9XG5cblx0YXN5bmMgZm9ybURhdGEoKSB7XG5cdFx0Y29uc3QgY3QgPSB0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcblxuXHRcdGlmIChjdC5zdGFydHNXaXRoKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSkge1xuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGF3YWl0IHRoaXMudGV4dCgpKTtcblxuXHRcdFx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIHBhcmFtZXRlcnMpIHtcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZvcm1EYXRhO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt0b0Zvcm1EYXRhfSA9IGF3YWl0IGltcG9ydCgnLi91dGlscy9tdWx0aXBhcnQtcGFyc2VyLmpzJyk7XG5cdFx0cmV0dXJuIHRvRm9ybURhdGEodGhpcy5ib2R5LCBjdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHJhdyByZXNwb25zZSBhcyBCbG9iXG5cdCAqXG5cdCAqIEByZXR1cm4gUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMgYmxvYigpIHtcblx0XHRjb25zdCBjdCA9ICh0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHx8ICh0aGlzW0lOVEVSTkFMU10uYm9keSAmJiB0aGlzW0lOVEVSTkFMU10uYm9keS50eXBlKSB8fCAnJztcblx0XHRjb25zdCBidWYgPSBhd2FpdCB0aGlzLmFycmF5QnVmZmVyKCk7XG5cblx0XHRyZXR1cm4gbmV3IEJsb2IoW2J1Zl0sIHtcblx0XHRcdHR5cGU6IGN0XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cblx0ICpcblx0ICogQHJldHVybiAgUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMganNvbigpIHtcblx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgdGhpcy50ZXh0KCk7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHRcblx0ICpcblx0ICogQHJldHVybiAgUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMgdGV4dCgpIHtcblx0XHRjb25zdCBidWZmZXIgPSBhd2FpdCBjb25zdW1lQm9keSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGJ1ZmZlcik7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuXHQgKlxuXHQgKiBAcmV0dXJuICBQcm9taXNlXG5cdCAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5KHRoaXMpO1xuXHR9XG59XG5cbkJvZHkucHJvdG90eXBlLmJ1ZmZlciA9IGRlcHJlY2F0ZShCb2R5LnByb3RvdHlwZS5idWZmZXIsICdQbGVhc2UgdXNlIFxcJ3Jlc3BvbnNlLmFycmF5QnVmZmVyKClcXCcgaW5zdGVhZCBvZiBcXCdyZXNwb25zZS5idWZmZXIoKVxcJycsICdub2RlLWZldGNoI2J1ZmZlcicpO1xuXG4vLyBJbiBicm93c2VycywgYWxsIHByb3BlcnRpZXMgYXJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCb2R5LnByb3RvdHlwZSwge1xuXHRib2R5OiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGJvZHlVc2VkOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGFycmF5QnVmZmVyOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGJsb2I6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0anNvbjoge2VudW1lcmFibGU6IHRydWV9LFxuXHR0ZXh0OiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGRhdGE6IHtnZXQ6IGRlcHJlY2F0ZSgoKSA9PiB7fSxcblx0XHQnZGF0YSBkb2VzblxcJ3QgZXhpc3QsIHVzZSBqc29uKCksIHRleHQoKSwgYXJyYXlCdWZmZXIoKSwgb3IgYm9keSBpbnN0ZWFkJyxcblx0XHQnaHR0cHM6Ly9naXRodWIuY29tL25vZGUtZmV0Y2gvbm9kZS1mZXRjaC9pc3N1ZXMvMTAwMCAocmVzcG9uc2UpJyl9XG59KTtcblxuLyoqXG4gKiBDb25zdW1lIGFuZCBjb252ZXJ0IGFuIGVudGlyZSBCb2R5IHRvIGEgQnVmZmVyLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS1jb25zdW1lLWJvZHlcbiAqXG4gKiBAcmV0dXJuIFByb21pc2VcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29uc3VtZUJvZHkoZGF0YSkge1xuXHRpZiAoZGF0YVtJTlRFUk5BTFNdLmRpc3R1cmJlZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYGJvZHkgdXNlZCBhbHJlYWR5IGZvcjogJHtkYXRhLnVybH1gKTtcblx0fVxuXG5cdGRhdGFbSU5URVJOQUxTXS5kaXN0dXJiZWQgPSB0cnVlO1xuXG5cdGlmIChkYXRhW0lOVEVSTkFMU10uZXJyb3IpIHtcblx0XHR0aHJvdyBkYXRhW0lOVEVSTkFMU10uZXJyb3I7XG5cdH1cblxuXHRjb25zdCB7Ym9keX0gPSBkYXRhO1xuXG5cdC8vIEJvZHkgaXMgbnVsbFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBCdWZmZXIuYWxsb2MoMCk7XG5cdH1cblxuXHQvKiBjOCBpZ25vcmUgbmV4dCAzICovXG5cdGlmICghKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcblx0fVxuXG5cdC8vIEJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGNvbnN0IGFjY3VtID0gW107XG5cdGxldCBhY2N1bUJ5dGVzID0gMDtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgYm9keSkge1xuXHRcdFx0aWYgKGRhdGEuc2l6ZSA+IDAgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRjb25zdCBlcnJvciA9IG5ldyBGZXRjaEVycm9yKGBjb250ZW50IHNpemUgYXQgJHtkYXRhLnVybH0gb3ZlciBsaW1pdDogJHtkYXRhLnNpemV9YCwgJ21heC1zaXplJyk7XG5cdFx0XHRcdGJvZHkuZGVzdHJveShlcnJvcik7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zdCBlcnJvcl8gPSBlcnJvciBpbnN0YW5jZW9mIEZldGNoQmFzZUVycm9yID8gZXJyb3IgOiBuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke2RhdGEudXJsfTogJHtlcnJvci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnJvcik7XG5cdFx0dGhyb3cgZXJyb3JfO1xuXHR9XG5cblx0aWYgKGJvZHkucmVhZGFibGVFbmRlZCA9PT0gdHJ1ZSB8fCBib2R5Ll9yZWFkYWJsZVN0YXRlLmVuZGVkID09PSB0cnVlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChhY2N1bS5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJykpIHtcblx0XHRcdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKGFjY3VtLmpvaW4oJycpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRmV0Y2hFcnJvcihgQ291bGQgbm90IGNyZWF0ZSBCdWZmZXIgZnJvbSByZXNwb25zZSBib2R5IGZvciAke2RhdGEudXJsfTogJHtlcnJvci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnJvcik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBGZXRjaEVycm9yKGBQcmVtYXR1cmUgY2xvc2Ugb2Ygc2VydmVyIHJlc3BvbnNlIHdoaWxlIHRyeWluZyB0byBmZXRjaCAke2RhdGEudXJsfWApO1xuXHR9XG59XG5cbi8qKlxuICogQ2xvbmUgYm9keSBnaXZlbiBSZXMvUmVxIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnN0YW5jZSAgICAgICBSZXNwb25zZSBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBTdHJpbmcgIGhpZ2hXYXRlck1hcmsgIGhpZ2hXYXRlck1hcmsgZm9yIGJvdGggUGFzc1Rocm91Z2ggYm9keSBzdHJlYW1zXG4gKiBAcmV0dXJuICBNaXhlZFxuICovXG5leHBvcnQgY29uc3QgY2xvbmUgPSAoaW5zdGFuY2UsIGhpZ2hXYXRlck1hcmspID0+IHtcblx0bGV0IHAxO1xuXHRsZXQgcDI7XG5cdGxldCB7Ym9keX0gPSBpbnN0YW5jZVtJTlRFUk5BTFNdO1xuXG5cdC8vIERvbid0IGFsbG93IGNsb25pbmcgYSB1c2VkIGJvZHlcblx0aWYgKGluc3RhbmNlLmJvZHlVc2VkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2xvbmUgYm9keSBhZnRlciBpdCBpcyB1c2VkJyk7XG5cdH1cblxuXHQvLyBDaGVjayB0aGF0IGJvZHkgaXMgYSBzdHJlYW0gYW5kIG5vdCBmb3JtLWRhdGEgb2JqZWN0XG5cdC8vIG5vdGU6IHdlIGNhbid0IGNsb25lIHRoZSBmb3JtLWRhdGEgb2JqZWN0IHdpdGhvdXQgaGF2aW5nIGl0IGFzIGEgZGVwZW5kZW5jeVxuXHRpZiAoKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pICYmICh0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHQvLyBUZWUgaW5zdGFuY2UgYm9keVxuXHRcdHAxID0gbmV3IFBhc3NUaHJvdWdoKHtoaWdoV2F0ZXJNYXJrfSk7XG5cdFx0cDIgPSBuZXcgUGFzc1Rocm91Z2goe2hpZ2hXYXRlck1hcmt9KTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gU2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uc3RyZWFtID0gcDE7XG5cdFx0Ym9keSA9IHAyO1xuXHR9XG5cblx0cmV0dXJuIGJvZHk7XG59O1xuXG5jb25zdCBnZXROb25TcGVjRm9ybURhdGFCb3VuZGFyeSA9IGRlcHJlY2F0ZShcblx0Ym9keSA9PiBib2R5LmdldEJvdW5kYXJ5KCksXG5cdCdmb3JtLWRhdGEgZG9lc25cXCd0IGZvbGxvdyB0aGUgc3BlYyBhbmQgcmVxdWlyZXMgc3BlY2lhbCB0cmVhdG1lbnQuIFVzZSBhbHRlcm5hdGl2ZSBwYWNrYWdlJyxcblx0J2h0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvaXNzdWVzLzExNjcnXG4pO1xuXG4vKipcbiAqIFBlcmZvcm1zIHRoZSBvcGVyYXRpb24gXCJleHRyYWN0IGEgYENvbnRlbnQtVHlwZWAgdmFsdWUgZnJvbSB8b2JqZWN0fFwiIGFzXG4gKiBzcGVjaWZpZWQgaW4gdGhlIHNwZWNpZmljYXRpb246XG4gKiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5aW5pdC1leHRyYWN0XG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgaW5zdGFuY2UuYm9keSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7YW55fSBib2R5IEFueSBvcHRpb25zLmJvZHkgaW5wdXRcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICovXG5leHBvcnQgY29uc3QgZXh0cmFjdENvbnRlbnRUeXBlID0gKGJvZHksIHJlcXVlc3QpID0+IHtcblx0Ly8gQm9keSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBzdHJpbmdcblx0aWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fVxuXG5cdC8vIEJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0aWYgKGlzVVJMU2VhcmNoUGFyYW1ldGVycyhib2R5KSkge1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS50eXBlIHx8IG51bGw7XG5cdH1cblxuXHQvLyBCb2R5IGlzIGEgQnVmZmVyIChCdWZmZXIsIEFycmF5QnVmZmVyIG9yIEFycmF5QnVmZmVyVmlldylcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSB8fCB0eXBlcy5pc0FueUFycmF5QnVmZmVyKGJvZHkpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuXHRcdHJldHVybiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtyZXF1ZXN0W0lOVEVSTkFMU10uYm91bmRhcnl9YDtcblx0fVxuXG5cdC8vIERldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGBtdWx0aXBhcnQvZm9ybS1kYXRhO2JvdW5kYXJ5PSR7Z2V0Tm9uU3BlY0Zvcm1EYXRhQm91bmRhcnkoYm9keSl9YDtcblx0fVxuXG5cdC8vIEJvZHkgaXMgc3RyZWFtIC0gY2FuJ3QgcmVhbGx5IGRvIG11Y2ggYWJvdXQgdGhpc1xuXHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gQm9keSBjb25zdHJ1Y3RvciBkZWZhdWx0cyBvdGhlciB0aGluZ3MgdG8gc3RyaW5nXG5cdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcbn07XG5cbi8qKlxuICogVGhlIEZldGNoIFN0YW5kYXJkIHRyZWF0cyB0aGlzIGFzIGlmIFwidG90YWwgYnl0ZXNcIiBpcyBhIHByb3BlcnR5IG9uIHRoZSBib2R5LlxuICogRm9yIHVzLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgZ2V0IGl0IHdpdGggYSBmdW5jdGlvbi5cbiAqXG4gKiByZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktdG90YWwtYnl0ZXNcbiAqXG4gKiBAcGFyYW0ge2FueX0gb2JqLmJvZHkgQm9keSBvYmplY3QgZnJvbSB0aGUgQm9keSBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHtudW1iZXIgfCBudWxsfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VG90YWxCeXRlcyA9IHJlcXVlc3QgPT4ge1xuXHRjb25zdCB7Ym9keX0gPSByZXF1ZXN0W0lOVEVSTkFMU107XG5cblx0Ly8gQm9keSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBCbG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS5zaXplO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBCdWZmZXJcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdHJldHVybiBib2R5Lmxlbmd0aDtcblx0fVxuXG5cdC8vIERldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldExlbmd0aFN5bmMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gYm9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkgPyBib2R5LmdldExlbmd0aFN5bmMoKSA6IG51bGw7XG5cdH1cblxuXHQvLyBCb2R5IGlzIHN0cmVhbVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogV3JpdGUgYSBCb2R5IHRvIGEgTm9kZS5qcyBXcml0YWJsZVN0cmVhbSAoZS5nLiBodHRwLlJlcXVlc3QpIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmVhbS5Xcml0YWJsZX0gZGVzdCBUaGUgc3RyZWFtIHRvIHdyaXRlIHRvLlxuICogQHBhcmFtIG9iai5ib2R5IEJvZHkgb2JqZWN0IGZyb20gdGhlIEJvZHkgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHdyaXRlVG9TdHJlYW0gPSBhc3luYyAoZGVzdCwge2JvZHl9KSA9PiB7XG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gQm9keSBpcyBudWxsXG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBCb2R5IGlzIHN0cmVhbVxuXHRcdGF3YWl0IHBpcGVsaW5lKGJvZHksIGRlc3QpO1xuXHR9XG59O1xuIiwiaW1wb3J0IHtGZXRjaEJhc2VFcnJvcn0gZnJvbSAnLi9iYXNlLmpzJztcblxuLyoqXG4gKiBBYm9ydEVycm9yIGludGVyZmFjZSBmb3IgY2FuY2VsbGVkIHJlcXVlc3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRmV0Y2hCYXNlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCB0eXBlID0gJ2Fib3J0ZWQnKSB7XG5cdFx0c3VwZXIobWVzc2FnZSwgdHlwZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZXRjaEJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdC8vIEhpZGUgY3VzdG9tIGVycm9yIGltcGxlbWVudGF0aW9uIGRldGFpbHMgZnJvbSBlbmQtdXNlcnNcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcblxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0Z2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cbn1cbiIsIlxuaW1wb3J0IHtGZXRjaEJhc2VFcnJvcn0gZnJvbSAnLi9iYXNlLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7eyBhZGRyZXNzPzogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIGRlc3Q/OiBzdHJpbmcsIGVycm5vOiBudW1iZXIsIGluZm8/OiBvYmplY3QsIG1lc3NhZ2U6IHN0cmluZywgcGF0aD86IHN0cmluZywgcG9ydD86IG51bWJlciwgc3lzY2FsbDogc3RyaW5nfX0gU3lzdGVtRXJyb3JcbiovXG5cbi8qKlxuICogRmV0Y2hFcnJvciBpbnRlcmZhY2UgZm9yIG9wZXJhdGlvbmFsIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEZldGNoQmFzZUVycm9yIHtcblx0LyoqXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gbWVzc2FnZSAtICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cblx0ICogQHBhcmFtICB7c3RyaW5nfSBbdHlwZV0gLSAgICAgICAgRXJyb3IgdHlwZSBmb3IgbWFjaGluZVxuXHQgKiBAcGFyYW0gIHtTeXN0ZW1FcnJvcn0gW3N5c3RlbUVycm9yXSAtIEZvciBOb2RlLmpzIHN5c3RlbSBlcnJvclxuXHQgKi9cblx0Y29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgc3lzdGVtRXJyb3IpIHtcblx0XHRzdXBlcihtZXNzYWdlLCB0eXBlKTtcblx0XHQvLyBXaGVuIGVyci50eXBlIGlzIGBzeXN0ZW1gLCBlcnIuZXJyb3JlZFN5c0NhbGwgY29udGFpbnMgc3lzdGVtIGVycm9yIGFuZCBlcnIuY29kZSBjb250YWlucyBzeXN0ZW0gZXJyb3IgY29kZVxuXHRcdGlmIChzeXN0ZW1FcnJvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuXHRcdFx0dGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG5cdFx0XHR0aGlzLmVycm9yZWRTeXNDYWxsID0gc3lzdGVtRXJyb3Iuc3lzY2FsbDtcblx0XHR9XG5cdH1cbn1cbiIsIi8qKlxuICogSGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmltcG9ydCB7dHlwZXN9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQgaHR0cCBmcm9tICdub2RlOmh0dHAnO1xuXG4vKiBjOCBpZ25vcmUgbmV4dCA5ICovXG5jb25zdCB2YWxpZGF0ZUhlYWRlck5hbWUgPSB0eXBlb2YgaHR0cC52YWxpZGF0ZUhlYWRlck5hbWUgPT09ICdmdW5jdGlvbicgP1xuXHRodHRwLnZhbGlkYXRlSGVhZGVyTmFtZSA6XG5cdG5hbWUgPT4ge1xuXHRcdGlmICghL15bXFxeYFxcLVxcdyEjJCUmJyorLnx+XSskLy50ZXN0KG5hbWUpKSB7XG5cdFx0XHRjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoYEhlYWRlciBuYW1lIG11c3QgYmUgYSB2YWxpZCBIVFRQIHRva2VuIFske25hbWV9XWApO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnY29kZScsIHt2YWx1ZTogJ0VSUl9JTlZBTElEX0hUVFBfVE9LRU4nfSk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cbi8qIGM4IGlnbm9yZSBuZXh0IDkgKi9cbmNvbnN0IHZhbGlkYXRlSGVhZGVyVmFsdWUgPSB0eXBlb2YgaHR0cC52YWxpZGF0ZUhlYWRlclZhbHVlID09PSAnZnVuY3Rpb24nID9cblx0aHR0cC52YWxpZGF0ZUhlYWRlclZhbHVlIDpcblx0KG5hbWUsIHZhbHVlKSA9PiB7XG5cdFx0aWYgKC9bXlxcdFxcdTAwMjAtXFx1MDA3RVxcdTAwODAtXFx1MDBGRl0vLnRlc3QodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBjb250ZW50IFtcIiR7bmFtZX1cIl1gKTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ2NvZGUnLCB7dmFsdWU6ICdFUlJfSU5WQUxJRF9DSEFSJ30pO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtIZWFkZXJzIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IEl0ZXJhYmxlPHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZ10+IHwgSXRlcmFibGU8SXRlcmFibGU8c3RyaW5nPj59IEhlYWRlcnNJbml0XG4gKi9cblxuLyoqXG4gKiBUaGlzIEZldGNoIEFQSSBpbnRlcmZhY2UgYWxsb3dzIHlvdSB0byBwZXJmb3JtIHZhcmlvdXMgYWN0aW9ucyBvbiBIVFRQIHJlcXVlc3QgYW5kIHJlc3BvbnNlIGhlYWRlcnMuXG4gKiBUaGVzZSBhY3Rpb25zIGluY2x1ZGUgcmV0cmlldmluZywgc2V0dGluZywgYWRkaW5nIHRvLCBhbmQgcmVtb3ZpbmcuXG4gKiBBIEhlYWRlcnMgb2JqZWN0IGhhcyBhbiBhc3NvY2lhdGVkIGhlYWRlciBsaXN0LCB3aGljaCBpcyBpbml0aWFsbHkgZW1wdHkgYW5kIGNvbnNpc3RzIG9mIHplcm8gb3IgbW9yZSBuYW1lIGFuZCB2YWx1ZSBwYWlycy5cbiAqIFlvdSBjYW4gYWRkIHRvIHRoaXMgdXNpbmcgbWV0aG9kcyBsaWtlIGFwcGVuZCgpIChzZWUgRXhhbXBsZXMuKVxuICogSW4gYWxsIG1ldGhvZHMgb2YgdGhpcyBpbnRlcmZhY2UsIGhlYWRlciBuYW1lcyBhcmUgbWF0Y2hlZCBieSBjYXNlLWluc2Vuc2l0aXZlIGJ5dGUgc2VxdWVuY2UuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJzIGV4dGVuZHMgVVJMU2VhcmNoUGFyYW1zIHtcblx0LyoqXG5cdCAqIEhlYWRlcnMgY2xhc3Ncblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7SGVhZGVyc0luaXR9IFtpbml0XSAtIFJlc3BvbnNlIGhlYWRlcnNcblx0ICovXG5cdGNvbnN0cnVjdG9yKGluaXQpIHtcblx0XHQvLyBWYWxpZGF0ZSBhbmQgbm9ybWFsaXplIGluaXQgb2JqZWN0IGluIFtuYW1lLCB2YWx1ZShzKV1bXVxuXHRcdC8qKiBAdHlwZSB7c3RyaW5nW11bXX0gKi9cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0aWYgKGluaXQgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG5cdFx0XHRjb25zdCByYXcgPSBpbml0LnJhdygpO1xuXHRcdFx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhyYXcpKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKC4uLnZhbHVlcy5tYXAodmFsdWUgPT4gW25hbWUsIHZhbHVlXSkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaW5pdCA9PSBudWxsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxXG5cdFx0XHQvLyBObyBvcFxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnICYmICF0eXBlcy5pc0JveGVkUHJpbWl0aXZlKGluaXQpKSB7XG5cdFx0XHRjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxXG5cdFx0XHRpZiAobWV0aG9kID09IG51bGwpIHtcblx0XHRcdFx0Ly8gUmVjb3JkPEJ5dGVTdHJpbmcsIEJ5dGVTdHJpbmc+XG5cdFx0XHRcdHJlc3VsdC5wdXNoKC4uLk9iamVjdC5lbnRyaWVzKGluaXQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignSGVhZGVyIHBhaXJzIG11c3QgYmUgaXRlcmFibGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNlcXVlbmNlPHNlcXVlbmNlPEJ5dGVTdHJpbmc+PlxuXHRcdFx0XHQvLyBOb3RlOiBwZXIgc3BlYyB3ZSBoYXZlIHRvIGZpcnN0IGV4aGF1c3QgdGhlIGxpc3RzIHRoZW4gcHJvY2VzcyB0aGVtXG5cdFx0XHRcdHJlc3VsdCA9IFsuLi5pbml0XVxuXHRcdFx0XHRcdC5tYXAocGFpciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdHR5cGVvZiBwYWlyICE9PSAnb2JqZWN0JyB8fCB0eXBlcy5pc0JveGVkUHJpbWl0aXZlKHBhaXIpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGFuIGl0ZXJhYmxlIG9iamVjdCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gWy4uLnBhaXJdO1xuXHRcdFx0XHRcdH0pLm1hcChwYWlyID0+IHtcblx0XHRcdFx0XHRcdGlmIChwYWlyLmxlbmd0aCAhPT0gMikge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYSBuYW1lL3ZhbHVlIHR1cGxlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBbLi4ucGFpcl07XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnSGVhZGVyc1xcJzogVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBvZiB0eXBlIFxcJyhzZXF1ZW5jZTxzZXF1ZW5jZTxCeXRlU3RyaW5nPj4gb3IgcmVjb3JkPEJ5dGVTdHJpbmcsIEJ5dGVTdHJpbmc+KScpO1xuXHRcdH1cblxuXHRcdC8vIFZhbGlkYXRlIGFuZCBsb3dlcmNhc2Vcblx0XHRyZXN1bHQgPVxuXHRcdFx0cmVzdWx0Lmxlbmd0aCA+IDAgP1xuXHRcdFx0XHRyZXN1bHQubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJOYW1lKG5hbWUpO1xuXHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyVmFsdWUobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHRcdFx0cmV0dXJuIFtTdHJpbmcobmFtZSkudG9Mb3dlckNhc2UoKSwgU3RyaW5nKHZhbHVlKV07XG5cdFx0XHRcdH0pIDpcblx0XHRcdFx0dW5kZWZpbmVkO1xuXG5cdFx0c3VwZXIocmVzdWx0KTtcblxuXHRcdC8vIFJldHVybmluZyBhIFByb3h5IHRoYXQgd2lsbCBsb3dlcmNhc2Uga2V5IG5hbWVzLCB2YWxpZGF0ZSBwYXJhbWV0ZXJzIGFuZCBzb3J0IGtleXNcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG5cdFx0cmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG5cdFx0XHRnZXQodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuXHRcdFx0XHRzd2l0Y2ggKHApIHtcblx0XHRcdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRcdGNhc2UgJ3NldCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gKG5hbWUsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJWYWx1ZShuYW1lLCBTdHJpbmcodmFsdWUpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGVbcF0uY2FsbChcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKHZhbHVlKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRcdFx0Y2FzZSAnaGFzJzpcblx0XHRcdFx0XHRjYXNlICdnZXRBbGwnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5hbWUgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlW3BdLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0XHRcdFN0cmluZyhuYW1lKS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Y2FzZSAna2V5cyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXQuc29ydCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFNldChVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmtleXMuY2FsbCh0YXJnZXQpKS5rZXlzKCk7XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHAsIHJlY2VpdmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8qIGM4IGlnbm9yZSBuZXh0ICovXG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG5cdH1cblxuXHRnZXQobmFtZSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0QWxsKG5hbWUpO1xuXHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRsZXQgdmFsdWUgPSB2YWx1ZXMuam9pbignLCAnKTtcblx0XHRpZiAoL15jb250ZW50LWVuY29kaW5nJC9pLnRlc3QobmFtZSkpIHtcblx0XHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnID0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIHRoaXMua2V5cygpKSB7XG5cdFx0XHRSZWZsZWN0LmFwcGx5KGNhbGxiYWNrLCB0aGlzQXJnLCBbdGhpcy5nZXQobmFtZSksIG5hbWUsIHRoaXNdKTtcblx0XHR9XG5cdH1cblxuXHQqIHZhbHVlcygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5rZXlzKCkpIHtcblx0XHRcdHlpZWxkIHRoaXMuZ2V0KG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7KCkgPT4gSXRlcmFibGVJdGVyYXRvcjxbc3RyaW5nLCBzdHJpbmddPn1cblx0ICovXG5cdCogZW50cmllcygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5rZXlzKCkpIHtcblx0XHRcdHlpZWxkIFtuYW1lLCB0aGlzLmdldChuYW1lKV07XG5cdFx0fVxuXHR9XG5cblx0W1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW50cmllcygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE5vZGUtZmV0Y2ggbm9uLXNwZWMgbWV0aG9kXG5cdCAqIHJldHVybmluZyBhbGwgaGVhZGVycyBhbmQgdGhlaXIgdmFsdWVzIGFzIGFycmF5XG5cdCAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT59XG5cdCAqL1xuXHRyYXcoKSB7XG5cdFx0cmV0dXJuIFsuLi50aGlzLmtleXMoKV0ucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB0aGlzLmdldEFsbChrZXkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LCB7fSk7XG5cdH1cblxuXHQvKipcblx0ICogRm9yIGJldHRlciBjb25zb2xlLmxvZyhoZWFkZXJzKSBhbmQgYWxzbyB0byBjb252ZXJ0IEhlYWRlcnMgaW50byBOb2RlLmpzIFJlcXVlc3QgY29tcGF0aWJsZSBmb3JtYXRcblx0ICovXG5cdFtTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMua2V5cygpXS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEFsbChrZXkpO1xuXHRcdFx0Ly8gSHR0cC5yZXF1ZXN0KCkgb25seSBzdXBwb3J0cyBzdHJpbmcgYXMgSG9zdCBoZWFkZXIuXG5cdFx0XHQvLyBUaGlzIGhhY2sgbWFrZXMgc3BlY2lmeWluZyBjdXN0b20gSG9zdCBoZWFkZXIgcG9zc2libGUuXG5cdFx0XHRpZiAoa2V5ID09PSAnaG9zdCcpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZXNbMF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlcy5sZW5ndGggPiAxID8gdmFsdWVzIDogdmFsdWVzWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sIHt9KTtcblx0fVxufVxuXG4vKipcbiAqIFJlLXNoYXBpbmcgb2JqZWN0IGZvciBXZWIgSURMIHRlc3RzXG4gKiBPbmx5IG5lZWQgdG8gZG8gaXQgZm9yIG92ZXJyaWRkZW4gbWV0aG9kc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhcblx0SGVhZGVycy5wcm90b3R5cGUsXG5cdFsnZ2V0JywgJ2VudHJpZXMnLCAnZm9yRWFjaCcsICd2YWx1ZXMnXS5yZWR1Y2UoKHJlc3VsdCwgcHJvcGVydHkpID0+IHtcblx0XHRyZXN1bHRbcHJvcGVydHldID0ge2VudW1lcmFibGU6IHRydWV9O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIHt9KVxuKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBIZWFkZXJzIG9iamVjdCBmcm9tIGFuIGh0dHAuSW5jb21pbmdNZXNzYWdlLnJhd0hlYWRlcnMsIGlnbm9yaW5nIHRob3NlIHRoYXQgZG9cbiAqIG5vdCBjb25mb3JtIHRvIEhUVFAgZ3JhbW1hciBwcm9kdWN0aW9ucy5cbiAqIEBwYXJhbSB7aW1wb3J0KCdodHRwJykuSW5jb21pbmdNZXNzYWdlWydyYXdIZWFkZXJzJ119IGhlYWRlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21SYXdIZWFkZXJzKGhlYWRlcnMgPSBbXSkge1xuXHRyZXR1cm4gbmV3IEhlYWRlcnMoXG5cdFx0aGVhZGVyc1xuXHRcdFx0Ly8gU3BsaXQgaW50byBwYWlyc1xuXHRcdFx0LnJlZHVjZSgocmVzdWx0LCB2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG5cdFx0XHRcdGlmIChpbmRleCAlIDIgPT09IDApIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyAyKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSwgW10pXG5cdFx0XHQuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFsaWRhdGVIZWFkZXJOYW1lKG5hbWUpO1xuXHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyVmFsdWUobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHQpO1xufVxuIiwiLyoqXG4gKiBJbmRleC5qc1xuICpcbiAqIGEgcmVxdWVzdCBBUEkgY29tcGF0aWJsZSB3aXRoIHdpbmRvdy5mZXRjaFxuICpcbiAqIEFsbCBzcGVjIGFsZ29yaXRobSBzdGVwIG51bWJlcnMgYXJlIGJhc2VkIG9uIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnL2NvbW1pdC1zbmFwc2hvdHMvYWU3MTY4MjJjYjNhNjE4NDMyMjZjZDA5MGVlZmM2NTg5NDQ2YzFkMi8uXG4gKi9cblxuaW1wb3J0IGh0dHAgZnJvbSAnbm9kZTpodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdub2RlOmh0dHBzJztcbmltcG9ydCB6bGliIGZyb20gJ25vZGU6emxpYic7XG5pbXBvcnQgU3RyZWFtLCB7UGFzc1Rocm91Z2gsIHBpcGVsaW5lIGFzIHB1bXB9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5cbmltcG9ydCBkYXRhVXJpVG9CdWZmZXIgZnJvbSAnZGF0YS11cmktdG8tYnVmZmVyJztcblxuaW1wb3J0IHt3cml0ZVRvU3RyZWFtLCBjbG9uZX0gZnJvbSAnLi9ib2R5LmpzJztcbmltcG9ydCBSZXNwb25zZSBmcm9tICcuL3Jlc3BvbnNlLmpzJztcbmltcG9ydCBIZWFkZXJzLCB7ZnJvbVJhd0hlYWRlcnN9IGZyb20gJy4vaGVhZGVycy5qcyc7XG5pbXBvcnQgUmVxdWVzdCwge2dldE5vZGVSZXF1ZXN0T3B0aW9uc30gZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCB7RmV0Y2hFcnJvcn0gZnJvbSAnLi9lcnJvcnMvZmV0Y2gtZXJyb3IuanMnO1xuaW1wb3J0IHtBYm9ydEVycm9yfSBmcm9tICcuL2Vycm9ycy9hYm9ydC1lcnJvci5qcyc7XG5pbXBvcnQge2lzUmVkaXJlY3R9IGZyb20gJy4vdXRpbHMvaXMtcmVkaXJlY3QuanMnO1xuaW1wb3J0IHtGb3JtRGF0YX0gZnJvbSAnZm9ybWRhdGEtcG9seWZpbGwvZXNtLm1pbi5qcyc7XG5pbXBvcnQge2lzRG9tYWluT3JTdWJkb21haW4sIGlzU2FtZVByb3RvY29sfSBmcm9tICcuL3V0aWxzL2lzLmpzJztcbmltcG9ydCB7cGFyc2VSZWZlcnJlclBvbGljeUZyb21IZWFkZXJ9IGZyb20gJy4vdXRpbHMvcmVmZXJyZXIuanMnO1xuaW1wb3J0IHtcblx0QmxvYixcblx0RmlsZSxcblx0ZmlsZUZyb21TeW5jLFxuXHRmaWxlRnJvbSxcblx0YmxvYkZyb21TeW5jLFxuXHRibG9iRnJvbVxufSBmcm9tICdmZXRjaC1ibG9iL2Zyb20uanMnO1xuXG5leHBvcnQge0Zvcm1EYXRhLCBIZWFkZXJzLCBSZXF1ZXN0LCBSZXNwb25zZSwgRmV0Y2hFcnJvciwgQWJvcnRFcnJvciwgaXNSZWRpcmVjdH07XG5leHBvcnQge0Jsb2IsIEZpbGUsIGZpbGVGcm9tU3luYywgZmlsZUZyb20sIGJsb2JGcm9tU3luYywgYmxvYkZyb219O1xuXG5jb25zdCBzdXBwb3J0ZWRTY2hlbWFzID0gbmV3IFNldChbJ2RhdGE6JywgJ2h0dHA6JywgJ2h0dHBzOiddKTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmcgfCBVUkwgfCBpbXBvcnQoJy4vcmVxdWVzdCcpLmRlZmF1bHR9IHVybCAtIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICB7Kn0gW29wdGlvbnNfXSAtIEZldGNoIG9wdGlvbnNcbiAqIEByZXR1cm4gIHtQcm9taXNlPGltcG9ydCgnLi9yZXNwb25zZScpLmRlZmF1bHQ+fVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdGlvbnNfKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Ly8gQnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRpb25zXyk7XG5cdFx0Y29uc3Qge3BhcnNlZFVSTCwgb3B0aW9uc30gPSBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCk7XG5cdFx0aWYgKCFzdXBwb3J0ZWRTY2hlbWFzLmhhcyhwYXJzZWRVUkwucHJvdG9jb2wpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBub2RlLWZldGNoIGNhbm5vdCBsb2FkICR7dXJsfS4gVVJMIHNjaGVtZSBcIiR7cGFyc2VkVVJMLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlZFVSTC5wcm90b2NvbCA9PT0gJ2RhdGE6Jykge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGRhdGFVcmlUb0J1ZmZlcihyZXF1ZXN0LnVybCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShkYXRhLCB7aGVhZGVyczogeydDb250ZW50LVR5cGUnOiBkYXRhLnR5cGVGdWxsfX0pO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV3JhcCBodHRwLnJlcXVlc3QgaW50byBmZXRjaFxuXHRcdGNvbnN0IHNlbmQgPSAocGFyc2VkVVJMLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCB7c2lnbmFsfSA9IHJlcXVlc3Q7XG5cdFx0bGV0IHJlc3BvbnNlID0gbnVsbDtcblxuXHRcdGNvbnN0IGFib3J0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgQWJvcnRFcnJvcignVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC4nKTtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRpZiAocmVxdWVzdC5ib2R5ICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSkge1xuXHRcdFx0XHRyZXF1ZXN0LmJvZHkuZGVzdHJveShlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZS5ib2R5LmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuXHRcdH07XG5cblx0XHRpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFib3J0QW5kRmluYWxpemUgPSAoKSA9PiB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxdWVzdF8gPSBzZW5kKHBhcnNlZFVSTC50b1N0cmluZygpLCBvcHRpb25zKTtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpbmFsaXplID0gKCkgPT4ge1xuXHRcdFx0cmVxdWVzdF8uYWJvcnQoKTtcblx0XHRcdGlmIChzaWduYWwpIHtcblx0XHRcdFx0c2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJlcXVlc3RfLm9uKCdlcnJvcicsIGVycm9yID0+IHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnJvci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnJvcikpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9KTtcblxuXHRcdGZpeFJlc3BvbnNlQ2h1bmtlZFRyYW5zZmVyQmFkRW5kaW5nKHJlcXVlc3RfLCBlcnJvciA9PiB7XG5cdFx0XHRpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuYm9keSkge1xuXHRcdFx0XHRyZXNwb25zZS5ib2R5LmRlc3Ryb3koZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0LyogYzggaWdub3JlIG5leHQgMTggKi9cblx0XHRpZiAocHJvY2Vzcy52ZXJzaW9uIDwgJ3YxNCcpIHtcblx0XHRcdC8vIEJlZm9yZSBOb2RlLmpzIDE0LCBwaXBlbGluZSgpIGRvZXMgbm90IGZ1bGx5IHN1cHBvcnQgYXN5bmMgaXRlcmF0b3JzIGFuZCBkb2VzIG5vdCBhbHdheXNcblx0XHRcdC8vIHByb3Blcmx5IGhhbmRsZSB3aGVuIHRoZSBzb2NrZXQgY2xvc2UvZW5kIGV2ZW50cyBhcmUgb3V0IG9mIG9yZGVyLlxuXHRcdFx0cmVxdWVzdF8ub24oJ3NvY2tldCcsIHMgPT4ge1xuXHRcdFx0XHRsZXQgZW5kZWRXaXRoRXZlbnRzQ291bnQ7XG5cdFx0XHRcdHMucHJlcGVuZExpc3RlbmVyKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZW5kZWRXaXRoRXZlbnRzQ291bnQgPSBzLl9ldmVudHNDb3VudDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHMucHJlcGVuZExpc3RlbmVyKCdjbG9zZScsIGhhZEVycm9yID0+IHtcblx0XHRcdFx0XHQvLyBpZiBlbmQgaGFwcGVuZWQgYmVmb3JlIGNsb3NlIGJ1dCB0aGUgc29ja2V0IGRpZG4ndCBlbWl0IGFuIGVycm9yLCBkbyBpdCBub3dcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UgJiYgZW5kZWRXaXRoRXZlbnRzQ291bnQgPCBzLl9ldmVudHNDb3VudCAmJiAhaGFkRXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdQcmVtYXR1cmUgY2xvc2UnKTtcblx0XHRcdFx0XHRcdGVycm9yLmNvZGUgPSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UuYm9keS5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdF8ub24oJ3Jlc3BvbnNlJywgcmVzcG9uc2VfID0+IHtcblx0XHRcdHJlcXVlc3RfLnNldFRpbWVvdXQoMCk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gZnJvbVJhd0hlYWRlcnMocmVzcG9uc2VfLnJhd0hlYWRlcnMpO1xuXG5cdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNVxuXHRcdFx0aWYgKGlzUmVkaXJlY3QocmVzcG9uc2VfLnN0YXR1c0NvZGUpKSB7XG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjJcblx0XHRcdFx0Y29uc3QgbG9jYXRpb24gPSBoZWFkZXJzLmdldCgnTG9jYXRpb24nKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4zXG5cdFx0XHRcdGxldCBsb2NhdGlvblVSTCA9IG51bGw7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bG9jYXRpb25VUkwgPSBsb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiBuZXcgVVJMKGxvY2F0aW9uLCByZXF1ZXN0LnVybCk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGVycm9yIGhlcmUgY2FuIG9ubHkgYmUgaW52YWxpZCBVUkwgaW4gTG9jYXRpb246IGhlYWRlclxuXHRcdFx0XHRcdC8vIGRvIG5vdCB0aHJvdyB3aGVuIG9wdGlvbnMucmVkaXJlY3QgPT0gbWFudWFsXG5cdFx0XHRcdFx0Ly8gbGV0IHRoZSB1c2VyIGV4dHJhY3QgdGhlIGVycm9ybmVvdXMgcmVkaXJlY3QgVVJMXG5cdFx0XHRcdFx0aWYgKHJlcXVlc3QucmVkaXJlY3QgIT09ICdtYW51YWwnKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhbiBpbnZhbGlkIHJlZGlyZWN0IFVSTDogJHtsb2NhdGlvbn1gLCAnaW52YWxpZC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhIHJlZGlyZWN0LCByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmb2xsb3cnOiB7XG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNVxuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3QuY291bnRlciA+PSByZXF1ZXN0LmZvbGxvdykge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG1heGltdW0gcmVkaXJlY3QgcmVhY2hlZCBhdDogJHtyZXF1ZXN0LnVybH1gLCAnbWF4LXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA2IChjb3VudGVyIGluY3JlbWVudClcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdC5cblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuXHRcdFx0XHRcdFx0XHRmb2xsb3c6IHJlcXVlc3QuZm9sbG93LFxuXHRcdFx0XHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIgKyAxLFxuXHRcdFx0XHRcdFx0XHRhZ2VudDogcmVxdWVzdC5hZ2VudCxcblx0XHRcdFx0XHRcdFx0Y29tcHJlc3M6IHJlcXVlc3QuY29tcHJlc3MsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IGNsb25lKHJlcXVlc3QpLFxuXHRcdFx0XHRcdFx0XHRzaWduYWw6IHJlcXVlc3Quc2lnbmFsLFxuXHRcdFx0XHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdFx0XHRcdHJlZmVycmVyOiByZXF1ZXN0LnJlZmVycmVyLFxuXHRcdFx0XHRcdFx0XHRyZWZlcnJlclBvbGljeTogcmVxdWVzdC5yZWZlcnJlclBvbGljeVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gd2hlbiBmb3J3YXJkaW5nIHNlbnNpdGl2ZSBoZWFkZXJzIGxpa2UgXCJBdXRob3JpemF0aW9uXCIsXG5cdFx0XHRcdFx0XHQvLyBcIldXVy1BdXRoZW50aWNhdGVcIiwgYW5kIFwiQ29va2llXCIgdG8gdW50cnVzdGVkIHRhcmdldHMsXG5cdFx0XHRcdFx0XHQvLyBoZWFkZXJzIHdpbGwgYmUgaWdub3JlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgZG9tYWluXG5cdFx0XHRcdFx0XHQvLyB0aGF0IGlzIG5vdCBhIHN1YmRvbWFpbiBtYXRjaCBvciBleGFjdCBtYXRjaCBvZiB0aGUgaW5pdGlhbCBkb21haW4uXG5cdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSwgYSByZWRpcmVjdCBmcm9tIFwiZm9vLmNvbVwiIHRvIGVpdGhlciBcImZvby5jb21cIiBvciBcInN1Yi5mb28uY29tXCJcblx0XHRcdFx0XHRcdC8vIHdpbGwgZm9yd2FyZCB0aGUgc2Vuc2l0aXZlIGhlYWRlcnMsIGJ1dCBhIHJlZGlyZWN0IHRvIFwiYmFyLmNvbVwiIHdpbGwgbm90LlxuXHRcdFx0XHRcdFx0Ly8gaGVhZGVycyB3aWxsIGFsc28gYmUgaWdub3JlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgZG9tYWluIHVzaW5nXG5cdFx0XHRcdFx0XHQvLyBhIGRpZmZlcmVudCBwcm90b2NvbC4gRm9yIGV4YW1wbGUsIGEgcmVkaXJlY3QgZnJvbSBcImh0dHBzOi8vZm9vLmNvbVwiIHRvIFwiaHR0cDovL2Zvby5jb21cIlxuXHRcdFx0XHRcdFx0Ly8gd2lsbCBub3QgZm9yd2FyZCB0aGUgc2Vuc2l0aXZlIGhlYWRlcnNcblx0XHRcdFx0XHRcdGlmICghaXNEb21haW5PclN1YmRvbWFpbihyZXF1ZXN0LnVybCwgbG9jYXRpb25VUkwpIHx8ICFpc1NhbWVQcm90b2NvbChyZXF1ZXN0LnVybCwgbG9jYXRpb25VUkwpKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbmFtZSBvZiBbJ2F1dGhvcml6YXRpb24nLCAnd3d3LWF1dGhlbnRpY2F0ZScsICdjb29raWUnLCAnY29va2llMiddKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdGlvbnMuaGVhZGVycy5kZWxldGUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZV8uc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBvcHRpb25zXy5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAoKHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMikgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTRcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlUmVmZXJyZXJQb2xpY3kgPSBwYXJzZVJlZmVycmVyUG9saWN5RnJvbUhlYWRlcihoZWFkZXJzKTtcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZVJlZmVycmVyUG9saWN5KSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLnJlZmVycmVyUG9saWN5ID0gcmVzcG9uc2VSZWZlcnJlclBvbGljeTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDE1XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGZldGNoKG5ldyBSZXF1ZXN0KGxvY2F0aW9uVVJMLCByZXF1ZXN0T3B0aW9ucykpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcihgUmVkaXJlY3Qgb3B0aW9uICcke3JlcXVlc3QucmVkaXJlY3R9JyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBvZiBSZXF1ZXN0UmVkaXJlY3RgKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJlcGFyZSByZXNwb25zZVxuXHRcdFx0aWYgKHNpZ25hbCkge1xuXHRcdFx0XHRyZXNwb25zZV8ub25jZSgnZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGJvZHkgPSBwdW1wKHJlc3BvbnNlXywgbmV3IFBhc3NUaHJvdWdoKCksIGVycm9yID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvMjkzNzZcblx0XHRcdC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cblx0XHRcdGlmIChwcm9jZXNzLnZlcnNpb24gPCAndjEyLjEwJykge1xuXHRcdFx0XHRyZXNwb25zZV8ub24oJ2Fib3J0ZWQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcG9uc2VPcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHJlcXVlc3QudXJsLFxuXHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlXy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZV8uc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0c2l6ZTogcmVxdWVzdC5zaXplLFxuXHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIsXG5cdFx0XHRcdGhpZ2hXYXRlck1hcms6IHJlcXVlc3QuaGlnaFdhdGVyTWFya1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjNcblx0XHRcdGNvbnN0IGNvZGluZ3MgPSBoZWFkZXJzLmdldCgnQ29udGVudC1FbmNvZGluZycpO1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuNDogaGFuZGxlIGNvbnRlbnQgY29kaW5nc1xuXG5cdFx0XHQvLyBpbiBmb2xsb3dpbmcgc2NlbmFyaW9zIHdlIGlnbm9yZSBjb21wcmVzc2lvbiBzdXBwb3J0XG5cdFx0XHQvLyAxLiBjb21wcmVzc2lvbiBzdXBwb3J0IGlzIGRpc2FibGVkXG5cdFx0XHQvLyAyLiBIRUFEIHJlcXVlc3Rcblx0XHRcdC8vIDMuIG5vIENvbnRlbnQtRW5jb2RpbmcgaGVhZGVyXG5cdFx0XHQvLyA0LiBubyBjb250ZW50IHJlc3BvbnNlICgyMDQpXG5cdFx0XHQvLyA1LiBjb250ZW50IG5vdCBtb2RpZmllZCByZXNwb25zZSAoMzA0KVxuXHRcdFx0aWYgKCFyZXF1ZXN0LmNvbXByZXNzIHx8IHJlcXVlc3QubWV0aG9kID09PSAnSEVBRCcgfHwgY29kaW5ncyA9PT0gbnVsbCB8fCByZXNwb25zZV8uc3RhdHVzQ29kZSA9PT0gMjA0IHx8IHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDQpIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2VPcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIE5vZGUgdjYrXG5cdFx0XHQvLyBCZSBsZXNzIHN0cmljdCB3aGVuIGRlY29kaW5nIGNvbXByZXNzZWQgcmVzcG9uc2VzLCBzaW5jZSBzb21ldGltZXNcblx0XHRcdC8vIHNlcnZlcnMgc2VuZCBzbGlnaHRseSBpbnZhbGlkIHJlc3BvbnNlcyB0aGF0IGFyZSBzdGlsbCBhY2NlcHRlZFxuXHRcdFx0Ly8gYnkgY29tbW9uIGJyb3dzZXJzLlxuXHRcdFx0Ly8gQWx3YXlzIHVzaW5nIFpfU1lOQ19GTFVTSCBpcyB3aGF0IGNVUkwgZG9lcy5cblx0XHRcdGNvbnN0IHpsaWJPcHRpb25zID0ge1xuXHRcdFx0XHRmbHVzaDogemxpYi5aX1NZTkNfRkxVU0gsXG5cdFx0XHRcdGZpbmlzaEZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRm9yIGd6aXBcblx0XHRcdGlmIChjb2RpbmdzID09PSAnZ3ppcCcgfHwgY29kaW5ncyA9PT0gJ3gtZ3ppcCcpIHtcblx0XHRcdFx0Ym9keSA9IHB1bXAoYm9keSwgemxpYi5jcmVhdGVHdW56aXAoemxpYk9wdGlvbnMpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBkZWZsYXRlXG5cdFx0XHRpZiAoY29kaW5ncyA9PT0gJ2RlZmxhdGUnIHx8IGNvZGluZ3MgPT09ICd4LWRlZmxhdGUnKSB7XG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgaW5mYW1vdXMgcmF3IGRlZmxhdGUgcmVzcG9uc2UgZnJvbSBvbGQgc2VydmVyc1xuXHRcdFx0XHQvLyBhIGhhY2sgZm9yIG9sZCBJSVMgYW5kIEFwYWNoZSBzZXJ2ZXJzXG5cdFx0XHRcdGNvbnN0IHJhdyA9IHB1bXAocmVzcG9uc2VfLCBuZXcgUGFzc1Rocm91Z2goKSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyYXcub25jZSgnZGF0YScsIGNodW5rID0+IHtcblx0XHRcdFx0XHQvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzUxOTgyOFxuXHRcdFx0XHRcdGlmICgoY2h1bmtbMF0gJiAweDBGKSA9PT0gMHgwOCkge1xuXHRcdFx0XHRcdFx0Ym9keSA9IHB1bXAoYm9keSwgemxpYi5jcmVhdGVJbmZsYXRlKCksIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBwdW1wKGJvZHksIHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyYXcub25jZSgnZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdC8vIFNvbWUgb2xkIElJUyBzZXJ2ZXJzIHJldHVybiB6ZXJvLWxlbmd0aCBPSyBkZWZsYXRlIHJlc3BvbnNlcywgc29cblx0XHRcdFx0XHQvLyAnZGF0YScgaXMgbmV2ZXIgZW1pdHRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvcHVsbC85MDNcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09PSAnYnInKSB7XG5cdFx0XHRcdGJvZHkgPSBwdW1wKGJvZHksIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyd2lzZSwgdXNlIHJlc3BvbnNlIGFzLWlzXG5cdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxdWVzdF8sIHJlcXVlc3QpLmNhdGNoKHJlamVjdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBmaXhSZXNwb25zZUNodW5rZWRUcmFuc2ZlckJhZEVuZGluZyhyZXF1ZXN0LCBlcnJvckNhbGxiYWNrKSB7XG5cdGNvbnN0IExBU1RfQ0hVTksgPSBCdWZmZXIuZnJvbSgnMFxcclxcblxcclxcbicpO1xuXG5cdGxldCBpc0NodW5rZWRUcmFuc2ZlciA9IGZhbHNlO1xuXHRsZXQgcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgPSBmYWxzZTtcblx0bGV0IHByZXZpb3VzQ2h1bms7XG5cblx0cmVxdWVzdC5vbigncmVzcG9uc2UnLCByZXNwb25zZSA9PiB7XG5cdFx0Y29uc3Qge2hlYWRlcnN9ID0gcmVzcG9uc2U7XG5cdFx0aXNDaHVua2VkVHJhbnNmZXIgPSBoZWFkZXJzWyd0cmFuc2Zlci1lbmNvZGluZyddID09PSAnY2h1bmtlZCcgJiYgIWhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ107XG5cdH0pO1xuXG5cdHJlcXVlc3Qub24oJ3NvY2tldCcsIHNvY2tldCA9PiB7XG5cdFx0Y29uc3Qgb25Tb2NrZXRDbG9zZSA9ICgpID0+IHtcblx0XHRcdGlmIChpc0NodW5rZWRUcmFuc2ZlciAmJiAhcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQpIHtcblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ1ByZW1hdHVyZSBjbG9zZScpO1xuXHRcdFx0XHRlcnJvci5jb2RlID0gJ0VSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFJztcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayhlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uRGF0YSA9IGJ1ZiA9PiB7XG5cdFx0XHRwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IEJ1ZmZlci5jb21wYXJlKGJ1Zi5zbGljZSgtNSksIExBU1RfQ0hVTkspID09PSAwO1xuXG5cdFx0XHQvLyBTb21ldGltZXMgZmluYWwgMC1sZW5ndGggY2h1bmsgYW5kIGVuZCBvZiBtZXNzYWdlIGNvZGUgYXJlIGluIHNlcGFyYXRlIHBhY2tldHNcblx0XHRcdGlmICghcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgJiYgcHJldmlvdXNDaHVuaykge1xuXHRcdFx0XHRwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IChcblx0XHRcdFx0XHRCdWZmZXIuY29tcGFyZShwcmV2aW91c0NodW5rLnNsaWNlKC0zKSwgTEFTVF9DSFVOSy5zbGljZSgwLCAzKSkgPT09IDAgJiZcblx0XHRcdFx0XHRCdWZmZXIuY29tcGFyZShidWYuc2xpY2UoLTIpLCBMQVNUX0NIVU5LLnNsaWNlKDMpKSA9PT0gMFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2aW91c0NodW5rID0gYnVmO1xuXHRcdH07XG5cblx0XHRzb2NrZXQucHJlcGVuZExpc3RlbmVyKCdjbG9zZScsIG9uU29ja2V0Q2xvc2UpO1xuXHRcdHNvY2tldC5vbignZGF0YScsIG9uRGF0YSk7XG5cblx0XHRyZXF1ZXN0Lm9uKCdjbG9zZScsICgpID0+IHtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblNvY2tldENsb3NlKTtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uRGF0YSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuIiwiLyoqXG4gKiBSZXF1ZXN0LmpzXG4gKlxuICogUmVxdWVzdCBjbGFzcyBjb250YWlucyBzZXJ2ZXIgb25seSBvcHRpb25zXG4gKlxuICogQWxsIHNwZWMgYWxnb3JpdGhtIHN0ZXAgbnVtYmVycyBhcmUgYmFzZWQgb24gaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvY29tbWl0LXNuYXBzaG90cy9hZTcxNjgyMmNiM2E2MTg0MzIyNmNkMDkwZWVmYzY1ODk0NDZjMWQyLy5cbiAqL1xuXG5pbXBvcnQge2Zvcm1hdCBhcyBmb3JtYXRVcmx9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7ZGVwcmVjYXRlfSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IEhlYWRlcnMgZnJvbSAnLi9oZWFkZXJzLmpzJztcbmltcG9ydCBCb2R5LCB7Y2xvbmUsIGV4dHJhY3RDb250ZW50VHlwZSwgZ2V0VG90YWxCeXRlc30gZnJvbSAnLi9ib2R5LmpzJztcbmltcG9ydCB7aXNBYm9ydFNpZ25hbH0gZnJvbSAnLi91dGlscy9pcy5qcyc7XG5pbXBvcnQge2dldFNlYXJjaH0gZnJvbSAnLi91dGlscy9nZXQtc2VhcmNoLmpzJztcbmltcG9ydCB7XG5cdHZhbGlkYXRlUmVmZXJyZXJQb2xpY3ksIGRldGVybWluZVJlcXVlc3RzUmVmZXJyZXIsIERFRkFVTFRfUkVGRVJSRVJfUE9MSUNZXG59IGZyb20gJy4vdXRpbHMvcmVmZXJyZXIuanMnO1xuXG5jb25zdCBJTlRFUk5BTFMgPSBTeW1ib2woJ1JlcXVlc3QgaW50ZXJuYWxzJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzUmVxdWVzdCA9IG9iamVjdCA9PiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2Ygb2JqZWN0W0lOVEVSTkFMU10gPT09ICdvYmplY3QnXG5cdCk7XG59O1xuXG5jb25zdCBkb0JhZERhdGFXYXJuID0gZGVwcmVjYXRlKCgpID0+IHt9LFxuXHQnLmRhdGEgaXMgbm90IGEgdmFsaWQgUmVxdWVzdEluaXQgcHJvcGVydHksIHVzZSAuYm9keSBpbnN0ZWFkJyxcblx0J2h0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvaXNzdWVzLzEwMDAgKHJlcXVlc3QpJyk7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzc1xuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3JlcXVlc3QtY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0ICBVcmwgb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgT2JqZWN0ICBpbml0ICAgQ3VzdG9tIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIEJvZHkge1xuXHRjb25zdHJ1Y3RvcihpbnB1dCwgaW5pdCA9IHt9KSB7XG5cdFx0bGV0IHBhcnNlZFVSTDtcblxuXHRcdC8vIE5vcm1hbGl6ZSBpbnB1dCBhbmQgZm9yY2UgVVJMIHRvIGJlIGVuY29kZWQgYXMgVVRGLTggKGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlLWZldGNoL25vZGUtZmV0Y2gvaXNzdWVzLzI0NSlcblx0XHRpZiAoaXNSZXF1ZXN0KGlucHV0KSkge1xuXHRcdFx0cGFyc2VkVVJMID0gbmV3IFVSTChpbnB1dC51cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXJzZWRVUkwgPSBuZXcgVVJMKGlucHV0KTtcblx0XHRcdGlucHV0ID0ge307XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnNlZFVSTC51c2VybmFtZSAhPT0gJycgfHwgcGFyc2VkVVJMLnBhc3N3b3JkICE9PSAnJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgJHtwYXJzZWRVUkx9IGlzIGFuIHVybCB3aXRoIGVtYmVkZGVkIGNyZWRlbnRpYWxzLmApO1xuXHRcdH1cblxuXHRcdGxldCBtZXRob2QgPSBpbml0Lm1ldGhvZCB8fCBpbnB1dC5tZXRob2QgfHwgJ0dFVCc7XG5cdFx0aWYgKC9eKGRlbGV0ZXxnZXR8aGVhZHxvcHRpb25zfHBvc3R8cHV0KSQvaS50ZXN0KG1ldGhvZCkpIHtcblx0XHRcdG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdGlmICghaXNSZXF1ZXN0KGluaXQpICYmICdkYXRhJyBpbiBpbml0KSB7XG5cdFx0XHRkb0JhZERhdGFXYXJuKCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsIGVxZXFlcVxuXHRcdGlmICgoaW5pdC5ib2R5ICE9IG51bGwgfHwgKGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCkpICYmXG5cdFx0XHQobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdIRUFEJykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlcXVlc3Qgd2l0aCBHRVQvSEVBRCBtZXRob2QgY2Fubm90IGhhdmUgYm9keScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0Qm9keSA9IGluaXQuYm9keSA/XG5cdFx0XHRpbml0LmJvZHkgOlxuXHRcdFx0KGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCA/XG5cdFx0XHRcdGNsb25lKGlucHV0KSA6XG5cdFx0XHRcdG51bGwpO1xuXG5cdFx0c3VwZXIoaW5wdXRCb2R5LCB7XG5cdFx0XHRzaXplOiBpbml0LnNpemUgfHwgaW5wdXQuc2l6ZSB8fCAwXG5cdFx0fSk7XG5cblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IGlucHV0LmhlYWRlcnMgfHwge30pO1xuXG5cdFx0aWYgKGlucHV0Qm9keSAhPT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShpbnB1dEJvZHksIHRoaXMpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNpZ25hbCA9IGlzUmVxdWVzdChpbnB1dCkgP1xuXHRcdFx0aW5wdXQuc2lnbmFsIDpcblx0XHRcdG51bGw7XG5cdFx0aWYgKCdzaWduYWwnIGluIGluaXQpIHtcblx0XHRcdHNpZ25hbCA9IGluaXQuc2lnbmFsO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLCBlcWVxZXFcblx0XHRpZiAoc2lnbmFsICE9IG51bGwgJiYgIWlzQWJvcnRTaWduYWwoc2lnbmFsKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwgb3IgRXZlbnRUYXJnZXQnKTtcblx0XHR9XG5cblx0XHQvLyDCpzUuNCwgUmVxdWVzdCBjb25zdHJ1Y3RvciBzdGVwcywgc3RlcCAxNS4xXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsIGVxZXFlcVxuXHRcdGxldCByZWZlcnJlciA9IGluaXQucmVmZXJyZXIgPT0gbnVsbCA/IGlucHV0LnJlZmVycmVyIDogaW5pdC5yZWZlcnJlcjtcblx0XHRpZiAocmVmZXJyZXIgPT09ICcnKSB7XG5cdFx0XHQvLyDCpzUuNCwgUmVxdWVzdCBjb25zdHJ1Y3RvciBzdGVwcywgc3RlcCAxNS4yXG5cdFx0XHRyZWZlcnJlciA9ICduby1yZWZlcnJlcic7XG5cdFx0fSBlbHNlIGlmIChyZWZlcnJlcikge1xuXHRcdFx0Ly8gwqc1LjQsIFJlcXVlc3QgY29uc3RydWN0b3Igc3RlcHMsIHN0ZXAgMTUuMy4xLCAxNS4zLjJcblx0XHRcdGNvbnN0IHBhcnNlZFJlZmVycmVyID0gbmV3IFVSTChyZWZlcnJlcik7XG5cdFx0XHQvLyDCpzUuNCwgUmVxdWVzdCBjb25zdHJ1Y3RvciBzdGVwcywgc3RlcCAxNS4zLjMsIDE1LjMuNFxuXHRcdFx0cmVmZXJyZXIgPSAvXmFib3V0OihcXC9cXC8pP2NsaWVudCQvLnRlc3QocGFyc2VkUmVmZXJyZXIpID8gJ2NsaWVudCcgOiBwYXJzZWRSZWZlcnJlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVmZXJyZXIgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFNdID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0cmVkaXJlY3Q6IGluaXQucmVkaXJlY3QgfHwgaW5wdXQucmVkaXJlY3QgfHwgJ2ZvbGxvdycsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0cGFyc2VkVVJMLFxuXHRcdFx0c2lnbmFsLFxuXHRcdFx0cmVmZXJyZXJcblx0XHR9O1xuXG5cdFx0Ly8gTm9kZS1mZXRjaC1vbmx5IG9wdGlvbnNcblx0XHR0aGlzLmZvbGxvdyA9IGluaXQuZm9sbG93ID09PSB1bmRlZmluZWQgPyAoaW5wdXQuZm9sbG93ID09PSB1bmRlZmluZWQgPyAyMCA6IGlucHV0LmZvbGxvdykgOiBpbml0LmZvbGxvdztcblx0XHR0aGlzLmNvbXByZXNzID0gaW5pdC5jb21wcmVzcyA9PT0gdW5kZWZpbmVkID8gKGlucHV0LmNvbXByZXNzID09PSB1bmRlZmluZWQgPyB0cnVlIDogaW5wdXQuY29tcHJlc3MpIDogaW5pdC5jb21wcmVzcztcblx0XHR0aGlzLmNvdW50ZXIgPSBpbml0LmNvdW50ZXIgfHwgaW5wdXQuY291bnRlciB8fCAwO1xuXHRcdHRoaXMuYWdlbnQgPSBpbml0LmFnZW50IHx8IGlucHV0LmFnZW50O1xuXHRcdHRoaXMuaGlnaFdhdGVyTWFyayA9IGluaXQuaGlnaFdhdGVyTWFyayB8fCBpbnB1dC5oaWdoV2F0ZXJNYXJrIHx8IDE2Mzg0O1xuXHRcdHRoaXMuaW5zZWN1cmVIVFRQUGFyc2VyID0gaW5pdC5pbnNlY3VyZUhUVFBQYXJzZXIgfHwgaW5wdXQuaW5zZWN1cmVIVFRQUGFyc2VyIHx8IGZhbHNlO1xuXG5cdFx0Ly8gwqc1LjQsIFJlcXVlc3QgY29uc3RydWN0b3Igc3RlcHMsIHN0ZXAgMTYuXG5cdFx0Ly8gRGVmYXVsdCBpcyBlbXB0eSBzdHJpbmcgcGVyIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LXJlcXVlc3QtcmVmZXJyZXItcG9saWN5XG5cdFx0dGhpcy5yZWZlcnJlclBvbGljeSA9IGluaXQucmVmZXJyZXJQb2xpY3kgfHwgaW5wdXQucmVmZXJyZXJQb2xpY3kgfHwgJyc7XG5cdH1cblxuXHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0Z2V0IG1ldGhvZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLm1ldGhvZDtcblx0fVxuXG5cdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiBmb3JtYXRVcmwodGhpc1tJTlRFUk5BTFNdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHQvKiogQHJldHVybnMge0hlYWRlcnN9ICovXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnJlZGlyZWN0O1xuXHR9XG5cblx0LyoqIEByZXR1cm5zIHtBYm9ydFNpZ25hbH0gKi9cblx0Z2V0IHNpZ25hbCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnNpZ25hbDtcblx0fVxuXG5cdC8vIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdC1yZWZlcnJlclxuXHRnZXQgcmVmZXJyZXIoKSB7XG5cdFx0aWYgKHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlciA9PT0gJ25vLXJlZmVycmVyJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzW0lOVEVSTkFMU10ucmVmZXJyZXIgPT09ICdjbGllbnQnKSB7XG5cdFx0XHRyZXR1cm4gJ2Fib3V0OmNsaWVudCc7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlcikge1xuXHRcdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlci50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRnZXQgcmVmZXJyZXJQb2xpY3koKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlclBvbGljeTtcblx0fVxuXG5cdHNldCByZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuXHRcdHRoaXNbSU5URVJOQUxTXS5yZWZlcnJlclBvbGljeSA9IHZhbGlkYXRlUmVmZXJyZXJQb2xpY3kocmVmZXJyZXJQb2xpY3kpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb25lIHRoaXMgcmVxdWVzdFxuXHQgKlxuXHQgKiBAcmV0dXJuICBSZXF1ZXN0XG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuICdSZXF1ZXN0Jztcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXF1ZXN0LnByb3RvdHlwZSwge1xuXHRtZXRob2Q6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0dXJsOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGhlYWRlcnM6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0cmVkaXJlY3Q6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0Y2xvbmU6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0c2lnbmFsOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHJlZmVycmVyOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHJlZmVycmVyUG9saWN5OiB7ZW51bWVyYWJsZTogdHJ1ZX1cbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBSZXF1ZXN0IHRvIE5vZGUuanMgaHR0cCByZXF1ZXN0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IC0gQSBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcmV0dXJuIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmV4cG9ydCBjb25zdCBnZXROb2RlUmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0ID0+IHtcblx0Y29uc3Qge3BhcnNlZFVSTH0gPSByZXF1ZXN0W0lOVEVSTkFMU107XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0W0lOVEVSTkFMU10uaGVhZGVycyk7XG5cblx0Ly8gRmV0Y2ggc3RlcCAxLjNcblx0aWYgKCFoZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0JywgJyovKicpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT09IG51bGwgJiYgL14ocG9zdHxwdXQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG5cdFx0Y29udGVudExlbmd0aFZhbHVlID0gJzAnO1xuXHR9XG5cblx0aWYgKHJlcXVlc3QuYm9keSAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpO1xuXHRcdC8vIFNldCBDb250ZW50LUxlbmd0aCBpZiB0b3RhbEJ5dGVzIGlzIGEgbnVtYmVyICh0aGF0IGlzIG5vdCBOYU4pXG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKHRvdGFsQnl0ZXMpKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbnRlbnRMZW5ndGhWYWx1ZSkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIGNvbnRlbnRMZW5ndGhWYWx1ZSk7XG5cdH1cblxuXHQvLyA0LjEuIE1haW4gZmV0Y2gsIHN0ZXAgMi42XG5cdC8vID4gSWYgcmVxdWVzdCdzIHJlZmVycmVyIHBvbGljeSBpcyB0aGUgZW1wdHkgc3RyaW5nLCB0aGVuIHNldCByZXF1ZXN0J3MgcmVmZXJyZXIgcG9saWN5IHRvIHRoZVxuXHQvLyA+IGRlZmF1bHQgcmVmZXJyZXIgcG9saWN5LlxuXHRpZiAocmVxdWVzdC5yZWZlcnJlclBvbGljeSA9PT0gJycpIHtcblx0XHRyZXF1ZXN0LnJlZmVycmVyUG9saWN5ID0gREVGQVVMVF9SRUZFUlJFUl9QT0xJQ1k7XG5cdH1cblxuXHQvLyA0LjEuIE1haW4gZmV0Y2gsIHN0ZXAgMi43XG5cdC8vID4gSWYgcmVxdWVzdCdzIHJlZmVycmVyIGlzIG5vdCBcIm5vLXJlZmVycmVyXCIsIHNldCByZXF1ZXN0J3MgcmVmZXJyZXIgdG8gdGhlIHJlc3VsdCBvZiBpbnZva2luZ1xuXHQvLyA+IGRldGVybWluZSByZXF1ZXN0J3MgcmVmZXJyZXIuXG5cdGlmIChyZXF1ZXN0LnJlZmVycmVyICYmIHJlcXVlc3QucmVmZXJyZXIgIT09ICduby1yZWZlcnJlcicpIHtcblx0XHRyZXF1ZXN0W0lOVEVSTkFMU10ucmVmZXJyZXIgPSBkZXRlcm1pbmVSZXF1ZXN0c1JlZmVycmVyKHJlcXVlc3QpO1xuXHR9IGVsc2Uge1xuXHRcdHJlcXVlc3RbSU5URVJOQUxTXS5yZWZlcnJlciA9ICduby1yZWZlcnJlcic7XG5cdH1cblxuXHQvLyA0LjUuIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCwgc3RlcCA2Ljlcblx0Ly8gPiBJZiBodHRwUmVxdWVzdCdzIHJlZmVycmVyIGlzIGEgVVJMLCB0aGVuIGFwcGVuZCBgUmVmZXJlcmAvaHR0cFJlcXVlc3QncyByZWZlcnJlciwgc2VyaWFsaXplZFxuXHQvLyA+ICBhbmQgaXNvbW9ycGhpYyBlbmNvZGVkLCB0byBodHRwUmVxdWVzdCdzIGhlYWRlciBsaXN0LlxuXHRpZiAocmVxdWVzdFtJTlRFUk5BTFNdLnJlZmVycmVyIGluc3RhbmNlb2YgVVJMKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1JlZmVyZXInLCByZXF1ZXN0LnJlZmVycmVyKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTFcblx0aWYgKCFoZWFkZXJzLmhhcygnVXNlci1BZ2VudCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnbm9kZS1mZXRjaCcpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xNVxuXHRpZiAocmVxdWVzdC5jb21wcmVzcyAmJiAhaGVhZGVycy5oYXMoJ0FjY2VwdC1FbmNvZGluZycpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLCBkZWZsYXRlLCBicicpO1xuXHR9XG5cblx0bGV0IHthZ2VudH0gPSByZXF1ZXN0O1xuXHRpZiAodHlwZW9mIGFnZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0YWdlbnQgPSBhZ2VudChwYXJzZWRVUkwpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgNC4yXG5cdC8vIGNodW5rZWQgZW5jb2RpbmcgaXMgaGFuZGxlZCBieSBOb2RlLmpzXG5cblx0Y29uc3Qgc2VhcmNoID0gZ2V0U2VhcmNoKHBhcnNlZFVSTCk7XG5cblx0Ly8gUGFzcyB0aGUgZnVsbCBVUkwgZGlyZWN0bHkgdG8gcmVxdWVzdCgpLCBidXQgb3ZlcndyaXRlIHRoZSBmb2xsb3dpbmdcblx0Ly8gb3B0aW9uczpcblx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHQvLyBPdmVyd3JpdGUgc2VhcmNoIHRvIHJldGFpbiB0cmFpbGluZyA/IChpc3N1ZSAjNzc2KVxuXHRcdHBhdGg6IHBhcnNlZFVSTC5wYXRobmFtZSArIHNlYXJjaCxcblx0XHQvLyBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIG5vdCBleHByZXNzZWQgaW4gdGhlIFVSTFxuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogaGVhZGVyc1tTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpLFxuXHRcdGluc2VjdXJlSFRUUFBhcnNlcjogcmVxdWVzdC5pbnNlY3VyZUhUVFBQYXJzZXIsXG5cdFx0YWdlbnRcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKiBAdHlwZSB7VVJMfSAqL1xuXHRcdHBhcnNlZFVSTCxcblx0XHRvcHRpb25zXG5cdH07XG59O1xuIiwiLyoqXG4gKiBSZXNwb25zZS5qc1xuICpcbiAqIFJlc3BvbnNlIGNsYXNzIHByb3ZpZGVzIGNvbnRlbnQgZGVjb2RpbmdcbiAqL1xuXG5pbXBvcnQgSGVhZGVycyBmcm9tICcuL2hlYWRlcnMuanMnO1xuaW1wb3J0IEJvZHksIHtjbG9uZSwgZXh0cmFjdENvbnRlbnRUeXBlfSBmcm9tICcuL2JvZHkuanMnO1xuaW1wb3J0IHtpc1JlZGlyZWN0fSBmcm9tICcuL3V0aWxzL2lzLXJlZGlyZWN0LmpzJztcblxuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKCdSZXNwb25zZSBpbnRlcm5hbHMnKTtcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlLWNsYXNzXG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIEJvZHkge1xuXHRjb25zdHJ1Y3Rvcihib2R5ID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0c3VwZXIoYm9keSwgb3B0aW9ucyk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCwgZXFlcWVxLCBuby1uZWdhdGVkLWNvbmRpdGlvblxuXHRcdGNvbnN0IHN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzICE9IG51bGwgPyBvcHRpb25zLnN0YXR1cyA6IDIwMDtcblxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuXG5cdFx0aWYgKGJvZHkgIT09IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoYm9keSwgdGhpcyk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0XHR0eXBlOiAnZGVmYXVsdCcsXG5cdFx0XHR1cmw6IG9wdGlvbnMudXJsLFxuXHRcdFx0c3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogb3B0aW9ucy5zdGF0dXNUZXh0IHx8ICcnLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGNvdW50ZXI6IG9wdGlvbnMuY291bnRlcixcblx0XHRcdGhpZ2hXYXRlck1hcms6IG9wdGlvbnMuaGlnaFdhdGVyTWFya1xuXHRcdH07XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnR5cGU7XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10udXJsIHx8ICcnO1xuXHR9XG5cblx0Z2V0IHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnN0YXR1cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcblx0ICovXG5cdGdldCBvaygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnN0YXR1cyA+PSAyMDAgJiYgdGhpc1tJTlRFUk5BTFNdLnN0YXR1cyA8IDMwMDtcblx0fVxuXG5cdGdldCByZWRpcmVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uY291bnRlciA+IDA7XG5cdH1cblxuXHRnZXQgc3RhdHVzVGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnN0YXR1c1RleHQ7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmhlYWRlcnM7XG5cdH1cblxuXHRnZXQgaGlnaFdhdGVyTWFyaygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmhpZ2hXYXRlck1hcms7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvbmUgdGhpcyByZXNwb25zZVxuXHQgKlxuXHQgKiBAcmV0dXJuICBSZXNwb25zZVxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShjbG9uZSh0aGlzLCB0aGlzLmhpZ2hXYXRlck1hcmspLCB7XG5cdFx0XHR0eXBlOiB0aGlzLnR5cGUsXG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkLFxuXHRcdFx0c2l6ZTogdGhpcy5zaXplLFxuXHRcdFx0aGlnaFdhdGVyTWFyazogdGhpcy5oaWdoV2F0ZXJNYXJrXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICBUaGUgVVJMIHRoYXQgdGhlIG5ldyByZXNwb25zZSBpcyB0byBvcmlnaW5hdGUgZnJvbS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyBBbiBvcHRpb25hbCBzdGF0dXMgY29kZSBmb3IgdGhlIHJlc3BvbnNlIChlLmcuLCAzMDIuKVxuXHQgKiBAcmV0dXJucyB7UmVzcG9uc2V9ICAgIEEgUmVzcG9uc2Ugb2JqZWN0LlxuXHQgKi9cblx0c3RhdGljIHJlZGlyZWN0KHVybCwgc3RhdHVzID0gMzAyKSB7XG5cdFx0aWYgKCFpc1JlZGlyZWN0KHN0YXR1cykpIHtcblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcInJlZGlyZWN0XCIgb24gXCJyZXNwb25zZVwiOiBJbnZhbGlkIHN0YXR1cyBjb2RlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdGxvY2F0aW9uOiBuZXcgVVJMKHVybCkudG9TdHJpbmcoKVxuXHRcdFx0fSxcblx0XHRcdHN0YXR1c1xuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIGVycm9yKCkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG5cdFx0cmVzcG9uc2VbSU5URVJOQUxTXS50eXBlID0gJ2Vycm9yJztcblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH1cblxuXHRzdGF0aWMganNvbihkYXRhID0gdW5kZWZpbmVkLCBpbml0ID0ge30pIHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cblx0XHRpZiAoYm9keSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIGlzIG5vdCBKU09OIHNlcmlhbGl6YWJsZScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0ICYmIGluaXQuaGVhZGVycyk7XG5cblx0XHRpZiAoIWhlYWRlcnMuaGFzKCdjb250ZW50LXR5cGUnKSkge1xuXHRcdFx0aGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCB7XG5cdFx0XHQuLi5pbml0LFxuXHRcdFx0aGVhZGVyc1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuXHRcdHJldHVybiAnUmVzcG9uc2UnO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlc3BvbnNlLnByb3RvdHlwZSwge1xuXHR0eXBlOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHVybDoge2VudW1lcmFibGU6IHRydWV9LFxuXHRzdGF0dXM6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0b2s6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0cmVkaXJlY3RlZDoge2VudW1lcmFibGU6IHRydWV9LFxuXHRzdGF0dXNUZXh0OiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGhlYWRlcnM6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0Y2xvbmU6IHtlbnVtZXJhYmxlOiB0cnVlfVxufSk7XG4iLCJleHBvcnQgY29uc3QgZ2V0U2VhcmNoID0gcGFyc2VkVVJMID0+IHtcblx0aWYgKHBhcnNlZFVSTC5zZWFyY2gpIHtcblx0XHRyZXR1cm4gcGFyc2VkVVJMLnNlYXJjaDtcblx0fVxuXG5cdGNvbnN0IGxhc3RPZmZzZXQgPSBwYXJzZWRVUkwuaHJlZi5sZW5ndGggLSAxO1xuXHRjb25zdCBoYXNoID0gcGFyc2VkVVJMLmhhc2ggfHwgKHBhcnNlZFVSTC5ocmVmW2xhc3RPZmZzZXRdID09PSAnIycgPyAnIycgOiAnJyk7XG5cdHJldHVybiBwYXJzZWRVUkwuaHJlZltsYXN0T2Zmc2V0IC0gaGFzaC5sZW5ndGhdID09PSAnPycgPyAnPycgOiAnJztcbn07XG4iLCJjb25zdCByZWRpcmVjdFN0YXR1cyA9IG5ldyBTZXQoWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XSk7XG5cbi8qKlxuICogUmVkaXJlY3QgY29kZSBtYXRjaGluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlIC0gU3RhdHVzIGNvZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc1JlZGlyZWN0ID0gY29kZSA9PiB7XG5cdHJldHVybiByZWRpcmVjdFN0YXR1cy5oYXMoY29kZSk7XG59O1xuIiwiLyoqXG4gKiBJcy5qc1xuICpcbiAqIE9iamVjdCB0eXBlIGNoZWNrcy5cbiAqL1xuXG5jb25zdCBOQU1FID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICogcmVmOiBodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoL2lzc3Vlcy8yOTYjaXNzdWVjb21tZW50LTMwNzU5ODE0M1xuICogQHBhcmFtIHsqfSBvYmplY3QgLSBPYmplY3QgdG8gY2hlY2sgZm9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNVUkxTZWFyY2hQYXJhbWV0ZXJzID0gb2JqZWN0ID0+IHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuYXBwZW5kID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5kZWxldGUgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmdldCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuZ2V0QWxsID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5oYXMgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LnNldCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3Quc29ydCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdG9iamVjdFtOQU1FXSA9PT0gJ1VSTFNlYXJjaFBhcmFtcydcblx0KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamVjdGAgaXMgYSBXM0MgYEJsb2JgIG9iamVjdCAod2hpY2ggYEZpbGVgIGluaGVyaXRzIGZyb20pXG4gKiBAcGFyYW0geyp9IG9iamVjdCAtIE9iamVjdCB0byBjaGVjayBmb3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc0Jsb2IgPSBvYmplY3QgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdG9iamVjdCAmJlxuXHRcdHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIG9iamVjdC5hcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QudHlwZSA9PT0gJ3N0cmluZycgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiZcblx0XHQvXihCbG9ifEZpbGUpJC8udGVzdChvYmplY3RbTkFNRV0pXG5cdCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIGluc3RhbmNlIG9mIEFib3J0U2lnbmFsLlxuICogQHBhcmFtIHsqfSBvYmplY3QgLSBPYmplY3QgdG8gY2hlY2sgZm9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNBYm9ydFNpZ25hbCA9IG9iamVjdCA9PiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgKFxuXHRcdFx0b2JqZWN0W05BTUVdID09PSAnQWJvcnRTaWduYWwnIHx8XG5cdFx0XHRvYmplY3RbTkFNRV0gPT09ICdFdmVudFRhcmdldCdcblx0XHQpXG5cdCk7XG59O1xuXG4vKipcbiAqIGlzRG9tYWluT3JTdWJkb21haW4gcmVwb3J0cyB3aGV0aGVyIHN1YiBpcyBhIHN1YmRvbWFpbiAob3IgZXhhY3QgbWF0Y2gpIG9mXG4gKiB0aGUgcGFyZW50IGRvbWFpbi5cbiAqXG4gKiBCb3RoIGRvbWFpbnMgbXVzdCBhbHJlYWR5IGJlIGluIGNhbm9uaWNhbCBmb3JtLlxuICogQHBhcmFtIHtzdHJpbmd8VVJMfSBvcmlnaW5hbFxuICogQHBhcmFtIHtzdHJpbmd8VVJMfSBkZXN0aW5hdGlvblxuICovXG5leHBvcnQgY29uc3QgaXNEb21haW5PclN1YmRvbWFpbiA9IChkZXN0aW5hdGlvbiwgb3JpZ2luYWwpID0+IHtcblx0Y29uc3Qgb3JpZyA9IG5ldyBVUkwob3JpZ2luYWwpLmhvc3RuYW1lO1xuXHRjb25zdCBkZXN0ID0gbmV3IFVSTChkZXN0aW5hdGlvbikuaG9zdG5hbWU7XG5cblx0cmV0dXJuIG9yaWcgPT09IGRlc3QgfHwgb3JpZy5lbmRzV2l0aChgLiR7ZGVzdH1gKTtcbn07XG5cbi8qKlxuICogaXNTYW1lUHJvdG9jb2wgcmVwb3J0cyB3aGV0aGVyIHRoZSB0d28gcHJvdmlkZWQgVVJMcyB1c2UgdGhlIHNhbWUgcHJvdG9jb2wuXG4gKlxuICogQm90aCBkb21haW5zIG11c3QgYWxyZWFkeSBiZSBpbiBjYW5vbmljYWwgZm9ybS5cbiAqIEBwYXJhbSB7c3RyaW5nfFVSTH0gb3JpZ2luYWxcbiAqIEBwYXJhbSB7c3RyaW5nfFVSTH0gZGVzdGluYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2FtZVByb3RvY29sID0gKGRlc3RpbmF0aW9uLCBvcmlnaW5hbCkgPT4ge1xuXHRjb25zdCBvcmlnID0gbmV3IFVSTChvcmlnaW5hbCkucHJvdG9jb2w7XG5cdGNvbnN0IGRlc3QgPSBuZXcgVVJMKGRlc3RpbmF0aW9uKS5wcm90b2NvbDtcblxuXHRyZXR1cm4gb3JpZyA9PT0gZGVzdDtcbn07XG4iLCJpbXBvcnQge2lzSVB9IGZyb20gJ25vZGU6bmV0JztcblxuLyoqXG4gKiBAZXh0ZXJuYWwgVVJMXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVVJMfFVSTH1cbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgdXRpbHMvcmVmZXJyZXJcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjLXJlZmVycmVyLXBvbGljeS8jc3RyaXAtdXJsfFJlZmVycmVyIFBvbGljeSDCpzguNC4gU3RyaXAgdXJsIGZvciB1c2UgYXMgYSByZWZlcnJlcn1cbiAqIEBwYXJhbSB7c3RyaW5nfSBVUkxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29yaWdpbk9ubHk9ZmFsc2VdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFVSTEZvclVzZUFzQVJlZmVycmVyKHVybCwgb3JpZ2luT25seSA9IGZhbHNlKSB7XG5cdC8vIDEuIElmIHVybCBpcyBudWxsLCByZXR1cm4gbm8gcmVmZXJyZXIuXG5cdGlmICh1cmwgPT0gbnVsbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVxLW51bGwsIGVxZXFlcVxuXHRcdHJldHVybiAnbm8tcmVmZXJyZXInO1xuXHR9XG5cblx0dXJsID0gbmV3IFVSTCh1cmwpO1xuXG5cdC8vIDIuIElmIHVybCdzIHNjaGVtZSBpcyBhIGxvY2FsIHNjaGVtZSwgdGhlbiByZXR1cm4gbm8gcmVmZXJyZXIuXG5cdGlmICgvXihhYm91dHxibG9ifGRhdGEpOiQvLnRlc3QodXJsLnByb3RvY29sKSkge1xuXHRcdHJldHVybiAnbm8tcmVmZXJyZXInO1xuXHR9XG5cblx0Ly8gMy4gU2V0IHVybCdzIHVzZXJuYW1lIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdHVybC51c2VybmFtZSA9ICcnO1xuXG5cdC8vIDQuIFNldCB1cmwncyBwYXNzd29yZCB0byBudWxsLlxuXHQvLyBOb3RlOiBgbnVsbGAgYXBwZWFycyB0byBiZSBhIG1pc3Rha2UgYXMgdGhpcyBhY3R1YWxseSByZXN1bHRzIGluIHRoZSBwYXNzd29yZCBiZWluZyBgXCJudWxsXCJgLlxuXHR1cmwucGFzc3dvcmQgPSAnJztcblxuXHQvLyA1LiBTZXQgdXJsJ3MgZnJhZ21lbnQgdG8gbnVsbC5cblx0Ly8gTm90ZTogYG51bGxgIGFwcGVhcnMgdG8gYmUgYSBtaXN0YWtlIGFzIHRoaXMgYWN0dWFsbHkgcmVzdWx0cyBpbiB0aGUgZnJhZ21lbnQgYmVpbmcgYFwiI251bGxcImAuXG5cdHVybC5oYXNoID0gJyc7XG5cblx0Ly8gNi4gSWYgdGhlIG9yaWdpbi1vbmx5IGZsYWcgaXMgdHJ1ZSwgdGhlbjpcblx0aWYgKG9yaWdpbk9ubHkpIHtcblx0XHQvLyA2LjEuIFNldCB1cmwncyBwYXRoIHRvIG51bGwuXG5cdFx0Ly8gTm90ZTogYG51bGxgIGFwcGVhcnMgdG8gYmUgYSBtaXN0YWtlIGFzIHRoaXMgYWN0dWFsbHkgcmVzdWx0cyBpbiB0aGUgcGF0aCBiZWluZyBgXCIvbnVsbFwiYC5cblx0XHR1cmwucGF0aG5hbWUgPSAnJztcblxuXHRcdC8vIDYuMi4gU2V0IHVybCdzIHF1ZXJ5IHRvIG51bGwuXG5cdFx0Ly8gTm90ZTogYG51bGxgIGFwcGVhcnMgdG8gYmUgYSBtaXN0YWtlIGFzIHRoaXMgYWN0dWFsbHkgcmVzdWx0cyBpbiB0aGUgcXVlcnkgYmVpbmcgYFwiP251bGxcImAuXG5cdFx0dXJsLnNlYXJjaCA9ICcnO1xuXHR9XG5cblx0Ly8gNy4gUmV0dXJuIHVybC5cblx0cmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjLXJlZmVycmVyLXBvbGljeS8jZW51bWRlZi1yZWZlcnJlcnBvbGljeXxlbnVtIFJlZmVycmVyUG9saWN5fVxuICovXG5leHBvcnQgY29uc3QgUmVmZXJyZXJQb2xpY3kgPSBuZXcgU2V0KFtcblx0JycsXG5cdCduby1yZWZlcnJlcicsXG5cdCduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZScsXG5cdCdzYW1lLW9yaWdpbicsXG5cdCdvcmlnaW4nLFxuXHQnc3RyaWN0LW9yaWdpbicsXG5cdCdvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nLFxuXHQnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXG5cdCd1bnNhZmUtdXJsJ1xuXSk7XG5cbi8qKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI2RlZmF1bHQtcmVmZXJyZXItcG9saWN5fGRlZmF1bHQgcmVmZXJyZXIgcG9saWN5fVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRUZFUlJFUl9QT0xJQ1kgPSAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbic7XG5cbi8qKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI3JlZmVycmVyLXBvbGljaWVzfFJlZmVycmVyIFBvbGljeSDCpzMuIFJlZmVycmVyIFBvbGljaWVzfVxuICogQHBhcmFtIHtzdHJpbmd9IHJlZmVycmVyUG9saWN5XG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZWZlcnJlclBvbGljeVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuXHRpZiAoIVJlZmVycmVyUG9saWN5LmhhcyhyZWZlcnJlclBvbGljeSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHJlZmVycmVyUG9saWN5OiAke3JlZmVycmVyUG9saWN5fWApO1xuXHR9XG5cblx0cmV0dXJuIHJlZmVycmVyUG9saWN5O1xufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtc2VjdXJlLWNvbnRleHRzLyNpcy1vcmlnaW4tdHJ1c3R3b3J0aHl8UmVmZXJyZXIgUG9saWN5IMKnMy4yLiBJcyBvcmlnaW4gcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHk/fVxuICogQHBhcmFtIHtleHRlcm5hbDpVUkx9IHVybFxuICogQHJldHVybnMgYHRydWVgOiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIsIGBmYWxzZWA6IFwiTm90IFRydXN0d29ydGh5XCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT3JpZ2luUG90ZW50aWFsbHlUcnVzdHdvcnRoeSh1cmwpIHtcblx0Ly8gMS4gSWYgb3JpZ2luIGlzIGFuIG9wYXF1ZSBvcmlnaW4sIHJldHVybiBcIk5vdCBUcnVzdHdvcnRoeVwiLlxuXHQvLyBOb3QgYXBwbGljYWJsZVxuXG5cdC8vIDIuIEFzc2VydDogb3JpZ2luIGlzIGEgdHVwbGUgb3JpZ2luLlxuXHQvLyBOb3QgZm9yIGltcGxlbWVudGF0aW9uc1xuXG5cdC8vIDMuIElmIG9yaWdpbidzIHNjaGVtZSBpcyBlaXRoZXIgXCJodHRwc1wiIG9yIFwid3NzXCIsIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdGlmICgvXihodHRwfHdzKXM6JC8udGVzdCh1cmwucHJvdG9jb2wpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyA0LiBJZiBvcmlnaW4ncyBob3N0IGNvbXBvbmVudCBtYXRjaGVzIG9uZSBvZiB0aGUgQ0lEUiBub3RhdGlvbnMgMTI3LjAuMC4wLzggb3IgOjoxLzEyOCBbUkZDNDYzMl0sIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdGNvbnN0IGhvc3RJcCA9IHVybC5ob3N0LnJlcGxhY2UoLyheXFxbKXwoXSQpL2csICcnKTtcblx0Y29uc3QgaG9zdElQVmVyc2lvbiA9IGlzSVAoaG9zdElwKTtcblxuXHRpZiAoaG9zdElQVmVyc2lvbiA9PT0gNCAmJiAvXjEyN1xcLi8udGVzdChob3N0SXApKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoaG9zdElQVmVyc2lvbiA9PT0gNiAmJiAvXigoKDArOil7N30pfCg6OigwKzopezAsNn0pKTAqMSQvLnRlc3QoaG9zdElwKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gNS4gSWYgb3JpZ2luJ3MgaG9zdCBjb21wb25lbnQgaXMgXCJsb2NhbGhvc3RcIiBvciBmYWxscyB3aXRoaW4gXCIubG9jYWxob3N0XCIsIGFuZCB0aGUgdXNlciBhZ2VudCBjb25mb3JtcyB0byB0aGUgbmFtZSByZXNvbHV0aW9uIHJ1bGVzIGluIFtsZXQtbG9jYWxob3N0LWJlLWxvY2FsaG9zdF0sIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdC8vIFdlIGFyZSByZXR1cm5pbmcgRkFMU0UgaGVyZSBiZWNhdXNlIHdlIGNhbm5vdCBlbnN1cmUgY29uZm9ybWFuY2UgdG9cblx0Ly8gbGV0LWxvY2FsaG9zdC1iZS1sb2FsaG9zdCAoaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LXdlc3QtbGV0LWxvY2FsaG9zdC1iZS1sb2NhbGhvc3QpXG5cdGlmICh1cmwuaG9zdCA9PT0gJ2xvY2FsaG9zdCcgfHwgdXJsLmhvc3QuZW5kc1dpdGgoJy5sb2NhbGhvc3QnKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIDYuIElmIG9yaWdpbidzIHNjaGVtZSBjb21wb25lbnQgaXMgZmlsZSwgcmV0dXJuIFwiUG90ZW50aWFsbHkgVHJ1c3R3b3J0aHlcIi5cblx0aWYgKHVybC5wcm90b2NvbCA9PT0gJ2ZpbGU6Jykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gNy4gSWYgb3JpZ2luJ3Mgc2NoZW1lIGNvbXBvbmVudCBpcyBvbmUgd2hpY2ggdGhlIHVzZXIgYWdlbnQgY29uc2lkZXJzIHRvIGJlIGF1dGhlbnRpY2F0ZWQsIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdC8vIE5vdCBzdXBwb3J0ZWRcblxuXHQvLyA4LiBJZiBvcmlnaW4gaGFzIGJlZW4gY29uZmlndXJlZCBhcyBhIHRydXN0d29ydGh5IG9yaWdpbiwgcmV0dXJuIFwiUG90ZW50aWFsbHkgVHJ1c3R3b3J0aHlcIi5cblx0Ly8gTm90IHN1cHBvcnRlZFxuXG5cdC8vIDkuIFJldHVybiBcIk5vdCBUcnVzdHdvcnRoeVwiLlxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1zZWN1cmUtY29udGV4dHMvI2lzLXVybC10cnVzdHdvcnRoeXxSZWZlcnJlciBQb2xpY3kgwqczLjMuIElzIHVybCBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeT99XG4gKiBAcGFyYW0ge2V4dGVybmFsOlVSTH0gdXJsXG4gKiBAcmV0dXJucyBgdHJ1ZWA6IFwiUG90ZW50aWFsbHkgVHJ1c3R3b3J0aHlcIiwgYGZhbHNlYDogXCJOb3QgVHJ1c3R3b3J0aHlcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVcmxQb3RlbnRpYWxseVRydXN0d29ydGh5KHVybCkge1xuXHQvLyAxLiBJZiB1cmwgaXMgXCJhYm91dDpibGFua1wiIG9yIFwiYWJvdXQ6c3JjZG9jXCIsIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdGlmICgvXmFib3V0OihibGFua3xzcmNkb2MpJC8udGVzdCh1cmwpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyAyLiBJZiB1cmwncyBzY2hlbWUgaXMgXCJkYXRhXCIsIHJldHVybiBcIlBvdGVudGlhbGx5IFRydXN0d29ydGh5XCIuXG5cdGlmICh1cmwucHJvdG9jb2wgPT09ICdkYXRhOicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIE5vdGU6IFRoZSBvcmlnaW4gb2YgYmxvYjogYW5kIGZpbGVzeXN0ZW06IFVSTHMgaXMgdGhlIG9yaWdpbiBvZiB0aGUgY29udGV4dCBpbiB3aGljaCB0aGV5IHdlcmVcblx0Ly8gY3JlYXRlZC4gVGhlcmVmb3JlLCBibG9icyBjcmVhdGVkIGluIGEgdHJ1c3R3b3J0aHkgb3JpZ2luIHdpbGwgdGhlbXNlbHZlcyBiZSBwb3RlbnRpYWxseVxuXHQvLyB0cnVzdHdvcnRoeS5cblx0aWYgKC9eKGJsb2J8ZmlsZXN5c3RlbSk6JC8udGVzdCh1cmwucHJvdG9jb2wpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyAzLiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBleGVjdXRpbmcgwqczLjIgSXMgb3JpZ2luIHBvdGVudGlhbGx5IHRydXN0d29ydGh5PyBvbiB1cmwncyBvcmlnaW4uXG5cdHJldHVybiBpc09yaWdpblBvdGVudGlhbGx5VHJ1c3R3b3J0aHkodXJsKTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcmVmZXJyZXJVUkwgdG8gZW5mb3JjZSBhbnkgZXh0cmEgc2VjdXJpdHkgcG9saWN5IGNvbnNpZGVyYXRpb25zLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy1yZWZlcnJlci1wb2xpY3kvI2RldGVybWluZS1yZXF1ZXN0cy1yZWZlcnJlcnxSZWZlcnJlciBQb2xpY3kgwqc4LjMuIERldGVybWluZSByZXF1ZXN0J3MgUmVmZXJyZXJ9LCBzdGVwIDdcbiAqIEBjYWxsYmFjayBtb2R1bGU6dXRpbHMvcmVmZXJyZXJ+cmVmZXJyZXJVUkxDYWxsYmFja1xuICogQHBhcmFtIHtleHRlcm5hbDpVUkx9IHJlZmVycmVyVVJMXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6VVJMfSBtb2RpZmllZCByZWZlcnJlclVSTFxuICovXG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHJlZmVycmVyT3JpZ2luIHRvIGVuZm9yY2UgYW55IGV4dHJhIHNlY3VyaXR5IHBvbGljeSBjb25zaWRlcmF0aW9ucy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtcmVmZXJyZXItcG9saWN5LyNkZXRlcm1pbmUtcmVxdWVzdHMtcmVmZXJyZXJ8UmVmZXJyZXIgUG9saWN5IMKnOC4zLiBEZXRlcm1pbmUgcmVxdWVzdCdzIFJlZmVycmVyfSwgc3RlcCA3XG4gKiBAY2FsbGJhY2sgbW9kdWxlOnV0aWxzL3JlZmVycmVyfnJlZmVycmVyT3JpZ2luQ2FsbGJhY2tcbiAqIEBwYXJhbSB7ZXh0ZXJuYWw6VVJMfSByZWZlcnJlck9yaWdpblxuICogQHJldHVybnMge2V4dGVybmFsOlVSTH0gbW9kaWZpZWQgcmVmZXJyZXJPcmlnaW5cbiAqL1xuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtcmVmZXJyZXItcG9saWN5LyNkZXRlcm1pbmUtcmVxdWVzdHMtcmVmZXJyZXJ8UmVmZXJyZXIgUG9saWN5IMKnOC4zLiBEZXRlcm1pbmUgcmVxdWVzdCdzIFJlZmVycmVyfVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHttb2R1bGU6dXRpbHMvcmVmZXJyZXJ+cmVmZXJyZXJVUkxDYWxsYmFja30gby5yZWZlcnJlclVSTENhbGxiYWNrXG4gKiBAcGFyYW0ge21vZHVsZTp1dGlscy9yZWZlcnJlcn5yZWZlcnJlck9yaWdpbkNhbGxiYWNrfSBvLnJlZmVycmVyT3JpZ2luQ2FsbGJhY2tcbiAqIEByZXR1cm5zIHtleHRlcm5hbDpVUkx9IFJlcXVlc3QncyByZWZlcnJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lUmVxdWVzdHNSZWZlcnJlcihyZXF1ZXN0LCB7cmVmZXJyZXJVUkxDYWxsYmFjaywgcmVmZXJyZXJPcmlnaW5DYWxsYmFja30gPSB7fSkge1xuXHQvLyBUaGVyZSBhcmUgMiBub3RlcyBpbiB0aGUgc3BlY2lmaWNhdGlvbiBhYm91dCBpbnZhbGlkIHByZS1jb25kaXRpb25zLiAgV2UgcmV0dXJuIG51bGwsIGhlcmUsIGZvclxuXHQvLyB0aGVzZSBjYXNlczpcblx0Ly8gPiBOb3RlOiBJZiByZXF1ZXN0J3MgcmVmZXJyZXIgaXMgXCJuby1yZWZlcnJlclwiLCBGZXRjaCB3aWxsIG5vdCBjYWxsIGludG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vID4gTm90ZTogSWYgcmVxdWVzdCdzIHJlZmVycmVyIHBvbGljeSBpcyB0aGUgZW1wdHkgc3RyaW5nLCBGZXRjaCB3aWxsIG5vdCBjYWxsIGludG8gdGhpc1xuXHQvLyA+IGFsZ29yaXRobS5cblx0aWYgKHJlcXVlc3QucmVmZXJyZXIgPT09ICduby1yZWZlcnJlcicgfHwgcmVxdWVzdC5yZWZlcnJlclBvbGljeSA9PT0gJycpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIDEuIExldCBwb2xpY3kgYmUgcmVxdWVzdCdzIGFzc29jaWF0ZWQgcmVmZXJyZXIgcG9saWN5LlxuXHRjb25zdCBwb2xpY3kgPSByZXF1ZXN0LnJlZmVycmVyUG9saWN5O1xuXG5cdC8vIDIuIExldCBlbnZpcm9ubWVudCBiZSByZXF1ZXN0J3MgY2xpZW50LlxuXHQvLyBub3QgYXBwbGljYWJsZSB0byBub2RlLmpzXG5cblx0Ly8gMy4gU3dpdGNoIG9uIHJlcXVlc3QncyByZWZlcnJlcjpcblx0aWYgKHJlcXVlc3QucmVmZXJyZXIgPT09ICdhYm91dDpjbGllbnQnKSB7XG5cdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdH1cblxuXHQvLyBcImEgVVJMXCI6IExldCByZWZlcnJlclNvdXJjZSBiZSByZXF1ZXN0J3MgcmVmZXJyZXIuXG5cdGNvbnN0IHJlZmVycmVyU291cmNlID0gcmVxdWVzdC5yZWZlcnJlcjtcblxuXHQvLyA0LiBMZXQgcmVxdWVzdCdzIHJlZmVycmVyVVJMIGJlIHRoZSByZXN1bHQgb2Ygc3RyaXBwaW5nIHJlZmVycmVyU291cmNlIGZvciB1c2UgYXMgYSByZWZlcnJlci5cblx0bGV0IHJlZmVycmVyVVJMID0gc3RyaXBVUkxGb3JVc2VBc0FSZWZlcnJlcihyZWZlcnJlclNvdXJjZSk7XG5cblx0Ly8gNS4gTGV0IHJlZmVycmVyT3JpZ2luIGJlIHRoZSByZXN1bHQgb2Ygc3RyaXBwaW5nIHJlZmVycmVyU291cmNlIGZvciB1c2UgYXMgYSByZWZlcnJlciwgd2l0aCB0aGVcblx0Ly8gICAgb3JpZ2luLW9ubHkgZmxhZyBzZXQgdG8gdHJ1ZS5cblx0bGV0IHJlZmVycmVyT3JpZ2luID0gc3RyaXBVUkxGb3JVc2VBc0FSZWZlcnJlcihyZWZlcnJlclNvdXJjZSwgdHJ1ZSk7XG5cblx0Ly8gNi4gSWYgdGhlIHJlc3VsdCBvZiBzZXJpYWxpemluZyByZWZlcnJlclVSTCBpcyBhIHN0cmluZyB3aG9zZSBsZW5ndGggaXMgZ3JlYXRlciB0aGFuIDQwOTYsIHNldFxuXHQvLyAgICByZWZlcnJlclVSTCB0byByZWZlcnJlck9yaWdpbi5cblx0aWYgKHJlZmVycmVyVVJMLnRvU3RyaW5nKCkubGVuZ3RoID4gNDA5Nikge1xuXHRcdHJlZmVycmVyVVJMID0gcmVmZXJyZXJPcmlnaW47XG5cdH1cblxuXHQvLyA3LiBUaGUgdXNlciBhZ2VudCBNQVkgYWx0ZXIgcmVmZXJyZXJVUkwgb3IgcmVmZXJyZXJPcmlnaW4gYXQgdGhpcyBwb2ludCB0byBlbmZvcmNlIGFyYml0cmFyeVxuXHQvLyAgICBwb2xpY3kgY29uc2lkZXJhdGlvbnMgaW4gdGhlIGludGVyZXN0cyBvZiBtaW5pbWl6aW5nIGRhdGEgbGVha2FnZS4gRm9yIGV4YW1wbGUsIHRoZSB1c2VyXG5cdC8vICAgIGFnZW50IGNvdWxkIHN0cmlwIHRoZSBVUkwgZG93biB0byBhbiBvcmlnaW4sIG1vZGlmeSBpdHMgaG9zdCwgcmVwbGFjZSBpdCB3aXRoIGFuIGVtcHR5XG5cdC8vICAgIHN0cmluZywgZXRjLlxuXHRpZiAocmVmZXJyZXJVUkxDYWxsYmFjaykge1xuXHRcdHJlZmVycmVyVVJMID0gcmVmZXJyZXJVUkxDYWxsYmFjayhyZWZlcnJlclVSTCk7XG5cdH1cblxuXHRpZiAocmVmZXJyZXJPcmlnaW5DYWxsYmFjaykge1xuXHRcdHJlZmVycmVyT3JpZ2luID0gcmVmZXJyZXJPcmlnaW5DYWxsYmFjayhyZWZlcnJlck9yaWdpbik7XG5cdH1cblxuXHQvLyA4LkV4ZWN1dGUgdGhlIHN0YXRlbWVudHMgY29ycmVzcG9uZGluZyB0byB0aGUgdmFsdWUgb2YgcG9saWN5OlxuXHRjb25zdCBjdXJyZW50VVJMID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG5cblx0c3dpdGNoIChwb2xpY3kpIHtcblx0XHRjYXNlICduby1yZWZlcnJlcic6XG5cdFx0XHRyZXR1cm4gJ25vLXJlZmVycmVyJztcblxuXHRcdGNhc2UgJ29yaWdpbic6XG5cdFx0XHRyZXR1cm4gcmVmZXJyZXJPcmlnaW47XG5cblx0XHRjYXNlICd1bnNhZmUtdXJsJzpcblx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblxuXHRcdGNhc2UgJ3N0cmljdC1vcmlnaW4nOlxuXHRcdFx0Ly8gMS4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDIuIFJldHVybiByZWZlcnJlck9yaWdpbi5cblx0XHRcdHJldHVybiByZWZlcnJlck9yaWdpbi50b1N0cmluZygpO1xuXG5cdFx0Y2FzZSAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbic6XG5cdFx0XHQvLyAxLiBJZiB0aGUgb3JpZ2luIG9mIHJlZmVycmVyVVJMIGFuZCB0aGUgb3JpZ2luIG9mIHJlcXVlc3QncyBjdXJyZW50IFVSTCBhcmUgdGhlIHNhbWUsIHRoZW5cblx0XHRcdC8vICAgIHJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdGlmIChyZWZlcnJlclVSTC5vcmlnaW4gPT09IGN1cnJlbnRVUkwub3JpZ2luKSB7XG5cdFx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMi4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDMuIFJldHVybiByZWZlcnJlck9yaWdpbi5cblx0XHRcdHJldHVybiByZWZlcnJlck9yaWdpbjtcblxuXHRcdGNhc2UgJ3NhbWUtb3JpZ2luJzpcblx0XHRcdC8vIDEuIElmIHRoZSBvcmlnaW4gb2YgcmVmZXJyZXJVUkwgYW5kIHRoZSBvcmlnaW4gb2YgcmVxdWVzdCdzIGN1cnJlbnQgVVJMIGFyZSB0aGUgc2FtZSwgdGhlblxuXHRcdFx0Ly8gICAgcmV0dXJuIHJlZmVycmVyVVJMLlxuXHRcdFx0aWYgKHJlZmVycmVyVVJMLm9yaWdpbiA9PT0gY3VycmVudFVSTC5vcmlnaW4pIHtcblx0XHRcdFx0cmV0dXJuIHJlZmVycmVyVVJMO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAyLiBSZXR1cm4gbm8gcmVmZXJyZXIuXG5cdFx0XHRyZXR1cm4gJ25vLXJlZmVycmVyJztcblxuXHRcdGNhc2UgJ29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbic6XG5cdFx0XHQvLyAxLiBJZiB0aGUgb3JpZ2luIG9mIHJlZmVycmVyVVJMIGFuZCB0aGUgb3JpZ2luIG9mIHJlcXVlc3QncyBjdXJyZW50IFVSTCBhcmUgdGhlIHNhbWUsIHRoZW5cblx0XHRcdC8vICAgIHJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdGlmIChyZWZlcnJlclVSTC5vcmlnaW4gPT09IGN1cnJlbnRVUkwub3JpZ2luKSB7XG5cdFx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIHJlZmVycmVyT3JpZ2luLlxuXHRcdFx0cmV0dXJuIHJlZmVycmVyT3JpZ2luO1xuXG5cdFx0Y2FzZSAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnOlxuXHRcdFx0Ly8gMS4gSWYgcmVmZXJyZXJVUkwgaXMgYSBwb3RlbnRpYWxseSB0cnVzdHdvcnRoeSBVUkwgYW5kIHJlcXVlc3QncyBjdXJyZW50IFVSTCBpcyBub3QgYVxuXHRcdFx0Ly8gICAgcG90ZW50aWFsbHkgdHJ1c3R3b3J0aHkgVVJMLCB0aGVuIHJldHVybiBubyByZWZlcnJlci5cblx0XHRcdGlmIChpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkocmVmZXJyZXJVUkwpICYmICFpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkoY3VycmVudFVSTCkpIHtcblx0XHRcdFx0cmV0dXJuICduby1yZWZlcnJlcic7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDIuIFJldHVybiByZWZlcnJlclVSTC5cblx0XHRcdHJldHVybiByZWZlcnJlclVSTDtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHJlZmVycmVyUG9saWN5OiAke3BvbGljeX1gKTtcblx0fVxufVxuXG4vKipcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMtcmVmZXJyZXItcG9saWN5LyNwYXJzZS1yZWZlcnJlci1wb2xpY3ktZnJvbS1oZWFkZXJ8UmVmZXJyZXIgUG9saWN5IMKnOC4xLiBQYXJzZSBhIHJlZmVycmVyIHBvbGljeSBmcm9tIGEgUmVmZXJyZXItUG9saWN5IGhlYWRlcn1cbiAqIEBwYXJhbSB7SGVhZGVyc30gaGVhZGVycyBSZXNwb25zZSBoZWFkZXJzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBwb2xpY3lcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVmZXJyZXJQb2xpY3lGcm9tSGVhZGVyKGhlYWRlcnMpIHtcblx0Ly8gMS4gTGV0IHBvbGljeS10b2tlbnMgYmUgdGhlIHJlc3VsdCBvZiBleHRyYWN0aW5nIGhlYWRlciBsaXN0IHZhbHVlcyBnaXZlbiBgUmVmZXJyZXItUG9saWN5YFxuXHQvLyAgICBhbmQgcmVzcG9uc2XigJlzIGhlYWRlciBsaXN0LlxuXHRjb25zdCBwb2xpY3lUb2tlbnMgPSAoaGVhZGVycy5nZXQoJ3JlZmVycmVyLXBvbGljeScpIHx8ICcnKS5zcGxpdCgvWyxcXHNdKy8pO1xuXG5cdC8vIDIuIExldCBwb2xpY3kgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0bGV0IHBvbGljeSA9ICcnO1xuXG5cdC8vIDMuIEZvciBlYWNoIHRva2VuIGluIHBvbGljeS10b2tlbnMsIGlmIHRva2VuIGlzIGEgcmVmZXJyZXIgcG9saWN5IGFuZCB0b2tlbiBpcyBub3QgdGhlIGVtcHR5XG5cdC8vICAgIHN0cmluZywgdGhlbiBzZXQgcG9saWN5IHRvIHRva2VuLlxuXHQvLyBOb3RlOiBUaGlzIGFsZ29yaXRobSBsb29wcyBvdmVyIG11bHRpcGxlIHBvbGljeSB2YWx1ZXMgdG8gYWxsb3cgZGVwbG95bWVudCBvZiBuZXcgcG9saWN5XG5cdC8vIHZhbHVlcyB3aXRoIGZhbGxiYWNrcyBmb3Igb2xkZXIgdXNlciBhZ2VudHMsIGFzIGRlc2NyaWJlZCBpbiDCpyAxMS4xIFVua25vd24gUG9saWN5IFZhbHVlcy5cblx0Zm9yIChjb25zdCB0b2tlbiBvZiBwb2xpY3lUb2tlbnMpIHtcblx0XHRpZiAodG9rZW4gJiYgUmVmZXJyZXJQb2xpY3kuaGFzKHRva2VuKSkge1xuXHRcdFx0cG9saWN5ID0gdG9rZW47XG5cdFx0fVxuXHR9XG5cblx0Ly8gNC4gUmV0dXJuIHBvbGljeS5cblx0cmV0dXJuIHBvbGljeTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImxvYWRlZFwiLCBvdGhlcndpc2Ugbm90IGxvYWRlZCB5ZXRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udGFjdHNcIjogMVxufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG52YXIgaW5zdGFsbENodW5rID0gKGNodW5rKSA9PiB7XG5cdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzLCBydW50aW1lID0gY2h1bmsucnVudGltZTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDE7XG5cbn07XG5cbi8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbnN0YWxsQ2h1bmsocmVxdWlyZShcIi4uL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDb250YWN0c1Byb3BzIHtcbiAgcG9zdHM6IHtcbiAgICB1c2VySWQ6IG51bWJlcjtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RzKHsgcG9zdHMgfTogQ29udGFjdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+WW91IGFyZSB0aGUgYmVzdCBteSBmcmllbmQ8L2gxPlxuXG4gICAgICB7cG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0+U3BlY2lhbCB0aGFua3MgdG8gTmlrb2xheSBHb25jaGFydWs8L3A+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PlNwZWNpYWwgdGhhbmtzIHRvIFZsYWRpbWlyIEdhZ2Fya2luPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgU1NSID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogYXdhaXQgcG9zdHMuanNvbigpLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2pzeFJ1bnRpbWUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJDb250YWN0cyIsIl9yZWYiLCJwb3N0cyIsImpzeHMiLCJjaGlsZHJlbiIsImpzeCIsInN0eWxlIiwiY29sb3IiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiaWQiLCJTU1IiLCJleHBvcnRzIiwiX3JlZjIiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwianNvbiIsInQwIiwidDEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=