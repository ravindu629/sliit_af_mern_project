const Staff = require("../models/Staff.model");

const addStaffMember = (req, res) => {
  const { fName, lName, staffId, faculty, nic, phoneNumber, email, password } =
    req.body;

  const staffMember = new Staff({
    fName,
    lName,
    staffId,
    faculty,
    nic,
    phoneNumber,
    email,
    password,
  });

  staffMember
    .save()
    .then((createdStaffMember) => {
      res.json(createdStaffMember);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getStaffMembers = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.json(staffMembers);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getStaffMember = async (req, res) => {
  const userId = req.params.id;

  try {
    const staffMember = await Staff.findById(userId);
    res.json(staffMember);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateStaffMember = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Staff.findById(userId);

    if (!user) {
      return res.status(404).json("There is no staff member to update");
    }

    const {
      fName,
      lName,
      staffId,
      faculty,
      nic,
      phoneNumber,
      email,
      password,
    } = req.body;

    const updatedUser = await Staff.findByIdAndUpdate(userId, {
      fName,
      lName,
      staffId,
      faculty,
      nic,
      phoneNumber,
      email,
      password,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeStaffMember = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Staff.findById(userId);

    if (!user) {
      return res.status(404).json("There is no user to remove");
    }

    const removedUser = await Staff.findByIdAndDelete(userId);
    res.status(200).json(removedUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateUser = async (req, res) => {
  const stfId = req.body.staffId;
  const password = req.body.password;

  try {
    const foundUser = await Staff.findOne({ staffId: stfId });

    if (!foundUser) {
      return res.status(404).json("invalid user");
    } else if (foundUser.password === password) {
      return res.status(200).json(true);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addStaffMember,
  getStaffMembers,
  getStaffMember,
  updateStaffMember,
  removeStaffMember,
  validateUser,
};
