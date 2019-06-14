const express = require("express");
const router = express.Router();
const members = require("../..//Members");
const uuid = require("uuid");

// Get all Members
router.get("/", (req, res) => res.json(members));

// Get a Specific Member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

//  Create a Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and an email" });
  }
  members.push(newMember);
  // res.json(members);
  res.redirect('/');
});

// Update a Member
router.put("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const udpMember = req.body;
    members.forEach(member => {
      if (member.id == parseInt(req.params.id)) {
        member.name = udpMember.name ? udpMember.name : member.name;
        member.email = udpMember.email ? udpMember.email : member.email;
        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete a Specific Member
router.delete("/:id", (req, res) => {
  const found = members.find(member => member.id === parseInt(req.params.id));

  if (found) {
    // Delete
    const index = members.indexOf(found);
    members.splice(index,1);
    res.json({
      msg: "Member deleted",
      // members: members.filter(member => member.id !== parseInt(req.params.id))
      members: members
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
