let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})
const duration = 16;

let tl = gsap.timeline({
});
tl.to('.dot', {
	motionPath: {
		path: '#mainPath',
		alignOrigin: [0.5, 0.5],
		start: 0,
		end: 1
	},
	stagger:{
		each:  0.5,
		repeat: -1
	},
	duration: duration,
	repeat: -1,
	ease: 'linear'
}).seek(100)
.to('#whole', {
	rotation: -360,
	repeat: -1,
	//yoyo: true,
	duration: duration,
	svgOrigin: '400, 255',
	ease: 'linear'
}, 0)
.to('.node', {
	repeat: -1,
	rotation: 1440,
	duration: duration,
	transformOrigin: '50% 50%',
	ease: 'linear'
}, 0)
.to('.center', {
	repeat: -1,
	rotation: -720,
	duration: duration,
	transformOrigin: '50% 50%',
	ease: 'linear'
}, 0)
.to('#mainPath2', {
	repeat: -1,
	strokeDashoffset:'+=404',
	duration: duration,
	svgOrigin: '400, 255',
	ease: 'linear'
}, 0)
