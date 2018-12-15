var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* src/PNotifyHistory.html generated by Svelte v2.6.3 */
var PNotifyHistory = function (PNotify) {
		"use strict";

		PNotify = PNotify && PNotify.__esModule ? PNotify["default"] : PNotify;

		function data() {
				return _extends({
						'_notice': null, // The PNotify notice.
						'_options': {} // The options for the notice.
				}, PNotify.modules.History.defaults);
		};

		var methods = {
				initModule: function initModule(options) {
						this.set(options);

						if (this.get().history) {
								// Don't destroy notices that are in history.
								var _get = this.get(),
								    _notice = _get._notice;

								if (_notice.get().destroy) {
										_notice.set({ 'destroy': false });
								}
						}
				},
				beforeOpen: function beforeOpen() {
						var _get2 = this.get(),
						    maxInStack = _get2.maxInStack,
						    _options = _get2._options;

						if (maxInStack === Infinity) {
								return;
						}

						var stack = _options.stack;
						if (stack === false) {
								return;
						}

						// Remove oldest notifications leaving only maxInStack from the stack.
						if (PNotify.notices && PNotify.notices.length > maxInStack) {
								// Oldest are normally in front of array, or if stack.push=='top' then
								// they are at the end of the array!
								var top = stack.push === 'top';
								var forRemoval = [];
								var currentOpen = 0;

								for (var i = top ? 0 : PNotify.notices.length - 1; top ? i < PNotify.notices.length : i >= 0; top ? i++ : i--) {
										if (['opening', 'open'].indexOf(PNotify.notices[i].get()._state) !== -1 && PNotify.notices[i].get().stack === stack) {
												if (currentOpen >= maxInStack) {
														forRemoval.push(PNotify.notices[i]);
												} else {
														currentOpen++;
												}
										}
								}

								for (var _i = 0; _i < forRemoval.length; _i++) {
										forRemoval[_i].close(false);
								}
						}
				}
		};

		function setup(Component) {
				Component.key = 'History';

				Component.defaults = {
						// Place the notice in the history.
						history: true,
						// Maximum number of notices to have open in its stack.
						maxInStack: Infinity
				};

				Component.init = function (notice) {
						return new Component({ target: document.body });
				};

				Component.showLast = function (stack) {
						if (stack === undefined) {
								stack = PNotify.defaultStack;
						}
						if (stack === false) {
								return;
						}
						var top = stack.push === 'top';

						// Look up the last history notice, and display it.
						var i = top ? 0 : PNotify.notices.length - 1;

						var notice = void 0;
						do {
								notice = PNotify.notices[i];

								if (!notice) {
										return;
								}

								i += top ? 1 : -1;
						} while (notice.get().stack !== stack || !notice.get()._modules.History.get().history || notice.get()._state === 'opening' || notice.get()._state === 'open');

						notice.open();
				};

				Component.showAll = function (stack) {
						if (stack === undefined) {
								stack = PNotify.defaultStack;
						}
						if (stack === false) {
								return;
						}

						// Display all notices. (Disregarding non-history notices.)
						for (var i = 0; i < PNotify.notices.length; i++) {
								var notice = PNotify.notices[i];
								if ((stack === true || notice.get().stack === stack) && notice.get()._modules.History.get().history) {
										notice.open();
								}
						}
				};

				// Register the module with PNotify.
				PNotify.modules.History = Component;
		};

		function create_main_fragment(component, ctx) {

				return {
						c: noop,

						m: noop,

						p: noop,

						d: noop
				};
		}

		function PNotifyHistory(options) {
				init(this, options);
				this._state = assign(data(), options.data);
				this._intro = true;

				this._fragment = create_main_fragment(this, this._state);

				if (options.target) {
						this._fragment.c();
						this._mount(options.target, options.anchor);
				}
		}

		assign(PNotifyHistory.prototype, {
				destroy: destroy,
				get: get,
				fire: fire,
				on: on,
				set: set,
				_set: _set,
				_mount: _mount,
				_differs: _differs
		});
		assign(PNotifyHistory.prototype, methods);

		PNotifyHistory.prototype._recompute = noop;

		setup(PNotifyHistory);

		function noop() {}

		function init(component, options) {
				component._handlers = blankObject();
				component._bind = options._bind;

				component.options = options;
				component.root = options.root || component;
				component.store = component.root.store || options.store;
		}

		function assign(tar, src) {
				for (var k in src) {
						tar[k] = src[k];
				}return tar;
		}

		function destroy(detach) {
				this.destroy = noop;
				this.fire('destroy');
				this.set = noop;

				this._fragment.d(detach !== false);
				this._fragment = null;
				this._state = {};
		}

		function get() {
				return this._state;
		}

		function fire(eventName, data) {
				var handlers = eventName in this._handlers && this._handlers[eventName].slice();
				if (!handlers) return;

				for (var i = 0; i < handlers.length; i += 1) {
						var handler = handlers[i];

						if (!handler.__calling) {
								handler.__calling = true;
								handler.call(this, data);
								handler.__calling = false;
						}
				}
		}

		function on(eventName, handler) {
				var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
				handlers.push(handler);

				return {
						cancel: function cancel() {
								var index = handlers.indexOf(handler);
								if (~index) handlers.splice(index, 1);
						}
				};
		}

		function set(newState) {
				this._set(assign({}, newState));
				if (this.root._lock) return;
				this.root._lock = true;
				callAll(this.root._beforecreate);
				callAll(this.root._oncreate);
				callAll(this.root._aftercreate);
				this.root._lock = false;
		}

		function _set(newState) {
				var oldState = this._state,
				    changed = {},
				    dirty = false;

				for (var key in newState) {
						if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
				}
				if (!dirty) return;

				this._state = assign(assign({}, oldState), newState);
				this._recompute(changed, this._state);
				if (this._bind) this._bind(changed, this._state);

				if (this._fragment) {
						this.fire("state", { changed: changed, current: this._state, previous: oldState });
						this._fragment.p(changed, this._state);
						this.fire("update", { changed: changed, current: this._state, previous: oldState });
				}
		}

		function _mount(target, anchor) {
				this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
		}

		function _differs(a, b) {
				return a != a ? b == b : a !== b || a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' || typeof a === 'function';
		}

		function blankObject() {
				return Object.create(null);
		}

		function callAll(fns) {
				while (fns && fns.length) {
						fns.shift()();
				}
		}
		return PNotifyHistory;
}(PNotify);
//# sourceMappingURL=PNotifyHistory.js.map