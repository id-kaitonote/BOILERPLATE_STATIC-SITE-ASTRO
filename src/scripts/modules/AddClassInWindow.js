import gsap from 'gsap'

class AddClassInWindow {
  constructor() {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.25, 0.5],
    }

    this.targets = document.querySelectorAll('[data-fade-in]')

    this.init()
  }

  // 初期化
  init() {
    this.observer = new IntersectionObserver(this.animate, this.options)
    this.targets.forEach((target) => {
      this.observer.observe(target)
    })
  }

  // 交差時アニメーション
  animate(entries, observer) {
    entries.forEach((entry) => {
      const marker = entry.target.querySelector('[data-title-marker]')
      if (entry.isIntersecting) {
        gsap
          .timeline()
          .to(entry.target, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: 'Power2.easeOut',
          })
          .to(
            entry.target,
            {
              onStart: () => {
                if (marker) marker.dataset.titleMarker = 'show'
              },
            },
            '-=0.6',
          )

        observer.unobserve(entry.target)
      }
    })
  }
}
export default AddClassInWindow
