import "../pages/All.css";

export const skeletons = [
  {
    id: 1390,
    name: "Profile Skeleton",
    preview: (
      <div className="skeleton-1390">
        <div className="skeleton-1390__avatar"></div>
        <div className="skeleton-1390__lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-avatar"></div>
    <div class="Skeleton-lines">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 270px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
}
.Skeleton-avatar {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(
        90deg,
        #e4e4e7 25%,
        #f4f4f5 37%,
        #e4e4e7 63%
    );
    background-size: 400% 100%;
    animation: shimmer 1.4s infinite;
}
.Skeleton-lines {
    flex: 1;
}
.Skeleton-lines span {
    display: block;
    height: 8px;
    margin-bottom: 7px;
    border-radius: 4px;
    background: linear-gradient(
        90deg,
        #e4e4e7 25%,
        #f4f4f5 37%,
        #e4e4e7 63%
    );
    background-size: 400% 100%;
    animation: shimmer 1.4s infinite;
}
.Skeleton-lines span:nth-child(1) {
    width: 80%;
}
.Skeleton-lines span:nth-child(2) {
    width: 100%;
}
.Skeleton-lines span:nth-child(3) {
    width: 55%;
}
@keyframes shimmer {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
}`,
  },
  {
    id: 1391,
    name: "Dashboard Skeleton",
    preview: (
      <div className="skeleton-1391">
        <div className="skeleton-1391__header"></div>
        <div className="skeleton-1391__grid">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1391__chart"></div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-header"></div>
    <div class="Skeleton-grid">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-chart"></div>
</div>`,
    css: `.Skeleton {
    width: 320px;
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #ffffff;
}
.Skeleton-header {
    width: 45%;
    height: 11px;
    margin-bottom: 13px;
    border-radius: 5px;
    background: #e4e4e7;
}
.Skeleton-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 7px;
}
.Skeleton-grid span {
    height: 45px;
    border-radius: 8px;
    background: #f4f4f5;
}
.Skeleton-chart {
    height: 80px;
    margin-top: 9px;
    border-radius: 9px;
    background:
        linear-gradient(
            135deg,
            transparent 48%,
            #e4e4e7 49%,
            #e4e4e7 51%,
            transparent 52%
        ),
        #f4f4f5;
}`,
  },
  {
    id: 1519,
    name: "Profile Skeleton",
    preview: (
      <div className="skeleton-1519">
        <div className="skeleton-1519__avatar"></div>
        <div className="skeleton-1519__content">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-avatar"></div>
    <div class="Skeleton-content">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 280px;
    padding: 14px;
    border-radius: 14px;
    border: 1px solid #e4e4e7;
    background: #fff;
}
.Skeleton-avatar {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(90deg,#e4e4e7,#f4f4f5,#e4e4e7);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
}
.Skeleton-content {
    flex: 1;
}
.Skeleton-content span {
    display: block;
    height: 8px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: linear-gradient(90deg,#e4e4e7,#f4f4f5,#e4e4e7);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
}
.Skeleton-content span:nth-child(1) {
    width: 72%;
}
.Skeleton-content span:nth-child(2) {
    width: 100%;
}
.Skeleton-content span:nth-child(3) {
    width: 52%;
}
@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}`,
  },
  {
    id: 1520,
    name: "Article Skeleton",
    preview: (
      <div className="skeleton-1520">
        <div className="skeleton-1520__image"></div>
        <div className="skeleton-1520__content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-image"></div>
    <div class="Skeleton-content">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 320px;
    overflow: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-image {
    height: 105px;
    background: linear-gradient(110deg,#e4e4e7 30%,#f4f4f5 45%,#e4e4e7 60%);
    background-size: 250% 100%;
    animation: article-shimmer 1.5s linear infinite;
}
.Skeleton-content {
    padding: 14px;
}
.Skeleton-content span {
    display: block;
    height: 8px;
    margin-bottom: 8px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-content span:nth-child(1) {
    width: 35%;
}
.Skeleton-content span:nth-child(2) {
    width: 90%;
}
.Skeleton-content span:nth-child(3) {
    width: 100%;
}
.Skeleton-content span:nth-child(4) {
    width: 65%;
}
@keyframes article-shimmer {
    to {
        background-position: -250% 0;
    }
}`,
  },
  {
    id: 1521,
    name: "Dashboard Skeleton",
    preview: (
      <div className="skeleton-1521">
        <span className="skeleton-1521__title"></span>
        <div className="skeleton-1521__stats">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1521__chart"></div>
      </div>
    ),
    html: `<div class="Skeleton">
    <span class="Skeleton-title"></span>
    <div class="Skeleton-stats">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-chart"></div>
</div>`,
    css: `.Skeleton {
    width: 330px;
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Skeleton-title {
    display: block;
    width: 35%;
    height: 10px;
    margin-bottom: 13px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-stats {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 8px;
}
.Skeleton-stats span {
    height: 50px;
    border-radius: 10px;
    background: #f4f4f5;
}
.Skeleton-chart {
    height: 105px;
    margin-top: 9px;
    border-radius: 10px;
    background: linear-gradient(135deg,#f4f4f5 25%,#e4e4e7 25%,#e4e4e7 28%,#f4f4f5 28%);
    background-size: 16px 16px;
}`,
  },
  {
    id: 1522,
    name: "Product Skeleton",
    preview: (
      <div className="skeleton-1522">
        <div className="skeleton-1522__image"></div>
        <div className="skeleton-1522__body">
          <span></span>
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-image"></div>
    <div class="Skeleton-body">
        <span></span>
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 220px;
    overflow: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-image {
    height: 150px;
    background: #f4f4f5;
}
.Skeleton-body {
    padding: 13px;
}
.Skeleton-body > span {
    display: block;
    height: 8px;
    margin-bottom: 8px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-body > span:first-child {
    width: 42%;
}
.Skeleton-body > span:nth-child(2) {
    width: 80%;
}
.Skeleton-body > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
}
.Skeleton-body > div span {
    width: 34%;
    height: 9px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-body > div span:last-child {
    width: 22%;
}`,
  },
  {
    id: 1523,
    name: "Chat Skeleton",
    preview: (
      <div className="skeleton-1523">
        <div className="skeleton-1523__message">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="skeleton-1523__message skeleton-1523__message--reverse">
          <span></span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-message">
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="Skeleton-message Skeleton-message-reverse">
        <span></span>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 310px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-message {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 14px;
}
.Skeleton-message > span {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #e4e4e7;
}
.Skeleton-message > div {
    max-width: 72%;
    padding: 9px 11px;
    border-radius: 11px;
    background: #f4f4f5;
}
.Skeleton-message > div span {
    display: block;
    height: 7px;
    margin-bottom: 6px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-message > div span:last-child {
    width: 65%;
    margin-bottom: 0;
}
.Skeleton-message--reverse {
    flex-direction: row-reverse;
}
.Skeleton-message--reverse > div {
    background: #e4e4e7;
}`,
  },
  {
    id: 1524,
    name: "Table Skeleton",
    preview: (
      <div className="skeleton-1524">
        <div className="skeleton-1524__row skeleton-1524__row--head">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1524__row">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1524__row">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1524__row">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-row Skeleton-row-head">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 350px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Skeleton-row {
    display: grid;
    grid-template-columns: 1.3fr 1fr .8fr .6fr;
    gap: 10px;
    padding: 10px 6px;
    border-top: 1px solid #f4f4f5;
}
.Skeleton-row span {
    height: 7px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-row span:nth-child(2) {
    width: 80%;
}
.Skeleton-row span:nth-child(3) {
    width: 65%;
}
.Skeleton-row span:nth-child(4) {
    width: 55%;
}
.Skeleton-row--head {
    border-top: none;
}
.Skeleton-row--head span {
    background: #d4d4d8;
}`,
  },
  {
    id: 1525,
    name: "Feed Skeleton",
    preview: (
      <div className="skeleton-1525">
        <div className="skeleton-1525__top">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="skeleton-1525__image"></div>
        <div className="skeleton-1525__bottom">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-top">
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="Skeleton-image"></div>
    <div class="Skeleton-bottom">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 300px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Skeleton-top {
    display: flex;
    align-items: center;
    gap: 9px;
}
.Skeleton-top > span {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #e4e4e7;
}
.Skeleton-top > div {
    flex: 1;
}
.Skeleton-top > div span {
    display: block;
    height: 7px;
    margin-bottom: 6px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-top > div span:last-child {
    width: 55%;
}
.Skeleton-image {
    height: 115px;
    margin-top: 12px;
    border-radius: 11px;
    background: #f4f4f5;
}
.Skeleton-bottom {
    display: flex;
    gap: 8px;
    margin-top: 11px;
}
.Skeleton-bottom span {
    width: 30px;
    height: 9px;
    border-radius: 999px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1526,
    name: "Video Skeleton",
    preview: (
      <div className="skeleton-1526">
        <div className="skeleton-1526__video">
          <i className="fa-solid fa-play"></i>
        </div>
        <div className="skeleton-1526__title"></div>
        <div className="skeleton-1526__meta"></div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-video">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class="Skeleton-title"></div>
    <div class="Skeleton-meta"></div>
</div>`,
    css: `.Skeleton {
    width: 300px;
}
.Skeleton-video {
    height: 165px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: #e4e4e7;
    color: #d4d4d8;
}
.Skeleton-video i {
    font-size: 20px;
}
.Skeleton-title {
    width: 75%;
    height: 10px;
    margin-top: 12px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-meta {
    width: 42%;
    height: 8px;
    margin-top: 7px;
    border-radius: 999px;
    background: #f4f4f5;
}`,
  },
  {
    id: 1527,
    name: "Pricing Skeleton",
    preview: (
      <div className="skeleton-1527">
        <span className="skeleton-1527__small"></span>
        <span className="skeleton-1527__price"></span>
        <span></span>
        <span></span>
        <span></span>
        <button disabled>Choose plan</button>
      </div>
    ),
    html: `<div class="Skeleton">
    <span class="Skeleton-small"></span>
    <span class="Skeleton-price"></span>
    <span></span>
    <span></span>
    <span></span>
    <button disabled>Choose plan</button>
</div>`,
    css: `.Skeleton {
    width: 210px;
    padding: 18px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Skeleton-small {
    display: block;
    width: 35%;
    height: 8px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-price {
    display: block;
    width: 55%;
    height: 25px;
    margin: 14px 0;
    border-radius: 6px;
    background: #e4e4e7;
}
.Skeleton > span:not(.Skeleton-small):not(.Skeleton-price) {
    display: block;
    width: 100%;
    height: 7px;
    margin-bottom: 8px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton > span:nth-of-type(4) {
    width: 78%;
}
.Skeleton > span:nth-of-type(5) {
    width: 60%;
}
.Skeleton button {
    width: 100%;
    height: 34px;
    margin-top: 11px;
    border: none;
    border-radius: 8px;
    background: #e4e4e7;
    color: #a1a1aa;
}`,
  },
  {
    id: 1528,
    name: "Search Skeleton",
    preview: (
      <div className="skeleton-1528">
        <div className="skeleton-1528__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span></span>
        </div>
        <div className="skeleton-1528__result">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="skeleton-1528__result">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span></span>
    </div>
    <div class="Skeleton-result">
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="Skeleton-result">
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 310px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #fff;
}
.Skeleton-search {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 0 10px;
    border-radius: 9px;
    background: #f4f4f5;
    color: #d4d4d8;
}
.Skeleton-search span {
    width: 45%;
    height: 7px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-result {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 13px;
}
.Skeleton-result > span {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: #e4e4e7;
}
.Skeleton-result > div {
    flex: 1;
}
.Skeleton-result > div span {
    display: block;
    width: 85%;
    height: 7px;
    margin-bottom: 6px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-result > div span:last-child {
    width: 55%;
}`,
  },
  {
    id: 1529,
    name: "Comments Skeleton",
    preview: (
      <div className="skeleton-1529">
        <div className="skeleton-1529__comment">
          <span></span>
          <div>
            <strong></strong>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="skeleton-1529__comment">
          <span></span>
          <div>
            <strong></strong>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-comment">
        <span></span>
        <div>
            <strong></strong>
            <p></p>
            <p></p>
        </div>
    </div>
    <div class="Skeleton-comment">
        <span></span>
        <div>
            <strong></strong>
            <p></p>
            <p></p>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 310px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-comment {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 16px;
}
.Skeleton-comment:last-child {
    margin-bottom: 0;
}
.Skeleton-comment > span {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #e4e4e7;
}
.Skeleton-comment > div {
    flex: 1;
}
.Skeleton-comment strong {
    display: block;
    width: 32%;
    height: 8px;
    margin-bottom: 8px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-comment p {
    width: 100%;
    height: 7px;
    margin: 0 0 6px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-comment p:last-child {
    width: 72%;
}`,
  },
  {
    id: 1530,
    name: "Stats Skeleton",
    preview: (
      <div className="skeleton-1530">
        <div>
          <span></span>
          <strong></strong>
        </div>
        <div>
          <span></span>
          <strong></strong>
        </div>
        <div>
          <span></span>
          <strong></strong>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div>
        <span></span>
        <strong></strong>
    </div>
    <div>
        <span></span>
        <strong></strong>
    </div>
    <div>
        <span></span>
        <strong></strong>
    </div>
</div>`,
    css: `.Skeleton {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 8px;
    width: 320px;
}
.Skeleton > div {
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Skeleton span {
    display: block;
    width: 45%;
    height: 7px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton strong {
    display: block;
    width: 75%;
    height: 18px;
    border-radius: 6px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1531,
    name: "Navigation Skeleton",
    preview: (
      <div className="skeleton-1531">
        <span className="skeleton-1531__logo"></span>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="skeleton-1531__avatar"></span>
      </div>
    ),
    html: `<div class="Skeleton">
    <span class="Skeleton-logo"></span>
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <span class="Skeleton-avatar"></span>
</div>`,
    css: `.Skeleton {
    width: 330px;
    height: 52px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0 13px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Skeleton-logo {
    width: 27px;
    height: 27px;
    border-radius: 8px;
    background: #e4e4e7;
}
.Skeleton > div {
    display: flex;
    align-items: center;
    gap: 13px;
    flex: 1;
}
.Skeleton > div span {
    width: 40px;
    height: 7px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #e4e4e7;
}`,
  },
  {
    id: 1532,
    name: "Form Skeleton",
    preview: (
      <div className="skeleton-1532">
        <span></span>
        <div></div>
        <span></span>
        <div></div>
        <button disabled>Submit</button>
      </div>
    ),
    html: `<div class="Skeleton">
    <span></span>
    <div></div>
    <span></span>
    <div></div>
    <button disabled>Submit</button>
</div>`,
    css: `.Skeleton {
    width: 270px;
    padding: 16px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #fff;
}
.Skeleton > span {
    display: block;
    width: 25%;
    height: 7px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton > div {
    width: 100%;
    height: 38px;
    margin-bottom: 13px;
    border-radius: 8px;
    background: #f4f4f5;
}
.Skeleton button {
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 8px;
    background: #e4e4e7;
    color: #a1a1aa;
}`,
  },
  {
    id: 1533,
    name: "Calendar Skeleton",
    preview: (
      <div className="skeleton-1533">
        <div className="skeleton-1533__header">
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1533__grid">
          {Array.from({ length: 21 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-header">
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-grid">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 240px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
}
.Skeleton-header span {
    width: 55px;
    height: 9px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-header span:last-child {
    width: 35px;
}
.Skeleton-grid {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 6px;
}
.Skeleton-grid span {
    aspect-ratio: 1;
    border-radius: 6px;
    background: #f4f4f5;
}`,
  },
  {
    id: 1534,
    name: "Stats Chart Skeleton",
    preview: (
      <div className="skeleton-1534">
        <span className="skeleton-1534__title"></span>
        <div className="skeleton-1534__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <span class="Skeleton-title"></span>
    <div class="Skeleton-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 300px;
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-title {
    display: block;
    width: 30%;
    height: 8px;
    margin-bottom: 20px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-bars {
    height: 105px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
}
.Skeleton-bars span {
    flex: 1;
    min-height: 25%;
    border-radius: 7px 7px 2px 2px;
    background: linear-gradient(#e4e4e7,#f4f4f5);
}
.Skeleton-bars span:nth-child(1) {
    height: 42%;
}
.Skeleton-bars span:nth-child(2) {
    height: 72%;
}
.Skeleton-bars span:nth-child(3) {
    height: 54%;
}
.Skeleton-bars span:nth-child(4) {
    height: 88%;
}
.Skeleton-bars span:nth-child(5) {
    height: 64%;
}
.Skeleton-bars span:nth-child(6) {
    height: 78%;
}`,
  },
  {
    id: 1535,
    name: "Ecommerce List Skeleton",
    preview: (
      <div className="skeleton-1535">
        <div>
          <span></span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <span></span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div>
        <span></span>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div>
        <span></span>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 310px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton > div {
    display: flex;
    gap: 10px;
    padding: 9px 0;
    border-bottom: 1px solid #f4f4f5;
}
.Skeleton > div:last-child {
    border-bottom: none;
}
.Skeleton > div > span {
    width: 46px;
    height: 46px;
    border-radius: 9px;
    background: #e4e4e7;
}
.Skeleton > div > div {
    flex: 1;
}
.Skeleton > div > div span {
    display: block;
    height: 7px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton > div > div span:first-child {
    width: 72%;
}
.Skeleton > div > div span:nth-child(2) {
    width: 90%;
}`,
  },
  {
    id: 1536,
    name: "Team Skeleton",
    preview: (
      <div className="skeleton-1536">
        <div>
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div>
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div>
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div>
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 280px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton > div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}
.Skeleton > div:last-child {
    margin-bottom: 0;
}
.Skeleton > div > span {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #e4e4e7;
}
.Skeleton > div > div {
    flex: 1;
}
.Skeleton > div > div span {
    display: block;
    width: 70%;
    height: 7px;
    margin-bottom: 6px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton > div > div span:last-child {
    width: 45%;
    background: #f4f4f5;
}`,
  },
  {
    id: 1537,
    name: "Hero Skeleton",
    preview: (
      <div className="skeleton-1537">
        <div className="skeleton-1537__copy">
          <span></span>
          <strong></strong>
          <p></p>
          <p></p>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="skeleton-1537__visual"></div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-copy">
        <span></span>
        <strong></strong>
        <p></p>
        <p></p>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="Skeleton-visual"></div>
</div>`,
    css: `.Skeleton {
    width: 360px;
    min-height: 185px;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 15px;
    padding: 18px;
    border-radius: 15px;
    background: #fff;
    border: 1px solid #e4e4e7;
}
.Skeleton-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Skeleton-copy > span {
    width: 35%;
    height: 7px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-copy strong {
    width: 85%;
    height: 19px;
    margin-bottom: 8px;
    border-radius: 6px;
    background: #e4e4e7;
}
.Skeleton-copy p {
    width: 100%;
    height: 6px;
    margin: 0 0 6px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-copy p:nth-of-type(2) {
    width: 78%;
}
.Skeleton-copy > div {
    display: flex;
    gap: 7px;
    margin-top: 10px;
}
.Skeleton-copy > div span {
    width: 62px;
    height: 28px;
    border-radius: 7px;
    background: #e4e4e7;
}
.Skeleton-copy > div span:last-child {
    width: 45px;
    background: #f4f4f5;
}
.Skeleton-visual {
    border-radius: 12px;
    background: linear-gradient(135deg,#e4e4e7,#f4f4f5);
}`,
  },
  {
    id: 1538,
    name: "App Card Skeleton",
    preview: (
      <div className="skeleton-1538">
        <div className="skeleton-1538__icon"></div>
        <div className="skeleton-1538__body">
          <strong></strong>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1538__button"></div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-icon"></div>
    <div class="Skeleton-body">
        <strong></strong>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-button"></div>
</div>`,
    css: `.Skeleton {
    width: 310px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
}
.Skeleton-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #e4e4e7;
}
.Skeleton-body {
    flex: 1;
}
.Skeleton-body strong {
    display: block;
    width: 70%;
    height: 9px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-body span {
    display: block;
    width: 100%;
    height: 6px;
    margin-bottom: 6px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-body span:last-child {
    width: 62%;
}
.Skeleton-button {
    width: 62px;
    height: 30px;
    border-radius: 8px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1539,
    name: "Legendary Dashboard Skeleton",
    preview: (
      <div className="skeleton-1539">
        <div className="skeleton-1539__top">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
          <span></span>
        </div>
        <div className="skeleton-1539__cards">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1539__main">
          <div></div>
          <div></div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-top">
        <span></span>
        <div>
            <span></span>
            <span></span>
        </div>
        <span></span>
    </div>
    <div class="Skeleton-cards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-main">
        <div></div>
        <div></div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 380px;
    padding: 14px;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #09090b;
}
.Skeleton-top {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
}
.Skeleton-top > span:first-child {
    width: 32px;
    height: 32px;
    border-radius: 9px;
    background: #27272a;
}
.Skeleton-top > div {
    flex: 1;
}
.Skeleton-top > div span {
    display: block;
    width: 35%;
    height: 7px;
    margin-bottom: 5px;
    border-radius: 999px;
    background: #27272a;
}
.Skeleton-top > div span:last-child {
    width: 22%;
    background: #18181b;
}
.Skeleton-top > span:last-child {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #27272a;
}
.Skeleton-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    margin-bottom: 9px;
}
.Skeleton-cards span {
    height: 52px;
    border-radius: 9px;
    background: linear-gradient(110deg,#18181b 30%,#27272a 45%,#18181b 60%);
    background-size: 250% 100%;
    animation: legendary-dashboard 1.7s linear infinite;
}
.Skeleton-main {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 8px;
}
.Skeleton-main div {
    height: 105px;
    border-radius: 10px;
    background: #18181b;
}
.Skeleton-main div:first-child {
    background: linear-gradient(110deg,#18181b 30%,#27272a 45%,#18181b 60%);
    background-size: 250% 100%;
    animation: legendary-dashboard 1.7s linear infinite;
}
@keyframes legendary-dashboard {
    to {
        background-position: -250% 0;
    }
}`,
  },
  {
    id: 1540,
    name: "Legendary Profile Skeleton",
    preview: (
      <div className="skeleton-1540">
        <div className="skeleton-1540__cover"></div>
        <div className="skeleton-1540__avatar"></div>
        <div className="skeleton-1540__body">
          <strong></strong>
          <span></span>
          <span></span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-cover"></div>
    <div class="Skeleton-avatar"></div>
    <div class="Skeleton-body">
        <strong></strong>
        <span></span>
        <span></span>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    position: relative;
    width: 300px;
    overflow: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #fff;
}
.Skeleton-cover {
    height: 92px;
    background: linear-gradient(135deg,#dbeafe,#e0e7ff,#f5f3ff);
}
.Skeleton-avatar {
    position: absolute;
    top: 60px;
    left: 18px;
    width: 64px;
    height: 64px;
    border: 4px solid #fff;
    border-radius: 50%;
    background: #e4e4e7;
}
.Skeleton-body {
    padding: 43px 18px 18px;
}
.Skeleton-body strong {
    display: block;
    width: 42%;
    height: 11px;
    margin-bottom: 8px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-body > span {
    display: block;
    width: 80%;
    height: 7px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-body > span:nth-child(3) {
    width: 58%;
}
.Skeleton-body > div {
    display: flex;
    gap: 7px;
    margin-top: 15px;
}
.Skeleton-body > div span {
    width: 48px;
    height: 25px;
    border-radius: 7px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1541,
    name: "Legendary Analytics Skeleton",
    preview: (
      <div className="skeleton-1541">
        <div className="skeleton-1541__header">
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1541__chart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1541__legend">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-header">
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-chart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-legend">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Skeleton {
    width: 340px;
    padding: 16px;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #fff;
}
.Skeleton-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}
.Skeleton-header span:first-child {
    width: 34%;
    height: 10px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-header span:last-child {
    width: 42px;
    height: 25px;
    border-radius: 7px;
    background: #f4f4f5;
}
.Skeleton-chart {
    position: relative;
    height: 130px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 10px;
    border-radius: 11px;
    background: linear-gradient(180deg,#fafafa,#f4f4f5);
}
.Skeleton-chart::before,
.Skeleton-chart::after {
    content: "";
    position: absolute;
    left: 10px;
    right: 10px;
    height: 1px;
    background: #e4e4e7;
}
.Skeleton-chart::before {
    top: 42px;
}
.Skeleton-chart::after {
    top: 82px;
}
.Skeleton-chart span {
    position: relative;
    z-index: 1;
    flex: 1;
    border-radius: 7px 7px 3px 3px;
    background: linear-gradient(#d4d4d8,#e4e4e7);
}
.Skeleton-chart span:nth-child(1) {
    height: 38%;
}
.Skeleton-chart span:nth-child(2) {
    height: 60%;
}
.Skeleton-chart span:nth-child(3) {
    height: 48%;
}
.Skeleton-chart span:nth-child(4) {
    height: 78%;
}
.Skeleton-chart span:nth-child(5) {
    height: 65%;
}
.Skeleton-chart span:nth-child(6) {
    height: 88%;
}
.Skeleton-legend {
    display: flex;
    gap: 10px;
    margin-top: 12px;
}
.Skeleton-legend span {
    width: 45px;
    height: 7px;
    border-radius: 999px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1542,
    name: "Legendary Ecommerce Skeleton",
    preview: (
      <div className="skeleton-1542">
        <div className="skeleton-1542__image"></div>
        <div className="skeleton-1542__content">
          <span className="skeleton-1542__badge"></span>
          <strong></strong>
          <span></span>
          <span></span>
          <div>
            <span></span>
            <button disabled></button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-image"></div>
    <div class="Skeleton-content">
        <span class="Skeleton-badge"></span>
        <strong></strong>
        <span></span>
        <span></span>
        <div>
            <span></span>
            <button disabled></button>
        </div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 240px;
    overflow: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}
.Skeleton-image {
    height: 155px;
    background: linear-gradient(135deg,#f1f5f9,#e2e8f0,#f8fafc);
}
.Skeleton-content {
    padding: 14px;
}
.Skeleton-badge {
    display: block;
    width: 42px;
    height: 15px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: #e4e4e7;
}
.Skeleton-content strong {
    display: block;
    width: 72%;
    height: 11px;
    margin-bottom: 9px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-content > span {
    display: block;
    width: 100%;
    height: 7px;
    margin-bottom: 7px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Skeleton-content > span:nth-child(4) {
    width: 62%;
}
.Skeleton-content > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
}
.Skeleton-content > div span {
    width: 48px;
    height: 11px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Skeleton-content button {
    width: 65px;
    height: 30px;
    border: none;
    border-radius: 8px;
    background: #e4e4e7;
}`,
  },
  {
    id: 1543,
    name: "Legendary Command Center Skeleton",
    preview: (
      <div className="skeleton-1543">
        <div className="skeleton-1543__sidebar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="skeleton-1543__content">
          <div className="skeleton-1543__title"></div>
          <div className="skeleton-1543__cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="skeleton-1543__panel"></div>
        </div>
      </div>
    ),
    html: `<div class="Skeleton">
    <div class="Skeleton-sidebar">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Skeleton-content">
        <div class="Skeleton-title"></div>
        <div class="Skeleton-cards">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="Skeleton-panel"></div>
    </div>
</div>`,
    css: `.Skeleton {
    width: 380px;
    min-height: 190px;
    display: grid;
    grid-template-columns: 68px 1fr;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 15px;
    background: #09090b;
}
.Skeleton-sidebar {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 13px 10px;
    border-right: 1px solid #18181b;
}
.Skeleton-sidebar span {
    width: 100%;
    height: 25px;
    border-radius: 7px;
    background: #18181b;
}
.Skeleton-sidebar span:first-child {
    width: 34px;
    height: 34px;
    align-self: center;
    margin-bottom: 7px;
    border-radius: 10px;
    background: #27272a;
}
.Skeleton-content {
    padding: 15px;
}
.Skeleton-title {
    width: 42%;
    height: 10px;
    margin-bottom: 14px;
    border-radius: 999px;
    background: #27272a;
}
.Skeleton-cards {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 7px;
}
.Skeleton-cards span {
    height: 42px;
    border-radius: 8px;
    background: #18181b;
}
.Skeleton-panel {
    height: 78px;
    margin-top: 8px;
    border-radius: 9px;
    background: linear-gradient(110deg,#18181b 30%,#27272a 45%,#18181b 60%);
    background-size: 250% 100%;
    animation: command-skeleton 1.6s linear infinite;
}
@keyframes command-skeleton {
    to {
        background-position: -250% 0;
    }
}`,
  },
];
