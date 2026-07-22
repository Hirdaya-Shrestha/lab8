// nav toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open')
})

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links')?.classList.remove('open'))
})

// active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === location.href || a.href === location.href + '/') a.classList.add('active')
  else if (location.pathname.includes(a.getAttribute('href') || '') && a.getAttribute('href') !== '/') a.classList.add('active')
  else if (location.href.endsWith('/lab8/portfolio/') && a.getAttribute('href') === '/lab8/portfolio/') a.classList.add('active')
})

// slideshow
document.querySelectorAll('.slideshow').forEach(ss => {
  const imgs = ss.querySelectorAll('img')
  const prev = ss.querySelector('.prev')
  const next = ss.querySelector('.next')
  const dots = ss.querySelectorAll('.dots span')
  let idx = 0
  const show = (i) => {
    imgs.forEach(img => img.classList.remove('active'))
    dots.forEach(d => d.classList.remove('active'))
    idx = (i + imgs.length) % imgs.length
    imgs[idx]?.classList.add('active')
    dots[idx]?.classList.add('active')
  }
  prev?.addEventListener('click', () => show(idx - 1))
  next?.addEventListener('click', () => show(idx + 1))
  dots.forEach((d, i) => d.addEventListener('click', () => show(i)))
  show(0)
})

// skill bars animate on scroll
const observeBars = () => {
  const bars = document.querySelectorAll('.progress-fill')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: .3 })
  bars.forEach(b => observer.observe(b))
}
document.addEventListener('DOMContentLoaded', observeBars)

// smooth reveal on scroll
const observeReveal = () => {
  const els = document.querySelectorAll('.fade-up')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running'
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: .1 })
  els.forEach(el => {
    el.style.animationPlayState = 'paused'
    observer.observe(el)
  })
}
document.addEventListener('DOMContentLoaded', observeReveal)
