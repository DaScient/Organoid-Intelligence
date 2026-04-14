/* ==========================================================================
   ORGANOID INTELLIGENCE — Enhanced Interactive Scripts
   ==========================================================================
   Table of Contents:
   1.  Typing Effect & Loading Screen
   2.  Menu Item Click Handler & Core Globals
   3.  Section Transitions (showSection / backToMenu)
   4.  Enhanced Counter Animation (animateStats)
   5.  Tab Switching (switchTab)
   6.  Gallery Filter (filterGallery)
   7.  Interactive Neural Network Canvas Background
   8.  Scroll-Triggered Reveal Animations
   9.  Mouse Parallax on Hero Section
   10. 3D Card Tilt Effect
   11. Progress Bar
   12. Scroll-to-Top Button
   13. Magnetic Button Effect
   14. Section Transition Flash Overlay
   15. Active Tab Underline Animation (CSS injection)
   16. Keyboard Navigation
   ========================================================================== */

(function () {
'use strict';

/* --------------------------------------------------------------------------
   1. TYPING EFFECT & LOADING SCREEN
   -------------------------------------------------------------------------- */
window.addEventListener('load', function () {
   var loadingText = document.querySelector('.loading-text');
   var fullText = loadingText ? loadingText.textContent : '';
   if (loadingText) {
      loadingText.textContent = '';
      loadingText.style.visibility = 'visible';
      var charIdx = 0;
      var typeInterval = setInterval(function () {
         if (charIdx < fullText.length) {
            loadingText.textContent += fullText.charAt(charIdx);
            charIdx++;
         } else {
            clearInterval(typeInterval);
         }
      }, 35);
   }

   setTimeout(function () {
      document.getElementById('loadingScreen').classList.add('hidden');
   }, 1000);
});

/* --------------------------------------------------------------------------
   2. MENU ITEM CLICK HANDLER & CORE GLOBALS
   -------------------------------------------------------------------------- */
var menuItems = document.querySelectorAll('.menu-item');
var contentSections = document.querySelectorAll('.content-section');
var menuGrid = document.getElementById('menuGrid');
var mainHeader = document.getElementById('mainHeader');
var mainFooter = document.getElementById('mainFooter');
var isTransitioning = false;
var sectionActive = false; // tracks whether a content section is open

menuItems.forEach(function (item) {
   item.addEventListener('click', function () {
      if (isTransitioning) return;
      var sectionId = item.dataset.section;
      showSection(sectionId);
   });
});

/* --------------------------------------------------------------------------
   3. SECTION TRANSITIONS — showSection / backToMenu
   -------------------------------------------------------------------------- */
function showSection(sectionId) {
   isTransitioning = true;

   // Flash overlay effect
   triggerTransitionFlash();

   // First, ensure all menu items are in visible state before transitioning
   menuItems.forEach(function (item) {
      item.classList.remove('initial-load');
      item.style.opacity = '1';
      item.style.transform = 'translateY(0) scale(1)';
      item.style.animation = 'none';
   });

   void menuGrid.offsetWidth;

   // Staggered fade out
   menuItems.forEach(function (item, index) {
      setTimeout(function () {
         item.style.transition = 'all 0.4s ease-out';
         item.style.opacity = '0';
         item.style.transform = 'translateY(40px) scale(0.9)';
      }, index * 50);
   });

   // Hide header and footer
   mainHeader.style.animation = 'none';
   mainHeader.style.opacity = '1';
   mainFooter.style.animation = 'none';
   mainFooter.style.opacity = '1';

   void mainHeader.offsetWidth;

   mainHeader.style.transition = 'opacity 0.4s ease';
   mainHeader.style.opacity = '0';
   mainFooter.style.transition = 'opacity 0.4s ease';
   mainFooter.style.opacity = '0';

   // Show content section after menu animation
   setTimeout(function () {
      menuGrid.style.display = 'none';
      mainHeader.style.display = 'none';
      mainFooter.style.display = 'none';

      menuItems.forEach(function (item) {
         item.style.transition = '';
         item.style.opacity = '';
         item.style.transform = '';
         item.classList.remove('exit-up', 'visible');
      });

      var section = document.getElementById(sectionId);
      section.classList.add('active');
      sectionActive = true;

      // Show progress bar
      if (progressBar) progressBar.style.opacity = '1';

      // Animate stats if introduction section
      if (sectionId === 'introduction') {
         setTimeout(animateStats, 500);
      }

      // Re-observe reveal elements inside this section
      observeReveals();

      isTransitioning = false;
   }, 550);
}
window.showSection = showSection;

function backToMenu() {
   if (isTransitioning) return;
   isTransitioning = true;

   var activeSection = document.querySelector('.content-section.active');
   if (activeSection) {
      var sectionHeaderSmall = activeSection.querySelector('.section-header-small');
      var backBtn = activeSection.querySelector('.back-btn');

      activeSection.style.animation = 'none';
      activeSection.style.opacity = '1';

      void activeSection.offsetWidth;

      activeSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      activeSection.style.opacity = '0';
      activeSection.style.transform = 'translateY(-20px)';

      if (sectionHeaderSmall) {
         sectionHeaderSmall.style.transition = 'opacity 0.5s ease';
         sectionHeaderSmall.style.opacity = '0';
      }
      if (backBtn) {
         backBtn.style.transition = 'opacity 0.5s ease';
         backBtn.style.opacity = '0';
      }

      setTimeout(function () {
         activeSection.classList.remove('active');
         activeSection.style.animation = '';
         activeSection.style.opacity = '';
         activeSection.style.transform = '';
         activeSection.style.transition = '';

         if (sectionHeaderSmall) {
            sectionHeaderSmall.style.opacity = '';
            sectionHeaderSmall.style.transition = '';
         }
         if (backBtn) {
            backBtn.style.opacity = '';
            backBtn.style.transition = '';
         }

         sectionActive = false;

         // Hide progress bar
         if (progressBar) progressBar.style.opacity = '0';
         // Hide scroll-to-top
         if (scrollTopBtn) scrollTopBtn.style.opacity = '0';
         if (scrollTopBtn) scrollTopBtn.style.pointerEvents = 'none';

         menuGrid.style.display = 'grid';
         mainHeader.style.display = 'block';
         mainFooter.style.display = 'block';

         mainHeader.style.animation = 'none';
         mainFooter.style.animation = 'none';

         mainHeader.style.opacity = '0';
         mainHeader.style.transform = 'translateY(20px)';
         mainFooter.style.opacity = '0';

         menuItems.forEach(function (item) {
            item.classList.remove('exit-up', 'initial-load', 'return', 'visible');
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px) scale(0.9)';
         });

         setTimeout(function () {
            mainHeader.style.transition = 'all 0.5s ease';
            mainHeader.style.opacity = '1';
            mainHeader.style.transform = 'translateY(0)';

            mainFooter.style.transition = 'all 0.5s ease';
            mainFooter.style.opacity = '1';

            menuItems.forEach(function (item, index) {
               setTimeout(function () {
                  item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0) scale(1)';
               }, index * 80);
            });

            setTimeout(function () {
               mainHeader.style.transition = '';
               mainHeader.style.transform = '';
               mainFooter.style.transition = '';

               menuItems.forEach(function (item) {
                  item.style.transition = '';
                  item.style.opacity = '';
                  item.style.transform = '';
                  item.classList.add('visible');
               });

               isTransitioning = false;
            }, 600);
         }, 150);
      }, 550);
   }
}
window.backToMenu = backToMenu;

