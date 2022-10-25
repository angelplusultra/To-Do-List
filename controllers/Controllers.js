const Item = require("../models/todo");

module.exports = {
  getTodos: async (req, res) => {
    const posts = await Item.find();
    res.render(__dirname + "/../views/index", {
      items: posts.reverse(),
    });
    //  res.send(posts)
  },
  postTodo: async (req, res) => {
    let date = req.body.date;
    let reformattedDate = [
      date.split("-")[1],
      date.split("-")[2],
      date.split("-")[0],
    ].join("-");
    console.log(reformattedDate);

    const post = new Item({
      title: req.body.title,
      content: req.body.description,
      date: reformattedDate,
    });
    await post.save();
    res.redirect("/");
  },

  deleteTodo: async (req, res) => {
    const title = req.body.title;
    console.log(req.body.title);
    await Item.findOneAndDelete({ title: title });
  },
  updateTodo: async (req, res) => {
    const filter = { title: req.body.idTitle };
    const update = { title: req.body.newTitle, content: req.body.newDesc };
    await Item.findOneAndUpdate(filter, update);
    res.redirect("/");

    console.log(req.body);
  },
};
