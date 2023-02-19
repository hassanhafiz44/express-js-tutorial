const router = require("express").Router();

router.get("/", (req, res) => res.json({ message: "Users index route" }));

router.get("/:id", (req, res) =>
  res.json({ message: `${req.params.id} user route` })
);

router.post("/", (req, res) => res.json({ message: "Creating a new user" }));

router.put("/:id", (req, res) =>
  res.json({ message: `Updating ${req.params.id} user` })
);

router.delete("/:id", (req, res) =>
  res.json({ message: `Deleting ${req.params.id} user` })
);

module.exports = router;