/* --------------------------------------------------------------------------
   4. ENHANCED COUNTER ANIMATION (animateStats)
   -------------------------------------------------------------------------- */
function easeOutExpo(t) {
   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateStats() {
   var metricValues = document.querySelectorAll('.metric-value[data-target]');
   metricValues.forEach(function (el, index) {
      setTimeout(function () {
         var target = parseInt(el.dataset.target);
         var suffix = el.dataset.suffix || '';
         var duration = 1200;
         var startTime = null;

         function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = easeOutExpo(progress);
            var current = Math.floor(easedProgress * target);
            el.textContent = current + suffix;

            if (progress < 1) {
               requestAnimationFrame(step);
            } else {
               el.textContent = target + suffix;
               // Scale bounce at completion
               el.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
               el.style.transform = 'scale(1.15)';
               setTimeout(function () {
                  el.style.transform = 'scale(1)';
                  setTimeout(function () {
                     el.style.transition = '';
                     el.style.transform = '';
                  }, 300);
               }, 200);
            }
         }
         requestAnimationFrame(step);
      }, index * 200);
   });
}
window.animateStats = animateStats;

/* --------------------------------------------------------------------------
   5. TAB SWITCHING
   -------------------------------------------------------------------------- */
function switchTab(btn, tabId) {
   document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
   btn.classList.add('active');

   document.querySelectorAll('.tab-pane').forEach(function (pane) { pane.classList.remove('active'); });
   document.getElementById(tabId).classList.add('active');
}
window.switchTab = switchTab;

