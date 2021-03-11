const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

module.exports = {
  db,
};


const Page = db.define("page", {
    title: Sequelize.STRING;
    slug: Sequelize.TEXT,
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN
});

const User = db.define("user", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})