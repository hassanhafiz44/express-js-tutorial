const index = (req, res) => res.json({ message: "Users index" });
const show = (req, res) => res.json({ message: `${req.params.id} user route` });
const store = (req, res) => res.json({ message: "Creating a new user" });
const update = (req, res) =>
  res.json({ message: `Updating ${req.params.id} user` });
const destroy = (req, res) =>
  res.json({ message: `Deleting ${req.params.id} user` });

module.exports = { index, show, store, update, destroy };
