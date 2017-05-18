const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');


const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name.'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]

});

storeSchema.pre('save', function(next){
  if (!this.isModified('name')){
    next(); //skip this
    return //stops the function
  }
  this.slug = slug(this.name);
  next();
  //TODO: Ensure matching names do not share common slugs. "Tim Hortons 1" "Tim Hortons 2"
});

module.exports = mongoose.model('Store', storeSchema);