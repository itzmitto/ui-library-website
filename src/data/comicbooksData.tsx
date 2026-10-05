import "../pages/All.css";

export const comicbooks = [
  {
    id: 3882,
    name: "Comic Command Search",
    preview: (
      <div className="comic-3882">
        <div className="comic-3882__burst"></div>
        <div className="comic-3882__top">
          <span className="comic-3882__eyebrow">QUICK FIND</span>
          <span className="comic-3882__status">
            <span className="comic-3882__status-dot"></span>
            LIVE
          </span>
        </div>
        <label className="comic-3882__search">
          <span className="comic-3882__icon">
            <i className="ri-search-line"></i>
          </span>
          <input type="text" placeholder="Search components..." />
          <span className="comic-3882__key">⌘ K</span>
        </label>
        <div className="comic-3882__filters">
          <button
            type="button"
            className="comic-3882__filter comic-3882__filter--active"
          >
            ALL
          </button>
          <button type="button" className="comic-3882__filter">
            UI
          </button>
          <button type="button" className="comic-3882__filter">
            MOTION
          </button>
          <button type="button" className="comic-3882__filter">
            LAYOUT
          </button>
        </div>
        <div className="comic-3882__result">
          <span className="comic-3882__result-icon">
            <i className="ri-layout-grid-line"></i>
          </span>
          <span className="comic-3882__result-info">
            <strong>Component Library</strong>
            <small>128 matching components</small>
          </span>
          <span className="comic-3882__arrow">
            <i className="ri-arrow-right-line"></i>
          </span>
        </div>
        <span className="comic-3882__pow">GO!</span>
      </div>
    ),
    html: `<div class="comic-3882">
    <div class="comic-3882__burst"></div>
    <div class="comic-3882__top">
        <span class="comic-3882__eyebrow">QUICK FIND</span>
        <span class="comic-3882__status">
            <span class="comic-3882__status-dot"></span>
            LIVE
        </span>
    </div>
    <label class="comic-3882__search">
        <span class="comic-3882__icon">
            <i class="ri-search-line"></i>
        </span>
        <input type="text" placeholder="Search components...">
        <span class="comic-3882__key">⌘ K</span>
    </label>
    <div class="comic-3882__filters">
        <button type="button" class="comic-3882__filter comic-3882__filter--active">ALL</button>
        <button type="button" class="comic-3882__filter">UI</button>
        <button type="button" class="comic-3882__filter">MOTION</button>
        <button type="button" class="comic-3882__filter">LAYOUT</button>
    </div>
    <div class="comic-3882__result">
        <span class="comic-3882__result-icon">
            <i class="ri-layout-grid-line"></i>
        </span>
        <span class="comic-3882__result-info">
            <strong>Component Library</strong>
            <small>128 matching components</small>
        </span>
        <span class="comic-3882__arrow">
            <i class="ri-arrow-right-line"></i>
        </span>
    </div>
    <span class="comic-3882__pow">GO!</span>
</div>`,
    css: `.comic-3882{position:relative;width:360px;max-width:100%;padding:18px;border:4px solid #111;background:#fef3c7;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;overflow:hidden;isolation:isolate;transition:transform .25s ease,box-shadow .25s ease}
.comic-3882::before{content:"";position:absolute;inset:0;z-index:-3;background-image:radial-gradient(rgba(17,17,17,.14) 1.2px,transparent 1.4px);background-size:8px 8px}
.comic-3882__burst{position:absolute;right:-55px;top:-58px;z-index:-2;width:165px;height:165px;background:#ef4444;clip-path:polygon(50% 0,59% 35%,79% 8%,74% 40%,100% 27%,80% 50%,100% 70%,72% 62%,80% 100%,58% 69%,48% 100%,41% 67%,14% 94%,28% 61%,0 70%,23% 49%,0 29%,31% 39%,20% 7%,42% 34%)}
.comic-3882__top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.comic-3882__eyebrow{display:inline-flex;padding:5px 8px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:3px 3px 0 #111;font:900 10px/1 Arial Black,Arial,sans-serif;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3882__status{display:flex;align-items:center;gap:5px;padding:5px 7px;border:2px solid #111;background:#fff;font-size:8px;font-weight:900;box-shadow:2px 2px 0 #111}
.comic-3882__status-dot{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3882__search{position:relative;display:flex;align-items:center;height:56px;border:4px solid #111;background:#fff;box-shadow:5px 5px 0 #111;transition:transform .2s ease,box-shadow .2s ease}
.comic-3882__icon{width:52px;height:100%;display:grid;place-items:center;border-right:4px solid #111;background:#fde047;font-size:21px}
.comic-3882__search input{min-width:0;flex:1;height:100%;padding:0 12px;border:0;outline:0;background:transparent;color:#111;font:800 12px/1 Arial,Helvetica,sans-serif}
.comic-3882__search input::placeholder{color:#52525b}
.comic-3882__key{flex:0 0 auto;margin-right:8px;padding:5px 6px;border:2px solid #111;background:#e4e4e7;box-shadow:2px 2px 0 #111;font-size:8px;font-weight:900}
.comic-3882__filters{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
.comic-3882__filter{appearance:none;padding:6px 9px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3882__filter:nth-child(2){transform:rotate(1deg)}
.comic-3882__filter:nth-child(3){transform:rotate(-1deg)}
.comic-3882__filter:nth-child(4){transform:rotate(2deg)}
.comic-3882__filter--active{background:#ef4444;color:#fff}
.comic-3882__result{position:relative;display:flex;align-items:center;gap:10px;margin-top:16px;padding:10px;border:3px solid #111;background:#60a5fa;box-shadow:4px 4px 0 #111;transition:transform .2s ease,box-shadow .2s ease}
.comic-3882__result-icon{width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;background:#fde047;font-size:17px}
.comic-3882__result-info{display:flex;flex:1;min-width:0;flex-direction:column}
.comic-3882__result-info strong{font:900 11px/1.1 Arial Black,Arial,sans-serif}
.comic-3882__result-info small{margin-top:4px;font-size:8px;font-weight:700}
.comic-3882__arrow{width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;background:#fff;font-size:16px;transition:transform .2s ease}
.comic-3882__pow{position:absolute;right:8px;top:8px;z-index:3;width:45px;height:34px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 23%,83% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 23%);font:900 9px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);opacity:0;transition:opacity .2s ease,transform .2s ease}
.comic-3882:hover{transform:translate(-2px,-2px);box-shadow:12px 12px 0 #111}
.comic-3882:hover .comic-3882__search{transform:translate(-1px,-1px);box-shadow:7px 7px 0 #111}
.comic-3882:hover .comic-3882__pow{opacity:1;transform:rotate(-5deg) scale(1.08)}
.comic-3882__filter:hover{transform:translate(-1px,-1px) rotate(-2deg);box-shadow:5px 5px 0 #111;background:#fde047;color:#111}
.comic-3882__result:hover{transform:translate(-2px,-2px) rotate(-.5deg);box-shadow:6px 6px 0 #111}
.comic-3882__result:hover .comic-3882__arrow{transform:translateX(3px) rotate(-4deg)}
.comic-3882__search:focus-within{background:#fffef5;transform:translate(-2px,-2px);box-shadow:7px 7px 0 #111}
.comic-3882__search:focus-within .comic-3882__icon{background:#ef4444;color:#fff}`,
  },
  {
    id: 3883,
    name: "Comic Mission Progress",
    preview: (
      <section className="comic-3883">
        <div className="comic-3883__header">
          <div>
            <span className="comic-3883__eyebrow">CURRENT MISSION</span>
            <h3 className="comic-3883__title">LAUNCH THE PROJECT</h3>
          </div>

          <span className="comic-3883__status">
            <span className="comic-3883__status-dot"></span>
            ACTIVE
          </span>
        </div>

        <div className="comic-3883__progress-head">
          <span>MISSION PROGRESS</span>
          <strong>72%</strong>
        </div>

        <div className="comic-3883__progress">
          <span className="comic-3883__progress-fill"></span>
          <span className="comic-3883__progress-stripes"></span>
        </div>

        <div className="comic-3883__tasks">
          <div className="comic-3883__task comic-3883__task--done">
            <span className="comic-3883__check">
              <i className="ri-check-line"></i>
            </span>
            <span>Build interface</span>
          </div>

          <div className="comic-3883__task comic-3883__task--done">
            <span className="comic-3883__check">
              <i className="ri-check-line"></i>
            </span>
            <span>Connect components</span>
          </div>

          <div className="comic-3883__task">
            <span className="comic-3883__check">
              <i className="ri-flashlight-line"></i>
            </span>
            <span>Deploy project</span>
          </div>
        </div>

        <div className="comic-3883__footer">
          <span className="comic-3883__meta">
            <i className="ri-time-line"></i>2 TASKS DONE
          </span>

          <button type="button" className="comic-3883__button">
            CONTINUE
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <span className="comic-3883__burst">72%</span>
      </section>
    ),
    html: `<section class="comic-3883">
    <div class="comic-3883__header">
        <div>
            <span class="comic-3883__eyebrow">CURRENT MISSION</span>
            <h3 class="comic-3883__title">LAUNCH THE PROJECT</h3>
        </div>

        <span class="comic-3883__status">
            <span class="comic-3883__status-dot"></span>
            ACTIVE
        </span>
    </div>

    <div class="comic-3883__progress-head">
        <span>MISSION PROGRESS</span>
        <strong>72%</strong>
    </div>

    <div class="comic-3883__progress">
        <span class="comic-3883__progress-fill"></span>
        <span class="comic-3883__progress-stripes"></span>
    </div>

    <div class="comic-3883__tasks">
        <div class="comic-3883__task comic-3883__task--done">
            <span class="comic-3883__check">
                <i class="ri-check-line"></i>
            </span>
            <span>Build interface</span>
        </div>

        <div class="comic-3883__task comic-3883__task--done">
            <span class="comic-3883__check">
                <i class="ri-check-line"></i>
            </span>
            <span>Connect components</span>
        </div>

        <div class="comic-3883__task">
            <span class="comic-3883__check">
                <i class="ri-flashlight-line"></i>
            </span>
            <span>Deploy project</span>
        </div>
    </div>

    <div class="comic-3883__footer">
        <span class="comic-3883__meta">
            <i class="ri-time-line"></i>
            2 TASKS DONE
        </span>

        <button type="button" class="comic-3883__button">
            CONTINUE
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <span class="comic-3883__burst">72%</span>
</section>`,
    css: `.comic-3883{position:relative;width:360px;max-width:100%;padding:18px;overflow:hidden;border:4px solid #111;background:#fff7d6;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .25s ease,box-shadow .25s ease}
.comic-3883::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.14) 1.2px,transparent 1.4px);background-size:8px 8px}
.comic-3883::after{content:"";position:absolute;right:-65px;top:-65px;z-index:-1;width:170px;height:170px;background:#ef4444;clip-path:polygon(50% 0,60% 33%,82% 8%,76% 40%,100% 29%,80% 50%,100% 70%,74% 62%,83% 96%,60% 70%,49% 100%,40% 69%,15% 94%,28% 61%,0 70%,23% 49%,0 29%,31% 39%,19% 7%,41% 34%)}
.comic-3883__header{display:flex;align-items:flex-start;justify-content:space-between;gap:15px}
.comic-3883__eyebrow{display:inline-block;margin-bottom:6px;padding:4px 7px;border:2px solid #111;background:#2563eb;color:#fff;box-shadow:2px 2px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3883__title{max-width:220px;margin:0;font:900 19px/.95 Arial Black,Arial,sans-serif;letter-spacing:-.7px}
.comic-3883__status{display:flex;align-items:center;gap:5px;padding:5px 7px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;transform:rotate(2deg)}
.comic-3883__status-dot{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3883__progress-head{display:flex;align-items:center;justify-content:space-between;margin-top:19px;margin-bottom:6px;font-size:8px;font-weight:900;letter-spacing:.5px}
.comic-3883__progress-head strong{font-family:Arial Black,Arial,sans-serif;font-size:10px}
.comic-3883__progress{position:relative;height:22px;overflow:hidden;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3883__progress-fill{position:absolute;inset:0 auto 0 0;width:72%;background:#fde047;transition:width .3s ease}
.comic-3883__progress-stripes{position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 8px,rgba(17,17,17,.12) 8px 12px)}
.comic-3883__tasks{display:grid;gap:8px;margin-top:17px}
.comic-3883__task{display:flex;align-items:center;gap:9px;padding:8px 9px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:9px;font-weight:900;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3883__task:nth-child(2){transform:rotate(.5deg)}
.comic-3883__task:nth-child(3){transform:rotate(-.5deg)}
.comic-3883__task--done{background:#dbeafe}
.comic-3883__check{width:27px;height:27px;display:grid;place-items:center;flex:0 0 27px;border:3px solid #111;background:#fde047;font-size:15px}
.comic-3883__task--done .comic-3883__check{background:#22c55e;color:#fff}
.comic-3883__footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:17px}
.comic-3883__meta{display:flex;align-items:center;gap:5px;font-size:7px;font-weight:900;letter-spacing:.5px}
.comic-3883__meta i{font-size:13px}
.comic-3883__button{display:flex;align-items:center;gap:7px;padding:9px 11px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:4px 4px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3883__button i{font-size:14px;transition:transform .18s ease}
.comic-3883__burst{position:absolute;right:8px;top:8px;width:45px;height:36px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 9px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.7);transition:opacity .2s ease,transform .2s ease}
.comic-3883:hover{transform:translate(-2px,-2px);box-shadow:12px 12px 0 #111}
.comic-3883:hover .comic-3883__burst{opacity:1;transform:rotate(-5deg) scale(1)}
.comic-3883:hover .comic-3883__progress-fill{width:78%}
.comic-3883__task:hover{transform:translate(-2px,-2px) rotate(-.5deg);box-shadow:5px 5px 0 #111;background:#fef3c7}
.comic-3883__button:hover{transform:translate(-2px,-2px) rotate(-1deg);box-shadow:6px 6px 0 #111;background:#2563eb}
.comic-3883__button:hover i{transform:translateX(3px)}`,
  },
  {
    id: 3884,
    name: "Comic Action Button",
    preview: (
      <button
        type="button"
        className="comic-3884"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="comic-3884__dots"></span>
        <span className="comic-3884__shine"></span>
        <span className="comic-3884__icon">
          <i className="ri-flashlight-fill"></i>
        </span>
        <span className="comic-3884__text">
          <strong>LET'S GO!</strong>
          <small>START ACTION</small>
        </span>
        <span className="comic-3884__arrow">
          <i className="ri-arrow-right-line"></i>
        </span>
        <span className="comic-3884__impact">POW!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3884">
    <span class="comic-3884__dots"></span>
    <span class="comic-3884__shine"></span>
    <span class="comic-3884__icon">
        <i class="ri-flashlight-fill"></i>
    </span>
    <span class="comic-3884__text">
        <strong>LET'S GO!</strong>
        <small>START ACTION</small>
    </span>
    <span class="comic-3884__arrow">
        <i class="ri-arrow-right-line"></i>
    </span>
    <span class="comic-3884__impact">POW!</span>
</button>`,
    css: `.comic-3884{position:relative;width:250px;height:76px;display:flex;align-items:center;gap:12px;padding:0 15px;overflow:hidden;border:4px solid #111;background:#ef4444;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transform:rotate(-1deg);transition:transform .2s ease,box-shadow .2s ease,background .2s ease}
.comic-3884__dots{position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.25) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3884__shine{position:absolute;left:-35px;top:-55px;z-index:-1;width:140px;height:140px;border-radius:50%;background:#fde047;transition:transform .3s ease}
.comic-3884__icon{position:relative;width:43px;height:43px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;font-size:20px;transform:rotate(-4deg);transition:transform .2s ease,background .2s ease}
.comic-3884__text{position:relative;z-index:2;display:flex;min-width:0;flex:1;flex-direction:column;text-align:left}
.comic-3884__text strong{font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:-.3px}
.comic-3884__text small{margin-top:4px;font-size:7px;font-weight:900;letter-spacing:1.2px}
.comic-3884__arrow{position:relative;z-index:2;width:31px;height:31px;display:grid;place-items:center;flex:0 0 31px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:16px;transition:transform .2s ease,background .2s ease}
.comic-3884__impact{position:absolute;right:3px;top:2px;width:45px;height:34px;display:grid;place-items:center;border:3px solid #111;background:#2563eb;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(12deg) scale(.6);transition:opacity .2s ease,transform .2s ease}
.comic-3884:hover{background:#2563eb;transform:translate(-2px,-2px) rotate(1deg);box-shadow:10px 10px 0 #111}
.comic-3884:hover .comic-3884__shine{transform:translateX(135px) scale(1.25)}
.comic-3884:hover .comic-3884__icon{background:#fff;transform:rotate(5deg) scale(1.06)}
.comic-3884:hover .comic-3884__arrow{background:#fde047;transform:translateX(3px) rotate(-4deg)}
.comic-3884:hover .comic-3884__impact{opacity:1;transform:rotate(-7deg) scale(1)}
.comic-3884:active{transform:translate(3px,3px);box-shadow:3px 3px 0 #111}`,
  },
  {
    id: 3885,
    name: "Comic Impact Loader",
    preview: (
      <div
        className="comic-3885"
        role="status"
        aria-label="Loading"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3885__loader">
          <span className="comic-3885__ring comic-3885__ring-1"></span>
          <span className="comic-3885__ring comic-3885__ring-2"></span>
          <span className="comic-3885__core">
            <i className="ri-flashlight-fill"></i>
          </span>
          <span className="comic-3885__bolt comic-3885__bolt-1"></span>
          <span className="comic-3885__bolt comic-3885__bolt-2"></span>
          <span className="comic-3885__bolt comic-3885__bolt-3"></span>
        </div>
        <div className="comic-3885__copy">
          <span className="comic-3885__eyebrow">PLEASE WAIT</span>
          <strong>LOADING!</strong>
          <div className="comic-3885__bar">
            <span className="comic-3885__bar-fill"></span>
          </div>
        </div>
        <span className="comic-3885__bang">ZAP!</span>
      </div>
    ),
    html: `<div class="comic-3885" role="status" aria-label="Loading">
    <div class="comic-3885__loader">
        <span class="comic-3885__ring comic-3885__ring-1"></span>
        <span class="comic-3885__ring comic-3885__ring-2"></span>
        <span class="comic-3885__core">
            <i class="ri-flashlight-fill"></i>
        </span>
        <span class="comic-3885__bolt comic-3885__bolt-1"></span>
        <span class="comic-3885__bolt comic-3885__bolt-2"></span>
        <span class="comic-3885__bolt comic-3885__bolt-3"></span>
    </div>
    <div class="comic-3885__copy">
        <span class="comic-3885__eyebrow">PLEASE WAIT</span>
        <strong>LOADING!</strong>
        <div class="comic-3885__bar">
            <span class="comic-3885__bar-fill"></span>
        </div>
    </div>
    <span class="comic-3885__bang">ZAP!</span>
</div>`,
    css: `.comic-3885{position:relative;width:290px;max-width:100%;display:flex;align-items:center;gap:18px;padding:18px;overflow:hidden;border:4px solid #111;background:#fef3c7;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .25s ease,box-shadow .25s ease}
.comic-3885::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.15) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3885::after{content:"";position:absolute;right:-45px;bottom:-50px;z-index:-1;width:150px;height:130px;background:#60a5fa;transform:rotate(-18deg)}
.comic-3885__loader{position:relative;width:75px;height:75px;flex:0 0 75px}
.comic-3885__ring{position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);transition:transform .4s ease}
.comic-3885__ring-1{width:69px;height:69px;border:5px solid #111;background:#ef4444;box-shadow:4px 4px 0 #111}
.comic-3885__ring-1::before{content:"";position:absolute;inset:6px;border:4px dashed #fde047;border-radius:50%}
.comic-3885__ring-2{width:43px;height:43px;border:3px solid #111;background:#fde047}
.comic-3885__core{position:absolute;left:50%;top:50%;z-index:4;width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fff;font-size:16px;transform:translate(-50%,-50%);transition:transform .3s ease,background .3s ease}
.comic-3885__bolt{position:absolute;z-index:5;width:15px;height:24px;border:2px solid #111;background:#fde047;clip-path:polygon(45% 0,100% 0,65% 40%,100% 40%,25% 100%,45% 55%,0 55%);transition:transform .4s ease}
.comic-3885__bolt-1{left:-5px;top:4px;transform:rotate(-22deg)}
.comic-3885__bolt-2{right:-3px;top:8px;transform:rotate(25deg)}
.comic-3885__bolt-3{left:31px;bottom:-9px;transform:rotate(9deg) scale(.85)}
.comic-3885__copy{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3885__eyebrow{align-self:flex-start;margin-bottom:5px;padding:4px 6px;border:2px solid #111;background:#2563eb;color:#fff;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3885__copy strong{font:900 20px/.95 Arial Black,Arial,sans-serif;letter-spacing:-.7px}
.comic-3885__bar{position:relative;height:14px;margin-top:11px;overflow:hidden;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111}
.comic-3885__bar-fill{position:absolute;inset:0 auto 0 0;width:64%;background:#ef4444;transition:width .5s ease}
.comic-3885__bar-fill::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 6px,rgba(255,255,255,.35) 6px 9px)}
.comic-3885__bang{position:absolute;right:5px;top:5px;width:47px;height:35px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(9deg) scale(.6);transition:opacity .2s ease,transform .2s ease}
.comic-3885:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3885:hover .comic-3885__ring-1{transform:translate(-50%,-50%) rotate(180deg)}
.comic-3885:hover .comic-3885__ring-2{transform:translate(-50%,-50%) rotate(-180deg)}
.comic-3885:hover .comic-3885__core{background:#fde047;transform:translate(-50%,-50%) scale(1.08)}
.comic-3885:hover .comic-3885__bolt-1{transform:translate(-5px,-3px) rotate(-35deg) scale(1.1)}
.comic-3885:hover .comic-3885__bolt-2{transform:translate(5px,-4px) rotate(38deg) scale(1.1)}
.comic-3885:hover .comic-3885__bolt-3{transform:translateY(5px) rotate(-8deg) scale(1)}
.comic-3885:hover .comic-3885__bar-fill{width:88%}
.comic-3885:hover .comic-3885__bang{opacity:1;transform:rotate(-6deg) scale(1)}`,
  },
  {
    id: 3886,
    name: "Comic Feature Card",
    preview: (
      <article className="comic-3886">
        <div className="comic-3886__visual">
          <span className="comic-3886__halftone"></span>
          <span className="comic-3886__circle"></span>
          <span className="comic-3886__icon">
            <i className="ri-code-box-line"></i>
          </span>
          <span className="comic-3886__number">#01</span>
          <span className="comic-3886__burst">NEW!</span>
        </div>
        <div className="comic-3886__content">
          <div className="comic-3886__heading">
            <div>
              <span className="comic-3886__eyebrow">FEATURED COMPONENT</span>
              <h3>BUILD SOMETHING BOLD.</h3>
            </div>
            <span className="comic-3886__rating">
              <i className="ri-star-fill"></i>
              4.9
            </span>
          </div>
          <p className="comic-3886__description">
            A bold interface component with strong contrast, sharp borders and
            classic comic-book energy.
          </p>
          <div className="comic-3886__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>UI</span>
          </div>
          <div className="comic-3886__footer">
            <span className="comic-3886__meta">
              <i className="ri-eye-line"></i>
              1.2K VIEWS
            </span>
            <button type="button" className="comic-3886__button">
              EXPLORE
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="comic-3886">
    <div class="comic-3886__visual">
        <span class="comic-3886__halftone"></span>
        <span class="comic-3886__circle"></span>
        <span class="comic-3886__icon">
            <i class="ri-code-box-line"></i>
        </span>
        <span class="comic-3886__number">#01</span>
        <span class="comic-3886__burst">NEW!</span>
    </div>

    <div class="comic-3886__content">
        <div class="comic-3886__heading">
            <div>
                <span class="comic-3886__eyebrow">FEATURED COMPONENT</span>
                <h3>BUILD SOMETHING BOLD.</h3>
            </div>

            <span class="comic-3886__rating">
                <i class="ri-star-fill"></i>
                4.9
            </span>
        </div>

        <p class="comic-3886__description">
            A bold interface component with strong contrast, sharp borders and classic comic-book energy.
        </p>

        <div class="comic-3886__tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>UI</span>
        </div>

        <div class="comic-3886__footer">
            <span class="comic-3886__meta">
                <i class="ri-eye-line"></i>
                1.2K VIEWS
            </span>

            <button type="button" class="comic-3886__button">
                EXPLORE
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>
</article>`,
    css: `.comic-3886{position:relative;width:340px;max-width:100%;overflow:hidden;border:4px solid #111;background:#fff;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;transition:transform .25s ease,box-shadow .25s ease}
.comic-3886__visual{position:relative;height:125px;overflow:hidden;border-bottom:4px solid #111;background:#2563eb;isolation:isolate}
.comic-3886__halftone{position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.3) 1.5px,transparent 1.8px);background-size:9px 9px}
.comic-3886__circle{position:absolute;left:50%;top:50%;z-index:-1;width:180px;height:180px;border:4px solid #111;border-radius:50%;background:#fde047;transform:translate(-50%,-50%);transition:transform .3s ease}
.comic-3886__circle::before{content:"";position:absolute;inset:15px;border:4px dashed #ef4444;border-radius:50%}
.comic-3886__icon{position:absolute;left:50%;top:50%;width:67px;height:67px;display:grid;place-items:center;border:4px solid #111;background:#fff;box-shadow:6px 6px 0 #111;font-size:31px;transform:translate(-50%,-50%) rotate(-4deg);transition:transform .3s ease,background .3s ease}
.comic-3886__number{position:absolute;left:10px;top:10px;padding:5px 8px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif;transform:rotate(-3deg)}
.comic-3886__burst{position:absolute;right:8px;top:8px;width:55px;height:42px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;transform:rotate(7deg);transition:transform .2s ease}
.comic-3886__content{padding:16px;background:#fffdf4;background-image:radial-gradient(rgba(17,17,17,.1) 1px,transparent 1.2px);background-size:9px 9px}
.comic-3886__heading{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.comic-3886__eyebrow{display:inline-block;margin-bottom:6px;padding:4px 6px;border:2px solid #111;background:#ef4444;color:#fff;font-size:7px;font-weight:900;letter-spacing:1px;box-shadow:2px 2px 0 #111}
.comic-3886__heading h3{max-width:210px;margin:0;font:900 19px/.98 Arial Black,Arial,sans-serif;letter-spacing:-.7px}
.comic-3886__rating{display:flex;align-items:center;gap:4px;padding:5px 6px;border:2px solid #111;background:#fde047;box-shadow:2px 2px 0 #111;font-size:8px;font-weight:900;transform:rotate(2deg)}
.comic-3886__rating i{font-size:12px}
.comic-3886__description{margin:12px 0 0;color:#3f3f46;font-size:9px;font-weight:700;line-height:1.5}
.comic-3886__tags{display:flex;gap:6px;margin-top:13px}
.comic-3886__tags span{padding:5px 7px;border:2px solid #111;background:#dbeafe;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900}
.comic-3886__tags span:nth-child(2){background:#fef08a}
.comic-3886__tags span:nth-child(3){background:#fecaca}
.comic-3886__footer{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px;padding-top:13px;border-top:3px solid #111}
.comic-3886__meta{display:flex;align-items:center;gap:5px;font-size:7px;font-weight:900}
.comic-3886__meta i{font-size:13px}
.comic-3886__button{display:flex;align-items:center;gap:6px;padding:8px 10px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3886__button i{font-size:13px;transition:transform .18s ease}
.comic-3886:hover{transform:translate(-2px,-2px);box-shadow:12px 12px 0 #111}
.comic-3886:hover .comic-3886__circle{transform:translate(-50%,-50%) rotate(15deg) scale(1.08)}
.comic-3886:hover .comic-3886__icon{background:#fde047;transform:translate(-50%,-50%) rotate(4deg) scale(1.07)}
.comic-3886:hover .comic-3886__burst{transform:rotate(-5deg) scale(1.08)}
.comic-3886__button:hover{background:#ef4444;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:6px 6px 0 #111}
.comic-3886__button:hover i{transform:translateX(3px)}`,
  },
  {
    id: 3887,
    name: "Comic Pricing Card",
    preview: (
      <article className="comic-3887">
        <div className="comic-3887__top">
          <span className="comic-3887__issue">ISSUE #07</span>
          <span className="comic-3887__badge">HOT</span>
        </div>

        <div className="comic-3887__hero">
          <span className="comic-3887__burst">GO PRO!</span>
          <h3>POWER PLAN</h3>
          <p>For creators building bold interfaces every day.</p>
        </div>

        <div className="comic-3887__price">
          <strong>$24</strong>
          <span>/ month</span>
        </div>

        <ul className="comic-3887__list">
          <li>
            <i className="ri-checkbox-circle-fill"></i>
            Unlimited components
          </li>
          <li>
            <i className="ri-checkbox-circle-fill"></i>
            Commercial projects
          </li>
          <li>
            <i className="ri-checkbox-circle-fill"></i>
            Premium style packs
          </li>
        </ul>

        <button
          type="button"
          className="comic-3887__button"
          onClick={(event) => event.stopPropagation()}
        >
          UNLOCK NOW
        </button>
      </article>
    ),
    html: `<article class="comic-3887">
    <div class="comic-3887__top">
        <span class="comic-3887__issue">ISSUE #07</span>
        <span class="comic-3887__badge">HOT</span>
    </div>

    <div class="comic-3887__hero">
        <span class="comic-3887__burst">GO PRO!</span>
        <h3>POWER PLAN</h3>
        <p>For creators building bold interfaces every day.</p>
    </div>

    <div class="comic-3887__price">
        <strong>$24</strong>
        <span>/ month</span>
    </div>

    <ul class="comic-3887__list">
        <li>
            <i class="ri-checkbox-circle-fill"></i>
            Unlimited components
        </li>
        <li>
            <i class="ri-checkbox-circle-fill"></i>
            Commercial projects
        </li>
        <li>
            <i class="ri-checkbox-circle-fill"></i>
            Premium style packs
        </li>
    </ul>

    <button type="button" class="comic-3887__button">UNLOCK NOW</button>
</article>`,
    css: `.comic-3887{
    width:320px;
    max-width:100%;
    overflow:hidden;
    border:4px solid #111;
    background:#fffdf3;
    box-shadow:8px 8px 0 #111;
    font-family:Arial,Helvetica,sans-serif;
    color:#111;
    transition:transform .2s ease,box-shadow .2s ease;
}
.comic-3887__top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 12px;
    border-bottom:4px solid #111;
    background:#ef4444;
}
.comic-3887__issue{
    padding:5px 8px;
    border:3px solid #111;
    background:#fde047;
    box-shadow:2px 2px 0 #111;
    font-size:8px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3887__badge{
    color:#fff;
    font-size:10px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3887__hero{
    position:relative;
    padding:18px 16px 16px;
    border-bottom:4px solid #111;
    background:#60a5fa;
    background-image:radial-gradient(rgba(17,17,17,.22) 1.2px,transparent 1.2px);
    background-size:8px 8px;
}
.comic-3887__burst{
    position:absolute;
    top:10px;
    right:12px;
    width:56px;
    height:42px;
    display:grid;
    place-items:center;
    border:3px solid #111;
    background:#fff;
    clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);
    font-size:8px;
    font-weight:900;
    transform:rotate(8deg);
}
.comic-3887__hero h3{
    margin:22px 0 8px;
    font:900 26px/.92 Arial Black,Arial,sans-serif;
    letter-spacing:-1px;
}
.comic-3887__hero p{
    max-width:210px;
    margin:0;
    font-size:10px;
    line-height:1.5;
    font-weight:700;
}
.comic-3887__price{
    display:flex;
    align-items:flex-end;
    gap:6px;
    padding:16px;
    border-bottom:3px solid #111;
    background:#fff;
}
.comic-3887__price strong{
    font:900 34px/.9 Arial Black,Arial,sans-serif;
}
.comic-3887__price span{
    margin-bottom:4px;
    font-size:11px;
    font-weight:800;
}
.comic-3887__list{
    display:grid;
    gap:10px;
    margin:0;
    padding:16px;
    list-style:none;
}
.comic-3887__list li{
    display:flex;
    align-items:center;
    gap:8px;
    font-size:11px;
    font-weight:800;
}
.comic-3887__list i{
    font-size:15px;
    color:#2563eb;
}
.comic-3887__button{
    width:calc(100% - 32px);
    height:44px;
    margin:0 16px 16px;
    border:3px solid #111;
    background:#fde047;
    color:#111;
    box-shadow:4px 4px 0 #111;
    font:900 11px/1 Arial Black,Arial,sans-serif;
    letter-spacing:.8px;
    cursor:pointer;
    transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
}
.comic-3887:hover{
    transform:translate(-2px,-2px);
    box-shadow:11px 11px 0 #111;
}
.comic-3887__button:hover{
    background:#ef4444;
    color:#fff;
    transform:translate(-2px,-2px);
    box-shadow:6px 6px 0 #111;
}`,
  },
  {
    id: 3888,
    name: "Comic Search Panel",
    preview: (
      <section
        className="comic-3888"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3888__header">
          <span className="comic-3888__tag">SEARCH FILES</span>
          <span className="comic-3888__mini">CITY DATABASE</span>
        </div>

        <div className="comic-3888__body">
          <h3>FIND YOUR NEXT CLUE.</h3>
          <p>Search through projects, layouts and UI references in seconds.</p>

          <div className="comic-3888__field">
            <i className="ri-search-2-line"></i>
            <input type="text" placeholder="Search components..." />
            <button type="button">GO</button>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3888">
    <div class="comic-3888__header">
        <span class="comic-3888__tag">SEARCH FILES</span>
        <span class="comic-3888__mini">CITY DATABASE</span>
    </div>

    <div class="comic-3888__body">
        <h3>FIND YOUR NEXT CLUE.</h3>
        <p>Search through projects, layouts and UI references in seconds.</p>

        <div class="comic-3888__field">
            <i class="ri-search-2-line"></i>
            <input type="text" placeholder="Search components...">
            <button type="button">GO</button>
        </div>
    </div>
</section>`,
    css: `.comic-3888{
    width:340px;
    max-width:100%;
    overflow:hidden;
    border:4px solid #111;
    background:#fff;
    box-shadow:8px 8px 0 #111;
    font-family:Arial,Helvetica,sans-serif;
    color:#111;
}
.comic-3888__header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:8px;
    padding:12px 14px;
    border-bottom:4px solid #111;
    background:#fde047;
}
.comic-3888__tag{
    padding:5px 8px;
    border:3px solid #111;
    background:#ef4444;
    color:#fff;
    box-shadow:2px 2px 0 #111;
    font-size:8px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3888__mini{
    font-size:8px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3888__body{
    padding:18px 16px;
    background:#dbeafe;
    background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.2px);
    background-size:8px 8px;
}
.comic-3888__body h3{
    margin:0 0 8px;
    font:900 25px/.95 Arial Black,Arial,sans-serif;
    letter-spacing:-1px;
}
.comic-3888__body p{
    max-width:260px;
    margin:0 0 16px;
    font-size:10px;
    line-height:1.55;
    font-weight:700;
}
.comic-3888__field{
    display:flex;
    align-items:center;
    gap:10px;
    padding:8px 8px 8px 12px;
    border:4px solid #111;
    background:#fff;
    box-shadow:5px 5px 0 #111;
}
.comic-3888__field i{
    flex:0 0 auto;
    font-size:18px;
}
.comic-3888__field input{
    min-width:0;
    flex:1;
    border:none;
    outline:none;
    background:transparent;
    color:#111;
    font-size:11px;
    font-weight:800;
    font-family:inherit;
}
.comic-3888__field input::placeholder{
    color:#52525b;
}
.comic-3888__field button{
    height:34px;
    padding:0 14px;
    border:3px solid #111;
    background:#2563eb;
    color:#fff;
    box-shadow:3px 3px 0 #111;
    font:900 10px/1 Arial Black,Arial,sans-serif;
    cursor:pointer;
    transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
}
.comic-3888__field button:hover{
    background:#ef4444;
    transform:translate(-2px,-2px);
    box-shadow:5px 5px 0 #111;
}`,
  },
  {
    id: 3889,
    name: "Comic Stats Panel",
    preview: (
      <section className="comic-3889">
        <div className="comic-3889__top">
          <div>
            <span className="comic-3889__eyebrow">TEAM STATUS</span>
            <h3>MISSION CONTROL</h3>
          </div>
          <span className="comic-3889__chip">LIVE</span>
        </div>

        <div className="comic-3889__grid">
          <div className="comic-3889__stat comic-3889__stat--red">
            <strong>24</strong>
            <span>Active Tasks</span>
          </div>

          <div className="comic-3889__stat comic-3889__stat--blue">
            <strong>98%</strong>
            <span>System Health</span>
          </div>

          <div className="comic-3889__stat comic-3889__stat--yellow">
            <strong>12</strong>
            <span>New Alerts</span>
          </div>
        </div>

        <div className="comic-3889__footer">
          <p>Everything is tracked in one bold command center.</p>
          <a href="#/" onClick={(event) => event.preventDefault()}>
            VIEW REPORT
          </a>
        </div>
      </section>
    ),
    html: `<section class="comic-3889">
    <div class="comic-3889__top">
        <div>
            <span class="comic-3889__eyebrow">TEAM STATUS</span>
            <h3>MISSION CONTROL</h3>
        </div>
        <span class="comic-3889__chip">LIVE</span>
    </div>

    <div class="comic-3889__grid">
        <div class="comic-3889__stat comic-3889__stat--red">
            <strong>24</strong>
            <span>Active Tasks</span>
        </div>

        <div class="comic-3889__stat comic-3889__stat--blue">
            <strong>98%</strong>
            <span>System Health</span>
        </div>

        <div class="comic-3889__stat comic-3889__stat--yellow">
            <strong>12</strong>
            <span>New Alerts</span>
        </div>
    </div>

    <div class="comic-3889__footer">
        <p>Everything is tracked in one bold command center.</p>
        <a href="#/">VIEW REPORT</a>
    </div>
</section>`,
    css: `.comic-3889{
    width:340px;
    max-width:100%;
    overflow:hidden;
    border:4px solid #111;
    background:#fffdf7;
    box-shadow:8px 8px 0 #111;
    font-family:Arial,Helvetica,sans-serif;
    color:#111;
    transition:transform .2s ease,box-shadow .2s ease;
}
.comic-3889__top{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:10px;
    padding:16px;
    border-bottom:4px solid #111;
    background:#fff;
}
.comic-3889__eyebrow{
    display:inline-block;
    margin-bottom:6px;
    padding:4px 7px;
    border:2px solid #111;
    background:#fde047;
    box-shadow:2px 2px 0 #111;
    font-size:7px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3889__top h3{
    margin:0;
    font:900 24px/.94 Arial Black,Arial,sans-serif;
    letter-spacing:-1px;
}
.comic-3889__chip{
    padding:6px 10px;
    border:3px solid #111;
    background:#22c55e;
    box-shadow:3px 3px 0 #111;
    font-size:8px;
    font-weight:900;
    letter-spacing:1px;
}
.comic-3889__grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    padding:16px;
    background:#f9fafb;
}
.comic-3889__stat{
    min-height:92px;
    padding:12px 10px;
    border:3px solid #111;
    box-shadow:4px 4px 0 #111;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.comic-3889__stat strong{
    font:900 24px/.9 Arial Black,Arial,sans-serif;
}
.comic-3889__stat span{
    font-size:9px;
    line-height:1.35;
    font-weight:800;
}
.comic-3889__stat--red{
    background:#fecaca;
}
.comic-3889__stat--blue{
    background:#bfdbfe;
}
.comic-3889__stat--yellow{
    background:#fde68a;
}
.comic-3889__footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    padding:14px 16px 16px;
    border-top:4px solid #111;
    background:#ef4444;
    color:#fff;
}
.comic-3889__footer p{
    max-width:190px;
    margin:0;
    font-size:10px;
    line-height:1.5;
    font-weight:800;
}
.comic-3889__footer a{
    flex:0 0 auto;
    padding:10px 12px;
    border:3px solid #111;
    background:#fff;
    color:#111;
    box-shadow:4px 4px 0 #111;
    text-decoration:none;
    font:900 9px/1 Arial Black,Arial,sans-serif;
    transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
}
.comic-3889:hover{
    transform:translate(-2px,-2px);
    box-shadow:11px 11px 0 #111;
}
.comic-3889__footer a:hover{
    background:#fde047;
    transform:translate(-2px,-2px);
    box-shadow:6px 6px 0 #111;
}`,
  },
  {
    id: 3890,
    name: "Comic Hero Navbar",
    preview: (
      <nav className="comic-3890" onClick={(event) => event.stopPropagation()}>
        <a
          href="#/"
          className="comic-3890__logo"
          onClick={(event) => event.preventDefault()}
        >
          <span className="comic-3890__logo-mark">
            <i className="ri-flashlight-fill"></i>
          </span>
          <span className="comic-3890__logo-text">BANG UI</span>
        </a>

        <div className="comic-3890__links">
          <a href="#/" onClick={(event) => event.preventDefault()}>
            HOME
          </a>
          <a href="#/" onClick={(event) => event.preventDefault()}>
            WORK
          </a>
          <a href="#/" onClick={(event) => event.preventDefault()}>
            ABOUT
          </a>
        </div>

        <a
          href="#/"
          className="comic-3890__action"
          onClick={(event) => event.preventDefault()}
        >
          CONTACT
          <i className="ri-arrow-right-line"></i>
        </a>

        <span className="comic-3890__burst">GO!</span>
      </nav>
    ),
    html: `<nav class="comic-3890">
    <a href="#/" class="comic-3890__logo">
        <span class="comic-3890__logo-mark">
            <i class="ri-flashlight-fill"></i>
        </span>
        <span class="comic-3890__logo-text">BANG UI</span>
    </a>

    <div class="comic-3890__links">
        <a href="#/">HOME</a>
        <a href="#/">WORK</a>
        <a href="#/">ABOUT</a>
    </div>

    <a href="#/" class="comic-3890__action">
        CONTACT
        <i class="ri-arrow-right-line"></i>
    </a>

    <span class="comic-3890__burst">GO!</span>
</nav>`,
    css: `.comic-3890{position:relative;width:620px;max-width:100%;min-height:78px;display:flex;align-items:center;gap:18px;padding:12px 14px;overflow:hidden;border:4px solid #111;background:#fef3c7;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3890::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.14) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3890::after{content:"";position:absolute;right:-55px;top:-65px;z-index:-1;width:175px;height:175px;background:#ef4444;transform:rotate(18deg)}
.comic-3890__logo{display:flex;align-items:center;gap:9px;flex:0 0 auto;color:#111;text-decoration:none}
.comic-3890__logo-mark{width:40px;height:40px;display:grid;place-items:center;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-4deg);transition:transform .18s ease,background .18s ease}
.comic-3890__logo-text{font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:-.4px}
.comic-3890__links{display:flex;align-items:center;gap:5px;margin-left:auto}
.comic-3890__links a{padding:8px 9px;border:2px solid transparent;color:#111;text-decoration:none;font-size:8px;font-weight:900;letter-spacing:.7px;transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease}
.comic-3890__links a:hover{border-color:#111;background:#fff;box-shadow:3px 3px 0 #111;transform:translate(-1px,-1px) rotate(-1deg)}
.comic-3890__action{display:flex;align-items:center;gap:6px;flex:0 0 auto;padding:10px 11px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;text-decoration:none;font:900 8px/1 Arial Black,Arial,sans-serif;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3890__action i{font-size:13px;transition:transform .18s ease}
.comic-3890__action:hover{background:#fde047;color:#111;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:6px 6px 0 #111}
.comic-3890__action:hover i{transform:translateX(3px)}
.comic-3890__burst{position:absolute;right:4px;top:2px;width:43px;height:33px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(9deg) scale(.7);transition:opacity .2s ease,transform .2s ease}
.comic-3890:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3890:hover .comic-3890__logo-mark{background:#ef4444;color:#fff;transform:rotate(4deg) scale(1.05)}
.comic-3890:hover .comic-3890__burst{opacity:1;transform:rotate(-6deg) scale(1)}
@media(max-width:620px){.comic-3890{flex-wrap:wrap}.comic-3890__links{order:3;width:100%;justify-content:center;border-top:3px solid #111;padding-top:8px}.comic-3890__action{margin-left:auto}}`,
  },
  {
    id: 3891,
    name: "Comic Pricing Table",
    preview: (
      <section className="comic-3891">
        <div className="comic-3891__header">
          <span className="comic-3891__kicker">CHOOSE YOUR POWER</span>
          <h3>PICK A PLAN</h3>
        </div>

        <div className="comic-3891__plans">
          <article className="comic-3891__plan">
            <span className="comic-3891__plan-name">SIDEKICK</span>

            <div className="comic-3891__price">
              <strong>$9</strong>
              <span>/MO</span>
            </div>

            <ul>
              <li>
                <i className="ri-check-line"></i>
                25 Components
              </li>
              <li>
                <i className="ri-check-line"></i>
                Personal Projects
              </li>
            </ul>

            <button type="button" onClick={(event) => event.stopPropagation()}>
              START
            </button>
          </article>

          <article className="comic-3891__plan comic-3891__plan--featured">
            <span className="comic-3891__popular">POPULAR!</span>
            <span className="comic-3891__plan-name">SUPER</span>

            <div className="comic-3891__price">
              <strong>$19</strong>
              <span>/MO</span>
            </div>

            <ul>
              <li>
                <i className="ri-check-line"></i>
                All Components
              </li>
              <li>
                <i className="ri-check-line"></i>
                Commercial Use
              </li>
            </ul>

            <button type="button" onClick={(event) => event.stopPropagation()}>
              POWER UP
            </button>
          </article>

          <article className="comic-3891__plan">
            <span className="comic-3891__plan-name">LEGEND</span>

            <div className="comic-3891__price">
              <strong>$39</strong>
              <span>/MO</span>
            </div>

            <ul>
              <li>
                <i className="ri-check-line"></i>
                Everything
              </li>
              <li>
                <i className="ri-check-line"></i>
                Priority Access
              </li>
            </ul>

            <button type="button" onClick={(event) => event.stopPropagation()}>
              GO PRO
            </button>
          </article>
        </div>
      </section>
    ),
    html: `<section class="comic-3891">
    <div class="comic-3891__header">
        <span class="comic-3891__kicker">CHOOSE YOUR POWER</span>
        <h3>PICK A PLAN</h3>
    </div>

    <div class="comic-3891__plans">
        <article class="comic-3891__plan">
            <span class="comic-3891__plan-name">SIDEKICK</span>

            <div class="comic-3891__price">
                <strong>$9</strong>
                <span>/MO</span>
            </div>

            <ul>
                <li><i class="ri-check-line"></i>25 Components</li>
                <li><i class="ri-check-line"></i>Personal Projects</li>
            </ul>

            <button type="button">START</button>
        </article>

        <article class="comic-3891__plan comic-3891__plan--featured">
            <span class="comic-3891__popular">POPULAR!</span>
            <span class="comic-3891__plan-name">SUPER</span>

            <div class="comic-3891__price">
                <strong>$19</strong>
                <span>/MO</span>
            </div>

            <ul>
                <li><i class="ri-check-line"></i>All Components</li>
                <li><i class="ri-check-line"></i>Commercial Use</li>
            </ul>

            <button type="button">POWER UP</button>
        </article>

        <article class="comic-3891__plan">
            <span class="comic-3891__plan-name">LEGEND</span>

            <div class="comic-3891__price">
                <strong>$39</strong>
                <span>/MO</span>
            </div>

            <ul>
                <li><i class="ri-check-line"></i>Everything</li>
                <li><i class="ri-check-line"></i>Priority Access</li>
            </ul>

            <button type="button">GO PRO</button>
        </article>
    </div>
</section>`,
    css: `.comic-3891{width:650px;max-width:100%;padding:17px;border:4px solid #111;background:#fef3c7;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;background-image:radial-gradient(rgba(17,17,17,.12) 1.2px,transparent 1.5px);background-size:8px 8px;transition:transform .2s ease,box-shadow .2s ease}
.comic-3891__header{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:17px}
.comic-3891__kicker{padding:6px 8px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:8px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3891__header h3{margin:0;font:900 27px/.95 Arial Black,Arial,sans-serif;letter-spacing:-1px}
.comic-3891__plans{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}
.comic-3891__plan{position:relative;min-width:0;padding:14px 12px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;transition:transform .2s ease,box-shadow .2s ease}
.comic-3891__plan:nth-child(1){transform:rotate(-1deg)}
.comic-3891__plan:nth-child(3){transform:rotate(1deg)}
.comic-3891__plan--featured{background:#bfdbfe;transform:translateY(-6px)}
.comic-3891__popular{position:absolute;right:-7px;top:-14px;padding:5px 7px;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg)}
.comic-3891__plan-name{display:inline-block;padding:5px 7px;border:2px solid #111;background:#111;color:#fff;font-size:8px;font-weight:900;letter-spacing:1px}
.comic-3891__plan--featured .comic-3891__plan-name{background:#ef4444}
.comic-3891__price{display:flex;align-items:flex-end;gap:4px;margin:16px 0 13px}
.comic-3891__price strong{font:900 30px/.9 Arial Black,Arial,sans-serif}
.comic-3891__price span{margin-bottom:3px;font-size:8px;font-weight:900}
.comic-3891__plan ul{display:grid;gap:8px;min-height:51px;margin:0 0 15px;padding:0;list-style:none}
.comic-3891__plan li{display:flex;align-items:center;gap:5px;font-size:8px;font-weight:800}
.comic-3891__plan li i{width:18px;height:18px;display:grid;place-items:center;flex:0 0 18px;border:2px solid #111;background:#22c55e;color:#fff;font-size:11px}
.comic-3891__plan button{width:100%;height:35px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3891__plan--featured button{background:#ef4444;color:#fff}
.comic-3891:hover{transform:translate(-2px,-2px);box-shadow:12px 12px 0 #111}
.comic-3891__plan:hover{transform:translate(-2px,-5px) rotate(-1deg);box-shadow:6px 6px 0 #111}
.comic-3891__plan--featured:hover{transform:translate(-2px,-10px) rotate(1deg)}
.comic-3891__plan button:hover{background:#2563eb;color:#fff;transform:translate(-1px,-1px);box-shadow:5px 5px 0 #111}
@media(max-width:620px){.comic-3891__plans{grid-template-columns:1fr}.comic-3891__plan--featured{transform:none}.comic-3891__plan--featured:hover{transform:translate(-2px,-5px)}}`,
  },
  {
    id: 3892,
    name: "Comic Testimonial Block",
    preview: (
      <article className="comic-3892">
        <div className="comic-3892__rating">
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
        </div>

        <blockquote className="comic-3892__quote">
          “THIS UI KIT TURNED MY BORING DASHBOARD INTO SOMETHING THAT ACTUALLY
          FEELS ALIVE.”
        </blockquote>

        <div className="comic-3892__author">
          <span className="comic-3892__avatar">
            <span className="comic-3892__avatar-hair"></span>
            <i className="ri-user-fill"></i>
          </span>

          <span className="comic-3892__author-info">
            <strong>ALEX CARTER</strong>
            <small>PRODUCT DESIGNER</small>
          </span>

          <span className="comic-3892__verified">
            <i className="ri-checkbox-circle-fill"></i>
            VERIFIED
          </span>
        </div>

        <span className="comic-3892__quote-mark">“</span>
        <span className="comic-3892__impact">WOW!</span>
      </article>
    ),
    html: `<article class="comic-3892">
    <div class="comic-3892__rating">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
    </div>

    <blockquote class="comic-3892__quote">
        “THIS UI KIT TURNED MY BORING DASHBOARD INTO SOMETHING THAT ACTUALLY FEELS ALIVE.”
    </blockquote>

    <div class="comic-3892__author">
        <span class="comic-3892__avatar">
            <span class="comic-3892__avatar-hair"></span>
            <i class="ri-user-fill"></i>
        </span>

        <span class="comic-3892__author-info">
            <strong>ALEX CARTER</strong>
            <small>PRODUCT DESIGNER</small>
        </span>

        <span class="comic-3892__verified">
            <i class="ri-checkbox-circle-fill"></i>
            VERIFIED
        </span>
    </div>

    <span class="comic-3892__quote-mark">“</span>
    <span class="comic-3892__impact">WOW!</span>
</article>`,
    css: `.comic-3892{position:relative;width:390px;max-width:100%;padding:20px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3892::before{content:"";position:absolute;inset:0;z-index:-3;background-image:radial-gradient(rgba(17,17,17,.13) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3892::after{content:"";position:absolute;right:-70px;bottom:-80px;z-index:-2;width:210px;height:180px;background:#60a5fa;transform:rotate(-15deg)}
.comic-3892__rating{display:inline-flex;align-items:center;gap:3px;padding:6px 8px;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;color:#111;transform:rotate(-2deg)}
.comic-3892__rating i{font-size:12px}
.comic-3892__quote{position:relative;z-index:2;margin:18px 0 20px;padding:0;max-width:325px;font:900 18px/1.16 Arial Black,Arial,sans-serif;letter-spacing:-.5px}
.comic-3892__author{position:relative;z-index:3;display:flex;align-items:center;gap:10px;padding-top:15px;border-top:4px solid #111}
.comic-3892__avatar{position:relative;width:46px;height:46px;display:grid;place-items:center;flex:0 0 46px;overflow:hidden;border:3px solid #111;border-radius:50%;background:#fecaca;box-shadow:3px 3px 0 #111;color:#111;font-size:24px}
.comic-3892__avatar-hair{position:absolute;left:4px;right:4px;top:2px;height:16px;background:#111;clip-path:polygon(0 100%,8% 25%,25% 60%,38% 0,51% 54%,67% 0,79% 60%,94% 24%,100% 100%)}
.comic-3892__avatar i{position:absolute;bottom:-2px;font-size:30px}
.comic-3892__author-info{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3892__author-info strong{font:900 10px/1 Arial Black,Arial,sans-serif}
.comic-3892__author-info small{margin-top:4px;font-size:7px;font-weight:800;letter-spacing:.8px}
.comic-3892__verified{display:flex;align-items:center;gap:4px;padding:5px 7px;border:2px solid #111;background:#dbeafe;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900;transform:rotate(2deg)}
.comic-3892__verified i{color:#2563eb;font-size:12px}
.comic-3892__quote-mark{position:absolute;right:13px;top:32px;z-index:-1;color:#ef4444;font-family:Georgia,serif;font-size:115px;font-weight:900;line-height:1;opacity:.18;transform:rotate(8deg)}
.comic-3892__impact{position:absolute;right:8px;bottom:10px;z-index:4;width:52px;height:39px;display:grid;place-items:center;border:3px solid #111;background:#ef4444;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(10deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3892:hover{transform:translate(-2px,-2px) rotate(-.3deg);box-shadow:12px 12px 0 #111}
.comic-3892:hover .comic-3892__rating{transform:rotate(2deg) scale(1.04)}
.comic-3892:hover .comic-3892__avatar{transform:rotate(-4deg)}
.comic-3892:hover .comic-3892__impact{opacity:1;transform:rotate(-7deg) scale(1)}`,
  },
  {
    id: 3893,
    name: "Comic Dashboard Card",
    preview: (
      <section className="comic-3893">
        <div className="comic-3893__header">
          <div>
            <span className="comic-3893__eyebrow">TODAY</span>
            <h3>PROJECT ACTIVITY</h3>
          </div>

          <button
            type="button"
            className="comic-3893__menu"
            onClick={(event) => event.stopPropagation()}
          >
            <i className="ri-more-2-fill"></i>
          </button>
        </div>

        <div className="comic-3893__stats">
          <div className="comic-3893__stat">
            <span className="comic-3893__stat-icon">
              <i className="ri-layout-grid-line"></i>
            </span>
            <div>
              <strong>48</strong>
              <span>Components</span>
            </div>
          </div>

          <div className="comic-3893__stat">
            <span className="comic-3893__stat-icon comic-3893__stat-icon--yellow">
              <i className="ri-flashlight-line"></i>
            </span>
            <div>
              <strong>12</strong>
              <span>Interactive</span>
            </div>
          </div>
        </div>

        <div className="comic-3893__activity">
          <div className="comic-3893__activity-head">
            <span>WEEKLY ACTIVITY</span>
            <strong>+24%</strong>
          </div>

          <div className="comic-3893__bars">
            <span style={{ height: "34%" }}></span>
            <span style={{ height: "52%" }}></span>
            <span style={{ height: "45%" }}></span>
            <span style={{ height: "75%" }}></span>
            <span style={{ height: "62%" }}></span>
            <span style={{ height: "88%" }}></span>
            <span style={{ height: "100%" }}></span>
          </div>

          <div className="comic-3893__days">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>

        <div className="comic-3893__footer">
          <span>
            <i className="ri-time-line"></i>
            Updated 4 min ago
          </span>

          <button type="button" onClick={(event) => event.stopPropagation()}>
            VIEW ALL
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <span className="comic-3893__burst">+24%</span>
      </section>
    ),
    html: `<section class="comic-3893">
    <div class="comic-3893__header">
        <div>
            <span class="comic-3893__eyebrow">TODAY</span>
            <h3>PROJECT ACTIVITY</h3>
        </div>

        <button type="button" class="comic-3893__menu">
            <i class="ri-more-2-fill"></i>
        </button>
    </div>

    <div class="comic-3893__stats">
        <div class="comic-3893__stat">
            <span class="comic-3893__stat-icon">
                <i class="ri-layout-grid-line"></i>
            </span>
            <div>
                <strong>48</strong>
                <span>Components</span>
            </div>
        </div>

        <div class="comic-3893__stat">
            <span class="comic-3893__stat-icon comic-3893__stat-icon--yellow">
                <i class="ri-flashlight-line"></i>
            </span>
            <div>
                <strong>12</strong>
                <span>Interactive</span>
            </div>
        </div>
    </div>

    <div class="comic-3893__activity">
        <div class="comic-3893__activity-head">
            <span>WEEKLY ACTIVITY</span>
            <strong>+24%</strong>
        </div>

        <div class="comic-3893__bars">
            <span style="height:34%"></span>
            <span style="height:52%"></span>
            <span style="height:45%"></span>
            <span style="height:75%"></span>
            <span style="height:62%"></span>
            <span style="height:88%"></span>
            <span style="height:100%"></span>
        </div>

        <div class="comic-3893__days">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
        </div>
    </div>

    <div class="comic-3893__footer">
        <span>
            <i class="ri-time-line"></i>
            Updated 4 min ago
        </span>

        <button type="button">
            VIEW ALL
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <span class="comic-3893__burst">+24%</span>
</section>`,
    css: `.comic-3893{position:relative;width:350px;max-width:100%;padding:17px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3893::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.12) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3893__header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.comic-3893__eyebrow{display:inline-block;margin-bottom:6px;padding:4px 7px;border:2px solid #111;background:#ef4444;color:#fff;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px}
.comic-3893__header h3{margin:0;font:900 21px/.95 Arial Black,Arial,sans-serif;letter-spacing:-.7px}
.comic-3893__menu{width:35px;height:35px;display:grid;place-items:center;flex:0 0 35px;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;color:#111;font-size:17px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}
.comic-3893__stats{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:17px}
.comic-3893__stat{display:flex;align-items:center;gap:9px;padding:10px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3893__stat-icon{width:36px;height:36px;display:grid;place-items:center;flex:0 0 36px;border:3px solid #111;background:#60a5fa;font-size:17px}
.comic-3893__stat-icon--yellow{background:#fde047}
.comic-3893__stat div{display:flex;min-width:0;flex-direction:column}
.comic-3893__stat strong{font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3893__stat span:last-child{margin-top:3px;font-size:7px;font-weight:800}
.comic-3893__activity{margin-top:16px;padding:12px;border:3px solid #111;background:#dbeafe;box-shadow:4px 4px 0 #111}
.comic-3893__activity-head{display:flex;align-items:center;justify-content:space-between;font-size:7px;font-weight:900;letter-spacing:.6px}
.comic-3893__activity-head strong{padding:3px 5px;border:2px solid #111;background:#22c55e;color:#fff;font-size:7px}
.comic-3893__bars{height:78px;display:flex;align-items:flex-end;gap:7px;margin-top:12px;border-bottom:3px solid #111}
.comic-3893__bars span{flex:1;min-width:0;border:2px solid #111;border-bottom:0;background:#ef4444;transition:height .25s ease,background .2s ease}
.comic-3893__bars span:nth-child(even){background:#fde047}
.comic-3893__days{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;margin-top:5px;text-align:center;font-size:6px;font-weight:900}
.comic-3893__footer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px}
.comic-3893__footer>span{display:flex;align-items:center;gap:5px;font-size:7px;font-weight:800}
.comic-3893__footer>span i{font-size:12px}
.comic-3893__footer button{display:flex;align-items:center;gap:5px;padding:8px 9px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3893__footer button i{font-size:12px;transition:transform .18s ease}
.comic-3893__burst{position:absolute;right:7px;top:7px;width:48px;height:37px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3893:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3893:hover .comic-3893__burst{opacity:1;transform:rotate(-5deg) scale(1)}
.comic-3893:hover .comic-3893__bars span:nth-child(1){height:48%!important}
.comic-3893:hover .comic-3893__bars span:nth-child(2){height:63%!important}
.comic-3893:hover .comic-3893__bars span:nth-child(7){background:#2563eb}
.comic-3893__menu:hover{transform:rotate(5deg) translate(-1px,-1px);box-shadow:5px 5px 0 #111}
.comic-3893__footer button:hover{background:#ef4444;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #111}
.comic-3893__footer button:hover i{transform:translateX(3px)}`,
  },
  {
    id: 3894,
    name: "Comic FAQ Accordion",
    preview: (
      <section
        className="comic-3894"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3894__header">
          <span className="comic-3894__label">HELP CENTER</span>
          <h3>QUESTIONS?</h3>
          <p>Everything you need to know before getting started.</p>
        </div>

        <div className="comic-3894__items">
          <details className="comic-3894__item" open>
            <summary>
              <span>Can I use these components commercially?</span>
              <span className="comic-3894__plus">
                <i className="ri-add-line"></i>
              </span>
            </summary>
            <div className="comic-3894__answer">
              Yes. Use the components in personal and commercial projects.
            </div>
          </details>

          <details className="comic-3894__item">
            <summary>
              <span>Can I customize the styles?</span>
              <span className="comic-3894__plus">
                <i className="ri-add-line"></i>
              </span>
            </summary>
            <div className="comic-3894__answer">
              Absolutely. Change colors, spacing, typography and layout however
              you like.
            </div>
          </details>

          <details className="comic-3894__item">
            <summary>
              <span>Do I need JavaScript?</span>
              <span className="comic-3894__plus">
                <i className="ri-add-line"></i>
              </span>
            </summary>
            <div className="comic-3894__answer">
              Not for this accordion. It uses the native HTML details element.
            </div>
          </details>
        </div>

        <span className="comic-3894__burst">FAQ!</span>
      </section>
    ),
    html: `<section class="comic-3894">
    <div class="comic-3894__header">
        <span class="comic-3894__label">HELP CENTER</span>
        <h3>QUESTIONS?</h3>
        <p>Everything you need to know before getting started.</p>
    </div>

    <div class="comic-3894__items">
        <details class="comic-3894__item" open>
            <summary>
                <span>Can I use these components commercially?</span>
                <span class="comic-3894__plus">
                    <i class="ri-add-line"></i>
                </span>
            </summary>

            <div class="comic-3894__answer">
                Yes. Use the components in personal and commercial projects.
            </div>
        </details>

        <details class="comic-3894__item">
            <summary>
                <span>Can I customize the styles?</span>
                <span class="comic-3894__plus">
                    <i class="ri-add-line"></i>
                </span>
            </summary>

            <div class="comic-3894__answer">
                Absolutely. Change colors, spacing, typography and layout however you like.
            </div>
        </details>

        <details class="comic-3894__item">
            <summary>
                <span>Do I need JavaScript?</span>
                <span class="comic-3894__plus">
                    <i class="ri-add-line"></i>
                </span>
            </summary>

            <div class="comic-3894__answer">
                Not for this accordion. It uses the native HTML details element.
            </div>
        </details>
    </div>

    <span class="comic-3894__burst">FAQ!</span>
</section>`,
    css: `.comic-3894{position:relative;width:420px;max-width:100%;padding:18px;overflow:hidden;border:4px solid #111;background:#fef3c7;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3894::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.12) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3894__header{padding-right:50px}
.comic-3894__label{display:inline-block;margin-bottom:7px;padding:5px 7px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3894__header h3{margin:0;font:900 25px/.95 Arial Black,Arial,sans-serif;letter-spacing:-1px}
.comic-3894__header p{max-width:300px;margin:8px 0 0;font-size:9px;font-weight:700;line-height:1.5}
.comic-3894__items{display:grid;gap:9px;margin-top:17px}
.comic-3894__item{border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;transition:transform .18s ease,box-shadow .18s ease}
.comic-3894__item summary{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 12px;list-style:none;cursor:pointer;font-size:9px;font-weight:900}
.comic-3894__item summary::-webkit-details-marker{display:none}
.comic-3894__plus{width:27px;height:27px;display:grid;place-items:center;flex:0 0 27px;border:3px solid #111;background:#fde047;font-size:15px;transition:transform .2s ease,background .2s ease}
.comic-3894__answer{padding:0 12px 12px;border-top:3px solid #111;background:#dbeafe;font-size:9px;font-weight:700;line-height:1.55}
.comic-3894__answer::before{content:"";display:block;height:10px}
.comic-3894__item[open]{background:#fff}
.comic-3894__item[open] .comic-3894__plus{background:#ef4444;color:#fff;transform:rotate(45deg)}
.comic-3894__item[open] summary{background:#fff}
.comic-3894__burst{position:absolute;right:9px;top:10px;width:50px;height:39px;display:grid;place-items:center;border:3px solid #111;background:#ef4444;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .2s ease}
.comic-3894:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3894:hover .comic-3894__burst{transform:rotate(-6deg) scale(1.08)}
.comic-3894__item:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}`,
  },
  {
    id: 3895,
    name: "Comic Notification Panel",
    preview: (
      <section className="comic-3895">
        <div className="comic-3895__header">
          <div>
            <span className="comic-3895__eyebrow">INBOX</span>
            <h3>NOTIFICATIONS</h3>
          </div>

          <span className="comic-3895__count">3 NEW</span>
        </div>

        <div className="comic-3895__list">
          <article className="comic-3895__item comic-3895__item--new">
            <span className="comic-3895__icon">
              <i className="ri-heart-3-fill"></i>
            </span>

            <div className="comic-3895__content">
              <strong>New favorite</strong>
              <p>Someone saved your newest component.</p>
              <small>2 MIN AGO</small>
            </div>

            <span className="comic-3895__dot"></span>
          </article>

          <article className="comic-3895__item comic-3895__item--new">
            <span className="comic-3895__icon comic-3895__icon--yellow">
              <i className="ri-message-3-fill"></i>
            </span>

            <div className="comic-3895__content">
              <strong>New comment</strong>
              <p>Your dashboard component received feedback.</p>
              <small>18 MIN AGO</small>
            </div>

            <span className="comic-3895__dot"></span>
          </article>

          <article className="comic-3895__item">
            <span className="comic-3895__icon comic-3895__icon--blue">
              <i className="ri-user-add-fill"></i>
            </span>

            <div className="comic-3895__content">
              <strong>New follower</strong>
              <p>A new creator started following your work.</p>
              <small>1 HOUR AGO</small>
            </div>
          </article>
        </div>

        <button
          type="button"
          className="comic-3895__button"
          onClick={(event) => event.stopPropagation()}
        >
          MARK ALL AS READ
          <i className="ri-check-double-line"></i>
        </button>

        <span className="comic-3895__burst">PING!</span>
      </section>
    ),
    html: `<section class="comic-3895">
    <div class="comic-3895__header">
        <div>
            <span class="comic-3895__eyebrow">INBOX</span>
            <h3>NOTIFICATIONS</h3>
        </div>

        <span class="comic-3895__count">3 NEW</span>
    </div>

    <div class="comic-3895__list">
        <article class="comic-3895__item comic-3895__item--new">
            <span class="comic-3895__icon">
                <i class="ri-heart-3-fill"></i>
            </span>

            <div class="comic-3895__content">
                <strong>New favorite</strong>
                <p>Someone saved your newest component.</p>
                <small>2 MIN AGO</small>
            </div>

            <span class="comic-3895__dot"></span>
        </article>

        <article class="comic-3895__item comic-3895__item--new">
            <span class="comic-3895__icon comic-3895__icon--yellow">
                <i class="ri-message-3-fill"></i>
            </span>

            <div class="comic-3895__content">
                <strong>New comment</strong>
                <p>Your dashboard component received feedback.</p>
                <small>18 MIN AGO</small>
            </div>

            <span class="comic-3895__dot"></span>
        </article>

        <article class="comic-3895__item">
            <span class="comic-3895__icon comic-3895__icon--blue">
                <i class="ri-user-add-fill"></i>
            </span>

            <div class="comic-3895__content">
                <strong>New follower</strong>
                <p>A new creator started following your work.</p>
                <small>1 HOUR AGO</small>
            </div>
        </article>
    </div>

    <button type="button" class="comic-3895__button">
        MARK ALL AS READ
        <i class="ri-check-double-line"></i>
    </button>

    <span class="comic-3895__burst">PING!</span>
</section>`,
    css: `.comic-3895{position:relative;width:370px;max-width:100%;padding:17px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3895::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.11) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3895__header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-right:44px}
.comic-3895__eyebrow{display:inline-block;margin-bottom:6px;padding:4px 7px;border:2px solid #111;background:#2563eb;color:#fff;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px}
.comic-3895__header h3{margin:0;font:900 21px/.95 Arial Black,Arial,sans-serif;letter-spacing:-.8px}
.comic-3895__count{padding:6px 8px;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;white-space:nowrap;transform:rotate(2deg)}
.comic-3895__list{display:grid;gap:9px;margin-top:17px}
.comic-3895__item{position:relative;display:flex;align-items:flex-start;gap:10px;padding:10px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3895__item--new{background:#fef3c7}
.comic-3895__icon{width:38px;height:38px;display:grid;place-items:center;flex:0 0 38px;border:3px solid #111;background:#ef4444;color:#fff;font-size:17px}
.comic-3895__icon--yellow{background:#fde047;color:#111}
.comic-3895__icon--blue{background:#60a5fa;color:#111}
.comic-3895__content{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3895__content strong{font:900 9px/1 Arial Black,Arial,sans-serif}
.comic-3895__content p{margin:5px 0;color:#3f3f46;font-size:8px;font-weight:700;line-height:1.4}
.comic-3895__content small{font-size:6px;font-weight:900;letter-spacing:.7px}
.comic-3895__dot{position:absolute;right:9px;top:9px;width:9px;height:9px;border:2px solid #111;border-radius:50%;background:#ef4444}
.comic-3895__button{width:100%;height:40px;display:flex;align-items:center;justify-content:center;gap:7px;margin-top:15px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3895__button i{font-size:14px}
.comic-3895__burst{position:absolute;right:7px;top:7px;width:47px;height:36px;display:grid;place-items:center;border:3px solid #111;background:#ef4444;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(9deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3895:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3895:hover .comic-3895__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3895__item:hover{background:#dbeafe;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3895__button:hover{background:#ef4444;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}`,
  },
  {
    id: 3896,
    name: "Comic Profile Card",
    preview: (
      <article className="comic-3896">
        <div className="comic-3896__cover">
          <span className="comic-3896__dots"></span>
          <span className="comic-3896__status">ONLINE</span>
          <span className="comic-3896__burst">HEY!</span>
        </div>

        <div className="comic-3896__profile">
          <div className="comic-3896__avatar">
            <i className="ri-user-3-fill"></i>
          </div>

          <div className="comic-3896__identity">
            <h3>JORDAN LEE</h3>
            <span>UI / PRODUCT DESIGNER</span>
          </div>

          <button
            type="button"
            className="comic-3896__follow"
            onClick={(event) => event.stopPropagation()}
          >
            FOLLOW
          </button>
        </div>

        <p className="comic-3896__bio">
          Building bold interfaces, useful products and tiny details that make
          things feel better.
        </p>

        <div className="comic-3896__stats">
          <div>
            <strong>128</strong>
            <span>PROJECTS</span>
          </div>

          <div>
            <strong>8.4K</strong>
            <span>FOLLOWERS</span>
          </div>

          <div>
            <strong>642</strong>
            <span>LIKES</span>
          </div>
        </div>
      </article>
    ),
    html: `<article class="comic-3896">
    <div class="comic-3896__cover">
        <span class="comic-3896__dots"></span>
        <span class="comic-3896__status">ONLINE</span>
        <span class="comic-3896__burst">HEY!</span>
    </div>

    <div class="comic-3896__profile">
        <div class="comic-3896__avatar">
            <i class="ri-user-3-fill"></i>
        </div>

        <div class="comic-3896__identity">
            <h3>JORDAN LEE</h3>
            <span>UI / PRODUCT DESIGNER</span>
        </div>

        <button type="button" class="comic-3896__follow">
            FOLLOW
        </button>
    </div>

    <p class="comic-3896__bio">
        Building bold interfaces, useful products and tiny details that make things feel better.
    </p>

    <div class="comic-3896__stats">
        <div>
            <strong>128</strong>
            <span>PROJECTS</span>
        </div>

        <div>
            <strong>8.4K</strong>
            <span>FOLLOWERS</span>
        </div>

        <div>
            <strong>642</strong>
            <span>LIKES</span>
        </div>
    </div>
</article>`,
    css: `.comic-3896{position:relative;width:340px;max-width:100%;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3896__cover{position:relative;height:86px;overflow:hidden;border-bottom:4px solid #111;background:#2563eb}
.comic-3896__dots{position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.28) 1.3px,transparent 1.5px);background-size:8px 8px}
.comic-3896__cover::after{content:"";position:absolute;right:-40px;top:-55px;width:145px;height:145px;background:#ef4444;transform:rotate(18deg)}
.comic-3896__status{position:absolute;left:10px;top:10px;z-index:3;padding:5px 7px;border:3px solid #111;background:#22c55e;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3896__burst{position:absolute;right:9px;top:8px;z-index:4;width:48px;height:37px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .2s ease}
.comic-3896__profile{position:relative;display:flex;align-items:center;gap:10px;padding:0 14px;margin-top:-24px;z-index:5}
.comic-3896__avatar{width:67px;height:67px;display:grid;place-items:center;flex:0 0 67px;border:4px solid #111;border-radius:50%;background:#fde047;box-shadow:4px 4px 0 #111;font-size:31px}
.comic-3896__identity{min-width:0;flex:1;padding-top:29px}
.comic-3896__identity h3{margin:0;font:900 15px/1 Arial Black,Arial,sans-serif}
.comic-3896__identity span{display:block;margin-top:4px;font-size:7px;font-weight:900;letter-spacing:.6px}
.comic-3896__follow{align-self:flex-end;margin-bottom:3px;padding:8px 9px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3896__bio{margin:15px 14px 0;color:#3f3f46;font-size:9px;font-weight:700;line-height:1.5}
.comic-3896__stats{display:grid;grid-template-columns:repeat(3,1fr);margin-top:15px;border-top:4px solid #111}
.comic-3896__stats div{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:11px 4px;background:#fef3c7}
.comic-3896__stats div+div{border-left:3px solid #111}
.comic-3896__stats strong{font:900 16px/1 Arial Black,Arial,sans-serif}
.comic-3896__stats span{margin-top:4px;font-size:6px;font-weight:900;letter-spacing:.7px}
.comic-3896:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3896:hover .comic-3896__burst{transform:rotate(-6deg) scale(1.08)}
.comic-3896__follow:hover{background:#2563eb;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #111}`,
  },
  {
    id: 3897,
    name: "Comic Login Panel",
    preview: (
      <section
        className="comic-3897"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3897__header">
          <span className="comic-3897__label">MEMBER ACCESS</span>
          <h3>WELCOME BACK!</h3>
          <p>Sign in and continue where you left off.</p>
        </div>

        <form className="comic-3897__form">
          <label className="comic-3897__field">
            <span>EMAIL</span>

            <div>
              <i className="ri-mail-line"></i>
              <input type="email" placeholder="hello@example.com" />
            </div>
          </label>

          <label className="comic-3897__field">
            <span>PASSWORD</span>

            <div>
              <i className="ri-lock-2-line"></i>
              <input type="password" placeholder="••••••••" />
            </div>
          </label>

          <div className="comic-3897__options">
            <label>
              <input type="checkbox" />
              <span className="comic-3897__checkbox">
                <i className="ri-check-line"></i>
              </span>
              REMEMBER ME
            </label>

            <a href="#/" onClick={(event) => event.preventDefault()}>
              FORGOT?
            </a>
          </div>

          <button type="button" className="comic-3897__submit">
            SIGN IN
            <i className="ri-arrow-right-line"></i>
          </button>
        </form>

        <span className="comic-3897__impact">LOGIN!</span>
      </section>
    ),
    html: `<section class="comic-3897">
    <div class="comic-3897__header">
        <span class="comic-3897__label">MEMBER ACCESS</span>
        <h3>WELCOME BACK!</h3>
        <p>Sign in and continue where you left off.</p>
    </div>

    <form class="comic-3897__form">
        <label class="comic-3897__field">
            <span>EMAIL</span>

            <div>
                <i class="ri-mail-line"></i>
                <input type="email" placeholder="hello@example.com">
            </div>
        </label>

        <label class="comic-3897__field">
            <span>PASSWORD</span>

            <div>
                <i class="ri-lock-2-line"></i>
                <input type="password" placeholder="••••••••">
            </div>
        </label>

        <div class="comic-3897__options">
            <label>
                <input type="checkbox">
                <span class="comic-3897__checkbox">
                    <i class="ri-check-line"></i>
                </span>
                REMEMBER ME
            </label>

            <a href="#/">FORGOT?</a>
        </div>

        <button type="button" class="comic-3897__submit">
            SIGN IN
            <i class="ri-arrow-right-line"></i>
        </button>
    </form>

    <span class="comic-3897__impact">LOGIN!</span>
</section>`,
    css: `.comic-3897{position:relative;width:350px;max-width:100%;padding:18px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3897::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.11) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3897::after{content:"";position:absolute;right:-70px;top:-75px;z-index:-1;width:190px;height:170px;background:#60a5fa;transform:rotate(15deg)}
.comic-3897__header{padding-right:60px}
.comic-3897__label{display:inline-block;margin-bottom:7px;padding:5px 7px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3897__header h3{margin:0;font:900 24px/.95 Arial Black,Arial,sans-serif;letter-spacing:-.8px}
.comic-3897__header p{margin:8px 0 0;font-size:9px;font-weight:700}
.comic-3897__form{display:grid;gap:13px;margin-top:18px}
.comic-3897__field{display:grid;gap:5px}
.comic-3897__field>span{font-size:7px;font-weight:900;letter-spacing:.8px}
.comic-3897__field>div{display:flex;align-items:center;height:45px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;transition:transform .18s ease,box-shadow .18s ease}
.comic-3897__field i{width:42px;display:grid;place-items:center;align-self:stretch;border-right:3px solid #111;background:#fde047;font-size:16px}
.comic-3897__field input{min-width:0;flex:1;height:100%;padding:0 10px;border:0;outline:0;background:transparent;color:#111;font-family:inherit;font-size:10px;font-weight:800}
.comic-3897__field>div:focus-within{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3897__options{display:flex;align-items:center;justify-content:space-between;gap:10px}
.comic-3897__options>label{display:flex;align-items:center;gap:6px;font-size:6px;font-weight:900;cursor:pointer}
.comic-3897__options input{position:absolute;width:1px;height:1px;opacity:0}
.comic-3897__checkbox{width:19px;height:19px;display:grid;place-items:center;border:3px solid #111;background:#fff;font-size:11px}
.comic-3897__options input:checked+.comic-3897__checkbox{background:#22c55e;color:#fff}
.comic-3897__options a{color:#111;font-size:7px;font-weight:900}
.comic-3897__submit{height:44px;display:flex;align-items:center;justify-content:center;gap:8px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3897__submit i{font-size:14px;transition:transform .18s ease}
.comic-3897__impact{position:absolute;right:8px;top:9px;width:55px;height:41px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg)}
.comic-3897:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3897__submit:hover{background:#ef4444;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3897__submit:hover i{transform:translateX(3px)}`,
  },
  {
    id: 3898,
    name: "Comic Upload Dropzone",
    preview: (
      <section
        className="comic-3898"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3898__header">
          <span>UPLOAD CENTER</span>
          <strong>DROP YOUR FILES!</strong>
        </div>

        <label className="comic-3898__drop">
          <input type="file" />

          <span className="comic-3898__icon">
            <i className="ri-upload-cloud-2-line"></i>
          </span>

          <strong>DRAG & DROP</strong>
          <p>or click here to choose a file</p>

          <span className="comic-3898__types">PNG · JPG · PDF · ZIP</span>
        </label>

        <div className="comic-3898__file">
          <span className="comic-3898__file-icon">
            <i className="ri-file-3-line"></i>
          </span>

          <div className="comic-3898__file-info">
            <strong>project-assets.zip</strong>
            <span>4.8 MB</span>

            <div className="comic-3898__progress">
              <span></span>
            </div>
          </div>

          <span className="comic-3898__percent">82%</span>
        </div>

        <span className="comic-3898__burst">DROP!</span>
      </section>
    ),
    html: `<section class="comic-3898">
    <div class="comic-3898__header">
        <span>UPLOAD CENTER</span>
        <strong>DROP YOUR FILES!</strong>
    </div>

    <label class="comic-3898__drop">
        <input type="file">

        <span class="comic-3898__icon">
            <i class="ri-upload-cloud-2-line"></i>
        </span>

        <strong>DRAG & DROP</strong>
        <p>or click here to choose a file</p>

        <span class="comic-3898__types">PNG · JPG · PDF · ZIP</span>
    </label>

    <div class="comic-3898__file">
        <span class="comic-3898__file-icon">
            <i class="ri-file-3-line"></i>
        </span>

        <div class="comic-3898__file-info">
            <strong>project-assets.zip</strong>
            <span>4.8 MB</span>

            <div class="comic-3898__progress">
                <span></span>
            </div>
        </div>

        <span class="comic-3898__percent">82%</span>
    </div>

    <span class="comic-3898__burst">DROP!</span>
</section>`,
    css: `.comic-3898{position:relative;width:360px;max-width:100%;padding:17px;overflow:hidden;border:4px solid #111;background:#fef3c7;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3898__header{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}
.comic-3898__header span{padding:5px 7px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3898__header strong{font:900 13px/1 Arial Black,Arial,sans-serif}
.comic-3898__drop{position:relative;display:flex;min-height:164px;flex-direction:column;align-items:center;justify-content:center;padding:17px;border:4px dashed #111;background:#dbeafe;text-align:center;cursor:pointer;transition:transform .2s ease,background .2s ease,box-shadow .2s ease}
.comic-3898__drop::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.14) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3898__drop input{position:absolute;width:1px;height:1px;opacity:0}
.comic-3898__icon{position:relative;width:51px;height:51px;display:grid;place-items:center;border:3px solid #111;background:#fde047;box-shadow:4px 4px 0 #111;font-size:24px;transform:rotate(-3deg);transition:transform .2s ease,background .2s ease}
.comic-3898__drop strong{position:relative;margin-top:13px;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3898__drop p{position:relative;margin:6px 0 0;font-size:8px;font-weight:700}
.comic-3898__types{position:relative;margin-top:11px;padding:5px 7px;border:2px solid #111;background:#fff;font-size:6px;font-weight:900;letter-spacing:.7px}
.comic-3898__file{display:flex;align-items:center;gap:10px;margin-top:13px;padding:10px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3898__file-icon{width:38px;height:38px;display:grid;place-items:center;flex:0 0 38px;border:3px solid #111;background:#60a5fa;font-size:17px}
.comic-3898__file-info{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3898__file-info strong{overflow:hidden;font:900 8px/1 Arial Black,Arial,sans-serif;text-overflow:ellipsis;white-space:nowrap}
.comic-3898__file-info>span{margin-top:3px;font-size:6px;font-weight:800}
.comic-3898__progress{height:9px;margin-top:6px;overflow:hidden;border:2px solid #111;background:#e5e7eb}
.comic-3898__progress span{display:block;width:82%;height:100%;background:#22c55e;transition:width .3s ease}
.comic-3898__percent{padding:5px 6px;border:2px solid #111;background:#fde047;font-size:7px;font-weight:900}
.comic-3898__burst{position:absolute;right:6px;top:6px;width:48px;height:37px;display:grid;place-items:center;border:3px solid #111;background:#2563eb;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.7);transition:opacity .2s ease,transform .2s ease}
.comic-3898:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3898:hover .comic-3898__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3898__drop:hover{background:#bfdbfe;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #111}
.comic-3898__drop:hover .comic-3898__icon{background:#ef4444;color:#fff;transform:rotate(5deg) scale(1.07)}
.comic-3898:hover .comic-3898__progress span{width:94%}`,
  },
  {
    id: 3899,
    name: "Comic Pagination",
    preview: (
      <nav
        className="comic-3899"
        aria-label="Pagination"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="comic-3899__arrow">
          <i className="ri-arrow-left-line"></i>
        </button>

        <button type="button" className="comic-3899__page">
          1
        </button>

        <button
          type="button"
          className="comic-3899__page comic-3899__page--active"
        >
          2
        </button>

        <button type="button" className="comic-3899__page">
          3
        </button>

        <span className="comic-3899__dots">...</span>

        <button type="button" className="comic-3899__page">
          12
        </button>

        <button type="button" className="comic-3899__arrow">
          <i className="ri-arrow-right-line"></i>
        </button>

        <span className="comic-3899__burst">NEXT!</span>
      </nav>
    ),
    html: `<nav class="comic-3899" aria-label="Pagination">
    <button type="button" class="comic-3899__arrow">
        <i class="ri-arrow-left-line"></i>
    </button>

    <button type="button" class="comic-3899__page">1</button>
    <button type="button" class="comic-3899__page comic-3899__page--active">2</button>
    <button type="button" class="comic-3899__page">3</button>

    <span class="comic-3899__dots">...</span>

    <button type="button" class="comic-3899__page">12</button>

    <button type="button" class="comic-3899__arrow">
        <i class="ri-arrow-right-line"></i>
    </button>

    <span class="comic-3899__burst">NEXT!</span>
</nav>`,
    css: `.comic-3899{position:relative;display:inline-flex;align-items:center;gap:7px;padding:12px;border:4px solid #111;background:#fef3c7;box-shadow:7px 7px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3899::before{content:"";position:absolute;inset:0;z-index:0;background-image:radial-gradient(rgba(17,17,17,.11) 1.1px,transparent 1.4px);background-size:8px 8px;pointer-events:none}
.comic-3899__page,.comic-3899__arrow{position:relative;z-index:2;width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease,color .18s ease}
.comic-3899__arrow{background:#fde047;font-size:15px}
.comic-3899__page--active{background:#ef4444;color:#fff;transform:rotate(-3deg)}
.comic-3899__dots{position:relative;z-index:2;width:24px;text-align:center;font:900 11px/1 Arial Black,Arial,sans-serif}
.comic-3899__burst{position:absolute;right:-20px;top:-23px;z-index:4;width:51px;height:39px;display:grid;place-items:center;border:3px solid #111;background:#2563eb;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 6px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.7);transition:opacity .2s ease,transform .2s ease}
.comic-3899:hover{transform:translate(-2px,-2px);box-shadow:10px 10px 0 #111}
.comic-3899:hover .comic-3899__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3899__page:hover,.comic-3899__arrow:hover{background:#2563eb;color:#fff;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:5px 5px 0 #111}
.comic-3899__page--active:hover{background:#ef4444;color:#fff;transform:translate(-2px,-2px) rotate(3deg)}`,
  },
  {
    id: 3900,
    name: "Comic Action Modal",
    preview: (
      <section
        className="comic-3900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="comic-3900-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="comic-3900__top">
          <span className="comic-3900__label">SYSTEM MESSAGE</span>

          <button
            type="button"
            className="comic-3900__close"
            aria-label="Close"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="comic-3900__icon">
          <i className="ri-flashlight-fill"></i>
        </div>

        <div className="comic-3900__content">
          <h3 id="comic-3900-title">READY FOR ACTION?</h3>

          <p>
            Your project is ready to launch. Confirm the action to continue to
            the next stage.
          </p>

          <div className="comic-3900__notice">
            <i className="ri-information-line"></i>

            <span>
              This action will publish your latest changes immediately.
            </span>
          </div>
        </div>

        <div className="comic-3900__actions">
          <button type="button" className="comic-3900__cancel">
            CANCEL
          </button>

          <button type="button" className="comic-3900__confirm">
            LAUNCH
            <i className="ri-rocket-2-line"></i>
          </button>
        </div>

        <span className="comic-3900__burst">GO!</span>
      </section>
    ),
    html: `<section class="comic-3900" role="dialog" aria-modal="true" aria-labelledby="comic-3900-title">
    <div class="comic-3900__top">
        <span class="comic-3900__label">SYSTEM MESSAGE</span>

        <button type="button" class="comic-3900__close" aria-label="Close">
            <i class="ri-close-line"></i>
        </button>
    </div>

    <div class="comic-3900__icon">
        <i class="ri-flashlight-fill"></i>
    </div>

    <div class="comic-3900__content">
        <h3 id="comic-3900-title">READY FOR ACTION?</h3>

        <p>
            Your project is ready to launch. Confirm the action to continue to the next stage.
        </p>

        <div class="comic-3900__notice">
            <i class="ri-information-line"></i>

            <span>
                This action will publish your latest changes immediately.
            </span>
        </div>
    </div>

    <div class="comic-3900__actions">
        <button type="button" class="comic-3900__cancel">
            CANCEL
        </button>

        <button type="button" class="comic-3900__confirm">
            LAUNCH
            <i class="ri-rocket-2-line"></i>
        </button>
    </div>

    <span class="comic-3900__burst">GO!</span>
</section>`,
    css: `.comic-3900{position:relative;width:370px;max-width:100%;padding:18px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:10px 10px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3900::before{content:"";position:absolute;inset:0;z-index:-3;background-image:radial-gradient(rgba(17,17,17,.12) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3900::after{content:"";position:absolute;left:-70px;top:-80px;z-index:-2;width:190px;height:190px;background:#60a5fa;transform:rotate(20deg)}
.comic-3900__top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.comic-3900__label{display:inline-block;padding:5px 8px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3900__close{width:35px;height:35px;display:grid;place-items:center;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;color:#111;font-size:18px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3900__icon{width:65px;height:65px;display:grid;place-items:center;margin:20px auto 14px;border:4px solid #111;border-radius:50%;background:#fde047;box-shadow:5px 5px 0 #111;font-size:28px;transform:rotate(-4deg);transition:transform .2s ease,background .2s ease}
.comic-3900__content{text-align:center}
.comic-3900__content h3{margin:0;font:900 25px/.95 Arial Black,Arial,sans-serif;letter-spacing:-1px}
.comic-3900__content>p{max-width:300px;margin:10px auto 0;color:#3f3f46;font-size:9px;font-weight:700;line-height:1.55}
.comic-3900__notice{display:flex;align-items:center;gap:9px;margin-top:16px;padding:10px;border:3px solid #111;background:#dbeafe;box-shadow:4px 4px 0 #111;text-align:left}
.comic-3900__notice i{width:31px;height:31px;display:grid;place-items:center;flex:0 0 31px;border:3px solid #111;background:#2563eb;color:#fff;font-size:15px}
.comic-3900__notice span{font-size:8px;font-weight:800;line-height:1.4}
.comic-3900__actions{display:grid;grid-template-columns:1fr 1.35fr;gap:10px;margin-top:18px}
.comic-3900__actions button{height:42px;border:3px solid #111;box-shadow:4px 4px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3900__cancel{background:#fff;color:#111}
.comic-3900__confirm{display:flex;align-items:center;justify-content:center;gap:7px;background:#ef4444;color:#fff}
.comic-3900__confirm i{font-size:14px;transition:transform .18s ease}
.comic-3900__burst{position:absolute;right:7px;top:7px;width:47px;height:36px;display:grid;place-items:center;border:3px solid #111;background:#fde047;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3900:hover{transform:translate(-2px,-2px);box-shadow:13px 13px 0 #111}
.comic-3900:hover .comic-3900__icon{background:#60a5fa;transform:rotate(4deg) scale(1.07)}
.comic-3900:hover .comic-3900__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3900__close:hover{background:#fde047;transform:translate(-1px,-1px) rotate(5deg);box-shadow:5px 5px 0 #111}
.comic-3900__cancel:hover{background:#fde047;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3900__confirm:hover{background:#2563eb;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3900__confirm:hover i{transform:translateX(3px) rotate(-5deg)}`,
  },
  {
    id: 3901,
    name: "Comic Power Pricing Card",
    preview: (
      <article className="comic-3901">
        <div className="comic-3901__header">
          <span className="comic-3901__label">CREATOR PLAN</span>
          <span className="comic-3901__popular">BEST!</span>

          <h3>SUPER PACK</h3>
          <p>Everything you need to build your next bold interface.</p>
        </div>

        <div className="comic-3901__price">
          <div>
            <span>$</span>
            <strong>29</strong>
          </div>

          <span className="comic-3901__period">
            PER
            <br />
            MONTH
          </span>
        </div>

        <div className="comic-3901__features">
          <div>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Unlimited components
          </div>

          <div>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Commercial projects
          </div>

          <div>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Premium collections
          </div>

          <div>
            <span>
              <i className="ri-check-line"></i>
            </span>
            Future updates
          </div>
        </div>

        <button
          type="button"
          className="comic-3901__button"
          onClick={(event) => event.stopPropagation()}
        >
          CHOOSE PLAN
          <i className="ri-arrow-right-line"></i>
        </button>

        <span className="comic-3901__footer-note">
          CANCEL ANYTIME · NO HIDDEN FEES
        </span>
      </article>
    ),
    html: `<article class="comic-3901">
    <div class="comic-3901__header">
        <span class="comic-3901__label">CREATOR PLAN</span>
        <span class="comic-3901__popular">BEST!</span>

        <h3>SUPER PACK</h3>
        <p>Everything you need to build your next bold interface.</p>
    </div>

    <div class="comic-3901__price">
        <div>
            <span>$</span>
            <strong>29</strong>
        </div>

        <span class="comic-3901__period">
            PER
            <br>
            MONTH
        </span>
    </div>

    <div class="comic-3901__features">
        <div>
            <span><i class="ri-check-line"></i></span>
            Unlimited components
        </div>

        <div>
            <span><i class="ri-check-line"></i></span>
            Commercial projects
        </div>

        <div>
            <span><i class="ri-check-line"></i></span>
            Premium collections
        </div>

        <div>
            <span><i class="ri-check-line"></i></span>
            Future updates
        </div>
    </div>

    <button type="button" class="comic-3901__button">
        CHOOSE PLAN
        <i class="ri-arrow-right-line"></i>
    </button>

    <span class="comic-3901__footer-note">
        CANCEL ANYTIME · NO HIDDEN FEES
    </span>
</article>`,
    css: `.comic-3901{position:relative;width:320px;max-width:100%;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:9px 9px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3901__header{position:relative;padding:17px 17px 16px;border-bottom:4px solid #111;background:#2563eb;color:#fff;background-image:radial-gradient(rgba(17,17,17,.25) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3901__label{display:inline-block;padding:5px 7px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3901__popular{position:absolute;right:8px;top:8px;width:53px;height:40px;display:grid;place-items:center;border:3px solid #111;background:#ef4444;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .2s ease}
.comic-3901__header h3{margin:20px 0 6px;font:900 27px/.9 Arial Black,Arial,sans-serif;letter-spacing:-1px}
.comic-3901__header p{max-width:245px;margin:0;font-size:9px;font-weight:700;line-height:1.5}
.comic-3901__price{display:flex;align-items:center;justify-content:center;gap:10px;padding:18px;border-bottom:4px solid #111;background:#fde047}
.comic-3901__price>div{display:flex;align-items:flex-start}
.comic-3901__price>div>span{margin-top:4px;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3901__price strong{font:900 46px/.82 Arial Black,Arial,sans-serif;letter-spacing:-2px}
.comic-3901__period{padding-left:10px;border-left:3px solid #111;font-size:7px;font-weight:900;line-height:1.3;letter-spacing:.8px}
.comic-3901__features{display:grid;gap:9px;padding:16px}
.comic-3901__features>div{display:flex;align-items:center;gap:8px;font-size:9px;font-weight:800}
.comic-3901__features>div>span{width:24px;height:24px;display:grid;place-items:center;flex:0 0 24px;border:3px solid #111;background:#dbeafe;font-size:13px}
.comic-3901__button{width:calc(100% - 32px);height:43px;display:flex;align-items:center;justify-content:center;gap:7px;margin:0 16px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:4px 4px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3901__button i{font-size:14px;transition:transform .18s ease}
.comic-3901__footer-note{display:block;padding:12px 10px 14px;text-align:center;font-size:6px;font-weight:900;letter-spacing:.8px}
.comic-3901:hover{transform:translate(-2px,-2px);box-shadow:12px 12px 0 #111}
.comic-3901:hover .comic-3901__popular{transform:rotate(-6deg) scale(1.08)}
.comic-3901__button:hover{background:#2563eb;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #111}
.comic-3901__button:hover i{transform:translateX(3px)}`,
  },
  {
    id: 3902,
    name: "Comic Toast Notification",
    preview: (
      <aside
        className="comic-3902"
        role="status"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="comic-3902__icon">
          <i className="ri-check-line"></i>
        </span>

        <div className="comic-3902__content">
          <span className="comic-3902__eyebrow">SUCCESS!</span>
          <strong>Changes saved</strong>
          <p>Your latest updates are now live.</p>
        </div>

        <button type="button" className="comic-3902__close" aria-label="Close">
          <i className="ri-close-line"></i>
        </button>

        <div className="comic-3902__timer">
          <span></span>
        </div>

        <span className="comic-3902__burst">DONE!</span>
      </aside>
    ),
    html: `<aside class="comic-3902" role="status">
    <span class="comic-3902__icon">
        <i class="ri-check-line"></i>
    </span>

    <div class="comic-3902__content">
        <span class="comic-3902__eyebrow">SUCCESS!</span>
        <strong>Changes saved</strong>
        <p>Your latest updates are now live.</p>
    </div>

    <button type="button" class="comic-3902__close" aria-label="Close">
        <i class="ri-close-line"></i>
    </button>

    <div class="comic-3902__timer">
        <span></span>
    </div>

    <span class="comic-3902__burst">DONE!</span>
</aside>`,
    css: `.comic-3902{position:relative;width:350px;max-width:100%;display:flex;align-items:center;gap:11px;padding:13px 14px 17px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3902::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.1) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3902__icon{width:48px;height:48px;display:grid;place-items:center;flex:0 0 48px;border:4px solid #111;border-radius:50%;background:#22c55e;color:#fff;box-shadow:4px 4px 0 #111;font-size:24px;transform:rotate(-4deg);transition:transform .2s ease,background .2s ease}
.comic-3902__content{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3902__eyebrow{align-self:flex-start;margin-bottom:4px;padding:3px 5px;border:2px solid #111;background:#fde047;font-size:6px;font-weight:900;letter-spacing:.8px}
.comic-3902__content strong{font:900 11px/1 Arial Black,Arial,sans-serif}
.comic-3902__content p{margin:5px 0 0;color:#3f3f46;font-size:8px;font-weight:700}
.comic-3902__close{width:31px;height:31px;display:grid;place-items:center;flex:0 0 31px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;color:#111;font-size:15px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3902__timer{position:absolute;left:0;right:0;bottom:0;height:8px;border-top:3px solid #111;background:#fff}
.comic-3902__timer span{display:block;width:74%;height:100%;background:#2563eb;transition:width .35s ease}
.comic-3902__burst{position:absolute;right:5px;top:3px;width:48px;height:36px;display:grid;place-items:center;border:3px solid #111;background:#ef4444;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 6px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3902:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3902:hover .comic-3902__icon{background:#fde047;color:#111;transform:rotate(5deg) scale(1.06)}
.comic-3902:hover .comic-3902__timer span{width:100%;background:#ef4444}
.comic-3902:hover .comic-3902__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3902__close:hover{background:#ef4444;color:#fff;transform:translate(-1px,-1px) rotate(5deg);box-shadow:5px 5px 0 #111}`,
  },
  {
    id: 3903,
    name: "Comic Kanban Task Card",
    preview: (
      <article className="comic-3903">
        <div className="comic-3903__top">
          <span className="comic-3903__priority">
            <i className="ri-flashlight-fill"></i>
            HIGH PRIORITY
          </span>

          <button
            type="button"
            className="comic-3903__menu"
            onClick={(event) => event.stopPropagation()}
          >
            <i className="ri-more-fill"></i>
          </button>
        </div>

        <h3>BUILD RESPONSIVE DASHBOARD</h3>

        <p className="comic-3903__description">
          Finish the responsive layout and polish the tablet navigation states.
        </p>

        <div className="comic-3903__labels">
          <span>DESIGN</span>
          <span>FRONTEND</span>
        </div>

        <div className="comic-3903__checklist">
          <div className="comic-3903__checklist-head">
            <span>
              <i className="ri-checkbox-multiple-line"></i>
              CHECKLIST
            </span>

            <strong>3 / 5</strong>
          </div>

          <div className="comic-3903__progress">
            <span></span>
          </div>
        </div>

        <div className="comic-3903__footer">
          <div className="comic-3903__people">
            <span>AL</span>
            <span>JM</span>
            <span>+2</span>
          </div>

          <span className="comic-3903__comments">
            <i className="ri-chat-3-line"></i>8
          </span>

          <span className="comic-3903__due">
            <i className="ri-calendar-line"></i>
            OCT 04
          </span>
        </div>

        <span className="comic-3903__burst">DO IT!</span>
      </article>
    ),
    html: `<article class="comic-3903">
    <div class="comic-3903__top">
        <span class="comic-3903__priority">
            <i class="ri-flashlight-fill"></i>
            HIGH PRIORITY
        </span>

        <button type="button" class="comic-3903__menu">
            <i class="ri-more-fill"></i>
        </button>
    </div>

    <h3>BUILD RESPONSIVE DASHBOARD</h3>

    <p class="comic-3903__description">
        Finish the responsive layout and polish the tablet navigation states.
    </p>

    <div class="comic-3903__labels">
        <span>DESIGN</span>
        <span>FRONTEND</span>
    </div>

    <div class="comic-3903__checklist">
        <div class="comic-3903__checklist-head">
            <span>
                <i class="ri-checkbox-multiple-line"></i>
                CHECKLIST
            </span>

            <strong>3 / 5</strong>
        </div>

        <div class="comic-3903__progress">
            <span></span>
        </div>
    </div>

    <div class="comic-3903__footer">
        <div class="comic-3903__people">
            <span>AL</span>
            <span>JM</span>
            <span>+2</span>
        </div>

        <span class="comic-3903__comments">
            <i class="ri-chat-3-line"></i>
            8
        </span>

        <span class="comic-3903__due">
            <i class="ri-calendar-line"></i>
            OCT 04
        </span>
    </div>

    <span class="comic-3903__burst">DO IT!</span>
</article>`,
    css: `.comic-3903{position:relative;width:330px;max-width:100%;padding:16px;overflow:hidden;border:4px solid #111;background:#fffdf4;box-shadow:8px 8px 0 #111;color:#111;font-family:Arial,Helvetica,sans-serif;isolation:isolate;transition:transform .2s ease,box-shadow .2s ease}
.comic-3903::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(17,17,17,.1) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3903__top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.comic-3903__priority{display:flex;align-items:center;gap:5px;padding:5px 7px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900;letter-spacing:.6px;transform:rotate(-2deg)}
.comic-3903__priority i{font-size:11px}
.comic-3903__menu{width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;color:#111;font-size:15px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}
.comic-3903>h3{max-width:270px;margin:17px 0 8px;font:900 20px/.98 Arial Black,Arial,sans-serif;letter-spacing:-.8px}
.comic-3903__description{margin:0;color:#3f3f46;font-size:9px;font-weight:700;line-height:1.5}
.comic-3903__labels{display:flex;gap:7px;margin-top:13px}
.comic-3903__labels span{padding:5px 7px;border:2px solid #111;background:#bfdbfe;box-shadow:2px 2px 0 #111;font-size:6px;font-weight:900;letter-spacing:.6px}
.comic-3903__labels span:nth-child(2){background:#fde68a}
.comic-3903__checklist{margin-top:15px;padding:10px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3903__checklist-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
.comic-3903__checklist-head>span{display:flex;align-items:center;gap:5px;font-size:7px;font-weight:900;letter-spacing:.6px}
.comic-3903__checklist-head i{font-size:12px}
.comic-3903__checklist-head strong{font:900 8px/1 Arial Black,Arial,sans-serif}
.comic-3903__progress{height:13px;margin-top:8px;overflow:hidden;border:3px solid #111;background:#e5e7eb}
.comic-3903__progress span{display:block;width:60%;height:100%;background:#22c55e;transition:width .3s ease,background .2s ease}
.comic-3903__footer{display:flex;align-items:center;gap:9px;margin-top:16px;padding-top:13px;border-top:3px solid #111}
.comic-3903__people{display:flex;align-items:center;margin-right:auto}
.comic-3903__people span{width:30px;height:30px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#60a5fa;font-size:7px;font-weight:900}
.comic-3903__people span+span{margin-left:-7px;background:#fde047}
.comic-3903__people span:nth-child(3){background:#ef4444;color:#fff}
.comic-3903__comments,.comic-3903__due{display:flex;align-items:center;gap:4px;font-size:7px;font-weight:900}
.comic-3903__comments i,.comic-3903__due i{font-size:12px}
.comic-3903__due{padding:5px 6px;border:2px solid #111;background:#dbeafe}
.comic-3903__burst{position:absolute;right:6px;top:6px;width:50px;height:38px;display:grid;place-items:center;border:3px solid #111;background:#2563eb;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 6px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(8deg) scale(.65);transition:opacity .2s ease,transform .2s ease}
.comic-3903:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3903:hover .comic-3903__progress span{width:78%;background:#2563eb}
.comic-3903:hover .comic-3903__burst{opacity:1;transform:rotate(-6deg) scale(1)}
.comic-3903__menu:hover{transform:translate(-1px,-1px) rotate(6deg);box-shadow:5px 5px 0 #111}`,
  },
  {
    id: 3904,
    name: "Comic Punch Button",
    preview: (
      <button className="comic-3904">
        <span className="comic-3904__shadow"></span>
        <span className="comic-3904__label">PUNCH IT!</span>
        <span className="comic-3904__burst">POW</span>
      </button>
    ),
    html: `<button class="comic-3904">
    <span class="comic-3904__shadow"></span>
    <span class="comic-3904__label">PUNCH IT!</span>
    <span class="comic-3904__burst">POW</span>
</button>`,
    css: `.comic-3904 {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 178px;
    height: 60px;
    padding: 0 24px;
    border: 4px solid #111;
    background: #facc15;
    box-shadow: 6px 6px 0 #111;
    color: #111;
    cursor: pointer;
    overflow: visible;
    font-family: Arial, Helvetica, sans-serif;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.comic-3904::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(17,17,17,.2) 1.2px, transparent 1.5px);
    background-size: 8px 8px;
    opacity: .85;
}
.comic-3904__shadow {
    position: absolute;
    inset: 7px;
    border: 3px solid #111;
    opacity: .15;
}
.comic-3904__label {
    position: relative;
    z-index: 2;
    font: 900 18px/1 Arial Black, Arial, sans-serif;
    letter-spacing: .6px;
}
.comic-3904__burst {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 58px;
    height: 46px;
    display: grid;
    place-items: center;
    border: 3px solid #111;
    background: #ef4444;
    color: #fff;
    clip-path: polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);
    font: 900 12px/1 Arial Black, Arial, sans-serif;
    transform: rotate(10deg);
    transition: transform .18s ease, background .18s ease;
}
.comic-3904:hover {
    transform: translate(-2px, -2px);
    box-shadow: 9px 9px 0 #111;
    background: #fde047;
}
.comic-3904:hover .comic-3904__burst {
    transform: rotate(-8deg) scale(1.08);
    background: #2563eb;
}
.comic-3904:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #111;
}`,
  },
  {
    id: 3905,
    name: "Comic Hero Button",
    preview: (
      <button className="comic-3905">
        <span className="comic-3905__mini">GO!</span>
        <span className="comic-3905__text">HERO MODE</span>
        <i className="ri-arrow-right-up-line"></i>
      </button>
    ),
    html: `<button class="comic-3905">
    <span class="comic-3905__mini">GO!</span>
    <span class="comic-3905__text">HERO MODE</span>
    <i class="ri-arrow-right-up-line"></i>
</button>`,
    css: `.comic-3905 {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 190px;
    height: 62px;
    padding: 0 22px 0 18px;
    border: 4px solid #111;
    background: #2563eb;
    color: #fff;
    box-shadow: 6px 6px 0 #111;
    cursor: pointer;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.comic-3905::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        linear-gradient(135deg, rgba(255,255,255,.15) 0 18%, transparent 18% 38%, rgba(255,255,255,.12) 38% 52%, transparent 52% 70%, rgba(255,255,255,.12) 70% 100%);
    opacity: .6;
}
.comic-3905__mini {
    position: relative;
    z-index: 2;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 3px solid #111;
    background: #fde047;
    color: #111;
    box-shadow: 3px 3px 0 #111;
    font: 900 11px/1 Arial Black, Arial, sans-serif;
    transform: rotate(-7deg);
    flex-shrink: 0;
}
.comic-3905__text {
    position: relative;
    z-index: 2;
    font: 900 16px/1 Arial Black, Arial, sans-serif;
    letter-spacing: .5px;
}
.comic-3905 i {
    position: relative;
    z-index: 2;
    font-size: 20px;
    margin-left: auto;
    transition: transform .18s ease;
}
.comic-3905:hover {
    transform: translate(-2px, -2px);
    box-shadow: 9px 9px 0 #111;
    background: #1d4ed8;
}
.comic-3905:hover .comic-3905__mini {
    transform: rotate(6deg) scale(1.05);
}
.comic-3905:hover i {
    transform: translateX(4px) translateY(-2px);
}
.comic-3905:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #111;
}`,
  },
  {
    id: 3906,
    name: "Comic Smash Button",
    preview: (
      <button className="comic-3906">
        <span className="comic-3906__bg"></span>
        <span className="comic-3906__text">SMASH</span>
        <span className="comic-3906__tag">BAM!</span>
      </button>
    ),
    html: `<button class="comic-3906">
    <span class="comic-3906__bg"></span>
    <span class="comic-3906__text">SMASH</span>
    <span class="comic-3906__tag">BAM!</span>
</button>`,
    css: `.comic-3906 {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 185px;
    height: 64px;
    padding: 0 26px;
    border: 4px solid #111;
    background: #fff;
    color: #111;
    box-shadow: 6px 6px 0 #111;
    cursor: pointer;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.comic-3906__bg {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 18% 30%, #ef4444 0 12%, transparent 12.5%),
        radial-gradient(circle at 72% 36%, #22c55e 0 10%, transparent 10.5%),
        radial-gradient(circle at 46% 72%, #2563eb 0 12%, transparent 12.5%),
        radial-gradient(circle at 84% 76%, #f59e0b 0 8%, transparent 8.5%),
        #fff;
    opacity: .9;
}
.comic-3906__text {
    position: relative;
    z-index: 2;
    font: 900 22px/1 Arial Black, Arial, sans-serif;
    letter-spacing: 1px;
    text-shadow: 2px 2px 0 #fff;
}
.comic-3906__tag {
    position: absolute;
    left: -8px;
    top: -13px;
    z-index: 3;
    padding: 7px 10px;
    border: 3px solid #111;
    background: #111;
    color: #fff;
    box-shadow: 3px 3px 0 #facc15;
    font: 900 10px/1 Arial Black, Arial, sans-serif;
    transform: rotate(-10deg);
    transition: transform .18s ease, box-shadow .18s ease;
}
.comic-3906:hover {
    transform: translate(-2px, -2px) rotate(-1deg);
    box-shadow: 9px 9px 0 #111;
    background: #f8fafc;
}
.comic-3906:hover .comic-3906__tag {
    transform: rotate(8deg) scale(1.05);
    box-shadow: 4px 4px 0 #2563eb;
}
.comic-3906:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #111;
}`,
  },
  {
    id: 3907,
    name: "Comic Launch Button",
    preview: (
      <button className="comic-3907">
        <span className="comic-3907__left">
          <span className="comic-3907__small">NEW</span>
          <span className="comic-3907__title">LAUNCH</span>
        </span>
        <span className="comic-3907__right">
          <i className="ri-rocket-2-fill"></i>
        </span>
      </button>
    ),
    html: `<button class="comic-3907">
    <span class="comic-3907__left">
        <span class="comic-3907__small">NEW</span>
        <span class="comic-3907__title">LAUNCH</span>
    </span>
    <span class="comic-3907__right">
        <i class="ri-rocket-2-fill"></i>
    </span>
</button>`,
    css: `.comic-3907 {
    position: relative;
    display: inline-flex;
    align-items: stretch;
    min-width: 205px;
    height: 66px;
    padding: 0;
    border: 4px solid #111;
    background: #fffdf4;
    box-shadow: 6px 6px 0 #111;
    cursor: pointer;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    transition: transform .18s ease, box-shadow .18s ease;
}
.comic-3907__left {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 18px;
    background: #ef4444;
    color: #fff;
}
.comic-3907__left::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,.22) 1.2px, transparent 1.4px);
    background-size: 8px 8px;
}
.comic-3907__small {
    position: relative;
    z-index: 2;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.2px;
}
.comic-3907__title {
    position: relative;
    z-index: 2;
    margin-top: 4px;
    font: 900 18px/1 Arial Black, Arial, sans-serif;
    letter-spacing: .8px;
}
.comic-3907__right {
    width: 66px;
    display: grid;
    place-items: center;
    border-left: 4px solid #111;
    background: #fde047;
    color: #111;
    font-size: 28px;
    transition: background .18s ease, transform .18s ease;
}
.comic-3907:hover {
    transform: translate(-2px, -2px);
    box-shadow: 9px 9px 0 #111;
}
.comic-3907:hover .comic-3907__right {
    background: #2563eb;
    color: #fff;
    transform: scale(1.04);
}
.comic-3907:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #111;
}`,
  },
  {
    id: 3908,
    name: "Comic Impact CTA Button",
    preview: (
      <button type="button" className="comic-3908">
        <span className="comic-3908__text">TAKE ACTION</span>
        <span className="comic-3908__icon">
          <i className="ri-arrow-right-line"></i>
        </span>
        <span className="comic-3908__burst">GO!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3908">
    <span class="comic-3908__text">TAKE ACTION</span>
    <span class="comic-3908__icon">
        <i class="ri-arrow-right-line"></i>
    </span>
    <span class="comic-3908__burst">GO!</span>
</button>`,
    css: `.comic-3908{position:relative;min-width:190px;height:58px;display:inline-flex;align-items:stretch;padding:0;overflow:visible;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3908::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.22) 1.2px,transparent 1.5px);background-size:8px 8px;pointer-events:none}
.comic-3908__text{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;flex:1;padding:0 18px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.7px}
.comic-3908__icon{position:relative;z-index:2;width:52px;display:grid;place-items:center;border-left:4px solid #111;background:#fde047;color:#111;font-size:19px;transition:background .18s ease,transform .18s ease}
.comic-3908__burst{position:absolute;right:-18px;top:-17px;z-index:4;width:46px;height:35px;display:grid;place-items:center;border:3px solid #111;background:#2563eb;color:#fff;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 7px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(10deg) scale(.7);transition:opacity .18s ease,transform .18s ease}
.comic-3908:hover{background:#2563eb;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:9px 9px 0 #111}
.comic-3908:hover .comic-3908__icon{background:#fff;transform:translateX(2px)}
.comic-3908:hover .comic-3908__burst{opacity:1;transform:rotate(-7deg) scale(1)}
.comic-3908:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3909,
    name: "Comic Zap Button",
    preview: (
      <button type="button" className="comic-3909">
        <span className="comic-3909__icon">
          <i className="ri-flashlight-fill"></i>
        </span>
        <span className="comic-3909__label">
          <small>INSTANT ACTION</small>
          <strong>ZAP IT!</strong>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3909">
    <span class="comic-3909__icon">
        <i class="ri-flashlight-fill"></i>
    </span>

    <span class="comic-3909__label">
        <small>INSTANT ACTION</small>
        <strong>ZAP IT!</strong>
    </span>
</button>`,
    css: `.comic-3909{position:relative;min-width:190px;height:64px;display:inline-flex;align-items:center;gap:12px;padding:0 18px 0 10px;overflow:hidden;border:4px solid #111;background:#fde047;color:#111;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3909::after{content:"";position:absolute;right:-40px;top:-55px;width:120px;height:130px;background:#ef4444;transform:rotate(20deg);transition:transform .25s ease}
.comic-3909__icon{position:relative;z-index:2;width:43px;height:43px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:21px;transition:transform .18s ease,background .18s ease}
.comic-3909__label{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3909__label small{font-size:6px;font-weight:900;letter-spacing:1.1px}
.comic-3909__label strong{margin-top:4px;font:900 17px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3909:hover{background:#60a5fa;transform:translate(-2px,-2px) rotate(1deg);box-shadow:9px 9px 0 #111}
.comic-3909:hover::after{transform:translateX(60px) rotate(20deg)}
.comic-3909:hover .comic-3909__icon{background:#ef4444;color:#fff;transform:rotate(7deg) scale(1.08)}
.comic-3909:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3910,
    name: "Comic Danger Button",
    preview: (
      <button type="button" className="comic-3910">
        <i className="ri-delete-bin-6-line"></i>
        <span>DELETE</span>
        <span className="comic-3910__warning">!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3910">
    <i class="ri-delete-bin-6-line"></i>
    <span>DELETE</span>
    <span class="comic-3910__warning">!</span>
</button>`,
    css: `.comic-3910{position:relative;min-width:155px;height:56px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 20px;overflow:visible;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.8px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3910::before{content:"";position:absolute;inset:5px;border:2px dashed rgba(255,255,255,.45);pointer-events:none}
.comic-3910>i{position:relative;z-index:2;font-size:18px;transition:transform .18s ease}
.comic-3910>span:not(.comic-3910__warning){position:relative;z-index:2}
.comic-3910__warning{position:absolute;right:-14px;top:-17px;width:34px;height:34px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font:900 16px/1 Arial Black,Arial,sans-serif;transform:rotate(7deg);transition:transform .18s ease,background .18s ease}
.comic-3910:hover{background:#b91c1c;transform:translate(-2px,-2px);box-shadow:9px 9px 0 #111}
.comic-3910:hover>i{transform:rotate(-8deg) scale(1.1)}
.comic-3910:hover .comic-3910__warning{background:#fff;transform:rotate(-7deg) scale(1.08)}
.comic-3910:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3911,
    name: "Comic Outline Button",
    preview: (
      <button type="button" className="comic-3911">
        <span>EXPLORE</span>
        <i className="ri-arrow-right-up-line"></i>
      </button>
    ),
    html: `<button type="button" class="comic-3911">
    <span>EXPLORE</span>
    <i class="ri-arrow-right-up-line"></i>
</button>`,
    css: `.comic-3911{position:relative;min-width:165px;height:54px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 19px;border:4px solid #111;background:#fff;color:#111;box-shadow:6px 6px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;font:900 12px/1 Arial Black,Arial,sans-serif;letter-spacing:.8px;cursor:pointer;overflow:hidden;transition:transform .18s ease,box-shadow .18s ease,color .18s ease}
.comic-3911::before{content:"";position:absolute;left:0;top:0;width:0;height:100%;background:#2563eb;transition:width .25s ease}
.comic-3911 span,.comic-3911 i{position:relative;z-index:2}
.comic-3911 i{font-size:18px;transition:transform .18s ease}
.comic-3911:hover{color:#fff;transform:translate(-2px,-2px);box-shadow:9px 9px 0 #ef4444}
.comic-3911:hover::before{width:100%}
.comic-3911:hover i{transform:translate(3px,-2px) rotate(5deg)}
.comic-3911:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3912,
    name: "Comic Play Button",
    preview: (
      <button type="button" className="comic-3912">
        <span className="comic-3912__play">
          <i className="ri-play-fill"></i>
        </span>

        <span className="comic-3912__text">
          <small>WATCH NOW</small>
          <strong>PLAY VIDEO</strong>
        </span>

        <span className="comic-3912__lines"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3912">
    <span class="comic-3912__play">
        <i class="ri-play-fill"></i>
    </span>

    <span class="comic-3912__text">
        <small>WATCH NOW</small>
        <strong>PLAY VIDEO</strong>
    </span>

    <span class="comic-3912__lines"></span>
</button>`,
    css: `.comic-3912{position:relative;min-width:200px;height:64px;display:inline-flex;align-items:center;gap:11px;padding:0 18px 0 10px;overflow:hidden;border:4px solid #111;background:#111;color:#fff;box-shadow:6px 6px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}
.comic-3912__lines{position:absolute;inset:0;background:repeating-linear-gradient(-25deg,transparent 0 10px,rgba(255,255,255,.07) 10px 13px);pointer-events:none}
.comic-3912__play{position:relative;z-index:2;width:43px;height:43px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;border-radius:50%;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #fde047;font-size:20px;transition:transform .2s ease,background .2s ease,box-shadow .2s ease}
.comic-3912__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3912__text small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#fde047}
.comic-3912__text strong{margin-top:4px;font:900 14px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3912:hover{transform:translate(-2px,-2px) rotate(-1deg);box-shadow:9px 9px 0 #60a5fa}
.comic-3912:hover .comic-3912__play{background:#2563eb;box-shadow:4px 4px 0 #ef4444;transform:rotate(-8deg) scale(1.08)}
.comic-3912:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3913,
    name: "Comic POW Button",
    preview: (
      <button type="button" className="comic-3913">
        <span className="comic-3913__small">CLICK TO</span>
        <span className="comic-3913__word">POW!</span>
        <i className="ri-flashlight-fill"></i>
      </button>
    ),
    html: `<button type="button" class="comic-3913">
    <span class="comic-3913__small">CLICK TO</span>
    <span class="comic-3913__word">POW!</span>
    <i class="ri-flashlight-fill"></i>
</button>`,
    css: `.comic-3913{position:relative;width:180px;height:68px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 18px;overflow:hidden;border:4px solid #111;background:#fde047;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-2deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3913::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3913::after{content:"";position:absolute;width:85px;height:85px;right:-28px;top:-30px;border:4px solid #111;border-radius:50%;background:#ef4444;transition:transform .22s ease}
.comic-3913__small{position:absolute;z-index:2;left:12px;top:8px;padding:3px 5px;border:2px solid #111;background:#fff;font-size:6px;font-weight:900;letter-spacing:.8px}
.comic-3913__word{position:relative;z-index:3;margin-top:10px;font:900 25px/.8 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-1px}
.comic-3913>i{position:relative;z-index:3;margin-top:10px;font-size:21px;transition:transform .18s ease}
.comic-3913:hover{background:#facc15;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #111}
.comic-3913:hover::after{transform:scale(1.25) translate(-8px,8px)}
.comic-3913:hover>i{transform:rotate(15deg) scale(1.15)}
.comic-3913:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3914,
    name: "Comic POWER Button",
    preview: (
      <button type="button" className="comic-3914">
        <span className="comic-3914__bolt">
          <i className="ri-flashlight-fill"></i>
        </span>
        <span className="comic-3914__text">
          <small>FULL</small>
          <strong>POWER!</strong>
        </span>
        <span className="comic-3914__level">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3914">
    <span class="comic-3914__bolt">
        <i class="ri-flashlight-fill"></i>
    </span>

    <span class="comic-3914__text">
        <small>FULL</small>
        <strong>POWER!</strong>
    </span>

    <span class="comic-3914__level">
        <span></span>
        <span></span>
        <span></span>
    </span>
</button>`,
    css: `.comic-3914{position:relative;width:210px;height:68px;display:inline-flex;align-items:center;gap:11px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#2563eb;color:#fff;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3914::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-30deg,transparent 0 12px,rgba(255,255,255,.09) 12px 15px)}
.comic-3914__bolt{position:relative;z-index:2;width:43px;height:43px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font-size:21px;transform:rotate(-5deg);transition:transform .18s ease,background .18s ease}
.comic-3914__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3914__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#bfdbfe}
.comic-3914__text strong{margin-top:3px;font:900 19px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:.4px}
.comic-3914__level{position:relative;z-index:2;display:flex;align-items:flex-end;gap:3px;height:31px}
.comic-3914__level span{width:6px;border:2px solid #111;background:#fde047}
.comic-3914__level span:nth-child(1){height:12px}
.comic-3914__level span:nth-child(2){height:20px}
.comic-3914__level span:nth-child(3){height:29px}
.comic-3914:hover{background:#1d4ed8;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #111}
.comic-3914:hover .comic-3914__bolt{background:#ef4444;color:#fff;transform:rotate(6deg) scale(1.08)}
.comic-3914:hover .comic-3914__level span{background:#22c55e}
.comic-3914:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3915,
    name: "Comic HAHA Button",
    preview: (
      <button type="button" className="comic-3915">
        <span className="comic-3915__face">
          <i className="ri-emotion-laugh-fill"></i>
        </span>
        <span className="comic-3915__word">HAHA!</span>
        <span className="comic-3915__mini">LOL</span>
      </button>
    ),
    html: `<button type="button" class="comic-3915">
    <span class="comic-3915__face">
        <i class="ri-emotion-laugh-fill"></i>
    </span>

    <span class="comic-3915__word">HAHA!</span>
    <span class="comic-3915__mini">LOL</span>
</button>`,
    css: `.comic-3915{position:relative;width:185px;height:64px;display:inline-flex;align-items:center;justify-content:center;gap:11px;padding:0 17px;overflow:visible;border:4px solid #111;background:#c084fc;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3915::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.18) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3915__face{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fde047;box-shadow:3px 3px 0 #111;font-size:22px;transition:transform .2s ease}
.comic-3915__word{position:relative;z-index:2;font:900 22px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.6px}
.comic-3915__mini{position:absolute;right:-14px;top:-15px;z-index:4;padding:6px 8px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font:900 8px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3915:hover{background:#a855f7;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #111}
.comic-3915:hover .comic-3915__face{transform:rotate(-12deg) scale(1.1)}
.comic-3915:hover .comic-3915__mini{background:#2563eb;transform:rotate(-7deg) scale(1.08)}
.comic-3915:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3916,
    name: "Comic SPLASH Button",
    preview: (
      <button type="button" className="comic-3916">
        <span className="comic-3916__drop comic-3916__drop--1"></span>
        <span className="comic-3916__drop comic-3916__drop--2"></span>
        <span className="comic-3916__drop comic-3916__drop--3"></span>

        <i className="ri-water-flash-fill"></i>
        <span>SPLASH!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3916">
    <span class="comic-3916__drop comic-3916__drop--1"></span>
    <span class="comic-3916__drop comic-3916__drop--2"></span>
    <span class="comic-3916__drop comic-3916__drop--3"></span>

    <i class="ri-water-flash-fill"></i>
    <span>SPLASH!</span>
</button>`,
    css: `.comic-3916{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 20px;overflow:visible;border:4px solid #111;background:#38bdf8;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3916::before{content:"";position:absolute;inset:6px;border:3px solid rgba(255,255,255,.55);transform:rotate(-1deg)}
.comic-3916>i{position:relative;z-index:3;font-size:21px;transition:transform .2s ease}
.comic-3916>span:not(.comic-3916__drop){position:relative;z-index:3;font:900 20px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.4px}
.comic-3916__drop{position:absolute;z-index:2;border:3px solid #111;border-radius:50%;background:#0ea5e9;transition:transform .2s ease}
.comic-3916__drop--1{width:18px;height:18px;left:-13px;top:5px}
.comic-3916__drop--2{width:12px;height:12px;right:-7px;bottom:5px}
.comic-3916__drop--3{width:9px;height:9px;right:17px;top:-9px}
.comic-3916:hover{background:#7dd3fc;transform:translate(-2px,-2px) rotate(1deg);box-shadow:10px 10px 0 #111}
.comic-3916:hover>i{transform:rotate(-12deg) scale(1.15)}
.comic-3916:hover .comic-3916__drop--1{transform:translate(-7px,-5px) scale(1.2)}
.comic-3916:hover .comic-3916__drop--2{transform:translate(6px,5px) scale(1.25)}
.comic-3916:hover .comic-3916__drop--3{transform:translate(4px,-6px) scale(1.2)}
.comic-3916:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3917,
    name: "Comic BOOM Button",
    preview: (
      <button type="button" className="comic-3917">
        <span className="comic-3917__ring"></span>
        <span className="comic-3917__word">BOOM!</span>
        <span className="comic-3917__caption">LET'S GO</span>
      </button>
    ),
    html: `<button type="button" class="comic-3917">
    <span class="comic-3917__ring"></span>
    <span class="comic-3917__word">BOOM!</span>
    <span class="comic-3917__caption">LET'S GO</span>
</button>`,
    css: `.comic-3917{position:relative;width:190px;height:68px;display:inline-flex;align-items:center;justify-content:center;padding:0 20px;overflow:hidden;border:4px solid #111;background:#f97316;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3917::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3917__ring{position:absolute;width:130px;height:130px;border:18px solid #fde047;border-radius:50%;background:#ef4444;box-shadow:0 0 0 4px #111;transition:transform .25s ease}
.comic-3917__word{position:relative;z-index:3;font:900 25px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-1px;color:#fff;text-shadow:3px 3px 0 #111}
.comic-3917__caption{position:absolute;right:7px;bottom:5px;z-index:4;padding:3px 5px;border:2px solid #111;background:#fff;color:#111;font-size:6px;font-weight:900;letter-spacing:.8px;transform:rotate(-4deg)}
.comic-3917:hover{background:#ef4444;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #111}
.comic-3917:hover .comic-3917__ring{transform:scale(1.25) rotate(15deg)}
.comic-3917:hover .comic-3917__word{transform:scale(1.08) rotate(-2deg)}
.comic-3917:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3918,
    name: "Comic KAPOW Button",
    preview: (
      <button type="button" className="comic-3918">
        <span className="comic-3918__burst"></span>
        <span className="comic-3918__text">KAPOW!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3918">
    <span class="comic-3918__burst"></span>
    <span class="comic-3918__text">KAPOW!</span>
</button>`,
    css: `.comic-3918{position:relative;width:158px;height:54px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:hidden;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-2deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3918::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3918__burst{position:absolute;width:128px;height:90px;background:#fde047;clip-path:polygon(50% 0,58% 28%,74% 8%,72% 34%,94% 19%,79% 42%,100% 45%,78% 55%,96% 74%,70% 67%,73% 96%,56% 72%,48% 100%,41% 72%,20% 95%,27% 65%,0 76%,22% 54%,0 45%,24% 40%,7% 18%,31% 32%,28% 5%,43% 29%);transition:transform .22s ease,background .18s ease}
.comic-3918__text{position:relative;z-index:2;font:900 21px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.7px;color:#111;text-shadow:2px 2px 0 #fff}
.comic-3918:hover{background:#2563eb;transform:translate(-2px,-2px) rotate(2deg);box-shadow:9px 9px 0 #111}
.comic-3918:hover .comic-3918__burst{background:#fff;transform:rotate(10deg) scale(1.13)}
.comic-3918:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3919,
    name: "Comic CRASH Button",
    preview: (
      <button type="button" className="comic-3919">
        <span className="comic-3919__mark">!</span>
        <span className="comic-3919__text">CRASH!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3919">
    <span class="comic-3919__mark">!</span>
    <span class="comic-3919__text">CRASH!</span>
</button>`,
    css: `.comic-3919{position:relative;width:162px;height:55px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 16px;overflow:hidden;border:4px solid #111;background:#111;color:#fff;box-shadow:6px 6px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3919::before{content:"";position:absolute;inset:-20px;background:repeating-linear-gradient(135deg,transparent 0 14px,rgba(255,255,255,.12) 14px 18px);transform:rotate(-4deg)}
.comic-3919__mark{position:relative;z-index:2;width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #fde047;font:900 17px/1 Arial Black,Arial,sans-serif;transition:transform .18s ease,background .18s ease}
.comic-3919__text{position:relative;z-index:2;font:900 19px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.5px}
.comic-3919:hover{background:#ef4444;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:9px 9px 0 #fde047}
.comic-3919:hover .comic-3919__mark{background:#2563eb;transform:rotate(-12deg) scale(1.1)}
.comic-3919:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3920,
    name: "Comic ZAP Button",
    preview: (
      <button type="button" className="comic-3920">
        <span className="comic-3920__icon">
          <i className="ri-flashlight-fill"></i>
        </span>
        <span className="comic-3920__text">ZAP!</span>
        <span className="comic-3920__spark comic-3920__spark--1"></span>
        <span className="comic-3920__spark comic-3920__spark--2"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3920">
    <span class="comic-3920__icon">
        <i class="ri-flashlight-fill"></i>
    </span>

    <span class="comic-3920__text">ZAP!</span>

    <span class="comic-3920__spark comic-3920__spark--1"></span>
    <span class="comic-3920__spark comic-3920__spark--2"></span>
</button>`,
    css: `.comic-3920{position:relative;width:154px;height:54px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 17px;overflow:visible;border:4px solid #111;background:#38bdf8;color:#111;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3920::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.18) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3920__icon{position:relative;z-index:2;width:32px;height:32px;display:grid;place-items:center;border:3px solid #111;background:#fde047;box-shadow:3px 3px 0 #111;font-size:16px;transform:rotate(-6deg);transition:transform .18s ease,background .18s ease}
.comic-3920__text{position:relative;z-index:2;font:900 21px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.6px}
.comic-3920__spark{position:absolute;z-index:3;width:10px;height:20px;border:2px solid #111;background:#fde047;clip-path:polygon(45% 0,100% 0,63% 42%,100% 42%,20% 100%,42% 56%,0 56%);transition:transform .18s ease}
.comic-3920__spark--1{right:-8px;top:-10px;transform:rotate(22deg)}
.comic-3920__spark--2{left:-7px;bottom:-9px;transform:rotate(-24deg) scale(.8)}
.comic-3920:hover{background:#2563eb;color:#fff;transform:translate(-2px,-2px) rotate(2deg);box-shadow:9px 9px 0 #111}
.comic-3920:hover .comic-3920__icon{background:#ef4444;color:#fff;transform:rotate(8deg) scale(1.08)}
.comic-3920:hover .comic-3920__spark--1{transform:translate(5px,-5px) rotate(35deg) scale(1.15)}
.comic-3920:hover .comic-3920__spark--2{transform:translate(-5px,5px) rotate(-35deg) scale(1)}
.comic-3920:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3921,
    name: "Villain GRR Button",
    preview: (
      <button type="button" className="comic-3921">
        <span className="comic-3921__claw comic-3921__claw--1"></span>
        <span className="comic-3921__claw comic-3921__claw--2"></span>
        <span className="comic-3921__text">GRR!</span>
        <span className="comic-3921__tag">RAGE</span>
      </button>
    ),
    html: `<button type="button" class="comic-3921">
    <span class="comic-3921__claw comic-3921__claw--1"></span>
    <span class="comic-3921__claw comic-3921__claw--2"></span>
    <span class="comic-3921__text">GRR!</span>
    <span class="comic-3921__tag">RAGE</span>
</button>`,
    css: `.comic-3921{position:relative;width:158px;height:56px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:visible;border:4px solid #111;background:#84cc16;color:#111;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-2deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3921::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3921__text{position:relative;z-index:3;font:900 24px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.8px;text-shadow:2px 2px 0 #fff}
.comic-3921__tag{position:absolute;right:-13px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#7e22ce;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3921__claw{position:absolute;z-index:2;width:32px;height:5px;border:2px solid #111;background:#fff;transform-origin:center;transition:transform .2s ease}
.comic-3921__claw--1{left:7px;top:13px;transform:rotate(-28deg)}
.comic-3921__claw--2{left:3px;bottom:12px;transform:rotate(25deg)}
.comic-3921:hover{background:#65a30d;transform:translate(-2px,-2px) rotate(2deg);box-shadow:9px 9px 0 #111}
.comic-3921:hover .comic-3921__tag{background:#ef4444;transform:rotate(-7deg) scale(1.08)}
.comic-3921:hover .comic-3921__claw--1{transform:translateX(-6px) rotate(-38deg)}
.comic-3921:hover .comic-3921__claw--2{transform:translateX(-6px) rotate(35deg)}
.comic-3921:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3922,
    name: "Villain EVIL Button",
    preview: (
      <button type="button" className="comic-3922">
        <span className="comic-3922__icon">
          <i className="ri-skull-2-fill"></i>
        </span>
        <span className="comic-3922__text">EVIL!</span>
        <span className="comic-3922__glow"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3922">
    <span class="comic-3922__icon">
        <i class="ri-skull-2-fill"></i>
    </span>
    <span class="comic-3922__text">EVIL!</span>
    <span class="comic-3922__glow"></span>
</button>`,
    css: `.comic-3922{position:relative;width:164px;height:57px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 17px;overflow:hidden;border:4px solid #111;background:#581c87;color:#fff;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);isolation:isolate;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3922::before{content:"";position:absolute;inset:0;z-index:-2;background:repeating-linear-gradient(-35deg,transparent 0 12px,rgba(255,255,255,.08) 12px 15px)}
.comic-3922__glow{position:absolute;z-index:-1;width:90px;height:90px;border-radius:50%;background:#22c55e;right:-45px;top:-45px;transition:transform .25s ease,background .18s ease}
.comic-3922__icon{position:relative;z-index:2;width:34px;height:34px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#22c55e;color:#111;box-shadow:3px 3px 0 #111;font-size:18px;transform:rotate(-5deg);transition:transform .18s ease,background .18s ease,color .18s ease}
.comic-3922__text{position:relative;z-index:2;font:900 21px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.5px}
.comic-3922:hover{background:#3b0764;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:9px 9px 0 #111}
.comic-3922:hover .comic-3922__glow{background:#ef4444;transform:scale(1.6)}
.comic-3922:hover .comic-3922__icon{background:#ef4444;color:#fff;transform:rotate(8deg) scale(1.1)}
.comic-3922:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3923,
    name: "Villain HAHA Button",
    preview: (
      <button type="button" className="comic-3923">
        <span className="comic-3923__laugh comic-3923__laugh--1">HA</span>
        <span className="comic-3923__text">HAHA!</span>
        <span className="comic-3923__laugh comic-3923__laugh--2">HA</span>
      </button>
    ),
    html: `<button type="button" class="comic-3923">
    <span class="comic-3923__laugh comic-3923__laugh--1">HA</span>
    <span class="comic-3923__text">HAHA!</span>
    <span class="comic-3923__laugh comic-3923__laugh--2">HA</span>
</button>`,
    css: `.comic-3923{position:relative;width:170px;height:58px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:visible;border:4px solid #111;background:#dc2626;color:#fff;box-shadow:6px 6px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3923::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.25) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3923__text{position:relative;z-index:3;font:900 22px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.7px;text-shadow:3px 3px 0 #111}
.comic-3923__laugh{position:absolute;z-index:4;padding:4px 5px;border:2px solid #111;background:#fde047;color:#111;box-shadow:2px 2px 0 #111;font:900 6px/1 Arial Black,Arial,sans-serif;transition:transform .18s ease,background .18s ease}
.comic-3923__laugh--1{left:-9px;top:-10px;transform:rotate(-10deg)}
.comic-3923__laugh--2{right:-10px;bottom:-9px;transform:rotate(9deg)}
.comic-3923:hover{background:#7e22ce;transform:translate(-2px,-2px) rotate(2deg);box-shadow:9px 9px 0 #111}
.comic-3923:hover .comic-3923__laugh--1{background:#22c55e;transform:translate(-5px,-4px) rotate(8deg) scale(1.15)}
.comic-3923:hover .comic-3923__laugh--2{background:#60a5fa;transform:translate(5px,4px) rotate(-8deg) scale(1.15)}
.comic-3923:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3924,
    name: "Villain BOSS Button",
    preview: (
      <button type="button" className="comic-3924">
        <span className="comic-3924__crown">
          <i className="ri-vip-crown-fill"></i>
        </span>

        <span className="comic-3924__text">BOSS!</span>

        <span className="comic-3924__badge">FINAL</span>
      </button>
    ),
    html: `<button type="button" class="comic-3924">
    <span class="comic-3924__crown">
        <i class="ri-vip-crown-fill"></i>
    </span>

    <span class="comic-3924__text">BOSS!</span>

    <span class="comic-3924__badge">FINAL</span>
</button>`,
    css: `.comic-3924{position:relative;width:172px;height:58px;display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:0 18px;overflow:visible;border:4px solid #111;background:#111827;color:#fff;box-shadow:6px 6px 0 #7e22ce;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3924::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.12) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3924__crown{position:relative;z-index:2;width:35px;height:35px;display:grid;place-items:center;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #ef4444;font-size:18px;transform:rotate(-6deg);transition:transform .18s ease,background .18s ease}
.comic-3924__text{position:relative;z-index:2;font:900 22px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.6px;text-shadow:3px 3px 0 #7e22ce}
.comic-3924__badge{position:absolute;right:-14px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font:900 6px/1 Arial Black,Arial,sans-serif;letter-spacing:.8px;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3924:hover{background:#581c87;transform:translate(-2px,-2px) rotate(2deg);box-shadow:9px 9px 0 #ef4444}
.comic-3924:hover .comic-3924__crown{background:#ef4444;color:#fff;transform:rotate(7deg) scale(1.1)}
.comic-3924:hover .comic-3924__badge{background:#fde047;color:#111;transform:rotate(-7deg) scale(1.08)}
.comic-3924:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3925,
    name: "Villain BOSS Impact Button",
    preview: (
      <button type="button" className="comic-3925">
        <span className="comic-3925__impact"></span>

        <span className="comic-3925__lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span className="comic-3925__crown">
          <i className="ri-vip-crown-fill"></i>
        </span>

        <span className="comic-3925__content">
          <small>FINAL</small>
          <strong>BOSS!</strong>
        </span>

        <span className="comic-3925__level">LV.99</span>

        <span className="comic-3925__bam">BAM!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3925">
    <span class="comic-3925__impact"></span>

    <span class="comic-3925__lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </span>

    <span class="comic-3925__crown">
        <i class="ri-vip-crown-fill"></i>
    </span>

    <span class="comic-3925__content">
        <small>FINAL</small>
        <strong>BOSS!</strong>
    </span>

    <span class="comic-3925__level">LV.99</span>

    <span class="comic-3925__bam">BAM!</span>
</button>`,
    css: `.comic-3925{position:relative;width:190px;height:64px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 14px;overflow:visible;border:4px solid #111;background:#3b0764;color:#fff;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3925::before{content:"";position:absolute;inset:0;z-index:-3;background-image:radial-gradient(rgba(255,255,255,.15) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3925__impact{position:absolute;left:50%;top:50%;z-index:-2;width:70px;height:70px;border:5px solid #fde047;border-radius:50%;background:#7e22ce;transform:translate(-50%,-50%) scale(.6);opacity:.35;transition:transform .28s ease,opacity .2s ease,background .2s ease}
.comic-3925__lines{position:absolute;inset:-18px;z-index:-1;pointer-events:none}
.comic-3925__lines span{position:absolute;left:50%;top:50%;width:6px;height:25px;border:2px solid #111;background:#fde047;opacity:0;transform-origin:50% 50px;transition:opacity .18s ease,transform .25s ease}
.comic-3925__lines span:nth-child(1){transform:translate(-50%,-50%) rotate(0deg) translateY(-38px)}
.comic-3925__lines span:nth-child(2){transform:translate(-50%,-50%) rotate(90deg) translateY(-38px)}
.comic-3925__lines span:nth-child(3){transform:translate(-50%,-50%) rotate(180deg) translateY(-38px)}
.comic-3925__lines span:nth-child(4){transform:translate(-50%,-50%) rotate(270deg) translateY(-38px)}
.comic-3925__crown{position:relative;z-index:3;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #ef4444;font-size:20px;transform:rotate(-7deg);transition:transform .2s ease,background .18s ease,box-shadow .18s ease}
.comic-3925__content{position:relative;z-index:3;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3925__content small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fde047}
.comic-3925__content strong{margin-top:2px;font:900 21px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.6px;text-shadow:3px 3px 0 #111}
.comic-3925__level{position:relative;z-index:3;padding:4px 5px;border:2px solid #111;background:#ef4444;color:#fff;box-shadow:2px 2px 0 #111;font-size:6px;font-weight:900;transform:rotate(4deg);transition:transform .18s ease,background .18s ease}
.comic-3925__bam{position:absolute;right:-22px;top:-20px;z-index:5;width:54px;height:42px;display:grid;place-items:center;border:3px solid #111;background:#fde047;color:#111;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;opacity:0;transform:rotate(12deg) scale(.5);transition:opacity .18s ease,transform .22s ease,background .18s ease}
.comic-3925:hover{background:#581c87;transform:translate(-3px,-3px) rotate(2deg) scale(1.03);box-shadow:11px 11px 0 #ef4444}
.comic-3925:hover .comic-3925__impact{background:#ef4444;opacity:1;transform:translate(-50%,-50%) scale(2.35)}
.comic-3925:hover .comic-3925__lines span{opacity:1}
.comic-3925:hover .comic-3925__lines span:nth-child(1){transform:translate(-50%,-50%) rotate(0deg) translateY(-52px) scaleY(1.2)}
.comic-3925:hover .comic-3925__lines span:nth-child(2){transform:translate(-50%,-50%) rotate(90deg) translateY(-52px) scaleY(1.2)}
.comic-3925:hover .comic-3925__lines span:nth-child(3){transform:translate(-50%,-50%) rotate(180deg) translateY(-52px) scaleY(1.2)}
.comic-3925:hover .comic-3925__lines span:nth-child(4){transform:translate(-50%,-50%) rotate(270deg) translateY(-52px) scaleY(1.2)}
.comic-3925:hover .comic-3925__crown{background:#ef4444;color:#fff;box-shadow:5px 5px 0 #fde047;transform:translateY(-5px) rotate(9deg) scale(1.15)}
.comic-3925:hover .comic-3925__level{background:#22c55e;transform:rotate(-6deg) scale(1.08)}
.comic-3925:hover .comic-3925__bam{opacity:1;transform:rotate(-8deg) scale(1)}
.comic-3925:active{transform:translate(2px,2px) scale(.98);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3926,
    name: "Joker Chaos Button",
    preview: (
      <button type="button" className="comic-3926">
        <span className="comic-3926__card comic-3926__card--1">J</span>
        <span className="comic-3926__card comic-3926__card--2">★</span>
        <span className="comic-3926__text">
          <small>WHY SO</small>
          <strong>JOKER!</strong>
        </span>
        <span className="comic-3926__laugh">HA!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3926">
    <span class="comic-3926__card comic-3926__card--1">J</span>
    <span class="comic-3926__card comic-3926__card--2">★</span>

    <span class="comic-3926__text">
        <small>WHY SO</small>
        <strong>JOKER!</strong>
    </span>

    <span class="comic-3926__laugh">HA!</span>
</button>`,
    css: `.comic-3926{position:relative;width:185px;height:62px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:visible;border:4px solid #111;background:#6b21a8;color:#fff;box-shadow:7px 7px 0 #22c55e;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3926::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.16) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3926__text{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center}
.comic-3926__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#86efac}
.comic-3926__text strong{margin-top:3px;font:900 20px/.9 Arial Black,Arial,sans-serif;font-style:italic;letter-spacing:-.5px}
.comic-3926__card{position:absolute;z-index:2;width:29px;height:38px;display:grid;place-items:center;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font:900 12px/1 Arial Black,Arial,sans-serif;transition:transform .2s ease}
.comic-3926__card--1{left:7px;bottom:7px;transform:rotate(-13deg)}
.comic-3926__card--2{right:8px;bottom:7px;background:#dcfce7;color:#16a34a;transform:rotate(11deg)}
.comic-3926__laugh{position:absolute;right:-13px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#22c55e;color:#111;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(9deg);transition:transform .18s ease,background .18s ease}
.comic-3926:hover{background:#4c1d95;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #22c55e}
.comic-3926:hover .comic-3926__card--1{transform:translate(-4px,-4px) rotate(-22deg)}
.comic-3926:hover .comic-3926__card--2{transform:translate(4px,-5px) rotate(20deg)}
.comic-3926:hover .comic-3926__laugh{background:#fde047;transform:rotate(-8deg) scale(1.1)}
.comic-3926:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3927,
    name: "Riddler Question Button",
    preview: (
      <button type="button" className="comic-3927">
        <span className="comic-3927__question">?</span>
        <span className="comic-3927__text">RIDDLER</span>
        <span className="comic-3927__mini">?</span>
      </button>
    ),
    html: `<button type="button" class="comic-3927">
    <span class="comic-3927__question">?</span>
    <span class="comic-3927__text">RIDDLER</span>
    <span class="comic-3927__mini">?</span>
</button>`,
    css: `.comic-3927{position:relative;width:180px;height:59px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 17px;overflow:hidden;border:4px solid #111;background:#16a34a;color:#111;box-shadow:7px 7px 0 #6b21a8;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3927::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 13px,rgba(255,255,255,.13) 13px 16px)}
.comic-3927__question{position:relative;z-index:2;width:37px;height:37px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#a3e635;color:#111;box-shadow:3px 3px 0 #111;font:900 22px/1 Arial Black,Arial,sans-serif;transform:rotate(-7deg);transition:transform .2s ease,background .18s ease}
.comic-3927__text{position:relative;z-index:2;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:.7px}
.comic-3927__mini{position:absolute;right:7px;top:4px;font:900 17px/1 Arial Black,Arial,sans-serif;color:#6b21a8;transform:rotate(12deg);transition:transform .2s ease}
.comic-3927:hover{background:#22c55e;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:10px 10px 0 #7e22ce}
.comic-3927:hover .comic-3927__question{background:#fff;transform:rotate(8deg) scale(1.1)}
.comic-3927:hover .comic-3927__mini{transform:translate(3px,-3px) rotate(-15deg) scale(1.3)}
.comic-3927:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3928,
    name: "Penguin Underworld Button",
    preview: (
      <button type="button" className="comic-3928">
        <span className="comic-3928__hat">
          <span></span>
        </span>
        <span className="comic-3928__text">
          <small>GOTHAM</small>
          <strong>PENGUIN</strong>
        </span>
        <span className="comic-3928__coin">$</span>
      </button>
    ),
    html: `<button type="button" class="comic-3928">
    <span class="comic-3928__hat">
        <span></span>
    </span>

    <span class="comic-3928__text">
        <small>GOTHAM</small>
        <strong>PENGUIN</strong>
    </span>

    <span class="comic-3928__coin">$</span>
</button>`,
    css: `.comic-3928{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 14px;overflow:hidden;border:4px solid #111;background:#18181b;color:#fff;box-shadow:7px 7px 0 #7e22ce;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3928::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.1) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3928__hat{position:relative;z-index:2;width:42px;height:34px;flex:0 0 42px}
.comic-3928__hat::before{content:"";position:absolute;left:10px;top:0;width:23px;height:22px;border:3px solid #111;background:#7e22ce}
.comic-3928__hat::after{content:"";position:absolute;left:2px;bottom:5px;width:39px;height:7px;border:3px solid #111;background:#fff}
.comic-3928__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3928__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#c4b5fd}
.comic-3928__text strong{margin-top:3px;font:900 14px/1 Arial Black,Arial,sans-serif;letter-spacing:.4px}
.comic-3928__coin{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:3px 3px 0 #7e22ce;font:900 13px/1 Arial Black,Arial,sans-serif;transition:transform .2s ease}
.comic-3928:hover{background:#27272a;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #7e22ce}
.comic-3928:hover .comic-3928__coin{transform:rotate(180deg) scale(1.08)}
.comic-3928:hover .comic-3928__hat{transform:rotate(-5deg)}
.comic-3928:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3929,
    name: "Hush Silence Button",
    preview: (
      <button type="button" className="comic-3929">
        <span className="comic-3929__wraps">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span className="comic-3929__text">HUSH</span>

        <span className="comic-3929__quiet">SHH...</span>
      </button>
    ),
    html: `<button type="button" class="comic-3929">
    <span class="comic-3929__wraps">
        <span></span>
        <span></span>
        <span></span>
    </span>

    <span class="comic-3929__text">HUSH</span>

    <span class="comic-3929__quiet">SHH...</span>
</button>`,
    css: `.comic-3929{position:relative;width:170px;height:58px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:hidden;border:4px solid #111;background:#d6d3d1;color:#111;box-shadow:7px 7px 0 #57534e;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3929__wraps{position:absolute;inset:0}
.comic-3929__wraps span{position:absolute;left:-10%;width:120%;height:10px;border-top:2px solid rgba(17,17,17,.5);border-bottom:2px solid rgba(17,17,17,.5);background:#f5f5f4;transform:rotate(-7deg);transition:transform .22s ease}
.comic-3929__wraps span:nth-child(1){top:8px}
.comic-3929__wraps span:nth-child(2){top:24px;transform:rotate(5deg)}
.comic-3929__wraps span:nth-child(3){top:41px;transform:rotate(-4deg)}
.comic-3929__text{position:relative;z-index:3;padding:5px 9px;border:3px solid #111;background:#111;color:#fff;font:900 18px/1 Arial Black,Arial,sans-serif;letter-spacing:2px}
.comic-3929__quiet{position:absolute;right:5px;bottom:4px;z-index:4;font-size:6px;font-weight:900;letter-spacing:1px;opacity:.5;transition:opacity .18s ease,transform .18s ease}
.comic-3929:hover{background:#a8a29e;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:10px 10px 0 #44403c}
.comic-3929:hover .comic-3929__wraps span:nth-child(1){transform:translateX(8px) rotate(-12deg)}
.comic-3929:hover .comic-3929__wraps span:nth-child(2){transform:translateX(-8px) rotate(10deg)}
.comic-3929:hover .comic-3929__wraps span:nth-child(3){transform:translateX(6px) rotate(-9deg)}
.comic-3929:hover .comic-3929__quiet{opacity:1;transform:translate(-4px,-3px)}
.comic-3929:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3930,
    name: "Deathstroke Contract Button",
    preview: (
      <button type="button" className="comic-3930">
        <span className="comic-3930__split"></span>

        <span className="comic-3930__eye"></span>

        <span className="comic-3930__text">
          <small>CONTRACT</small>
          <strong>DEATHSTROKE</strong>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3930">
    <span class="comic-3930__split"></span>
    <span class="comic-3930__eye"></span>

    <span class="comic-3930__text">
        <small>CONTRACT</small>
        <strong>DEATHSTROKE</strong>
    </span>
</button>`,
    css: `.comic-3930{position:relative;width:210px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 15px;overflow:hidden;border:4px solid #111;background:#111;color:#fff;box-shadow:7px 7px 0 #f97316;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transition:transform .18s ease,box-shadow .18s ease}
.comic-3930__split{position:absolute;left:0;top:0;bottom:0;width:50%;z-index:-1;background:#f97316;transition:width .25s ease}
.comic-3930__eye{position:relative;z-index:2;width:37px;height:37px;flex:0 0 37px;border:3px solid #111;border-radius:50%;background:linear-gradient(90deg,#f97316 0 50%,#111 50%);box-shadow:3px 3px 0 #fff}
.comic-3930__eye::after{content:"";position:absolute;right:6px;top:13px;width:8px;height:5px;border:2px solid #fff;background:#ef4444;transform:rotate(-5deg)}
.comic-3930__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3930__text small{font-size:6px;font-weight:900;letter-spacing:1.6px}
.comic-3930__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.2px}
.comic-3930:hover{transform:translate(-2px,-2px);box-shadow:10px 10px 0 #f97316}
.comic-3930:hover .comic-3930__split{width:100%}
.comic-3930:hover .comic-3930__eye{transform:rotate(8deg) scale(1.08)}
.comic-3930:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3931,
    name: "Lex Luthor Power Button",
    preview: (
      <button type="button" className="comic-3931">
        <span className="comic-3931__core">
          <span></span>
        </span>

        <span className="comic-3931__text">
          <small>LEXCORP</small>
          <strong>LUTHOR</strong>
        </span>

        <span className="comic-3931__power">100%</span>
      </button>
    ),
    html: `<button type="button" class="comic-3931">
    <span class="comic-3931__core">
        <span></span>
    </span>

    <span class="comic-3931__text">
        <small>LEXCORP</small>
        <strong>LUTHOR</strong>
    </span>

    <span class="comic-3931__power">100%</span>
</button>`,
    css: `.comic-3931{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#5b21b6;color:#fff;box-shadow:7px 7px 0 #22c55e;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3931::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 14px,rgba(255,255,255,.08) 14px 17px)}
.comic-3931__core{position:relative;z-index:2;width:41px;height:41px;display:grid;place-items:center;flex:0 0 41px;border:3px solid #111;border-radius:50%;background:#22c55e;box-shadow:3px 3px 0 #111;transition:transform .22s ease,background .18s ease}
.comic-3931__core span{width:17px;height:17px;border:3px solid #111;border-radius:50%;background:#bbf7d0}
.comic-3931__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3931__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#86efac}
.comic-3931__text strong{margin-top:3px;font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3931__power{position:relative;z-index:2;padding:4px 5px;border:2px solid #111;background:#22c55e;color:#111;font-size:6px;font-weight:900;transform:rotate(4deg)}
.comic-3931:hover{background:#4c1d95;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #22c55e}
.comic-3931:hover .comic-3931__core{background:#fde047;transform:rotate(180deg) scale(1.1)}
.comic-3931:hover .comic-3931__power{background:#fde047;transform:rotate(-5deg) scale(1.08)}
.comic-3931:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3932,
    name: "Darkseid Omega Button",
    preview: (
      <button type="button" className="comic-3932">
        <span className="comic-3932__stone"></span>

        <span className="comic-3932__text">
          <small>APOKOLIPS</small>
          <strong>DARKSEID</strong>
        </span>

        <span className="comic-3932__beam"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3932">
    <span class="comic-3932__stone"></span>

    <span class="comic-3932__text">
        <small>APOKOLIPS</small>
        <strong>DARKSEID</strong>
    </span>

    <span class="comic-3932__beam"></span>
</button>`,
    css: `.comic-3932{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:11px;padding:0 15px;overflow:hidden;border:4px solid #111;background:#374151;color:#fff;box-shadow:7px 7px 0 #b91c1c;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3932::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(255,255,255,.1) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3932__stone{position:relative;z-index:2;width:40px;height:40px;flex:0 0 40px;border:3px solid #111;background:#6b7280;box-shadow:3px 3px 0 #111;clip-path:polygon(20% 0,80% 0,100% 25%,85% 100%,15% 100%,0 25%);transition:transform .2s ease,background .18s ease}
.comic-3932__stone::before,.comic-3932__stone::after{content:"";position:absolute;top:13px;width:9px;height:5px;border:2px solid #111;background:#ef4444}
.comic-3932__stone::before{left:5px;transform:rotate(8deg)}
.comic-3932__stone::after{right:5px;transform:rotate(-8deg)}
.comic-3932__text{position:relative;z-index:3;display:flex;flex-direction:column;align-items:flex-start}
.comic-3932__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fca5a5}
.comic-3932__text strong{margin-top:3px;font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3932__beam{position:absolute;right:-65px;top:26px;z-index:1;width:85px;height:7px;border:2px solid #111;background:#ef4444;transform:rotate(-8deg);transition:transform .25s ease}
.comic-3932:hover{background:#1f2937;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #dc2626}
.comic-3932:hover .comic-3932__stone{background:#9ca3af;transform:scale(1.08)}
.comic-3932:hover .comic-3932__beam{transform:translateX(-70px) rotate(-8deg) scaleX(1.6)}
.comic-3932:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3933,
    name: "Black Manta Hunter Button",
    preview: (
      <button type="button" className="comic-3933">
        <span className="comic-3933__helmet">
          <span className="comic-3933__visor"></span>
        </span>

        <span className="comic-3933__text">
          <small>DEEP SEA</small>
          <strong>BLACK MANTA</strong>
        </span>

        <span className="comic-3933__target"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3933">
    <span class="comic-3933__helmet">
        <span class="comic-3933__visor"></span>
    </span>

    <span class="comic-3933__text">
        <small>DEEP SEA</small>
        <strong>BLACK MANTA</strong>
    </span>

    <span class="comic-3933__target"></span>
</button>`,
    css: `.comic-3933{position:relative;width:205px;height:62px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 14px;overflow:hidden;border:4px solid #111;background:#09090b;color:#fff;box-shadow:7px 7px 0 #dc2626;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3933::before{content:"";position:absolute;inset:0;z-index:-2;background:repeating-linear-gradient(-35deg,transparent 0 13px,rgba(255,255,255,.06) 13px 16px)}
.comic-3933__helmet{position:relative;z-index:2;width:43px;height:38px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;background:#27272a;box-shadow:3px 3px 0 #dc2626;clip-path:polygon(15% 0,85% 0,100% 30%,88% 100%,12% 100%,0 30%);transition:transform .2s ease,background .18s ease}
.comic-3933__visor{width:27px;height:8px;border:3px solid #111;background:#ef4444;box-shadow:0 0 0 2px #7f1d1d}
.comic-3933__text{position:relative;z-index:3;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3933__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fca5a5}
.comic-3933__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.3px}
.comic-3933__target{position:relative;z-index:2;width:25px;height:25px;border:3px solid #ef4444;border-radius:50%;transition:transform .2s ease,border-color .18s ease}
.comic-3933__target::before,.comic-3933__target::after{content:"";position:absolute;background:#ef4444}
.comic-3933__target::before{left:50%;top:-5px;width:3px;height:29px;transform:translateX(-50%)}
.comic-3933__target::after{left:-5px;top:50%;width:29px;height:3px;transform:translateY(-50%)}
.comic-3933:hover{background:#18181b;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #dc2626}
.comic-3933:hover .comic-3933__helmet{background:#3f3f46;transform:rotate(-5deg) scale(1.08)}
.comic-3933:hover .comic-3933__target{border-color:#fff;transform:rotate(90deg) scale(1.12)}
.comic-3933:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3934,
    name: "Harley Quinn Mayhem Button",
    preview: (
      <button type="button" className="comic-3934">
        <span className="comic-3934__diamond comic-3934__diamond--1"></span>
        <span className="comic-3934__diamond comic-3934__diamond--2"></span>

        <span className="comic-3934__text">
          <small>MAYHEM</small>
          <strong>HARLEY!</strong>
        </span>

        <span className="comic-3934__tag">HA!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3934">
    <span class="comic-3934__diamond comic-3934__diamond--1"></span>
    <span class="comic-3934__diamond comic-3934__diamond--2"></span>

    <span class="comic-3934__text">
        <small>MAYHEM</small>
        <strong>HARLEY!</strong>
    </span>

    <span class="comic-3934__tag">HA!</span>
</button>`,
    css: `.comic-3934{position:relative;width:180px;height:60px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:visible;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3934::before{content:"";position:absolute;right:0;top:0;width:50%;height:100%;background:#111}
.comic-3934__text{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center}
.comic-3934__text small{font-size:6px;font-weight:900;letter-spacing:1.6px;color:#fecaca}
.comic-3934__text strong{margin-top:3px;font:900 19px/.9 Arial Black,Arial,sans-serif;font-style:italic}
.comic-3934__diamond{position:absolute;z-index:3;width:17px;height:17px;border:3px solid #111;background:#fff;transform:rotate(45deg);transition:transform .2s ease}
.comic-3934__diamond--1{left:8px;top:10px}
.comic-3934__diamond--2{right:9px;bottom:9px;background:#ef4444}
.comic-3934__tag{position:absolute;right:-13px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3934:hover{background:#dc2626;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #111}
.comic-3934:hover .comic-3934__diamond--1{transform:translate(-3px,-3px) rotate(80deg) scale(1.1)}
.comic-3934:hover .comic-3934__diamond--2{transform:translate(3px,3px) rotate(10deg) scale(1.1)}
.comic-3934:hover .comic-3934__tag{background:#60a5fa;transform:rotate(-8deg) scale(1.08)}
.comic-3934:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3935,
    name: "Bane Venom Button",
    preview: (
      <button type="button" className="comic-3935">
        <span className="comic-3935__mask">
          <span></span>
        </span>

        <span className="comic-3935__text">
          <small>VENOM</small>
          <strong>BANE</strong>
        </span>

        <span className="comic-3935__meter">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3935">
    <span class="comic-3935__mask">
        <span></span>
    </span>

    <span class="comic-3935__text">
        <small>VENOM</small>
        <strong>BANE</strong>
    </span>

    <span class="comic-3935__meter">
        <span></span>
        <span></span>
        <span></span>
    </span>
</button>`,
    css: `.comic-3935{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#1f2937;color:#fff;box-shadow:7px 7px 0 #22c55e;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3935::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 16px,rgba(34,197,94,.1) 16px 19px)}
.comic-3935__mask{position:relative;z-index:2;width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;border:3px solid #111;border-radius:45% 45% 38% 38%;background:#4b5563;box-shadow:3px 3px 0 #111;transition:transform .2s ease,background .18s ease}
.comic-3935__mask::before,.comic-3935__mask::after{content:"";position:absolute;top:11px;width:8px;height:6px;border:2px solid #111;background:#22c55e}
.comic-3935__mask::before{left:5px}
.comic-3935__mask::after{right:5px}
.comic-3935__mask>span{position:absolute;bottom:6px;width:21px;height:9px;border:3px solid #111;background:#111}
.comic-3935__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3935__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#86efac}
.comic-3935__text strong{margin-top:3px;font:900 17px/1 Arial Black,Arial,sans-serif;letter-spacing:.8px}
.comic-3935__meter{position:relative;z-index:2;display:flex;align-items:flex-end;gap:3px;height:30px}
.comic-3935__meter span{width:6px;border:2px solid #111;background:#22c55e}
.comic-3935__meter span:nth-child(1){height:12px}
.comic-3935__meter span:nth-child(2){height:20px}
.comic-3935__meter span:nth-child(3){height:28px}
.comic-3935:hover{background:#111827;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #22c55e}
.comic-3935:hover .comic-3935__mask{background:#6b7280;transform:scale(1.1)}
.comic-3935:hover .comic-3935__meter span{background:#fde047}
.comic-3935:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3936,
    name: "Scarecrow Fear Button",
    preview: (
      <button type="button" className="comic-3936">
        <span className="comic-3936__stitch"></span>

        <span className="comic-3936__text">
          <small>FEAR TOXIN</small>
          <strong>SCARECROW</strong>
        </span>

        <span className="comic-3936__warning">!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3936">
    <span class="comic-3936__stitch"></span>

    <span class="comic-3936__text">
        <small>FEAR TOXIN</small>
        <strong>SCARECROW</strong>
    </span>

    <span class="comic-3936__warning">!</span>
</button>`,
    css: `.comic-3936{position:relative;width:200px;height:60px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;overflow:hidden;border:4px solid #111;background:#92400e;color:#fff;box-shadow:7px 7px 0 #84cc16;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3936::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.25) 1.3px,transparent 1.5px);background-size:8px 8px}
.comic-3936__stitch{position:absolute;left:9px;top:7px;bottom:7px;width:15px;border-left:3px dashed #111;border-right:3px dashed #111;transform:rotate(5deg)}
.comic-3936__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center}
.comic-3936__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#d9f99d}
.comic-3936__text strong{margin-top:3px;font:900 14px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3936__warning{position:absolute;right:9px;width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#a3e635;color:#111;box-shadow:3px 3px 0 #111;font:900 17px/1 Arial Black,Arial,sans-serif;transition:transform .2s ease,background .18s ease}
.comic-3936:hover{background:#78350f;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #84cc16}
.comic-3936:hover .comic-3936__warning{background:#fde047;transform:rotate(15deg) scale(1.12)}
.comic-3936:hover .comic-3936__stitch{transform:translateX(-4px) rotate(-5deg)}
.comic-3936:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3937,
    name: "Poison Ivy Toxic Button",
    preview: (
      <button type="button" className="comic-3937">
        <span className="comic-3937__leaf">
          <i className="ri-leaf-fill"></i>
        </span>

        <span className="comic-3937__text">
          <small>TOXIC</small>
          <strong>POISON IVY</strong>
        </span>

        <span className="comic-3937__vine"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3937">
    <span class="comic-3937__leaf">
        <i class="ri-leaf-fill"></i>
    </span>

    <span class="comic-3937__text">
        <small>TOXIC</small>
        <strong>POISON IVY</strong>
    </span>

    <span class="comic-3937__vine"></span>
</button>`,
    css: `.comic-3937{position:relative;width:195px;height:61px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 15px;overflow:hidden;border:4px solid #111;background:#15803d;color:#fff;box-shadow:7px 7px 0 #be123c;font-family:Arial,Helvetica,sans-serif;cursor:pointer;isolation:isolate;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3937::before{content:"";position:absolute;inset:0;z-index:-2;background-image:radial-gradient(rgba(255,255,255,.13) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3937__leaf{position:relative;z-index:2;width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;border-radius:50%;background:#f43f5e;color:#fff;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-6deg);transition:transform .2s ease,background .18s ease}
.comic-3937__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3937__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#bbf7d0}
.comic-3937__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.3px}
.comic-3937__vine{position:absolute;right:-27px;bottom:-22px;width:90px;height:55px;border:6px solid #84cc16;border-left-color:transparent;border-top-color:transparent;border-radius:50%;transform:rotate(-16deg);transition:transform .25s ease}
.comic-3937:hover{background:#166534;transform:translate(-2px,-2px) rotate(1deg);box-shadow:10px 10px 0 #be123c}
.comic-3937:hover .comic-3937__leaf{background:#fde047;color:#111;transform:rotate(8deg) scale(1.1)}
.comic-3937:hover .comic-3937__vine{transform:translate(-20px,-8px) rotate(-35deg) scale(1.2)}
.comic-3937:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3938,
    name: "Mr Freeze Cryo Button",
    preview: (
      <button type="button" className="comic-3938">
        <span className="comic-3938__core">
          <i className="ri-snowflake-line"></i>
        </span>

        <span className="comic-3938__text">
          <small>CRYO MODE</small>
          <strong>MR. FREEZE</strong>
        </span>

        <span className="comic-3938__temp">-40°</span>
      </button>
    ),
    html: `<button type="button" class="comic-3938">
    <span class="comic-3938__core">
        <i class="ri-snowflake-line"></i>
    </span>

    <span class="comic-3938__text">
        <small>CRYO MODE</small>
        <strong>MR. FREEZE</strong>
    </span>

    <span class="comic-3938__temp">-40°</span>
</button>`,
    css: `.comic-3938{position:relative;width:200px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 12px;overflow:hidden;border:4px solid #111;background:#0f172a;color:#fff;box-shadow:7px 7px 0 #38bdf8;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3938::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 14px,rgba(125,211,252,.09) 14px 17px)}
.comic-3938__core{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;border-radius:50%;background:#7dd3fc;color:#0f172a;box-shadow:3px 3px 0 #fff;font-size:19px;transition:transform .2s ease,background .18s ease}
.comic-3938__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3938__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#bae6fd}
.comic-3938__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.3px}
.comic-3938__temp{position:relative;z-index:2;padding:5px;border:2px solid #111;background:#e0f2fe;color:#111;box-shadow:2px 2px 0 #38bdf8;font-size:7px;font-weight:900;transform:rotate(4deg);transition:transform .18s ease,background .18s ease}
.comic-3938:hover{background:#1e3a8a;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #7dd3fc}
.comic-3938:hover .comic-3938__core{background:#fff;transform:rotate(180deg) scale(1.1)}
.comic-3938:hover .comic-3938__temp{background:#38bdf8;transform:rotate(-5deg) scale(1.08)}
.comic-3938:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3939,
    name: "Two-Face Coin Toss Button",
    preview: (
      <button type="button" className="comic-3939">
        <span className="comic-3939__coin">2</span>

        <span className="comic-3939__text">
          <small>FLIP THE COIN</small>
          <strong>TWO-FACE</strong>
        </span>

        <span className="comic-3939__choice">
          <span>YES</span>
          <span>NO</span>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3939">
    <span class="comic-3939__coin">2</span>

    <span class="comic-3939__text">
        <small>FLIP THE COIN</small>
        <strong>TWO-FACE</strong>
    </span>

    <span class="comic-3939__choice">
        <span>YES</span>
        <span>NO</span>
    </span>
</button>`,
    css: `.comic-3939{position:relative;width:200px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 12px;overflow:hidden;border:4px solid #111;background:linear-gradient(90deg,#f5f5f4 0 50%,#7f1d1d 50%);color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}
.comic-3939__coin{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;border-radius:50%;background:linear-gradient(90deg,#fde047 0 50%,#71717a 50%);box-shadow:3px 3px 0 #111;font:900 17px/1 Arial Black,Arial,sans-serif;transition:transform .3s ease}
.comic-3939__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3939__text small{font-size:6px;font-weight:900;letter-spacing:1.3px}
.comic-3939__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.3px;color:#111;text-shadow:1px 1px 0 #fff}
.comic-3939__choice{position:relative;z-index:2;display:flex;flex-direction:column;border:2px solid #111;background:#fff}
.comic-3939__choice span{padding:3px 5px;font-size:5px;font-weight:900}
.comic-3939__choice span+span{border-top:2px solid #111;background:#111;color:#fff}
.comic-3939:hover{transform:translate(-2px,-2px) rotate(1deg);box-shadow:10px 10px 0 #111}
.comic-3939:hover .comic-3939__coin{transform:rotateY(180deg) rotate(12deg) scale(1.1)}
.comic-3939:hover .comic-3939__choice{transform:rotate(-4deg)}
.comic-3939:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3940,
    name: "Ra's al Ghul Lazarus Button",
    preview: (
      <button type="button" className="comic-3940">
        <span className="comic-3940__symbol">
          <i className="ri-sword-fill"></i>
        </span>

        <span className="comic-3940__text">
          <small>LAZARUS</small>
          <strong>RA'S AL GHUL</strong>
        </span>

        <span className="comic-3940__eternal">∞</span>
      </button>
    ),
    html: `<button type="button" class="comic-3940">
    <span class="comic-3940__symbol">
        <i class="ri-sword-fill"></i>
    </span>

    <span class="comic-3940__text">
        <small>LAZARUS</small>
        <strong>RA'S AL GHUL</strong>
    </span>

    <span class="comic-3940__eternal">∞</span>
</button>`,
    css: `.comic-3940{position:relative;width:205px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#14532d;color:#fff;box-shadow:7px 7px 0 #84cc16;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3940::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 14px,rgba(163,230,53,.1) 14px 17px)}
.comic-3940__symbol{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#a3e635;color:#111;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-6deg);transition:transform .2s ease,background .18s ease}
.comic-3940__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3940__text small{font-size:6px;font-weight:900;letter-spacing:1.6px;color:#d9f99d}
.comic-3940__text strong{margin-top:3px;font:900 12px/1 Arial Black,Arial,sans-serif;letter-spacing:.35px}
.comic-3940__eternal{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:2px 2px 0 #111;font:900 17px/1 Arial Black,Arial,sans-serif;transition:transform .25s ease}
.comic-3940:hover{background:#166534;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #84cc16}
.comic-3940:hover .comic-3940__symbol{background:#fde047;transform:rotate(8deg) scale(1.1)}
.comic-3940:hover .comic-3940__eternal{transform:rotate(180deg) scale(1.12)}
.comic-3940:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3941,
    name: "Killer Croc Rage Button",
    preview: (
      <button type="button" className="comic-3941">
        <span className="comic-3941__eye"></span>

        <span className="comic-3941__text">
          <small>SEWER RAGE</small>
          <strong>KILLER CROC</strong>
        </span>

        <span className="comic-3941__bite">GRR!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3941">
    <span class="comic-3941__eye"></span>

    <span class="comic-3941__text">
        <small>SEWER RAGE</small>
        <strong>KILLER CROC</strong>
    </span>

    <span class="comic-3941__bite">GRR!</span>
</button>`,
    css: `.comic-3941{position:relative;width:200px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#3f6212;color:#fff;box-shadow:7px 7px 0 #78350f;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3941::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.26) 1.5px,transparent 1.7px);background-size:9px 9px}
.comic-3941__eye{position:relative;z-index:2;width:42px;height:31px;flex:0 0 42px;border:3px solid #111;border-radius:50%;background:#84cc16;box-shadow:3px 3px 0 #111;transform:rotate(-5deg);transition:transform .2s ease,background .18s ease}
.comic-3941__eye::before{content:"";position:absolute;left:15px;top:5px;width:7px;height:15px;border:2px solid #111;border-radius:50%;background:#fde047}
.comic-3941__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3941__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#d9f99d}
.comic-3941__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif}
.comic-3941__bite{position:absolute;right:-14px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3941:hover{background:#365314;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #78350f}
.comic-3941:hover .comic-3941__eye{background:#ef4444;transform:rotate(7deg) scale(1.12)}
.comic-3941:hover .comic-3941__bite{background:#ef4444;color:#fff;transform:rotate(-8deg) scale(1.1)}
.comic-3941:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3942,
    name: "Black Mask Crime Button",
    preview: (
      <button type="button" className="comic-3942">
        <span className="comic-3942__mask">
          <span className="comic-3942__eyes"></span>
        </span>

        <span className="comic-3942__text">
          <small>GOTHAM CRIME</small>
          <strong>BLACK MASK</strong>
        </span>

        <span className="comic-3942__danger">X</span>
      </button>
    ),
    html: `<button type="button" class="comic-3942">
    <span class="comic-3942__mask">
        <span class="comic-3942__eyes"></span>
    </span>

    <span class="comic-3942__text">
        <small>GOTHAM CRIME</small>
        <strong>BLACK MASK</strong>
    </span>

    <span class="comic-3942__danger">X</span>
</button>`,
    css: `.comic-3942{position:relative;width:205px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#18181b;color:#fff;box-shadow:7px 7px 0 #dc2626;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3942::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent 0 13px,rgba(220,38,38,.1) 13px 16px)}
.comic-3942__mask{position:relative;z-index:2;width:41px;height:42px;flex:0 0 41px;border:3px solid #52525b;background:#09090b;box-shadow:3px 3px 0 #dc2626;border-radius:45% 45% 38% 38%;transition:transform .2s ease,box-shadow .18s ease}
.comic-3942__mask::after{content:"";position:absolute;left:10px;bottom:6px;width:16px;height:6px;border:2px solid #52525b;background:#18181b}
.comic-3942__eyes{position:absolute;left:6px;right:6px;top:11px;height:7px;border-top:3px solid #dc2626}
.comic-3942__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3942__text small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#fca5a5}
.comic-3942__text strong{margin-top:3px;font:900 12px/1 Arial Black,Arial,sans-serif;letter-spacing:.3px}
.comic-3942__danger{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;border:3px solid #111;background:#dc2626;color:#fff;box-shadow:2px 2px 0 #fff;font:900 10px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg);transition:transform .18s ease,background .18s ease}
.comic-3942:hover{background:#09090b;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #dc2626}
.comic-3942:hover .comic-3942__mask{box-shadow:5px 5px 0 #dc2626;transform:scale(1.1) rotate(-5deg)}
.comic-3942:hover .comic-3942__danger{background:#fde047;color:#111;transform:rotate(-8deg) scale(1.1)}
.comic-3942:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3943,
    name: "Clayface Morph Button",
    preview: (
      <button type="button" className="comic-3943">
        <span className="comic-3943__blob">
          <span></span>
        </span>

        <span className="comic-3943__text">
          <small>MORPH</small>
          <strong>CLAYFACE</strong>
        </span>

        <span className="comic-3943__drop"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3943">
    <span class="comic-3943__blob">
        <span></span>
    </span>

    <span class="comic-3943__text">
        <small>MORPH</small>
        <strong>CLAYFACE</strong>
    </span>

    <span class="comic-3943__drop"></span>
</button>`,
    css: `.comic-3943{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 14px;overflow:hidden;border:4px solid #111;background:#92400e;color:#fff;box-shadow:7px 7px 0 #451a03;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3943::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(69,26,3,.35) 1.3px,transparent 1.6px);background-size:8px 8px}
.comic-3943__blob{position:relative;z-index:2;width:42px;height:42px;flex:0 0 42px;border:3px solid #111;background:#b45309;box-shadow:3px 3px 0 #451a03;border-radius:58% 42% 61% 39%/42% 59% 41% 58%;transition:transform .25s ease,border-radius .25s ease,background .18s ease}
.comic-3943__blob::before,.comic-3943__blob::after{content:"";position:absolute;top:12px;width:7px;height:6px;border:2px solid #111;background:#fde047}
.comic-3943__blob::before{left:7px}
.comic-3943__blob::after{right:7px}
.comic-3943__blob span{position:absolute;left:13px;bottom:7px;width:12px;height:5px;border-bottom:3px solid #111}
.comic-3943__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3943__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fed7aa}
.comic-3943__text strong{margin-top:3px;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3943__drop{position:absolute;right:7px;top:7px;width:15px;height:21px;border:3px solid #111;background:#d97706;border-radius:55% 45% 60% 40%;transform:rotate(12deg);transition:transform .22s ease}
.comic-3943:hover{background:#78350f;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:10px 10px 0 #451a03}
.comic-3943:hover .comic-3943__blob{background:#d97706;border-radius:35% 65% 33% 67%/66% 31% 69% 34%;transform:rotate(15deg) scale(1.12)}
.comic-3943:hover .comic-3943__drop{transform:translate(4px,8px) rotate(-20deg) scale(1.15)}
.comic-3943:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3944,
    name: "Reverse Flash Speed Button",
    preview: (
      <button type="button" className="comic-3944">
        <span className="comic-3944__bolt">
          <i className="ri-flashlight-fill"></i>
        </span>

        <span className="comic-3944__text">
          <small>REVERSE</small>
          <strong>FLASH</strong>
        </span>

        <span className="comic-3944__speed">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3944">
    <span class="comic-3944__bolt">
        <i class="ri-flashlight-fill"></i>
    </span>

    <span class="comic-3944__text">
        <small>REVERSE</small>
        <strong>FLASH</strong>
    </span>

    <span class="comic-3944__speed">
        <span></span>
        <span></span>
        <span></span>
    </span>
</button>`,
    css: `.comic-3944{position:relative;width:195px;height:60px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#fde047;color:#111;box-shadow:7px 7px 0 #dc2626;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3944::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-25deg,transparent 0 15px,rgba(220,38,38,.12) 15px 19px)}
.comic-3944__bolt{position:relative;z-index:2;width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;border-radius:50%;background:#dc2626;color:#fde047;box-shadow:3px 3px 0 #111;font-size:19px;transition:transform .2s ease,background .18s ease}
.comic-3944__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3944__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#991b1b}
.comic-3944__text strong{margin-top:2px;font:900 17px/1 Arial Black,Arial,sans-serif;font-style:italic}
.comic-3944__speed{position:relative;z-index:2;display:flex;flex-direction:column;gap:4px}
.comic-3944__speed span{display:block;height:4px;border:2px solid #111;background:#dc2626;transition:width .2s ease,transform .2s ease}
.comic-3944__speed span:nth-child(1){width:22px}
.comic-3944__speed span:nth-child(2){width:15px}
.comic-3944__speed span:nth-child(3){width:9px}
.comic-3944:hover{background:#facc15;transform:translate(-4px,-2px) skewX(-3deg);box-shadow:11px 9px 0 #dc2626}
.comic-3944:hover .comic-3944__bolt{background:#111;transform:rotate(18deg) scale(1.1)}
.comic-3944:hover .comic-3944__speed span:nth-child(1){width:31px;transform:translateX(4px)}
.comic-3944:hover .comic-3944__speed span:nth-child(2){width:24px;transform:translateX(4px)}
.comic-3944:hover .comic-3944__speed span:nth-child(3){width:17px;transform:translateX(4px)}
.comic-3944:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3945,
    name: "Sinestro Fear Button",
    preview: (
      <button type="button" className="comic-3945">
        <span className="comic-3945__core">
          <i className="ri-flashlight-line"></i>
        </span>

        <span className="comic-3945__text">
          <small>FEAR RISES</small>
          <strong>SINESTRO</strong>
        </span>

        <span className="comic-3945__fear">FEAR!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3945">
    <span class="comic-3945__core">
        <i class="ri-flashlight-line"></i>
    </span>

    <span class="comic-3945__text">
        <small>FEAR RISES</small>
        <strong>SINESTRO</strong>
    </span>

    <span class="comic-3945__fear">FEAR!</span>
</button>`,
    css: `.comic-3945{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#facc15;color:#111;box-shadow:7px 7px 0 #111;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3945::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3945__core{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;border-radius:50%;background:#111;color:#fde047;box-shadow:3px 3px 0 #7e22ce;font-size:19px;transition:transform .2s ease,background .18s ease}
.comic-3945__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3945__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#581c87}
.comic-3945__text strong{margin-top:3px;font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:.4px}
.comic-3945__fear{position:absolute;right:-15px;top:-15px;z-index:4;padding:6px 7px;border:3px solid #111;background:#7e22ce;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3945:hover{background:#fde047;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #7e22ce}
.comic-3945:hover .comic-3945__core{background:#7e22ce;color:#fff;transform:rotate(-12deg) scale(1.1)}
.comic-3945:hover .comic-3945__fear{background:#111;transform:rotate(-8deg) scale(1.12)}
.comic-3945:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3946,
    name: "Mad Hatter Tea Party Button",
    preview: (
      <button type="button" className="comic-3946">
        <span className="comic-3946__hat">
          <span></span>
        </span>

        <span className="comic-3946__text">
          <small>TEA PARTY</small>
          <strong>MAD HATTER</strong>
        </span>

        <span className="comic-3946__card">10/6</span>
      </button>
    ),
    html: `<button type="button" class="comic-3946">
    <span class="comic-3946__hat">
        <span></span>
    </span>

    <span class="comic-3946__text">
        <small>TEA PARTY</small>
        <strong>MAD HATTER</strong>
    </span>

    <span class="comic-3946__card">10/6</span>
</button>`,
    css: `.comic-3946{position:relative;width:205px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 12px;overflow:visible;border:4px solid #111;background:#166534;color:#fff;box-shadow:7px 7px 0 #7e22ce;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3946::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.14) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3946__hat{position:relative;z-index:2;width:43px;height:39px;flex:0 0 43px;transition:transform .2s ease}
.comic-3946__hat::before{content:"";position:absolute;left:10px;top:1px;width:24px;height:25px;border:3px solid #111;background:#7e22ce;transform:skew(-5deg)}
.comic-3946__hat::after{content:"";position:absolute;left:1px;bottom:5px;width:42px;height:7px;border:3px solid #111;background:#fde047}
.comic-3946__hat span{position:absolute;z-index:3;left:16px;top:8px;width:14px;height:9px;border:2px solid #111;background:#fff}
.comic-3946__text{position:relative;z-index:2;display:flex;flex:1;flex-direction:column;align-items:flex-start}
.comic-3946__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#bbf7d0}
.comic-3946__text strong{margin-top:3px;font:900 12px/1 Arial Black,Arial,sans-serif;letter-spacing:.25px}
.comic-3946__card{position:relative;z-index:3;padding:5px 5px;border:3px solid #111;background:#fff;color:#111;box-shadow:2px 2px 0 #fde047;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(7deg);transition:transform .2s ease,background .18s ease}
.comic-3946:hover{background:#14532d;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #7e22ce}
.comic-3946:hover .comic-3946__hat{transform:translateY(-4px) rotate(-8deg)}
.comic-3946:hover .comic-3946__card{background:#fde047;transform:rotate(-8deg) scale(1.1)}
.comic-3946:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3947,
    name: "Firefly Burn Button",
    preview: (
      <button type="button" className="comic-3947">
        <span className="comic-3947__flame">
          <i className="ri-fire-fill"></i>
        </span>

        <span className="comic-3947__text">
          <small>IGNITION</small>
          <strong>FIREFLY</strong>
        </span>

        <span className="comic-3947__hot">HOT!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3947">
    <span class="comic-3947__flame">
        <i class="ri-fire-fill"></i>
    </span>

    <span class="comic-3947__text">
        <small>IGNITION</small>
        <strong>FIREFLY</strong>
    </span>

    <span class="comic-3947__hot">HOT!</span>
</button>`,
    css: `.comic-3947{position:relative;width:184px;height:60px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#ea580c;color:#fff;box-shadow:7px 7px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3947::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-30deg,transparent 0 13px,rgba(255,255,255,.12) 13px 16px)}
.comic-3947__flame{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#fde047;color:#dc2626;box-shadow:3px 3px 0 #111;font-size:21px;transform:rotate(-5deg);transition:transform .2s ease,background .18s ease}
.comic-3947__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3947__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#ffedd5}
.comic-3947__text strong{margin-top:3px;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3947__hot{position:absolute;right:-14px;top:-14px;z-index:4;padding:5px 7px;border:3px solid #111;background:#dc2626;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(9deg);transition:transform .18s ease,background .18s ease}
.comic-3947:hover{background:#c2410c;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #fde047}
.comic-3947:hover .comic-3947__flame{background:#fff;transform:rotate(9deg) scale(1.12)}
.comic-3947:hover .comic-3947__hot{background:#fde047;color:#111;transform:rotate(-8deg) scale(1.12)}
.comic-3947:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3948,
    name: "Man-Bat Night Button",
    preview: (
      <button type="button" className="comic-3948">
        <span className="comic-3948__wing comic-3948__wing--left"></span>

        <span className="comic-3948__text">
          <small>NIGHT HUNT</small>
          <strong>MAN-BAT</strong>
        </span>

        <span className="comic-3948__wing comic-3948__wing--right"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3948">
    <span class="comic-3948__wing comic-3948__wing--left"></span>

    <span class="comic-3948__text">
        <small>NIGHT HUNT</small>
        <strong>MAN-BAT</strong>
    </span>

    <span class="comic-3948__wing comic-3948__wing--right"></span>
</button>`,
    css: `.comic-3948{position:relative;width:185px;height:61px;display:inline-flex;align-items:center;justify-content:center;padding:0 36px;overflow:hidden;border:4px solid #111;background:#292524;color:#fff;box-shadow:7px 7px 0 #78350f;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3948::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3948__text{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center}
.comic-3948__text small{font-size:6px;font-weight:900;letter-spacing:1.6px;color:#d6d3d1}
.comic-3948__text strong{margin-top:3px;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3948__wing{position:absolute;z-index:2;width:43px;height:39px;background:#92400e;border:3px solid #111;transition:transform .22s ease}
.comic-3948__wing--left{left:-7px;clip-path:polygon(100% 0,75% 28%,55% 14%,42% 46%,16% 36%,32% 67%,0 78%,58% 100%,100% 72%)}
.comic-3948__wing--right{right:-7px;clip-path:polygon(0 0,25% 28%,45% 14%,58% 46%,84% 36%,68% 67%,100% 78%,42% 100%,0 72%)}
.comic-3948:hover{background:#1c1917;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #78350f}
.comic-3948:hover .comic-3948__wing--left{transform:translateX(-5px) rotate(-8deg) scale(1.15)}
.comic-3948:hover .comic-3948__wing--right{transform:translateX(5px) rotate(8deg) scale(1.15)}
.comic-3948:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3949,
    name: "Professor Pyg Perfect Button",
    preview: (
      <button type="button" className="comic-3949">
        <span className="comic-3949__mask">
          <span className="comic-3949__nose"></span>
        </span>

        <span className="comic-3949__text">
          <small>MAKE IT</small>
          <strong>PERFECT!</strong>
        </span>

        <span className="comic-3949__tag">PYG</span>
      </button>
    ),
    html: `<button type="button" class="comic-3949">
    <span class="comic-3949__mask">
        <span class="comic-3949__nose"></span>
    </span>

    <span class="comic-3949__text">
        <small>MAKE IT</small>
        <strong>PERFECT!</strong>
    </span>

    <span class="comic-3949__tag">PYG</span>
</button>`,
    css: `.comic-3949{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#be123c;color:#fff;box-shadow:7px 7px 0 #f9a8d4;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3949::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.14) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3949__mask{position:relative;z-index:2;width:41px;height:41px;flex:0 0 41px;border:3px solid #111;border-radius:48% 48% 43% 43%;background:#fecdd3;box-shadow:3px 3px 0 #111;transition:transform .2s ease,background .18s ease}
.comic-3949__mask::before,.comic-3949__mask::after{content:"";position:absolute;top:10px;width:6px;height:6px;border:2px solid #111;border-radius:50%;background:#111}
.comic-3949__mask::before{left:7px}
.comic-3949__mask::after{right:7px}
.comic-3949__nose{position:absolute;left:11px;bottom:5px;width:15px;height:10px;border:3px solid #111;border-radius:50%;background:#fb7185}
.comic-3949__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3949__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fecdd3}
.comic-3949__text strong{margin-top:3px;font:900 15px/1 Arial Black,Arial,sans-serif;font-style:italic}
.comic-3949__tag{position:absolute;right:-12px;bottom:-11px;z-index:4;padding:5px 7px;border:3px solid #111;background:#111;color:#fff;box-shadow:3px 3px 0 #f9a8d4;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(-7deg);transition:transform .18s ease,background .18s ease}
.comic-3949:hover{background:#9f1239;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #f9a8d4}
.comic-3949:hover .comic-3949__mask{background:#fff;transform:rotate(8deg) scale(1.1)}
.comic-3949:hover .comic-3949__tag{background:#fde047;color:#111;transform:rotate(8deg) scale(1.1)}
.comic-3949:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3950,
    name: "Victor Zsasz Mark Button",
    preview: (
      <button type="button" className="comic-3950">
        <span className="comic-3950__marks">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span className="comic-3950__text">
          <small>ONE MORE</small>
          <strong>ZSASZ</strong>
        </span>

        <span className="comic-3950__count">X</span>
      </button>
    ),
    html: `<button type="button" class="comic-3950">
    <span class="comic-3950__marks">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </span>

    <span class="comic-3950__text">
        <small>ONE MORE</small>
        <strong>ZSASZ</strong>
    </span>

    <span class="comic-3950__count">X</span>
</button>`,
    css: `.comic-3950{position:relative;width:176px;height:60px;display:inline-flex;align-items:center;gap:11px;padding:0 12px;overflow:hidden;border:4px solid #111;background:#d6d3d1;color:#111;box-shadow:7px 7px 0 #dc2626;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3950__marks{position:relative;z-index:2;width:34px;height:35px;flex:0 0 34px}
.comic-3950__marks span{position:absolute;top:4px;width:3px;height:27px;background:#dc2626;border:1px solid #111;transition:transform .2s ease}
.comic-3950__marks span:nth-child(1){left:3px;transform:rotate(-5deg)}
.comic-3950__marks span:nth-child(2){left:11px;transform:rotate(4deg)}
.comic-3950__marks span:nth-child(3){left:19px;transform:rotate(-3deg)}
.comic-3950__marks span:nth-child(4){left:27px;transform:rotate(5deg)}
.comic-3950__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3950__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#7f1d1d}
.comic-3950__text strong{margin-top:3px;font:900 17px/1 Arial Black,Arial,sans-serif;letter-spacing:1px}
.comic-3950__count{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;border:3px solid #111;background:#dc2626;color:#fff;box-shadow:2px 2px 0 #111;font:900 10px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg);transition:transform .18s ease,background .18s ease}
.comic-3950:hover{background:#a8a29e;transform:translate(-2px,-2px) rotate(-1deg);box-shadow:10px 10px 0 #dc2626}
.comic-3950:hover .comic-3950__marks span:nth-child(1){transform:translateY(-3px) rotate(-12deg)}
.comic-3950:hover .comic-3950__marks span:nth-child(2){transform:translateY(3px) rotate(10deg)}
.comic-3950:hover .comic-3950__marks span:nth-child(3){transform:translateY(-3px) rotate(-9deg)}
.comic-3950:hover .comic-3950__marks span:nth-child(4){transform:translateY(3px) rotate(12deg)}
.comic-3950:hover .comic-3950__count{background:#111;transform:rotate(-7deg) scale(1.1)}
.comic-3950:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3951,
    name: "Talon Court Button",
    preview: (
      <button type="button" className="comic-3951">
        <span className="comic-3951__owl">
          <span className="comic-3951__eye comic-3951__eye--left"></span>
          <span className="comic-3951__eye comic-3951__eye--right"></span>
        </span>

        <span className="comic-3951__text">
          <small>COURT OF OWLS</small>
          <strong>TALON</strong>
        </span>

        <span className="comic-3951__moon">
          <i className="ri-moon-fill"></i>
        </span>
      </button>
    ),
    html: `<button type="button" class="comic-3951">
    <span class="comic-3951__owl">
        <span class="comic-3951__eye comic-3951__eye--left"></span>
        <span class="comic-3951__eye comic-3951__eye--right"></span>
    </span>

    <span class="comic-3951__text">
        <small>COURT OF OWLS</small>
        <strong>TALON</strong>
    </span>

    <span class="comic-3951__moon">
        <i class="ri-moon-fill"></i>
    </span>
</button>`,
    css: `.comic-3951{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 12px;overflow:hidden;border:4px solid #111;background:#111827;color:#fff;box-shadow:7px 7px 0 #94a3b8;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3951::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.11) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3951__owl{position:relative;z-index:2;width:42px;height:40px;flex:0 0 42px;border:3px solid #111;background:#e2e8f0;box-shadow:3px 3px 0 #64748b;clip-path:polygon(0 0,30% 12%,50% 0,70% 12%,100% 0,88% 74%,50% 100%,12% 74%);transition:transform .2s ease,background .18s ease}
.comic-3951__eye{position:absolute;top:14px;width:8px;height:6px;border:2px solid #111;background:#ef4444}
.comic-3951__eye--left{left:8px;transform:rotate(8deg)}
.comic-3951__eye--right{right:8px;transform:rotate(-8deg)}
.comic-3951__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3951__text small{font-size:6px;font-weight:900;letter-spacing:1.2px;color:#cbd5e1}
.comic-3951__text strong{margin-top:3px;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:1px}
.comic-3951__moon{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#e2e8f0;color:#111;box-shadow:2px 2px 0 #64748b;font-size:13px;transition:transform .25s ease,background .18s ease}
.comic-3951:hover{background:#0f172a;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #94a3b8}
.comic-3951:hover .comic-3951__owl{background:#fff;transform:rotate(-7deg) scale(1.1)}
.comic-3951:hover .comic-3951__moon{background:#fde047;transform:rotate(180deg) scale(1.1)}
.comic-3951:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3952,
    name: "Batman Dark Knight Button",
    preview: (
      <button type="button" className="comic-3952">
        <span className="comic-3952__bat">
          <i className="ri-moon-clear-fill"></i>
        </span>

        <span className="comic-3952__text">
          <small>GOTHAM</small>
          <strong>BATMAN</strong>
        </span>

        <span className="comic-3952__tag">KNIGHT</span>
      </button>
    ),
    html: `<button type="button" class="comic-3952">
    <span class="comic-3952__bat">
        <i class="ri-moon-clear-fill"></i>
    </span>

    <span class="comic-3952__text">
        <small>GOTHAM</small>
        <strong>BATMAN</strong>
    </span>

    <span class="comic-3952__tag">KNIGHT</span>
</button>`,
    css: `.comic-3952{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 12px;overflow:visible;border:4px solid #111;background:#111827;color:#fff;box-shadow:7px 7px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3952::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.1) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3952__bat{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-5deg);transition:transform .2s ease,background .18s ease}
.comic-3952__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3952__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fde68a}
.comic-3952__text strong{margin-top:3px;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:.6px}
.comic-3952__tag{position:absolute;right:-13px;top:-13px;z-index:4;padding:5px 6px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font:900 6px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3952:hover{background:#0f172a;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #fde047}
.comic-3952:hover .comic-3952__bat{background:#fff;transform:rotate(8deg) scale(1.1)}
.comic-3952:hover .comic-3952__tag{background:#60a5fa;transform:rotate(-7deg) scale(1.08)}
.comic-3952:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3953,
    name: "Nightwing Bludhaven Button",
    preview: (
      <button type="button" className="comic-3953">
        <span className="comic-3953__wing">
          <i className="ri-flashlight-line"></i>
        </span>

        <span className="comic-3953__text">
          <small>BLÜDHAVEN</small>
          <strong>NIGHTWING</strong>
        </span>

        <span className="comic-3953__slash"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3953">
    <span class="comic-3953__wing">
        <i class="ri-flashlight-line"></i>
    </span>

    <span class="comic-3953__text">
        <small>BLÜDHAVEN</small>
        <strong>NIGHTWING</strong>
    </span>

    <span class="comic-3953__slash"></span>
</button>`,
    css: `.comic-3953{position:relative;width:200px;height:61px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#172554;color:#fff;box-shadow:7px 7px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3953::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 14px,rgba(96,165,250,.12) 14px 17px)}
.comic-3953__wing{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-6deg);transition:transform .2s ease,background .18s ease}
.comic-3953__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3953__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#93c5fd}
.comic-3953__text strong{margin-top:3px;font:900 13px/1 Arial Black,Arial,sans-serif;letter-spacing:.4px}
.comic-3953__slash{position:absolute;right:-28px;top:26px;width:85px;height:7px;border:2px solid #111;background:#60a5fa;transform:rotate(-18deg);transition:transform .25s ease}
.comic-3953:hover{background:#1e3a8a;transform:translate(-3px,-2px);box-shadow:10px 10px 0 #2563eb}
.comic-3953:hover .comic-3953__wing{background:#60a5fa;transform:rotate(8deg) scale(1.1)}
.comic-3953:hover .comic-3953__slash{transform:translateX(-44px) rotate(-18deg) scaleX(1.35)}
.comic-3953:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3954,
    name: "Robin Sidekick Button",
    preview: (
      <button type="button" className="comic-3954">
        <span className="comic-3954__badge">R</span>

        <span className="comic-3954__text">
          <small>BOY WONDER</small>
          <strong>ROBIN</strong>
        </span>

        <span className="comic-3954__go">GO!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3954">
    <span class="comic-3954__badge">R</span>

    <span class="comic-3954__text">
        <small>BOY WONDER</small>
        <strong>ROBIN</strong>
    </span>

    <span class="comic-3954__go">GO!</span>
</button>`,
    css: `.comic-3954{position:relative;width:180px;height:60px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#dc2626;color:#fff;box-shadow:7px 7px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(-1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3954::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.19) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3954__badge{position:relative;z-index:2;width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:3px 3px 0 #16a34a;font:900 18px/1 Arial Black,Arial,sans-serif;transform:rotate(-7deg);transition:transform .2s ease,background .18s ease}
.comic-3954__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3954__text small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#fecaca}
.comic-3954__text strong{margin-top:3px;font:900 17px/1 Arial Black,Arial,sans-serif;letter-spacing:.6px}
.comic-3954__go{position:absolute;right:-13px;bottom:-12px;z-index:4;padding:5px 7px;border:3px solid #111;background:#16a34a;color:#fff;box-shadow:3px 3px 0 #111;font:900 7px/1 Arial Black,Arial,sans-serif;transform:rotate(-7deg);transition:transform .18s ease,background .18s ease}
.comic-3954:hover{background:#b91c1c;transform:translate(-2px,-2px) rotate(2deg);box-shadow:10px 10px 0 #fde047}
.comic-3954:hover .comic-3954__badge{background:#fff;transform:rotate(8deg) scale(1.1)}
.comic-3954:hover .comic-3954__go{background:#2563eb;transform:rotate(8deg) scale(1.1)}
.comic-3954:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3955,
    name: "Batgirl Gotham Button",
    preview: (
      <button type="button" className="comic-3955">
        <span className="comic-3955__icon">
          <i className="ri-star-fill"></i>
        </span>

        <span className="comic-3955__text">
          <small>GOTHAM HERO</small>
          <strong>BATGIRL</strong>
        </span>

        <span className="comic-3955__signal">!</span>
      </button>
    ),
    html: `<button type="button" class="comic-3955">
    <span class="comic-3955__icon">
        <i class="ri-star-fill"></i>
    </span>

    <span class="comic-3955__text">
        <small>GOTHAM HERO</small>
        <strong>BATGIRL</strong>
    </span>

    <span class="comic-3955__signal">!</span>
</button>`,
    css: `.comic-3955{position:relative;width:190px;height:61px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#6b21a8;color:#fff;box-shadow:7px 7px 0 #fde047;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3955::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-30deg,transparent 0 13px,rgba(253,224,71,.1) 13px 16px)}
.comic-3955__icon{position:relative;z-index:2;width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;border-radius:50%;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font-size:17px;transition:transform .2s ease,background .18s ease}
.comic-3955__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3955__text small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#e9d5ff}
.comic-3955__text strong{margin-top:3px;font:900 15px/1 Arial Black,Arial,sans-serif;letter-spacing:.5px}
.comic-3955__signal{position:relative;z-index:2;width:27px;height:27px;display:grid;place-items:center;border:3px solid #111;background:#fde047;color:#111;box-shadow:2px 2px 0 #111;font:900 13px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg);transition:transform .18s ease,background .18s ease}
.comic-3955:hover{background:#581c87;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #fde047}
.comic-3955:hover .comic-3955__icon{background:#fff;transform:rotate(15deg) scale(1.1)}
.comic-3955:hover .comic-3955__signal{background:#ef4444;color:#fff;transform:rotate(-8deg) scale(1.12)}
.comic-3955:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3956,
    name: "Red Hood Outlaw Button",
    preview: (
      <button type="button" className="comic-3956">
        <span className="comic-3956__helmet">
          <span></span>
        </span>

        <span className="comic-3956__text">
          <small>OUTLAW</small>
          <strong>RED HOOD</strong>
        </span>

        <span className="comic-3956__target"></span>
      </button>
    ),
    html: `<button type="button" class="comic-3956">
    <span class="comic-3956__helmet">
        <span></span>
    </span>

    <span class="comic-3956__text">
        <small>OUTLAW</small>
        <strong>RED HOOD</strong>
    </span>

    <span class="comic-3956__target"></span>
</button>`,
    css: `.comic-3956{position:relative;width:195px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:hidden;border:4px solid #111;background:#18181b;color:#fff;box-shadow:7px 7px 0 #dc2626;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3956::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(220,38,38,.16) 1.2px,transparent 1.5px);background-size:7px 7px}
.comic-3956__helmet{position:relative;z-index:2;width:41px;height:41px;flex:0 0 41px;border:3px solid #111;border-radius:48% 48% 42% 42%;background:#dc2626;box-shadow:3px 3px 0 #111;transition:transform .2s ease,background .18s ease}
.comic-3956__helmet::before,.comic-3956__helmet::after{content:"";position:absolute;top:13px;width:9px;height:5px;border:2px solid #111;background:#fff}
.comic-3956__helmet::before{left:5px;transform:rotate(7deg)}
.comic-3956__helmet::after{right:5px;transform:rotate(-7deg)}
.comic-3956__helmet span{position:absolute;left:12px;bottom:5px;width:13px;height:5px;border-bottom:3px solid #111}
.comic-3956__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.comic-3956__text small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#fca5a5}
.comic-3956__text strong{margin-top:3px;font:900 14px/1 Arial Black,Arial,sans-serif;letter-spacing:.4px}
.comic-3956__target{position:relative;z-index:2;width:26px;height:26px;border:3px solid #dc2626;border-radius:50%;transition:transform .2s ease,border-color .18s ease}
.comic-3956__target::before,.comic-3956__target::after{content:"";position:absolute;background:#dc2626}
.comic-3956__target::before{left:50%;top:-5px;width:3px;height:30px;transform:translateX(-50%)}
.comic-3956__target::after{left:-5px;top:50%;width:30px;height:3px;transform:translateY(-50%)}
.comic-3956:hover{background:#09090b;transform:translate(-2px,-2px);box-shadow:10px 10px 0 #dc2626}
.comic-3956:hover .comic-3956__helmet{background:#ef4444;transform:rotate(-7deg) scale(1.1)}
.comic-3956:hover .comic-3956__target{border-color:#fff;transform:rotate(90deg) scale(1.12)}
.comic-3956:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3957,
    name: "Azrael Knight Button",
    preview: (
      <button type="button" className="comic-3957">
        <span className="comic-3957__blade">
          <i className="ri-sword-fill"></i>
        </span>

        <span className="comic-3957__text">
          <small>GOTHAM KNIGHT</small>
          <strong>AZRAEL</strong>
        </span>

        <span className="comic-3957__cross">+</span>
      </button>
    ),
    html: `<button type="button" class="comic-3957">
    <span class="comic-3957__blade">
        <i class="ri-sword-fill"></i>
    </span>

    <span class="comic-3957__text">
        <small>GOTHAM KNIGHT</small>
        <strong>AZRAEL</strong>
    </span>

    <span class="comic-3957__cross">+</span>
</button>`,
    css: `.comic-3957{position:relative;width:190px;height:62px;display:inline-flex;align-items:center;gap:10px;padding:0 13px;overflow:visible;border:4px solid #111;background:#991b1b;color:#fff;box-shadow:7px 7px 0 #d97706;font-family:Arial,Helvetica,sans-serif;cursor:pointer;transform:rotate(1deg);transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3957::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 14px,rgba(253,224,71,.1) 14px 17px)}
.comic-3957__blade{position:relative;z-index:2;width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#fde047;color:#991b1b;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-6deg);transition:transform .2s ease,background .18s ease}
.comic-3957__text{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
.comic-3957__text small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#fecaca}
.comic-3957__text strong{margin-top:3px;font:900 16px/1 Arial Black,Arial,sans-serif;letter-spacing:.6px}
.comic-3957__cross{position:absolute;right:-12px;top:-13px;z-index:4;width:30px;height:30px;display:grid;place-items:center;border:3px solid #111;background:#d97706;color:#fff;box-shadow:3px 3px 0 #111;font:900 15px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .18s ease,background .18s ease}
.comic-3957:hover{background:#7f1d1d;transform:translate(-2px,-2px) rotate(-2deg);box-shadow:10px 10px 0 #d97706}
.comic-3957:hover .comic-3957__blade{background:#fff;transform:rotate(10deg) scale(1.1)}
.comic-3957:hover .comic-3957__cross{background:#fde047;color:#111;transform:rotate(-8deg) scale(1.12)}
.comic-3957:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #111}`,
  },
  {
    id: 3958,
    name: "Batman Command Search",
    preview: (
      <section className="comic-3958">
        <div className="comic-3958__header">
          <div>
            <span className="comic-3958__eyebrow">BATCOMPUTER</span>
            <h3>SEARCH GOTHAM</h3>
          </div>

          <span className="comic-3958__status">
            <span></span>
            ONLINE
          </span>
        </div>

        <label className="comic-3958__search">
          <i className="ri-search-line"></i>
          <input
            type="search"
            placeholder="Search case, suspect, district..."
          />
          <kbd>⌘ K</kbd>
        </label>

        <div className="comic-3958__filters">
          <button
            type="button"
            className="comic-3958__filter comic-3958__filter--active"
          >
            ALL
          </button>
          <button type="button" className="comic-3958__filter">
            CASES
          </button>
          <button type="button" className="comic-3958__filter">
            SUSPECTS
          </button>
        </div>

        <div className="comic-3958__results">
          <button type="button" className="comic-3958__result">
            <span className="comic-3958__result-icon">
              <i className="ri-file-search-line"></i>
            </span>

            <span>
              <strong>Case #0917</strong>
              <small>Downtown · Active investigation</small>
            </span>

            <i className="ri-arrow-right-line"></i>
          </button>

          <button type="button" className="comic-3958__result">
            <span className="comic-3958__result-icon">
              <i className="ri-map-pin-2-line"></i>
            </span>

            <span>
              <strong>Crime Alley</strong>
              <small>Priority surveillance zone</small>
            </span>

            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3958">
    <div class="comic-3958__header">
        <div>
            <span class="comic-3958__eyebrow">BATCOMPUTER</span>
            <h3>SEARCH GOTHAM</h3>
        </div>

        <span class="comic-3958__status">
            <span></span>
            ONLINE
        </span>
    </div>

    <label class="comic-3958__search">
        <i class="ri-search-line"></i>
        <input type="search" placeholder="Search case, suspect, district...">
        <kbd>⌘ K</kbd>
    </label>

    <div class="comic-3958__filters">
        <button type="button" class="comic-3958__filter comic-3958__filter--active">ALL</button>
        <button type="button" class="comic-3958__filter">CASES</button>
        <button type="button" class="comic-3958__filter">SUSPECTS</button>
    </div>

    <div class="comic-3958__results">
        <button type="button" class="comic-3958__result">
            <span class="comic-3958__result-icon">
                <i class="ri-file-search-line"></i>
            </span>

            <span>
                <strong>Case #0917</strong>
                <small>Downtown · Active investigation</small>
            </span>

            <i class="ri-arrow-right-line"></i>
        </button>

        <button type="button" class="comic-3958__result">
            <span class="comic-3958__result-icon">
                <i class="ri-map-pin-2-line"></i>
            </span>

            <span>
                <strong>Crime Alley</strong>
                <small>Priority surveillance zone</small>
            </span>

            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3958{width:360px;max-width:100%;padding:16px;border:4px solid #111;background:#111827;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif;position:relative;overflow:hidden}
.comic-3958::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1.1px,transparent 1.4px);background-size:8px 8px;pointer-events:none}
.comic-3958__header{position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
.comic-3958__eyebrow{display:block;color:#facc15;font-size:6px;font-weight:900;letter-spacing:1.7px}
.comic-3958__header h3{margin:4px 0 0;font:900 19px/1 Arial Black,Arial,sans-serif;letter-spacing:-.4px}
.comic-3958__status{display:flex;align-items:center;gap:5px;padding:5px 6px;border:2px solid #111;background:#dcfce7;color:#111;box-shadow:2px 2px 0 #facc15;font-size:6px;font-weight:900}
.comic-3958__status>span{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3958__search{position:relative;z-index:2;height:44px;display:flex;align-items:center;gap:8px;margin-top:15px;padding:0 9px;border:3px solid #111;background:#fff;color:#111;box-shadow:4px 4px 0 #facc15}
.comic-3958__search>i{font-size:16px}
.comic-3958__search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:#111;font-size:9px;font-weight:700}
.comic-3958__search input::placeholder{color:#71717a}
.comic-3958__search kbd{padding:4px 5px;border:2px solid #111;background:#e5e7eb;font:900 6px/1 Arial,Helvetica,sans-serif}
.comic-3958__filters{position:relative;z-index:2;display:flex;gap:6px;margin-top:12px}
.comic-3958__filter{padding:6px 8px;border:2px solid #111;background:#374151;color:#fff;font-size:6px;font-weight:900;letter-spacing:.5px;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3958__filter--active{background:#facc15;color:#111}
.comic-3958__filter:hover{background:#fff;color:#111;transform:translateY(-2px)}
.comic-3958__results{position:relative;z-index:2;display:grid;gap:7px;margin-top:12px}
.comic-3958__result{width:100%;display:flex;align-items:center;gap:9px;padding:8px;border:3px solid #111;background:#f8fafc;color:#111;box-shadow:3px 3px 0 #4b5563;text-align:left;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3958__result-icon{width:31px;height:31px;display:grid;place-items:center;flex:0 0 31px;border:2px solid #111;background:#facc15;font-size:14px}
.comic-3958__result>span:nth-child(2){display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3958__result strong{font-size:8px;font-weight:900}
.comic-3958__result small{margin-top:3px;color:#52525b;font-size:6px;font-weight:700}
.comic-3958__result>i{font-size:14px;transition:transform .18s ease}
.comic-3958__result:hover{background:#dbeafe;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #facc15}
.comic-3958__result:hover>i{transform:translateX(3px)}`,
  },
  {
    id: 3959,
    name: "Batman Case File Card",
    preview: (
      <article className="comic-3959">
        <div className="comic-3959__top">
          <span className="comic-3959__case">CASE #042</span>

          <button type="button" className="comic-3959__menu">
            <i className="ri-more-2-fill"></i>
          </button>
        </div>

        <div className="comic-3959__title">
          <span className="comic-3959__icon">
            <i className="ri-fingerprint-line"></i>
          </span>

          <div>
            <small>ACTIVE INVESTIGATION</small>
            <h3>GOTHAM DOCKS</h3>
          </div>
        </div>

        <p className="comic-3959__description">
          Unidentified shipments detected near Pier 39. Evidence suggests an
          organized operation.
        </p>

        <div className="comic-3959__evidence">
          <div>
            <span>07</span>
            <small>CLUES</small>
          </div>

          <div>
            <span>03</span>
            <small>SUSPECTS</small>
          </div>

          <div>
            <span>82%</span>
            <small>MATCH</small>
          </div>
        </div>

        <div className="comic-3959__footer">
          <span>
            <i className="ri-time-line"></i>
            Updated 12m ago
          </span>

          <button type="button">
            OPEN FILE
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </article>
    ),
    html: `<article class="comic-3959">
    <div class="comic-3959__top">
        <span class="comic-3959__case">CASE #042</span>

        <button type="button" class="comic-3959__menu">
            <i class="ri-more-2-fill"></i>
        </button>
    </div>

    <div class="comic-3959__title">
        <span class="comic-3959__icon">
            <i class="ri-fingerprint-line"></i>
        </span>

        <div>
            <small>ACTIVE INVESTIGATION</small>
            <h3>GOTHAM DOCKS</h3>
        </div>
    </div>

    <p class="comic-3959__description">
        Unidentified shipments detected near Pier 39. Evidence suggests an organized operation.
    </p>

    <div class="comic-3959__evidence">
        <div>
            <span>07</span>
            <small>CLUES</small>
        </div>

        <div>
            <span>03</span>
            <small>SUSPECTS</small>
        </div>

        <div>
            <span>82%</span>
            <small>MATCH</small>
        </div>
    </div>

    <div class="comic-3959__footer">
        <span>
            <i class="ri-time-line"></i>
            Updated 12m ago
        </span>

        <button type="button">
            OPEN FILE
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</article>`,
    css: `.comic-3959{position:relative;width:340px;max-width:100%;padding:16px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;overflow:hidden;transition:transform .18s ease,box-shadow .18s ease}
.comic-3959::before{content:"";position:absolute;right:-42px;top:-48px;width:130px;height:130px;border:4px solid #111;border-radius:50%;background:#facc15;opacity:.9}
.comic-3959__top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3959__case{padding:5px 7px;border:3px solid #111;background:#111827;color:#facc15;box-shadow:3px 3px 0 #facc15;font-size:7px;font-weight:900;letter-spacing:.8px;transform:rotate(-2deg)}
.comic-3959__menu{width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font-size:14px;cursor:pointer}
.comic-3959__title{position:relative;z-index:2;display:flex;align-items:center;gap:11px;margin-top:17px}
.comic-3959__icon{width:48px;height:48px;display:grid;place-items:center;flex:0 0 48px;border:3px solid #111;background:#111827;color:#facc15;box-shadow:4px 4px 0 #facc15;font-size:22px;transform:rotate(-3deg);transition:transform .18s ease}
.comic-3959__title small{font-size:6px;font-weight:900;letter-spacing:1.2px;color:#64748b}
.comic-3959__title h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3959__description{position:relative;z-index:2;margin:15px 0 0;color:#475569;font-size:8px;font-weight:700;line-height:1.5}
.comic-3959__evidence{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:14px}
.comic-3959__evidence div{padding:9px 5px;border:3px solid #111;background:#fff;text-align:center}
.comic-3959__evidence span{display:block;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3959__evidence small{display:block;margin-top:4px;font-size:5px;font-weight:900;letter-spacing:.8px;color:#64748b}
.comic-3959__evidence div:nth-child(3){background:#facc15}
.comic-3959__footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:14px;padding-top:12px;border-top:3px solid #111}
.comic-3959__footer>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:800;color:#64748b}
.comic-3959__footer button{display:flex;align-items:center;gap:5px;padding:7px 9px;border:3px solid #111;background:#111827;color:#fff;box-shadow:3px 3px 0 #facc15;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3959:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3959:hover .comic-3959__icon{transform:rotate(5deg) scale(1.06)}
.comic-3959__footer button:hover{background:#2563eb;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3960,
    name: "Batman Signal Alert",
    preview: (
      <aside className="comic-3960" role="alert">
        <div className="comic-3960__signal">
          <i className="ri-alarm-warning-fill"></i>
        </div>

        <div className="comic-3960__content">
          <span className="comic-3960__label">BAT-SIGNAL</span>
          <strong>GOTHAM NEEDS YOU</strong>
          <p>Priority incident detected in the Diamond District.</p>

          <div className="comic-3960__meta">
            <span>
              <i className="ri-map-pin-2-fill"></i>
              2.4 KM
            </span>

            <span>
              <i className="ri-timer-flash-line"></i>
              URGENT
            </span>
          </div>
        </div>

        <button
          type="button"
          className="comic-3960__action"
          aria-label="Open alert"
        >
          <i className="ri-arrow-right-up-line"></i>
        </button>
      </aside>
    ),
    html: `<aside class="comic-3960" role="alert">
    <div class="comic-3960__signal">
        <i class="ri-alarm-warning-fill"></i>
    </div>

    <div class="comic-3960__content">
        <span class="comic-3960__label">BAT-SIGNAL</span>
        <strong>GOTHAM NEEDS YOU</strong>
        <p>Priority incident detected in the Diamond District.</p>

        <div class="comic-3960__meta">
            <span>
                <i class="ri-map-pin-2-fill"></i>
                2.4 KM
            </span>

            <span>
                <i class="ri-timer-flash-line"></i>
                URGENT
            </span>
        </div>
    </div>

    <button type="button" class="comic-3960__action" aria-label="Open alert">
        <i class="ri-arrow-right-up-line"></i>
    </button>
</aside>`,
    css: `.comic-3960{position:relative;width:360px;max-width:100%;display:flex;align-items:center;gap:12px;padding:13px;border:4px solid #111;background:#111827;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif;overflow:hidden;transition:transform .18s ease,box-shadow .18s ease}
.comic-3960::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 14px,rgba(250,204,21,.08) 14px 17px)}
.comic-3960__signal{position:relative;z-index:2;width:54px;height:54px;display:grid;place-items:center;flex:0 0 54px;border:4px solid #111;border-radius:50%;background:#facc15;color:#111;box-shadow:4px 4px 0 #111;font-size:24px;transform:rotate(-5deg);transition:transform .2s ease,background .18s ease}
.comic-3960__content{position:relative;z-index:2;display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3960__label{align-self:flex-start;padding:3px 5px;border:2px solid #111;background:#dc2626;color:#fff;font-size:5px;font-weight:900;letter-spacing:1px}
.comic-3960__content>strong{margin-top:5px;font:900 12px/1 Arial Black,Arial,sans-serif}
.comic-3960__content>p{margin:5px 0 0;color:#cbd5e1;font-size:7px;font-weight:700;line-height:1.4}
.comic-3960__meta{display:flex;gap:6px;margin-top:8px}
.comic-3960__meta span{display:flex;align-items:center;gap:3px;padding:4px 5px;border:2px solid #111;background:#374151;color:#fff;font-size:5px;font-weight:900}
.comic-3960__action{position:relative;z-index:2;width:36px;height:36px;display:grid;place-items:center;flex:0 0 36px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #facc15;font-size:17px;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3960:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #facc15}
.comic-3960:hover .comic-3960__signal{background:#fff;transform:rotate(7deg) scale(1.08)}
.comic-3960__action:hover{background:#facc15;transform:translate(-2px,-2px) rotate(6deg)}`,
  },
  {
    id: 3961,
    name: "Riddler Puzzle Input",
    preview: (
      <section className="comic-3961">
        <div className="comic-3961__header">
          <span className="comic-3961__question">?</span>

          <div>
            <small>RIDDLE #031</small>
            <h3>SOLVE THE QUESTION</h3>
          </div>

          <span className="comic-3961__points">+250</span>
        </div>

        <p className="comic-3961__riddle">
          “The more you take, the more you leave behind. What am I?”
        </p>

        <label className="comic-3961__answer">
          <span>YOUR ANSWER</span>

          <div>
            <input type="text" placeholder="Type your answer..." />

            <button type="button">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </label>

        <div className="comic-3961__footer">
          <span>
            <i className="ri-lightbulb-flash-line"></i>2 HINTS LEFT
          </span>

          <button type="button">USE HINT</button>
        </div>
      </section>
    ),
    html: `<section class="comic-3961">
    <div class="comic-3961__header">
        <span class="comic-3961__question">?</span>

        <div>
            <small>RIDDLE #031</small>
            <h3>SOLVE THE QUESTION</h3>
        </div>

        <span class="comic-3961__points">+250</span>
    </div>

    <p class="comic-3961__riddle">
        “The more you take, the more you leave behind. What am I?”
    </p>

    <label class="comic-3961__answer">
        <span>YOUR ANSWER</span>

        <div>
            <input type="text" placeholder="Type your answer...">

            <button type="button">
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </label>

    <div class="comic-3961__footer">
        <span>
            <i class="ri-lightbulb-flash-line"></i>
            2 HINTS LEFT
        </span>

        <button type="button">USE HINT</button>
    </div>
</section>`,
    css: `.comic-3961{position:relative;width:350px;max-width:100%;padding:16px;border:4px solid #111;background:#16a34a;color:#111;box-shadow:8px 8px 0 #6b21a8;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3961::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3961__header{position:relative;z-index:2;display:flex;align-items:center;gap:10px}
.comic-3961__question{width:47px;height:47px;display:grid;place-items:center;flex:0 0 47px;border:3px solid #111;border-radius:50%;background:#a3e635;box-shadow:4px 4px 0 #111;font:900 27px/1 Arial Black,Arial,sans-serif;transform:rotate(-7deg);transition:transform .2s ease}
.comic-3961__header>div{min-width:0;flex:1}
.comic-3961__header small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#14532d}
.comic-3961__header h3{margin:4px 0 0;font:900 15px/1 Arial Black,Arial,sans-serif}
.comic-3961__points{padding:5px 6px;border:3px solid #111;background:#6b21a8;color:#fff;box-shadow:2px 2px 0 #111;font-size:7px;font-weight:900;transform:rotate(4deg)}
.comic-3961__riddle{position:relative;z-index:2;margin:15px 0 0;padding:12px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;font-size:9px;font-weight:800;font-style:italic;line-height:1.5}
.comic-3961__answer{position:relative;z-index:2;display:block;margin-top:13px}
.comic-3961__answer>span{font-size:6px;font-weight:900;letter-spacing:1px}
.comic-3961__answer>div{display:flex;height:42px;margin-top:5px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #6b21a8}
.comic-3961__answer input{min-width:0;flex:1;padding:0 10px;border:0;outline:0;background:transparent;color:#111;font-size:8px;font-weight:700}
.comic-3961__answer button{width:42px;border:0;border-left:3px solid #111;background:#a3e635;color:#111;font-size:16px;cursor:pointer;transition:background .18s ease,transform .18s ease}
.comic-3961__footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:14px}
.comic-3961__footer>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:900}
.comic-3961__footer>span i{font-size:12px}
.comic-3961__footer>button{padding:6px 8px;border:3px solid #111;background:#fde047;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3961:hover .comic-3961__question{transform:rotate(7deg) scale(1.08)}
.comic-3961__answer button:hover{background:#6b21a8;color:#fff}
.comic-3961__footer>button:hover{background:#fff;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3962,
    name: "Riddler Mystery Tabs",
    preview: (
      <section className="comic-3962">
        <div className="comic-3962__heading">
          <div>
            <span>MYSTERY DATABASE</span>
            <h3>THE RIDDLER</h3>
          </div>

          <span className="comic-3962__mark">?</span>
        </div>

        <div className="comic-3962__tabs">
          <button
            type="button"
            className="comic-3962__tab comic-3962__tab--active"
          >
            <i className="ri-question-mark"></i>
            RIDDLES
          </button>

          <button type="button" className="comic-3962__tab">
            <i className="ri-lock-2-line"></i>
            LOCKED
          </button>

          <button type="button" className="comic-3962__tab">
            <i className="ri-check-double-line"></i>
            SOLVED
          </button>
        </div>

        <div className="comic-3962__panel">
          <div className="comic-3962__panel-top">
            <span>QUESTION 07</span>
            <strong>HARD</strong>
          </div>

          <p>
            Which room has no doors, no windows, and yet contains something
            inside?
          </p>

          <div className="comic-3962__progress">
            <span></span>
          </div>

          <div className="comic-3962__stats">
            <span>
              <strong>7</strong>
              CURRENT
            </span>

            <span>
              <strong>18</strong>
              SOLVED
            </span>

            <span>
              <strong>31</strong>
              TOTAL
            </span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3962">
    <div class="comic-3962__heading">
        <div>
            <span>MYSTERY DATABASE</span>
            <h3>THE RIDDLER</h3>
        </div>

        <span class="comic-3962__mark">?</span>
    </div>

    <div class="comic-3962__tabs">
        <button type="button" class="comic-3962__tab comic-3962__tab--active">
            <i class="ri-question-mark"></i>
            RIDDLES
        </button>

        <button type="button" class="comic-3962__tab">
            <i class="ri-lock-2-line"></i>
            LOCKED
        </button>

        <button type="button" class="comic-3962__tab">
            <i class="ri-check-double-line"></i>
            SOLVED
        </button>
    </div>

    <div class="comic-3962__panel">
        <div class="comic-3962__panel-top">
            <span>QUESTION 07</span>
            <strong>HARD</strong>
        </div>

        <p>
            Which room has no doors, no windows, and yet contains something inside?
        </p>

        <div class="comic-3962__progress">
            <span></span>
        </div>

        <div class="comic-3962__stats">
            <span>
                <strong>7</strong>
                CURRENT
            </span>

            <span>
                <strong>18</strong>
                SOLVED
            </span>

            <span>
                <strong>31</strong>
                TOTAL
            </span>
        </div>
    </div>
</section>`,
    css: `.comic-3962{position:relative;width:360px;max-width:100%;padding:15px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #6b21a8;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3962::before{content:"?";position:absolute;right:-7px;top:-22px;color:#dcfce7;font:900 130px/1 Arial Black,Arial,sans-serif;transform:rotate(10deg);pointer-events:none}
.comic-3962__heading{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3962__heading>div>span{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#16a34a}
.comic-3962__heading h3{margin:4px 0 0;font:900 19px/1 Arial Black,Arial,sans-serif}
.comic-3962__mark{width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#16a34a;color:#fff;box-shadow:3px 3px 0 #6b21a8;font:900 22px/1 Arial Black,Arial,sans-serif;transform:rotate(8deg);transition:transform .2s ease}
.comic-3962__tabs{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:14px}
.comic-3962__tab{display:flex;align-items:center;justify-content:center;gap:4px;padding:7px 4px;border:3px solid #111;background:#e5e7eb;color:#111;font-size:5px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3962__tab i{font-size:11px}
.comic-3962__tab--active{background:#16a34a;color:#fff;box-shadow:3px 3px 0 #6b21a8}
.comic-3962__tab:hover{background:#a3e635;transform:translateY(-2px);color:#111}
.comic-3962__panel{position:relative;z-index:2;margin-top:10px;padding:12px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3962__panel-top{display:flex;align-items:center;justify-content:space-between}
.comic-3962__panel-top span{font-size:6px;font-weight:900;letter-spacing:1px}
.comic-3962__panel-top strong{padding:4px 5px;border:2px solid #111;background:#6b21a8;color:#fff;font-size:5px;letter-spacing:.7px}
.comic-3962__panel p{margin:10px 0 0;font-size:8px;font-weight:800;line-height:1.5}
.comic-3962__progress{height:13px;margin-top:12px;overflow:hidden;border:3px solid #111;background:#e5e7eb}
.comic-3962__progress span{display:block;width:58%;height:100%;background:#16a34a;transition:width .25s ease,background .18s ease}
.comic-3962__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:11px}
.comic-3962__stats>span{display:flex;flex-direction:column;align-items:center;padding:7px 3px;border:2px solid #111;background:#dcfce7;font-size:5px;font-weight:900}
.comic-3962__stats strong{margin-bottom:3px;font:900 12px/1 Arial Black,Arial,sans-serif}
.comic-3962:hover .comic-3962__mark{transform:rotate(-8deg) scale(1.08)}
.comic-3962:hover .comic-3962__progress span{width:72%;background:#6b21a8}`,
  },
  {
    id: 3963,
    name: "Riddler Quiz Card",
    preview: (
      <section className="comic-3963">
        <div className="comic-3963__top">
          <span className="comic-3963__number">08</span>

          <div>
            <small>THE RIDDLER ASKS</small>
            <h3>CHOOSE WISELY</h3>
          </div>

          <span className="comic-3963__timer">
            <i className="ri-time-line"></i>
            00:24
          </span>
        </div>

        <p className="comic-3963__question">
          What gets wetter the more it dries?
        </p>

        <div className="comic-3963__answers">
          <label>
            <input type="radio" name="comic-3963-answer" />
            <span className="comic-3963__radio"></span>
            <strong>A</strong>A sponge
          </label>

          <label>
            <input type="radio" name="comic-3963-answer" />
            <span className="comic-3963__radio"></span>
            <strong>B</strong>A towel
          </label>

          <label>
            <input type="radio" name="comic-3963-answer" />
            <span className="comic-3963__radio"></span>
            <strong>C</strong>A cloud
          </label>
        </div>

        <div className="comic-3963__bottom">
          <span>QUESTION 8 / 10</span>

          <button type="button">
            SUBMIT
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3963">
    <div class="comic-3963__top">
        <span class="comic-3963__number">08</span>

        <div>
            <small>THE RIDDLER ASKS</small>
            <h3>CHOOSE WISELY</h3>
        </div>

        <span class="comic-3963__timer">
            <i class="ri-time-line"></i>
            00:24
        </span>
    </div>

    <p class="comic-3963__question">
        What gets wetter the more it dries?
    </p>

    <div class="comic-3963__answers">
        <label>
            <input type="radio" name="comic-3963-answer">
            <span class="comic-3963__radio"></span>
            <strong>A</strong>
            A sponge
        </label>

        <label>
            <input type="radio" name="comic-3963-answer">
            <span class="comic-3963__radio"></span>
            <strong>B</strong>
            A towel
        </label>

        <label>
            <input type="radio" name="comic-3963-answer">
            <span class="comic-3963__radio"></span>
            <strong>C</strong>
            A cloud
        </label>
    </div>

    <div class="comic-3963__bottom">
        <span>QUESTION 8 / 10</span>

        <button type="button">
            SUBMIT
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3963{position:relative;width:350px;max-width:100%;padding:15px;border:4px solid #111;background:#581c87;color:#fff;box-shadow:8px 8px 0 #22c55e;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3963::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.12) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3963__top{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3963__number{width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;border:3px solid #111;background:#22c55e;color:#111;box-shadow:3px 3px 0 #111;font:900 16px/1 Arial Black,Arial,sans-serif;transform:rotate(-5deg)}
.comic-3963__top>div{min-width:0;flex:1}
.comic-3963__top small{font-size:6px;font-weight:900;letter-spacing:1.2px;color:#bbf7d0}
.comic-3963__top h3{margin:3px 0 0;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3963__timer{display:flex;align-items:center;gap:4px;padding:5px;border:2px solid #111;background:#fde047;color:#111;font-size:6px;font-weight:900}
.comic-3963__question{position:relative;z-index:2;margin:14px 0 0;padding:10px;border:3px solid #111;background:#fff;color:#111;box-shadow:4px 4px 0 #22c55e;font-size:9px;font-weight:900;line-height:1.4}
.comic-3963__answers{position:relative;z-index:2;display:grid;gap:7px;margin-top:12px}
.comic-3963__answers label{display:flex;align-items:center;gap:7px;padding:8px;border:3px solid #111;background:#f8fafc;color:#111;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:800;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3963__answers input{position:absolute;opacity:0;pointer-events:none}
.comic-3963__radio{width:17px;height:17px;display:grid;place-items:center;flex:0 0 17px;border:3px solid #111;border-radius:50%;background:#fff}
.comic-3963__answers strong{width:22px;height:22px;display:grid;place-items:center;border:2px solid #111;background:#22c55e;font:900 8px/1 Arial Black,Arial,sans-serif}
.comic-3963__answers label:has(input:checked){background:#dcfce7;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #22c55e}
.comic-3963__answers label:has(input:checked) .comic-3963__radio::after{content:"";width:7px;height:7px;border-radius:50%;background:#581c87}
.comic-3963__answers label:hover{background:#f0fdf4}
.comic-3963__bottom{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:13px}
.comic-3963__bottom>span{font-size:6px;font-weight:900;letter-spacing:.8px;color:#d8b4fe}
.comic-3963__bottom button{display:flex;align-items:center;gap:5px;padding:7px 9px;border:3px solid #111;background:#22c55e;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3963__bottom button:hover{background:#fde047;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3964,
    name: "Brave Bold Mission Panel",
    preview: (
      <section className="comic-3964">
        <div className="comic-3964__top">
          <span className="comic-3964__issue">MISSION #17</span>

          <span className="comic-3964__status">
            <span></span>
            ACTIVE
          </span>
        </div>

        <div className="comic-3964__heading">
          <span className="comic-3964__icon">
            <i className="ri-shield-star-fill"></i>
          </span>

          <div>
            <small>BRAVE & BOLD</small>
            <h3>GOTHAM DISTRESS CALL</h3>
          </div>
        </div>

        <p className="comic-3964__description">
          Multiple alarms have been triggered across Gotham. Assemble the team
          and investigate the disturbance.
        </p>

        <div className="comic-3964__info">
          <div>
            <i className="ri-map-pin-2-fill"></i>
            <span>
              <small>LOCATION</small>
              <strong>GOTHAM CITY</strong>
            </span>
          </div>

          <div>
            <i className="ri-timer-flash-fill"></i>
            <span>
              <small>PRIORITY</small>
              <strong>CRITICAL</strong>
            </span>
          </div>
        </div>

        <div className="comic-3964__footer">
          <div className="comic-3964__team">
            <span>B</span>
            <span>BB</span>
            <span>GA</span>
          </div>

          <button type="button">
            ACCEPT
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3964">
    <div class="comic-3964__top">
        <span class="comic-3964__issue">MISSION #17</span>

        <span class="comic-3964__status">
            <span></span>
            ACTIVE
        </span>
    </div>

    <div class="comic-3964__heading">
        <span class="comic-3964__icon">
            <i class="ri-shield-star-fill"></i>
        </span>

        <div>
            <small>BRAVE & BOLD</small>
            <h3>GOTHAM DISTRESS CALL</h3>
        </div>
    </div>

    <p class="comic-3964__description">
        Multiple alarms have been triggered across Gotham. Assemble the team and investigate the disturbance.
    </p>

    <div class="comic-3964__info">
        <div>
            <i class="ri-map-pin-2-fill"></i>
            <span>
                <small>LOCATION</small>
                <strong>GOTHAM CITY</strong>
            </span>
        </div>

        <div>
            <i class="ri-timer-flash-fill"></i>
            <span>
                <small>PRIORITY</small>
                <strong>CRITICAL</strong>
            </span>
        </div>
    </div>

    <div class="comic-3964__footer">
        <div class="comic-3964__team">
            <span>B</span>
            <span>BB</span>
            <span>GA</span>
        </div>

        <button type="button">
            ACCEPT
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3964{position:relative;width:355px;max-width:100%;padding:16px;overflow:hidden;border:4px solid #111;background:#2563eb;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif}
.comic-3964::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3964::after{content:"";position:absolute;right:-70px;top:-85px;width:175px;height:175px;border:5px solid #111;border-radius:50%;background:#facc15}
.comic-3964__top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3964__issue{padding:5px 7px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;letter-spacing:1px;transform:rotate(-2deg)}
.comic-3964__status{display:flex;align-items:center;gap:5px;padding:5px 6px;border:3px solid #111;background:#fff;color:#111;font-size:6px;font-weight:900}
.comic-3964__status>span{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3964__heading{position:relative;z-index:2;display:flex;align-items:center;gap:11px;margin-top:16px}
.comic-3964__icon{width:48px;height:48px;display:grid;place-items:center;flex:0 0 48px;border:4px solid #111;background:#facc15;color:#111;box-shadow:4px 4px 0 #111;font-size:22px;transform:rotate(-4deg);transition:transform .2s ease}
.comic-3964__heading small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#dbeafe}
.comic-3964__heading h3{max-width:210px;margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3964__description{position:relative;z-index:2;margin:14px 0 0;padding:10px;border:3px solid #111;background:#fff;color:#111;box-shadow:4px 4px 0 #111;font-size:8px;font-weight:800;line-height:1.5}
.comic-3964__info{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:12px}
.comic-3964__info>div{display:flex;align-items:center;gap:7px;padding:8px;border:3px solid #111;background:#1d4ed8}
.comic-3964__info i{font-size:17px;color:#facc15}
.comic-3964__info span{display:flex;flex-direction:column}
.comic-3964__info small{font-size:5px;font-weight:900;letter-spacing:.8px;color:#bfdbfe}
.comic-3964__info strong{margin-top:2px;font-size:7px;font-weight:900}
.comic-3964__footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;margin-top:13px}
.comic-3964__team{display:flex}
.comic-3964__team span{width:30px;height:30px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#facc15;color:#111;font-size:6px;font-weight:900}
.comic-3964__team span+span{margin-left:-7px;background:#ef4444;color:#fff}
.comic-3964__team span:nth-child(3){background:#22c55e}
.comic-3964__footer button{display:flex;align-items:center;gap:5px;padding:8px 10px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3964:hover .comic-3964__icon{transform:rotate(6deg) scale(1.08)}
.comic-3964__footer button:hover{background:#fff;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3965,
    name: "Brave Bold Hero Roster",
    preview: (
      <section className="comic-3965">
        <div className="comic-3965__header">
          <div>
            <small>TEAM DATABASE</small>
            <h3>HERO ROSTER</h3>
          </div>

          <span>4 ONLINE</span>
        </div>

        <div className="comic-3965__heroes">
          <button
            type="button"
            className="comic-3965__hero comic-3965__hero--active"
          >
            <span className="comic-3965__avatar">
              <i className="ri-shield-fill"></i>
            </span>

            <span className="comic-3965__name">
              <strong>BATMAN</strong>
              <small>TACTICAL LEAD</small>
            </span>

            <span className="comic-3965__dot"></span>
          </button>

          <button type="button" className="comic-3965__hero">
            <span className="comic-3965__avatar">
              <i className="ri-bug-fill"></i>
            </span>

            <span className="comic-3965__name">
              <strong>BLUE BEETLE</strong>
              <small>TECH SUPPORT</small>
            </span>

            <span className="comic-3965__dot"></span>
          </button>

          <button type="button" className="comic-3965__hero">
            <span className="comic-3965__avatar">
              <i className="ri-arrow-up-circle-fill"></i>
            </span>

            <span className="comic-3965__name">
              <strong>GREEN ARROW</strong>
              <small>RANGED</small>
            </span>

            <span className="comic-3965__dot"></span>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3965">
    <div class="comic-3965__header">
        <div>
            <small>TEAM DATABASE</small>
            <h3>HERO ROSTER</h3>
        </div>

        <span>4 ONLINE</span>
    </div>

    <div class="comic-3965__heroes">
        <button type="button" class="comic-3965__hero comic-3965__hero--active">
            <span class="comic-3965__avatar">
                <i class="ri-shield-fill"></i>
            </span>

            <span class="comic-3965__name">
                <strong>BATMAN</strong>
                <small>TACTICAL LEAD</small>
            </span>

            <span class="comic-3965__dot"></span>
        </button>

        <button type="button" class="comic-3965__hero">
            <span class="comic-3965__avatar">
                <i class="ri-bug-fill"></i>
            </span>

            <span class="comic-3965__name">
                <strong>BLUE BEETLE</strong>
                <small>TECH SUPPORT</small>
            </span>

            <span class="comic-3965__dot"></span>
        </button>

        <button type="button" class="comic-3965__hero">
            <span class="comic-3965__avatar">
                <i class="ri-arrow-up-circle-fill"></i>
            </span>

            <span class="comic-3965__name">
                <strong>GREEN ARROW</strong>
                <small>RANGED</small>
            </span>

            <span class="comic-3965__dot"></span>
        </button>
    </div>
</section>`,
    css: `.comic-3965{position:relative;width:335px;max-width:100%;padding:15px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3965::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(37,99,235,.12) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3965__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3965__header small{font-size:6px;font-weight:900;letter-spacing:1.5px;color:#2563eb}
.comic-3965__header h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3965__header>span{padding:5px 6px;border:3px solid #111;background:#22c55e;color:#111;box-shadow:2px 2px 0 #111;font-size:6px;font-weight:900;transform:rotate(3deg)}
.comic-3965__heroes{position:relative;z-index:2;display:grid;gap:8px;margin-top:13px}
.comic-3965__hero{width:100%;display:flex;align-items:center;gap:9px;padding:8px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;text-align:left;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3965__hero--active{background:#fef08a;box-shadow:4px 4px 0 #2563eb}
.comic-3965__avatar{width:37px;height:37px;display:grid;place-items:center;flex:0 0 37px;border:3px solid #111;background:#2563eb;color:#fff;font-size:17px;transform:rotate(-3deg)}
.comic-3965__hero:nth-child(2) .comic-3965__avatar{background:#38bdf8;color:#111}
.comic-3965__hero:nth-child(3) .comic-3965__avatar{background:#22c55e;color:#111}
.comic-3965__name{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3965__name strong{font:900 9px/1 Arial Black,Arial,sans-serif}
.comic-3965__name small{margin-top:4px;color:#64748b;font-size:5px;font-weight:900;letter-spacing:.7px}
.comic-3965__dot{width:10px;height:10px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3965__hero:hover{background:#dbeafe;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #2563eb}`,
  },
  {
    id: 3966,
    name: "Brave Bold Communicator",
    preview: (
      <section className="comic-3966">
        <div className="comic-3966__screen">
          <div className="comic-3966__screen-top">
            <span>
              <span></span>
              SECURE CHANNEL
            </span>

            <strong>CH. 07</strong>
          </div>

          <div className="comic-3966__caller">
            <span className="comic-3966__portrait">
              <i className="ri-user-star-fill"></i>
            </span>

            <div>
              <small>INCOMING CALL</small>
              <strong>BLUE BEETLE</strong>
              <span>Connected · 00:42</span>
            </div>
          </div>

          <div className="comic-3966__wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="comic-3966__actions">
          <button type="button" aria-label="Mute">
            <i className="ri-mic-off-line"></i>
          </button>

          <button
            type="button"
            className="comic-3966__call"
            aria-label="End call"
          >
            <i className="ri-phone-fill"></i>
          </button>

          <button type="button" aria-label="Speaker">
            <i className="ri-volume-up-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3966">
    <div class="comic-3966__screen">
        <div class="comic-3966__screen-top">
            <span>
                <span></span>
                SECURE CHANNEL
            </span>

            <strong>CH. 07</strong>
        </div>

        <div class="comic-3966__caller">
            <span class="comic-3966__portrait">
                <i class="ri-user-star-fill"></i>
            </span>

            <div>
                <small>INCOMING CALL</small>
                <strong>BLUE BEETLE</strong>
                <span>Connected · 00:42</span>
            </div>
        </div>

        <div class="comic-3966__wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="comic-3966__actions">
        <button type="button" aria-label="Mute">
            <i class="ri-mic-off-line"></i>
        </button>

        <button type="button" class="comic-3966__call" aria-label="End call">
            <i class="ri-phone-fill"></i>
        </button>

        <button type="button" aria-label="Speaker">
            <i class="ri-volume-up-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3966{position:relative;width:305px;max-width:100%;padding:13px;border:4px solid #111;background:#facc15;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;transform:rotate(-1deg)}
.comic-3966__screen{padding:11px;border:4px solid #111;background:#172554;color:#fff;box-shadow:inset 0 0 0 3px #2563eb}
.comic-3966__screen-top{display:flex;align-items:center;justify-content:space-between}
.comic-3966__screen-top>span{display:flex;align-items:center;gap:5px;font-size:5px;font-weight:900;letter-spacing:.8px;color:#bfdbfe}
.comic-3966__screen-top>span>span{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#22c55e}
.comic-3966__screen-top strong{font-size:6px}
.comic-3966__caller{display:flex;align-items:center;gap:10px;margin-top:12px}
.comic-3966__portrait{width:49px;height:49px;display:grid;place-items:center;flex:0 0 49px;border:3px solid #111;background:#38bdf8;color:#111;box-shadow:4px 4px 0 #111;font-size:23px;transform:rotate(-3deg);transition:transform .2s ease}
.comic-3966__caller>div{display:flex;flex-direction:column}
.comic-3966__caller small{font-size:5px;font-weight:900;letter-spacing:1.1px;color:#93c5fd}
.comic-3966__caller strong{margin-top:4px;font:900 13px/1 Arial Black,Arial,sans-serif}
.comic-3966__caller>div>span{margin-top:5px;font-size:6px;font-weight:700;color:#bfdbfe}
.comic-3966__wave{height:26px;display:flex;align-items:center;justify-content:center;gap:4px;margin-top:10px}
.comic-3966__wave span{width:4px;border:1px solid #111;background:#facc15;transition:height .2s ease}
.comic-3966__wave span:nth-child(1){height:9px}
.comic-3966__wave span:nth-child(2){height:17px}
.comic-3966__wave span:nth-child(3){height:11px}
.comic-3966__wave span:nth-child(4){height:23px}
.comic-3966__wave span:nth-child(5){height:14px}
.comic-3966__wave span:nth-child(6){height:20px}
.comic-3966__wave span:nth-child(7){height:8px}
.comic-3966__actions{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:12px}
.comic-3966__actions button{width:39px;height:39px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font-size:16px;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3966__actions .comic-3966__call{background:#ef4444;color:#fff;transform:rotate(135deg)}
.comic-3966:hover .comic-3966__portrait{transform:rotate(5deg) scale(1.07)}
.comic-3966:hover .comic-3966__wave span:nth-child(odd){height:21px}
.comic-3966:hover .comic-3966__wave span:nth-child(even){height:10px}
.comic-3966__actions button:hover{background:#38bdf8;transform:translateY(-2px)}
.comic-3966__actions .comic-3966__call:hover{background:#dc2626;transform:translateY(-2px) rotate(135deg) scale(1.08)}`,
  },
  {
    id: 3967,
    name: "Brave Bold Gadget Selector",
    preview: (
      <section className="comic-3967">
        <div className="comic-3967__header">
          <div>
            <small>UTILITY BELT</small>
            <h3>SELECT GADGET</h3>
          </div>

          <span>03 / 08</span>
        </div>

        <div className="comic-3967__grid">
          <button
            type="button"
            className="comic-3967__item comic-3967__item--active"
          >
            <i className="ri-radar-line"></i>
            <span>SCANNER</span>
          </button>

          <button type="button" className="comic-3967__item">
            <i className="ri-flashlight-fill"></i>
            <span>CHARGE</span>
          </button>

          <button type="button" className="comic-3967__item">
            <i className="ri-radio-button-line"></i>
            <span>BEACON</span>
          </button>

          <button type="button" className="comic-3967__item">
            <i className="ri-wifi-line"></i>
            <span>TRACKER</span>
          </button>
        </div>

        <div className="comic-3967__selected">
          <span>
            <small>EQUIPPED</small>
            <strong>TACTICAL SCANNER</strong>
          </span>

          <span className="comic-3967__battery">
            <span></span>
          </span>

          <strong>84%</strong>
        </div>
      </section>
    ),
    html: `<section class="comic-3967">
    <div class="comic-3967__header">
        <div>
            <small>UTILITY BELT</small>
            <h3>SELECT GADGET</h3>
        </div>

        <span>03 / 08</span>
    </div>

    <div class="comic-3967__grid">
        <button type="button" class="comic-3967__item comic-3967__item--active">
            <i class="ri-radar-line"></i>
            <span>SCANNER</span>
        </button>

        <button type="button" class="comic-3967__item">
            <i class="ri-flashlight-fill"></i>
            <span>CHARGE</span>
        </button>

        <button type="button" class="comic-3967__item">
            <i class="ri-radio-button-line"></i>
            <span>BEACON</span>
        </button>

        <button type="button" class="comic-3967__item">
            <i class="ri-wifi-line"></i>
            <span>TRACKER</span>
        </button>
    </div>

    <div class="comic-3967__selected">
        <span>
            <small>EQUIPPED</small>
            <strong>TACTICAL SCANNER</strong>
        </span>

        <span class="comic-3967__battery">
            <span></span>
        </span>

        <strong>84%</strong>
    </div>
</section>`,
    css: `.comic-3967{position:relative;width:345px;max-width:100%;padding:15px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #ef4444;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3967::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.1) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3967__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3967__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#2563eb}
.comic-3967__header h3{margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3967__header>span{padding:5px 6px;border:3px solid #111;background:#facc15;box-shadow:2px 2px 0 #111;font-size:6px;font-weight:900;transform:rotate(3deg)}
.comic-3967__grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:13px}
.comic-3967__item{height:67px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border:3px solid #111;background:#e5e7eb;color:#111;box-shadow:3px 3px 0 #111;cursor:pointer;transition:transform .18s ease,background .18s ease,box-shadow .18s ease}
.comic-3967__item i{font-size:19px}
.comic-3967__item span{font-size:5px;font-weight:900;letter-spacing:.4px}
.comic-3967__item--active{background:#2563eb;color:#fff;box-shadow:3px 3px 0 #facc15}
.comic-3967__item:hover{background:#facc15;color:#111;transform:translate(-2px,-2px);box-shadow:5px 5px 0 #111}
.comic-3967__selected{position:relative;z-index:2;display:flex;align-items:center;gap:8px;margin-top:12px;padding:9px;border:3px solid #111;background:#111827;color:#fff;box-shadow:4px 4px 0 #2563eb}
.comic-3967__selected>span:first-child{display:flex;flex:1;flex-direction:column}
.comic-3967__selected small{font-size:5px;font-weight:900;color:#93c5fd;letter-spacing:.8px}
.comic-3967__selected>span:first-child strong{margin-top:3px;font-size:7px;font-weight:900}
.comic-3967__battery{width:55px;height:13px;padding:2px;border:2px solid #fff;background:#374151}
.comic-3967__battery>span{display:block;width:84%;height:100%;background:#22c55e}
.comic-3967__selected>strong{font-size:7px}`,
  },
  {
    id: 3968,
    name: "Brave Bold Emergency Alert",
    preview: (
      <aside className="comic-3968" role="alert">
        <div className="comic-3968__burst">
          <span>ALERT!</span>
        </div>

        <div className="comic-3968__content">
          <span className="comic-3968__label">JUSTICE NETWORK</span>
          <strong>EMERGENCY TRANSMISSION</strong>
          <p>A distress signal has been detected outside Gotham airspace.</p>

          <div className="comic-3968__meta">
            <span>
              <i className="ri-signal-wifi-fill"></i>
              SIGNAL 98%
            </span>

            <span>
              <i className="ri-map-pin-2-line"></i>
              14 KM
            </span>
          </div>
        </div>

        <button type="button" className="comic-3968__open">
          VIEW
        </button>
      </aside>
    ),
    html: `<aside class="comic-3968" role="alert">
    <div class="comic-3968__burst">
        <span>ALERT!</span>
    </div>

    <div class="comic-3968__content">
        <span class="comic-3968__label">JUSTICE NETWORK</span>
        <strong>EMERGENCY TRANSMISSION</strong>
        <p>A distress signal has been detected outside Gotham airspace.</p>

        <div class="comic-3968__meta">
            <span>
                <i class="ri-signal-wifi-fill"></i>
                SIGNAL 98%
            </span>

            <span>
                <i class="ri-map-pin-2-line"></i>
                14 KM
            </span>
        </div>
    </div>

    <button type="button" class="comic-3968__open">
        VIEW
    </button>
</aside>`,
    css: `.comic-3968{position:relative;width:365px;max-width:100%;display:flex;align-items:center;gap:11px;padding:13px;overflow:hidden;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;transition:transform .18s ease,box-shadow .18s ease}
.comic-3968::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3968__burst{position:relative;z-index:2;width:66px;height:58px;display:grid;place-items:center;flex:0 0 66px;border:3px solid #111;background:#facc15;color:#111;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);transition:transform .2s ease}
.comic-3968__burst span{font:900 8px/1 Arial Black,Arial,sans-serif}
.comic-3968__content{position:relative;z-index:2;display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3968__label{align-self:flex-start;padding:3px 5px;border:2px solid #111;background:#2563eb;color:#fff;font-size:5px;font-weight:900;letter-spacing:.8px}
.comic-3968__content>strong{margin-top:5px;font:900 10px/1 Arial Black,Arial,sans-serif}
.comic-3968__content>p{margin:5px 0 0;font-size:7px;font-weight:700;line-height:1.4}
.comic-3968__meta{display:flex;gap:6px;margin-top:7px}
.comic-3968__meta span{display:flex;align-items:center;gap:3px;font-size:5px;font-weight:900}
.comic-3968__open{position:relative;z-index:2;padding:8px 7px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #facc15;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3968:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #111}
.comic-3968:hover .comic-3968__burst{transform:rotate(-8deg) scale(1.08)}
.comic-3968__open:hover{background:#facc15;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3969,
    name: "Brave Bold Episode Card",
    preview: (
      <article className="comic-3969">
        <div className="comic-3969__art">
          <span className="comic-3969__sun"></span>

          <span className="comic-3969__hero comic-3969__hero--1">
            <i className="ri-shield-fill"></i>
          </span>

          <span className="comic-3969__hero comic-3969__hero--2">
            <i className="ri-flashlight-fill"></i>
          </span>

          <span className="comic-3969__pow">POW!</span>

          <span className="comic-3969__episode">EP. 24</span>
        </div>

        <div className="comic-3969__body">
          <div className="comic-3969__category">
            <span>ACTION</span>
            <span>ADVENTURE</span>
          </div>

          <h3>THE CLOCKWORK CRISIS!</h3>

          <p>
            Batman teams up with an unexpected ally to stop a mechanical threat
            before Gotham runs out of time.
          </p>

          <div className="comic-3969__footer">
            <span>
              <i className="ri-time-line"></i>
              22 MIN
            </span>

            <button type="button">
              <i className="ri-play-fill"></i>
              WATCH
            </button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="comic-3969">
    <div class="comic-3969__art">
        <span class="comic-3969__sun"></span>

        <span class="comic-3969__hero comic-3969__hero--1">
            <i class="ri-shield-fill"></i>
        </span>

        <span class="comic-3969__hero comic-3969__hero--2">
            <i class="ri-flashlight-fill"></i>
        </span>

        <span class="comic-3969__pow">POW!</span>

        <span class="comic-3969__episode">EP. 24</span>
    </div>

    <div class="comic-3969__body">
        <div class="comic-3969__category">
            <span>ACTION</span>
            <span>ADVENTURE</span>
        </div>

        <h3>THE CLOCKWORK CRISIS!</h3>

        <p>
            Batman teams up with an unexpected ally to stop a mechanical threat before Gotham runs out of time.
        </p>

        <div class="comic-3969__footer">
            <span>
                <i class="ri-time-line"></i>
                22 MIN
            </span>

            <button type="button">
                <i class="ri-play-fill"></i>
                WATCH
            </button>
        </div>
    </div>
</article>`,
    css: `.comic-3969{position:relative;width:330px;max-width:100%;overflow:hidden;border:4px solid #111;background:#fff;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3969__art{position:relative;height:128px;overflow:hidden;border-bottom:4px solid #111;background:#38bdf8;background-image:radial-gradient(rgba(17,17,17,.18) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3969__sun{position:absolute;left:50%;top:50%;width:115px;height:115px;border:4px solid #111;border-radius:50%;background:#facc15;transform:translate(-50%,-50%)}
.comic-3969__hero{position:absolute;width:58px;height:76px;display:grid;place-items:center;border:4px solid #111;background:#1e3a8a;color:#facc15;box-shadow:4px 4px 0 #111;font-size:26px;transition:transform .22s ease}
.comic-3969__hero--1{left:77px;bottom:-12px;transform:rotate(-8deg)}
.comic-3969__hero--2{right:75px;bottom:-15px;background:#ef4444;color:#fff;transform:rotate(8deg)}
.comic-3969__pow{position:absolute;right:8px;top:8px;width:57px;height:43px;display:grid;place-items:center;border:3px solid #111;background:#facc15;color:#111;clip-path:polygon(50% 0,61% 22%,84% 5%,77% 31%,100% 28%,82% 48%,100% 64%,76% 66%,87% 94%,61% 77%,50% 100%,39% 77%,12% 93%,24% 65%,0 61%,18% 48%,0 28%,24% 31%,18% 6%,39% 22%);font:900 8px/1 Arial Black,Arial,sans-serif;transform:rotate(7deg);transition:transform .2s ease}
.comic-3969__episode{position:absolute;left:8px;top:8px;padding:5px 7px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900}
.comic-3969__body{padding:14px}
.comic-3969__category{display:flex;gap:5px}
.comic-3969__category span{padding:4px 5px;border:2px solid #111;background:#dbeafe;font-size:5px;font-weight:900;letter-spacing:.5px}
.comic-3969__category span:nth-child(2){background:#fee2e2}
.comic-3969__body h3{margin:10px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif;letter-spacing:-.4px}
.comic-3969__body p{margin:8px 0 0;color:#52525b;font-size:8px;font-weight:700;line-height:1.5}
.comic-3969__footer{display:flex;align-items:center;justify-content:space-between;margin-top:13px;padding-top:11px;border-top:3px solid #111}
.comic-3969__footer>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:900}
.comic-3969__footer button{display:flex;align-items:center;gap:5px;padding:7px 10px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3969:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #2563eb}
.comic-3969:hover .comic-3969__hero--1{transform:translateY(-7px) rotate(-3deg)}
.comic-3969:hover .comic-3969__hero--2{transform:translateY(-7px) rotate(3deg)}
.comic-3969:hover .comic-3969__pow{transform:rotate(-7deg) scale(1.08)}
.comic-3969__footer button:hover{background:#2563eb;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3970,
    name: "Brave Bold Team-Up Card",
    preview: (
      <article className="comic-3970">
        <div className="comic-3970__banner">
          <span>TEAM-UP!</span>
          <strong>ISSUE #08</strong>
        </div>

        <div className="comic-3970__heroes">
          <div className="comic-3970__hero comic-3970__hero--bat">
            <span>
              <i className="ri-shield-fill"></i>
            </span>
            <strong>BATMAN</strong>
          </div>

          <span className="comic-3970__plus">+</span>

          <div className="comic-3970__hero comic-3970__hero--beetle">
            <span>
              <i className="ri-bug-fill"></i>
            </span>
            <strong>BLUE BEETLE</strong>
          </div>
        </div>

        <div className="comic-3970__body">
          <small>TODAY'S ADVENTURE</small>
          <h3>INVASION FROM ABOVE!</h3>
          <p>
            Two heroes. One impossible mission. Stop the invasion before Gotham
            becomes ground zero.
          </p>

          <div className="comic-3970__tags">
            <span>ACTION</span>
            <span>SPACE</span>
            <span>TEAM-UP</span>
          </div>

          <button type="button">
            VIEW MISSION
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </article>
    ),
    html: `<article class="comic-3970">
    <div class="comic-3970__banner">
        <span>TEAM-UP!</span>
        <strong>ISSUE #08</strong>
    </div>

    <div class="comic-3970__heroes">
        <div class="comic-3970__hero comic-3970__hero--bat">
            <span><i class="ri-shield-fill"></i></span>
            <strong>BATMAN</strong>
        </div>

        <span class="comic-3970__plus">+</span>

        <div class="comic-3970__hero comic-3970__hero--beetle">
            <span><i class="ri-bug-fill"></i></span>
            <strong>BLUE BEETLE</strong>
        </div>
    </div>

    <div class="comic-3970__body">
        <small>TODAY'S ADVENTURE</small>
        <h3>INVASION FROM ABOVE!</h3>

        <p>
            Two heroes. One impossible mission. Stop the invasion before Gotham becomes ground zero.
        </p>

        <div class="comic-3970__tags">
            <span>ACTION</span>
            <span>SPACE</span>
            <span>TEAM-UP</span>
        </div>

        <button type="button">
            VIEW MISSION
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</article>`,
    css: `.comic-3970{position:relative;width:340px;max-width:100%;overflow:hidden;border:4px solid #111;background:#fff;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;transition:transform .2s ease,box-shadow .2s ease}
.comic-3970__banner{display:flex;align-items:center;justify-content:space-between;padding:9px 11px;border-bottom:4px solid #111;background:#ef4444;color:#fff;background-image:radial-gradient(rgba(17,17,17,.2) 1.1px,transparent 1.4px);background-size:7px 7px}
.comic-3970__banner span{font:900 16px/1 Arial Black,Arial,sans-serif;font-style:italic}
.comic-3970__banner strong{padding:4px 6px;border:2px solid #111;background:#facc15;color:#111;font-size:6px;transform:rotate(3deg)}
.comic-3970__heroes{position:relative;display:grid;grid-template-columns:1fr 34px 1fr;align-items:center;gap:4px;padding:14px;background:#38bdf8}
.comic-3970__heroes::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.16) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3970__hero{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:7px}
.comic-3970__hero>span{width:54px;height:54px;display:grid;place-items:center;border:4px solid #111;border-radius:50%;background:#172554;color:#facc15;box-shadow:4px 4px 0 #111;font-size:23px;transition:transform .2s ease}
.comic-3970__hero--beetle>span{background:#2563eb;color:#fff}
.comic-3970__hero strong{padding:4px 6px;border:2px solid #111;background:#fff;font-size:6px}
.comic-3970__plus{position:relative;z-index:2;width:34px;height:34px;display:grid;place-items:center;border:3px solid #111;background:#facc15;box-shadow:3px 3px 0 #111;font:900 18px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg)}
.comic-3970__body{padding:14px}
.comic-3970__body>small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#2563eb}
.comic-3970__body h3{margin:5px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3970__body p{margin:8px 0 0;color:#52525b;font-size:8px;font-weight:700;line-height:1.5}
.comic-3970__tags{display:flex;gap:5px;margin-top:10px}
.comic-3970__tags span{padding:4px 5px;border:2px solid #111;background:#fef08a;font-size:5px;font-weight:900}
.comic-3970__tags span:nth-child(2){background:#dbeafe}
.comic-3970__tags span:nth-child(3){background:#fee2e2}
.comic-3970__body button{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;padding:8px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3970:hover{transform:translate(-2px,-2px);box-shadow:11px 11px 0 #2563eb}
.comic-3970:hover .comic-3970__hero--bat>span{transform:rotate(-6deg) scale(1.08)}
.comic-3970:hover .comic-3970__hero--beetle>span{transform:rotate(6deg) scale(1.08)}
.comic-3970__body button:hover{background:#ef4444;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3971,
    name: "Brave Bold Batmobile Status",
    preview: (
      <section className="comic-3971">
        <div className="comic-3971__top">
          <div>
            <small>VEHICLE SYSTEM</small>
            <h3>BATMOBILE</h3>
          </div>

          <span className="comic-3971__online">
            <span></span>
            READY
          </span>
        </div>

        <div className="comic-3971__vehicle">
          <i className="ri-roadster-fill"></i>
          <span className="comic-3971__speed">184</span>
          <small>KM/H</small>
        </div>

        <div className="comic-3971__meters">
          <div>
            <span>
              <i className="ri-battery-charge-fill"></i>
              POWER
            </span>
            <strong>92%</strong>
            <div>
              <span style={{ width: "92%" }}></span>
            </div>
          </div>

          <div>
            <span>
              <i className="ri-gas-station-fill"></i>
              FUEL
            </span>
            <strong>68%</strong>
            <div>
              <span style={{ width: "68%" }}></span>
            </div>
          </div>
        </div>

        <div className="comic-3971__actions">
          <button type="button">
            <i className="ri-map-pin-2-fill"></i>
            LOCATE
          </button>

          <button type="button">
            <i className="ri-key-2-fill"></i>
            START
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3971">
    <div class="comic-3971__top">
        <div>
            <small>VEHICLE SYSTEM</small>
            <h3>BATMOBILE</h3>
        </div>

        <span class="comic-3971__online">
            <span></span>
            READY
        </span>
    </div>

    <div class="comic-3971__vehicle">
        <i class="ri-roadster-fill"></i>
        <span class="comic-3971__speed">184</span>
        <small>KM/H</small>
    </div>

    <div class="comic-3971__meters">
        <div>
            <span>
                <i class="ri-battery-charge-fill"></i>
                POWER
            </span>

            <strong>92%</strong>

            <div><span style="width:92%"></span></div>
        </div>

        <div>
            <span>
                <i class="ri-gas-station-fill"></i>
                FUEL
            </span>

            <strong>68%</strong>

            <div><span style="width:68%"></span></div>
        </div>
    </div>

    <div class="comic-3971__actions">
        <button type="button">
            <i class="ri-map-pin-2-fill"></i>
            LOCATE
        </button>

        <button type="button">
            <i class="ri-key-2-fill"></i>
            START
        </button>
    </div>
</section>`,
    css: `.comic-3971{position:relative;width:340px;max-width:100%;padding:15px;overflow:hidden;border:4px solid #111;background:#172554;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif}
.comic-3971::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 15px,rgba(96,165,250,.08) 15px 18px)}
.comic-3971__top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3971__top small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#93c5fd}
.comic-3971__top h3{margin:4px 0 0;font:900 19px/1 Arial Black,Arial,sans-serif}
.comic-3971__online{display:flex;align-items:center;gap:5px;padding:5px 6px;border:2px solid #111;background:#22c55e;color:#111;font-size:6px;font-weight:900}
.comic-3971__online>span{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#fff}
.comic-3971__vehicle{position:relative;z-index:2;height:89px;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:13px;border:3px solid #111;background:#2563eb;box-shadow:4px 4px 0 #111}
.comic-3971__vehicle>i{position:absolute;left:17px;font-size:39px;color:#facc15;transition:transform .2s ease}
.comic-3971__speed{margin-left:75px;font:900 31px/.9 Arial Black,Arial,sans-serif}
.comic-3971__vehicle small{align-self:flex-end;margin-bottom:23px;font-size:6px;font-weight:900;color:#bfdbfe}
.comic-3971__meters{position:relative;z-index:2;display:grid;gap:8px;margin-top:12px}
.comic-3971__meters>div{display:grid;grid-template-columns:1fr auto;align-items:center;gap:5px}
.comic-3971__meters>div>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:900}
.comic-3971__meters>div>strong{font-size:6px}
.comic-3971__meters>div>div{grid-column:1/-1;height:12px;padding:2px;border:2px solid #111;background:#fff}
.comic-3971__meters>div>div>span{display:block;height:100%;background:#22c55e;transition:width .25s ease,background .18s ease}
.comic-3971__meters>div:nth-child(2)>div>span{background:#facc15}
.comic-3971__actions{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:13px}
.comic-3971__actions button{display:flex;align-items:center;justify-content:center;gap:5px;padding:8px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3971__actions button:nth-child(2){background:#facc15}
.comic-3971:hover .comic-3971__vehicle>i{transform:translateX(7px) rotate(-3deg)}
.comic-3971__actions button:hover{background:#38bdf8;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3972,
    name: "Brave Bold Hero Stats",
    preview: (
      <article className="comic-3972">
        <div className="comic-3972__profile">
          <span className="comic-3972__avatar">
            <i className="ri-shield-star-fill"></i>
          </span>

          <div>
            <small>HERO PROFILE</small>
            <h3>THE BATMAN</h3>
            <span>TACTICAL / DETECTIVE</span>
          </div>

          <span className="comic-3972__rank">A+</span>
        </div>

        <div className="comic-3972__stats">
          <div>
            <span>
              <i className="ri-brain-line"></i>
              INTELLECT
            </span>
            <div>
              <span style={{ width: "94%" }}></span>
            </div>
            <strong>94</strong>
          </div>

          <div>
            <span>
              <i className="ri-boxing-fill"></i>
              COMBAT
            </span>
            <div>
              <span style={{ width: "89%" }}></span>
            </div>
            <strong>89</strong>
          </div>

          <div>
            <span>
              <i className="ri-focus-3-line"></i>
              STEALTH
            </span>
            <div>
              <span style={{ width: "97%" }}></span>
            </div>
            <strong>97</strong>
          </div>
        </div>

        <div className="comic-3972__bottom">
          <span>
            <strong>128</strong>
            MISSIONS
          </span>

          <span>
            <strong>96%</strong>
            SUCCESS
          </span>

          <span>
            <strong>42</strong>
            ALLIES
          </span>
        </div>
      </article>
    ),
    html: `<article class="comic-3972">
    <div class="comic-3972__profile">
        <span class="comic-3972__avatar">
            <i class="ri-shield-star-fill"></i>
        </span>

        <div>
            <small>HERO PROFILE</small>
            <h3>THE BATMAN</h3>
            <span>TACTICAL / DETECTIVE</span>
        </div>

        <span class="comic-3972__rank">A+</span>
    </div>

    <div class="comic-3972__stats">
        <div>
            <span><i class="ri-brain-line"></i> INTELLECT</span>
            <div><span style="width:94%"></span></div>
            <strong>94</strong>
        </div>

        <div>
            <span><i class="ri-boxing-fill"></i> COMBAT</span>
            <div><span style="width:89%"></span></div>
            <strong>89</strong>
        </div>

        <div>
            <span><i class="ri-focus-3-line"></i> STEALTH</span>
            <div><span style="width:97%"></span></div>
            <strong>97</strong>
        </div>
    </div>

    <div class="comic-3972__bottom">
        <span><strong>128</strong>MISSIONS</span>
        <span><strong>96%</strong>SUCCESS</span>
        <span><strong>42</strong>ALLIES</span>
    </div>
</article>`,
    css: `.comic-3972{position:relative;width:345px;max-width:100%;padding:15px;overflow:hidden;border:4px solid #111;background:#fff;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif}
.comic-3972::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.09) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3972__profile{position:relative;z-index:2;display:flex;align-items:center;gap:10px}
.comic-3972__avatar{width:52px;height:52px;display:grid;place-items:center;flex:0 0 52px;border:4px solid #111;background:#172554;color:#facc15;box-shadow:4px 4px 0 #facc15;font-size:23px;transform:rotate(-4deg);transition:transform .2s ease}
.comic-3972__profile>div{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3972__profile small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#2563eb}
.comic-3972__profile h3{margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3972__profile>div>span{margin-top:4px;color:#64748b;font-size:5px;font-weight:900;letter-spacing:.8px}
.comic-3972__rank{width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;background:#facc15;box-shadow:3px 3px 0 #111;font:900 12px/1 Arial Black,Arial,sans-serif;transform:rotate(5deg)}
.comic-3972__stats{position:relative;z-index:2;display:grid;gap:10px;margin-top:16px;padding:11px;border:3px solid #111;background:#f8fafc;box-shadow:4px 4px 0 #111}
.comic-3972__stats>div{display:grid;grid-template-columns:70px 1fr 22px;align-items:center;gap:7px}
.comic-3972__stats>div>span{display:flex;align-items:center;gap:4px;font-size:5px;font-weight:900}
.comic-3972__stats>div>span i{font-size:11px;color:#2563eb}
.comic-3972__stats>div>div{height:12px;padding:2px;border:2px solid #111;background:#e5e7eb}
.comic-3972__stats>div>div>span{display:block;height:100%;background:#2563eb;transition:width .25s ease,background .18s ease}
.comic-3972__stats>div:nth-child(2)>div>span{background:#ef4444}
.comic-3972__stats>div:nth-child(3)>div>span{background:#facc15}
.comic-3972__stats>div>strong{font-size:6px}
.comic-3972__bottom{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px}
.comic-3972__bottom>span{display:flex;flex-direction:column;align-items:center;padding:8px 3px;border:2px solid #111;background:#dbeafe;font-size:5px;font-weight:900}
.comic-3972__bottom strong{margin-bottom:3px;font:900 12px/1 Arial Black,Arial,sans-serif}
.comic-3972:hover .comic-3972__avatar{transform:rotate(5deg) scale(1.08)}
.comic-3972:hover .comic-3972__stats>div>div>span{filter:brightness(1.12)}`,
  },
  {
    id: 3973,
    name: "Brave Bold Villain Alert",
    preview: (
      <aside className="comic-3973" role="alert">
        <div className="comic-3973__top">
          <span className="comic-3973__danger">
            <i className="ri-alarm-warning-fill"></i>
          </span>

          <div>
            <small>VILLAIN DETECTED</small>
            <h3>HIGH THREAT LEVEL!</h3>
          </div>

          <span className="comic-3973__level">LEVEL 5</span>
        </div>

        <div className="comic-3973__target">
          <span className="comic-3973__avatar">
            <i className="ri-question-mark"></i>
          </span>

          <div>
            <small>IDENTIFIED AS</small>
            <strong>THE RIDDLER</strong>
            <span>Last seen · Gotham Central</span>
          </div>

          <span className="comic-3973__distance">1.8 KM</span>
        </div>

        <div className="comic-3973__actions">
          <button type="button">
            <i className="ri-map-pin-2-line"></i>
            TRACK
          </button>

          <button type="button">
            <i className="ri-shield-flash-line"></i>
            RESPOND
          </button>
        </div>
      </aside>
    ),
    html: `<aside class="comic-3973" role="alert">
    <div class="comic-3973__top">
        <span class="comic-3973__danger">
            <i class="ri-alarm-warning-fill"></i>
        </span>

        <div>
            <small>VILLAIN DETECTED</small>
            <h3>HIGH THREAT LEVEL!</h3>
        </div>

        <span class="comic-3973__level">LEVEL 5</span>
    </div>

    <div class="comic-3973__target">
        <span class="comic-3973__avatar">
            <i class="ri-question-mark"></i>
        </span>

        <div>
            <small>IDENTIFIED AS</small>
            <strong>THE RIDDLER</strong>
            <span>Last seen · Gotham Central</span>
        </div>

        <span class="comic-3973__distance">1.8 KM</span>
    </div>

    <div class="comic-3973__actions">
        <button type="button">
            <i class="ri-map-pin-2-line"></i>
            TRACK
        </button>

        <button type="button">
            <i class="ri-shield-flash-line"></i>
            RESPOND
        </button>
    </div>
</aside>`,
    css: `.comic-3973{position:relative;width:350px;max-width:100%;padding:14px;overflow:hidden;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif}
.comic-3973::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3973__top{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3973__danger{width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:18px;transform:rotate(-5deg);transition:transform .2s ease}
.comic-3973__top>div{min-width:0;flex:1}
.comic-3973__top small{font-size:5px;font-weight:900;letter-spacing:1.3px;color:#fee2e2}
.comic-3973__top h3{margin:3px 0 0;font:900 13px/1 Arial Black,Arial,sans-serif}
.comic-3973__level{padding:5px;border:3px solid #111;background:#111;color:#fff;box-shadow:2px 2px 0 #facc15;font-size:5px;font-weight:900;transform:rotate(4deg)}
.comic-3973__target{position:relative;z-index:2;display:flex;align-items:center;gap:9px;margin-top:12px;padding:9px;border:3px solid #111;background:#fff;color:#111;box-shadow:4px 4px 0 #111}
.comic-3973__avatar{width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;border:3px solid #111;border-radius:50%;background:#22c55e;box-shadow:3px 3px 0 #7e22ce;font:900 21px/1 Arial Black,Arial,sans-serif;transition:transform .2s ease}
.comic-3973__target>div{display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3973__target small{font-size:5px;font-weight:900;letter-spacing:1px;color:#16a34a}
.comic-3973__target strong{margin-top:3px;font:900 11px/1 Arial Black,Arial,sans-serif}
.comic-3973__target>div>span{margin-top:4px;color:#64748b;font-size:6px;font-weight:700}
.comic-3973__distance{padding:4px 5px;border:2px solid #111;background:#facc15;font-size:5px;font-weight:900}
.comic-3973__actions{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.comic-3973__actions button{display:flex;align-items:center;justify-content:center;gap:5px;padding:8px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3973__actions button:nth-child(2){background:#facc15}
.comic-3973:hover .comic-3973__danger{transform:rotate(7deg) scale(1.1)}
.comic-3973:hover .comic-3973__avatar{transform:rotate(-8deg) scale(1.08)}
.comic-3973__actions button:hover{background:#2563eb;color:#fff;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3974,
    name: "Brave Bold Mission Progress",
    preview: (
      <section className="comic-3974">
        <div className="comic-3974__header">
          <div>
            <small>MISSION PROGRESS</small>
            <h3>STOP THE INVASION</h3>
          </div>

          <span>68%</span>
        </div>

        <div className="comic-3974__progress">
          <span></span>
        </div>

        <div className="comic-3974__steps">
          <div className="comic-3974__step comic-3974__step--done">
            <span>
              <i className="ri-check-line"></i>
            </span>
            <div>
              <strong>Locate signal</strong>
              <small>Completed</small>
            </div>
          </div>

          <div className="comic-3974__line comic-3974__line--done"></div>

          <div className="comic-3974__step comic-3974__step--active">
            <span>2</span>
            <div>
              <strong>Reach tower</strong>
              <small>In progress</small>
            </div>
          </div>

          <div className="comic-3974__line"></div>

          <div className="comic-3974__step">
            <span>3</span>
            <div>
              <strong>Disable device</strong>
              <small>Locked</small>
            </div>
          </div>
        </div>

        <div className="comic-3974__footer">
          <span>
            <i className="ri-time-line"></i>
            08:42 REMAINING
          </span>

          <button type="button">CONTINUE</button>
        </div>
      </section>
    ),
    html: `<section class="comic-3974">
    <div class="comic-3974__header">
        <div>
            <small>MISSION PROGRESS</small>
            <h3>STOP THE INVASION</h3>
        </div>

        <span>68%</span>
    </div>

    <div class="comic-3974__progress">
        <span></span>
    </div>

    <div class="comic-3974__steps">
        <div class="comic-3974__step comic-3974__step--done">
            <span><i class="ri-check-line"></i></span>

            <div>
                <strong>Locate signal</strong>
                <small>Completed</small>
            </div>
        </div>

        <div class="comic-3974__line comic-3974__line--done"></div>

        <div class="comic-3974__step comic-3974__step--active">
            <span>2</span>

            <div>
                <strong>Reach tower</strong>
                <small>In progress</small>
            </div>
        </div>

        <div class="comic-3974__line"></div>

        <div class="comic-3974__step">
            <span>3</span>

            <div>
                <strong>Disable device</strong>
                <small>Locked</small>
            </div>
        </div>
    </div>

    <div class="comic-3974__footer">
        <span>
            <i class="ri-time-line"></i>
            08:42 REMAINING
        </span>

        <button type="button">CONTINUE</button>
    </div>
</section>`,
    css: `.comic-3974{position:relative;width:350px;max-width:100%;padding:15px;overflow:hidden;border:4px solid #111;background:#facc15;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif}
.comic-3974::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.13) 1.2px,transparent 1.5px);background-size:8px 8px}
.comic-3974__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3974__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#1e3a8a}
.comic-3974__header h3{margin:4px 0 0;font:900 16px/1 Arial Black,Arial,sans-serif}
.comic-3974__header>span{width:41px;height:41px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#2563eb;color:#fff;box-shadow:3px 3px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif}
.comic-3974__progress{position:relative;z-index:2;height:15px;margin-top:13px;padding:2px;border:3px solid #111;background:#fff}
.comic-3974__progress span{display:block;width:68%;height:100%;background:#2563eb;transition:width .25s ease,background .18s ease}
.comic-3974__steps{position:relative;z-index:2;margin-top:14px;padding:11px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3974__step{display:flex;align-items:center;gap:9px}
.comic-3974__step>span{width:31px;height:31px;display:grid;place-items:center;flex:0 0 31px;border:3px solid #111;border-radius:50%;background:#e5e7eb;font:900 8px/1 Arial Black,Arial,sans-serif}
.comic-3974__step>div{display:flex;flex-direction:column}
.comic-3974__step strong{font-size:8px;font-weight:900}
.comic-3974__step small{margin-top:3px;color:#64748b;font-size:5px;font-weight:800}
.comic-3974__step--done>span{background:#22c55e}
.comic-3974__step--active>span{background:#2563eb;color:#fff;box-shadow:2px 2px 0 #facc15}
.comic-3974__line{width:3px;height:16px;margin-left:14px;background:#d1d5db}
.comic-3974__line--done{background:#22c55e}
.comic-3974__footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:13px}
.comic-3974__footer>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:900}
.comic-3974__footer button{padding:8px 10px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3974:hover .comic-3974__progress span{width:78%;background:#ef4444}
.comic-3974__footer button:hover{background:#2563eb;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3975,
    name: "Brave Bold Action Menu",
    preview: (
      <section className="comic-3975">
        <div className="comic-3975__heading">
          <div>
            <small>BATCOMPUTER</small>
            <h3>QUICK ACTIONS</h3>
          </div>

          <span>
            <i className="ri-flashlight-fill"></i>
          </span>
        </div>

        <div className="comic-3975__menu">
          <button type="button">
            <span className="comic-3975__icon comic-3975__icon--blue">
              <i className="ri-radar-line"></i>
            </span>

            <span>
              <strong>SCAN AREA</strong>
              <small>Search nearby threats</small>
            </span>

            <i className="ri-arrow-right-s-line"></i>
          </button>

          <button type="button">
            <span className="comic-3975__icon comic-3975__icon--yellow">
              <i className="ri-user-add-line"></i>
            </span>

            <span>
              <strong>CALL ALLY</strong>
              <small>Request backup</small>
            </span>

            <i className="ri-arrow-right-s-line"></i>
          </button>

          <button type="button">
            <span className="comic-3975__icon comic-3975__icon--red">
              <i className="ri-alarm-warning-line"></i>
            </span>

            <span>
              <strong>EMERGENCY</strong>
              <small>Send distress beacon</small>
            </span>

            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3975">
    <div class="comic-3975__heading">
        <div>
            <small>BATCOMPUTER</small>
            <h3>QUICK ACTIONS</h3>
        </div>

        <span>
            <i class="ri-flashlight-fill"></i>
        </span>
    </div>

    <div class="comic-3975__menu">
        <button type="button">
            <span class="comic-3975__icon comic-3975__icon--blue">
                <i class="ri-radar-line"></i>
            </span>

            <span>
                <strong>SCAN AREA</strong>
                <small>Search nearby threats</small>
            </span>

            <i class="ri-arrow-right-s-line"></i>
        </button>

        <button type="button">
            <span class="comic-3975__icon comic-3975__icon--yellow">
                <i class="ri-user-add-line"></i>
            </span>

            <span>
                <strong>CALL ALLY</strong>
                <small>Request backup</small>
            </span>

            <i class="ri-arrow-right-s-line"></i>
        </button>

        <button type="button">
            <span class="comic-3975__icon comic-3975__icon--red">
                <i class="ri-alarm-warning-line"></i>
            </span>

            <span>
                <strong>EMERGENCY</strong>
                <small>Send distress beacon</small>
            </span>

            <i class="ri-arrow-right-s-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3975{position:relative;width:330px;max-width:100%;padding:14px;overflow:hidden;border:4px solid #111;background:#38bdf8;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif}
.comic-3975::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.16) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3975__heading{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3975__heading small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#1e3a8a}
.comic-3975__heading h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3975__heading>span{width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;background:#facc15;box-shadow:3px 3px 0 #111;font-size:18px;transform:rotate(5deg);transition:transform .2s ease}
.comic-3975__menu{position:relative;z-index:2;display:grid;gap:8px;margin-top:13px}
.comic-3975__menu>button{width:100%;display:flex;align-items:center;gap:9px;padding:8px;border:3px solid #111;background:#fff;color:#111;box-shadow:4px 4px 0 #111;text-align:left;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
.comic-3975__icon{width:37px;height:37px;display:grid;place-items:center;flex:0 0 37px;border:3px solid #111;font-size:17px}
.comic-3975__icon--blue{background:#2563eb;color:#fff}
.comic-3975__icon--yellow{background:#facc15}
.comic-3975__icon--red{background:#ef4444;color:#fff}
.comic-3975__menu>button>span:nth-child(2){display:flex;min-width:0;flex:1;flex-direction:column}
.comic-3975__menu strong{font-size:8px;font-weight:900}
.comic-3975__menu small{margin-top:3px;color:#64748b;font-size:5px;font-weight:700}
.comic-3975__menu>button>i{font-size:17px;transition:transform .18s ease}
.comic-3975__menu>button:hover{background:#fef08a;transform:translate(-2px,-2px);box-shadow:6px 6px 0 #2563eb}
.comic-3975__menu>button:hover>i{transform:translateX(4px)}
.comic-3975:hover .comic-3975__heading>span{transform:rotate(-7deg) scale(1.08)}`,
  },
  {
    id: 3976,
    name: "Batcomputer Gadget Grid",
    preview: (
      <section className="comic-3976">
        <div className="comic-3976__top">
          <div>
            <small>BATCOMPUTER</small>
            <h3>GADGET GRID</h3>
          </div>
          <span>04</span>
        </div>

        <div className="comic-3976__grid">
          <div className="comic-3976__item">
            <i className="ri-focus-2-fill"></i>
            <strong>BATARANG</strong>
            <small>READY</small>
          </div>
          <div className="comic-3976__item">
            <i className="ri-links-fill"></i>
            <strong>GRAPPLE</strong>
            <small>ARMED</small>
          </div>
          <div className="comic-3976__item">
            <i className="ri-radar-fill"></i>
            <strong>SCANNER</strong>
            <small>ONLINE</small>
          </div>
          <div className="comic-3976__item">
            <i className="ri-flashlight-fill"></i>
            <strong>BEACON</strong>
            <small>ACTIVE</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3976">
    <div class="comic-3976__top">
        <div>
            <small>BATCOMPUTER</small>
            <h3>GADGET GRID</h3>
        </div>
        <span>04</span>
    </div>

    <div class="comic-3976__grid">
        <div class="comic-3976__item">
            <i class="ri-focus-2-fill"></i>
            <strong>BATARANG</strong>
            <small>READY</small>
        </div>
        <div class="comic-3976__item">
            <i class="ri-links-fill"></i>
            <strong>GRAPPLE</strong>
            <small>ARMED</small>
        </div>
        <div class="comic-3976__item">
            <i class="ri-radar-fill"></i>
            <strong>SCANNER</strong>
            <small>ONLINE</small>
        </div>
        <div class="comic-3976__item">
            <i class="ri-flashlight-fill"></i>
            <strong>BEACON</strong>
            <small>ACTIVE</small>
        </div>
    </div>
</section>`,
    css: `.comic-3976{position:relative;width:340px;max-width:100%;padding:14px;border:4px solid #111;background:#60a5fa;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3976::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.14) 1.1px,transparent 1.4px);background-size:8px 8px}.comic-3976__top{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between}.comic-3976__top small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#1e3a8a}.comic-3976__top h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}.comic-3976__top span{width:40px;height:40px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#facc15;box-shadow:3px 3px 0 #111;font:900 12px/1 Arial Black,Arial,sans-serif}.comic-3976__grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:14px}.comic-3976__item{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:86px;padding:10px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111;transition:transform .18s ease,background .18s ease}.comic-3976__item i{font-size:24px;color:#2563eb}.comic-3976__item strong{font-size:7px;font-weight:900}.comic-3976__item small{padding:3px 5px;border:2px solid #111;background:#fef08a;font-size:5px;font-weight:900}.comic-3976__item:hover{transform:translate(-2px,-2px) rotate(-1deg);background:#f8fafc}`,
  },
  {
    id: 3977,
    name: "Utility Belt Loadout",
    preview: (
      <section className="comic-3977">
        <div className="comic-3977__label">UTILITY BELT</div>

        <div className="comic-3977__belt">
          <div className="comic-3977__slot">
            <i className="ri-battery-charge-fill"></i>
          </div>
          <div className="comic-3977__slot">
            <i className="ri-flashlight-fill"></i>
          </div>
          <div className="comic-3977__buckle">BAT</div>
          <div className="comic-3977__slot">
            <i className="ri-focus-2-fill"></i>
          </div>
          <div className="comic-3977__slot">
            <i className="ri-links-line"></i>
          </div>
        </div>

        <div className="comic-3977__footer">
          <span>LOADOUT READY</span>
          <button type="button">EQUIP</button>
        </div>
      </section>
    ),
    html: `<section class="comic-3977">
    <div class="comic-3977__label">UTILITY BELT</div>

    <div class="comic-3977__belt">
        <div class="comic-3977__slot">
            <i class="ri-battery-charge-fill"></i>
        </div>
        <div class="comic-3977__slot">
            <i class="ri-flashlight-fill"></i>
        </div>
        <div class="comic-3977__buckle">BAT</div>
        <div class="comic-3977__slot">
            <i class="ri-focus-2-fill"></i>
        </div>
        <div class="comic-3977__slot">
            <i class="ri-links-line"></i>
        </div>
    </div>

    <div class="comic-3977__footer">
        <span>LOADOUT READY</span>
        <button type="button">EQUIP</button>
    </div>
</section>`,
    css: `.comic-3977{position:relative;width:340px;max-width:100%;padding:16px;border:4px solid #111;background:#facc15;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3977::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.12) 1.1px,transparent 1.4px);background-size:8px 8px}.comic-3977__label{position:relative;z-index:1;display:inline-block;padding:5px 8px;border:3px solid #111;background:#111;color:#fff;font:900 8px/1 Arial Black,Arial,sans-serif;letter-spacing:1px}.comic-3977__belt{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr 78px 1fr 1fr;align-items:center;gap:8px;margin-top:18px;padding:8px 0}.comic-3977__belt::before{content:"";position:absolute;left:0;right:0;top:50%;height:18px;border:3px solid #111;background:#b45309;transform:translateY(-50%)}.comic-3977__slot,.comic-3977__buckle{position:relative;z-index:1;height:56px;display:grid;place-items:center;border:3px solid #111;box-shadow:3px 3px 0 #111}.comic-3977__slot{background:#fff}.comic-3977__slot i{font-size:24px;color:#1d4ed8}.comic-3977__buckle{background:#ef4444;color:#fff;font:900 13px/1 Arial Black,Arial,sans-serif}.comic-3977__footer{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-top:18px}.comic-3977__footer span{font-size:6px;font-weight:900;letter-spacing:1.1px}.comic-3977__footer button{padding:8px 12px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}.comic-3977__slot:hover{transform:translateY(-2px)}.comic-3977__footer button:hover{background:#60a5fa;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3978,
    name: "Grapple Launcher Card",
    preview: (
      <article className="comic-3978">
        <div className="comic-3978__header">
          <small>FIELD GADGET</small>
          <span>MK-II</span>
        </div>

        <div className="comic-3978__body">
          <div className="comic-3978__icon">
            <i className="ri-links-fill"></i>
          </div>

          <div className="comic-3978__info">
            <h3>GRAPPLE LAUNCHER</h3>
            <p>Rapid vertical access with precision line control.</p>
          </div>
        </div>

        <div className="comic-3978__stats">
          <span>
            RANGE <strong>62M</strong>
          </span>
          <span>
            TENSION <strong>94%</strong>
          </span>
        </div>

        <button type="button" className="comic-3978__button">
          DEPLOY HOOK
        </button>
      </article>
    ),
    html: `<article class="comic-3978">
    <div class="comic-3978__header">
        <small>FIELD GADGET</small>
        <span>MK-II</span>
    </div>

    <div class="comic-3978__body">
        <div class="comic-3978__icon">
            <i class="ri-links-fill"></i>
        </div>

        <div class="comic-3978__info">
            <h3>GRAPPLE LAUNCHER</h3>
            <p>Rapid vertical access with precision line control.</p>
        </div>
    </div>

    <div class="comic-3978__stats">
        <span>RANGE <strong>62M</strong></span>
        <span>TENSION <strong>94%</strong></span>
    </div>

    <button type="button" class="comic-3978__button">
        DEPLOY HOOK
    </button>
</article>`,
    css: `.comic-3978{position:relative;width:340px;max-width:100%;padding:14px;border:4px solid #111;background:#fff;color:#111;box-shadow:8px 8px 0 #ef4444;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3978::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.08) 1.1px,transparent 1.4px);background-size:8px 8px}.comic-3978__header{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between}.comic-3978__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#2563eb}.comic-3978__header span{padding:4px 7px;border:2px solid #111;background:#facc15;font-size:6px;font-weight:900;transform:rotate(4deg)}.comic-3978__body{position:relative;z-index:1;display:flex;align-items:center;gap:12px;margin-top:12px}.comic-3978__icon{width:74px;height:74px;display:grid;place-items:center;flex:0 0 74px;border:4px solid #111;border-radius:50%;background:#172554;color:#facc15;box-shadow:4px 4px 0 #111;font-size:32px;transition:transform .2s ease}.comic-3978__info h3{margin:0;font:900 16px/1 Arial Black,Arial,sans-serif}.comic-3978__info p{margin:7px 0 0;color:#52525b;font-size:7px;font-weight:700;line-height:1.5}.comic-3978__stats{position:relative;z-index:1;display:flex;gap:8px;margin-top:14px}.comic-3978__stats span{flex:1;padding:8px;border:3px solid #111;background:#dbeafe;font-size:6px;font-weight:900;text-align:center}.comic-3978__stats strong{display:block;margin-top:4px;font-size:10px}.comic-3978__button{position:relative;z-index:1;width:100%;margin-top:12px;padding:9px;border:3px solid #111;background:#ef4444;color:#fff;box-shadow:4px 4px 0 #111;font-size:7px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}.comic-3978:hover .comic-3978__icon{transform:rotate(-8deg) scale(1.06)}.comic-3978__button:hover{background:#2563eb;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3979,
    name: "Bat-Signal Control",
    preview: (
      <section className="comic-3979">
        <div className="comic-3979__left">
          <small>GOTHAM ROOFTOP</small>
          <h3>BAT-SIGNAL</h3>
          <p>Emergency city beacon linked directly to the Batcomputer.</p>

          <div className="comic-3979__buttons">
            <button type="button">ACTIVATE</button>
            <button type="button">TEST</button>
          </div>
        </div>

        <div className="comic-3979__right">
          <div className="comic-3979__lamp">
            <i className="ri-lightbulb-flash-fill"></i>
          </div>
          <span>ONLINE</span>
        </div>
      </section>
    ),
    html: `<section class="comic-3979">
    <div class="comic-3979__left">
        <small>GOTHAM ROOFTOP</small>
        <h3>BAT-SIGNAL</h3>
        <p>Emergency city beacon linked directly to the Batcomputer.</p>

        <div class="comic-3979__buttons">
            <button type="button">ACTIVATE</button>
            <button type="button">TEST</button>
        </div>
    </div>

    <div class="comic-3979__right">
        <div class="comic-3979__lamp">
            <i class="ri-lightbulb-flash-fill"></i>
        </div>
        <span>ONLINE</span>
    </div>
</section>`,
    css: `.comic-3979{position:relative;width:350px;max-width:100%;display:grid;grid-template-columns:1fr 110px;gap:12px;padding:14px;border:4px solid #111;background:#1e293b;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3979::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 16px,rgba(96,165,250,.08) 16px 19px)}.comic-3979__left,.comic-3979__right{position:relative;z-index:1}.comic-3979__left small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#93c5fd}.comic-3979__left h3{margin:5px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}.comic-3979__left p{margin:8px 0 0;color:#cbd5e1;font-size:7px;font-weight:700;line-height:1.5}.comic-3979__buttons{display:flex;gap:8px;margin-top:14px}.comic-3979__buttons button{padding:8px 10px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}.comic-3979__buttons button:last-child{background:#facc15}.comic-3979__right{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:10px;border:3px solid #111;background:#0f172a;box-shadow:4px 4px 0 #111}.comic-3979__lamp{width:64px;height:64px;display:grid;place-items:center;border:4px solid #111;border-radius:50%;background:#facc15;color:#111;box-shadow:4px 4px 0 #111;font-size:28px;transition:transform .2s ease,box-shadow .2s ease}.comic-3979__right span{padding:4px 6px;border:2px solid #111;background:#22c55e;color:#111;font-size:6px;font-weight:900}.comic-3979:hover .comic-3979__lamp{transform:scale(1.08) rotate(6deg);box-shadow:0 0 0 #111,0 0 18px rgba(250,204,21,.5)}.comic-3979__buttons button:hover{background:#60a5fa;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3980,
    name: "Communicator Contact Card",
    preview: (
      <article className="comic-3980">
        <div className="comic-3980__head">
          <span className="comic-3980__avatar">
            <i className="ri-user-star-fill"></i>
          </span>

          <div className="comic-3980__info">
            <small>SECURE CHANNEL</small>
            <h3>NIGHTWING</h3>
            <span>BLUDHAVEN LINK</span>
          </div>

          <span className="comic-3980__status">LIVE</span>
        </div>

        <div className="comic-3980__message">
          “Signal received. Send mission coordinates and I’m in.”
        </div>

        <div className="comic-3980__actions">
          <button type="button">CALL</button>
          <button type="button">MESSAGE</button>
          <button type="button">SHARE FILE</button>
        </div>
      </article>
    ),
    html: `<article class="comic-3980">
    <div class="comic-3980__head">
        <span class="comic-3980__avatar">
            <i class="ri-user-star-fill"></i>
        </span>

        <div class="comic-3980__info">
            <small>SECURE CHANNEL</small>
            <h3>NIGHTWING</h3>
            <span>BLUDHAVEN LINK</span>
        </div>

        <span class="comic-3980__status">LIVE</span>
    </div>

    <div class="comic-3980__message">
        “Signal received. Send mission coordinates and I’m in.”
    </div>

    <div class="comic-3980__actions">
        <button type="button">CALL</button>
        <button type="button">MESSAGE</button>
        <button type="button">SHARE FILE</button>
    </div>
</article>`,
    css: `.comic-3980{position:relative;width:340px;max-width:100%;padding:14px;border:4px solid #111;background:#fff;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3980::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.1) 1.1px,transparent 1.4px);background-size:8px 8px}.comic-3980__head{position:relative;z-index:1;display:flex;align-items:center;gap:10px}.comic-3980__avatar{width:52px;height:52px;display:grid;place-items:center;flex:0 0 52px;border:4px solid #111;border-radius:50%;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font-size:22px;transition:transform .2s ease}.comic-3980__info{display:flex;min-width:0;flex:1;flex-direction:column}.comic-3980__info small{font-size:6px;font-weight:900;letter-spacing:1.2px;color:#2563eb}.comic-3980__info h3{margin:4px 0 0;font:900 16px/1 Arial Black,Arial,sans-serif}.comic-3980__info span{margin-top:4px;color:#64748b;font-size:5px;font-weight:900;letter-spacing:1px}.comic-3980__status{padding:4px 6px;border:2px solid #111;background:#22c55e;font-size:6px;font-weight:900}.comic-3980__message{position:relative;z-index:1;margin-top:13px;padding:12px;border:3px solid #111;background:#f8fafc;box-shadow:4px 4px 0 #111;font-size:8px;font-weight:700;line-height:1.5}.comic-3980__actions{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:12px}.comic-3980__actions button{padding:8px 6px;border:3px solid #111;background:#facc15;box-shadow:3px 3px 0 #111;font-size:5px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}.comic-3980__actions button:nth-child(2){background:#dbeafe}.comic-3980__actions button:nth-child(3){background:#fee2e2}.comic-3980:hover .comic-3980__avatar{transform:rotate(-8deg) scale(1.08)}.comic-3980__actions button:hover{background:#60a5fa;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3981,
    name: "Evidence Scanner Panel",
    preview: (
      <section className="comic-3981">
        <div className="comic-3981__top">
          <div>
            <small>DETECTIVE MODE</small>
            <h3>EVIDENCE SCAN</h3>
          </div>
          <span>SCAN</span>
        </div>

        <div className="comic-3981__screen">
          <div className="comic-3981__target">
            <span></span>
            <span></span>
          </div>

          <div className="comic-3981__readout">
            <strong>FIBER TRACE</strong>
            <small>MATCH: 87%</small>
          </div>
        </div>

        <div className="comic-3981__meta">
          <span>
            TYPE <strong>CHEMICAL</strong>
          </span>
          <span>
            ZONE <strong>G-12</strong>
          </span>
        </div>
      </section>
    ),
    html: `<section class="comic-3981">
    <div class="comic-3981__top">
        <div>
            <small>DETECTIVE MODE</small>
            <h3>EVIDENCE SCAN</h3>
        </div>
        <span>SCAN</span>
    </div>

    <div class="comic-3981__screen">
        <div class="comic-3981__target">
            <span></span>
            <span></span>
        </div>

        <div class="comic-3981__readout">
            <strong>FIBER TRACE</strong>
            <small>MATCH: 87%</small>
        </div>
    </div>

    <div class="comic-3981__meta">
        <span>TYPE <strong>CHEMICAL</strong></span>
        <span>ZONE <strong>G-12</strong></span>
    </div>
</section>`,
    css: `.comic-3981{position:relative;width:340px;max-width:100%;padding:14px;border:4px solid #111;background:#0f172a;color:#fff;box-shadow:8px 8px 0 #22c55e;font-family:Arial,Helvetica,sans-serif;overflow:hidden}.comic-3981::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 14px,rgba(34,197,94,.06) 14px 15px)}.comic-3981__top{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between}.comic-3981__top small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#86efac}.comic-3981__top h3{margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}.comic-3981__top span{padding:5px 8px;border:2px solid #111;background:#22c55e;color:#111;font-size:6px;font-weight:900;transform:rotate(4deg)}.comic-3981__screen{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px;padding:12px;border:3px solid #111;background:#111827;box-shadow:4px 4px 0 #111}.comic-3981__target{position:relative;width:84px;height:84px;flex:0 0 84px;border:3px solid #22c55e;border-radius:50%;box-shadow:inset 0 0 0 3px rgba(34,197,94,.15),0 0 20px rgba(34,197,94,.15)}.comic-3981__target span:first-child{position:absolute;left:50%;top:0;bottom:0;width:2px;background:#22c55e;transform:translateX(-50%)}.comic-3981__target span:last-child{position:absolute;top:50%;left:0;right:0;height:2px;background:#22c55e;transform:translateY(-50%)}.comic-3981__readout{display:flex;flex:1;flex-direction:column;gap:8px}.comic-3981__readout strong{font:900 14px/1 Arial Black,Arial,sans-serif;color:#86efac}.comic-3981__readout small{display:inline-block;width:max-content;padding:4px 6px;border:2px solid #111;background:#facc15;color:#111;font-size:6px;font-weight:900}.comic-3981__meta{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}.comic-3981__meta span{padding:8px;border:3px solid #111;background:#fff;color:#111;font-size:6px;font-weight:900;text-align:center}.comic-3981__meta strong{display:block;margin-top:4px;font-size:8px}.comic-3981:hover .comic-3981__target{box-shadow:inset 0 0 0 3px rgba(34,197,94,.2),0 0 24px rgba(34,197,94,.35)}`,
  },
  {
    id: 3982,
    name: "Batcomputer Surveillance Panel",
    preview: (
      <section className="comic-3982">
        <div className="comic-3982__header">
          <div>
            <small>LIVE SURVEILLANCE</small>
            <h3>GOTHAM GRID</h3>
          </div>

          <span className="comic-3982__live">
            <span></span>
            LIVE
          </span>
        </div>

        <div className="comic-3982__map">
          <span className="comic-3982__road comic-3982__road--1"></span>
          <span className="comic-3982__road comic-3982__road--2"></span>
          <span className="comic-3982__road comic-3982__road--3"></span>

          <span className="comic-3982__point comic-3982__point--1">
            <i className="ri-shield-fill"></i>
          </span>

          <span className="comic-3982__point comic-3982__point--2">
            <i className="ri-alarm-warning-fill"></i>
          </span>

          <span className="comic-3982__point comic-3982__point--3">
            <i className="ri-map-pin-2-fill"></i>
          </span>

          <span className="comic-3982__scan"></span>
        </div>

        <div className="comic-3982__footer">
          <div>
            <small>CAMERAS</small>
            <strong>84 / 92</strong>
          </div>

          <div>
            <small>THREATS</small>
            <strong>03</strong>
          </div>

          <button type="button">
            EXPAND
            <i className="ri-fullscreen-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3982">
    <div class="comic-3982__header">
        <div>
            <small>LIVE SURVEILLANCE</small>
            <h3>GOTHAM GRID</h3>
        </div>

        <span class="comic-3982__live">
            <span></span>
            LIVE
        </span>
    </div>

    <div class="comic-3982__map">
        <span class="comic-3982__road comic-3982__road--1"></span>
        <span class="comic-3982__road comic-3982__road--2"></span>
        <span class="comic-3982__road comic-3982__road--3"></span>

        <span class="comic-3982__point comic-3982__point--1">
            <i class="ri-shield-fill"></i>
        </span>

        <span class="comic-3982__point comic-3982__point--2">
            <i class="ri-alarm-warning-fill"></i>
        </span>

        <span class="comic-3982__point comic-3982__point--3">
            <i class="ri-map-pin-2-fill"></i>
        </span>

        <span class="comic-3982__scan"></span>
    </div>

    <div class="comic-3982__footer">
        <div>
            <small>CAMERAS</small>
            <strong>84 / 92</strong>
        </div>

        <div>
            <small>THREATS</small>
            <strong>03</strong>
        </div>

        <button type="button">
            EXPAND
            <i class="ri-fullscreen-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3982{position:relative;width:350px;max-width:100%;padding:14px;border:4px solid #111;background:#172554;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3982::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3982__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3982__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#93c5fd}
.comic-3982__header h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3982__live{display:flex;align-items:center;gap:5px;padding:5px 6px;border:2px solid #111;background:#ef4444;color:#fff;font-size:6px;font-weight:900}
.comic-3982__live>span{width:7px;height:7px;border:2px solid #111;border-radius:50%;background:#fff}
.comic-3982__map{position:relative;height:140px;margin-top:13px;overflow:hidden;border:3px solid #111;background:#1d4ed8;box-shadow:4px 4px 0 #111}
.comic-3982__map::before{content:"";position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:22px 22px}
.comic-3982__road{position:absolute;height:9px;border:2px solid #111;background:#93c5fd}
.comic-3982__road--1{width:190px;left:-15px;top:42px;transform:rotate(16deg)}
.comic-3982__road--2{width:220px;right:-35px;top:80px;transform:rotate(-18deg)}
.comic-3982__road--3{width:145px;left:95px;top:65px;transform:rotate(72deg)}
.comic-3982__point{position:absolute;z-index:3;width:31px;height:31px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;box-shadow:3px 3px 0 #111;font-size:13px;transition:transform .2s ease}
.comic-3982__point--1{left:45px;top:67px;background:#facc15;color:#111}
.comic-3982__point--2{right:58px;top:30px;background:#ef4444;color:#fff}
.comic-3982__point--3{right:100px;bottom:14px;background:#22c55e;color:#111}
.comic-3982__scan{position:absolute;left:50%;top:50%;width:75px;height:75px;border:3px solid #22c55e;border-radius:50%;transform:translate(-50%,-50%);transition:transform .25s ease}
.comic-3982__footer{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr auto;align-items:center;gap:7px;margin-top:12px}
.comic-3982__footer>div{padding:7px;border:2px solid #111;background:#fff;color:#111;text-align:center}
.comic-3982__footer small{display:block;font-size:5px;font-weight:900;color:#64748b}
.comic-3982__footer strong{display:block;margin-top:3px;font-size:8px}
.comic-3982__footer button{display:flex;align-items:center;gap:4px;padding:9px 7px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:5px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3982:hover .comic-3982__scan{transform:translate(-50%,-50%) scale(1.35)}
.comic-3982:hover .comic-3982__point--2{transform:rotate(8deg) scale(1.1)}
.comic-3982__footer button:hover{background:#fff;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3983,
    name: "Batcomputer Cipher Decoder",
    preview: (
      <section className="comic-3983">
        <div className="comic-3983__header">
          <span className="comic-3983__icon">
            <i className="ri-lock-password-fill"></i>
          </span>

          <div>
            <small>ENCRYPTED SIGNAL</small>
            <h3>CIPHER DECODER</h3>
          </div>

          <span className="comic-3983__percent">72%</span>
        </div>

        <div className="comic-3983__code">
          <span>4A</span>
          <span>?</span>
          <span>9C</span>
          <span>7F</span>
          <span>?</span>
          <span>2B</span>
        </div>

        <div className="comic-3983__progress">
          <span></span>
        </div>

        <div className="comic-3983__actions">
          <button type="button">
            <i className="ri-refresh-line"></i>
            RESCAN
          </button>

          <button type="button">
            DECODE
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3983">
    <div class="comic-3983__header">
        <span class="comic-3983__icon">
            <i class="ri-lock-password-fill"></i>
        </span>

        <div>
            <small>ENCRYPTED SIGNAL</small>
            <h3>CIPHER DECODER</h3>
        </div>

        <span class="comic-3983__percent">72%</span>
    </div>

    <div class="comic-3983__code">
        <span>4A</span>
        <span>?</span>
        <span>9C</span>
        <span>7F</span>
        <span>?</span>
        <span>2B</span>
    </div>

    <div class="comic-3983__progress">
        <span></span>
    </div>

    <div class="comic-3983__actions">
        <button type="button">
            <i class="ri-refresh-line"></i>
            RESCAN
        </button>

        <button type="button">
            DECODE
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3983{position:relative;width:345px;max-width:100%;padding:15px;border:4px solid #111;background:#22c55e;color:#111;box-shadow:8px 8px 0 #6b21a8;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3983::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.18) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3983__header{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3983__icon{width:42px;height:42px;display:grid;place-items:center;flex:0 0 42px;border:3px solid #111;background:#6b21a8;color:#fff;box-shadow:3px 3px 0 #111;font-size:19px;transform:rotate(-5deg);transition:transform .2s ease}
.comic-3983__header>div{min-width:0;flex:1}
.comic-3983__header small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#14532d}
.comic-3983__header h3{margin:4px 0 0;font:900 15px/1 Arial Black,Arial,sans-serif}
.comic-3983__percent{width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#facc15;box-shadow:3px 3px 0 #111;font-size:7px;font-weight:900}
.comic-3983__code{position:relative;z-index:2;display:grid;grid-template-columns:repeat(6,1fr);gap:5px;margin-top:15px}
.comic-3983__code span{height:42px;display:grid;place-items:center;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font:900 9px/1 Arial Black,Arial,sans-serif}
.comic-3983__code span:nth-child(2),.comic-3983__code span:nth-child(5){background:#fde047;color:#6b21a8;font-size:15px}
.comic-3983__progress{position:relative;z-index:2;height:14px;margin-top:13px;padding:2px;border:3px solid #111;background:#fff}
.comic-3983__progress span{display:block;width:72%;height:100%;background:#6b21a8;transition:width .25s ease,background .18s ease}
.comic-3983__actions{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.comic-3983__actions button{display:flex;align-items:center;justify-content:center;gap:5px;padding:8px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3983__actions button:last-child{background:#6b21a8;color:#fff}
.comic-3983:hover .comic-3983__icon{transform:rotate(7deg) scale(1.08)}
.comic-3983:hover .comic-3983__progress span{width:86%;background:#facc15}
.comic-3983__actions button:hover{background:#facc15;color:#111;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3984,
    name: "Bat Suit Diagnostics",
    preview: (
      <section className="comic-3984">
        <div className="comic-3984__top">
          <div>
            <small>SUIT SYSTEM</small>
            <h3>DIAGNOSTICS</h3>
          </div>

          <span>MARK VII</span>
        </div>

        <div className="comic-3984__body">
          <div className="comic-3984__suit">
            <span className="comic-3984__head"></span>
            <span className="comic-3984__torso"></span>
            <span className="comic-3984__arm comic-3984__arm--left"></span>
            <span className="comic-3984__arm comic-3984__arm--right"></span>
          </div>

          <div className="comic-3984__systems">
            <div>
              <span>ARMOR</span>
              <strong>96%</strong>
            </div>
            <div>
              <span>COMMS</span>
              <strong>100%</strong>
            </div>
            <div>
              <span>STEALTH</span>
              <strong>88%</strong>
            </div>
            <div>
              <span>POWER</span>
              <strong>74%</strong>
            </div>
          </div>
        </div>

        <div className="comic-3984__status">
          <i className="ri-checkbox-circle-fill"></i>
          ALL CRITICAL SYSTEMS OPERATIONAL
        </div>
      </section>
    ),
    html: `<section class="comic-3984">
    <div class="comic-3984__top">
        <div>
            <small>SUIT SYSTEM</small>
            <h3>DIAGNOSTICS</h3>
        </div>

        <span>MARK VII</span>
    </div>

    <div class="comic-3984__body">
        <div class="comic-3984__suit">
            <span class="comic-3984__head"></span>
            <span class="comic-3984__torso"></span>
            <span class="comic-3984__arm comic-3984__arm--left"></span>
            <span class="comic-3984__arm comic-3984__arm--right"></span>
        </div>

        <div class="comic-3984__systems">
            <div>
                <span>ARMOR</span>
                <strong>96%</strong>
            </div>
            <div>
                <span>COMMS</span>
                <strong>100%</strong>
            </div>
            <div>
                <span>STEALTH</span>
                <strong>88%</strong>
            </div>
            <div>
                <span>POWER</span>
                <strong>74%</strong>
            </div>
        </div>
    </div>

    <div class="comic-3984__status">
        <i class="ri-checkbox-circle-fill"></i>
        ALL CRITICAL SYSTEMS OPERATIONAL
    </div>
</section>`,
    css: `.comic-3984{position:relative;width:345px;max-width:100%;padding:14px;border:4px solid #111;background:#111827;color:#fff;box-shadow:8px 8px 0 #60a5fa;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3984::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-35deg,transparent 0 15px,rgba(96,165,250,.07) 15px 18px)}
.comic-3984__top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3984__top small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#93c5fd}
.comic-3984__top h3{margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3984__top>span{padding:5px 7px;border:2px solid #111;background:#facc15;color:#111;font-size:6px;font-weight:900;transform:rotate(3deg)}
.comic-3984__body{position:relative;z-index:2;display:grid;grid-template-columns:115px 1fr;gap:12px;margin-top:14px}
.comic-3984__suit{position:relative;height:145px;border:3px solid #111;background:#1e3a8a;box-shadow:4px 4px 0 #111}
.comic-3984__head{position:absolute;left:50%;top:15px;width:37px;height:34px;border:3px solid #111;background:#374151;transform:translateX(-50%);clip-path:polygon(12% 0,88% 0,100% 28%,83% 100%,17% 100%,0 28%)}
.comic-3984__torso{position:absolute;left:50%;top:52px;width:55px;height:69px;border:3px solid #111;background:#374151;transform:translateX(-50%);clip-path:polygon(18% 0,82% 0,100% 22%,80% 100%,20% 100%,0 22%)}
.comic-3984__arm{position:absolute;top:59px;width:18px;height:67px;border:3px solid #111;background:#4b5563}
.comic-3984__arm--left{left:11px;transform:rotate(8deg)}
.comic-3984__arm--right{right:11px;transform:rotate(-8deg)}
.comic-3984__systems{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.comic-3984__systems div{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px;border:3px solid #111;background:#fff;color:#111;box-shadow:3px 3px 0 #2563eb}
.comic-3984__systems span{font-size:5px;font-weight:900;letter-spacing:.8px;color:#64748b}
.comic-3984__systems strong{margin-top:5px;font:900 12px/1 Arial Black,Arial,sans-serif}
.comic-3984__systems div:nth-child(4){background:#fef08a}
.comic-3984__status{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;padding:8px;border:3px solid #111;background:#22c55e;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900}
.comic-3984__status i{font-size:13px}
.comic-3984:hover .comic-3984__suit{background:#2563eb}
.comic-3984:hover .comic-3984__head{transform:translateX(-50%) scale(1.07)}`,
  },
  {
    id: 3985,
    name: "Bat Drone Controller",
    preview: (
      <section className="comic-3985">
        <div className="comic-3985__header">
          <div>
            <small>AERIAL UNIT</small>
            <h3>BAT-DRONE</h3>
          </div>

          <span className="comic-3985__signal">
            <i className="ri-signal-wifi-fill"></i>
            92%
          </span>
        </div>

        <div className="comic-3985__radar">
          <span className="comic-3985__circle comic-3985__circle--1"></span>
          <span className="comic-3985__circle comic-3985__circle--2"></span>
          <span className="comic-3985__drone">
            <i className="ri-send-plane-fill"></i>
          </span>
          <span className="comic-3985__target"></span>
        </div>

        <div className="comic-3985__controls">
          <button type="button">
            <i className="ri-arrow-left-s-line"></i>
          </button>

          <button type="button">
            <i className="ri-arrow-up-s-line"></i>
          </button>

          <button type="button">
            <i className="ri-focus-3-line"></i>
          </button>

          <button type="button">
            <i className="ri-arrow-down-s-line"></i>
          </button>

          <button type="button">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3985">
    <div class="comic-3985__header">
        <div>
            <small>AERIAL UNIT</small>
            <h3>BAT-DRONE</h3>
        </div>

        <span class="comic-3985__signal">
            <i class="ri-signal-wifi-fill"></i>
            92%
        </span>
    </div>

    <div class="comic-3985__radar">
        <span class="comic-3985__circle comic-3985__circle--1"></span>
        <span class="comic-3985__circle comic-3985__circle--2"></span>

        <span class="comic-3985__drone">
            <i class="ri-send-plane-fill"></i>
        </span>

        <span class="comic-3985__target"></span>
    </div>

    <div class="comic-3985__controls">
        <button type="button"><i class="ri-arrow-left-s-line"></i></button>
        <button type="button"><i class="ri-arrow-up-s-line"></i></button>
        <button type="button"><i class="ri-focus-3-line"></i></button>
        <button type="button"><i class="ri-arrow-down-s-line"></i></button>
        <button type="button"><i class="ri-arrow-right-s-line"></i></button>
    </div>
</section>`,
    css: `.comic-3985{position:relative;width:330px;max-width:100%;padding:14px;border:4px solid #111;background:#38bdf8;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3985::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.13) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3985__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3985__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#1e3a8a}
.comic-3985__header h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3985__signal{display:flex;align-items:center;gap:4px;padding:5px 6px;border:2px solid #111;background:#22c55e;font-size:6px;font-weight:900}
.comic-3985__radar{position:relative;height:145px;margin-top:13px;overflow:hidden;border:3px solid #111;background:#172554;box-shadow:4px 4px 0 #111}
.comic-3985__radar::before,.comic-3985__radar::after{content:"";position:absolute;background:#2563eb}
.comic-3985__radar::before{left:50%;top:0;width:2px;height:100%}
.comic-3985__radar::after{left:0;top:50%;width:100%;height:2px}
.comic-3985__circle{position:absolute;left:50%;top:50%;border:2px solid #60a5fa;border-radius:50%;transform:translate(-50%,-50%)}
.comic-3985__circle--1{width:65px;height:65px}
.comic-3985__circle--2{width:115px;height:115px}
.comic-3985__drone{position:absolute;left:53px;top:39px;width:38px;height:38px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:17px;transition:transform .2s ease}
.comic-3985__target{position:absolute;right:46px;bottom:31px;width:26px;height:26px;border:3px solid #ef4444;border-radius:50%}
.comic-3985__target::before,.comic-3985__target::after{content:"";position:absolute;background:#ef4444}
.comic-3985__target::before{left:50%;top:-6px;width:3px;height:34px;transform:translateX(-50%)}
.comic-3985__target::after{left:-6px;top:50%;width:34px;height:3px;transform:translateY(-50%)}
.comic-3985__controls{position:relative;z-index:2;display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:12px}
.comic-3985__controls button{height:36px;display:grid;place-items:center;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-size:15px;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3985__controls button:nth-child(3){background:#facc15}
.comic-3985:hover .comic-3985__drone{transform:translate(14px,7px) rotate(12deg)}
.comic-3985__controls button:hover{background:#2563eb;color:#fff;transform:translateY(-2px)}`,
  },
  {
    id: 3986,
    name: "Evidence Timeline",
    preview: (
      <section className="comic-3986">
        <div className="comic-3986__header">
          <div>
            <small>CASE #102</small>
            <h3>EVIDENCE TIMELINE</h3>
          </div>

          <span>6 ITEMS</span>
        </div>

        <div className="comic-3986__timeline">
          <div className="comic-3986__entry">
            <span className="comic-3986__marker">
              <i className="ri-camera-fill"></i>
            </span>
            <div>
              <small>21:42</small>
              <strong>Camera footage</strong>
              <p>Unknown vehicle enters warehouse district.</p>
            </div>
          </div>

          <span className="comic-3986__line"></span>

          <div className="comic-3986__entry">
            <span className="comic-3986__marker comic-3986__marker--yellow">
              <i className="ri-fingerprint-fill"></i>
            </span>
            <div>
              <small>22:09</small>
              <strong>Fingerprint match</strong>
              <p>Partial print recovered near loading bay.</p>
            </div>
          </div>

          <span className="comic-3986__line"></span>

          <div className="comic-3986__entry">
            <span className="comic-3986__marker comic-3986__marker--red">
              <i className="ri-alarm-warning-fill"></i>
            </span>
            <div>
              <small>22:16</small>
              <strong>Threat detected</strong>
              <p>Emergency signal activated inside sector B.</p>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3986">
    <div class="comic-3986__header">
        <div>
            <small>CASE #102</small>
            <h3>EVIDENCE TIMELINE</h3>
        </div>

        <span>6 ITEMS</span>
    </div>

    <div class="comic-3986__timeline">
        <div class="comic-3986__entry">
            <span class="comic-3986__marker">
                <i class="ri-camera-fill"></i>
            </span>

            <div>
                <small>21:42</small>
                <strong>Camera footage</strong>
                <p>Unknown vehicle enters warehouse district.</p>
            </div>
        </div>

        <span class="comic-3986__line"></span>

        <div class="comic-3986__entry">
            <span class="comic-3986__marker comic-3986__marker--yellow">
                <i class="ri-fingerprint-fill"></i>
            </span>

            <div>
                <small>22:09</small>
                <strong>Fingerprint match</strong>
                <p>Partial print recovered near loading bay.</p>
            </div>
        </div>

        <span class="comic-3986__line"></span>

        <div class="comic-3986__entry">
            <span class="comic-3986__marker comic-3986__marker--red">
                <i class="ri-alarm-warning-fill"></i>
            </span>

            <div>
                <small>22:16</small>
                <strong>Threat detected</strong>
                <p>Emergency signal activated inside sector B.</p>
            </div>
        </div>
    </div>
</section>`,
    css: `.comic-3986{position:relative;width:345px;max-width:100%;padding:14px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3986::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.08) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3986__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3986__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#2563eb}
.comic-3986__header h3{margin:4px 0 0;font:900 16px/1 Arial Black,Arial,sans-serif}
.comic-3986__header>span{padding:5px 6px;border:2px solid #111;background:#facc15;font-size:6px;font-weight:900;transform:rotate(3deg)}
.comic-3986__timeline{position:relative;z-index:2;margin-top:14px;padding:11px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3986__entry{display:flex;align-items:flex-start;gap:9px}
.comic-3986__marker{width:35px;height:35px;display:grid;place-items:center;flex:0 0 35px;border:3px solid #111;border-radius:50%;background:#2563eb;color:#fff;font-size:15px}
.comic-3986__marker--yellow{background:#facc15;color:#111}
.comic-3986__marker--red{background:#ef4444;color:#fff}
.comic-3986__entry>div{display:flex;flex-direction:column}
.comic-3986__entry small{font-size:5px;font-weight:900;color:#64748b}
.comic-3986__entry strong{margin-top:2px;font-size:8px;font-weight:900}
.comic-3986__entry p{margin:4px 0 0;color:#52525b;font-size:6px;font-weight:700;line-height:1.4}
.comic-3986__line{display:block;width:3px;height:13px;margin-left:16px;background:#111}
.comic-3986:hover .comic-3986__marker{transform:rotate(-6deg)}
.comic-3986:hover .comic-3986__marker--red{transform:rotate(6deg) scale(1.06)}`,
  },
  {
    id: 3987,
    name: "Encrypted Case File",
    preview: (
      <article className="comic-3987">
        <div className="comic-3987__stripe">TOP SECRET</div>

        <div className="comic-3987__top">
          <span className="comic-3987__folder">
            <i className="ri-folder-lock-fill"></i>
          </span>

          <div>
            <small>BATCOMPUTER ARCHIVE</small>
            <h3>PROJECT NIGHTFALL</h3>
          </div>
        </div>

        <div className="comic-3987__details">
          <div>
            <small>ACCESS</small>
            <strong>LEVEL 7</strong>
          </div>

          <div>
            <small>FILES</small>
            <strong>128</strong>
          </div>

          <div>
            <small>STATUS</small>
            <strong>LOCKED</strong>
          </div>
        </div>

        <div className="comic-3987__lock">
          <i className="ri-lock-2-fill"></i>
          <span>
            <small>ENCRYPTION</small>
            <strong>WAYNE-X 4096</strong>
          </span>
        </div>

        <button type="button" className="comic-3987__button">
          REQUEST ACCESS
          <i className="ri-key-2-line"></i>
        </button>
      </article>
    ),
    html: `<article class="comic-3987">
    <div class="comic-3987__stripe">TOP SECRET</div>

    <div class="comic-3987__top">
        <span class="comic-3987__folder">
            <i class="ri-folder-lock-fill"></i>
        </span>

        <div>
            <small>BATCOMPUTER ARCHIVE</small>
            <h3>PROJECT NIGHTFALL</h3>
        </div>
    </div>

    <div class="comic-3987__details">
        <div>
            <small>ACCESS</small>
            <strong>LEVEL 7</strong>
        </div>

        <div>
            <small>FILES</small>
            <strong>128</strong>
        </div>

        <div>
            <small>STATUS</small>
            <strong>LOCKED</strong>
        </div>
    </div>

    <div class="comic-3987__lock">
        <i class="ri-lock-2-fill"></i>

        <span>
            <small>ENCRYPTION</small>
            <strong>WAYNE-X 4096</strong>
        </span>
    </div>

    <button type="button" class="comic-3987__button">
        REQUEST ACCESS
        <i class="ri-key-2-line"></i>
    </button>
</article>`,
    css: `.comic-3987{position:relative;width:340px;max-width:100%;padding:17px 14px 14px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #ef4444;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3987::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.08) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3987__stripe{position:absolute;right:-28px;top:16px;z-index:4;width:120px;padding:5px;border-top:3px solid #111;border-bottom:3px solid #111;background:#ef4444;color:#fff;text-align:center;font-size:6px;font-weight:900;letter-spacing:1px;transform:rotate(37deg)}
.comic-3987__top{position:relative;z-index:2;display:flex;align-items:center;gap:11px;padding-right:42px}
.comic-3987__folder{width:51px;height:51px;display:grid;place-items:center;flex:0 0 51px;border:4px solid #111;background:#facc15;box-shadow:4px 4px 0 #111;font-size:23px;transform:rotate(-4deg);transition:transform .2s ease}
.comic-3987__top small{font-size:5px;font-weight:900;letter-spacing:1.3px;color:#2563eb}
.comic-3987__top h3{margin:4px 0 0;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3987__details{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:14px}
.comic-3987__details div{padding:8px 4px;border:3px solid #111;background:#fff;text-align:center}
.comic-3987__details small{display:block;font-size:5px;font-weight:900;color:#64748b}
.comic-3987__details strong{display:block;margin-top:4px;font-size:7px}
.comic-3987__details div:nth-child(3){background:#fee2e2}
.comic-3987__lock{position:relative;z-index:2;display:flex;align-items:center;gap:9px;margin-top:11px;padding:9px;border:3px solid #111;background:#111827;color:#fff;box-shadow:4px 4px 0 #2563eb}
.comic-3987__lock>i{font-size:20px;color:#facc15}
.comic-3987__lock>span{display:flex;flex-direction:column}
.comic-3987__lock small{font-size:5px;font-weight:900;letter-spacing:.9px;color:#93c5fd}
.comic-3987__lock strong{margin-top:3px;font-size:7px}
.comic-3987__button{position:relative;z-index:2;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:11px;padding:9px;border:3px solid #111;background:#2563eb;color:#fff;box-shadow:4px 4px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3987:hover .comic-3987__folder{transform:rotate(6deg) scale(1.08)}
.comic-3987__button:hover{background:#ef4444;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3988,
    name: "Batmobile Vehicle Selector",
    preview: (
      <section className="comic-3988">
        <div className="comic-3988__header">
          <div>
            <small>BATCAVE GARAGE</small>
            <h3>SELECT VEHICLE</h3>
          </div>
          <span>03 / 06</span>
        </div>

        <div className="comic-3988__vehicle">
          <span className="comic-3988__badge">READY!</span>

          <div className="comic-3988__car">
            <i className="ri-roadster-fill"></i>
          </div>

          <strong>BATMOBILE</strong>
          <small>URBAN ASSAULT VEHICLE</small>
        </div>

        <div className="comic-3988__stats">
          <div>
            <span>SPEED</span>
            <strong>98</strong>
          </div>
          <div>
            <span>ARMOR</span>
            <strong>94</strong>
          </div>
          <div>
            <span>POWER</span>
            <strong>91</strong>
          </div>
        </div>

        <div className="comic-3988__controls">
          <button type="button" aria-label="Previous vehicle">
            <i className="ri-arrow-left-line"></i>
          </button>

          <button type="button" className="comic-3988__deploy">
            DEPLOY
          </button>

          <button type="button" aria-label="Next vehicle">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="comic-3988">
    <div class="comic-3988__header">
        <div>
            <small>BATCAVE GARAGE</small>
            <h3>SELECT VEHICLE</h3>
        </div>
        <span>03 / 06</span>
    </div>

    <div class="comic-3988__vehicle">
        <span class="comic-3988__badge">READY!</span>

        <div class="comic-3988__car">
            <i class="ri-roadster-fill"></i>
        </div>

        <strong>BATMOBILE</strong>
        <small>URBAN ASSAULT VEHICLE</small>
    </div>

    <div class="comic-3988__stats">
        <div>
            <span>SPEED</span>
            <strong>98</strong>
        </div>
        <div>
            <span>ARMOR</span>
            <strong>94</strong>
        </div>
        <div>
            <span>POWER</span>
            <strong>91</strong>
        </div>
    </div>

    <div class="comic-3988__controls">
        <button type="button" aria-label="Previous vehicle">
            <i class="ri-arrow-left-line"></i>
        </button>

        <button type="button" class="comic-3988__deploy">
            DEPLOY
        </button>

        <button type="button" aria-label="Next vehicle">
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.comic-3988{position:relative;width:345px;max-width:100%;padding:14px;overflow:hidden;border:4px solid #111;background:#38bdf8;color:#111;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif}
.comic-3988::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.15) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3988__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3988__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#1e3a8a}
.comic-3988__header h3{margin:4px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3988__header>span{padding:5px 6px;border:3px solid #111;background:#facc15;box-shadow:2px 2px 0 #111;font-size:6px;font-weight:900;transform:rotate(3deg)}
.comic-3988__vehicle{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;margin-top:13px;padding:12px;border:3px solid #111;background:#172554;color:#fff;box-shadow:4px 4px 0 #111}
.comic-3988__badge{position:absolute;right:7px;top:7px;padding:4px 6px;border:2px solid #111;background:#22c55e;color:#111;font-size:5px;font-weight:900;transform:rotate(5deg)}
.comic-3988__car{font-size:55px;color:#facc15;transition:transform .22s ease}
.comic-3988__vehicle>strong{font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3988__vehicle>small{margin-top:4px;color:#93c5fd;font-size:5px;font-weight:900;letter-spacing:1px}
.comic-3988__stats{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}
.comic-3988__stats div{padding:7px;border:3px solid #111;background:#fff;text-align:center}
.comic-3988__stats span{display:block;font-size:5px;font-weight:900;color:#64748b}
.comic-3988__stats strong{display:block;margin-top:3px;font:900 11px/1 Arial Black,Arial,sans-serif}
.comic-3988__controls{position:relative;z-index:2;display:grid;grid-template-columns:40px 1fr 40px;gap:7px;margin-top:11px}
.comic-3988__controls button{height:38px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3988__controls .comic-3988__deploy{background:#ef4444;color:#fff;font-size:6px}
.comic-3988:hover .comic-3988__car{transform:translateX(7px) rotate(-2deg) scale(1.06)}
.comic-3988__controls button:hover{background:#facc15;color:#111;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3989,
    name: "Batcycle Speed Console",
    preview: (
      <section className="comic-3989">
        <div className="comic-3989__top">
          <span>
            <i className="ri-motorbike-fill"></i>
          </span>

          <div>
            <small>HIGH SPEED UNIT</small>
            <h3>BATCYCLE</h3>
          </div>

          <strong>SPORT</strong>
        </div>

        <div className="comic-3989__speed">
          <span>214</span>
          <small>KM/H</small>

          <div className="comic-3989__meter">
            <span></span>
          </div>
        </div>

        <div className="comic-3989__info">
          <div>
            <i className="ri-battery-charge-fill"></i>
            <span>
              <small>POWER</small>
              <strong>86%</strong>
            </span>
          </div>

          <div>
            <i className="ri-route-fill"></i>
            <span>
              <small>RANGE</small>
              <strong>126 KM</strong>
            </span>
          </div>

          <div>
            <i className="ri-temp-hot-line"></i>
            <span>
              <small>ENGINE</small>
              <strong>92°C</strong>
            </span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3989">
    <div class="comic-3989__top">
        <span>
            <i class="ri-motorbike-fill"></i>
        </span>

        <div>
            <small>HIGH SPEED UNIT</small>
            <h3>BATCYCLE</h3>
        </div>

        <strong>SPORT</strong>
    </div>

    <div class="comic-3989__speed">
        <span>214</span>
        <small>KM/H</small>

        <div class="comic-3989__meter">
            <span></span>
        </div>
    </div>

    <div class="comic-3989__info">
        <div>
            <i class="ri-battery-charge-fill"></i>
            <span>
                <small>POWER</small>
                <strong>86%</strong>
            </span>
        </div>

        <div>
            <i class="ri-route-fill"></i>
            <span>
                <small>RANGE</small>
                <strong>126 KM</strong>
            </span>
        </div>

        <div>
            <i class="ri-temp-hot-line"></i>
            <span>
                <small>ENGINE</small>
                <strong>92°C</strong>
            </span>
        </div>
    </div>
</section>`,
    css: `.comic-3989{position:relative;width:335px;max-width:100%;padding:14px;overflow:hidden;border:4px solid #111;background:#facc15;color:#111;box-shadow:8px 8px 0 #ef4444;font-family:Arial,Helvetica,sans-serif}
.comic-3989::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(-25deg,transparent 0 14px,rgba(17,17,17,.08) 14px 17px)}
.comic-3989__top{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3989__top>span{width:43px;height:43px;display:grid;place-items:center;flex:0 0 43px;border:3px solid #111;background:#111;color:#facc15;box-shadow:3px 3px 0 #ef4444;font-size:20px;transform:rotate(-5deg);transition:transform .2s ease}
.comic-3989__top>div{flex:1}
.comic-3989__top small{font-size:6px;font-weight:900;letter-spacing:1.2px;color:#7f1d1d}
.comic-3989__top h3{margin:3px 0 0;font:900 17px/1 Arial Black,Arial,sans-serif}
.comic-3989__top>strong{padding:5px;border:2px solid #111;background:#ef4444;color:#fff;font-size:5px;transform:rotate(4deg)}
.comic-3989__speed{position:relative;z-index:2;margin-top:13px;padding:11px;border:3px solid #111;background:#fff;box-shadow:4px 4px 0 #111}
.comic-3989__speed>span{font:900 35px/.8 Arial Black,Arial,sans-serif}
.comic-3989__speed>small{margin-left:5px;font-size:6px;font-weight:900}
.comic-3989__meter{height:14px;margin-top:10px;padding:2px;border:2px solid #111;background:#e5e7eb}
.comic-3989__meter span{display:block;width:84%;height:100%;background:#ef4444;transition:width .25s ease}
.comic-3989__info{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}
.comic-3989__info>div{display:flex;align-items:center;gap:5px;padding:7px 5px;border:2px solid #111;background:#fff}
.comic-3989__info i{font-size:13px;color:#dc2626}
.comic-3989__info span{display:flex;flex-direction:column}
.comic-3989__info small{font-size:4px;font-weight:900;color:#64748b}
.comic-3989__info strong{margin-top:2px;font-size:6px}
.comic-3989:hover .comic-3989__top>span{transform:rotate(7deg) scale(1.1)}
.comic-3989:hover .comic-3989__meter span{width:97%}`,
  },
  {
    id: 3990,
    name: "Batwing Flight Telemetry",
    preview: (
      <section className="comic-3990">
        <div className="comic-3990__header">
          <div>
            <small>AERIAL COMMAND</small>
            <h3>BATWING</h3>
          </div>

          <span>
            <i className="ri-flight-takeoff-fill"></i>
            AIRBORNE
          </span>
        </div>

        <div className="comic-3990__radar">
          <span className="comic-3990__ring comic-3990__ring--1"></span>
          <span className="comic-3990__ring comic-3990__ring--2"></span>

          <span className="comic-3990__plane">
            <i className="ri-plane-fill"></i>
          </span>

          <span className="comic-3990__contact comic-3990__contact--1"></span>
          <span className="comic-3990__contact comic-3990__contact--2"></span>
        </div>

        <div className="comic-3990__telemetry">
          <div>
            <small>ALTITUDE</small>
            <strong>7,420 FT</strong>
          </div>

          <div>
            <small>SPEED</small>
            <strong>612 KM/H</strong>
          </div>

          <div>
            <small>HEADING</small>
            <strong>NE 042°</strong>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3990">
    <div class="comic-3990__header">
        <div>
            <small>AERIAL COMMAND</small>
            <h3>BATWING</h3>
        </div>

        <span>
            <i class="ri-flight-takeoff-fill"></i>
            AIRBORNE
        </span>
    </div>

    <div class="comic-3990__radar">
        <span class="comic-3990__ring comic-3990__ring--1"></span>
        <span class="comic-3990__ring comic-3990__ring--2"></span>

        <span class="comic-3990__plane">
            <i class="ri-plane-fill"></i>
        </span>

        <span class="comic-3990__contact comic-3990__contact--1"></span>
        <span class="comic-3990__contact comic-3990__contact--2"></span>
    </div>

    <div class="comic-3990__telemetry">
        <div>
            <small>ALTITUDE</small>
            <strong>7,420 FT</strong>
        </div>

        <div>
            <small>SPEED</small>
            <strong>612 KM/H</strong>
        </div>

        <div>
            <small>HEADING</small>
            <strong>NE 042°</strong>
        </div>
    </div>
</section>`,
    css: `.comic-3990{position:relative;width:345px;max-width:100%;padding:14px;border:4px solid #111;background:#172554;color:#fff;box-shadow:8px 8px 0 #38bdf8;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3990::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3990__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3990__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#7dd3fc}
.comic-3990__header h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3990__header>span{display:flex;align-items:center;gap:4px;padding:5px 6px;border:2px solid #111;background:#38bdf8;color:#111;font-size:5px;font-weight:900}
.comic-3990__radar{position:relative;height:135px;margin-top:13px;overflow:hidden;border:3px solid #111;background:#1e3a8a;box-shadow:4px 4px 0 #111}
.comic-3990__radar::before,.comic-3990__radar::after{content:"";position:absolute;background:#2563eb}
.comic-3990__radar::before{left:50%;top:0;width:2px;height:100%}
.comic-3990__radar::after{left:0;top:50%;width:100%;height:2px}
.comic-3990__ring{position:absolute;left:50%;top:50%;border:2px solid #60a5fa;border-radius:50%;transform:translate(-50%,-50%)}
.comic-3990__ring--1{width:70px;height:70px}
.comic-3990__ring--2{width:120px;height:120px}
.comic-3990__plane{position:absolute;left:50%;top:50%;z-index:3;width:41px;height:41px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:18px;transform:translate(-50%,-50%) rotate(-15deg);transition:transform .22s ease}
.comic-3990__contact{position:absolute;width:11px;height:11px;border:2px solid #111;border-radius:50%;background:#ef4444}
.comic-3990__contact--1{left:48px;top:32px}
.comic-3990__contact--2{right:57px;bottom:28px;background:#22c55e}
.comic-3990__telemetry{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}
.comic-3990__telemetry div{padding:7px 4px;border:2px solid #111;background:#fff;color:#111;text-align:center}
.comic-3990__telemetry small{display:block;font-size:4px;font-weight:900;color:#64748b}
.comic-3990__telemetry strong{display:block;margin-top:4px;font-size:6px}
.comic-3990:hover .comic-3990__plane{transform:translate(-50%,-50%) rotate(12deg) scale(1.12)}`,
  },
  {
    id: 3991,
    name: "Batboat Sonar Console",
    preview: (
      <section className="comic-3991">
        <div className="comic-3991__top">
          <span className="comic-3991__boat">
            <i className="ri-ship-fill"></i>
          </span>

          <div>
            <small>MARINE UNIT</small>
            <h3>BATBOAT SONAR</h3>
          </div>

          <span className="comic-3991__depth">28M</span>
        </div>

        <div className="comic-3991__sonar">
          <span className="comic-3991__sonar-ring comic-3991__sonar-ring--1"></span>
          <span className="comic-3991__sonar-ring comic-3991__sonar-ring--2"></span>
          <span className="comic-3991__sonar-ring comic-3991__sonar-ring--3"></span>
          <span className="comic-3991__sweep"></span>
          <span className="comic-3991__blip comic-3991__blip--1"></span>
          <span className="comic-3991__blip comic-3991__blip--2"></span>
        </div>

        <div className="comic-3991__footer">
          <span>
            <i className="ri-radar-line"></i>2 CONTACTS
          </span>

          <button type="button">PING SONAR</button>
        </div>
      </section>
    ),
    html: `<section class="comic-3991">
    <div class="comic-3991__top">
        <span class="comic-3991__boat">
            <i class="ri-ship-fill"></i>
        </span>

        <div>
            <small>MARINE UNIT</small>
            <h3>BATBOAT SONAR</h3>
        </div>

        <span class="comic-3991__depth">28M</span>
    </div>

    <div class="comic-3991__sonar">
        <span class="comic-3991__sonar-ring comic-3991__sonar-ring--1"></span>
        <span class="comic-3991__sonar-ring comic-3991__sonar-ring--2"></span>
        <span class="comic-3991__sonar-ring comic-3991__sonar-ring--3"></span>
        <span class="comic-3991__sweep"></span>
        <span class="comic-3991__blip comic-3991__blip--1"></span>
        <span class="comic-3991__blip comic-3991__blip--2"></span>
    </div>

    <div class="comic-3991__footer">
        <span>
            <i class="ri-radar-line"></i>
            2 CONTACTS
        </span>

        <button type="button">PING SONAR</button>
    </div>
</section>`,
    css: `.comic-3991{position:relative;width:330px;max-width:100%;padding:14px;border:4px solid #111;background:#0e7490;color:#fff;box-shadow:8px 8px 0 #facc15;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3991::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.11) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3991__top{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3991__boat{width:40px;height:40px;display:grid;place-items:center;flex:0 0 40px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:18px;transform:rotate(-5deg);transition:transform .2s ease}
.comic-3991__top>div{flex:1}
.comic-3991__top small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#cffafe}
.comic-3991__top h3{margin:3px 0 0;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3991__depth{padding:5px 6px;border:2px solid #111;background:#fff;color:#111;font-size:6px;font-weight:900}
.comic-3991__sonar{position:relative;width:154px;height:154px;margin:13px auto 0;border:4px solid #111;border-radius:50%;background:#083344;box-shadow:4px 4px 0 #111;overflow:hidden}
.comic-3991__sonar::before,.comic-3991__sonar::after{content:"";position:absolute;background:#155e75}
.comic-3991__sonar::before{left:50%;top:0;width:2px;height:100%}
.comic-3991__sonar::after{left:0;top:50%;width:100%;height:2px}
.comic-3991__sonar-ring{position:absolute;left:50%;top:50%;border:2px solid #0891b2;border-radius:50%;transform:translate(-50%,-50%)}
.comic-3991__sonar-ring--1{width:45px;height:45px}
.comic-3991__sonar-ring--2{width:86px;height:86px}
.comic-3991__sonar-ring--3{width:124px;height:124px}
.comic-3991__sweep{position:absolute;left:50%;top:50%;width:65px;height:3px;background:#22c55e;transform-origin:left center;transform:rotate(-35deg);transition:transform .3s ease}
.comic-3991__blip{position:absolute;width:10px;height:10px;border:2px solid #111;border-radius:50%;background:#facc15}
.comic-3991__blip--1{left:41px;top:37px}
.comic-3991__blip--2{right:32px;bottom:45px;background:#ef4444}
.comic-3991__footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;margin-top:11px}
.comic-3991__footer>span{display:flex;align-items:center;gap:4px;font-size:6px;font-weight:900}
.comic-3991__footer button{padding:8px 9px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3991:hover .comic-3991__boat{transform:rotate(6deg) scale(1.08)}
.comic-3991:hover .comic-3991__sweep{transform:rotate(70deg)}
.comic-3991__footer button:hover{background:#fff;transform:translate(-2px,-2px)}`,
  },
  {
    id: 3992,
    name: "Bat Garage Status Board",
    preview: (
      <section className="comic-3992">
        <div className="comic-3992__header">
          <div>
            <small>BATCAVE</small>
            <h3>VEHICLE BAY</h3>
          </div>

          <span>4 / 5 READY</span>
        </div>

        <div className="comic-3992__list">
          <div className="comic-3992__row">
            <span className="comic-3992__icon">
              <i className="ri-roadster-fill"></i>
            </span>
            <span>
              <strong>BATMOBILE</strong>
              <small>BAY 01</small>
            </span>
            <strong className="comic-3992__ready">READY</strong>
          </div>

          <div className="comic-3992__row">
            <span className="comic-3992__icon">
              <i className="ri-motorbike-fill"></i>
            </span>
            <span>
              <strong>BATCYCLE</strong>
              <small>BAY 02</small>
            </span>
            <strong className="comic-3992__ready">READY</strong>
          </div>

          <div className="comic-3992__row">
            <span className="comic-3992__icon">
              <i className="ri-plane-fill"></i>
            </span>
            <span>
              <strong>BATWING</strong>
              <small>BAY 03</small>
            </span>
            <strong className="comic-3992__service">SERVICE</strong>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3992">
    <div class="comic-3992__header">
        <div>
            <small>BATCAVE</small>
            <h3>VEHICLE BAY</h3>
        </div>

        <span>4 / 5 READY</span>
    </div>

    <div class="comic-3992__list">
        <div class="comic-3992__row">
            <span class="comic-3992__icon">
                <i class="ri-roadster-fill"></i>
            </span>

            <span>
                <strong>BATMOBILE</strong>
                <small>BAY 01</small>
            </span>

            <strong class="comic-3992__ready">READY</strong>
        </div>

        <div class="comic-3992__row">
            <span class="comic-3992__icon">
                <i class="ri-motorbike-fill"></i>
            </span>

            <span>
                <strong>BATCYCLE</strong>
                <small>BAY 02</small>
            </span>

            <strong class="comic-3992__ready">READY</strong>
        </div>

        <div class="comic-3992__row">
            <span class="comic-3992__icon">
                <i class="ri-plane-fill"></i>
            </span>

            <span>
                <strong>BATWING</strong>
                <small>BAY 03</small>
            </span>

            <strong class="comic-3992__service">SERVICE</strong>
        </div>
    </div>
</section>`,
    css: `.comic-3992{position:relative;width:340px;max-width:100%;padding:14px;border:4px solid #111;background:#f8fafc;color:#111;box-shadow:8px 8px 0 #2563eb;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3992::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.08) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3992__header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.comic-3992__header small{font-size:6px;font-weight:900;letter-spacing:1.4px;color:#2563eb}
.comic-3992__header h3{margin:4px 0 0;font:900 18px/1 Arial Black,Arial,sans-serif}
.comic-3992__header>span{padding:5px 6px;border:2px solid #111;background:#facc15;font-size:5px;font-weight:900;transform:rotate(3deg)}
.comic-3992__list{position:relative;z-index:2;display:grid;gap:8px;margin-top:13px}
.comic-3992__row{display:flex;align-items:center;gap:9px;padding:8px;border:3px solid #111;background:#fff;box-shadow:3px 3px 0 #111;transition:transform .18s ease,background .18s ease}
.comic-3992__icon{width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;background:#2563eb;color:#fff;font-size:18px}
.comic-3992__row>span:nth-child(2){display:flex;flex:1;flex-direction:column}
.comic-3992__row>span:nth-child(2)>strong{font-size:8px}
.comic-3992__row small{margin-top:3px;color:#64748b;font-size:5px;font-weight:900}
.comic-3992__ready,.comic-3992__service{padding:4px 5px;border:2px solid #111;font-size:5px}
.comic-3992__ready{background:#22c55e}
.comic-3992__service{background:#ef4444;color:#fff}
.comic-3992__row:hover{background:#dbeafe;transform:translate(-2px,-2px)}
.comic-3992__row:hover .comic-3992__icon{background:#facc15;color:#111}`,
  },
  {
    id: 3993,
    name: "Batmobile Pursuit Console",
    preview: (
      <section className="comic-3993">
        <div className="comic-3993__top">
          <span className="comic-3993__alert">
            <i className="ri-alarm-warning-fill"></i>
          </span>

          <div>
            <small>PURSUIT MODE</small>
            <h3>TARGET LOCKED</h3>
          </div>

          <span className="comic-3993__distance">1.2 KM</span>
        </div>

        <div className="comic-3993__route">
          <span className="comic-3993__path"></span>

          <span className="comic-3993__vehicle">
            <i className="ri-roadster-fill"></i>
          </span>

          <span className="comic-3993__target">
            <i className="ri-crosshair-2-fill"></i>
          </span>

          <span className="comic-3993__street">GOTHAM EXPRESSWAY</span>
        </div>

        <div className="comic-3993__bottom">
          <div>
            <small>SPEED</small>
            <strong>196</strong>
            <span>KM/H</span>
          </div>

          <button type="button">
            <i className="ri-flashlight-fill"></i>
            BOOST
          </button>

          <div>
            <small>ETA</small>
            <strong>01:42</strong>
          </div>
        </div>
      </section>
    ),
    html: `<section class="comic-3993">
    <div class="comic-3993__top">
        <span class="comic-3993__alert">
            <i class="ri-alarm-warning-fill"></i>
        </span>

        <div>
            <small>PURSUIT MODE</small>
            <h3>TARGET LOCKED</h3>
        </div>

        <span class="comic-3993__distance">1.2 KM</span>
    </div>

    <div class="comic-3993__route">
        <span class="comic-3993__path"></span>

        <span class="comic-3993__vehicle">
            <i class="ri-roadster-fill"></i>
        </span>

        <span class="comic-3993__target">
            <i class="ri-crosshair-2-fill"></i>
        </span>

        <span class="comic-3993__street">GOTHAM EXPRESSWAY</span>
    </div>

    <div class="comic-3993__bottom">
        <div>
            <small>SPEED</small>
            <strong>196</strong>
            <span>KM/H</span>
        </div>

        <button type="button">
            <i class="ri-flashlight-fill"></i>
            BOOST
        </button>

        <div>
            <small>ETA</small>
            <strong>01:42</strong>
        </div>
    </div>
</section>`,
    css: `.comic-3993{position:relative;width:350px;max-width:100%;padding:14px;border:4px solid #111;background:#ef4444;color:#fff;box-shadow:8px 8px 0 #111;font-family:Arial,Helvetica,sans-serif;overflow:hidden}
.comic-3993::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(17,17,17,.2) 1.1px,transparent 1.4px);background-size:8px 8px}
.comic-3993__top{position:relative;z-index:2;display:flex;align-items:center;gap:9px}
.comic-3993__alert{width:39px;height:39px;display:grid;place-items:center;flex:0 0 39px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:18px;transform:rotate(-5deg);transition:transform .2s ease}
.comic-3993__top>div{flex:1}
.comic-3993__top small{font-size:6px;font-weight:900;letter-spacing:1.3px;color:#fee2e2}
.comic-3993__top h3{margin:3px 0 0;font:900 14px/1 Arial Black,Arial,sans-serif}
.comic-3993__distance{padding:5px 6px;border:2px solid #111;background:#fff;color:#111;font-size:6px;font-weight:900}
.comic-3993__route{position:relative;height:130px;margin-top:13px;overflow:hidden;border:3px solid #111;background:#172554;box-shadow:4px 4px 0 #111}
.comic-3993__route::before{content:"";position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:20px 20px}
.comic-3993__path{position:absolute;left:20px;right:20px;top:62px;height:10px;border:3px solid #111;background:#60a5fa;transform:rotate(-8deg)}
.comic-3993__vehicle,.comic-3993__target{position:absolute;z-index:3;width:39px;height:39px;display:grid;place-items:center;border:3px solid #111;border-radius:50%;box-shadow:3px 3px 0 #111;font-size:17px;transition:transform .2s ease}
.comic-3993__vehicle{left:43px;bottom:23px;background:#facc15;color:#111}
.comic-3993__target{right:43px;top:23px;background:#ef4444;color:#fff}
.comic-3993__street{position:absolute;left:9px;top:8px;padding:4px 5px;border:2px solid #111;background:#fff;color:#111;font-size:5px;font-weight:900}
.comic-3993__bottom{position:relative;z-index:2;display:grid;grid-template-columns:1fr 95px 1fr;align-items:center;gap:7px;margin-top:11px}
.comic-3993__bottom>div{padding:7px 4px;border:2px solid #111;background:#fff;color:#111;text-align:center}
.comic-3993__bottom small{display:block;font-size:4px;font-weight:900;color:#64748b}
.comic-3993__bottom strong{display:inline-block;margin-top:3px;font:900 11px/1 Arial Black,Arial,sans-serif}
.comic-3993__bottom>div>span{margin-left:2px;font-size:4px;font-weight:900}
.comic-3993__bottom button{height:42px;display:flex;align-items:center;justify-content:center;gap:5px;border:3px solid #111;background:#facc15;color:#111;box-shadow:3px 3px 0 #111;font-size:6px;font-weight:900;cursor:pointer;transition:transform .18s ease,background .18s ease}
.comic-3993:hover .comic-3993__alert{transform:rotate(7deg) scale(1.1)}
.comic-3993:hover .comic-3993__vehicle{transform:translate(16px,-4px) rotate(-5deg)}
.comic-3993__bottom button:hover{background:#60a5fa;transform:translate(-2px,-2px)}`,
  },
];