/* --------------------------------------------------------------------------
   6. GALLERY FILTER
   -------------------------------------------------------------------------- */
function filterGallery(category, btn) {
   document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
   btn.classList.add('active');

   var items = document.querySelectorAll('.gallery-item');
   items.forEach(function (item) {
      if (category === 'all' || item.dataset.category === category) {
         item.style.display = 'block';
         item.style.animation = 'tabFade 0.4s ease-out';
      } else {
         item.style.display = 'none';
      }
   });
}
window.filterGallery = filterGallery;

/* ==========================================================================
   NEW FEATURES
   ========================================================================== */

/* --------------------------------------------------------------------------
   7. INTERACTIVE NEURAL NETWORK CANVAS BACKGROUND
   -------------------------------------------------------------------------- */
var canvas, ctx, particles, animFrameId;
var mouse = { x: -9999, y: -9999 };
var PARTICLE_COUNT = 80;
var CONNECT_DIST = 150;
var COLORS = ['#00f0ff', '#ff00d4', '#9d4edd'];

function initCanvas() {
   // Hide CSS ambient-bg orbs
   var ambientBg = document.querySelector('.ambient-bg');
   if (ambientBg) ambientBg.style.display = 'none';

   canvas = document.createElement('canvas');
   canvas.id = 'neuralCanvas';
   canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;';
   var container = document.querySelector('.container');
   if (container && container.parentNode) {
      container.parentNode.insertBefore(canvas, container);
   } else {
      document.body.prepend(canvas);
   }

   ctx = canvas.getContext('2d');
   resizeCanvas();
   createParticles();
   animateCanvas();

   window.addEventListener('resize', resizeCanvas);
   document.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
   });
   document.addEventListener('mouseleave', function () {
      mouse.x = -9999;
      mouse.y = -9999;
   });
}

function resizeCanvas() {
   if (!canvas) return;
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

function createParticles() {
   particles = [];
   for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
         x: Math.random() * window.innerWidth,
         y: Math.random() * window.innerHeight,
         vx: (Math.random() - 0.5) * 0.5,
         vy: (Math.random() - 0.5) * 0.5,
         radius: Math.random() * 2 + 1,
         color: COLORS[Math.floor(Math.random() * COLORS.length)],
         opacity: Math.random() * 0.3 + 0.3
      });
   }
}

