gsap.set('svg', {
	visibility: 'visible'
})
const show = () => {
	gsap.to('#bg *', {
		drawSVG: `${100 - easeFunc(tween.ratio) * 50}% ${easeFunc(tween.ratio) * 50}%`,
		stagger: 0.06,
		duration: 0.6
	})
}
const easeFunc = gsap.parseEase("slow(0.83, 0.18, true)");
const tween = gsap.to({val: 0}, {
	val: 1,
	ease: "sine",
	onUpdate: show,
	repeat: -1,
	yoyo: true,
	duration: 0.6,
});
