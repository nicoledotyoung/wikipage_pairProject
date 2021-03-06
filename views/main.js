const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) =>
  layout(html` <h3>Pages</h3>
    <hr />
    <form method="GET" action="/wiki/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
    <hr />
    <ul class="list-unstyled">
      ${pages.map((page) => {
        return `<ul>
          <a href="/wiki/${page.slug}" class="btn btn-primary">
            ${page.title}
          </a>
          </ul>`;
      })}
    </ul>`);