function animateCanvas() {
   if (!ctx || !canvas) return;
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      // Mouse interaction — gentle attraction/repulsion
      var dx = mouse.x - p.x;
      var dy = mouse.y - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200 && dist > 0) {
         var force = (200 - dist) / 200 * 0.02;
         // Attract if far, repel if very close
         if (dist < 80) {
            p.vx -= (dx / dist) * force;
            p.vy -= (dy / dist) * force;
         } else {
            p.vx += (dx / dist) * force * 0.5;
            p.vy += (dy / dist) * force * 0.5;
         }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Speed damping
      p.vx *= 0.999;
      p.vy *= 0.999;

      // Wrap around screen edges
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      // Draw particle with glow
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // Draw connections
      for (var j = i + 1; j < particles.length; j++) {
         var p2 = particles[j];
         var cdx = p.x - p2.x;
         var cdy = p.y - p2.y;
         var cdist = Math.sqrt(cdx * cdx + cdy * cdy);
         if (cdist < CONNECT_DIST) {
            ctx.save();
            ctx.globalAlpha = (1 - cdist / CONNECT_DIST) * 0.25;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
         }
      }
   }

   animFrameId = requestAnimationFrame(animateCanvas);
}

/* --------------------------------------------------------------------------
   8. SCROLL-TRIGGERED REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function injectRevealCSS() {
   var style = document.createElement('style');
   style.textContent =
      '.reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease;}' +
      '.reveal.revealed{opacity:1;transform:translateY(0);}';
   document.head.appendChild(style);
}

var revealObserver;
function observeReveals() {
   var selectors = [
      '.value-card', '.service-row', '.gallery-item', '.testimonial-card',
      '.contact-item', '.about-part-item', '.metric-item',
      '.intro-hero-content', '.intro-hero-visual'
   ];
   var elements = document.querySelectorAll(selectors.join(','));

   if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting) {
               entry.target.classList.add('revealed');
               revealObserver.unobserve(entry.target);
            }
         });
      }, { threshold: 0.1 });
   }

   elements.forEach(function (el) {
      if (!el.classList.contains('reveal')) {
         el.classList.add('reveal');

         // Stagger siblings
         var parent = el.parentElement;
         if (parent) {
            var siblings = Array.prototype.filter.call(parent.children, function (c) {
               return c.classList.contains('reveal');
            });
            var idx = siblings.indexOf(el);
            if (idx > 0) {
               el.style.transitionDelay = (idx * 0.08) + 's';
            }
         }
      }
      if (!el.classList.contains('revealed')) {
         revealObserver.observe(el);
      }
   });
}

/* --------------------------------------------------------------------------
   9. MOUSE PARALLAX ON HERO SECTION
   -------------------------------------------------------------------------- */
function initHeroParallax() {
   var heroVisual = document.querySelector('.intro-hero-visual');
   if (!heroVisual) return;

   var depths = { 'card-1': 20, 'card-2': 30, 'card-3': 15 };

   heroVisual.addEventListener('mousemove', function (e) {
      var rect = heroVisual.getBoundingClientRect();
      var cx = (e.clientX - rect.left) / rect.width - 0.5;
      var cy = (e.clientY - rect.top) / rect.height - 0.5;

      Object.keys(depths).forEach(function (cls) {
         var card = heroVisual.querySelector('.' + cls);
         if (card) {
            var d = depths[cls];
            card.style.transform = 'translate(' + (cx * d) + 'px, ' + (cy * d) + 'px)';
         }
      });
   });

   heroVisual.addEventListener('mouseleave', function () {
      Object.keys(depths).forEach(function (cls) {
         var card = heroVisual.querySelector('.' + cls);
         if (card) {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'translate(0, 0)';
            setTimeout(function () { card.style.transition = ''; }, 500);
         }
      });
   });
}

/* --------------------------------------------------------------------------
   10. 3D CARD TILT EFFECT
   -------------------------------------------------------------------------- */
