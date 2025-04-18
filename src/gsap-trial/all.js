import gsap from "./gsap-core.js";
import CSSPlugin from "./CSSPlugin.js";
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, // to protect from tree shaking
	TweenMaxWithCSS = gsapWithCSS.core.Tween;

export { gsapWithCSS as gsap, gsapWithCSS as default, CSSPlugin, TweenMaxWithCSS as TweenMax };
export { TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, selector } from "./gsap-core.js";

export * from "./CSSRulePlugin.js";
export * from "./Draggable.js";
export * from "./EaselPlugin.js";
export * from "./EasePack.js";
export * from "./Flip.js";
export * from "./MotionPathPlugin.js";
export * from "./Observer.js";
export * from "./PixiPlugin.js";
export * from "./ScrollToPlugin.js";
export * from "./ScrollTrigger.js";
export * from "./TextPlugin.js"; 

export * from "./ScrollSmoother.js";
export * from "./SplitText.js";