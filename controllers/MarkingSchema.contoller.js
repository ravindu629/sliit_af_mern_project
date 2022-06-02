const MarkingSchema = require("../models/MarkingSchema.model");

const addMarkingSchema = (req, res) => {
  const { faculty, criteria, desc, marks } = req.body;

  const markingSchema = new MarkingSchema({
    faculty,
    criteria,
    desc,
    marks,
  });

  markingSchema
    .save()
    .then((createdMSchema) => {
      res.json(createdMSchema);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getMarkingSchemas = async (req, res) => {
  try {
    const markingSchemas = await MarkingSchema.find();
    res.json(markingSchemas);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateMarkingSchema = async (req, res) => {
  const schemaId = req.params.id;

  try {
    const schema = await MarkingSchema.findById(schemaId);

    if (!schema) {
      return res.status(404).json("There is no marking schema to update");
    }

    const { faculty, criteria, desc, marks } = req.body;

    const updatedSchema = await MarkingSchema.findByIdAndUpdate(schemaId, {
      faculty,
      criteria,
      desc,
      marks,
    });

    res.status(200).json(updatedSchema);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeMarkingSchema = async (req, res) => {
  const schemaId = req.params.id;

  try {
    const schema = await MarkingSchema.findById(schemaId);

    if (!schema) {
      return res.status(404).json("There is no marking schema to remove");
    }

    const removedSchema = await MarkingSchema.findByIdAndDelete(schemaId);
    res.status(200).json(removedSchema);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addMarkingSchema,
  getMarkingSchemas,
  updateMarkingSchema,
  removeMarkingSchema,
};