function initCardTilt() {
   var tiltSelectors = '.menu-item, .value-card, .testimonial-card';
   var cards = document.querySelectorAll(tiltSelectors);
   var maxDeg = 8;

   cards.forEach(function (card) {
      card.style.overflow = 'hidden';

      // Create inner glow overlay
      var glow = document.createElement('div');
      glow.className = 'tilt-glow-overlay';
      glow.style.cssText =
         'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;' +
         'opacity:0;transition:opacity 0.3s ease;border-radius:inherit;z-index:1;';
      card.appendChild(glow);

      card.addEventListener('mousemove', function (e) {
         var rect = card.getBoundingClientRect();
         var x = e.clientX - rect.left;
         var y = e.clientY - rect.top;
         var cx = rect.width / 2;
         var cy = rect.height / 2;
         var rotateY = ((x - cx) / cx) * maxDeg;
         var rotateX = -((y - cy) / cy) * maxDeg;
         card.style.transition = 'transform 0.1s ease';
         card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

         // Inner glow follows cursor
         glow.style.opacity = '1';
         glow.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(0,240,255,0.12) 0%, transparent 60%)';
      });

      card.addEventListener('mouseleave', function () {
         card.style.transition = 'transform 0.5s ease';
         card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
         glow.style.opacity = '0';
      });
   });
}

/* --------------------------------------------------------------------------
   11. PROGRESS BAR
   -------------------------------------------------------------------------- */
var progressBar = null;

function initProgressBar() {
   progressBar = document.createElement('div');
   progressBar.id = 'scrollProgressBar';
   progressBar.style.cssText =
      'position:fixed;top:0;left:0;height:3px;z-index:10001;' +
      'background:linear-gradient(90deg,#00f0ff,#ff00d4);' +
      'width:0%;opacity:0;transition:opacity 0.3s ease;pointer-events:none;';
   document.body.appendChild(progressBar);

   window.addEventListener('scroll', updateProgressBar);
}

function updateProgressBar() {
   if (!progressBar || !sectionActive) return;
   var activeSection = document.querySelector('.content-section.active');
   if (!activeSection) return;

   var scrollTop = window.scrollY || document.documentElement.scrollTop;
   var sectionTop = activeSection.offsetTop;
   var sectionHeight = activeSection.scrollHeight - window.innerHeight;
   if (sectionHeight <= 0) {
      progressBar.style.width = '100%';
      return;
   }
   var progress = Math.min(Math.max((scrollTop - sectionTop) / sectionHeight, 0), 1);
   progressBar.style.width = (progress * 100) + '%';
}

/* --------------------------------------------------------------------------
   12. SCROLL-TO-TOP BUTTON
   -------------------------------------------------------------------------- */
var scrollTopBtn = null;

function initScrollTopBtn() {
   scrollTopBtn = document.createElement('button');
   scrollTopBtn.id = 'scrollToTopBtn';
   scrollTopBtn.innerHTML = '&#8593;';
   scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
   scrollTopBtn.style.cssText =
      'position:fixed;bottom:30px;right:30px;width:46px;height:46px;border-radius:50%;' +
      'border:1px solid rgba(255,255,255,0.15);cursor:pointer;z-index:10000;' +
      'font-size:20px;color:#fff;display:flex;align-items:center;justify-content:center;' +
      'background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
      'box-shadow:0 4px 20px rgba(0,0,0,0.3);opacity:0;pointer-events:none;' +
      'transition:opacity 0.3s ease,transform 0.3s ease,background 0.3s ease;';

   scrollTopBtn.addEventListener('mouseenter', function () {
      scrollTopBtn.style.background = 'rgba(0,240,255,0.15)';
      scrollTopBtn.style.transform = 'scale(1.1)';
   });
   scrollTopBtn.addEventListener('mouseleave', function () {
      scrollTopBtn.style.background = 'rgba(255,255,255,0.06)';
      scrollTopBtn.style.transform = 'scale(1)';
   });
   scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   });

   document.body.appendChild(scrollTopBtn);

   window.addEventListener('scroll', function () {
      if (!sectionActive) return;
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 300) {
         scrollTopBtn.style.opacity = '1';
         scrollTopBtn.style.pointerEvents = 'auto';
      } else {
         scrollTopBtn.style.opacity = '0';
         scrollTopBtn.style.pointerEvents = 'none';
      }
   });
}

