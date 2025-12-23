const mongoose = require("mongoose")
const ProjectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
     location:{
        type: String,
        required: true
    },
     priceRange:{
        type: String,
        required: true
    },

    highlights: {
    stage: {
      type: String,
    },
    possesionDate: {
      type: Date,
    },
    floor: {
      type: String,
    },
    reraId: {
      type: String,
    },
  },
    about:{
        type: String,
        required: true
    },
   configuration: {
    type: {
      type: String,
    },
    price: {
      type: String,
    },
    size: {
      type: String,
    },
  },
    amenities: {
      sports: [String],
      convenience: [String],
      safety: [String],
      leisure: [String],
      environment: [String],
      furnishing: [String],
    },
    maplocation:{
        type: String
    },
    developer: {
    devname: String,
    totalProjects: String,
    totalYears: String,
    description: String
  },
  images: [String]
})
module.exports = mongoose.model("ProjectSchema", ProjectSchema)