/* --------------------------------------------------------------------------
   13. MAGNETIC BUTTON EFFECT
   -------------------------------------------------------------------------- */
function initMagneticButtons() {
   var selectors = '.intro-cta-primary, .intro-cta-secondary, .submit-btn';
   var btns = document.querySelectorAll(selectors);
   var maxPull = 8;

   btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
         var rect = btn.getBoundingClientRect();
         var cx = rect.left + rect.width / 2;
         var cy = rect.top + rect.height / 2;
         var dx = e.clientX - cx;
         var dy = e.clientY - cy;
         var pullX = Math.max(-maxPull, Math.min(maxPull, dx * 0.15));
         var pullY = Math.max(-maxPull, Math.min(maxPull, dy * 0.15));
         btn.style.transition = 'transform 0.15s ease';
         btn.style.transform = 'translate(' + pullX + 'px, ' + pullY + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
         btn.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
         btn.style.transform = 'translate(0, 0)';
      });
   });
}

/* --------------------------------------------------------------------------
   14. SECTION TRANSITION FLASH OVERLAY
   -------------------------------------------------------------------------- */
function triggerTransitionFlash() {
   var flash = document.createElement('div');
   flash.style.cssText =
      'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;' +
      'background:linear-gradient(135deg,rgba(255,255,255,0.08),transparent);' +
      'pointer-events:none;opacity:1;transition:opacity 0.6s ease;';
   document.body.appendChild(flash);

   requestAnimationFrame(function () {
      flash.style.opacity = '0';
   });

   setTimeout(function () {
      if (flash.parentNode) flash.parentNode.removeChild(flash);
   }, 700);
}

/* --------------------------------------------------------------------------
   15. ACTIVE TAB UNDERLINE ANIMATION (CSS injection)
   -------------------------------------------------------------------------- */
function injectTabUnderlineCSS() {
   var style = document.createElement('style');
   style.textContent =
      '.tab-btn{position:relative;overflow:visible;}' +
      '.tab-btn::after{content:"";position:absolute;bottom:-2px;left:0;width:0;height:2px;' +
      'background:linear-gradient(90deg,#00f0ff,#ff00d4);transition:width 0.35s ease;border-radius:1px;}' +
      '.tab-btn.active::after{width:100%;}';
   document.head.appendChild(style);
}

/* --------------------------------------------------------------------------
   16. KEYBOARD NAVIGATION
   -------------------------------------------------------------------------- */
function initKeyboardNav() {
   var sectionOrder = ['introduction', 'chapters', 'resources', 'capstones', 'about', 'contact'];

   document.addEventListener('keydown', function (e) {
      if (isTransitioning) return;

      // Escape to go back to menu
      if (e.key === 'Escape') {
         var active = document.querySelector('.content-section.active');
         if (active) {
            e.preventDefault();
            backToMenu();
         }
         return;
      }

      // Keys 1-6 to select menu items (only when on menu screen)
      // Skip if user is typing in a form field
      var tag = document.activeElement ? document.activeElement.tagName : '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable)) return;

      var num = parseInt(e.key);
      if (num >= 1 && num <= 6 && !document.querySelector('.content-section.active')) {
         e.preventDefault();
         var sectionId = sectionOrder[num - 1];
         if (sectionId) showSection(sectionId);
      }
   });
}

/* --------------------------------------------------------------------------
   INITIALIZATION
   -------------------------------------------------------------------------- */
function initAll() {
   injectRevealCSS();
   injectTabUnderlineCSS();
   initCanvas();
   initProgressBar();
   initScrollTopBtn();
   initCardTilt();
   initHeroParallax();
   initMagneticButtons();
   initKeyboardNav();
   observeReveals();
}

// Run after DOM is ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initAll);
} else {
   initAll();
}

})();
